(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react_recherche"],{

/***/ "./assets/react_recherche.js":
/*!***********************************!*\
  !*** ./assets/react_recherche.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-typeahead */ "./node_modules/react-bootstrap-typeahead/es/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap_typeahead_css_Typeahead_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap-typeahead/css/Typeahead.css */ "./node_modules/react-bootstrap-typeahead/css/Typeahead.css");
/* harmony import */ var react_bootstrap_typeahead_css_Typeahead_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_typeahead_css_Typeahead_css__WEBPACK_IMPORTED_MODULE_6__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // import options from './data';
// import 'bootstrap/dist/css/bootstrap.min.css';


var SEARCH_URI = 'https://test.candidatheque.com/api/metiers';

var BasicExample = function BasicExample() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      singleSelections = _useState2[0],
      setSingleSelections = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      options = _useState6[0],
      setOptions = _useState6[1];

  var recherche = function recherche(query) {
    console.log("test");
    setIsLoading(true);
    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(SEARCH_URI, "?libelle=").concat(query)).then(function (resp) {
      return resp.json();
    }).then(function (items) {
      setOptions(items);
      setIsLoading(false);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "M\xE9tier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_3__["AsyncTypeahead"], {
    isLoading: isLoading,
    id: "basic-typeahead-single",
    labelKey: "libelle",
    onChange: setSingleSelections,
    options: options,
    placeholder: "",
    selected: singleSelections,
    minLength: 3,
    onSearch: recherche,
    renderMenuItemChildren: function renderMenuItemChildren(option, props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, option.libelle);
    }
  })));
};
/* example-end */


react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BasicExample, null), document.getElementById('root'));

/***/ })

},[["./assets/react_recherche.js","runtime","vendors~cv~home_recherche~react_recherche~recherche~sourcing~test_form","vendors~react_recherche~test_form","vendors~react_recherche"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3RfcmVjaGVyY2hlLmpzIl0sIm5hbWVzIjpbIlNFQVJDSF9VUkkiLCJCYXNpY0V4YW1wbGUiLCJ1c2VTdGF0ZSIsInNpbmdsZVNlbGVjdGlvbnMiLCJzZXRTaW5nbGVTZWxlY3Rpb25zIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJyZWNoZXJjaGUiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsIml0ZW1zIiwib3B0aW9uIiwicHJvcHMiLCJsaWJlbGxlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUVBOztBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFHLDRDQUFuQjs7QUFHQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUEsa0JBQ3VCQyxzREFBUSxDQUFDLEVBQUQsQ0FEL0I7QUFBQTtBQUFBLE1BQ2xCQyxnQkFEa0I7QUFBQSxNQUNBQyxtQkFEQTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxLQUFELENBRmpCO0FBQUE7QUFBQSxNQUVsQkcsU0FGa0I7QUFBQSxNQUVQQyxZQUZPOztBQUFBLG1CQUdLSixzREFBUSxDQUFDLEVBQUQsQ0FIYjtBQUFBO0FBQUEsTUFHbEJLLE9BSGtCO0FBQUEsTUFHVEMsVUFIUzs7QUFLekIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FOLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBRUFPLDJEQUFLLFdBQUliLFVBQUosc0JBQTBCVSxLQUExQixFQUFMLENBQ0NJLElBREQsQ0FDTSxVQUFDQyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDQyxJQUFMLEVBQVY7QUFBQSxLQUROLEVBRUNGLElBRkQsQ0FFTSxVQUFDRyxLQUFELEVBQVc7QUFHYlQsZ0JBQVUsQ0FBQ1MsS0FBRCxDQUFWO0FBQ0FYLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0gsS0FQRDtBQVFMLEdBWkQ7O0FBY0Esc0JBQ0UsMkRBQUMsOENBQUQscUJBQ0UsMkRBQUMsb0RBQUQsQ0FBTSxLQUFOLHFCQUNFLDJEQUFDLG9EQUFELENBQU0sS0FBTixvQkFERixlQUVFLDJEQUFDLHdFQUFEO0FBQ0ksYUFBUyxFQUFFRCxTQURmO0FBRUksTUFBRSxFQUFDLHdCQUZQO0FBR0ksWUFBUSxFQUFDLFNBSGI7QUFJSSxZQUFRLEVBQUVELG1CQUpkO0FBS0ksV0FBTyxFQUFFRyxPQUxiO0FBTUksZUFBVyxFQUFDLEVBTmhCO0FBT0ksWUFBUSxFQUFFSixnQkFQZDtBQVFJLGFBQVMsRUFBRSxDQVJmO0FBU0ksWUFBUSxFQUFFTSxTQVRkO0FBVUksMEJBQXNCLEVBQUUsZ0NBQUNTLE1BQUQsRUFBU0MsS0FBVDtBQUFBLDBCQUVsQix5RUFBT0QsTUFBTSxDQUFDRSxPQUFkLENBRmtCO0FBQUE7QUFWNUIsSUFGRixDQURGLENBREY7QUF1QkQsQ0ExQ0Q7QUEyQ0E7OztBQUVBQyxnREFBUSxDQUFDQyxNQUFULGVBQWdCLDJEQUFDLFlBQUQsT0FBaEIsRUFBa0NDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFsQyxFIiwiZmlsZSI6InJlYWN0X3JlY2hlcmNoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXN5bmNUeXBlYWhlYWQgIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbi8vIGltcG9ydCBvcHRpb25zIGZyb20gJy4vZGF0YSc7XHJcblxyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAncmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9jc3MvVHlwZWFoZWFkLmNzcyc7XHJcblxyXG5cclxuY29uc3QgU0VBUkNIX1VSSSA9ICdodHRwczovL3Rlc3QuY2FuZGlkYXRoZXF1ZS5jb20vYXBpL21ldGllcnMnO1xyXG5cclxuXHJcbmNvbnN0IEJhc2ljRXhhbXBsZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2luZ2xlU2VsZWN0aW9ucywgc2V0U2luZ2xlU2VsZWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHJlY2hlcmNoZSA9IChxdWVyeSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgIGZldGNoKGAke1NFQVJDSF9VUkl9P2xpYmVsbGU9JHtxdWVyeX1gKVxyXG4gICAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcclxuICAgICAgICAudGhlbigoaXRlbXMpID0+IHtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBzZXRPcHRpb25zKGl0ZW1zKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgIDxGb3JtLkxhYmVsPk3DqXRpZXI8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgPEFzeW5jVHlwZWFoZWFkXHJcbiAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICBpZD1cImJhc2ljLXR5cGVhaGVhZC1zaW5nbGVcIlxyXG4gICAgICAgICAgICBsYWJlbEtleT1cImxpYmVsbGVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0U2luZ2xlU2VsZWN0aW9uc31cclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICBzZWxlY3RlZD17c2luZ2xlU2VsZWN0aW9uc31cclxuICAgICAgICAgICAgbWluTGVuZ3RoPXszfVxyXG4gICAgICAgICAgICBvblNlYXJjaD17cmVjaGVyY2hlfVxyXG4gICAgICAgICAgICByZW5kZXJNZW51SXRlbUNoaWxkcmVuPXsob3B0aW9uLCBwcm9wcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntvcHRpb24ubGliZWxsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuLyogZXhhbXBsZS1lbmQgKi9cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QmFzaWNFeGFtcGxlIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==