const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Order = require("../../models/Order");
const config = require("./../../config/woocommerce");
const paypalConfig = require("./../../config/paypal");
const passport = require("passport");
const WooCommerceAPI = require("woocommerce-api");
const paypal = require("paypal-rest-sdk");

//PAYPAL AND WOOCOMMERCE CONFIGURE

paypal.configure({
  mode: "sandbox",
  client_id: paypalConfig.sandbox.clientId,
  client_secret: paypalConfig.sandbox.secret
});

var WooCommerce = new WooCommerceAPI({
  url: config.STORE_URL, // Your store URL
  consumerKey: config.CONSUMER_KEY, // Your consumer key
  consumerSecret: config.CONSUMER_SECRET, // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: "wc/v2" // WooCommerce WP REST API version
});
function getProductData(productId) {
  console.log("executing getProductData " + productId);
  return new Promise((resolve, reject) => {
    WooCommerce.get("products/" + productId, (err, data, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("Data: " + data);
        console.log("Res: " + res);
        resolve(res);
      }
    });
  });
}
function getProductInfo(productId, quantity) {
  console.log("executing purchaseProduct " + productId);
  return new Promise((resolve, reject) => {
    WooCommerce.get("products/" + productId, (err, data, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("got data from woocommerce");
        resolve(res);
      }
    });
  });
}

const validateOrderInput = require("../../validators/order");

//START ROUTES

router.get("/this", (req, res) => {
  res.json({
    success: true,
    message: "success, cunt"
  });
});

router.post("/products", (req, res) => {
  console.log("got to products, product ID: " + JSON.stringify(req.body));
  let productInfo = getProductData(req.body.productId);
  productInfo.then(
    response => {
      res.send(response);
      console.log(res);
    },
    err => {
      console.log(err);
    }
  );
});
router.post(
  "/purchase",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    var productId = req.body.productId;
    var productInfo = getProductInfo(productId, req.body.quantity);
    productInfo.then(
      response => {
        response = JSON.parse(response);
        console.log("response: " + response["price"]);
        var currentPrice = parseFloat(response["price"]);
        console.log("price: " + currentPrice);
        if (
          response.hasOwnProperty("price") &&
          response["price"] !== null &&
          !isNaN(response["price"])
        ) {
          response["price"] = +response["price"];
        }
        console.log("quantity: " + req.body.quantity);
        var total = req.body.quantity * response.price + 4;
        console.log("total: " + total);
        var create_payment_json = {
          intent: "sale",
          payer: {
            payment_method: "paypal"
          },
          redirect_urls: {
            return_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
          },
          transactions: [
            {
              item_list: {
                items: [
                  {
                    name: response.name,
                    sku: response.name,
                    price: response.price + 4,
                    currency: "USD",
                    quantity: req.body.quantity
                  }
                ]
              },
              amount: {
                currency: "USD",
                total: total
              },
              description: response.short_description
            }
          ]
        };

        paypal.payment.create(create_payment_json, function(error, payment) {
          console.log(
            "orderInfo from paypal.payment.create: " +
              JSON.stringify(create_payment_json)
          );
          if (error) {
            console.log(
              "error from paypal.payment.create: " + JSON.stringify(error)
            );
          } else {
            for (let i = 0; i < payment.links.length; i++) {
              if (payment.links[i].rel === "approval_url") {
                const redirectURL = payment.links[i].href;
                console.log(redirectURL);
                res.send({ success: true, url: redirectURL });
              }
            }
          }
        });
      },
      err => {
        console.log(err);
      }
    );
  }
);
router.post("/execute", (req, res) => {
  const payerId = req.body.payerId;
  const paymentId = req.body.paymentId;
});
router.post("/order", (req, res) => {
  const { errors, isValid } = validateOrderInput(req.body);
  if (!isValid) {
    console.log("error");
    return res.status(400).json(errors);
  }
  let currentOrder = new Order({
    date: Date.now(),
    type: req.body.type,
    quantity: req.body.quantity,
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    marked: req.body.marked,
    pending: true
  });
  currentOrder
    .save()
    .then(order => {
      res.status(200).json(order);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Order.findByIdAndDelete(req.body.id)
      .then(order =>
        res.json({
          msg: "Successfully Deleted Order# " + order.id,
          success: true
        })
      )
      .catch(err => {
        console.log(err);
        res.json({ msg: "Error Deleting Order", success: false });
      });
  }
);

router.get(
  "/orders",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("got to get orders");
    if (!req.user.admin) {
      res.status(400).json({ msg: "You do not have access to that route" });
    } else {
      Order.find({ pending: true })
        .then(orders => {
          console.log("got orders");
          res.json(orders);
        })
        .catch(err => {
          console.log("error getting orders");
          res.status(400).json({ error: "error getting orders" });
        });
    }
  }
);

module.exports = router;
