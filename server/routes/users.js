var express = require('express');
var router = express.Router();
var validateInput = require('../shared/validation/register.js');
// middleware that is specific to this router

router.post('/', (req, res) => {
      const {errors, isValid} = validateInput(req.body);
      console.log(isValid);
      if (isValid) {
        res.json({success: true});
      } else {
        res.status(400).json(errors);
      }

});

module.exports = router
