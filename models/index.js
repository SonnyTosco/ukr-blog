var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/ukr-blog");

mongoose.set("debug", true);

module.exports.User = require("./user");
module.exports.Post = require("./post");
