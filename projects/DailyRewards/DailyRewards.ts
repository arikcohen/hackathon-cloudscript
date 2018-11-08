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
    var playerLastRewardClaimedDate = new Date(parseInt(playerLastRewardClaimed));

    // Verify the player is eligible for a new daily reward
    if (playerLastRewardClaimed > titleLastRewardHeartbeat) {
        message = "The player " + currentPlayerId + " was NOT YET eligible for a new reward. Wait for the next title reward heartbeat";
        log.info(message);
    }
    else {
        message = "The player " + currentPlayerId + "IS ELIGIBLE for a new reward.";
        log.info(message);
    }
    return { messageValue: message }
}
interface IDailyRewardsCheckRewardAvailability {
    messageValue: string;
}
handlers["DailyRewardsCheckRewardAvailability"] = DailyRewardsCheckRewardAvailability;

// This function attempts to redeem a the next daily reward for a player
// Triggered by a button press by the player
var DailyRewardsTryClaimReward = function (args: any, context: IPlayFabContext): IDailyRewardsTryClaimReward {
    var DAILY_REWARD_CYCLE = [
        "DailyReward_Day1", "DailyReward_Day2", "DailyReward_Day3", "DailyReward_Day4", "DailyReward_Day5", "DailyRewardTable"
    ];

    var rewardResult = {
        playerRewardStreak: "error",
        playerLastRewardDate: "error",
        playerLastReward: "error",
        titleNextRewardDate: "error"
    };
    var message = "Player " + currentPlayerId + " is trying to claim a reward";
    log.info(message);

    var headers = {};
    var body = {};
    var url = "http://worldclockapi.com/api/json/utc/now";
    var content = JSON.stringify(body);
    var httpMethod = "get";
    var contentType = "application/json";

    // Get the current time - the pre-defined http object makes synchronous HTTP requests
     var currentDateTime = new Date(JSON.parse(http.request(url, httpMethod, content, contentType, headers)).currentDateTime);
    
    // Get the title's last reward heartbeat time
    var titleInternalData = server.GetTitleInternalData({}).Data;
    var titleLastRewardHeartbeat = titleInternalData.DailyRewardLastRewardHeartbeat;
    var rewardCycleLengthInMS = parseInt(titleInternalData.DailyRewardDelayTimeInMinutes) * 60 * 1000;
    var titleNextRewardDate = new Date(parseInt(titleLastRewardHeartbeat) + rewardCycleLengthInMS);
    rewardResult.titleNextRewardDate = titleNextRewardDate.toLocaleString();

    // Get the player's last reward claim time
    var userData = server.GetUserReadOnlyData({ PlayFabId: currentPlayerId, Keys: ["DailyRewardClaimed", "DailyRewardStreak"] });
    var playerLastRewardDate = userData.Data["DailyRewardClaimed"].Value;
    var playerRewardStreak = parseInt(userData.Data["DailyRewardStreak"].Value);
    rewardResult.playerRewardStreak = playerRewardStreak.toString();
    rewardResult.playerLastRewardDate = new Date(parseInt(playerLastRewardDate)).toDateString();
    if (playerRewardStreak > 5)
        rewardResult.playerLastReward = DAILY_REWARD_CYCLE[((playerRewardStreak - 5) % 3) + 3];
    else
        rewardResult.playerLastReward = DAILY_REWARD_CYCLE[playerRewardStreak];
    
    // Verify the player is eligible for a new daily reward
    if (playerLastRewardDate > titleLastRewardHeartbeat)
    {
        message = "The player " + currentPlayerId + " was NOT YET eligible for a new reward. Wait for the next title reward heartbeat"
        log.info(message);
        return {
            messageValue: message,
            playerRewardInfo: {
                playerRewardStreak: rewardResult.playerRewardStreak,
                playerLastRewardDate: rewardResult.playerLastRewardDate,
                playerLastReward: rewardResult.playerLastReward,
                titleNextRewardDate: rewardResult.titleNextRewardDate
            }
        };
    }

    // Check to see if the player has broken their streak, else increment
    if (currentDateTime.getTime() - parseInt(playerLastRewardDate) > rewardCycleLengthInMS)
    {
        playerRewardStreak = 0;
        log.info("The player " + currentPlayerId + " broke their streak. Resetting to 0");
    }
    else
    {
        playerRewardStreak++;
    }
    rewardResult.playerRewardStreak = playerRewardStreak.toString();

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
    rewardResult.playerLastReward = DAILY_REWARD_CYCLE[rewardDay];

    var grantItemsRequest = {
        PlayFabId: currentPlayerId,
        CatalogVersion: "PMHackathonCatalog",
        ItemIds: [rewardResult.playerLastReward]
    };
    log.info("Granting reward[" + rewardDay + "] = " + rewardResult.playerLastReward + " to player " + currentPlayerId);

    var grantItemResult = server.GrantItemsToUser(grantItemsRequest);
    //server.ConsumeItem(grantItemResult[0].ItemInstanceId);
   
    // update player's info and the rewardResult struct if grant was successful
    server.UpdateUserReadOnlyData({
        PlayFabId: currentPlayerId,
        Data: {
            "DailyRewardClaimed": JSON.stringify(currentDateTime.getTime()),
            "DailyRewardStreak": JSON.stringify(playerRewardStreak)
        }
    });

    return {
        messageValue: message,
        playerRewardInfo: {
            playerRewardStreak: rewardResult.playerRewardStreak,
            playerLastRewardDate: currentDateTime.toDateString(),
            playerLastReward: rewardResult.playerLastReward,
            titleNextRewardDate: rewardResult.titleNextRewardDate
            }
    };
}
interface IDailyRewardsTryClaimReward {
    messageValue: string;
    playerRewardInfo: {
        playerRewardStreak: string;
        playerLastRewardDate: string;
        playerLastReward: string;
        titleNextRewardDate: string;
    };
}
handlers["DailyRewardsTryClaimReward"] = DailyRewardsTryClaimReward;