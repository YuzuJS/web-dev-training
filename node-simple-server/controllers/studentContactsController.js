var querystring = require("querystring");
var path = require("path");
var fs = require("fs");
var View = require("../View");

var rootFolder = process.cwd();
var dataFolder = path.join(rootFolder, "data");
var dataFile = path.join(dataFolder, "studentContacts.json");
var studentData = {};
var studentAddedView;
var studentAlreadyExistsView;

function loadStudentData() {
    var fileData = fs.readFileSync(dataFile);
    studentData = JSON.parse(fileData.toString());
    console.dir(studentData);
}

function writeStudentData() {
    fs.writeFile(dataFile, JSON.stringify(studentData));
}

exports.init = function () {
    studentAddedView = new View("student-added");
    studentAlreadyExists = new View("student-already-exists");

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
};

exports.canAccept = function (req) {
    return req.method === "POST" && req.url === "/students";
};

exports.handleRequest = function (req, res) {
    var fullBody = "";

    req.on("data", function(chunk) {
        // append the current chunk of data to the fullBody variable
        fullBody += chunk.toString();
    });

    req.on("end", function() {
        var studentInfo = querystring.parse(fullBody);
        var key = new Buffer(studentInfo.email).toString('base64');
        var content = "";
        if (Object.keys(studentData).indexOf(key) !== -1)  {
            content = studentAlreadyExists.render();
        } else {
            studentData[key] = studentInfo;
            content = studentAddedView.render();
            writeStudentData();
        }
        res.writeHead(200, "OK", { "Content-Type": "text/html" });
        res.write(content);
        res.end();
    });
};
