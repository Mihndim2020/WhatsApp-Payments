const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerExperienceSchema = new Schema(
  {
    client: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    merchand: { type: Schema.Types.ObjectId, ref: 'Merchand', required: true },    
    rating: {type: Number, min: 1, max: 10 },
    comment: {type: String, required: true, minlength: 2, maxLength: 200},
  }
);

module.exports = mongoose.model('CustomerExperience', CustomerExperienceSchema);
