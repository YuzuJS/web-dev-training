var View = require("../View");
var studentsView;
var studentView;

exports.init = function () {
    studentsView = new View("students");
    studentView = new View("student");
};

exports.canAccept = function (req) {
    return req.method === "GET" && req.url === "/students";
};

function createStudentsHtml(students) {
    var output = "";

    Object.keys(students).forEach(function (id) {
        output += studentView.render(students[id]);
    });

    return output;
}

exports.handleRequest = function (req, res) {
    var data = {
        students: createStudentsHtml(require("../data/studentContacts.json")),
    };

    var content = studentsView.render(data);

    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.write(content);
    res.end();
};
