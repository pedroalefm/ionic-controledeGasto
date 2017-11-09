webpackJsonp([15],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_cadastro__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tab_tab__ = __webpack_require__(145);
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
    function HomePage(navCtrl, afAuth, googlePlus, menuCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.googlePlus = googlePlus;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl.enable(false);
    }
    HomePage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Logando...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    HomePage.prototype.form_login = function (f) {
        var _this = this;
        if (!f.valid) {
            return;
        }
        this.afAuth.auth.signInWithEmailAndPassword(f.controls.email.value, f.controls.password.value).then(function (ok) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tab_tab__["a" /* TabPage */]);
        });
    };
    HomePage.prototype.form_loginGoogle = function (g) {
        var _this = this;
        if (!g.valid) {
            return;
        }
        /* this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(ok => {
           alert("Autenticando");
         });*/
        this.googlePlus.login({
            'webClientId': '<YL15oqItwCIOqklCgYHE7WNug>',
            'offline': true
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithCredential(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider.credential(res.idToken)).then(function (success) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tab_tab__["a" /* TabPage */]);
            });
        });
    };
    HomePage.prototype.cadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/home/home.html"*/'<ion-header >\n  <ion-navbar hide-tabs  color = "navBar">\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n\n    <form #f="ngForm" (submit)="form_login(f)" >\n        <img src="assets/img/novoNovoIcone.png" style="display:block;width:50%;height:30%;margin-left:auto;margin-right:auto;">\n        <br>\n    <ion-list>\n          <ion-item>\n            <ion-input type="email" value="" color="light" ngModel name="email" placeholder= "E-mail"></ion-input>\n          </ion-item>\n        \n          <ion-item>\n            <ion-input type="password" ngModel name="password" color="light"  placeholder= "Senha"></ion-input>\n          </ion-item>\n    </ion-list>\n  <button ion-button full (click) = "presentLoadingDefault()" ng-class="entrar"  >Entrar</button>  \n</form>\n<!--\n<form #g="ngForm" (submit)="form_loginGoogle(g)" >\n    <button ion-button full color="danger">\n        <ion-icon name="logo-googleplus"></ion-icon>\n        </button>\n</form>\n!-->\n\n<button ion-button full color="bt3" (click)= "cadastro()" >Cadastrar</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaSaldoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_saldo_info_saldo__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListaSaldoPage = (function () {
    function ListaSaldoPage(navCtrl, navParams, afAuth, database, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.database = database;
        this.user = user;
        this.arrData = [];
        this.afAuth.authState.subscribe(function (data) {
            _this.userid = data.uid;
            _this.saldos = _this.database.list("users/" + data.uid + "/saldos").valueChanges();
            _this.usuario = database.object('users/' + data.uid).valueChanges();
        });
    }
    ListaSaldoPage.prototype.infoSaldo = function (categoria, valor, sobre, data) {
        this.user.setSaldo(categoria, valor, sobre, data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__info_saldo_info_saldo__["a" /* InfoSaldoPage */]);
    };
    //DELETAR NOVO Sliding
    ListaSaldoPage.prototype.deleteItem = function (sobre, valor, categoria) {
        var _this = this;
        var refItem = this.database.list("users/" + this.userid + "/saldos");
        refItem.snapshotChanges([])
            .subscribe(function (filhos) {
            filhos.forEach(function (filho) {
                if (filho.payload.val().sobre === sobre && filho.payload.val().valor == valor && filho.payload.val().categoria == categoria) {
                    var itensRef = _this.database.list("users/" + _this.userid + "/saldos/" + filho.key);
                    itensRef.remove();
                }
            });
        });
        this.iniciarChart(null, null, null, null, null, null, null, null);
    };
    ListaSaldoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            var userID;
            userID = data.uid;
            _this.saldos = _this.database.list("users/" + userID + "/saldos").valueChanges();
            _this.saldos.subscribe(function (data) {
                var soma = 0.0;
                var somaAluguel = null;
                var somaPensao = null;
                var somaOutros = null;
                var somaExtra = null;
                var somaSal = null;
                var somaPessoal = null;
                var somaMesada = null;
                var somaPoupanca = null;
                //Se tiver vazio ele zera
                if (!data || !data.length) {
                    _this.database.object("users/" + userID).update({
                        somatorioSaldo: 0
                    });
                }
                //colocando o somatório
                data.forEach(function (saldos) {
                    if (saldos.categoria === "Aluguel") {
                        somaAluguel = somaAluguel + parseFloat(saldos.valor);
                    }
                    else if (saldos.categoria === "Hora extra") {
                        somaExtra = somaExtra + parseFloat(saldos.valor);
                    }
                    else if (saldos.categoria === "Salário") {
                        somaSal = somaSal + parseFloat(saldos.valor);
                    }
                    else if (saldos.categoria === "Rendimentos pessoais") {
                        somaPessoal = somaPessoal + parseFloat(saldos.valor);
                    }
                    else if (saldos.categoria === "Pensão") {
                        somaPensao = somaPensao + parseFloat(saldos.valor);
                    }
                    else if (saldos.categoria === "Mesada") {
                        somaMesada = somaMesada + parseFloat(saldos.valor);
                    }
                    else if (saldos.categoria === "Poupança") {
                        somaPoupanca = somaPoupanca + parseFloat(saldos.valor);
                    }
                    else if (saldos.categoria === "Outros") {
                        somaOutros = somaOutros + parseFloat(saldos.valor);
                    }
                    _this.iniciarChart(somaExtra, somaSal, somaPessoal, somaPensao, somaMesada, somaPoupanca, somaAluguel, somaOutros);
                    soma = soma + parseFloat(saldos.valor);
                    _this.database.object("users/" + userID).update({
                        somatorioSaldo: soma
                    });
                });
            });
        });
    };
    ListaSaldoPage.prototype.iniciarChart = function (extra, salario, pessoal, pensao, mesada, poupanca, aluguel, outros) {
        var myChart = __WEBPACK_IMPORTED_MODULE_6_highcharts__["chart"]('container2', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: '<b>Gráfico de receitas<b>'
            },
            tooltip: {},
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    }
                }
            },
            series: [{
                    name: 'R$',
                    data: [{
                            name: 'Hora extra',
                            y: extra,
                        }, {
                            name: 'Salário',
                            y: salario
                        },
                        {
                            name: 'Rendimento Pessoal',
                            y: pessoal
                        }, {
                            name: 'Pensão',
                            y: pensao
                        }, {
                            name: 'Mesada',
                            y: mesada
                        }, {
                            name: 'Poupança',
                            y: poupanca
                        }, {
                            name: 'Alugueis',
                            y: aluguel
                        }, {
                            name: 'Outros',
                            y: outros
                        }]
                }]
        });
    };
    return ListaSaldoPage;
}());
ListaSaldoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-lista-saldo',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/lista-saldo/lista-saldo.html"*/'\n<script src="https://code.highcharts.com/highcharts-more.js"></script>\n\n<ion-header>\n\n  <ion-navbar color = "navBar">\n    <ion-title>Saldos adicionados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n\n    <ion-item>\n        <div id="container2" style="width:100%; height:300px;"></div>\n        \n    </ion-item>\n  \n\n    <ion-list >\n        <ion-item-sliding *ngFor="let s of saldos | async; let i = index"  >\n\n        <button  ion-item   (click)= "infoSaldo(s.categoria, s.valor, s.sobre, s.data)"  >\n          {{s.categoria}}: {{s.sobre}}\n          <ion-badge item-end>R$: {{s.valor}}</ion-badge>\n        </button>\n\n    <ion-item-options side="right">\n        <button ion-button color="danger"  (click)=\'deleteItem(s.sobre, s.valor, s.categoria)\' >\n            <ion-icon name="ios-trash"></ion-icon>\n          </button>\n    </ion-item-options>\n  \n\n      </ion-item-sliding>\n    </ion-list>\n\n      <ion-badge item-end>Total: R${{(usuario | async)?.somatorioSaldo}}</ion-badge>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/lista-saldo/lista-saldo.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_usuario_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_usuario_user_service__["a" /* UserService */]) === "function" && _e || Object])
], ListaSaldoPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=lista-saldo.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionarDespesaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_index__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuario_user_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdicionarDespesaPage = (function () {
    function AdicionarDespesaPage(navCtrl, navParams, fb, database, afAuth, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.database = database;
        this.afAuth = afAuth;
        this.user = user;
        this.despesaForm = fb.group({
            'valor': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)]],
            'categoria': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].min(1)]],
            'sobre': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].min(1)]],
            'data': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].min(1)]]
        });
        console.log("VALOR DAS DESPESAS INICIANDO A TELA" + this.user.getSomatorio());
        this.afAuth.authState.subscribe(function (data) {
            var userID;
            userID = data.uid;
            console.log("IDPORRA" + userID);
            _this.despesas = _this.database.list("users/" + userID + "/despesas").valueChanges();
        });
    }
    AdicionarDespesaPage.prototype.form_submit = function () {
        var _this = this;
        console.log(this.despesaForm.value.nome);
        this.afAuth.authState.subscribe(function (data) {
            _this.userId = data.uid;
            _this.database.list("users/" + data.uid + "/despesas").push({
                valor: _this.despesaForm.value.valor,
                categoria: _this.despesaForm.value.categoria,
                sobre: _this.despesaForm.value.sobre,
                data: _this.despesaForm.value.data
            }).then(function (t) { return console.log('dados gravados: ' + t.key); }), function (e) { return console.log(e.message); };
            _this.despesaForm.reset();
        });
    };
    AdicionarDespesaPage.prototype.adicionarDespesa = function () {
        var _this = this;
        if (this.user.getSomatorio() === 0) {
            this.afAuth.authState.subscribe(function (data) {
                var userID;
                userID = data.uid;
                console.log("IDPORRA" + userID);
                _this.despesas = _this.database.list("users/" + userID + "/despesas").valueChanges();
                _this.despesas.subscribe(function (data) {
                    var soma = 0;
                    data.forEach(function (despesas) {
                        soma = soma + parseInt(despesas.valor);
                        console.log("VALOR SOMA!!!!!!<<<<<<<<<<<<<<<<" + soma);
                        _this.database.object("users/" + userID).update({
                            somatorio: soma
                        });
                    });
                });
            });
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__index_index__["a" /* IndexPage */]);
    };
    AdicionarDespesaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdicionarDespesaPage');
        this.user.reniciarSomatorio();
        console.log("somatorio ao iniciar" + this.user.getSomatorio());
    };
    return AdicionarDespesaPage;
}());
AdicionarDespesaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-adicionar-despesa',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/adicionar-despesa/adicionar-despesa.html"*/'<!--\n  Generated template for the AdicionarDespesaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "navBar">\n    <ion-title>Adicionar Despesa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup] = "despesaForm" (ngSubmit)="form_submit()">\n    <ion-list >\n              <ion-item >\n                  <ion-input formControlName=\'valor\' placeholder="Valor" type="text" [(ngModel)]="valor" name="valor"></ion-input>\n              </ion-item>   \n              <ion-item text-wrap >\n                  <ion-input placeholder="Sobre" formControlName=\'sobre\' type="text" [(ngModel)]="sobre" name="sobre" ></ion-input>\n              </ion-item>\n        \n                <ion-item >\n                  <ion-label>Categoria</ion-label>\n                  <ion-select formControlName=\'categoria\' [(ngModel)]="categoria">\n                    <ion-option value="Cinema">Cinema</ion-option>\n                    <ion-option value="Mercado">Mercado</ion-option>\n                    <ion-option value="Cartão de Crédito">Cartão de Crédito</ion-option>\n                    <ion-option value="Pensão">Pensão Alimentícia</ion-option>\n                    <ion-option value="Aluguel">Aluguel</ion-option>\n                    <ion-option value="Video-Games">Video-Games</ion-option>\n                    <ion-option value="Celular">Celular</ion-option>\n                    <ion-option value="Material Doméstico">Material doméstico</ion-option>\n                    <ion-option value="Hospedagem">Hospedagem</ion-option>\n                    <ion-option value="Faculdade">Faculdade</ion-option>\n                    <ion-option value="Escola">Escola</ion-option>\n                    <ion-option value="Filhos">Filhos</ion-option>\n                    <ion-option value="Entretenimento">Entretenimento</ion-option>\n                    <ion-option value="Eletrodomésticos">Eletrodomésticos</ion-option>\n                    <ion-option value="Armas de fogo">Armas de fogo</ion-option>\n                    <ion-option value="Comida">Comida</ion-option>\n                    <ion-option value="Celular">Celular</ion-option>\n                    <ion-option value="Outros">Outros</ion-option>\n                  </ion-select>\n                </ion-item>\n                \n                <ion-item>\n                    <ion-label>Data</ion-label>\n                  <ion-datetime formControlName=\'data\' displayFormat="DD/MM/YYYY"  name="data"></ion-datetime>\n                </ion-item>\n                <br><br>\n                <button type="Submit" ion-button (click)="adicionarDespesa()" full>Adiconar</button>\n                \n          </ion-list>\n  </form>\n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/adicionar-despesa/adicionar-despesa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6__providers_usuario_user_service__["a" /* UserService */]])
], AdicionarDespesaPage);

//# sourceMappingURL=adicionar-despesa.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoDespesaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_user_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InfoDespesaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoDespesaPage = (function () {
    function InfoDespesaPage(navCtrl, navParams, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.infodespesa = {
            categoria: "",
            sobre: "",
            valor: "",
            data: ""
        };
        this.infodespesa = this.user.getDespesa();
        this.somatorio = this.user.getSomatorio();
    }
    InfoDespesaPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.get('infodespesa'));
    };
    return InfoDespesaPage;
}());
InfoDespesaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-info-despesa',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/info-despesa/info-despesa.html"*/'<!--\n  Generated template for the InfoDespesaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "navBar">\n    <ion-title>Informações de Despesas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n  \n    <ion-list>\n        <ion-item>\n          Categoria: {{ infodespesa.categoria }}\n        </ion-item>\n        <ion-item text-wrap>\n            Sobre: {{ infodespesa.sobre }}\n          </ion-item>\n        <ion-item>\n            R$: {{ infodespesa.valor }}\n        </ion-item>\n        <ion-item text-wrap>\n            Data: {{ infodespesa.data }}\n          </ion-item>\n       \n\n       \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/info-despesa/info-despesa.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_user_service__["a" /* UserService */]])
], InfoDespesaPage);

//# sourceMappingURL=info-despesa.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoSaldoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_user_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InfoSaldoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoSaldoPage = (function () {
    function InfoSaldoPage(navCtrl, navParams, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.infosaldo = {
            categoria: "",
            sobre: "",
            valor: "",
            data: ""
        };
        this.infosaldo = this.user.getSaldo();
    }
    InfoSaldoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoSaldoPage');
    };
    return InfoSaldoPage;
}());
InfoSaldoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-info-saldo',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/info-saldo/info-saldo.html"*/'<!--\n  Generated template for the InfoSaldoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "navBar">\n    <ion-title>Informações de Saldo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n\n    <ion-list>\n        <ion-item>\n          Categoria: {{ infosaldo.categoria }}\n        </ion-item>\n        <ion-item text-wrap>\n            Sobre: {{ infosaldo.sobre }}\n          </ion-item>\n        <ion-item>\n          R$: {{ infosaldo.valor }}\n        </ion-item>\n        <ion-item>\n          Data: {{infosaldo.data}}\n        </ion-item>\n\n       \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/info-saldo/info-saldo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_user_service__["a" /* UserService */]])
], InfoSaldoPage);

//# sourceMappingURL=info-saldo.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarFotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlterarFotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlterarFotoPage = (function () {
    function AlterarFotoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlterarFotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlterarFotoPage');
    };
    return AlterarFotoPage;
}());
AlterarFotoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-alterar-foto',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/alterar-foto/alterar-foto.html"*/'<!--\n  Generated template for the AlterarFotoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>alterarFoto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/alterar-foto/alterar-foto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AlterarFotoPage);

//# sourceMappingURL=alterar-foto.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlterarEmailPage = (function () {
    function AlterarEmailPage(navCtrl, navParams, afAuth, toastCtrl, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.database = database;
    }
    AlterarEmailPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1000
        });
        toast.present();
    };
    AlterarEmailPage.prototype.form_alteraSenha = function (f) {
        if (!f.valid) {
            return;
        }
        this.alterarEmail(f.controls.email.value);
    };
    AlterarEmailPage.prototype.alterarEmail = function (novoEmail) {
        var _this = this;
        this.afAuth.auth.currentUser.updateEmail(novoEmail).then(function (ok) {
            var userId = _this.afAuth.auth.currentUser.uid;
            _this.database.object('users/' + userId).update({
                email: novoEmail
            });
            _this.presentToast('E-mail atualizado! ');
        }).catch(function (e) {
            _this.presentToast("E-mail incorreto ou em uso");
        });
    };
    AlterarEmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlterarEmailPage');
    };
    return AlterarEmailPage;
}());
AlterarEmailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-alterar-email',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/alterar-email/alterar-email.html"*/'<!--\n  Generated template for the AlterarEmailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBar">\n    <ion-title>Alterar Senha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <form #f="ngForm" (submit)="form_alteraSenha(f)">\n        <ion-list>\n          <ion-item >\n            <ion-input type="text" placeholder="Novo E-mail" required ngModel name="email" ></ion-input >\n          </ion-item>\n\n          <br>\n          <button ion-button full type="submit" color="bt1"> Salvar </button>\n          \n        </ion-list>\n      </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/alterar-email/alterar-email.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], AlterarEmailPage);

//# sourceMappingURL=alterar-email.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlterarSenhaPage = (function () {
    function AlterarSenhaPage(navCtrl, navParams, afAuth, toastCtrl, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.database = database;
    }
    AlterarSenhaPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1000
        });
        toast.present();
    };
    AlterarSenhaPage.prototype.form_alteraSenha = function (f) {
        if (!f.valid) {
            return;
        }
        this.alterarSenha(f.controls.novaSenha.value, f.controls.novaSenha2.value);
    };
    AlterarSenhaPage.prototype.alterarSenha = function (novaSenha, novaSenha2) {
        var _this = this;
        if (novaSenha === novaSenha2) {
            if (novaSenha.length > 5) {
                this.afAuth.auth.currentUser.updatePassword(novaSenha).then(function (ok) {
                    _this.presentToast('Senha atualizada com sucesso! ');
                });
            }
            else if (novaSenha.length < 6) {
                this.presentToast(' A senha precisa ter no mínimo 6 dígitos ');
            }
        }
        else if (novaSenha != novaSenha2) {
            this.presentToast('As senhas não são iguais');
        }
        else {
            this.presentToast('Houve erro no cadastro da nova senha');
        }
    };
    AlterarSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlterarSenhaPage');
    };
    return AlterarSenhaPage;
}());
AlterarSenhaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-alterar-senha',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/alterar-senha/alterar-senha.html"*/'<!--\n  Generated template for the AlterarSenhaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBar">\n    <ion-title>Alterar Senha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <form #f="ngForm" (submit)="form_alteraSenha(f)">\n        <ion-list>\n          <ion-item >\n            <ion-input type="password" placeholder="Nova senha" required ngModel name="novaSenha" ></ion-input >\n          </ion-item>\n          <ion-item >\n            <ion-input  type="password" placeholder="Digite novamente" required ngModel name="novaSenha2"> </ion-input>\n          </ion-item>\n          <br>\n          <button ion-button full type="submit" color="bt1"> Salvar </button>\n          \n        </ion-list>\n      </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/alterar-senha/alterar-senha.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], AlterarSenhaPage);

//# sourceMappingURL=alterar-senha.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, afAuth, toastCtrl, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.database = database;
    }
    CadastroPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1000
        });
        toast.present();
    };
    CadastroPage.prototype.form_cadastro = function (f) {
        var _this = this;
        if (!f.valid) {
            return;
        }
        if (f.controls.password.value.length < 6) {
            this.presentToast('Senha muito curta');
        }
        else {
            if (f.controls.password2.value === f.controls.password.value) {
                this.afAuth.auth.createUserWithEmailAndPassword(f.controls.email.value, f.controls.password.value).then(function (ok) {
                    var userId = _this.afAuth.auth.currentUser.uid;
                    _this.database.object('users/' + userId).set({
                        nome: f.controls.nome.value,
                        login: f.controls.login.value,
                        email: f.controls.email.value,
                        img: "https://firebasestorage.googleapis.com/v0/b/bepidproject.appspot.com/o/userPadraoimg.jpg?alt=media&token=85a47205-c5d0-4676-9375-82e4492a56e3",
                        saldos: 0,
                        despesas: 0,
                        somatorio: 0,
                        somatorioSaldo: 0
                    });
                    _this.presentToast('Usuário cadastrado com sucesso!');
                    _this.navCtrl.popToRoot();
                }).catch(function (e) {
                    _this.presentToast('Erro no cadastro. Tente novamente.');
                });
            }
            else {
                this.presentToast('As senhas não são iguais');
            }
        }
    };
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    return CadastroPage;
}());
CadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cadastro',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/cadastro/cadastro.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="navBar">\n    <ion-title>Cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <br><br><br><br><br><br><br><br>\n    \n    <form #f="ngForm" (submit)="form_cadastro(f)" >\n\n        <ion-item>\n            <ion-input placeholder="Login" type="text" required ngModel name="login" ></ion-input>\n        </ion-item>     \n\n        <ion-item>\n          <ion-input type="text" require ngModel value="" name="email" placeholder="E-mail"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input placeholder="Nome" type="text" required ngModel name="nome" ></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-input type="password" require ngModel name="password" placeholder="Senha"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input type="password" require ngModel name="password2" placeholder="Repita a Senha"></ion-input>\n        </ion-item>\n        <br><br>\n        <button type="Submit" ion-button full>Cadastrar</button>  \n        \n\n\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/cadastro/cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], CadastroPage);

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabPage = (function () {
    function TabPage(navCtrl, navParams, database, afAuth, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.afAuth = afAuth;
        this.user = user;
        this.indexRoot = 'IndexPage';
        this.carteiraRoot = 'CarteiraPage';
        this.perfilRoot = 'PerfilPage';
    }
    return TabPage;
}());
TabPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tab',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/tab/tab.html"*/'<ion-tabs color = "tabBar">\n    <ion-tab [root]="indexRoot" tabIcon="md-stats"></ion-tab>\n    <ion-tab [root]="carteiraRoot"  tabIcon="md-cash"></ion-tab>\n    <ion-tab [root]="perfilRoot" tabIcon="md-person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/tab/tab.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_user_service__["a" /* UserService */]])
], TabPage);

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    return SobrePage;
}());
SobrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sobre',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/sobre/sobre.html"*/'<!--\n  Generated template for the SobrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "navBar">\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Aplicativo desenvolvido por pedim\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/sobre/sobre.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SobrePage);

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adicionar-despesa/adicionar-despesa.module": [
		458,
		14
	],
	"../pages/adicionar-receita/adicionar-receita.module": [
		459,
		13
	],
	"../pages/alterar-email/alterar-email.module": [
		461,
		12
	],
	"../pages/alterar-foto/alterar-foto.module": [
		460,
		11
	],
	"../pages/alterar-senha/alterar-senha.module": [
		462,
		10
	],
	"../pages/cadastro/cadastro.module": [
		463,
		9
	],
	"../pages/carteira/carteira.module": [
		466,
		1
	],
	"../pages/index/index.module": [
		464,
		8
	],
	"../pages/info-despesa/info-despesa.module": [
		465,
		7
	],
	"../pages/info-saldo/info-saldo.module": [
		468,
		6
	],
	"../pages/lista-saldo/lista-saldo.module": [
		467,
		5
	],
	"../pages/opcoespage/opcoespage.module": [
		469,
		4
	],
	"../pages/perfil/perfil.module": [
		470,
		0
	],
	"../pages/sobre/sobre.module": [
		471,
		3
	],
	"../pages/tab/tab.module": [
		472,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 199;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionarReceitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuario_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lista_saldo_lista_saldo__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdicionarReceitaPage = (function () {
    function AdicionarReceitaPage(navCtrl, navParams, afAuth, database, user, fb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.database = database;
        this.user = user;
        this.fb = fb;
        this.saldoForm = fb.group({
            'categoria': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].maxLength(15)]],
            'sobre': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].min(1)]],
            'valor': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].min(1)]],
            'data': ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].min(1)]]
        });
        this.afAuth.authState.subscribe(function (data) {
            var userID;
            userID = data.uid;
            console.log("IDPORRA" + userID);
            _this.saldos = _this.database.list("users/" + userID + "/saldos").valueChanges();
        });
    }
    AdicionarReceitaPage.prototype.form_submit = function () {
        var _this = this;
        console.log(this.saldoForm.value.nome);
        this.afAuth.authState.subscribe(function (data) {
            _this.database.list("users/" + data.uid + "/saldos").push({
                valor: _this.saldoForm.value.valor,
                categoria: _this.saldoForm.value.categoria,
                sobre: _this.saldoForm.value.sobre,
                data: _this.saldoForm.value.data
            }).then(function (t) { return console.log('dados gravados: ' + t.key); }), function (e) { return console.log(e.message); };
            _this.saldoForm.reset();
        });
    };
    AdicionarReceitaPage.prototype.adicionarReceita = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            var userID;
            userID = data.uid;
            _this.saldos = _this.database.list("users/" + userID + "/saldos").valueChanges();
            _this.saldos.subscribe(function (data) {
                var soma = 0.0;
                data.forEach(function (saldos) {
                    soma = soma + parseFloat(saldos.valor);
                    _this.database.object("users/" + userID).update({
                        somatorioSaldo: soma
                    });
                });
            });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__lista_saldo_lista_saldo__["a" /* ListaSaldoPage */]).catch(function (e) {
            console.log("erro do chart");
        });
    };
    AdicionarReceitaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdicionarReceitaPage');
    };
    return AdicionarReceitaPage;
}());
AdicionarReceitaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-adicionar-receita',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/adicionar-receita/adicionar-receita.html"*/'<!--\n  Generated template for the AdicionarReceitaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "navBar"> \n    <ion-title>Adicionar Receita</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n    \n\n  <form [formGroup] = "saldoForm" (ngSubmit)="form_submit()">\n    \n  <ion-list>\n    <ion-item >\n      <ion-input formControlName=\'valor\' placeholder="Valor" type="text" [(ngModel)]="valor" name="valor"></ion-input>\n    </ion-item>   \n\n    <ion-item text-wrap >\n        <ion-input placeholder="Sobre" formControlName=\'sobre\' type="text" [(ngModel)]="sobre" name="sobre" ></ion-input>\n    </ion-item>\n\n        <ion-item >\n          <ion-label>Categoria</ion-label>\n          <ion-select formControlName=\'categoria\' [(ngModel)]="categoria">\n            <ion-option value="Hora extra">Hora Extra</ion-option>\n            <ion-option value="Salário">Salário</ion-option>\n            <ion-option value="Rendimentos pessoais">Rendimentos pessoais</ion-option>\n            <ion-option value="Pensão">Pensão</ion-option>\n            <ion-option value="Mesada">Mesada</ion-option>      \n            <ion-option value="Poupança">Poupança</ion-option>            \n            <ion-option value="Aluguel">Aluguel</ion-option>\n            <ion-option value="Outros">Outros</ion-option>\n          </ion-select>\n        </ion-item>\n\n      <ion-item>\n          <ion-label>Data</ion-label>\n        <ion-datetime formControlName=\'data\' displayFormat="DD/MM/YYYY"  name="data"></ion-datetime>\n      </ion-item>\n      <br><br>\n      <button type="Submit" ion-button (click)="adicionarReceita()" full>Adiconar</button>\n      \n  </ion-list>\n</form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/adicionar-receita/adicionar-receita.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6__providers_usuario_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */]])
], AdicionarReceitaPage);

//# sourceMappingURL=adicionar-receita.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpcoespagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alterar_email_alterar_email__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alterar_foto_alterar_foto__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alterar_senha_alterar_senha__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sobre_sobre__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OpcoespagePage = (function () {
    function OpcoespagePage(navCtrl, navParams, afAuth, app, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.app = app;
        this.database = database;
    }
    OpcoespagePage.prototype.deslogar = function () {
        this.afAuth.auth.signOut();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    OpcoespagePage.prototype.sobre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__sobre_sobre__["a" /* SobrePage */]);
    };
    OpcoespagePage.prototype.alterarSenha = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__alterar_senha_alterar_senha__["a" /* AlterarSenhaPage */]);
    };
    OpcoespagePage.prototype.alterarEmail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__alterar_email_alterar_email__["a" /* AlterarEmailPage */]);
    };
    OpcoespagePage.prototype.alterarFoto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__alterar_foto_alterar_foto__["a" /* AlterarFotoPage */]);
    };
    OpcoespagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpcoespagePage');
    };
    return OpcoespagePage;
}());
OpcoespagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-opcoespage',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/opcoespage/opcoespage.html"*/'<!--\n  Generated template for the OpcoespagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "navBar">\n    <ion-title>Opções</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <br>\n    Configurações de Conta<br><br>\n    <button ion-item   full (click) = "alterarEmail()">Alterar e-mail</button> \n    <button ion-item   full (click) = "alterarSenha()">Alterar senha</button>\n    <button ion-item   full (click) = "alterarFoto()">Alterar foto de perfil</button>  \n    <button ion-item   full (click) = "sobre()">Sobre</button>\n    <button ion-item   full (click) = "deslogar()">Logout</button>\n    \n    \n     \n    \n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/opcoespage/opcoespage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], OpcoespagePage);

//# sourceMappingURL=opcoespage.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProdutoProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserService = (function () {
    function UserService() {
        this.somatorioSaldo = 0;
        this.somatorio = 0;
        this.somaAlguel = 0;
        this.despesa = {
            categoria: "",
            sobre: "",
            valor: "",
            data: ""
        };
        this.saldo = {
            categoria: "",
            sobre: "",
            valor: "",
            data: ""
        };
        this.user = {
            nome: "",
            email: "",
            saldo: "",
        };
    }
    //private estado: boolean;
    UserService.prototype.setColor = function (value) {
        this.color = value;
    };
    UserService.prototype.getColor = function () {
        return this.color;
    };
    ///////////////////////////////////////////////
    //Usuario
    UserService.prototype.getUsuario = function () {
        return this.user;
    };
    UserService.prototype.setUsuario = function (nome, email, saldo) {
        this.user.nome = nome;
        this.user.email = email;
        this.user.saldo = saldo;
    };
    ////////////////////////////////////////////////
    //Despesas
    UserService.prototype.setDespesa = function (categoria, valor, sobre, data) {
        this.despesa.categoria = categoria;
        this.despesa.valor = valor;
        this.despesa.sobre = sobre;
        this.despesa.data = data;
    };
    UserService.prototype.getDespesa = function () {
        return this.despesa;
    };
    ///////////////////////////////////////////////
    //Somatorio da despesa
    UserService.prototype.setSomatorio = function (value) {
        this.somatorio = this.somatorio + parseInt(value);
    };
    UserService.prototype.getSomatorio = function () {
        return this.somatorio;
    };
    UserService.prototype.setSomaAluguel = function (value) {
        this.somaAlguel = value;
    };
    UserService.prototype.getSomaAluguel = function () {
        return this.somaAlguel;
    };
    UserService.prototype.reniciarSomatorio = function () {
        this.somatorio = 0;
    };
    //////////////////////////////////////////////////
    //Saldo (Lista)
    UserService.prototype.setSaldo = function (categoria, valor, sobre, data) {
        this.saldo.categoria = categoria;
        this.saldo.valor = valor;
        this.saldo.sobre = sobre;
        this.saldo.data = data;
    };
    UserService.prototype.getSaldo = function () {
        return this.saldo;
    };
    ////////////////////////////////////////////////////
    //Somatorio do saldo
    UserService.prototype.setSomatorioSaldo = function (value) {
        this.somatorioSaldo = this.somatorioSaldo + parseInt(value);
    };
    UserService.prototype.getSomatorioSaldo = function () {
        return this.somatorioSaldo;
    };
    UserService.prototype.reniciarSomatorioSaldo = function () {
        this.somatorioSaldo = 0;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adicionar_despesa_adicionar_despesa__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__info_despesa_info_despesa__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var IndexPage = (function () {
    function IndexPage(navCtrl, navParams, afAuth, database, menuCtrl, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.database = database;
        this.menuCtrl = menuCtrl;
        this.user = user;
        this.arrData = [];
        this.somaAluguel = this.user.getSomaAluguel();
        this.afAuth.authState.subscribe(function (data) {
            _this.despesas = database.list("users/" + data.uid + "/despesas").valueChanges();
            _this.userid = data.uid;
            _this.usuario = database.object('users/' + data.uid).valueChanges();
        });
    }
    IndexPage.prototype.adicionarDespesa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__adicionar_despesa_adicionar_despesa__["a" /* AdicionarDespesaPage */]);
    };
    //DELETE NOVO Sliding
    IndexPage.prototype.deleteItem = function (sobre, valor, categoria) {
        var _this = this;
        var refItem = this.database.list("users/" + this.userid + "/despesas");
        refItem.snapshotChanges([])
            .subscribe(function (filhos) {
            filhos.forEach(function (filho) {
                if (filho.payload.val().sobre === sobre && filho.payload.val().valor == valor && filho.payload.val().categoria == categoria) {
                    var itensRef = _this.database.list("users/" + _this.userid + "/despesas/" + filho.key);
                    itensRef.remove();
                }
            });
        });
        this.iniciarChart(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    };
    IndexPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    IndexPage.prototype.infoDespesa = function (categoria, valor, sobre, data) {
        this.user.setDespesa(categoria, valor, sobre, data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__info_despesa_info_despesa__["a" /* InfoDespesaPage */]);
    };
    IndexPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            var userID;
            userID = data.uid;
            _this.despesas = _this.database.list("users/" + userID + "/despesas").valueChanges();
            _this.despesas.subscribe(function (data) {
                var soma = 0.0;
                var somaAluguel = null;
                var somaCinema = null;
                var somaMercado = null;
                var somaCartao = null;
                var somaPensao = null;
                var somaGame = null;
                var somaCelular = null;
                var somaDomestico = null;
                var somaHosp = null;
                var somaFacu = null;
                var somaEscola = null;
                var somaFilhos = null;
                var somaEntre = null;
                var somaEletro = null;
                var somaArmas = null;
                var somaComida = null;
                var somaOutros = null;
                //somatorio zerado
                if (!data || !data.length) {
                    _this.database.object("users/" + userID).update({
                        somatorio: 0
                    });
                }
                //somatorio
                data.forEach(function (despesas) {
                    if (despesas.categoria === "Aluguel") {
                        somaAluguel = somaAluguel + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Cinema") {
                        somaCinema = somaCinema + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Mercado") {
                        somaMercado = somaMercado + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Cartão de Crédito") {
                        somaCartao = somaCartao + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Pensão") {
                        somaPensao = somaPensao + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Video-Games") {
                        somaGame = somaGame + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Celular") {
                        somaCelular = somaCelular + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Material Doméstico") {
                        somaDomestico = somaDomestico + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Hospedagem") {
                        somaHosp = somaHosp + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Faculdade") {
                        somaFacu = somaFacu + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Escola") {
                        somaEscola = somaEscola + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Filhos") {
                        somaFilhos = somaFilhos + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Entretenimento") {
                        somaEntre = somaEntre + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Eletrodomésticos") {
                        somaEletro = somaEletro + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Armas de fogo") {
                        somaArmas = somaArmas + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Comida") {
                        somaComida = somaComida + parseFloat(despesas.valor);
                    }
                    else if (despesas.categoria === "Outros") {
                        somaOutros = somaOutros + parseFloat(despesas.valor);
                    }
                    _this.iniciarChart(somaAluguel, somaCinema, somaMercado, somaCartao, somaPensao, somaGame, somaCelular, somaDomestico, somaHosp, somaFacu, somaEscola, somaFilhos, somaEntre, somaEletro, somaArmas, somaComida, somaOutros);
                    soma = soma + parseFloat(despesas.valor);
                    _this.database.object("users/" + userID).update({
                        somatorio: soma,
                    });
                });
            });
        });
        //this.user.reniciarSomatorio();
    };
    IndexPage.prototype.iniciarChart = function (aluguel, cinema, mercado, cartao, pensao, game, celular, domestico, hosp, facu, escola, filhos, entre, eletro, armas, comida, outros) {
        var myChart = __WEBPACK_IMPORTED_MODULE_7_highcharts__["chart"]('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: '<b>Gráfico de despesas<b>'
            },
            tooltip: {},
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    }
                }
            },
            series: [{
                    name: 'R$',
                    data: [{
                            name: 'Aluguel',
                            y: aluguel,
                        }, {
                            name: 'Cinema',
                            y: cinema
                        },
                        {
                            name: 'Mercado',
                            y: mercado
                        }, {
                            name: 'Cartão de crédito',
                            y: cartao
                        }, {
                            name: 'Pensão',
                            y: pensao
                        }, {
                            name: 'Video-Games',
                            y: game
                        }, {
                            name: 'Celular',
                            y: celular
                        }, {
                            name: 'Material Doméetico',
                            y: domestico
                        }, {
                            name: 'Hospedagem',
                            y: hosp
                        }, {
                            name: 'Faculdade',
                            y: facu
                        }, {
                            name: 'Escola',
                            y: escola
                        }, {
                            name: 'Filhos',
                            y: filhos
                        }, {
                            name: 'Entretenimento',
                            y: entre
                        }, {
                            name: 'Eletrodomésticos',
                            y: eletro
                        }, {
                            name: 'Armas de fogo',
                            y: armas
                        }, {
                            name: 'Comida',
                            y: comida
                        }, {
                            name: 'Outros',
                            y: outros
                        }]
                }]
        });
    };
    IndexPage.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.navCtrl.popToRoot();
    };
    return IndexPage;
}());
IndexPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-index',template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/index/index.html"*/'\n<ion-header>\n    <ion-navbar color="navBar">\n      \n      <ion-title>\n        Despesas\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only type="Submit" (click)= \'adicionarDespesa()\' >\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding id="page1"></ion-content>\n\n\n\n<ion-content padding >\n  \n  <ion-item>\n      <div id="container" style="width:100%; height:300px;"></div>\n      \n  </ion-item>\n\n  \n\n    <ion-list  >\n        <ion-item-sliding *ngFor="let d of despesas | async; let i = index "  >\n        \n        <button ion-item   (click)= "infoDespesa(d.categoria, d.valor, d.sobre, d.data)"  >\n          {{d.categoria}}: {{d.sobre}}\n          <ion-badge color="danger" item-end>R$: {{d.valor}}</ion-badge>\n        </button>    \n      \n      <ion-item-options side="right">\n          <button ion-button color="danger"  (click)=\'deleteItem(d.sobre,d.valor,d.categoria)\' >\n              <ion-icon name="ios-trash"></ion-icon>\n          </button>\n      </ion-item-options>\n    \n\n      </ion-item-sliding>\n    </ion-list>\n\n     \n      <ion-badge item-end color="danger">Total: R${{(usuario | async)?.somatorio}}</ion-badge>\n      \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/pages/index/index.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_usuario_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_usuario_user_service__["a" /* UserService */]) === "function" && _f || Object])
], IndexPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(317);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cadastro_cadastro__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tab_tab__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_adicionar_receita_adicionar_receita__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_usuario_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_adicionar_despesa_adicionar_despesa__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_info_despesa_info_despesa__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_lista_saldo_lista_saldo__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_info_saldo_info_saldo__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_opcoespage_opcoespage__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_alterar_email_alterar_email__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_alterar_foto_alterar_foto__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_alterar_senha_alterar_senha__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sobre_sobre__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_highcharts__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angular2_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var config = {
    apiKey: "AIzaSyArEb7_OWPrCrw2fTbkhyQMGquXYUjjUD0",
    authDomain: "bepidproject.firebaseapp.com",
    databaseURL: "https://bepidproject.firebaseio.com",
    projectId: "bepidproject",
    storageBucket: "bepidproject.appspot.com",
    messagingSenderId: "443492259071"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tab_tab__["a" /* TabPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_adicionar_receita_adicionar_receita__["a" /* AdicionarReceitaPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_adicionar_despesa_adicionar_despesa__["a" /* AdicionarDespesaPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_info_despesa_info_despesa__["a" /* InfoDespesaPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_lista_saldo_lista_saldo__["a" /* ListaSaldoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_info_saldo_info_saldo__["a" /* InfoSaldoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_opcoespage_opcoespage__["a" /* OpcoespagePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_alterar_email_alterar_email__["a" /* AlterarEmailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_alterar_foto_alterar_foto__["a" /* AlterarFotoPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_alterar_senha_alterar_senha__["a" /* AlterarSenhaPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_sobre_sobre__["a" /* SobrePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/adicionar-despesa/adicionar-despesa.module#AdicionarDespesaPageModule', name: 'AdicionarDespesaPage', segment: 'adicionar-despesa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/adicionar-receita/adicionar-receita.module#AdicionarReceitaPageModule', name: 'AdicionarReceitaPage', segment: 'adicionar-receita', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/alterar-foto/alterar-foto.module#AlterarFotoPageModule', name: 'AlterarFotoPage', segment: 'alterar-foto', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/alterar-email/alterar-email.module#AlterarEmailPageModule', name: 'AlterarEmailPage', segment: 'alterar-email', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/alterar-senha/alterar-senha.module#AlterarSenhaPageModule', name: 'AlterarSenhaPage', segment: 'alterar-senha', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/index/index.module#IndexPageModule', name: 'IndexPage', segment: 'index', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/info-despesa/info-despesa.module#InfoDespesaPageModule', name: 'InfoDespesaPage', segment: 'info-despesa', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/carteira/carteira.module#CarteiraPageModule', name: 'CarteiraPage', segment: 'carteira', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lista-saldo/lista-saldo.module#ListaSaldoPageModule', name: 'ListaSaldoPage', segment: 'lista-saldo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/info-saldo/info-saldo.module#InfoSaldoPageModule', name: 'InfoSaldoPage', segment: 'info-saldo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/opcoespage/opcoespage.module#OpcoespagePageModule', name: 'OpcoespagePage', segment: 'opcoespage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab/tab.module#TabPageModule', name: 'TabPage', segment: 'tab', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_24_angular2_highcharts__["ChartModule"].forRoot('Highcharts')
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tab_tab__["a" /* TabPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_adicionar_receita_adicionar_receita__["a" /* AdicionarReceitaPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_adicionar_despesa_adicionar_despesa__["a" /* AdicionarDespesaPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_info_despesa_info_despesa__["a" /* InfoDespesaPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_lista_saldo_lista_saldo__["a" /* ListaSaldoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_info_saldo_info_saldo__["a" /* InfoSaldoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_opcoespage_opcoespage__["a" /* OpcoespagePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_alterar_email_alterar_email__["a" /* AlterarEmailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_alterar_foto_alterar_foto__["a" /* AlterarFotoPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_alterar_senha_alterar_senha__["a" /* AlterarSenhaPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_sobre_sobre__["a" /* SobrePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_14__providers_usuario_user_service__["a" /* UserService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.logOut = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        this.menuCtrl.enable(false);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/app/app.html"*/'\n\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/pedromartins/Documents/ionic_controleGasto/ionic-controledeGasto/myApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[301]);
//# sourceMappingURL=main.js.map