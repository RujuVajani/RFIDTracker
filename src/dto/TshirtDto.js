"use strict";
exports.__esModule = true;
var TshirtDto = /** @class */ (function () {
    function TshirtDto(color, size, label, rfid, lastLocation, pastLocations) {
        this.pastLocations = new Array(0);
        color !== void (0) && (this.color = color);
        size !== void (0) && (this.size = size);
        label !== void (0) && (this.label = label);
        rfid !== void (0) && (this.rfid = rfid);
        lastLocation !== void (0) && (this.lastLocation = lastLocation);
        pastLocations !== void (0) && (this.pastLocations = pastLocations);
    }
    return TshirtDto;
}());
exports.TshirtDto = TshirtDto;
