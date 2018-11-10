
// This is a Cloud Script function. "args" is set to the value of the "FunctionParameter" 
// parameter of the ExecuteCloudScript API.
// (https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript)
// "context" contains additional information when the Cloud Script function is called from a PlayStream action.

var GetFishingGameConfig = function (ars: any, context: IPlayFabContext): IFishingGameConfig {
    var titleData = server.GetTitleData({ Keys: ["FishingTournamentData", "FishingGameConfig"] }).Data; 
    

    var baseGameConfig: IFishingGameConfig = JSON.parse(titleData["FishingGameConfig"]);
    var tournamentData: IFishingTournamentData = JSON.parse(titleData["FishingTournamentData"]); 

    if (isActiveTournament()) {
        return tournamentData.gameConfig;
    }
    else
        return baseGameConfig;

}


interface IFishingTournamentData {
    startDate: string,
    endDate: string,
    name: string,
    description: string,
    isProcessed?: boolean,
    gameConfig: IFishingGameConfig
}

var isActiveTournament = function (): boolean {
    var titleData = server.GetTitleData({ Keys: ["FishingTournamentData", "FishingGameConfig"] }).Data; 
    var tournamentData: IFishingTournamentData = JSON.parse(titleData["FishingTournamentData"]); 

    var curDate = Date.now();
    var startDate = Date.parse(tournamentData.startDate);
    var endDate = Date.parse(tournamentData.endDate);
    
    return (curDate >= startDate && curDate <= endDate);    
}

interface IFishingGameConfig {
    minFish: number,
    maxFish: number,
    minRods: number,
    maxRods: number
}


var ProcessTournamentFish = function (args: any, context: IPlayFabContext) {

    //log.debug("Arguments:", { args: args, context: context }); 

    // if tournament is going on
    if (isActiveTournament()) {
        var countTournamentFishCaught = context.playStreamEvent["StatisticValue"] - context.playStreamEvent["StatisticPreviousValue"];

        server.UpdatePlayerStatistics({ PlayFabId: currentPlayerId, Statistics: [{ StatisticName: "FishCaughtTournament", Value: countTournamentFishCaught }] });

        log.debug("Fish To Count", { FishCaught: countTournamentFishCaught });
    }
}
    

handlers["GetFishingGameConfig"] = GetFishingGameConfig;
handlers["ProcessTournamentFish"] = ProcessTournamentFish;
