const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AY6mf3kSLwfLcfBTjmfSt0h2JtzTXfIkMrcxfn0zp-f9_W-4n3eYevET-UD-tlqTjmd8QV_nBuOPxUow",
  client_secret:
    "EM6LLlbTBJjhPjnaxvxDIv4jVwt8WOg-XtUQDnidC_Cd2g8efp6qjUhdYIXdf5KuhaNculxGCrRhTw5I",
});

module.exports = paypal;
