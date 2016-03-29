var express = require("express");
var http = require("http");
var path = require("path");
var session = require("express-session");
var bodyParser = require("body-parser");
var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 4444);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: "2C44774A-D649-4D44-9535-46E296EF974F",
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

var authorize = function(req, res, next) {
    if (req.session.authorized) {
        next();
    }
    else {
        var error = new Error();
        error.status = 401;
        next(error);
    }
};

app.get("/", authorize, routes.show);
//app.post("/", routes.login.check, authorize, routes.show);
app.delete("/", function (req, res, next) {
    console.log(req.body.username + " " + req.body.password);
});
app.get("/login", routes.login.show);

app.use(function(req, res, next) {
    res.status(404).send("ya dun goofd sir");
});

app.use(function(err, req, res, next) {
    res.render("index", {msg: "Unauthorized, please log in",
                         log: "Log In"
                        });
});

var server = http.createServer(app);
var boot = function () {
    server.listen(app.get('port'), function(){
        console.info('Express server listening on port ' + app.get('port'));
    });
}
var shutdown = function() {
    server.close();
}

if (require.main === module) {
    boot();
}
else {
    console.info('Running app as a module');
    exports.boot = boot;
    exports.shutdown = shutdown;
    exports.port = app.get('port');
}
