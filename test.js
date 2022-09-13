// Display Author delete form on GET.
exports.author_delete_get = (req, res, next) => {
    async.parallel(
      {
        author(callback) {
          Author.findById(req.params.id).exec(callback);
        },
        authors_books(callback) {
          Book.find({ author: req.params.id }).exec(callback);
        },
      },
      (err, results) => {
        if (err) {
          return next(err);
        }
        if (results.author == null) {
          // No results.
          res.redirect("/catalog/authors");
        }
        // Successful, so render.
        res.render("author_delete", {
          title: "Delete Author",
          author: results.author,
          author_books: results.authors_books,
        });
      }
    );
  };
  