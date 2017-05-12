// file: snipcart-events.js
(function ($, Snipcart) {
    
    var itemAddedEvent = function (item) {
        App.notify('snipcart.itemAdded', {
            item: item
        });
    };
    
    var itemRemovedEvent = function (item) {
        App.notify('snipcart.itemRemoved', {
            item: item
        });
    };
    
    var orderCompleted = function (order) {
        App.notify('snipcart.completed', {
            order: order,
            items: Snipcart.api.items.all()
        });
    };
    
    var cartOpenedEvent = function () {
        App.notify('snipcart.open', {
            items: Snipcart.api.items.all()
        });
    };
    
    var cartClosedEvent = function () {
        App.notify('snipcart.close', {
            items: Snipcart.api.items.all()
        });
    };
    
    var pageChanged = function (page) {
        App.notify('snipcart.pageChanged', {
            page: page,
            items: Snipcart.api.items.all()
        });
    };
    var ready = function () {
        // Snipcart is ready
        Snipcart.execute('bind', 'item.added', itemAddedEvent);
        Snipcart.execute('bind', 'item.removed', itemRemovedEvent);
        Snipcart.execute('bind', 'order.completed', orderCompleted);
        Snipcart.execute('bind', 'cart.opened', cartOpenedEvent);
        Snipcart.execute('bind', 'cart.closed', cartClosedEvent);
        Snipcart.execute('bind', 'page.change', pageChanged);
    };
    
    var init = function () {
        // Register the ready event
        Snipcart.execute('bind', 'app.ready', ready);
    };
    
    // Hook on jQuery's DOM Loaded event
    $(init);
    
})(window.jQuery, window.Snipcart); // Assuming jQuery and Snipcart files are loaded before this file
    