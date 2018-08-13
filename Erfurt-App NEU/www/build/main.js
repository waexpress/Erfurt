webpackJsonp([0],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CallService = (function () {
    function CallService() {
    }
    CallService.prototype.call = function (phoneNumber) {
        window.location.href = 'tel:' + phoneNumber;
    };
    CallService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], CallService);
    return CallService;
}());

//# sourceMappingURL=call.service.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmailService = (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (email) {
        window.location.href = 'mailto:' + email;
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], EmailService);
    return EmailService;
}());

//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapsService = (function () {
    function MapsService(platform) {
        this.platform = platform;
    }
    MapsService.prototype.openMapsApp = function (location, label) {
        if (label === void 0) { label = null; }
        var q;
        if (this.platform.is('android')) {
            q = 'geo:' + location + '?q=' + location;
            if (label) {
                q += '(' + label + ')';
            }
        }
        else {
            q = 'maps://maps.apple.com/?q=' + location;
        }
        window.location.href = q;
    };
    MapsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], MapsService);
    return MapsService;
}());

//# sourceMappingURL=maps.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenHoursService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_format__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_format__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpenHoursService = (function () {
    function OpenHoursService() {
        this.dayNames = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
    }
    // *****************************************************************
    OpenHoursService.prototype.getOpenHours = function (openHours) {
        var _this = this;
        var days = [];
        var groupedDays = __WEBPACK_IMPORTED_MODULE_0_lodash__["groupBy"](openHours.days, 'day');
        __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](groupedDays, function (groupedDay) {
            var day = {
                times: [],
                name: ''
            };
            __WEBPACK_IMPORTED_MODULE_0_lodash__["each"](groupedDay, function (d) {
                day.name = _this.dayNames[d.day];
                var openAt = new Date(d.openAt);
                var closeAt = new Date(d.closeAt);
                var from = __WEBPACK_IMPORTED_MODULE_2_date_format___default()('hh:mm', openAt);
                var to = __WEBPACK_IMPORTED_MODULE_2_date_format___default()('hh:mm', closeAt);
                day.times.push(from + ' - ' + to);
            });
            days.push(day);
        });
        // debugger;
        return days;
    };
    OpenHoursService.prototype.isBusinessOpen = function (openHours) {
        var now = (new Date());
        var day = now.getDay();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var fixedTime = (new Date(2015, 0, 1, hours, minutes, 0)).getTime();
        var open;
        for (var i = 0; i < openHours.days.length; i++) {
            open = openHours.days[i];
            if (open.day !== day) {
                continue;
            }
            if (fixedTime >= open.openAt && fixedTime <= open.closeAt) {
                return true;
            }
        }
        return false;
    };
    OpenHoursService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])()
    ], OpenHoursService);
    return OpenHoursService;
}());

//# sourceMappingURL=open-hours.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__business_detail__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__businesses_filter__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BusinessesPage = (function () {
    function BusinessesPage(modalCtrl, navCtrl, navParams, service, data) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.service = service;
        this.data = data;
        this.queryText = '';
        this.businesses = [];
        this.orderBy = 'name';
        this.categories = [];
        this.selectedCategory = null;
        if (navParams.data.category) {
            this.selectedCategory = navParams.get('category').key;
        }
    }
    Object.defineProperty(BusinessesPage.prototype, "isFilterDirty", {
        get: function () {
            return !!this.selectedCategory;
        },
        enumerable: true,
        configurable: true
    });
    BusinessesPage.prototype.ionViewCanEnter = function () {
        return this.data.init();
    };
    BusinessesPage.prototype.ionViewDidLoad = function () {
        this.updateList();
    };
    BusinessesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        Promise.all([this.loadCategories()])
            .then(function () {
            _this.updateList();
            _this.selectedCategoryData = _this.loadSelectedCategory(_this.selectedCategory);
        });
    };
    BusinessesPage.prototype.updateList = function () {
        var _this = this;
        this.service.fetchBusinesses(this.queryText, false, this.selectedCategory, this.orderBy)
            .then(function (businesses) {
            _this.businesses = businesses;
        });
    };
    BusinessesPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__businesses_filter__["a" /* BusinessesFilter */], {
            categories: this.categories,
            orderBy: this.orderBy,
            selectedCategory: this.selectedCategory
        });
        modal.present();
        modal.onWillDismiss(function (result) {
            if (result) {
                _this.selectedCategory = result.selectedCategory;
                _this.orderBy = result.orderBy;
                _this.updateList();
                _this.selectedCategoryData = _this.loadSelectedCategory(_this.selectedCategory);
            }
        });
    };
    BusinessesPage.prototype.goToBusinessDetail = function (business) {
        this.service.setCurrent(business);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__business_detail__["a" /* BusinessDetailPage */]);
    };
    BusinessesPage.prototype.clearFilter = function () {
        this.selectedCategory = null;
        this.updateList();
        this.selectedCategoryData = null;
    };
    BusinessesPage.prototype.selectCategory = function (category) {
        this.selectedCategory = category.$key;
        this.updateList();
        this.selectedCategoryData = this.loadSelectedCategory(this.selectedCategory);
    };
    BusinessesPage.prototype.loadCategories = function () {
        var _this = this;
        return this.service.getCategories().then(function (categories) {
            _this.categories = [{ $key: null, name: 'All' }].concat(categories);
        });
    };
    BusinessesPage.prototype.loadSelectedCategory = function (selectedCategory) {
        return this.categories.find(function (category) {
            if (category.$key) {
                return category.$key == selectedCategory;
            }
        });
    };
    BusinessesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-businesses',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/businesses/businesses.html"*/'<ion-header>\n	<ion-navbar no-border-bottom color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n\n		<ion-title>Erfurt-App</ion-title>\n\n		<ion-buttons end>\n			<!--\n			<button class="clear-filter" ion-button icon-only (click)="clearFilter()" [hidden]="!isFilterDirty">\n				<ion-icon name="close"></ion-icon>\n			</button>\n			-->\n			<button ion-button icon-only (click)="presentFilter()">\n				<ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<!--\n	<ion-scroll scrollX="true" scrollY="false" zoom="true" class="horizontal-list">\n		<button ion-button class="filter-item" color="light"\n			*ngFor="let category of categories"\n			[ngClass]="{ \'active-filter\' : selectedCategory === category.$key }"\n			(click)="selectCategory(category)">\n			{{category.name}}\n		</button>\n	</ion-scroll>\n	-->\n\n	<div *ngIf="selectedCategoryData">\n		<div text-center class="as-image">\n			<img src="{{selectedCategoryData?.picture}}"/>\n		</div>\n		<div padding-horizontal>\n			<p class="as-text-justify">{{selectedCategoryData?.text}}</p>\n		</div>\n	</div>\n\n	<ion-searchbar [(ngModel)]="queryText" (ionInput)="updateList()" placeholder="Search"></ion-searchbar>\n\n	<ion-list [hidden]="businesses.length === 0">\n		<ion-item (click)="goToBusinessDetail(business)" *ngFor="let business of businesses" text-wrap>\n			<ion-thumbnail item-start>\n				<img [src]="business.logo">\n			</ion-thumbnail>\n			<p class="distance">{{business.distance | distance}}</p>\n			<h2 padding-top>{{business.name}}</h2>\n			<!-- <h3>{{business.categoryName}}</h3> -->\n			<p class="as-text-justify">{{business.description | truncate: 130}}</p>\n		</ion-item>\n	</ion-list>\n\n	<ion-list-header [hidden]="businesses.length > 0">\n		Suche erfolglos\n	</ion-list-header>\n\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/businesses/businesses.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_businesses_service__["a" /* BusinessesService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_provider__["a" /* DataProvider */]])
    ], BusinessesPage);
    return BusinessesPage;
}());

//# sourceMappingURL=businesses.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessesFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusinessesFilter = (function () {
    function BusinessesFilter(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        var data = this.navParams.data;
        this.categories = data.categories;
        this.orderBy = data.orderBy;
        this.selectedCategory = data.selectedCategory;
    }
    BusinessesFilter.prototype.applyFilters = function () {
        this.dismiss({
            selectedCategory: this.selectedCategory,
            orderBy: this.orderBy
        });
    };
    BusinessesFilter.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    BusinessesFilter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-businesses-filter',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/businesses/businesses-filter.html"*/'<ion-header>\n	<ion-toolbar>\n		<ion-buttons start>\n			<button ion-button (click)="dismiss()">Cancel</button>\n		</ion-buttons>\n\n		<ion-title>\n			Filter\n		</ion-title>\n\n		<ion-buttons end>\n			<button ion-button (click)="applyFilters()" strong>Done</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n	<ion-list radio-group [(ngModel)]="orderBy">\n		<ion-list-header>Order by</ion-list-header>\n		<ion-item>\n			<ion-label>Name</ion-label>\n			<ion-radio value="name"></ion-radio>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>Distance</ion-label>\n			<ion-radio value="distance"></ion-radio>\n		</ion-item>\n	</ion-list>\n\n	<!--\n	<ion-list radio-group [(ngModel)]="selectedCategory">\n		<ion-list-header>Sessions</ion-list-header>\n\n		<ion-item *ngFor="let category of categories">\n			<ion-label>{{category.name}}</ion-label>\n			<ion-radio value="{{category.$key}}"></ion-radio>\n		</ion-item>\n	</ion-list>\n	-->\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/businesses/businesses-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], BusinessesFilter);
    return BusinessesFilter;
}());

//# sourceMappingURL=businesses-filter.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_items_no_items_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tiles_tiles_component__ = __webpack_require__(534);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CustomComponentsModule = (function () {
    function CustomComponentsModule() {
    }
    CustomComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__tiles_tiles_component__["a" /* TilesComponent */], __WEBPACK_IMPORTED_MODULE_2__no_items_no_items_component__["a" /* NoItemsComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__tiles_tiles_component__["a" /* TilesComponent */], __WEBPACK_IMPORTED_MODULE_2__no_items_no_items_component__["a" /* NoItemsComponent */]]
        })
    ], CustomComponentsModule);
    return CustomComponentsModule;
}());

//# sourceMappingURL=custom-components.module.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
var DataProvider = (function () {
    function DataProvider() {
    }
    DataProvider.prototype.calcRating = function (rating, newRate) {
        if (!newRate) {
            return rating;
        }
        if (!rating || rating.reviews === 0) {
            rating = {
                value: newRate,
                reviews: 1
            };
        }
        else {
            var rate = (rating.value * rating.reviews);
            rating = {
                value: (rate + newRate) / (rating.reviews + 1),
                reviews: rating.reviews + 1
            };
        }
        return rating;
    };
    return DataProvider;
}());

//# sourceMappingURL=data-provider.js.map

/***/ }),

/***/ 190:
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
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_distance_service__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_local_storage__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusinessesService = (function () {
    function BusinessesService(data, distanceService) {
        this.data = data;
        this.distanceService = distanceService;
    }
    BusinessesService.prototype.fetchBusinesses = function (filter, showFavorites, categoryId, orderBy) {
        var _this = this;
        if (orderBy === void 0) { orderBy = 'name'; }
        filter = filter ? filter.toLowerCase() : filter;
        return this.getBusinesses().then(function () {
            var businesses = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](_this.businesses, function (business) {
                return (!filter || (business.name.toLowerCase().indexOf(filter) >= 0 || business.keyword.toLowerCase().indexOf(filter) >= 0))
                    && (!showFavorites || business.isInFavorites)
                    && (!categoryId || (business.category && business.category.includes(categoryId)));
            });
            businesses = __WEBPACK_IMPORTED_MODULE_1_lodash__["sortBy"](businesses, function (business) { return business[orderBy]; });
            return Promise.resolve(businesses);
        });
    };
    BusinessesService.prototype.toggleFavorites = function (businessId) {
        var toggle = !this.isInFavorites(businessId);
        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](this.businesses, function (businessItem) {
            if (businessItem.$key === businessId) {
                businessItem.isInFavorites = toggle;
                var favorites = __WEBPACK_IMPORTED_MODULE_4__common_services_local_storage__["a" /* LS */].getItem('favoritesBusinesses') || [];
                if (toggle) {
                    favorites.push(businessItem.$key);
                    favorites = __WEBPACK_IMPORTED_MODULE_1_lodash__["uniq"](favorites);
                }
                else {
                    favorites = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](favorites, function (item) { return item != businessItem.$key; });
                }
                __WEBPACK_IMPORTED_MODULE_4__common_services_local_storage__["a" /* LS */].setItem('favoritesBusinesses', favorites);
            }
        });
    };
    BusinessesService.prototype.getCategories = function () {
        return this.data.getCategories().then(function (categories) { return Object.keys(categories).map(function (key) { return categories[key]; }); });
    };
    BusinessesService.prototype.isInFavorites = function (id) {
        var favorites = __WEBPACK_IMPORTED_MODULE_4__common_services_local_storage__["a" /* LS */].getItem('favoritesBusinesses');
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["indexOf"](favorites, id) >= 0;
    };
    BusinessesService.prototype.getBusinesses = function () {
        var _this = this;
        if (!this.businesses) {
            return Promise.all([this.data.getBusinesses(), this.data.getCategories()])
                .then(function (_a) {
                var businesses = _a[0], categories = _a[1];
                _this.businesses = businesses;
                var favorites = __WEBPACK_IMPORTED_MODULE_4__common_services_local_storage__["a" /* LS */].getItem('favoritesBusinesses') || [];
                __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](businesses, function (business) {
                    var categoryNames = [];
                    if (favorites.indexOf(business.$key) >= 0) {
                        business.isInFavorites = true;
                    }
                    __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](business.category, function (category) {
                        if (categories[category]) {
                            categoryNames.push(categories[category].name);
                        }
                    });
                    business.categoryNames = categoryNames;
                });
                _this.setDistance(businesses);
                return businesses;
            });
        }
        return Promise.resolve(this.businesses);
    };
    BusinessesService.prototype.setDistance = function (businesses) {
        var origins = __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](businesses, function (business) {
            return business.officeLocation;
        });
        businesses = __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](businesses, function (business) { return business; });
        this.distanceService.getDistancesToOrigins(origins)
            .then(function (distances) {
            __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](businesses, function (business, index) {
                business.distance = distances[index];
            });
        });
    };
    BusinessesService.prototype.setCurrent = function (business) {
        this.currentBusiness = business;
    };
    BusinessesService.prototype.getCurrent = function () {
        return this.currentBusiness;
    };
    BusinessesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_provider__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__common_services_distance_service__["a" /* DistanceService */]])
    ], BusinessesService);
    return BusinessesService;
}());

//# sourceMappingURL=businesses.service.js.map

/***/ }),

/***/ 274:
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
webpackEmptyAsyncContext.id = 274;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trim_html_pipe__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__truncate_pipe__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__youtube_embed_url_pipe__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vimeo_embed_url_pipe__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local_date_pipe__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__distance_pipe__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_by_pipe__ = __webpack_require__(531);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_1__trim_html_pipe__["a" /* TrimHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_3__youtube_embed_url_pipe__["a" /* YoutubeEmbedUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_4__vimeo_embed_url_pipe__["a" /* VimeoEmbedUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_5__local_date_pipe__["a" /* LocalDatePipe */],
                __WEBPACK_IMPORTED_MODULE_6__distance_pipe__["a" /* DistancePipe */],
                __WEBPACK_IMPORTED_MODULE_7__order_by_pipe__["a" /* OrderByPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_1__trim_html_pipe__["a" /* TrimHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_3__youtube_embed_url_pipe__["a" /* YoutubeEmbedUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_4__vimeo_embed_url_pipe__["a" /* VimeoEmbedUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_5__local_date_pipe__["a" /* LocalDatePipe */],
                __WEBPACK_IMPORTED_MODULE_6__distance_pipe__["a" /* DistancePipe */],
                __WEBPACK_IMPORTED_MODULE_7__order_by_pipe__["a" /* OrderByPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistanceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geolib__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geolib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geolib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DistanceService = (function () {
    function DistanceService(geolocation) {
        this.geolocation = geolocation;
    }
    DistanceService.prototype.getDistancesToOrigins = function (origins) {
        var _this = this;
        return this.getCurrentPosition()
            .then(function (position) {
            return __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](origins, function (origin) {
                if (!origin) {
                    return null;
                }
                return _this.getDistance(origin, position);
            });
        });
    };
    DistanceService.prototype.getDistanceToOrigin = function (origin) {
        var _this = this;
        return this.getCurrentPosition()
            .then(function (position) { return _this.getDistance(origin, position); });
    };
    DistanceService.prototype.getDistance = function (origin, position) {
        origin = origin.split(',');
        origin = {
            latitude: origin[0],
            longitude: origin[1]
        };
        var distance = __WEBPACK_IMPORTED_MODULE_2_geolib__["getDistance"]({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, origin);
        /*
        if (distance < 1000) {
            distance = distance + ' m';
        } else {
            distance = convert(distance, 'meters', {
                precision: 2
            }).toKilometers() + ' km';
        }
        */
        return distance;
    };
    DistanceService.prototype.getCurrentPosition = function () {
        var posOptions = {
            enableHighAccuracy: true
        };
        return this.geolocation.getCurrentPosition(posOptions);
    };
    DistanceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], DistanceService);
    return DistanceService;
}());

//# sourceMappingURL=distance.service.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_home_service__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__businesses_businesses__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__businesses_business_detail__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slideshow_slideshow_page__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_services_in_app_browser_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, inBrowser, service, businessesService) {
        this.navCtrl = navCtrl;
        this.inBrowser = inBrowser;
        this.service = service;
        this.businessesService = businessesService;
        this.homeData = {};
        this.business = {};
        this.businesses = [];
        this.categories = [];
        this.itemRows = [];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getHomeData().then(function (homeData) {
            _this.homeData = homeData;
            _this.categories = Object.keys(_this.homeData.categories).map(function (key) { return _this.homeData.categories[key]; });
            _this.service.getBusinesses().then(function (businesses) {
                _this.businesses = businesses;
                _this.itemRows = _this.createItemRows();
            });
        });
    };
    HomePage.prototype.itemTapped = function (item) {
        if (item.isBusiness) {
            this.goToBusiness(item.key);
        }
        else if (item.isAction) {
            this.openUrl(item.url);
        }
        else if (item.isSlideshow) {
            this.goToSlideshow();
        }
        else {
            this.goToBusinesses(item);
        }
    };
    HomePage.prototype.goToBusinesses = function (category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__businesses_businesses__["a" /* BusinessesPage */], { category: category });
    };
    HomePage.prototype.goToBusiness = function (business) {
        var _this = this;
        this.service.getBusiness(business)
            .then(function (business) {
            _this.business = business;
            _this.businessesService.setCurrent(_this.business);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__businesses_business_detail__["a" /* BusinessDetailPage */]);
        });
    };
    HomePage.prototype.openUrl = function (url) {
        this.inBrowser.open(url);
    };
    HomePage.prototype.goToSlideshow = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__slideshow_slideshow_page__["a" /* SlideshowPage */]);
    };
    HomePage.prototype.createItemRows = function () {
        var _this = this;
        var row = [];
        this.categories.forEach(function (item) {
            row.push(item);
            if (row.length === 4) {
                _this.itemRows.push(row);
                row = [];
            }
        });
        this.businesses.forEach(function (business) {
            row.push(business);
            if (row.length === 4) {
                _this.itemRows.push(row);
                row = [];
            }
        });
        if (row.length) {
            this.itemRows.push(row);
        }
        return this.itemRows;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/home/home.html"*/'<ion-header>\n	<ion-navbar color="primary">\n    <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Erfurt-App</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div text-center class="as-image">\n  	<img src="{{homeData.picture}}"/>\n	</div>\n	<div padding-horizontal>\n		<p class="as-text-justify">{{homeData.text}}</p>\n		<ion-grid no-padding>\n			<ion-row *ngFor="let itemRow of itemRows">\n				<ion-col col-3 *ngFor="let item of itemRow" no-padding>\n					<ion-card (click)="itemTapped(item)" no-margin>\n				    <img [src]="item.picture"/>\n						\n					</ion-card>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__common_services_in_app_browser_service__["a" /* InAppBrowserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_6__services_businesses_service__["a" /* BusinessesService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_provider__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeService = (function () {
    function HomeService(http, dataProvider) {
        this.http = http;
        this.dataProvider = dataProvider;
    }
    HomeService.prototype.getHomeData = function () {
        var homeDataUrl = 'assets/data/home.json';
        return this.http.get(homeDataUrl)
            .map(function (x) { return x.json(); })
            .toPromise()
            .then(function (response) {
            Object.keys(response.categories).forEach(function (key) {
                response.categories[key].key = key;
            });
            return response;
        });
    };
    HomeService.prototype.getBusinesses = function () {
        var businessesDataUrl = 'assets/data/businesses.json';
        return this.http.get(businessesDataUrl)
            .map(function (x) { return x.json(); })
            .toPromise()
            .then(function (response) {
            return response.businesses;
        });
    };
    HomeService.prototype.getBusiness = function (businessId) {
        return this.dataProvider.getBusiness(businessId);
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_data_provider__["a" /* DataProvider */]])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrupalListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drupal_item__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drupal_service__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrupalListPage = (function () {
    function DrupalListPage(drupal, nav, businessService) {
        this.drupal = drupal;
        this.nav = nav;
        this.businessService = businessService;
    }
    DrupalListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.drupal.getPosts(this.businessService.getCurrent().drupal)
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    DrupalListPage.prototype.itemTapped = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__drupal_item__["a" /* DrupalItemPage */], {
            item: item
        });
    };
    DrupalListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/drupal/drupal-list.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Drupal posts</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-card *ngFor="let post of posts" (click)="itemTapped(post)">\n		<img *ngIf="!!post.image" src="{{post.image}}"/>\n		<ion-card-content>\n			<h2 class="card-title">{{post.title}}</h2>\n			<p>{{post.brief | trimHtml | truncate : 140}}</p>\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/drupal/drupal-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__drupal_service__["a" /* DrupalService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__["a" /* BusinessesService */]])
    ], DrupalListPage);
    return DrupalListPage;
}());

//# sourceMappingURL=drupal-list.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrupalItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrupalItemPage = (function () {
    function DrupalItemPage(navParams) {
        this.post = navParams.get('item');
    }
    DrupalItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/drupal/drupal-item.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>Drupal post</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<img *ngIf="!!post.image" src="{{post.image}}"/>\n	<div padding>\n		<h2 class="card-title">{{post.title}}</h2>\n		<div [innerHTML]="post.content"></div>\n		<p><i>[{{post.tags}}]</i></p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/drupal/drupal-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DrupalItemPage);
    return DrupalItemPage;
}());

//# sourceMappingURL=drupal-item.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrupalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrupalService = (function () {
    function DrupalService(http) {
        this.http = http;
    }
    DrupalService_1 = DrupalService;
    DrupalService.prototype.getPosts = function (url) {
        return this.http.get(url)
            .map(function (x) { return x.json(); })
            .map(function (response) {
            return response.map(function (item) { return DrupalService_1.createArticle(item); });
        });
    };
    DrupalService.parseImgSrc = function (tag) {
        var match = tag.match(/<img.+src=(?:"|')(.+?)(?:"|')(?:.+?)>/);
        return match[1];
    };
    DrupalService.createArticle = function (item) {
        return {
            id: item.nid,
            title: item.node_title,
            brief: item.teaser,
            image: DrupalService_1.parseImgSrc(item.image),
            content: item.body,
            tags: item.tags
        };
    };
    ;
    DrupalService = DrupalService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DrupalService);
    return DrupalService;
    var DrupalService_1;
}());

//# sourceMappingURL=drupal.service.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_item__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_service__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsListPage = (function () {
    function NewsListPage(service, nav, businessService) {
        this.service = service;
        this.nav = nav;
        this.businessService = businessService;
    }
    NewsListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPosts(this.businessService.getCurrent().$key)
            .then(function (posts) { return _this.posts = posts; });
    };
    NewsListPage.prototype.itemTapped = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__news_item__["a" /* NewsItemPage */], {
            item: item
        });
    };
    NewsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/news/news-list.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		 <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>News</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<ion-item text-wrap *ngFor="let post of posts" (click)="itemTapped(post)">\n			<ion-thumbnail item-left>\n				<img src="{{post.thumb}}"/>\n			</ion-thumbnail>\n			<h2>{{post.title}}</h2>\n			<p>{{post.body | truncate : 140}}</p>\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/news/news-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__["a" /* BusinessesService */]])
    ], NewsListPage);
    return NewsListPage;
}());

//# sourceMappingURL=news-list.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsItemPage = (function () {
    function NewsItemPage(navParams) {
        this.post = navParams.get('item');
    }
    NewsItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/news/news-item.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>News</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<img *ngIf="!!post.picture" src="{{post.picture}}"/>\n	<div class="news-item" padding>\n		<h2>{{post.title}}</h2>\n		<p>{{post.body}}</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/news/news-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NewsItemPage);
    return NewsItemPage;
}());

//# sourceMappingURL=news-item.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_provider__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsService = (function () {
    function NewsService(dataProvider) {
        this.dataProvider = dataProvider;
    }
    NewsService.prototype.getPosts = function (businessId) {
        return this.dataProvider.getPosts(businessId);
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_provider__["a" /* DataProvider */]])
    ], NewsService);
    return NewsService;
}());

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_item__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_service__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsListPage = (function () {
    function ProductsListPage(service, nav, businessService) {
        this.service = service;
        this.nav = nav;
        this.businessService = businessService;
    }
    ProductsListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProducts(this.businessService.getCurrent().$key)
            .then(function (products) { return _this.products = products; });
    };
    ProductsListPage.prototype.itemTapped = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__products_item__["a" /* ProductsItemPage */], {
            item: item
        });
    };
    ProductsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/products/products-list.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		 <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Products</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<tiles *ngIf="!!products"\n		[items]="products"\n		[footerField]="\'price\'"\n		(itemTapped)="itemTapped($event)"></tiles>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/products/products-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__["a" /* BusinessesService */]])
    ], ProductsListPage);
    return ProductsListPage;
}());

//# sourceMappingURL=products-list.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_in_app_browser_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsItemPage = (function () {
    function ProductsItemPage(navParams, browser) {
        this.browser = browser;
        this.product = navParams.get('item');
    }
    ProductsItemPage.prototype.buyNow = function () {
        this.browser.open(this.product.url);
    };
    ProductsItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/products/products-item.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>Product</ion-title>\n\n		<ion-buttons end>\n			<button ion-button icon-only (click)="buyNow()">\n				<ion-icon name=cart></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div>\n		<ion-slides pager>\n			<ion-slide *ngFor="let picture of product.pictures">\n				<img src="{{picture}}"/>\n			</ion-slide>\n		</ion-slides>\n	</div>\n	<div padding>\n		<h2>{{product.title}}</h2>\n		<div text-right="">{{product.price}}</div>\n		<p>{{product.body}}</p>\n	</div>\n\n	<div padding-horizontal>\n		<button ion-button icon-left="" color="primary" block (click)="buyNow()"><ion-icon name="cart"></ion-icon> Buy now</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/products/products-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__common_services_in_app_browser_service__["a" /* InAppBrowserService */]])
    ], ProductsItemPage);
    return ProductsItemPage;
}());

//# sourceMappingURL=products-item.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_provider__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = (function () {
    function ProductsService(dataProvider) {
        this.dataProvider = dataProvider;
    }
    ProductsService.prototype.getProducts = function (businessId) {
        return this.dataProvider.getProducts(businessId);
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_provider__["a" /* DataProvider */]])
    ], ProductsService);
    return ProductsService;
}());

//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_review__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_reviews_service__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewsPage = (function () {
    function ReviewsPage(service, modalCtrl, businessService) {
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.businessService = businessService;
        this.reviews = [];
        this.business = businessService.getCurrent();
    }
    ReviewsPage.prototype.ionViewDidLoad = function () {
        this.loadReviews();
    };
    ReviewsPage.prototype.addReview = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_review__["a" /* AddReviewPage */]);
        modal.present();
        modal.onWillDismiss(function (review) {
            if (review) {
                _this.service.addReview(_this.business.$key, review)
                    .then(function () {
                    _this.loadReviews();
                });
            }
        });
    };
    ReviewsPage.prototype.loadReviews = function () {
        var _this = this;
        this.service.getReviews(this.business.$key)
            .then(function (reviews) { return _this.reviews = reviews; });
    };
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/reviews/reviews.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Reviews</ion-title>\n\n		<ion-buttons end>\n			<button class="clear-filter" ion-button icon-only (click)="addReview()">\n				<ion-icon name=add></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<ion-item *ngFor="let review of reviews | orderBy : [\'-date\']">\n			{{review.author}}\n			<p>{{review.comment}}</p>\n			<ion-note item-end class="review-date">{{review.date | date}}</ion-note>\n\n			<rating [ngModel]="review.rate" readOnly="true"></rating>\n\n		</ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/reviews/reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_reviews_service__["a" /* ReviewsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__["a" /* BusinessesService */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddReviewPage = (function () {
    function AddReviewPage(viewCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.review = { rate: 0 };
    }
    AddReviewPage.prototype.addReview = function () {
        if (!this.review.author || !this.review.comment) {
            var alert_1 = this.alertCtrl.create({
                title: 'Validation',
                subTitle: 'Author and comment fields are required',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.dismiss(this.review);
        }
    };
    AddReviewPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    AddReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-review',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/reviews/add-review.html"*/'<ion-header>\n	<ion-toolbar>\n		<ion-buttons start>\n			<button ion-button (click)="dismiss()">Cancel</button>\n		</ion-buttons>\n\n		<ion-title>\n			Add review\n		</ion-title>\n\n	</ion-toolbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n\n		<ion-item>\n			<ion-label floating>Name</ion-label>\n			<ion-input type="text" [(ngModel)]="review.author"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>Comment</ion-label>\n			<ion-textarea rows="6" type="text" [(ngModel)]="review.comment"></ion-textarea>\n		</ion-item>\n\n		<!--<ion-item>-->\n		<!--<ion-label>Rating</ion-label>-->\n\n		<!---->\n		<!--</ion-item>-->\n\n	</ion-list>\n\n	<div padding>\n		<span>Rating</span>\n		<rating [(ngModel)]="review.rate" nullable="true"></rating>\n	</div>\n\n	<div padding>\n		<button ion-button color="primary" block (click)="addReview()">Add</button>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/reviews/add-review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddReviewPage);
    return AddReviewPage;
}());

//# sourceMappingURL=add-review.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_provider__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsService = (function () {
    function ReviewsService(dataProvider) {
        this.dataProvider = dataProvider;
    }
    ReviewsService.prototype.getReviews = function (businessId) {
        return this.dataProvider.getReviews(businessId);
    };
    ReviewsService.prototype.addReview = function (businessId, review) {
        Object.assign(review, {
            date: new Date().getTime(),
            business: businessId
        });
        return this.dataProvider.addReview(businessId, review);
    };
    ReviewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_provider__["a" /* DataProvider */]])
    ], ReviewsService);
    return ReviewsService;
}());

//# sourceMappingURL=reviews.service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_service__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServicesListPage = (function () {
    function ServicesListPage(service, nav, businessService) {
        this.service = service;
        this.nav = nav;
        this.businessService = businessService;
    }
    ServicesListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getServices(this.businessService.getCurrent().$key)
            .then(function (services) { return _this.services = services; });
    };
    ServicesListPage.prototype.itemTapped = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__services_item__["a" /* ServicesItemPage */], {
            item: item
        });
    };
    ServicesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/services/services-list.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Services</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<tiles *ngIf="!!services"\n		[items]="services"\n		(itemTapped)="itemTapped($event)"></tiles>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/services/services-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_service__["a" /* ServicesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__["a" /* BusinessesService */]])
    ], ServicesListPage);
    return ServicesListPage;
}());

//# sourceMappingURL=services-list.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_in_app_browser_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesItemPage = (function () {
    function ServicesItemPage(navParams, browser) {
        this.browser = browser;
        this.service = navParams.get('item');
    }
    ServicesItemPage.prototype.open = function () {
        this.browser.open(this.service.url);
    };
    ServicesItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/services/services-item.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>Service</ion-title>\n\n		<ion-buttons end>\n			<button ion-button icon-only (click)="open()">\n				<ion-icon name=link></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div>\n		<ion-slides pager>\n			<ion-slide *ngFor="let picture of service.pictures">\n				<img src="{{picture}}"/>\n			</ion-slide>\n		</ion-slides>\n	</div>\n	<div padding>\n		<h2>{{service.title}}</h2>\n		<p>{{service.body}}</p>\n	</div>\n\n	<div padding-horizontal>\n		<button ion-button icon-left="" color="primary" block (click)="open()"><ion-icon name="link"></ion-icon> Read more</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/services/services-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__common_services_in_app_browser_service__["a" /* InAppBrowserService */]])
    ], ServicesItemPage);
    return ServicesItemPage;
}());

//# sourceMappingURL=services-item.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_provider__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesService = (function () {
    function ServicesService(dataProvider) {
        this.dataProvider = dataProvider;
    }
    ServicesService.prototype.getServices = function (businessId) {
        return this.dataProvider.getServices(businessId);
    };
    ServicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_provider__["a" /* DataProvider */]])
    ], ServicesService);
    return ServicesService;
}());

//# sourceMappingURL=services.service.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_item__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_service__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WordpressListPage = (function () {
    function WordpressListPage(wordpressService, nav, businessService) {
        this.wordpressService = wordpressService;
        this.nav = nav;
        this.businessService = businessService;
    }
    WordpressListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.wordpressService.getPosts(this.businessService.getCurrent().wordpress)
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    WordpressListPage.prototype.itemTapped = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__wordpress_item__["a" /* WordpressItemPage */], {
            item: item
        });
    };
    WordpressListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wordpress-list',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/wordpress/wordpress-list.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		 <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>WP posts</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-card *ngFor="let post of posts" (click)="itemTapped(post)">\n		<img *ngIf="!!post.image" src="{{post.image}}"/>\n		<ion-card-content>\n			<h2 class="card-title">{{post.title}}</h2>\n			<p>{{post.brief | trimHtml | truncate : 140}}</p>\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/wordpress/wordpress-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__wordpress_service__["a" /* WordpressService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__["a" /* BusinessesService */]])
    ], WordpressListPage);
    return WordpressListPage;
}());

//# sourceMappingURL=wordpress-list.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordpressItemPage = (function () {
    function WordpressItemPage(navParams) {
        this.post = navParams.get('item');
    }
    WordpressItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wordpress-item',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/wordpress/wordpress-item.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>WP post</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<img *ngIf="!!post.image" src="{{post.image}}"/>\n	<div padding>\n		<h2>{{post.title}}</h2>\n		<div [innerHTML]="post.content"></div>\n		<p><strong>{{post.author}}</strong> - {{post.date}}</p>\n		<p><i>[{{post.tags.join(\', \')}}]</i></p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/wordpress/wordpress-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WordpressItemPage);
    return WordpressItemPage;
}());

//# sourceMappingURL=wordpress-item.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordpressService = (function () {
    function WordpressService(http) {
        this.http = http;
    }
    WordpressService_1 = WordpressService;
    WordpressService.prototype.getPosts = function (url) {
        return this.http.get(url)
            .map(function (x) { return x.json(); })
            .map(function (response) { return response.posts.map(function (item) { return WordpressService_1.createArticle(item, url); }); });
    };
    WordpressService.createArticle = function (item, url) {
        var imageUrl = item.attachments.length > 0 ? item.attachments[0].images.full.url : null;
        var tags = item.tags.map(function (x) { return x.title; });
        var contentIndex = item.content.indexOf('</p>') + 4;
        var content = contentIndex === -1 ? item.content : item.content.substring(contentIndex);
        return {
            id: item.id,
            title: item.title,
            brief: item.excerpt,
            image: imageUrl,
            date: item.date,
            content: content,
            author: item.author.name,
            tags: tags,
            url: url
        };
    };
    ;
    WordpressService = WordpressService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WordpressService);
    return WordpressService;
    var WordpressService_1;
}());

//# sourceMappingURL=wordpress.service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_call_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_email_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_in_app_browser_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_services_maps_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_open_hours_service__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactUsPage = (function () {
    function ContactUsPage(navParams, callService, emailService, inBrowser, openHoursService, mapsService) {
        this.callService = callService;
        this.emailService = emailService;
        this.inBrowser = inBrowser;
        this.openHoursService = openHoursService;
        this.mapsService = mapsService;
        this.business = navParams.get('business');
        this.days = this.openHoursService.getOpenHours(this.business.openhours);
    }
    ContactUsPage.prototype.call = function (phone) {
        this.callService.call(phone);
    };
    ContactUsPage.prototype.sendEmail = function (email) {
        this.emailService.sendEmail(email);
    };
    ContactUsPage.prototype.openUrl = function (url) {
        this.inBrowser.open(url);
    };
    ContactUsPage.prototype.getDirections = function (officeLocation) {
        this.mapsService.openMapsApp(officeLocation, this.business.name);
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/businesses/contact-us.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>Erfurt-App</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div padding>\n		<h1>{{business.name}}</h1>\n		<!-- <p>{{business.description}}</p> -->\n	</div>\n\n	<ion-list>\n		<ion-list-header>Öffnungszeiten</ion-list-header>\n\n		<ion-item *ngFor="let day of days">\n			<h2>{{day.name}}</h2>\n			<!--<p><span *ngFor="let time of day.times">{{time}}</span></p>-->\n			<p>{{day.times.join(\' | \')}}</p>\n		</ion-item>\n	</ion-list>\n\n	<!--\n	<ion-list>\n		<ion-list-header>Contact</ion-list-header>\n\n		<button ion-item detail-none (click)="call(business.phoneNumber)">\n			<ion-icon name="call" item-end></ion-icon>\n			Call us\n		</button>\n		<button ion-item detail-none (click)="sendEmail(business.email)">\n			<ion-icon name="mail" item-end></ion-icon>\n			Send us email\n		</button>\n		<button ion-item detail-none (click)="getDirections(business.officeLocation)">\n			<ion-icon name="map" item-end></ion-icon>\n			Find us / Get directions\n		</button>\n		<button ion-item detail-none (click)="openUrl(business.facebookPage)">\n			<ion-icon name="logo-facebook" item-end></ion-icon>\n			Facebook\n		</button>\n	</ion-list>\n	-->\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/businesses/contact-us.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__common_services_call_service__["a" /* CallService */],
            __WEBPACK_IMPORTED_MODULE_3__common_services_email_service__["a" /* EmailService */],
            __WEBPACK_IMPORTED_MODULE_4__common_services_in_app_browser_service__["a" /* InAppBrowserService */],
            __WEBPACK_IMPORTED_MODULE_6__common_services_open_hours_service__["a" /* OpenHoursService */],
            __WEBPACK_IMPORTED_MODULE_5__common_services_maps_service__["a" /* MapsService */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalogs_item__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__catalogs_service__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatalogsListPage = (function () {
    function CatalogsListPage(service, nav, businessService) {
        this.service = service;
        this.nav = nav;
        this.businessService = businessService;
    }
    CatalogsListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCatalogs(this.businessService.getCurrent().$key)
            .then(function (catalogs) { return _this.catalogs = catalogs; });
    };
    CatalogsListPage.prototype.itemTapped = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__catalogs_item__["a" /* CatalogsItemPage */], {
            item: item
        });
    };
    CatalogsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/catalogs/catalogs-list.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Catalogs</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<tiles *ngIf="!!catalogs"\n		[items]="catalogs"\n		(itemTapped)="itemTapped($event)"></tiles>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/catalogs/catalogs-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__catalogs_service__["a" /* CatalogsService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__["a" /* BusinessesService */]])
    ], CatalogsListPage);
    return CatalogsListPage;
}());

//# sourceMappingURL=catalogs-list.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogsItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_in_app_browser_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatalogsItemPage = (function () {
    function CatalogsItemPage(navParams, browser) {
        this.browser = browser;
        this.catalog = navParams.get('item');
    }
    CatalogsItemPage.prototype.open = function () {
        this.browser.open(this.catalog.url);
    };
    CatalogsItemPage.prototype.openPdf = function () {
        this.browser.open(this.catalog.pdf);
    };
    CatalogsItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/catalogs/catalogs-item.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>Catalog</ion-title>\n\n		<ion-buttons end>\n			<button ion-button icon-only (click)="openPdf()" *ngIf="catalog.pdf">\n				<ion-icon name=document></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div>\n		<ion-slides pager>\n			<ion-slide *ngFor="let picture of catalog.pictures">\n				<img src="{{picture}}"/>\n			</ion-slide>\n		</ion-slides>\n	</div>\n	<div padding>\n		<h2>{{catalog.title}}</h2>\n		<div text-right="">{{catalog.price}}</div>\n		<p>{{catalog.body}}</p>\n	</div>\n\n	<div padding-horizontal>\n		<button ion-button icon-left="" color="primary" block (click)="open()" *ngIf="catalog.url">\n			<ion-icon name="link"></ion-icon> View online\n		</button>\n\n		<button ion-button icon-left="" color="primary" block (click)="openPdf()" *ngIf="catalog.pdf">\n			<ion-icon name="document"></ion-icon> Download PDF\n		</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/catalogs/catalogs-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__common_services_in_app_browser_service__["a" /* InAppBrowserService */]])
    ], CatalogsItemPage);
    return CatalogsItemPage;
}());

//# sourceMappingURL=catalogs-item.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_provider__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogsService = (function () {
    function CatalogsService(dataProvider) {
        this.dataProvider = dataProvider;
    }
    CatalogsService.prototype.getCatalogs = function (businessId) {
        return this.dataProvider.getCatalogs(businessId);
    };
    CatalogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_provider__["a" /* DataProvider */]])
    ], CatalogsService);
    return CatalogsService;
}());

//# sourceMappingURL=catalogs.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_provider__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlideshowPage = (function () {
    function SlideshowPage(data, navCtrl) {
        var _this = this;
        this.data = data;
        this.navCtrl = navCtrl;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        this.data.getSlideshow().then(function (items) {
            _this.items = items;
        });
    }
    SlideshowPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    SlideshowPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    SlideshowPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SlideshowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/slideshow/slideshow.html"*/'<!-- <ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Slideshow</ion-title>\n	</ion-navbar>\n</ion-header> -->\n\n<ion-content>\n	<ion-slides pager>\n		<ion-slide *ngFor="let item of items">\n			<img src="{{item.picture}}"/>\n			<button ion-button clear icon-start (click)="goBack()" class="as-back-button">\n				<ion-icon name=\'arrow-back\'></ion-icon>\n				Home\n			</button>\n			<button ion-button clear class="as-item-description">{{item.description}}</button>\n		</ion-slide>\n	</ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/slideshow/slideshow.html"*/,
            selector: 'page-slideshow'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_provider__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SlideshowPage);
    return SlideshowPage;
}());

//# sourceMappingURL=slideshow.page.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_provider__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoPage = (function () {
    function InfoPage(data) {
        this.data = data;
        this.info = '';
    }
    InfoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.data.getInfo().then(function (info) {
            _this.info = info.$value;
        });
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/info/info.html"*/'<ion-header>\n	<ion-navbar color="primary">\n    <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Erfurt-App</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div padding [innerHtml]="info"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/info/info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_provider__["a" /* DataProvider */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__businesses_business_detail__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__businesses_businesses_filter__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavoritesPage = (function () {
    function FavoritesPage(modalCtrl, navCtrl, service, data) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.service = service;
        this.data = data;
        this.queryText = '';
        this.businesses = [];
        this.orderBy = 'name';
        this.categories = [];
        this.selectedCategory = null;
    }
    Object.defineProperty(FavoritesPage.prototype, "isFilterDirty", {
        get: function () {
            return !!this.selectedCategory;
        },
        enumerable: true,
        configurable: true
    });
    FavoritesPage.prototype.ionViewCanEnter = function () {
        return this.data.init();
    };
    FavoritesPage.prototype.ionViewDidLoad = function () {
        this.updateList();
    };
    FavoritesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        Promise.all([this.loadCategories()])
            .then(function () { return _this.updateList(); });
    };
    FavoritesPage.prototype.updateList = function () {
        var _this = this;
        this.service.fetchBusinesses(this.queryText, true, this.selectedCategory, this.orderBy)
            .then(function (businesses) {
            _this.businesses = businesses;
        });
    };
    FavoritesPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__businesses_businesses_filter__["a" /* BusinessesFilter */], {
            categories: this.categories,
            orderBy: this.orderBy,
            selectedCategory: this.selectedCategory
        });
        modal.present();
        modal.onWillDismiss(function (result) {
            if (result) {
                _this.selectedCategory = result.selectedCategory;
                _this.orderBy = result.orderBy;
                _this.updateList();
            }
        });
    };
    FavoritesPage.prototype.goToBusinessDetail = function (business) {
        this.service.setCurrent(business);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__businesses_business_detail__["a" /* BusinessDetailPage */]);
    };
    FavoritesPage.prototype.clearFilter = function () {
        this.selectedCategory = null;
        this.updateList();
    };
    FavoritesPage.prototype.selectCategory = function (category) {
        this.selectedCategory = category.$key;
        this.updateList();
    };
    FavoritesPage.prototype.loadCategories = function () {
        var _this = this;
        return this.service.getCategories().then(function (categories) {
            _this.categories = [{ $key: null, name: 'All' }].concat(categories);
        });
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/favorites/favorites.html"*/'<ion-header>\n	<ion-navbar no-border-bottom color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n\n		<ion-title>Erfurt-App</ion-title>\n\n		<ion-buttons end>\n			<button class="clear-filter" ion-button icon-only (click)="clearFilter()" [hidden]="!isFilterDirty">\n				<ion-icon name="close"></ion-icon>\n			</button>\n			<button ion-button icon-only (click)="presentFilter()">\n				<ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<!--\n	<ion-scroll scrollX="true" scrollY="false" zoom="true" class="horizontal-list">\n		<button ion-button class="filter-item" color="light"\n			*ngFor="let category of categories"\n			[ngClass]="{ \'active-filter\' : selectedCategory === category.$key }"\n			(click)="selectCategory(category)">\n			{{category.name}}\n		</button>\n	</ion-scroll>\n	-->\n\n	<ion-searchbar [(ngModel)]="queryText" (ionInput)="updateList()" placeholder="Search"></ion-searchbar>\n\n	<ion-list #scheduleList [hidden]="businesses.length === 0">\n		<ion-item *ngFor="let business of businesses" text-wrap (click)="goToBusinessDetail(business)">\n			<ion-thumbnail item-start>\n				<img [src]="business.logo">\n			</ion-thumbnail>\n			<h2>{{business.name}}</h2>\n			<!-- <h3><span *ngFor="let categoryName of business.categoryNames; let lastCategoryName = last;">{{categoryName}}<span *ngIf="!lastCategoryName">, </span></span></h3> -->\n			<p class="as-text-justify">{{business.description | truncate: 140}}</p>\n			<p class="distance">{{business.distance | distance}}</p>\n\n		</ion-item>\n	</ion-list>\n\n	<ion-list-header [hidden]="businesses.length > 0">\n		No businesses found\n	</ion-list-header>\n\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/favorites/favorites.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_businesses_service__["a" /* BusinessesService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_provider__["a" /* DataProvider */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__businesses_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapService = (function () {
    function MapService(data, businessService) {
        this.data = data;
        this.businessService = businessService;
    }
    MapService.prototype.getMapData = function () {
        var _this = this;
        return this.data.getMapCommon().then(function (mapCommon) {
            var data = {};
            data.origin = mapCommon.origin;
            data.zoom = parseInt(mapCommon.zoomLevel, 10);
            return _this.businessService.getBusinesses().then(function (businesses) {
                var pins = [];
                __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](businesses, function (business) {
                    if (business.mapdata && business.mapdata.annotations) {
                        __WEBPACK_IMPORTED_MODULE_1_lodash__["each"](business.mapdata.annotations, function (annotation) {
                            pins.push({
                                name: business.name + '. ' + annotation.title,
                                lat: annotation.latitude,
                                lng: annotation.longitude,
                                business: business
                            });
                        });
                    }
                });
                data.markers = pins;
                return data;
            });
        });
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_provider__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__businesses_service__["a" /* BusinessesService */]])
    ], MapService);
    return MapService;
}());

//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserData = (function () {
    function UserData(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    UserData.prototype.getName = function () {
        return this.user && (this.user.displayName || this.getUsername());
    };
    UserData.prototype.getUsername = function () {
        var email = this.getEmail() || '';
        var indexOfAt = email.indexOf('@');
        return indexOfAt > 0 ? email.substring(0, indexOfAt) : 'Anonymous';
    };
    UserData.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    Object.defineProperty(UserData.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "id", {
        get: function () {
            return this.authenticated ? this.user.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    UserData.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    UserData.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    UserData.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_first__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_toPromise__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_services_call_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_services_distance_service__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_services_email_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_services_in_app_browser_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_services_maps_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_services_open_hours_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__config__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home_module__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_info_info_module__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_businesses_businesses_module__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_catalogs_catalogs_module__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_drupal_drupal_module__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_favorites_favorites_module__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_map_map_module__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_news_news_module__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_products_products_module__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_slideshow_slideshow_module__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_reviews_reviews_module__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_services_services_module__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_wordpress_wordpress_module__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_pipes_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_data_provider__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_firebase_data_provider__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_http_data_provider__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_user_data__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_home_service__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_reviews_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__app_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__agm_core__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_push_one_signal_module__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_backendless_data_provider__ = __webpack_require__(558);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































function getDataProvider() {
    switch (__WEBPACK_IMPORTED_MODULE_20__config__["a" /* DATA_PROVIDER */]) {
        case 'HTTP':
            return __WEBPACK_IMPORTED_MODULE_37__providers_http_data_provider__["a" /* HttpDataProvider */];
        case 'FIREBASE':
            return __WEBPACK_IMPORTED_MODULE_36__providers_firebase_data_provider__["a" /* FirebaseDataProvider */];
        case 'BACKENDLESS':
            return __WEBPACK_IMPORTED_MODULE_45__providers_backendless_data_provider__["a" /* BackendlessDataProvider */];
        default:
            throw new Error('Unknown provider');
    }
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_42__app_component__["a" /* BusinessDirectoryApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_42__app_component__["a" /* BusinessDirectoryApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__config__["d" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_43__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: __WEBPACK_IMPORTED_MODULE_20__config__["e" /* mapApiKey */]
                }),
                __WEBPACK_IMPORTED_MODULE_31__pages_reviews_reviews_module__["a" /* SpeakersModule */],
                __WEBPACK_IMPORTED_MODULE_27__pages_map_map_module__["a" /* MapModule */],
                __WEBPACK_IMPORTED_MODULE_26__pages_favorites_favorites_module__["a" /* FavoritesModule */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_22__pages_info_info_module__["a" /* InfoModule */],
                __WEBPACK_IMPORTED_MODULE_23__pages_businesses_businesses_module__["a" /* BusinessesModule */],
                __WEBPACK_IMPORTED_MODULE_33__pages_wordpress_wordpress_module__["a" /* WordpressModule */],
                __WEBPACK_IMPORTED_MODULE_25__pages_drupal_drupal_module__["a" /* DrupalModule */],
                __WEBPACK_IMPORTED_MODULE_28__pages_news_news_module__["a" /* NewsModule */],
                __WEBPACK_IMPORTED_MODULE_29__pages_products_products_module__["a" /* ProductsModule */],
                __WEBPACK_IMPORTED_MODULE_32__pages_services_services_module__["a" /* ServicesModule */],
                __WEBPACK_IMPORTED_MODULE_30__pages_slideshow_slideshow_module__["a" /* SlideshowModule */],
                __WEBPACK_IMPORTED_MODULE_24__pages_catalogs_catalogs_module__["a" /* CatalogsModule */],
                __WEBPACK_IMPORTED_MODULE_44__pages_push_one_signal_module__["a" /* OneSignalModule */],
                __WEBPACK_IMPORTED_MODULE_34__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_42__app_component__["a" /* BusinessDirectoryApp */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_35__providers_data_provider__["a" /* DataProvider */], useClass: getDataProvider() },
                __WEBPACK_IMPORTED_MODULE_14__common_services_call_service__["a" /* CallService */],
                __WEBPACK_IMPORTED_MODULE_16__common_services_email_service__["a" /* EmailService */],
                __WEBPACK_IMPORTED_MODULE_17__common_services_in_app_browser_service__["a" /* InAppBrowserService */],
                __WEBPACK_IMPORTED_MODULE_18__common_services_maps_service__["a" /* MapsService */],
                __WEBPACK_IMPORTED_MODULE_38__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_39__services_home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_40__services_businesses_service__["a" /* BusinessesService */],
                __WEBPACK_IMPORTED_MODULE_41__services_reviews_service__["a" /* ReviewsService */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_15__common_services_distance_service__["a" /* DistanceService */],
                __WEBPACK_IMPORTED_MODULE_19__common_services_open_hours_service__["a" /* OpenHoursService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InAppBrowserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InAppBrowserService = (function () {
    function InAppBrowserService() {
    }
    InAppBrowserService.prototype.open = function (url) {
        window.open(url, '_system', 'location=yes');
        return false;
    };
    InAppBrowserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], InAppBrowserService);
    return InAppBrowserService;
}());

//# sourceMappingURL=in-app-browser.service.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LS; });
var LS = (function () {
    function LS() {
    }
    LS.getItem = function (key) {
        var json = localStorage.getItem(key);
        return json ? JSON.parse(json) : null;
    };
    LS.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    return LS;
}());

//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoModule = (function () {
    function InfoModule() {
    }
    InfoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */]]
        })
    ], InfoModule);
    return InfoModule;
}());

//# sourceMappingURL=info.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__business_detail__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__businesses__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__businesses_filter__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_us__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BusinessesModule = (function () {
    function BusinessesModule() {
    }
    BusinessesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__["a" /* Ionic2RatingModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__businesses__["a" /* BusinessesPage */], __WEBPACK_IMPORTED_MODULE_4__business_detail__["a" /* BusinessDetailPage */], __WEBPACK_IMPORTED_MODULE_7__contact_us__["a" /* ContactUsPage */], __WEBPACK_IMPORTED_MODULE_6__businesses_filter__["a" /* BusinessesFilter */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__businesses__["a" /* BusinessesPage */], __WEBPACK_IMPORTED_MODULE_4__business_detail__["a" /* BusinessDetailPage */], __WEBPACK_IMPORTED_MODULE_7__contact_us__["a" /* ContactUsPage */], __WEBPACK_IMPORTED_MODULE_6__businesses_filter__["a" /* BusinessesFilter */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__businesses__["a" /* BusinessesPage */]]
        })
    ], BusinessesModule);
    return BusinessesModule;
}());

//# sourceMappingURL=businesses.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrimHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrimHtmlPipe = (function () {
    function TrimHtmlPipe() {
    }
    TrimHtmlPipe.prototype.transform = function (value) {
        return this.htmlToPlainText(value);
    };
    TrimHtmlPipe.prototype.htmlToPlainText = function (html) {
        return String(html).replace(/<[^>]+>/gm, '');
    };
    TrimHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'trimHtml'
        })
    ], TrimHtmlPipe);
    return TrimHtmlPipe;
}());

//# sourceMappingURL=trim-html.pipe.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, length) {
        if (!value) {
            return value;
        }
        var limit = parseInt(length + '', 10);
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    };
    TruncatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());

//# sourceMappingURL=truncate.pipe.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeEmbedUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubeEmbedUrlPipe = (function () {
    function YoutubeEmbedUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    YoutubeEmbedUrlPipe.prototype.transform = function (value) {
        var url = 'http://www.youtube.com/embed/' + value;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    YoutubeEmbedUrlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'youtubeEmbedUrl'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], YoutubeEmbedUrlPipe);
    return YoutubeEmbedUrlPipe;
}());

//# sourceMappingURL=youtube-embed-url.pipe.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VimeoEmbedUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VimeoEmbedUrlPipe = (function () {
    function VimeoEmbedUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    VimeoEmbedUrlPipe.prototype.transform = function (value) {
        var url = 'http://player.vimeo.com/video/' + value;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    VimeoEmbedUrlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'vimeoEmbedUrl'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], VimeoEmbedUrlPipe);
    return VimeoEmbedUrlPipe;
}());

//# sourceMappingURL=vimeo-embed-url.pipe.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalDatePipe = (function () {
    function LocalDatePipe() {
    }
    LocalDatePipe.prototype.transform = function (value) {
        return new Date(value).toLocaleString();
    };
    LocalDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'localDate'
        })
    ], LocalDatePipe);
    return LocalDatePipe;
}());

//# sourceMappingURL=local-date.pipe.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistancePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_conversion_js__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_conversion_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_conversion_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DistancePipe = (function () {
    function DistancePipe() {
    }
    DistancePipe.prototype.transform = function (distance) {
        if (!distance) {
            return '...';
        }
        if (distance < 1000) {
            return distance + ' m';
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_conversion_js___default()(distance, 'meters', {
                precision: 2
            }).toKilometers() + ' km';
        }
    };
    DistancePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'distance'
        })
    ], DistancePipe);
    return DistancePipe;
}());

//# sourceMappingURL=distance.pipe.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe_1 = OrderByPipe;
    OrderByPipe._orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            // Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; // equal each other
    };
    OrderByPipe.prototype.transform = function (input, _a) {
        var _b = _a[0], config = _b === void 0 ? '+' : _b;
        if (!Array.isArray(input))
            return input;
        if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) === '-';
            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc_1 ? input.sort() : input.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return input.sort(function (a, b) {
                    var aValue = a[property_1] === undefined ? 0 : a[property_1];
                    var bValue = b[property_1] === undefined ? 0 : b[property_1];
                    return !desc_1
                        ? OrderByPipe_1._orderByComparator(aValue, bValue)
                        : -OrderByPipe_1._orderByComparator(aValue, bValue);
                });
            }
        }
        else {
            // Loop over property of the array in order and sort
            return input.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) === '-';
                    var property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
                        ? config[i].substr(1)
                        : config[i];
                    var aValue = a[property] === undefined ? 0 : a[property];
                    var bValue = b[property] === undefined ? 0 : b[property];
                    var comparison = !desc
                        ? OrderByPipe_1._orderByComparator(aValue, bValue)
                        : -OrderByPipe_1._orderByComparator(aValue, bValue);
                    // Don't return 0 yet in case of needing to sort by next property
                    if (comparison !== 0)
                        return comparison;
                }
                return 0; // equal each other
            });
        }
    };
    OrderByPipe = OrderByPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'orderBy', pure: false })
    ], OrderByPipe);
    return OrderByPipe;
    var OrderByPipe_1;
}());

//# sourceMappingURL=order-by.pipe.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_custom_components_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__catalogs_item__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__catalogs_list__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__catalogs_service__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CatalogsModule = (function () {
    function CatalogsModule() {
    }
    CatalogsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_custom_components_module__["a" /* CustomComponentsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__catalogs_item__["a" /* CatalogsItemPage */],
                __WEBPACK_IMPORTED_MODULE_5__catalogs_list__["a" /* CatalogsListPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__catalogs_item__["a" /* CatalogsItemPage */],
                __WEBPACK_IMPORTED_MODULE_5__catalogs_list__["a" /* CatalogsListPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__catalogs_service__["a" /* CatalogsService */]]
        })
    ], CatalogsModule);
    return CatalogsModule;
}());

//# sourceMappingURL=catalogs.module.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoItemsComponent = (function () {
    function NoItemsComponent() {
        this.create = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NoItemsComponent.prototype, "create", void 0);
    NoItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'no-items',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/components/no-items/no-items.component.html"*/'<ion-icon name="alert" style="font-size: 50px;"></ion-icon>\n<h1>No records found</h1>\n<button ion-button clear (click)="create.emit()">Create item</button>'/*ion-inline-end:"/Users/axel/erfurtapp/src/components/no-items/no-items.component.html"*/
        })
    ], NoItemsComponent);
    return NoItemsComponent;
}());

//# sourceMappingURL=no-items.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TilesComponent = (function () {
    function TilesComponent() {
        this.itemTapped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.columns = 2;
        this.itemGroups = [];
    }
    TilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var line = [];
        this.items.forEach(function (item) {
            line.push(item);
            if (line.length === _this.columns) {
                _this.itemGroups.push(line);
                line = [];
            }
        });
        if (line.length) {
            this.itemGroups.push(line);
        }
        console.log(this.itemGroups);
    };
    TilesComponent.prototype.itemClicked = function (item) {
        this.itemTapped.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], TilesComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TilesComponent.prototype, "footerField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TilesComponent.prototype, "itemTapped", void 0);
    TilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tiles',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/components/tiles/tiles.html"*/'<ion-row *ngFor="let group of itemGroups">\n	<ion-col col-6 *ngFor="let item of group">\n		<ion-card (click)="itemClicked(item)">\n			<ion-card-header>{{item.title}}</ion-card-header>\n			<img src="{{item.thumb}}">\n			<ion-item>\n				<span *ngIf="footerField">{{item[footerField]}}</span>\n				<h2 *ngIf="!footerField">Read more</h2>\n			</ion-item>\n		</ion-card>\n	</ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/components/tiles/tiles.html"*/
        })
    ], TilesComponent);
    return TilesComponent;
}());

//# sourceMappingURL=tiles.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrupalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drupal_item__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drupal_list__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drupal_service__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DrupalModule = (function () {
    function DrupalModule() {
    }
    DrupalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__drupal_item__["a" /* DrupalItemPage */],
                __WEBPACK_IMPORTED_MODULE_4__drupal_list__["a" /* DrupalListPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__drupal_item__["a" /* DrupalItemPage */],
                __WEBPACK_IMPORTED_MODULE_4__drupal_list__["a" /* DrupalListPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__drupal_service__["a" /* DrupalService */]]
        })
    ], DrupalModule);
    return DrupalModule;
}());

//# sourceMappingURL=drupal.module.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorites__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FavoritesModule = (function () {
    function FavoritesModule() {
    }
    FavoritesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__["a" /* Ionic2RatingModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__favorites__["a" /* FavoritesPage */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__favorites__["a" /* FavoritesPage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__favorites__["a" /* FavoritesPage */]]
        })
    ], FavoritesModule);
    return FavoritesModule;
}());

//# sourceMappingURL=favorites.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_map_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_snazzy_info_window__ = __webpack_require__(543);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MapModule = (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_0__agm_core__["a" /* AgmCoreModule */], __WEBPACK_IMPORTED_MODULE_5__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__map__["a" /* MapPage */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__map__["a" /* MapPage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__map__["a" /* MapPage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_map_service__["a" /* MapService */]]
        })
    ], MapModule);
    return MapModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_map_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__businesses_business_detail__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = (function () {
    function MapPage(service, businessService, navCtrl) {
        this.service = service;
        this.businessService = businessService;
        this.navCtrl = navCtrl;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.service.getMapData().then(function (map) {
            console.log(map);
            _this.map = map;
        });
    };
    MapPage.prototype.showBusinessDetails = function (business) {
        this.businessService.setCurrent(business);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__businesses_business_detail__["a" /* BusinessDetailPage */]);
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/map/map.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Map</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<agm-map [latitude]="map.origin.latitude" [longitude]="map.origin.longitude" [zoom]="map.zoom" *ngIf="map">\n	<agm-marker *ngFor="let marker of map.markers" [latitude]="marker.lat" [longitude]="marker.lng">\n\n		<agm-snazzy-info-window [maxWidth]="200" [closeWhenOthersOpen]="true">\n			<ng-template>\n				{{marker.name}}<br><a (click)="showBusinessDetails(marker.business)">Details</a>\n			</ng-template>\n		</agm-snazzy-info-window>\n	</agm-marker>\n</agm-map>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_2__services_businesses_service__["a" /* BusinessesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_item__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_list__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_service__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NewsModule = (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__news_list__["a" /* NewsListPage */],
                __WEBPACK_IMPORTED_MODULE_2__news_item__["a" /* NewsItemPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__news_list__["a" /* NewsListPage */],
                __WEBPACK_IMPORTED_MODULE_2__news_item__["a" /* NewsItemPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__news_service__["a" /* NewsService */]]
        })
    ], NewsModule);
    return NewsModule;
}());

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_custom_components_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_item__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_list__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_service__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProductsModule = (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_custom_components_module__["a" /* CustomComponentsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__products_item__["a" /* ProductsItemPage */],
                __WEBPACK_IMPORTED_MODULE_5__products_list__["a" /* ProductsListPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__products_item__["a" /* ProductsItemPage */],
                __WEBPACK_IMPORTED_MODULE_5__products_list__["a" /* ProductsListPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__products_service__["a" /* ProductsService */]]
        })
    ], ProductsModule);
    return ProductsModule;
}());

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slideshow_page__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideshowModule = (function () {
    function SlideshowModule() {
    }
    SlideshowModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__slideshow_page__["a" /* SlideshowPage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__slideshow_page__["a" /* SlideshowPage */]]
        })
    ], SlideshowModule);
    return SlideshowModule;
}());

//# sourceMappingURL=slideshow.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_review__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reviews__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SpeakersModule = (function () {
    function SpeakersModule() {
    }
    SpeakersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__["a" /* Ionic2RatingModule */], __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* PipesModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__reviews__["a" /* ReviewsPage */], __WEBPACK_IMPORTED_MODULE_3__add_review__["a" /* AddReviewPage */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__reviews__["a" /* ReviewsPage */], __WEBPACK_IMPORTED_MODULE_3__add_review__["a" /* AddReviewPage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__reviews__["a" /* ReviewsPage */]]
        })
    ], SpeakersModule);
    return SpeakersModule;
}());

//# sourceMappingURL=reviews.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_custom_components_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_list__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ServicesModule = (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_custom_components_module__["a" /* CustomComponentsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__services_item__["a" /* ServicesItemPage */],
                __WEBPACK_IMPORTED_MODULE_5__services_list__["a" /* ServicesListPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__services_item__["a" /* ServicesItemPage */],
                __WEBPACK_IMPORTED_MODULE_5__services_list__["a" /* ServicesListPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_service__["a" /* ServicesService */]]
        })
    ], ServicesModule);
    return ServicesModule;
}());

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_item__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordpress_list__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wordpress_service__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WordpressModule = (function () {
    function WordpressModule() {
    }
    WordpressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__wordpress_item__["a" /* WordpressItemPage */],
                __WEBPACK_IMPORTED_MODULE_4__wordpress_list__["a" /* WordpressListPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__wordpress_item__["a" /* WordpressItemPage */],
                __WEBPACK_IMPORTED_MODULE_4__wordpress_list__["a" /* WordpressListPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__wordpress_service__["a" /* WordpressService */]]
        })
    ], WordpressModule);
    return WordpressModule;
}());

//# sourceMappingURL=wordpress.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_provider__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseDataProvider = (function (_super) {
    __extends(FirebaseDataProvider, _super);
    function FirebaseDataProvider(db) {
        var _this = _super.call(this) || this;
        _this.db = db;
        return _this;
    }
    FirebaseDataProvider.prototype.getBusinesses = function () {
        return this.db.list('businesses').first().toPromise();
    };
    FirebaseDataProvider.prototype.getBusiness = function (businessId) {
        return this.db.object("businesses/" + businessId).first().toPromise();
    };
    FirebaseDataProvider.prototype.getCategories = function () {
        return this.db.object('categories').first().toPromise()
            .then(function (categories) {
            Object.keys(categories).forEach(function (key) {
                categories[key].$key = key;
            });
            return categories;
        });
    };
    FirebaseDataProvider.prototype.getReviews = function (businessId) {
        return this.db
            .list('reviews', {
            query: {
                orderByChild: 'business',
                equalTo: businessId
            }
        })
            .first().toPromise();
    };
    FirebaseDataProvider.prototype.addReview = function (businessId, review) {
        var _this = this;
        this.db.list('reviews').push(review);
        return this.db.object("businesses/" + businessId)
            .first().toPromise()
            .then(function (business) {
            return _this.db.object("businesses/" + businessId)
                .update({
                rating: _this.calcRating(business.rating, review.rate)
            });
        });
    };
    FirebaseDataProvider.prototype.getPosts = function (businessId) {
        return this.db
            .list('news', {
            query: {
                orderByChild: 'business',
                equalTo: businessId
            }
        })
            .first().toPromise();
    };
    FirebaseDataProvider.prototype.getProducts = function (businessId) {
        return this.db
            .list('products', {
            query: {
                orderByChild: 'business',
                equalTo: businessId
            }
        })
            .first().toPromise();
    };
    FirebaseDataProvider.prototype.getServices = function (businessId) {
        return this.db
            .list('services', {
            query: {
                orderByChild: 'business',
                equalTo: businessId
            }
        })
            .first().toPromise();
    };
    FirebaseDataProvider.prototype.getCatalogs = function (businessId) {
        return this.db
            .list('catalogs', {
            query: {
                orderByChild: 'business',
                equalTo: businessId
            }
        })
            .first().toPromise();
    };
    FirebaseDataProvider.prototype.getMapCommon = function () {
        return this.db.object("common/map")
            .first().toPromise();
    };
    FirebaseDataProvider.prototype.getSlideshow = function () {
        return this.db.object("slideshow")
            .first().toPromise();
    };
    FirebaseDataProvider.prototype.getInfo = function () {
        return this.db.object("info")
            .first().toPromise();
    };
    FirebaseDataProvider.prototype.init = function () {
        return Promise.resolve(true);
    };
    FirebaseDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseDataProvider);
    return FirebaseDataProvider;
}(__WEBPACK_IMPORTED_MODULE_2__data_provider__["a" /* DataProvider */]));

//# sourceMappingURL=firebase.data-provider.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_provider__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var reviews = [{
        author: 'John Snow',
        comment: 'Good business',
        rate: 4,
        date: 1
    }, {
        author: 'Tyrion Lanniste',
        comment: 'Not bad',
        rate: 2,
        date: 2
    }, {
        author: 'Daenerys Targaryen',
        comment: 'Wonderful',
        date: 3
    }];
var HttpDataProvider = (function (_super) {
    __extends(HttpDataProvider, _super);
    function HttpDataProvider(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    HttpDataProvider.prototype.getMapCommon = function () {
        return Promise.resolve(this.cache.common.map);
    };
    // Empty function
    HttpDataProvider.prototype.getSlideshow = function () {
        return Promise.resolve(null);
    };
    // Empty function
    HttpDataProvider.prototype.getInfo = function () {
        return Promise.resolve(null);
    };
    HttpDataProvider.prototype.getProducts = function (businessId) {
        var _this = this;
        var products = Object.keys(this.cache.products)
            .map(function (key) { return _this.cache.products[key]; })
            .filter(function (product) { return product.business === businessId; });
        return Promise.resolve(products);
    };
    HttpDataProvider.prototype.getCatalogs = function (businessId) {
        var _this = this;
        var catalogs = Object.keys(this.cache.catalogs)
            .map(function (key) { return _this.cache.catalogs[key]; })
            .filter(function (catalog) { return catalog.business === businessId; });
        return Promise.resolve(catalogs);
    };
    HttpDataProvider.prototype.getServices = function (businessId) {
        var _this = this;
        var services = Object.keys(this.cache.services)
            .map(function (key) { return _this.cache.services[key]; })
            .filter(function (service) { return service.business === businessId; });
        return Promise.resolve(services);
    };
    HttpDataProvider.prototype.getPosts = function (businessId) {
        var _this = this;
        var posts = Object.keys(this.cache.news)
            .map(function (key) { return _this.cache.news[key]; })
            .filter(function (post) { return post.business === businessId; });
        return Promise.resolve(posts);
    };
    HttpDataProvider.prototype.addReview = function (businessId, review) {
        reviews.push(review);
        var business = this.cache.businesses[businessId];
        business.rating = this.calcRating(business.rating, review.rate);
        return Promise.resolve();
    };
    HttpDataProvider.prototype.getReviews = function (businessId) {
        console.log(businessId);
        return Promise.resolve(reviews);
    };
    HttpDataProvider.prototype.getBusinesses = function () {
        return Promise.resolve(this.cache.businesses);
    };
    // Empty function
    HttpDataProvider.prototype.getBusiness = function (businessId) {
        console.log(businessId);
        return Promise.resolve(null);
    };
    HttpDataProvider.prototype.getCategories = function () {
        return Promise.resolve(this.cache.categories);
    };
    HttpDataProvider.prototype.init = function () {
        var _this = this;
        if (this.cache) {
            return Promise.resolve(true);
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config__["b" /* apiUrl */])
            .map(function (x) { return x.json(); })
            .toPromise()
            .then(function (response) {
            _this.cache = response;
            _this.setInternalIds(['businesses', 'categories', 'news', 'products', 'catalogs', 'services']);
            return true;
        });
    };
    HttpDataProvider.prototype.setInternalIds = function (collections) {
        var _this = this;
        collections.forEach(function (collectionKey) {
            var collection = _this.cache[collectionKey];
            Object.keys(collection).forEach(function (id) { return collection[id].$key = id; });
        });
    };
    HttpDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HttpDataProvider);
    return HttpDataProvider;
}(__WEBPACK_IMPORTED_MODULE_3__data_provider__["a" /* DataProvider */]));

//# sourceMappingURL=http.data-provider.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessDirectoryApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_info_info__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_businesses_businesses__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favorites_favorites__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_services_in_app_browser_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BusinessDirectoryApp = (function () {
    function BusinessDirectoryApp(events, userData, menu, platform, splashScreen, inBrowser) {
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.inBrowser = inBrowser;
        this.homePage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        this.infoPage = __WEBPACK_IMPORTED_MODULE_4__pages_info_info__["a" /* InfoPage */];
        this.businessesPage = __WEBPACK_IMPORTED_MODULE_5__pages_businesses_businesses__["a" /* BusinessesPage */];
        this.favoritesPage = __WEBPACK_IMPORTED_MODULE_7__pages_favorites_favorites__["a" /* FavoritesPage */];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        // decide which menu items should be hidden by current login status stored in local storage
        this.enableMenu(this.userData.authenticated);
    }
    BusinessDirectoryApp.prototype.openUrl = function (url) {
        this.inBrowser.open(url);
    };
    BusinessDirectoryApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
            // Set the root of the nav with params if it's a tab index
        }
        else {
            this.nav.setRoot(page.component, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.signOut();
            this.events.publish('user:logout');
        }
    };
    BusinessDirectoryApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    BusinessDirectoryApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    BusinessDirectoryApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */])
    ], BusinessDirectoryApp.prototype, "nav", void 0);
    BusinessDirectoryApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/axel/erfurtapp/src/app/app.template.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="homePage" tabIcon="home"></ion-tab>\n  <ion-tab [root]="infoPage" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="businessesPage" tabIcon="search"></ion-tab>\n  <ion-tab [root]="favoritesPage" tabIcon="ios-star-outline"></ion-tab>\n  <ion-tab tabIcon="logo-facebook" (ionSelect)="openUrl(\'https://www.facebook.com/ErfurtApp/\')"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__common_services_in_app_browser_service__["a" /* InAppBrowserService */]])
    ], BusinessDirectoryApp);
    return BusinessDirectoryApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneSignalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__one_signal_listener_service__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OneSignalModule = (function () {
    function OneSignalModule() {
    }
    OneSignalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__one_signal_listener_service__["a" /* OneSignalListenerService */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */]
            ]
        })
    ], OneSignalModule);
    return OneSignalModule;
}());

//# sourceMappingURL=one-signal.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneSignalListenerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_is_cordova_available__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OneSignalListenerService = (function () {
    function OneSignalListenerService(oneSignal) {
        var _this = this;
        this.oneSignal = oneSignal;
        if (Object(__WEBPACK_IMPORTED_MODULE_2__common_services_is_cordova_available__["a" /* isCordovaAvailable */])()) {
            this.oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_3__config__["f" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_3__config__["g" /* sender_id */]);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(function (data) { return _this.onPushReceived(data.payload); });
            this.oneSignal.handleNotificationOpened().subscribe(function (data) { return _this.onPushOpened(data.notification.payload); });
            this.oneSignal.endInit();
        }
    }
    OneSignalListenerService.prototype.onPushReceived = function (payload) {
        alert('Push recevied:' + payload.body);
    };
    OneSignalListenerService.prototype.onPushOpened = function (payload) {
        alert('Push opened: ' + payload.body);
    };
    OneSignalListenerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */]])
    ], OneSignalListenerService);
    return OneSignalListenerService;
}());

//# sourceMappingURL=one-signal-listener.service.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCordovaAvailable; });
var isCordovaAvailable = function () {
    if (!window.cordova) {
        alert('This is a native feature. Please use a device');
        return false;
    }
    return true;
};
//# sourceMappingURL=is-cordova-available.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendlessDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backendless__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_backendless___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_backendless__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_provider__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var BackendlessDataProvider = (function (_super) {
    __extends(BackendlessDataProvider, _super);
    function BackendlessDataProvider() {
        var _this = _super.call(this) || this;
        __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.serverURL = 'https://api.backendless.com';
        __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.initApp(__WEBPACK_IMPORTED_MODULE_2__config__["c" /* backendlessConfig */].appId, __WEBPACK_IMPORTED_MODULE_2__config__["c" /* backendlessConfig */].appKey);
        return _this;
    }
    BackendlessDataProvider.prototype.getBusinesses = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('Business').find()
            .then(function (items) {
            items.forEach(function (item) { return _this.adoptBusiness(item); });
            return items;
        });
    };
    // Empty function
    BackendlessDataProvider.prototype.getBusiness = function (businessId) {
        console.log(businessId);
        return Promise.resolve(null);
    };
    BackendlessDataProvider.prototype.getCategories = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('Category').find()
            .then(function (categories) {
            return categories.reduce(function (acc, currentValue) {
                _this.adoptId(currentValue);
                acc[currentValue.objectId] = currentValue;
                return acc;
            }, {});
        });
    };
    BackendlessDataProvider.prototype.getReviews = function (businessId) {
        var queryBuilder = __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.DataQueryBuilder.create();
        var whereClause = 'business.objectId = \'' + businessId + '\'';
        queryBuilder.setWhereClause(whereClause);
        return __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('Review').find(queryBuilder)
            .then(function (reviews) {
            reviews.forEach(function (review) {
                review.date = review.postDate;
            });
            return reviews;
        });
    };
    BackendlessDataProvider.prototype.addReview = function (businessId, review) {
        var _this = this;
        var newReview = {
            postDate: new Date().getTime(),
            comment: review.comment,
            rate: review.rate,
            author: review.author
        };
        return __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('Review').save(newReview)
            .then(function (response) {
            var parentObject = { objectId: response.objectId };
            var childObject = { objectId: review.business };
            var children = [childObject];
            if (review.rate) {
                _this._getBusiness(businessId).then(function (business) {
                    var rating = _this.calcRating(business.rating, review.rate);
                    return _this.saveBusiness(review.business, {
                        rating: rating.value,
                        reviews: rating.reviews
                    });
                });
            }
            return __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('Review').setRelation(parentObject, 'business', children);
        });
    };
    BackendlessDataProvider.prototype.getPosts = function (businessId) {
        var _this = this;
        var queryBuilder = __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.DataQueryBuilder.create();
        var whereClause = 'business.objectId = \'' + businessId + '\'';
        queryBuilder.setWhereClause(whereClause);
        return __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('Article').find(queryBuilder)
            .then(function (items) {
            items.forEach(function (item) { return _this.adoptItem(item); });
            return items;
        });
    };
    BackendlessDataProvider.prototype.getProducts = function (businessId) {
        var _this = this;
        var queryBuilder = __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.DataQueryBuilder.create();
        var whereClause = 'business.objectId = \'' + businessId + '\'';
        queryBuilder.setWhereClause(whereClause);
        return __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('Product').find(queryBuilder)
            .then(function (items) {
            items.forEach(function (item) { return _this.adoptItem(item); });
            return items;
        });
    };
    BackendlessDataProvider.prototype.getServices = function (businessId) {
        var _this = this;
        var queryBuilder = __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.DataQueryBuilder.create();
        var whereClause = 'business.objectId = \'' + businessId + '\'';
        queryBuilder.setWhereClause(whereClause);
        return __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('Service').find(queryBuilder)
            .then(function (items) {
            items.forEach(function (item) { return _this.adoptItem(item); });
            return items;
        });
    };
    BackendlessDataProvider.prototype.getCatalogs = function (businessId) {
        var _this = this;
        var queryBuilder = __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.DataQueryBuilder.create();
        var whereClause = 'business.objectId = \'' + businessId + '\'';
        queryBuilder.setWhereClause(whereClause);
        return __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('CatalogItem').find(queryBuilder)
            .then(function (items) {
            items.forEach(function (item) { return _this.adoptItem(item); });
            return items;
        });
    };
    BackendlessDataProvider.prototype.getMapCommon = function () {
        return __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('Map').findFirst();
    };
    // Empty function
    BackendlessDataProvider.prototype.getSlideshow = function () {
        return Promise.resolve(null);
    };
    // Empty function
    BackendlessDataProvider.prototype.getInfo = function () {
        return Promise.resolve(null);
    };
    BackendlessDataProvider.prototype.init = function () {
        return Promise.resolve(true);
    };
    BackendlessDataProvider.prototype.saveBusiness = function (id, changeSet) {
        changeSet.objectId = id;
        return __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('Business').save(changeSet);
    };
    BackendlessDataProvider.prototype._getBusiness = function (businessId) {
        var _this = this;
        var businesses$ = __WEBPACK_IMPORTED_MODULE_1_backendless___default.a.Data.of('Business');
        return businesses$.findById({ objectId: businessId })
            .then(function (item) {
            _this.adoptBusiness(item);
            return item;
        });
    };
    BackendlessDataProvider.prototype.adoptBusiness = function (business) {
        business.logo = business.logo.url;
        business.officeLocation = business.officeLocation.latitude + ',' + business.officeLocation.longitude;
        business.category = business.category.objectId;
        business.pictures = business.pictures.map(function (x) { return x.url; });
        business.rating = {
            value: business.rating || 0,
            reviews: business.reviews || 0
        };
        business.mapAnnotations.forEach(function (annotation) {
            annotation.title = annotation.metadata.title;
        });
        business.mapdata = {
            annotations: business.mapAnnotations
        };
        business.openHours.forEach(function (day) {
            day.day = dayNames.indexOf(day.day);
        });
        business.openhours = {
            days: business.openHours
        };
        this.adoptId(business);
    };
    BackendlessDataProvider.prototype.adoptItem = function (item) {
        item.thumb = item.thumb.url;
        item.pictures = item.pictures.map(function (x) { return x.url; });
        item.picture = item.pictures[0];
        this.adoptId(item);
    };
    BackendlessDataProvider.prototype.adoptId = function (item) {
        item.$key = item.objectId;
    };
    BackendlessDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BackendlessDataProvider);
    return BackendlessDataProvider;
}(__WEBPACK_IMPORTED_MODULE_3__data_provider__["a" /* DataProvider */]));

//# sourceMappingURL=backendless.data-provider.js.map

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_maps_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_open_hours_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_businesses_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drupal_drupal_list__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_news_list__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products_list__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reviews_reviews__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_services_list__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wordpress_wordpress_list__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_us__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__catalogs_catalogs_list__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_services_in_app_browser_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_services_call_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_services_email_service__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var BusinessDetailPage = (function () {
    function BusinessDetailPage(service, navCtrl, openHoursService, mapsService, inBrowser, callService, emailService) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.mapsService = mapsService;
        this.inBrowser = inBrowser;
        this.callService = callService;
        this.emailService = emailService;
        this.tiles = [
            [
                { title: 'News', icon: 'at', component: __WEBPACK_IMPORTED_MODULE_6__news_news_list__["a" /* NewsListPage */] },
                { title: 'Products', icon: 'cart', component: __WEBPACK_IMPORTED_MODULE_7__products_products_list__["a" /* ProductsListPage */] }
            ],
            [
                { title: 'Services', icon: 'cog', component: __WEBPACK_IMPORTED_MODULE_9__services_services_list__["a" /* ServicesListPage */] },
                { title: 'Catalogs', icon: 'book', component: __WEBPACK_IMPORTED_MODULE_12__catalogs_catalogs_list__["a" /* CatalogsListPage */] }
            ]
        ];
        this.business = service.getCurrent();
        this.isOpen = this.business.openhours && openHoursService.isBusinessOpen(this.business.openhours);
    }
    BusinessDetailPage.prototype.getDirections = function (officeLocation) {
        this.mapsService.openMapsApp(officeLocation, this.business.name);
    };
    BusinessDetailPage.prototype.goToContactUs = function (business) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__contact_us__["a" /* ContactUsPage */], { business: business });
    };
    BusinessDetailPage.prototype.goToReviews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__reviews_reviews__["a" /* ReviewsPage */]);
    };
    BusinessDetailPage.prototype.openUrl = function (url) {
        this.inBrowser.open(url);
    };
    BusinessDetailPage.prototype.call = function (phone) {
        this.callService.call(phone);
    };
    BusinessDetailPage.prototype.sendEmail = function (email) {
        this.emailService.sendEmail(email);
    };
    BusinessDetailPage.prototype.navigateToWordpress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__wordpress_wordpress_list__["a" /* WordpressListPage */]);
    };
    BusinessDetailPage.prototype.navigateToDrupal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__drupal_drupal_list__["a" /* DrupalListPage */]);
    };
    BusinessDetailPage.prototype.navigateTo = function (tile) {
        this.navCtrl.push(tile.component);
    };
    BusinessDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-business-detail',template:/*ion-inline-start:"/Users/axel/erfurtapp/src/pages/businesses/business-detail.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>Erfurt-App</ion-title>\n\n		<ion-buttons end>\n			<button ion-button icon-only (click)="service.toggleFavorites(business.$key)">\n				<ion-icon name="star-outline" *ngIf="!service.isInFavorites(business.$key)"></ion-icon>\n				<ion-icon name="star" *ngIf="service.isInFavorites(business.$key)"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-slides style="height: 200px;">\n		<ion-slide *ngFor="let picture of business.pictures">\n			<img [src]="picture" alt="business.name">\n			<div class="business-info">\n				<h1>{{business.name}}</h1>\n				<rating [ngModel]="business.rating?.value" readOnly="true" nullable="true"></rating>\n				<!-- <p>{{business.categoryName}}</p> -->\n			</div>\n		</ion-slide>\n	</ion-slides>\n\n	<div padding-horizontal>\n		<p [innerHtml]="business.description" class="as-text-justify"></p>\n		<p *ngIf="business.discount" class="as-discount as-text-justify">{{business.discount}}</p>\n	</div>\n\n	<ion-list padding-top text-wrap class="actions">\n		<button ion-item (click)="goToContactUs(business)">\n			<ion-icon name="time" item-start></ion-icon>\n			Wir haben {{ isOpen ? \'geöffnet\' : \'geschlossen\' }}\n		</button>\n\n		<button ion-item (click)="getDirections(business.officeLocation)">\n			<ion-icon name="navigate" item-start></ion-icon>\n			Sie sind {{business.distance | distance}} entfernt. <br>Navigation starten\n		</button>\n\n		<button ion-item (click)="goToReviews(business)">\n			<ion-icon name="chatbubbles" item-start></ion-icon>\n			Bewertungen lesen / Bewertung hinzufügen\n		</button>\n\n		<button ion-item (click)="service.toggleFavorites(business.$key)" *ngIf="!service.isInFavorites(business.$key)" detail-none>\n			<ion-icon name="star-outline" item-start></ion-icon>\n			Zu Favoriten hinzufügen\n		</button>\n\n		<button ion-item (click)="service.toggleFavorites(business.$key)" *ngIf="service.isInFavorites(business.$key)" detail-none>\n			<ion-icon name="star" item-start></ion-icon>\n			Von Favoriten entfernen\n		</button>\n\n		<button ion-item *ngIf="business.facebookPage" (click)="openUrl(business.facebookPage)">\n			<ion-icon name="logo-facebook" item-start></ion-icon>\n			Facebook\n		</button>\n\n		<button ion-item *ngIf="business.homePage" (click)="openUrl(business.homePage)">\n			<ion-icon name="home" item-start></ion-icon>\n			Homepage\n		</button>\n\n		<button ion-item *ngIf="business.phoneNumber" (click)="call(business.phoneNumber)">\n			<ion-icon name="call" item-start></ion-icon>\n			anrufen\n		</button>\n\n		<button ion-item *ngIf="business.email" (click)="sendEmail(business.email)">\n			<ion-icon name="mail" item-start></ion-icon>\n			Email senden\n		</button>\n\n	</ion-list>\n\n<!--\n	<ion-row class="tiles" *ngFor="let tilePair of tiles">\n		<ion-col *ngFor="let tile of tilePair">\n			<ion-card class="tile" (click)="navigateTo(tile)">\n				<ion-card-content>\n					<ion-item>\n						<h1>\n							<ion-icon [name]="tile.icon"></ion-icon>\n						</h1>\n						<h2>{{tile.title}}</h2>\n					</ion-item>\n				</ion-card-content>\n			</ion-card>\n		</ion-col>\n	</ion-row>\n\n	<ion-list>\n		<button ion-item (click)="navigateToWordpress()">\n			<ion-icon name="logo-wordpress" item-start></ion-icon>\n			Wordpress\n		</button>\n\n		<button ion-item (click)="navigateToDrupal()">\n			<ion-icon name="help-buoy" item-start></ion-icon>\n			Drupal\n		</button>\n\n	</ion-list>\n-->\n</ion-content>\n'/*ion-inline-end:"/Users/axel/erfurtapp/src/pages/businesses/business-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_businesses_service__["a" /* BusinessesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__common_services_open_hours_service__["a" /* OpenHoursService */],
            __WEBPACK_IMPORTED_MODULE_2__common_services_maps_service__["a" /* MapsService */],
            __WEBPACK_IMPORTED_MODULE_13__common_services_in_app_browser_service__["a" /* InAppBrowserService */],
            __WEBPACK_IMPORTED_MODULE_14__common_services_call_service__["a" /* CallService */],
            __WEBPACK_IMPORTED_MODULE_15__common_services_email_service__["a" /* EmailService */]])
    ], BusinessDetailPage);
    return BusinessDetailPage;
}());

//# sourceMappingURL=business-detail.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mapApiKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return backendlessConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return sender_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return oneSignalAppId; });
var apiUrl = 'assets/data/data.json';
// export const apiUrl = 'http://appseed.io.s3.amazonaws.com/mobile-apps/conference/data.json';
var mapApiKey = 'AIzaSyAICFcc8EqgpMaytQEuPkcYAFaCFQXNfRo';
var firebaseConfig = {
    apiKey: 'AIzaSyAhVT28iyGqz8Th81tqL5Yf985OcvP937g',
    authDomain: 'erfurtapp.firebaseapp.com',
    databaseURL: 'https://erfurtapp.firebaseio.com',
    projectId: 'erfurtapp',
    storageBucket: 'erfurtapp.appspot.com',
    messagingSenderId: '519061033035'
};
var backendlessConfig = {
    appId: '23A8662E-FEFD-1784-FF25-94058263E100',
    appKey: '77C08DC8-2C95-D7E5-FF8D-0B0DF1D92700'
};
var DATA_PROVIDER = 'FIREBASE';
var sender_id = '211377410430';
var oneSignalAppId = '8046df2e-979e-4333-aeae-95a81bbc950e';
//# sourceMappingURL=config.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map