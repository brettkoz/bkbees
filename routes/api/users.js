const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config/database");
const passport = require("passport");

//validation
const validateRegisterInput = require("../../validators/register");
const validateLoginInput = require("../../validators/login");

//Register User
router.post("/register", (req, res) => {
  console.log("got to register at api");
  //input validation
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    console.log("errors with input validation for register " + errors);
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email Already Exists";
      return res.status(400).json(errors);
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

//Log In
router.post("/login", (req, res) => {
  //input validation
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    console.log("errors with input validation for login " + errors);
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        errors.email = "User Not Found";
        res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = { id: user.id, name: user.name, email: user.email };
          jwt.sign(
            payload,
            config.secret,
            { expiresIn: 86400 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          errors.password = "Invalid Password";
          res.status(400).json(errors);
        }
      });
    })
    .catch(err => {
      if (err) {
        console.log(
          "There was an error returning User with that email at api/users/login"
        );
        throw err;
      }
    });
});

//Current User - Protected Route

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
