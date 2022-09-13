const Merchand = require('../models/merchandModel');

exports.merchand_create_post = (req, res, next) => {
  const merchand = new Merchand({
    merchand_code: req.body.merchand_code,
    merchand_token: req.body.merchand_token,
    merchand_name: req.body.merchand_name,
    business_name: req.body.business_name,
    telephone_number: req.body.telephone_number,
    email_address: req.body.email_address,
  });
  merchand.save((err) => {
    if (err) {
      return next(err);
    }
    // Successful - redirect to new author record.
    res.json(merchand);
  });
  };

  exports.find_merchand_code_get = (req, res, next) => {
    async.parallel(
      {
        merchand_code(callback) {
          Merchand.find({ merchand_code: req.params.merchand_code }).exec(callback);
        },
      },
      (err, results) => {
        if (err) {
          return next(err);
        }
        if (results.merchand_code == null) {
          // No results.
          //res.redirect("/catalog/authors");
          return false;
        }
        // Successful, so render.
        //res.render("author_delete", {
          //title: "Delete Author",
          //author: results.author,
         // author_books: results.authors_books,
         

         res.json(merchand_code)
         
        });
      };