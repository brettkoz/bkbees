const mongoose = require('mongoose');
const User = require('./User');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
   date:{
       type:Date,
       required:true
   },
   type:{
       type:String,
       required:true
   },
   pending:{
       type:Boolean,
       required:true
   },
   phone:{
        type:String,
        required:true
   },
   email:{
       type:String,
       required:true
   },
   quantity:{
       type:Number,
       required:true
   }

});


module.exports = Order = mongoose.model('order', OrderSchema);