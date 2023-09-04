"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONobject = exports.getUserId = exports.isLogged = void 0;
const index_1 = require("../functions/index");
exports.getUserId = (0, index_1.getIDRandom)(10000, 100000000);
exports.JSONobject = JSON.parse('{"userID":"231313"}');
