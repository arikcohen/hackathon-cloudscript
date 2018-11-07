handlers.craft = function (args, context) {
    var message = "Crafting initiated by" + currentPlayerId + "dude!";
    log.info(message);

    //Inventory item to Craft
    var rewards = "Boots_Speed";

    //Currency costs to crafted item
    var craftCostinGold = 15;
    var craftCostinGems = 15;

    //subtract currencies
    server.SubtractUserVirtualCurrency({ PlayFabId: currentPlayerId, VirtualCurrency: "GD", Amount: craftCostinGold });
    server.SubtractUserVirtualCurrency({ PlayFabId: currentPlayerId, VirtualCurrency: "GM", Amount: craftCostinGems });

    //Add Craft item to invnetory
    var itemGrantResult = server.GrantItemsToUser(
        {
            PlayFabId: currentPlayerId,
            Annotation: "Given for crafting",
            ItemIds: [rewards]
        });

    var resultItems = itemGrantResult.ItemGrantResults;

    return { rewards: resultItems };

};