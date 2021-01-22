(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~react_recherche"],{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./node_modules/compute-scroll-into-view/dist/index.module.js":
/*!********************************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/dist/index.module.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function t(t){return null!=t&&"object"==typeof t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}/* harmony default export */ __webpack_exports__["default"] = (function(e,i){var o=window,l=i.scrollMode,d=i.block,u=i.inline,h=i.boundary,a=i.skipOverflowHiddenElements,c="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,s=[],p=e;t(p)&&c(p);){if((p=p.parentNode)===f){s.push(p);break}p===document.body&&n(p)&&!n(document.documentElement)||n(p,a)&&s.push(p)}for(var g=o.visualViewport?o.visualViewport.width:innerWidth,m=o.visualViewport?o.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,W=e.getBoundingClientRect(),b=W.height,H=W.width,y=W.top,M=W.right,E=W.bottom,V=W.left,x="start"===d||"nearest"===d?y:"end"===d?E:y+b/2,I="center"===u?V+H/2:"end"===u?M:V,C=[],T=0;T<s.length;T++){var k=s[T],B=k.getBoundingClientRect(),D=B.height,O=B.width,R=B.top,X=B.right,Y=B.bottom,L=B.left;if("if-needed"===l&&y>=0&&V>=0&&E<=m&&M<=g&&y>=R&&E<=Y&&V>=L&&M<=X)return C;var S=getComputedStyle(k),j=parseInt(S.borderLeftWidth,10),N=parseInt(S.borderTopWidth,10),q=parseInt(S.borderRightWidth,10),z=parseInt(S.borderBottomWidth,10),A=0,F=0,G="offsetWidth"in k?k.offsetWidth-k.clientWidth-j-q:0,J="offsetHeight"in k?k.offsetHeight-k.clientHeight-N-z:0;if(f===k)A="start"===d?x:"end"===d?x-m:"nearest"===d?r(v,v+m,m,N,z,v+x,v+x+b,b):x-m/2,F="start"===u?I:"center"===u?I-g/2:"end"===u?I-g:r(w,w+g,g,j,q,w+I,w+I+H,H),A=Math.max(0,A+v),F=Math.max(0,F+w);else{A="start"===d?x-R-N:"end"===d?x-Y+z+J:"nearest"===d?r(R,Y,D,N,z+J,x,x+b,b):x-(R+D/2)+J/2,F="start"===u?I-L-j:"center"===u?I-(L+O/2)+G/2:"end"===u?I-X+q+G:r(L,X,O,j,q+G,I,I+H,H);var K=k.scrollLeft,P=k.scrollTop;x+=P-(A=Math.max(0,Math.min(P+A,k.scrollHeight-D+J))),I+=K-(F=Math.max(0,Math.min(K+F,k.scrollWidth-O+G)))}C.push({el:k,top:A,left:F})}return C});
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/create-react-context/lib/implementation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/create-react-context/lib/implementation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/create-react-context/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/create-react-context/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "./node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/deep-equal/index.js":
/*!******************************************!*\
  !*** ./node_modules/deep-equal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectKeys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var isArguments = __webpack_require__(/*! is-arguments */ "./node_modules/is-arguments/index.js");
var is = __webpack_require__(/*! object-is */ "./node_modules/object-is/index.js");
var isRegex = __webpack_require__(/*! is-regex */ "./node_modules/is-regex/index.js");
var flags = __webpack_require__(/*! regexp.prototype.flags */ "./node_modules/regexp.prototype.flags/index.js");
var isDate = __webpack_require__(/*! is-date-object */ "./node_modules/is-date-object/index.js");

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && flags(a) === flags(b);
  }

  if (isDate(a) && isDate(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

module.exports = deepEqual;


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	AggregateError,
	Atomics,
	FinalizationRegistry,
	SharedArrayBuffer,
	WeakRef,
*/

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		// eslint-disable-next-line no-new-func
		return Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var asyncGenFunction = getEvalledConstructor('async function* () {}');
var asyncGenFunctionPrototype = asyncGenFunction ? asyncGenFunction.prototype : undefined;
var asyncGenPrototype = asyncGenFunctionPrototype ? asyncGenFunctionPrototype.prototype : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': getEvalledConstructor('async function () {}'),
	'%AsyncGenerator%': asyncGenFunctionPrototype,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncIteratorPrototype%': asyncGenPrototype ? getProto(asyncGenPrototype) : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': getEvalledConstructor('function* () {}'),
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/is-arguments/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-arguments/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");

var $toString = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString(value) !== '[object Array]' &&
		$toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ "./node_modules/is-date-object/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-date-object/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ "./node_modules/is-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/is-regex/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';
var hasOwnProperty;
var regexExec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
	regexExec = Function.call.bind(RegExp.prototype.exec);
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var toStr = Object.prototype.toString;
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && hasOwnProperty(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			regexExec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return toStr.call(value) === regexClass;
	};


/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-is/implementation.js":
/*!**************************************************!*\
  !*** ./node_modules/object-is/implementation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ "./node_modules/object-is/index.js":
/*!*****************************************!*\
  !*** ./node_modules/object-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object-is/shim.js");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object-is/polyfill.js":
/*!********************************************!*\
  !*** ./node_modules/object-is/polyfill.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object-is/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ "./node_modules/object-is/shim.js":
/*!****************************************!*\
  !*** ./node_modules/object-is/shim.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object-is/polyfill.js");
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/css/Typeahead.css":
/*!******************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/css/Typeahead.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/behaviors/async.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/behaviors/async.js ***!
  \**********************************************************************/
/*! exports provided: useAsync, withAsync, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return useAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAsync", function() { return withAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return asyncContainer; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/hooks/useForceUpdate */ "./node_modules/@restart/hooks/esm/useForceUpdate.js");
/* harmony import */ var _restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/hooks/usePrevious */ "./node_modules/@restart/hooks/esm/usePrevious.js");
/* harmony import */ var _core_Typeahead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/Typeahead */ "./node_modules/react-bootstrap-typeahead/es/core/Typeahead.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../propTypes */ "./node_modules/react-bootstrap-typeahead/es/propTypes.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");










var propTypes = {
  /**
   * Delay, in milliseconds, before performing search.
   */
  delay: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Whether or not a request is currently pending. Necessary for the
   * container to know when new results are available.
   */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,

  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Callback to perform when the search is executed.
   */
  onSearch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,

  /**
   * Options to be passed to the typeahead. Will typically be the query
   * results, but can also be initial default options.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(_propTypes__WEBPACK_IMPORTED_MODULE_8__["optionType"]),

  /**
   * Message displayed in the menu when there is no user input.
   */
  promptText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Message displayed in the menu while the request is pending.
   */
  searchText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Whether or not the component should cache query results.
   */
  useCache: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
var defaultProps = {
  delay: 200,
  minLength: 2,
  options: [],
  promptText: 'Type to search...',
  searchText: 'Searching...',
  useCache: true
};

/**
 * Logic that encapsulates common behavior and functionality around
 * asynchronous searches, including:
 *
 *  - Debouncing user input
 *  - Optional query caching
 *  - Search prompt and empty results behaviors
 */
function useAsync(props) {
  var allowNew = props.allowNew,
      delay = props.delay,
      emptyLabel = props.emptyLabel,
      isLoading = props.isLoading,
      minLength = props.minLength,
      onInputChange = props.onInputChange,
      onSearch = props.onSearch,
      options = props.options,
      promptText = props.promptText,
      searchText = props.searchText,
      useCache = props.useCache,
      otherProps = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(props, ["allowNew", "delay", "emptyLabel", "isLoading", "minLength", "onInputChange", "onSearch", "options", "promptText", "searchText", "useCache"]);

  var cacheRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({});
  var handleSearchDebouncedRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var queryRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(props.defaultInputValue || '');
  var forceUpdate = Object(_restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var prevProps = Object(_restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_6__["default"])(props);
  var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (query) {
    queryRef.current = query;

    if (!query || minLength && query.length < minLength) {
      return;
    } // Use cached results, if applicable.


    if (useCache && cacheRef.current[query]) {
      // Re-render the component with the cached results.
      forceUpdate();
      return;
    } // Perform the search.


    onSearch(query);
  }, [forceUpdate, minLength, onSearch, useCache]); // Set the debounced search function.

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    handleSearchDebouncedRef.current = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(handleSearch, delay);
    return function () {
      handleSearchDebouncedRef.current && handleSearchDebouncedRef.current.cancel();
    };
  }, [delay, handleSearch]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // Ensure that we've gone from a loading to a completed state. Otherwise
    // an empty response could get cached if the component updates during the
    // request (eg: if the parent re-renders for some reason).
    if (!isLoading && prevProps && prevProps.isLoading && useCache) {
      cacheRef.current[queryRef.current] = options;
    }
  });

  var getEmptyLabel = function getEmptyLabel() {
    if (!queryRef.current.length) {
      return promptText;
    }

    if (isLoading) {
      return searchText;
    }

    return emptyLabel;
  };

  var handleInputChange = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (query, e) {
    onInputChange && onInputChange(query, e);
    handleSearchDebouncedRef.current && handleSearchDebouncedRef.current(query);
  }, [onInputChange]);
  var cachedQuery = cacheRef.current[queryRef.current];
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, {
    // Disable custom selections during a search if `allowNew` isn't a function.
    allowNew: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isFunction"])(allowNew) ? allowNew : allowNew && !isLoading,
    emptyLabel: getEmptyLabel(),
    isLoading: isLoading,
    minLength: minLength,
    onInputChange: handleInputChange,
    options: useCache && cachedQuery ? cachedQuery : options
  });
}
function withAsync(Component) {
  var AsyncTypeahead = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function (props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, useAsync(props), {
      ref: ref
    }));
  });
  AsyncTypeahead.displayName = "withAsync(" + Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getDisplayName"])(Component) + ")"; // $FlowFixMe

  AsyncTypeahead.propTypes = propTypes; // $FlowFixMe

  AsyncTypeahead.defaultProps = defaultProps;
  return AsyncTypeahead;
}
function asyncContainer(Component) {
  /* istanbul ignore next */
  Object(_utils__WEBPACK_IMPORTED_MODULE_9__["warn"])(false, 'The `asyncContainer` export is deprecated; use `withAsync` instead.');
  /* istanbul ignore next */

  return withAsync(Component);
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/behaviors/classNames.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/behaviors/classNames.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");








function withClassNames(Component) {
  // Use a class instead of function component to support refs.

  /* eslint-disable-next-line react/prefer-stateless-function */
  var WrappedComponent = /*#__PURE__*/function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(WrappedComponent, _React$Component);

    function WrappedComponent() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = WrappedComponent.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          isInvalid = _this$props.isInvalid,
          isValid = _this$props.isValid,
          size = _this$props.size,
          props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["className", "isInvalid", "isValid", "size"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('form-control', 'rbt-input', {
          'form-control-lg': Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSizeLarge"])(size),
          'form-control-sm': Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isSizeSmall"])(size),
          'is-invalid': isInvalid,
          'is-valid': isValid
        }, className)
      }));
    };

    return WrappedComponent;
  }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(WrappedComponent, "displayName", "withClassNames(" + Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getDisplayName"])(Component) + ")");

  return WrappedComponent;
}

/* harmony default export */ __webpack_exports__["default"] = (withClassNames);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/behaviors/item.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/behaviors/item.js ***!
  \*********************************************************************/
/*! exports provided: useItem, withItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useItem", function() { return useItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withItem", function() { return withItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return menuItemContainer; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scroll-into-view-if-needed */ "./node_modules/scroll-into-view-if-needed/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Context */ "./node_modules/react-bootstrap-typeahead/es/core/Context.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../propTypes */ "./node_modules/react-bootstrap-typeahead/es/propTypes.js");








var propTypes = {
  option: _propTypes__WEBPACK_IMPORTED_MODULE_7__["optionType"].isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};
var useItem = function useItem(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      option = _ref.option,
      position = _ref.position,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["label", "onClick", "option", "position"]);

  var _useTypeaheadContext = Object(_core_Context__WEBPACK_IMPORTED_MODULE_5__["useTypeaheadContext"])(),
      activeIndex = _useTypeaheadContext.activeIndex,
      id = _useTypeaheadContext.id,
      isOnlyResult = _useTypeaheadContext.isOnlyResult,
      onActiveItemChange = _useTypeaheadContext.onActiveItemChange,
      onInitialItemChange = _useTypeaheadContext.onInitialItemChange,
      onMenuItemClick = _useTypeaheadContext.onMenuItemClick,
      setItem = _useTypeaheadContext.setItem;

  var itemRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (position === 0) {
      onInitialItemChange(option);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (position === activeIndex) {
      onActiveItemChange(option); // Automatically scroll the menu as the user keys through it.

      var node = itemRef.current;
      node && Object(scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_2__["default"])(node, {
        block: 'nearest',
        boundary: node.parentNode,
        inline: 'nearest',
        scrollMode: 'if-needed'
      });
    }
  });
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    onMenuItemClick(option, e);
    onClick && onClick(e);
  }, [onClick, onMenuItemClick, option]);
  var active = isOnlyResult || activeIndex === position; // Update the item's position in the item stack.

  setItem(option, position);
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    active: active,
    'aria-label': label,
    'aria-selected': active,
    id: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getMenuItemId"])(id, position),
    onClick: handleClick,
    onMouseDown: _utils__WEBPACK_IMPORTED_MODULE_6__["preventInputBlur"],
    ref: itemRef,
    role: 'option'
  });
};
var withItem = function withItem(Component) {
  var displayName = "withItem(" + Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getDisplayName"])(Component) + ")";

  var WrappedMenuItem = function WrappedMenuItem(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, useItem(props));
  };

  WrappedMenuItem.displayName = displayName;
  WrappedMenuItem.propTypes = propTypes;
  return WrappedMenuItem;
};
function menuItemContainer(Component) {
  /* istanbul ignore next */
  Object(_utils__WEBPACK_IMPORTED_MODULE_6__["warn"])(false, 'The `menuItemContainer` export is deprecated; use `withItem` instead.');
  /* istanbul ignore next */

  return withItem(Component);
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/behaviors/token.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/behaviors/token.js ***!
  \**********************************************************************/
/*! exports provided: useToken, withToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToken", function() { return useToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withToken", function() { return withToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tokenContainer; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_overlays_useRootClose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-overlays/useRootClose */ "./node_modules/react-overlays/esm/useRootClose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/react-bootstrap-typeahead/es/constants.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../propTypes */ "./node_modules/react-bootstrap-typeahead/es/propTypes.js");








var propTypes = {
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  option: _propTypes__WEBPACK_IMPORTED_MODULE_7__["optionType"].isRequired
};
var useToken = function useToken(_ref) {
  var onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      onRemove = _ref.onRemove,
      option = _ref.option,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["onBlur", "onClick", "onFocus", "onRemove", "option"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      rootElement = _useState2[0],
      attachRef = _useState2[1];

  var handleActiveChange = function handleActiveChange(e, isActive, callback) {
    e.stopPropagation();
    setActive(isActive);
    typeof callback === 'function' && callback(e);
  };

  var handleBlur = function handleBlur(e) {
    handleActiveChange(e, false, onBlur);
  };

  var handleClick = function handleClick(e) {
    handleActiveChange(e, true, onClick);
  };

  var handleFocus = function handleFocus(e) {
    handleActiveChange(e, true, onFocus);
  };

  var handleRemove = function handleRemove() {
    onRemove && onRemove(option);
  };

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.keyCode) {
      case _constants__WEBPACK_IMPORTED_MODULE_6__["BACKSPACE"]:
        if (active) {
          // Prevent backspace keypress from triggering the browser "back"
          // action.
          e.preventDefault();
          handleRemove();
        }

        break;

      default:
        break;
    }
  };

  Object(react_overlays_useRootClose__WEBPACK_IMPORTED_MODULE_4__["default"])(rootElement, handleBlur, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    disabled: !active
  }));
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    active: active,
    onBlur: handleBlur,
    onClick: handleClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onRemove: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isFunction"])(onRemove) ? handleRemove : undefined,
    ref: attachRef
  });
};
var withToken = function withToken(Component) {
  var displayName = "withToken(" + Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getDisplayName"])(Component) + ")";

  var WrappedToken = function WrappedToken(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, useToken(props));
  };

  WrappedToken.displayName = displayName;
  WrappedToken.propTypes = propTypes;
  return WrappedToken;
};
function tokenContainer(Component) {
  /* istanbul ignore next */
  Object(_utils__WEBPACK_IMPORTED_MODULE_5__["warn"])(false, 'The `tokenContainer` export is deprecated; use `withToken` instead.');
  /* istanbul ignore next */

  return withToken(Component);
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/AsyncTypeahead.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/AsyncTypeahead.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _behaviors_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../behaviors/async */ "./node_modules/react-bootstrap-typeahead/es/behaviors/async.js");
/* harmony import */ var _Typeahead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Typeahead */ "./node_modules/react-bootstrap-typeahead/es/components/Typeahead.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_behaviors_async__WEBPACK_IMPORTED_MODULE_0__["withAsync"])(_Typeahead__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/ClearButton.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/ClearButton.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../propTypes */ "./node_modules/react-bootstrap-typeahead/es/propTypes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./node_modules/react-bootstrap-typeahead/es/constants.js");








var propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  size: _propTypes__WEBPACK_IMPORTED_MODULE_6__["sizeType"]
};
var defaultProps = {
  label: 'Clear',
  onClick: _utils__WEBPACK_IMPORTED_MODULE_5__["noop"],
  onKeyDown: _utils__WEBPACK_IMPORTED_MODULE_5__["noop"]
};

/**
 * ClearButton
 *
 * http://getbootstrap.com/css/#helper-classes-close
 */
var ClearButton = function ClearButton(_ref) {
  var className = _ref.className,
      label = _ref.label,
      _onClick = _ref.onClick,
      _onKeyDown = _ref.onKeyDown,
      size = _ref.size,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["className", "label", "onClick", "onKeyDown", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    "aria-label": label,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('close', 'rbt-close', {
      'rbt-close-lg': Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isSizeLarge"])(size)
    }, className),
    onClick: function onClick(e) {
      e.stopPropagation();

      _onClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      // Prevent browser from navigating back.
      if (e.keyCode === _constants__WEBPACK_IMPORTED_MODULE_7__["BACKSPACE"]) {
        e.preventDefault();
      }

      _onKeyDown(e);
    },
    type: "button"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "sr-only"
  }, label));
};

ClearButton.propTypes = propTypes;
ClearButton.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (ClearButton);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/Highlighter.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/Highlighter.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");





var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  highlightClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  search: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
var defaultProps = {
  highlightClassName: 'rbt-highlight-text'
};

/**
 * Stripped-down version of https://github.com/helior/react-highlighter
 *
 * Results are already filtered by the time the component is used internally so
 * we can safely ignore case and diacritical marks for the purposes of matching.
 */
var Highlighter = /*#__PURE__*/function (_React$PureComponent) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Highlighter, _React$PureComponent);

  function Highlighter() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Highlighter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        highlightClassName = _this$props.highlightClassName,
        search = _this$props.search;

    if (!search || !children) {
      return children;
    }

    var matchCount = 0;
    var remaining = children;
    var highlighterChildren = [];

    while (remaining) {
      var bounds = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getMatchBounds"])(remaining, search); // No match anywhere in the remaining string, stop.

      if (!bounds) {
        highlighterChildren.push(remaining);
        break;
      } // Capture the string that leads up to a match.


      var nonMatch = remaining.slice(0, bounds.start);

      if (nonMatch) {
        highlighterChildren.push(nonMatch);
      } // Capture the matching string.


      var match = remaining.slice(bounds.start, bounds.end);
      highlighterChildren.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("mark", {
        className: highlightClassName,
        key: matchCount
      }, match));
      matchCount += 1; // And if there's anything left over, continue the loop.

      remaining = remaining.slice(bounds.end);
    }

    return highlighterChildren;
  };

  return Highlighter;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Highlighter, "propTypes", propTypes);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Highlighter, "defaultProps", defaultProps);

/* harmony default export */ __webpack_exports__["default"] = (Highlighter);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/Hint.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/Hint.js ***!
  \**********************************************************************/
/*! exports provided: defaultShouldSelect, useHint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultShouldSelect", function() { return defaultShouldSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHint", function() { return useHint; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Context */ "./node_modules/react-bootstrap-typeahead/es/core/Context.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/react-bootstrap-typeahead/es/constants.js");








// IE doesn't seem to get the composite computed value (eg: 'padding',
// 'borderStyle', etc.), so generate these from the individual values.
function interpolateStyle(styles, attr, subattr) {
  if (subattr === void 0) {
    subattr = '';
  }

  // Title-case the sub-attribute.
  if (subattr) {
    /* eslint-disable-next-line no-param-reassign */
    subattr = subattr.replace(subattr[0], subattr[0].toUpperCase());
  }

  return ['Top', 'Right', 'Bottom', 'Left'].map(function (dir) {
    return styles[attr + dir + subattr];
  }).join(' ');
}

function copyStyles(inputNode, hintNode) {
  if (!inputNode || !hintNode) {
    return;
  }

  var inputStyle = window.getComputedStyle(inputNode);
  /* eslint-disable no-param-reassign */

  hintNode.style.borderStyle = interpolateStyle(inputStyle, 'border', 'style');
  hintNode.style.borderWidth = interpolateStyle(inputStyle, 'border', 'width');
  hintNode.style.fontSize = inputStyle.fontSize;
  hintNode.style.height = inputStyle.height;
  hintNode.style.lineHeight = inputStyle.lineHeight;
  hintNode.style.margin = interpolateStyle(inputStyle, 'margin');
  hintNode.style.padding = interpolateStyle(inputStyle, 'padding');
  /* eslint-enable no-param-reassign */
}

function defaultShouldSelect(e, state) {
  var shouldSelectHint = false;
  var currentTarget = e.currentTarget,
      keyCode = e.keyCode;

  if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_6__["RIGHT"]) {
    // For selectable input types ("text", "search"), only select the hint if
    // it's at the end of the input value. For non-selectable types ("email",
    // "number"), always select the hint.
    shouldSelectHint = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isSelectable"])(currentTarget) ? currentTarget.selectionStart === currentTarget.value.length : true;
  }

  if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_6__["TAB"]) {
    // Prevent input from blurring on TAB.
    e.preventDefault();
    shouldSelectHint = true;
  }

  if (keyCode === _constants__WEBPACK_IMPORTED_MODULE_6__["RETURN"]) {
    shouldSelectHint = !!state.selectHintOnEnter;
  }

  return typeof state.shouldSelect === 'function' ? state.shouldSelect(shouldSelectHint, e) : shouldSelectHint;
}
var useHint = function useHint(_ref) {
  var children = _ref.children,
      shouldSelect = _ref.shouldSelect;
  !(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(children) === 1) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, '`useHint` expects one child.') : undefined : void 0;

  var _useTypeaheadContext = Object(_core_Context__WEBPACK_IMPORTED_MODULE_4__["useTypeaheadContext"])(),
      hintText = _useTypeaheadContext.hintText,
      initialItem = _useTypeaheadContext.initialItem,
      inputNode = _useTypeaheadContext.inputNode,
      onAdd = _useTypeaheadContext.onAdd,
      selectHintOnEnter = _useTypeaheadContext.selectHintOnEnter;

  var hintRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var onKeyDown = function onKeyDown(e) {
    if (hintText && initialItem && defaultShouldSelect(e, {
      selectHintOnEnter: selectHintOnEnter,
      shouldSelect: shouldSelect
    })) {
      onAdd(initialItem);
    }

    children.props.onKeyDown && children.props.onKeyDown(e);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    copyStyles(inputNode, hintRef.current);
  });
  return {
    child: /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"])(children, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, children.props, {
      onKeyDown: onKeyDown
    })),
    hintRef: hintRef,
    hintText: hintText
  };
};

var Hint = function Hint(_ref2) {
  var className = _ref2.className,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["className"]);

  var _useHint = useHint(props),
      child = _useHint.child,
      hintRef = _useHint.hintRef,
      hintText = _useHint.hintText;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flex: 1,
      height: '100%',
      position: 'relative'
    }
  }, child, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    "aria-hidden": true,
    className: "rbt-input-hint",
    ref: hintRef,
    readOnly: true,
    style: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
      color: 'rgba(0, 0, 0, 0.35)',
      left: 0,
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    tabIndex: -1,
    value: hintText
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hint);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/Input.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/Input.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('rbt-input-main', props.className),
    ref: ref
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/Loader.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/Loader.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
var defaultProps = {
  label: 'Loading...'
};

var Loader = function Loader(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "rbt-loader spinner-border spinner-border-sm",
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sr-only"
  }, label));
};

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/Menu.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/Menu.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuItem */ "./node_modules/react-bootstrap-typeahead/es/components/MenuItem.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../propTypes */ "./node_modules/react-bootstrap-typeahead/es/propTypes.js");










var MenuDivider = function MenuDivider(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "dropdown-divider",
    role: "separator"
  });
};

var MenuHeader = function MenuHeader(props) {
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
      className: "dropdown-header",
      role: "heading"
    }))
  );
};

var propTypes = {
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Message to display in the menu if there are no valid results.
   */
  emptyLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Needed for accessibility.
   */
  id: Object(_propTypes__WEBPACK_IMPORTED_MODULE_8__["checkPropType"])(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]), _propTypes__WEBPACK_IMPORTED_MODULE_8__["isRequiredForA11y"]),

  /**
   * Maximum height of the dropdown menu.
   */
  maxHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
var defaultProps = {
  'aria-label': 'menu-options',
  emptyLabel: 'No matches found.',
  maxHeight: '300px'
};

/**
 * Menu component that handles empty state when passed a set of results.
 */
var Menu = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Menu, _React$Component);

  function Menu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Menu.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props = this.props,
        inputHeight = _this$props.inputHeight,
        scheduleUpdate = _this$props.scheduleUpdate; // Update the menu position if the height of the input changes.

    if (inputHeight !== prevProps.inputHeight) {
      scheduleUpdate();
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        emptyLabel = _this$props2.emptyLabel,
        id = _this$props2.id,
        innerRef = _this$props2.innerRef,
        maxHeight = _this$props2.maxHeight,
        style = _this$props2.style,
        text = _this$props2.text;
    var contents = react__WEBPACK_IMPORTED_MODULE_5__["Children"].count(children) === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_6__["BaseMenuItem"], {
      disabled: true,
      role: "option"
    }, emptyLabel) : children;
    return (
      /*#__PURE__*/

      /* eslint-disable jsx-a11y/interactive-supports-focus */
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        "aria-label": this.props['aria-label'],
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('rbt-menu', 'dropdown-menu', 'show', className),
        id: id,
        key: // Force a re-render if the text changes to ensure that menu
        // positioning updates correctly.
        text,
        onMouseDown: // Prevent input from blurring when clicking on the menu scrollbar.
        _utils__WEBPACK_IMPORTED_MODULE_7__["preventInputBlur"],
        ref: innerRef,
        role: "listbox",
        style: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, style, {
          display: 'block',
          maxHeight: maxHeight,
          overflow: 'auto'
        })
      }, contents)
      /* eslint-enable jsx-a11y/interactive-supports-focus */

    );
  };

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Menu, "propTypes", propTypes);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Menu, "defaultProps", defaultProps);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Menu, "Divider", MenuDivider);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Menu, "Header", MenuHeader);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/MenuItem.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/MenuItem.js ***!
  \**************************************************************************/
/*! exports provided: BaseMenuItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseMenuItem", function() { return BaseMenuItem; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _behaviors_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../behaviors/item */ "./node_modules/react-bootstrap-typeahead/es/behaviors/item.js");





var BaseMenuItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      _onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["active", "children", "className", "disabled", "onClick", "onMouseDown"]);

  return (
    /*#__PURE__*/

    /* eslint-disable jsx-a11y/anchor-is-valid */
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('dropdown-item', {
        active: active,
        disabled: disabled
      }, className),
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        !disabled && _onClick && _onClick(e);
      },
      onMouseDown: onMouseDown,
      ref: ref
    }), children)
    /* eslint-enable jsx-a11y/anchor-is-valid */

  );
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_behaviors_item__WEBPACK_IMPORTED_MODULE_4__["withItem"])(BaseMenuItem));

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/Overlay.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/Overlay.js ***!
  \*************************************************************************/
/*! exports provided: getPlacement, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlacement", function() { return getPlacement; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./node_modules/react-bootstrap-typeahead/es/constants.js");



/* eslint-disable react/no-unused-prop-types */





// `Element` is not defined during server-side rendering, so shim it here.

/* istanbul ignore next */
var SafeElement = typeof Element === 'undefined' ? function () {} : Element;
var propTypes = {
  /**
   * Specify menu alignment. The default value is `justify`, which makes the
   * menu as wide as the input and truncates long values. Specifying `left`
   * or `right` will align the menu to that side and the width will be
   * determined by the length of menu item values.
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["values"])(_constants__WEBPACK_IMPORTED_MODULE_6__["ALIGN"])),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,

  /**
   * Specify whether the menu should appear above the input.
   */
  dropup: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Whether or not to automatically adjust the position of the menu when it
   * reaches the viewport boundaries.
   */
  flip: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  isMenuShown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  positionFixed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  referenceElement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(SafeElement)
};
var defaultProps = {
  align: _constants__WEBPACK_IMPORTED_MODULE_6__["ALIGN"].JUSTIFY,
  dropup: false,
  flip: false,
  isMenuShown: false,
  positionFixed: false
};

function getModifiers(_ref) {
  var align = _ref.align,
      flip = _ref.flip;
  return {
    computeStyles: {
      enabled: true,
      fn: function fn(_ref2) {
        var styles = _ref2.styles,
            data = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["styles"]);

        return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, data, {
          styles: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, styles, {
            // Use the following condition instead of `align === 'justify'`
            // since it allows the component to fall back to justifying the
            // menu width if `align` is undefined.
            width: align !== _constants__WEBPACK_IMPORTED_MODULE_6__["ALIGN"].RIGHT && align !== _constants__WEBPACK_IMPORTED_MODULE_6__["ALIGN"].LEFT ? // Set the popper width to match the target width.
            data.offsets.reference.width : styles.width
          })
        });
      }
    },
    flip: {
      enabled: flip
    },
    preventOverflow: {
      escapeWithReference: true
    }
  };
} // Flow expects a string literal value for `placement`.


var PLACEMENT = {
  bottom: {
    end: 'bottom-end',
    start: 'bottom-start'
  },
  top: {
    end: 'top-end',
    start: 'top-start'
  }
};
function getPlacement(_ref3) {
  var align = _ref3.align,
      dropup = _ref3.dropup;
  var x = align === _constants__WEBPACK_IMPORTED_MODULE_6__["ALIGN"].RIGHT ? 'end' : 'start';
  var y = dropup ? 'top' : 'bottom';
  return PLACEMENT[y][x];
}

var Overlay = function Overlay(props) {
  var children = props.children,
      isMenuShown = props.isMenuShown,
      positionFixed = props.positionFixed,
      referenceElement = props.referenceElement;

  if (!isMenuShown) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_popper__WEBPACK_IMPORTED_MODULE_4__["Popper"], {
    modifiers: getModifiers(props),
    placement: getPlacement(props),
    positionFixed: positionFixed,
    referenceElement: referenceElement
  }, function (_ref4) {
    var ref = _ref4.ref,
        popperProps = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref4, ["ref"]);

    return children(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, popperProps, {
      innerRef: ref,
      inputHeight: referenceElement ? referenceElement.offsetHeight : 0
    }));
  });
};

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/Token.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/Token.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ClearButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClearButton */ "./node_modules/react-bootstrap-typeahead/es/components/ClearButton.js");
/* harmony import */ var _behaviors_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../behaviors/token */ "./node_modules/react-bootstrap-typeahead/es/behaviors/token.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");







var InteractiveToken = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function (_ref, ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      onRemove = _ref.onRemove,
      tabIndex = _ref.tabIndex,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["active", "children", "className", "onRemove", "tabIndex"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('rbt-token', 'rbt-token-removeable', {
      'rbt-token-active': !!active
    }, className),
    ref: ref,
    tabIndex: tabIndex || 0
  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ClearButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "rbt-token-remove-button",
    label: "Remove",
    onClick: onRemove,
    tabIndex: -1
  }));
});

var StaticToken = function StaticToken(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      disabled = _ref2.disabled,
      href = _ref2.href;
  var classnames = classnames__WEBPACK_IMPORTED_MODULE_2___default()('rbt-token', {
    'rbt-token-disabled': disabled
  }, className);

  if (href && !disabled) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: classnames,
      href: href
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classnames
  }, children);
};
/**
 * Token
 *
 * Individual token component, generally displayed within the TokenizerInput
 * component, but can also be rendered on its own.
 */


var Token = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function (props, ref) {
  var disabled = props.disabled,
      onRemove = props.onRemove,
      readOnly = props.readOnly;
  return !disabled && !readOnly && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isFunction"])(onRemove) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InteractiveToken, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    ref: ref
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StaticToken, props);
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_behaviors_token__WEBPACK_IMPORTED_MODULE_5__["withToken"])(Token));

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/Typeahead.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/Typeahead.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_overlays_useRootClose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-overlays/useRootClose */ "./node_modules/react-overlays/esm/useRootClose.js");
/* harmony import */ var _core_Typeahead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/Typeahead */ "./node_modules/react-bootstrap-typeahead/es/core/Typeahead.js");
/* harmony import */ var _ClearButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ClearButton */ "./node_modules/react-bootstrap-typeahead/es/components/ClearButton.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loader */ "./node_modules/react-bootstrap-typeahead/es/components/Loader.js");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Overlay */ "./node_modules/react-bootstrap-typeahead/es/components/Overlay.js");
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Token */ "./node_modules/react-bootstrap-typeahead/es/components/Token.js");
/* harmony import */ var _TypeaheadInputMulti__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TypeaheadInputMulti */ "./node_modules/react-bootstrap-typeahead/es/components/TypeaheadInputMulti.js");
/* harmony import */ var _TypeaheadInputSingle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TypeaheadInputSingle */ "./node_modules/react-bootstrap-typeahead/es/components/TypeaheadInputSingle.js");
/* harmony import */ var _TypeaheadMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TypeaheadMenu */ "./node_modules/react-bootstrap-typeahead/es/components/TypeaheadMenu.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../propTypes */ "./node_modules/react-bootstrap-typeahead/es/propTypes.js");



















var propTypes = {
  /**
   * Displays a button to clear the input when there are selections.
   */
  clearButton: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Props to be applied directly to the input. `onBlur`, `onChange`,
   * `onFocus`, and `onKeyDown` are ignored.
   */
  inputProps: Object(_propTypes__WEBPACK_IMPORTED_MODULE_18__["checkPropType"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object, _propTypes__WEBPACK_IMPORTED_MODULE_18__["inputPropsType"]),

  /**
   * Bootstrap 4 only. Adds the `is-invalid` classname to the `form-control`.
   */
  isInvalid: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Indicate whether an asynchronous data fetch is happening.
   */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Bootstrap 4 only. Adds the `is-valid` classname to the `form-control`.
   */
  isValid: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Callback for custom input rendering.
   */
  renderInput: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback for custom menu rendering.
   */
  renderMenu: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback for custom menu rendering.
   */
  renderToken: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Specifies the size of the input.
   */
  size: _propTypes__WEBPACK_IMPORTED_MODULE_18__["sizeType"]
};
var defaultProps = {
  clearButton: false,
  inputProps: {},
  isInvalid: false,
  isLoading: false,
  isValid: false,
  renderMenu: function renderMenu(results, menuProps, props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_TypeaheadMenu__WEBPACK_IMPORTED_MODULE_16__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, menuProps, {
      labelKey: props.labelKey,
      options: results,
      text: props.text
    }));
  },
  renderToken: function renderToken(option, props, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Token__WEBPACK_IMPORTED_MODULE_13__["default"], {
      disabled: props.disabled,
      key: idx,
      onRemove: props.onRemove,
      option: option,
      tabIndex: props.tabIndex
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_17__["getOptionLabel"])(option, props.labelKey));
  }
};

function getOverlayProps(props) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_17__["pick"])(props, ['align', 'dropup', 'flip', 'positionFixed']);
}

var RootClose = function RootClose(_ref) {
  var children = _ref.children,
      onRootClose = _ref.onRootClose,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["children", "onRootClose"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      rootElement = _useState[0],
      attachRef = _useState[1];

  Object(react_overlays_useRootClose__WEBPACK_IMPORTED_MODULE_8__["default"])(rootElement, onRootClose, props);
  return children(attachRef);
};

var TypeaheadComponent = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(TypeaheadComponent, _React$Component);

  function TypeaheadComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "_referenceElement", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "referenceElementRef", function (referenceElement) {
      _this._referenceElement = referenceElement;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "_renderInput", function (inputProps, props) {
      var _this$props = _this.props,
          isInvalid = _this$props.isInvalid,
          isValid = _this$props.isValid,
          multiple = _this$props.multiple,
          renderInput = _this$props.renderInput,
          renderToken = _this$props.renderToken,
          size = _this$props.size;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(renderInput)) {
        return renderInput(inputProps, props);
      }

      var commonProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, inputProps, {
        isInvalid: isInvalid,
        isValid: isValid,
        size: size
      });

      if (!multiple) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_TypeaheadInputSingle__WEBPACK_IMPORTED_MODULE_15__["default"], commonProps);
      }

      var labelKey = props.labelKey,
          onRemove = props.onRemove,
          selected = props.selected;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_TypeaheadInputMulti__WEBPACK_IMPORTED_MODULE_14__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, commonProps, {
        selected: selected
      }), selected.map(function (option, idx) {
        return renderToken(option, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, commonProps, {
          labelKey: labelKey,
          onRemove: onRemove
        }), idx);
      }));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "_renderMenu", function (results, menuProps, props) {
      var _this$props2 = _this.props,
          emptyLabel = _this$props2.emptyLabel,
          id = _this$props2.id,
          maxHeight = _this$props2.maxHeight,
          newSelectionPrefix = _this$props2.newSelectionPrefix,
          paginationText = _this$props2.paginationText,
          renderMenu = _this$props2.renderMenu,
          renderMenuItemChildren = _this$props2.renderMenuItemChildren;
      return renderMenu(results, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, menuProps, {
        emptyLabel: emptyLabel,
        id: id,
        maxHeight: maxHeight,
        newSelectionPrefix: newSelectionPrefix,
        paginationText: paginationText,
        renderMenuItemChildren: renderMenuItemChildren
      }), props);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "_renderAux", function (_ref2) {
      var onClear = _ref2.onClear,
          selected = _ref2.selected;
      var _this$props3 = _this.props,
          clearButton = _this$props3.clearButton,
          disabled = _this$props3.disabled,
          isLoading = _this$props3.isLoading,
          size = _this$props3.size;
      var content;

      if (isLoading) {
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], null);
      } else if (clearButton && !disabled && selected.length) {
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ClearButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onClick: onClear,
          onFocus: function onFocus(e) {
            // Prevent the main input from auto-focusing again.
            e.stopPropagation();
          },
          onMouseDown: _utils__WEBPACK_IMPORTED_MODULE_17__["preventInputBlur"],
          size: size
        });
      }

      return content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('rbt-aux', {
          'rbt-aux-lg': Object(_utils__WEBPACK_IMPORTED_MODULE_17__["isSizeLarge"])(size)
        })
      }, content) : null;
    });

    return _this;
  }

  var _proto = TypeaheadComponent.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props4 = this.props,
        children = _this$props4.children,
        className = _this$props4.className,
        instanceRef = _this$props4.instanceRef,
        open = _this$props4.open,
        options = _this$props4.options,
        style = _this$props4.style;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_core_Typeahead__WEBPACK_IMPORTED_MODULE_9__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, this.props, {
      options: options,
      ref: instanceRef
    }), function (_ref3) {
      var getInputProps = _ref3.getInputProps,
          props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3___default()(_ref3, ["getInputProps"]);

      var hideMenu = props.hideMenu,
          isMenuShown = props.isMenuShown,
          results = props.results;

      var auxContent = _this2._renderAux(props);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RootClose, {
        disabled: open || !isMenuShown,
        onRootClose: hideMenu
      }, function (ref) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('rbt', {
            'has-aux': !!auxContent
          }, className),
          ref: ref,
          style: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, style, {
            outline: 'none',
            position: 'relative'
          }),
          tabIndex: -1
        }, _this2._renderInput(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, getInputProps(_this2.props.inputProps), {
          referenceElementRef: _this2.referenceElementRef
        }), props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Overlay__WEBPACK_IMPORTED_MODULE_12__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, getOverlayProps(_this2.props), {
          isMenuShown: isMenuShown,
          referenceElement: _this2._referenceElement
        }), function (menuProps) {
          return _this2._renderMenu(results, menuProps, props);
        }), auxContent, Object(_utils__WEBPACK_IMPORTED_MODULE_17__["isFunction"])(children) ? children(props) : children);
      });
    });
  };

  return TypeaheadComponent;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(TypeaheadComponent, "propTypes", propTypes);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(TypeaheadComponent, "defaultProps", defaultProps);

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TypeaheadComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, props, {
    instanceRef: ref
  }));
}));

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/TypeaheadInputMulti.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/TypeaheadInputMulti.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Hint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Hint */ "./node_modules/react-bootstrap-typeahead/es/components/Hint.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Input */ "./node_modules/react-bootstrap-typeahead/es/components/Input.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");
/* harmony import */ var _behaviors_classNames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../behaviors/classNames */ "./node_modules/react-bootstrap-typeahead/es/behaviors/classNames.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./node_modules/react-bootstrap-typeahead/es/constants.js");






/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */








var TypeaheadInputMulti = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(TypeaheadInputMulti, _React$Component);

  function TypeaheadInputMulti() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "wrapperRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "_input", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getInputRef", function (input) {
      _this._input = input;

      _this.props.inputRef(input);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "_handleContainerClickOrFocus", function (e) {
      // Don't focus the input if it's disabled.
      if (_this.props.disabled) {
        e.currentTarget.blur();
        return;
      } // Move cursor to the end if the user clicks outside the actual input.


      var inputNode = _this._input;

      if (!inputNode) {
        return;
      }

      if (e.currentTarget !== inputNode && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isSelectable"])(inputNode)) {
        inputNode.selectionStart = inputNode.value.length;
      }

      inputNode.focus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "_handleKeyDown", function (e) {
      var _this$props = _this.props,
          onKeyDown = _this$props.onKeyDown,
          selected = _this$props.selected,
          value = _this$props.value;

      switch (e.keyCode) {
        case _constants__WEBPACK_IMPORTED_MODULE_11__["BACKSPACE"]:
          if (e.currentTarget === _this._input && selected.length && !value) {
            // Prevent browser from going back.
            e.preventDefault(); // If the input is selected and there is no text, focus the last
            // token when the user hits backspace.

            if (_this.wrapperRef.current) {
              var children = _this.wrapperRef.current.children;
              var lastToken = children[children.length - 2];
              lastToken && lastToken.focus();
            }
          }

          break;

        default:
          break;
      }

      onKeyDown(e);
    });

    return _this;
  }

  var _proto = TypeaheadInputMulti.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        inputClassName = _this$props2.inputClassName,
        inputRef = _this$props2.inputRef,
        placeholder = _this$props2.placeholder,
        referenceElementRef = _this$props2.referenceElementRef,
        selected = _this$props2.selected,
        shouldSelectHint = _this$props2.shouldSelectHint,
        props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props2, ["children", "className", "inputClassName", "inputRef", "placeholder", "referenceElementRef", "selected", "shouldSelectHint"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('rbt-input-multi', className),
      disabled: props.disabled,
      onClick: this._handleContainerClickOrFocus,
      onFocus: this._handleContainerClickOrFocus,
      ref: referenceElementRef,
      tabIndex: -1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "rbt-input-wrapper",
      ref: this.wrapperRef
    }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Hint__WEBPACK_IMPORTED_MODULE_7__["default"], {
      shouldSelect: shouldSelectHint
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      className: inputClassName,
      onKeyDown: this._handleKeyDown,
      placeholder: selected.length ? '' : placeholder,
      ref: this.getInputRef,
      style: {
        backgroundColor: 'transparent',
        border: 0,
        boxShadow: 'none',
        cursor: 'inherit',
        outline: 'none',
        padding: 0,
        width: '100%',
        zIndex: 1
      }
    })))));
  };

  return TypeaheadInputMulti;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_behaviors_classNames__WEBPACK_IMPORTED_MODULE_10__["default"])(TypeaheadInputMulti));

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/TypeaheadInputSingle.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/TypeaheadInputSingle.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Hint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hint */ "./node_modules/react-bootstrap-typeahead/es/components/Hint.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input */ "./node_modules/react-bootstrap-typeahead/es/components/Input.js");
/* harmony import */ var _behaviors_classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../behaviors/classNames */ "./node_modules/react-bootstrap-typeahead/es/behaviors/classNames.js");






/* harmony default export */ __webpack_exports__["default"] = (Object(_behaviors_classNames__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_ref) {
  var inputRef = _ref.inputRef,
      referenceElementRef = _ref.referenceElementRef,
      shouldSelectHint = _ref.shouldSelectHint,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["inputRef", "referenceElementRef", "shouldSelectHint"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Hint__WEBPACK_IMPORTED_MODULE_3__["default"], {
    shouldSelect: shouldSelectHint
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    ref: function ref(node) {
      inputRef(node);
      referenceElementRef(node);
    }
  })));
}));

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/components/TypeaheadMenu.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/components/TypeaheadMenu.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Highlighter */ "./node_modules/react-bootstrap-typeahead/es/components/Highlighter.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./node_modules/react-bootstrap-typeahead/es/components/Menu.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuItem */ "./node_modules/react-bootstrap-typeahead/es/components/MenuItem.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");








var propTypes = {
  /**
   * Provides the ability to specify a prefix before the user-entered text to
   * indicate that the selection will be new. No-op unless `allowNew={true}`.
   */
  newSelectionPrefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Prompt displayed when large data sets are paginated.
   */
  paginationText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Provides a hook for customized rendering of menu item contents.
   */
  renderMenuItemChildren: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
var defaultProps = {
  newSelectionPrefix: 'New selection: ',
  paginationText: 'Display additional results...',
  renderMenuItemChildren: function renderMenuItemChildren(option, props, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Highlighter__WEBPACK_IMPORTED_MODULE_4__["default"], {
      search: props.text
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getOptionLabel"])(option, props.labelKey));
  }
};

var TypeaheadMenu = function TypeaheadMenu(props) {
  var labelKey = props.labelKey,
      newSelectionPrefix = props.newSelectionPrefix,
      options = props.options,
      paginationText = props.paginationText,
      renderMenuItemChildren = props.renderMenuItemChildren,
      text = props.text,
      menuProps = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(props, ["labelKey", "newSelectionPrefix", "options", "paginationText", "renderMenuItemChildren", "text"]);

  var renderMenuItem = function renderMenuItem(option, position) {
    var label = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getOptionLabel"])(option, labelKey);
    var menuItemProps = {
      disabled: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getOptionProperty"])(option, 'disabled'),
      label: label,
      option: option,
      position: position
    };

    if (option.customOption) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, menuItemProps, {
        className: "rbt-menu-custom-option",
        key: position,
        label: label
      }), newSelectionPrefix, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Highlighter__WEBPACK_IMPORTED_MODULE_4__["default"], {
        search: text
      }, label));
    }

    if (option.paginationOption) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
        key: "pagination-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, menuItemProps, {
        className: "rbt-menu-pagination-option",
        label: paginationText
      }), paginationText));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, menuItemProps, {
      key: position
    }), renderMenuItemChildren(option, props, position));
  };

  return (
    /*#__PURE__*/
    // Explictly pass `text` so Flow doesn't complain...
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, menuProps, {
      text: text
    }), options.map(renderMenuItem))
  );
};

TypeaheadMenu.propTypes = propTypes;
TypeaheadMenu.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TypeaheadMenu);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/constants.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/constants.js ***!
  \****************************************************************/
/*! exports provided: BACKSPACE, TAB, RETURN, ESC, SPACE, LEFT, UP, RIGHT, DOWN, DEFAULT_LABELKEY, ALIGN, SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETURN", function() { return RETURN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESC", function() { return ESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LABELKEY", function() { return DEFAULT_LABELKEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIGN", function() { return ALIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZE", function() { return SIZE; });
/**
 * Common (non-printable) keycodes for `keydown` and `keyup` events. Note that
 * `keypress` handles things differently and may not return the same values.
 */
var BACKSPACE = 8;
var TAB = 9;
var RETURN = 13;
var ESC = 27;
var SPACE = 32;
var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;
var DEFAULT_LABELKEY = 'label';
var ALIGN = {
  JUSTIFY: 'justify',
  LEFT: 'left',
  RIGHT: 'right'
};
var SIZE = {
  LARGE: 'large',
  LG: 'lg',
  SM: 'sm',
  SMALL: 'small'
};

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/core/Context.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/core/Context.js ***!
  \*******************************************************************/
/*! exports provided: TypeaheadContext, useTypeaheadContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContext", function() { return TypeaheadContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTypeaheadContext", function() { return useTypeaheadContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");


var TypeaheadContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  activeIndex: -1,
  hintText: '',
  id: '',
  initialItem: null,
  inputNode: null,
  isOnlyResult: false,
  onActiveItemChange: _utils__WEBPACK_IMPORTED_MODULE_1__["noop"],
  onAdd: _utils__WEBPACK_IMPORTED_MODULE_1__["noop"],
  onInitialItemChange: _utils__WEBPACK_IMPORTED_MODULE_1__["noop"],
  onMenuItemClick: _utils__WEBPACK_IMPORTED_MODULE_1__["noop"],
  selectHintOnEnter: undefined,
  setItem: _utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
});
var useTypeaheadContext = function useTypeaheadContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TypeaheadContext);
};

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/core/Typeahead.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/core/Typeahead.js ***!
  \*********************************************************************/
/*! exports provided: getInitialState, clearTypeahead, hideMenu, toggleMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialState", function() { return getInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTypeahead", function() { return clearTypeahead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideMenu", function() { return hideMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMenu", function() { return toggleMenu; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TypeaheadManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TypeaheadManager */ "./node_modules/react-bootstrap-typeahead/es/core/TypeaheadManager.js");
/* harmony import */ var _propTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../propTypes */ "./node_modules/react-bootstrap-typeahead/es/propTypes.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./node_modules/react-bootstrap-typeahead/es/constants.js");












var propTypes = {
  /**
   * Allows the creation of new selections on the fly. Note that any new items
   * will be added to the list of selections, but not the list of original
   * options unless handled as such by `Typeahead`'s parent.
   *
   * If a function is specified, it will be used to determine whether a custom
   * option should be included. The return value should be true or false.
   */
  allowNew: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func]),

  /**
   * Autofocus the input when the component initially mounts.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Whether or not filtering should be case-sensitive.
   */
  caseSensitive: Object(_propTypes__WEBPACK_IMPORTED_MODULE_9__["checkPropType"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, _propTypes__WEBPACK_IMPORTED_MODULE_9__["caseSensitiveType"]),

  /**
   * The initial value displayed in the text input.
   */
  defaultInputValue: Object(_propTypes__WEBPACK_IMPORTED_MODULE_9__["checkPropType"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, _propTypes__WEBPACK_IMPORTED_MODULE_9__["defaultInputValueType"]),

  /**
   * Whether or not the menu is displayed upon initial render.
   */
  defaultOpen: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Specify any pre-selected options. Use only if you want the component to
   * be uncontrolled.
   */
  defaultSelected: Object(_propTypes__WEBPACK_IMPORTED_MODULE_9__["checkPropType"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(_propTypes__WEBPACK_IMPORTED_MODULE_9__["optionType"]), _propTypes__WEBPACK_IMPORTED_MODULE_9__["defaultSelectedType"]),

  /**
   * Either an array of fields in `option` to search, or a custom filtering
   * callback.
   */
  filterBy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func]),

  /**
   * Highlights the menu item if there is only one result and allows selecting
   * that item by hitting enter. Does not work with `allowNew`.
   */
  highlightOnlyResult: Object(_propTypes__WEBPACK_IMPORTED_MODULE_9__["checkPropType"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, _propTypes__WEBPACK_IMPORTED_MODULE_9__["highlightOnlyResultType"]),

  /**
   * An html id attribute, required for assistive technologies such as screen
   * readers.
   */
  id: Object(_propTypes__WEBPACK_IMPORTED_MODULE_9__["checkPropType"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string]), _propTypes__WEBPACK_IMPORTED_MODULE_9__["isRequiredForA11y"]),

  /**
   * Whether the filter should ignore accents and other diacritical marks.
   */
  ignoreDiacritics: Object(_propTypes__WEBPACK_IMPORTED_MODULE_9__["checkPropType"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, _propTypes__WEBPACK_IMPORTED_MODULE_9__["ignoreDiacriticsType"]),

  /**
   * Specify the option key to use for display or a function returning the
   * display string. By default, the selector will use the `label` key.
   */
  labelKey: Object(_propTypes__WEBPACK_IMPORTED_MODULE_9__["checkPropType"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func]), _propTypes__WEBPACK_IMPORTED_MODULE_9__["labelKeyType"]),

  /**
   * Maximum number of results to display by default. Mostly done for
   * performance reasons so as not to render too many DOM nodes in the case of
   * large data sets.
   */
  maxResults: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,

  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,

  /**
   * Whether or not multiple selections are allowed.
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Invoked when the input is blurred. Receives an event.
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Invoked whenever items are added or removed. Receives an array of the
   * selected options.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Invoked when the input is focused. Receives an event.
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Invoked when the input value changes. Receives the string value of the
   * input.
   */
  onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Invoked when a key is pressed. Receives an event.
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Invoked when menu visibility changes.
   */
  onMenuToggle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Invoked when the pagination menu item is clicked. Receives an event.
   */
  onPaginate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Whether or not the menu should be displayed. `undefined` allows the
   * component to control visibility, while `true` and `false` show and hide
   * the menu, respectively.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Full set of options, including pre-selected options. Must either be an
   * array of objects (recommended) or strings.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(_propTypes__WEBPACK_IMPORTED_MODULE_9__["optionType"]).isRequired,

  /**
   * Give user the ability to display additional results if the number of
   * results exceeds `maxResults`.
   */
  paginate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * The selected option(s) displayed in the input. Use this prop if you want
   * to control the component via its parent.
   */
  selected: Object(_propTypes__WEBPACK_IMPORTED_MODULE_9__["checkPropType"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(_propTypes__WEBPACK_IMPORTED_MODULE_9__["optionType"]), _propTypes__WEBPACK_IMPORTED_MODULE_9__["selectedType"]),

  /**
   * Allows selecting the hinted result by pressing enter.
   */
  selectHintOnEnter: Object(_propTypes__WEBPACK_IMPORTED_MODULE_9__["deprecated"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, 'Use the `shouldSelect` prop on the `Hint` component to define which ' + 'keystrokes can select the hint.')
};
var defaultProps = {
  allowNew: false,
  autoFocus: false,
  caseSensitive: false,
  defaultInputValue: '',
  defaultOpen: false,
  defaultSelected: [],
  filterBy: [],
  highlightOnlyResult: false,
  ignoreDiacritics: true,
  labelKey: _constants__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_LABELKEY"],
  maxResults: 100,
  minLength: 0,
  multiple: false,
  onBlur: _utils__WEBPACK_IMPORTED_MODULE_10__["noop"],
  onFocus: _utils__WEBPACK_IMPORTED_MODULE_10__["noop"],
  onInputChange: _utils__WEBPACK_IMPORTED_MODULE_10__["noop"],
  onKeyDown: _utils__WEBPACK_IMPORTED_MODULE_10__["noop"],
  onMenuToggle: _utils__WEBPACK_IMPORTED_MODULE_10__["noop"],
  onPaginate: _utils__WEBPACK_IMPORTED_MODULE_10__["noop"],
  paginate: true
};
function getInitialState(props) {
  var defaultInputValue = props.defaultInputValue,
      defaultOpen = props.defaultOpen,
      defaultSelected = props.defaultSelected,
      maxResults = props.maxResults,
      multiple = props.multiple;
  var selected = props.selected ? props.selected.slice() : defaultSelected.slice();
  var text = defaultInputValue;

  if (!multiple && selected.length) {
    // Set the text if an initial selection is passed in.
    text = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getOptionLabel"])(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["head"])(selected), props.labelKey);

    if (selected.length > 1) {
      // Limit to 1 selection in single-select mode.
      selected = selected.slice(0, 1);
    }
  }

  return {
    activeIndex: -1,
    activeItem: null,
    initialItem: null,
    isFocused: false,
    selected: selected,
    showMenu: defaultOpen,
    shownResults: maxResults,
    text: text
  };
}
function clearTypeahead(state, props) {
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, getInitialState(props), {
    isFocused: state.isFocused,
    selected: [],
    text: ''
  });
}
function hideMenu(state, props) {
  var _getInitialState = getInitialState(props),
      activeIndex = _getInitialState.activeIndex,
      activeItem = _getInitialState.activeItem,
      initialItem = _getInitialState.initialItem,
      shownResults = _getInitialState.shownResults;

  return {
    activeIndex: activeIndex,
    activeItem: activeItem,
    initialItem: initialItem,
    showMenu: false,
    shownResults: shownResults
  };
}
function toggleMenu(state, props) {
  return state.showMenu ? hideMenu(state, props) : {
    showMenu: true
  };
}

var Typeahead = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(Typeahead, _React$Component);

  function Typeahead() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "state", getInitialState(_this.props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "inputNode", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "isMenuShown", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "items", []);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "blur", function () {
      _this.inputNode && _this.inputNode.blur();

      _this.hideMenu();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "clear", function () {
      _this.setState(clearTypeahead);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "focus", function () {
      _this.inputNode && _this.inputNode.focus();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "getInput", function () {
      return _this.inputNode;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "inputRef", function (inputNode) {
      _this.inputNode = inputNode;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "setItem", function (item, position) {
      _this.items[position] = item;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "hideMenu", function () {
      _this.setState(hideMenu);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "toggleMenu", function () {
      _this.setState(toggleMenu);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleActiveIndexChange", function (activeIndex) {
      _this.setState(function (state) {
        return {
          activeIndex: activeIndex,
          activeItem: activeIndex === -1 ? null : state.activeItem
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleActiveItemChange", function (activeItem) {
      // Don't update the active item if it hasn't changed.
      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_5___default()(activeItem, _this.state.activeItem)) {
        _this.setState({
          activeItem: activeItem
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleBlur", function (e) {
      e.persist();

      _this.setState({
        isFocused: false
      }, function () {
        return _this.props.onBlur(e);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleChange", function (selected) {
      _this.props.onChange && _this.props.onChange(selected);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleClear", function () {
      _this.setState(clearTypeahead, function () {
        return _this._handleChange([]);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleFocus", function (e) {
      e.persist();

      _this.setState({
        isFocused: true,
        showMenu: true
      }, function () {
        return _this.props.onFocus(e);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleInitialItemChange", function (initialItem) {
      // Don't update the initial item if it hasn't changed.
      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_5___default()(initialItem, _this.state.initialItem)) {
        _this.setState({
          initialItem: initialItem
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleInputChange", function (e) {
      e.persist();
      var text = e.currentTarget.value;
      var _this$props = _this.props,
          multiple = _this$props.multiple,
          onInputChange = _this$props.onInputChange; // Clear selections when the input value changes in single-select mode.

      var shouldClearSelections = _this.state.selected.length && !multiple;

      _this.setState(function (state, props) {
        var _getInitialState2 = getInitialState(props),
            activeIndex = _getInitialState2.activeIndex,
            activeItem = _getInitialState2.activeItem,
            shownResults = _getInitialState2.shownResults;

        return {
          activeIndex: activeIndex,
          activeItem: activeItem,
          selected: shouldClearSelections ? [] : state.selected,
          showMenu: true,
          shownResults: shownResults,
          text: text
        };
      }, function () {
        onInputChange(text, e);
        shouldClearSelections && _this._handleChange([]);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleKeyDown", function (e) {
      var activeItem = _this.state.activeItem; // Skip most actions when the menu is hidden.

      if (!_this.isMenuShown) {
        if (e.keyCode === _constants__WEBPACK_IMPORTED_MODULE_11__["UP"] || e.keyCode === _constants__WEBPACK_IMPORTED_MODULE_11__["DOWN"]) {
          _this.setState({
            showMenu: true
          });
        }

        _this.props.onKeyDown(e);

        return;
      }

      switch (e.keyCode) {
        case _constants__WEBPACK_IMPORTED_MODULE_11__["UP"]:
        case _constants__WEBPACK_IMPORTED_MODULE_11__["DOWN"]:
          // Prevent input cursor from going to the beginning when pressing up.
          e.preventDefault();

          _this._handleActiveIndexChange(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getUpdatedActiveIndex"])(_this.state.activeIndex, e.keyCode, _this.items));

          break;

        case _constants__WEBPACK_IMPORTED_MODULE_11__["RETURN"]:
          // Prevent form submission while menu is open.
          e.preventDefault();
          activeItem && _this._handleMenuItemSelect(activeItem, e);
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_11__["ESC"]:
        case _constants__WEBPACK_IMPORTED_MODULE_11__["TAB"]:
          // ESC simply hides the menu. TAB will blur the input and move focus to
          // the next item; hide the menu so it doesn't gain focus.
          _this.hideMenu();

          break;

        default:
          break;
      }

      _this.props.onKeyDown(e);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleMenuItemSelect", function (option, e) {
      if (option.paginationOption) {
        _this._handlePaginate(e);
      } else {
        _this._handleSelectionAdd(option);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handlePaginate", function (e) {
      e.persist();

      _this.setState(function (state, props) {
        return {
          shownResults: state.shownResults + props.maxResults
        };
      }, function () {
        return _this.props.onPaginate(e, _this.state.shownResults);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleSelectionAdd", function (option) {
      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          labelKey = _this$props2.labelKey;
      var selected;
      var selection = option;
      var text; // Add a unique id to the custom selection. Avoid doing this in `render` so
      // the id doesn't increment every time.

      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_10__["isString"])(selection) && selection.customOption) {
        selection = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, selection, {
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["uniqueId"])('new-id-')
        });
      }

      if (multiple) {
        // If multiple selections are allowed, add the new selection to the
        // existing selections.
        selected = _this.state.selected.concat(selection);
        text = '';
      } else {
        // If only a single selection is allowed, replace the existing selection
        // with the new one.
        selected = [selection];
        text = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getOptionLabel"])(selection, labelKey);
      }

      _this.setState(function (state, props) {
        return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, hideMenu(state, props), {
          initialItem: selection,
          selected: selected,
          text: text
        });
      }, function () {
        return _this._handleChange(selected);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "_handleSelectionRemove", function (selection) {
      var selected = _this.state.selected.filter(function (option) {
        return !fast_deep_equal__WEBPACK_IMPORTED_MODULE_5___default()(option, selection);
      }); // Make sure the input stays focused after the item is removed.


      _this.focus();

      _this.setState(function (state, props) {
        return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, hideMenu(state, props), {
          selected: selected
        });
      }, function () {
        return _this._handleChange(selected);
      });
    });

    return _this;
  }

  var _proto = Typeahead.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.autoFocus && this.focus();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this$props3 = this.props,
        labelKey = _this$props3.labelKey,
        multiple = _this$props3.multiple,
        selected = _this$props3.selected;
    Object(_utils__WEBPACK_IMPORTED_MODULE_10__["validateSelectedPropChange"])(selected, prevProps.selected); // Sync selections in state with those in props.

    if (selected && !fast_deep_equal__WEBPACK_IMPORTED_MODULE_5___default()(selected, prevState.selected)) {
      this.setState({
        selected: selected
      });

      if (!multiple) {
        this.setState({
          text: selected.length ? Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getOptionLabel"])(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["head"])(selected), labelKey) : ''
        });
      }
    }
  };

  _proto.render = function render() {
    // Omit `onChange` so Flow doesn't complain.
    var _this$props4 = this.props,
        onChange = _this$props4.onChange,
        otherProps = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_this$props4, ["onChange"]);

    var mergedPropsAndState = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, otherProps, this.state);

    var filterBy = mergedPropsAndState.filterBy,
        labelKey = mergedPropsAndState.labelKey,
        options = mergedPropsAndState.options,
        paginate = mergedPropsAndState.paginate,
        shownResults = mergedPropsAndState.shownResults,
        text = mergedPropsAndState.text;
    this.isMenuShown = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["isShown"])(mergedPropsAndState);
    this.items = []; // Reset items on re-render.

    var results = [];

    if (this.isMenuShown) {
      var cb = typeof filterBy === 'function' ? filterBy : _utils__WEBPACK_IMPORTED_MODULE_10__["defaultFilterBy"];
      results = options.filter(function (option) {
        return cb(option, mergedPropsAndState);
      }); // This must come before results are truncated.

      var shouldPaginate = paginate && results.length > shownResults; // Truncate results if necessary.

      results = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getTruncatedOptions"])(results, shownResults); // Add the custom option if necessary.

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_10__["addCustomOption"])(results, mergedPropsAndState)) {
        var _results$push;

        results.push((_results$push = {
          customOption: true
        }, _results$push[Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getStringLabelKey"])(labelKey)] = text, _results$push));
      } // Add the pagination item if necessary.


      if (shouldPaginate) {
        var _results$push2;

        results.push((_results$push2 = {}, _results$push2[Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getStringLabelKey"])(labelKey)] = '', _results$push2.paginationOption = true, _results$push2));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_TypeaheadManager__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, mergedPropsAndState, {
      hideMenu: this.hideMenu,
      inputNode: this.inputNode,
      inputRef: this.inputRef,
      isMenuShown: this.isMenuShown,
      onActiveItemChange: this._handleActiveItemChange,
      onAdd: this._handleSelectionAdd,
      onBlur: this._handleBlur,
      onChange: this._handleInputChange,
      onClear: this._handleClear,
      onFocus: this._handleFocus,
      onHide: this.hideMenu,
      onInitialItemChange: this._handleInitialItemChange,
      onKeyDown: this._handleKeyDown,
      onMenuItemClick: this._handleMenuItemSelect,
      onRemove: this._handleSelectionRemove,
      results: results,
      setItem: this.setItem,
      toggleMenu: this.toggleMenu
    }));
  };

  return Typeahead;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Typeahead, "propTypes", propTypes);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Typeahead, "defaultProps", defaultProps);

/* harmony default export */ __webpack_exports__["default"] = (Typeahead);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/core/TypeaheadManager.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/core/TypeaheadManager.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/usePrevious */ "./node_modules/@restart/hooks/esm/usePrevious.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context */ "./node_modules/react-bootstrap-typeahead/es/core/Context.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./node_modules/react-bootstrap-typeahead/es/constants.js");






var inputPropKeys = ['activeIndex', 'disabled', 'id', 'inputRef', 'isFocused', 'isMenuShown', 'multiple', 'onBlur', 'onChange', 'onFocus', 'onKeyDown', 'placeholder'];
var propKeys = ['activeIndex', 'hideMenu', 'isMenuShown', 'labelKey', 'onClear', 'onHide', 'onRemove', 'results', 'selected', 'text', 'toggleMenu'];
var contextKeys = ['activeIndex', 'id', 'initialItem', 'inputNode', 'onActiveItemChange', 'onAdd', 'onInitialItemChange', 'onMenuItemClick', 'selectHintOnEnter', 'setItem'];

var TypeaheadManager = function TypeaheadManager(props) {
  var allowNew = props.allowNew,
      children = props.children,
      initialItem = props.initialItem,
      isMenuShown = props.isMenuShown,
      onAdd = props.onAdd,
      onInitialItemChange = props.onInitialItemChange,
      onKeyDown = props.onKeyDown,
      onMenuToggle = props.onMenuToggle,
      results = props.results;
  var prevProps = Object(_restart_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_2__["default"])(props);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Clear the initial item when there are no results.
    if (!(allowNew || results.length)) {
      onInitialItemChange(null);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (prevProps && prevProps.isMenuShown !== isMenuShown) {
      onMenuToggle(isMenuShown);
    }
  });

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.keyCode) {
      case _constants__WEBPACK_IMPORTED_MODULE_5__["RETURN"]:
        if (initialItem && Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getIsOnlyResult"])(props)) {
          onAdd(initialItem);
        }

        break;

      default:
        break;
    }

    onKeyDown(e);
  };

  var childProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["pick"])(props, propKeys), {
    getInputProps: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getInputProps"])(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["pick"])(props, inputPropKeys), {
      onKeyDown: handleKeyDown,
      value: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getInputText"])(props)
    }))
  });

  var contextValue = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["pick"])(props, contextKeys), {
    hintText: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getHintText"])(props),
    isOnlyResult: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getIsOnlyResult"])(props)
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Context__WEBPACK_IMPORTED_MODULE_3__["TypeaheadContext"].Provider, {
    value: contextValue
  }, children(childProps));
};

/* harmony default export */ __webpack_exports__["default"] = (TypeaheadManager);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/index.js ***!
  \************************************************************/
/*! exports provided: AsyncTypeahead, ClearButton, Highlighter, Hint, useHint, Input, Loader, Menu, MenuItem, Token, Typeahead, TypeaheadInputMulti, TypeaheadInputSingle, TypeaheadMenu, asyncContainer, useAsync, withAsync, menuItemContainer, useItem, withItem, tokenContainer, useToken, withToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AsyncTypeahead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AsyncTypeahead */ "./node_modules/react-bootstrap-typeahead/es/components/AsyncTypeahead.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncTypeahead", function() { return _components_AsyncTypeahead__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_ClearButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ClearButton */ "./node_modules/react-bootstrap-typeahead/es/components/ClearButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearButton", function() { return _components_ClearButton__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Highlighter */ "./node_modules/react-bootstrap-typeahead/es/components/Highlighter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Highlighter", function() { return _components_Highlighter__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_Hint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Hint */ "./node_modules/react-bootstrap-typeahead/es/components/Hint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hint", function() { return _components_Hint__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHint", function() { return _components_Hint__WEBPACK_IMPORTED_MODULE_3__["useHint"]; });

/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Input */ "./node_modules/react-bootstrap-typeahead/es/components/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _components_Input__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Loader */ "./node_modules/react-bootstrap-typeahead/es/components/Loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Menu */ "./node_modules/react-bootstrap-typeahead/es/components/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _components_Menu__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/MenuItem */ "./node_modules/react-bootstrap-typeahead/es/components/MenuItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _components_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_Token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Token */ "./node_modules/react-bootstrap-typeahead/es/components/Token.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return _components_Token__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _components_Typeahead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Typeahead */ "./node_modules/react-bootstrap-typeahead/es/components/Typeahead.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Typeahead", function() { return _components_Typeahead__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _components_TypeaheadInputMulti__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/TypeaheadInputMulti */ "./node_modules/react-bootstrap-typeahead/es/components/TypeaheadInputMulti.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadInputMulti", function() { return _components_TypeaheadInputMulti__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _components_TypeaheadInputSingle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/TypeaheadInputSingle */ "./node_modules/react-bootstrap-typeahead/es/components/TypeaheadInputSingle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadInputSingle", function() { return _components_TypeaheadInputSingle__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _components_TypeaheadMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/TypeaheadMenu */ "./node_modules/react-bootstrap-typeahead/es/components/TypeaheadMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMenu", function() { return _components_TypeaheadMenu__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _behaviors_async__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./behaviors/async */ "./node_modules/react-bootstrap-typeahead/es/behaviors/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncContainer", function() { return _behaviors_async__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsync", function() { return _behaviors_async__WEBPACK_IMPORTED_MODULE_13__["useAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAsync", function() { return _behaviors_async__WEBPACK_IMPORTED_MODULE_13__["withAsync"]; });

/* harmony import */ var _behaviors_item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./behaviors/item */ "./node_modules/react-bootstrap-typeahead/es/behaviors/item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menuItemContainer", function() { return _behaviors_item__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useItem", function() { return _behaviors_item__WEBPACK_IMPORTED_MODULE_14__["useItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withItem", function() { return _behaviors_item__WEBPACK_IMPORTED_MODULE_14__["withItem"]; });

/* harmony import */ var _behaviors_token__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./behaviors/token */ "./node_modules/react-bootstrap-typeahead/es/behaviors/token.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenContainer", function() { return _behaviors_token__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useToken", function() { return _behaviors_token__WEBPACK_IMPORTED_MODULE_15__["useToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withToken", function() { return _behaviors_token__WEBPACK_IMPORTED_MODULE_15__["withToken"]; });

// Components


























 // HOCs + Hooks











/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/propTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/propTypes.js ***!
  \****************************************************************/
/*! exports provided: sizeType, checkPropType, caseSensitiveType, deprecated, defaultInputValueType, defaultSelectedType, highlightOnlyResultType, ignoreDiacriticsType, inputPropsType, isRequiredForA11y, labelKeyType, optionType, selectedType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeType", function() { return sizeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPropType", function() { return checkPropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseSensitiveType", function() { return caseSensitiveType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecated", function() { return deprecated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultInputValueType", function() { return defaultInputValueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSelectedType", function() { return defaultSelectedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightOnlyResultType", function() { return highlightOnlyResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreDiacriticsType", function() { return ignoreDiacriticsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputPropsType", function() { return inputPropsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequiredForA11y", function() { return isRequiredForA11y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelKeyType", function() { return labelKeyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionType", function() { return optionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedType", function() { return selectedType; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-bootstrap-typeahead/es/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/react-bootstrap-typeahead/es/constants.js");



var INPUT_PROPS_BLACKLIST = [{
  alt: 'onBlur',
  prop: 'onBlur'
}, {
  alt: 'onInputChange',
  prop: 'onChange'
}, {
  alt: 'onFocus',
  prop: 'onFocus'
}, {
  alt: 'onKeyDown',
  prop: 'onKeyDown'
}];
var sizeType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["values"])(_constants__WEBPACK_IMPORTED_MODULE_2__["SIZE"]));
/**
 * Allows additional warnings or messaging related to prop validation.
 */

function checkPropType(validator, callback) {
  return function (props, propName, componentName) {
    var _PropTypes$checkPropT;

    prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.checkPropTypes((_PropTypes$checkPropT = {}, _PropTypes$checkPropT[propName] = validator, _PropTypes$checkPropT), props, 'prop', componentName);
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(callback) && callback(props, propName, componentName);
  };
}
function caseSensitiveType(props, propName, componentName) {
  var caseSensitive = props.caseSensitive,
      filterBy = props.filterBy;
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["warn"])(!caseSensitive || typeof filterBy !== 'function', 'Your `filterBy` function will override the `caseSensitive` prop.');
}
function deprecated(validator, reason) {
  return function (props, propName, componentName) {
    var _PropTypes$checkPropT2;

    if (props[propName] != null) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["warn"])(false, "The `" + propName + "` prop is deprecated. " + reason);
    }

    return prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.checkPropTypes((_PropTypes$checkPropT2 = {}, _PropTypes$checkPropT2[propName] = validator, _PropTypes$checkPropT2), props, 'prop', componentName);
  };
}
function defaultInputValueType(props, propName, componentName) {
  var defaultInputValue = props.defaultInputValue,
      defaultSelected = props.defaultSelected,
      multiple = props.multiple,
      selected = props.selected;
  var name = defaultSelected.length ? 'defaultSelected' : 'selected';
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["warn"])(!(!multiple && defaultInputValue && (defaultSelected.length || selected && selected.length)), "`defaultInputValue` will be overridden by the value from `" + name + "`.");
}
function defaultSelectedType(props, propName, componentName) {
  var defaultSelected = props.defaultSelected,
      multiple = props.multiple;
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["warn"])(multiple || defaultSelected.length <= 1, 'You are passing multiple options to the `defaultSelected` prop of a ' + 'Typeahead in single-select mode. The selections will be truncated to a ' + 'single selection.');
}
function highlightOnlyResultType(props, propName, componentName) {
  var allowNew = props.allowNew,
      highlightOnlyResult = props.highlightOnlyResult;
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["warn"])(!(highlightOnlyResult && allowNew), '`highlightOnlyResult` will not work with `allowNew`.');
}
function ignoreDiacriticsType(props, propName, componentName) {
  var filterBy = props.filterBy,
      ignoreDiacritics = props.ignoreDiacritics;
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["warn"])(ignoreDiacritics || typeof filterBy !== 'function', 'Your `filterBy` function will override the `ignoreDiacritics` prop.');
}
function inputPropsType(props, propName, componentName) {
  var inputProps = props.inputProps;

  if (!(inputProps && Object.prototype.toString.call(inputProps) === '[object Object]')) {
    return;
  } // Blacklisted properties.


  INPUT_PROPS_BLACKLIST.forEach(function (_ref) {
    var alt = _ref.alt,
        prop = _ref.prop;
    var msg = alt ? " Use the top-level `" + alt + "` prop instead." : null;
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["warn"])(!inputProps[prop], "The `" + prop + "` property of `inputProps` will be ignored." + msg);
  });
}
function isRequiredForA11y(props, propName, componentName) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["warn"])(props[propName] != null, "The prop `" + propName + "` is required to make `" + componentName + "` " + 'accessible for users of assistive technologies such as screen readers.');
}
function labelKeyType(props, propName, componentName) {
  var allowNew = props.allowNew,
      labelKey = props.labelKey;
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["warn"])(!(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(labelKey) && allowNew), '`labelKey` must be a string when `allowNew={true}`.');
}
var optionType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]);
function selectedType(props, propName, componentName) {
  var multiple = props.multiple,
      onChange = props.onChange,
      selected = props.selected;
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["warn"])(multiple || !selected || selected.length <= 1, 'You are passing multiple options to the `selected` prop of a Typeahead ' + 'in single-select mode. This may lead to unexpected behaviors or errors.');
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["warn"])(!selected || selected && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(onChange), 'You provided a `selected` prop without an `onChange` handler. If you ' + 'want the typeahead to be uncontrolled, use `defaultSelected`. ' + 'Otherwise, set `onChange`.');
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/addCustomOption.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/addCustomOption.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getOptionLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOptionLabel */ "./node_modules/react-bootstrap-typeahead/es/utils/getOptionLabel.js");


function addCustomOption(results, props) {
  var allowNew = props.allowNew,
      labelKey = props.labelKey,
      text = props.text;

  if (!allowNew || !text.trim()) {
    return false;
  } // If the consumer has provided a callback, use that to determine whether or
  // not to add the custom option.


  if (typeof allowNew === 'function') {
    return allowNew(results, props);
  } // By default, don't add the custom option if there is an exact text match
  // with an existing option.


  return !results.some(function (o) {
    return Object(_getOptionLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(o, labelKey) === text;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (addCustomOption);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/defaultFilterBy.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/defaultFilterBy.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultFilterBy; });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getOptionProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOptionProperty */ "./node_modules/react-bootstrap-typeahead/es/utils/getOptionProperty.js");
/* harmony import */ var _nodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodash */ "./node_modules/react-bootstrap-typeahead/es/utils/nodash.js");
/* harmony import */ var _stripDiacritics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stripDiacritics */ "./node_modules/react-bootstrap-typeahead/es/utils/stripDiacritics.js");
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warn */ "./node_modules/react-bootstrap-typeahead/es/utils/warn.js");






function isMatch(input, string, props) {
  var searchStr = input;
  var str = string;

  if (!props.caseSensitive) {
    searchStr = searchStr.toLowerCase();
    str = str.toLowerCase();
  }

  if (props.ignoreDiacritics) {
    searchStr = Object(_stripDiacritics__WEBPACK_IMPORTED_MODULE_3__["default"])(searchStr);
    str = Object(_stripDiacritics__WEBPACK_IMPORTED_MODULE_3__["default"])(str);
  }

  return str.indexOf(searchStr) !== -1;
}
/**
 * Default algorithm for filtering results.
 */


function defaultFilterBy(option, props) {
  var filterBy = props.filterBy,
      labelKey = props.labelKey,
      multiple = props.multiple,
      selected = props.selected,
      text = props.text; // Don't show selected options in the menu for the multi-select case.

  if (multiple && selected.some(function (o) {
    return fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(o, option);
  })) {
    return false;
  }

  if (Object(_nodash__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(labelKey) && isMatch(text, labelKey(option), props)) {
    return true;
  }

  var fields = filterBy.slice();

  if (Object(_nodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(labelKey)) {
    // Add the `labelKey` field to the list of fields if it isn't already there.
    if (fields.indexOf(labelKey) === -1) {
      fields.unshift(labelKey);
    }
  }

  if (Object(_nodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(option)) {
    Object(_warn__WEBPACK_IMPORTED_MODULE_4__["default"])(fields.length <= 1, 'You cannot filter by properties when `option` is a string.');
    return isMatch(text, option, props);
  }

  return fields.some(function (field) {
    var value = Object(_getOptionProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(option, field);

    if (!Object(_nodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(value)) {
      Object(_warn__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Fields passed to `filterBy` should have string values. Value will ' + 'be converted to a string; results may be unexpected.');
      value = String(value);
    }

    return isMatch(text, value, props);
  });
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getDisplayName.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getDisplayName.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDisplayName; });
function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getHintText.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getHintText.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMatchBounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMatchBounds */ "./node_modules/react-bootstrap-typeahead/es/utils/getMatchBounds.js");
/* harmony import */ var _getOptionLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOptionLabel */ "./node_modules/react-bootstrap-typeahead/es/utils/getOptionLabel.js");



function getHintText(props) {
  var activeIndex = props.activeIndex,
      initialItem = props.initialItem,
      isFocused = props.isFocused,
      isMenuShown = props.isMenuShown,
      labelKey = props.labelKey,
      multiple = props.multiple,
      selected = props.selected,
      text = props.text; // Don't display a hint under the following conditions:

  if ( // No text entered.
  !text || // The input is not focused.
  !isFocused || // The menu is hidden.
  !isMenuShown || // No item in the menu.
  !initialItem || // The initial item is a custom option.
  initialItem.customOption || // One of the menu items is active.
  activeIndex > -1 || // There's already a selection in single-select mode.
  !!selected.length && !multiple) {
    return '';
  }

  var initialItemStr = Object(_getOptionLabel__WEBPACK_IMPORTED_MODULE_1__["default"])(initialItem, labelKey);
  var bounds = Object(_getMatchBounds__WEBPACK_IMPORTED_MODULE_0__["default"])(initialItemStr.toLowerCase(), text.toLowerCase());

  if (!(bounds && bounds.start === 0)) {
    return '';
  } // Text matching is case- and accent-insensitive, so to display the hint
  // correctly, splice the input string with the hint string.


  return text + initialItemStr.slice(bounds.end, initialItemStr.length);
}

/* harmony default export */ __webpack_exports__["default"] = (getHintText);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getInputProps.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getInputProps.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getMenuItemId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMenuItemId */ "./node_modules/react-bootstrap-typeahead/es/utils/getMenuItemId.js");





var getInputProps = function getInputProps(_ref) {
  var activeIndex = _ref.activeIndex,
      id = _ref.id,
      isFocused = _ref.isFocused,
      isMenuShown = _ref.isMenuShown,
      multiple = _ref.multiple,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      rest = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["activeIndex", "id", "isFocused", "isMenuShown", "multiple", "onFocus", "placeholder"]);

  return function (_temp) {
    var _cx;

    var _ref2 = _temp === void 0 ? {} : _temp,
        className = _ref2.className,
        inputProps = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["className"]);

    var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      /* eslint-disable sort-keys */
      // These props can be overridden by values in `inputProps`.
      autoComplete: 'off',
      placeholder: placeholder,
      type: 'text'
    }, inputProps, rest, {
      'aria-activedescendant': activeIndex >= 0 ? Object(_getMenuItemId__WEBPACK_IMPORTED_MODULE_3__["default"])(id, activeIndex) : undefined,
      'aria-autocomplete': 'both',
      'aria-expanded': isMenuShown,
      'aria-haspopup': 'listbox',
      'aria-owns': isMenuShown ? id : undefined,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_cx = {}, _cx[className || ''] = !multiple, _cx.focus = isFocused, _cx)),
      // Re-open the menu, eg: if it's closed via ESC.
      onClick: onFocus,
      onFocus: onFocus,
      // Comboboxes are single-select by definition:
      // https://www.w3.org/TR/wai-aria-practices-1.1/#combobox
      role: 'combobox'
      /* eslint-enable sort-keys */

    });

    if (!multiple) {
      return props;
    }

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      'aria-autocomplete': 'list',
      'aria-expanded': undefined,
      inputClassName: className,
      role: undefined
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getInputProps);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getInputText.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getInputText.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getOptionLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOptionLabel */ "./node_modules/react-bootstrap-typeahead/es/utils/getOptionLabel.js");
/* harmony import */ var _nodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodash */ "./node_modules/react-bootstrap-typeahead/es/utils/nodash.js");



function getInputText(props) {
  var activeItem = props.activeItem,
      labelKey = props.labelKey,
      multiple = props.multiple,
      selected = props.selected,
      text = props.text;

  if (activeItem) {
    // Display the input value if the pagination item is active.
    return Object(_getOptionLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(activeItem, labelKey);
  }

  var selectedItem = !multiple && !!selected.length && Object(_nodash__WEBPACK_IMPORTED_MODULE_1__["head"])(selected);

  if (selectedItem) {
    return Object(_getOptionLabel__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedItem, labelKey);
  }

  return text;
}

/* harmony default export */ __webpack_exports__["default"] = (getInputText);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getIsOnlyResult.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getIsOnlyResult.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getOptionProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOptionProperty */ "./node_modules/react-bootstrap-typeahead/es/utils/getOptionProperty.js");
/* harmony import */ var _nodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodash */ "./node_modules/react-bootstrap-typeahead/es/utils/nodash.js");



function getIsOnlyResult(props) {
  var allowNew = props.allowNew,
      highlightOnlyResult = props.highlightOnlyResult,
      results = props.results;

  if (!highlightOnlyResult || allowNew) {
    return false;
  }

  return results.length === 1 && !Object(_getOptionProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_nodash__WEBPACK_IMPORTED_MODULE_1__["head"])(results), 'disabled');
}

/* harmony default export */ __webpack_exports__["default"] = (getIsOnlyResult);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getMatchBounds.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getMatchBounds.js ***!
  \***************************************************************************/
/*! exports provided: escapeStringRegexp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeStringRegexp", function() { return escapeStringRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMatchBounds; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripDiacritics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stripDiacritics */ "./node_modules/react-bootstrap-typeahead/es/utils/stripDiacritics.js");


var CASE_INSENSITIVE = 'i';
var COMBINING_MARKS = /[\u0300-\u036F]/;
// Export for testing.
function escapeStringRegexp(str) {
  !(typeof str === 'string') ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, '`escapeStringRegexp` expected a string.') : undefined : void 0; // Escape characters with special meaning either inside or outside character
  // sets. Use a simple backslash escape when it’s always valid, and a \unnnn
  // escape when the simpler form would be disallowed by Unicode patterns’
  // stricter grammar.

  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
function getMatchBounds(subject, str) {
  var search = new RegExp(escapeStringRegexp(Object(_stripDiacritics__WEBPACK_IMPORTED_MODULE_1__["default"])(str)), CASE_INSENSITIVE);
  var matches = search.exec(Object(_stripDiacritics__WEBPACK_IMPORTED_MODULE_1__["default"])(subject));

  if (!matches) {
    return null;
  }

  var start = matches.index;
  var matchLength = matches[0].length; // Account for combining marks, which changes the indices.

  if (COMBINING_MARKS.test(subject)) {
    // Starting at the beginning of the subject string, check for the number of
    // combining marks and increment the start index whenever one is found.
    for (var ii = 0; ii <= start; ii++) {
      if (COMBINING_MARKS.test(subject[ii])) {
        start += 1;
      }
    } // Similarly, increment the length of the match string if it contains a
    // combining mark.


    for (var _ii = start; _ii <= start + matchLength; _ii++) {
      if (COMBINING_MARKS.test(subject[_ii])) {
        matchLength += 1;
      }
    }
  }

  return {
    end: start + matchLength,
    start: start
  };
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getMenuItemId.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getMenuItemId.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMenuItemId; });
function getMenuItemId(id, position) {
  return (id || '') + "-item-" + position;
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getOptionLabel.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getOptionLabel.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getStringLabelKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getStringLabelKey */ "./node_modules/react-bootstrap-typeahead/es/utils/getStringLabelKey.js");
/* harmony import */ var _nodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodash */ "./node_modules/react-bootstrap-typeahead/es/utils/nodash.js");




/**
 * Retrieves the display string from an option. Options can be the string
 * themselves, or an object with a defined display string. Anything else throws
 * an error.
 */
function getOptionLabel(option, labelKey) {
  // Handle internally created options first.
  if (!Object(_nodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(option) && (option.paginationOption || option.customOption)) {
    return option[Object(_getStringLabelKey__WEBPACK_IMPORTED_MODULE_1__["default"])(labelKey)];
  }

  var optionLabel;

  if (Object(_nodash__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(labelKey)) {
    optionLabel = labelKey(option);
  } else if (Object(_nodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(option)) {
    optionLabel = option;
  } else {
    // `option` is an object and `labelKey` is a string.
    optionLabel = option[labelKey];
  }

  !Object(_nodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(optionLabel) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, 'One or more options does not have a valid label string. Check the ' + '`labelKey` prop to ensure that it matches the correct option key and ' + 'provides a string for filtering and display.') : undefined : void 0;
  return optionLabel;
}

/* harmony default export */ __webpack_exports__["default"] = (getOptionLabel);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getOptionProperty.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getOptionProperty.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOptionProperty; });
/* harmony import */ var _nodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodash */ "./node_modules/react-bootstrap-typeahead/es/utils/nodash.js");

function getOptionProperty(option, key) {
  if (Object(_nodash__WEBPACK_IMPORTED_MODULE_0__["isString"])(option)) {
    return undefined;
  }

  return option[key];
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getStringLabelKey.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getStringLabelKey.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getStringLabelKey; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/react-bootstrap-typeahead/es/constants.js");

function getStringLabelKey(labelKey) {
  return typeof labelKey === 'string' ? labelKey : _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_LABELKEY"];
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getTruncatedOptions.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getTruncatedOptions.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Truncates the result set based on `maxResults` and returns the new set.
 */
function getTruncatedOptions(options, maxResults) {
  if (!maxResults || maxResults >= options.length) {
    return options;
  }

  return options.slice(0, maxResults);
}

/* harmony default export */ __webpack_exports__["default"] = (getTruncatedOptions);

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/getUpdatedActiveIndex.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/getUpdatedActiveIndex.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUpdatedActiveIndex; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/react-bootstrap-typeahead/es/constants.js");


function skipDisabledOptions(currentIndex, keyCode, items) {
  var newIndex = currentIndex;

  while (items[newIndex] && items[newIndex].disabled) {
    newIndex += keyCode === _constants__WEBPACK_IMPORTED_MODULE_0__["UP"] ? -1 : 1;
  }

  return newIndex;
}

function getUpdatedActiveIndex(currentIndex, keyCode, items) {
  var newIndex = currentIndex; // Increment or decrement index based on user keystroke.

  newIndex += keyCode === _constants__WEBPACK_IMPORTED_MODULE_0__["UP"] ? -1 : 1; // Skip over any disabled options.

  newIndex = skipDisabledOptions(newIndex, keyCode, items); // If we've reached the end, go back to the beginning or vice-versa.

  if (newIndex === items.length) {
    newIndex = -1;
  } else if (newIndex === -2) {
    newIndex = items.length - 1; // Skip over any disabled options.

    newIndex = skipDisabledOptions(newIndex, keyCode, items);
  }

  return newIndex;
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/index.js ***!
  \******************************************************************/
/*! exports provided: addCustomOption, defaultFilterBy, getDisplayName, getHintText, getInputProps, getInputText, getIsOnlyResult, getMatchBounds, escapeStringRegexp, getMenuItemId, getOptionLabel, getOptionProperty, getStringLabelKey, getTruncatedOptions, getUpdatedActiveIndex, isSelectable, isShown, head, isFunction, isString, noop, pick, uniqueId, valuesPolyfill, values, preventInputBlur, isSizeLarge, isSizeSmall, stripDiacritics, validateSelectedPropChange, warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addCustomOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCustomOption */ "./node_modules/react-bootstrap-typeahead/es/utils/addCustomOption.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCustomOption", function() { return _addCustomOption__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _defaultFilterBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultFilterBy */ "./node_modules/react-bootstrap-typeahead/es/utils/defaultFilterBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultFilterBy", function() { return _defaultFilterBy__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _getDisplayName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDisplayName */ "./node_modules/react-bootstrap-typeahead/es/utils/getDisplayName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return _getDisplayName__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _getHintText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHintText */ "./node_modules/react-bootstrap-typeahead/es/utils/getHintText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHintText", function() { return _getHintText__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _getInputProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getInputProps */ "./node_modules/react-bootstrap-typeahead/es/utils/getInputProps.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInputProps", function() { return _getInputProps__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _getInputText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getInputText */ "./node_modules/react-bootstrap-typeahead/es/utils/getInputText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInputText", function() { return _getInputText__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _getIsOnlyResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getIsOnlyResult */ "./node_modules/react-bootstrap-typeahead/es/utils/getIsOnlyResult.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsOnlyResult", function() { return _getIsOnlyResult__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _getMatchBounds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getMatchBounds */ "./node_modules/react-bootstrap-typeahead/es/utils/getMatchBounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatchBounds", function() { return _getMatchBounds__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeStringRegexp", function() { return _getMatchBounds__WEBPACK_IMPORTED_MODULE_7__["escapeStringRegexp"]; });

/* harmony import */ var _getMenuItemId__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getMenuItemId */ "./node_modules/react-bootstrap-typeahead/es/utils/getMenuItemId.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuItemId", function() { return _getMenuItemId__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _getOptionLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getOptionLabel */ "./node_modules/react-bootstrap-typeahead/es/utils/getOptionLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionLabel", function() { return _getOptionLabel__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _getOptionProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getOptionProperty */ "./node_modules/react-bootstrap-typeahead/es/utils/getOptionProperty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOptionProperty", function() { return _getOptionProperty__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _getStringLabelKey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getStringLabelKey */ "./node_modules/react-bootstrap-typeahead/es/utils/getStringLabelKey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStringLabelKey", function() { return _getStringLabelKey__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _getTruncatedOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getTruncatedOptions */ "./node_modules/react-bootstrap-typeahead/es/utils/getTruncatedOptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTruncatedOptions", function() { return _getTruncatedOptions__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _getUpdatedActiveIndex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getUpdatedActiveIndex */ "./node_modules/react-bootstrap-typeahead/es/utils/getUpdatedActiveIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdatedActiveIndex", function() { return _getUpdatedActiveIndex__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _isSelectable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isSelectable */ "./node_modules/react-bootstrap-typeahead/es/utils/isSelectable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelectable", function() { return _isSelectable__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _isShown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isShown */ "./node_modules/react-bootstrap-typeahead/es/utils/isShown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isShown", function() { return _isShown__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _nodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nodash */ "./node_modules/react-bootstrap-typeahead/es/utils/nodash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _nodash__WEBPACK_IMPORTED_MODULE_16__["head"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _nodash__WEBPACK_IMPORTED_MODULE_16__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _nodash__WEBPACK_IMPORTED_MODULE_16__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _nodash__WEBPACK_IMPORTED_MODULE_16__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _nodash__WEBPACK_IMPORTED_MODULE_16__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return _nodash__WEBPACK_IMPORTED_MODULE_16__["uniqueId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valuesPolyfill", function() { return _nodash__WEBPACK_IMPORTED_MODULE_16__["valuesPolyfill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _nodash__WEBPACK_IMPORTED_MODULE_16__["values"]; });

/* harmony import */ var _preventInputBlur__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./preventInputBlur */ "./node_modules/react-bootstrap-typeahead/es/utils/preventInputBlur.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "preventInputBlur", function() { return _preventInputBlur__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./size */ "./node_modules/react-bootstrap-typeahead/es/utils/size.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSizeLarge", function() { return _size__WEBPACK_IMPORTED_MODULE_18__["isSizeLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSizeSmall", function() { return _size__WEBPACK_IMPORTED_MODULE_18__["isSizeSmall"]; });

/* harmony import */ var _stripDiacritics__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./stripDiacritics */ "./node_modules/react-bootstrap-typeahead/es/utils/stripDiacritics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripDiacritics", function() { return _stripDiacritics__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _validateSelectedPropChange__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./validateSelectedPropChange */ "./node_modules/react-bootstrap-typeahead/es/utils/validateSelectedPropChange.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateSelectedPropChange", function() { return _validateSelectedPropChange__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./warn */ "./node_modules/react-bootstrap-typeahead/es/utils/warn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _warn__WEBPACK_IMPORTED_MODULE_21__["default"]; });













































/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/isSelectable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/isSelectable.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSelectable; });
/**
 * Check if an input type is selectable, based on WHATWG spec.
 *
 * See:
 *  - https://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome/24175357
 *  - https://html.spec.whatwg.org/multipage/input.html#do-not-apply
 */
function isSelectable(inputNode) {
  return inputNode.selectionStart != null;
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/isShown.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/isShown.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isShown; });
function isShown(props) {
  var open = props.open,
      minLength = props.minLength,
      showMenu = props.showMenu,
      text = props.text; // If menu visibility is controlled via props, that value takes precedence.

  if (open || open === false) {
    return open;
  }

  if (text.length < minLength) {
    return false;
  }

  return showMenu;
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/nodash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/nodash.js ***!
  \*******************************************************************/
/*! exports provided: head, isFunction, isString, noop, pick, uniqueId, valuesPolyfill, values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valuesPolyfill", function() { return valuesPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
var idCounter = 0;
function head(arr) {
  return Array.isArray(arr) && arr.length ? arr[0] : undefined;
}
function isFunction(value) {
  return typeof value === 'function';
}
function isString(value) {
  return typeof value === 'string';
}
function noop() {}
function pick(obj, keys) {
  var result = {};
  keys.forEach(function (k) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      result[k] = obj[k];
    }
  });
  return result;
}
function uniqueId(prefix) {
  idCounter += 1;
  return (prefix == null ? '' : String(prefix)) + idCounter;
} // Export for testing purposes.

function valuesPolyfill(obj) {
  return Object.keys(obj).reduce(function (accum, key) {
    if (Object.prototype.propertyIsEnumerable.call(obj, key)) {
      accum.push(obj[key]);
    }

    return accum;
  }, []);
}
function values(obj) {
  return isFunction(Object.values) ? Object.values(obj) : valuesPolyfill(obj);
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/preventInputBlur.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/preventInputBlur.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preventInputBlur; });
/**
 * Prevent the main input from blurring when a menu item or the clear button is
 * clicked. (#226 & #310)
 */
function preventInputBlur(e) {
  e.preventDefault();
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/size.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/size.js ***!
  \*****************************************************************/
/*! exports provided: isSizeLarge, isSizeSmall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSizeLarge", function() { return isSizeLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSizeSmall", function() { return isSizeSmall; });
function isSizeLarge(size) {
  return size === 'large' || size === 'lg';
}
function isSizeSmall(size) {
  return size === 'small' || size === 'sm';
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/stripDiacritics.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/stripDiacritics.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stripDiacritics; });
/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Taken from: http://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/18391901#18391901
 */

/* eslint-disable max-len */
var map = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\xD0"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'OE',
  letters: "\x8C\u0152"
}, {
  base: 'oe',
  letters: "\x9C\u0153"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
/* eslint-enable max-len */

var diacriticsMap = {};

for (var ii = 0; ii < map.length; ii++) {
  var letters = map[ii].letters;

  for (var jj = 0; jj < letters.length; jj++) {
    diacriticsMap[letters[jj]] = map[ii].base;
  }
} // "what?" version ... http://jsperf.com/diacritics/12


function stripDiacritics(str) {
  return str.replace(/[\u0300-\u036F]/g, '') // Remove combining diacritics

  /* eslint-disable-next-line no-control-regex */
  .replace(/[^\u0000-\u007E]/g, function (a) {
    return diacriticsMap[a] || a;
  });
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/validateSelectedPropChange.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/validateSelectedPropChange.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateSelectedPropChange; });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warn */ "./node_modules/react-bootstrap-typeahead/es/utils/warn.js");

function validateSelectedPropChange(prevSelected, selected) {
  var uncontrolledToControlled = !prevSelected && selected;
  var controlledToUncontrolled = prevSelected && !selected;
  var from, to, precedent;

  if (uncontrolledToControlled) {
    from = 'uncontrolled';
    to = 'controlled';
    precedent = 'an';
  } else {
    from = 'controlled';
    to = 'uncontrolled';
    precedent = 'a';
  }

  var message = "You are changing " + precedent + " " + from + " typeahead to be " + to + ". " + ("Input elements should not switch from " + from + " to " + to + " (or vice versa). ") + 'Decide between using a controlled or uncontrolled element for the ' + 'lifetime of the component.';
  Object(_warn__WEBPACK_IMPORTED_MODULE_0__["default"])(!(uncontrolledToControlled || controlledToUncontrolled), message);
}

/***/ }),

/***/ "./node_modules/react-bootstrap-typeahead/es/utils/warn.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-bootstrap-typeahead/es/utils/warn.js ***!
  \*****************************************************************/
/*! exports provided: default, resetWarned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetWarned", function() { return resetWarned; });
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);

var warned = {};
/**
 * Copied from: https://github.com/ReactTraining/react-router/blob/master/modules/routerWarning.js
 */

function warn(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (!falseToWarn && message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  warning__WEBPACK_IMPORTED_MODULE_0___default.a.apply(void 0, [falseToWarn, "[react-bootstrap-typeahead] " + message].concat(args));
}
function resetWarned() {
  warned = {};
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
/*!******************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Manager.js ***!
  \******************************************************/
/*! exports provided: ManagerReferenceNodeContext, ManagerReferenceNodeSetterContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerReferenceNodeContext", function() { return ManagerReferenceNodeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerReferenceNodeSetterContext", function() { return ManagerReferenceNodeSetterContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js");
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(create_react_context__WEBPACK_IMPORTED_MODULE_4__);





var ManagerReferenceNodeContext = create_react_context__WEBPACK_IMPORTED_MODULE_4___default()();
var ManagerReferenceNodeSetterContext = create_react_context__WEBPACK_IMPORTED_MODULE_4___default()();

var Manager =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Manager, _React$Component);

  function Manager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "referenceNode", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "setReferenceNode", function (newReferenceNode) {
      if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
        _this.referenceNode = newReferenceNode;

        _this.forceUpdate();
      }
    });

    return _this;
  }

  var _proto = Manager.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.referenceNode = null;
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ManagerReferenceNodeContext.Provider, {
      value: this.referenceNode
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ManagerReferenceNodeSetterContext.Provider, {
      value: this.setReferenceNode
    }, this.props.children));
  };

  return Manager;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);



/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Popper.js ***!
  \*****************************************************/
/*! exports provided: InnerPopper, placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerPopper", function() { return InnerPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popper; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/react-popper/lib/esm/utils.js");










var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      data: undefined,
      placement: undefined
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "popperInstance", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "popperNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "arrowNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setRef"])(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers, {
          arrow: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_7__["default"](referenceElement, popperNode, _this.getOptions());
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !deep_equal__WEBPACK_IMPORTED_MODULE_5___default()(this.props.modifiers, prevProps.modifiers, {
      strict: true
    })) {
      // develop only check that modifiers isn't being updated needlessly
      if (true) {
        if (this.props.modifiers !== prevProps.modifiers && this.props.modifiers != null && prevProps.modifiers != null && Object(_utils__WEBPACK_IMPORTED_MODULE_9__["shallowEqual"])(this.props.modifiers, prevProps.modifiers)) {
          console.warn("'modifiers' prop reference updated even though all values appear the same.\nConsider memoizing the 'modifiers' object to avoid needless rendering.");
        }
      }

      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setRef"])(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["unwrapArray"])(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});

var placements = popper_js__WEBPACK_IMPORTED_MODULE_7__["default"].placements;

function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["referenceElement"]);

  return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_8__["ManagerReferenceNodeContext"].Consumer, null, function (referenceNode) {
    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](InnerPopper, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
/*!********************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Reference.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reference; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/react-popper/lib/esm/utils.js");









var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "refHandler", function (node) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setRef"])(_this.props.innerRef, node);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["safeInvoke"])(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setRef"])(this.props.innerRef, null);
  };

  _proto.render = function render() {
    warning__WEBPACK_IMPORTED_MODULE_5___default()(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["unwrapArray"])(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

function Reference(props) {
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_6__["ManagerReferenceNodeSetterContext"].Consumer, null, function (setReferenceNode) {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](InnerReference, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/index.js ***!
  \****************************************************/
/*! exports provided: Popper, placements, Manager, Reference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popper */ "./node_modules/react-popper/lib/esm/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _Manager__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reference */ "./node_modules/react-popper/lib/esm/Reference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return _Reference__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// Public components



 // Public types

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/utils.js ***!
  \****************************************************/
/*! exports provided: unwrapArray, safeInvoke, shallowEqual, setRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapArray", function() { return unwrapArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeInvoke", function() { return safeInvoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return setRef; });
/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Does a shallow equality check of two objects by comparing the reference
 * equality of each value.
 */

var shallowEqual = function shallowEqual(objA, objB) {
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);

  if (bKeys.length !== aKeys.length) {
    return false;
  }

  for (var i = 0; i < bKeys.length; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};

/***/ }),

/***/ "./node_modules/regexp.prototype.flags/implementation.js":
/*!***************************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/implementation.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/index.js":
/*!******************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var callBind = __webpack_require__(/*! call-bind */ "./node_modules/call-bind/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/regexp.prototype.flags/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/regexp.prototype.flags/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/regexp.prototype.flags/shim.js");

var flagsBound = callBind(implementation);

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/polyfill.js":
/*!*********************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/polyfill.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/regexp.prototype.flags/implementation.js");

var supportsDescriptors = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js").supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

module.exports = function getPolyfill() {
	if (!supportsDescriptors) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation;
};


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/shim.js":
/*!*****************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/shim.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var supportsDescriptors = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js").supportsDescriptors;
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/regexp.prototype.flags/polyfill.js");
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};


/***/ }),

/***/ "./node_modules/scroll-into-view-if-needed/es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/scroll-into-view-if-needed/es/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compute-scroll-into-view */ "./node_modules/compute-scroll-into-view/dist/index.module.js");


function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}

function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }

  var canSmoothScroll = ('scrollBehavior' in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;

    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}

function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }

  if (isOptionsObject(options)) {
    return options;
  }

  return {
    block: 'start',
    inline: 'nearest'
  };
}

function scrollIntoView(target, options) {
  var targetIsDetached = !target.ownerDocument.documentElement.contains(target);

  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(targetIsDetached ? [] : Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"])(target, options));
  }

  if (targetIsDetached) {
    return;
  }

  var computeOptions = getOptions(options);
  return defaultBehavior(Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__["default"])(target, computeOptions), computeOptions.behavior);
}

/* harmony default export */ __webpack_exports__["default"] = (scrollIntoView);

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : ''
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NhbGwtYmluZC9jYWxsQm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NhbGwtYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29tcHV0ZS1zY3JvbGwtaW50by12aWV3L2Rpc3QvaW5kZXgubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtcmVhY3QtY29udGV4dC9saWIvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1yZWFjdC1jb250ZXh0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2V0LWludHJpbnNpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3VkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXMtc3ltYm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvc2hhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWFyZ3VtZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVib3VuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtaXMvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9zaGltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2Nzcy9UeXBlYWhlYWQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2JlaGF2aW9ycy9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy9iZWhhdmlvcnMvY2xhc3NOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy9iZWhhdmlvcnMvaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy9iZWhhdmlvcnMvdG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9Bc3luY1R5cGVhaGVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy9jb21wb25lbnRzL0NsZWFyQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbXBvbmVudHMvSGlnaGxpZ2h0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9IaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbXBvbmVudHMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9NZW51LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbXBvbmVudHMvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9PdmVybGF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbXBvbmVudHMvVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9UeXBlYWhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9UeXBlYWhlYWRJbnB1dE11bHRpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbXBvbmVudHMvVHlwZWFoZWFkSW5wdXRTaW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9UeXBlYWhlYWRNZW51LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy9jb3JlL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29yZS9UeXBlYWhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29yZS9UeXBlYWhlYWRNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy91dGlscy9hZGRDdXN0b21PcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvdXRpbHMvZGVmYXVsdEZpbHRlckJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldERpc3BsYXlOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldEhpbnRUZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldElucHV0UHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvdXRpbHMvZ2V0SW5wdXRUZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldElzT25seVJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy91dGlscy9nZXRNYXRjaEJvdW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy91dGlscy9nZXRNZW51SXRlbUlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldE9wdGlvbkxhYmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldE9wdGlvblByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldFN0cmluZ0xhYmVsS2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldFRydW5jYXRlZE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvdXRpbHMvZ2V0VXBkYXRlZEFjdGl2ZUluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2lzU2VsZWN0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy91dGlscy9pc1Nob3duLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL25vZGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy91dGlscy9wcmV2ZW50SW5wdXRCbHVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL3NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvdXRpbHMvc3RyaXBEaWFjcml0aWNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL3ZhbGlkYXRlU2VsZWN0ZWRQcm9wQ2hhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL3dhcm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBvcHBlci9saWIvZXNtL01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBvcHBlci9saWIvZXNtL1BvcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcG9wcGVyL2xpYi9lc20vUmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1wb3BwZXIvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcG9wcGVyL2xpYi9lc20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3MvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3MvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3Mvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7OztBQ2ZhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLDREQUFlOztBQUUxQyxlQUFlLG1CQUFPLENBQUMsNkNBQUk7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZGE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLDREQUFlO0FBQ2xDLG1CQUFtQixtQkFBTyxDQUFDLDREQUFlOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUSxXQUFXO0FBQ3ZDLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsbUJBQW1CO0FBQzlELENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUEsY0FBYyxtREFBbUQsZ0JBQWdCLG9EQUFvRCxnQkFBZ0IsK0RBQStELCtCQUErQix1REFBdUQsa0JBQWtCLDhEQUE4RCxJQUFJLGdEQUFnRCxTQUFTLGFBQWEsSUFBSSx3RUFBd0UsSUFBSSxTQUFTLDRCQUE0QixvRkFBbUcsNkVBQWMsa0lBQWtJLGNBQWMsK0NBQStDLHVFQUF1RSxXQUFXLEVBQUUseUJBQXlCLFVBQVUsTUFBTSx5RUFBeUUsb1dBQW9XLFdBQVcsS0FBSyxrR0FBa0csNEVBQTRFLHVSQUF1UixzTUFBc00sS0FBSyxpTEFBaUwsaUNBQWlDLDJHQUEyRyxRQUFRLGtCQUFrQixFQUFFLFNBQVM7QUFDcjVFOzs7Ozs7Ozs7Ozs7O0FDRGE7O0FBRWI7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1Qjs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBWTs7QUFFckM7O0FBRUEsV0FBVyxtQkFBTyxDQUFDLHdDQUFLOztBQUV4Qjs7QUFFQSxlQUFlLG1CQUFPLENBQUMsa0RBQVM7O0FBRWhDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIsU0FBUztBQUNUO0FBQ0EsY0FBYyxJQUFxQztBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVILDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdFQUF3RSxlQUFlO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSCxxREFBcUQ7OztBQUdyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7Ozs7Ozs7OztBQ25NYTs7QUFFYjs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNENBQU87O0FBRTVCOztBQUVBLHNCQUFzQixtQkFBTyxDQUFDLG1GQUFrQjs7QUFFaEQ7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0Esb0M7Ozs7Ozs7Ozs7O0FDZkEsaUJBQWlCLG1CQUFPLENBQUMsd0RBQWE7QUFDdEMsa0JBQWtCLG1CQUFPLENBQUMsMERBQWM7QUFDeEMsU0FBUyxtQkFBTyxDQUFDLG9EQUFXO0FBQzVCLGNBQWMsbUJBQU8sQ0FBQyxrREFBVTtBQUNoQyxZQUFZLG1CQUFPLENBQUMsOEVBQXdCO0FBQzVDLGFBQWEsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRXJDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDLHFEQUFxRCxjQUFjOztBQUVuRTtBQUNBLG9DQUFvQyxjQUFjOztBQUVsRCwwQ0FBMEMsY0FBYzs7QUFFeEQ7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDLCtCQUErQjtBQUMvQixnQ0FBZ0MsY0FBYztBQUM5QyxlQUFlLGNBQWM7QUFDN0IsMEJBQTBCLGNBQWM7QUFDeEM7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixjQUFjOztBQUU1QztBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsY0FBYzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQyx5QkFBeUIsY0FBYztBQUN2QztBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQSwyQ0FBMkMsY0FBYztBQUN6RDs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDL0dhOztBQUViLFdBQVcsbUJBQU8sQ0FBQyx3REFBYTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQ0FBZ0M7QUFDaEU7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsRUFBRSxZQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3pEYTs7QUFFYjs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXO0FBQ2pDO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFdBQVc7QUFDL0I7O0FBRUEsb0JBQW9CLFdBQVc7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdDYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTs7QUFFQSw4RUFBOEUscUNBQXFDLEVBQUU7O0FBRXJIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRhOztBQUViLHFCQUFxQixtQkFBTyxDQUFDLHdFQUFrQjs7QUFFL0M7Ozs7Ozs7Ozs7Ozs7QUNKYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0NBQStDO0FBQy9FLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsd0RBQWE7O0FBRXRDLHNEQUFzRCxvQkFBb0IsR0FBRzs7QUFFN0UsbUVBQW1FO0FBQ25FO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsbUJBQU8sQ0FBQyw0REFBZTtBQUNsQyxhQUFhLG1CQUFPLENBQUMsNENBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeFRBO0FBQ2E7O0FBRWI7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBLDhDQUFhOztBQUViO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMsb0RBQVM7O0FBRXJDO0FBQ0Esd0NBQXdDLGNBQWM7QUFDdEQsb0NBQW9DLGNBQWM7QUFDbEQsNkNBQTZDLGNBQWM7QUFDM0QseUNBQXlDLGNBQWM7O0FBRXZEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWmE7O0FBRWI7QUFDQTtBQUNBLDBGQUEwRixjQUFjO0FBQ3hHLDJDQUEyQyxhQUFhOztBQUV4RDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYzs7QUFFN0MsaUVBQWlFLGNBQWM7QUFDL0Usb0VBQW9FLGNBQWM7O0FBRWxGO0FBQ0EsZ0NBQWdDLGNBQWM7QUFDOUM7QUFDQSxzQ0FBc0MsY0FBYzs7QUFFcEQsMERBQTBELGNBQWM7QUFDeEUsOERBQThELGNBQWM7O0FBRTVFO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYyxFQUFFO0FBQ25DLDBFQUEwRSxjQUFjOztBQUV4Rix3R0FBd0csY0FBYzs7QUFFdEg7QUFDQSw0Q0FBNEMsY0FBYzs7QUFFMUQsNkRBQTZELGNBQWM7O0FBRTNFO0FBQ0E7QUFDQSxzRUFBc0UsY0FBYztBQUNwRjs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekNhOztBQUViLFdBQVcsbUJBQU8sQ0FBQyw0REFBZTs7QUFFbEM7Ozs7Ozs7Ozs7Ozs7QUNKYTs7QUFFYjtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLGtFQUFxQjs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsMERBQTBEOztBQUUxRDs7Ozs7Ozs7Ozs7OztBQ2hDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLHdEQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBTyxDQUFDLDBEQUFjO0FBQ3RCOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU8sWUFBWTtBQUM5QixXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN4WGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQmE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLG9FQUFtQjtBQUN4QyxlQUFlLG1CQUFPLENBQUMsb0RBQVc7O0FBRWxDLHFCQUFxQixtQkFBTyxDQUFDLG9FQUFrQjtBQUMvQyxrQkFBa0IsbUJBQU8sQ0FBQyx3REFBWTtBQUN0QyxXQUFXLG1CQUFPLENBQUMsZ0RBQVE7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7OztBQ2pCYTs7QUFFYixxQkFBcUIsbUJBQU8sQ0FBQyxvRUFBa0I7O0FBRS9DO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05hOztBQUViLGtCQUFrQixtQkFBTyxDQUFDLHdEQUFZO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQyxvRUFBbUI7O0FBRXhDO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFPLENBQUMsZ0VBQWUsRUFBRTtBQUN2QztBQUNBLDBDQUEwQyxpQkFBaUI7QUFDM0QsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGNBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekhhOztBQUViO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLGdFQUFlOztBQUVwQztBQUNBLDRDQUE0QyxvQkFBb0IsRUFBRSxHQUFHLG1CQUFPLENBQUMsc0VBQWtCOztBQUUvRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDL0JhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQzBDO0FBQ3pEO0FBQ0o7QUFDdUM7QUFDZjtBQUNOO0FBQ1g7QUFDQTtBQUNrQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaURBQVM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpREFBUzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpREFBUzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBUzs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlEQUFTLFNBQVMscURBQVU7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaURBQVM7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaURBQVM7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEZBQTZCOztBQUVoRCxpQkFBaUIsb0RBQU0sR0FBRztBQUMxQixpQ0FBaUMsb0RBQU07QUFDdkMsaUJBQWlCLG9EQUFNO0FBQ3ZCLG9CQUFvQiw2RUFBYztBQUNsQyxrQkFBa0IsMEVBQVc7QUFDN0IscUJBQXFCLHlEQUFXO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EsR0FBRyxnREFBZ0Q7O0FBRW5ELEVBQUUsdURBQVM7QUFDWCx1Q0FBdUMsc0RBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQix5REFBVztBQUNyQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsU0FBUyxxRUFBUSxHQUFHO0FBQ3BCO0FBQ0EsY0FBYyx5REFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ087QUFDUCxvQ0FBb0Msd0RBQVU7QUFDOUMsd0JBQXdCLDRDQUFLLDBCQUEwQixxRUFBUSxHQUFHO0FBQ2xFO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCw4Q0FBOEMsNkRBQWMsa0JBQWtCOztBQUU5RSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQSxFQUFFLG1EQUFJLG1EQUFtRDtBQUN6RDs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQzBDO0FBQzlCO0FBQ0U7QUFDeEM7QUFDRjtBQUMwQzs7QUFFcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwyRUFBYzs7QUFFbEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwRkFBNkI7O0FBRS9DLDBCQUEwQiw0Q0FBSywwQkFBMEIscUVBQVEsR0FBRztBQUNwRSxtQkFBbUIsaURBQUU7QUFDckIsNkJBQTZCLDBEQUFXO0FBQ3hDLDZCQUE2QiwwREFBVztBQUN4QztBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBLEdBQUcsQ0FBQyw0Q0FBSzs7QUFFVCxFQUFFLDRFQUFlLHNEQUFzRCw2REFBYzs7QUFFckY7QUFDQTs7QUFFZSw2RUFBYyxFOzs7Ozs7Ozs7Ozs7QUMvQzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQzBDO0FBQ3hDO0FBQ007QUFDM0I7QUFDbUI7QUFDMkI7QUFDdkM7QUFDMUM7QUFDQSxVQUFVLHFEQUFVO0FBQ3BCLFlBQVksaURBQVM7QUFDckI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwRkFBNkI7O0FBRTNDLDZCQUE2Qix5RUFBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG9EQUFNO0FBQ3RCLEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSx1REFBUztBQUNYO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBLGNBQWMsMEVBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gsb0JBQW9CLHlEQUFXO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsd0RBQXdEOztBQUV4RDtBQUNBLFNBQVMscUVBQVEsR0FBRztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFhO0FBQ3JCO0FBQ0EsaUJBQWlCLHVEQUFnQjtBQUNqQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ087QUFDUCxrQ0FBa0MsNkRBQWM7O0FBRWhEO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBLEVBQUUsbURBQUksc0RBQXNEO0FBQzVEOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQzBDO0FBQzdEO0FBQ0s7QUFDZTtBQUNLO0FBQ25CO0FBQ0M7QUFDMUM7QUFDQSxVQUFVLGlEQUFTO0FBQ25CLFdBQVcsaURBQVM7QUFDcEIsV0FBVyxpREFBUztBQUNwQixZQUFZLGlEQUFTO0FBQ3JCLFVBQVUscURBQVU7QUFDcEI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBGQUE2Qjs7QUFFM0Msa0JBQWtCLHNEQUFRO0FBQzFCO0FBQ0E7O0FBRUEsbUJBQW1CLHNEQUFRO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsb0RBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsMkVBQVksMEJBQTBCLHFFQUFRLEdBQUc7QUFDbkQ7QUFDQSxHQUFHO0FBQ0gsU0FBUyxxRUFBUSxHQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlEQUFVO0FBQ3hCO0FBQ0EsR0FBRztBQUNIO0FBQ087QUFDUCxtQ0FBbUMsNkRBQWM7O0FBRWpEO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBLEVBQUUsbURBQUksbURBQW1EO0FBQ3pEOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFBQTtBQUErQztBQUNYO0FBQ3JCLGlJQUFTLENBQUMsa0RBQVMsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUMwQztBQUNwRTtBQUNGO0FBQ1M7QUFDVTtBQUNMO0FBQ0M7QUFDekM7QUFDQSxTQUFTLGlEQUFTO0FBQ2xCLFdBQVcsaURBQVM7QUFDcEIsYUFBYSxpREFBUztBQUN0QixRQUFRLG1EQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkNBQUk7QUFDZixhQUFhLDJDQUFJO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBGQUE2Qjs7QUFFM0Msc0JBQXNCLDRDQUFLLHlCQUF5QixxRUFBUSxHQUFHO0FBQy9EO0FBQ0EsZUFBZSxpREFBRTtBQUNqQixzQkFBc0IsMERBQVc7QUFDakMsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3QixvREFBUztBQUNqQztBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRyxnQkFBZ0IsNENBQUs7QUFDeEI7QUFDQSxHQUFHLHdCQUF3Qiw0Q0FBSztBQUNoQztBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ2UsMEVBQVcsRTs7Ozs7Ozs7Ozs7O0FDN0QxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRTtBQUNFO0FBQ2pDO0FBQ1Q7QUFDZ0I7QUFDMUM7QUFDQSxZQUFZLGlEQUFTO0FBQ3JCLHNCQUFzQixpREFBUztBQUMvQixVQUFVLGlEQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyRUFBYzs7QUFFaEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw2REFBYyxvQkFBb0I7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBLDZDQUE2Qyw0Q0FBSztBQUNsRDtBQUNBO0FBQ0EsT0FBTztBQUNQLHNCQUFzQjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLDRDQUFLOztBQUVQLDRFQUFlOztBQUVmLDRFQUFlOztBQUVBLDBFQUFXLEU7Ozs7Ozs7Ozs7OztBQy9FMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUMxQztBQUNwQjtBQUM2QjtBQUNUO0FBQ2Q7QUFDVTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsZ0RBQUs7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJEQUFZO0FBQ25DOztBQUVBLGtCQUFrQiw4Q0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaURBQU07QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsSUFBSSw0Q0FBSyxtQ0FBbUMsS0FBcUMsR0FBRyxnREFBUywwQ0FBMEMsU0FBZ0I7O0FBRXZKLDZCQUE2Qix5RUFBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0Isb0RBQU07O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLHVEQUFTO0FBQ1g7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsMERBQVksV0FBVyxxRUFBUSxHQUFHO0FBQzFEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLDBGQUE2Qjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDRDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxzQkFBc0IsNENBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlLG1FQUFJLEU7Ozs7Ozs7Ozs7OztBQy9JbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0Q7QUFDMUI7QUFDRjtBQUMxQix5QkFBeUIsNENBQUs7QUFDOUIsc0JBQXNCLDRDQUFLLHdCQUF3QixxRUFBUSxHQUFHO0FBQzlELGVBQWUsaURBQUU7QUFDakI7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNjLG9FQUFLLEU7Ozs7Ozs7Ozs7OztBQ1RwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ1Q7QUFDMUI7QUFDQSxTQUFTLGlEQUFTO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQUs7QUFDM0I7QUFDQTtBQUNBLEdBQUcsZUFBZSw0Q0FBSztBQUN2QjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ2UscUVBQU0sRTs7Ozs7Ozs7Ozs7O0FDckJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRTtBQUNFO0FBQ2Q7QUFDMUI7QUFDTztBQUNLO0FBQ0U7QUFDRTtBQUNvQjs7QUFFaEU7QUFDQSxzQkFBc0IsNENBQUs7QUFDM0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNENBQUssc0JBQXNCLHFFQUFRLEdBQUc7QUFDMUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLGlEQUFTOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlEQUFTOztBQUV2QjtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdFQUFhLENBQUMsaURBQVMsWUFBWSxpREFBUyxTQUFTLGlEQUFTLFdBQVcsNERBQWlCOztBQUVoRztBQUNBO0FBQ0E7QUFDQSxhQUFhLGlEQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkVBQWM7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFRLHNDQUFzQyw0Q0FBSyxlQUFlLHNEQUFZO0FBQ2pHO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLE1BQU0sNENBQUs7QUFDWDtBQUNBLG1CQUFtQixpREFBRTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBZ0I7QUFDeEI7QUFDQTtBQUNBLGVBQWUscUVBQVEsR0FBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLENBQUMsNENBQUs7O0FBRVAsNEVBQWU7O0FBRWYsNEVBQWU7O0FBRWYsNEVBQWU7O0FBRWYsNEVBQWU7O0FBRUEsbUVBQUksRTs7Ozs7Ozs7Ozs7O0FDN0huQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQzBDO0FBQ3BFO0FBQ0Y7QUFDbUI7QUFDN0MsZ0NBQWdDLDRDQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMEZBQTZCOztBQUUzQztBQUNBOztBQUVBO0FBQ0EsSUFBSSw0Q0FBSyxvQkFBb0IscUVBQVEsR0FBRztBQUN4QyxpQkFBaUIsaURBQUU7QUFDbkI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQztBQUN1QjtBQUNULCtIQUFRLGNBQWMsRTs7Ozs7Ozs7Ozs7O0FDcENyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUMwQzs7QUFFaEc7QUFDK0I7QUFDSTtBQUNHO0FBQ0o7QUFDRztBQUNyQzs7QUFFQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaURBQVMsT0FBTyxxREFBTSxDQUFDLGdEQUFLO0FBQ3JDLFlBQVksaURBQVM7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsaURBQVM7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUztBQUNqQixlQUFlLGlEQUFTO0FBQ3hCLGlCQUFpQixpREFBUztBQUMxQixvQkFBb0IsaURBQVM7QUFDN0I7QUFDQTtBQUNBLFNBQVMsZ0RBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEZBQTZCOztBQUVoRCxlQUFlLHFFQUFRLEdBQUc7QUFDMUIsa0JBQWtCLHFFQUFRLEdBQUc7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGdEQUFLLG9CQUFvQixnREFBSztBQUMzRDtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxvQkFBb0IsZ0RBQUs7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixtREFBbUIsQ0FBQyxtREFBTTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNCQUFzQiwwRkFBNkI7O0FBRW5ELG9CQUFvQixxRUFBUSxHQUFHO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDZSxzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUMxSHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUMwQztBQUNwRTtBQUNjO0FBQ0Y7QUFDTztBQUNUO0FBQ3RDLG9DQUFvQyx3REFBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwRkFBNkI7O0FBRTNDLHNCQUFzQiw0Q0FBSyxzQkFBc0IscUVBQVEsR0FBRztBQUM1RCxlQUFlLGlEQUFFO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHLDBCQUEwQiw0Q0FBSyxlQUFlLG9EQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBRTtBQUNyQjtBQUNBLEdBQUc7O0FBRUg7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxzQkFBc0IsNENBQUs7QUFDM0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHlCQUF5Qix3REFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMseURBQVUsMEJBQTBCLDRDQUFLLGlDQUFpQyxxRUFBUSxHQUFHO0FBQ3hIO0FBQ0EsR0FBRyxrQkFBa0IsNENBQUs7QUFDMUIsQ0FBQztBQUNjLGlJQUFTLE9BQU8sRTs7Ozs7Ozs7Ozs7O0FDakUvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRjtBQUNoQjtBQUNFO0FBQzRCO0FBQzFDO0FBQzFCO0FBQ087QUFDaUI7QUFDRztBQUNiO0FBQ0Y7QUFDVjtBQUNFO0FBQ0o7QUFDNEI7QUFDRTtBQUNkO0FBQytDO0FBQ3BCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlFQUFhLENBQUMsaURBQVMsU0FBUywwREFBYzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpREFBUzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpREFBUzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpREFBUzs7QUFFcEI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpREFBUzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUssZUFBZSx1REFBYSxFQUFFLHFFQUFRLEdBQUc7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLHdCQUF3Qiw0Q0FBSyxlQUFlLCtDQUFLO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUUsOERBQWM7QUFDckI7QUFDQTs7QUFFQTtBQUNBLFNBQVMsb0RBQUk7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBGQUE2Qjs7QUFFM0Msa0JBQWtCLHNEQUFRO0FBQzFCO0FBQ0E7O0FBRUEsRUFBRSwyRUFBWTtBQUNkO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDJFQUFjOztBQUVoQjtBQUNBOztBQUVBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjs7QUFFMUMsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLDBEQUFVO0FBQ3BCO0FBQ0E7O0FBRUEsd0JBQXdCLHFFQUFRLEdBQUc7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLDRCQUE0Qiw0Q0FBSyxlQUFlLDhEQUFvQjtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNENBQUssZUFBZSw2REFBbUIsRUFBRSxxRUFBUSxHQUFHO0FBQzlFO0FBQ0EsT0FBTztBQUNQLG1DQUFtQyxxRUFBUSxHQUFHO0FBQzlDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFFQUFRLEdBQUc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDRDQUFLLGVBQWUsZ0RBQU07QUFDekQsT0FBTztBQUNQLCtCQUErQiw0Q0FBSyxlQUFlLHFEQUFXO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLHVCQUF1Qix3REFBZ0I7QUFDdkM7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsb0NBQW9DLDRDQUFLO0FBQ3pDLG1CQUFtQixpREFBRTtBQUNyQix3QkFBd0IsMkRBQVc7QUFDbkMsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSyxlQUFlLHVEQUFTLEVBQUUscUVBQVEsR0FBRztBQUNsRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLDBGQUE2Qjs7QUFFL0M7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBCQUEwQiw0Q0FBSztBQUMvQjtBQUNBO0FBQ0EsT0FBTztBQUNQLDRCQUE0Qiw0Q0FBSztBQUNqQyxxQkFBcUIsaURBQUU7QUFDdkI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxpQkFBaUIscUVBQVEsR0FBRztBQUM1QjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUyxzQkFBc0IscUVBQVEsR0FBRztBQUMxQztBQUNBLFNBQVMsd0JBQXdCLDRDQUFLLGVBQWUsaURBQU8sRUFBRSxxRUFBUSxHQUFHO0FBQ3pFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTLGVBQWUsMERBQVU7QUFDbEMsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUMsQ0FBQyw0Q0FBSzs7QUFFUCw0RUFBZTs7QUFFZiw0RUFBZTs7QUFFYSxvSUFBVTtBQUN0QyxzQkFBc0IsNENBQUssbUNBQW1DLHFFQUFRLEdBQUc7QUFDekU7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ3BSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQzBDO0FBQ2Q7QUFDaEI7QUFDRTs7QUFFcEU7O0FBRUE7QUFDNEI7QUFDRjtBQUNBO0FBQ0U7QUFDWTtBQUNhO0FBQ1o7O0FBRXpDO0FBQ0EsRUFBRSwyRUFBYzs7QUFFaEI7QUFDQTs7QUFFQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBOztBQUVBLElBQUksNEVBQWUsQ0FBQyxtRkFBc0Isb0NBQW9DLDRDQUFLOztBQUVuRixJQUFJLDRFQUFlLENBQUMsbUZBQXNCOztBQUUxQyxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDOztBQUVBO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJDQUEyQywyREFBWTtBQUN2RDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxxREFBUztBQUN0QjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMEZBQTZCOztBQUU3Qyx3QkFBd0IsNENBQUs7QUFDN0IsaUJBQWlCLGlEQUFFO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWUsNENBQUs7QUFDekI7QUFDQTtBQUNBLEtBQUsseUJBQXlCLDRDQUFLLGVBQWUsNkNBQUk7QUFDdEQ7QUFDQSxLQUFLLGVBQWUsNENBQUssZUFBZSw4Q0FBSyxFQUFFLHFFQUFRLEdBQUc7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLENBQUMsQ0FBQyw0Q0FBSzs7QUFFUSxxSUFBYyxxQkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDM0lsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUMwQztBQUN0RTtBQUNBO0FBQ0U7QUFDeUI7QUFDdEMsb0lBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsY0FBYywwRkFBNkI7O0FBRTNDLHNCQUFzQiw0Q0FBSyxlQUFlLDZDQUFJO0FBQzlDO0FBQ0EsR0FBRyxlQUFlLDRDQUFLLGVBQWUsOENBQUssRUFBRSxxRUFBUSxHQUFHO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0Q7QUFDMEM7QUFDeEQ7QUFDTDtBQUNLO0FBQ2Q7QUFDUTtBQUMyQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsS0FBSztBQUMzRTtBQUNBLHNCQUFzQixpREFBUzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFTOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaURBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSyxlQUFlLG9EQUFXO0FBQ3ZEO0FBQ0EsS0FBSyxFQUFFLDZEQUFjO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMEZBQTZCOztBQUUvQztBQUNBLGdCQUFnQiw2REFBYztBQUM5QjtBQUNBLGdCQUFnQixnRUFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsNENBQUssZUFBZSxpREFBUSxFQUFFLHFFQUFRLEdBQUc7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvQ0FBb0MsNENBQUssZUFBZSxvREFBVztBQUMxRTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLDBCQUEwQiw0Q0FBSyxlQUFlLDhDQUFRO0FBQ3REO0FBQ0EsT0FBTyxlQUFlLDRDQUFLLGVBQWUsNkNBQUksOEJBQThCLDRDQUFLLGVBQWUsaURBQVEsRUFBRSxxRUFBUSxHQUFHO0FBQ3JIO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsd0JBQXdCLDRDQUFLLGVBQWUsaURBQVEsRUFBRSxxRUFBUSxHQUFHO0FBQ2pFO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNENBQUssZUFBZSw2Q0FBSSxFQUFFLHFFQUFRLEdBQUc7QUFDekM7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsNEVBQWEsRTs7Ozs7Ozs7Ozs7O0FDeEY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDbEI7QUFDekIsb0NBQW9DLDJEQUFhO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQ0FBSTtBQUMxQixTQUFTLDJDQUFJO0FBQ2IsdUJBQXVCLDJDQUFJO0FBQzNCLG1CQUFtQiwyQ0FBSTtBQUN2QjtBQUNBLFdBQVcsMkNBQUk7QUFDZixDQUFDO0FBQ007QUFDUCxTQUFTLHdEQUFVO0FBQ25CLEU7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUNkO0FBQ2hCO0FBQ0U7QUFDZDtBQUNoQjtBQUNIO0FBQ1Q7QUFDd0I7QUFDZ0w7QUFDbEI7QUFDcEk7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBUyxZQUFZLGlEQUFTLE9BQU8saURBQVM7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQVM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnRUFBYSxDQUFDLGlEQUFTLE9BQU8sNERBQWlCOztBQUVoRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0VBQWEsQ0FBQyxpREFBUyxTQUFTLGdFQUFxQjs7QUFFMUU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0VBQWEsQ0FBQyxpREFBUyxTQUFTLHFEQUFVLEdBQUcsOERBQW1COztBQUVuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQVMsWUFBWSxpREFBUyxTQUFTLGlEQUFTLHFCQUFxQixpREFBUzs7QUFFMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0VBQWEsQ0FBQyxpREFBUyxPQUFPLGtFQUF1Qjs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdFQUFhLENBQUMsaURBQVMsWUFBWSxpREFBUyxTQUFTLGlEQUFTLFdBQVcsNERBQWlCOztBQUVoRztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0VBQWEsQ0FBQyxpREFBUyxPQUFPLCtEQUFvQjs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdFQUFhLENBQUMsaURBQVMsWUFBWSxpREFBUyxTQUFTLGlEQUFTLFNBQVMsdURBQVk7O0FBRS9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlEQUFTOztBQUV2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlEQUFTOztBQUV0QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFTOztBQUVyQjtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlEQUFTOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQVM7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaURBQVM7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFTOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlEQUFTOztBQUV0QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQVM7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaURBQVM7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFTOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaURBQVMsU0FBUyxxREFBVTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFTOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0VBQWEsQ0FBQyxpREFBUyxTQUFTLHFEQUFVLEdBQUcsdURBQVk7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2REFBVSxDQUFDLGlEQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxVQUFVLDRDQUFJO0FBQ2QsV0FBVyw0Q0FBSTtBQUNmLGlCQUFpQiw0Q0FBSTtBQUNyQixhQUFhLDRDQUFJO0FBQ2pCLGdCQUFnQiw0Q0FBSTtBQUNwQixjQUFjLDRDQUFJO0FBQ2xCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLDhEQUFjLENBQUMsb0RBQUk7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsU0FBUyxxRUFBUSxHQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMkVBQWM7O0FBRWhCO0FBQ0E7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLDRFQUFlLENBQUMsbUZBQXNCOztBQUUxQyxJQUFJLDRFQUFlLENBQUMsbUZBQXNCOztBQUUxQyxJQUFJLDRFQUFlLENBQUMsbUZBQXNCOztBQUUxQyxJQUFJLDRFQUFlLENBQUMsbUZBQXNCOztBQUUxQyxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDOztBQUVBO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0EsV0FBVyxzREFBTztBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMLElBQUksNEVBQWUsQ0FBQyxtRkFBc0I7QUFDMUM7QUFDQSxXQUFXLHNEQUFPO0FBQ2xCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMLElBQUksNEVBQWUsQ0FBQyxtRkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQyw4Q0FBOEM7O0FBRTlDO0FBQ0EsMEJBQTBCLDhDQUFFLGtCQUFrQixnREFBSTtBQUNsRDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDhDQUFFO0FBQ2YsYUFBYSxnREFBSTtBQUNqQjtBQUNBOztBQUVBLHlDQUF5QyxxRUFBcUI7O0FBRTlEOztBQUVBLGFBQWEsa0RBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSwrQ0FBRztBQUNoQixhQUFhLCtDQUFHO0FBQ2hCO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMLElBQUksNEVBQWUsQ0FBQyxtRkFBc0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUEsV0FBVyx3REFBUTtBQUNuQixvQkFBb0IscUVBQVEsR0FBRztBQUMvQixjQUFjLHdEQUFRO0FBQ3RCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOERBQWM7QUFDN0I7O0FBRUE7QUFDQSxlQUFlLHFFQUFRLEdBQUc7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMLElBQUksNEVBQWUsQ0FBQyxtRkFBc0I7QUFDMUM7QUFDQSxnQkFBZ0Isc0RBQU87QUFDdkIsT0FBTyxFQUFFOzs7QUFHVDs7QUFFQTtBQUNBLGVBQWUscUVBQVEsR0FBRztBQUMxQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBMEIsK0JBQStCOztBQUU3RCxxQkFBcUIsc0RBQU87QUFDNUI7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLGtDQUFrQyw4REFBYyxDQUFDLG9EQUFJO0FBQ3JELFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEZBQTZCOztBQUVsRCw4QkFBOEIscUVBQVEsR0FBRzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVEQUFPO0FBQzlCLG9CQUFvQjs7QUFFcEI7O0FBRUE7QUFDQSwyREFBMkQsdURBQWU7QUFDMUU7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVCxxRUFBcUU7O0FBRXJFLGdCQUFnQixtRUFBbUIsd0JBQXdCOztBQUUzRCxVQUFVLCtEQUFlO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxTQUFTLGdCQUFnQixpRUFBaUI7QUFDMUMsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQSx5Q0FBeUMsaUJBQWlCLGlFQUFpQjtBQUMzRTtBQUNBOztBQUVBLHdCQUF3Qiw0Q0FBSyxlQUFlLHlEQUFnQixFQUFFLHFFQUFRLEdBQUc7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQyxDQUFDLDRDQUFLOztBQUVQLDRFQUFlOztBQUVmLDRFQUFlOztBQUVBLHdFQUFTLEU7Ozs7Ozs7Ozs7OztBQy9sQnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUNiO0FBQ1k7QUFDUjtBQUM4QztBQUNyRDtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMEVBQVc7QUFDN0IsRUFBRSx1REFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxXQUFXLGlEQUFNO0FBQ2pCLDJCQUEyQiw4REFBZTtBQUMxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixxRUFBUSxHQUFHLEVBQUUsbURBQUk7QUFDcEMsbUJBQW1CLDREQUFhLENBQUMscUVBQVEsR0FBRyxFQUFFLG1EQUFJO0FBQ2xEO0FBQ0EsYUFBYSwyREFBWTtBQUN6QixLQUFLO0FBQ0wsR0FBRzs7QUFFSCxxQkFBcUIscUVBQVEsR0FBRyxFQUFFLG1EQUFJO0FBQ3RDLGNBQWMsMERBQVc7QUFDekIsa0JBQWtCLDhEQUFlO0FBQ2pDLEdBQUc7O0FBRUgsc0JBQXNCLDRDQUFLLGVBQWUseURBQWdCO0FBQzFEO0FBQ0EsR0FBRztBQUNIOztBQUVlLCtFQUFnQixFOzs7Ozs7Ozs7Ozs7QUNsRS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzBEO0FBQ2I7QUFDTztBQUNiO0FBQ2E7QUFDYjtBQUNEO0FBQ2I7QUFDbUI7QUFDSjtBQUNiO0FBQ2U7QUFDYjtBQUNTO0FBQ2I7QUFDcUI7QUFDYjtBQUNPO0FBQ2I7QUFDcUI7QUFDYjtBQUNpQztBQUNiO0FBQ2U7QUFDYjtBQUNEO0FBQ2I7O0FBRUs7QUFDSDtBQUNXO0FBQ047QUFDQztBQUNFO0FBQ0w7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3BDN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ2dCO0FBQ2hCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDTSxlQUFlLGlEQUFTLE9BQU8scURBQU0sQ0FBQywrQ0FBSTtBQUNqRDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBLElBQUksaURBQVMsMkNBQTJDO0FBQ3hELElBQUkseURBQVU7QUFDZDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsRUFBRSxtREFBSTtBQUNOO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsTUFBTSxtREFBSTtBQUNWOztBQUVBLFdBQVcsaURBQVMsNENBQTRDO0FBQ2hFO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFJO0FBQ047QUFDTztBQUNQO0FBQ0E7QUFDQSxFQUFFLG1EQUFJO0FBQ047QUFDTztBQUNQO0FBQ0E7QUFDQSxFQUFFLG1EQUFJO0FBQ047QUFDTztBQUNQO0FBQ0E7QUFDQSxFQUFFLG1EQUFJO0FBQ047QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQUk7QUFDUixHQUFHO0FBQ0g7QUFDTztBQUNQLEVBQUUsbURBQUk7QUFDTjtBQUNPO0FBQ1A7QUFDQTtBQUNBLEVBQUUsbURBQUksR0FBRyx5REFBVSxzRUFBc0UsS0FBSztBQUM5RjtBQUNPLGlCQUFpQixpREFBUyxZQUFZLGlEQUFTLFNBQVMsaURBQVM7QUFDakU7QUFDUDtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFJO0FBQ04sRUFBRSxtREFBSSwwQkFBMEIseURBQVU7QUFDMUMsQzs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQUE7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0EsV0FBVywrREFBYztBQUN6QixHQUFHO0FBQ0g7O0FBRWUsOEVBQWUsRTs7Ozs7Ozs7Ozs7O0FDeEI5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ2M7QUFDSjtBQUNBO0FBQ3RCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsZ0VBQWU7QUFDL0IsVUFBVSxnRUFBZTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBLFdBQVcsc0RBQU87QUFDbEIsR0FBRztBQUNIO0FBQ0E7O0FBRUEsTUFBTSwwREFBVTtBQUNoQjtBQUNBOztBQUVBOztBQUVBLE1BQU0sd0RBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sd0RBQVE7QUFDZCxJQUFJLHFEQUFJO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrRUFBaUI7O0FBRWpDLFNBQVMsd0RBQVE7QUFDakIsTUFBTSxxREFBSSx5R0FBeUc7QUFDbkg7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBOEM7QUFDQTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLCtEQUFjO0FBQ3JDLGVBQWUsK0RBQWM7O0FBRTdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7O0FBRWUsMEVBQVcsRTs7Ozs7Ozs7Ozs7O0FDcEMxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQzBDO0FBQ3BFO0FBQ2dCOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwRkFBNkI7O0FBRTFDO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0EscUJBQXFCLDBGQUE2Qjs7QUFFbEQsZ0JBQWdCLHFFQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0RBQWtELDhEQUFhO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFFLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxxRUFBUSxHQUFHO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRWUsNEVBQWEsRTs7Ozs7Ozs7Ozs7O0FDMUQ1QjtBQUFBO0FBQUE7QUFBOEM7QUFDZDs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLCtEQUFjO0FBQ3pCOztBQUVBLHVEQUF1RCxvREFBSTs7QUFFM0Q7QUFDQSxXQUFXLCtEQUFjO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRWUsMkVBQVksRTs7Ozs7Ozs7Ozs7O0FDeEIzQjtBQUFBO0FBQUE7QUFBb0Q7QUFDcEI7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0Msa0VBQWlCLENBQUMsb0RBQUk7QUFDeEQ7O0FBRWUsOEVBQWUsRTs7Ozs7Ozs7Ozs7O0FDZjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUNjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsK0JBQStCLEtBQXFDLEdBQUcsZ0RBQVMscURBQXFELFNBQWdCLFVBQVU7QUFDL0o7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNlO0FBQ2YsNkNBQTZDLGdFQUFlO0FBQzVELDRCQUE0QixnRUFBZTs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDa0I7QUFDSjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdEQUFRO0FBQ2Ysa0JBQWtCLGtFQUFpQjtBQUNuQzs7QUFFQTs7QUFFQSxNQUFNLDBEQUFVO0FBQ2hCO0FBQ0EsR0FBRyxVQUFVLHdEQUFRO0FBQ3JCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLHdEQUFRLGdCQUFnQixLQUFxQyxHQUFHLGdEQUFTLDJNQUEyTSxTQUFnQjtBQUN2UztBQUNBOztBQUVlLDZFQUFjLEU7Ozs7Ozs7Ozs7OztBQzlCN0I7QUFBQTtBQUFBO0FBQW9DO0FBQ3JCO0FBQ2YsTUFBTSx3REFBUTtBQUNkO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDakM7QUFDZixtREFBbUQsMkRBQWdCO0FBQ25FLEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZSxrRkFBbUIsRTs7Ozs7Ozs7Ozs7O0FDWGxDO0FBQUE7QUFBQTtBQUF3Qzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qiw2Q0FBRTtBQUM5Qjs7QUFFQTtBQUNBOztBQUVlO0FBQ2YsOEJBQThCOztBQUU5QiwwQkFBMEIsNkNBQUUsVUFBVTs7QUFFdEMsMkRBQTJEOztBQUUzRDtBQUNBO0FBQ0EsR0FBRztBQUNILGdDQUFnQzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRDtBQUNGO0FBQ0U7QUFDRjtBQUNBO0FBQ0Y7QUFDSjtBQUNGO0FBQ007QUFDRjtBQUNBO0FBQ0Y7QUFDUTtBQUNGO0FBQ0E7QUFDRjtBQUNTO0FBQ1Q7QUFDRjtBQUNJO0FBQ0Y7QUFDUTtBQUNGO0FBQ0U7QUFDRjtBQUNNO0FBQ0Y7QUFDTTtBQUNGO0FBQ2hCO0FBQ0Y7QUFDUjtBQUNGO0FBQ047QUFDMEI7QUFDRjtBQUMxQjtBQUMwQjtBQUNGO0FBQ3dCO0FBQ0Y7QUFDMUM7Ozs7Ozs7Ozs7Ozs7QUN6QzNCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7O0FBRUEsa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0EsQ0FBQzs7O0FBR2M7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDeFNBO0FBQUE7QUFBQTtBQUEwQjtBQUNYO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxxREFBSTtBQUNOLEM7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QUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EscUNBQXFDLDBCQUEwQjtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLDBCQUEwQixlQUFlO0FBQ3RFOztBQUVPO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ2ZW5kb3JzfnJlYWN0X3JlY2hlcmNoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHNMb29zZTsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciAkaW5kZXhPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mJykpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCb3VuZEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0dmFyIGludHJpbnNpYyA9IEdldEludHJpbnNpYyhuYW1lLCAhIWFsbG93TWlzc2luZyk7XG5cdGlmICh0eXBlb2YgaW50cmluc2ljID09PSAnZnVuY3Rpb24nICYmICRpbmRleE9mKG5hbWUsICcucHJvdG90eXBlLicpID4gLTEpIHtcblx0XHRyZXR1cm4gY2FsbEJpbmQoaW50cmluc2ljKTtcblx0fVxuXHRyZXR1cm4gaW50cmluc2ljO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgJGFwcGx5ID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5JScpO1xudmFyICRjYWxsID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwlJyk7XG52YXIgJHJlZmxlY3RBcHBseSA9IEdldEludHJpbnNpYygnJVJlZmxlY3QuYXBwbHklJywgdHJ1ZSkgfHwgYmluZC5jYWxsKCRjYWxsLCAkYXBwbHkpO1xuXG52YXIgJGdPUEQgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJScsIHRydWUpO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IEdldEludHJpbnNpYygnJU9iamVjdC5kZWZpbmVQcm9wZXJ0eSUnLCB0cnVlKTtcbnZhciAkbWF4ID0gR2V0SW50cmluc2ljKCclTWF0aC5tYXglJyk7XG5cbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0dHJ5IHtcblx0XHQkZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyB2YWx1ZTogMSB9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGRlZmluZVByb3BlcnR5XG5cdFx0JGRlZmluZVByb3BlcnR5ID0gbnVsbDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCaW5kKG9yaWdpbmFsRnVuY3Rpb24pIHtcblx0dmFyIGZ1bmMgPSAkcmVmbGVjdEFwcGx5KGJpbmQsICRjYWxsLCBhcmd1bWVudHMpO1xuXHRpZiAoJGdPUEQgJiYgJGRlZmluZVByb3BlcnR5KSB7XG5cdFx0dmFyIGRlc2MgPSAkZ09QRChmdW5jLCAnbGVuZ3RoJyk7XG5cdFx0aWYgKGRlc2MuY29uZmlndXJhYmxlKSB7XG5cdFx0XHQvLyBvcmlnaW5hbCBsZW5ndGgsIHBsdXMgdGhlIHJlY2VpdmVyLCBtaW51cyBhbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgKGFmdGVyIHRoZSByZWNlaXZlcilcblx0XHRcdCRkZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0ZnVuYyxcblx0XHRcdFx0J2xlbmd0aCcsXG5cdFx0XHRcdHsgdmFsdWU6IDEgKyAkbWF4KDAsIG9yaWdpbmFsRnVuY3Rpb24ubGVuZ3RoIC0gKGFyZ3VtZW50cy5sZW5ndGggLSAxKSkgfVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZ1bmM7XG59O1xuXG52YXIgYXBwbHlCaW5kID0gZnVuY3Rpb24gYXBwbHlCaW5kKCkge1xuXHRyZXR1cm4gJHJlZmxlY3RBcHBseShiaW5kLCAkYXBwbHksIGFyZ3VtZW50cyk7XG59O1xuXG5pZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdCRkZWZpbmVQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgJ2FwcGx5JywgeyB2YWx1ZTogYXBwbHlCaW5kIH0pO1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMuYXBwbHkgPSBhcHBseUJpbmQ7XG59XG4iLCJmdW5jdGlvbiB0KHQpe3JldHVybiBudWxsIT10JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmMT09PXQubm9kZVR5cGV9ZnVuY3Rpb24gZSh0LGUpe3JldHVybighZXx8XCJoaWRkZW5cIiE9PXQpJiZcInZpc2libGVcIiE9PXQmJlwiY2xpcFwiIT09dH1mdW5jdGlvbiBuKHQsbil7aWYodC5jbGllbnRIZWlnaHQ8dC5zY3JvbGxIZWlnaHR8fHQuY2xpZW50V2lkdGg8dC5zY3JvbGxXaWR0aCl7dmFyIHI9Z2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpO3JldHVybiBlKHIub3ZlcmZsb3dZLG4pfHxlKHIub3ZlcmZsb3dYLG4pfHxmdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbih0KXtpZighdC5vd25lckRvY3VtZW50fHwhdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KXJldHVybiBudWxsO3RyeXtyZXR1cm4gdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmZyYW1lRWxlbWVudH1jYXRjaCh0KXtyZXR1cm4gbnVsbH19KHQpO3JldHVybiEhZSYmKGUuY2xpZW50SGVpZ2h0PHQuc2Nyb2xsSGVpZ2h0fHxlLmNsaWVudFdpZHRoPHQuc2Nyb2xsV2lkdGgpfSh0KX1yZXR1cm4hMX1mdW5jdGlvbiByKHQsZSxuLHIsaSxvLGwsZCl7cmV0dXJuIG88dCYmbD5lfHxvPnQmJmw8ZT8wOm88PXQmJmQ8PW58fGw+PWUmJmQ+PW4/by10LXI6bD5lJiZkPG58fG88dCYmZD5uP2wtZStpOjB9ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZSxpKXt2YXIgbz13aW5kb3csbD1pLnNjcm9sbE1vZGUsZD1pLmJsb2NrLHU9aS5pbmxpbmUsaD1pLmJvdW5kYXJ5LGE9aS5za2lwT3ZlcmZsb3dIaWRkZW5FbGVtZW50cyxjPVwiZnVuY3Rpb25cIj09dHlwZW9mIGg/aDpmdW5jdGlvbih0KXtyZXR1cm4gdCE9PWh9O2lmKCF0KGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHRhcmdldFwiKTtmb3IodmFyIGY9ZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHM9W10scD1lO3QocCkmJmMocCk7KXtpZigocD1wLnBhcmVudE5vZGUpPT09Zil7cy5wdXNoKHApO2JyZWFrfXA9PT1kb2N1bWVudC5ib2R5JiZuKHApJiYhbihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpfHxuKHAsYSkmJnMucHVzaChwKX1mb3IodmFyIGc9by52aXN1YWxWaWV3cG9ydD9vLnZpc3VhbFZpZXdwb3J0LndpZHRoOmlubmVyV2lkdGgsbT1vLnZpc3VhbFZpZXdwb3J0P28udmlzdWFsVmlld3BvcnQuaGVpZ2h0OmlubmVySGVpZ2h0LHc9d2luZG93LnNjcm9sbFh8fHBhZ2VYT2Zmc2V0LHY9d2luZG93LnNjcm9sbFl8fHBhZ2VZT2Zmc2V0LFc9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxiPVcuaGVpZ2h0LEg9Vy53aWR0aCx5PVcudG9wLE09Vy5yaWdodCxFPVcuYm90dG9tLFY9Vy5sZWZ0LHg9XCJzdGFydFwiPT09ZHx8XCJuZWFyZXN0XCI9PT1kP3k6XCJlbmRcIj09PWQ/RTp5K2IvMixJPVwiY2VudGVyXCI9PT11P1YrSC8yOlwiZW5kXCI9PT11P006VixDPVtdLFQ9MDtUPHMubGVuZ3RoO1QrKyl7dmFyIGs9c1tUXSxCPWsuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksRD1CLmhlaWdodCxPPUIud2lkdGgsUj1CLnRvcCxYPUIucmlnaHQsWT1CLmJvdHRvbSxMPUIubGVmdDtpZihcImlmLW5lZWRlZFwiPT09bCYmeT49MCYmVj49MCYmRTw9bSYmTTw9ZyYmeT49UiYmRTw9WSYmVj49TCYmTTw9WClyZXR1cm4gQzt2YXIgUz1nZXRDb21wdXRlZFN0eWxlKGspLGo9cGFyc2VJbnQoUy5ib3JkZXJMZWZ0V2lkdGgsMTApLE49cGFyc2VJbnQoUy5ib3JkZXJUb3BXaWR0aCwxMCkscT1wYXJzZUludChTLmJvcmRlclJpZ2h0V2lkdGgsMTApLHo9cGFyc2VJbnQoUy5ib3JkZXJCb3R0b21XaWR0aCwxMCksQT0wLEY9MCxHPVwib2Zmc2V0V2lkdGhcImluIGs/ay5vZmZzZXRXaWR0aC1rLmNsaWVudFdpZHRoLWotcTowLEo9XCJvZmZzZXRIZWlnaHRcImluIGs/ay5vZmZzZXRIZWlnaHQtay5jbGllbnRIZWlnaHQtTi16OjA7aWYoZj09PWspQT1cInN0YXJ0XCI9PT1kP3g6XCJlbmRcIj09PWQ/eC1tOlwibmVhcmVzdFwiPT09ZD9yKHYsdittLG0sTix6LHYreCx2K3grYixiKTp4LW0vMixGPVwic3RhcnRcIj09PXU/STpcImNlbnRlclwiPT09dT9JLWcvMjpcImVuZFwiPT09dT9JLWc6cih3LHcrZyxnLGoscSx3K0ksdytJK0gsSCksQT1NYXRoLm1heCgwLEErdiksRj1NYXRoLm1heCgwLEYrdyk7ZWxzZXtBPVwic3RhcnRcIj09PWQ/eC1SLU46XCJlbmRcIj09PWQ/eC1ZK3orSjpcIm5lYXJlc3RcIj09PWQ/cihSLFksRCxOLHorSix4LHgrYixiKTp4LShSK0QvMikrSi8yLEY9XCJzdGFydFwiPT09dT9JLUwtajpcImNlbnRlclwiPT09dT9JLShMK08vMikrRy8yOlwiZW5kXCI9PT11P0ktWCtxK0c6cihMLFgsTyxqLHErRyxJLEkrSCxIKTt2YXIgSz1rLnNjcm9sbExlZnQsUD1rLnNjcm9sbFRvcDt4Kz1QLShBPU1hdGgubWF4KDAsTWF0aC5taW4oUCtBLGsuc2Nyb2xsSGVpZ2h0LUQrSikpKSxJKz1LLShGPU1hdGgubWF4KDAsTWF0aC5taW4oSytGLGsuc2Nyb2xsV2lkdGgtTytHKSkpfUMucHVzaCh7ZWw6ayx0b3A6QSxsZWZ0OkZ9KX1yZXR1cm4gQ31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1vZHVsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9ndWQgPSByZXF1aXJlKCdndWQnKTtcblxudmFyIF9ndWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3VkKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1BWF9TSUdORURfMzFfQklUX0lOVCA9IDEwNzM3NDE4MjM7XG5cbi8vIElubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG5mdW5jdGlvbiBvYmplY3RJcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRFbWl0dGVyKHZhbHVlKSB7XG4gIHZhciBoYW5kbGVycyA9IFtdO1xuICByZXR1cm4ge1xuICAgIG9uOiBmdW5jdGlvbiBvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbiBvZmYoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcnMgPSBoYW5kbGVycy5maWx0ZXIoZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIGggIT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlcih2YWx1ZSwgY2hhbmdlZEJpdHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW5bMF0gOiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVhY3RDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgdmFyIF9Qcm92aWRlciRjaGlsZENvbnRleCwgX0NvbnN1bWVyJGNvbnRleHRUeXBlO1xuXG4gIHZhciBjb250ZXh0UHJvcCA9ICdfX2NyZWF0ZS1yZWFjdC1jb250ZXh0LScgKyAoMCwgX2d1ZDIuZGVmYXVsdCkoKSArICdfXyc7XG5cbiAgdmFyIFByb3ZpZGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUHJvdmlkZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUHJvdmlkZXIoKSB7XG4gICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvdmlkZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuZW1pdHRlciA9IGNyZWF0ZUV2ZW50RW1pdHRlcihfdGhpcy5wcm9wcy52YWx1ZSksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltjb250ZXh0UHJvcF0gPSB0aGlzLmVtaXR0ZXIsIF9yZWY7XG4gICAgfTtcblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBuZXh0UHJvcHMudmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gbmV4dFByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgY2hhbmdlZEJpdHMgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKG9iamVjdElzKG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGFuZ2VkQml0cyA9IDA7IC8vIE5vIGNoYW5nZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYW5nZWRCaXRzID0gdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nID8gY2FsY3VsYXRlQ2hhbmdlZEJpdHMob2xkVmFsdWUsIG5ld1ZhbHVlKSA6IE1BWF9TSUdORURfMzFfQklUX0lOVDtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSgoY2hhbmdlZEJpdHMgJiBNQVhfU0lHTkVEXzMxX0JJVF9JTlQpID09PSBjaGFuZ2VkQml0cywgJ2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBFeHBlY3RlZCB0aGUgcmV0dXJuIHZhbHVlIHRvIGJlIGEgJyArICczMS1iaXQgaW50ZWdlci4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjaGFuZ2VkQml0cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hhbmdlZEJpdHMgfD0gMDtcblxuICAgICAgICAgIGlmIChjaGFuZ2VkQml0cyAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLnNldChuZXh0UHJvcHMudmFsdWUsIGNoYW5nZWRCaXRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvdmlkZXI7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSAoX1Byb3ZpZGVyJGNoaWxkQ29udGV4ID0ge30sIF9Qcm92aWRlciRjaGlsZENvbnRleFtjb250ZXh0UHJvcF0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLCBfUHJvdmlkZXIkY2hpbGRDb250ZXgpO1xuXG4gIHZhciBDb25zdW1lciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAgIF9pbmhlcml0cyhDb25zdW1lciwgX0NvbXBvbmVudDIpO1xuXG4gICAgZnVuY3Rpb24gQ29uc3VtZXIoKSB7XG4gICAgICB2YXIgX3RlbXAyLCBfdGhpczIsIF9yZXQyO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uc3VtZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0MiA9IChfdGVtcDIgPSAoX3RoaXMyID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudDIuY2FsbC5hcHBseShfQ29tcG9uZW50MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpczIpLCBfdGhpczIuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOiBfdGhpczIuZ2V0VmFsdWUoKVxuICAgICAgfSwgX3RoaXMyLm9uVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBjaGFuZ2VkQml0cykge1xuICAgICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gX3RoaXMyLm9ic2VydmVkQml0cyB8IDA7XG4gICAgICAgIGlmICgob2JzZXJ2ZWRCaXRzICYgY2hhbmdlZEJpdHMpICE9PSAwKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgdmFsdWU6IF90aGlzMi5nZXRWYWx1ZSgpIH0pO1xuICAgICAgICB9XG4gICAgICB9LCBfdGVtcDIpLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpczIsIF9yZXQyKTtcbiAgICB9XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gbmV4dFByb3BzLm9ic2VydmVkQml0cztcblxuICAgICAgdGhpcy5vYnNlcnZlZEJpdHMgPSBvYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCB8fCBvYnNlcnZlZEJpdHMgPT09IG51bGwgPyBNQVhfU0lHTkVEXzMxX0JJVF9JTlQgLy8gU3Vic2NyaWJlIHRvIGFsbCBjaGFuZ2VzIGJ5IGRlZmF1bHRcbiAgICAgIDogb2JzZXJ2ZWRCaXRzO1xuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0ub24odGhpcy5vblVwZGF0ZSk7XG4gICAgICB9XG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gdGhpcy5wcm9wcy5vYnNlcnZlZEJpdHM7XG5cbiAgICAgIHRoaXMub2JzZXJ2ZWRCaXRzID0gb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQgfHwgb2JzZXJ2ZWRCaXRzID09PSBudWxsID8gTUFYX1NJR05FRF8zMV9CSVRfSU5UIC8vIFN1YnNjcmliZSB0byBhbGwgY2hhbmdlcyBieSBkZWZhdWx0XG4gICAgICA6IG9ic2VydmVkQml0cztcbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLm9mZih0aGlzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5nZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gb25seUNoaWxkKHRoaXMucHJvcHMuY2hpbGRyZW4pKHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29uc3VtZXI7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgQ29uc3VtZXIuY29udGV4dFR5cGVzID0gKF9Db25zdW1lciRjb250ZXh0VHlwZSA9IHt9LCBfQ29uc3VtZXIkY29udGV4dFR5cGVbY29udGV4dFByb3BdID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIF9Db25zdW1lciRjb250ZXh0VHlwZSk7XG5cblxuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBQcm92aWRlcixcbiAgICBDb25zdW1lcjogQ29uc3VtZXJcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUmVhY3RDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBfaW1wbGVtZW50YXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1wbGVtZW50YXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ29udGV4dCB8fCBfaW1wbGVtZW50YXRpb24yLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJ2YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJ29iamVjdC1rZXlzJyk7XG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCdpcy1hcmd1bWVudHMnKTtcbnZhciBpcyA9IHJlcXVpcmUoJ29iamVjdC1pcycpO1xudmFyIGlzUmVnZXggPSByZXF1aXJlKCdpcy1yZWdleCcpO1xudmFyIGZsYWdzID0gcmVxdWlyZSgncmVnZXhwLnByb3RvdHlwZS5mbGFncycpO1xudmFyIGlzRGF0ZSA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqZWN0Jyk7XG5cbnZhciBnZXRUaW1lID0gRGF0ZS5wcm90b3R5cGUuZ2V0VGltZTtcblxuZnVuY3Rpb24gZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAob3B0cy5zdHJpY3QgPyBpcyhhY3R1YWwsIGV4cGVjdGVkKSA6IGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIDcuMy4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JywgZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkIHx8ICh0eXBlb2YgYWN0dWFsICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgZXhwZWN0ZWQgIT09ICdvYmplY3QnKSkge1xuICAgIHJldHVybiBvcHRzLnN0cmljdCA/IGlzKGFjdHVhbCwgZXhwZWN0ZWQpIDogYWN0dWFsID09IGV4cGVjdGVkO1xuICB9XG5cbiAgLypcbiAgICogNy40LiBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gICAqIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAgKiB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gICAqIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgICogY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgICogYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIoeCkge1xuICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnIHx8IHR5cGVvZiB4Lmxlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiB4LmNvcHkgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHguc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB0eXBlb2YgeFswXSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIG9wdHMpIHtcbiAgLyogZXNsaW50IG1heC1zdGF0ZW1lbnRzOiBbMiwgNTBdICovXG4gIHZhciBpLCBrZXk7XG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChpc1VuZGVmaW5lZE9yTnVsbChhKSB8fCBpc1VuZGVmaW5lZE9yTnVsbChiKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKGlzQXJndW1lbnRzKGEpICE9PSBpc0FyZ3VtZW50cyhiKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICB2YXIgYUlzUmVnZXggPSBpc1JlZ2V4KGEpO1xuICB2YXIgYklzUmVnZXggPSBpc1JlZ2V4KGIpO1xuICBpZiAoYUlzUmVnZXggIT09IGJJc1JlZ2V4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYUlzUmVnZXggfHwgYklzUmVnZXgpIHtcbiAgICByZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGZsYWdzKGEpID09PSBmbGFncyhiKTtcbiAgfVxuXG4gIGlmIChpc0RhdGUoYSkgJiYgaXNEYXRlKGIpKSB7XG4gICAgcmV0dXJuIGdldFRpbWUuY2FsbChhKSA9PT0gZ2V0VGltZS5jYWxsKGIpO1xuICB9XG5cbiAgdmFyIGFJc0J1ZmZlciA9IGlzQnVmZmVyKGEpO1xuICB2YXIgYklzQnVmZmVyID0gaXNCdWZmZXIoYik7XG4gIGlmIChhSXNCdWZmZXIgIT09IGJJc0J1ZmZlcikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGFJc0J1ZmZlciB8fCBiSXNCdWZmZXIpIHsgLy8gJiYgd291bGQgd29yayB0b28sIGJlY2F1c2UgYm90aCBhcmUgdHJ1ZSBvciBib3RoIGZhbHNlIGhlcmVcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIGEgIT09IHR5cGVvZiBiKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHRyeSB7XG4gICAgdmFyIGthID0gb2JqZWN0S2V5cyhhKTtcbiAgICB2YXIga2IgPSBvYmplY3RLZXlzKGIpO1xuICB9IGNhdGNoIChlKSB7IC8vIGhhcHBlbnMgd2hlbiBvbmUgaXMgYSBzdHJpbmcgbGl0ZXJhbCBhbmQgdGhlIG90aGVyIGlzbid0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXMgaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT09IGtiLmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyB0aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vIH5+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9IGtiW2ldKSB7IHJldHVybiBmYWxzZTsgfVxuICB9XG4gIC8vIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kIH5+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgb3B0cykpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWVwRXF1YWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBrZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCdmb28nKSA9PT0gJ3N5bWJvbCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBvcmlnRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG9iaiA9IHt9O1xuXHR0cnkge1xuXHRcdG9yaWdEZWZpbmVQcm9wZXJ0eShvYmosICd4JywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IG9iaiB9KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdFx0Zm9yICh2YXIgXyBpbiBvYmopIHsgLy8ganNjczppZ25vcmUgZGlzYWxsb3dVbnVzZWRWYXJpYWJsZXNcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIG9iai54ID09PSBvYmo7XG5cdH0gY2F0Y2ggKGUpIHsgLyogdGhpcyBpcyBJRSA4LiAqL1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gb3JpZ0RlZmluZVByb3BlcnR5ICYmIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQoKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgdmFsdWUsIHByZWRpY2F0ZSkge1xuXHRpZiAobmFtZSBpbiBvYmplY3QgJiYgKCFpc0Z1bmN0aW9uKHByZWRpY2F0ZSkgfHwgIXByZWRpY2F0ZSgpKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuXHRcdG9yaWdEZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRvYmplY3RbbmFtZV0gPSB2YWx1ZTtcblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBjb25jYXQuY2FsbChwcm9wcywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wc1tpXSwgbWFwW3Byb3BzW2ldXSwgcHJlZGljYXRlc1twcm9wc1tpXV0pO1xuXHR9XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gZG8gbm90IGVkaXQgLmpzIGZpbGVzIGRpcmVjdGx5IC0gZWRpdCBzcmMvaW5kZXguanN0XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYS5jb25zdHJ1Y3RvciAhPT0gYi5jb25zdHJ1Y3RvcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGxlbmd0aCwgaSwga2V5cztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG5cbiAgICBpZiAoYS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwKSByZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmIGEuZmxhZ3MgPT09IGIuZmxhZ3M7XG4gICAgaWYgKGEudmFsdWVPZiAhPT0gT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mKSByZXR1cm4gYS52YWx1ZU9mKCkgPT09IGIudmFsdWVPZigpO1xuICAgIGlmIChhLnRvU3RyaW5nICE9PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG5cbiAgICBrZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFlcXVhbChhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHRydWUgaWYgYm90aCBOYU4sIGZhbHNlIG90aGVyd2lzZVxuICByZXR1cm4gYSE9PWEgJiYgYiE9PWI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgbm8taW52YWxpZC10aGlzOiAxICovXG5cbnZhciBFUlJPUl9NRVNTQUdFID0gJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgJztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZnVuY1R5cGUgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQodGhhdCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwodGFyZ2V0KSAhPT0gZnVuY1R5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJPUl9NRVNTQUdFICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB2YXIgYm91bmQ7XG4gICAgdmFyIGJpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBib3VuZExlbmd0aCA9IE1hdGgubWF4KDAsIHRhcmdldC5sZW5ndGggLSBhcmdzLmxlbmd0aCk7XG4gICAgdmFyIGJvdW5kQXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm91bmRMZW5ndGg7IGkrKykge1xuICAgICAgICBib3VuZEFyZ3MucHVzaCgnJCcgKyBpKTtcbiAgICB9XG5cbiAgICBib3VuZCA9IEZ1bmN0aW9uKCdiaW5kZXInLCAncmV0dXJuIGZ1bmN0aW9uICgnICsgYm91bmRBcmdzLmpvaW4oJywnKSArICcpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICBpZiAodGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHt9O1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbHNcblx0QWdncmVnYXRlRXJyb3IsXG5cdEF0b21pY3MsXG5cdEZpbmFsaXphdGlvblJlZ2lzdHJ5LFxuXHRTaGFyZWRBcnJheUJ1ZmZlcixcblx0V2Vha1JlZixcbiovXG5cbnZhciB1bmRlZmluZWQ7XG5cbnZhciAkU3ludGF4RXJyb3IgPSBTeW50YXhFcnJvcjtcbnZhciAkRnVuY3Rpb24gPSBGdW5jdGlvbjtcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbnZhciBnZXRFdmFsbGVkQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoZXhwcmVzc2lvblN5bnRheCkge1xuXHR0cnkge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuXHRcdHJldHVybiBGdW5jdGlvbignXCJ1c2Ugc3RyaWN0XCI7IHJldHVybiAoJyArIGV4cHJlc3Npb25TeW50YXggKyAnKS5jb25zdHJ1Y3RvcjsnKSgpO1xuXHR9IGNhdGNoIChlKSB7fVxufTtcblxudmFyICRnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbmlmICgkZ09QRCkge1xuXHR0cnkge1xuXHRcdCRnT1BEKHt9LCAnJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQkZ09QRCA9IG51bGw7IC8vIHRoaXMgaXMgSUUgOCwgd2hpY2ggaGFzIGEgYnJva2VuIGdPUERcblx0fVxufVxuXG52YXIgdGhyb3dUeXBlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyAkVHlwZUVycm9yKCk7XG59O1xudmFyIFRocm93VHlwZUVycm9yID0gJGdPUERcblx0PyAoZnVuY3Rpb24gKCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zLCBuby1jYWxsZXIsIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllc1xuXHRcdFx0YXJndW1lbnRzLmNhbGxlZTsgLy8gSUUgOCBkb2VzIG5vdCB0aHJvdyBoZXJlXG5cdFx0XHRyZXR1cm4gdGhyb3dUeXBlRXJyb3I7XG5cdFx0fSBjYXRjaCAoY2FsbGVlVGhyb3dzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBJRSA4IHRocm93cyBvbiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFyZ3VtZW50cywgJycpXG5cdFx0XHRcdHJldHVybiAkZ09QRChhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7XG5cdFx0XHR9IGNhdGNoIChnT1BEdGhyb3dzKSB7XG5cdFx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH0oKSlcblx0OiB0aHJvd1R5cGVFcnJvcjtcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5fX3Byb3RvX187IH07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblxudmFyIGFzeW5jR2VuRnVuY3Rpb24gPSBnZXRFdmFsbGVkQ29uc3RydWN0b3IoJ2FzeW5jIGZ1bmN0aW9uKiAoKSB7fScpO1xudmFyIGFzeW5jR2VuRnVuY3Rpb25Qcm90b3R5cGUgPSBhc3luY0dlbkZ1bmN0aW9uID8gYXN5bmNHZW5GdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW5Qcm90b3R5cGUgPSBhc3luY0dlbkZ1bmN0aW9uUHJvdG90eXBlID8gYXN5bmNHZW5GdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgOiB1bmRlZmluZWQ7XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJUFnZ3JlZ2F0ZUVycm9yJSc6IHR5cGVvZiBBZ2dyZWdhdGVFcnJvciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBZ2dyZWdhdGVFcnJvcixcblx0JyVBcnJheSUnOiBBcnJheSxcblx0JyVBcnJheUJ1ZmZlciUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIsXG5cdCclQXJyYXlJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Zyb21TeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogdW5kZWZpbmVkLFxuXHQnJUFzeW5jRnVuY3Rpb24lJzogZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiAoKSB7fScpLFxuXHQnJUFzeW5jR2VuZXJhdG9yJSc6IGFzeW5jR2VuRnVuY3Rpb25Qcm90b3R5cGUsXG5cdCclQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnOiBhc3luY0dlbkZ1bmN0aW9uLFxuXHQnJUFzeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5Qcm90b3R5cGUgPyBnZXRQcm90byhhc3luY0dlblByb3RvdHlwZSkgOiB1bmRlZmluZWQsXG5cdCclQXRvbWljcyUnOiB0eXBlb2YgQXRvbWljcyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBdG9taWNzLFxuXHQnJUJpZ0ludCUnOiB0eXBlb2YgQmlnSW50ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEJpZ0ludCxcblx0JyVCb29sZWFuJSc6IEJvb2xlYW4sXG5cdCclRGF0YVZpZXclJzogdHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IERhdGFWaWV3LFxuXHQnJURhdGUlJzogRGF0ZSxcblx0JyVkZWNvZGVVUkklJzogZGVjb2RlVVJJLFxuXHQnJWRlY29kZVVSSUNvbXBvbmVudCUnOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdCclZW5jb2RlVVJJJSc6IGVuY29kZVVSSSxcblx0JyVlbmNvZGVVUklDb21wb25lbnQlJzogZW5jb2RlVVJJQ29tcG9uZW50LFxuXHQnJUVycm9yJSc6IEVycm9yLFxuXHQnJWV2YWwlJzogZXZhbCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG5cdCclRXZhbEVycm9yJSc6IEV2YWxFcnJvcixcblx0JyVGbG9hdDMyQXJyYXklJzogdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDMyQXJyYXksXG5cdCclRmxvYXQ2NEFycmF5JSc6IHR5cGVvZiBGbG9hdDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQ2NEFycmF5LFxuXHQnJUZpbmFsaXphdGlvblJlZ2lzdHJ5JSc6IHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGaW5hbGl6YXRpb25SZWdpc3RyeSxcblx0JyVGdW5jdGlvbiUnOiAkRnVuY3Rpb24sXG5cdCclR2VuZXJhdG9yRnVuY3Rpb24lJzogZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdmdW5jdGlvbiogKCkge30nKSxcblx0JyVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCclSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJUludDMyQXJyYXklJzogdHlwZW9mIEludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MzJBcnJheSxcblx0JyVpc0Zpbml0ZSUnOiBpc0Zpbml0ZSxcblx0JyVpc05hTiUnOiBpc05hTixcblx0JyVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCclSlNPTiUnOiB0eXBlb2YgSlNPTiA9PT0gJ29iamVjdCcgPyBKU09OIDogdW5kZWZpbmVkLFxuXHQnJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyVNYXBJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBNYXAoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJU1hdGglJzogTWF0aCxcblx0JyVOdW1iZXIlJzogTnVtYmVyLFxuXHQnJU9iamVjdCUnOiBPYmplY3QsXG5cdCclcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJXBhcnNlSW50JSc6IHBhcnNlSW50LFxuXHQnJVByb21pc2UlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZSxcblx0JyVQcm94eSUnOiB0eXBlb2YgUHJveHkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJveHksXG5cdCclUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJVJlZmVyZW5jZUVycm9yJSc6IFJlZmVyZW5jZUVycm9yLFxuXHQnJVJlZmxlY3QlJzogdHlwZW9mIFJlZmxlY3QgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUmVmbGVjdCxcblx0JyVSZWdFeHAlJzogUmVnRXhwLFxuXHQnJVNldCUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldCxcblx0JyVTZXRJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBTZXQoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyJSc6IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTaGFyZWRBcnJheUJ1ZmZlcixcblx0JyVTdHJpbmclJzogU3RyaW5nLFxuXHQnJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90bygnJ1tTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJVN5bWJvbCUnOiBoYXNTeW1ib2xzID8gU3ltYm9sIDogdW5kZWZpbmVkLFxuXHQnJVN5bnRheEVycm9yJSc6ICRTeW50YXhFcnJvcixcblx0JyVUaHJvd1R5cGVFcnJvciUnOiBUaHJvd1R5cGVFcnJvcixcblx0JyVUeXBlZEFycmF5JSc6IFR5cGVkQXJyYXksXG5cdCclVHlwZUVycm9yJSc6ICRUeXBlRXJyb3IsXG5cdCclVWludDhBcnJheSUnOiB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OEFycmF5LFxuXHQnJVVpbnQ4Q2xhbXBlZEFycmF5JSc6IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OENsYW1wZWRBcnJheSxcblx0JyVVaW50MTZBcnJheSUnOiB0eXBlb2YgVWludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDE2QXJyYXksXG5cdCclVWludDMyQXJyYXklJzogdHlwZW9mIFVpbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQzMkFycmF5LFxuXHQnJVVSSUVycm9yJSc6IFVSSUVycm9yLFxuXHQnJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyVXZWFrUmVmJSc6IHR5cGVvZiBXZWFrUmVmID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtSZWYsXG5cdCclV2Vha1NldCUnOiB0eXBlb2YgV2Vha1NldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrU2V0XG59O1xuXG52YXIgTEVHQUNZX0FMSUFTRVMgPSB7XG5cdCclQXJyYXlCdWZmZXJQcm90b3R5cGUlJzogWydBcnJheUJ1ZmZlcicsICdwcm90b3R5cGUnXSxcblx0JyVBcnJheVByb3RvdHlwZSUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUFycmF5UHJvdG9fZW50cmllcyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdlbnRyaWVzJ10sXG5cdCclQXJyYXlQcm90b19mb3JFYWNoJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2ZvckVhY2gnXSxcblx0JyVBcnJheVByb3RvX2tleXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAna2V5cyddLFxuXHQnJUFycmF5UHJvdG9fdmFsdWVzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ3ZhbHVlcyddLFxuXHQnJUFzeW5jRnVuY3Rpb25Qcm90b3R5cGUlJzogWydBc3luY0Z1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFzeW5jR2VuZXJhdG9yJSc6IFsnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnXSxcblx0JyVBc3luY0dlbmVyYXRvclByb3RvdHlwZSUnOiBbJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUJvb2xlYW5Qcm90b3R5cGUlJzogWydCb29sZWFuJywgJ3Byb3RvdHlwZSddLFxuXHQnJURhdGFWaWV3UHJvdG90eXBlJSc6IFsnRGF0YVZpZXcnLCAncHJvdG90eXBlJ10sXG5cdCclRGF0ZVByb3RvdHlwZSUnOiBbJ0RhdGUnLCAncHJvdG90eXBlJ10sXG5cdCclRXJyb3JQcm90b3R5cGUlJzogWydFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVFdmFsRXJyb3JQcm90b3R5cGUlJzogWydFdmFsRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclRmxvYXQzMkFycmF5UHJvdG90eXBlJSc6IFsnRmxvYXQzMkFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUZsb2F0NjRBcnJheVByb3RvdHlwZSUnOiBbJ0Zsb2F0NjRBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVGdW5jdGlvblByb3RvdHlwZSUnOiBbJ0Z1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUdlbmVyYXRvciUnOiBbJ0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUdlbmVyYXRvclByb3RvdHlwZSUnOiBbJ0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQ4QXJyYXlQcm90b3R5cGUlJzogWydJbnQ4QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclSW50MTZBcnJheVByb3RvdHlwZSUnOiBbJ0ludDE2QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclSW50MzJBcnJheVByb3RvdHlwZSUnOiBbJ0ludDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclSlNPTlBhcnNlJSc6IFsnSlNPTicsICdwYXJzZSddLFxuXHQnJUpTT05TdHJpbmdpZnklJzogWydKU09OJywgJ3N0cmluZ2lmeSddLFxuXHQnJU1hcFByb3RvdHlwZSUnOiBbJ01hcCcsICdwcm90b3R5cGUnXSxcblx0JyVOdW1iZXJQcm90b3R5cGUlJzogWydOdW1iZXInLCAncHJvdG90eXBlJ10sXG5cdCclT2JqZWN0UHJvdG90eXBlJSc6IFsnT2JqZWN0JywgJ3Byb3RvdHlwZSddLFxuXHQnJU9ialByb3RvX3RvU3RyaW5nJSc6IFsnT2JqZWN0JywgJ3Byb3RvdHlwZScsICd0b1N0cmluZyddLFxuXHQnJU9ialByb3RvX3ZhbHVlT2YlJzogWydPYmplY3QnLCAncHJvdG90eXBlJywgJ3ZhbHVlT2YnXSxcblx0JyVQcm9taXNlUHJvdG90eXBlJSc6IFsnUHJvbWlzZScsICdwcm90b3R5cGUnXSxcblx0JyVQcm9taXNlUHJvdG9fdGhlbiUnOiBbJ1Byb21pc2UnLCAncHJvdG90eXBlJywgJ3RoZW4nXSxcblx0JyVQcm9taXNlX2FsbCUnOiBbJ1Byb21pc2UnLCAnYWxsJ10sXG5cdCclUHJvbWlzZV9yZWplY3QlJzogWydQcm9taXNlJywgJ3JlamVjdCddLFxuXHQnJVByb21pc2VfcmVzb2x2ZSUnOiBbJ1Byb21pc2UnLCAncmVzb2x2ZSddLFxuXHQnJVJhbmdlRXJyb3JQcm90b3R5cGUlJzogWydSYW5nZUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVJlZmVyZW5jZUVycm9yUHJvdG90eXBlJSc6IFsnUmVmZXJlbmNlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclUmVnRXhwUHJvdG90eXBlJSc6IFsnUmVnRXhwJywgJ3Byb3RvdHlwZSddLFxuXHQnJVNldFByb3RvdHlwZSUnOiBbJ1NldCcsICdwcm90b3R5cGUnXSxcblx0JyVTaGFyZWRBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiBbJ1NoYXJlZEFycmF5QnVmZmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN0cmluZ1Byb3RvdHlwZSUnOiBbJ1N0cmluZycsICdwcm90b3R5cGUnXSxcblx0JyVTeW1ib2xQcm90b3R5cGUlJzogWydTeW1ib2wnLCAncHJvdG90eXBlJ10sXG5cdCclU3ludGF4RXJyb3JQcm90b3R5cGUlJzogWydTeW50YXhFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVUeXBlZEFycmF5UHJvdG90eXBlJSc6IFsnVHlwZWRBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVUeXBlRXJyb3JQcm90b3R5cGUlJzogWydUeXBlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclVWludDhBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQ4QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDhDbGFtcGVkQXJyYXlQcm90b3R5cGUlJzogWydVaW50OENsYW1wZWRBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50MTZBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQxNkFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQzMkFycmF5UHJvdG90eXBlJSc6IFsnVWludDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVVJJRXJyb3JQcm90b3R5cGUlJzogWydVUklFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVXZWFrTWFwUHJvdG90eXBlJSc6IFsnV2Vha01hcCcsICdwcm90b3R5cGUnXSxcblx0JyVXZWFrU2V0UHJvdG90eXBlJSc6IFsnV2Vha1NldCcsICdwcm90b3R5cGUnXVxufTtcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgJGNvbmNhdCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBBcnJheS5wcm90b3R5cGUuY29uY2F0KTtcbnZhciAkc3BsaWNlQXBwbHkgPSBiaW5kLmNhbGwoRnVuY3Rpb24uYXBwbHksIEFycmF5LnByb3RvdHlwZS5zcGxpY2UpO1xudmFyICRyZXBsYWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG52YXIgJHN0clNsaWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFN0cmluZy5wcm90b3R5cGUuc2xpY2UpO1xuXG4vKiBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi80LjE3LjE1L2Rpc3QvbG9kYXNoLmpzI0w2NzM1LUw2NzQ0ICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXiUuW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JSQpKS9nO1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nOyAvKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBmdW5jdGlvbiBzdHJpbmdUb1BhdGgoc3RyaW5nKSB7XG5cdHZhciBmaXJzdCA9ICRzdHJTbGljZShzdHJpbmcsIDAsIDEpO1xuXHR2YXIgbGFzdCA9ICRzdHJTbGljZShzdHJpbmcsIC0xKTtcblx0aWYgKGZpcnN0ID09PSAnJScgJiYgbGFzdCAhPT0gJyUnKSB7XG5cdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW52YWxpZCBpbnRyaW5zaWMgc3ludGF4LCBleHBlY3RlZCBjbG9zaW5nIGAlYCcpO1xuXHR9IGVsc2UgaWYgKGxhc3QgPT09ICclJyAmJiBmaXJzdCAhPT0gJyUnKSB7XG5cdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW52YWxpZCBpbnRyaW5zaWMgc3ludGF4LCBleHBlY3RlZCBvcGVuaW5nIGAlYCcpO1xuXHR9XG5cdHZhciByZXN1bHQgPSBbXTtcblx0JHJlcGxhY2Uoc3RyaW5nLCByZVByb3BOYW1lLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuXHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHF1b3RlID8gJHJlcGxhY2Uoc3ViU3RyaW5nLCByZUVzY2FwZUNoYXIsICckMScpIDogbnVtYmVyIHx8IG1hdGNoO1xuXHR9KTtcblx0cmV0dXJuIHJlc3VsdDtcbn07XG4vKiBlbmQgYWRhcHRhdGlvbiAqL1xuXG52YXIgZ2V0QmFzZUludHJpbnNpYyA9IGZ1bmN0aW9uIGdldEJhc2VJbnRyaW5zaWMobmFtZSwgYWxsb3dNaXNzaW5nKSB7XG5cdHZhciBpbnRyaW5zaWNOYW1lID0gbmFtZTtcblx0dmFyIGFsaWFzO1xuXHRpZiAoaGFzT3duKExFR0FDWV9BTElBU0VTLCBpbnRyaW5zaWNOYW1lKSkge1xuXHRcdGFsaWFzID0gTEVHQUNZX0FMSUFTRVNbaW50cmluc2ljTmFtZV07XG5cdFx0aW50cmluc2ljTmFtZSA9ICclJyArIGFsaWFzWzBdICsgJyUnO1xuXHR9XG5cblx0aWYgKGhhc093bihJTlRSSU5TSUNTLCBpbnRyaW5zaWNOYW1lKSkge1xuXHRcdHZhciB2YWx1ZSA9IElOVFJJTlNJQ1NbaW50cmluc2ljTmFtZV07XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiYgIWFsbG93TWlzc2luZykge1xuXHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGZpbGUgYW4gaXNzdWUhJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFsaWFzOiBhbGlhcyxcblx0XHRcdG5hbWU6IGludHJpbnNpY05hbWUsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9O1xuXHR9XG5cblx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBkb2VzIG5vdCBleGlzdCEnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gR2V0SW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHRpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ludHJpbnNpYyBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdcImFsbG93TWlzc2luZ1wiIGFyZ3VtZW50IG11c3QgYmUgYSBib29sZWFuJyk7XG5cdH1cblxuXHR2YXIgcGFydHMgPSBzdHJpbmdUb1BhdGgobmFtZSk7XG5cdHZhciBpbnRyaW5zaWNCYXNlTmFtZSA9IHBhcnRzLmxlbmd0aCA+IDAgPyBwYXJ0c1swXSA6ICcnO1xuXG5cdHZhciBpbnRyaW5zaWMgPSBnZXRCYXNlSW50cmluc2ljKCclJyArIGludHJpbnNpY0Jhc2VOYW1lICsgJyUnLCBhbGxvd01pc3NpbmcpO1xuXHR2YXIgaW50cmluc2ljUmVhbE5hbWUgPSBpbnRyaW5zaWMubmFtZTtcblx0dmFyIHZhbHVlID0gaW50cmluc2ljLnZhbHVlO1xuXHR2YXIgc2tpcEZ1cnRoZXJDYWNoaW5nID0gZmFsc2U7XG5cblx0dmFyIGFsaWFzID0gaW50cmluc2ljLmFsaWFzO1xuXHRpZiAoYWxpYXMpIHtcblx0XHRpbnRyaW5zaWNCYXNlTmFtZSA9IGFsaWFzWzBdO1xuXHRcdCRzcGxpY2VBcHBseShwYXJ0cywgJGNvbmNhdChbMCwgMV0sIGFsaWFzKSk7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMSwgaXNPd24gPSB0cnVlOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHR2YXIgcGFydCA9IHBhcnRzW2ldO1xuXHRcdHZhciBmaXJzdCA9ICRzdHJTbGljZShwYXJ0LCAwLCAxKTtcblx0XHR2YXIgbGFzdCA9ICRzdHJTbGljZShwYXJ0LCAtMSk7XG5cdFx0aWYgKFxuXHRcdFx0KFxuXHRcdFx0XHQoZmlyc3QgPT09ICdcIicgfHwgZmlyc3QgPT09IFwiJ1wiIHx8IGZpcnN0ID09PSAnYCcpXG5cdFx0XHRcdHx8IChsYXN0ID09PSAnXCInIHx8IGxhc3QgPT09IFwiJ1wiIHx8IGxhc3QgPT09ICdgJylcblx0XHRcdClcblx0XHRcdCYmIGZpcnN0ICE9PSBsYXN0XG5cdFx0KSB7XG5cdFx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdwcm9wZXJ0eSBuYW1lcyB3aXRoIHF1b3RlcyBtdXN0IGhhdmUgbWF0Y2hpbmcgcXVvdGVzJyk7XG5cdFx0fVxuXHRcdGlmIChwYXJ0ID09PSAnY29uc3RydWN0b3InIHx8ICFpc093bikge1xuXHRcdFx0c2tpcEZ1cnRoZXJDYWNoaW5nID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpbnRyaW5zaWNCYXNlTmFtZSArPSAnLicgKyBwYXJ0O1xuXHRcdGludHJpbnNpY1JlYWxOYW1lID0gJyUnICsgaW50cmluc2ljQmFzZU5hbWUgKyAnJSc7XG5cblx0XHRpZiAoaGFzT3duKElOVFJJTlNJQ1MsIGludHJpbnNpY1JlYWxOYW1lKSkge1xuXHRcdFx0dmFsdWUgPSBJTlRSSU5TSUNTW2ludHJpbnNpY1JlYWxOYW1lXTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcblx0XHRcdGlmICghKHBhcnQgaW4gdmFsdWUpKSB7XG5cdFx0XHRcdGlmICghYWxsb3dNaXNzaW5nKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2Jhc2UgaW50cmluc2ljIGZvciAnICsgbmFtZSArICcgZXhpc3RzLCBidXQgdGhlIHByb3BlcnR5IGlzIG5vdCBhdmFpbGFibGUuJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZvaWQgdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCRnT1BEICYmIChpICsgMSkgPj0gcGFydHMubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBkZXNjID0gJGdPUEQodmFsdWUsIHBhcnQpO1xuXHRcdFx0XHRpc093biA9ICEhZGVzYztcblxuXHRcdFx0XHQvLyBCeSBjb252ZW50aW9uLCB3aGVuIGEgZGF0YSBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdG8gYW4gYWNjZXNzb3Jcblx0XHRcdFx0Ly8gcHJvcGVydHkgdG8gZW11bGF0ZSBhIGRhdGEgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBzdWZmZXIgZnJvbVxuXHRcdFx0XHQvLyB0aGUgb3ZlcnJpZGUgbWlzdGFrZSwgdGhhdCBhY2Nlc3NvcidzIGdldHRlciBpcyBtYXJrZWQgd2l0aFxuXHRcdFx0XHQvLyBhbiBgb3JpZ2luYWxWYWx1ZWAgcHJvcGVydHkuIEhlcmUsIHdoZW4gd2UgZGV0ZWN0IHRoaXMsIHdlXG5cdFx0XHRcdC8vIHVwaG9sZCB0aGUgaWxsdXNpb24gYnkgcHJldGVuZGluZyB0byBzZWUgdGhhdCBvcmlnaW5hbCBkYXRhXG5cdFx0XHRcdC8vIHByb3BlcnR5LCBpLmUuLCByZXR1cm5pbmcgdGhlIHZhbHVlIHJhdGhlciB0aGFuIHRoZSBnZXR0ZXJcblx0XHRcdFx0Ly8gaXRzZWxmLlxuXHRcdFx0XHRpZiAoaXNPd24gJiYgJ2dldCcgaW4gZGVzYyAmJiAhKCdvcmlnaW5hbFZhbHVlJyBpbiBkZXNjLmdldCkpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGRlc2MuZ2V0O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydF07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlzT3duID0gaGFzT3duKHZhbHVlLCBwYXJ0KTtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZVtwYXJ0XTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzT3duICYmICFza2lwRnVydGhlckNhY2hpbmcpIHtcblx0XHRcdFx0SU5UUklOU0lDU1tpbnRyaW5zaWNSZWFsTmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIi8vIEBmbG93XG4ndXNlIHN0cmljdCc7XG5cbnZhciBrZXkgPSAnX19nbG9iYWxfdW5pcXVlX2lkX18nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZ2xvYmFsW2tleV0gPSAoZ2xvYmFsW2tleV0gfHwgMCkgKyAxO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9yaWdTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIGhhc1N5bWJvbFNoYW0gPSByZXF1aXJlKCcuL3NoYW1zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzTmF0aXZlU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sKCdmb28nKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sKCdiYXInKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0cmV0dXJuIGhhc1N5bWJvbFNoYW0oKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBjb21wbGV4aXR5OiBbMiwgMThdLCBtYXgtc3RhdGVtZW50czogWzIsIDMzXSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnKSB7IHJldHVybiB0cnVlOyB9XG5cblx0dmFyIG9iaiA9IHt9O1xuXHR2YXIgc3ltID0gU3ltYm9sKCd0ZXN0Jyk7XG5cdHZhciBzeW1PYmogPSBPYmplY3Qoc3ltKTtcblx0aWYgKHR5cGVvZiBzeW0gPT09ICdzdHJpbmcnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltT2JqKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9vYmplY3QuYXNzaWduL2lzc3Vlcy8xN1xuXHQvLyBpZiAoc3ltIGluc3RhbmNlb2YgU3ltYm9sKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMvaXNzdWVzLzRcblx0Ly8gaWYgKCEoc3ltT2JqIGluc3RhbmNlb2YgU3ltYm9sKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyBpZiAodHlwZW9mIFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIGlmIChTdHJpbmcoc3ltKSAhPT0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bVZhbCA9IDQyO1xuXHRvYmpbc3ltXSA9IHN5bVZhbDtcblx0Zm9yIChzeW0gaW4gb2JqKSB7IHJldHVybiBmYWxzZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdGlmICh0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKTtcblx0aWYgKHN5bXMubGVuZ3RoICE9PSAxIHx8IHN5bXNbMF0gIT09IHN5bSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgc3ltKTtcblx0XHRpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gc3ltVmFsIHx8IGRlc2NyaXB0b3IuZW51bWVyYWJsZSAhPT0gdHJ1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xudmFyIGNhbGxCb3VuZCA9IHJlcXVpcmUoJ2NhbGwtYmluZC9jYWxsQm91bmQnKTtcblxudmFyICR0b1N0cmluZyA9IGNhbGxCb3VuZCgnT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZycpO1xuXG52YXIgaXNTdGFuZGFyZEFyZ3VtZW50cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdGlmIChoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIFN5bWJvbC50b1N0cmluZ1RhZyBpbiB2YWx1ZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gJHRvU3RyaW5nKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59O1xuXG52YXIgaXNMZWdhY3lBcmd1bWVudHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHRpZiAoaXNTdGFuZGFyZEFyZ3VtZW50cyh2YWx1ZSkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gdmFsdWUgIT09IG51bGwgJiZcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdCR0b1N0cmluZyh2YWx1ZSkgIT09ICdbb2JqZWN0IEFycmF5XScgJiZcblx0XHQkdG9TdHJpbmcodmFsdWUuY2FsbGVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBzdXBwb3J0c1N0YW5kYXJkQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIGlzU3RhbmRhcmRBcmd1bWVudHMoYXJndW1lbnRzKTtcbn0oKSk7XG5cbmlzU3RhbmRhcmRBcmd1bWVudHMuaXNMZWdhY3lBcmd1bWVudHMgPSBpc0xlZ2FjeUFyZ3VtZW50czsgLy8gZm9yIHRlc3RzXG5cbm1vZHVsZS5leHBvcnRzID0gc3VwcG9ydHNTdGFuZGFyZEFyZ3VtZW50cyA/IGlzU3RhbmRhcmRBcmd1bWVudHMgOiBpc0xlZ2FjeUFyZ3VtZW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldERheSA9IERhdGUucHJvdG90eXBlLmdldERheTtcbnZhciB0cnlEYXRlT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RGF0ZUdldERheUNhbGwodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRnZXREYXkuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGVPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gZGF0ZUNsYXNzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSBoYXNTeW1ib2xzICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xudmFyIGhhc093blByb3BlcnR5O1xudmFyIHJlZ2V4RXhlYztcbnZhciBpc1JlZ2V4TWFya2VyO1xudmFyIGJhZFN0cmluZ2lmaWVyO1xuXG5pZiAoaGFzVG9TdHJpbmdUYWcpIHtcblx0aGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cdHJlZ2V4RXhlYyA9IEZ1bmN0aW9uLmNhbGwuYmluZChSZWdFeHAucHJvdG90eXBlLmV4ZWMpO1xuXHRpc1JlZ2V4TWFya2VyID0ge307XG5cblx0dmFyIHRocm93UmVnZXhNYXJrZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhyb3cgaXNSZWdleE1hcmtlcjtcblx0fTtcblx0YmFkU3RyaW5naWZpZXIgPSB7XG5cdFx0dG9TdHJpbmc6IHRocm93UmVnZXhNYXJrZXIsXG5cdFx0dmFsdWVPZjogdGhyb3dSZWdleE1hcmtlclxuXHR9O1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sLnRvUHJpbWl0aXZlID09PSAnc3ltYm9sJykge1xuXHRcdGJhZFN0cmluZ2lmaWVyW1N5bWJvbC50b1ByaW1pdGl2ZV0gPSB0aHJvd1JlZ2V4TWFya2VyO1xuXHR9XG59XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgcmVnZXhDbGFzcyA9ICdbb2JqZWN0IFJlZ0V4cF0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1RvU3RyaW5nVGFnXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXHQ/IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0XHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgZGVzY3JpcHRvciA9IGdPUEQodmFsdWUsICdsYXN0SW5kZXgnKTtcblx0XHR2YXIgaGFzTGFzdEluZGV4RGF0YVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBoYXNPd25Qcm9wZXJ0eShkZXNjcmlwdG9yLCAndmFsdWUnKTtcblx0XHRpZiAoIWhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRyZWdleEV4ZWModmFsdWUsIGJhZFN0cmluZ2lmaWVyKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZSA9PT0gaXNSZWdleE1hcmtlcjtcblx0XHR9XG5cdH1cblx0OiBmdW5jdGlvbiBpc1JlZ2V4KHZhbHVlKSB7XG5cdFx0Ly8gSW4gb2xkZXIgYnJvd3NlcnMsIHR5cGVvZiByZWdleCBpbmNvcnJlY3RseSByZXR1cm5zICdmdW5jdGlvbidcblx0XHRpZiAoIXZhbHVlIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09IHJlZ2V4Q2xhc3M7XG5cdH07XG4iLCIvLyB0aGUgd2hhdHdnLWZldGNoIHBvbHlmaWxsIGluc3RhbGxzIHRoZSBmZXRjaCgpIGZ1bmN0aW9uXG4vLyBvbiB0aGUgZ2xvYmFsIG9iamVjdCAod2luZG93IG9yIHNlbGYpXG4vL1xuLy8gUmV0dXJuIHRoYXQgYXMgdGhlIGV4cG9ydCBmb3IgdXNlIGluIFdlYnBhY2ssIEJyb3dzZXJpZnkgZXRjLlxucmVxdWlyZSgnd2hhdHdnLWZldGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG51bWJlcklzTmFOID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzKGEsIGIpIHtcblx0aWYgKGEgPT09IDAgJiYgYiA9PT0gMCkge1xuXHRcdHJldHVybiAxIC8gYSA9PT0gMSAvIGI7XG5cdH1cblx0aWYgKGEgPT09IGIpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAobnVtYmVySXNOYU4oYSkgJiYgbnVtYmVySXNOYU4oYikpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kJyk7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBzaGltID0gcmVxdWlyZSgnLi9zaGltJyk7XG5cbnZhciBwb2x5ZmlsbCA9IGNhbGxCaW5kKGdldFBvbHlmaWxsKCksIE9iamVjdCk7XG5cbmRlZmluZShwb2x5ZmlsbCwge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9seWZpbGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0cmV0dXJuIHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpbXBsZW1lbnRhdGlvbjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1PYmplY3RJcygpIHtcblx0dmFyIHBvbHlmaWxsID0gZ2V0UG9seWZpbGwoKTtcblx0ZGVmaW5lKE9iamVjdCwgeyBpczogcG9seWZpbGwgfSwge1xuXHRcdGlzOiBmdW5jdGlvbiB0ZXN0T2JqZWN0SXMoKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmlzICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5c1NoaW07XG5pZiAoIU9iamVjdC5rZXlzKSB7XG5cdC8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG5cdHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXHR2YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHZhciBpc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXHR2YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcblx0dmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGlzRW51bWVyYWJsZS5jYWxsKGZ1bmN0aW9uICgpIHt9LCAncHJvdG90eXBlJyk7XG5cdHZhciBkb250RW51bXMgPSBbXG5cdFx0J3RvU3RyaW5nJyxcblx0XHQndG9Mb2NhbGVTdHJpbmcnLFxuXHRcdCd2YWx1ZU9mJyxcblx0XHQnaGFzT3duUHJvcGVydHknLFxuXHRcdCdpc1Byb3RvdHlwZU9mJyxcblx0XHQncHJvcGVydHlJc0VudW1lcmFibGUnLFxuXHRcdCdjb25zdHJ1Y3Rvcidcblx0XTtcblx0dmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlID0gZnVuY3Rpb24gKG8pIHtcblx0XHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG87XG5cdH07XG5cdHZhciBleGNsdWRlZEtleXMgPSB7XG5cdFx0JGFwcGxpY2F0aW9uQ2FjaGU6IHRydWUsXG5cdFx0JGNvbnNvbGU6IHRydWUsXG5cdFx0JGV4dGVybmFsOiB0cnVlLFxuXHRcdCRmcmFtZTogdHJ1ZSxcblx0XHQkZnJhbWVFbGVtZW50OiB0cnVlLFxuXHRcdCRmcmFtZXM6IHRydWUsXG5cdFx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHRcdCRpbm5lcldpZHRoOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5jaGFuZ2U6IHRydWUsXG5cdFx0JG9ubW96ZnVsbHNjcmVlbmVycm9yOiB0cnVlLFxuXHRcdCRvdXRlckhlaWdodDogdHJ1ZSxcblx0XHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0XHQkcGFnZVhPZmZzZXQ6IHRydWUsXG5cdFx0JHBhZ2VZT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYXJlbnQ6IHRydWUsXG5cdFx0JHNjcm9sbExlZnQ6IHRydWUsXG5cdFx0JHNjcm9sbFRvcDogdHJ1ZSxcblx0XHQkc2Nyb2xsWDogdHJ1ZSxcblx0XHQkc2Nyb2xsWTogdHJ1ZSxcblx0XHQkc2VsZjogdHJ1ZSxcblx0XHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHRcdCR3ZWJraXRTdG9yYWdlSW5mbzogdHJ1ZSxcblx0XHQkd2luZG93OiB0cnVlXG5cdH07XG5cdHZhciBoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcgPSAoZnVuY3Rpb24gKCkge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm9yICh2YXIgayBpbiB3aW5kb3cpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKHdpbmRvd1trXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0oKSk7XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZUlmTm90QnVnZ3kgPSBmdW5jdGlvbiAobykge1xuXHRcdC8qIGdsb2JhbCB3aW5kb3cgKi9cblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlKG8pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0a2V5c1NoaW0gPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuXHRcdHZhciBpc09iamVjdCA9IG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jztcblx0XHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0XHR2YXIgaXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KTtcblx0XHR2YXIgaXNTdHJpbmcgPSBpc09iamVjdCAmJiB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuXHRcdHZhciB0aGVLZXlzID0gW107XG5cblx0XHRpZiAoIWlzT2JqZWN0ICYmICFpc0Z1bmN0aW9uICYmICFpc0FyZ3VtZW50cykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuXHRcdH1cblxuXHRcdHZhciBza2lwUHJvdG8gPSBoYXNQcm90b0VudW1CdWcgJiYgaXNGdW5jdGlvbjtcblx0XHRpZiAoaXNTdHJpbmcgJiYgb2JqZWN0Lmxlbmd0aCA+IDAgJiYgIWhhcy5jYWxsKG9iamVjdCwgMCkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChpc0FyZ3VtZW50cyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBvYmplY3QubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRcdGlmICghKHNraXBQcm90byAmJiBuYW1lID09PSAncHJvdG90eXBlJykgJiYgaGFzLmNhbGwob2JqZWN0LCBuYW1lKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcobmFtZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0XHR2YXIgc2tpcENvbnN0cnVjdG9yID0gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5KG9iamVjdCk7XG5cblx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgZG9udEVudW1zLmxlbmd0aDsgKytrKSB7XG5cdFx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHRcdHRoZUtleXMucHVzaChkb250RW51bXNba10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0aGVLZXlzO1xuXHR9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTtcblxudmFyIG9yaWdLZXlzID0gT2JqZWN0LmtleXM7XG52YXIga2V5c1NoaW0gPSBvcmlnS2V5cyA/IGZ1bmN0aW9uIGtleXMobykgeyByZXR1cm4gb3JpZ0tleXMobyk7IH0gOiByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblxua2V5c1NoaW0uc2hpbSA9IGZ1bmN0aW9uIHNoaW1PYmplY3RLZXlzKCkge1xuXHRpZiAoT2JqZWN0LmtleXMpIHtcblx0XHR2YXIga2V5c1dvcmtzV2l0aEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBTYWZhcmkgNS4wIGJ1Z1xuXHRcdFx0dmFyIGFyZ3MgPSBPYmplY3Qua2V5cyhhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIGFyZ3MgJiYgYXJncy5sZW5ndGggPT09IGFyZ3VtZW50cy5sZW5ndGg7XG5cdFx0fSgxLCAyKSk7XG5cdFx0aWYgKCFrZXlzV29ya3NXaXRoQXJndW1lbnRzKSB7XG5cdFx0XHRPYmplY3Qua2V5cyA9IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG5cdFx0XHRcdGlmIChpc0FyZ3Mob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMoc2xpY2UuY2FsbChvYmplY3QpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKG9iamVjdCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRPYmplY3Qua2V5cyA9IGtleXNTaGltO1xuXHR9XG5cdHJldHVybiBPYmplY3Qua2V5cyB8fCBrZXlzU2hpbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0dmFyIHN0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHR2YXIgaXNBcmdzID0gc3RyID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcblx0aWYgKCFpc0FyZ3MpIHtcblx0XHRpc0FyZ3MgPSBzdHIgIT09ICdbb2JqZWN0IEFycmF5XScgJiZcblx0XHRcdHZhbHVlICE9PSBudWxsICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0XHR0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdFx0dmFsdWUubGVuZ3RoID49IDAgJiZcblx0XHRcdHRvU3RyLmNhbGwodmFsdWUuY2FsbGVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0fVxuXHRyZXR1cm4gaXNBcmdzO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VGb3JjZVVwZGF0ZSBmcm9tICdAcmVzdGFydC9ob29rcy91c2VGb3JjZVVwZGF0ZSc7XG5pbXBvcnQgdXNlUHJldmlvdXMgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlUHJldmlvdXMnO1xuaW1wb3J0IFR5cGVhaGVhZCBmcm9tICcuLi9jb3JlL1R5cGVhaGVhZCc7XG5pbXBvcnQgeyBvcHRpb25UeXBlIH0gZnJvbSAnLi4vcHJvcFR5cGVzJztcbmltcG9ydCB7IGdldERpc3BsYXlOYW1lLCBpc0Z1bmN0aW9uLCB3YXJuIH0gZnJvbSAnLi4vdXRpbHMnO1xudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIERlbGF5LCBpbiBtaWxsaXNlY29uZHMsIGJlZm9yZSBwZXJmb3JtaW5nIHNlYXJjaC5cbiAgICovXG4gIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBhIHJlcXVlc3QgaXMgY3VycmVudGx5IHBlbmRpbmcuIE5lY2Vzc2FyeSBmb3IgdGhlXG4gICAqIGNvbnRhaW5lciB0byBrbm93IHdoZW4gbmV3IHJlc3VsdHMgYXJlIGF2YWlsYWJsZS5cbiAgICovXG4gIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIGlucHV0IGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIGVudGVyZWQgYmVmb3JlIHNob3dpbmcgcmVzdWx0cy5cbiAgICovXG4gIG1pbkxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gcGVyZm9ybSB3aGVuIHRoZSBzZWFyY2ggaXMgZXhlY3V0ZWQuXG4gICAqL1xuICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogT3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gdGhlIHR5cGVhaGVhZC4gV2lsbCB0eXBpY2FsbHkgYmUgdGhlIHF1ZXJ5XG4gICAqIHJlc3VsdHMsIGJ1dCBjYW4gYWxzbyBiZSBpbml0aWFsIGRlZmF1bHQgb3B0aW9ucy5cbiAgICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKG9wdGlvblR5cGUpLFxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGRpc3BsYXllZCBpbiB0aGUgbWVudSB3aGVuIHRoZXJlIGlzIG5vIHVzZXIgaW5wdXQuXG4gICAqL1xuICBwcm9tcHRUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogTWVzc2FnZSBkaXNwbGF5ZWQgaW4gdGhlIG1lbnUgd2hpbGUgdGhlIHJlcXVlc3QgaXMgcGVuZGluZy5cbiAgICovXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IHNob3VsZCBjYWNoZSBxdWVyeSByZXN1bHRzLlxuICAgKi9cbiAgdXNlQ2FjaGU6IFByb3BUeXBlcy5ib29sXG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGVsYXk6IDIwMCxcbiAgbWluTGVuZ3RoOiAyLFxuICBvcHRpb25zOiBbXSxcbiAgcHJvbXB0VGV4dDogJ1R5cGUgdG8gc2VhcmNoLi4uJyxcbiAgc2VhcmNoVGV4dDogJ1NlYXJjaGluZy4uLicsXG4gIHVzZUNhY2hlOiB0cnVlXG59O1xuXG4vKipcbiAqIExvZ2ljIHRoYXQgZW5jYXBzdWxhdGVzIGNvbW1vbiBiZWhhdmlvciBhbmQgZnVuY3Rpb25hbGl0eSBhcm91bmRcbiAqIGFzeW5jaHJvbm91cyBzZWFyY2hlcywgaW5jbHVkaW5nOlxuICpcbiAqICAtIERlYm91bmNpbmcgdXNlciBpbnB1dFxuICogIC0gT3B0aW9uYWwgcXVlcnkgY2FjaGluZ1xuICogIC0gU2VhcmNoIHByb21wdCBhbmQgZW1wdHkgcmVzdWx0cyBiZWhhdmlvcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFzeW5jKHByb3BzKSB7XG4gIHZhciBhbGxvd05ldyA9IHByb3BzLmFsbG93TmV3LFxuICAgICAgZGVsYXkgPSBwcm9wcy5kZWxheSxcbiAgICAgIGVtcHR5TGFiZWwgPSBwcm9wcy5lbXB0eUxhYmVsLFxuICAgICAgaXNMb2FkaW5nID0gcHJvcHMuaXNMb2FkaW5nLFxuICAgICAgbWluTGVuZ3RoID0gcHJvcHMubWluTGVuZ3RoLFxuICAgICAgb25JbnB1dENoYW5nZSA9IHByb3BzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICBvblNlYXJjaCA9IHByb3BzLm9uU2VhcmNoLFxuICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICBwcm9tcHRUZXh0ID0gcHJvcHMucHJvbXB0VGV4dCxcbiAgICAgIHNlYXJjaFRleHQgPSBwcm9wcy5zZWFyY2hUZXh0LFxuICAgICAgdXNlQ2FjaGUgPSBwcm9wcy51c2VDYWNoZSxcbiAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiYWxsb3dOZXdcIiwgXCJkZWxheVwiLCBcImVtcHR5TGFiZWxcIiwgXCJpc0xvYWRpbmdcIiwgXCJtaW5MZW5ndGhcIiwgXCJvbklucHV0Q2hhbmdlXCIsIFwib25TZWFyY2hcIiwgXCJvcHRpb25zXCIsIFwicHJvbXB0VGV4dFwiLCBcInNlYXJjaFRleHRcIiwgXCJ1c2VDYWNoZVwiXSk7XG5cbiAgdmFyIGNhY2hlUmVmID0gdXNlUmVmKHt9KTtcbiAgdmFyIGhhbmRsZVNlYXJjaERlYm91bmNlZFJlZiA9IHVzZVJlZigpO1xuICB2YXIgcXVlcnlSZWYgPSB1c2VSZWYocHJvcHMuZGVmYXVsdElucHV0VmFsdWUgfHwgJycpO1xuICB2YXIgZm9yY2VVcGRhdGUgPSB1c2VGb3JjZVVwZGF0ZSgpO1xuICB2YXIgcHJldlByb3BzID0gdXNlUHJldmlvdXMocHJvcHMpO1xuICB2YXIgaGFuZGxlU2VhcmNoID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgcXVlcnlSZWYuY3VycmVudCA9IHF1ZXJ5O1xuXG4gICAgaWYgKCFxdWVyeSB8fCBtaW5MZW5ndGggJiYgcXVlcnkubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBVc2UgY2FjaGVkIHJlc3VsdHMsIGlmIGFwcGxpY2FibGUuXG5cblxuICAgIGlmICh1c2VDYWNoZSAmJiBjYWNoZVJlZi5jdXJyZW50W3F1ZXJ5XSkge1xuICAgICAgLy8gUmUtcmVuZGVyIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgY2FjaGVkIHJlc3VsdHMuXG4gICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUGVyZm9ybSB0aGUgc2VhcmNoLlxuXG5cbiAgICBvblNlYXJjaChxdWVyeSk7XG4gIH0sIFtmb3JjZVVwZGF0ZSwgbWluTGVuZ3RoLCBvblNlYXJjaCwgdXNlQ2FjaGVdKTsgLy8gU2V0IHRoZSBkZWJvdW5jZWQgc2VhcmNoIGZ1bmN0aW9uLlxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaGFuZGxlU2VhcmNoRGVib3VuY2VkUmVmLmN1cnJlbnQgPSBkZWJvdW5jZShoYW5kbGVTZWFyY2gsIGRlbGF5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlU2VhcmNoRGVib3VuY2VkUmVmLmN1cnJlbnQgJiYgaGFuZGxlU2VhcmNoRGVib3VuY2VkUmVmLmN1cnJlbnQuY2FuY2VsKCk7XG4gICAgfTtcbiAgfSwgW2RlbGF5LCBoYW5kbGVTZWFyY2hdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBFbnN1cmUgdGhhdCB3ZSd2ZSBnb25lIGZyb20gYSBsb2FkaW5nIHRvIGEgY29tcGxldGVkIHN0YXRlLiBPdGhlcndpc2VcbiAgICAvLyBhbiBlbXB0eSByZXNwb25zZSBjb3VsZCBnZXQgY2FjaGVkIGlmIHRoZSBjb21wb25lbnQgdXBkYXRlcyBkdXJpbmcgdGhlXG4gICAgLy8gcmVxdWVzdCAoZWc6IGlmIHRoZSBwYXJlbnQgcmUtcmVuZGVycyBmb3Igc29tZSByZWFzb24pLlxuICAgIGlmICghaXNMb2FkaW5nICYmIHByZXZQcm9wcyAmJiBwcmV2UHJvcHMuaXNMb2FkaW5nICYmIHVzZUNhY2hlKSB7XG4gICAgICBjYWNoZVJlZi5jdXJyZW50W3F1ZXJ5UmVmLmN1cnJlbnRdID0gb3B0aW9ucztcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBnZXRFbXB0eUxhYmVsID0gZnVuY3Rpb24gZ2V0RW1wdHlMYWJlbCgpIHtcbiAgICBpZiAoIXF1ZXJ5UmVmLmN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcHJvbXB0VGV4dDtcbiAgICB9XG5cbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gc2VhcmNoVGV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gZW1wdHlMYWJlbDtcbiAgfTtcblxuICB2YXIgaGFuZGxlSW5wdXRDaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocXVlcnksIGUpIHtcbiAgICBvbklucHV0Q2hhbmdlICYmIG9uSW5wdXRDaGFuZ2UocXVlcnksIGUpO1xuICAgIGhhbmRsZVNlYXJjaERlYm91bmNlZFJlZi5jdXJyZW50ICYmIGhhbmRsZVNlYXJjaERlYm91bmNlZFJlZi5jdXJyZW50KHF1ZXJ5KTtcbiAgfSwgW29uSW5wdXRDaGFuZ2VdKTtcbiAgdmFyIGNhY2hlZFF1ZXJ5ID0gY2FjaGVSZWYuY3VycmVudFtxdWVyeVJlZi5jdXJyZW50XTtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvdGhlclByb3BzLCB7XG4gICAgLy8gRGlzYWJsZSBjdXN0b20gc2VsZWN0aW9ucyBkdXJpbmcgYSBzZWFyY2ggaWYgYGFsbG93TmV3YCBpc24ndCBhIGZ1bmN0aW9uLlxuICAgIGFsbG93TmV3OiBpc0Z1bmN0aW9uKGFsbG93TmV3KSA/IGFsbG93TmV3IDogYWxsb3dOZXcgJiYgIWlzTG9hZGluZyxcbiAgICBlbXB0eUxhYmVsOiBnZXRFbXB0eUxhYmVsKCksXG4gICAgaXNMb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgsXG4gICAgb25JbnB1dENoYW5nZTogaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgb3B0aW9uczogdXNlQ2FjaGUgJiYgY2FjaGVkUXVlcnkgPyBjYWNoZWRRdWVyeSA6IG9wdGlvbnNcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gd2l0aEFzeW5jKENvbXBvbmVudCkge1xuICB2YXIgQXN5bmNUeXBlYWhlYWQgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCB1c2VBc3luYyhwcm9wcyksIHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSkpO1xuICB9KTtcbiAgQXN5bmNUeXBlYWhlYWQuZGlzcGxheU5hbWUgPSBcIndpdGhBc3luYyhcIiArIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkgKyBcIilcIjsgLy8gJEZsb3dGaXhNZVxuXG4gIEFzeW5jVHlwZWFoZWFkLnByb3BUeXBlcyA9IHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gIEFzeW5jVHlwZWFoZWFkLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiAgcmV0dXJuIEFzeW5jVHlwZWFoZWFkO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXN5bmNDb250YWluZXIoQ29tcG9uZW50KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHdhcm4oZmFsc2UsICdUaGUgYGFzeW5jQ29udGFpbmVyYCBleHBvcnQgaXMgZGVwcmVjYXRlZDsgdXNlIGB3aXRoQXN5bmNgIGluc3RlYWQuJyk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiAgcmV0dXJuIHdpdGhBc3luYyhDb21wb25lbnQpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXREaXNwbGF5TmFtZSwgaXNTaXplTGFyZ2UsIGlzU2l6ZVNtYWxsIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5mdW5jdGlvbiB3aXRoQ2xhc3NOYW1lcyhDb21wb25lbnQpIHtcbiAgLy8gVXNlIGEgY2xhc3MgaW5zdGVhZCBvZiBmdW5jdGlvbiBjb21wb25lbnQgdG8gc3VwcG9ydCByZWZzLlxuXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uICovXG4gIHZhciBXcmFwcGVkQ29tcG9uZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzTG9vc2UoV3JhcHBlZENvbXBvbmVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVkQ29tcG9uZW50KCkge1xuICAgICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBXcmFwcGVkQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBpc0ludmFsaWQgPSBfdGhpcyRwcm9wcy5pc0ludmFsaWQsXG4gICAgICAgICAgaXNWYWxpZCA9IF90aGlzJHByb3BzLmlzVmFsaWQsXG4gICAgICAgICAgc2l6ZSA9IF90aGlzJHByb3BzLnNpemUsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2xhc3NOYW1lXCIsIFwiaXNJbnZhbGlkXCIsIFwiaXNWYWxpZFwiLCBcInNpemVcIl0pO1xuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjeCgnZm9ybS1jb250cm9sJywgJ3JidC1pbnB1dCcsIHtcbiAgICAgICAgICAnZm9ybS1jb250cm9sLWxnJzogaXNTaXplTGFyZ2Uoc2l6ZSksXG4gICAgICAgICAgJ2Zvcm0tY29udHJvbC1zbSc6IGlzU2l6ZVNtYWxsKHNpemUpLFxuICAgICAgICAgICdpcy1pbnZhbGlkJzogaXNJbnZhbGlkLFxuICAgICAgICAgICdpcy12YWxpZCc6IGlzVmFsaWRcbiAgICAgICAgfSwgY2xhc3NOYW1lKVxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gV3JhcHBlZENvbXBvbmVudDtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eShXcmFwcGVkQ29tcG9uZW50LCBcImRpc3BsYXlOYW1lXCIsIFwid2l0aENsYXNzTmFtZXMoXCIgKyBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpICsgXCIpXCIpO1xuXG4gIHJldHVybiBXcmFwcGVkQ29tcG9uZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ2xhc3NOYW1lczsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBzY3JvbGxJbnRvVmlldyBmcm9tICdzY3JvbGwtaW50by12aWV3LWlmLW5lZWRlZCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZVR5cGVhaGVhZENvbnRleHQgfSBmcm9tICcuLi9jb3JlL0NvbnRleHQnO1xuaW1wb3J0IHsgZ2V0RGlzcGxheU5hbWUsIGdldE1lbnVJdGVtSWQsIHByZXZlbnRJbnB1dEJsdXIsIHdhcm4gfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBvcHRpb25UeXBlIH0gZnJvbSAnLi4vcHJvcFR5cGVzJztcbnZhciBwcm9wVHlwZXMgPSB7XG4gIG9wdGlvbjogb3B0aW9uVHlwZS5pc1JlcXVpcmVkLFxuICBwb3NpdGlvbjogUHJvcFR5cGVzLm51bWJlclxufTtcbmV4cG9ydCB2YXIgdXNlSXRlbSA9IGZ1bmN0aW9uIHVzZUl0ZW0oX3JlZikge1xuICB2YXIgbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgb25DbGljayA9IF9yZWYub25DbGljayxcbiAgICAgIG9wdGlvbiA9IF9yZWYub3B0aW9uLFxuICAgICAgcG9zaXRpb24gPSBfcmVmLnBvc2l0aW9uLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJsYWJlbFwiLCBcIm9uQ2xpY2tcIiwgXCJvcHRpb25cIiwgXCJwb3NpdGlvblwiXSk7XG5cbiAgdmFyIF91c2VUeXBlYWhlYWRDb250ZXh0ID0gdXNlVHlwZWFoZWFkQ29udGV4dCgpLFxuICAgICAgYWN0aXZlSW5kZXggPSBfdXNlVHlwZWFoZWFkQ29udGV4dC5hY3RpdmVJbmRleCxcbiAgICAgIGlkID0gX3VzZVR5cGVhaGVhZENvbnRleHQuaWQsXG4gICAgICBpc09ubHlSZXN1bHQgPSBfdXNlVHlwZWFoZWFkQ29udGV4dC5pc09ubHlSZXN1bHQsXG4gICAgICBvbkFjdGl2ZUl0ZW1DaGFuZ2UgPSBfdXNlVHlwZWFoZWFkQ29udGV4dC5vbkFjdGl2ZUl0ZW1DaGFuZ2UsXG4gICAgICBvbkluaXRpYWxJdGVtQ2hhbmdlID0gX3VzZVR5cGVhaGVhZENvbnRleHQub25Jbml0aWFsSXRlbUNoYW5nZSxcbiAgICAgIG9uTWVudUl0ZW1DbGljayA9IF91c2VUeXBlYWhlYWRDb250ZXh0Lm9uTWVudUl0ZW1DbGljayxcbiAgICAgIHNldEl0ZW0gPSBfdXNlVHlwZWFoZWFkQ29udGV4dC5zZXRJdGVtO1xuXG4gIHZhciBpdGVtUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gMCkge1xuICAgICAgb25Jbml0aWFsSXRlbUNoYW5nZShvcHRpb24pO1xuICAgIH1cbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHBvc2l0aW9uID09PSBhY3RpdmVJbmRleCkge1xuICAgICAgb25BY3RpdmVJdGVtQ2hhbmdlKG9wdGlvbik7IC8vIEF1dG9tYXRpY2FsbHkgc2Nyb2xsIHRoZSBtZW51IGFzIHRoZSB1c2VyIGtleXMgdGhyb3VnaCBpdC5cblxuICAgICAgdmFyIG5vZGUgPSBpdGVtUmVmLmN1cnJlbnQ7XG4gICAgICBub2RlICYmIHNjcm9sbEludG9WaWV3KG5vZGUsIHtcbiAgICAgICAgYmxvY2s6ICduZWFyZXN0JyxcbiAgICAgICAgYm91bmRhcnk6IG5vZGUucGFyZW50Tm9kZSxcbiAgICAgICAgaW5saW5lOiAnbmVhcmVzdCcsXG4gICAgICAgIHNjcm9sbE1vZGU6ICdpZi1uZWVkZWQnXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xuICAgIG9uTWVudUl0ZW1DbGljayhvcHRpb24sIGUpO1xuICAgIG9uQ2xpY2sgJiYgb25DbGljayhlKTtcbiAgfSwgW29uQ2xpY2ssIG9uTWVudUl0ZW1DbGljaywgb3B0aW9uXSk7XG4gIHZhciBhY3RpdmUgPSBpc09ubHlSZXN1bHQgfHwgYWN0aXZlSW5kZXggPT09IHBvc2l0aW9uOyAvLyBVcGRhdGUgdGhlIGl0ZW0ncyBwb3NpdGlvbiBpbiB0aGUgaXRlbSBzdGFjay5cblxuICBzZXRJdGVtKG9wdGlvbiwgcG9zaXRpb24pO1xuICByZXR1cm4gX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgJ2FyaWEtbGFiZWwnOiBsYWJlbCxcbiAgICAnYXJpYS1zZWxlY3RlZCc6IGFjdGl2ZSxcbiAgICBpZDogZ2V0TWVudUl0ZW1JZChpZCwgcG9zaXRpb24pLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgIG9uTW91c2VEb3duOiBwcmV2ZW50SW5wdXRCbHVyLFxuICAgIHJlZjogaXRlbVJlZixcbiAgICByb2xlOiAnb3B0aW9uJ1xuICB9KTtcbn07XG5leHBvcnQgdmFyIHdpdGhJdGVtID0gZnVuY3Rpb24gd2l0aEl0ZW0oQ29tcG9uZW50KSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IFwid2l0aEl0ZW0oXCIgKyBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpICsgXCIpXCI7XG5cbiAgdmFyIFdyYXBwZWRNZW51SXRlbSA9IGZ1bmN0aW9uIFdyYXBwZWRNZW51SXRlbShwcm9wcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHVzZUl0ZW0ocHJvcHMpKTtcbiAgfTtcblxuICBXcmFwcGVkTWVudUl0ZW0uZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgV3JhcHBlZE1lbnVJdGVtLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbiAgcmV0dXJuIFdyYXBwZWRNZW51SXRlbTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51SXRlbUNvbnRhaW5lcihDb21wb25lbnQpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgd2FybihmYWxzZSwgJ1RoZSBgbWVudUl0ZW1Db250YWluZXJgIGV4cG9ydCBpcyBkZXByZWNhdGVkOyB1c2UgYHdpdGhJdGVtYCBpbnN0ZWFkLicpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gIHJldHVybiB3aXRoSXRlbShDb21wb25lbnQpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VSb290Q2xvc2UgZnJvbSBcInJlYWN0LW92ZXJsYXlzL3VzZVJvb3RDbG9zZVwiO1xuaW1wb3J0IHsgZ2V0RGlzcGxheU5hbWUsIGlzRnVuY3Rpb24sIHdhcm4gfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgb3B0aW9uVHlwZSB9IGZyb20gJy4uL3Byb3BUeXBlcyc7XG52YXIgcHJvcFR5cGVzID0ge1xuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb3B0aW9uOiBvcHRpb25UeXBlLmlzUmVxdWlyZWRcbn07XG5leHBvcnQgdmFyIHVzZVRva2VuID0gZnVuY3Rpb24gdXNlVG9rZW4oX3JlZikge1xuICB2YXIgb25CbHVyID0gX3JlZi5vbkJsdXIsXG4gICAgICBvbkNsaWNrID0gX3JlZi5vbkNsaWNrLFxuICAgICAgb25Gb2N1cyA9IF9yZWYub25Gb2N1cyxcbiAgICAgIG9uUmVtb3ZlID0gX3JlZi5vblJlbW92ZSxcbiAgICAgIG9wdGlvbiA9IF9yZWYub3B0aW9uLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJvbkJsdXJcIiwgXCJvbkNsaWNrXCIsIFwib25Gb2N1c1wiLCBcIm9uUmVtb3ZlXCIsIFwib3B0aW9uXCJdKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgYWN0aXZlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0QWN0aXZlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUyID0gdXNlU3RhdGUobnVsbCksXG4gICAgICByb290RWxlbWVudCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBhdHRhY2hSZWYgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBoYW5kbGVBY3RpdmVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVBY3RpdmVDaGFuZ2UoZSwgaXNBY3RpdmUsIGNhbGxiYWNrKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBzZXRBY3RpdmUoaXNBY3RpdmUpO1xuICAgIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiBjYWxsYmFjayhlKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIGhhbmRsZUJsdXIoZSkge1xuICAgIGhhbmRsZUFjdGl2ZUNoYW5nZShlLCBmYWxzZSwgb25CbHVyKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgaGFuZGxlQWN0aXZlQ2hhbmdlKGUsIHRydWUsIG9uQ2xpY2spO1xuICB9O1xuXG4gIHZhciBoYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIGhhbmRsZUZvY3VzKGUpIHtcbiAgICBoYW5kbGVBY3RpdmVDaGFuZ2UoZSwgdHJ1ZSwgb25Gb2N1cyk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVJlbW92ZSA9IGZ1bmN0aW9uIGhhbmRsZVJlbW92ZSgpIHtcbiAgICBvblJlbW92ZSAmJiBvblJlbW92ZShvcHRpb24pO1xuICB9O1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgLy8gUHJldmVudCBiYWNrc3BhY2Uga2V5cHJlc3MgZnJvbSB0cmlnZ2VyaW5nIHRoZSBicm93c2VyIFwiYmFja1wiXG4gICAgICAgICAgLy8gYWN0aW9uLlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBoYW5kbGVSZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgdXNlUm9vdENsb3NlKHJvb3RFbGVtZW50LCBoYW5kbGVCbHVyLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBkaXNhYmxlZDogIWFjdGl2ZVxuICB9KSk7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgb25Gb2N1czogaGFuZGxlRm9jdXMsXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgIG9uUmVtb3ZlOiBpc0Z1bmN0aW9uKG9uUmVtb3ZlKSA/IGhhbmRsZVJlbW92ZSA6IHVuZGVmaW5lZCxcbiAgICByZWY6IGF0dGFjaFJlZlxuICB9KTtcbn07XG5leHBvcnQgdmFyIHdpdGhUb2tlbiA9IGZ1bmN0aW9uIHdpdGhUb2tlbihDb21wb25lbnQpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gXCJ3aXRoVG9rZW4oXCIgKyBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpICsgXCIpXCI7XG5cbiAgdmFyIFdyYXBwZWRUb2tlbiA9IGZ1bmN0aW9uIFdyYXBwZWRUb2tlbihwcm9wcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHVzZVRva2VuKHByb3BzKSk7XG4gIH07XG5cbiAgV3JhcHBlZFRva2VuLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gIFdyYXBwZWRUb2tlbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG4gIHJldHVybiBXcmFwcGVkVG9rZW47XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9rZW5Db250YWluZXIoQ29tcG9uZW50KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHdhcm4oZmFsc2UsICdUaGUgYHRva2VuQ29udGFpbmVyYCBleHBvcnQgaXMgZGVwcmVjYXRlZDsgdXNlIGB3aXRoVG9rZW5gIGluc3RlYWQuJyk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiAgcmV0dXJuIHdpdGhUb2tlbihDb21wb25lbnQpO1xufSIsImltcG9ydCB7IHdpdGhBc3luYyB9IGZyb20gJy4uL2JlaGF2aW9ycy9hc3luYyc7XG5pbXBvcnQgVHlwZWFoZWFkIGZyb20gJy4vVHlwZWFoZWFkJztcbmV4cG9ydCBkZWZhdWx0IHdpdGhBc3luYyhUeXBlYWhlYWQpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBpc1NpemVMYXJnZSwgbm9vcCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHNpemVUeXBlIH0gZnJvbSAnLi4vcHJvcFR5cGVzJztcbmltcG9ydCB7IEJBQ0tTUEFDRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG52YXIgcHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNpemU6IHNpemVUeXBlXG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICdDbGVhcicsXG4gIG9uQ2xpY2s6IG5vb3AsXG4gIG9uS2V5RG93bjogbm9vcFxufTtcblxuLyoqXG4gKiBDbGVhckJ1dHRvblxuICpcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2Nzcy8jaGVscGVyLWNsYXNzZXMtY2xvc2VcbiAqL1xudmFyIENsZWFyQnV0dG9uID0gZnVuY3Rpb24gQ2xlYXJCdXR0b24oX3JlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBfb25DbGljayA9IF9yZWYub25DbGljayxcbiAgICAgIF9vbktleURvd24gPSBfcmVmLm9uS2V5RG93bixcbiAgICAgIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImNsYXNzTmFtZVwiLCBcImxhYmVsXCIsIFwib25DbGlja1wiLCBcIm9uS2V5RG93blwiLCBcInNpemVcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBcImFyaWEtbGFiZWxcIjogbGFiZWwsXG4gICAgY2xhc3NOYW1lOiBjeCgnY2xvc2UnLCAncmJ0LWNsb3NlJywge1xuICAgICAgJ3JidC1jbG9zZS1sZyc6IGlzU2l6ZUxhcmdlKHNpemUpXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIF9vbkNsaWNrKGUpO1xuICAgIH0sXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgLy8gUHJldmVudCBicm93c2VyIGZyb20gbmF2aWdhdGluZyBiYWNrLlxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gQkFDS1NQQUNFKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgX29uS2V5RG93bihlKTtcbiAgICB9LFxuICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICB9LCBcIlxceEQ3XCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJzci1vbmx5XCJcbiAgfSwgbGFiZWwpKTtcbn07XG5cbkNsZWFyQnV0dG9uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNsZWFyQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbmV4cG9ydCBkZWZhdWx0IENsZWFyQnV0dG9uOyIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldE1hdGNoQm91bmRzIH0gZnJvbSAnLi4vdXRpbHMnO1xudmFyIHByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGlnaGxpZ2h0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWFyY2g6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGhpZ2hsaWdodENsYXNzTmFtZTogJ3JidC1oaWdobGlnaHQtdGV4dCdcbn07XG5cbi8qKlxuICogU3RyaXBwZWQtZG93biB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9oZWxpb3IvcmVhY3QtaGlnaGxpZ2h0ZXJcbiAqXG4gKiBSZXN1bHRzIGFyZSBhbHJlYWR5IGZpbHRlcmVkIGJ5IHRoZSB0aW1lIHRoZSBjb21wb25lbnQgaXMgdXNlZCBpbnRlcm5hbGx5IHNvXG4gKiB3ZSBjYW4gc2FmZWx5IGlnbm9yZSBjYXNlIGFuZCBkaWFjcml0aWNhbCBtYXJrcyBmb3IgdGhlIHB1cnBvc2VzIG9mIG1hdGNoaW5nLlxuICovXG52YXIgSGlnaGxpZ2h0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEhpZ2hsaWdodGVyLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSGlnaGxpZ2h0ZXIoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRQdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBIaWdobGlnaHRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBoaWdobGlnaHRDbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5oaWdobGlnaHRDbGFzc05hbWUsXG4gICAgICAgIHNlYXJjaCA9IF90aGlzJHByb3BzLnNlYXJjaDtcblxuICAgIGlmICghc2VhcmNoIHx8ICFjaGlsZHJlbikge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHZhciBtYXRjaENvdW50ID0gMDtcbiAgICB2YXIgcmVtYWluaW5nID0gY2hpbGRyZW47XG4gICAgdmFyIGhpZ2hsaWdodGVyQ2hpbGRyZW4gPSBbXTtcblxuICAgIHdoaWxlIChyZW1haW5pbmcpIHtcbiAgICAgIHZhciBib3VuZHMgPSBnZXRNYXRjaEJvdW5kcyhyZW1haW5pbmcsIHNlYXJjaCk7IC8vIE5vIG1hdGNoIGFueXdoZXJlIGluIHRoZSByZW1haW5pbmcgc3RyaW5nLCBzdG9wLlxuXG4gICAgICBpZiAoIWJvdW5kcykge1xuICAgICAgICBoaWdobGlnaHRlckNoaWxkcmVuLnB1c2gocmVtYWluaW5nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IC8vIENhcHR1cmUgdGhlIHN0cmluZyB0aGF0IGxlYWRzIHVwIHRvIGEgbWF0Y2guXG5cblxuICAgICAgdmFyIG5vbk1hdGNoID0gcmVtYWluaW5nLnNsaWNlKDAsIGJvdW5kcy5zdGFydCk7XG5cbiAgICAgIGlmIChub25NYXRjaCkge1xuICAgICAgICBoaWdobGlnaHRlckNoaWxkcmVuLnB1c2gobm9uTWF0Y2gpO1xuICAgICAgfSAvLyBDYXB0dXJlIHRoZSBtYXRjaGluZyBzdHJpbmcuXG5cblxuICAgICAgdmFyIG1hdGNoID0gcmVtYWluaW5nLnNsaWNlKGJvdW5kcy5zdGFydCwgYm91bmRzLmVuZCk7XG4gICAgICBoaWdobGlnaHRlckNoaWxkcmVuLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibWFya1wiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogaGlnaGxpZ2h0Q2xhc3NOYW1lLFxuICAgICAgICBrZXk6IG1hdGNoQ291bnRcbiAgICAgIH0sIG1hdGNoKSk7XG4gICAgICBtYXRjaENvdW50ICs9IDE7IC8vIEFuZCBpZiB0aGVyZSdzIGFueXRoaW5nIGxlZnQgb3ZlciwgY29udGludWUgdGhlIGxvb3AuXG5cbiAgICAgIHJlbWFpbmluZyA9IHJlbWFpbmluZy5zbGljZShib3VuZHMuZW5kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGlnaGxpZ2h0ZXJDaGlsZHJlbjtcbiAgfTtcblxuICByZXR1cm4gSGlnaGxpZ2h0ZXI7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoSGlnaGxpZ2h0ZXIsIFwicHJvcFR5cGVzXCIsIHByb3BUeXBlcyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShIaWdobGlnaHRlciwgXCJkZWZhdWx0UHJvcHNcIiwgZGVmYXVsdFByb3BzKTtcblxuZXhwb3J0IGRlZmF1bHQgSGlnaGxpZ2h0ZXI7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgUmVhY3QsIHsgY2xvbmVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVR5cGVhaGVhZENvbnRleHQgfSBmcm9tICcuLi9jb3JlL0NvbnRleHQnO1xuaW1wb3J0IHsgaXNTZWxlY3RhYmxlIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgUkVUVVJOLCBSSUdIVCwgVEFCIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLy8gSUUgZG9lc24ndCBzZWVtIHRvIGdldCB0aGUgY29tcG9zaXRlIGNvbXB1dGVkIHZhbHVlIChlZzogJ3BhZGRpbmcnLFxuLy8gJ2JvcmRlclN0eWxlJywgZXRjLiksIHNvIGdlbmVyYXRlIHRoZXNlIGZyb20gdGhlIGluZGl2aWR1YWwgdmFsdWVzLlxuZnVuY3Rpb24gaW50ZXJwb2xhdGVTdHlsZShzdHlsZXMsIGF0dHIsIHN1YmF0dHIpIHtcbiAgaWYgKHN1YmF0dHIgPT09IHZvaWQgMCkge1xuICAgIHN1YmF0dHIgPSAnJztcbiAgfVxuXG4gIC8vIFRpdGxlLWNhc2UgdGhlIHN1Yi1hdHRyaWJ1dGUuXG4gIGlmIChzdWJhdHRyKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgc3ViYXR0ciA9IHN1YmF0dHIucmVwbGFjZShzdWJhdHRyWzBdLCBzdWJhdHRyWzBdLnRvVXBwZXJDYXNlKCkpO1xuICB9XG5cbiAgcmV0dXJuIFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J10ubWFwKGZ1bmN0aW9uIChkaXIpIHtcbiAgICByZXR1cm4gc3R5bGVzW2F0dHIgKyBkaXIgKyBzdWJhdHRyXTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKGlucHV0Tm9kZSwgaGludE5vZGUpIHtcbiAgaWYgKCFpbnB1dE5vZGUgfHwgIWhpbnROb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGlucHV0U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpbnB1dE5vZGUpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG4gIGhpbnROb2RlLnN0eWxlLmJvcmRlclN0eWxlID0gaW50ZXJwb2xhdGVTdHlsZShpbnB1dFN0eWxlLCAnYm9yZGVyJywgJ3N0eWxlJyk7XG4gIGhpbnROb2RlLnN0eWxlLmJvcmRlcldpZHRoID0gaW50ZXJwb2xhdGVTdHlsZShpbnB1dFN0eWxlLCAnYm9yZGVyJywgJ3dpZHRoJyk7XG4gIGhpbnROb2RlLnN0eWxlLmZvbnRTaXplID0gaW5wdXRTdHlsZS5mb250U2l6ZTtcbiAgaGludE5vZGUuc3R5bGUuaGVpZ2h0ID0gaW5wdXRTdHlsZS5oZWlnaHQ7XG4gIGhpbnROb2RlLnN0eWxlLmxpbmVIZWlnaHQgPSBpbnB1dFN0eWxlLmxpbmVIZWlnaHQ7XG4gIGhpbnROb2RlLnN0eWxlLm1hcmdpbiA9IGludGVycG9sYXRlU3R5bGUoaW5wdXRTdHlsZSwgJ21hcmdpbicpO1xuICBoaW50Tm9kZS5zdHlsZS5wYWRkaW5nID0gaW50ZXJwb2xhdGVTdHlsZShpbnB1dFN0eWxlLCAncGFkZGluZycpO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0U2hvdWxkU2VsZWN0KGUsIHN0YXRlKSB7XG4gIHZhciBzaG91bGRTZWxlY3RIaW50ID0gZmFsc2U7XG4gIHZhciBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0LFxuICAgICAga2V5Q29kZSA9IGUua2V5Q29kZTtcblxuICBpZiAoa2V5Q29kZSA9PT0gUklHSFQpIHtcbiAgICAvLyBGb3Igc2VsZWN0YWJsZSBpbnB1dCB0eXBlcyAoXCJ0ZXh0XCIsIFwic2VhcmNoXCIpLCBvbmx5IHNlbGVjdCB0aGUgaGludCBpZlxuICAgIC8vIGl0J3MgYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgdmFsdWUuIEZvciBub24tc2VsZWN0YWJsZSB0eXBlcyAoXCJlbWFpbFwiLFxuICAgIC8vIFwibnVtYmVyXCIpLCBhbHdheXMgc2VsZWN0IHRoZSBoaW50LlxuICAgIHNob3VsZFNlbGVjdEhpbnQgPSBpc1NlbGVjdGFibGUoY3VycmVudFRhcmdldCkgPyBjdXJyZW50VGFyZ2V0LnNlbGVjdGlvblN0YXJ0ID09PSBjdXJyZW50VGFyZ2V0LnZhbHVlLmxlbmd0aCA6IHRydWU7XG4gIH1cblxuICBpZiAoa2V5Q29kZSA9PT0gVEFCKSB7XG4gICAgLy8gUHJldmVudCBpbnB1dCBmcm9tIGJsdXJyaW5nIG9uIFRBQi5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hvdWxkU2VsZWN0SGludCA9IHRydWU7XG4gIH1cblxuICBpZiAoa2V5Q29kZSA9PT0gUkVUVVJOKSB7XG4gICAgc2hvdWxkU2VsZWN0SGludCA9ICEhc3RhdGUuc2VsZWN0SGludE9uRW50ZXI7XG4gIH1cblxuICByZXR1cm4gdHlwZW9mIHN0YXRlLnNob3VsZFNlbGVjdCA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXRlLnNob3VsZFNlbGVjdChzaG91bGRTZWxlY3RIaW50LCBlKSA6IHNob3VsZFNlbGVjdEhpbnQ7XG59XG5leHBvcnQgdmFyIHVzZUhpbnQgPSBmdW5jdGlvbiB1c2VIaW50KF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHNob3VsZFNlbGVjdCA9IF9yZWYuc2hvdWxkU2VsZWN0O1xuICAhKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdgdXNlSGludGAgZXhwZWN0cyBvbmUgY2hpbGQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuXG4gIHZhciBfdXNlVHlwZWFoZWFkQ29udGV4dCA9IHVzZVR5cGVhaGVhZENvbnRleHQoKSxcbiAgICAgIGhpbnRUZXh0ID0gX3VzZVR5cGVhaGVhZENvbnRleHQuaGludFRleHQsXG4gICAgICBpbml0aWFsSXRlbSA9IF91c2VUeXBlYWhlYWRDb250ZXh0LmluaXRpYWxJdGVtLFxuICAgICAgaW5wdXROb2RlID0gX3VzZVR5cGVhaGVhZENvbnRleHQuaW5wdXROb2RlLFxuICAgICAgb25BZGQgPSBfdXNlVHlwZWFoZWFkQ29udGV4dC5vbkFkZCxcbiAgICAgIHNlbGVjdEhpbnRPbkVudGVyID0gX3VzZVR5cGVhaGVhZENvbnRleHQuc2VsZWN0SGludE9uRW50ZXI7XG5cbiAgdmFyIGhpbnRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdmFyIG9uS2V5RG93biA9IGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGhpbnRUZXh0ICYmIGluaXRpYWxJdGVtICYmIGRlZmF1bHRTaG91bGRTZWxlY3QoZSwge1xuICAgICAgc2VsZWN0SGludE9uRW50ZXI6IHNlbGVjdEhpbnRPbkVudGVyLFxuICAgICAgc2hvdWxkU2VsZWN0OiBzaG91bGRTZWxlY3RcbiAgICB9KSkge1xuICAgICAgb25BZGQoaW5pdGlhbEl0ZW0pO1xuICAgIH1cblxuICAgIGNoaWxkcmVuLnByb3BzLm9uS2V5RG93biAmJiBjaGlsZHJlbi5wcm9wcy5vbktleURvd24oZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBjb3B5U3R5bGVzKGlucHV0Tm9kZSwgaGludFJlZi5jdXJyZW50KTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY2hpbGQ6IC8qI19fUFVSRV9fKi9jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIF9leHRlbmRzKHt9LCBjaGlsZHJlbi5wcm9wcywge1xuICAgICAgb25LZXlEb3duOiBvbktleURvd25cbiAgICB9KSksXG4gICAgaGludFJlZjogaGludFJlZixcbiAgICBoaW50VGV4dDogaGludFRleHRcbiAgfTtcbn07XG5cbnZhciBIaW50ID0gZnVuY3Rpb24gSGludChfcmVmMikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiY2xhc3NOYW1lXCJdKTtcblxuICB2YXIgX3VzZUhpbnQgPSB1c2VIaW50KHByb3BzKSxcbiAgICAgIGNoaWxkID0gX3VzZUhpbnQuY2hpbGQsXG4gICAgICBoaW50UmVmID0gX3VzZUhpbnQuaGludFJlZixcbiAgICAgIGhpbnRUZXh0ID0gX3VzZUhpbnQuaGludFRleHQ7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBzdHlsZToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleDogMSxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9XG4gIH0sIGNoaWxkLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgY2xhc3NOYW1lOiBcInJidC1pbnB1dC1oaW50XCIsXG4gICAgcmVmOiBoaW50UmVmLFxuICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIHN0eWxlOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMzUpJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICB2YWx1ZTogaGludFRleHRcbiAgfSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGludDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogY3goJ3JidC1pbnB1dC1tYWluJywgcHJvcHMuY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9KSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IElucHV0OyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIHByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJ0xvYWRpbmcuLi4nXG59O1xuXG52YXIgTG9hZGVyID0gZnVuY3Rpb24gTG9hZGVyKF9yZWYpIHtcbiAgdmFyIGxhYmVsID0gX3JlZi5sYWJlbDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwicmJ0LWxvYWRlciBzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbVwiLFxuICAgIHJvbGU6IFwic3RhdHVzXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwic3Itb25seVwiXG4gIH0sIGxhYmVsKSk7XG59O1xuXG5Mb2FkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuTG9hZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYXNlTWVudUl0ZW0gfSBmcm9tICcuL01lbnVJdGVtJztcbmltcG9ydCB7IHByZXZlbnRJbnB1dEJsdXIgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBjaGVja1Byb3BUeXBlLCBpc1JlcXVpcmVkRm9yQTExeSB9IGZyb20gJy4uL3Byb3BUeXBlcyc7XG5cbnZhciBNZW51RGl2aWRlciA9IGZ1bmN0aW9uIE1lbnVEaXZpZGVyKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImRyb3Bkb3duLWRpdmlkZXJcIixcbiAgICByb2xlOiBcInNlcGFyYXRvclwiXG4gIH0pO1xufTtcblxudmFyIE1lbnVIZWFkZXIgPSBmdW5jdGlvbiBNZW51SGVhZGVyKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9yb2xlLWhhcy1yZXF1aXJlZC1hcmlhLXByb3BzXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJkcm9wZG93bi1oZWFkZXJcIixcbiAgICAgIHJvbGU6IFwiaGVhZGluZ1wiXG4gICAgfSkpXG4gICk7XG59O1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgdG8gZGlzcGxheSBpbiB0aGUgbWVudSBpZiB0aGVyZSBhcmUgbm8gdmFsaWQgcmVzdWx0cy5cbiAgICovXG4gIGVtcHR5TGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBOZWVkZWQgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAqL1xuICBpZDogY2hlY2tQcm9wVHlwZShQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksIGlzUmVxdWlyZWRGb3JBMTF5KSxcblxuICAvKipcbiAgICogTWF4aW11bSBoZWlnaHQgb2YgdGhlIGRyb3Bkb3duIG1lbnUuXG4gICAqL1xuICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICAnYXJpYS1sYWJlbCc6ICdtZW51LW9wdGlvbnMnLFxuICBlbXB0eUxhYmVsOiAnTm8gbWF0Y2hlcyBmb3VuZC4nLFxuICBtYXhIZWlnaHQ6ICczMDBweCdcbn07XG5cbi8qKlxuICogTWVudSBjb21wb25lbnQgdGhhdCBoYW5kbGVzIGVtcHR5IHN0YXRlIHdoZW4gcGFzc2VkIGEgc2V0IG9mIHJlc3VsdHMuXG4gKi9cbnZhciBNZW51ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1lbnUucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaW5wdXRIZWlnaHQgPSBfdGhpcyRwcm9wcy5pbnB1dEhlaWdodCxcbiAgICAgICAgc2NoZWR1bGVVcGRhdGUgPSBfdGhpcyRwcm9wcy5zY2hlZHVsZVVwZGF0ZTsgLy8gVXBkYXRlIHRoZSBtZW51IHBvc2l0aW9uIGlmIHRoZSBoZWlnaHQgb2YgdGhlIGlucHV0IGNoYW5nZXMuXG5cbiAgICBpZiAoaW5wdXRIZWlnaHQgIT09IHByZXZQcm9wcy5pbnB1dEhlaWdodCkge1xuICAgICAgc2NoZWR1bGVVcGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5jbGFzc05hbWUsXG4gICAgICAgIGVtcHR5TGFiZWwgPSBfdGhpcyRwcm9wczIuZW1wdHlMYWJlbCxcbiAgICAgICAgaWQgPSBfdGhpcyRwcm9wczIuaWQsXG4gICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMyLmlubmVyUmVmLFxuICAgICAgICBtYXhIZWlnaHQgPSBfdGhpcyRwcm9wczIubWF4SGVpZ2h0LFxuICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzMi5zdHlsZSxcbiAgICAgICAgdGV4dCA9IF90aGlzJHByb3BzMi50ZXh0O1xuICAgIHZhciBjb250ZW50cyA9IENoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJhc2VNZW51SXRlbSwge1xuICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICByb2xlOiBcIm9wdGlvblwiXG4gICAgfSwgZW1wdHlMYWJlbCkgOiBjaGlsZHJlbjtcbiAgICByZXR1cm4gKFxuICAgICAgLyojX19QVVJFX18qL1xuXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9pbnRlcmFjdGl2ZS1zdXBwb3J0cy1mb2N1cyAqL1xuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICAgIGNsYXNzTmFtZTogY3goJ3JidC1tZW51JywgJ2Ryb3Bkb3duLW1lbnUnLCAnc2hvdycsIGNsYXNzTmFtZSksXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAga2V5OiAvLyBGb3JjZSBhIHJlLXJlbmRlciBpZiB0aGUgdGV4dCBjaGFuZ2VzIHRvIGVuc3VyZSB0aGF0IG1lbnVcbiAgICAgICAgLy8gcG9zaXRpb25pbmcgdXBkYXRlcyBjb3JyZWN0bHkuXG4gICAgICAgIHRleHQsXG4gICAgICAgIG9uTW91c2VEb3duOiAvLyBQcmV2ZW50IGlucHV0IGZyb20gYmx1cnJpbmcgd2hlbiBjbGlja2luZyBvbiB0aGUgbWVudSBzY3JvbGxiYXIuXG4gICAgICAgIHByZXZlbnRJbnB1dEJsdXIsXG4gICAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICAgIHJvbGU6IFwibGlzdGJveFwiLFxuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlLCB7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXG4gICAgICAgIH0pXG4gICAgICB9LCBjb250ZW50cylcbiAgICAgIC8qIGVzbGludC1lbmFibGUganN4LWExMXkvaW50ZXJhY3RpdmUtc3VwcG9ydHMtZm9jdXMgKi9cblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIE1lbnU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShNZW51LCBcInByb3BUeXBlc1wiLCBwcm9wVHlwZXMpO1xuXG5fZGVmaW5lUHJvcGVydHkoTWVudSwgXCJkZWZhdWx0UHJvcHNcIiwgZGVmYXVsdFByb3BzKTtcblxuX2RlZmluZVByb3BlcnR5KE1lbnUsIFwiRGl2aWRlclwiLCBNZW51RGl2aWRlcik7XG5cbl9kZWZpbmVQcm9wZXJ0eShNZW51LCBcIkhlYWRlclwiLCBNZW51SGVhZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoSXRlbSB9IGZyb20gJy4uL2JlaGF2aW9ycy9pdGVtJztcbnZhciBCYXNlTWVudUl0ZW0gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBhY3RpdmUgPSBfcmVmLmFjdGl2ZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgX29uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBvbk1vdXNlRG93biA9IF9yZWYub25Nb3VzZURvd24sXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImFjdGl2ZVwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCIsIFwib25Nb3VzZURvd25cIl0pO1xuXG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IGN4KCdkcm9wZG93bi1pdGVtJywge1xuICAgICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgICB9LCBjbGFzc05hbWUpLFxuICAgICAgaHJlZjogXCIjXCIsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAhZGlzYWJsZWQgJiYgX29uQ2xpY2sgJiYgX29uQ2xpY2soZSk7XG4gICAgICB9LFxuICAgICAgb25Nb3VzZURvd246IG9uTW91c2VEb3duLFxuICAgICAgcmVmOiByZWZcbiAgICB9KSwgY2hpbGRyZW4pXG4gICAgLyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cblxuICApO1xufSk7XG5leHBvcnQgeyBCYXNlTWVudUl0ZW0gfTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhJdGVtKEJhc2VNZW51SXRlbSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUG9wcGVyIH0gZnJvbSAncmVhY3QtcG9wcGVyJztcbmltcG9ydCB7IHZhbHVlcyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEFMSUdOIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbi8vIGBFbGVtZW50YCBpcyBub3QgZGVmaW5lZCBkdXJpbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nLCBzbyBzaGltIGl0IGhlcmUuXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG52YXIgU2FmZUVsZW1lbnQgPSB0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbiAoKSB7fSA6IEVsZW1lbnQ7XG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU3BlY2lmeSBtZW51IGFsaWdubWVudC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgYGp1c3RpZnlgLCB3aGljaCBtYWtlcyB0aGVcbiAgICogbWVudSBhcyB3aWRlIGFzIHRoZSBpbnB1dCBhbmQgdHJ1bmNhdGVzIGxvbmcgdmFsdWVzLiBTcGVjaWZ5aW5nIGBsZWZ0YFxuICAgKiBvciBgcmlnaHRgIHdpbGwgYWxpZ24gdGhlIG1lbnUgdG8gdGhhdCBzaWRlIGFuZCB0aGUgd2lkdGggd2lsbCBiZVxuICAgKiBkZXRlcm1pbmVkIGJ5IHRoZSBsZW5ndGggb2YgbWVudSBpdGVtIHZhbHVlcy5cbiAgICovXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YodmFsdWVzKEFMSUdOKSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHdoZXRoZXIgdGhlIG1lbnUgc2hvdWxkIGFwcGVhciBhYm92ZSB0aGUgaW5wdXQuXG4gICAqL1xuICBkcm9wdXA6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBhdXRvbWF0aWNhbGx5IGFkanVzdCB0aGUgcG9zaXRpb24gb2YgdGhlIG1lbnUgd2hlbiBpdFxuICAgKiByZWFjaGVzIHRoZSB2aWV3cG9ydCBib3VuZGFyaWVzLlxuICAgKi9cbiAgZmxpcDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzTWVudVNob3duOiBQcm9wVHlwZXMuYm9vbCxcbiAgcG9zaXRpb25GaXhlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHJlZmVyZW5jZUVsZW1lbnQ6IFByb3BUeXBlcy5pbnN0YW5jZU9mKFNhZmVFbGVtZW50KVxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduOiBBTElHTi5KVVNUSUZZLFxuICBkcm9wdXA6IGZhbHNlLFxuICBmbGlwOiBmYWxzZSxcbiAgaXNNZW51U2hvd246IGZhbHNlLFxuICBwb3NpdGlvbkZpeGVkOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gZ2V0TW9kaWZpZXJzKF9yZWYpIHtcbiAgdmFyIGFsaWduID0gX3JlZi5hbGlnbixcbiAgICAgIGZsaXAgPSBfcmVmLmZsaXA7XG4gIHJldHVybiB7XG4gICAgY29tcHV0ZVN0eWxlczoge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIGZuOiBmdW5jdGlvbiBmbihfcmVmMikge1xuICAgICAgICB2YXIgc3R5bGVzID0gX3JlZjIuc3R5bGVzLFxuICAgICAgICAgICAgZGF0YSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJzdHlsZXNcIl0pO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZGF0YSwge1xuICAgICAgICAgIHN0eWxlczogX2V4dGVuZHMoe30sIHN0eWxlcywge1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uIGluc3RlYWQgb2YgYGFsaWduID09PSAnanVzdGlmeSdgXG4gICAgICAgICAgICAvLyBzaW5jZSBpdCBhbGxvd3MgdGhlIGNvbXBvbmVudCB0byBmYWxsIGJhY2sgdG8ganVzdGlmeWluZyB0aGVcbiAgICAgICAgICAgIC8vIG1lbnUgd2lkdGggaWYgYGFsaWduYCBpcyB1bmRlZmluZWQuXG4gICAgICAgICAgICB3aWR0aDogYWxpZ24gIT09IEFMSUdOLlJJR0hUICYmIGFsaWduICE9PSBBTElHTi5MRUZUID8gLy8gU2V0IHRoZSBwb3BwZXIgd2lkdGggdG8gbWF0Y2ggdGhlIHRhcmdldCB3aWR0aC5cbiAgICAgICAgICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2Uud2lkdGggOiBzdHlsZXMud2lkdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZsaXA6IHtcbiAgICAgIGVuYWJsZWQ6IGZsaXBcbiAgICB9LFxuICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgZXNjYXBlV2l0aFJlZmVyZW5jZTogdHJ1ZVxuICAgIH1cbiAgfTtcbn0gLy8gRmxvdyBleHBlY3RzIGEgc3RyaW5nIGxpdGVyYWwgdmFsdWUgZm9yIGBwbGFjZW1lbnRgLlxuXG5cbnZhciBQTEFDRU1FTlQgPSB7XG4gIGJvdHRvbToge1xuICAgIGVuZDogJ2JvdHRvbS1lbmQnLFxuICAgIHN0YXJ0OiAnYm90dG9tLXN0YXJ0J1xuICB9LFxuICB0b3A6IHtcbiAgICBlbmQ6ICd0b3AtZW5kJyxcbiAgICBzdGFydDogJ3RvcC1zdGFydCdcbiAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGFjZW1lbnQoX3JlZjMpIHtcbiAgdmFyIGFsaWduID0gX3JlZjMuYWxpZ24sXG4gICAgICBkcm9wdXAgPSBfcmVmMy5kcm9wdXA7XG4gIHZhciB4ID0gYWxpZ24gPT09IEFMSUdOLlJJR0hUID8gJ2VuZCcgOiAnc3RhcnQnO1xuICB2YXIgeSA9IGRyb3B1cCA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIHJldHVybiBQTEFDRU1FTlRbeV1beF07XG59XG5cbnZhciBPdmVybGF5ID0gZnVuY3Rpb24gT3ZlcmxheShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGlzTWVudVNob3duID0gcHJvcHMuaXNNZW51U2hvd24sXG4gICAgICBwb3NpdGlvbkZpeGVkID0gcHJvcHMucG9zaXRpb25GaXhlZCxcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwcm9wcy5yZWZlcmVuY2VFbGVtZW50O1xuXG4gIGlmICghaXNNZW51U2hvd24pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3BwZXIsIHtcbiAgICBtb2RpZmllcnM6IGdldE1vZGlmaWVycyhwcm9wcyksXG4gICAgcGxhY2VtZW50OiBnZXRQbGFjZW1lbnQocHJvcHMpLFxuICAgIHBvc2l0aW9uRml4ZWQ6IHBvc2l0aW9uRml4ZWQsXG4gICAgcmVmZXJlbmNlRWxlbWVudDogcmVmZXJlbmNlRWxlbWVudFxuICB9LCBmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICB2YXIgcmVmID0gX3JlZjQucmVmLFxuICAgICAgICBwb3BwZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY0LCBbXCJyZWZcIl0pO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHt9LCBwb3BwZXJQcm9wcywge1xuICAgICAgaW5uZXJSZWY6IHJlZixcbiAgICAgIGlucHV0SGVpZ2h0OiByZWZlcmVuY2VFbGVtZW50ID8gcmVmZXJlbmNlRWxlbWVudC5vZmZzZXRIZWlnaHQgOiAwXG4gICAgfSkpO1xuICB9KTtcbn07XG5cbk92ZXJsYXkucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuT3ZlcmxheS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBPdmVybGF5OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2xlYXJCdXR0b24gZnJvbSAnLi9DbGVhckJ1dHRvbic7XG5pbXBvcnQgeyB3aXRoVG9rZW4gfSBmcm9tICcuLi9iZWhhdmlvcnMvdG9rZW4nO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcbnZhciBJbnRlcmFjdGl2ZVRva2VuID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYWN0aXZlID0gX3JlZi5hY3RpdmUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIG9uUmVtb3ZlID0gX3JlZi5vblJlbW92ZSxcbiAgICAgIHRhYkluZGV4ID0gX3JlZi50YWJJbmRleCxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYWN0aXZlXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJvblJlbW92ZVwiLCBcInRhYkluZGV4XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjeCgncmJ0LXRva2VuJywgJ3JidC10b2tlbi1yZW1vdmVhYmxlJywge1xuICAgICAgJ3JidC10b2tlbi1hY3RpdmUnOiAhIWFjdGl2ZVxuICAgIH0sIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWYsXG4gICAgdGFiSW5kZXg6IHRhYkluZGV4IHx8IDBcbiAgfSksIGNoaWxkcmVuLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDbGVhckJ1dHRvbiwge1xuICAgIGNsYXNzTmFtZTogXCJyYnQtdG9rZW4tcmVtb3ZlLWJ1dHRvblwiLFxuICAgIGxhYmVsOiBcIlJlbW92ZVwiLFxuICAgIG9uQ2xpY2s6IG9uUmVtb3ZlLFxuICAgIHRhYkluZGV4OiAtMVxuICB9KSk7XG59KTtcblxudmFyIFN0YXRpY1Rva2VuID0gZnVuY3Rpb24gU3RhdGljVG9rZW4oX3JlZjIpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYyLmRpc2FibGVkLFxuICAgICAgaHJlZiA9IF9yZWYyLmhyZWY7XG4gIHZhciBjbGFzc25hbWVzID0gY3goJ3JidC10b2tlbicsIHtcbiAgICAncmJ0LXRva2VuLWRpc2FibGVkJzogZGlzYWJsZWRcbiAgfSwgY2xhc3NOYW1lKTtcblxuICBpZiAoaHJlZiAmJiAhZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcyxcbiAgICAgIGhyZWY6IGhyZWZcbiAgICB9LCBjaGlsZHJlbik7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lc1xuICB9LCBjaGlsZHJlbik7XG59O1xuLyoqXG4gKiBUb2tlblxuICpcbiAqIEluZGl2aWR1YWwgdG9rZW4gY29tcG9uZW50LCBnZW5lcmFsbHkgZGlzcGxheWVkIHdpdGhpbiB0aGUgVG9rZW5pemVySW5wdXRcbiAqIGNvbXBvbmVudCwgYnV0IGNhbiBhbHNvIGJlIHJlbmRlcmVkIG9uIGl0cyBvd24uXG4gKi9cblxuXG52YXIgVG9rZW4gPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIG9uUmVtb3ZlID0gcHJvcHMub25SZW1vdmUsXG4gICAgICByZWFkT25seSA9IHByb3BzLnJlYWRPbmx5O1xuICByZXR1cm4gIWRpc2FibGVkICYmICFyZWFkT25seSAmJiBpc0Z1bmN0aW9uKG9uUmVtb3ZlKSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEludGVyYWN0aXZlVG9rZW4sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmXG4gIH0pKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0YXRpY1Rva2VuLCBwcm9wcyk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhUb2tlbihUb2tlbik7IiwiaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVJvb3RDbG9zZSBmcm9tIFwicmVhY3Qtb3ZlcmxheXMvdXNlUm9vdENsb3NlXCI7XG5pbXBvcnQgVHlwZWFoZWFkIGZyb20gJy4uL2NvcmUvVHlwZWFoZWFkJztcbmltcG9ydCBDbGVhckJ1dHRvbiBmcm9tICcuL0NsZWFyQnV0dG9uJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5JztcbmltcG9ydCBUb2tlbiBmcm9tICcuL1Rva2VuJztcbmltcG9ydCBUeXBlYWhlYWRJbnB1dE11bHRpIGZyb20gJy4vVHlwZWFoZWFkSW5wdXRNdWx0aSc7XG5pbXBvcnQgVHlwZWFoZWFkSW5wdXRTaW5nbGUgZnJvbSAnLi9UeXBlYWhlYWRJbnB1dFNpbmdsZSc7XG5pbXBvcnQgVHlwZWFoZWFkTWVudSBmcm9tICcuL1R5cGVhaGVhZE1lbnUnO1xuaW1wb3J0IHsgZ2V0T3B0aW9uTGFiZWwsIGlzRnVuY3Rpb24sIGlzU2l6ZUxhcmdlLCBwaWNrLCBwcmV2ZW50SW5wdXRCbHVyIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgY2hlY2tQcm9wVHlwZSwgaW5wdXRQcm9wc1R5cGUsIHNpemVUeXBlIH0gZnJvbSAnLi4vcHJvcFR5cGVzJztcbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBEaXNwbGF5cyBhIGJ1dHRvbiB0byBjbGVhciB0aGUgaW5wdXQgd2hlbiB0aGVyZSBhcmUgc2VsZWN0aW9ucy5cbiAgICovXG4gIGNsZWFyQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUHJvcHMgdG8gYmUgYXBwbGllZCBkaXJlY3RseSB0byB0aGUgaW5wdXQuIGBvbkJsdXJgLCBgb25DaGFuZ2VgLFxuICAgKiBgb25Gb2N1c2AsIGFuZCBgb25LZXlEb3duYCBhcmUgaWdub3JlZC5cbiAgICovXG4gIGlucHV0UHJvcHM6IGNoZWNrUHJvcFR5cGUoUHJvcFR5cGVzLm9iamVjdCwgaW5wdXRQcm9wc1R5cGUpLFxuXG4gIC8qKlxuICAgKiBCb290c3RyYXAgNCBvbmx5LiBBZGRzIHRoZSBgaXMtaW52YWxpZGAgY2xhc3NuYW1lIHRvIHRoZSBgZm9ybS1jb250cm9sYC5cbiAgICovXG4gIGlzSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEluZGljYXRlIHdoZXRoZXIgYW4gYXN5bmNocm9ub3VzIGRhdGEgZmV0Y2ggaXMgaGFwcGVuaW5nLlxuICAgKi9cbiAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQm9vdHN0cmFwIDQgb25seS4gQWRkcyB0aGUgYGlzLXZhbGlkYCBjbGFzc25hbWUgdG8gdGhlIGBmb3JtLWNvbnRyb2xgLlxuICAgKi9cbiAgaXNWYWxpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciBjdXN0b20gaW5wdXQgcmVuZGVyaW5nLlxuICAgKi9cbiAgcmVuZGVySW5wdXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3IgY3VzdG9tIG1lbnUgcmVuZGVyaW5nLlxuICAgKi9cbiAgcmVuZGVyTWVudTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZvciBjdXN0b20gbWVudSByZW5kZXJpbmcuXG4gICAqL1xuICByZW5kZXJUb2tlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgc2l6ZSBvZiB0aGUgaW5wdXQuXG4gICAqL1xuICBzaXplOiBzaXplVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNsZWFyQnV0dG9uOiBmYWxzZSxcbiAgaW5wdXRQcm9wczoge30sXG4gIGlzSW52YWxpZDogZmFsc2UsXG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGlzVmFsaWQ6IGZhbHNlLFxuICByZW5kZXJNZW51OiBmdW5jdGlvbiByZW5kZXJNZW51KHJlc3VsdHMsIG1lbnVQcm9wcywgcHJvcHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwZWFoZWFkTWVudSwgX2V4dGVuZHMoe30sIG1lbnVQcm9wcywge1xuICAgICAgbGFiZWxLZXk6IHByb3BzLmxhYmVsS2V5LFxuICAgICAgb3B0aW9uczogcmVzdWx0cyxcbiAgICAgIHRleHQ6IHByb3BzLnRleHRcbiAgICB9KSk7XG4gIH0sXG4gIHJlbmRlclRva2VuOiBmdW5jdGlvbiByZW5kZXJUb2tlbihvcHRpb24sIHByb3BzLCBpZHgpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVG9rZW4sIHtcbiAgICAgIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGtleTogaWR4LFxuICAgICAgb25SZW1vdmU6IHByb3BzLm9uUmVtb3ZlLFxuICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICB0YWJJbmRleDogcHJvcHMudGFiSW5kZXhcbiAgICB9LCBnZXRPcHRpb25MYWJlbChvcHRpb24sIHByb3BzLmxhYmVsS2V5KSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldE92ZXJsYXlQcm9wcyhwcm9wcykge1xuICByZXR1cm4gcGljayhwcm9wcywgWydhbGlnbicsICdkcm9wdXAnLCAnZmxpcCcsICdwb3NpdGlvbkZpeGVkJ10pO1xufVxuXG52YXIgUm9vdENsb3NlID0gZnVuY3Rpb24gUm9vdENsb3NlKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG9uUm9vdENsb3NlID0gX3JlZi5vblJvb3RDbG9zZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiY2hpbGRyZW5cIiwgXCJvblJvb3RDbG9zZVwiXSk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgcm9vdEVsZW1lbnQgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBhdHRhY2hSZWYgPSBfdXNlU3RhdGVbMV07XG5cbiAgdXNlUm9vdENsb3NlKHJvb3RFbGVtZW50LCBvblJvb3RDbG9zZSwgcHJvcHMpO1xuICByZXR1cm4gY2hpbGRyZW4oYXR0YWNoUmVmKTtcbn07XG5cbnZhciBUeXBlYWhlYWRDb21wb25lbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHlwZWFoZWFkQ29tcG9uZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUeXBlYWhlYWRDb21wb25lbnQoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3JlZmVyZW5jZUVsZW1lbnRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZWZlcmVuY2VFbGVtZW50UmVmXCIsIGZ1bmN0aW9uIChyZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICBfdGhpcy5fcmVmZXJlbmNlRWxlbWVudCA9IHJlZmVyZW5jZUVsZW1lbnQ7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3JlbmRlcklucHV0XCIsIGZ1bmN0aW9uIChpbnB1dFByb3BzLCBwcm9wcykge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaXNJbnZhbGlkID0gX3RoaXMkcHJvcHMuaXNJbnZhbGlkLFxuICAgICAgICAgIGlzVmFsaWQgPSBfdGhpcyRwcm9wcy5pc1ZhbGlkLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMubXVsdGlwbGUsXG4gICAgICAgICAgcmVuZGVySW5wdXQgPSBfdGhpcyRwcm9wcy5yZW5kZXJJbnB1dCxcbiAgICAgICAgICByZW5kZXJUb2tlbiA9IF90aGlzJHByb3BzLnJlbmRlclRva2VuLFxuICAgICAgICAgIHNpemUgPSBfdGhpcyRwcm9wcy5zaXplO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbihyZW5kZXJJbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlcklucHV0KGlucHV0UHJvcHMsIHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbW1vblByb3BzID0gX2V4dGVuZHMoe30sIGlucHV0UHJvcHMsIHtcbiAgICAgICAgaXNJbnZhbGlkOiBpc0ludmFsaWQsXG4gICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsXG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBlYWhlYWRJbnB1dFNpbmdsZSwgY29tbW9uUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFiZWxLZXkgPSBwcm9wcy5sYWJlbEtleSxcbiAgICAgICAgICBvblJlbW92ZSA9IHByb3BzLm9uUmVtb3ZlLFxuICAgICAgICAgIHNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWQ7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwZWFoZWFkSW5wdXRNdWx0aSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFxuICAgICAgfSksIHNlbGVjdGVkLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpZHgpIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlclRva2VuKG9wdGlvbiwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgbGFiZWxLZXk6IGxhYmVsS2V5LFxuICAgICAgICAgIG9uUmVtb3ZlOiBvblJlbW92ZVxuICAgICAgICB9KSwgaWR4KTtcbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVuZGVyTWVudVwiLCBmdW5jdGlvbiAocmVzdWx0cywgbWVudVByb3BzLCBwcm9wcykge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGVtcHR5TGFiZWwgPSBfdGhpcyRwcm9wczIuZW1wdHlMYWJlbCxcbiAgICAgICAgICBpZCA9IF90aGlzJHByb3BzMi5pZCxcbiAgICAgICAgICBtYXhIZWlnaHQgPSBfdGhpcyRwcm9wczIubWF4SGVpZ2h0LFxuICAgICAgICAgIG5ld1NlbGVjdGlvblByZWZpeCA9IF90aGlzJHByb3BzMi5uZXdTZWxlY3Rpb25QcmVmaXgsXG4gICAgICAgICAgcGFnaW5hdGlvblRleHQgPSBfdGhpcyRwcm9wczIucGFnaW5hdGlvblRleHQsXG4gICAgICAgICAgcmVuZGVyTWVudSA9IF90aGlzJHByb3BzMi5yZW5kZXJNZW51LFxuICAgICAgICAgIHJlbmRlck1lbnVJdGVtQ2hpbGRyZW4gPSBfdGhpcyRwcm9wczIucmVuZGVyTWVudUl0ZW1DaGlsZHJlbjtcbiAgICAgIHJldHVybiByZW5kZXJNZW51KHJlc3VsdHMsIF9leHRlbmRzKHt9LCBtZW51UHJvcHMsIHtcbiAgICAgICAgZW1wdHlMYWJlbDogZW1wdHlMYWJlbCxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICAgICAgbmV3U2VsZWN0aW9uUHJlZml4OiBuZXdTZWxlY3Rpb25QcmVmaXgsXG4gICAgICAgIHBhZ2luYXRpb25UZXh0OiBwYWdpbmF0aW9uVGV4dCxcbiAgICAgICAgcmVuZGVyTWVudUl0ZW1DaGlsZHJlbjogcmVuZGVyTWVudUl0ZW1DaGlsZHJlblxuICAgICAgfSksIHByb3BzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVuZGVyQXV4XCIsIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIG9uQ2xlYXIgPSBfcmVmMi5vbkNsZWFyLFxuICAgICAgICAgIHNlbGVjdGVkID0gX3JlZjIuc2VsZWN0ZWQ7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY2xlYXJCdXR0b24gPSBfdGhpcyRwcm9wczMuY2xlYXJCdXR0b24sXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczMuZGlzYWJsZWQsXG4gICAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMzLmlzTG9hZGluZyxcbiAgICAgICAgICBzaXplID0gX3RoaXMkcHJvcHMzLnNpemU7XG4gICAgICB2YXIgY29udGVudDtcblxuICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICBjb250ZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGVyLCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAoY2xlYXJCdXR0b24gJiYgIWRpc2FibGVkICYmIHNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgICBjb250ZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xlYXJCdXR0b24sIHtcbiAgICAgICAgICBvbkNsaWNrOiBvbkNsZWFyLFxuICAgICAgICAgIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgbWFpbiBpbnB1dCBmcm9tIGF1dG8tZm9jdXNpbmcgYWdhaW4uXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25Nb3VzZURvd246IHByZXZlbnRJbnB1dEJsdXIsXG4gICAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY3goJ3JidC1hdXgnLCB7XG4gICAgICAgICAgJ3JidC1hdXgtbGcnOiBpc1NpemVMYXJnZShzaXplKVxuICAgICAgICB9KVxuICAgICAgfSwgY29udGVudCkgOiBudWxsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFR5cGVhaGVhZENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzNC5jaGlsZHJlbixcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM0LmNsYXNzTmFtZSxcbiAgICAgICAgaW5zdGFuY2VSZWYgPSBfdGhpcyRwcm9wczQuaW5zdGFuY2VSZWYsXG4gICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczQub3BlbixcbiAgICAgICAgb3B0aW9ucyA9IF90aGlzJHByb3BzNC5vcHRpb25zLFxuICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzNC5zdHlsZTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwZWFoZWFkLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIHJlZjogaW5zdGFuY2VSZWZcbiAgICB9KSwgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICB2YXIgZ2V0SW5wdXRQcm9wcyA9IF9yZWYzLmdldElucHV0UHJvcHMsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wiZ2V0SW5wdXRQcm9wc1wiXSk7XG5cbiAgICAgIHZhciBoaWRlTWVudSA9IHByb3BzLmhpZGVNZW51LFxuICAgICAgICAgIGlzTWVudVNob3duID0gcHJvcHMuaXNNZW51U2hvd24sXG4gICAgICAgICAgcmVzdWx0cyA9IHByb3BzLnJlc3VsdHM7XG5cbiAgICAgIHZhciBhdXhDb250ZW50ID0gX3RoaXMyLl9yZW5kZXJBdXgocHJvcHMpO1xuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm9vdENsb3NlLCB7XG4gICAgICAgIGRpc2FibGVkOiBvcGVuIHx8ICFpc01lbnVTaG93bixcbiAgICAgICAgb25Sb290Q2xvc2U6IGhpZGVNZW51XG4gICAgICB9LCBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjeCgncmJ0Jywge1xuICAgICAgICAgICAgJ2hhcy1hdXgnOiAhIWF1eENvbnRlbnRcbiAgICAgICAgICB9LCBjbGFzc05hbWUpLFxuICAgICAgICAgIHJlZjogcmVmLFxuICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgc3R5bGUsIHtcbiAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGFiSW5kZXg6IC0xXG4gICAgICAgIH0sIF90aGlzMi5fcmVuZGVySW5wdXQoX2V4dGVuZHMoe30sIGdldElucHV0UHJvcHMoX3RoaXMyLnByb3BzLmlucHV0UHJvcHMpLCB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudFJlZjogX3RoaXMyLnJlZmVyZW5jZUVsZW1lbnRSZWZcbiAgICAgICAgfSksIHByb3BzKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3ZlcmxheSwgX2V4dGVuZHMoe30sIGdldE92ZXJsYXlQcm9wcyhfdGhpczIucHJvcHMpLCB7XG4gICAgICAgICAgaXNNZW51U2hvd246IGlzTWVudVNob3duLFxuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQ6IF90aGlzMi5fcmVmZXJlbmNlRWxlbWVudFxuICAgICAgICB9KSwgZnVuY3Rpb24gKG1lbnVQcm9wcykge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX3JlbmRlck1lbnUocmVzdWx0cywgbWVudVByb3BzLCBwcm9wcyk7XG4gICAgICAgIH0pLCBhdXhDb250ZW50LCBpc0Z1bmN0aW9uKGNoaWxkcmVuKSA/IGNoaWxkcmVuKHByb3BzKSA6IGNoaWxkcmVuKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBUeXBlYWhlYWRDb21wb25lbnQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShUeXBlYWhlYWRDb21wb25lbnQsIFwicHJvcFR5cGVzXCIsIHByb3BUeXBlcyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShUeXBlYWhlYWRDb21wb25lbnQsIFwiZGVmYXVsdFByb3BzXCIsIGRlZmF1bHRQcm9wcyk7XG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBlYWhlYWRDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGluc3RhbmNlUmVmOiByZWZcbiAgfSkpO1xufSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpbnQgZnJvbSAnLi9IaW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCB7IGlzU2VsZWN0YWJsZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB3aXRoQ2xhc3NOYW1lcyBmcm9tICcuLi9iZWhhdmlvcnMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG52YXIgVHlwZWFoZWFkSW5wdXRNdWx0aSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUeXBlYWhlYWRJbnB1dE11bHRpLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUeXBlYWhlYWRJbnB1dE11bHRpKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIndyYXBwZXJSZWZcIiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaW5wdXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZXRJbnB1dFJlZlwiLCBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIF90aGlzLl9pbnB1dCA9IGlucHV0O1xuXG4gICAgICBfdGhpcy5wcm9wcy5pbnB1dFJlZihpbnB1dCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2hhbmRsZUNvbnRhaW5lckNsaWNrT3JGb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gRG9uJ3QgZm9jdXMgdGhlIGlucHV0IGlmIGl0J3MgZGlzYWJsZWQuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBNb3ZlIGN1cnNvciB0byB0aGUgZW5kIGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBhY3R1YWwgaW5wdXQuXG5cblxuICAgICAgdmFyIGlucHV0Tm9kZSA9IF90aGlzLl9pbnB1dDtcblxuICAgICAgaWYgKCFpbnB1dE5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ICE9PSBpbnB1dE5vZGUgJiYgaXNTZWxlY3RhYmxlKGlucHV0Tm9kZSkpIHtcbiAgICAgICAgaW5wdXROb2RlLnNlbGVjdGlvblN0YXJ0ID0gaW5wdXROb2RlLnZhbHVlLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgaW5wdXROb2RlLmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2hhbmRsZUtleURvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uS2V5RG93biA9IF90aGlzJHByb3BzLm9uS2V5RG93bixcbiAgICAgICAgICBzZWxlY3RlZCA9IF90aGlzJHByb3BzLnNlbGVjdGVkLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHMudmFsdWU7XG5cbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgQkFDS1NQQUNFOlxuICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT09IF90aGlzLl9pbnB1dCAmJiBzZWxlY3RlZC5sZW5ndGggJiYgIXZhbHVlKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IGJyb3dzZXIgZnJvbSBnb2luZyBiYWNrLlxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBJZiB0aGUgaW5wdXQgaXMgc2VsZWN0ZWQgYW5kIHRoZXJlIGlzIG5vIHRleHQsIGZvY3VzIHRoZSBsYXN0XG4gICAgICAgICAgICAvLyB0b2tlbiB3aGVuIHRoZSB1c2VyIGhpdHMgYmFja3NwYWNlLlxuXG4gICAgICAgICAgICBpZiAoX3RoaXMud3JhcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IF90aGlzLndyYXBwZXJSZWYuY3VycmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgdmFyIGxhc3RUb2tlbiA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDJdO1xuICAgICAgICAgICAgICBsYXN0VG9rZW4gJiYgbGFzdFRva2VuLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgb25LZXlEb3duKGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFR5cGVhaGVhZElucHV0TXVsdGkucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICBpbnB1dENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5pbnB1dENsYXNzTmFtZSxcbiAgICAgICAgaW5wdXRSZWYgPSBfdGhpcyRwcm9wczIuaW5wdXRSZWYsXG4gICAgICAgIHBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHMyLnBsYWNlaG9sZGVyLFxuICAgICAgICByZWZlcmVuY2VFbGVtZW50UmVmID0gX3RoaXMkcHJvcHMyLnJlZmVyZW5jZUVsZW1lbnRSZWYsXG4gICAgICAgIHNlbGVjdGVkID0gX3RoaXMkcHJvcHMyLnNlbGVjdGVkLFxuICAgICAgICBzaG91bGRTZWxlY3RIaW50ID0gX3RoaXMkcHJvcHMyLnNob3VsZFNlbGVjdEhpbnQsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMyLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImlucHV0Q2xhc3NOYW1lXCIsIFwiaW5wdXRSZWZcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlZmVyZW5jZUVsZW1lbnRSZWZcIiwgXCJzZWxlY3RlZFwiLCBcInNob3VsZFNlbGVjdEhpbnRcIl0pO1xuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY3goJ3JidC1pbnB1dC1tdWx0aScsIGNsYXNzTmFtZSksXG4gICAgICBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrOiB0aGlzLl9oYW5kbGVDb250YWluZXJDbGlja09yRm9jdXMsXG4gICAgICBvbkZvY3VzOiB0aGlzLl9oYW5kbGVDb250YWluZXJDbGlja09yRm9jdXMsXG4gICAgICByZWY6IHJlZmVyZW5jZUVsZW1lbnRSZWYsXG4gICAgICB0YWJJbmRleDogLTFcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwicmJ0LWlucHV0LXdyYXBwZXJcIixcbiAgICAgIHJlZjogdGhpcy53cmFwcGVyUmVmXG4gICAgfSwgY2hpbGRyZW4sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhpbnQsIHtcbiAgICAgIHNob3VsZFNlbGVjdDogc2hvdWxkU2VsZWN0SGludFxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogaW5wdXRDbGFzc05hbWUsXG4gICAgICBvbktleURvd246IHRoaXMuX2hhbmRsZUtleURvd24sXG4gICAgICBwbGFjZWhvbGRlcjogc2VsZWN0ZWQubGVuZ3RoID8gJycgOiBwbGFjZWhvbGRlcixcbiAgICAgIHJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgY3Vyc29yOiAnaW5oZXJpdCcsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgekluZGV4OiAxXG4gICAgICB9XG4gICAgfSkpKSkpO1xuICB9O1xuXG4gIHJldHVybiBUeXBlYWhlYWRJbnB1dE11bHRpO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ2xhc3NOYW1lcyhUeXBlYWhlYWRJbnB1dE11bHRpKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGludCBmcm9tICcuL0hpbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IHdpdGhDbGFzc05hbWVzIGZyb20gJy4uL2JlaGF2aW9ycy9jbGFzc05hbWVzJztcbmV4cG9ydCBkZWZhdWx0IHdpdGhDbGFzc05hbWVzKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBpbnB1dFJlZiA9IF9yZWYuaW5wdXRSZWYsXG4gICAgICByZWZlcmVuY2VFbGVtZW50UmVmID0gX3JlZi5yZWZlcmVuY2VFbGVtZW50UmVmLFxuICAgICAgc2hvdWxkU2VsZWN0SGludCA9IF9yZWYuc2hvdWxkU2VsZWN0SGludCxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiaW5wdXRSZWZcIiwgXCJyZWZlcmVuY2VFbGVtZW50UmVmXCIsIFwic2hvdWxkU2VsZWN0SGludFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEhpbnQsIHtcbiAgICBzaG91bGRTZWxlY3Q6IHNob3VsZFNlbGVjdEhpbnRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgIGlucHV0UmVmKG5vZGUpO1xuICAgICAgcmVmZXJlbmNlRWxlbWVudFJlZihub2RlKTtcbiAgICB9XG4gIH0pKSk7XG59KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGlnaGxpZ2h0ZXIgZnJvbSAnLi9IaWdobGlnaHRlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nO1xuaW1wb3J0IHsgZ2V0T3B0aW9uTGFiZWwsIGdldE9wdGlvblByb3BlcnR5IH0gZnJvbSAnLi4vdXRpbHMnO1xudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIHNwZWNpZnkgYSBwcmVmaXggYmVmb3JlIHRoZSB1c2VyLWVudGVyZWQgdGV4dCB0b1xuICAgKiBpbmRpY2F0ZSB0aGF0IHRoZSBzZWxlY3Rpb24gd2lsbCBiZSBuZXcuIE5vLW9wIHVubGVzcyBgYWxsb3dOZXc9e3RydWV9YC5cbiAgICovXG4gIG5ld1NlbGVjdGlvblByZWZpeDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFByb21wdCBkaXNwbGF5ZWQgd2hlbiBsYXJnZSBkYXRhIHNldHMgYXJlIHBhZ2luYXRlZC5cbiAgICovXG4gIHBhZ2luYXRpb25UZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogUHJvdmlkZXMgYSBob29rIGZvciBjdXN0b21pemVkIHJlbmRlcmluZyBvZiBtZW51IGl0ZW0gY29udGVudHMuXG4gICAqL1xuICByZW5kZXJNZW51SXRlbUNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuY1xufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIG5ld1NlbGVjdGlvblByZWZpeDogJ05ldyBzZWxlY3Rpb246ICcsXG4gIHBhZ2luYXRpb25UZXh0OiAnRGlzcGxheSBhZGRpdGlvbmFsIHJlc3VsdHMuLi4nLFxuICByZW5kZXJNZW51SXRlbUNoaWxkcmVuOiBmdW5jdGlvbiByZW5kZXJNZW51SXRlbUNoaWxkcmVuKG9wdGlvbiwgcHJvcHMsIGlkeCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIaWdobGlnaHRlciwge1xuICAgICAgc2VhcmNoOiBwcm9wcy50ZXh0XG4gICAgfSwgZ2V0T3B0aW9uTGFiZWwob3B0aW9uLCBwcm9wcy5sYWJlbEtleSkpO1xuICB9XG59O1xuXG52YXIgVHlwZWFoZWFkTWVudSA9IGZ1bmN0aW9uIFR5cGVhaGVhZE1lbnUocHJvcHMpIHtcbiAgdmFyIGxhYmVsS2V5ID0gcHJvcHMubGFiZWxLZXksXG4gICAgICBuZXdTZWxlY3Rpb25QcmVmaXggPSBwcm9wcy5uZXdTZWxlY3Rpb25QcmVmaXgsXG4gICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcbiAgICAgIHBhZ2luYXRpb25UZXh0ID0gcHJvcHMucGFnaW5hdGlvblRleHQsXG4gICAgICByZW5kZXJNZW51SXRlbUNoaWxkcmVuID0gcHJvcHMucmVuZGVyTWVudUl0ZW1DaGlsZHJlbixcbiAgICAgIHRleHQgPSBwcm9wcy50ZXh0LFxuICAgICAgbWVudVByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImxhYmVsS2V5XCIsIFwibmV3U2VsZWN0aW9uUHJlZml4XCIsIFwib3B0aW9uc1wiLCBcInBhZ2luYXRpb25UZXh0XCIsIFwicmVuZGVyTWVudUl0ZW1DaGlsZHJlblwiLCBcInRleHRcIl0pO1xuXG4gIHZhciByZW5kZXJNZW51SXRlbSA9IGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtKG9wdGlvbiwgcG9zaXRpb24pIHtcbiAgICB2YXIgbGFiZWwgPSBnZXRPcHRpb25MYWJlbChvcHRpb24sIGxhYmVsS2V5KTtcbiAgICB2YXIgbWVudUl0ZW1Qcm9wcyA9IHtcbiAgICAgIGRpc2FibGVkOiBnZXRPcHRpb25Qcm9wZXJ0eShvcHRpb24sICdkaXNhYmxlZCcpLFxuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbi5jdXN0b21PcHRpb24pIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgX2V4dGVuZHMoe30sIG1lbnVJdGVtUHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInJidC1tZW51LWN1c3RvbS1vcHRpb25cIixcbiAgICAgICAga2V5OiBwb3NpdGlvbixcbiAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICB9KSwgbmV3U2VsZWN0aW9uUHJlZml4LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIaWdobGlnaHRlciwge1xuICAgICAgICBzZWFyY2g6IHRleHRcbiAgICAgIH0sIGxhYmVsKSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbi5wYWdpbmF0aW9uT3B0aW9uKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHtcbiAgICAgICAga2V5OiBcInBhZ2luYXRpb24taXRlbVwiXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LkRpdmlkZXIsIG51bGwpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgX2V4dGVuZHMoe30sIG1lbnVJdGVtUHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInJidC1tZW51LXBhZ2luYXRpb24tb3B0aW9uXCIsXG4gICAgICAgIGxhYmVsOiBwYWdpbmF0aW9uVGV4dFxuICAgICAgfSksIHBhZ2luYXRpb25UZXh0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCBfZXh0ZW5kcyh7fSwgbWVudUl0ZW1Qcm9wcywge1xuICAgICAga2V5OiBwb3NpdGlvblxuICAgIH0pLCByZW5kZXJNZW51SXRlbUNoaWxkcmVuKG9wdGlvbiwgcHJvcHMsIHBvc2l0aW9uKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgLy8gRXhwbGljdGx5IHBhc3MgYHRleHRgIHNvIEZsb3cgZG9lc24ndCBjb21wbGFpbi4uLlxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwgX2V4dGVuZHMoe30sIG1lbnVQcm9wcywge1xuICAgICAgdGV4dDogdGV4dFxuICAgIH0pLCBvcHRpb25zLm1hcChyZW5kZXJNZW51SXRlbSkpXG4gICk7XG59O1xuXG5UeXBlYWhlYWRNZW51LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblR5cGVhaGVhZE1lbnUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuZXhwb3J0IGRlZmF1bHQgVHlwZWFoZWFkTWVudTsiLCIvKipcbiAqIENvbW1vbiAobm9uLXByaW50YWJsZSkga2V5Y29kZXMgZm9yIGBrZXlkb3duYCBhbmQgYGtleXVwYCBldmVudHMuIE5vdGUgdGhhdFxuICogYGtleXByZXNzYCBoYW5kbGVzIHRoaW5ncyBkaWZmZXJlbnRseSBhbmQgbWF5IG5vdCByZXR1cm4gdGhlIHNhbWUgdmFsdWVzLlxuICovXG5leHBvcnQgdmFyIEJBQ0tTUEFDRSA9IDg7XG5leHBvcnQgdmFyIFRBQiA9IDk7XG5leHBvcnQgdmFyIFJFVFVSTiA9IDEzO1xuZXhwb3J0IHZhciBFU0MgPSAyNztcbmV4cG9ydCB2YXIgU1BBQ0UgPSAzMjtcbmV4cG9ydCB2YXIgTEVGVCA9IDM3O1xuZXhwb3J0IHZhciBVUCA9IDM4O1xuZXhwb3J0IHZhciBSSUdIVCA9IDM5O1xuZXhwb3J0IHZhciBET1dOID0gNDA7XG5leHBvcnQgdmFyIERFRkFVTFRfTEFCRUxLRVkgPSAnbGFiZWwnO1xuZXhwb3J0IHZhciBBTElHTiA9IHtcbiAgSlVTVElGWTogJ2p1c3RpZnknLFxuICBMRUZUOiAnbGVmdCcsXG4gIFJJR0hUOiAncmlnaHQnXG59O1xuZXhwb3J0IHZhciBTSVpFID0ge1xuICBMQVJHRTogJ2xhcmdlJyxcbiAgTEc6ICdsZycsXG4gIFNNOiAnc20nLFxuICBTTUFMTDogJ3NtYWxsJ1xufTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uL3V0aWxzJztcbmV4cG9ydCB2YXIgVHlwZWFoZWFkQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KHtcbiAgYWN0aXZlSW5kZXg6IC0xLFxuICBoaW50VGV4dDogJycsXG4gIGlkOiAnJyxcbiAgaW5pdGlhbEl0ZW06IG51bGwsXG4gIGlucHV0Tm9kZTogbnVsbCxcbiAgaXNPbmx5UmVzdWx0OiBmYWxzZSxcbiAgb25BY3RpdmVJdGVtQ2hhbmdlOiBub29wLFxuICBvbkFkZDogbm9vcCxcbiAgb25Jbml0aWFsSXRlbUNoYW5nZTogbm9vcCxcbiAgb25NZW51SXRlbUNsaWNrOiBub29wLFxuICBzZWxlY3RIaW50T25FbnRlcjogdW5kZWZpbmVkLFxuICBzZXRJdGVtOiBub29wXG59KTtcbmV4cG9ydCB2YXIgdXNlVHlwZWFoZWFkQ29udGV4dCA9IGZ1bmN0aW9uIHVzZVR5cGVhaGVhZENvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFR5cGVhaGVhZENvbnRleHQpO1xufTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUeXBlYWhlYWRNYW5hZ2VyIGZyb20gJy4vVHlwZWFoZWFkTWFuYWdlcic7XG5pbXBvcnQgeyBjYXNlU2Vuc2l0aXZlVHlwZSwgY2hlY2tQcm9wVHlwZSwgZGVmYXVsdElucHV0VmFsdWVUeXBlLCBkZWZhdWx0U2VsZWN0ZWRUeXBlLCBkZXByZWNhdGVkLCBoaWdobGlnaHRPbmx5UmVzdWx0VHlwZSwgaWdub3JlRGlhY3JpdGljc1R5cGUsIGlzUmVxdWlyZWRGb3JBMTF5LCBsYWJlbEtleVR5cGUsIG9wdGlvblR5cGUsIHNlbGVjdGVkVHlwZSB9IGZyb20gJy4uL3Byb3BUeXBlcyc7XG5pbXBvcnQgeyBhZGRDdXN0b21PcHRpb24sIGRlZmF1bHRGaWx0ZXJCeSwgZ2V0T3B0aW9uTGFiZWwsIGdldFN0cmluZ0xhYmVsS2V5LCBnZXRVcGRhdGVkQWN0aXZlSW5kZXgsIGdldFRydW5jYXRlZE9wdGlvbnMsIGhlYWQsIGlzU2hvd24sIGlzU3RyaW5nLCBub29wLCB1bmlxdWVJZCwgdmFsaWRhdGVTZWxlY3RlZFByb3BDaGFuZ2UgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBERUZBVUxUX0xBQkVMS0VZLCBET1dOLCBFU0MsIFJFVFVSTiwgVEFCLCBVUCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBuZXcgc2VsZWN0aW9ucyBvbiB0aGUgZmx5LiBOb3RlIHRoYXQgYW55IG5ldyBpdGVtc1xuICAgKiB3aWxsIGJlIGFkZGVkIHRvIHRoZSBsaXN0IG9mIHNlbGVjdGlvbnMsIGJ1dCBub3QgdGhlIGxpc3Qgb2Ygb3JpZ2luYWxcbiAgICogb3B0aW9ucyB1bmxlc3MgaGFuZGxlZCBhcyBzdWNoIGJ5IGBUeXBlYWhlYWRgJ3MgcGFyZW50LlxuICAgKlxuICAgKiBJZiBhIGZ1bmN0aW9uIGlzIHNwZWNpZmllZCwgaXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGEgY3VzdG9tXG4gICAqIG9wdGlvbiBzaG91bGQgYmUgaW5jbHVkZWQuIFRoZSByZXR1cm4gdmFsdWUgc2hvdWxkIGJlIHRydWUgb3IgZmFsc2UuXG4gICAqL1xuICBhbGxvd05ldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIEF1dG9mb2N1cyB0aGUgaW5wdXQgd2hlbiB0aGUgY29tcG9uZW50IGluaXRpYWxseSBtb3VudHMuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBmaWx0ZXJpbmcgc2hvdWxkIGJlIGNhc2Utc2Vuc2l0aXZlLlxuICAgKi9cbiAgY2FzZVNlbnNpdGl2ZTogY2hlY2tQcm9wVHlwZShQcm9wVHlwZXMuYm9vbCwgY2FzZVNlbnNpdGl2ZVR5cGUpLFxuXG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIHRleHQgaW5wdXQuXG4gICAqL1xuICBkZWZhdWx0SW5wdXRWYWx1ZTogY2hlY2tQcm9wVHlwZShQcm9wVHlwZXMuc3RyaW5nLCBkZWZhdWx0SW5wdXRWYWx1ZVR5cGUpLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgbWVudSBpcyBkaXNwbGF5ZWQgdXBvbiBpbml0aWFsIHJlbmRlci5cbiAgICovXG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogU3BlY2lmeSBhbnkgcHJlLXNlbGVjdGVkIG9wdGlvbnMuIFVzZSBvbmx5IGlmIHlvdSB3YW50IHRoZSBjb21wb25lbnQgdG9cbiAgICogYmUgdW5jb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFNlbGVjdGVkOiBjaGVja1Byb3BUeXBlKFByb3BUeXBlcy5hcnJheU9mKG9wdGlvblR5cGUpLCBkZWZhdWx0U2VsZWN0ZWRUeXBlKSxcblxuICAvKipcbiAgICogRWl0aGVyIGFuIGFycmF5IG9mIGZpZWxkcyBpbiBgb3B0aW9uYCB0byBzZWFyY2gsIG9yIGEgY3VzdG9tIGZpbHRlcmluZ1xuICAgKiBjYWxsYmFjay5cbiAgICovXG4gIGZpbHRlckJ5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQpLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gIC8qKlxuICAgKiBIaWdobGlnaHRzIHRoZSBtZW51IGl0ZW0gaWYgdGhlcmUgaXMgb25seSBvbmUgcmVzdWx0IGFuZCBhbGxvd3Mgc2VsZWN0aW5nXG4gICAqIHRoYXQgaXRlbSBieSBoaXR0aW5nIGVudGVyLiBEb2VzIG5vdCB3b3JrIHdpdGggYGFsbG93TmV3YC5cbiAgICovXG4gIGhpZ2hsaWdodE9ubHlSZXN1bHQ6IGNoZWNrUHJvcFR5cGUoUHJvcFR5cGVzLmJvb2wsIGhpZ2hsaWdodE9ubHlSZXN1bHRUeXBlKSxcblxuICAvKipcbiAgICogQW4gaHRtbCBpZCBhdHRyaWJ1dGUsIHJlcXVpcmVkIGZvciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIHN1Y2ggYXMgc2NyZWVuXG4gICAqIHJlYWRlcnMuXG4gICAqL1xuICBpZDogY2hlY2tQcm9wVHlwZShQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksIGlzUmVxdWlyZWRGb3JBMTF5KSxcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgZmlsdGVyIHNob3VsZCBpZ25vcmUgYWNjZW50cyBhbmQgb3RoZXIgZGlhY3JpdGljYWwgbWFya3MuXG4gICAqL1xuICBpZ25vcmVEaWFjcml0aWNzOiBjaGVja1Byb3BUeXBlKFByb3BUeXBlcy5ib29sLCBpZ25vcmVEaWFjcml0aWNzVHlwZSksXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgdGhlIG9wdGlvbiBrZXkgdG8gdXNlIGZvciBkaXNwbGF5IG9yIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZVxuICAgKiBkaXNwbGF5IHN0cmluZy4gQnkgZGVmYXVsdCwgdGhlIHNlbGVjdG9yIHdpbGwgdXNlIHRoZSBgbGFiZWxgIGtleS5cbiAgICovXG4gIGxhYmVsS2V5OiBjaGVja1Byb3BUeXBlKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksIGxhYmVsS2V5VHlwZSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJlc3VsdHMgdG8gZGlzcGxheSBieSBkZWZhdWx0LiBNb3N0bHkgZG9uZSBmb3JcbiAgICogcGVyZm9ybWFuY2UgcmVhc29ucyBzbyBhcyBub3QgdG8gcmVuZGVyIHRvbyBtYW55IERPTSBub2RlcyBpbiB0aGUgY2FzZSBvZlxuICAgKiBsYXJnZSBkYXRhIHNldHMuXG4gICAqL1xuICBtYXhSZXN1bHRzOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgaW5wdXQgY2hhcmFjdGVycyB0aGF0IG11c3QgYmUgZW50ZXJlZCBiZWZvcmUgc2hvd2luZyByZXN1bHRzLlxuICAgKi9cbiAgbWluTGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCBtdWx0aXBsZSBzZWxlY3Rpb25zIGFyZSBhbGxvd2VkLlxuICAgKi9cbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGlucHV0IGlzIGJsdXJyZWQuIFJlY2VpdmVzIGFuIGV2ZW50LlxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuZXZlciBpdGVtcyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC4gUmVjZWl2ZXMgYW4gYXJyYXkgb2YgdGhlXG4gICAqIHNlbGVjdGVkIG9wdGlvbnMuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgaW5wdXQgaXMgZm9jdXNlZC4gUmVjZWl2ZXMgYW4gZXZlbnQuXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2VzLiBSZWNlaXZlcyB0aGUgc3RyaW5nIHZhbHVlIG9mIHRoZVxuICAgKiBpbnB1dC5cbiAgICovXG4gIG9uSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gYSBrZXkgaXMgcHJlc3NlZC4gUmVjZWl2ZXMgYW4gZXZlbnQuXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gbWVudSB2aXNpYmlsaXR5IGNoYW5nZXMuXG4gICAqL1xuICBvbk1lbnVUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIHBhZ2luYXRpb24gbWVudSBpdGVtIGlzIGNsaWNrZWQuIFJlY2VpdmVzIGFuIGV2ZW50LlxuICAgKi9cbiAgb25QYWdpbmF0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBtZW51IHNob3VsZCBiZSBkaXNwbGF5ZWQuIGB1bmRlZmluZWRgIGFsbG93cyB0aGVcbiAgICogY29tcG9uZW50IHRvIGNvbnRyb2wgdmlzaWJpbGl0eSwgd2hpbGUgYHRydWVgIGFuZCBgZmFsc2VgIHNob3cgYW5kIGhpZGVcbiAgICogdGhlIG1lbnUsIHJlc3BlY3RpdmVseS5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBGdWxsIHNldCBvZiBvcHRpb25zLCBpbmNsdWRpbmcgcHJlLXNlbGVjdGVkIG9wdGlvbnMuIE11c3QgZWl0aGVyIGJlIGFuXG4gICAqIGFycmF5IG9mIG9iamVjdHMgKHJlY29tbWVuZGVkKSBvciBzdHJpbmdzLlxuICAgKi9cbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2Yob3B0aW9uVHlwZSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogR2l2ZSB1c2VyIHRoZSBhYmlsaXR5IHRvIGRpc3BsYXkgYWRkaXRpb25hbCByZXN1bHRzIGlmIHRoZSBudW1iZXIgb2ZcbiAgICogcmVzdWx0cyBleGNlZWRzIGBtYXhSZXN1bHRzYC5cbiAgICovXG4gIHBhZ2luYXRlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHNlbGVjdGVkIG9wdGlvbihzKSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0LiBVc2UgdGhpcyBwcm9wIGlmIHlvdSB3YW50XG4gICAqIHRvIGNvbnRyb2wgdGhlIGNvbXBvbmVudCB2aWEgaXRzIHBhcmVudC5cbiAgICovXG4gIHNlbGVjdGVkOiBjaGVja1Byb3BUeXBlKFByb3BUeXBlcy5hcnJheU9mKG9wdGlvblR5cGUpLCBzZWxlY3RlZFR5cGUpLFxuXG4gIC8qKlxuICAgKiBBbGxvd3Mgc2VsZWN0aW5nIHRoZSBoaW50ZWQgcmVzdWx0IGJ5IHByZXNzaW5nIGVudGVyLlxuICAgKi9cbiAgc2VsZWN0SGludE9uRW50ZXI6IGRlcHJlY2F0ZWQoUHJvcFR5cGVzLmJvb2wsICdVc2UgdGhlIGBzaG91bGRTZWxlY3RgIHByb3Agb24gdGhlIGBIaW50YCBjb21wb25lbnQgdG8gZGVmaW5lIHdoaWNoICcgKyAna2V5c3Ryb2tlcyBjYW4gc2VsZWN0IHRoZSBoaW50LicpXG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgYWxsb3dOZXc6IGZhbHNlLFxuICBhdXRvRm9jdXM6IGZhbHNlLFxuICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVmYXVsdElucHV0VmFsdWU6ICcnLFxuICBkZWZhdWx0T3BlbjogZmFsc2UsXG4gIGRlZmF1bHRTZWxlY3RlZDogW10sXG4gIGZpbHRlckJ5OiBbXSxcbiAgaGlnaGxpZ2h0T25seVJlc3VsdDogZmFsc2UsXG4gIGlnbm9yZURpYWNyaXRpY3M6IHRydWUsXG4gIGxhYmVsS2V5OiBERUZBVUxUX0xBQkVMS0VZLFxuICBtYXhSZXN1bHRzOiAxMDAsXG4gIG1pbkxlbmd0aDogMCxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBvbkJsdXI6IG5vb3AsXG4gIG9uRm9jdXM6IG5vb3AsXG4gIG9uSW5wdXRDaGFuZ2U6IG5vb3AsXG4gIG9uS2V5RG93bjogbm9vcCxcbiAgb25NZW51VG9nZ2xlOiBub29wLFxuICBvblBhZ2luYXRlOiBub29wLFxuICBwYWdpbmF0ZTogdHJ1ZVxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUocHJvcHMpIHtcbiAgdmFyIGRlZmF1bHRJbnB1dFZhbHVlID0gcHJvcHMuZGVmYXVsdElucHV0VmFsdWUsXG4gICAgICBkZWZhdWx0T3BlbiA9IHByb3BzLmRlZmF1bHRPcGVuLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkID0gcHJvcHMuZGVmYXVsdFNlbGVjdGVkLFxuICAgICAgbWF4UmVzdWx0cyA9IHByb3BzLm1heFJlc3VsdHMsXG4gICAgICBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlO1xuICB2YXIgc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnNlbGVjdGVkLnNsaWNlKCkgOiBkZWZhdWx0U2VsZWN0ZWQuc2xpY2UoKTtcbiAgdmFyIHRleHQgPSBkZWZhdWx0SW5wdXRWYWx1ZTtcblxuICBpZiAoIW11bHRpcGxlICYmIHNlbGVjdGVkLmxlbmd0aCkge1xuICAgIC8vIFNldCB0aGUgdGV4dCBpZiBhbiBpbml0aWFsIHNlbGVjdGlvbiBpcyBwYXNzZWQgaW4uXG4gICAgdGV4dCA9IGdldE9wdGlvbkxhYmVsKGhlYWQoc2VsZWN0ZWQpLCBwcm9wcy5sYWJlbEtleSk7XG5cbiAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMSkge1xuICAgICAgLy8gTGltaXQgdG8gMSBzZWxlY3Rpb24gaW4gc2luZ2xlLXNlbGVjdCBtb2RlLlxuICAgICAgc2VsZWN0ZWQgPSBzZWxlY3RlZC5zbGljZSgwLCAxKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFjdGl2ZUluZGV4OiAtMSxcbiAgICBhY3RpdmVJdGVtOiBudWxsLFxuICAgIGluaXRpYWxJdGVtOiBudWxsLFxuICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgc2VsZWN0ZWQ6IHNlbGVjdGVkLFxuICAgIHNob3dNZW51OiBkZWZhdWx0T3BlbixcbiAgICBzaG93blJlc3VsdHM6IG1heFJlc3VsdHMsXG4gICAgdGV4dDogdGV4dFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVHlwZWFoZWFkKHN0YXRlLCBwcm9wcykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGdldEluaXRpYWxTdGF0ZShwcm9wcyksIHtcbiAgICBpc0ZvY3VzZWQ6IHN0YXRlLmlzRm9jdXNlZCxcbiAgICBzZWxlY3RlZDogW10sXG4gICAgdGV4dDogJydcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZU1lbnUoc3RhdGUsIHByb3BzKSB7XG4gIHZhciBfZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKHByb3BzKSxcbiAgICAgIGFjdGl2ZUluZGV4ID0gX2dldEluaXRpYWxTdGF0ZS5hY3RpdmVJbmRleCxcbiAgICAgIGFjdGl2ZUl0ZW0gPSBfZ2V0SW5pdGlhbFN0YXRlLmFjdGl2ZUl0ZW0sXG4gICAgICBpbml0aWFsSXRlbSA9IF9nZXRJbml0aWFsU3RhdGUuaW5pdGlhbEl0ZW0sXG4gICAgICBzaG93blJlc3VsdHMgPSBfZ2V0SW5pdGlhbFN0YXRlLnNob3duUmVzdWx0cztcblxuICByZXR1cm4ge1xuICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleCxcbiAgICBhY3RpdmVJdGVtOiBhY3RpdmVJdGVtLFxuICAgIGluaXRpYWxJdGVtOiBpbml0aWFsSXRlbSxcbiAgICBzaG93TWVudTogZmFsc2UsXG4gICAgc2hvd25SZXN1bHRzOiBzaG93blJlc3VsdHNcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVNZW51KHN0YXRlLCBwcm9wcykge1xuICByZXR1cm4gc3RhdGUuc2hvd01lbnUgPyBoaWRlTWVudShzdGF0ZSwgcHJvcHMpIDoge1xuICAgIHNob3dNZW51OiB0cnVlXG4gIH07XG59XG5cbnZhciBUeXBlYWhlYWQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHlwZWFoZWFkLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUeXBlYWhlYWQoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwgZ2V0SW5pdGlhbFN0YXRlKF90aGlzLnByb3BzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5wdXROb2RlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaXNNZW51U2hvd25cIiwgZmFsc2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIml0ZW1zXCIsIFtdKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmlucHV0Tm9kZSAmJiBfdGhpcy5pbnB1dE5vZGUuYmx1cigpO1xuXG4gICAgICBfdGhpcy5oaWRlTWVudSgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsZWFyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKGNsZWFyVHlwZWFoZWFkKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5pbnB1dE5vZGUgJiYgX3RoaXMuaW5wdXROb2RlLmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0SW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmlucHV0Tm9kZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbnB1dFJlZlwiLCBmdW5jdGlvbiAoaW5wdXROb2RlKSB7XG4gICAgICBfdGhpcy5pbnB1dE5vZGUgPSBpbnB1dE5vZGU7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0SXRlbVwiLCBmdW5jdGlvbiAoaXRlbSwgcG9zaXRpb24pIHtcbiAgICAgIF90aGlzLml0ZW1zW3Bvc2l0aW9uXSA9IGl0ZW07XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGlkZU1lbnVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoaGlkZU1lbnUpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInRvZ2dsZU1lbnVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUodG9nZ2xlTWVudSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2hhbmRsZUFjdGl2ZUluZGV4Q2hhbmdlXCIsIGZ1bmN0aW9uIChhY3RpdmVJbmRleCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgICAgICAgIGFjdGl2ZUl0ZW06IGFjdGl2ZUluZGV4ID09PSAtMSA/IG51bGwgOiBzdGF0ZS5hY3RpdmVJdGVtXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaGFuZGxlQWN0aXZlSXRlbUNoYW5nZVwiLCBmdW5jdGlvbiAoYWN0aXZlSXRlbSkge1xuICAgICAgLy8gRG9uJ3QgdXBkYXRlIHRoZSBhY3RpdmUgaXRlbSBpZiBpdCBoYXNuJ3QgY2hhbmdlZC5cbiAgICAgIGlmICghaXNFcXVhbChhY3RpdmVJdGVtLCBfdGhpcy5zdGF0ZS5hY3RpdmVJdGVtKSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlSXRlbTogYWN0aXZlSXRlbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaGFuZGxlQmx1clwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wZXJzaXN0KCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMub25CbHVyKGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2hhbmRsZUNoYW5nZVwiLCBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlICYmIF90aGlzLnByb3BzLm9uQ2hhbmdlKHNlbGVjdGVkKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaGFuZGxlQ2xlYXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoY2xlYXJUeXBlYWhlYWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9oYW5kbGVDaGFuZ2UoW10pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2hhbmRsZUZvY3VzXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnBlcnNpc3QoKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc0ZvY3VzZWQ6IHRydWUsXG4gICAgICAgIHNob3dNZW51OiB0cnVlXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2hhbmRsZUluaXRpYWxJdGVtQ2hhbmdlXCIsIGZ1bmN0aW9uIChpbml0aWFsSXRlbSkge1xuICAgICAgLy8gRG9uJ3QgdXBkYXRlIHRoZSBpbml0aWFsIGl0ZW0gaWYgaXQgaGFzbid0IGNoYW5nZWQuXG4gICAgICBpZiAoIWlzRXF1YWwoaW5pdGlhbEl0ZW0sIF90aGlzLnN0YXRlLmluaXRpYWxJdGVtKSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5pdGlhbEl0ZW06IGluaXRpYWxJdGVtXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVJbnB1dENoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICB2YXIgdGV4dCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMubXVsdGlwbGUsXG4gICAgICAgICAgb25JbnB1dENoYW5nZSA9IF90aGlzJHByb3BzLm9uSW5wdXRDaGFuZ2U7IC8vIENsZWFyIHNlbGVjdGlvbnMgd2hlbiB0aGUgaW5wdXQgdmFsdWUgY2hhbmdlcyBpbiBzaW5nbGUtc2VsZWN0IG1vZGUuXG5cbiAgICAgIHZhciBzaG91bGRDbGVhclNlbGVjdGlvbnMgPSBfdGhpcy5zdGF0ZS5zZWxlY3RlZC5sZW5ndGggJiYgIW11bHRpcGxlO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIHZhciBfZ2V0SW5pdGlhbFN0YXRlMiA9IGdldEluaXRpYWxTdGF0ZShwcm9wcyksXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IF9nZXRJbml0aWFsU3RhdGUyLmFjdGl2ZUluZGV4LFxuICAgICAgICAgICAgYWN0aXZlSXRlbSA9IF9nZXRJbml0aWFsU3RhdGUyLmFjdGl2ZUl0ZW0sXG4gICAgICAgICAgICBzaG93blJlc3VsdHMgPSBfZ2V0SW5pdGlhbFN0YXRlMi5zaG93blJlc3VsdHM7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhY3RpdmVJbmRleDogYWN0aXZlSW5kZXgsXG4gICAgICAgICAgYWN0aXZlSXRlbTogYWN0aXZlSXRlbSxcbiAgICAgICAgICBzZWxlY3RlZDogc2hvdWxkQ2xlYXJTZWxlY3Rpb25zID8gW10gOiBzdGF0ZS5zZWxlY3RlZCxcbiAgICAgICAgICBzaG93TWVudTogdHJ1ZSxcbiAgICAgICAgICBzaG93blJlc3VsdHM6IHNob3duUmVzdWx0cyxcbiAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgIH07XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uSW5wdXRDaGFuZ2UodGV4dCwgZSk7XG4gICAgICAgIHNob3VsZENsZWFyU2VsZWN0aW9ucyAmJiBfdGhpcy5faGFuZGxlQ2hhbmdlKFtdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVLZXlEb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgYWN0aXZlSXRlbSA9IF90aGlzLnN0YXRlLmFjdGl2ZUl0ZW07IC8vIFNraXAgbW9zdCBhY3Rpb25zIHdoZW4gdGhlIG1lbnUgaXMgaGlkZGVuLlxuXG4gICAgICBpZiAoIV90aGlzLmlzTWVudVNob3duKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IFVQIHx8IGUua2V5Q29kZSA9PT0gRE9XTikge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dNZW51OiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIFVQOlxuICAgICAgICBjYXNlIERPV046XG4gICAgICAgICAgLy8gUHJldmVudCBpbnB1dCBjdXJzb3IgZnJvbSBnb2luZyB0byB0aGUgYmVnaW5uaW5nIHdoZW4gcHJlc3NpbmcgdXAuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgX3RoaXMuX2hhbmRsZUFjdGl2ZUluZGV4Q2hhbmdlKGdldFVwZGF0ZWRBY3RpdmVJbmRleChfdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCwgZS5rZXlDb2RlLCBfdGhpcy5pdGVtcykpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBSRVRVUk46XG4gICAgICAgICAgLy8gUHJldmVudCBmb3JtIHN1Ym1pc3Npb24gd2hpbGUgbWVudSBpcyBvcGVuLlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBhY3RpdmVJdGVtICYmIF90aGlzLl9oYW5kbGVNZW51SXRlbVNlbGVjdChhY3RpdmVJdGVtLCBlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIEVTQzpcbiAgICAgICAgY2FzZSBUQUI6XG4gICAgICAgICAgLy8gRVNDIHNpbXBseSBoaWRlcyB0aGUgbWVudS4gVEFCIHdpbGwgYmx1ciB0aGUgaW5wdXQgYW5kIG1vdmUgZm9jdXMgdG9cbiAgICAgICAgICAvLyB0aGUgbmV4dCBpdGVtOyBoaWRlIHRoZSBtZW51IHNvIGl0IGRvZXNuJ3QgZ2FpbiBmb2N1cy5cbiAgICAgICAgICBfdGhpcy5oaWRlTWVudSgpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVNZW51SXRlbVNlbGVjdFwiLCBmdW5jdGlvbiAob3B0aW9uLCBlKSB7XG4gICAgICBpZiAob3B0aW9uLnBhZ2luYXRpb25PcHRpb24pIHtcbiAgICAgICAgX3RoaXMuX2hhbmRsZVBhZ2luYXRlKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX2hhbmRsZVNlbGVjdGlvbkFkZChvcHRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVQYWdpbmF0ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wZXJzaXN0KCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzaG93blJlc3VsdHM6IHN0YXRlLnNob3duUmVzdWx0cyArIHByb3BzLm1heFJlc3VsdHNcbiAgICAgICAgfTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uUGFnaW5hdGUoZSwgX3RoaXMuc3RhdGUuc2hvd25SZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVTZWxlY3Rpb25BZGRcIiwgZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMyLm11bHRpcGxlLFxuICAgICAgICAgIGxhYmVsS2V5ID0gX3RoaXMkcHJvcHMyLmxhYmVsS2V5O1xuICAgICAgdmFyIHNlbGVjdGVkO1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IG9wdGlvbjtcbiAgICAgIHZhciB0ZXh0OyAvLyBBZGQgYSB1bmlxdWUgaWQgdG8gdGhlIGN1c3RvbSBzZWxlY3Rpb24uIEF2b2lkIGRvaW5nIHRoaXMgaW4gYHJlbmRlcmAgc29cbiAgICAgIC8vIHRoZSBpZCBkb2Vzbid0IGluY3JlbWVudCBldmVyeSB0aW1lLlxuXG4gICAgICBpZiAoIWlzU3RyaW5nKHNlbGVjdGlvbikgJiYgc2VsZWN0aW9uLmN1c3RvbU9wdGlvbikge1xuICAgICAgICBzZWxlY3Rpb24gPSBfZXh0ZW5kcyh7fSwgc2VsZWN0aW9uLCB7XG4gICAgICAgICAgaWQ6IHVuaXF1ZUlkKCduZXctaWQtJylcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAvLyBJZiBtdWx0aXBsZSBzZWxlY3Rpb25zIGFyZSBhbGxvd2VkLCBhZGQgdGhlIG5ldyBzZWxlY3Rpb24gdG8gdGhlXG4gICAgICAgIC8vIGV4aXN0aW5nIHNlbGVjdGlvbnMuXG4gICAgICAgIHNlbGVjdGVkID0gX3RoaXMuc3RhdGUuc2VsZWN0ZWQuY29uY2F0KHNlbGVjdGlvbik7XG4gICAgICAgIHRleHQgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIG9ubHkgYSBzaW5nbGUgc2VsZWN0aW9uIGlzIGFsbG93ZWQsIHJlcGxhY2UgdGhlIGV4aXN0aW5nIHNlbGVjdGlvblxuICAgICAgICAvLyB3aXRoIHRoZSBuZXcgb25lLlxuICAgICAgICBzZWxlY3RlZCA9IFtzZWxlY3Rpb25dO1xuICAgICAgICB0ZXh0ID0gZ2V0T3B0aW9uTGFiZWwoc2VsZWN0aW9uLCBsYWJlbEtleSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaWRlTWVudShzdGF0ZSwgcHJvcHMpLCB7XG4gICAgICAgICAgaW5pdGlhbEl0ZW06IHNlbGVjdGlvbixcbiAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICB9KTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9oYW5kbGVDaGFuZ2Uoc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2hhbmRsZVNlbGVjdGlvblJlbW92ZVwiLCBmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICB2YXIgc2VsZWN0ZWQgPSBfdGhpcy5zdGF0ZS5zZWxlY3RlZC5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gIWlzRXF1YWwob3B0aW9uLCBzZWxlY3Rpb24pO1xuICAgICAgfSk7IC8vIE1ha2Ugc3VyZSB0aGUgaW5wdXQgc3RheXMgZm9jdXNlZCBhZnRlciB0aGUgaXRlbSBpcyByZW1vdmVkLlxuXG5cbiAgICAgIF90aGlzLmZvY3VzKCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaWRlTWVudShzdGF0ZSwgcHJvcHMpLCB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkXG4gICAgICAgIH0pO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX2hhbmRsZUNoYW5nZShzZWxlY3RlZCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUeXBlYWhlYWQucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuYXV0b0ZvY3VzICYmIHRoaXMuZm9jdXMoKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGxhYmVsS2V5ID0gX3RoaXMkcHJvcHMzLmxhYmVsS2V5LFxuICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMy5tdWx0aXBsZSxcbiAgICAgICAgc2VsZWN0ZWQgPSBfdGhpcyRwcm9wczMuc2VsZWN0ZWQ7XG4gICAgdmFsaWRhdGVTZWxlY3RlZFByb3BDaGFuZ2Uoc2VsZWN0ZWQsIHByZXZQcm9wcy5zZWxlY3RlZCk7IC8vIFN5bmMgc2VsZWN0aW9ucyBpbiBzdGF0ZSB3aXRoIHRob3NlIGluIHByb3BzLlxuXG4gICAgaWYgKHNlbGVjdGVkICYmICFpc0VxdWFsKHNlbGVjdGVkLCBwcmV2U3RhdGUuc2VsZWN0ZWQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0ZXh0OiBzZWxlY3RlZC5sZW5ndGggPyBnZXRPcHRpb25MYWJlbChoZWFkKHNlbGVjdGVkKSwgbGFiZWxLZXkpIDogJydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gT21pdCBgb25DaGFuZ2VgIHNvIEZsb3cgZG9lc24ndCBjb21wbGFpbi5cbiAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wczQub25DaGFuZ2UsXG4gICAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wczQsIFtcIm9uQ2hhbmdlXCJdKTtcblxuICAgIHZhciBtZXJnZWRQcm9wc0FuZFN0YXRlID0gX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHRoaXMuc3RhdGUpO1xuXG4gICAgdmFyIGZpbHRlckJ5ID0gbWVyZ2VkUHJvcHNBbmRTdGF0ZS5maWx0ZXJCeSxcbiAgICAgICAgbGFiZWxLZXkgPSBtZXJnZWRQcm9wc0FuZFN0YXRlLmxhYmVsS2V5LFxuICAgICAgICBvcHRpb25zID0gbWVyZ2VkUHJvcHNBbmRTdGF0ZS5vcHRpb25zLFxuICAgICAgICBwYWdpbmF0ZSA9IG1lcmdlZFByb3BzQW5kU3RhdGUucGFnaW5hdGUsXG4gICAgICAgIHNob3duUmVzdWx0cyA9IG1lcmdlZFByb3BzQW5kU3RhdGUuc2hvd25SZXN1bHRzLFxuICAgICAgICB0ZXh0ID0gbWVyZ2VkUHJvcHNBbmRTdGF0ZS50ZXh0O1xuICAgIHRoaXMuaXNNZW51U2hvd24gPSBpc1Nob3duKG1lcmdlZFByb3BzQW5kU3RhdGUpO1xuICAgIHRoaXMuaXRlbXMgPSBbXTsgLy8gUmVzZXQgaXRlbXMgb24gcmUtcmVuZGVyLlxuXG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcblxuICAgIGlmICh0aGlzLmlzTWVudVNob3duKSB7XG4gICAgICB2YXIgY2IgPSB0eXBlb2YgZmlsdGVyQnkgPT09ICdmdW5jdGlvbicgPyBmaWx0ZXJCeSA6IGRlZmF1bHRGaWx0ZXJCeTtcbiAgICAgIHJlc3VsdHMgPSBvcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBjYihvcHRpb24sIG1lcmdlZFByb3BzQW5kU3RhdGUpO1xuICAgICAgfSk7IC8vIFRoaXMgbXVzdCBjb21lIGJlZm9yZSByZXN1bHRzIGFyZSB0cnVuY2F0ZWQuXG5cbiAgICAgIHZhciBzaG91bGRQYWdpbmF0ZSA9IHBhZ2luYXRlICYmIHJlc3VsdHMubGVuZ3RoID4gc2hvd25SZXN1bHRzOyAvLyBUcnVuY2F0ZSByZXN1bHRzIGlmIG5lY2Vzc2FyeS5cblxuICAgICAgcmVzdWx0cyA9IGdldFRydW5jYXRlZE9wdGlvbnMocmVzdWx0cywgc2hvd25SZXN1bHRzKTsgLy8gQWRkIHRoZSBjdXN0b20gb3B0aW9uIGlmIG5lY2Vzc2FyeS5cblxuICAgICAgaWYgKGFkZEN1c3RvbU9wdGlvbihyZXN1bHRzLCBtZXJnZWRQcm9wc0FuZFN0YXRlKSkge1xuICAgICAgICB2YXIgX3Jlc3VsdHMkcHVzaDtcblxuICAgICAgICByZXN1bHRzLnB1c2goKF9yZXN1bHRzJHB1c2ggPSB7XG4gICAgICAgICAgY3VzdG9tT3B0aW9uOiB0cnVlXG4gICAgICAgIH0sIF9yZXN1bHRzJHB1c2hbZ2V0U3RyaW5nTGFiZWxLZXkobGFiZWxLZXkpXSA9IHRleHQsIF9yZXN1bHRzJHB1c2gpKTtcbiAgICAgIH0gLy8gQWRkIHRoZSBwYWdpbmF0aW9uIGl0ZW0gaWYgbmVjZXNzYXJ5LlxuXG5cbiAgICAgIGlmIChzaG91bGRQYWdpbmF0ZSkge1xuICAgICAgICB2YXIgX3Jlc3VsdHMkcHVzaDI7XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKChfcmVzdWx0cyRwdXNoMiA9IHt9LCBfcmVzdWx0cyRwdXNoMltnZXRTdHJpbmdMYWJlbEtleShsYWJlbEtleSldID0gJycsIF9yZXN1bHRzJHB1c2gyLnBhZ2luYXRpb25PcHRpb24gPSB0cnVlLCBfcmVzdWx0cyRwdXNoMikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUeXBlYWhlYWRNYW5hZ2VyLCBfZXh0ZW5kcyh7fSwgbWVyZ2VkUHJvcHNBbmRTdGF0ZSwge1xuICAgICAgaGlkZU1lbnU6IHRoaXMuaGlkZU1lbnUsXG4gICAgICBpbnB1dE5vZGU6IHRoaXMuaW5wdXROb2RlLFxuICAgICAgaW5wdXRSZWY6IHRoaXMuaW5wdXRSZWYsXG4gICAgICBpc01lbnVTaG93bjogdGhpcy5pc01lbnVTaG93bixcbiAgICAgIG9uQWN0aXZlSXRlbUNoYW5nZTogdGhpcy5faGFuZGxlQWN0aXZlSXRlbUNoYW5nZSxcbiAgICAgIG9uQWRkOiB0aGlzLl9oYW5kbGVTZWxlY3Rpb25BZGQsXG4gICAgICBvbkJsdXI6IHRoaXMuX2hhbmRsZUJsdXIsXG4gICAgICBvbkNoYW5nZTogdGhpcy5faGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICBvbkNsZWFyOiB0aGlzLl9oYW5kbGVDbGVhcixcbiAgICAgIG9uRm9jdXM6IHRoaXMuX2hhbmRsZUZvY3VzLFxuICAgICAgb25IaWRlOiB0aGlzLmhpZGVNZW51LFxuICAgICAgb25Jbml0aWFsSXRlbUNoYW5nZTogdGhpcy5faGFuZGxlSW5pdGlhbEl0ZW1DaGFuZ2UsXG4gICAgICBvbktleURvd246IHRoaXMuX2hhbmRsZUtleURvd24sXG4gICAgICBvbk1lbnVJdGVtQ2xpY2s6IHRoaXMuX2hhbmRsZU1lbnVJdGVtU2VsZWN0LFxuICAgICAgb25SZW1vdmU6IHRoaXMuX2hhbmRsZVNlbGVjdGlvblJlbW92ZSxcbiAgICAgIHJlc3VsdHM6IHJlc3VsdHMsXG4gICAgICBzZXRJdGVtOiB0aGlzLnNldEl0ZW0sXG4gICAgICB0b2dnbGVNZW51OiB0aGlzLnRvZ2dsZU1lbnVcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFR5cGVhaGVhZDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFR5cGVhaGVhZCwgXCJwcm9wVHlwZXNcIiwgcHJvcFR5cGVzKTtcblxuX2RlZmluZVByb3BlcnR5KFR5cGVhaGVhZCwgXCJkZWZhdWx0UHJvcHNcIiwgZGVmYXVsdFByb3BzKTtcblxuZXhwb3J0IGRlZmF1bHQgVHlwZWFoZWFkOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVByZXZpb3VzJztcbmltcG9ydCB7IFR5cGVhaGVhZENvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnO1xuaW1wb3J0IHsgZ2V0SGludFRleHQsIGdldElucHV0UHJvcHMsIGdldElucHV0VGV4dCwgZ2V0SXNPbmx5UmVzdWx0LCBwaWNrIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgUkVUVVJOIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbnZhciBpbnB1dFByb3BLZXlzID0gWydhY3RpdmVJbmRleCcsICdkaXNhYmxlZCcsICdpZCcsICdpbnB1dFJlZicsICdpc0ZvY3VzZWQnLCAnaXNNZW51U2hvd24nLCAnbXVsdGlwbGUnLCAnb25CbHVyJywgJ29uQ2hhbmdlJywgJ29uRm9jdXMnLCAnb25LZXlEb3duJywgJ3BsYWNlaG9sZGVyJ107XG52YXIgcHJvcEtleXMgPSBbJ2FjdGl2ZUluZGV4JywgJ2hpZGVNZW51JywgJ2lzTWVudVNob3duJywgJ2xhYmVsS2V5JywgJ29uQ2xlYXInLCAnb25IaWRlJywgJ29uUmVtb3ZlJywgJ3Jlc3VsdHMnLCAnc2VsZWN0ZWQnLCAndGV4dCcsICd0b2dnbGVNZW51J107XG52YXIgY29udGV4dEtleXMgPSBbJ2FjdGl2ZUluZGV4JywgJ2lkJywgJ2luaXRpYWxJdGVtJywgJ2lucHV0Tm9kZScsICdvbkFjdGl2ZUl0ZW1DaGFuZ2UnLCAnb25BZGQnLCAnb25Jbml0aWFsSXRlbUNoYW5nZScsICdvbk1lbnVJdGVtQ2xpY2snLCAnc2VsZWN0SGludE9uRW50ZXInLCAnc2V0SXRlbSddO1xuXG52YXIgVHlwZWFoZWFkTWFuYWdlciA9IGZ1bmN0aW9uIFR5cGVhaGVhZE1hbmFnZXIocHJvcHMpIHtcbiAgdmFyIGFsbG93TmV3ID0gcHJvcHMuYWxsb3dOZXcsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgaW5pdGlhbEl0ZW0gPSBwcm9wcy5pbml0aWFsSXRlbSxcbiAgICAgIGlzTWVudVNob3duID0gcHJvcHMuaXNNZW51U2hvd24sXG4gICAgICBvbkFkZCA9IHByb3BzLm9uQWRkLFxuICAgICAgb25Jbml0aWFsSXRlbUNoYW5nZSA9IHByb3BzLm9uSW5pdGlhbEl0ZW1DaGFuZ2UsXG4gICAgICBvbktleURvd24gPSBwcm9wcy5vbktleURvd24sXG4gICAgICBvbk1lbnVUb2dnbGUgPSBwcm9wcy5vbk1lbnVUb2dnbGUsXG4gICAgICByZXN1bHRzID0gcHJvcHMucmVzdWx0cztcbiAgdmFyIHByZXZQcm9wcyA9IHVzZVByZXZpb3VzKHByb3BzKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDbGVhciB0aGUgaW5pdGlhbCBpdGVtIHdoZW4gdGhlcmUgYXJlIG5vIHJlc3VsdHMuXG4gICAgaWYgKCEoYWxsb3dOZXcgfHwgcmVzdWx0cy5sZW5ndGgpKSB7XG4gICAgICBvbkluaXRpYWxJdGVtQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByZXZQcm9wcyAmJiBwcmV2UHJvcHMuaXNNZW51U2hvd24gIT09IGlzTWVudVNob3duKSB7XG4gICAgICBvbk1lbnVUb2dnbGUoaXNNZW51U2hvd24pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSBSRVRVUk46XG4gICAgICAgIGlmIChpbml0aWFsSXRlbSAmJiBnZXRJc09ubHlSZXN1bHQocHJvcHMpKSB7XG4gICAgICAgICAgb25BZGQoaW5pdGlhbEl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihlKTtcbiAgfTtcblxuICB2YXIgY2hpbGRQcm9wcyA9IF9leHRlbmRzKHt9LCBwaWNrKHByb3BzLCBwcm9wS2V5cyksIHtcbiAgICBnZXRJbnB1dFByb3BzOiBnZXRJbnB1dFByb3BzKF9leHRlbmRzKHt9LCBwaWNrKHByb3BzLCBpbnB1dFByb3BLZXlzKSwge1xuICAgICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgICAgdmFsdWU6IGdldElucHV0VGV4dChwcm9wcylcbiAgICB9KSlcbiAgfSk7XG5cbiAgdmFyIGNvbnRleHRWYWx1ZSA9IF9leHRlbmRzKHt9LCBwaWNrKHByb3BzLCBjb250ZXh0S2V5cyksIHtcbiAgICBoaW50VGV4dDogZ2V0SGludFRleHQocHJvcHMpLFxuICAgIGlzT25seVJlc3VsdDogZ2V0SXNPbmx5UmVzdWx0KHByb3BzKVxuICB9KTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwZWFoZWFkQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0VmFsdWVcbiAgfSwgY2hpbGRyZW4oY2hpbGRQcm9wcykpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHlwZWFoZWFkTWFuYWdlcjsiLCIvLyBDb21wb25lbnRzXG5pbXBvcnQgX0FzeW5jVHlwZWFoZWFkIGZyb20gJy4vY29tcG9uZW50cy9Bc3luY1R5cGVhaGVhZCc7XG5leHBvcnQgeyBfQXN5bmNUeXBlYWhlYWQgYXMgQXN5bmNUeXBlYWhlYWQgfTtcbmltcG9ydCBfQ2xlYXJCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0NsZWFyQnV0dG9uJztcbmV4cG9ydCB7IF9DbGVhckJ1dHRvbiBhcyBDbGVhckJ1dHRvbiB9O1xuaW1wb3J0IF9IaWdobGlnaHRlciBmcm9tICcuL2NvbXBvbmVudHMvSGlnaGxpZ2h0ZXInO1xuZXhwb3J0IHsgX0hpZ2hsaWdodGVyIGFzIEhpZ2hsaWdodGVyIH07XG5pbXBvcnQgX0hpbnQgZnJvbSAnLi9jb21wb25lbnRzL0hpbnQnO1xuZXhwb3J0IHsgX0hpbnQgYXMgSGludCB9O1xuZXhwb3J0IHsgdXNlSGludCB9IGZyb20gJy4vY29tcG9uZW50cy9IaW50JztcbmltcG9ydCBfSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL0lucHV0JztcbmV4cG9ydCB7IF9JbnB1dCBhcyBJbnB1dCB9O1xuaW1wb3J0IF9Mb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL0xvYWRlcic7XG5leHBvcnQgeyBfTG9hZGVyIGFzIExvYWRlciB9O1xuaW1wb3J0IF9NZW51IGZyb20gJy4vY29tcG9uZW50cy9NZW51JztcbmV4cG9ydCB7IF9NZW51IGFzIE1lbnUgfTtcbmltcG9ydCBfTWVudUl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL01lbnVJdGVtJztcbmV4cG9ydCB7IF9NZW51SXRlbSBhcyBNZW51SXRlbSB9O1xuaW1wb3J0IF9Ub2tlbiBmcm9tICcuL2NvbXBvbmVudHMvVG9rZW4nO1xuZXhwb3J0IHsgX1Rva2VuIGFzIFRva2VuIH07XG5pbXBvcnQgX1R5cGVhaGVhZCBmcm9tICcuL2NvbXBvbmVudHMvVHlwZWFoZWFkJztcbmV4cG9ydCB7IF9UeXBlYWhlYWQgYXMgVHlwZWFoZWFkIH07XG5pbXBvcnQgX1R5cGVhaGVhZElucHV0TXVsdGkgZnJvbSAnLi9jb21wb25lbnRzL1R5cGVhaGVhZElucHV0TXVsdGknO1xuZXhwb3J0IHsgX1R5cGVhaGVhZElucHV0TXVsdGkgYXMgVHlwZWFoZWFkSW5wdXRNdWx0aSB9O1xuaW1wb3J0IF9UeXBlYWhlYWRJbnB1dFNpbmdsZSBmcm9tICcuL2NvbXBvbmVudHMvVHlwZWFoZWFkSW5wdXRTaW5nbGUnO1xuZXhwb3J0IHsgX1R5cGVhaGVhZElucHV0U2luZ2xlIGFzIFR5cGVhaGVhZElucHV0U2luZ2xlIH07XG5pbXBvcnQgX1R5cGVhaGVhZE1lbnUgZnJvbSAnLi9jb21wb25lbnRzL1R5cGVhaGVhZE1lbnUnO1xuZXhwb3J0IHsgX1R5cGVhaGVhZE1lbnUgYXMgVHlwZWFoZWFkTWVudSB9OyAvLyBIT0NzICsgSG9va3NcblxuaW1wb3J0IF9hc3luY0NvbnRhaW5lciBmcm9tICcuL2JlaGF2aW9ycy9hc3luYyc7XG5leHBvcnQgeyBfYXN5bmNDb250YWluZXIgYXMgYXN5bmNDb250YWluZXIgfTtcbmV4cG9ydCB7IHVzZUFzeW5jLCB3aXRoQXN5bmMgfSBmcm9tICcuL2JlaGF2aW9ycy9hc3luYyc7XG5pbXBvcnQgX21lbnVJdGVtQ29udGFpbmVyIGZyb20gJy4vYmVoYXZpb3JzL2l0ZW0nO1xuZXhwb3J0IHsgX21lbnVJdGVtQ29udGFpbmVyIGFzIG1lbnVJdGVtQ29udGFpbmVyIH07XG5leHBvcnQgeyB1c2VJdGVtLCB3aXRoSXRlbSB9IGZyb20gJy4vYmVoYXZpb3JzL2l0ZW0nO1xuaW1wb3J0IF90b2tlbkNvbnRhaW5lciBmcm9tICcuL2JlaGF2aW9ycy90b2tlbic7XG5leHBvcnQgeyBfdG9rZW5Db250YWluZXIgYXMgdG9rZW5Db250YWluZXIgfTtcbmV4cG9ydCB7IHVzZVRva2VuLCB3aXRoVG9rZW4gfSBmcm9tICcuL2JlaGF2aW9ycy90b2tlbic7IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGlzRnVuY3Rpb24sIHZhbHVlcywgd2FybiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU0laRSB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBJTlBVVF9QUk9QU19CTEFDS0xJU1QgPSBbe1xuICBhbHQ6ICdvbkJsdXInLFxuICBwcm9wOiAnb25CbHVyJ1xufSwge1xuICBhbHQ6ICdvbklucHV0Q2hhbmdlJyxcbiAgcHJvcDogJ29uQ2hhbmdlJ1xufSwge1xuICBhbHQ6ICdvbkZvY3VzJyxcbiAgcHJvcDogJ29uRm9jdXMnXG59LCB7XG4gIGFsdDogJ29uS2V5RG93bicsXG4gIHByb3A6ICdvbktleURvd24nXG59XTtcbmV4cG9ydCB2YXIgc2l6ZVR5cGUgPSBQcm9wVHlwZXMub25lT2YodmFsdWVzKFNJWkUpKTtcbi8qKlxuICogQWxsb3dzIGFkZGl0aW9uYWwgd2FybmluZ3Mgb3IgbWVzc2FnaW5nIHJlbGF0ZWQgdG8gcHJvcCB2YWxpZGF0aW9uLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Byb3BUeXBlKHZhbGlkYXRvciwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgX1Byb3BUeXBlcyRjaGVja1Byb3BUO1xuXG4gICAgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKChfUHJvcFR5cGVzJGNoZWNrUHJvcFQgPSB7fSwgX1Byb3BUeXBlcyRjaGVja1Byb3BUW3Byb3BOYW1lXSA9IHZhbGlkYXRvciwgX1Byb3BUeXBlcyRjaGVja1Byb3BUKSwgcHJvcHMsICdwcm9wJywgY29tcG9uZW50TmFtZSk7XG4gICAgaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2socHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYXNlU2Vuc2l0aXZlVHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIGNhc2VTZW5zaXRpdmUgPSBwcm9wcy5jYXNlU2Vuc2l0aXZlLFxuICAgICAgZmlsdGVyQnkgPSBwcm9wcy5maWx0ZXJCeTtcbiAgd2FybighY2FzZVNlbnNpdGl2ZSB8fCB0eXBlb2YgZmlsdGVyQnkgIT09ICdmdW5jdGlvbicsICdZb3VyIGBmaWx0ZXJCeWAgZnVuY3Rpb24gd2lsbCBvdmVycmlkZSB0aGUgYGNhc2VTZW5zaXRpdmVgIHByb3AuJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlZCh2YWxpZGF0b3IsIHJlYXNvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgIHZhciBfUHJvcFR5cGVzJGNoZWNrUHJvcFQyO1xuXG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSAhPSBudWxsKSB7XG4gICAgICB3YXJuKGZhbHNlLCBcIlRoZSBgXCIgKyBwcm9wTmFtZSArIFwiYCBwcm9wIGlzIGRlcHJlY2F0ZWQuIFwiICsgcmVhc29uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKChfUHJvcFR5cGVzJGNoZWNrUHJvcFQyID0ge30sIF9Qcm9wVHlwZXMkY2hlY2tQcm9wVDJbcHJvcE5hbWVdID0gdmFsaWRhdG9yLCBfUHJvcFR5cGVzJGNoZWNrUHJvcFQyKSwgcHJvcHMsICdwcm9wJywgY29tcG9uZW50TmFtZSk7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdElucHV0VmFsdWVUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgZGVmYXVsdElucHV0VmFsdWUgPSBwcm9wcy5kZWZhdWx0SW5wdXRWYWx1ZSxcbiAgICAgIGRlZmF1bHRTZWxlY3RlZCA9IHByb3BzLmRlZmF1bHRTZWxlY3RlZCxcbiAgICAgIG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGUsXG4gICAgICBzZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkO1xuICB2YXIgbmFtZSA9IGRlZmF1bHRTZWxlY3RlZC5sZW5ndGggPyAnZGVmYXVsdFNlbGVjdGVkJyA6ICdzZWxlY3RlZCc7XG4gIHdhcm4oISghbXVsdGlwbGUgJiYgZGVmYXVsdElucHV0VmFsdWUgJiYgKGRlZmF1bHRTZWxlY3RlZC5sZW5ndGggfHwgc2VsZWN0ZWQgJiYgc2VsZWN0ZWQubGVuZ3RoKSksIFwiYGRlZmF1bHRJbnB1dFZhbHVlYCB3aWxsIGJlIG92ZXJyaWRkZW4gYnkgdGhlIHZhbHVlIGZyb20gYFwiICsgbmFtZSArIFwiYC5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFNlbGVjdGVkVHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIGRlZmF1bHRTZWxlY3RlZCA9IHByb3BzLmRlZmF1bHRTZWxlY3RlZCxcbiAgICAgIG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGU7XG4gIHdhcm4obXVsdGlwbGUgfHwgZGVmYXVsdFNlbGVjdGVkLmxlbmd0aCA8PSAxLCAnWW91IGFyZSBwYXNzaW5nIG11bHRpcGxlIG9wdGlvbnMgdG8gdGhlIGBkZWZhdWx0U2VsZWN0ZWRgIHByb3Agb2YgYSAnICsgJ1R5cGVhaGVhZCBpbiBzaW5nbGUtc2VsZWN0IG1vZGUuIFRoZSBzZWxlY3Rpb25zIHdpbGwgYmUgdHJ1bmNhdGVkIHRvIGEgJyArICdzaW5nbGUgc2VsZWN0aW9uLicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hsaWdodE9ubHlSZXN1bHRUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgYWxsb3dOZXcgPSBwcm9wcy5hbGxvd05ldyxcbiAgICAgIGhpZ2hsaWdodE9ubHlSZXN1bHQgPSBwcm9wcy5oaWdobGlnaHRPbmx5UmVzdWx0O1xuICB3YXJuKCEoaGlnaGxpZ2h0T25seVJlc3VsdCAmJiBhbGxvd05ldyksICdgaGlnaGxpZ2h0T25seVJlc3VsdGAgd2lsbCBub3Qgd29yayB3aXRoIGBhbGxvd05ld2AuJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gaWdub3JlRGlhY3JpdGljc1R5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBmaWx0ZXJCeSA9IHByb3BzLmZpbHRlckJ5LFxuICAgICAgaWdub3JlRGlhY3JpdGljcyA9IHByb3BzLmlnbm9yZURpYWNyaXRpY3M7XG4gIHdhcm4oaWdub3JlRGlhY3JpdGljcyB8fCB0eXBlb2YgZmlsdGVyQnkgIT09ICdmdW5jdGlvbicsICdZb3VyIGBmaWx0ZXJCeWAgZnVuY3Rpb24gd2lsbCBvdmVycmlkZSB0aGUgYGlnbm9yZURpYWNyaXRpY3NgIHByb3AuJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5wdXRQcm9wc1R5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBpbnB1dFByb3BzID0gcHJvcHMuaW5wdXRQcm9wcztcblxuICBpZiAoIShpbnB1dFByb3BzICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dFByb3BzKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIEJsYWNrbGlzdGVkIHByb3BlcnRpZXMuXG5cblxuICBJTlBVVF9QUk9QU19CTEFDS0xJU1QuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBhbHQgPSBfcmVmLmFsdCxcbiAgICAgICAgcHJvcCA9IF9yZWYucHJvcDtcbiAgICB2YXIgbXNnID0gYWx0ID8gXCIgVXNlIHRoZSB0b3AtbGV2ZWwgYFwiICsgYWx0ICsgXCJgIHByb3AgaW5zdGVhZC5cIiA6IG51bGw7XG4gICAgd2FybighaW5wdXRQcm9wc1twcm9wXSwgXCJUaGUgYFwiICsgcHJvcCArIFwiYCBwcm9wZXJ0eSBvZiBgaW5wdXRQcm9wc2Agd2lsbCBiZSBpZ25vcmVkLlwiICsgbXNnKTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNSZXF1aXJlZEZvckExMXkocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHdhcm4ocHJvcHNbcHJvcE5hbWVdICE9IG51bGwsIFwiVGhlIHByb3AgYFwiICsgcHJvcE5hbWUgKyBcImAgaXMgcmVxdWlyZWQgdG8gbWFrZSBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgIFwiICsgJ2FjY2Vzc2libGUgZm9yIHVzZXJzIG9mIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMgc3VjaCBhcyBzY3JlZW4gcmVhZGVycy4nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbEtleVR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBhbGxvd05ldyA9IHByb3BzLmFsbG93TmV3LFxuICAgICAgbGFiZWxLZXkgPSBwcm9wcy5sYWJlbEtleTtcbiAgd2FybighKGlzRnVuY3Rpb24obGFiZWxLZXkpICYmIGFsbG93TmV3KSwgJ2BsYWJlbEtleWAgbXVzdCBiZSBhIHN0cmluZyB3aGVuIGBhbGxvd05ldz17dHJ1ZX1gLicpO1xufVxuZXhwb3J0IHZhciBvcHRpb25UeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pO1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdGVkVHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGUsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZDtcbiAgd2FybihtdWx0aXBsZSB8fCAhc2VsZWN0ZWQgfHwgc2VsZWN0ZWQubGVuZ3RoIDw9IDEsICdZb3UgYXJlIHBhc3NpbmcgbXVsdGlwbGUgb3B0aW9ucyB0byB0aGUgYHNlbGVjdGVkYCBwcm9wIG9mIGEgVHlwZWFoZWFkICcgKyAnaW4gc2luZ2xlLXNlbGVjdCBtb2RlLiBUaGlzIG1heSBsZWFkIHRvIHVuZXhwZWN0ZWQgYmVoYXZpb3JzIG9yIGVycm9ycy4nKTtcbiAgd2Fybighc2VsZWN0ZWQgfHwgc2VsZWN0ZWQgJiYgaXNGdW5jdGlvbihvbkNoYW5nZSksICdZb3UgcHJvdmlkZWQgYSBgc2VsZWN0ZWRgIHByb3Agd2l0aG91dCBhbiBgb25DaGFuZ2VgIGhhbmRsZXIuIElmIHlvdSAnICsgJ3dhbnQgdGhlIHR5cGVhaGVhZCB0byBiZSB1bmNvbnRyb2xsZWQsIHVzZSBgZGVmYXVsdFNlbGVjdGVkYC4gJyArICdPdGhlcndpc2UsIHNldCBgb25DaGFuZ2VgLicpO1xufSIsImltcG9ydCBnZXRPcHRpb25MYWJlbCBmcm9tICcuL2dldE9wdGlvbkxhYmVsJztcblxuZnVuY3Rpb24gYWRkQ3VzdG9tT3B0aW9uKHJlc3VsdHMsIHByb3BzKSB7XG4gIHZhciBhbGxvd05ldyA9IHByb3BzLmFsbG93TmV3LFxuICAgICAgbGFiZWxLZXkgPSBwcm9wcy5sYWJlbEtleSxcbiAgICAgIHRleHQgPSBwcm9wcy50ZXh0O1xuXG4gIGlmICghYWxsb3dOZXcgfHwgIXRleHQudHJpbSgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIElmIHRoZSBjb25zdW1lciBoYXMgcHJvdmlkZWQgYSBjYWxsYmFjaywgdXNlIHRoYXQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3JcbiAgLy8gbm90IHRvIGFkZCB0aGUgY3VzdG9tIG9wdGlvbi5cblxuXG4gIGlmICh0eXBlb2YgYWxsb3dOZXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYWxsb3dOZXcocmVzdWx0cywgcHJvcHMpO1xuICB9IC8vIEJ5IGRlZmF1bHQsIGRvbid0IGFkZCB0aGUgY3VzdG9tIG9wdGlvbiBpZiB0aGVyZSBpcyBhbiBleGFjdCB0ZXh0IG1hdGNoXG4gIC8vIHdpdGggYW4gZXhpc3Rpbmcgb3B0aW9uLlxuXG5cbiAgcmV0dXJuICFyZXN1bHRzLnNvbWUoZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uTGFiZWwobywgbGFiZWxLZXkpID09PSB0ZXh0O1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkQ3VzdG9tT3B0aW9uOyIsImltcG9ydCBpc0VxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgZ2V0T3B0aW9uUHJvcGVydHkgZnJvbSAnLi9nZXRPcHRpb25Qcm9wZXJ0eSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc1N0cmluZyB9IGZyb20gJy4vbm9kYXNoJztcbmltcG9ydCBzdHJpcERpYWNyaXRpY3MgZnJvbSAnLi9zdHJpcERpYWNyaXRpY3MnO1xuaW1wb3J0IHdhcm4gZnJvbSAnLi93YXJuJztcblxuZnVuY3Rpb24gaXNNYXRjaChpbnB1dCwgc3RyaW5nLCBwcm9wcykge1xuICB2YXIgc2VhcmNoU3RyID0gaW5wdXQ7XG4gIHZhciBzdHIgPSBzdHJpbmc7XG5cbiAgaWYgKCFwcm9wcy5jYXNlU2Vuc2l0aXZlKSB7XG4gICAgc2VhcmNoU3RyID0gc2VhcmNoU3RyLnRvTG93ZXJDYXNlKCk7XG4gICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBpZiAocHJvcHMuaWdub3JlRGlhY3JpdGljcykge1xuICAgIHNlYXJjaFN0ciA9IHN0cmlwRGlhY3JpdGljcyhzZWFyY2hTdHIpO1xuICAgIHN0ciA9IHN0cmlwRGlhY3JpdGljcyhzdHIpO1xuICB9XG5cbiAgcmV0dXJuIHN0ci5pbmRleE9mKHNlYXJjaFN0cikgIT09IC0xO1xufVxuLyoqXG4gKiBEZWZhdWx0IGFsZ29yaXRobSBmb3IgZmlsdGVyaW5nIHJlc3VsdHMuXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZhdWx0RmlsdGVyQnkob3B0aW9uLCBwcm9wcykge1xuICB2YXIgZmlsdGVyQnkgPSBwcm9wcy5maWx0ZXJCeSxcbiAgICAgIGxhYmVsS2V5ID0gcHJvcHMubGFiZWxLZXksXG4gICAgICBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZCxcbiAgICAgIHRleHQgPSBwcm9wcy50ZXh0OyAvLyBEb24ndCBzaG93IHNlbGVjdGVkIG9wdGlvbnMgaW4gdGhlIG1lbnUgZm9yIHRoZSBtdWx0aS1zZWxlY3QgY2FzZS5cblxuICBpZiAobXVsdGlwbGUgJiYgc2VsZWN0ZWQuc29tZShmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBpc0VxdWFsKG8sIG9wdGlvbik7XG4gIH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzRnVuY3Rpb24obGFiZWxLZXkpICYmIGlzTWF0Y2godGV4dCwgbGFiZWxLZXkob3B0aW9uKSwgcHJvcHMpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgZmllbGRzID0gZmlsdGVyQnkuc2xpY2UoKTtcblxuICBpZiAoaXNTdHJpbmcobGFiZWxLZXkpKSB7XG4gICAgLy8gQWRkIHRoZSBgbGFiZWxLZXlgIGZpZWxkIHRvIHRoZSBsaXN0IG9mIGZpZWxkcyBpZiBpdCBpc24ndCBhbHJlYWR5IHRoZXJlLlxuICAgIGlmIChmaWVsZHMuaW5kZXhPZihsYWJlbEtleSkgPT09IC0xKSB7XG4gICAgICBmaWVsZHMudW5zaGlmdChsYWJlbEtleSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzU3RyaW5nKG9wdGlvbikpIHtcbiAgICB3YXJuKGZpZWxkcy5sZW5ndGggPD0gMSwgJ1lvdSBjYW5ub3QgZmlsdGVyIGJ5IHByb3BlcnRpZXMgd2hlbiBgb3B0aW9uYCBpcyBhIHN0cmluZy4nKTtcbiAgICByZXR1cm4gaXNNYXRjaCh0ZXh0LCBvcHRpb24sIHByb3BzKTtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHMuc29tZShmdW5jdGlvbiAoZmllbGQpIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRPcHRpb25Qcm9wZXJ0eShvcHRpb24sIGZpZWxkKTtcblxuICAgIGlmICghaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICB3YXJuKGZhbHNlLCAnRmllbGRzIHBhc3NlZCB0byBgZmlsdGVyQnlgIHNob3VsZCBoYXZlIHN0cmluZyB2YWx1ZXMuIFZhbHVlIHdpbGwgJyArICdiZSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmc7IHJlc3VsdHMgbWF5IGJlIHVuZXhwZWN0ZWQuJyk7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTWF0Y2godGV4dCwgdmFsdWUsIHByb3BzKTtcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59IiwiaW1wb3J0IGdldE1hdGNoQm91bmRzIGZyb20gJy4vZ2V0TWF0Y2hCb3VuZHMnO1xuaW1wb3J0IGdldE9wdGlvbkxhYmVsIGZyb20gJy4vZ2V0T3B0aW9uTGFiZWwnO1xuXG5mdW5jdGlvbiBnZXRIaW50VGV4dChwcm9wcykge1xuICB2YXIgYWN0aXZlSW5kZXggPSBwcm9wcy5hY3RpdmVJbmRleCxcbiAgICAgIGluaXRpYWxJdGVtID0gcHJvcHMuaW5pdGlhbEl0ZW0sXG4gICAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgICBpc01lbnVTaG93biA9IHByb3BzLmlzTWVudVNob3duLFxuICAgICAgbGFiZWxLZXkgPSBwcm9wcy5sYWJlbEtleSxcbiAgICAgIG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGUsXG4gICAgICBzZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkLFxuICAgICAgdGV4dCA9IHByb3BzLnRleHQ7IC8vIERvbid0IGRpc3BsYXkgYSBoaW50IHVuZGVyIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBpZiAoIC8vIE5vIHRleHQgZW50ZXJlZC5cbiAgIXRleHQgfHwgLy8gVGhlIGlucHV0IGlzIG5vdCBmb2N1c2VkLlxuICAhaXNGb2N1c2VkIHx8IC8vIFRoZSBtZW51IGlzIGhpZGRlbi5cbiAgIWlzTWVudVNob3duIHx8IC8vIE5vIGl0ZW0gaW4gdGhlIG1lbnUuXG4gICFpbml0aWFsSXRlbSB8fCAvLyBUaGUgaW5pdGlhbCBpdGVtIGlzIGEgY3VzdG9tIG9wdGlvbi5cbiAgaW5pdGlhbEl0ZW0uY3VzdG9tT3B0aW9uIHx8IC8vIE9uZSBvZiB0aGUgbWVudSBpdGVtcyBpcyBhY3RpdmUuXG4gIGFjdGl2ZUluZGV4ID4gLTEgfHwgLy8gVGhlcmUncyBhbHJlYWR5IGEgc2VsZWN0aW9uIGluIHNpbmdsZS1zZWxlY3QgbW9kZS5cbiAgISFzZWxlY3RlZC5sZW5ndGggJiYgIW11bHRpcGxlKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGluaXRpYWxJdGVtU3RyID0gZ2V0T3B0aW9uTGFiZWwoaW5pdGlhbEl0ZW0sIGxhYmVsS2V5KTtcbiAgdmFyIGJvdW5kcyA9IGdldE1hdGNoQm91bmRzKGluaXRpYWxJdGVtU3RyLnRvTG93ZXJDYXNlKCksIHRleHQudG9Mb3dlckNhc2UoKSk7XG5cbiAgaWYgKCEoYm91bmRzICYmIGJvdW5kcy5zdGFydCA9PT0gMCkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH0gLy8gVGV4dCBtYXRjaGluZyBpcyBjYXNlLSBhbmQgYWNjZW50LWluc2Vuc2l0aXZlLCBzbyB0byBkaXNwbGF5IHRoZSBoaW50XG4gIC8vIGNvcnJlY3RseSwgc3BsaWNlIHRoZSBpbnB1dCBzdHJpbmcgd2l0aCB0aGUgaGludCBzdHJpbmcuXG5cblxuICByZXR1cm4gdGV4dCArIGluaXRpYWxJdGVtU3RyLnNsaWNlKGJvdW5kcy5lbmQsIGluaXRpYWxJdGVtU3RyLmxlbmd0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEhpbnRUZXh0OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGdldE1lbnVJdGVtSWQgZnJvbSAnLi9nZXRNZW51SXRlbUlkJztcblxudmFyIGdldElucHV0UHJvcHMgPSBmdW5jdGlvbiBnZXRJbnB1dFByb3BzKF9yZWYpIHtcbiAgdmFyIGFjdGl2ZUluZGV4ID0gX3JlZi5hY3RpdmVJbmRleCxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgICAgaXNNZW51U2hvd24gPSBfcmVmLmlzTWVudVNob3duLFxuICAgICAgbXVsdGlwbGUgPSBfcmVmLm11bHRpcGxlLFxuICAgICAgb25Gb2N1cyA9IF9yZWYub25Gb2N1cyxcbiAgICAgIHBsYWNlaG9sZGVyID0gX3JlZi5wbGFjZWhvbGRlcixcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJhY3RpdmVJbmRleFwiLCBcImlkXCIsIFwiaXNGb2N1c2VkXCIsIFwiaXNNZW51U2hvd25cIiwgXCJtdWx0aXBsZVwiLCBcIm9uRm9jdXNcIiwgXCJwbGFjZWhvbGRlclwiXSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChfdGVtcCkge1xuICAgIHZhciBfY3g7XG5cbiAgICB2YXIgX3JlZjIgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lLFxuICAgICAgICBpbnB1dFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImNsYXNzTmFtZVwiXSk7XG5cbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LWtleXMgKi9cbiAgICAgIC8vIFRoZXNlIHByb3BzIGNhbiBiZSBvdmVycmlkZGVuIGJ5IHZhbHVlcyBpbiBgaW5wdXRQcm9wc2AuXG4gICAgICBhdXRvQ29tcGxldGU6ICdvZmYnLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgdHlwZTogJ3RleHQnXG4gICAgfSwgaW5wdXRQcm9wcywgcmVzdCwge1xuICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGFjdGl2ZUluZGV4ID49IDAgPyBnZXRNZW51SXRlbUlkKGlkLCBhY3RpdmVJbmRleCkgOiB1bmRlZmluZWQsXG4gICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnYm90aCcsXG4gICAgICAnYXJpYS1leHBhbmRlZCc6IGlzTWVudVNob3duLFxuICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAnbGlzdGJveCcsXG4gICAgICAnYXJpYS1vd25zJzogaXNNZW51U2hvd24gPyBpZCA6IHVuZGVmaW5lZCxcbiAgICAgIGNsYXNzTmFtZTogY3goKF9jeCA9IHt9LCBfY3hbY2xhc3NOYW1lIHx8ICcnXSA9ICFtdWx0aXBsZSwgX2N4LmZvY3VzID0gaXNGb2N1c2VkLCBfY3gpKSxcbiAgICAgIC8vIFJlLW9wZW4gdGhlIG1lbnUsIGVnOiBpZiBpdCdzIGNsb3NlZCB2aWEgRVNDLlxuICAgICAgb25DbGljazogb25Gb2N1cyxcbiAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICAvLyBDb21ib2JveGVzIGFyZSBzaW5nbGUtc2VsZWN0IGJ5IGRlZmluaXRpb246XG4gICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLTEuMS8jY29tYm9ib3hcbiAgICAgIHJvbGU6ICdjb21ib2JveCdcbiAgICAgIC8qIGVzbGludC1lbmFibGUgc29ydC1rZXlzICovXG5cbiAgICB9KTtcblxuICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAnYXJpYS1leHBhbmRlZCc6IHVuZGVmaW5lZCxcbiAgICAgIGlucHV0Q2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICByb2xlOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldElucHV0UHJvcHM7IiwiaW1wb3J0IGdldE9wdGlvbkxhYmVsIGZyb20gJy4vZ2V0T3B0aW9uTGFiZWwnO1xuaW1wb3J0IHsgaGVhZCB9IGZyb20gJy4vbm9kYXNoJztcblxuZnVuY3Rpb24gZ2V0SW5wdXRUZXh0KHByb3BzKSB7XG4gIHZhciBhY3RpdmVJdGVtID0gcHJvcHMuYWN0aXZlSXRlbSxcbiAgICAgIGxhYmVsS2V5ID0gcHJvcHMubGFiZWxLZXksXG4gICAgICBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZCxcbiAgICAgIHRleHQgPSBwcm9wcy50ZXh0O1xuXG4gIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgLy8gRGlzcGxheSB0aGUgaW5wdXQgdmFsdWUgaWYgdGhlIHBhZ2luYXRpb24gaXRlbSBpcyBhY3RpdmUuXG4gICAgcmV0dXJuIGdldE9wdGlvbkxhYmVsKGFjdGl2ZUl0ZW0sIGxhYmVsS2V5KTtcbiAgfVxuXG4gIHZhciBzZWxlY3RlZEl0ZW0gPSAhbXVsdGlwbGUgJiYgISFzZWxlY3RlZC5sZW5ndGggJiYgaGVhZChzZWxlY3RlZCk7XG5cbiAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgIHJldHVybiBnZXRPcHRpb25MYWJlbChzZWxlY3RlZEl0ZW0sIGxhYmVsS2V5KTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRJbnB1dFRleHQ7IiwiaW1wb3J0IGdldE9wdGlvblByb3BlcnR5IGZyb20gJy4vZ2V0T3B0aW9uUHJvcGVydHknO1xuaW1wb3J0IHsgaGVhZCB9IGZyb20gJy4vbm9kYXNoJztcblxuZnVuY3Rpb24gZ2V0SXNPbmx5UmVzdWx0KHByb3BzKSB7XG4gIHZhciBhbGxvd05ldyA9IHByb3BzLmFsbG93TmV3LFxuICAgICAgaGlnaGxpZ2h0T25seVJlc3VsdCA9IHByb3BzLmhpZ2hsaWdodE9ubHlSZXN1bHQsXG4gICAgICByZXN1bHRzID0gcHJvcHMucmVzdWx0cztcblxuICBpZiAoIWhpZ2hsaWdodE9ubHlSZXN1bHQgfHwgYWxsb3dOZXcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cy5sZW5ndGggPT09IDEgJiYgIWdldE9wdGlvblByb3BlcnR5KGhlYWQocmVzdWx0cyksICdkaXNhYmxlZCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRJc09ubHlSZXN1bHQ7IiwiaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IHN0cmlwRGlhY3JpdGljcyBmcm9tICcuL3N0cmlwRGlhY3JpdGljcyc7XG52YXIgQ0FTRV9JTlNFTlNJVElWRSA9ICdpJztcbnZhciBDT01CSU5JTkdfTUFSS1MgPSAvW1xcdTAzMDAtXFx1MDM2Rl0vO1xuLy8gRXhwb3J0IGZvciB0ZXN0aW5nLlxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVN0cmluZ1JlZ2V4cChzdHIpIHtcbiAgISh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdgZXNjYXBlU3RyaW5nUmVnZXhwYCBleHBlY3RlZCBhIHN0cmluZy4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7IC8vIEVzY2FwZSBjaGFyYWN0ZXJzIHdpdGggc3BlY2lhbCBtZWFuaW5nIGVpdGhlciBpbnNpZGUgb3Igb3V0c2lkZSBjaGFyYWN0ZXJcbiAgLy8gc2V0cy4gVXNlIGEgc2ltcGxlIGJhY2tzbGFzaCBlc2NhcGUgd2hlbiBpdOKAmXMgYWx3YXlzIHZhbGlkLCBhbmQgYSBcXHVubm5uXG4gIC8vIGVzY2FwZSB3aGVuIHRoZSBzaW1wbGVyIGZvcm0gd291bGQgYmUgZGlzYWxsb3dlZCBieSBVbmljb2RlIHBhdHRlcm5z4oCZXG4gIC8vIHN0cmljdGVyIGdyYW1tYXIuXG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZywgJ1xcXFwkJicpLnJlcGxhY2UoLy0vZywgJ1xcXFx4MmQnKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1hdGNoQm91bmRzKHN1YmplY3QsIHN0cikge1xuICB2YXIgc2VhcmNoID0gbmV3IFJlZ0V4cChlc2NhcGVTdHJpbmdSZWdleHAoc3RyaXBEaWFjcml0aWNzKHN0cikpLCBDQVNFX0lOU0VOU0lUSVZFKTtcbiAgdmFyIG1hdGNoZXMgPSBzZWFyY2guZXhlYyhzdHJpcERpYWNyaXRpY3Moc3ViamVjdCkpO1xuXG4gIGlmICghbWF0Y2hlcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHN0YXJ0ID0gbWF0Y2hlcy5pbmRleDtcbiAgdmFyIG1hdGNoTGVuZ3RoID0gbWF0Y2hlc1swXS5sZW5ndGg7IC8vIEFjY291bnQgZm9yIGNvbWJpbmluZyBtYXJrcywgd2hpY2ggY2hhbmdlcyB0aGUgaW5kaWNlcy5cblxuICBpZiAoQ09NQklOSU5HX01BUktTLnRlc3Qoc3ViamVjdCkpIHtcbiAgICAvLyBTdGFydGluZyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdWJqZWN0IHN0cmluZywgY2hlY2sgZm9yIHRoZSBudW1iZXIgb2ZcbiAgICAvLyBjb21iaW5pbmcgbWFya3MgYW5kIGluY3JlbWVudCB0aGUgc3RhcnQgaW5kZXggd2hlbmV2ZXIgb25lIGlzIGZvdW5kLlxuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPD0gc3RhcnQ7IGlpKyspIHtcbiAgICAgIGlmIChDT01CSU5JTkdfTUFSS1MudGVzdChzdWJqZWN0W2lpXSkpIHtcbiAgICAgICAgc3RhcnQgKz0gMTtcbiAgICAgIH1cbiAgICB9IC8vIFNpbWlsYXJseSwgaW5jcmVtZW50IHRoZSBsZW5ndGggb2YgdGhlIG1hdGNoIHN0cmluZyBpZiBpdCBjb250YWlucyBhXG4gICAgLy8gY29tYmluaW5nIG1hcmsuXG5cblxuICAgIGZvciAodmFyIF9paSA9IHN0YXJ0OyBfaWkgPD0gc3RhcnQgKyBtYXRjaExlbmd0aDsgX2lpKyspIHtcbiAgICAgIGlmIChDT01CSU5JTkdfTUFSS1MudGVzdChzdWJqZWN0W19paV0pKSB7XG4gICAgICAgIG1hdGNoTGVuZ3RoICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlbmQ6IHN0YXJ0ICsgbWF0Y2hMZW5ndGgsXG4gICAgc3RhcnQ6IHN0YXJ0XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWVudUl0ZW1JZChpZCwgcG9zaXRpb24pIHtcbiAgcmV0dXJuIChpZCB8fCAnJykgKyBcIi1pdGVtLVwiICsgcG9zaXRpb247XG59IiwiaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IGdldFN0cmluZ0xhYmVsS2V5IGZyb20gJy4vZ2V0U3RyaW5nTGFiZWxLZXknO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNTdHJpbmcgfSBmcm9tICcuL25vZGFzaCc7XG5cbi8qKlxuICogUmV0cmlldmVzIHRoZSBkaXNwbGF5IHN0cmluZyBmcm9tIGFuIG9wdGlvbi4gT3B0aW9ucyBjYW4gYmUgdGhlIHN0cmluZ1xuICogdGhlbXNlbHZlcywgb3IgYW4gb2JqZWN0IHdpdGggYSBkZWZpbmVkIGRpc3BsYXkgc3RyaW5nLiBBbnl0aGluZyBlbHNlIHRocm93c1xuICogYW4gZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKG9wdGlvbiwgbGFiZWxLZXkpIHtcbiAgLy8gSGFuZGxlIGludGVybmFsbHkgY3JlYXRlZCBvcHRpb25zIGZpcnN0LlxuICBpZiAoIWlzU3RyaW5nKG9wdGlvbikgJiYgKG9wdGlvbi5wYWdpbmF0aW9uT3B0aW9uIHx8IG9wdGlvbi5jdXN0b21PcHRpb24pKSB7XG4gICAgcmV0dXJuIG9wdGlvbltnZXRTdHJpbmdMYWJlbEtleShsYWJlbEtleSldO1xuICB9XG5cbiAgdmFyIG9wdGlvbkxhYmVsO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGxhYmVsS2V5KSkge1xuICAgIG9wdGlvbkxhYmVsID0gbGFiZWxLZXkob3B0aW9uKTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhvcHRpb24pKSB7XG4gICAgb3B0aW9uTGFiZWwgPSBvcHRpb247XG4gIH0gZWxzZSB7XG4gICAgLy8gYG9wdGlvbmAgaXMgYW4gb2JqZWN0IGFuZCBgbGFiZWxLZXlgIGlzIGEgc3RyaW5nLlxuICAgIG9wdGlvbkxhYmVsID0gb3B0aW9uW2xhYmVsS2V5XTtcbiAgfVxuXG4gICFpc1N0cmluZyhvcHRpb25MYWJlbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdPbmUgb3IgbW9yZSBvcHRpb25zIGRvZXMgbm90IGhhdmUgYSB2YWxpZCBsYWJlbCBzdHJpbmcuIENoZWNrIHRoZSAnICsgJ2BsYWJlbEtleWAgcHJvcCB0byBlbnN1cmUgdGhhdCBpdCBtYXRjaGVzIHRoZSBjb3JyZWN0IG9wdGlvbiBrZXkgYW5kICcgKyAncHJvdmlkZXMgYSBzdHJpbmcgZm9yIGZpbHRlcmluZyBhbmQgZGlzcGxheS4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBvcHRpb25MYWJlbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0T3B0aW9uTGFiZWw7IiwiaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL25vZGFzaCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHRpb25Qcm9wZXJ0eShvcHRpb24sIGtleSkge1xuICBpZiAoaXNTdHJpbmcob3B0aW9uKSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gb3B0aW9uW2tleV07XG59IiwiaW1wb3J0IHsgREVGQVVMVF9MQUJFTEtFWSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdHJpbmdMYWJlbEtleShsYWJlbEtleSkge1xuICByZXR1cm4gdHlwZW9mIGxhYmVsS2V5ID09PSAnc3RyaW5nJyA/IGxhYmVsS2V5IDogREVGQVVMVF9MQUJFTEtFWTtcbn0iLCIvKipcbiAqIFRydW5jYXRlcyB0aGUgcmVzdWx0IHNldCBiYXNlZCBvbiBgbWF4UmVzdWx0c2AgYW5kIHJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbmZ1bmN0aW9uIGdldFRydW5jYXRlZE9wdGlvbnMob3B0aW9ucywgbWF4UmVzdWx0cykge1xuICBpZiAoIW1heFJlc3VsdHMgfHwgbWF4UmVzdWx0cyA+PSBvcHRpb25zLmxlbmd0aCkge1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMuc2xpY2UoMCwgbWF4UmVzdWx0cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRydW5jYXRlZE9wdGlvbnM7IiwiaW1wb3J0IHsgRE9XTiwgVVAgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBza2lwRGlzYWJsZWRPcHRpb25zKGN1cnJlbnRJbmRleCwga2V5Q29kZSwgaXRlbXMpIHtcbiAgdmFyIG5ld0luZGV4ID0gY3VycmVudEluZGV4O1xuXG4gIHdoaWxlIChpdGVtc1tuZXdJbmRleF0gJiYgaXRlbXNbbmV3SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgbmV3SW5kZXggKz0ga2V5Q29kZSA9PT0gVVAgPyAtMSA6IDE7XG4gIH1cblxuICByZXR1cm4gbmV3SW5kZXg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVwZGF0ZWRBY3RpdmVJbmRleChjdXJyZW50SW5kZXgsIGtleUNvZGUsIGl0ZW1zKSB7XG4gIHZhciBuZXdJbmRleCA9IGN1cnJlbnRJbmRleDsgLy8gSW5jcmVtZW50IG9yIGRlY3JlbWVudCBpbmRleCBiYXNlZCBvbiB1c2VyIGtleXN0cm9rZS5cblxuICBuZXdJbmRleCArPSBrZXlDb2RlID09PSBVUCA/IC0xIDogMTsgLy8gU2tpcCBvdmVyIGFueSBkaXNhYmxlZCBvcHRpb25zLlxuXG4gIG5ld0luZGV4ID0gc2tpcERpc2FibGVkT3B0aW9ucyhuZXdJbmRleCwga2V5Q29kZSwgaXRlbXMpOyAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQsIGdvIGJhY2sgdG8gdGhlIGJlZ2lubmluZyBvciB2aWNlLXZlcnNhLlxuXG4gIGlmIChuZXdJbmRleCA9PT0gaXRlbXMubGVuZ3RoKSB7XG4gICAgbmV3SW5kZXggPSAtMTtcbiAgfSBlbHNlIGlmIChuZXdJbmRleCA9PT0gLTIpIHtcbiAgICBuZXdJbmRleCA9IGl0ZW1zLmxlbmd0aCAtIDE7IC8vIFNraXAgb3ZlciBhbnkgZGlzYWJsZWQgb3B0aW9ucy5cblxuICAgIG5ld0luZGV4ID0gc2tpcERpc2FibGVkT3B0aW9ucyhuZXdJbmRleCwga2V5Q29kZSwgaXRlbXMpO1xuICB9XG5cbiAgcmV0dXJuIG5ld0luZGV4O1xufSIsImltcG9ydCBfYWRkQ3VzdG9tT3B0aW9uIGZyb20gJy4vYWRkQ3VzdG9tT3B0aW9uJztcbmV4cG9ydCB7IF9hZGRDdXN0b21PcHRpb24gYXMgYWRkQ3VzdG9tT3B0aW9uIH07XG5pbXBvcnQgX2RlZmF1bHRGaWx0ZXJCeSBmcm9tICcuL2RlZmF1bHRGaWx0ZXJCeSc7XG5leHBvcnQgeyBfZGVmYXVsdEZpbHRlckJ5IGFzIGRlZmF1bHRGaWx0ZXJCeSB9O1xuaW1wb3J0IF9nZXREaXNwbGF5TmFtZSBmcm9tICcuL2dldERpc3BsYXlOYW1lJztcbmV4cG9ydCB7IF9nZXREaXNwbGF5TmFtZSBhcyBnZXREaXNwbGF5TmFtZSB9O1xuaW1wb3J0IF9nZXRIaW50VGV4dCBmcm9tICcuL2dldEhpbnRUZXh0JztcbmV4cG9ydCB7IF9nZXRIaW50VGV4dCBhcyBnZXRIaW50VGV4dCB9O1xuaW1wb3J0IF9nZXRJbnB1dFByb3BzIGZyb20gJy4vZ2V0SW5wdXRQcm9wcyc7XG5leHBvcnQgeyBfZ2V0SW5wdXRQcm9wcyBhcyBnZXRJbnB1dFByb3BzIH07XG5pbXBvcnQgX2dldElucHV0VGV4dCBmcm9tICcuL2dldElucHV0VGV4dCc7XG5leHBvcnQgeyBfZ2V0SW5wdXRUZXh0IGFzIGdldElucHV0VGV4dCB9O1xuaW1wb3J0IF9nZXRJc09ubHlSZXN1bHQgZnJvbSAnLi9nZXRJc09ubHlSZXN1bHQnO1xuZXhwb3J0IHsgX2dldElzT25seVJlc3VsdCBhcyBnZXRJc09ubHlSZXN1bHQgfTtcbmltcG9ydCBfZ2V0TWF0Y2hCb3VuZHMgZnJvbSAnLi9nZXRNYXRjaEJvdW5kcyc7XG5leHBvcnQgeyBfZ2V0TWF0Y2hCb3VuZHMgYXMgZ2V0TWF0Y2hCb3VuZHMgfTtcbmV4cG9ydCB7IGVzY2FwZVN0cmluZ1JlZ2V4cCB9IGZyb20gJy4vZ2V0TWF0Y2hCb3VuZHMnO1xuaW1wb3J0IF9nZXRNZW51SXRlbUlkIGZyb20gJy4vZ2V0TWVudUl0ZW1JZCc7XG5leHBvcnQgeyBfZ2V0TWVudUl0ZW1JZCBhcyBnZXRNZW51SXRlbUlkIH07XG5pbXBvcnQgX2dldE9wdGlvbkxhYmVsIGZyb20gJy4vZ2V0T3B0aW9uTGFiZWwnO1xuZXhwb3J0IHsgX2dldE9wdGlvbkxhYmVsIGFzIGdldE9wdGlvbkxhYmVsIH07XG5pbXBvcnQgX2dldE9wdGlvblByb3BlcnR5IGZyb20gJy4vZ2V0T3B0aW9uUHJvcGVydHknO1xuZXhwb3J0IHsgX2dldE9wdGlvblByb3BlcnR5IGFzIGdldE9wdGlvblByb3BlcnR5IH07XG5pbXBvcnQgX2dldFN0cmluZ0xhYmVsS2V5IGZyb20gJy4vZ2V0U3RyaW5nTGFiZWxLZXknO1xuZXhwb3J0IHsgX2dldFN0cmluZ0xhYmVsS2V5IGFzIGdldFN0cmluZ0xhYmVsS2V5IH07XG5pbXBvcnQgX2dldFRydW5jYXRlZE9wdGlvbnMgZnJvbSAnLi9nZXRUcnVuY2F0ZWRPcHRpb25zJztcbmV4cG9ydCB7IF9nZXRUcnVuY2F0ZWRPcHRpb25zIGFzIGdldFRydW5jYXRlZE9wdGlvbnMgfTtcbmltcG9ydCBfZ2V0VXBkYXRlZEFjdGl2ZUluZGV4IGZyb20gJy4vZ2V0VXBkYXRlZEFjdGl2ZUluZGV4JztcbmV4cG9ydCB7IF9nZXRVcGRhdGVkQWN0aXZlSW5kZXggYXMgZ2V0VXBkYXRlZEFjdGl2ZUluZGV4IH07XG5pbXBvcnQgX2lzU2VsZWN0YWJsZSBmcm9tICcuL2lzU2VsZWN0YWJsZSc7XG5leHBvcnQgeyBfaXNTZWxlY3RhYmxlIGFzIGlzU2VsZWN0YWJsZSB9O1xuaW1wb3J0IF9pc1Nob3duIGZyb20gJy4vaXNTaG93bic7XG5leHBvcnQgeyBfaXNTaG93biBhcyBpc1Nob3duIH07XG5leHBvcnQgKiBmcm9tICcuL25vZGFzaCc7XG5pbXBvcnQgX3ByZXZlbnRJbnB1dEJsdXIgZnJvbSAnLi9wcmV2ZW50SW5wdXRCbHVyJztcbmV4cG9ydCB7IF9wcmV2ZW50SW5wdXRCbHVyIGFzIHByZXZlbnRJbnB1dEJsdXIgfTtcbmV4cG9ydCAqIGZyb20gJy4vc2l6ZSc7XG5pbXBvcnQgX3N0cmlwRGlhY3JpdGljcyBmcm9tICcuL3N0cmlwRGlhY3JpdGljcyc7XG5leHBvcnQgeyBfc3RyaXBEaWFjcml0aWNzIGFzIHN0cmlwRGlhY3JpdGljcyB9O1xuaW1wb3J0IF92YWxpZGF0ZVNlbGVjdGVkUHJvcENoYW5nZSBmcm9tICcuL3ZhbGlkYXRlU2VsZWN0ZWRQcm9wQ2hhbmdlJztcbmV4cG9ydCB7IF92YWxpZGF0ZVNlbGVjdGVkUHJvcENoYW5nZSBhcyB2YWxpZGF0ZVNlbGVjdGVkUHJvcENoYW5nZSB9O1xuaW1wb3J0IF93YXJuIGZyb20gJy4vd2Fybic7XG5leHBvcnQgeyBfd2FybiBhcyB3YXJuIH07IiwiLyoqXG4gKiBDaGVjayBpZiBhbiBpbnB1dCB0eXBlIGlzIHNlbGVjdGFibGUsIGJhc2VkIG9uIFdIQVRXRyBzcGVjLlxuICpcbiAqIFNlZTpcbiAqICAtIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIxMTc3NDg5L3NlbGVjdGlvbnN0YXJ0LXNlbGVjdGlvbmVuZC1vbi1pbnB1dC10eXBlLW51bWJlci1uby1sb25nZXItYWxsb3dlZC1pbi1jaHJvbWUvMjQxNzUzNTdcbiAqICAtIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2lucHV0Lmh0bWwjZG8tbm90LWFwcGx5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2VsZWN0YWJsZShpbnB1dE5vZGUpIHtcbiAgcmV0dXJuIGlucHV0Tm9kZS5zZWxlY3Rpb25TdGFydCAhPSBudWxsO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2hvd24ocHJvcHMpIHtcbiAgdmFyIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgbWluTGVuZ3RoID0gcHJvcHMubWluTGVuZ3RoLFxuICAgICAgc2hvd01lbnUgPSBwcm9wcy5zaG93TWVudSxcbiAgICAgIHRleHQgPSBwcm9wcy50ZXh0OyAvLyBJZiBtZW51IHZpc2liaWxpdHkgaXMgY29udHJvbGxlZCB2aWEgcHJvcHMsIHRoYXQgdmFsdWUgdGFrZXMgcHJlY2VkZW5jZS5cblxuICBpZiAob3BlbiB8fCBvcGVuID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcGVuO1xuICB9XG5cbiAgaWYgKHRleHQubGVuZ3RoIDwgbWluTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHNob3dNZW51O1xufSIsInZhciBpZENvdW50ZXIgPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgJiYgYXJyLmxlbmd0aCA/IGFyclswXSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5leHBvcnQgZnVuY3Rpb24gcGljayhvYmosIGtleXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykpIHtcbiAgICAgIHJlc3VsdFtrXSA9IG9ialtrXTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZUlkKHByZWZpeCkge1xuICBpZENvdW50ZXIgKz0gMTtcbiAgcmV0dXJuIChwcmVmaXggPT0gbnVsbCA/ICcnIDogU3RyaW5nKHByZWZpeCkpICsgaWRDb3VudGVyO1xufSAvLyBFeHBvcnQgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZXNQb2x5ZmlsbChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKGZ1bmN0aW9uIChhY2N1bSwga2V5KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIGFjY3VtLnB1c2gob2JqW2tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiBhY2N1bTtcbiAgfSwgW10pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24oT2JqZWN0LnZhbHVlcykgPyBPYmplY3QudmFsdWVzKG9iaikgOiB2YWx1ZXNQb2x5ZmlsbChvYmopO1xufSIsIi8qKlxuICogUHJldmVudCB0aGUgbWFpbiBpbnB1dCBmcm9tIGJsdXJyaW5nIHdoZW4gYSBtZW51IGl0ZW0gb3IgdGhlIGNsZWFyIGJ1dHRvbiBpc1xuICogY2xpY2tlZC4gKCMyMjYgJiAjMzEwKVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmV2ZW50SW5wdXRCbHVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBpc1NpemVMYXJnZShzaXplKSB7XG4gIHJldHVybiBzaXplID09PSAnbGFyZ2UnIHx8IHNpemUgPT09ICdsZyc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTaXplU21hbGwoc2l6ZSkge1xuICByZXR1cm4gc2l6ZSA9PT0gJ3NtYWxsJyB8fCBzaXplID09PSAnc20nO1xufSIsIi8qKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICogVGFrZW4gZnJvbTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85OTA5MDQvcmVtb3ZlLWFjY2VudHMtZGlhY3JpdGljcy1pbi1hLXN0cmluZy1pbi1qYXZhc2NyaXB0LzE4MzkxOTAxIzE4MzkxOTAxXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xudmFyIG1hcCA9IFt7XG4gIGJhc2U6ICdBJyxcbiAgbGV0dGVyczogXCJBXFx1MjRCNlxcdUZGMjFcXHhDMFxceEMxXFx4QzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx4QzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxceEM0XFx1MDFERVxcdTFFQTJcXHhDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXCJcbn0sIHtcbiAgYmFzZTogJ0FBJyxcbiAgbGV0dGVyczogXCJcXHVBNzMyXCJcbn0sIHtcbiAgYmFzZTogJ0FFJyxcbiAgbGV0dGVyczogXCJcXHhDNlxcdTAxRkNcXHUwMUUyXCJcbn0sIHtcbiAgYmFzZTogJ0FPJyxcbiAgbGV0dGVyczogXCJcXHVBNzM0XCJcbn0sIHtcbiAgYmFzZTogJ0FVJyxcbiAgbGV0dGVyczogXCJcXHVBNzM2XCJcbn0sIHtcbiAgYmFzZTogJ0FWJyxcbiAgbGV0dGVyczogXCJcXHVBNzM4XFx1QTczQVwiXG59LCB7XG4gIGJhc2U6ICdBWScsXG4gIGxldHRlcnM6IFwiXFx1QTczQ1wiXG59LCB7XG4gIGJhc2U6ICdCJyxcbiAgbGV0dGVyczogXCJCXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFcIlxufSwge1xuICBiYXNlOiAnQycsXG4gIGxldHRlcnM6IFwiQ1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xceEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRVwiXG59LCB7XG4gIGJhc2U6ICdEJyxcbiAgbGV0dGVyczogXCJEXFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OVxceEQwXCJcbn0sIHtcbiAgYmFzZTogJ0RaJyxcbiAgbGV0dGVyczogXCJcXHUwMUYxXFx1MDFDNFwiXG59LCB7XG4gIGJhc2U6ICdEeicsXG4gIGxldHRlcnM6IFwiXFx1MDFGMlxcdTAxQzVcIlxufSwge1xuICBiYXNlOiAnRScsXG4gIGxldHRlcnM6IFwiRVxcdTI0QkFcXHVGRjI1XFx4QzhcXHhDOVxceENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxceENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RVwiXG59LCB7XG4gIGJhc2U6ICdGJyxcbiAgbGV0dGVyczogXCJGXFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JcIlxufSwge1xuICBiYXNlOiAnRycsXG4gIGxldHRlcnM6IFwiR1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXCJcbn0sIHtcbiAgYmFzZTogJ0gnLFxuICBsZXR0ZXJzOiBcIkhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXCJcbn0sIHtcbiAgYmFzZTogJ0knLFxuICBsZXR0ZXJzOiBcIklcXHUyNEJFXFx1RkYyOVxceENDXFx4Q0RcXHhDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHhDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N1wiXG59LCB7XG4gIGJhc2U6ICdKJyxcbiAgbGV0dGVyczogXCJKXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OFwiXG59LCB7XG4gIGJhc2U6ICdLJyxcbiAgbGV0dGVyczogXCJLXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMlwiXG59LCB7XG4gIGJhc2U6ICdMJyxcbiAgbGV0dGVyczogXCJMXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBcIlxufSwge1xuICBiYXNlOiAnTEonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzdcIlxufSwge1xuICBiYXNlOiAnTGonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzhcIlxufSwge1xuICBiYXNlOiAnTScsXG4gIGxldHRlcnM6IFwiTVxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNcIlxufSwge1xuICBiYXNlOiAnTicsXG4gIGxldHRlcnM6IFwiTlxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHhEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRcIlxufSwge1xuICBiYXNlOiAnTkonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0FcIlxufSwge1xuICBiYXNlOiAnTmonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0JcIlxufSwge1xuICBiYXNlOiAnTycsXG4gIGxldHRlcnM6IFwiT1xcdTI0QzRcXHVGRjJGXFx4RDJcXHhEM1xceEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxceEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx4RDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx4RDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q1wiXG59LCB7XG4gIGJhc2U6ICdPSScsXG4gIGxldHRlcnM6IFwiXFx1MDFBMlwiXG59LCB7XG4gIGJhc2U6ICdPTycsXG4gIGxldHRlcnM6IFwiXFx1QTc0RVwiXG59LCB7XG4gIGJhc2U6ICdPVScsXG4gIGxldHRlcnM6IFwiXFx1MDIyMlwiXG59LCB7XG4gIGJhc2U6ICdPRScsXG4gIGxldHRlcnM6IFwiXFx4OENcXHUwMTUyXCJcbn0sIHtcbiAgYmFzZTogJ29lJyxcbiAgbGV0dGVyczogXCJcXHg5Q1xcdTAxNTNcIlxufSwge1xuICBiYXNlOiAnUCcsXG4gIGxldHRlcnM6IFwiUFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NFwiXG59LCB7XG4gIGJhc2U6ICdRJyxcbiAgbGV0dGVyczogXCJRXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFcIlxufSwge1xuICBiYXNlOiAnUicsXG4gIGxldHRlcnM6IFwiUlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJcIlxufSwge1xuICBiYXNlOiAnUycsXG4gIGxldHRlcnM6IFwiU1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRcIlxufSwge1xuICBiYXNlOiAnVCcsXG4gIGxldHRlcnM6IFwiVFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XCJcbn0sIHtcbiAgYmFzZTogJ1RaJyxcbiAgbGV0dGVyczogXCJcXHVBNzI4XCJcbn0sIHtcbiAgYmFzZTogJ1UnLFxuICBsZXR0ZXJzOiBcIlVcXHUyNENBXFx1RkYzNVxceEQ5XFx4REFcXHhEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx4RENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XCJcbn0sIHtcbiAgYmFzZTogJ1YnLFxuICBsZXR0ZXJzOiBcIlZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XCJcbn0sIHtcbiAgYmFzZTogJ1ZZJyxcbiAgbGV0dGVyczogXCJcXHVBNzYwXCJcbn0sIHtcbiAgYmFzZTogJ1cnLFxuICBsZXR0ZXJzOiBcIldcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJcIlxufSwge1xuICBiYXNlOiAnWCcsXG4gIGxldHRlcnM6IFwiWFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENcIlxufSwge1xuICBiYXNlOiAnWScsXG4gIGxldHRlcnM6IFwiWVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxceEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRVwiXG59LCB7XG4gIGJhc2U6ICdaJyxcbiAgbGV0dGVyczogXCJaXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2MlwiXG59LCB7XG4gIGJhc2U6ICdhJyxcbiAgbGV0dGVyczogXCJhXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx4RTBcXHhFMVxceEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxceEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHhFNFxcdTAxREZcXHUxRUEzXFx4RTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MFwiXG59LCB7XG4gIGJhc2U6ICdhYScsXG4gIGxldHRlcnM6IFwiXFx1QTczM1wiXG59LCB7XG4gIGJhc2U6ICdhZScsXG4gIGxldHRlcnM6IFwiXFx4RTZcXHUwMUZEXFx1MDFFM1wiXG59LCB7XG4gIGJhc2U6ICdhbycsXG4gIGxldHRlcnM6IFwiXFx1QTczNVwiXG59LCB7XG4gIGJhc2U6ICdhdScsXG4gIGxldHRlcnM6IFwiXFx1QTczN1wiXG59LCB7XG4gIGJhc2U6ICdhdicsXG4gIGxldHRlcnM6IFwiXFx1QTczOVxcdUE3M0JcIlxufSwge1xuICBiYXNlOiAnYXknLFxuICBsZXR0ZXJzOiBcIlxcdUE3M0RcIlxufSwge1xuICBiYXNlOiAnYicsXG4gIGxldHRlcnM6IFwiYlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXCJcbn0sIHtcbiAgYmFzZTogJ2MnLFxuICBsZXR0ZXJzOiBcImNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHhFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XCJcbn0sIHtcbiAgYmFzZTogJ2QnLFxuICBsZXR0ZXJzOiBcImRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXCJcbn0sIHtcbiAgYmFzZTogJ2R6JyxcbiAgbGV0dGVyczogXCJcXHUwMUYzXFx1MDFDNlwiXG59LCB7XG4gIGJhc2U6ICdlJyxcbiAgbGV0dGVyczogXCJlXFx1MjRENFxcdUZGNDVcXHhFOFxceEU5XFx4RUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx4RUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERFwiXG59LCB7XG4gIGJhc2U6ICdmJyxcbiAgbGV0dGVyczogXCJmXFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NcIlxufSwge1xuICBiYXNlOiAnZycsXG4gIGxldHRlcnM6IFwiZ1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXCJcbn0sIHtcbiAgYmFzZTogJ2gnLFxuICBsZXR0ZXJzOiBcImhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NVwiXG59LCB7XG4gIGJhc2U6ICdodicsXG4gIGxldHRlcnM6IFwiXFx1MDE5NVwiXG59LCB7XG4gIGJhc2U6ICdpJyxcbiAgbGV0dGVyczogXCJpXFx1MjREOFxcdUZGNDlcXHhFQ1xceEVEXFx4RUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHhFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFcIlxufSwge1xuICBiYXNlOiAnaicsXG4gIGxldHRlcnM6IFwialxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XCJcbn0sIHtcbiAgYmFzZTogJ2snLFxuICBsZXR0ZXJzOiBcImtcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXCJcbn0sIHtcbiAgYmFzZTogJ2wnLFxuICBsZXR0ZXJzOiBcImxcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDdcIlxufSwge1xuICBiYXNlOiAnbGonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzlcIlxufSwge1xuICBiYXNlOiAnbScsXG4gIGxldHRlcnM6IFwibVxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZcIlxufSwge1xuICBiYXNlOiAnbicsXG4gIGxldHRlcnM6IFwiblxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHhGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XCJcbn0sIHtcbiAgYmFzZTogJ25qJyxcbiAgbGV0dGVyczogXCJcXHUwMUNDXCJcbn0sIHtcbiAgYmFzZTogJ28nLFxuICBsZXR0ZXJzOiBcIm9cXHUyNERFXFx1RkY0RlxceEYyXFx4RjNcXHhGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHhGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxceEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxceEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVcIlxufSwge1xuICBiYXNlOiAnb2knLFxuICBsZXR0ZXJzOiBcIlxcdTAxQTNcIlxufSwge1xuICBiYXNlOiAnb3UnLFxuICBsZXR0ZXJzOiBcIlxcdTAyMjNcIlxufSwge1xuICBiYXNlOiAnb28nLFxuICBsZXR0ZXJzOiBcIlxcdUE3NEZcIlxufSwge1xuICBiYXNlOiAncCcsXG4gIGxldHRlcnM6IFwicFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NVwiXG59LCB7XG4gIGJhc2U6ICdxJyxcbiAgbGV0dGVyczogXCJxXFx1MjRFMFxcdUZGNTFcXHUwMjRCXFx1QTc1N1xcdUE3NTlcIlxufSwge1xuICBiYXNlOiAncicsXG4gIGxldHRlcnM6IFwiclxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNcIlxufSwge1xuICBiYXNlOiAncycsXG4gIGxldHRlcnM6IFwic1xcdTI0RTJcXHVGRjUzXFx4REZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5QlwiXG59LCB7XG4gIGJhc2U6ICd0JyxcbiAgbGV0dGVyczogXCJ0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XCJcbn0sIHtcbiAgYmFzZTogJ3R6JyxcbiAgbGV0dGVyczogXCJcXHVBNzI5XCJcbn0sIHtcbiAgYmFzZTogJ3UnLFxuICBsZXR0ZXJzOiBcInVcXHUyNEU0XFx1RkY1NVxceEY5XFx4RkFcXHhGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx4RkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XCJcbn0sIHtcbiAgYmFzZTogJ3YnLFxuICBsZXR0ZXJzOiBcInZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXCJcbn0sIHtcbiAgYmFzZTogJ3Z5JyxcbiAgbGV0dGVyczogXCJcXHVBNzYxXCJcbn0sIHtcbiAgYmFzZTogJ3cnLFxuICBsZXR0ZXJzOiBcIndcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXCJcbn0sIHtcbiAgYmFzZTogJ3gnLFxuICBsZXR0ZXJzOiBcInhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXCJcbn0sIHtcbiAgYmFzZTogJ3knLFxuICBsZXR0ZXJzOiBcInlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHhGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHhGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRlwiXG59LCB7XG4gIGJhc2U6ICd6JyxcbiAgbGV0dGVyczogXCJ6XFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M1wiXG59XTtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG52YXIgZGlhY3JpdGljc01hcCA9IHt9O1xuXG5mb3IgKHZhciBpaSA9IDA7IGlpIDwgbWFwLmxlbmd0aDsgaWkrKykge1xuICB2YXIgbGV0dGVycyA9IG1hcFtpaV0ubGV0dGVycztcblxuICBmb3IgKHZhciBqaiA9IDA7IGpqIDwgbGV0dGVycy5sZW5ndGg7IGpqKyspIHtcbiAgICBkaWFjcml0aWNzTWFwW2xldHRlcnNbampdXSA9IG1hcFtpaV0uYmFzZTtcbiAgfVxufSAvLyBcIndoYXQ/XCIgdmVyc2lvbiAuLi4gaHR0cDovL2pzcGVyZi5jb20vZGlhY3JpdGljcy8xMlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0cmlwRGlhY3JpdGljcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZGXS9nLCAnJykgLy8gUmVtb3ZlIGNvbWJpbmluZyBkaWFjcml0aWNzXG5cbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXggKi9cbiAgLnJlcGxhY2UoL1teXFx1MDAwMC1cXHUwMDdFXS9nLCBmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBkaWFjcml0aWNzTWFwW2FdIHx8IGE7XG4gIH0pO1xufSIsImltcG9ydCB3YXJuIGZyb20gJy4vd2Fybic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZVNlbGVjdGVkUHJvcENoYW5nZShwcmV2U2VsZWN0ZWQsIHNlbGVjdGVkKSB7XG4gIHZhciB1bmNvbnRyb2xsZWRUb0NvbnRyb2xsZWQgPSAhcHJldlNlbGVjdGVkICYmIHNlbGVjdGVkO1xuICB2YXIgY29udHJvbGxlZFRvVW5jb250cm9sbGVkID0gcHJldlNlbGVjdGVkICYmICFzZWxlY3RlZDtcbiAgdmFyIGZyb20sIHRvLCBwcmVjZWRlbnQ7XG5cbiAgaWYgKHVuY29udHJvbGxlZFRvQ29udHJvbGxlZCkge1xuICAgIGZyb20gPSAndW5jb250cm9sbGVkJztcbiAgICB0byA9ICdjb250cm9sbGVkJztcbiAgICBwcmVjZWRlbnQgPSAnYW4nO1xuICB9IGVsc2Uge1xuICAgIGZyb20gPSAnY29udHJvbGxlZCc7XG4gICAgdG8gPSAndW5jb250cm9sbGVkJztcbiAgICBwcmVjZWRlbnQgPSAnYSc7XG4gIH1cblxuICB2YXIgbWVzc2FnZSA9IFwiWW91IGFyZSBjaGFuZ2luZyBcIiArIHByZWNlZGVudCArIFwiIFwiICsgZnJvbSArIFwiIHR5cGVhaGVhZCB0byBiZSBcIiArIHRvICsgXCIuIFwiICsgKFwiSW5wdXQgZWxlbWVudHMgc2hvdWxkIG5vdCBzd2l0Y2ggZnJvbSBcIiArIGZyb20gKyBcIiB0byBcIiArIHRvICsgXCIgKG9yIHZpY2UgdmVyc2EpLiBcIikgKyAnRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBlbGVtZW50IGZvciB0aGUgJyArICdsaWZldGltZSBvZiB0aGUgY29tcG9uZW50Lic7XG4gIHdhcm4oISh1bmNvbnRyb2xsZWRUb0NvbnRyb2xsZWQgfHwgY29udHJvbGxlZFRvVW5jb250cm9sbGVkKSwgbWVzc2FnZSk7XG59IiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG52YXIgd2FybmVkID0ge307XG4vKipcbiAqIENvcGllZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9yZWFjdC1yb3V0ZXIvYmxvYi9tYXN0ZXIvbW9kdWxlcy9yb3V0ZXJXYXJuaW5nLmpzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybihmYWxzZVRvV2FybiwgbWVzc2FnZSkge1xuICAvLyBPbmx5IGlzc3VlIGRlcHJlY2F0aW9uIHdhcm5pbmdzIG9uY2UuXG4gIGlmICghZmFsc2VUb1dhcm4gJiYgbWVzc2FnZS5pbmRleE9mKCdkZXByZWNhdGVkJykgIT09IC0xKSB7XG4gICAgaWYgKHdhcm5lZFttZXNzYWdlXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZFttZXNzYWdlXSA9IHRydWU7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB3YXJuaW5nLmFwcGx5KHZvaWQgMCwgW2ZhbHNlVG9XYXJuLCBcIltyZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkXSBcIiArIG1lc3NhZ2VdLmNvbmNhdChhcmdzKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXRXYXJuZWQoKSB7XG4gIHdhcm5lZCA9IHt9O1xufSIsImltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVDb250ZXh0IGZyb20gJ2NyZWF0ZS1yZWFjdC1jb250ZXh0JztcbmV4cG9ydCB2YXIgTWFuYWdlclJlZmVyZW5jZU5vZGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IHZhciBNYW5hZ2VyUmVmZXJlbmNlTm9kZVNldHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbnZhciBNYW5hZ2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKE1hbmFnZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1hbmFnZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVmZXJlbmNlTm9kZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldFJlZmVyZW5jZU5vZGVcIiwgZnVuY3Rpb24gKG5ld1JlZmVyZW5jZU5vZGUpIHtcbiAgICAgIGlmIChuZXdSZWZlcmVuY2VOb2RlICYmIF90aGlzLnJlZmVyZW5jZU5vZGUgIT09IG5ld1JlZmVyZW5jZU5vZGUpIHtcbiAgICAgICAgX3RoaXMucmVmZXJlbmNlTm9kZSA9IG5ld1JlZmVyZW5jZU5vZGU7XG5cbiAgICAgICAgX3RoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlZmVyZW5jZU5vZGUgPSBudWxsO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFuYWdlclJlZmVyZW5jZU5vZGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5yZWZlcmVuY2VOb2RlXG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChNYW5hZ2VyUmVmZXJlbmNlTm9kZVNldHRlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnNldFJlZmVyZW5jZU5vZGVcbiAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gIH07XG5cbiAgcmV0dXJuIE1hbmFnZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCB7IE1hbmFnZXIgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IGRlZXBFcXVhbCBmcm9tIFwiZGVlcC1lcXVhbFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcHBlckpTIGZyb20gJ3BvcHBlci5qcyc7XG5pbXBvcnQgeyBNYW5hZ2VyUmVmZXJlbmNlTm9kZUNvbnRleHQgfSBmcm9tICcuL01hbmFnZXInO1xuaW1wb3J0IHsgdW53cmFwQXJyYXksIHNldFJlZiwgc2hhbGxvd0VxdWFsIH0gZnJvbSAnLi91dGlscyc7XG52YXIgaW5pdGlhbFN0eWxlID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICBvcGFjaXR5OiAwLFxuICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbn07XG52YXIgaW5pdGlhbEFycm93U3R5bGUgPSB7fTtcbmV4cG9ydCB2YXIgSW5uZXJQb3BwZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW5uZXJQb3BwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIElubmVyUG9wcGVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXRlXCIsIHtcbiAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgIHBsYWNlbWVudDogdW5kZWZpbmVkXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicG9wcGVySW5zdGFuY2VcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwb3BwZXJOb2RlXCIsIG51bGwpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImFycm93Tm9kZVwiLCBudWxsKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzZXRQb3BwZXJOb2RlXCIsIGZ1bmN0aW9uIChwb3BwZXJOb2RlKSB7XG4gICAgICBpZiAoIXBvcHBlck5vZGUgfHwgX3RoaXMucG9wcGVyTm9kZSA9PT0gcG9wcGVyTm9kZSkgcmV0dXJuO1xuICAgICAgc2V0UmVmKF90aGlzLnByb3BzLmlubmVyUmVmLCBwb3BwZXJOb2RlKTtcbiAgICAgIF90aGlzLnBvcHBlck5vZGUgPSBwb3BwZXJOb2RlO1xuXG4gICAgICBfdGhpcy51cGRhdGVQb3BwZXJJbnN0YW5jZSgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldEFycm93Tm9kZVwiLCBmdW5jdGlvbiAoYXJyb3dOb2RlKSB7XG4gICAgICBfdGhpcy5hcnJvd05vZGUgPSBhcnJvd05vZGU7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidXBkYXRlU3RhdGVNb2RpZmllclwiLCB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgb3JkZXI6IDkwMCxcbiAgICAgIGZuOiBmdW5jdGlvbiBmbihkYXRhKSB7XG4gICAgICAgIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZXRPcHRpb25zXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsYWNlbWVudDogX3RoaXMucHJvcHMucGxhY2VtZW50LFxuICAgICAgICBldmVudHNFbmFibGVkOiBfdGhpcy5wcm9wcy5ldmVudHNFbmFibGVkLFxuICAgICAgICBwb3NpdGlvbkZpeGVkOiBfdGhpcy5wcm9wcy5wb3NpdGlvbkZpeGVkLFxuICAgICAgICBtb2RpZmllcnM6IF9leHRlbmRzKHt9LCBfdGhpcy5wcm9wcy5tb2RpZmllcnMsIHtcbiAgICAgICAgICBhcnJvdzogX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLm1vZGlmaWVycyAmJiBfdGhpcy5wcm9wcy5tb2RpZmllcnMuYXJyb3csIHtcbiAgICAgICAgICAgIGVuYWJsZWQ6ICEhX3RoaXMuYXJyb3dOb2RlLFxuICAgICAgICAgICAgZWxlbWVudDogX3RoaXMuYXJyb3dOb2RlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYXBwbHlTdHlsZToge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZVN0YXRlTW9kaWZpZXI6IF90aGlzLnVwZGF0ZVN0YXRlTW9kaWZpZXJcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0UG9wcGVyU3R5bGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICFfdGhpcy5wb3BwZXJOb2RlIHx8ICFfdGhpcy5zdGF0ZS5kYXRhID8gaW5pdGlhbFN0eWxlIDogX2V4dGVuZHMoe1xuICAgICAgICBwb3NpdGlvbjogX3RoaXMuc3RhdGUuZGF0YS5vZmZzZXRzLnBvcHBlci5wb3NpdGlvblxuICAgICAgfSwgX3RoaXMuc3RhdGUuZGF0YS5zdHlsZXMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldFBvcHBlclBsYWNlbWVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIV90aGlzLnN0YXRlLmRhdGEgPyB1bmRlZmluZWQgOiBfdGhpcy5zdGF0ZS5wbGFjZW1lbnQ7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0QXJyb3dTdHlsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIV90aGlzLmFycm93Tm9kZSB8fCAhX3RoaXMuc3RhdGUuZGF0YSA/IGluaXRpYWxBcnJvd1N0eWxlIDogX3RoaXMuc3RhdGUuZGF0YS5hcnJvd1N0eWxlcztcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZXRPdXRPZkJvdW5kYXJpZXNTdGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuZGF0YSA/IF90aGlzLnN0YXRlLmRhdGEuaGlkZSA6IHVuZGVmaW5lZDtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkZXN0cm95UG9wcGVySW5zdGFuY2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5wb3BwZXJJbnN0YW5jZSkgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5wb3BwZXJJbnN0YW5jZS5kZXN0cm95KCk7XG5cbiAgICAgIF90aGlzLnBvcHBlckluc3RhbmNlID0gbnVsbDtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ1cGRhdGVQb3BwZXJJbnN0YW5jZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5kZXN0cm95UG9wcGVySW5zdGFuY2UoKTtcblxuICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICAgIHBvcHBlck5vZGUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUucG9wcGVyTm9kZTtcblxuICAgICAgdmFyIHJlZmVyZW5jZUVsZW1lbnQgPSBfdGhpcy5wcm9wcy5yZWZlcmVuY2VFbGVtZW50O1xuICAgICAgaWYgKCFyZWZlcmVuY2VFbGVtZW50IHx8ICFwb3BwZXJOb2RlKSByZXR1cm47XG4gICAgICBfdGhpcy5wb3BwZXJJbnN0YW5jZSA9IG5ldyBQb3BwZXJKUyhyZWZlcmVuY2VFbGVtZW50LCBwb3BwZXJOb2RlLCBfdGhpcy5nZXRPcHRpb25zKCkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNjaGVkdWxlVXBkYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgICBfdGhpcy5wb3BwZXJJbnN0YW5jZS5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IElubmVyUG9wcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgLy8gSWYgdGhlIFBvcHBlci5qcyBvcHRpb25zIGhhdmUgY2hhbmdlZCwgdXBkYXRlIHRoZSBpbnN0YW5jZSAoZGVzdHJveSArIGNyZWF0ZSlcbiAgICBpZiAodGhpcy5wcm9wcy5wbGFjZW1lbnQgIT09IHByZXZQcm9wcy5wbGFjZW1lbnQgfHwgdGhpcy5wcm9wcy5yZWZlcmVuY2VFbGVtZW50ICE9PSBwcmV2UHJvcHMucmVmZXJlbmNlRWxlbWVudCB8fCB0aGlzLnByb3BzLnBvc2l0aW9uRml4ZWQgIT09IHByZXZQcm9wcy5wb3NpdGlvbkZpeGVkIHx8ICFkZWVwRXF1YWwodGhpcy5wcm9wcy5tb2RpZmllcnMsIHByZXZQcm9wcy5tb2RpZmllcnMsIHtcbiAgICAgIHN0cmljdDogdHJ1ZVxuICAgIH0pKSB7XG4gICAgICAvLyBkZXZlbG9wIG9ubHkgY2hlY2sgdGhhdCBtb2RpZmllcnMgaXNuJ3QgYmVpbmcgdXBkYXRlZCBuZWVkbGVzc2x5XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5tb2RpZmllcnMgIT09IHByZXZQcm9wcy5tb2RpZmllcnMgJiYgdGhpcy5wcm9wcy5tb2RpZmllcnMgIT0gbnVsbCAmJiBwcmV2UHJvcHMubW9kaWZpZXJzICE9IG51bGwgJiYgc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMubW9kaWZpZXJzLCBwcmV2UHJvcHMubW9kaWZpZXJzKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIidtb2RpZmllcnMnIHByb3AgcmVmZXJlbmNlIHVwZGF0ZWQgZXZlbiB0aG91Z2ggYWxsIHZhbHVlcyBhcHBlYXIgdGhlIHNhbWUuXFxuQ29uc2lkZXIgbWVtb2l6aW5nIHRoZSAnbW9kaWZpZXJzJyBvYmplY3QgdG8gYXZvaWQgbmVlZGxlc3MgcmVuZGVyaW5nLlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVBvcHBlckluc3RhbmNlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmV2ZW50c0VuYWJsZWQgIT09IHByZXZQcm9wcy5ldmVudHNFbmFibGVkICYmIHRoaXMucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgIHRoaXMucHJvcHMuZXZlbnRzRW5hYmxlZCA/IHRoaXMucG9wcGVySW5zdGFuY2UuZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSA6IHRoaXMucG9wcGVySW5zdGFuY2UuZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfSAvLyBBIHBsYWNlbWVudCBkaWZmZXJlbmNlIGluIHN0YXRlIG1lYW5zIHBvcHBlciBkZXRlcm1pbmVkIGEgbmV3IHBsYWNlbWVudFxuICAgIC8vIGFwYXJ0IGZyb20gdGhlIHByb3BzIHZhbHVlLiBCeSB0aGUgdGltZSB0aGUgcG9wcGVyIGVsZW1lbnQgaXMgcmVuZGVyZWQgd2l0aFxuICAgIC8vIHRoZSBuZXcgcG9zaXRpb24gUG9wcGVyIGhhcyBhbHJlYWR5IG1lYXN1cmVkIGl0LCBpZiB0aGUgcGxhY2UgY2hhbmdlIHRyaWdnZXJzXG4gICAgLy8gYSBzaXplIGNoYW5nZSBpdCB3aWxsIHJlc3VsdCBpbiBhIG1pc2FsaWduZWQgcG9wcGVyLiBTbyB3ZSBzY2hlZHVsZSBhbiB1cGRhdGUgdG8gYmUgc3VyZS5cblxuXG4gICAgaWYgKHByZXZTdGF0ZS5wbGFjZW1lbnQgIT09IHRoaXMuc3RhdGUucGxhY2VtZW50KSB7XG4gICAgICB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHNldFJlZih0aGlzLnByb3BzLmlubmVyUmVmLCBudWxsKTtcbiAgICB0aGlzLmRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHVud3JhcEFycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKHtcbiAgICAgIHJlZjogdGhpcy5zZXRQb3BwZXJOb2RlLFxuICAgICAgc3R5bGU6IHRoaXMuZ2V0UG9wcGVyU3R5bGUoKSxcbiAgICAgIHBsYWNlbWVudDogdGhpcy5nZXRQb3BwZXJQbGFjZW1lbnQoKSxcbiAgICAgIG91dE9mQm91bmRhcmllczogdGhpcy5nZXRPdXRPZkJvdW5kYXJpZXNTdGF0ZSgpLFxuICAgICAgc2NoZWR1bGVVcGRhdGU6IHRoaXMuc2NoZWR1bGVVcGRhdGUsXG4gICAgICBhcnJvd1Byb3BzOiB7XG4gICAgICAgIHJlZjogdGhpcy5zZXRBcnJvd05vZGUsXG4gICAgICAgIHN0eWxlOiB0aGlzLmdldEFycm93U3R5bGUoKVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBJbm5lclBvcHBlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KElubmVyUG9wcGVyLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG4gIHJlZmVyZW5jZUVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgcG9zaXRpb25GaXhlZDogZmFsc2Vcbn0pO1xuXG52YXIgcGxhY2VtZW50cyA9IFBvcHBlckpTLnBsYWNlbWVudHM7XG5leHBvcnQgeyBwbGFjZW1lbnRzIH07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3BwZXIoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IF9yZWYucmVmZXJlbmNlRWxlbWVudCxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wicmVmZXJlbmNlRWxlbWVudFwiXSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFuYWdlclJlZmVyZW5jZU5vZGVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAocmVmZXJlbmNlTm9kZSkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KElubmVyUG9wcGVyLCBfZXh0ZW5kcyh7XG4gICAgICByZWZlcmVuY2VFbGVtZW50OiByZWZlcmVuY2VFbGVtZW50ICE9PSB1bmRlZmluZWQgPyByZWZlcmVuY2VFbGVtZW50IDogcmVmZXJlbmNlTm9kZVxuICAgIH0sIHByb3BzKSk7XG4gIH0pO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCB7IE1hbmFnZXJSZWZlcmVuY2VOb2RlU2V0dGVyQ29udGV4dCB9IGZyb20gJy4vTWFuYWdlcic7XG5pbXBvcnQgeyBzYWZlSW52b2tlLCB1bndyYXBBcnJheSwgc2V0UmVmIH0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBJbm5lclJlZmVyZW5jZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShJbm5lclJlZmVyZW5jZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5uZXJSZWZlcmVuY2UoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVmSGFuZGxlclwiLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgc2V0UmVmKF90aGlzLnByb3BzLmlubmVyUmVmLCBub2RlKTtcbiAgICAgIHNhZmVJbnZva2UoX3RoaXMucHJvcHMuc2V0UmVmZXJlbmNlTm9kZSwgbm9kZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5uZXJSZWZlcmVuY2UucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHNldFJlZih0aGlzLnByb3BzLmlubmVyUmVmLCBudWxsKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHdhcm5pbmcoQm9vbGVhbih0aGlzLnByb3BzLnNldFJlZmVyZW5jZU5vZGUpLCAnYFJlZmVyZW5jZWAgc2hvdWxkIG5vdCBiZSB1c2VkIG91dHNpZGUgb2YgYSBgTWFuYWdlcmAgY29tcG9uZW50LicpO1xuICAgIHJldHVybiB1bndyYXBBcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKSh7XG4gICAgICByZWY6IHRoaXMucmVmSGFuZGxlclxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBJbm5lclJlZmVyZW5jZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVmZXJlbmNlKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE1hbmFnZXJSZWZlcmVuY2VOb2RlU2V0dGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHNldFJlZmVyZW5jZU5vZGUpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbm5lclJlZmVyZW5jZSwgX2V4dGVuZHMoe1xuICAgICAgc2V0UmVmZXJlbmNlTm9kZTogc2V0UmVmZXJlbmNlTm9kZVxuICAgIH0sIHByb3BzKSk7XG4gIH0pO1xufSIsIi8vIFB1YmxpYyBjb21wb25lbnRzXG5pbXBvcnQgUG9wcGVyLCB7IHBsYWNlbWVudHMgfSBmcm9tICcuL1BvcHBlcic7XG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL01hbmFnZXInO1xuaW1wb3J0IFJlZmVyZW5jZSBmcm9tICcuL1JlZmVyZW5jZSc7XG5leHBvcnQgeyBQb3BwZXIsIHBsYWNlbWVudHMsIE1hbmFnZXIsIFJlZmVyZW5jZSB9OyAvLyBQdWJsaWMgdHlwZXMiLCIvKipcbiAqIFRha2VzIGFuIGFyZ3VtZW50IGFuZCBpZiBpdCdzIGFuIGFycmF5LCByZXR1cm5zIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBhcnJheSxcbiAqIG90aGVyd2lzZSByZXR1cm5zIHRoZSBhcmd1bWVudC4gVXNlZCBmb3IgUHJlYWN0IGNvbXBhdGliaWxpdHkuXG4gKi9cbmV4cG9ydCB2YXIgdW53cmFwQXJyYXkgPSBmdW5jdGlvbiB1bndyYXBBcnJheShhcmcpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKSA/IGFyZ1swXSA6IGFyZztcbn07XG4vKipcbiAqIFRha2VzIGEgbWF5YmUtdW5kZWZpbmVkIGZ1bmN0aW9uIGFuZCBhcmJpdHJhcnkgYXJncyBhbmQgaW52b2tlcyB0aGUgZnVuY3Rpb25cbiAqIG9ubHkgaWYgaXQgaXMgZGVmaW5lZC5cbiAqL1xuXG5leHBvcnQgdmFyIHNhZmVJbnZva2UgPSBmdW5jdGlvbiBzYWZlSW52b2tlKGZuKSB7XG4gIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICB9XG59O1xuLyoqXG4gKiBEb2VzIGEgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBvZiB0d28gb2JqZWN0cyBieSBjb21wYXJpbmcgdGhlIHJlZmVyZW5jZVxuICogZXF1YWxpdHkgb2YgZWFjaCB2YWx1ZS5cbiAqL1xuXG5leHBvcnQgdmFyIHNoYWxsb3dFcXVhbCA9IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoYktleXMubGVuZ3RoICE9PSBhS2V5cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGFLZXlzW2ldO1xuXG4gICAgaWYgKG9iakFba2V5XSAhPT0gb2JqQltrZXldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuLyoqXG4gKiBTZXRzIGEgcmVmIHVzaW5nIGVpdGhlciBhIHJlZiBjYWxsYmFjayBvciBhIHJlZiBvYmplY3RcbiAqL1xuXG5leHBvcnQgdmFyIHNldFJlZiA9IGZ1bmN0aW9uIHNldFJlZihyZWYsIG5vZGUpIHtcbiAgLy8gaWYgaXRzIGEgZnVuY3Rpb24gY2FsbCBpdFxuICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHNhZmVJbnZva2UocmVmLCBub2RlKTtcbiAgfSAvLyBvdGhlcndpc2Ugd2Ugc2hvdWxkIHRyZWF0IGl0IGFzIGEgcmVmIG9iamVjdFxuICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgcmVmLmN1cnJlbnQgPSBub2RlO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZsYWdzKCkge1xuXHRpZiAodGhpcyAhPSBudWxsICYmIHRoaXMgIT09ICRPYmplY3QodGhpcykpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignUmVnRXhwLnByb3RvdHlwZS5mbGFncyBnZXR0ZXIgY2FsbGVkIG9uIG5vbi1vYmplY3QnKTtcblx0fVxuXHR2YXIgcmVzdWx0ID0gJyc7XG5cdGlmICh0aGlzLmdsb2JhbCkge1xuXHRcdHJlc3VsdCArPSAnZyc7XG5cdH1cblx0aWYgKHRoaXMuaWdub3JlQ2FzZSkge1xuXHRcdHJlc3VsdCArPSAnaSc7XG5cdH1cblx0aWYgKHRoaXMubXVsdGlsaW5lKSB7XG5cdFx0cmVzdWx0ICs9ICdtJztcblx0fVxuXHRpZiAodGhpcy5kb3RBbGwpIHtcblx0XHRyZXN1bHQgKz0gJ3MnO1xuXHR9XG5cdGlmICh0aGlzLnVuaWNvZGUpIHtcblx0XHRyZXN1bHQgKz0gJ3UnO1xuXHR9XG5cdGlmICh0aGlzLnN0aWNreSkge1xuXHRcdHJlc3VsdCArPSAneSc7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kJyk7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBzaGltID0gcmVxdWlyZSgnLi9zaGltJyk7XG5cbnZhciBmbGFnc0JvdW5kID0gY2FsbEJpbmQoaW1wbGVtZW50YXRpb24pO1xuXG5kZWZpbmUoZmxhZ3NCb3VuZCwge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhZ3NCb3VuZDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJykuc3VwcG9ydHNEZXNjcmlwdG9ycztcbnZhciAkZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0aWYgKCFzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1JlZ0V4cC5wcm90b3R5cGUuZmxhZ3MgcmVxdWlyZXMgYSB0cnVlIEVTNSBlbnZpcm9ubWVudCB0aGF0IHN1cHBvcnRzIHByb3BlcnR5IGRlc2NyaXB0b3JzJyk7XG5cdH1cblx0aWYgKCgvYS9taWcpLmZsYWdzID09PSAnZ2ltJykge1xuXHRcdHZhciBkZXNjcmlwdG9yID0gJGdPUEQoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJyk7XG5cdFx0aWYgKGRlc2NyaXB0b3IgJiYgdHlwZW9mIGRlc2NyaXB0b3IuZ2V0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiAoL2EvKS5kb3RBbGwgPT09ICdib29sZWFuJykge1xuXHRcdFx0cmV0dXJuIGRlc2NyaXB0b3IuZ2V0O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaW1wbGVtZW50YXRpb247XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VwcG9ydHNEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJykuc3VwcG9ydHNEZXNjcmlwdG9ycztcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBUeXBlRXJyID0gVHlwZUVycm9yO1xudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIHJlZ2V4ID0gL2EvO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1GbGFncygpIHtcblx0aWYgKCFzdXBwb3J0c0Rlc2NyaXB0b3JzIHx8ICFnZXRQcm90bykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyKCdSZWdFeHAucHJvdG90eXBlLmZsYWdzIHJlcXVpcmVzIGEgdHJ1ZSBFUzUgZW52aXJvbm1lbnQgdGhhdCBzdXBwb3J0cyBwcm9wZXJ0eSBkZXNjcmlwdG9ycycpO1xuXHR9XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdHZhciBwcm90byA9IGdldFByb3RvKHJlZ2V4KTtcblx0dmFyIGRlc2NyaXB0b3IgPSBnT1BEKHByb3RvLCAnZmxhZ3MnKTtcblx0aWYgKCFkZXNjcmlwdG9yIHx8IGRlc2NyaXB0b3IuZ2V0ICE9PSBwb2x5ZmlsbCkge1xuXHRcdGRlZmluZVByb3BlcnR5KHByb3RvLCAnZmxhZ3MnLCB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdGdldDogcG9seWZpbGxcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gcG9seWZpbGw7XG59O1xuIiwiaW1wb3J0IGNvbXB1dGUgZnJvbSAnY29tcHV0ZS1zY3JvbGwtaW50by12aWV3JztcblxuZnVuY3Rpb24gaXNPcHRpb25zT2JqZWN0KG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMgPT09IE9iamVjdChvcHRpb25zKSAmJiBPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggIT09IDA7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRCZWhhdmlvcihhY3Rpb25zLCBiZWhhdmlvcikge1xuICBpZiAoYmVoYXZpb3IgPT09IHZvaWQgMCkge1xuICAgIGJlaGF2aW9yID0gJ2F1dG8nO1xuICB9XG5cbiAgdmFyIGNhblNtb290aFNjcm9sbCA9ICgnc2Nyb2xsQmVoYXZpb3InIGluIGRvY3VtZW50LmJvZHkuc3R5bGUpO1xuICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZWwgPSBfcmVmLmVsLFxuICAgICAgICB0b3AgPSBfcmVmLnRvcCxcbiAgICAgICAgbGVmdCA9IF9yZWYubGVmdDtcblxuICAgIGlmIChlbC5zY3JvbGwgJiYgY2FuU21vb3RoU2Nyb2xsKSB7XG4gICAgICBlbC5zY3JvbGwoe1xuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgYmVoYXZpb3I6IGJlaGF2aW9yXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgZWwuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSBmYWxzZSkge1xuICAgIHJldHVybiB7XG4gICAgICBibG9jazogJ2VuZCcsXG4gICAgICBpbmxpbmU6ICduZWFyZXN0J1xuICAgIH07XG4gIH1cblxuICBpZiAoaXNPcHRpb25zT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJsb2NrOiAnc3RhcnQnLFxuICAgIGlubGluZTogJ25lYXJlc3QnXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KHRhcmdldCwgb3B0aW9ucykge1xuICB2YXIgdGFyZ2V0SXNEZXRhY2hlZCA9ICF0YXJnZXQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGFyZ2V0KTtcblxuICBpZiAoaXNPcHRpb25zT2JqZWN0KG9wdGlvbnMpICYmIHR5cGVvZiBvcHRpb25zLmJlaGF2aW9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuYmVoYXZpb3IodGFyZ2V0SXNEZXRhY2hlZCA/IFtdIDogY29tcHV0ZSh0YXJnZXQsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGlmICh0YXJnZXRJc0RldGFjaGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNvbXB1dGVPcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgcmV0dXJuIGRlZmF1bHRCZWhhdmlvcihjb21wdXRlKHRhcmdldCwgY29tcHV0ZU9wdGlvbnMpLCBjb21wdXRlT3B0aW9ucy5iZWhhdmlvcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbEludG9WaWV3OyIsInZhciBnbG9iYWwgPVxuICAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbFRoaXMpIHx8XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZikgfHxcbiAgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbClcblxudmFyIHN1cHBvcnQgPSB7XG4gIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gZ2xvYmFsLFxuICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gZ2xvYmFsICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICBibG9iOlxuICAgICdGaWxlUmVhZGVyJyBpbiBnbG9iYWwgJiZcbiAgICAnQmxvYicgaW4gZ2xvYmFsICYmXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBnbG9iYWwsXG4gIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIGdsb2JhbFxufVxuXG5mdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbn1cblxuaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gIF1cblxuICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPVxuICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgfVxuICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5eX2B8fiFdL2kudGVzdChuYW1lKSB8fCBuYW1lID09PSAnJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgfVxuICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG5mdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvclxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpdGVyYXRvclxufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gIHRoaXMubWFwID0ge31cblxuICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgIH0sIHRoaXMpXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgIH0sIHRoaXMpXG4gIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICB9LCB0aGlzKVxuICB9XG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSArICcsICcgKyB2YWx1ZSA6IHZhbHVlXG59XG5cbkhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG59XG5cbkhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgIH1cbiAgfVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgIGl0ZW1zLnB1c2gobmFtZSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGl0ZW1zID0gW11cbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaXRlbXMucHVzaCh2YWx1ZSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgIGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSlcbiAgfSlcbiAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxufVxuXG5pZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xufVxuXG5mdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICB9XG4gIGJvZHkuYm9keVVzZWQgPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICB9XG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICByZXR1cm4gcHJvbWlzZVxufVxuXG5mdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICB9XG4gIHJldHVybiBjaGFycy5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgaWYgKGJ1Zi5zbGljZSkge1xuICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgfSBlbHNlIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gIH1cbn1cblxuZnVuY3Rpb24gQm9keSgpIHtcbiAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgLypcbiAgICAgIGZldGNoLW1vY2sgd3JhcHMgdGhlIFJlc3BvbnNlIG9iamVjdCBpbiBhbiBFUzYgUHJveHkgdG9cbiAgICAgIHByb3ZpZGUgdXNlZnVsIHRlc3QgaGFybmVzcyBmZWF0dXJlcyBzdWNoIGFzIGZsdXNoLiBIb3dldmVyLCBvblxuICAgICAgRVM1IGJyb3dzZXJzIHdpdGhvdXQgZmV0Y2ggb3IgUHJveHkgc3VwcG9ydCBwb2xseWZpbGxzIG11c3QgYmUgdXNlZDtcbiAgICAgIHRoZSBwcm94eS1wb2xseWZpbGwgaXMgdW5hYmxlIHRvIHByb3h5IGFuIGF0dHJpYnV0ZSB1bmxlc3MgaXQgZXhpc3RzXG4gICAgICBvbiB0aGUgb2JqZWN0IGJlZm9yZSB0aGUgUHJveHkgaXMgY3JlYXRlZC4gVGhpcyBjaGFuZ2UgZW5zdXJlc1xuICAgICAgUmVzcG9uc2UuYm9keVVzZWQgZXhpc3RzIG9uIHRoZSBpbnN0YW5jZSwgd2hpbGUgbWFpbnRhaW5pbmcgdGhlXG4gICAgICBzZW1hbnRpYyBvZiBzZXR0aW5nIFJlcXVlc3QuYm9keVVzZWQgaW4gdGhlIGNvbnN0cnVjdG9yIGJlZm9yZVxuICAgICAgX2luaXRCb2R5IGlzIGNhbGxlZC5cbiAgICAqL1xuICAgIHRoaXMuYm9keVVzZWQgPSB0aGlzLmJvZHlVc2VkXG4gICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgaWYgKCFib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGJvZHkpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHZhciBpc0NvbnN1bWVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKGlzQ29uc3VtZWQpIHtcbiAgICAgICAgICByZXR1cm4gaXNDb25zdW1lZFxuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodGhpcy5fYm9keUFycmF5QnVmZmVyKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnVmZmVyLnNsaWNlKFxuICAgICAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZU9mZnNldCxcbiAgICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVPZmZzZXQgKyB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZUxlbmd0aFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgIH1cbiAgfVxuXG4gIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbnZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICByZXR1cm4gbWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEgPyB1cGNhc2VkIDogbWV0aG9kXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXF1ZXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgdGhlIFwibmV3XCIgb3BlcmF0b3IsIHRoaXMgRE9NIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJylcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICB9XG4gICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgdGhpcy5zaWduYWwgPSBpbnB1dC5zaWduYWxcbiAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgfVxuXG4gIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJ1xuICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gIH1cbiAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICB0aGlzLnNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsIHx8IHRoaXMuc2lnbmFsXG4gIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgfVxuICB0aGlzLl9pbml0Qm9keShib2R5KVxuXG4gIGlmICh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykge1xuICAgIGlmIChvcHRpb25zLmNhY2hlID09PSAnbm8tc3RvcmUnIHx8IG9wdGlvbnMuY2FjaGUgPT09ICduby1jYWNoZScpIHtcbiAgICAgIC8vIFNlYXJjaCBmb3IgYSAnXycgcGFyYW1ldGVyIGluIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgIHZhciByZVBhcmFtU2VhcmNoID0gLyhbPyZdKV89W14mXSovXG4gICAgICBpZiAocmVQYXJhbVNlYXJjaC50ZXN0KHRoaXMudXJsKSkge1xuICAgICAgICAvLyBJZiBpdCBhbHJlYWR5IGV4aXN0cyB0aGVuIHNldCB0aGUgdmFsdWUgd2l0aCB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgIHRoaXMudXJsID0gdGhpcy51cmwucmVwbGFjZShyZVBhcmFtU2VhcmNoLCAnJDFfPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSBhZGQgYSBuZXcgJ18nIHBhcmFtZXRlciB0byB0aGUgZW5kIHdpdGggdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICB2YXIgcmVRdWVyeVN0cmluZyA9IC9cXD8vXG4gICAgICAgIHRoaXMudXJsICs9IChyZVF1ZXJ5U3RyaW5nLnRlc3QodGhpcy51cmwpID8gJyYnIDogJz8nKSArICdfPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5SZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywge2JvZHk6IHRoaXMuX2JvZHlJbml0fSlcbn1cblxuZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICBib2R5XG4gICAgLnRyaW0oKVxuICAgIC5zcGxpdCgnJicpXG4gICAgLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gIHJldHVybiBmb3JtXG59XG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAvLyBSZXBsYWNlIGluc3RhbmNlcyBvZiBcXHJcXG4gYW5kIFxcbiBmb2xsb3dlZCBieSBhdCBsZWFzdCBvbmUgc3BhY2Ugb3IgaG9yaXpvbnRhbCB0YWIgd2l0aCBhIHNwYWNlXG4gIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMwI3NlY3Rpb24tMy4yXG4gIHZhciBwcmVQcm9jZXNzZWRIZWFkZXJzID0gcmF3SGVhZGVycy5yZXBsYWNlKC9cXHI/XFxuW1xcdCBdKy9nLCAnICcpXG4gIC8vIEF2b2lkaW5nIHNwbGl0IHZpYSByZWdleCB0byB3b3JrIGFyb3VuZCBhIGNvbW1vbiBJRTExIGJ1ZyB3aXRoIHRoZSBjb3JlLWpzIDMuNi4wIHJlZ2V4IHBvbHlmaWxsXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gvaXNzdWVzLzc0OFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNzUxXG4gIHByZVByb2Nlc3NlZEhlYWRlcnNcbiAgICAuc3BsaXQoJ1xccicpXG4gICAgLm1hcChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgIHJldHVybiBoZWFkZXIuaW5kZXhPZignXFxuJykgPT09IDAgPyBoZWFkZXIuc3Vic3RyKDEsIGhlYWRlci5sZW5ndGgpIDogaGVhZGVyXG4gICAgfSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgcmV0dXJuIGhlYWRlcnNcbn1cblxuQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG5leHBvcnQgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc3BvbnNlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgdGhlIFwibmV3XCIgb3BlcmF0b3IsIHRoaXMgRE9NIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJylcbiAgfVxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfVxuXG4gIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzID09PSB1bmRlZmluZWQgPyAyMDAgOiBvcHRpb25zLnN0YXR1c1xuICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG4gIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJydcbiAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxufVxuXG5Cb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG5SZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgdXJsOiB0aGlzLnVybFxuICB9KVxufVxuXG5SZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxudmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cblJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxufVxuXG5leHBvcnQgdmFyIERPTUV4Y2VwdGlvbiA9IGdsb2JhbC5ET01FeGNlcHRpb25cbnRyeSB7XG4gIG5ldyBET01FeGNlcHRpb24oKVxufSBjYXRjaCAoZXJyKSB7XG4gIERPTUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKG1lc3NhZ2UsIG5hbWUpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHZhciBlcnJvciA9IEVycm9yKG1lc3NhZ2UpXG4gICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrXG4gIH1cbiAgRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKVxuICBET01FeGNlcHRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRE9NRXhjZXB0aW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaChpbnB1dCwgaW5pdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcblxuICAgIGlmIChyZXF1ZXN0LnNpZ25hbCAmJiByZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgIH1cblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgZnVuY3Rpb24gYWJvcnRYaHIoKSB7XG4gICAgICB4aHIuYWJvcnQoKVxuICAgIH1cblxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgfVxuICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZml4VXJsKHVybCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHVybCA9PT0gJycgJiYgZ2xvYmFsLmxvY2F0aW9uLmhyZWYgPyBnbG9iYWwubG9jYXRpb24uaHJlZiA6IHVybFxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIGZpeFVybChyZXF1ZXN0LnVybCksIHRydWUpXG5cbiAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ29taXQnKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyKSB7XG4gICAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHN1cHBvcnQuYXJyYXlCdWZmZXIgJiZcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiZcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykuaW5kZXhPZignYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJykgIT09IC0xXG4gICAgICApIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5pdCAmJiB0eXBlb2YgaW5pdC5oZWFkZXJzID09PSAnb2JqZWN0JyAmJiAhKGluaXQuaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhpbml0LmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBub3JtYWxpemVWYWx1ZShpbml0LmhlYWRlcnNbbmFtZV0pKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0LnNpZ25hbCkge1xuICAgICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocilcblxuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBET05FIChzdWNjZXNzIG9yIGZhaWx1cmUpXG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICB9KVxufVxuXG5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcblxuaWYgKCFnbG9iYWwuZmV0Y2gpIHtcbiAgZ2xvYmFsLmZldGNoID0gZmV0Y2hcbiAgZ2xvYmFsLkhlYWRlcnMgPSBIZWFkZXJzXG4gIGdsb2JhbC5SZXF1ZXN0ID0gUmVxdWVzdFxuICBnbG9iYWwuUmVzcG9uc2UgPSBSZXNwb25zZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==