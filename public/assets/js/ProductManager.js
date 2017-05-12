(function ($) {
    /**
     * This class is responsible for listing products and providing search & filter functionality.
     * @class ProductManager
     * @constructor
     * @param {Object} options
     * @param {Object} options.fuseOptions Fuse options
     * @param {String} options.listSelector Product list jQuery selector
     * @param {String} options.searchInputSelector Search input jQuery selector
     * @param {String} options.productItemSelector Product item jQuery selector
     * @param {String} options.productFilterSelector Product filter jQuery selector
     *
     */
    var ProductManager = function (options) {
        options = options || {};
        // validate options
        if (
            _.isUndefined(options.listSelector) ||
            _.isUndefined(options.searchInputSelector) ||
            _.isUndefined(options.productItemSelector) ||
            _.isUndefined(options.productFilterSelector)
        ) {
            throw new Error('Invalid constructor options', options);
        }

        // build fuse options with provided options; fallback to default values.
        // for fuse options, see https://github.com/krisk/Fuse/blob/master/src/index.js#L6
        this._fuseOptions = _.assign({}, {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                "name"
            ]
        }, options._fuseOptions);


        this._selectors = {
            list: options.listSelector,
            searchInput: options.searchInputSelector,
            productItem: options.productItemSelector,
            productFilter: options.productFilterSelector
        };

    };

    /**
     * Initialize the product manager and starts listening to DOM for queries
     * Make sure the DOM has been rendered before call this method.
     */
    ProductManager.prototype.init = function () {

        // bind methods used as callback
        this._onSearchKeyDown = this._onSearchKeyDown.bind(this);
        this._onFilterClicked = this._onFilterClicked.bind(this);

        // setup DOM-related internal variables
        this._$productList = $(this._selectors.list);
        this._$search = this._$productList.find(this._selectors.searchInput);
        this._$productItems = this._$productList.find(this._selectors.productItem);
        this._$productFitler = this._$productList.find(this._selectors.productFilter);

        this._initFuse();

        this._hookListeners();
    };

    /**
     * Initialization logic for Fuse
     * @private
     */
    ProductManager.prototype._initFuse = function () {
        var data = this._getListFromDOM();
        // keep a reference to fuse instance
        this._fuse = new Fuse(data, this._fuseOptions);
    };


    /**
     * Extract the product list data from the DOM
     * @private
     */
    ProductManager.prototype._getListFromDOM = function () {
        return this._$productList.find(this._selectors.productItem).map(function () {
            return $(this).data();
        });
    };

    /**
     * Hook DOM listeners
     * @private
     */
    ProductManager.prototype._hookListeners = function () {
        this._$search.on('keydown', this._onSearchKeyDown);
        this._$productFitler.on('click', this._onFilterClicked);
    };

    /**
     * Handles keydown event from search input
     * @param {jQuery.Event} event
     * @private
     */
    ProductManager.prototype._onSearchKeyDown = function (event) {
        // only consider "enter" key
        if (event.which !== 13) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();

        var searchToken = this._$search.val().trim();
        if (searchToken === '') {
            // empty case : reset result
            this.resetResult();
            return;
        }

        // the fuse search itself
        var result = this._fuse.search(searchToken);
        var resultIDs = _.map(result, function (item) {
            return item.id;
        });

        // loop through each product and hide/show accordingly
        this._$productItems.each(function () {
            // extract id
            var id = $(this).data('id');

            // make sure id is defined
            if (_.isUndefined(id)) {
                return;
            }

            var matchResult = resultIDs.indexOf(id) > -1;
            if (!matchResult) {
                $(this).hide();
                return;
            }
            $(this).show();
        });

    };


    /**
     * Reset results
     */
    ProductManager.prototype.resetResult = function () {
        this._$productItems.each(function () {
            $(this).show();
        });
    };


    /**
     * Filter product items by category
     * @param {String} category
     */
    ProductManager.prototype.filterByCategory = function (category) {
        if (!category) {
            return;
        }
        this._$productItems.each(function () {
            var dataCategory = $(this).data('category');
            if (dataCategory === category) {
                $(this).show();
                return;
            }
            $(this).hide();
        });
    };


    /**
     * Handles click event from a product filter
     * @param {jQuery.Event} event
     * @private
     */
    ProductManager.prototype._onFilterClicked = function (event) {
        event.preventDefault();
        event.stopPropagation();
        var category = $(event.currentTarget).data('category');
        if (!category) {
            return;
        }
        if (category === 'all') {
            this.resetResult();
            return;
        }
        this.filterByCategory(category);
    };


    /**
     * Unhook DOM listeners
     * @private
     */
    ProductManager.prototype._unhookListeners = function () {
        this._$search.off('keydown', this._onSearchKeyDown);
    };

    // attach the class to a global
    window.cq = _.assign({}, window.cq, {
        ProductManager: ProductManager
    })

})(jQuery);