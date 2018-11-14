handlers.craftItem = function (args, context) {
    var message = "Crafting initiated by" + currentPlayerId;
    log.info(message);

    //Inventory item to Craft
    //todo: Hardcoded for now - want to input this
    var item_To_Craft = "Crafted_Wand";

    //Currency costs to crafted item
    var currencyPrices = "Empty String";
    var craftCostinGold = 0;
    var craftCostinWood = 0;

    //Grabbing Catalog
    var getCatalogItemsResponse = server.GetCatalogItems({ CatalogVersion: null });
    var catalogItems = getCatalogItemsResponse.Catalog;
    var length = catalogItems.length;
    var catalogItemInstance;
    var found_Crafting_Item = false;

    for (var i = 0; i <= length; i++) {
        if (catalogItems[i].ItemId != "undefined\n")
        {
            var catalogDebugLine = "catalog item " + i + " is " + catalogItems[i].ItemId.toString();
            log.info(catalogDebugLine);
            if ((catalogItems[i].ItemId.toString()) == item_To_Craft)//itemId being the item id of the item we are granting (these are all unique in the catalog). Note: I tried JSON.parse(catalogItems[i]) and got errors.
            {
                //assign crafting item to catalog item
                catalogItemInstance = catalogItems[i];
                found_Crafting_Item = true;
                //currencyPrices = catalogItems[i].VirtualCurrencyPrices.toString();
            }
        }
    }
    if (found_Crafting_Item == false) {
        var result = "Cannot locate " + item_To_Craft + " in the catalogue";
        return { rewards: result };
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
            CatalogVersion: "PMHackathonCatalog",
            ItemIds: [item_To_Craft]
        });

    var resultItems = itemGrantResult.ItemGrantResults;

    return { rewards: resultItems };

};