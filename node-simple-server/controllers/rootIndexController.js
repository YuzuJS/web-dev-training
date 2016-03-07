var View = require("../View");
var indexView;

exports.init = function () {
    indexView = new View("index");
};

exports.canAccept = function (req) {
    return req.method === "GET" && req.url === "/";
};

exports.handleRequest = function (req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.write(indexView.render());
    res.end();
};
