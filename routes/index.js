exports.login = require("./login");

exports.show = function(req, res, next) {
	res.render("index", {msg: "You found my s00per secret message ermahgerd",
						 log: "Log Out"
						});
};