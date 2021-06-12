var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMW = /** @class */ (function () {
    function BMW(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    BMW.prototype.commonEngineFunc = function () {
        console.log("Common Function");
    };
    BMW.prototype.start = function () {
        console.log("start");
    };
    BMW.prototype.stop = function () {
        console.log("stop");
    };
    return BMW;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(make, model, year, cruiseControlledEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cruiseControlledEnabled = cruiseControlledEnabled;
        return _this;
    }
    ThreeSeries.prototype.cruiseControl = function () {
        this.cruiseControlledEnabled = true;
        console.log("Cruising");
    };
    ThreeSeries.prototype.start = function () {
        console.log("Button start");
    };
    ThreeSeries.prototype.stop = function () {
        console.log("Button stop");
    };
    return ThreeSeries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries(make, model, year, parkingAssistEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.parkingAssistEnabled = parkingAssistEnabled;
        return _this;
    }
    FiveSeries.prototype.parkingAssist = function () {
        this.parkingAssistEnabled = true;
        console.log("Parked");
    };
    FiveSeries.prototype.start = function () {
        console.log("Remote start");
    };
    FiveSeries.prototype.stop = function () {
        console.log("Remote stop");
    };
    return FiveSeries;
}(BMW));
var threeSeries = new ThreeSeries("BMW", "3511i", "2018", false);
console.log(threeSeries.make + " " + threeSeries.model + " " + threeSeries.year + " " + threeSeries.cruiseControlledEnabled);
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();
console.log("-------------------------------------");
var fiveSeries = new FiveSeries("BMW", "511i", "2018", false);
console.log(fiveSeries.make + " " + fiveSeries.model + " " + fiveSeries.year + " " + fiveSeries.parkingAssistEnabled);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist();
