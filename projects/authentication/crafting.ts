handlers.craftItem = function (args, context) {
    var message = "Crafting initiated by" + currentPlayerId;
    log.info(message);

    //Inventory item to Craft
    //todo: Hardcoded for now - want to input this
    var reward_ID = "Crafted_Wand";

    //Currency costs to crafted item
    var craftCostinGold = 0;
    var craftCostinWood = 0;

    //Grabbing Catalog
    var getCatalogItemsResponse = server.GetCatalogItems({ CatalogVersion: null });
    var catalogItems = getCatalogItemsResponse.Catalog;
    var length = catalogItems.length;
    var catalogItemInstance;

    for (var i = 0; i <= length; i++) {
        if ((catalogItems[i].ItemId) == reward_ID)//itemId being the item id of the item we are granting (these are all unique in the catalog). Note: I tried JSON.parse(catalogItems[i]) and got errors.
        {
            //assign crafting item to catalog item
            catalogItemInstance = catalogItems[i];
        }
        else {
            var result = "Cannot locate " + reward_ID + "in the catalog";
            return { rewards: result };
        }
    }

    //Player Data 
    var inventory = server.GetUserInventory({ PlayFabId: currentPlayerId });

    //subtract currencies
    server.SubtractUserVirtualCurrency({ PlayFabId: currentPlayerId, VirtualCurrency: "GD", Amount: craftCostinGold });
    server.SubtractUserVirtualCurrency({ PlayFabId: currentPlayerId, VirtualCurrency: "WD", Amount: craftCostinWood });

    //Add Craft item to inventory
    var itemGrantResult = server.GrantItemsToUser(
        {
            PlayFabId: currentPlayerId,
            Annotation: "Given for crafting",
            ItemIds: [reward_ID]
        });

    var resultItems = itemGrantResult.ItemGrantResults;

    return { rewards: resultItems };

};