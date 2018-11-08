const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateOrderInput = data => {
  console.log(data);
  //
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.quantity = !isEmpty(data.quantity) ? data.quantity : 0;

if (Validator.isEmpty(data.email)) {
    errors.email = "Email Field Is Required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email Is Invalid";
  }
  if (Validator.isEmpty(data.type)){
      errors.orderType = "Order Type Is Required";
  }
  if (data.quantity <= 0){
    errors.quantity = "Quantity Has To Be More Than 0"
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateOrderInput;