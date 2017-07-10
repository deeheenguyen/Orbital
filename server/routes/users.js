var express = require('express');
var Validator = require('validator');
var router = express.Router();
var isEmpty = require('lodash/isEmpty');
// middleware that is specific to this router
function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)){
    errors.username = "This field is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.password)){
    errors.password = 'This field is required';
  }
  if (Validator.isEmpty(data.passwordConfirmation)){
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
      console.log(isValid);
      if (!isValid) {
        res.status(400).json(errors);
      }

});

module.exports = router
