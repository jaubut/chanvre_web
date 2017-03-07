// file: snipcart-gtm.js
(function ($) {

    var createProductsFromItems = function (items) {
        return items.map(function (item) {
            return {
                name: item.name,
                description: item.description,
                id: item.id,
                price: item.price,
                brand: item.brand,
                category: item.category,
                quantity: item.quantity
            };
        });
    };
     var createProductsFromItems = ...;

    var onItemAdded = function (item) {
        dataLayer.push({
            event: 'ecom',
            eventCategory: 'addToCart',
            eventLabel: item.name,
            eventValue: item.price,
            options: {},
            ecommerce: {
                currencyCode: 'CAD',
                add: {
                    products: createProductsFromItems([data.item])
                }
            }
        });
    };

    var onItemRemoved = function (item) {
        dataLayer.push({
            event: 'ecom',
            eventCategory: 'removeFromCart',
            eventLabel: item.name,
            eventValue: item.price,
            options: {},
            ecommerce: {
                currencyCode: 'CAD',
                remove: {
                    products: createProductsFromItems([item])
                }
            }
        });
    };

    var onOrderCompleted = function (order, items) {
        dataLayer.push({
            event: 'ecom',
            eventCategory: 'VPV',
            eventAction: 'order-completed',
            options: {},
            ecommerce: {
                currencyCode: order.currency,
                purchase: {
                    actionField: {
                        id: order.token,
                        affiliation: 'Website',
                        revenue: order.total,
                        tax: _.reduce(order.taxes, function (memo, tax) {
                            return memo + tax.amount;
                        }, 0),
                        shipping: 0,
                        invoiceNumber: order.invoiceNumber
                    },
                    products: createProductsFromItems(items),
                    userId: order.userId
                }
            }
        });
    };

    var onPageChanged = function (page, items) {
        dataLayer.push({
            event: 'ecom',
            eventCategory: 'VPV',
            eventAction: page,
            options: {},
            ecommerce: {
                checkout: {
                    products: createProductsFromItems(items)
                }
            }
        });
    };

    var onCartOpen = function (items) {
        dataLayer.push({
            event: 'ecom',
            eventCategory: 'VPV',
            eventAction: 'cart-open',
            options: {},
            ecommerce: {
                cartclose: {
                    products: createProductsFromItems(items)
                }
            }
        });
    };

    var onCartClose = function (items) {
        dataLayer.push({
            event: 'ecom',
            eventCategory: 'VPV',
            eventAction: 'cart-close',
            options: {},
            ecommerce: {
                cartopen: {
                    products: createProductsFromItems(items)
                }
            }
        });
    };

})(window.jQuery);