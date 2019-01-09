"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceComponentRenderer = undefined;

var _createBrowserHistory = require("history/createBrowserHistory");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes prefix from paths once links are clicked on by removing the basename
 * @see {@link https://github.com/gatsbyjs/gatsby/blob/v2.0.0-alpha.20/packages/gatsby/cache-dir/history.js#L10}
 */
var replaceComponentRenderer = exports.replaceComponentRenderer = function replaceComponentRenderer() {
  return (0, _createBrowserHistory2.default)();
};