"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _http = require('http');
var _servicejs = require('./lib/service.js'); var _servicejs2 = _interopRequireDefault(_servicejs);

_servicejs2.default.call(void 0, 1).then(res=> console.log(res));