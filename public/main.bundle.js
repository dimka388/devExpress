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

/***/ "../../../../../src/app/DataGrid/datagrid.component.html":
/***/ (function(module, exports) {

module.exports = "<dx-data-grid\r\n\t[dataSource]=\"options.items\">\r\n\t<div *ngFor=\"let column of options.columns\">\r\n\t\t<dxi-column\t\r\n\t\t\tdataField=\"{{column.dataField}}\"\r\n\t\t\t[allowFiltering]=\"getAttributeValue('allowFiltering', column)\"\r\n\t\t\t[allowEditing]=\"getAttributeValue('allowEditing', column)\"\r\n\t\t\t[dataType]=\"getAttributeValue('dataType', column)\"\r\n\t\t\t[caption]=\"getAttributeValue('caption', column)\"\r\n\t\t\t[cellTemplate]=\"getAttributeValue('cellTemplate', column)\">\r\n\t\t</dxi-column>\r\n\t</div>\r\n\t<dxo-header-filter\r\n\t\t[visible]=\"options.headerFilters\">\r\n\t</dxo-header-filter>\r\n\t<dxo-filter-row\r\n\t\t[visible]=\"options.filters\">\r\n\t</dxo-filter-row>\r\n\t<dxo-selection\r\n\t\t[mode]=\"options.selectionMode\"\r\n\t\t[showCheckBoxesMode]=\"options.selectionCheckboxes\">\r\n\t</dxo-selection>\r\n\t<dxo-editing\r\n\t\t[mode]=\"options.editingMode\"\r\n\t\t[allowUpdating]=\"options.allowUpdating\"\r\n\t\t[allowDeleting]=\"options.allowDeleting\"\r\n\t\t[allowAdding]=\"options.allowAdding\">\r\n\t</dxo-editing>\r\n\t<dxo-paging\r\n\t\t[pageSize]=\"options.paging\">\r\n\t</dxo-paging>\r\n\t<a href=\"#\" *dxTemplate=\"let data of 'linkTemplate'\" (click)=\"options.linkClickHandler($event, data)\">\r\n\t\t{{data.value}}\r\n\t</a>\r\n\t<span *dxTemplate=\"let data of 'dateTemplate'\">\r\n\t\t{{data.value | date: 'dd-MMM-yyyy'}}\r\n\t</span>\r\n\t<span *dxTemplate=\"let data of 'statusTemplate'\" [class]=\"'status-' + (data.value | lowercase)\">\r\n\t\t{{data.value}}\r\n\t</span>\r\n</dx-data-grid>"

/***/ }),

/***/ "../../../../../src/app/DataGrid/datagrid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .dx-datagrid-headers,\n/deep/ .dx-datagrid-rowsview,\n/deep/ .dx-datagrid-pager,\n/deep/ .dx-datagrid-rowsview .dx-datagrid-table .dx-freespace-row {\n  border: none; }\n\n/deep/ .dx-datagrid-content .dx-datagrid-table .dx-row > td {\n  border: 1px solid #CAD4DD;\n  border-width: 0 0 1px;\n  white-space: normal;\n  vertical-align: middle; }\n  /deep/ .dx-datagrid-content .dx-datagrid-table .dx-row > td a {\n    text-decoration: none;\n    color: #106CB7; }\n    /deep/ .dx-datagrid-content .dx-datagrid-table .dx-row > td a:hover {\n      text-decoration: underline; }\n  /deep/ .dx-datagrid-content .dx-datagrid-table .dx-row > td .status-draft {\n    color: #99A9B4; }\n  /deep/ .dx-datagrid-content .dx-datagrid-table .dx-row > td .status-received {\n    color: #8AD4DF; }\n  /deep/ .dx-datagrid-content .dx-datagrid-table .dx-row > td .status-pre-processing {\n    color: #C1D72D; }\n  /deep/ .dx-datagrid-content .dx-datagrid-table .dx-row > td .status-review {\n    color: #3AB54A; }\n  /deep/ .dx-datagrid-content .dx-datagrid-table .dx-row > td .status-post-processing {\n    color: #106CB7; }\n  /deep/ .dx-datagrid-content .dx-datagrid-table .dx-row > td .status-complete {\n    color: #6F818F; }\n\n/deep/ .dx-datagrid-content .dx-datagrid-table .dx-row .dx-editor-cell {\n  padding: 5px; }\n\n/deep/ .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-select {\n  text-align: left !important;\n  min-width: 30px;\n  width: 30px; }\n\n/deep/ .dx-editor-cell .dx-texteditor .dx-texteditor-input {\n  border: 1px solid #ddd; }\n\n/deep/ .dx-datagrid-headers .dx-datagrid-table .dx-header-row > td {\n  border-width: 0 0 2px; }\n\n/deep/ .dx-datagrid-rowsview .dx-datagrid-table .dx-freespace-row {\n  height: auto !important; }\n  /deep/ .dx-datagrid-rowsview .dx-datagrid-table .dx-freespace-row > td {\n    border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/DataGrid/datagrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
        this.getAttributeValue = function (attr, column) { return column[attr]; };
        this.defaultOptions = {
            filters: false,
            headerFilters: false,
            selectionMode: 'none',
            selectionCheckboxes: 'always',
            editingMode: 'row',
            allowUpdating: false,
            allowDeleting: false,
            allowAdding: false,
            paging: 10,
            columns: [],
            items: [],
            linkClickHandler: function (event, data) {
                event.preventDefault();
                console.log('Link data:', data);
            }
        };
        this.options = {};
    }
    DataGridComponent.prototype.ngOnInit = function () {
        this.options = __assign({}, this.defaultOptions, this.customOptions);
    };
    return DataGridComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DataGridComponent.prototype, "customOptions", void 0);
DataGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-grid-app',
        template: __webpack_require__("../../../../../src/app/DataGrid/datagrid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/DataGrid/datagrid.component.scss")]
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

/***/ "../../../../../src/app/SitesListing/siteslisting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n\t<h2>{{title}}</h2>\r\n\t<data-grid-app [customOptions]=\"options\"></data-grid-app>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/SitesListing/siteslisting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitesListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__siteslisting_service__ = __webpack_require__("../../../../../src/app/SitesListing/siteslisting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SitesListingComponent = (function () {
    function SitesListingComponent(service) {
        this.service = service;
        this.title = 'Sites';
        this.options = {
            filters: true,
            columns: [
                {
                    dataField: 'SideID'
                },
                {
                    dataField: 'SiteName',
                    cellTemplate: 'linkTemplate'
                },
                {
                    dataField: 'StudyName',
                    cellTemplate: 'linkTemplate'
                },
                {
                    dataField: 'contacts',
                    dataType: 'number',
                    allowFiltering: false,
                    caption: 'Number of Contacts',
                    cellTemplate: 'linkTemplate'
                }
            ]
        };
        this.options.items = service.getItems();
    }
    return SitesListingComponent;
}());
SitesListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sites-listing',
        providers: [__WEBPACK_IMPORTED_MODULE_1__siteslisting_service__["a" /* Service */]],
        template: __webpack_require__("../../../../../src/app/SitesListing/siteslisting.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__siteslisting_service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__siteslisting_service__["a" /* Service */]) === "function" && _a || Object])
], SitesListingComponent);

var _a;
//# sourceMappingURL=siteslisting.component.js.map

/***/ }),

/***/ "../../../../../src/app/SitesListing/siteslisting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Item */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
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

var Item = (function () {
    function Item() {
    }
    return Item;
}());

var Service = (function () {
    function Service() {
        var _this = this;
        this.items = [
            {
                SideID: 'SIT-123456',
                SiteName: 'Bolton, Roose',
                StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
                contacts: 12
            },
            {
                SideID: 'SIT-564732',
                SiteName: 'Baelish, Petyr',
                StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
                contacts: 4
            },
            {
                SideID: 'SIT-432654',
                SiteName: 'Greyjoy, Theon',
                StudyName: 'Epi-On Corneal Crosslinking for Keratoconus',
                contacts: 6
            },
            {
                SideID: 'SIT-564732',
                SiteName: 'Bolton, Roose',
                StudyName: 'Study QR-7HB',
                contacts: 9
            },
            {
                SideID: 'SIT-432654',
                SiteName: 'Martell, Oberyn',
                StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
                contacts: 3
            },
            {
                SideID: 'SIT-564732',
                SiteName: 'Tyrell, Olenna',
                StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
                contacts: 15
            },
            {
                SideID: 'SIT-432654',
                SiteName: 'Lannister, Jaime',
                StudyName: 'Epi-On Corneal Crosslinking for Keratoconus',
                contacts: 12
            },
            {
                SideID: 'SIT-432654',
                SiteName: 'Baratheon, Stannis',
                StudyName: 'Study QR-7HB',
                contacts: 4
            },
            {
                SideID: 'SIT-564732',
                SiteName: 'Lannister, Cersei',
                StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
                contacts: 3
            },
            {
                SideID: 'SIT-432654',
                SiteName: 'Clegane, Gregor',
                StudyName: 'Epi-On Corneal Crosslinking for Keratoconus',
                contacts: 9
            },
            {
                SideID: 'SIT-564732',
                SiteName: 'Tyrell, Olenna',
                StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
                contacts: 15
            },
            {
                SideID: 'SIT-432654',
                SiteName: 'Lannister, Jaime',
                StudyName: 'Epi-On Corneal Crosslinking for Keratoconus',
                contacts: 12
            },
            {
                SideID: 'SIT-432654',
                SiteName: 'Baratheon, Stannis',
                StudyName: 'Study QR-7HB',
                contacts: 4
            },
            {
                SideID: 'SIT-564732',
                SiteName: 'Lannister, Cersei',
                StudyName: 'Fusion Protein rHSA/GCSFclinical Study on Breast Cancer Patients',
                contacts: 3
            },
            {
                SideID: 'SIT-432654',
                SiteName: 'Clegane, Gregor',
                StudyName: 'Epi-On Corneal Crosslinking for Keratoconus',
                contacts: 9
            }
        ];
        this.getItems = function () { return _this.items; };
    }
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Service);

//# sourceMappingURL=siteslisting.service.js.map

/***/ }),

/***/ "../../../../../src/app/SubmissionDetails/submission-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section submission-details\">\r\n\t<h2>{{title}}</h2>\r\n\t<dx-tree-list\r\n\t\t[showColumnLines]=\"false\"\r\n\t\t[showRowLines]=\"true\"\r\n\t\t[showBorders]=\"false\"\r\n\t\t[dataSource]=\"items\"\r\n\t\titemsExpr=\"InnerItems\"\r\n\t\tclass=\"treeContainer\"\r\n\t\tdataStructure=\"tree\">\r\n\t\t<dxo-selection mode=\"multiple\"></dxo-selection>\r\n\t\t<dxi-column dataField=\"DocumentID\"></dxi-column>\r\n\t\t<dxi-column dataField=\"FileName\"></dxi-column>\r\n\t\t<dxi-column dataField=\"PreferredName\"></dxi-column>\r\n\t\t<dxi-column dataField=\"Status\"></dxi-column>\r\n\t\t<dxi-column dataField=\"SubmittedBy\"></dxi-column>\r\n\t\t<dxi-column\r\n\t\t\tdataType=\"date\"\r\n\t\t\tcellTemplate=\"dateCell\"\r\n\t\t\tdataField=\"SubmittedDate\"\r\n\t\t\tcaption=\"Date Submitted\"\r\n\t\t\t>\r\n\t\t</dxi-column>\r\n\t\t<span *dxTemplate=\"let cellData of 'dateCell'\">\r\n\t\t\t{{cellData.value | date: 'dd-MMM-yyyy'}}\r\n\t\t</span>\r\n\t</dx-tree-list>\r\n\t<div class=\"buttons\">\r\n\t\t<dx-button text=\"Load Old Items\" (click)=\"loadData(true)\"></dx-button>\r\n\t\t<dx-button text=\"Load New Items\" (click)=\"loadData(false)\"></dx-button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/SubmissionDetails/submission-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .submission-details .treeContainer {\n  height: 375px; }\n\n/deep/ .submission-details h2 {\n  font-size: 21px;\n  font-family: 'ArialMT', 'Arial', sans-serif;\n  font-weight: 400;\n  margin: 0 0 10px; }\n\n/deep/ .submission-details .dx-datagrid-table td {\n  vertical-align: middle !important;\n  white-space: normal; }\n\n/deep/ .submission-details .dx-treelist-empty-space {\n  left: 18px; }\n\n/deep/ .submission-details [aria-expanded] .dx-select-checkbox {\n  display: none; }\n\n/deep/ .submission-details .buttons {\n  padding: 10px 0;\n  text-align: right; }\n", ""]);

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

/***/ "../../../../../src/app/SubmissionListing/submissionlisting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n\t<h2>{{title}}</h2>\r\n\t<data-grid-app [customOptions]=\"options\"></data-grid-app>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/SubmissionListing/submissionlisting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmissionListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__submissionlisting_service__ = __webpack_require__("../../../../../src/app/SubmissionListing/submissionlisting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubmissionListingComponent = (function () {
    function SubmissionListingComponent(service) {
        this.service = service;
        this.title = 'Submission';
        this.options = {
            filters: true,
            headerFilters: true,
            columns: [
                {
                    dataField: 'Submission',
                    cellTemplate: 'linkTemplate'
                },
                {
                    dataField: 'Type'
                },
                {
                    dataField: 'Status',
                    cellTemplate: 'statusTemplate'
                },
                {
                    dataField: 'Study',
                    cellTemplate: 'linkTemplate'
                },
                {
                    dataField: 'Site',
                    cellTemplate: 'linkTemplate'
                },
                {
                    dataField: 'SubmittedBy'
                },
                {
                    dataField: 'SubmittedDate',
                    dataType: 'date',
                    caption: 'Date Submitted',
                    cellTemplate: 'dateTemplate'
                }
            ]
        };
        this.options.items = service.getItems();
    }
    return SubmissionListingComponent;
}());
SubmissionListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'submission-listing',
        providers: [__WEBPACK_IMPORTED_MODULE_1__submissionlisting_service__["a" /* Service */]],
        template: __webpack_require__("../../../../../src/app/SubmissionListing/submissionlisting.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__submissionlisting_service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__submissionlisting_service__["a" /* Service */]) === "function" && _a || Object])
], SubmissionListingComponent);

var _a;
//# sourceMappingURL=submissionlisting.component.js.map

/***/ }),

/***/ "../../../../../src/app/SubmissionListing/submissionlisting.service.ts":
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
//# sourceMappingURL=submissionlisting.service.js.map

/***/ }),

/***/ "../../../../../src/app/UploadedFiles/uploaded-files.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n\t<h2>{{title}}</h2>\r\n\t<data-grid-app [customOptions]=\"options\"></data-grid-app>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/UploadedFiles/uploaded-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadedFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uploaded_files_service__ = __webpack_require__("../../../../../src/app/UploadedFiles/uploaded-files.service.ts");
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
        this.options = {
            selectionMode: 'multiple',
            allowUpdating: true,
            columns: [
                {
                    dataField: 'FileName',
                    allowEditing: false
                },
                {
                    dataField: 'PreferredName'
                }
            ]
        };
        this.options.items = service.getItems();
    }
    return UploadedFilesComponent;
}());
UploadedFilesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'uploaded-files',
        providers: [__WEBPACK_IMPORTED_MODULE_1__uploaded_files_service__["a" /* Service */]],
        template: __webpack_require__("../../../../../src/app/UploadedFiles/uploaded-files.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__uploaded_files_service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__uploaded_files_service__["a" /* Service */]) === "function" && _a || Object])
], UploadedFilesComponent);

var _a;
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

module.exports = "<sites-listing></sites-listing>\r\n<submission-listing></submission-listing>\r\n<uploaded-files></uploaded-files>\r\n<submission-details-app></submission-details-app>\r\n<fileupload-app></fileupload-app>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .section {\n  padding: 10px 0 20px; }\n  /deep/ .section h2 {\n    font-size: 21px;\n    font-family: 'ArialMT', 'Arial', sans-serif;\n    font-weight: 400;\n    margin: 0 0 10px; }\n  /deep/ .section .buttons {\n    margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DataGrid_datagrid_component__ = __webpack_require__("../../../../../src/app/DataGrid/datagrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SitesListing_siteslisting_component__ = __webpack_require__("../../../../../src/app/SitesListing/siteslisting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SubmissionListing_submissionlisting_component__ = __webpack_require__("../../../../../src/app/SubmissionListing/submissionlisting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SubmissionDetails_submission_details_component__ = __webpack_require__("../../../../../src/app/SubmissionDetails/submission-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__UploadedFiles_uploaded_files_component__ = __webpack_require__("../../../../../src/app/UploadedFiles/uploaded-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__FileUpload_fileupload_component__ = __webpack_require__("../../../../../src/app/FileUpload/fileupload.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_4__DataGrid_datagrid_component__["a" /* DataGridComponent */],
            __WEBPACK_IMPORTED_MODULE_5__SitesListing_siteslisting_component__["a" /* SitesListingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__SubmissionListing_submissionlisting_component__["a" /* SubmissionListingComponent */],
            __WEBPACK_IMPORTED_MODULE_7__SubmissionDetails_submission_details_component__["a" /* SubmissionDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__UploadedFiles_uploaded_files_component__["a" /* UploadedFilesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__FileUpload_fileupload_component__["a" /* FileUploadComponent */]
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