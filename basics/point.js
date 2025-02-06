"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointClass5 = void 0;
var PointClass5 = /** @class */ (function () {
    function PointClass5(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.draw = function () {
            console.log('x:' + _this.x + ' y:' + _this.y + " z:" + _this.z);
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(PointClass5.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return PointClass5;
}());
exports.PointClass5 = PointClass5;
