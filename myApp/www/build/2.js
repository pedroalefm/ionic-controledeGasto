webpackJsonp([2],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarteiraPageModule", function() { return CarteiraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carteira__ = __webpack_require__(441);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__carteira__["a" /* CarteiraPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carteira__["a" /* CarteiraPage */]),
        ],
    })
], CarteiraPageModule);

//# sourceMappingURL=carteira.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarteiraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adicionar_receita_adicionar_receita__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_usuario_user_service__ = __webpack_require__(135);
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
    CarteiraPage.prototype.adcionarSaldo = function (saldo) {
        this.user.setSaldo(saldo);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__adicionar_receita_adicionar_receita__["a" /* AdicionarReceitaPage */]);
    };
    CarteiraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarteiraPage');
    };
    return CarteiraPage;
}());
CarteiraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-carteira',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic-criptoMoeda/myApp/src/pages/carteira/carteira.html"*/'\n<ion-header>\n\n  <ion-navbar color = "primary">\n    <ion-title>Carteira</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:#342F4B;">\n<br><br><br>\n    <img src="assets/img/carteiraIcon.png" style="display:block;width:50%;height:30%;margin-left:auto;margin-right:auto;">\n    <br><br>\n\n    <ion-item>\n\n      <div class= "center"  >\n      \n          R$: <ion-badge  name="saldo" item>{{(usuario | async)?.saldo}}</ion-badge>          \n\n      </div>\n\n    </ion-item>\n\n\n    <ion-fab right bottom>\n        <button ion-fab color= "secondary" type="Submit" (click)="adcionarSaldo(usuario.saldo)"  > <ion-icon name="add"></ion-icon> </button>\n\n      </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic-criptoMoeda/myApp/src/pages/carteira/carteira.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__providers_usuario_user_service__["a" /* UserService */]])
], CarteiraPage);

//# sourceMappingURL=carteira.js.map

/***/ })

});
//# sourceMappingURL=2.js.map