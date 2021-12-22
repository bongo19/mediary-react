"use strict";

require("bootstrap/dist/css/bootstrap.css");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./App"));

var _registerServiceWorker = _interopRequireDefault(require("./registerServiceWorker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
var rootElement = document.getElementById('root');

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, {
  basename: baseUrl
}, /*#__PURE__*/_react.default.createElement(_App.default, null)), rootElement);

(0, _registerServiceWorker.default)();