const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppExperienceSchema = new Schema(
  {
    client: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    rating: {type: Number, min: 1, max: 10 },
    comment: {type: String, required: true, minlength: 2, maxLength: 200},
  }
);

module.exports = mongoose.model('AppExperience', AppExperienceSchema);
