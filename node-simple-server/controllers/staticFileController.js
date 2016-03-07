var View = require("../View");
var path = require("path");
var fs = require("fs");
var fourZeroFourView;

function write500(err, response) {
    response.writeHead(500, err.message);
    response.end();
}

function serve404file(err, response) {
    response.writeHead(404);
    response.write(fourZeroFourView.render(), "utf8");
    response.end();
}

exports.init = function () {
    fourZeroFourView = new View("404");
};

// Assume: Static file controller should be the last controller registered.
exports.canAccept = function () {
    return true;
};

exports.handleRequest = function (request, response) {
    var filename = path.join(process.cwd(), "static", request.url);

    fs.stat(filename, function (err, stats) {
        if (err) {
            if (err.code === "ENOENT") {
                serve404file(err, response);
            } else {
                write500(err, response);
            }
            return;
        }
        if (stats.isDirectory()) {
            filename = path.join(filename, "index.html");
        } else if (!stats.isFile()) {
            serve404file({ message: "" }, response);
            return;
        }

        fs.readFile(filename, "binary", function (err, file) {
            if (err) {
                write500(err, response);
                return;
            }
            response.writeHead(200);
            response.write(file, "binary");
            response.end();
        });
    });
};

