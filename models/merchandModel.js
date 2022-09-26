const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MerchandSchema = new Schema(
  {
    merchand_code: {type: String, required: true, maxLength: 100},
    merchand_token: {type: String, required: true, maxLength: 100},
    merchand_private_token: {type: String, required: true, maxLength: 1000},
    registered: {type: Boolean},
    merchand_name: {type: String, required: true, maxLength: 100},
    business_name: {type: String, required: true, maxLength: 100},
    telephone_number: {type: String, required: true, maxLength: 100},
    email_address: {type: String, required: true, maxLength: 100},

  }
);

module.exports = mongoose.model('Merchand', MerchandSchema);