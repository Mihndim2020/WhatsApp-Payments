const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerExperienceSchema = new Schema(
  {
    telephone_number: {type: String, min: 9, max: 13 },
    merchand_code: { type: String},    
    rating: {type: Number, min: 1, max: 10 },
    comment: {type: String, required: true, minlength: 2, maxLength: 200},
  }
);

module.exports = mongoose.model('CustomerExperience', CustomerExperienceSchema);
