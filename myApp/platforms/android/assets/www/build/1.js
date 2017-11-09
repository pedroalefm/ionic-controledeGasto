webpackJsonp([1],{

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarteiraPageModule", function() { return CarteiraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carteira__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarteiraPageModule = (function () {
    function CarteiraPageModule() {
    }
    return CarteiraPageModule;
}());
CarteiraPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carteira__["a" /* CarteiraPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carteira__["a" /* CarteiraPage */]),
        ],
    })
], CarteiraPageModule);

//# sourceMappingURL=carteira.module.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarteiraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuario_user_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lista_saldo_lista_saldo__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CarteiraPage = (function () {
    function CarteiraPage(navCtrl, navParams, afAuth, database, toast, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toast = toast;
        this.user = user;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.email = data.email;
                //this.usuario = database.list ('users', ref => ref.orderByChild('email').equalTo(this.email) ).valueChanges();  
                _this.usuario = database.object('users/' + data.uid).valueChanges();
            }
        });
    }
    CarteiraPage.prototype.exibirListaSaldo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__lista_saldo_lista_saldo__["a" /* ListaSaldoPage */]);
    };
    CarteiraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarteiraPage');
    };
    return CarteiraPage;
}());
CarteiraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-carteira',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/carteira/carteira.html"*/'\n<ion-header>\n    <ion-navbar color="navBar">\n     \n      <ion-title>\n        Carteira\n      </ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only type="Submit" (click) = "exibirListaSaldo()" >\n            <ion-icon name="list"></ion-icon>\n          </button>\n        </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding id="page1"></ion-content>\n\n\n<ion-content padding>\n<br><br><br>\n    <br><br>\n\n    <ion-card>\n        <img src="assets/img/carteiraIcon.png" style="display:block;width:50%;height:30%;margin-left:auto;margin-right:auto;">\n      \n      <ion-card-content>\n      <div class= "center"  >\n      \n          <h1>Dinheiro disponível</h1><br>\n           <ion-badge name="saldo" color="secondary" item><h1>R$: {{(usuario | async)?.somatorioSaldo - (usuario | async)?.somatorio }}</h1></ion-badge>          \n\n      </div>\n    </ion-card-content>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/carteira/carteira.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_usuario_user_service__["a" /* UserService */]])
], CarteiraPage);

//# sourceMappingURL=carteira.js.map

/***/ })

});
//# sourceMappingURL=1.js.map