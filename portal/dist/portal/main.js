(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <h2>CoCoRaHS - Community Colaborative Rain, Hail & Snow Network</h2>\r\n</header>\r\n<app-bar></app-bar>\r\n<app-pie></app-pie>\r\n<app-scatter></app-scatter>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'd3';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bar/bar.component */ "./src/app/bar/bar.component.ts");
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pie/pie.component */ "./src/app/pie/pie.component.ts");
/* harmony import */ var _scatter_scatter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scatter/scatter.component */ "./src/app/scatter/scatter.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _bar_bar_component__WEBPACK_IMPORTED_MODULE_4__["BarComponent"],
                _pie_pie_component__WEBPACK_IMPORTED_MODULE_5__["PieComponent"],
                _scatter_scatter_component__WEBPACK_IMPORTED_MODULE_6__["ScatterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar/bar.component.html":
/*!****************************************!*\
  !*** ./src/app/bar/bar.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Bar Chart</h2>\r\n<figure id=\"bar\"></figure>"

/***/ }),

/***/ "./src/app/bar/bar.component.scss":
/*!****************************************!*\
  !*** ./src/app/bar/bar.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci9iYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bar/bar.component.ts":
/*!**************************************!*\
  !*** ./src/app/bar/bar.component.ts ***!
  \**************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarComponent = /** @class */ (function () {
    function BarComponent() {
        this.data = [
            { 'Framework': 'Vue', 'Stars': '166443', 'Released': '2014' },
            { 'Framework': 'React', 'Stars': '150793', 'Released': '2013' },
            { 'Framework': 'Angular', 'Stars': '62342', 'Released': '2016' },
            { 'Framework': 'Backbone', 'Stars': '27647', 'Released': '2010' },
            { 'Framework': 'Ember', 'Stars': '21471', 'Released': '2011' },
        ];
        this.margin = 50;
        this.width = 750 - (this.margin * 2);
        this.height = 400 - (this.margin * 2);
    }
    BarComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.drawBars(this.data);
    };
    BarComponent.prototype.createSvg = function () {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('figure#bar')
            .append('svg')
            .attr('width', this.width + (this.margin * 2))
            .attr('height', this.height + (this.margin * 2))
            .append('g')
            .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
    };
    BarComponent.prototype.drawBars = function (data) {
        var _this = this;
        // Create the X-axis band scale
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .range([0, this.width])
            .domain(data.map(function (d) { return d.Framework; }))
            .padding(0.2);
        // Draw the X-axis on the DOM
        this.svg.append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x))
            .selectAll('text')
            .attr('transform', 'translate(-10,0)rotate(-45)')
            .style('text-anchor', 'end');
        // Create the Y-axis band scale
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, 200000])
            .range([this.height, 0]);
        // Draw the Y-axis on the DOM
        this.svg.append('g')
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y));
        // Create and fill the bars
        this.svg.selectAll('bars')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', function (d) { return x(d.Framework); })
            .attr('y', function (d) { return y(d.Stars); })
            .attr('width', x.bandwidth())
            .attr('height', function (d) { return _this.height - y(d.Stars); })
            .attr('fill', '#d04a35');
    };
    BarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar',
            template: __webpack_require__(/*! ./bar.component.html */ "./src/app/bar/bar.component.html"),
            styles: [__webpack_require__(/*! ./bar.component.scss */ "./src/app/bar/bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BarComponent);
    return BarComponent;
}());



/***/ }),

/***/ "./src/app/pie/pie.component.html":
/*!****************************************!*\
  !*** ./src/app/pie/pie.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Pie Chart</h2>\r\n<figure id=\"pie\"></figure>"

/***/ }),

/***/ "./src/app/pie/pie.component.scss":
/*!****************************************!*\
  !*** ./src/app/pie/pie.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpZS9waWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pie/pie.component.ts":
/*!**************************************!*\
  !*** ./src/app/pie/pie.component.ts ***!
  \**************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PieComponent = /** @class */ (function () {
    function PieComponent(api) {
        this.api = api;
        this.data = [
            { 'Framework': 'Vue', 'Stars': '166443', 'Released': '2014' },
            { 'Framework': 'React', 'Stars': '150793', 'Released': '2013' },
            { 'Framework': 'Angular', 'Stars': '62342', 'Released': '2016' },
            { 'Framework': 'Backbone', 'Stars': '27647', 'Released': '2010' },
            { 'Framework': 'Ember', 'Stars': '21471', 'Released': '2011' },
        ];
        this.margin = 50;
        this.width = 750;
        this.height = 600;
        // The radius of the pie chart is half the smallest side
        this.radius = Math.min(this.width, this.height) / 2 - this.margin;
        this.scaleBar = [];
    }
    PieComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.createColors();
        this.drawChart();
        this.loadFirst();
    };
    PieComponent.prototype.loadFirst = function () {
        this.api.getFirstScaleBar2017()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
        }))
            .subscribe(function (data) {
            var csvToRowArray = data.split("\n");
            for (var index = 1; index < csvToRowArray.length - 1; index++) {
                var row = csvToRowArray[index].split(",");
            }
        });
    };
    PieComponent.prototype.createSvg = function () {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('figure#pie')
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
    };
    PieComponent.prototype.createColors = function () {
        this.colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"]()
            .domain(this.data.map(function (d) { return d.Stars.toString(); }))
            .range(['#c7d3ec', '#a5b8db', '#879cc4', '#677795', '#5a6782']);
    };
    PieComponent.prototype.drawChart = function () {
        var _this = this;
        // Compute the position of each group on the pie:
        var pie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().value(function (d) { return Number(d.Stars); });
        // Build the pie chart
        this.svg
            .selectAll('pieces')
            .data(pie(this.data))
            .enter()
            .append('path')
            .attr('d', d3__WEBPACK_IMPORTED_MODULE_1__["arc"]()
            .innerRadius(0)
            .outerRadius(this.radius))
            .attr('fill', function (d, i) { return (_this.colors(i)); })
            .attr('stroke', '#121926')
            .style('stroke-width', '1px');
        // Add labels
        var labelLocation = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]()
            .innerRadius(100)
            .outerRadius(this.radius);
        this.svg
            .selectAll('pieces')
            .data(pie(this.data))
            .enter()
            .append('text')
            .text(function (d) { return d.data.Framework; })
            .attr('transform', function (d) { return 'translate(' + labelLocation.centroid(d) + ')'; })
            .style('text-anchor', 'middle')
            .style('font-size', 15);
    };
    PieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pie',
            template: __webpack_require__(/*! ./pie.component.html */ "./src/app/pie/pie.component.html"),
            styles: [__webpack_require__(/*! ./pie.component.scss */ "./src/app/pie/pie.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], PieComponent);
    return PieComponent;
}());



/***/ }),

/***/ "./src/app/scatter/scatter.component.html":
/*!************************************************!*\
  !*** ./src/app/scatter/scatter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Scatter Plot</h2>\r\n<figure id=\"scatter\"></figure>"

/***/ }),

/***/ "./src/app/scatter/scatter.component.scss":
/*!************************************************!*\
  !*** ./src/app/scatter/scatter.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjYXR0ZXIvc2NhdHRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/scatter/scatter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/scatter/scatter.component.ts ***!
  \**********************************************/
/*! exports provided: ScatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterComponent", function() { return ScatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScatterComponent = /** @class */ (function () {
    function ScatterComponent() {
        this.data = [
            { 'Framework': 'Vue', 'Stars': '166443', 'Released': '2014' },
            { 'Framework': 'React', 'Stars': '150793', 'Released': '2013' },
            { 'Framework': 'Angular', 'Stars': '62342', 'Released': '2016' },
            { 'Framework': 'Backbone', 'Stars': '27647', 'Released': '2010' },
            { 'Framework': 'Ember', 'Stars': '21471', 'Released': '2011' },
        ];
        this.margin = 50;
        this.width = 750 - (this.margin * 2);
        this.height = 400 - (this.margin * 2);
    }
    ScatterComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.drawPlot();
    };
    ScatterComponent.prototype.createSvg = function () {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('figure#scatter')
            .append('svg')
            .attr('width', this.width + (this.margin * 2))
            .attr('height', this.height + (this.margin * 2))
            .append('g')
            .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
    };
    ScatterComponent.prototype.drawPlot = function () {
        // Add X axis
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([2009, 2017])
            .range([0, this.width]);
        this.svg.append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x).tickFormat(d3__WEBPACK_IMPORTED_MODULE_1__["format"]('d')));
        // Add Y axis
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, 200000])
            .range([this.height, 0]);
        this.svg.append('g')
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y));
        // Add dots
        var dots = this.svg.append('g');
        dots.selectAll('dot')
            .data(this.data)
            .enter()
            .append('circle')
            .attr('cx', function (d) { return x(d.Released); })
            .attr('cy', function (d) { return y(d.Stars); })
            .attr('r', 7)
            .style('opacity', .5)
            .style('fill', '#69b3a2');
        // Add labels
        dots.selectAll('text')
            .data(this.data)
            .enter()
            .append('text')
            .text(function (d) { return d.Framework; })
            .attr('x', function (d) { return x(d.Released); })
            .attr('y', function (d) { return y(d.Stars); });
    };
    ScatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scatter',
            template: __webpack_require__(/*! ./scatter.component.html */ "./src/app/scatter/scatter.component.html"),
            styles: [__webpack_require__(/*! ./scatter.component.scss */ "./src/app/scatter/scatter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScatterComponent);
    return ScatterComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getFirstScaleBar2017 = function () {
        return this.http.get("assets/files/ScaleBar-2017.csv", { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('test')));
    };
    ApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error, caught) {
            var message = 'An unknown error has occurred.';
            if (error instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["TimeoutError"]) {
                message = 'The server request has timed out. Please try again later.';
            }
            else if ((typeof error) === 'string') {
                message = error;
            }
            else if (error.error.Error) {
                message = error.error.Error.Message;
            }
            else if (error.Error) {
                message = error.Error.Message;
            }
            else {
                message = error.message;
            }
            if (message === 'Http failure response for (unknown url): 0 Unknown Error') {
                message = 'The server is unreachable at this time. Please try again later.';
            }
            else if (message === 'An error occurred while updating the entries. See the inner exception for details.') {
                message = 'An unexpected internal server error has occurred.';
            }
            else if (message.includes('was not present in the dictionary')) {
                message = 'An error occurred when saving the document. Check the document properties and try again.';
            }
            console.log(message);
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        };
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Repos\Solliance-CoCoRaHS-AI\portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map