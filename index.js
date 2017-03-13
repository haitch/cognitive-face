/**
 * Face API - V1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var Promise = require("bluebird");
var defaultBasePath = 'https://westus.api.cognitive.microsoft.com/face/v1.0';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
/* tslint:disable:no-unused-variable */
var FaceDetectByUrl = (function () {
    function FaceDetectByUrl() {
    }
    return FaceDetectByUrl;
}());
exports.FaceDetectByUrl = FaceDetectByUrl;
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
var DefaultApiApiKeys;
(function (DefaultApiApiKeys) {
})(DefaultApiApiKeys = exports.DefaultApiApiKeys || (exports.DefaultApiApiKeys = {}));
var DefaultApi = (function () {
    function DefaultApi(basePathOrUsername, password, basePath) {
        this.basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(DefaultApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    DefaultApi.prototype.setApiKey = function (key, value) {
        this.authentications[DefaultApiApiKeys[key]].apiKey = value;
    };
    /**
     *
     * Detect **human faces** in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.
     * @param imageUrl
     * @param ocpApimSubscriptionKey subscription key in header
     * @param returnFaceId Return faceIds of the detected faces or not. The default value is true.
     * @param returnFaceLandmarks Return face landmarks of the detected faces or not. The default value is false.
     */
    DefaultApi.prototype.faceDetect = function (imageUrl, ocpApimSubscriptionKey, returnFaceId, returnFaceLandmarks) {
        var localVarPath = this.basePath + '/detect';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'imageUrl' is not null or undefined
        if (imageUrl === null || imageUrl === undefined) {
            throw new Error('Required parameter imageUrl was null or undefined when calling faceDetect.');
        }
        // verify required parameter 'ocpApimSubscriptionKey' is not null or undefined
        if (ocpApimSubscriptionKey === null || ocpApimSubscriptionKey === undefined) {
            throw new Error('Required parameter ocpApimSubscriptionKey was null or undefined when calling faceDetect.');
        }
        if (returnFaceId !== undefined) {
            queryParameters['returnFaceId'] = returnFaceId;
        }
        if (returnFaceLandmarks !== undefined) {
            queryParameters['returnFaceLandmarks'] = returnFaceLandmarks;
        }
        headerParams['Ocp-Apim-Subscription-Key'] = ocpApimSubscriptionKey;
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: imageUrl,
        };
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * Divide candidate faces into groups based on face similarity.
     * @param ocpApimSubscriptionKey subscription key in header
     */
    DefaultApi.prototype.faceGroup = function (ocpApimSubscriptionKey) {
        var localVarPath = this.basePath + '/group';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'ocpApimSubscriptionKey' is not null or undefined
        if (ocpApimSubscriptionKey === null || ocpApimSubscriptionKey === undefined) {
            throw new Error('Required parameter ocpApimSubscriptionKey was null or undefined when calling faceGroup.');
        }
        headerParams['Ocp-Apim-Subscription-Key'] = ocpApimSubscriptionKey;
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    /**
     *
     * Identify unknown faces from a person group.
     * @param ocpApimSubscriptionKey subscription key in header
     */
    DefaultApi.prototype.faceIdentify = function (ocpApimSubscriptionKey) {
        var localVarPath = this.basePath + '/identify';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        var formParams = {};
        // verify required parameter 'ocpApimSubscriptionKey' is not null or undefined
        if (ocpApimSubscriptionKey === null || ocpApimSubscriptionKey === undefined) {
            throw new Error('Required parameter ocpApimSubscriptionKey was null or undefined when calling faceIdentify.');
        }
        headerParams['Ocp-Apim-Subscription-Key'] = ocpApimSubscriptionKey;
        var useFormData = false;
        var requestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(requestOptions);
        if (Object.keys(formParams).length) {
            if (useFormData) {
                requestOptions.formData = formParams;
            }
            else {
                requestOptions.form = formParams;
            }
        }
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return DefaultApi;
}());
exports.DefaultApi = DefaultApi;