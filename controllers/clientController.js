const Client = require('../models/clientModel');


exports.client_create_post = (req, res, next) => {
    const client = new Client({
        telephone_number: req.body.telephone_number,
        merchand_code: req.body.merchand_code,
        favorite_list: req.body.favorite_list,
        transaction_reference: req.body.transaction_reference,
        transaction_amount: req.body.transaction_amount,
      });
      client.save((err) => {
        if (err) {
          return next(err);
        }
        // Successful - redirect to new author record.
        res.json(client);
      });
  };

