(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["song-song-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/song/song-list/song-list.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/song/song-list/song-list.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th scope=\"col\">#</th>\n    <th scope=\"col\">Name</th>\n    <th scope=\"col\">Release Date</th>\n    <th scope=\"col\"></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let song of songList; index as i\">\n    <th scope=\"row\">{{ i + 1 }}</th>\n    <td>{{ song.name }}</td>\n    <td>{{ song.releaseDate | date }}</td>\n    <td>\n      <button (click)=\"addToPlaying(song, $event)\" [disabled]=\"song.isDisabled\" class=\"btn btn-primary\"><i\n        class=\"fas fa-play-circle\"></i></button>\n      <div class=\"d-inline-block\" ngbDropdown>\n        <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle><i\n          class=\"fas fa-ellipsis-h fa-1x\"></i></button>\n        <div aria-labelledby=\"dropdownBasic1\" ngbDropdownMenu>\n          <!--          <button ngbDropdownItem [routerLink]=\"['/playlist','add-to-playlist',song.id]\">Add to playlist</button>-->\n          <button ngbDropdownItem>Another Action</button>\n          <button ngbDropdownItem>Something else is here</button>\n        </div>\n      </div>\n    </td>\n    <td><a [routerLink]=\"['/song','edit', song.id]\">Edit</a></td>\n\n  </tr>\n  </tbody>\n</table>\n<ngb-pagination\n  [(page)]=\"pageNumber\"\n  [collectionSize]=\"totalItems\"\n  [pageSize]=\"pageSize\"></ngb-pagination>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/song/song/song.component.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/song/song/song.component.html ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/song/upload-song/upload-song.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/song/upload-song/upload-song.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"upload()\" [formGroup]=\"songUploadForm\">\n  <div class=\"form-group\">\n    <label for=\"songName\">Song Name</label>\n    <input class=\"form-control\" formControlName=\"name\" id=\"songName\" placeholder=\"Enter song name\" type=\"text\">\n    <div *ngIf=\"songUploadForm.get('name').hasError('required') && songUploadForm.get('name').touched\"\n         class=\"alert alert-danger\" role=\"alert\">\n      Must be filled!\n    </div>\n  </div>\n\n  <div *ngFor=\"let artist of artists.controls; let i = index;\" class=\"form-group\"\n       formArrayName=\"artists\">\n    <div [formGroupName]=\"i\">\n      <mat-form-field>\n        <label for=\"artistName\">{{ 'Artist ' + (i + 1) + ' name' }}\n          <input [matAutocomplete]=\"auto\" [placeholder]=\"'Artist ' + (i + 1) + ' name'\" class=\"form-control\"\n                 formControlName=\"name\" id=\"artistName\" matInput type=\"text\">\n        </label>\n        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n            {{option.name}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      <input class=\"form-control\" formControlName=\"birthDate\" placeholder=\"Birth Date\" type=\"date\">\n    </div>\n\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"releaseDate\">Release Date</label>\n    <input class=\"form-control\" formControlName=\"releaseDate\" id=\"releaseDate\" placeholder=\"yyyy-mm-dd\" type=\"date\">\n    <div *ngIf=\"songUploadForm.get('releaseDate').hasError('required') && songUploadForm.get('releaseDate').touched\"\n         class=\"alert alert-danger\" role=\"alert\">\n      Must be filled!\n    </div>\n  </div>\n\n  <label for=\"audio\">Audio File</label>\n  <div class=\"form-group custom-file\">\n\n    <label *ngIf=!isAudioFileChosen class=\"custom-file-label\">Choose file</label>\n    <label *ngIf=isAudioFileChosen class=\"custom-file-label\">{{ audioFileName }}</label>\n    <input (change)=\"selectFile($event)\" class=\"custom-file-input\" id=\"audio\" type=\"file\">\n  </div>\n  <div class=\"mt-sm-3\">\n    <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n  </div>\n  <span *ngIf=\"message\">{{ message }}</span>\n  <div *ngIf=\"progress > 0\" class=\"progress form-group\">\n    <div [style.width.%]=\"progress\" class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\">\n    </div>\n  </div>\n</form>\n\n<pre>{{songUploadForm.value | json}}</pre>\n");
            /***/ 
        }),
        /***/ "./src/app/service/add-song-to-playlist.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/service/add-song-to-playlist.service.ts ***!
          \*********************************************************/
        /*! exports provided: AddSongToPlaylistService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSongToPlaylistService", function () { return AddSongToPlaylistService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AddSongToPlaylistService = /** @class */ (function () {
                function AddSongToPlaylistService() {
                    this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.changeEmitter$ = this.emitChangeSource.asObservable();
                }
                AddSongToPlaylistService.prototype.emitChange = function (change) {
                    this.emitChangeSource.next(change);
                };
                return AddSongToPlaylistService;
            }());
            AddSongToPlaylistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AddSongToPlaylistService);
            /***/ 
        }),
        /***/ "./src/app/service/audio-upload.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/service/audio-upload.service.ts ***!
          \*************************************************/
        /*! exports provided: AudioUploadService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioUploadService", function () { return AudioUploadService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AudioUploadService = /** @class */ (function () {
                function AudioUploadService(http) {
                    this.http = http;
                }
                AudioUploadService.prototype.uploadSong = function (formData) {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/song/upload", formData, {
                        reportProgress: true,
                        observe: 'events'
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorMgmt));
                };
                AudioUploadService.prototype.errorMgmt = function (error) {
                    var errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // Get client-side error
                        errorMessage = error.error.message;
                    }
                    else {
                        // Get server-side error
                        errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
                    }
                    console.log(errorMessage);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
                };
                return AudioUploadService;
            }());
            AudioUploadService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            AudioUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AudioUploadService);
            /***/ 
        }),
        /***/ "./src/app/song/song-list/song-list.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/song/song-list/song-list.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".dropdown-toggle::after {\n  content: initial;\n}\n\nbutton {\n  margin-right: 0.5rem;\n}\n\n* {\n  color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Njb3BleC9tb2R1bGU0LXByb2plY3QtbW9zLWZyb250ZW5kL3NyYy9hcHAvc29uZy9zb25nLWxpc3Qvc29uZy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zb25nL3NvbmctbGlzdC9zb25nLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zb25nL3NvbmctbGlzdC9zb25nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGNvbnRlbnQ6IGluaXRpYWxcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbioge1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuIiwiLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBpbml0aWFsO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuKiB7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/song/song-list/song-list.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/song/song-list/song-list.component.ts ***!
          \*******************************************************/
        /*! exports provided: SongListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListComponent", function () { return SongListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/song.service */ "./src/app/service/song.service.ts");
            /* harmony import */ var _service_add_song_to_playlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/add-song-to-playlist.service */ "./src/app/service/add-song-to-playlist.service.ts");
            /* harmony import */ var _service_playing_queue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/playing-queue.service */ "./src/app/service/playing-queue.service.ts");
            /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
            var SongListComponent = /** @class */ (function () {
                function SongListComponent(songService, addSongToPlaylistService, playingQueueService, userService) {
                    var _this = this;
                    this.songService = songService;
                    this.addSongToPlaylistService = addSongToPlaylistService;
                    this.playingQueueService = playingQueueService;
                    this.userService = userService;
                    this.userService.currentUser.subscribe(function (currentUser) {
                        _this.currentUser = currentUser;
                    });
                }
                SongListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.songService.getSongList().subscribe(function (result) {
                        if (result != null) {
                            _this.songList = result.content;
                            _this.songList.forEach(function (value, index) {
                                _this.songList[index].isDisabled = false;
                            });
                            _this.pageNumber = result.pageable.pageNumber;
                            _this.pageSize = result.pageable.pageSize;
                        }
                    }, function (error) {
                        _this.message = 'Cannot retrieve song list. Cause: ' + error.songsMessage;
                    });
                };
                SongListComponent.prototype.addToPlaylist = function (song) {
                    song.isDisabled = true;
                    this.addSongToPlaylistService.emitChange(song);
                };
                SongListComponent.prototype.addToPlaying = function (song, event) {
                    event.stopPropagation();
                    this.playingQueueService.addToQueue(song);
                };
                return SongListComponent;
            }());
            SongListComponent.ctorParameters = function () { return [
                { type: _service_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"] },
                { type: _service_add_song_to_playlist_service__WEBPACK_IMPORTED_MODULE_3__["AddSongToPlaylistService"] },
                { type: _service_playing_queue_service__WEBPACK_IMPORTED_MODULE_4__["PlayingQueueService"] },
                { type: _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
            ]; };
            SongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-song-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/song/song-list/song-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./song-list.component.scss */ "./src/app/song/song-list/song-list.component.scss")).default]
                })
            ], SongListComponent);
            /***/ 
        }),
        /***/ "./src/app/song/song-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/song/song-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: SongRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongRoutingModule", function () { return SongRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _song_song_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./song/song.component */ "./src/app/song/song/song.component.ts");
            /* harmony import */ var _upload_song_upload_song_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-song/upload-song.component */ "./src/app/song/upload-song/upload-song.component.ts");
            /* harmony import */ var _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song-list/song-list.component */ "./src/app/song/song-list/song-list.component.ts");
            var routes = [
                {
                    path: '',
                    redirectTo: 'list',
                    pathMatch: 'full'
                },
                {
                    path: '',
                    component: _song_song_component__WEBPACK_IMPORTED_MODULE_3__["SongComponent"],
                    children: [
                        {
                            path: 'upload',
                            component: _upload_song_upload_song_component__WEBPACK_IMPORTED_MODULE_4__["UploadSongComponent"]
                        },
                        {
                            path: 'list',
                            component: _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_5__["SongListComponent"]
                        }
                    ]
                }
            ];
            var SongRoutingModule = /** @class */ (function () {
                function SongRoutingModule() {
                }
                return SongRoutingModule;
            }());
            SongRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], SongRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/song/song.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/song/song.module.ts ***!
          \*************************************/
        /*! exports provided: SongModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongModule", function () { return SongModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _song_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./song-routing.module */ "./src/app/song/song-routing.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _song_song_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./song/song.component */ "./src/app/song/song/song.component.ts");
            /* harmony import */ var _upload_song_upload_song_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload-song/upload-song.component */ "./src/app/song/upload-song/upload-song.component.ts");
            /* harmony import */ var _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./song-list/song-list.component */ "./src/app/song/song-list/song-list.component.ts");
            var SongModule = /** @class */ (function () {
                function SongModule() {
                }
                return SongModule;
            }());
            SongModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_song_song_component__WEBPACK_IMPORTED_MODULE_8__["SongComponent"], _upload_song_upload_song_component__WEBPACK_IMPORTED_MODULE_9__["UploadSongComponent"], _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_10__["SongListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _song_routing_module__WEBPACK_IMPORTED_MODULE_3__["SongRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"]
                    ],
                    exports: [_song_song_component__WEBPACK_IMPORTED_MODULE_8__["SongComponent"], _upload_song_upload_song_component__WEBPACK_IMPORTED_MODULE_9__["UploadSongComponent"], _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_10__["SongListComponent"]]
                })
            ], SongModule);
            /***/ 
        }),
        /***/ "./src/app/song/song/song.component.scss": 
        /*!***********************************************!*\
          !*** ./src/app/song/song/song.component.scss ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nvbmcvc29uZy9zb25nLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/song/song/song.component.ts": 
        /*!*********************************************!*\
          !*** ./src/app/song/song/song.component.ts ***!
          \*********************************************/
        /*! exports provided: SongComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongComponent", function () { return SongComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SongComponent = /** @class */ (function () {
                function SongComponent() {
                }
                SongComponent.prototype.ngOnInit = function () {
                };
                return SongComponent;
            }());
            SongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-song',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/song/song/song.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./song.component.scss */ "./src/app/song/song/song.component.scss")).default]
                })
            ], SongComponent);
            /***/ 
        }),
        /***/ "./src/app/song/upload-song/upload-song.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/song/upload-song/upload-song.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("* {\n  color: aliceblue;\n}\n\ninput {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Njb3BleC9tb2R1bGU0LXByb2plY3QtbW9zLWZyb250ZW5kL3NyYy9hcHAvc29uZy91cGxvYWQtc29uZy91cGxvYWQtc29uZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc29uZy91cGxvYWQtc29uZy91cGxvYWQtc29uZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9zb25nL3VwbG9hZC1zb25nL3VwbG9hZC1zb25nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1pdC1idG4ge1xufVxuXG4qIHtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuaW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG59XG4iLCIqIHtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuaW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/song/upload-song/upload-song.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/song/upload-song/upload-song.component.ts ***!
          \***********************************************************/
        /*! exports provided: UploadSongComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadSongComponent", function () { return UploadSongComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _service_audio_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/audio-upload.service */ "./src/app/service/audio-upload.service.ts");
            var UploadSongComponent = /** @class */ (function () {
                function UploadSongComponent(audioUploadService, fb) {
                    this.audioUploadService = audioUploadService;
                    this.fb = fb;
                    this.isAudioFileChosen = false;
                    this.audioFileName = '';
                    this.progress = 0;
                    this.options = [];
                    this.formData = new FormData();
                }
                Object.defineProperty(UploadSongComponent.prototype, "artists", {
                    get: function () {
                        return this.songUploadForm.get('artists');
                    },
                    enumerable: true,
                    configurable: true
                });
                UploadSongComponent.prototype.ngOnInit = function () {
                    this.songUploadForm = this.fb.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        artists: this.fb.array([this.createArtist()]),
                        releaseDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                };
                UploadSongComponent.prototype.createArtist = function () {
                    return this.fb.group({
                        name: '',
                        birthDate: ''
                    });
                };
                UploadSongComponent.prototype.selectFile = function (event) {
                    if (event.target.files.length > 0) {
                        this.file = event.target.files[0];
                        this.isAudioFileChosen = true;
                        this.audioFileName = event.target.files[0].name;
                    }
                };
                UploadSongComponent.prototype.displayProgress = function (event, progress) {
                    switch (event.type) {
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Sent:
                            console.log('Request has been made!');
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].ResponseHeader:
                            console.log('Response header has been received!');
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
                            progress = Math.round(event.loaded / event.total * 100);
                            console.log("Uploaded! " + progress + "%");
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
                            console.log('User successfully created!', event.body);
                            setTimeout(function () {
                                progress = 0;
                            }, 1500);
                    }
                };
                UploadSongComponent.prototype.upload = function () {
                    var _this = this;
                    this.formData.append('song', new Blob([JSON.stringify(this.songUploadForm.value)], { type: 'application/json' }));
                    this.formData.append('audio', this.file);
                    this.audioUploadService.uploadSong(this.formData).subscribe(function (event) {
                        _this.message = 'Song uploaded successfully!';
                        _this.displayProgress(event, _this.progress);
                    }, function (error) {
                        _this.message = 'Failed to upload song';
                    });
                };
                UploadSongComponent.prototype.loadArtistList = function () {
                };
                UploadSongComponent.prototype.displayFn = function (artist) {
                    return artist ? artist.name : undefined;
                };
                UploadSongComponent.prototype._filter = function (name) {
                    var filterValue = name.toLowerCase();
                    return this.options.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
                };
                return UploadSongComponent;
            }());
            UploadSongComponent.ctorParameters = function () { return [
                { type: _service_audio_upload_service__WEBPACK_IMPORTED_MODULE_4__["AudioUploadService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            UploadSongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-upload-song',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-song.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/song/upload-song/upload-song.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-song.component.scss */ "./src/app/song/upload-song/upload-song.component.scss")).default]
                })
            ], UploadSongComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=song-song-module-es2015.js.map
//# sourceMappingURL=song-song-module-es5.js.map
//# sourceMappingURL=song-song-module-es5.js.map