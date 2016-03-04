var querystring = require("querystring");
var path = require("path");
var fs = require("fs");

var rootFolder = process.cwd();
var dataFolder = path.join(rootFolder, "data");
var dataFile = path.join(dataFolder, "studentContacts.json");
var studentData = {};

function loadStudentData() {
    var fileData = fs.readFileSync(dataFile);
    studentData = JSON.parse(fileData.toString());
    console.dir(studentData);
}

function writeStudentData() {
    fs.writeFile(dataFile, JSON.stringify(studentData));
}

exports.init = function () {
    fs.exists(dataFolder, function (exists) {
        if (!exists) {
            fs.mkdirSync(dataFolder);
        }
        if (fs.existsSync(dataFile)) {
            loadStudentData();
        } else {
            writeStudentData();
        }
    });
}

exports.handleRequest = function (req, res) {
    var fullBody = "";

    req.on("data", function(chunk) {
        // append the current chunk of data to the fullBody variable
        fullBody += chunk.toString();
    });

    req.on("end", function() {
        var studentInfo = querystring.parse(fullBody);
        var key = new Buffer(studentInfo.email).toString('base64');
        if (Object.keys(studentData).indexOf(key) !== -1)  {
            res.setHeader("Location", "student-already-exists.html");
            res.writeHead(303, "OK", { "Content-Type": "text/html" });
        } else {
            studentData[key] = studentInfo;
            res.setHeader("Location", "student-added.html");
            res.writeHead(303, "OK", { "Content-Type": "text/html" });
            writeStudentData();
        }
        // output the decoded data to the HTTP response
        res.write("<html><head><title>Post data</title></head><body><pre>");
        res.write(JSON.stringify(studentInfo));
        res.write("</pre></body></html>");
        res.end();
    });
}
