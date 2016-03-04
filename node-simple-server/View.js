var fs = require("fs");
var path = require("path");
var rootFolder = process.cwd();
var viewsFolder = path.join(rootFolder, "views");

var templates = {};

function loadTemplate(templateName, cb) {
    var templatePath = path.join(templateStartPath, templateName + ".tpl.html");
    fs.readFile(templatePath, "utf8", cb);
}

function mixinDefaultViewData(data) {
    data.header = templates.header;
    data.footer = templates.footer;
}

function View(templateName) {
    this._template = templates[templateName];
}

View.loadTemplates = function (cb) {
    fs.readdir(viewsFolder, function(err, filenames) {
        if (err) {
            cb(err);
            return;
        }
        filenames.forEach(function(filename) {
            var templateName = filename.split(".")[0];
            var templatePath = path.join(viewsFolder, filename);
            fs.readFile(templatePath, "utf-8", function(err, content) {
                if (err) {
                    cb(err);
                    return;
                }
                templates[templateName] = content;
                cb();
            });
        });
    });
};

View.prototype.render = function (data) {
    var data = Object.create(data);
    mixinDefaultViewData(data);

    return this._template.replace(/{{(.*?)}}/g, function (_, varName) {
        return data[varName] || "";
    });
};

module.exports = View;
