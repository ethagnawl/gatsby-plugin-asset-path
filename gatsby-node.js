"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onPostBuild = exports.onCreateWebpackConfig = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fsExtra = require("fs-extra");

var fs = _interopRequireWildcard(_fsExtra);

var _path = require("path");

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes the .map files
 * @see {@link https://next.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig}
 * @see {@link https://github.com/gatsbyjs/gatsby/blob/v2.0.0-alpha.20/packages/gatsby/src/utils/webpack.config.js#L411}
 * @see {@link https://github.com/gatsbyjs/gatsby/blob/v2.0.0-alpha.20/packages/gatsby/src/utils/webpack.config.js#L240}
 * @param {*} param0
 */
var onCreateWebpackConfig = exports.onCreateWebpackConfig = function onCreateWebpackConfig(_ref, _ref2) {
  var stage = _ref.stage,
      actions = _ref.actions;
  var removeMapFiles = _ref2.removeMapFiles;

  if (removeMapFiles === true && stage === "build-javascript") {
    actions.setWebpackConfig({
      devtool: false
    });
  }
};

/**
 * Moves all js and css files into timestamp-named folder
 * @see {@link https://next.gatsbyjs.org/docs/node-apis/#onPostBuild}
 */
var onPostBuild = exports.onPostBuild = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref3) {
    var pathPrefix = _ref3.pathPrefix;
    var publicFolder, assetFolder, files, staticFolder, currentStaticPath, newStaticPath, sitemap, currentSitemapPath, newSitemapPath;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            publicFolder = "./public";
            assetFolder = path.join(publicFolder, "." + pathPrefix);

            // Move js and css files

            files = fs.readdirSync(publicFolder);
            _context.next = 5;
            return _promise2.default.all(files.map(function (file) {
              if (/.*\.(js|css)$/.test(file)) {
                var currentPath = path.join(publicFolder, file);
                var newPath = path.join(assetFolder, file);
                return fs.move(currentPath, newPath);
              }
            }));

          case 5:

            // Move data files
            staticFolder = "static";
            currentStaticPath = path.join(publicFolder, staticFolder);
            newStaticPath = path.join(assetFolder, staticFolder);
            _context.next = 10;
            return fs.move(currentStaticPath, newStaticPath);

          case 10:

            // Copy sitemap.xml
            sitemap = "sitemap.xml";
            currentSitemapPath = path.join(publicFolder, sitemap);
            newSitemapPath = path.join(assetFolder, sitemap);
            _context.next = 15;
            return fs.copy(currentSitemapPath, newSitemapPath);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function onPostBuild(_x) {
    return _ref4.apply(this, arguments);
  };
}();