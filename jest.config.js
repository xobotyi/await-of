const path = require("path");

module.exports = {
    verbose:              true,
    bail:                 true,
    testEnvironment:      "node",
    moduleFileExtensions: [
        "js",
    ],
    collectCoverageFrom:  [
        'src/await-of.js',
    ],
    coverageDirectory:    path.join(__dirname, 'coverage'),
};
