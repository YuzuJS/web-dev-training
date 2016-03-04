var http = require("http");
var staticFiles = require("./staticFileController");
var studentContacts = require("./studentContactsController");

var server = http.createServer(function(req, res) {
    console.log(req.method + " to " + req.url);

    if (req.method === "POST" && req.url === "/students") {
        studentContacts.handleRequest(req, res);
    } else {
        staticFiles.handleRequest(req, res);
    }
});

studentContacts.init();
server.listen(8080);
console.log("Listening on port 8080.");
