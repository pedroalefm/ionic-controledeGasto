webpackJsonp([0],{

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = (function () {
    function PerfilPageModule() {
    }
    return PerfilPageModule;
}());
PerfilPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
        ],
    })
], PerfilPageModule);

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opcoespage_opcoespage__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, afAuth, database, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.database = database;
        this.app = app;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.usuario = database.object("users/" + data.uid).valueChanges();
            }
        });
    }
    PerfilPage.prototype.opcao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__opcoespage_opcoespage__["a" /* OpcoespagePage */]);
    };
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-perfil',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/perfil/perfil.html"*/'\n\n<ion-header>\n\n  <ion-navbar color = "navBar">\n    \n    <ion-title>Perfil</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only type="Submit" (click) = "opcao()" >\n          <ion-icon name="ios-more"></ion-icon>\n        </button>\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n    <ion-item>\n    <img src="{{(usuario | async)?.img}}"  style="display:block;width:50%;height:30%;margin-left:auto;margin-right:auto;">\n  </ion-item>\n    \n  <ion-item>\n      <div class= "center">\n    <ion-badge color="primary">{{(usuario | async)?.login}}</ion-badge>\n  </div><br>\n  \n      <ion-icon name="ios-contact"> {{(usuario | async)?.nome}}</ion-icon>\n  <br><br>\n    <ion-icon name="ios-mail"> {{(usuario | async)?.email}}</ion-icon>\n  </ion-item>\n\n  \n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/perfil/perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ })

});
//# sourceMappingURL=0.js.map