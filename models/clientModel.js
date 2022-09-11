const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSchema = new Schema(
  {
    telephone_number: {type: String, required: true, minlength: 9, maxLength: 13},
    merchand: { type: Schema.Types.ObjectId, ref: 'Merchand', required: true },
    favorite_list: [{ type: String }],
    transaction_reference: {type: String, minlength: 2, maxLength: 100},
    transaction_amount: {type: Number, required: true},
  }
);

module.exports = mongoose.model('Client', ClientSchema);