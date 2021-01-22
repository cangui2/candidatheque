(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recherche"],{

/***/ "./assets/index_recherche/recherche.js":
/*!*********************************************!*\
  !*** ./assets/index_recherche/recherche.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);




function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function App() {
  // const param imput and select
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      profession = _useState2[0],
      setProfession = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      ville = _useState4[0],
      setVille = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      secteur = _useState6[0],
      setSecteur = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      contrat = _useState8[0],
      setContrat = _useState8[1]; // handle selection


  var handleChange = function handleChange(value) {
    //setSelectedValue(value);
    setProfession(value.id);
  };

  var handleChange2 = function handleChange2(value) {
    // setSelectedValue(value);
    setVille(value.id);
  };

  var handleChange3 = function handleChange3(value) {
    // setSelectedValue(value);
    setSecteur(value.id);
  };

  var handleChange4 = function handleChange4(value) {
    //setSelectedValue(value);
    setContrat(value.id);
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
    placeholder: "Profession",
    value: profession.libelle,
    getOptionLabel: function getOptionLabel(e) {
      return e.libelle;
    },
    getOptionValue: function getOptionValue(e) {
      return e.id;
    },
    loadOptions: loadOptions,
    onChange: handleChange,
    components: {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
    placeholder: "Ville",
    getOptionLabel: function getOptionLabel(e) {
      return e.nom;
    },
    getOptionValue: function getOptionValue(e) {
      return e.id;
    },
    loadOptions: loadOptions2,
    onChange: handleChange2,
    components: {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
    placeholder: "Secteur",
    getOptionLabel: function getOptionLabel(e) {
      return e.libelle;
    },
    getOptionValue: function getOptionValue(e) {
      return e.id;
    },
    loadOptions: loadOptions3,
    onChange: handleChange3,
    components: {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
    placeholder: "Type contrat",
    getOptionLabel: function getOptionLabel(e) {
      return e.libelle;
    },
    getOptionValue: function getOptionValue(e) {
      return e.id;
    },
    loadOptions: loadOptions4,
    onChange: handleChange4,
    components: {
      DropdownIndicator: function DropdownIndicator() {
        return null;
      },
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    href: 'https://127.0.0.1:8000/recherche_liste?metier=' + profession + '&ville=' + ville + '&secteur=' + secteur + '&contrat=' + contrat,
    type: "button",
    className: "mb-2"
  }, "Recherche des offres")));
}

react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, null)), document.getElementById('list'));

/***/ })

},[["./assets/index_recherche/recherche.js","runtime","vendors~cv~home_recherche~react_recherche~recherche~sourcing~test_form","vendors~cv~home_recherche~recherche~sourcing","vendors~home_recherche~recherche"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaW5kZXhfcmVjaGVyY2hlL3JlY2hlcmNoZS5qcyJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsInByb2Zlc3Npb24iLCJzZXRQcm9mZXNzaW9uIiwidmlsbGUiLCJzZXRWaWxsZSIsInNlY3RldXIiLCJzZXRTZWN0ZXVyIiwiY29udHJhdCIsInNldENvbnRyYXQiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImlkIiwiaGFuZGxlQ2hhbmdlMiIsImhhbmRsZUNoYW5nZTMiLCJoYW5kbGVDaGFuZ2U0IiwibG9hZE9wdGlvbnMiLCJpbnB1dFZhbHVlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImxvYWRPcHRpb25zMiIsImxvYWRPcHRpb25zMyIsImxvYWRPcHRpb25zNCIsImxpYmVsbGUiLCJlIiwiRHJvcGRvd25JbmRpY2F0b3IiLCJJbmRpY2F0b3JTZXBhcmF0b3IiLCJub20iLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULEdBQWU7QUFDWDtBQURXLGtCQUV5QkMsc0RBQVEsQ0FBQyxFQUFELENBRmpDO0FBQUE7QUFBQSxNQUVKQyxVQUZJO0FBQUEsTUFFUUMsYUFGUjs7QUFBQSxtQkFHZUYsc0RBQVEsQ0FBQyxFQUFELENBSHZCO0FBQUE7QUFBQSxNQUdKRyxLQUhJO0FBQUEsTUFHR0MsUUFISDs7QUFBQSxtQkFJbUJKLHNEQUFRLENBQUMsRUFBRCxDQUozQjtBQUFBO0FBQUEsTUFJSkssT0FKSTtBQUFBLE1BSUtDLFVBSkw7O0FBQUEsbUJBS21CTixzREFBUSxDQUFDLEVBQUQsQ0FMM0I7QUFBQTtBQUFBLE1BS0pPLE9BTEk7QUFBQSxNQUtLQyxVQUxMLGtCQVNYOzs7QUFDQSxNQUFNQyxZQUFZ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LE9BQWxHLEdBQTRHLFdBQTVHLEdBQTBIRSxPQURwSTtBQUVJLFFBQUksRUFBQyxRQUZUO0FBRWtCLGFBQVMsRUFBQztBQUY1Qiw0QkFsREosQ0FESixDQURKO0FBNkRQOztBQUVEc0IsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLDRDQUFELENBQU8sVUFBUCxxQkFDSSwyREFBQyxHQUFELE9BREosQ0FESixFQUlJQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKSixFIiwiZmlsZSI6InJlY2hlcmNoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7Q29sLCBGb3JtLEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQXN5bmNTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdC9hc3luY1wiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgLy8gY29uc3QgcGFyYW0gaW1wdXQgYW5kIHNlbGVjdFxyXG4gICAgY29uc3QgW3Byb2Zlc3Npb24sIHNldFByb2Zlc3Npb25dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3ZpbGxlLCBzZXRWaWxsZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VjdGV1ciwgc2V0U2VjdGV1cl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY29udHJhdCwgc2V0Q29udHJhdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBoYW5kbGUgc2VsZWN0aW9uXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB2YWx1ZSA9PiB7XHJcbiAgICAgICAgLy9zZXRTZWxlY3RlZFZhbHVlKHZhbHVlKTtcclxuICAgICAgICBzZXRQcm9mZXNzaW9uKHZhbHVlLmlkKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlMiA9IHZhbHVlID0+IHtcclxuICAgICAgICAvLyBzZXRTZWxlY3RlZFZhbHVlKHZhbHVlKTtcclxuICAgICAgICBzZXRWaWxsZSh2YWx1ZS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlMyA9IHZhbHVlID0+IHtcclxuICAgICAgICAvLyBzZXRTZWxlY3RlZFZhbHVlKHZhbHVlKTtcclxuICAgICAgICBzZXRTZWN0ZXVyKHZhbHVlLmlkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZTQgPSB2YWx1ZSA9PiB7XHJcbiAgICAgICAgLy9zZXRTZWxlY3RlZFZhbHVlKHZhbHVlKTtcclxuICAgICAgICBzZXRDb250cmF0KHZhbHVlLmlkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gbG9hZCBvcHRpb25zIHVzaW5nIEFQSSBjYWxsXHJcbiAgICBjb25zdCBsb2FkT3B0aW9ucyA9IChpbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwczovLzEyNy4wLjAuMTo4MDAwL2FwaS9tZXRpZXJzP2xpYmVsbGU9JHtpbnB1dFZhbHVlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRPcHRpb25zMiA9IChpbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwczovLzEyNy4wLjAuMTo4MDAwL2FwaS92aWxsZXM/bm9tPSR7aW5wdXRWYWx1ZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkT3B0aW9uczMgPSAoaW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvYV9wX2VzP2xpYmVsbGU9JHtpbnB1dFZhbHVlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRPcHRpb25zNCA9IChpbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwczovLzEyNy4wLjAuMTo4MDAwL2FwaS90eXBlX2NvbnRyYXRzP2xpYmVsbGU9JHtpbnB1dFZhbHVlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxGb3JtLkNvbnRyb2wgcGxhY2Vob2xkZXI9XCJQcm9mZXNzaW9uXCIvPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXN5bmNTZWxlY3RcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByb2Zlc3Npb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2Zlc3Npb24ubGliZWxsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXtlID0+IGUubGliZWxsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXtlID0+IGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17e0Ryb3Bkb3duSW5kaWNhdG9yOiAoKSA9PiBudWxsLCBJbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+IG51bGx9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxGb3JtLkNvbnRyb2wgcGxhY2Vob2xkZXI9XCJWaWxsZVwiLz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzeW5jU2VsZWN0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWaWxsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17ZSA9PiBlLm5vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXtlID0+IGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7RHJvcGRvd25JbmRpY2F0b3I6ICgpID0+IG51bGwsIEluZGljYXRvclNlcGFyYXRvcjogKCkgPT4gbnVsbH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPEZvcm0uQ29udHJvbCBwbGFjZWhvbGRlcj1cIlNlY3RldXJcIi8+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3luY1NlbGVjdFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VjdGV1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17ZSA9PiBlLmxpYmVsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17ZSA9PiBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17e0Ryb3Bkb3duSW5kaWNhdG9yOiAoKSA9PiBudWxsLCBJbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+IG51bGx9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxGb3JtLkNvbnRyb2wgcGxhY2Vob2xkZXI9XCJUeXBlIGNvbnRyYXRcIi8+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3luY1NlbGVjdFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBjb250cmF0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXtlID0+IGUubGliZWxsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXtlID0+IGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnM0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt7RHJvcGRvd25JbmRpY2F0b3I6ICgpID0+IG51bGwsIEluZGljYXRvclNlcGFyYXRvcjogKCkgPT4gbnVsbH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnaHR0cHM6Ly8xMjcuMC4wLjE6ODAwMC9yZWNoZXJjaGVfbGlzdGU/bWV0aWVyPScgKyBwcm9mZXNzaW9uICsgJyZ2aWxsZT0nICsgdmlsbGUgKyAnJnNlY3RldXI9JyArIHNlY3RldXIgKyAnJmNvbnRyYXQ9JyArIGNvbnRyYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlY2hlcmNoZSBkZXMgb2ZmcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uUm93PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKVxyXG5cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICAgICAgPEFwcC8+XHJcbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKVxyXG4pO1xyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==