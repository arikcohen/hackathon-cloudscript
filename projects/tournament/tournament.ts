
// This is a Cloud Script function. "args" is set to the value of the "FunctionParameter" 
// parameter of the ExecuteCloudScript API.
// (https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript)
// "context" contains additional information when the Cloud Script function is called from a PlayStream action.


var ProcessTournamentFish = function (args: any, context: IPlayFabContext) {
   
   //log.debug("Arguments:", { args: args, context: context }); 

    // if tournament is going on
    var tournamentDataJSON = server.GetTitleData({ Keys: ["FishingTournamentData"]}); 


   
    var countTournamentFishCaught = context.playStreamEvent["StatisticValue"] - context.playStreamEvent["StatisticPreviousValue"];

    server.UpdatePlayerStatistics({ PlayFabId: currentPlayerId, Statistics: [{ StatisticName: "FishCaughtTournament", Value: countTournamentFishCaught }] });

    log.debug("Tournament Data", tournamentDataJSON);
        log.debug("Fish To Count", { FishCaught: countTournamentFishCaught });  
    
}
handlers["ProcessTournamentFish"] = ProcessTournamentFish;
