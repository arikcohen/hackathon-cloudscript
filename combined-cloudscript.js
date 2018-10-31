// This is a Cloud Script function. "args" is set to the value of the "FunctionParameter" 
// parameter of the ExecuteCloudScript API.
// (https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript)
// "context" contains additional information when the Cloud Script function is called from a PlayStream action.
var AuthenticationHelloWorld = function (args, context) {
    // The pre-defined "currentPlayerId" variable is initialized to the PlayFab ID of the player logged-in on the game client. 
    // Cloud Script handles authenticating the player automatically.
    var message = "Hello " + currentPlayerId + "!";
    // You can use the "log" object to write out debugging statements. It has
    // three functions corresponding to logging level: debug, info, and error. These functions
    // take a message string and an optional object.
    log.info(message);
    var inputValue = null;
    if (args && args.inputValue)
        inputValue = args.inputValue;
    log.debug("helloWorld:", { input: args.inputValue });
    // The value you return from a Cloud Script function is passed back 
    // to the game client in the ExecuteCloudScript API response, along with any log statements
    // and additional diagnostic information, such as any errors returned by API calls or external HTTP
    // requests. They are also included in the optional player_executed_cloudscript PlayStream event 
    // generated by the function execution.
    // (https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_executed_cloudscript)
    return { messageValue: message };
};
handlers["AuthenticationHelloWorld"] = AuthenticationHelloWorld;
// This is a Cloud Script function. "args" is set to the value of the "FunctionParameter" 
// parameter of the ExecuteCloudScript API.
// (https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript)
// "context" contains additional information when the Cloud Script function is called from a PlayStream action.
var TradeHelloWorld = function (args, context) {
    // The pre-defined "currentPlayerId" variable is initialized to the PlayFab ID of the player logged-in on the game client. 
    // Cloud Script handles authenticating the player automatically.
    var message = "Hello " + currentPlayerId + "!";
    var message = "Checking Inventory for " + currentPlayerId + "!";
    // You can use the "log" object to write out debugging statements. It has
    // three functions corresponding to logging level: debug, info, and error. These functions
    // take a message string and an optional object.
    log.info(message);
    var inputValue = null;
    if (args && args.inputValue)
        inputValue = args.inputValue;
    log.debug("helloWorld:", { input: args.inputValue });
    // The value you return from a Cloud Script function is passed back 
    // to the game client in the ExecuteCloudScript API response, along with any log statements
    // and additional diagnostic information, such as any errors returned by API calls or external HTTP
    // requests. They are also included in the optional player_executed_cloudscript PlayStream event 
    // generated by the function execution.
    // (https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_executed_cloudscript)
    return { messageValue: message };
};
handlers["TradeHelloWorld"] = TradeHelloWorld;
// This is a Cloud Script function. "args" is set to the value of the "FunctionParameter" 
// parameter of the ExecuteCloudScript API.
// (https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript)
// "context" contains additional information when the Cloud Script function is called from a PlayStream action.
var DailyRewardsHelloWorld = function (args, context) {
    // The pre-defined "currentPlayerId" variable is initialized to the PlayFab ID of the player logged-in on the game client. 
    // Cloud Script handles authenticating the player automatically.
    var message = "Hello " + currentPlayerId + "!";
    // You can use the "log" object to write out debugging statements. It has
    // three functions corresponding to logging level: debug, info, and error. These functions
    // take a message string and an optional object.
    log.info(message);
    var inputValue = null;
    if (args && args.inputValue)
        inputValue = args.inputValue;
    log.debug("helloWorld:", { input: args.inputValue });
    // The value you return from a Cloud Script function is passed back 
    // to the game client in the ExecuteCloudScript API response, along with any log statements
    // and additional diagnostic information, such as any errors returned by API calls or external HTTP
    // requests. They are also included in the optional player_executed_cloudscript PlayStream event 
    // generated by the function execution.
    // (https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_executed_cloudscript)
    return { messageValue: message };
};
handlers["DailyRewardsHelloWorld"] = DailyRewardsHelloWorld;
// This is a Cloud Script function. "args" is set to the value of the "FunctionParameter" 
// parameter of the ExecuteCloudScript API.
// (https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript)
// "context" contains additional information when the Cloud Script function is called from a PlayStream action.
var SpendingEventHelloWorld = function (args, context) {
    // The pre-defined "currentPlayerId" variable is initialized to the PlayFab ID of the player logged-in on the game client. 
    // Cloud Script handles authenticating the player automatically.
    var message = "Hello " + currentPlayerId + "!";
    // You can use the "log" object to write out debugging statements. It has
    // three functions corresponding to logging level: debug, info, and error. These functions
    // take a message string and an optional object.
    log.info(message);
    var inputValue = null;
    if (args && args.inputValue)
        inputValue = args.inputValue;
    log.debug("spendingeventhelloWorld:", { input: args.inputValue });
    // The value you return from a Cloud Script function is passed back 
    // to the game client in the ExecuteCloudScript API response, along with any log statements
    // and additional diagnostic information, such as any errors returned by API calls or external HTTP
    // requests. They are also included in the optional player_executed_cloudscript PlayStream event 
    // generated by the function execution.
    // (https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_executed_cloudscript)
    return { messageValue: message };
};
handlers["SpendingEventHelloWorld"] = SpendingEventHelloWorld;
// This is a Cloud Script function. "args" is set to the value of the "FunctionParameter" 
// parameter of the ExecuteCloudScript API.
// (https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript)
// "context" contains additional information when the Cloud Script function is called from a PlayStream action.
var NextTournament = function (args, context) {
    // The pre-defined "currentPlayerId" variable is initialized to the PlayFab ID of the player logged-in on the game client. 
    // Cloud Script handles authenticating the player automatically.
    var message = "Hello " + currentPlayerId + "!";
    // You can use the "log" object to write out debugging statements. It has
    // three functions corresponding to logging level: debug, info, and error. These functions
    // take a message string and an optional object.
    log.info(message);
    var inputValue = null;
    if (args && args.inputValue)
        inputValue = args.inputValue;
    log.debug("Next Tournament:", { input: args.inputValue });
    // The value you return from a Cloud Script function is passed back 
    // to the game client in the ExecuteCloudScript API response, along with any log statements
    // and additional diagnostic information, such as any errors returned by API calls or external HTTP
    // requests. They are also included in the optional player_executed_cloudscript PlayStream event 
    // generated by the function execution.
    // (https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_executed_cloudscript)
    return { messageValue: message };
};
handlers["NextTournament"] = NextTournament;
///////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Welcome to your first Cloud Script revision!
//
// Cloud Script runs in the PlayFab cloud and has full access to the PlayFab Game Server API 
// (https://api.playfab.com/Documentation/Server), and it runs in the context of a securely
// authenticated player, so you can use it to implement logic for your game that is safe from
// client-side exploits. 
//
// Cloud Script functions can also make web requests to external HTTP
// endpoints, such as a database or private API for your title, which makes them a flexible
// way to integrate with your existing backend systems.
//
// There are several different options for calling Cloud Script functions:
//
// 1) Your game client calls them directly using the "ExecuteCloudScript" API,
// passing in the function name and arguments in the request and receiving the 
// function return result in the response.
// (https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript)
// 
// 2) You create PlayStream event actions that call them when a particular 
// event occurs, passing in the event and associated player profile data.
// (https://api.playfab.com/playstream/docs)
// 
// 3) For titles using the Photon Add-on (https://playfab.com/marketplace/photon/),
// Photon room events trigger webhooks which call corresponding Cloud Script functions.
// 
// The following examples demonstrate all three options.
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
// This is a Cloud Script function. "args" is set to the value of the "FunctionParameter" 
// parameter of the ExecuteCloudScript API.
// (https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript)
// "context" contains additional information when the Cloud Script function is called from a PlayStream action.
var HelloWorldDefault = function (args, context) {
    // The pre-defined "currentPlayerId" variable is initialized to the PlayFab ID of the player logged-in on the game client. 
    // Cloud Script handles authenticating the player automatically.
    var message = "Hello " + currentPlayerId + "!";
    // You can use the "log" object to write out debugging statements. It has
    // three functions corresponding to logging level: debug, info, and error. These functions
    // take a message string and an optional object.
    log.info(message);
    var inputValue = null;
    if (args && args.inputValue)
        inputValue = args.inputValue;
    log.debug("helloWorld:", { input: args.inputValue });
    // The value you return from a Cloud Script function is passed back 
    // to the game client in the ExecuteCloudScript API response, along with any log statements
    // and additional diagnostic information, such as any errors returned by API calls or external HTTP
    // requests. They are also included in the optional player_executed_cloudscript PlayStream event 
    // generated by the function execution.
    // (https://api.playfab.com/playstream/docs/PlayStreamEventModels/player/player_executed_cloudscript)
    return { messageValue: message };
};
handlers["helloWorld"] = HelloWorldDefault;
// This is a simple example of making a PlayFab server API call
var MakeApiCall = function (args, context) {
    var request = {
        PlayFabId: currentPlayerId, Statistics: [{
                StatisticName: "Level",
                Value: 2
            }]
    };
    // The pre-defined "server" object has functions corresponding to each PlayFab server API 
    // (https://api.playfab.com/Documentation/Server). It is automatically 
    // authenticated as your title and handles all communication with 
    // the PlayFab API, so you don't have to write extra code to issue HTTP requests. 
    var playerStatResult = server.UpdatePlayerStatistics(request);
};
handlers["makeAPICall"] = MakeApiCall;
// This is a simple example of making a web request to an external HTTP API.
var MakeHttpRequest = function (args, context) {
    var headers = {
        "X-MyCustomHeader": "Some Value"
    };
    var body = {
        input: args,
        userId: currentPlayerId,
        mode: "foobar"
    };
    var url = "http://httpbin.org/status/200";
    var content = JSON.stringify(body);
    var httpMethod = "post";
    var contentType = "application/json";
    // The pre-defined http object makes synchronous HTTP requests
    var response = http.request(url, httpMethod, content, contentType, headers);
    return { responseContent: response };
};
handlers["makeHTTPRequest"] = MakeHttpRequest;
// This is a simple example of a function that is called from a
// PlayStream event action. (https://playfab.com/introducing-playstream/)
var HandlePlayStreamEventAndProfile = function (args, context) {
    // The event that triggered the action 
    // (https://api.playfab.com/playstream/docs/PlayStreamEventModels)
    var psEvent = context.playStreamEvent;
    // The profile data of the player associated with the event
    // (https://api.playfab.com/playstream/docs/PlayStreamProfileModels)
    var profile = context.playerProfile;
    // Post data about the event to an external API
    var content = JSON.stringify({ user: profile.PlayerId, event: psEvent.EventName });
    var response = http.request('https://httpbin.org/status/200', 'post', content, 'application/json', null);
    return { externalAPIResponse: response };
};
handlers["handlePlayStreamEventAndProfile"] = HandlePlayStreamEventAndProfile;
// Below are some examples of using Cloud Script in slightly more realistic scenarios
// This is a function that the game client would call whenever a player completes
// a level. It updates a setting in the player's data that only game server
// code can write - it is read-only on the client - and it updates a player
// statistic that can be used for leaderboards. 
//
// A funtion like this could be extended to perform validation on the 
// level completion data to detect cheating. It could also do things like 
// award the player items from the game catalog based on their performance.
var CompletedLevel = function (args, context) {
    var level = args.levelName;
    var monstersKilled = args.monstersKilled;
    var updateUserDataResult = server.UpdateUserInternalData({
        PlayFabId: currentPlayerId,
        Data: {
            lastLevelCompleted: level
        }
    });
    log.debug("Set lastLevelCompleted for player " + currentPlayerId + " to " + level);
    var request = {
        PlayFabId: currentPlayerId, Statistics: [{
                StatisticName: "level_monster_kills",
                Value: monstersKilled
            }]
    };
    server.UpdatePlayerStatistics(request);
    log.debug("Updated level_monster_kills stat for player " + currentPlayerId + " to " + monstersKilled);
};
handlers["completedLevel"] = CompletedLevel;
// In addition to the Cloud Script handlers, you can define your own functions and call them from your handlers. 
// This makes it possible to share code between multiple handlers and to improve code organization.
var UpdatePlayerMove = function (args) {
    var validMove = processPlayerMove(args);
    return { validMove: validMove };
};
handlers["updatePlayerMove"] = UpdatePlayerMove;
// This is a helper function that verifies that the player's move wasn't made
// too quickly following their previous move, according to the rules of the game.
// If the move is valid, then it updates the player's statistics and profile data.
// This function is called from the "UpdatePlayerMove" handler above and also is 
// triggered by the "RoomEventRaised" Photon room event in the Webhook handler
// below. 
//
// For this example, the script defines the cooldown period (playerMoveCooldownInSeconds)
// as 15 seconds. A recommended approach for values like this would be to create them in Title
// Data, so that they can be queries in the script with a call to GetTitleData
// (https://api.playfab.com/Documentation/Server/method/GetTitleData). This would allow you to
// make adjustments to these values over time, without having to edit, test, and roll out an
// updated script.
function processPlayerMove(playerMove) {
    var now = Date.now();
    var playerMoveCooldownInSeconds = 15;
    var playerData = server.GetUserInternalData({
        PlayFabId: currentPlayerId,
        Keys: ["last_move_timestamp"]
    });
    var lastMoveTimestampSetting = playerData.Data["last_move_timestamp"];
    if (lastMoveTimestampSetting) {
        var lastMoveTime = Date.parse(lastMoveTimestampSetting.Value);
        var timeSinceLastMoveInSeconds = (now - lastMoveTime) / 1000;
        log.debug("lastMoveTime: " + lastMoveTime + " now: " + now + " timeSinceLastMoveInSeconds: " + timeSinceLastMoveInSeconds);
        if (timeSinceLastMoveInSeconds < playerMoveCooldownInSeconds) {
            log.error("Invalid move - time since last move: " + timeSinceLastMoveInSeconds + "s less than minimum of " + playerMoveCooldownInSeconds + "s.");
            return false;
        }
    }
    var playerStats = server.GetPlayerStatistics({
        PlayFabId: currentPlayerId
    }).Statistics;
    var movesMade = 0;
    for (var i = 0; i < playerStats.length; i++)
        if (playerStats[i].StatisticName === "")
            movesMade = playerStats[i].Value;
    movesMade += 1;
    var request = {
        PlayFabId: currentPlayerId, Statistics: [{
                StatisticName: "movesMade",
                Value: movesMade
            }]
    };
    server.UpdatePlayerStatistics(request);
    server.UpdateUserInternalData({
        PlayFabId: currentPlayerId,
        Data: {
            last_move_timestamp: new Date(now).toUTCString(),
            last_move: JSON.stringify(playerMove)
        }
    });
    return true;
}
// This is an example of using PlayStream real-time segmentation to trigger
// game logic based on player behavior. (https://playfab.com/introducing-playstream/)
// The function is called when a player_statistic_changed PlayStream event causes a player 
// to enter a segment defined for high skill players. It sets a key value in
// the player's internal data which unlocks some new content for the player.
var UnlockHighSkillContent = function (args, context) {
    var playerStatUpdatedEvent = context.playStreamEvent;
    var request = {
        PlayFabId: currentPlayerId,
        Data: {
            "HighSkillContent": "true",
            "XPAtHighSkillUnlock": playerStatUpdatedEvent.StatisticValue.toString()
        }
    };
    var playerInternalData = server.UpdateUserInternalData(request);
    log.info('Unlocked HighSkillContent for ' + context.playerProfile.DisplayName);
    return { profile: context.playerProfile };
};
handlers["unlockHighSkillContent"] = UnlockHighSkillContent;
// Photon Webhooks Integration
//
// The following functions are examples of Photon Cloud Webhook handlers. 
// When you enable the Photon Add-on (https://playfab.com/marketplace/photon/)
// in the Game Manager, your Photon applications are automatically configured
// to authenticate players using their PlayFab accounts and to fire events that 
// trigger your Cloud Script Webhook handlers, if defined. 
// This makes it easier than ever to incorporate multiplayer server logic into your game.
// Triggered automatically when a Photon room is first created
var RoomCreated = function (args) {
    log.debug("Room Created - Game: " + args.GameId + " MaxPlayers: " + args.CreateOptions.MaxPlayers);
};
handlers["RoomCreated"] = RoomCreated;
// Triggered automatically when a player joins a Photon room
var RoomJoined = function (args) {
    log.debug("Room Joined - Game: " + args.GameId + " PlayFabId: " + args.UserId);
};
handlers["RoomJoined"] = RoomJoined;
// Triggered automatically when a player leaves a Photon room
var RoomLeft = function (args) {
    log.debug("Room Left - Game: " + args.GameId + " PlayFabId: " + args.UserId);
};
handlers["RoomLeft"] = RoomLeft;
// Triggered automatically when a Photon room closes
// Note: currentPlayerId is undefined in this function
var RoomClosed = function (args) {
    log.debug("Room Closed - Game: " + args.GameId);
};
handlers["RoomClosed"] = RoomClosed;
// Triggered automatically when a Photon room game property is updated.
// Note: currentPlayerId is undefined in this function
var RoomPropertyUpdated = function (args) {
    log.debug("Room Property Updated - Game: " + args.GameId);
};
handlers["RoomPropertyUpdated"] = RoomPropertyUpdated;
// Triggered by calling "OpRaiseEvent" on the Photon client. The "args.Data" property is 
// set to the value of the "customEventContent" HashTable parameter, so you can use
// it to pass in arbitrary data.
var RoomEventRaised = function (args) {
    var eventData = args.Data;
    log.debug("Event Raised - Game: " + args.GameId + " Event Type: " + eventData.eventType);
    switch (eventData.eventType) {
        case "playerMove":
            processPlayerMove(eventData);
            break;
        default:
            break;
    }
};
handlers["RoomEventRaised"] = RoomEventRaised;
///////////////////////////////////////////////
// JenkinsConsoleUtility CloudScript functions
///////////////////////////////////////////////
var TEST_TITLE_ID = "6195"; // NOTE: Replace this with your own titleID - DeleteUsers has an additional security check to avoid accidents
var TEST_DATA_KEY = "TEST_DATA_KEY"; // Used to reuse args.customId, but it was kindof a pain, and made things fragile
var HelloWorld = function (args, context) {
    var message = "Hello " + currentPlayerId + "!";
    log.info(message);
    var inputValue = null;
    if (args && args.hasOwnProperty("inputValue"))
        inputValue = args.inputValue;
    log.debug("helloWorld:", { input: inputValue });
    return { messageValue: message };
};
handlers["helloWorld"] = HelloWorld;
var ThrowError = function (args) {
    var testObject = undefined;
    var failureObj = testObject.doesnotexist.doesnotexist;
    return failureObj; // Can't get to here
};
handlers["throwError"] = ThrowError;
var EasyLogEvent = function (args) {
    log.info(JSON.stringify(args.logMessage));
};
handlers["easyLogEvent"] = EasyLogEvent;
///////////////////////////////////////////////
// JenkinsConsoleUtility CloudScript functions
///////////////////////////////////////////////
var TestDataExists = function (args) {
    var playerData = server.GetUserInternalData({
        PlayFabId: currentPlayerId,
        Keys: [TEST_DATA_KEY]
    });
    return playerData.Data.hasOwnProperty(TEST_DATA_KEY);
};
handlers["TestDataExists"] = TestDataExists;
var GetTestData = function (args) {
    var testResults = null;
    var playerData = server.GetUserInternalData({
        PlayFabId: currentPlayerId,
        Keys: [TEST_DATA_KEY]
    });
    if (playerData.Data.hasOwnProperty(TEST_DATA_KEY)) {
        log.info("Returning Data: " + playerData.Data[TEST_DATA_KEY].Value);
        testResults = JSON.parse(playerData.Data[TEST_DATA_KEY].Value);
        var data = {};
        data[TEST_DATA_KEY] = null;
        server.UpdateUserInternalData({
            PlayFabId: currentPlayerId,
            Data: data
        });
    }
    else {
        log.info("Expected data not found in: " + JSON.stringify(playerData));
    }
    return testResults;
};
handlers["GetTestData"] = GetTestData;
var SaveTestData = function (args) {
    var data = {};
    data[TEST_DATA_KEY] = JSON.stringify(args.testReport);
    log.info("Saving Data (" + currentPlayerId + "): " + JSON.stringify(data));
    server.UpdateUserInternalData({
        PlayFabId: currentPlayerId,
        Data: data
    });
};
handlers["SaveTestData"] = SaveTestData;
var SELL_PRICE_RATIO = 0.75;
function SellItem_internal(soldItemInstanceId, requestedVcType) {
    var inventory = server.GetUserInventory({ PlayFabId: currentPlayerId });
    var itemInstance = null;
    for (var i = 0; i < inventory.Inventory.length; i++) {
        if (inventory.Inventory[i].ItemInstanceId === soldItemInstanceId)
            itemInstance = inventory.Inventory[i];
    }
    if (!itemInstance)
        throw "Item instance not found"; // Protection against client providing incorrect data
    var catalog = server.GetCatalogItems({ CatalogVersion: itemInstance.CatalogVersion });
    var catalogItem = null;
    for (var c = 0; c < catalog.Catalog.length; c++) {
        if (itemInstance.ItemId === catalog.Catalog[c].ItemId)
            catalogItem = catalog.Catalog[c];
    }
    if (!catalogItem)
        throw "Catalog Item not found"; // Title catalog consistency check (You should never remove a catalog/catalogItem if any player owns that item
    var buyPrice = 0;
    if (catalogItem.VirtualCurrencyPrices.hasOwnProperty(requestedVcType))
        buyPrice = catalogItem.VirtualCurrencyPrices[requestedVcType];
    if (buyPrice <= 0)
        throw "Cannot redeem this item for: " + requestedVcType; // The client requested a virtual currency which doesn't apply to this item
    // Once we get here all safety checks are passed - Perform the sell
    var sellPrice = Math.floor(buyPrice * SELL_PRICE_RATIO);
    server.AddUserVirtualCurrency({ PlayFabId: currentPlayerId, Amount: sellPrice, VirtualCurrency: requestedVcType });
    server.RevokeInventoryItem({ PlayFabId: currentPlayerId, ItemInstanceId: soldItemInstanceId });
}
;
var SellItem = function (args) {
    if (!args || !args.soldItemInstanceId || !args.requestedVcType)
        throw "Invalid input parameters, expected soldItemInstanceId and requestedVcType";
    SellItem_internal(args.soldItemInstanceId, args.requestedVcType);
};
handlers["SellItem"] = SellItem;
// Publisher data Examples
var PUBLISHER_USED_TITLES_KEY = "playedTitleIds";
var TrackTitleUsage = function () {
    // Get the User Publisher Data for this player, and convert it into our expected format
    var getRequest = { Keys: [PUBLISHER_USED_TITLES_KEY], PlayFabId: currentPlayerId };
    var getResult = server.GetUserPublisherInternalData(getRequest);
    var playedTitlesList = JSON.parse(getResult.Data[PUBLISHER_USED_TITLES_KEY].Value); // format is arbitrary, but this example assumes string[]
    if (!playedTitlesList)
        playedTitlesList = [];
    // Check if we've played this title already
    var alreadyPlayed = false;
    for (var i = 0; i < playedTitlesList.length; i++)
        alreadyPlayed = alreadyPlayed || playedTitlesList[i] === script.titleId;
    if (alreadyPlayed)
        return; // Nothing to do
    // Update the list of played titles, and re-save
    playedTitlesList.push(script.titleId);
    var setRequest = { PlayFabId: currentPlayerId, Data: { PUBLISHER_USED_TITLES_KEY: JSON.stringify(playedTitlesList) } };
    server.UpdateUserPublisherInternalData(setRequest);
};
handlers["TrackTitleUsage"] = TrackTitleUsage;
var PUBLISHER_REDEEMED_TITLES_KEY = "redeemedTitleIds";
var MY_CROSS_TITLE_REWARDS = { "AU": 10 };
var CheckCrossTitleRewards = function () {
    // Get the publisher data concerning cross-title rewards for this player
    var getRequest = { Keys: [PUBLISHER_USED_TITLES_KEY, PUBLISHER_REDEEMED_TITLES_KEY], PlayFabId: currentPlayerId };
    var getResult = server.GetUserPublisherInternalData(getRequest);
    var redeemedTitleRewards = JSON.parse(getResult.Data[PUBLISHER_REDEEMED_TITLES_KEY].Value); // format is arbitrary, but this example assumes { [key: string]: string[] }
    if (!redeemedTitleRewards)
        redeemedTitleRewards = {};
    var playedTitlesList = JSON.parse(getResult.Data[PUBLISHER_USED_TITLES_KEY].Value); // format is arbitrary, but this example assumes string[]
    if (!playedTitlesList)
        playedTitlesList = [];
    // Determine which titles are un-redeemed
    var unredeemedTitleIds = [];
    for (var i = 0; i < playedTitlesList.length; i++) {
        if (!redeemedTitleRewards.hasOwnProperty(playedTitlesList[i]) && playedTitlesList[i] !== script.titleId)
            unredeemedTitleIds.push(playedTitlesList[i]);
    }
    if (unredeemedTitleIds.length === 0)
        return null; // Nothing to redeem
    // Give the cross title rewards
    var multiplier = unredeemedTitleIds.length;
    var actualRewards = {}; // MY_CROSS_TITLE_REWARDS is a global constant, so don't modify it or you'll mess up future calls
    for (var eachKey in MY_CROSS_TITLE_REWARDS) {
        actualRewards[eachKey] = MY_CROSS_TITLE_REWARDS[eachKey] * multiplier;
        server.AddUserVirtualCurrency({ PlayFabId: currentPlayerId, VirtualCurrency: eachKey, Amount: MY_CROSS_TITLE_REWARDS[eachKey] }); // Can only add 1 VC at a time
    }
    // Save the Publisher data indicating rewards are claimed
    redeemedTitleRewards[script.titleId] = playedTitlesList;
    var setRequest = { PlayFabId: currentPlayerId, Data: { PUBLISHER_REDEEMED_TITLES_KEY: JSON.stringify(redeemedTitleRewards) } };
    server.UpdateUserPublisherInternalData(setRequest);
    // Tell the client the reward
    return actualRewards;
};
handlers["CheckCrossTitleRewards"] = CheckCrossTitleRewards;
var MY_GAME_GROUP_KEYS = ["gameState", "currentPlayerTurn"];
var TakePlayerTurn = function (args) {
    var getRequest = { SharedGroupId: args.sharedGroupId, GetMembers: true, Keys: MY_GAME_GROUP_KEYS };
    var gameData = server.GetSharedGroupData(getRequest);
    CheckValidPlayer(currentPlayerId, args.sharedGroupId, gameData.Members, gameData.Data["currentPlayerTurn"].Value, args.nextPlayerTurn);
    var newGameStateJson = UpdateGameState(args.turnData, gameData.Data["gameState"].Value);
    var updateRequest = {
        SharedGroupId: args.sharedGroupId,
        Data: {
            "gameState": newGameStateJson,
            "currentPlayerTurn": args.nextPlayerTurn
        }
    };
    server.UpdateSharedGroupData(updateRequest);
};
handlers["TakePlayerTurn"] = TakePlayerTurn;
function CheckValidPlayer(playFabId, sharedGroupId, members, currentPlayerTurn, nextPlayerTurn) {
    var validCurPlayer = false;
    var validNextPlayer = false;
    for (var m = 0; m < members.length; m++) {
        if (members[m] === playFabId)
            validCurPlayer = true;
        if (members[m] === nextPlayerTurn)
            validNextPlayer = true;
    }
    if (!validCurPlayer || !validNextPlayer) {
        server.BanUsers({ Bans: [{ PlayFabId: playFabId, Reason: "Trying to play a game you don't belong to: " + sharedGroupId }] });
        throw "You have been banned";
    }
    if (playFabId !== currentPlayerTurn)
        // May wish to additionally implement a spam-counter here and potentially take more extreme action for high-spam count
        throw "Not your turn";
}
function UpdateGameState(turnData, currentState) {
    // PSEUDO-CODE-STUB: Update the turn-based game state according to the rules of this game
    return JSON.stringify({});
}
// It's important for this example to have a clear idea of what this data looks like
// Your real data would only be in TitleData, stored as a json string in the "activeEvents" key
var EXAMPLE_STORE_CYCLE = {
    "daily": ["daily_monday", "daily_tuesday", "daily_wednesday", "daily_thursday", "daily_friday", "daily_saturday", "daily_sunday"],
    "weekly": ["weekly_red", "weekly_green", "weekly_blue"],
    "holiday": [null, "Thanksgiving"]
};
var DEBUG_ENABLED = true; // Allows you to call manually with ExecuteCloudScript. Set this to false in production
// Read TitleData, getting live active events, and the static information about event cycles
function GetTitleEventInfo() {
    var titleRequest = { Keys: ["activeEvents", "storeCycles"] };
    var titleResponse = server.GetTitleData(titleRequest);
    var activeEvents = null;
    if (titleResponse.Data.hasOwnProperty("activeEvents"))
        activeEvents = JSON.parse(titleResponse.Data["activeEvents"]);
    if (!activeEvents)
        activeEvents = [];
    var storeCycles = null;
    if (titleResponse.Data.hasOwnProperty("storeCycles"))
        storeCycles = JSON.parse(titleResponse.Data["storeCycles"]);
    ;
    if (!storeCycles)
        storeCycles = EXAMPLE_STORE_CYCLE;
    return {
        activeEvents: activeEvents,
        storeCycles: storeCycles
    };
}
// Update TitleData, setting new live active events
function SetTitleEventInfo(activeEvents) {
    var titleRequest = { Key: "activeEvents", Value: JSON.stringify(activeEvents) };
    server.SetTitleData(titleRequest);
}
function CycleEvent(cycleType, cycleTo) {
    if (cycleTo === void 0) { cycleTo = null; }
    var eventInfo = GetTitleEventInfo();
    var cycleList = eventInfo.storeCycles[cycleType];
    var prevIndex = 0;
    for (var i = 0; i < cycleList.length; i++) {
        for (var j = 0; j < eventInfo.activeEvents.length; j++) {
            if (eventInfo.activeEvents[j] === cycleList[i]) {
                eventInfo.activeEvents.splice(j, 1);
                prevIndex = i;
            }
        }
    }
    if (!cycleTo)
        cycleTo = cycleList[(prevIndex + 1) % cycleList.length];
    if (cycleTo)
        eventInfo.activeEvents.push(cycleTo);
    SetTitleEventInfo(eventInfo.activeEvents);
    return eventInfo.activeEvents;
}
var CycleDailyEvent = function (args, context) {
    if (!DEBUG_ENABLED && !context)
        throw "This can only be called from PlayStream"; // Safety check to prevent Clients from changing events, and/or accidents
    return CycleEvent("daily");
};
handlers["CycleDailyEvent"] = CycleDailyEvent;
var CycleWeeklyEvent = function (args, context) {
    if (!DEBUG_ENABLED && !context)
        throw "This can only be called from PlayStream"; // Safety check to prevent Clients from changing events, and/or accidents
    return CycleEvent("weekly");
};
handlers["CycleWeeklyEvent"] = CycleWeeklyEvent;
var DisableHoliday = function (args, context) {
    if (!DEBUG_ENABLED && !context)
        throw "This can only be called from PlayStream"; // Safety check to prevent Clients from changing events, and/or accidents
    return CycleEvent("holiday", null);
};
handlers["DisableHoliday"] = DisableHoliday;
// Each Holiday-Enable needs its own handler since context cannot contain any parameters.
// You could use additional title-data to determine when to activate/deactivate holidays
var EnableThanksgiving = function (args, context) {
    if (!DEBUG_ENABLED && !context)
        throw "This can only be called from PlayStream"; // Safety check to prevent Clients from changing events, and/or accidents
    return CycleEvent("holiday", "Thanksgiving");
};
handlers["EnableThanksgiving"] = EnableThanksgiving;
function GetEntityToken(params, context) {
    var getTokenRequest = {};
    var getTokenResponse = entity.GetEntityToken(getTokenRequest);
    var entityId = getTokenResponse.Entity.Id;
    var entityType = getTokenResponse.Entity.Type;
}
handlers.GetEntityToken = GetEntityToken;
function GetObjects(params, context) {
    var getObjRequest = {
        Entity: {
            Id: params.entityId,
            Type: params.entityType
        }
    };
    var getObjResponse = entity.GetObjects(getObjRequest);
    var entityId = getObjResponse.Entity.Id;
    var entityType = getObjResponse.Entity.Type;
    var entityObjs = getObjResponse.Objects["testKey"];
}
handlers.GetObjects = GetObjects;
// Special key in the Title Data that contains an array of AB buckets that participate in the testing
var TITLE_AB_TEST_TITLE_KEY = "TitleDataAbTestSegmentIds";
var GetTitleDataAB = function (args, ctx) {
    // The data key the player originally requested.
    var dataKey = args.TitleKey;
    // A variable to store AB segment of the player, if any
    var currentAbTestSegmentId = null;
    /*
     * We store a list of bucket IDs that participate in the AB testing in the title data.
     * This line extracts an array of such ids
     */
    var requestedTitleData = server.GetTitleData({ Keys: [TITLE_AB_TEST_TITLE_KEY, dataKey] });
    var defaultValue = requestedTitleData.Data.hasOwnProperty(dataKey) ? requestedTitleData.Data[dataKey] : null;
    var segmentIdJson = requestedTitleData.Data.hasOwnProperty(TITLE_AB_TEST_TITLE_KEY) ? requestedTitleData.Data[TITLE_AB_TEST_TITLE_KEY] : null;
    var abTestSegmentIds = JSON.parse(segmentIdJson);
    // This line extracts all the segments current player belongs to
    var playerSegments = server.GetPlayerSegments({ PlayFabId: currentPlayerId }).Segments;
    // Locate first ABTest segment the player belongs to
    for (var i = 0; i < playerSegments.length; i++) {
        var playerSegmentId = playerSegments[i].Id;
        if (abTestSegmentIds.indexOf(playerSegmentId) !== -1)
            currentAbTestSegmentId = playerSegmentId;
    }
    // If player does not belong to any tested segment, return a value for the original key
    if (!currentAbTestSegmentId)
        return defaultValue;
    /*
     * If player belongs to one of AB tested segments
     * we use ID of this segment to construct special key
     * First part of this key is the original key
     * Followed by underscore ('-') we add a suffix, which is ID of the bucket the player belongs to.
     */
    var abTestedKey = dataKey + "_" + currentAbTestSegmentId;
    // We try to get a value using our special key
    var result = server.GetTitleData({ Keys: [abTestedKey] });
    if (result.Data[abTestedKey])
        return result.Data[abTestedKey];
    else
        return defaultValue;
};
handlers["GetTitleDataAB"] = GetTitleDataAB;
//# sourceMappingURL=combined-cloudscript.js.map