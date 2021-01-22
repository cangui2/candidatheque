(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recherche"],{

/***/ "./assets/index_recherche/index.js":
/*!*****************************************!*\
  !*** ./assets/index_recherche/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recherche__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recherche */ "./assets/index_recherche/recherche.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_recherche__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('villes'));

/***/ }),

/***/ "./assets/index_recherche/recherche.js":
/*!*********************************************!*\
  !*** ./assets/index_recherche/recherche.js ***!
  \*********************************************/
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
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap_typeahead_lib_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap-typeahead/lib/utils */ "./node_modules/react-bootstrap-typeahead/lib/utils/index.js");
/* harmony import */ var react_bootstrap_typeahead_lib_utils__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_typeahead_lib_utils__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");










function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function App() {
  // const param imput and select
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedValue = _useState4[0],
      setSelectedValue = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      inputValue2 = _useState6[0],
      setValue2 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedValue2 = _useState8[0],
      setSelectedValue2 = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      inputValue3 = _useState10[0],
      setValue3 = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedValue3 = _useState12[0],
      setSelectedValue3 = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(''),
      _useState14 = _slicedToArray(_useState13, 2),
      inputValue4 = _useState14[0],
      setValue4 = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      _useState16 = _slicedToArray(_useState15, 2),
      selectedValue4 = _useState16[0],
      setSelectedValue4 = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      _useState18 = _slicedToArray(_useState17, 2),
      data = _useState18[0],
      setdata = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      _useState20 = _slicedToArray(_useState19, 2),
      data2 = _useState20[0],
      setdata2 = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      _useState22 = _slicedToArray(_useState21, 2),
      data3 = _useState22[0],
      setdata3 = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null),
      _useState24 = _slicedToArray(_useState23, 2),
      data4 = _useState24[0],
      setdata4 = _useState24[1]; // handle input change event


  var handleInputChange = function handleInputChange(value) {
    setValue(value);
  };

  var handleInputChange2 = function handleInputChange2(value) {
    setValue(value);
  };

  var handleInputChange3 = function handleInputChange3(value) {
    setValue(value);
  };

  var handleInputChange4 = function handleInputChange4(value) {
    setValue(value);
  }; // handle selection


  var handleChange = function handleChange(value) {
    setSelectedValue(value);
    setdata(value.id);
  };

  var handleChange2 = function handleChange2(value) {
    setSelectedValue(value);
    setdata2(value.id);
  };

  var handleChange3 = function handleChange3(value) {
    setSelectedValue(value);
    setdata3(value.id);
  };

  var handleChange4 = function handleChange4(value) {
    setSelectedValue(value);
    setdata4(value.id);
  }; // load options using API call


  var loadOptions = function loadOptions(inputValue) {
    return fetch("https://127.0.0.1:8000/api/metiers?libelle=".concat(inputValue)).then(function (res) {
      return res.json();
    });
  };

  var loadOptions2 = function loadOptions2(inputValue) {
    return fetch("https://127.0.0.1:8000/api/villes?nom=".concat(inputValue)).then(function (res) {
      return res.json();
    });
  };

  var loadOptions3 = function loadOptions3(inputValue) {
    return fetch("https://127.0.0.1:8000/api/a_p_es?libelle=".concat(inputValue)).then(function (res) {
      return res.json();
    });
  };

  var loadOptions4 = function loadOptions4(inputValue) {
    return fetch("https://127.0.0.1:8000/api/type_contrats?libelle=".concat(inputValue)).then(function (res) {
      return res.json();
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(data, data2, data3, data4); // ... submit to API or something

    fetch('https://127.0.0.1:8000/recherche_liste=' + data + data2 + data3 + data4).then(function (res) {
      console.log(res.json());
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, null, "Profession"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_13__["default"], {
    placeholder: "",
    getOptionLabel: function getOptionLabel(e) {
      return e.libelle;
    },
    getOptionValue: function getOptionValue(e) {
      return e.id;
    },
    loadOptions: loadOptions,
    onInputChange: handleInputChange,
    onChange: handleChange,
    components: {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, null, "Villes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_13__["default"], {
    placeholder: "",
    getOptionLabel: function getOptionLabel(e) {
      return e.nom;
    },
    getOptionValue: function getOptionValue(e) {
      return e.id;
    },
    loadOptions: loadOptions2,
    onInputChange: handleInputChange2,
    onChange: handleChange2,
    components: {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, null, "Secteur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_13__["default"], {
    placeholder: "",
    getOptionLabel: function getOptionLabel(e) {
      return e.libelle;
    },
    getOptionValue: function getOptionValue(e) {
      return e.id;
    },
    loadOptions: loadOptions3,
    onInputChange: handleInputChange3,
    onChange: handleChange3,
    components: {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, null, "Type de contrat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_13__["default"], {
    placeholder: "",
    getOptionLabel: function getOptionLabel(e) {
      return e.libelle;
    },
    getOptionValue: function getOptionValue(e) {
      return e.id;
    },
    loadOptions: loadOptions4,
    onInputChange: handleInputChange4,
    onChange: handleChange4,
    components: {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    onClick: handleSubmit,
    type: "submit",
    className: "mb-2"
  }, "Recherche des offres"))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

},[["./assets/index_recherche/index.js","runtime","vendors~cv~react_recherche~recherche~sourcing~test_form","vendors~cv~recherche~sourcing","vendors~recherche"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaW5kZXhfcmVjaGVyY2hlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbmRleF9yZWNoZXJjaGUvcmVjaGVyY2hlLmpzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCIsInVzZVN0YXRlIiwiaW5wdXRWYWx1ZSIsInNldFZhbHVlIiwic2VsZWN0ZWRWYWx1ZSIsInNldFNlbGVjdGVkVmFsdWUiLCJpbnB1dFZhbHVlMiIsInNldFZhbHVlMiIsInNlbGVjdGVkVmFsdWUyIiwic2V0U2VsZWN0ZWRWYWx1ZTIiLCJpbnB1dFZhbHVlMyIsInNldFZhbHVlMyIsInNlbGVjdGVkVmFsdWUzIiwic2V0U2VsZWN0ZWRWYWx1ZTMiLCJpbnB1dFZhbHVlNCIsInNldFZhbHVlNCIsInNlbGVjdGVkVmFsdWU0Iiwic2V0U2VsZWN0ZWRWYWx1ZTQiLCJkYXRhIiwic2V0ZGF0YSIsImRhdGEyIiwic2V0ZGF0YTIiLCJkYXRhMyIsInNldGRhdGEzIiwiZGF0YTQiLCJzZXRkYXRhNCIsImhhbmRsZUlucHV0Q2hhbmdlIiwidmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZTIiLCJoYW5kbGVJbnB1dENoYW5nZTMiLCJoYW5kbGVJbnB1dENoYW5nZTQiLCJoYW5kbGVDaGFuZ2UiLCJpZCIsImhhbmRsZUNoYW5nZTIiLCJoYW5kbGVDaGFuZ2UzIiwiaGFuZGxlQ2hhbmdlNCIsImxvYWRPcHRpb25zIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImxvYWRPcHRpb25zMiIsImxvYWRPcHRpb25zMyIsImxvYWRPcHRpb25zNCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJsaWJlbGxlIiwiRHJvcGRvd25JbmRpY2F0b3IiLCJJbmRpY2F0b3JTZXBhcmF0b3IiLCJub20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFB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O0FBQUEsYUFBSUEsQ0FBQyxDQUFDYixFQUFOO0FBQUEsS0FKckI7QUFLSSxlQUFXLEVBQUVXLFlBTGpCO0FBTUksaUJBQWEsRUFBRWIsa0JBTm5CO0FBT0ksWUFBUSxFQUFFSyxhQVBkO0FBUUksY0FBVSxFQUFFO0FBQUVlLHVCQUFpQixFQUFDO0FBQUEsZUFBTSxJQUFOO0FBQUEsT0FBcEI7QUFBZ0NDLHdCQUFrQixFQUFDO0FBQUEsZUFBTSxJQUFOO0FBQUE7QUFBbkQ7QUFSaEIsSUF2Q0osZUFpREk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQSwyREFBQyx1REFBRDtBQUFRLFdBQU8sRUFBRVAsWUFBakI7QUFBK0IsUUFBSSxFQUFDLFFBQXBDO0FBQTZDLGFBQVMsRUFBQztBQUF2RCw0QkFEQSxDQWpESixDQURKLENBRko7QUE0REg7O0FBQ2M1QyxrRUFBZixFIiwiZmlsZSI6InJlY2hlcmNoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vcmVjaGVyY2hlJ1xyXG5cclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHJcbiAgICA8QXBwIC8+LFxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWxsZXMnKVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50ICwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge0NvbCwgRm9ybSxCdXR0b259IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHt2YWx1ZXN9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgQXN5bmNTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdC9hc3luY1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICAvLyBjb25zdCBwYXJhbSBpbXB1dCBhbmQgc2VsZWN0XHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVmFsdWUsIHNldFNlbGVjdGVkVmFsdWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZTIsIHNldFZhbHVlMl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRWYWx1ZTIsIHNldFNlbGVjdGVkVmFsdWUyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWUzLCBzZXRWYWx1ZTNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVmFsdWUzLCBzZXRTZWxlY3RlZFZhbHVlM10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlNCwgc2V0VmFsdWU0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFZhbHVlNCwgc2V0U2VsZWN0ZWRWYWx1ZTRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZGF0YSxzZXRkYXRhXT11c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtkYXRhMixzZXRkYXRhMl09dXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZGF0YTMsc2V0ZGF0YTNdPXVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2RhdGE0LHNldGRhdGE0XT11c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgaW5wdXQgY2hhbmdlIGV2ZW50XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IHZhbHVlID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSh2YWx1ZSk7XHJcblxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlMiA9IHZhbHVlID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UzID0gdmFsdWUgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZTQgPSB2YWx1ZSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gaGFuZGxlIHNlbGVjdGlvblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdmFsdWUgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHNldGRhdGEodmFsdWUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZTIgPSB2YWx1ZSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgc2V0ZGF0YTIodmFsdWUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZTMgPSB2YWx1ZSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgc2V0ZGF0YTModmFsdWUuaWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlNCA9IHZhbHVlID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZFZhbHVlKHZhbHVlKTtcclxuICAgICAgICBzZXRkYXRhNCh2YWx1ZS5pZCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGxvYWQgb3B0aW9ucyB1c2luZyBBUEkgY2FsbFxyXG4gICAgY29uc3QgbG9hZE9wdGlvbnMgPSAoaW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvbWV0aWVycz9saWJlbGxlPSR7aW5wdXRWYWx1ZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkT3B0aW9uczIgPSAoaW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdmlsbGVzP25vbT0ke2lucHV0VmFsdWV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZE9wdGlvbnMzID0gKGlucHV0VmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2FfcF9lcz9saWJlbGxlPSR7aW5wdXRWYWx1ZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkT3B0aW9uczQgPSAoaW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdHlwZV9jb250cmF0cz9saWJlbGxlPSR7aW5wdXRWYWx1ZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEsZGF0YTIsZGF0YTMsZGF0YTQpO1xyXG4gICAgICAgIC8vIC4uLiBzdWJtaXQgdG8gQVBJIG9yIHNvbWV0aGluZ1xyXG4gICAgICAgIGZldGNoKCdodHRwczovLzEyNy4wLjAuMTo4MDAwL3JlY2hlcmNoZV9saXN0ZT0nICsgZGF0YSArIGRhdGEyICsgZGF0YTMgKyBkYXRhNCkudGhlbiggKHJlcykgPT4gIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UHJvZmVzc2lvbjwvRm9ybS5MYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QXN5bmNTZWxlY3RcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXtlID0+IGUubGliZWxsZX1cclxuICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17ZSA9PiAgZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IERyb3Bkb3duSW5kaWNhdG9yOigpID0+IG51bGwsIEluZGljYXRvclNlcGFyYXRvcjooKSA9PiBudWxsIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VmlsbGVzPC9Gb3JtLkxhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxBc3luY1NlbGVjdFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9e2UgPT4gZS5ub219XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2UgPT4gZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnMyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlMn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlMn1cclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IERyb3Bkb3duSW5kaWNhdG9yOigpID0+IG51bGwsIEluZGljYXRvclNlcGFyYXRvcjooKSA9PiBudWxsIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+U2VjdGV1cjwvRm9ybS5MYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QXN5bmNTZWxlY3RcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXtlID0+IGUubGliZWxsZX1cclxuICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17ZSA9PiBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3B0aW9uczN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2UzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3sgRHJvcGRvd25JbmRpY2F0b3I6KCkgPT4gbnVsbCwgSW5kaWNhdG9yU2VwYXJhdG9yOigpID0+IG51bGwgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5UeXBlIGRlIGNvbnRyYXQ8L0Zvcm0uTGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFzeW5jU2VsZWN0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17ZSA9PiBlLmxpYmVsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2UgPT4gZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnM0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlNH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlNH1cclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7IERyb3Bkb3duSW5kaWNhdG9yOigpID0+IG51bGwsIEluZGljYXRvclNlcGFyYXRvcjooKSA9PiBudWxsIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWNoZXJjaGUgZGVzIG9mZnJlc1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=