(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test_form"],{

/***/ "./assets/test_form/App.js":
/*!*********************************!*\
  !*** ./assets/test_form/App.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_10__);









function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(data_form.nom.value),
      _useState2 = _slicedToArray(_useState, 2),
      nom = _useState2[0],
      setNom = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(data_form.prenom.value),
      _useState4 = _slicedToArray(_useState3, 2),
      prenom = _useState4[0],
      setPrenom = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(data_form.ville.value),
      _useState6 = _slicedToArray(_useState5, 2),
      ville = _useState6[0],
      setVille = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(data_form.nom.error),
      _useState8 = _slicedToArray(_useState7, 2),
      errorNom = _useState8[0],
      setErrorNom = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(data_form.prenom.error),
      _useState10 = _slicedToArray(_useState9, 2),
      errorPrenom = _useState10[0],
      setErrorPrenom = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(data_form.ville.error),
      _useState12 = _slicedToArray(_useState11, 2),
      errorVille = _useState12[0],
      setErrorVille = _useState12[1];

  var handleChangeNom = function handleChangeNom(evt) {
    setNom(evt.target.value);

    if (evt.target.value != "") {
      setErrorNom("");
    } else {
      setErrorNom("Ce champ ne peut pas être vide");
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "diego_nom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, null, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
    type: "text",
    placeholder: "Nom ...",
    name: "diego[nom]",
    value: nom,
    onChange: handleChangeNom,
    isInvalid: errorNom !== ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
    type: "invalid"
  }, errorNom)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "diego_prenom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, null, "Pr\xE9nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
    type: "text",
    placeholder: "Prenom ...",
    name: "diego[prenom]",
    value: prenom,
    onChange: function onChange(evt) {
      return setPrenom(evt.target.value);
    },
    isInvalid: errorPrenom !== ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
    type: "invalid"
  }, errorPrenom)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "diego_ville"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, null, "Ville"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
    type: "text",
    placeholder: "Ville ...",
    name: "diego[ville]",
    value: ville,
    onChange: function onChange(evt) {
      return setVille(evt.target.value);
    },
    isInvalid: errorVille !== ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
    type: "invalid"
  }, errorVille), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    variant: "primary",
    type: "submit"
  }, "Submit")));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./assets/test_form/index.js":
/*!***********************************!*\
  !*** ./assets/test_form/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./assets/test_form/App.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('test_form'));

/***/ })

},[["./assets/test_form/index.js","runtime","vendors~cv~react_recherche~test_form","vendors~react_recherche~test_form","vendors~test_form"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdGVzdF9mb3JtL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGVzdF9mb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInVzZVN0YXRlIiwiZGF0YV9mb3JtIiwibm9tIiwidmFsdWUiLCJzZXROb20iLCJwcmVub20iLCJzZXRQcmVub20iLCJ2aWxsZSIsInNldFZpbGxlIiwiZXJyb3IiLCJlcnJvck5vbSIsInNldEVycm9yTm9tIiwiZXJyb3JQcmVub20iLCJzZXRFcnJvclByZW5vbSIsImVycm9yVmlsbGUiLCJzZXRFcnJvclZpbGxlIiwiaGFuZGxlQ2hhbmdlTm9tIiwiZXZ0IiwidGFyZ2V0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxHQUFULEdBQWU7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFWLENBQWNDLEtBQWYsQ0FGaEI7QUFBQTtBQUFBLE1BRVBELEdBRk87QUFBQSxNQUVGRSxNQUZFOztBQUFBLG1CQUdjSixzREFBUSxDQUFDQyxTQUFTLENBQUNJLE1BQVYsQ0FBaUJGLEtBQWxCLENBSHRCO0FBQUE7QUFBQSxNQUdQRSxNQUhPO0FBQUEsTUFHQ0MsU0FIRDs7QUFBQSxtQkFJWU4sc0RBQVEsQ0FBQ0MsU0FBUyxDQUFDTSxLQUFWLENBQWdCSixLQUFqQixDQUpwQjtBQUFBO0FBQUEsTUFJUEksS0FKTztBQUFBLE1BSUFDLFFBSkE7O0FBQUEsbUJBS2tCUixzREFBUSxDQUFDQyxTQUFTLENBQUNDLEdBQVYsQ0FBY08sS0FBZixDQUwxQjtBQUFBO0FBQUEsTUFLUEMsUUFMTztBQUFBLE1BS0dDLFdBTEg7O0FBQUEsbUJBTXdCWCxzREFBUSxDQUFDQyxTQUFTLENB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QURGLENBREYsRUFJRUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBSkYsRSIsImZpbGUiOiJ0ZXN0X2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBSb3csIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cblxuZnVuY3Rpb24gQXBwKCkge1xuXG5cdGNvbnN0IFtub20sIHNldE5vbV0gPSB1c2VTdGF0ZShkYXRhX2Zvcm0ubm9tLnZhbHVlKTtcblx0Y29uc3QgW3ByZW5vbSwgc2V0UHJlbm9tXSA9IHVzZVN0YXRlKGRhdGFfZm9ybS5wcmVub20udmFsdWUpO1xuXHRjb25zdCBbdmlsbGUsIHNldFZpbGxlXSA9IHVzZVN0YXRlKGRhdGFfZm9ybS52aWxsZS52YWx1ZSk7XG5cdGNvbnN0IFtlcnJvck5vbSwgc2V0RXJyb3JOb21dID0gdXNlU3RhdGUoZGF0YV9mb3JtLm5vbS5lcnJvcik7XG5cdGNvbnN0IFtlcnJvclByZW5vbSwgc2V0RXJyb3JQcmVub21dID0gdXNlU3RhdGUoZGF0YV9mb3JtLnByZW5vbS5lcnJvcik7XG5cdGNvbnN0IFtlcnJvclZpbGxlLCBzZXRFcnJvclZpbGxlXSA9IHVzZVN0YXRlKGRhdGFfZm9ybS52aWxsZS5lcnJvcik7XG5cblx0Y29uc3QgaGFuZGxlQ2hhbmdlTm9tID0gKGV2dCkgPT4ge1xuXHRcdHNldE5vbShldnQudGFyZ2V0LnZhbHVlKTtcblx0XHRpZiAoZXZ0LnRhcmdldC52YWx1ZSE9XCJcIikge1xuXHRcdFx0c2V0RXJyb3JOb20oXCJcIilcblx0XHR9XG5cdFx0ZWxzZSB7IFxuXHRcdFx0c2V0RXJyb3JOb20oXCJDZSBjaGFtcCBuZSBwZXV0IHBhcyDDqnRyZSB2aWRlXCIpXG5cdFx0fVxuXHR9XG5cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG5cblx0XHRcdDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImRpZWdvX25vbVwiID5cblx0XHRcdFx0PEZvcm0uTGFiZWw+Tm9tPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHQ8Rm9ybS5Db250cm9sIFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJOb20gLi4uXCIgXG5cdFx0XHRcdFx0bmFtZT1cImRpZWdvW25vbV1cIiBcblx0XHRcdFx0XHR2YWx1ZT17bm9tfSBcblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTm9tfSBcblx0XHRcdFx0XHRpc0ludmFsaWQ9e2Vycm9yTm9tIT09XCJcIn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxuXHRcdFx0XHRcdHtlcnJvck5vbX1cbiAgICAgICAgICBcdFx0PC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XG5cdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cblx0XHRcdDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImRpZWdvX3ByZW5vbVwiPlxuXHRcdFx0XHQ8Rm9ybS5MYWJlbD5QcsOpbm9tPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHQ8Rm9ybS5Db250cm9sIFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQcmVub20gLi4uXCIgXG5cdFx0XHRcdFx0bmFtZT1cImRpZWdvW3ByZW5vbV1cIiBcblx0XHRcdFx0XHR2YWx1ZT17cHJlbm9tfSBcblx0XHRcdFx0XHRvbkNoYW5nZT17ZXZ0ID0+IHNldFByZW5vbShldnQudGFyZ2V0LnZhbHVlKX0gXG5cdFx0XHRcdFx0aXNJbnZhbGlkPXtlcnJvclByZW5vbSE9PVwiXCJ9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cblx0XHRcdFx0XHR7ZXJyb3JQcmVub219XG4gICAgICAgICAgXHRcdDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxuXHRcdFx0PC9Gb3JtLkdyb3VwPlxuXG5cdFx0XHQ8Rm9ybS5Hcm91cCBjb250cm9sSWQ9XCJkaWVnb192aWxsZVwiPlxuXHRcdFx0XHQ8Rm9ybS5MYWJlbD5WaWxsZTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0PEZvcm0uQ29udHJvbCBcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVmlsbGUgLi4uXCIgXG5cdFx0XHRcdFx0bmFtZT1cImRpZWdvW3ZpbGxlXVwiIFxuXHRcdFx0XHRcdHZhbHVlPXt2aWxsZX0gXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2V2dCA9PiBzZXRWaWxsZShldnQudGFyZ2V0LnZhbHVlKX0gXG5cdFx0XHRcdFx0aXNJbnZhbGlkPXtlcnJvclZpbGxlIT09XCJcIn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPlxuXHRcdFx0XHRcdHtlcnJvclZpbGxlfVxuICAgICAgICAgIFx0XHQ8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cblxuXHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiID5cblx0XHRcdFx0XHRTdWJtaXRcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cblxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxBcHAgLz5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RfZm9ybScpXG4pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9