var db = require("../models");

 module.exports = function(app) {

//Get the home application page
app.get('/posts', function(req,res){
	db.Post.find({}, function(err, posts){
		if (err){
			console.log(err);
		} 
		res.json(posts);
	});
});

// To get a form to save a new post
app.get('/posts/new', function (req,res){
	res.render('posts/new');
});

//To save a new post
app.post('/posts', function (req,res){
  db.Post.create(req.body.post, function(err, post){
    if(err){
      var errorText = "Title can't be blank";
      res.render("posts/new", {error: errorText});
    } else {
      res.redirect("/");
    }
  });
});

//To Find a post by ID and display info
app.get('/posts/:id', function (req, res){
	db.Post.findById(req.params.id, function(err, foundpost){
    if(err){
      res.render("404");
    } else {
      res.render('posts/show', {post: foundpost});
    }
  });

});

//Update page for specific post information on page
app.get('/posts/update/:id', function (req, res){
 db.Post.findById(req.params.id, function(err, foundpost){
    if(err){
      res.render("404");
    } else {
      res.render('posts/update', {post:foundpost});
    }
  });
});

//Update info and redirect
app.put('/posts/:id', function (req, res){
 db.Post.findByIdAndUpdate(req.params.id, req.body.post,  function(err, post){
  if(err){
    res.render("404");
  } else{
    res.redirect('/');
  }
 });
});

//Delete a post
app.delete('/posts/:id', function (req, res){
  db.Post.findByIdAndRemove(req.params.id, function(err, post){
    if(err){
      res.render("404");
    } else{
      res.redirect('/');
    }
  });
});


// //Sort Array
app.put('/sort', function(req,res){
db.Posts.find().sort( { name: -1 } );
});
};