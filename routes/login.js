exports.show = function(req, res, next) {
	if (req.session.authorized) {
		req.session.destroy();
		console.log("hoyy " + req.session);
		res.redirect("/");
	}
	else
		res.render("login");
};

exports.check = function(req, res, next) {
    if (req.body.username === "H" && req.body.password === "H") {
    	req.session.authorized = true;
    }
    else {
    	req.session.authorized = false;
        res.render("login", {
        					 log: "Username or password incorrect",
        					 username: req.body.username,
        					 password: req.body.password,
        					 col: "red"
        					});
    }
};