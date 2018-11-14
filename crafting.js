handlers.craftItem = function (args, context) {
    var message = "Crafting initiated by" + currentPlayerId;
    log.info(message);
    //Inventory item to Craft
    //todo: Hardcoded for now - want to input this
    var item_To_Craft = "Crafted_Wand";
    //Currency costs to crafted item
    var virtualCurrencyGold = "GD";
    var virtualCurrencyWood = "WD";
    var craftCostinGold = 0;
    var craftCostinWood = 0;
    //Grabbing Catalog
    var getCatalogItemsResponse = server.GetCatalogItems({ CatalogVersion: null });
    var catalogItems = getCatalogItemsResponse.Catalog;
    var length = catalogItems.length;
    var catalogItemInstance;
    var found_Crafting_Item = false;
    for (var i = 0; i <= length - 1; i++) {
        if (catalogItems[i].ItemId != "undefined\n") {
            var catalogDebugLine = "catalog item " + i + " is " + catalogItems[i].ItemId.toString();
            log.info(catalogDebugLine);
            if ((catalogItems[i].ItemId.toString()) == item_To_Craft) {
                //assign crafting item to catalog item
                catalogItemInstance = catalogItems[i];
                found_Crafting_Item = true;
                var currencyPrices = catalogItems[i].VirtualCurrencyPrices;
                log.info("Item Currency Prices are: " + currencyPrices);
                if (catalogItems[i].VirtualCurrencyPrices.hasOwnProperty(virtualCurrencyGold))
                    craftCostinGold = catalogItems[i].VirtualCurrencyPrices[virtualCurrencyGold];
                if (catalogItems[i].VirtualCurrencyPrices.hasOwnProperty(virtualCurrencyWood))
                    craftCostinWood = catalogItems[i].VirtualCurrencyPrices[virtualCurrencyWood];
            }
        }
    }
    if (found_Crafting_Item == false) {
        var result = "Cannot locate " + item_To_Craft + " in the catalogue";
        return { rewards: result };
    }
    //Player Data 
    var inventory = server.GetUserInventory({ PlayFabId: currentPlayerId });
    //subtract currencies from the layer for crafting
    if (craftCostinGold != 0) {
        server.SubtractUserVirtualCurrency({ PlayFabId: currentPlayerId, VirtualCurrency: "GD", Amount: craftCostinGold });
    }
    if (craftCostinWood != 0) {
        server.SubtractUserVirtualCurrency({ PlayFabId: currentPlayerId, VirtualCurrency: "WD", Amount: craftCostinWood });
    }
    //Add Craft item to inventory
    var itemGrantResult = server.GrantItemsToUser({
        PlayFabId: currentPlayerId,
        CatalogVersion: "PMHackathonCatalog",
        ItemIds: [item_To_Craft]
    });
    var resultItems = itemGrantResult.ItemGrantResults;
    return { rewards: resultItems };
};
//# sourceMappingURL=crafting.js.map