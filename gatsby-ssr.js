"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceRenderer = undefined;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * That is so that the pathPrefix, which is the timestamp of the build,
 * does not appear on links in the html, by removing the basename of the router
 * @see {@link https://next.gatsbyjs.org/docs/ssr-apis/#replaceStaticRouterComponent}
 * @see {@link https://github.com/gatsbyjs/gatsby/blob/v2.0.0-alpha.20/packages/gatsby/cache-dir/static-entry.js#L114}
 */
var replaceRenderer = function replaceRenderer() {
  return function (_ref) {
    var basename = _ref.basename,
        props = (0, _objectWithoutProperties3.default)(_ref, ["basename"]);
    return _react2.default.createElement(_reactRouterDom.StaticRouter, props);
  };
};
exports.replaceRenderer = replaceRenderer;