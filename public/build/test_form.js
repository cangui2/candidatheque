(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test_form"],{

/***/ "./assets/test_form/App.js":
/*!*********************************!*\
  !*** ./assets/test_form/App.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_3__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data_form.nom.value),
      _useState2 = _slicedToArray(_useState, 2),
      nom = _useState2[0],
      setNom = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data_form.prenom.value),
      _useState4 = _slicedToArray(_useState3, 2),
      prenom = _useState4[0],
      setPrenom = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data_form.ville.value),
      _useState6 = _slicedToArray(_useState5, 2),
      ville = _useState6[0],
      setVille = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data_form.nom.error),
      _useState8 = _slicedToArray(_useState7, 2),
      errorNom = _useState8[0],
      setErrorNom = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data_form.prenom.error),
      _useState10 = _slicedToArray(_useState9, 2),
      errorPrenom = _useState10[0],
      setErrorPrenom = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data_form.ville.error),
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "diego_nom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, null, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    placeholder: "Nom ...",
    name: "diego[nom]",
    value: nom,
    onChange: handleChangeNom,
    isInvalid: errorNom !== ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, errorNom)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "diego_prenom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, null, "Pr\xE9nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    placeholder: "Prenom ...",
    name: "diego[prenom]",
    value: prenom,
    onChange: function onChange(evt) {
      return setPrenom(evt.target.value);
    },
    isInvalid: errorPrenom !== ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, errorPrenom)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "diego_ville"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, null, "Ville"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    placeholder: "Ville ...",
    name: "diego[ville]",
    value: ville,
    onChange: function onChange(evt) {
      return setVille(evt.target.value);
    },
    isInvalid: errorVille !== ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid"
  }, errorVille), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
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

},[["./assets/test_form/index.js","runtime","vendors~cv~react_recherche~recherche~sourcing~test_form","vendors~cv~test_form","vendors~sourcing~test_form","vendors~react_recherche~test_form","vendors~test_form"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdGVzdF9mb3JtL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGVzdF9mb3JtL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInVzZVN0YXRlIiwiZGF0YV9mb3JtIiwibm9tIiwidmFsdWUiLCJzZXROb20iLCJwcmVub20iLCJzZXRQcmVub20iLCJ2aWxsZSIsInNldFZpbGxlIiwiZXJyb3IiLCJlcnJvck5vbSIsInNldEVycm9yTm9tIiwiZXJyb3JQcmVub20iLCJzZXRFcnJvclByZW5vbSIsImVycm9yVmlsbGUiLCJzZXRFcnJvclZpbGxlIiwiaGFuZGxlQ2hhbmdlTm9tIiwiZXZ0IiwidGFyZ2V0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxHQUFULEdBQWU7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFWLENBQWNDLEtBQWYsQ0FGaEI7QUFBQTtBQUFBLE1BRVBELEdBRk87QUFBQSxNQUVGRSxNQUZFOztBQUFBLG1CQUdjSixzREFBUSxDQUFDQyxTQUFTLENBQUNJLE1BQVYsQ0FBaUJGLEtBQWxCLENBSHRCO0FBQUE7QUFBQSxNQUdQRSxNQUhPO0FBQUEsTUFHQ0MsU0FIRDs7QUFBQSxtQkFJWU4sc0RBQVEsQ0FBQ0MsU0FBUyxDQUFDTSxLQUFWLENBQWdCSixLQUFqQixDQUpwQjtBQUFBO0FBQUEsTUFJUEksS0FKTztBQUFBLE1BSUFDLFFBSkE7O0FBQUEsbUJBS2tCUixzREFBUSxDQUFDQyxTQUFTLENBQUNDLEdBQVYsQ0FBY08sS0FBZixDQUwxQjtBQUFBO0FBQUEsTUFLUEMsUUFMTztBQUFBLE1BS0dDLFdBTEg7O0FBQUEsbUJBTXdCWCxzREFBUSxDQUFDQyxTQUFTLENBQUNJLE1BQVYsQ0FBaUJJLEtBQWxC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QUFDQyxjQUFULENBQXdCLFdBQXhCLENBSkYsRSIsImZpbGUiOiJ0ZXN0X2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIFJvdywgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0ICdib290c3RyYXAnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuXHJcblx0Y29uc3QgW25vbSwgc2V0Tm9tXSA9IHVzZVN0YXRlKGRhdGFfZm9ybS5ub20udmFsdWUpO1xyXG5cdGNvbnN0IFtwcmVub20sIHNldFByZW5vbV0gPSB1c2VTdGF0ZShkYXRhX2Zvcm0ucHJlbm9tLnZhbHVlKTtcclxuXHRjb25zdCBbdmlsbGUsIHNldFZpbGxlXSA9IHVzZVN0YXRlKGRhdGFfZm9ybS52aWxsZS52YWx1ZSk7XHJcblx0Y29uc3QgW2Vycm9yTm9tLCBzZXRFcnJvck5vbV0gPSB1c2VTdGF0ZShkYXRhX2Zvcm0ubm9tLmVycm9yKTtcclxuXHRjb25zdCBbZXJyb3JQcmVub20sIHNldEVycm9yUHJlbm9tXSA9IHVzZVN0YXRlKGRhdGFfZm9ybS5wcmVub20uZXJyb3IpO1xyXG5cdGNvbnN0IFtlcnJvclZpbGxlLCBzZXRFcnJvclZpbGxlXSA9IHVzZVN0YXRlKGRhdGFfZm9ybS52aWxsZS5lcnJvcik7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZU5vbSA9IChldnQpID0+IHtcclxuXHRcdHNldE5vbShldnQudGFyZ2V0LnZhbHVlKTtcclxuXHRcdGlmIChldnQudGFyZ2V0LnZhbHVlIT1cIlwiKSB7XHJcblx0XHRcdHNldEVycm9yTm9tKFwiXCIpXHJcblx0XHR9XHJcblx0XHRlbHNlIHsgXHJcblx0XHRcdHNldEVycm9yTm9tKFwiQ2UgY2hhbXAgbmUgcGV1dCBwYXMgw6p0cmUgdmlkZVwiKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG5cclxuXHRcdFx0PEZvcm0uR3JvdXAgY29udHJvbElkPVwiZGllZ29fbm9tXCIgPlxyXG5cdFx0XHRcdDxGb3JtLkxhYmVsPk5vbTwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHQ8Rm9ybS5Db250cm9sIFxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTm9tIC4uLlwiIFxyXG5cdFx0XHRcdFx0bmFtZT1cImRpZWdvW25vbV1cIiBcclxuXHRcdFx0XHRcdHZhbHVlPXtub219IFxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZU5vbX0gXHJcblx0XHRcdFx0XHRpc0ludmFsaWQ9e2Vycm9yTm9tIT09XCJcIn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuXHRcdFx0XHRcdHtlcnJvck5vbX1cclxuICAgICAgICAgIFx0XHQ8L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuXHRcdFx0PC9Gb3JtLkdyb3VwPlxyXG5cclxuXHRcdFx0PEZvcm0uR3JvdXAgY29udHJvbElkPVwiZGllZ29fcHJlbm9tXCI+XHJcblx0XHRcdFx0PEZvcm0uTGFiZWw+UHLDqW5vbTwvRm9ybS5MYWJlbD5cclxuXHRcdFx0XHQ8Rm9ybS5Db250cm9sIFxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUHJlbm9tIC4uLlwiIFxyXG5cdFx0XHRcdFx0bmFtZT1cImRpZWdvW3ByZW5vbV1cIiBcclxuXHRcdFx0XHRcdHZhbHVlPXtwcmVub219IFxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2V2dCA9PiBzZXRQcmVub20oZXZ0LnRhcmdldC52YWx1ZSl9IFxyXG5cdFx0XHRcdFx0aXNJbnZhbGlkPXtlcnJvclByZW5vbSE9PVwiXCJ9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+XHJcblx0XHRcdFx0XHR7ZXJyb3JQcmVub219XHJcbiAgICAgICAgICBcdFx0PC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcblx0XHRcdDwvRm9ybS5Hcm91cD5cclxuXHJcblx0XHRcdDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cImRpZWdvX3ZpbGxlXCI+XHJcblx0XHRcdFx0PEZvcm0uTGFiZWw+VmlsbGU8L0Zvcm0uTGFiZWw+XHJcblx0XHRcdFx0PEZvcm0uQ29udHJvbCBcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlZpbGxlIC4uLlwiIFxyXG5cdFx0XHRcdFx0bmFtZT1cImRpZWdvW3ZpbGxlXVwiIFxyXG5cdFx0XHRcdFx0dmFsdWU9e3ZpbGxlfSBcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtldnQgPT4gc2V0VmlsbGUoZXZ0LnRhcmdldC52YWx1ZSl9IFxyXG5cdFx0XHRcdFx0aXNJbnZhbGlkPXtlcnJvclZpbGxlIT09XCJcIn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5cclxuXHRcdFx0XHRcdHtlcnJvclZpbGxlfVxyXG4gICAgICAgICAgXHRcdDwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG5cclxuXHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiID5cclxuXHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0Zvcm0uR3JvdXA+XHJcblxyXG5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5cclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxyXG4gICAgPEFwcCAvPlxyXG4gIDwvUmVhY3QuU3RyaWN0TW9kZT4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RfZm9ybScpXHJcbik7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9