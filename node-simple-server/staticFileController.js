var path = require("path");
var fs = require("fs");

function write500(err, response) {
    response.writeHead(500, err.message);
    response.end();
}

function serve404file(err, response) {
    var filename = path.join(process.cwd(), "static", "404.html");
    fs.readFile(filename, "binary", function (err, file) {
        if (err) {
            write500(err, response);
            return;
        }
        response.writeHead(404);
        response.write(file, "binary");
        response.end();
    });
}

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

