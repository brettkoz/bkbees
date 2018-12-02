const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Order = require("../../models/Order");
const passport = require("passport");

const validateOrderInput = require("../../validators/order");

router.get("/this", (req, res) => {
  res.json({
    success: true,
    message: "success, cunt"
  });
});

router.post(
  "/order",
  (req, res) => {
    const { errors, isValid } = validateOrderInput(req.body);
    if (!isValid) {
      console.log('error');
      return res.status(400).json(errors);
    }
    let currentOrder = new Order({
      date: Date.now(),
      type: req.body.type,
      quantity: req.body.quantity,
      email: req.body.email,
      name:req.body.name,
      phone: req.body.phone,
      marked:req.body.marked,
      pending: true
    });
    currentOrder.save()
          .then(order => {
            res.status(200).json(order);
          })
          .catch(err => {
            res.status(400).json(err);
          }); 
  }
);

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
        })
        .catch(err => {
          console.log("error getting orders");
        });
    }
  }
);

module.exports = router;
