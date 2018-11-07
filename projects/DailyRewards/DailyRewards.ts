// This function will control the game's reward heartbeat and is called by a scheduled task
var DailyRewardUpdateLastRewardHeartbeat = function (args: any, context: IPlayFabContext): IDailyRewardUpdateLastRewardHeartbeat {

    var message = "Executing the DailyReward heartbeat - all players will now be able to claim their next reward ";
    log.info(message);

    var headers = {};
    var body = {};
    var url = "http://worldclockapi.com/api/json/utc/now";
    var content = JSON.stringify(body);
    var httpMethod = "get";
    var contentType = "application/json";

    // The pre-defined http object makes synchronous HTTP requests
    var timeResponse = JSON.parse(http.request(url, httpMethod, content, contentType, headers));
    var currentDateTime = new Date(timeResponse.currentDateTime);
    log.debug(currentDateTime.toDateString());
    // Update the title data value to contain current datetime
    server.SetTitleInternalData(
        {
            "Key": "DailyRewardLastRewardHeartbeat",
            "Value": JSON.stringify(currentDateTime.getTime())
        });
    return { messageValue: message };
}
interface IDailyRewardUpdateLastRewardHeartbeat {
    messageValue: string;
}
handlers["DailyRewardUpdateLastRewardHeartbeat"] = DailyRewardUpdateLastRewardHeartbeat;

// This function checks to see how much longer a player must wait to claim theiir next reward
var DailyRewardsCheckRewardAvailability = function (args: any, context: IPlayFabContext): IDailyRewardsCheckRewardAvailability {

    var timeRemaining = 0;
    var message = "Checking whether " + currentPlayerId + " can claim a reward";
    log.info(message);

    var headers = {};
    var body = {};
    var url = "http://worldclockapi.com/api/json/utc/now";
    var content = JSON.stringify(body);
    var httpMethod = "get";
    var contentType = "application/json";

    // Get the current time - the pre-defined http object makes synchronous HTTP requests
    var timeResponse = JSON.parse(http.request(url, httpMethod, content, contentType, headers));
    var currentDateTime = new Date(timeResponse.currentDateTime);
    log.info("Player " + currentPlayerId + " is checking at time " + currentDateTime.toTimeString());

    // Get the title's last reward heartbeat time
    var internalData = server.GetTitleInternalData({}).Data;
    var titleLastRewardHeartbeat = internalData.DailyRewardLastRewardHeartbeat;
    var rewardCycleLengthInMS = parseInt(internalData.DailyRewardDelayTimeInMinutes) * 60 * 1000;
    var nextHeartbeat = parseInt(titleLastRewardHeartbeat) + rewardCycleLengthInMS;
    var nextHeartbeatDate = new Date(nextHeartbeat);

    // Get the player's last reward claim time
    var userData = server.GetUserReadOnlyData({ PlayFabId: currentPlayerId, Keys: ["DailyRewardClaimed", "DailyRewardStreak"] });
    var playerLastRewardClaimed = userData.Data["DailyRewardClaimed"].Value;
    var playerRewardStreak = parseInt(userData.Data["DailyRewardStreak"].Value);
    timeRemaining = nextHeartbeat - currentDateTime.getTime();
    var playerLastRewardClaimedDate = new Date(parseInt(playerLastRewardClaimed));

    // Verify the player is eligible for a new daily reward
    if (playerLastRewardClaimed > titleLastRewardHeartbeat) {
        message = "The player " + currentPlayerId + " was NOT YET eligible for a new reward. Wait for the next title reward heartbeat";
        log.info(message);
    }
    else {
        timeRemaining = 0;
        message = "The player " + currentPlayerId + "IS ELIGIBLE for a new reward.";
        log.info(message);
    }
    return { messageValue: message, playerStreak: playerRewardStreak.toString(), nextRewardHeartbeat: nextHeartbeatDate, lastClaimedDate: playerLastRewardClaimedDate }
}
interface IDailyRewardsCheckRewardAvailability {
    messageValue: string;
    playerStreak: string;
    nextRewardHeartbeat: Date;
    lastClaimedDate: Date;
}
handlers["DailyRewardsCheckRewardAvailability"] = DailyRewardsCheckRewardAvailability;

// This function attempts to redeem a the next daily reward for a player
// Triggered by a button press by the player
var DailyRewardsTryClaimReward = function (args: any, context: IPlayFabContext): IDailyRewardsTryClaimReward {

    var timeRemaining = 0;
    var message = "Player " + currentPlayerId + " is trying to claim a reward";
    log.info(message);

    var headers = {};
    var body = {};
    var url = "http://worldclockapi.com/api/json/utc/now";
    var content = JSON.stringify(body);
    var httpMethod = "get";
    var contentType = "application/json";

    // Get the current time - the pre-defined http object makes synchronous HTTP requests
    var timeResponse = JSON.parse(http.request(url, httpMethod, content, contentType, headers));
    var currentDateTime = new Date(timeResponse.currentDateTime);
    log.info("Player " + currentPlayerId + " is checking at time " + currentDateTime.toTimeString());

    // Get the title's last reward heartbeat time
    var internalData = server.GetTitleInternalData({}).Data;
    var titleLastRewardHeartbeat = internalData.DailyRewardLastRewardHeartbeat;
    var rewardCycleLengthInMS = parseInt(internalData.DailyRewardDelayTimeInMinutes) * 60 * 1000;

    // Get the player's last reward claim time
    var userData = server.GetUserReadOnlyData({ PlayFabId: currentPlayerId, Keys: ["DailyRewardClaimed", "DailyRewardStreak"] });
    var playerLastRewardClaimed = userData.Data["DailyRewardClaimed"].Value;
    var playerRewardStreak = parseInt(userData.Data["DailyRewardStreak"].Value);

    // Verify the player is eligible for a new daily reward
    if (playerLastRewardClaimed > titleLastRewardHeartbeat) {
        timeRemaining = (parseInt(titleLastRewardHeartbeat) + rewardCycleLengthInMS) - currentDateTime.getTime();
        message = "The player " + currentPlayerId + " was NOT YET eligible for a new reward. Wait for the next title reward heartbeat"
        log.info(message);
        return {
            messageValue: message,
            playersRewardInfo: {
                timeRemaining: timeRemaining,
                playerRewardStreak: playerRewardStreak,
                rewardDay: 0,
                itemToGrant: "none"
            }
        };
    }

    // Check to see if the player has broken their streak, else increment
    if (currentDateTime.getTime() - parseInt(playerLastRewardClaimed) > rewardCycleLengthInMS)
    {
        playerRewardStreak = 0;
        log.info("The player " + currentPlayerId + " broke their streak. Resetting to 0");
    }
    else
    {
        playerRewardStreak++;
    }

    // DAY [0, 1]
    //
    // Next check to see if the player is wrapping from 6 back to 4
    // rewardDay == 0 grants the day 1 bundle
    // rewardDay == 5 grants the day 6 bundle
    // rewardDay == 6 is adjusted back to 3 which grants the day 4 bundle
    //
    var rewardDay = playerRewardStreak;
    if (rewardDay > 5)
    {
        rewardDay = rewardDay - 5;
        rewardDay = rewardDay % 3;
        rewardDay = rewardDay + 3;
    }
    log.info("The Player has earned reward for day " + rewardDay);

    // Determine which reward the user should get and grant it
    var DAILY_REWARD_CYCLE = [
        "DailyReward_Day1", "DailyReward_Day2", "DailyReward_Day3", "DailyReward_Day4", "DailyReward_Day5", "DailyRewardTable"
    ];
    var itemToGrant = DAILY_REWARD_CYCLE[rewardDay];

    var grantItemsRequest = {
        PlayFabId: currentPlayerId,
        CatalogVersion: "PMHackathonCatalog",
        ItemIds: [itemToGrant]
    };
    message = ("Granting reward[" + rewardDay + "] = " + itemToGrant + " to player " + currentPlayerId);
    log.info(message);
    server.GrantItemsToUser(grantItemsRequest);
    // TODO: check if this was successful

    // update player's info if grant was successful
    server.UpdateUserReadOnlyData({
        PlayFabId: currentPlayerId,
        Data: {
            "DailyRewardClaimed": JSON.stringify(currentDateTime.getTime()),
            "DailyRewardStreak": JSON.stringify(playerRewardStreak)
        }
    });
    
    return {
        messageValue: message,
        playersRewardInfo: {
            timeRemaining: timeRemaining,
            playerRewardStreak: playerRewardStreak,
            rewardDay: rewardDay,
            itemToGrant: itemToGrant }
    };
}
interface IDailyRewardsTryClaimReward {
    messageValue: string;
    playersRewardInfo: {
        timeRemaining: number;
        playerRewardStreak: number;
        rewardDay: number;
        itemToGrant: string
    };
}
handlers["DailyRewardsTryClaimReward"] = DailyRewardsTryClaimReward;