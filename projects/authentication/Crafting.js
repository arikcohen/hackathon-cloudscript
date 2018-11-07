handlers.CraftItem = function (args, context) {
    var message = "Crafting initiated by" + currentPlayerId + "!";
    log.info(message);

    //Inventory item to Craft - hardcoded for now
    var rewards = "Crafted_Wand";

    //Currency costs to crafted item - hardcoded for now
    var craftCostinGold = 15;
    var craftCostinWood = 15;

    //subtract currencies - hardcoded for now
    server.SubtractUserVirtualCurrency({ PlayFabId: currentPlayerId, VirtualCurrency: "GD", Amount: craftCostinGold });
    server.SubtractUserVirtualCurrency({ PlayFabId: currentPlayerId, VirtualCurrency: "WD", Amount: craftCostinWood });

    //Add Crafted  item to invnetory - hardcoded for now
    var itemGrantResult = server.GrantItemsToUser(
        {
            PlayFabId: currentPlayerId,
            Annotation: "Given for crafting",
            ItemIds: rewards
        });

    var resultItems = itemGrantResult.ItemGrantResults;

    return { rewards: resultItems };

};