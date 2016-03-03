var http = require("http");
var querystring = require("querystring");
var staticFiles = require("./staticFileController");

var server = http.createServer(function(req, res) {
    console.log(req.method + " to " + req.url);

    if (req.method === "POST" && req.url === "/students") {
        handlePostStudents(req, res);

    } else {
        staticFiles.handleRequest(req, res);
    }
});

function handlePostStudents(req, res) {
    var fullBody = "";

    req.on("data", function(chunk) {
        // append the current chunk of data to the fullBody variable
        fullBody += chunk.toString();
    });

    req.on("end", function() {
        // request ended -> do something with the data
        res.setHeader("Location", "student-added.html");
        res.writeHead(303, "OK", { "Content-Type": "text/html" });

        // parse the received body data
        var studentInfo = querystring.parse(fullBody);
        // console.dir(decodedBody);

        // output the decoded data to the HTTP response
        res.write("<html><head><title>Post data</title></head><body><pre>");
        res.write(JSON.stringify(studentInfo));
        res.write("</pre></body></html>");

        res.end();
    });
}

server.listen(8080);
console.log("Listening on port 8080.");
