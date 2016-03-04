var http = require("http");
var View = require("./View");
var staticFiles = require("./controllers/staticFileController");
var studentContacts = require("./controllers/studentContactsController");
var studentList = require("./controllers/studentListController");

var controllers = [studentContacts, studentList, staticFiles];

var server = http.createServer(function(req, res) {
    console.log(req.method + " to " + req.url);

    controllers.some(function (controller) {
        var hasAccepted = controller.canAccept(req);

        if (hasAccepted) {
            controller.handleRequest(req, res);
        }

        return hasAccepted;
    });
});

View.loadTemplates(function (err) {
    if (err) {
        console.error("Server could not load templates: " + err.message);
        return;
    }

    controllers.forEach(function (controller) {
        controller.init();
    });

    server.listen(8080);
});

console.log("Listening on port 8080.");
