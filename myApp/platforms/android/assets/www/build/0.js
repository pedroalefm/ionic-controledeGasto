webpackJsonp([0],{

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(522);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
        ],
    })
], PerfilPageModule);

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opcoespage_opcoespage__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var PerfilPage = (function () {
    function PerfilPage(camera, navCtrl, navParams, afAuth, database, app, actionSheetCtrl) {
        var _this = this;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.database = database;
        this.app = app;
        this.actionSheetCtrl = actionSheetCtrl;
        this.photo = null;
        this.afAuth.authState.subscribe(function (data) {
            _this.userID = data.uid;
            //const picture = storage().ref('profile/' + this.userID);    
            //this.photo = picture.getDownloadURL();
            if (data && data.email && data.uid) {
                _this.usuario = database.object("users/" + data.uid).valueChanges();
            }
        });
    }
    PerfilPage.prototype.escolhaFoto = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Escolha a ação',
            buttons: [
                {
                    text: 'Câmera',
                    role: 'camera',
                    handler: function () {
                        _this.takePhotoWithCamera();
                    }
                }, {
                    text: 'Album',
                    role: 'album',
                    handler: function () {
                        _this.takePhotoWithAlbum();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PerfilPage.prototype.opcao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__opcoespage_opcoespage__["a" /* OpcoespagePage */]);
    };
    PerfilPage.prototype.mudarImg = function () {
        console.log("clicou na imagem");
    };
    PerfilPage.prototype.takePhotoWithCamera = function () {
        return __awaiter(this, void 0, void 0, function () {
            var option, result, image, picture, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        option = {
                            quality: 50,
                            targetHeight: 600,
                            targetWidth: 600,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                        };
                        return [4 /*yield*/, this.camera.getPicture(option)];
                    case 1:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_6_firebase__["storage"])().ref('profile/' + this.userID);
                        picture.putString(image, 'data_url');
                        this.savephotoURL();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.takePhotoWithAlbum = function () {
        return __awaiter(this, void 0, void 0, function () {
            var option, result, image, picture, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        option = {
                            quality: 50,
                            targetHeight: 600,
                            targetWidth: 600,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            sourceType: 0
                        };
                        return [4 /*yield*/, this.camera.getPicture(option)];
                    case 1:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_6_firebase__["storage"])().ref('profile/' + this.userID);
                        picture.putString(image, 'data_url');
                        this.savephotoURL();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.atualizarPhoto = function () {
        if (this.photo != null) {
            this.database.object("users/" + this.userID).update({});
        }
    };
    PerfilPage.prototype.savephotoURL = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_6_firebase__["storage"])().ref('profile/' + this.userID).getDownloadURL().then(function (url) {
            console.log("the URL Image is: " + url);
            var imageURL = url;
            return imageURL;
        }).then(function (imageURL) {
            _this.database.object("users/" + _this.userID).update({
                img: imageURL
            });
        });
    };
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-perfil',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/perfil/perfil.html"*/'\n\n<ion-header>\n\n  <ion-navbar color = "navBar">\n    \n    <ion-title>Perfil</ion-title>\n    \n    <ion-buttons end>\n        <button ion-button icon-only type="Submit" (click) = "opcao()" >\n          <ion-icon name="ios-more"></ion-icon>\n        </button>\n      </ion-buttons>\n      \n\n  </ion-navbar>\n  <ion-item color= "navBar" no-lines><br>\n    <img src="{{(usuario | async)?.img}}" (click) = "escolhaFoto()" style="display:block;width:150px;height:150px;margin-left:auto;margin-right:auto;border-radius: 50%;border: 4px solid">\n    <ion-item color= "navBar" no-lines>\n      <div class= "center"><br>\n      <h1>{{(usuario | async)?.nome}}</h1>\n      {{(usuario | async)?.email}}\n      </div>\n  \n    </ion-item>\n  </ion-item>\n \n\n</ion-header>\n\n\n<ion-content padding  >\n  <br><br>\n  <ion-item>\n\n     <ion-icon name="ios-trending-down"><label>   Despesas: R$ {{(usuario | async)?.somatorio}}</label></ion-icon> \n  </ion-item>\n  <ion-item>\n      <ion-icon name="ios-trending-up"><label>   Saldos: R$ {{(usuario | async)?.somatorioSaldo}}</label></ion-icon>\n  </ion-item>\n  <ion-item>\n     <ion-icon name="md-cash"><label>   Disponível: R$ {{(usuario | async)?.somatorioSaldo - (usuario | async)?.somatorio }}</label></ion-icon> \n  </ion-item>  \n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/perfil/perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ })

});
//# sourceMappingURL=0.js.map