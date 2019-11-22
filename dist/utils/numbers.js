"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numbers = (function () {
    function Numbers() {
    }
    Numbers.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Numbers.roundBy = function (target, rounder) {
        return Math.floor(target / rounder) * rounder;
    };
    return Numbers;
}());
exports.Numbers = Numbers;
