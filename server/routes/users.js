var express = require('express');
var validator = require('validator');
var isEmpty = require('lodash/isEmpty');

let router = express.Router();

function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.username)){
    errors.username = "This field is required";
  }
  if (Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isNull(data.password)){
    errors.password = 'This field is required';
  }
  if (Validator.isNull(data.passwordConfirmation)){
    errors.passwordConfirmation = 'This field is required';
  }
  if (Validator.equals(data.password, data.passwordConfirmation)){
    errors.passwordConfirmation = 'Password must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
router.post('/', (req, res) => {

      console.log('runiing the router/post');
      console.log(req.body);
      const {errors, isValid} = validateInput(req.body);

      if (!isValid) {
        res.status(400).json(errors);
      }

});

module.exports = router;
