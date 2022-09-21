const CustomerExperience = require('../models/customerExperienceModel');

exports.customer_experience_create_post = (req, res, next) => {
    const customerExperience = new CustomerExperience({
      telephone_number: req.body.telephone_number,
      merchand_code: req.body.merchand_code,
      rating: req.body.rating,
      comment: req.body.comment
    });
    customerExperience.save((err) => {
      if (err) {
        return next(err);
      }
      // Successful - redirect to new author record.
      res.json(customerExperience);
    });
  };
