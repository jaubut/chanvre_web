var shopClient = ShopifyBuy.buildClient({
  accessToken: '6f8f9050db6920ab7756af077abc32d8',
  domain: 'chanvre-quebec.myshopify.com',
  appId: '6'
});


var ui = ShopifyBuy.UI.init(client);
ui.createComponent('product', {
  id: 9679553027,
  node: document.getElementById('my-product')
});
