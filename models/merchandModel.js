const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MerchandSchema = new Schema(
  {
    merchand_code: {type: String, required: true, maxLength: 100},
    merchand_token: {type: String, required: true, maxLength: 100},
    merchand_private_token: {type: String, required: true, maxLength: 1000},
    status: {type: String, enum: ["Verified", "Not verified"], default: "Not verified"},
    password: {type: String, minLength: 6, maxLength: 100, default: null},
    merchand_name: {type: String, required: true, maxLength: 100},
    business_name: {type: String, required: true, maxLength: 100},
    telephone_number: {type: String, required: true, maxLength: 100},
    email_address: {type: String, required: true, maxLength: 100},
    average_rating: {type: Number}

  }
);

module.exports = mongoose.model('Merchand', MerchandSchema);