const AppExperience = require('../models/appExperienceModel');

exports.app_experience_create_post = (req, res, next)  => {
  const appExperience = new AppExperience({
    telephone_number: req.body.telephone_number,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  appExperience.save((err) => {
    if (err) {
      return next(err);
    }
    // Successful - redirect to new author record.
    res.json(appExperience);
  });
  };


