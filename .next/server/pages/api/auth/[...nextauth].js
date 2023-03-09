"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sdURBQXNEO0FBQ3hFLENBQUM7QUFFRCxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUF5QixFQUFlO0lBQzFDLCtEQUErRDtJQUMvRCw2RUFBNkU7SUFDN0UsSUFBSSxDQUFDUSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQkgsU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0ssS0FBS0M7UUFDOUJHLE9BQU9DLG1CQUFtQixHQUFHSCxPQUFPSSxPQUFPO0lBQzdDLENBQUM7SUFDREgsZ0JBQWdCQyxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUYsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLnRzPzA1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xuXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKVxufVxuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxuY29uc3Qgb3B0aW9ucyA9IHt9XG5cbmxldCBjbGllbnRcbmxldCBjbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PlxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n\n\n\n\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    // Configure one or more authentication providers\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            type: \"credentials\",\n            credentials: {},\n            async authorize (credentials, req) {\n                const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n                const db = client.db(\"test\");\n                const { email , password  } = credentials;\n                const user = await db.collection(\"users\").findOne({\n                    email: email,\n                    password: password\n                });\n                console.log(\"user found \", user);\n                if (user) {\n                    // Any object returned will be saved in `user` property of the JWT\n                    return user;\n                } else {\n                    // If you return null then an error will be displayed advising the user to check their details.\n                    return null;\n                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter\n                }\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/\",\n        signOut: \"/\",\n        error: \"/auth/error\",\n        verifyRequest: \"/auth/verify-request\",\n        newUser: \"/auth/new-user\" // New users will be directed here on first sign in (leave the property out if not of interest)\n    },\n    callbacks: {\n        jwt (params) {\n            // update token\n            if (params.user?.role) {\n                params.token.role = params.user.role;\n            }\n            // return final_token\n            return params.token;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ1k7QUFDUDtBQUNYO0FBRWhELE1BQU1JLGNBQStCO0lBQ25DQyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBLGlEQUFpRDtJQUNqREMsU0FBU0wsMEVBQWNBLENBQUNDLG9EQUFhQTtJQUNyQ0ssV0FBVztRQUNUUCxzRUFBbUJBLENBQUM7WUFDbEJRLE1BQU07WUFDTkMsYUFBYSxDQUFDO1lBQ2QsTUFBTUMsV0FBVUQsV0FBVyxFQUFFRSxHQUFHLEVBQUU7Z0JBQ2hDLE1BQU1DLFNBQVMsTUFBTVYsb0RBQWFBO2dCQUNsQyxNQUFNVyxLQUFLRCxPQUFPQyxFQUFFLENBQUM7Z0JBQ3JCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR047Z0JBSzVCLE1BQU1PLE9BQU8sTUFBTUgsR0FBR0ksVUFBVSxDQUFDLFNBQVNDLE9BQU8sQ0FBQztvQkFDaERKLE9BQU9BO29CQUNQQyxVQUFXQTtnQkFDYjtnQkFFQUksUUFBUUMsR0FBRyxDQUFDLGVBQWVKO2dCQUMzQixJQUFJQSxNQUFNO29CQUNSLGtFQUFrRTtvQkFDbEUsT0FBT0E7Z0JBQ1QsT0FBTztvQkFDTCwrRkFBK0Y7b0JBQy9GLE9BQU8sSUFBSTtnQkFFWCwySUFBMkk7Z0JBQzdJLENBQUM7WUFDSDtRQUNGO0tBQ0Q7SUFDREssT0FBTztRQUNMQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsT0FBTztRQUNQQyxlQUFlO1FBQ2ZDLFNBQVMsaUJBQWlCLCtGQUErRjtJQUMzSDtJQUVBQyxXQUFXO1FBQ1RDLEtBQUlDLE1BQU0sRUFBRTtZQUNWLGVBQWU7WUFDZixJQUFJQSxPQUFPYixJQUFJLEVBQUVjLE1BQU07Z0JBQ3JCRCxPQUFPRSxLQUFLLENBQUNELElBQUksR0FBR0QsT0FBT2IsSUFBSSxDQUFDYyxJQUFJO1lBQ3RDLENBQUM7WUFFRCxxQkFBcUI7WUFDckIsT0FBT0QsT0FBT0UsS0FBSztRQUNyQjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZWhDLGdEQUFRQSxDQUFDSSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXJcIlxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCJcblxuY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIHR5cGU6IFwiY3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7fSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7ICAgICAgICBcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcbiAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJ0ZXN0XCIpO1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHMgYXMge1xuICAgICAgICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmZpbmRPbmUoe1xuICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZCA6IHBhc3N3b3JkXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGZvdW5kIFwiICx1c2VyKVxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIC8vIEFueSBvYmplY3QgcmV0dXJuZWQgd2lsbCBiZSBzYXZlZCBpbiBgdXNlcmAgcHJvcGVydHkgb2YgdGhlIEpXVFxuICAgICAgICAgIHJldHVybiB1c2VyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgeW91IHJldHVybiBudWxsIHRoZW4gYW4gZXJyb3Igd2lsbCBiZSBkaXNwbGF5ZWQgYWR2aXNpbmcgdGhlIHVzZXIgdG8gY2hlY2sgdGhlaXIgZGV0YWlscy5cbiAgICAgICAgICByZXR1cm4gbnVsbFxuICBcbiAgICAgICAgICAvLyBZb3UgY2FuIGFsc28gUmVqZWN0IHRoaXMgY2FsbGJhY2sgd2l0aCBhbiBFcnJvciB0aHVzIHRoZSB1c2VyIHdpbGwgYmUgc2VudCB0byB0aGUgZXJyb3IgcGFnZSB3aXRoIHRoZSBlcnJvciBtZXNzYWdlIGFzIGEgcXVlcnkgcGFyYW1ldGVyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy8nLFxuICAgIHNpZ25PdXQ6ICcvJyxcbiAgICBlcnJvcjogJy9hdXRoL2Vycm9yJywgLy8gRXJyb3IgY29kZSBwYXNzZWQgaW4gcXVlcnkgc3RyaW5nIGFzID9lcnJvcj1cbiAgICB2ZXJpZnlSZXF1ZXN0OiAnL2F1dGgvdmVyaWZ5LXJlcXVlc3QnLCAvLyAodXNlZCBmb3IgY2hlY2sgZW1haWwgbWVzc2FnZSlcbiAgICBuZXdVc2VyOiAnL2F1dGgvbmV3LXVzZXInIC8vIE5ldyB1c2VycyB3aWxsIGJlIGRpcmVjdGVkIGhlcmUgb24gZmlyc3Qgc2lnbiBpbiAobGVhdmUgdGhlIHByb3BlcnR5IG91dCBpZiBub3Qgb2YgaW50ZXJlc3QpXG4gIH0sXG4gIFxuICBjYWxsYmFja3M6IHtcbiAgICBqd3QocGFyYW1zKSB7XG4gICAgICAvLyB1cGRhdGUgdG9rZW5cbiAgICAgIGlmIChwYXJhbXMudXNlcj8ucm9sZSkge1xuICAgICAgICBwYXJhbXMudG9rZW4ucm9sZSA9IHBhcmFtcy51c2VyLnJvbGU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIHJldHVybiBmaW5hbF90b2tlblxuICAgICAgcmV0dXJuIHBhcmFtcy50b2tlbjtcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsImF1dGhPcHRpb25zIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwiYWRhcHRlciIsInByb3ZpZGVycyIsInR5cGUiLCJjcmVkZW50aWFscyIsImF1dGhvcml6ZSIsInJlcSIsImNsaWVudCIsImRiIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlcyIsInNpZ25JbiIsInNpZ25PdXQiLCJlcnJvciIsInZlcmlmeVJlcXVlc3QiLCJuZXdVc2VyIiwiY2FsbGJhY2tzIiwiand0IiwicGFyYW1zIiwicm9sZSIsInRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();