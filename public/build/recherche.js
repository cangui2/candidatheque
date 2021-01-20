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

  if (rootElement) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Profession"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
      placeholder: "",
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Villes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
      placeholder: "",
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Secteur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
      placeholder: "",
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, null, "Type de contrat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
      placeholder: "",
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      href: 'https://127.0.0.1:8000/recherche_liste?metier=' + profession + '&ville=' + ville + '&secteur=' + secteur + '&contrat=' + contrat,
      type: "button",
      className: "mb-2"
    }, "Recherche des offres"))));
  }

  if (rootList) {
    console.log(profession);
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
}

var rootElement = document.getElementById('villes');

if (rootElement) {
  react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, null), rootElement);
}

var rootList = document.getElementById('list');

if (rootList) {
  react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, null), rootList);
}

/***/ })

},[["./assets/index_recherche/recherche.js","runtime","vendors~cv~react_recherche~recherche~sourcing~test_form","vendors~cv~recherche~sourcing","vendors~recherche"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaW5kZXhfcmVjaGVyY2hlL3JlY2hlcmNoZS5qcyJdLCJuYW1lcyI6WyJBcHAiLCJ1c2VTdGF0ZSIsInByb2Zlc3Npb24iLCJzZXRQcm9mZXNzaW9uIiwidmlsbGUiLCJzZXRWaWxsZSIsInNlY3RldXIiLCJzZXRTZWN0ZXVyIiwiY29udHJhdCIsInNldENvbnRyYXQiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImlkIiwiaGFuZGxlQ2hhbmdlMiIsImhhbmRsZUNoYW5nZTMiLCJoYW5kbGVDaGFuZ2U0IiwibG9hZE9wdGlvbnMiLCJpbnB1dFZhbHVlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImxvYWRPcHRpb25zMiIsImxvYWRPcHRpb25zMyIsImxvYWRPcHRpb25zNCIsInJvb3RFbGVtZW50IiwiZSIsImxpYmVsbGUiLCJEcm9wZG93bkluZGljYXRvciIsIkluZGljYXRvclNlcGFyYXRvciIsIm5vbSIsInJvb3RMaXN0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsR0FBZTtBQUNYO0FBRFcsa0JBRXlCQyxzREFBUSxDQUFDLEVBQUQsQ0FGakM7QUFBQTtBQUFBLE1BRUpDLFVBRkk7QUFBQSxNQUVRQyxhQUZSOztBQUFBLG1CQUdlRixzREFBUSxDQUFDLEVBQUQsQ0FIdkI7QUFBQTtBQUFBLE1BR0pHLEtBSEk7QUFBQSxNQUdHQyxRQUhIOztBQUFBLG1CQUltQkosc0RBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUE7QUFBQSxNQUlKSyxPQUpJO0FBQUEsTUFJS0MsVUFKTDs7QUFBQSxtQkFLbUJOLHNEQUFRLENBQUMsRUFBRCxDQUwzQjtBQUFBO0FBQUEsTUFLSk8sT0FMSTtBQUFBLE1BS0tDLFVBTEwsa0JBUVg7OztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUssRUFBSTtBQUMxQjtBQUNBUixpQkFBYSxDQUFDUSxLQUFLLENBQUNDLEVBQVAsQ0FBYjtBQUVILEdBSkQ7O0FBTUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBRixLQUFLLEVBQUk7QUFDM0I7QUFDQU4sWUFBUSxDQUFDTSxLQUFLLENBQUNDLEVBQVAsQ0FBUjtBQUNILEdBSEQ7O0FBS0EsTUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBSCxLQUFLLEVBQUk7QUFDM0I7QUFDQUosY0FBVSxDQUFDSSxLQUFLLENBQUNDLEVBQVAsQ0FBVjtBQUNILEdBSEQ7O0FBSUEsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBSixLQUFLLEVBQUk7QUFDM0I7QUFDQUYsY0FBVSxDQUFDRSxLQUFLLENBQUNDLEVBQVAsQ0FBVjtBQUNILEdBSEQsQ0F4QlcsQ0E4Qlg7OztBQUNBLE1BQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFVBQUQsRUFBZ0I7QUFDaEMsV0FBT0MsS0FBSyxzREFBK0NELFVBQS9DLEVBQUwsQ0FBa0VFLElBQWxFLENBQXVFLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBQTFFLENBQVA7QUFDSCxHQUZEOztBQUdBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNMLFVBQUQsRUFBZ0I7QUFDakMsV0FBT0MsS0FBSyxpREFBMENELFVBQTFDLEVBQUwsQ0FBNkRFLElBQTdELENBQWtFLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBQXJFLENBQVA7QUFDSCxHQUZEOztBQUdBLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNOLFVBQUQsRUFBZ0I7QUFDakMsV0FBT0MsS0FBSyxxREFBOENELFVBQTlDLEVBQUwsQ0FBaUVFLElBQWpFLENBQXNFLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBQXpFLENBQVA7QUFDSCxHQUZEOztBQUdBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNQLFVBQUQsRUFBZ0I7QUFDakMsV0FBT0MsS0FBSyw0REFBcURELFVBQXJELEVBQUwsQ0FBd0VFLElBQXhFLENBQTZFLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBQWhGLENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQUlJLFdBQUosRUFBaUI7QUFDYix3QkFFSSxzRkFFSSwyREFBQyxvREFBRCxDQUFNLEtBQU4scUJBQ0ksMkRBQUMsb0RBQUQsQ0FBTSxLQUFOLHFCQURKLGVBR0ksMkRBQUMsMERBQUQ7QUFFSSxpQkFBVyxFQUFDLEVBRmhCO0FBR0ksb0JBQWMsRUFBRSx3QkFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsT0FBTjtBQUFBLE9BSHJCO0FBSUksb0JBQWMsRUFBRSx3QkFBQUQsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ2QsRUFBTjtBQUFBLE9BSnJCO0FBS0ksaUJBQVcsRUFBRUksV0FMakI7QUFNSSxjQUFRLEVBQUVOLFlBTmQ7QUFPSSxnQkFBVSxFQUFFO0FBQUNrQix5QkFBaUIsRUFBRTtBQUFBLGlCQUFNLElBQU47QUFBQSxTQUFwQjtBQUFnQ0MsMEJBQWtCLEVBQUU7QUFBQSxpQkFBTSxJQUFOO0FBQUE7QUFBcEQ7QUFQaEIsTUFISixlQVlJLDJEQUFDLG9EQUFELENBQU0sS0FBTixpQkFaSixlQWNJLDJEQUFDLDBEQUFEO0FBRUksaUJBQVcsRUFBQyxFQUZoQjtBQUdJLG9CQUFjLEVBQUUsd0JBQUFILENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNJLEdBQU47QUFBQSxPQUhyQjtBQUlJLG9CQUFjLEVBQUUsd0JBQUFKLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNkLEVBQU47QUFBQSxPQUpyQjtBQUtJLGlCQUFXLEVBQUVVLFlBTGpCO0FBTUksY0FBUSxFQUFFVCxhQU5kO0FBT0ksZ0JBQVUsRUFBRTtBQUFDZSx5QkFBaUIsRUFBRTtBQUFBLGlCQUFNLElBQU47QUFBQSxTQUFwQjtBQUFnQ0MsMEJBQWtCLEVBQUU7QUFBQSxpQkFBTSxJQUFOO0FBQUE7QUFBcEQ7QUFQaEIsTUFkSixlQXVCSSwyREFBQyxvREFBRCxDQUFNLEtBQU4sa0JBdkJKLGVBeUJJLDJEQUFDLDBEQUFEO0FBRUksaUJBQVcsRUFBQyxFQUZoQjtBQUdJLG9CQUFjLEVBQUUsd0JBQUFILENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLE9BQU47QUFBQSxPQUhyQjtBQUlJLG9CQUFjLEVBQUUsd0JBQUFELENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNkLEVBQU47QUFBQSxPQUpyQjtBQUtJLGlCQUFXLEVBQUVXLFlBTGpCO0FBTUksY0FBUSxFQUFFVCxhQU5kO0FBT0ksZ0JBQVUsRUFBRTtBQUFDYyx5QkFBaUIsRUFBRTtBQUFBLGlCQUFNLElBQU47QUFBQSxTQUFwQjtBQUFnQ0MsMEJBQWtCLEVBQUU7QUFBQSxpQkFBTSxJQUFOO0FBQUE7QUFBcEQ7QUFQaEIsTUF6QkosZUFrQ0ksMkRBQUMsb0RBQUQsQ0FBTSxLQUFOLDBCQWxDSixlQW9DSSwyREFBQywwREFBRDtBQUVJLGlCQUFXLEVBQUMsRUFGaEI7QUFHSSxvQkFBYyxFQUFFLHdCQUFBSCxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxPQUFOO0FBQUEsT0FIckI7QUFJSSxvQkFBYyxFQUFFLHdCQUFBRCxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDZCxFQUFOO0FBQUEsT0FKckI7QUFLSSxpQkFBVyxFQUFFWSxZQUxqQjtBQU1JLGNBQVEsRUFBRVQsYUFOZDtBQU9JLGdCQUFVLEVBQUU7QUFBQ2EseUJBQWlCLEVBQUU7QUFBQSxpQkFBTSxJQUFOO0FBQUEsU0FBcEI7QUFBZ0NDLDBCQUFrQixFQUFFO0FBQUEsaUJBQU0sSUFBTjtBQUFBO0FBQXBEO0FBUGhCLE1BcENKLGVBNkNJLHNFQTdDSixlQThDSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJLDJEQUFDLHNEQUFEO0FBQ0ksVUFBSSxFQUFFLG1EQUFtRDNCLFVBQW5ELEdBQWdFLFNBQWhFLEdBQTRFRSxLQUE1RSxHQUFvRixXQUFwRixHQUFrR0UsT0FBbEcsR0FBNEcsV0FBNUcsR0FBMEhFLE9BRHBJO0FBRUksVUFBSSxFQUFDLFFBRlQ7QUFFa0IsZUFBUyxFQUFDO0FBRjVCLDhCQURKLENBOUNKLENBRkosQ0FGSjtBQThESDs7QUFFRCxNQUFJdUIsUUFBSixFQUFjO0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZL0IsVUFBWjtBQUNBLHdCQUNJLDJEQUFDLG9EQUFELHFCQUNJLDJEQUFDLG9EQUFELENBQU0sR0FBTixxQkFDSSwyREFBQyxtREFBRCxxQkFFSSwyREFBQywwREFBRDtBQUVJLGlCQUFXLEVBQUMsWUFGaEI7QUFHSSxXQUFLLEVBQUVBLFVBQVUsQ0FBQ3lCLE9BSHRCO0FBSUksb0JBQWMsRUFBRSx3QkFBQUQsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsT0FBTjtBQUFBLE9BSnJCO0FBS0ksb0JBQWMsRUFBRSx3QkFBQUQsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ2QsRUFBTjtBQUFBLE9BTHJCO0FBTUksaUJBQVcsRUFBRUksV0FOakI7QUFPSSxjQUFRLEVBQUVOLFlBUGQ7QUFRSSxnQkFBVSxFQUFFO0FBQUNrQix5QkFBaUIsRUFBRTtBQUFBLGlCQUFNLElBQU47QUFBQSxTQUFwQjtBQUFnQ0MsMEJBQWtCLEVBQUU7QUFBQSxpQkFBTSxJQUFOO0FBQUE7QUFBcEQ7QUFSaEIsTUFGSixDQURKLGVBY0ksMkRBQUMsbURBQUQscUJBRUksMkRBQUMsMERBQUQ7QUFFSSxpQkFBVyxFQUFDLE9BRmhCO0FBR0ksb0JBQWMsRUFBRSx3QkFBQUgsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0ksR0FBTjtBQUFBLE9BSHJCO0FBSUksb0JBQWMsRUFBRSx3QkFBQUosQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ2QsRUFBTjtBQUFBLE9BSnJCO0FBS0ksaUJBQVcsRUFBRVUsWUFMakI7QUFNSSxjQUFRLEVBQUVULGFBTmQ7QUFPSSxnQkFBVSxFQUFFO0FBQUNlLHlCQUFpQixFQUFFO0FBQUEsaUJBQU0sSUFBTjtBQUFBLFNBQXBCO0FBQWdDQywwQkFBa0IsRUFBRTtBQUFBLGlCQUFNLElBQU47QUFBQTtBQUFwRDtBQVBoQixNQUZKLENBZEosZUEwQkksMkRBQUMsbURBQUQscUJBRUksMkRBQUMsMERBQUQ7QUFFSSxpQkFBVyxFQUFDLFNBRmhCO0FBR0ksb0JBQWMsRUFBRSx3QkFBQUgsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsT0FBTjtBQUFBLE9BSHJCO0FBSUksb0JBQWMsRUFBRSx3QkFBQUQsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ2QsRUFBTjtBQUFBLE9BSnJCO0FBS0ksaUJBQVcsRUFBRVcsWUFMakI7QUFNSSxjQUFRLEVBQUVULGFBTmQ7QUFPSSxnQkFBVSxFQUFFO0FBQUNjLHlCQUFpQixFQUFFO0FBQUEsaUJBQU0sSUFBTjtBQUFBLFNBQXBCO0FBQWdDQywwQkFBa0IsRUFBRTtBQUFBLGlCQUFNLElBQU47QUFBQTtBQUFwRDtBQVBoQixNQUZKLENBMUJKLGVBc0NJLDJEQUFDLG1EQUFELHFCQUVJLDJEQUFDLDBEQUFEO0FBRUksaUJBQVcsRUFBQyxjQUZoQjtBQUdJLG9CQUFjLEVBQUUsd0JBQUFILENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLE9BQU47QUFBQSxPQUhyQjtBQUlJLG9CQUFjLEVBQUUsd0JBQUFELENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNkLEVBQU47QUFBQSxPQUpyQjtBQUtJLGlCQUFXLEVBQUVZLFlBTGpCO0FBTUksY0FBUSxFQUFFVCxhQU5kO0FBT0ksZ0JBQVUsRUFBRTtBQUFDYSx5QkFBaUIsRUFBRTtBQUFBLGlCQUFNLElBQU47QUFBQSxTQUFwQjtBQUFnQ0MsMEJBQWtCLEVBQUU7QUFBQSxpQkFBTSxJQUFOO0FBQUE7QUFBcEQ7QUFQaEIsTUFGSixDQXRDSixlQWtESSwyREFBQyxzREFBRDtBQUNJLFVBQUksRUFBRSxtREFBbUQzQixVQUFuRCxHQUFnRSxTQUFoRSxHQUE0RUUsS0FBNUUsR0FBb0YsV0FBcEYsR0FBa0dFLE9BQWxHLEdBQTRHLFdBQTVHLEdBQTBIRSxPQURwSTtBQUVJLFVBQUksRUFBQyxRQUZUO0FBRWtCLGVBQVMsRUFBQztBQUY1Qiw4QkFsREosQ0FESixDQURKO0FBNERIO0FBQ0o7O0FBR0QsSUFBTWlCLFdBQVcsR0FBRVMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQW5COztBQUNBLElBQUdWLFdBQUgsRUFBZTtBQUVYVyxrREFBUSxDQUFDQyxNQUFULGVBQWdCLDJEQUFDLEdBQUQsT0FBaEIsRUFBdUJaLFdBQXZCO0FBQ0g7O0FBRUQsSUFBTU0sUUFBUSxHQUFFRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBaEI7O0FBQ0EsSUFBR0osUUFBSCxFQUFZO0FBQ1JLLGtEQUFRLENBQUNDLE1BQVQsZUFBZ0IsMkRBQUMsR0FBRCxPQUFoQixFQUF1Qk4sUUFBdkI7QUFDSCxDIiwiZmlsZSI6InJlY2hlcmNoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7Q29sLCBGb3JtLEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQXN5bmNTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdC9hc3luY1wiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgLy8gY29uc3QgcGFyYW0gaW1wdXQgYW5kIHNlbGVjdFxyXG4gICAgY29uc3QgW3Byb2Zlc3Npb24sIHNldFByb2Zlc3Npb25dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3ZpbGxlLCBzZXRWaWxsZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VjdGV1ciwgc2V0U2VjdGV1cl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY29udHJhdCwgc2V0Q29udHJhdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAgIC8vIGhhbmRsZSBzZWxlY3Rpb25cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHtcclxuICAgICAgICAvL3NldFNlbGVjdGVkVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHNldFByb2Zlc3Npb24odmFsdWUuaWQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UyID0gdmFsdWUgPT4ge1xyXG4gICAgICAgIC8vIHNldFNlbGVjdGVkVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHNldFZpbGxlKHZhbHVlLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UzID0gdmFsdWUgPT4ge1xyXG4gICAgICAgIC8vIHNldFNlbGVjdGVkVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHNldFNlY3RldXIodmFsdWUuaWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlNCA9IHZhbHVlID0+IHtcclxuICAgICAgICAvL3NldFNlbGVjdGVkVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHNldENvbnRyYXQodmFsdWUuaWQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBsb2FkIG9wdGlvbnMgdXNpbmcgQVBJIGNhbGxcclxuICAgIGNvbnN0IGxvYWRPcHRpb25zID0gKGlucHV0VmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vMTI3LjAuMC4xOjgwMDAvYXBpL21ldGllcnM/bGliZWxsZT0ke2lucHV0VmFsdWV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZE9wdGlvbnMyID0gKGlucHV0VmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3ZpbGxlcz9ub209JHtpbnB1dFZhbHVlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRPcHRpb25zMyA9IChpbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwczovLzEyNy4wLjAuMTo4MDAwL2FwaS9hX3BfZXM/bGliZWxsZT0ke2lucHV0VmFsdWV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZE9wdGlvbnM0ID0gKGlucHV0VmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3R5cGVfY29udHJhdHM/bGliZWxsZT0ke2lucHV0VmFsdWV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChyb290RWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Qcm9mZXNzaW9uPC9Gb3JtLkxhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QXN5bmNTZWxlY3RcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9e2UgPT4gZS5saWJlbGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17ZSA9PiBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tEcm9wZG93bkluZGljYXRvcjogKCkgPT4gbnVsbCwgSW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiBudWxsfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlZpbGxlczwvRm9ybS5MYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEFzeW5jU2VsZWN0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXtlID0+IGUubm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17ZSA9PiBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17e0Ryb3Bkb3duSW5kaWNhdG9yOiAoKSA9PiBudWxsLCBJbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+IG51bGx9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+U2VjdGV1cjwvRm9ybS5MYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEFzeW5jU2VsZWN0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXtlID0+IGUubGliZWxsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2UgPT4gZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tEcm9wZG93bkluZGljYXRvcjogKCkgPT4gbnVsbCwgSW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiBudWxsfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlR5cGUgZGUgY29udHJhdDwvRm9ybS5MYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEFzeW5jU2VsZWN0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXtlID0+IGUubGliZWxsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2UgPT4gZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tEcm9wZG93bkluZGljYXRvcjogKCkgPT4gbnVsbCwgSW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiBudWxsfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eydodHRwczovLzEyNy4wLjAuMTo4MDAwL3JlY2hlcmNoZV9saXN0ZT9tZXRpZXI9JyArIHByb2Zlc3Npb24gKyAnJnZpbGxlPScgKyB2aWxsZSArICcmc2VjdGV1cj0nICsgc2VjdGV1ciArICcmY29udHJhdD0nICsgY29udHJhdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNoZXJjaGUgZGVzIG9mZnJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm9vdExpc3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9mZXNzaW9uKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLlJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8Rm9ybS5Db250cm9sIHBsYWNlaG9sZGVyPVwiUHJvZmVzc2lvblwiLz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzeW5jU2VsZWN0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9mZXNzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9mZXNzaW9uLmxpYmVsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17ZSA9PiBlLmxpYmVsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17ZSA9PiBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tEcm9wZG93bkluZGljYXRvcjogKCkgPT4gbnVsbCwgSW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiBudWxsfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8Rm9ybS5Db250cm9sIHBsYWNlaG9sZGVyPVwiVmlsbGVcIi8+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3luY1NlbGVjdFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmlsbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9e2UgPT4gZS5ub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17ZSA9PiBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17e0Ryb3Bkb3duSW5kaWNhdG9yOiAoKSA9PiBudWxsLCBJbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+IG51bGx9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxGb3JtLkNvbnRyb2wgcGxhY2Vob2xkZXI9XCJTZWN0ZXVyXCIvPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXN5bmNTZWxlY3RcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlY3RldXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9e2UgPT4gZS5saWJlbGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2UgPT4gZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3B0aW9uczN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3tEcm9wZG93bkluZGljYXRvcjogKCkgPT4gbnVsbCwgSW5kaWNhdG9yU2VwYXJhdG9yOiAoKSA9PiBudWxsfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8Rm9ybS5Db250cm9sIHBsYWNlaG9sZGVyPVwiVHlwZSBjb250cmF0XCIvPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXN5bmNTZWxlY3RcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgY29udHJhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17ZSA9PiBlLmxpYmVsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17ZSA9PiBlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2U0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17e0Ryb3Bkb3duSW5kaWNhdG9yOiAoKSA9PiBudWxsLCBJbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+IG51bGx9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17J2h0dHBzOi8vMTI3LjAuMC4xOjgwMDAvcmVjaGVyY2hlX2xpc3RlP21ldGllcj0nICsgcHJvZmVzc2lvbiArICcmdmlsbGU9JyArIHZpbGxlICsgJyZzZWN0ZXVyPScgKyBzZWN0ZXVyICsgJyZjb250cmF0PScgKyBjb250cmF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWNoZXJjaGUgZGVzIG9mZnJlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLlJvdz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJvb3RFbGVtZW50ID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlsbGVzJyk7XHJcbmlmKHJvb3RFbGVtZW50KXtcclxuXHJcbiAgICBSZWFjdERPTS5yZW5kZXIoPEFwcC8+LHJvb3RFbGVtZW50KTtcclxufVxyXG5cclxuY29uc3Qgcm9vdExpc3QgPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0JylcclxuaWYocm9vdExpc3Qpe1xyXG4gICAgUmVhY3RET00ucmVuZGVyKDxBcHAvPixyb290TGlzdCk7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==