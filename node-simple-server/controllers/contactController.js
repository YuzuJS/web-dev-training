var View = require("../View");
var contactView;

exports.init = function () {
    contactView = new View("contact");
};

exports.canAccept = function (req) {
    return req.method === "GET" && req.url === "/contact";
};

exports.handleRequest = function (req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.write(contactView.render());
    res.end();
};
