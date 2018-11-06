const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

router.get("/this", (req, res) => {
  res.json({
    success: true,
    message: "success, cunt"
  });
});

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email Already Exists" });
      console.log("Email Already Exists Error Registering User");
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.json(user);
              console.log("registered user: " + user);
            })
            .catch(err => {
              console.log("error saving user" + err);
            });
        });
      });
    }
  });
});

module.exports = router;
