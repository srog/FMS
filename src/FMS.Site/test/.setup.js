require("babel-register")();
var lint = require("mocha-eslint");
var jsdom = require("jsdom").jsdom;


var exposedProperties = ["window", "navigator", "document"];

global.document = jsdom("");
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === "undefined") {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: "node.js"
};

documentRef = document;

var tests = ["test/**/*.tests.js"];
var lintOptions = {
    strict: true,
    timeout: 10000
};

lint(tests, lintOptions);