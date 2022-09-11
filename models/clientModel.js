const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSchema = new Schema(
  {
    telephone_number: {type: String, required: true, minlength: 9, maxLength: 13},
    merchand: { type: Schema.Types.ObjectId, ref: 'Merchand', required: true },
    customer_experience: { type: Schema.Types.ObjectId, ref: 'CustomerExperience', required: true },
    app_experience: { type: Schema.Types.ObjectId, ref: 'AppExperience', required: true },
    favorite_list: [{ type: String }],
    transaction: { type: Schema.Types.ObjectId, ref: 'Transaction', required: true },
  }
);

module.exports = mongoose.model('Client', ClientSchema);