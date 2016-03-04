var View = require("../View");
var studentsView;

exports.init = function () {
    studentsView = new View("students");
};

exports.canAccept = function (req) {
    return req.method === "GET" && req.url === "/students";
};

exports.handleRequest = function (req, res) {
    var data = {
        students: JSON.stringify(require("../data/studentContacts.json")),
    };

    var content = studentsView.render(data);

    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.write(content);
    res.end();
};
