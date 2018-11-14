// This is a Cloud Script function. "args" is set to the value of the "FunctionParameter" 
// parameter of the ExecuteCloudScript API.
// (https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript)
// "context" contains additional information when the Cloud Script function is called from a PlayStream action.
var GetFishingGameConfig = function (ars, context) {
    var titleData = server.GetTitleData({ Keys: ["FishingTournamentData", "FishingGameConfig"] }).Data;
    var baseGameConfig = JSON.parse(titleData["FishingGameConfig"]);
    var tournamentData = JSON.parse(titleData["FishingTournamentData"]);
    if (isActiveTournament()) {
        log.info("Tournament game config data returned", tournamentData.gameConfig);
        return tournamentData.gameConfig;
    }
    else {
        log.info("Base game config data returned", baseGameConfig);
        return baseGameConfig;
    }
};
var isActiveTournament = function () {
    var titleData = server.GetTitleData({ Keys: ["FishingTournamentData", "FishingGameConfig"] }).Data;
    var tournamentData = JSON.parse(titleData["FishingTournamentData"]);
    var curDate = Date.now();
    var startDate = Date.parse(tournamentData.startDate);
    var endDate = Date.parse(tournamentData.endDate);
    return (curDate >= startDate && curDate <= endDate);
};
var ProcessTournamentFish = function (args, context) {
    //log.debug("Arguments:", { args: args, context: context }); 
    // if tournament is going on
    if (isActiveTournament()) {
        var countTournamentFishCaught = context.playStreamEvent["StatisticValue"] - context.playStreamEvent["StatisticPreviousValue"];
        server.UpdatePlayerStatistics({ PlayFabId: currentPlayerId, Statistics: [{ StatisticName: "FishCaughtTournament", Value: countTournamentFishCaught }] });
        log.debug("Fish To Count", { FishCaught: countTournamentFishCaught });
    }
};
handlers["GetFishingGameConfig"] = GetFishingGameConfig;
handlers["ProcessTournamentFish"] = ProcessTournamentFish;
//# sourceMappingURL=tournament.js.map