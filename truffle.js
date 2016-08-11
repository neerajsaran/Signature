module.exports = {
  build: {
    "index.html": "index.html",
    "client_sig.html": "client_sig.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "geth_sig.js": [
      "javascripts/geth_sig.js"
    ],
    "client_sig.js": [
      "javascripts/_vendor/lightwallet.js",
      "javascripts/_vendor/hooked-web3-provider.js",
      "javascripts/client_sig.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  rpc: {
//    host: "192.168.1.179",
    host: "10.93.20.33",
    port: 8545
  }
};
