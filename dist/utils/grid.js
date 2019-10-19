"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numbers_1 = require("./numbers");
var Grid = (function () {
    function Grid(size) {
        this.size = size;
    }
    Grid.prototype.generateRandomArray = function (minimum, maximum) {
        var arr = [];
        for (var row = 0; row < this.size; row++) {
            var num = numbers_1.Numbers.getRandomInt(minimum, maximum);
            arr.push(num);
        }
        return arr;
    };
    Grid.prototype.generateRandom = function (minimum, maximum) {
        var grid = [];
        for (var row = 0; row < this.size; row++) {
            var newRow = [];
            for (var col = 0; col < this.size; col++) {
                var num = numbers_1.Numbers.getRandomInt(minimum, maximum);
                newRow.push(num);
            }
            grid.push(newRow);
        }
        return grid;
    };
    return Grid;
}());
exports.Grid = Grid;
