var querystring = require("querystring");
var path = require("path");
var fs = require("fs");

var rootFolder = process.cwd();
var dataFolder = path.join(rootFolder, "data");
var dataFile = path.join(dataFolder, "studentContacts.json");
var studentData = {};
var studentAddedView;
var studentAlreadyExistsView;

var express = require('express');
var router = express.Router();

function loadStudentData() {
    var fileData = fs.readFileSync(dataFile);
    studentData = JSON.parse(fileData.toString());
    console.dir(studentData);
}

function writeStudentData() {
    fs.writeFile(dataFile, JSON.stringify(studentData));
}

(function init() {
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
})();

router.post('/', function(req, res, next) {
    var studentInfo = req.body;
    console.dir(req.body);
    var key = new Buffer(studentInfo.email).toString('base64');
    var content = "";
    if (Object.keys(studentData).indexOf(key) !== -1)  {
        // todo: render student already exists
    } else {
        studentData[key] = studentInfo;
        //todo: render student added
        writeStudentData();
    }
    res.send('OK');
});

module.exports = router;
