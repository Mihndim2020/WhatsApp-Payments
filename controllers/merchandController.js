const Merchand = require('../models/merchandModel');

const async = require('async');

exports.merchand_create_post = (req, res, next) => {
  const merchand = new Merchand({
    merchand_code: req.body.merchand_code,
    merchand_token: req.body.merchand_token,
    merchand_name: req.body.merchand_name,
    business_name: req.body.business_name,
    telephone_number: req.body.telephone_number,
    email_address: req.body.email_address,
  });
  merchand.save((err) => {
    if (err) {
      return next(err);
    }
    // Successful - redirect to new author record.
    res.json(merchand);
  });
  };


  exports.find_merchand_code_get = (req, res, next) => {

    console.log('testing the find method')

    Merchand.find({ merchand_code: req.body.merchand_code }, function (err, results) {
      if (err){
        return next(err);
      }
      if (results[0] == undefined){
        console.log('case of incorrect value');
        console.log(results);
        return false;
        
      }
      else{
        console.log('case of correct value');
        console.log(results[0]);
        //const value = (results[0]);
        //const response = JSON.stringify(value);
        //const response = value;
        //console.log(results[0]);
        //return response;
        //return results[0];
        //return JSON.stringify(results[0]);
        // The function returns only valid JSON
        const response = results[0];
        //res.json(results[0]);
        res.json(response);
      }
  });

  };  