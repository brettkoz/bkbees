const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Order = require('../../models/Order');
const passport = require('passport');

const validateOrderInput = require('../../validators/order');

router.get('/this', (req,res) => {
    res.json({
        success:true,
        message:'success, cunt'
    });
});

router.post('/queen', passport.authenticate("jwt", { session: false }), (req,res) => {
    const { errors, isValid } = validateOrderInput(req.body);
  if (!isValid) {
    console.log("errors with input validation for register " + errors);
    return res.status(400).json(errors);
  }
  let currentOrder = new Order({
    date: Date.now(),
    type: req.body.type,
    quantity: req.body.quantity,
    email: req.body.email,
    phone: req.body.phone,
    pending: true
  });
   Order.findOne({email:req.body.email,type:req.body.type,pending:true})
   .then(order => {
       if (order){
           console.log('found order with that email and order type');
           //FOUND ORDER WITH THAT EMAIL & TYPE - UPDATE ORDER
           return res.status(404).json({msg:'Order Already Exists'}).send();
       } 
       currentOrder.save()
       .then(order => {
            res.status(200).json(order);
       })
       .catch(err => {
            res.status(400).json(err);
       });
   })
   .catch(err => {
       console.log(err);
   })

});

router.delete('/delete', passport.authenticate('jwt',{session:false}), (req,res) =>{
    Order.findByIdAndDelete(req.body.id)
    .then(order => res.json({msg:'Successfully Deleted Order# ' + order.id, success:true}))
    .catch(err =>{
        console.log(err);
        res.json({msg:'Error Deleting Order',success:false})
    });
});

module.exports = router;