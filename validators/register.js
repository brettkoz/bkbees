const Validator = require("validator");
const isEmpty = require("./is-empty");

const validateRegisterInput = data => {
  console.log(data);
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name Must Be Between 2 And 30 Characters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name Field Is Required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Field Is Required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email Is Invalid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Field Is Required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password Must Be At Least 6 Characters";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password = "Confirm Password Field Is Required";
  }
  if (!data.password === data.password2) {
    errors.password = "Passwords Must Match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateRegisterInput;
