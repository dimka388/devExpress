webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/DevExpDataGrid/datagrid.component.html":
/***/ (function(module, exports) {

module.exports = "<dx-data-grid\r\n\tclass=\"data-grid-container\"\r\n\t[dataSource]=\"items\">\r\n</dx-data-grid>"

/***/ }),

/***/ "../../../../../src/app/DevExpDataGrid/datagrid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dx-datagrid-rowsview td {\n  vertical-align: middle !important;\n  white-space: normal; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/DevExpDataGrid/datagrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataGridComponent = (function () {
    function DataGridComponent() {
        this.items = [];
    }
    return DataGridComponent;
}());
DataGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-grid-app',
        template: __webpack_require__("../../../../../src/app/DevExpDataGrid/datagrid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/DevExpDataGrid/datagrid.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DataGridComponent);

//# sourceMappingURL=datagrid.component.js.map

/***/ }),

/***/ "../../../../../src/app/FileUpload/fileupload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-section\">\r\n    <h2>Smart submission process</h2>\r\n    <p>Please use our smart upload form. After your documents have been uploaded, the system will fill the information in the upcoming forms. Please check it and make edits if necessary. After that feel free to submit!</p>\r\n    <!-- Fine-Uploader selector element -->\r\n    <div id=\"fine-uploader-manual-trigger\"></div>\r\n    <!-- Fine-Uploader HTML template -->\r\n    <div id=\"qq-template-manual-trigger\">\r\n        <div class=\"qq-uploader-selector qq-uploader qq-gallery\" qq-drop-area-text=\"Drop files here\">\r\n            <ul class=\"qq-upload-list-selector qq-upload-list\" role=\"region\" aria-live=\"polite\" aria-relevant=\"additions removals\">\r\n                <li>\r\n                    <div class=\"row\">\r\n                        <div class=\"cell\">\r\n                            <div class=\"qq-file-info\">\r\n                                <div class=\"qq-file-name\">\r\n                                    <span class=\"qq-upload-file-selector qq-upload-file\"></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"cell\">\r\n                            <span class=\"qq-edit-filename-icon-selector qq-btn qq-edit-filename-icon\" aria-label=\"Edit filename\"></span>\r\n                            <input class=\"qq-edit-filename-selector qq-edit-filename\" tabindex=\"0\" type=\"text\">\r\n                        </div> -->\r\n                        <div class=\"cell\">\r\n                            <span class=\"qq-upload-size-selector qq-upload-size\"></span>\r\n                            <span role=\"status\" class=\"qq-upload-status-text-selector qq-upload-status-text\"></span>\r\n                            <dx-button text=\"Cancel\" class=\"qq-upload-cancel-selector qq-upload-cancel\"></dx-button>\r\n                            <dx-button text=\"Retry\" class=\"qq-upload-retry-selector qq-upload-retry\"></dx-button>\r\n                            <dx-button text=\"Delete\" class=\"qq-btn qq-upload-delete-selector qq-upload-delete\"></dx-button>\r\n                            <dx-button text=\"Pause\" class=\"qq-btn qq-upload-pause-selector qq-upload-pause\"></dx-button>\r\n                            <dx-button text=\"Continue\" class=\"qq-btn qq-upload-continue-selector qq-upload-continue\"></dx-button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"qq-progress-bar-container-selector qq-progress-bar-container\">\r\n                        <div role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"qq-progress-bar-selector qq-progress-bar\"></div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n            <div class=\"qq-upload-drop-area-selector qq-upload-drop-area\">\r\n                <span class=\"qq-upload-drop-area-text-selector\"></span>\r\n                <em>Use drag and drop to add your files</em>\r\n                <span class=\"bottom-text\">\r\n                    <em>Allowed file formats: xls, .xlsx, .ppt, .pptx, .msg, .htm, .html, .pub, .png, .bmp, .tif, .gif, .jpeg, .jpg, .avi, .m4v, .mov, .mp3,  .wav, .wma, .mp4, .mpg, .swf, .wmv</em>\r\n                    <br>\r\n                    <br>\r\n                    <em>Please do not upload files over 1Gb</em>\r\n                </span>\r\n            </div>\r\n            <p>...or use 'Browse\" button</p>\r\n            <dx-button text=\"BROWSE MORE FILES...\" class=\"qq-upload-button-selector qq-upload-button\"></dx-button>\r\n        </div>\r\n    </div>\r\n    <!-- <br>\r\n    <hr>\r\n    <br>\r\n    <dx-button text=\"Start Uploading\" (click)=\"uploadFiles()\"></dx-button> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/FileUpload/fileupload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upload-section {\n  padding: 30px;\n  border: 1px solid #ddd; }\n  .upload-section h2 {\n    margin: 0 0 20px; }\n  .upload-section p {\n    margin: 0 0 20px; }\n\n.qq-upload-list {\n  padding: 0;\n  margin: 0 0 20px;\n  list-style: none; }\n  .qq-upload-list li {\n    padding: 20px 0;\n    border-bottom: 1px solid #ddd; }\n    .qq-upload-list li.qq-upload-success {\n      background: #74e074; }\n    .qq-upload-list li.qq-upload-fail {\n      background: #ffc6c6; }\n    .qq-upload-list li.qq-in-progress {\n      background: #ffffb8; }\n    .qq-upload-list li.qq-upload-retrying {\n      background: #c6b8ff; }\n    .qq-upload-list li.qq-upload-retryable {\n      background: #b8f5ff; }\n  .qq-upload-list .row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .qq-upload-list .qq-progress-bar-container-selector {\n    position: relative;\n    overflow: hidden;\n    height: 2px;\n    max-width: 400px;\n    background: #ddd; }\n    .qq-upload-list .qq-progress-bar-container-selector .qq-progress-bar-selector {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0px;\n      background: #adf; }\n\n.qq-upload-drop-area-selector {\n  width: 100%;\n  height: 200px;\n  background: #dee9f1;\n  position: relative;\n  color: #99A9B4;\n  font-size: 14px;\n  padding: 30px;\n  margin: 0 0 20px;\n  box-sizing: border-box; }\n  .qq-upload-drop-area-selector .bottom-text {\n    position: absolute;\n    bottom: 30px;\n    left: 30px;\n    right: 30px; }\n\n#qq-template-manual-trigger {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/FileUpload/fileupload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fine_uploader__ = __webpack_require__("../../../../fine-uploader/lib/traditional.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fine_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fine_uploader__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploadComponent = (function () {
    function FileUploadComponent() {
    }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    FileUploadComponent.prototype.ngAfterViewInit = function () {
        /**
         * Prepare/set options for the core + UI FineUploader
         */
        this.uiOptions = {
            debug: false,
            autoUpload: true,
            element: document.getElementById('fine-uploader-manual-trigger'),
            template: "qq-template-manual-trigger",
            request: {
                endpoint: "/upload"
            },
            chunking: {
                enabled: true,
                concurrent: {
                    enabled: true
                },
                success: {
                    endpoint: "/upload"
                }
            },
            deleteFile: {
                enabled: true,
                endpoint: '/upload'
            },
            retry: {
                enableAuto: true
            }
        };
        /**
         * Instantiate the FineUploader and pass in the uiOptions
         */
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_fine_uploader__["FineUploader"](this.uiOptions);
    };
    FileUploadComponent.prototype.uploadFiles = function () {
        this.uploader.uploadStoredFiles();
    };
    return FileUploadComponent;
}());
FileUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fileupload-app',
        template: __webpack_require__("../../../../../src/app/FileUpload/fileupload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/FileUpload/fileupload.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FileUploadComponent);

//# sourceMappingURL=fileupload.component.js.map

/***/ }),

/***/ "../../../../../src/app/Sample/sample.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ #gridContainer {\r\n    height: 440px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Sample/sample.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n\r\n<dx-data-grid\r\nid=\"gridContainer\"\r\n[dataSource]=\"orders\">\r\n<dxo-selection\r\n    [selectAllMode]=\"page\"\r\n    [showCheckBoxesMode]=\"always\"\r\n    mode=\"multiple\"\r\n></dxo-selection>  \r\n<dxo-editing\r\n    [allowUpdating]=\"true\"\r\n    [allowAdding]=\"true\"\r\n    [allowDeleting]=\"true\">\r\n</dxo-editing>\r\n<!-- <dxo-scrolling\r\n    mode=\"infinite\">\r\n</dxo-scrolling> -->\r\n<dxo-filter-row\r\n    [visible]=\"showFilterRow\"\r\n    [applyFilter]=\"auto\">\r\n</dxo-filter-row>\r\n<dxo-header-filter\r\n    [visible]=\"showHeaderFilter\">\r\n</dxo-header-filter>\r\n<dxo-search-panel\r\n    [visible]=\"true\"\r\n    [width]=\"240\"\r\n    placeholder=\"Search...\">\r\n</dxo-search-panel>\r\n<dxi-column\r\n    dataField=\"OrderNumber\"\r\n    [width]=\"130\"\r\n    caption=\"Invoice Number\">\r\n    <dxo-header-filter\r\n        [groupInterval]=\"10000\">\r\n    </dxo-header-filter>\r\n</dxi-column>\r\n<dxi-column\r\n    dataField=\"OrderDate\"\r\n    alignment=\"right\"\r\n    dataType=\"date\">\r\n    <dxo-header-filter\r\n        [dataSource]=\"orderHeaderFilter\">\r\n    </dxo-header-filter>\r\n</dxi-column>\r\n<dxi-column\r\n    dataField=\"SaleAmount\"\r\n    alignment=\"right\"\r\n    format=\"currency\">\r\n    <dxo-header-filter\r\n        [dataSource]=\"saleAmountHeaderFilter\">\r\n    </dxo-header-filter>\r\n</dxi-column>\r\n<dxi-column\r\n    dataField=\"Employee\"></dxi-column>\r\n<dxi-column\r\n    dataField=\"CustomerStoreCity\"\r\n    caption=\"City\">\r\n</dxi-column>\r\n<dxi-column\r\n    dataField=\"CustomerStoreState\"\r\n    caption=\"State\">\r\n</dxi-column>\r\n</dx-data-grid>\r\n"

/***/ }),

/***/ "../../../../../src/app/Sample/sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_service__ = __webpack_require__("../../../../../src/app/Sample/sample.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_devextreme_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SampleComponent = (function () {
    function SampleComponent(service) {
        this.service = service;
        this.title = 'Sample futures';
        this.itemsURL = 'https://59f734d6d85fbd0012ee2235.mockapi.io/items';
        this.orders = service.getOrders();
        this.showFilterRow = true;
        this.showHeaderFilter = true;
        this.saleAmountHeaderFilter = [{
                text: "Less than $3000",
                value: ["SaleAmount", "<", 3000]
            }, {
                text: "$3000 - $5000",
                value: [
                    ["SaleAmount", ">=", 3000],
                    ["SaleAmount", "<", 5000]
                ]
            }, {
                text: "$5000 - $10000",
                value: [
                    ["SaleAmount", ">=", 5000],
                    ["SaleAmount", "<", 10000]
                ]
            }, {
                text: "$10000 - $20000",
                value: [
                    ["SaleAmount", ">=", 10000],
                    ["SaleAmount", "<", 20000]
                ]
            }, {
                text: "Greater than $20000",
                value: ["SaleAmount", ">=", 20000]
            }];
        this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
    }
    SampleComponent.prototype.getOrderDay = function (rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    };
    SampleComponent.prototype.orderHeaderFilter = function (data) {
        var _this = this;
        data.dataSource.postProcess = function (results) {
            results.push({
                text: "Weekends",
                value: [
                    [_this.getOrderDay, "=", 0],
                    "or", [_this.getOrderDay, "=", 6]
                ]
            });
            return results;
        };
    };
    SampleComponent.prototype.clearFilter = function () {
        this.dataGrid.instance.clearFilter();
    };
    return SampleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_devextreme_angular__["DxDataGridComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_devextreme_angular__["DxDataGridComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_devextreme_angular__["DxDataGridComponent"]) === "function" && _a || Object)
], SampleComponent.prototype, "dataGrid", void 0);
SampleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sample-app',
        providers: [__WEBPACK_IMPORTED_MODULE_1__sample_service__["a" /* Service */]],
        template: __webpack_require__("../../../../../src/app/Sample/sample.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Sample/sample.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__sample_service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sample_service__["a" /* Service */]) === "function" && _b || Object])
], SampleComponent);

var _a, _b;
//# sourceMappingURL=sample.component.js.map

/***/ }),

/***/ "../../../../../src/app/Sample/sample.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Order */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__ = __webpack_require__("../../../../devextreme/data/data_source.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Order = (function () {
    function Order() {
    }
    return Order;
}());

var Service = (function () {
    function Service(http) {
        var _this = this;
        this.http = http;
        this.itemsURL = 'https://59f734d6d85fbd0012ee2235.mockapi.io/items';
        this.orders = [
            {
                "ID": 1,
                "OrderNumber": 35703,
                "OrderDate": "2014/04/10",
                "SaleAmount": 11800,
                "Terms": "15 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "Los Angeles",
                "Employee": "Harv Mudd"
            }, {
                "ID": 4,
                "OrderNumber": 35711,
                "OrderDate": "2014/01/12",
                "SaleAmount": 16050,
                "Terms": "15 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "San Jose",
                "Employee": "Jim Packard"
            }, {
                "ID": 5,
                "OrderNumber": 35714,
                "OrderDate": "2014/01/22",
                "SaleAmount": 14750,
                "Terms": "15 Days",
                "CustomerStoreState": "Nevada",
                "CustomerStoreCity": "Las Vegas",
                "Employee": "Harv Mudd"
            }, {
                "ID": 7,
                "OrderNumber": 35983,
                "OrderDate": "2014/02/07",
                "SaleAmount": 3725,
                "Terms": "15 Days",
                "CustomerStoreState": "Colorado",
                "CustomerStoreCity": "Denver",
                "Employee": "Todd Hoffman"
            }, {
                "ID": 9,
                "OrderNumber": 36987,
                "OrderDate": "2014/03/11",
                "SaleAmount": 14200,
                "Terms": "15 Days",
                "CustomerStoreState": "Utah",
                "CustomerStoreCity": "Salt Lake City",
                "Employee": "Clark Morgan"
            }, {
                "ID": 11,
                "OrderNumber": 38466,
                "OrderDate": "2014/03/01",
                "SaleAmount": 7800,
                "Terms": "15 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "Los Angeles",
                "Employee": "Harv Mudd"
            }, {
                "ID": 14,
                "OrderNumber": 39420,
                "OrderDate": "2014/02/15",
                "SaleAmount": 20500,
                "Terms": "15 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "San Jose",
                "Employee": "Jim Packard"
            }, {
                "ID": 15,
                "OrderNumber": 39874,
                "OrderDate": "2014/02/04",
                "SaleAmount": 9050,
                "Terms": "30 Days",
                "CustomerStoreState": "Nevada",
                "CustomerStoreCity": "Las Vegas",
                "Employee": "Harv Mudd"
            }, {
                "ID": 18,
                "OrderNumber": 42847,
                "OrderDate": "2014/02/15",
                "SaleAmount": 20400,
                "Terms": "30 Days",
                "CustomerStoreState": "Wyoming",
                "CustomerStoreCity": "Casper",
                "Employee": "Todd Hoffman"
            }, {
                "ID": 19,
                "OrderNumber": 43982,
                "OrderDate": "2014/05/29",
                "SaleAmount": 6050,
                "Terms": "30 Days",
                "CustomerStoreState": "Utah",
                "CustomerStoreCity": "Salt Lake City",
                "Employee": "Clark Morgan"
            }, {
                "ID": 29,
                "OrderNumber": 56272,
                "OrderDate": "2014/02/06",
                "SaleAmount": 15850,
                "Terms": "30 Days",
                "CustomerStoreState": "Utah",
                "CustomerStoreCity": "Salt Lake City",
                "Employee": "Clark Morgan"
            }, {
                "ID": 30,
                "OrderNumber": 57429,
                "OrderDate": "2014/05/16",
                "SaleAmount": 11050,
                "Terms": "30 Days",
                "CustomerStoreState": "Arizona",
                "CustomerStoreCity": "Phoenix",
                "Employee": "Clark Morgan"
            }, {
                "ID": 32,
                "OrderNumber": 58292,
                "OrderDate": "2014/05/13",
                "SaleAmount": 13500,
                "Terms": "15 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "Los Angeles",
                "Employee": "Harv Mudd"
            }, {
                "ID": 36,
                "OrderNumber": 62427,
                "OrderDate": "2014/01/27",
                "SaleAmount": 23500,
                "Terms": "15 Days",
                "CustomerStoreState": "Nevada",
                "CustomerStoreCity": "Las Vegas",
                "Employee": "Harv Mudd"
            }, {
                "ID": 39,
                "OrderNumber": 65977,
                "OrderDate": "2014/02/05",
                "SaleAmount": 2550,
                "Terms": "15 Days",
                "CustomerStoreState": "Wyoming",
                "CustomerStoreCity": "Casper",
                "Employee": "Todd Hoffman"
            }, {
                "ID": 40,
                "OrderNumber": 66947,
                "OrderDate": "2014/03/23",
                "SaleAmount": 3500,
                "Terms": "15 Days",
                "CustomerStoreState": "Utah",
                "CustomerStoreCity": "Salt Lake City",
                "Employee": "Clark Morgan"
            }, {
                "ID": 42,
                "OrderNumber": 68428,
                "OrderDate": "2014/04/10",
                "SaleAmount": 10500,
                "Terms": "15 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "Los Angeles",
                "Employee": "Harv Mudd"
            }, {
                "ID": 43,
                "OrderNumber": 69477,
                "OrderDate": "2014/03/09",
                "SaleAmount": 14200,
                "Terms": "15 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "Anaheim",
                "Employee": "Harv Mudd"
            }, {
                "ID": 46,
                "OrderNumber": 72947,
                "OrderDate": "2014/01/14",
                "SaleAmount": 13350,
                "Terms": "30 Days",
                "CustomerStoreState": "Nevada",
                "CustomerStoreCity": "Las Vegas",
                "Employee": "Harv Mudd"
            }, {
                "ID": 47,
                "OrderNumber": 73088,
                "OrderDate": "2014/03/25",
                "SaleAmount": 8600,
                "Terms": "30 Days",
                "CustomerStoreState": "Nevada",
                "CustomerStoreCity": "Reno",
                "Employee": "Clark Morgan"
            }, {
                "ID": 50,
                "OrderNumber": 76927,
                "OrderDate": "2014/04/27",
                "SaleAmount": 9800,
                "Terms": "30 Days",
                "CustomerStoreState": "Utah",
                "CustomerStoreCity": "Salt Lake City",
                "Employee": "Clark Morgan"
            }, {
                "ID": 51,
                "OrderNumber": 77297,
                "OrderDate": "2014/04/30",
                "SaleAmount": 10850,
                "Terms": "30 Days",
                "CustomerStoreState": "Arizona",
                "CustomerStoreCity": "Phoenix",
                "Employee": "Clark Morgan"
            }, {
                "ID": 56,
                "OrderNumber": 84744,
                "OrderDate": "2014/02/10",
                "SaleAmount": 4650,
                "Terms": "30 Days",
                "CustomerStoreState": "Nevada",
                "CustomerStoreCity": "Las Vegas",
                "Employee": "Harv Mudd"
            }, {
                "ID": 57,
                "OrderNumber": 85028,
                "OrderDate": "2014/05/17",
                "SaleAmount": 2575,
                "Terms": "30 Days",
                "CustomerStoreState": "Nevada",
                "CustomerStoreCity": "Reno",
                "Employee": "Clark Morgan"
            }, {
                "ID": 59,
                "OrderNumber": 87297,
                "OrderDate": "2014/04/21",
                "SaleAmount": 14200,
                "Terms": "30 Days",
                "CustomerStoreState": "Wyoming",
                "CustomerStoreCity": "Casper",
                "Employee": "Todd Hoffman"
            }, {
                "ID": 60,
                "OrderNumber": 88027,
                "OrderDate": "2014/02/14",
                "SaleAmount": 13650,
                "Terms": "30 Days",
                "CustomerStoreState": "Utah",
                "CustomerStoreCity": "Salt Lake City",
                "Employee": "Clark Morgan"
            }, {
                "ID": 65,
                "OrderNumber": 94726,
                "OrderDate": "2014/05/22",
                "SaleAmount": 20500,
                "Terms": "15 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "San Jose",
                "Employee": "Jim Packard"
            }, {
                "ID": 66,
                "OrderNumber": 95266,
                "OrderDate": "2014/03/10",
                "SaleAmount": 9050,
                "Terms": "15 Days",
                "CustomerStoreState": "Nevada",
                "CustomerStoreCity": "Las Vegas",
                "Employee": "Harv Mudd"
            }, {
                "ID": 69,
                "OrderNumber": 98477,
                "OrderDate": "2014/01/01",
                "SaleAmount": 23500,
                "Terms": "15 Days",
                "CustomerStoreState": "Wyoming",
                "CustomerStoreCity": "Casper",
                "Employee": "Todd Hoffman"
            }, {
                "ID": 70,
                "OrderNumber": 99247,
                "OrderDate": "2014/02/08",
                "SaleAmount": 2100,
                "Terms": "15 Days",
                "CustomerStoreState": "Utah",
                "CustomerStoreCity": "Salt Lake City",
                "Employee": "Clark Morgan"
            }, {
                "ID": 78,
                "OrderNumber": 174884,
                "OrderDate": "2014/04/10",
                "SaleAmount": 7200,
                "Terms": "30 Days",
                "CustomerStoreState": "Colorado",
                "CustomerStoreCity": "Denver",
                "Employee": "Todd Hoffman"
            }, {
                "ID": 81,
                "OrderNumber": 188877,
                "OrderDate": "2014/02/11",
                "SaleAmount": 8750,
                "Terms": "30 Days",
                "CustomerStoreState": "Arizona",
                "CustomerStoreCity": "Phoenix",
                "Employee": "Clark Morgan"
            }, {
                "ID": 82,
                "OrderNumber": 191883,
                "OrderDate": "2014/02/05",
                "SaleAmount": 9900,
                "Terms": "30 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "Los Angeles",
                "Employee": "Harv Mudd"
            }, {
                "ID": 83,
                "OrderNumber": 192474,
                "OrderDate": "2014/01/21",
                "SaleAmount": 12800,
                "Terms": "30 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "Anaheim",
                "Employee": "Harv Mudd"
            }, {
                "ID": 84,
                "OrderNumber": 193847,
                "OrderDate": "2014/03/21",
                "SaleAmount": 14100,
                "Terms": "30 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "San Diego",
                "Employee": "Harv Mudd"
            }, {
                "ID": 85,
                "OrderNumber": 194877,
                "OrderDate": "2014/03/06",
                "SaleAmount": 4750,
                "Terms": "30 Days",
                "CustomerStoreState": "California",
                "CustomerStoreCity": "San Jose",
                "Employee": "Jim Packard"
            }, {
                "ID": 86,
                "OrderNumber": 195746,
                "OrderDate": "2014/05/26",
                "SaleAmount": 9050,
                "Terms": "30 Days",
                "CustomerStoreState": "Nevada",
                "CustomerStoreCity": "Las Vegas",
                "Employee": "Harv Mudd"
            }, {
                "ID": 87,
                "OrderNumber": 197474,
                "OrderDate": "2014/03/02",
                "SaleAmount": 6400,
                "Terms": "30 Days",
                "CustomerStoreState": "Nevada",
                "CustomerStoreCity": "Reno",
                "Employee": "Clark Morgan"
            }, {
                "ID": 88,
                "OrderNumber": 198746,
                "OrderDate": "2014/05/09",
                "SaleAmount": 15700,
                "Terms": "30 Days",
                "CustomerStoreState": "Colorado",
                "CustomerStoreCity": "Denver",
                "Employee": "Todd Hoffman"
            }, {
                "ID": 91,
                "OrderNumber": 214222,
                "OrderDate": "2014/02/08",
                "SaleAmount": 11050,
                "Terms": "30 Days",
                "CustomerStoreState": "Arizona",
                "CustomerStoreCity": "Phoenix",
                "Employee": "Clark Morgan"
            }
        ];
        this.getOrders = function () {
            return new __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default.a({
                load: function (loadOptions) {
                    return http.get(_this.itemsURL)
                        .toPromise()
                        .then(function (response) { return response.json(); });
                },
                insert: function (values) {
                    return http.post(_this.itemsURL, values)
                        .toPromise();
                },
                remove: function (key) {
                    return http.delete(_this.itemsURL + encodeURIComponent(key))
                        .toPromise();
                },
                update: function (key, values) {
                    return http.put(_this.itemsURL + encodeURIComponent(key), values)
                        .toPromise();
                }
            });
        };
    }
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], Service);

var _a;
//# sourceMappingURL=sample.service.js.map

/***/ }),

/***/ "../../../../../src/app/Submission/submission.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"submission-section\">\r\n\t<h2>{{title}}</h2>\r\n\t<dx-data-grid\r\n\t\t[showColumnLines]=\"false\"\r\n\t\t[showRowLines]=\"true\"\r\n\t\t[showBorders]=\"false\"\r\n\t\t[dataSource]=\"items\">\r\n\t\t<dxo-header-filter\r\n\t\t\t[visible]=\"true\">\r\n\t\t</dxo-header-filter>\r\n\t\t<dxo-filter-row\r\n\t\t\t[visible]=\"true\"\r\n\t\t\t[applyFilter]=\"auto\">\r\n\t\t</dxo-filter-row>\r\n\t\t<dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n\t\t<dxi-column\r\n\t\t\tcssClass=\"blue\"\r\n\t\t\tdataField=\"Submission\">\r\n\t\t</dxi-column>\r\n\t\t<dxi-column\r\n\t\t\tdataField=\"Type\">\r\n\t\t</dxi-column>\r\n\t\t<dxi-column\r\n\t\t\tcellTemplate=\"cellTemplate\"\r\n\t\t\tdataField=\"Status\">\r\n\t\t</dxi-column>\r\n\t\t<dxi-column\r\n\t\t\tcssClass=\"blue\"\r\n\t\t\tdataField=\"Study\">\r\n\t\t</dxi-column>\r\n\t\t<dxi-column\r\n\t\t\tcssClass=\"blue\"\r\n\t\t\tdataField=\"Site\">\r\n\t\t</dxi-column>\r\n\t\t<dxi-column\r\n\t\t\tcaption=\"Submitted by\"\r\n\t\t\tdataField=\"SubmittedBy\">\r\n\t\t</dxi-column>\r\n\t\t<dxi-column\r\n\t\t\tdataType=\"date\"\r\n\t\t\tcaption=\"Date Submitted\"\r\n\t\t\tdataField=\"SubmittedDate\"\r\n\t\t\t[customizeText]=\"customizeDate\">\r\n\t\t</dxi-column>\r\n\t\t<div *dxTemplate=\"let data of 'cellTemplate'\" [class]=\"data.value | lowercase\">\r\n\t\t\t{{data.value}}\r\n\t\t</div>\r\n\t</dx-data-grid>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Submission/submission.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .submission-section {\n  padding: 20px 50px; }\n  /deep/ .submission-section h2 {\n    font-size: 21px;\n    font-family: 'ArialMT', 'Arial', sans-serif;\n    font-weight: 400;\n    margin: 0 0 10px; }\n  /deep/ .submission-section .dx-datagrid-rowsview td {\n    vertical-align: middle !important;\n    white-space: normal; }\n  /deep/ .submission-section .dx-datagrid-rowsview .blue {\n    color: #106CB7;\n    cursor: pointer; }\n    /deep/ .submission-section .dx-datagrid-rowsview .blue:hover {\n      text-decoration: underline; }\n  /deep/ .submission-section .dx-datagrid-rowsview .draft {\n    color: #99A9B4; }\n  /deep/ .submission-section .dx-datagrid-rowsview .received {\n    color: #8AD4DF; }\n  /deep/ .submission-section .dx-datagrid-rowsview .pre-processing {\n    color: #C1D72D; }\n  /deep/ .submission-section .dx-datagrid-rowsview .review {\n    color: #3AB54A; }\n  /deep/ .submission-section .dx-datagrid-rowsview .post-processing {\n    color: #106CB7; }\n  /deep/ .submission-section .dx-datagrid-rowsview .complete {\n    color: #6F818F; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Submission/submission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__submission_service__ = __webpack_require__("../../../../../src/app/Submission/submission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_devextreme_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmissionComponent = (function () {
    function SubmissionComponent(service) {
        this.service = service;
        this.title = 'Submission';
        this.items = service.getItems();
    }
    SubmissionComponent.prototype.customizeDate = function (cellData) {
        var monthes = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"], date = cellData.value, month = date.getMonth(), day = date.getDate(), year = date.getFullYear();
        return day + "-" + monthes[month] + "-" + year;
    };
    return SubmissionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_devextreme_angular__["DxDataGridComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_devextreme_angular__["DxDataGridComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_devextreme_angular__["DxDataGridComponent"]) === "function" && _a || Object)
], SubmissionComponent.prototype, "dataGrid", void 0);
SubmissionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'submission-app',
        providers: [__WEBPACK_IMPORTED_MODULE_1__submission_service__["a" /* Service */]],
        template: __webpack_require__("../../../../../src/app/Submission/submission.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Submission/submission.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__submission_service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__submission_service__["a" /* Service */]) === "function" && _b || Object])
], SubmissionComponent);

var _a, _b;
//# sourceMappingURL=submission.component.js.map

/***/ }),

/***/ "../../../../../src/app/Submission/submission.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Item */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__ = __webpack_require__("../../../../devextreme/data/data_source.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Item = (function () {
    function Item() {
    }
    return Item;
}());

var Service = (function () {
    function Service(http) {
        var _this = this;
        this.http = http;
        this.itemsURL = 'https://59f734d6d85fbd0012ee2235.mockapi.io/submission';
        this.getItems = function () {
            return new __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default.a({
                load: function (loadOptions) {
                    return http.get(_this.itemsURL)
                        .toPromise()
                        .then(function (response) { return response.json(); });
                }
            });
        };
    }
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], Service);

var _a;
//# sourceMappingURL=submission.service.js.map

/***/ }),

/***/ "../../../../../src/app/SubmissionDetails/submission-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"submission-details-section\">\r\n\t<h2>{{title}}</h2>\r\n\t<div>\r\n\t\t<dx-button text=\"Load Old Items\" (click)=\"loadData(true)\"></dx-button>\r\n\t\t<dx-button text=\"Load New Items\" (click)=\"loadData(false)\"></dx-button>\r\n\t</div>\r\n\t<dx-tree-list\r\n\t\t[showColumnLines]=\"false\"\r\n\t\t[showRowLines]=\"true\"\r\n\t\t[showBorders]=\"false\"\r\n\t\t[dataSource]=\"items\"\r\n\t\titemsExpr=\"InnerItems\"\r\n\t\tclass=\"treeContainer\"\r\n\t\tdataStructure=\"tree\">\r\n\t\t<dxo-selection mode=\"multiple\"></dxo-selection>\r\n\t\t<dxi-column dataField=\"DocumentID\"></dxi-column>\r\n\t\t<dxi-column dataField=\"FileName\"></dxi-column>\r\n\t\t<dxi-column dataField=\"PreferredName\"></dxi-column>\r\n\t\t<dxi-column dataField=\"Status\"></dxi-column>\r\n\t\t<dxi-column dataField=\"SubmittedBy\"></dxi-column>\r\n\t\t<dxi-column\r\n\t\t\tdataType=\"date\"\r\n\t\t\tcellTemplate=\"dateCell\"\r\n\t\t\tdataField=\"SubmittedDate\"\r\n\t\t\tcaption=\"Date Submitted\"\r\n\t\t\t>\r\n\t\t</dxi-column>\r\n\t\t<span *dxTemplate=\"let cellData of 'dateCell'\">\r\n\t\t\t{{cellData.value | date: 'dd-MMM-yyyy'}}\r\n\t\t</span>\r\n\t</dx-tree-list>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/SubmissionDetails/submission-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .submission-details-section {\n  padding: 20px 50px; }\n  /deep/ .submission-details-section .treeContainer {\n    height: 375px; }\n  /deep/ .submission-details-section h2 {\n    font-size: 21px;\n    font-family: 'ArialMT', 'Arial', sans-serif;\n    font-weight: 400;\n    margin: 0 0 10px; }\n  /deep/ .submission-details-section .dx-datagrid-table td {\n    vertical-align: middle !important;\n    white-space: normal; }\n  /deep/ .submission-details-section .dx-treelist-empty-space {\n    left: 18px; }\n  /deep/ .submission-details-section [aria-expanded] .dx-select-checkbox {\n    display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/SubmissionDetails/submission-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmissionDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__submission_details_service__ = __webpack_require__("../../../../../src/app/SubmissionDetails/submission-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubmissionDetailsComponent = (function () {
    function SubmissionDetailsComponent(service) {
        var _this = this;
        this.service = service;
        this.title = 'Submission Details';
        this.loadData = function (state) {
            if (state) {
                _this.items = _this.service.getOldItems();
            }
            else {
                _this.items = _this.service.getNewItems();
            }
        };
        this.items = service.getItems();
    }
    return SubmissionDetailsComponent;
}());
SubmissionDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'submission-details-app',
        providers: [__WEBPACK_IMPORTED_MODULE_1__submission_details_service__["a" /* Service */]],
        template: __webpack_require__("../../../../../src/app/SubmissionDetails/submission-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/SubmissionDetails/submission-details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__submission_details_service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__submission_details_service__["a" /* Service */]) === "function" && _a || Object])
], SubmissionDetailsComponent);

var _a;
//# sourceMappingURL=submission-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/SubmissionDetails/submission-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Item */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__ = __webpack_require__("../../../../devextreme/data/data_source.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Item = (function () {
    function Item() {
    }
    return Item;
}());

var Service = (function () {
    function Service(http) {
        var _this = this;
        this.http = http;
        this.itemsURL = 'https://59f734d6d85fbd0012ee2235.mockapi.io/submissions-details';
        this.itemsURL2 = 'http://59f734d6d85fbd0012ee2235.mockapi.io/submission-details-2';
        this.itemsURL3 = 'http://59f734d6d85fbd0012ee2235.mockapi.io/submission-details-3';
        this.items = [
            {
                "DocumentID": 11223344,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Submitted",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/08/08"
            },
            {
                "DocumentID": 22334455,
                "FileName": "SomeUnrecognizedNameFile.pdf",
                "PreferredName": "same as File Name",
                "Status": "Currently Approved",
                "SubmittedBy": "Stark, Arya",
                "SubmittedDate": "2017/08/08"
            },
            {
                "DocumentID": 33445566,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Not Approved",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/07/28"
            },
            {
                "DocumentID": 7676757,
                "FileName": "SomeUnrecognizedNameFile.pdf",
                "PreferredName": "same as File Name",
                "Status": "Approval Withdrawn",
                "SubmittedBy": "Stark, Arya",
                "SubmittedDate": "2017/07/28"
            },
            {
                "DocumentID": 99009977,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Aknowledged",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/07/28",
                "InnerItems": [
                    {
                        "DocumentID": 99009977,
                        "FileName": "DocSomeUnrecognized.pdf",
                        "PreferredName": "same as File Name",
                        "Status": "Aknowledged",
                        "SubmittedBy": "Stark, Sansa",
                        "SubmittedDate": "2017/07/18"
                    },
                    {
                        "DocumentID": 99009977,
                        "FileName": "DocSomeUnrecognized.pdf",
                        "PreferredName": "same as File Name",
                        "Status": "Aknowledged",
                        "SubmittedBy": "Stark, Sansa",
                        "SubmittedDate": "2017/07/08"
                    }
                ]
            },
            {
                "DocumentID": 4535251,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Currently Approved",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/07/04"
            },
            {
                "DocumentID": 55667788,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Aknowledged",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/07/04"
            },
            {
                "DocumentID": 99887766,
                "FileName": "SomeUnrecognizedNameFile.pdf",
                "PreferredName": "same as File Name",
                "Status": "Currently Approved",
                "SubmittedBy": "Stark, Arya",
                "SubmittedDate": "2017/07/04"
            },
            {
                "DocumentID": 99007766,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Currently Approved",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/06/14"
            },
            {
                "DocumentID": 44557788,
                "FileName": "SomeUnrecognizedNameFile.pdf",
                "PreferredName": "same as File Name",
                "Status": "Approval Withdrawn",
                "SubmittedBy": "Stark, Arya",
                "SubmittedDate": "2017/06/14"
            },
            {
                "DocumentID": 11223344,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Submitted",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/08/08"
            },
            {
                "DocumentID": 22334455,
                "FileName": "SomeUnrecognizedNameFile.pdf",
                "PreferredName": "same as File Name",
                "Status": "Currently Approved",
                "SubmittedBy": "Stark, Arya",
                "SubmittedDate": "2017/08/08"
            },
            {
                "DocumentID": 33445566,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Not Approved",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/07/28"
            },
            {
                "DocumentID": 7676757,
                "FileName": "SomeUnrecognizedNameFile.pdf",
                "PreferredName": "same as File Name",
                "Status": "Approval Withdrawn",
                "SubmittedBy": "Stark, Arya",
                "SubmittedDate": "2017/07/28"
            },
            {
                "DocumentID": 99009977,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Aknowledged",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/07/28",
                "InnerItems": [
                    {
                        "DocumentID": 99009977,
                        "FileName": "DocSomeUnrecognized.pdf",
                        "PreferredName": "same as File Name",
                        "Status": "Aknowledged",
                        "SubmittedBy": "Stark, Sansa",
                        "SubmittedDate": "2017/07/18"
                    },
                    {
                        "DocumentID": 99009977,
                        "FileName": "DocSomeUnrecognized.pdf",
                        "PreferredName": "same as File Name",
                        "Status": "Aknowledged",
                        "SubmittedBy": "Stark, Sansa",
                        "SubmittedDate": "2017/07/08"
                    }
                ]
            },
            {
                "DocumentID": 4535251,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Currently Approved",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/07/04"
            },
            {
                "DocumentID": 55667788,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Aknowledged",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/07/04"
            },
            {
                "DocumentID": 99887766,
                "FileName": "SomeUnrecognizedNameFile.pdf",
                "PreferredName": "same as File Name",
                "Status": "Currently Approved",
                "SubmittedBy": "Stark, Arya",
                "SubmittedDate": "2017/07/04"
            },
            {
                "DocumentID": 99007766,
                "FileName": "DocSomeUnrecognized.pdf",
                "PreferredName": "same as File Name",
                "Status": "Currently Approved",
                "SubmittedBy": "Stark, Sansa",
                "SubmittedDate": "2017/06/14"
            },
            {
                "DocumentID": 44557788,
                "FileName": "SomeUnrecognizedNameFile.pdf",
                "PreferredName": "same as File Name",
                "Status": "Approval Withdrawn",
                "SubmittedBy": "Stark, Arya",
                "SubmittedDate": "2017/06/14"
            }
        ];
        this.getData = function (url) {
            return new __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default.a({
                load: function (loadOptions) {
                    return _this.http.get(url)
                        .toPromise()
                        .then(function (response) { return response.json(); });
                }
            });
        };
        this.getItems = function () { return _this.getData(_this.itemsURL); };
        this.getOldItems = function () { return _this.getData(_this.itemsURL2); };
        this.getNewItems = function () { return _this.getData(_this.itemsURL3); };
    }
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], Service);

var _a;
//# sourceMappingURL=submission-details.service.js.map

/***/ }),

/***/ "../../../../../src/app/UploadedFiles/uploaded-files.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"uploaded-files-section\">\r\n\t<h2>{{title}}</h2>\r\n\t<div class=\"buttons\">\r\n\t\t<dx-button text=\"UPLOAD MORE FILES\"></dx-button>\r\n\t\t<dx-button text=\"DOWNLOAD\"></dx-button>\r\n\t\t<dx-button text=\"DELETE\"></dx-button>\r\n\t</div>\r\n\t<dx-data-grid\r\n\t\t[showColumnLines]=\"false\"\r\n\t\t[showRowLines]=\"true\"\r\n\t\t[showBorders]=\"false\"\r\n\t\t[dataSource]=\"files\">\r\n\t\t<dxo-selection\r\n\t\t\tmode=\"multiple\">\r\n\t\t</dxo-selection>\r\n\t\t<dxo-editing\r\n\t\t\t[allowUpdating]=\"true\">\r\n\t\t</dxo-editing>\r\n\t\t<dxi-column\r\n\t\t\t[allowSorting]=\"false\"\r\n\t\t\tdataField=\"FileName\">\r\n\t\t</dxi-column>\r\n\t\t<dxi-column\r\n\t\t\t[allowSorting]=\"false\"\r\n\t\t\tdataField=\"PreferredName\">\r\n\t\t</dxi-column>\r\n\t</dx-data-grid>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/UploadedFiles/uploaded-files.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .dx-datagrid-rowsview .dx-select-checkboxes-hidden > tbody > tr > td > .dx-select-checkbox {\n  display: inline-block; }\n\n/deep/ .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-select {\n  text-align: left !important;\n  min-width: 30px;\n  width: 30px; }\n\n.uploaded-files-section {\n  padding: 20px 50px; }\n  .uploaded-files-section h2 {\n    font-size: 21px;\n    font-family: 'ArialMT', 'Arial', sans-serif;\n    font-weight: 400;\n    margin-bottom: 10px; }\n  .uploaded-files-section .buttons {\n    margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/UploadedFiles/uploaded-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadedFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uploaded_files_service__ = __webpack_require__("../../../../../src/app/UploadedFiles/uploaded-files.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_devextreme_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadedFilesComponent = (function () {
    function UploadedFilesComponent(service) {
        this.service = service;
        this.title = 'Uploaded files';
        this.files = service.getItems();
    }
    return UploadedFilesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_devextreme_angular__["DxDataGridComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_devextreme_angular__["DxDataGridComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_devextreme_angular__["DxDataGridComponent"]) === "function" && _a || Object)
], UploadedFilesComponent.prototype, "dataGrid", void 0);
UploadedFilesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'uploaded-files-app',
        providers: [__WEBPACK_IMPORTED_MODULE_1__uploaded_files_service__["a" /* Service */]],
        template: __webpack_require__("../../../../../src/app/UploadedFiles/uploaded-files.component.html"),
        styles: [__webpack_require__("../../../../../src/app/UploadedFiles/uploaded-files.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__uploaded_files_service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__uploaded_files_service__["a" /* Service */]) === "function" && _b || Object])
], UploadedFilesComponent);

var _a, _b;
//# sourceMappingURL=uploaded-files.component.js.map

/***/ }),

/***/ "../../../../../src/app/UploadedFiles/uploaded-files.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export File */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__ = __webpack_require__("../../../../devextreme/data/data_source.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var File = (function () {
    function File() {
    }
    return File;
}());

var Service = (function () {
    function Service(http) {
        var _this = this;
        this.http = http;
        this.itemsURL = 'https://59f734d6d85fbd0012ee2235.mockapi.io/files';
        this.getItems = function () {
            return new __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default.a({
                load: function (loadOptions) {
                    return http.get(_this.itemsURL)
                        .toPromise()
                        .then(function (response) { return response.json(); });
                },
                update: function (item, values) {
                    return http.put(_this.itemsURL + "/" + encodeURIComponent(item.FileId), Object.assign(item, values))
                        .toPromise();
                }
            });
        };
    }
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], Service);

var _a;
//# sourceMappingURL=uploaded-files.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<submission-details-app></submission-details-app>\r\n<submission-app></submission-app>\r\n<fileupload-app></fileupload-app>\r\n<uploaded-files-app></uploaded-files-app>\r\n<data-grid-app></data-grid-app>\r\n<sample-app></sample-app>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UploadedFiles_uploaded_files_component__ = __webpack_require__("../../../../../src/app/UploadedFiles/uploaded-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Submission_submission_component__ = __webpack_require__("../../../../../src/app/Submission/submission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SubmissionDetails_submission_details_component__ = __webpack_require__("../../../../../src/app/SubmissionDetails/submission-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FileUpload_fileupload_component__ = __webpack_require__("../../../../../src/app/FileUpload/fileupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DevExpDataGrid_datagrid_component__ = __webpack_require__("../../../../../src/app/DevExpDataGrid/datagrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Sample_sample_component__ = __webpack_require__("../../../../../src/app/Sample/sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_devextreme_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10_devextreme_angular__["DxDataGridModule"],
            __WEBPACK_IMPORTED_MODULE_10_devextreme_angular__["DxSelectBoxModule"],
            __WEBPACK_IMPORTED_MODULE_10_devextreme_angular__["DxCheckBoxModule"],
            __WEBPACK_IMPORTED_MODULE_10_devextreme_angular__["DxTreeListModule"],
            __WEBPACK_IMPORTED_MODULE_10_devextreme_angular__["DxButtonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__UploadedFiles_uploaded_files_component__["a" /* UploadedFilesComponent */],
            __WEBPACK_IMPORTED_MODULE_5__Submission_submission_component__["a" /* SubmissionComponent */],
            __WEBPACK_IMPORTED_MODULE_6__SubmissionDetails_submission_details_component__["a" /* SubmissionDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__FileUpload_fileupload_component__["a" /* FileUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_8__DevExpDataGrid_datagrid_component__["a" /* DataGridComponent */],
            __WEBPACK_IMPORTED_MODULE_9__Sample_sample_component__["a" /* SampleComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map