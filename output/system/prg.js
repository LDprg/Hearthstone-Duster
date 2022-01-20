"use strict";
exports.__esModule = true;
exports.prg = void 0;
var hearthstonejson_client_1 = require("hearthstonejson-client");
var prg = /** @class */ (function () {
    function prg() {
    }
    prg.prototype.load = function (argv) {
        this.args = argv;
        var hsjson = new hearthstonejson_client_1["default"]();
        // get the latest data
        hsjson.getLatest().then(function (cards) {
            console.log(cards);
        });
        switch (this.args[0]) {
            case "sync":
                this.sync();
                break;
            case "dust":
                this.dust();
                break;
        }
    };
    prg.prototype.sync = function () {
    };
    prg.prototype.dust = function () {
    };
    return prg;
}());
exports.prg = prg;
