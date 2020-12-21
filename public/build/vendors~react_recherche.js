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

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
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

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
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
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				if (!allowMissing && !(part in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
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
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
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

/***/ "./node_modules/react-overlays/esm/useRootClose.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-overlays/esm/useRootClose.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/ownerDocument */ "./node_modules/react-overlays/esm/utils/ownerDocument.js");






var escapeKeyCode = 27;

var noop = function noop() {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>|HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object}  options
 * @param {boolean} options.disabled
 * @param {string}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */


function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      disabled = _ref.disabled,
      _ref$clickTrigger = _ref.clickTrigger,
      clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;

  var preventMouseRootCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  var onClose = onRootClose || noop;
  var handleMouseCapture = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    var currentTarget = ref && ('current' in ref ? ref.current : ref);
    warning__WEBPACK_IMPORTED_MODULE_4___default()(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__["default"])(currentTarget, e.target);
  }, [ref]);
  var handleMouse = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(function (e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(function (e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (disabled || ref == null) return undefined;
    var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_5__["default"])(ref.current); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    var removeMouseCaptureListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, clickTrigger, handleMouse);
    var removeKeyupListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, 'keyup', handleKeyUp);
    var mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {
        return Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(el, 'mousemove', noop);
      });
    }

    return function () {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

/* harmony default export */ __webpack_exports__["default"] = (useRootClose);

/***/ }),

/***/ "./node_modules/react-overlays/esm/utils/ownerDocument.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-overlays/esm/utils/ownerDocument.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");


/* harmony default export */ __webpack_exports__["default"] = (function (componentOrElement) {
  return Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_1__["default"])(react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.findDOMNode(componentOrElement));
});

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
var callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ "./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js");

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

/***/ "./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
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

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				value = desc && 'get' in desc && !('originalValue' in desc.get) ? desc.get : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ "./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NhbGwtYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29tcHV0ZS1zY3JvbGwtaW50by12aWV3L2Rpc3QvaW5kZXgubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtcmVhY3QtY29udGV4dC9saWIvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1yZWFjdC1jb250ZXh0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2V0LWludHJpbnNpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3VkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYXMtc3ltYm9scy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvc2hhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWFyZ3VtZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVib3VuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3QtaXMvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1pcy9zaGltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2Nzcy9UeXBlYWhlYWQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2JlaGF2aW9ycy9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy9iZWhhdmlvcnMvY2xhc3NOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy9iZWhhdmlvcnMvaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy9iZWhhdmlvcnMvdG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9Bc3luY1R5cGVhaGVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy9jb21wb25lbnRzL0NsZWFyQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbXBvbmVudHMvSGlnaGxpZ2h0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9IaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbXBvbmVudHMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9NZW51LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbXBvbmVudHMvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9PdmVybGF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbXBvbmVudHMvVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9UeXBlYWhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9UeXBlYWhlYWRJbnB1dE11bHRpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbXBvbmVudHMvVHlwZWFoZWFkSW5wdXRTaW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29tcG9uZW50cy9UeXBlYWhlYWRNZW51LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy9jb3JlL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29yZS9UeXBlYWhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvY29yZS9UeXBlYWhlYWRNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy91dGlscy9hZGRDdXN0b21PcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvdXRpbHMvZGVmYXVsdEZpbHRlckJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldERpc3BsYXlOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldEhpbnRUZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldElucHV0UHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvdXRpbHMvZ2V0SW5wdXRUZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldElzT25seVJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy91dGlscy9nZXRNYXRjaEJvdW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy91dGlscy9nZXRNZW51SXRlbUlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldE9wdGlvbkxhYmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldE9wdGlvblByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldFN0cmluZ0xhYmVsS2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2dldFRydW5jYXRlZE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvdXRpbHMvZ2V0VXBkYXRlZEFjdGl2ZUluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL2lzU2VsZWN0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy91dGlscy9pc1Nob3duLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL25vZGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZC9lcy91dGlscy9wcmV2ZW50SW5wdXRCbHVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL3NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC10eXBlYWhlYWQvZXMvdXRpbHMvc3RyaXBEaWFjcml0aWNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL3ZhbGlkYXRlU2VsZWN0ZWRQcm9wQ2hhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdHlwZWFoZWFkL2VzL3V0aWxzL3dhcm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW92ZXJsYXlzL2VzbS91c2VSb290Q2xvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW92ZXJsYXlzL2VzbS91dGlscy9vd25lckRvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1wb3BwZXIvbGliL2VzbS9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1wb3BwZXIvbGliL2VzbS9Qb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBvcHBlci9saWIvZXNtL1JlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcG9wcGVyL2xpYi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBvcHBlci9saWIvZXNtL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdleHAucHJvdG90eXBlLmZsYWdzL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdleHAucHJvdG90eXBlLmZsYWdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdleHAucHJvdG90eXBlLmZsYWdzL25vZGVfbW9kdWxlcy9lcy1hYnN0cmFjdC9HZXRJbnRyaW5zaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3Mvbm9kZV9tb2R1bGVzL2VzLWFic3RyYWN0L2hlbHBlcnMvY2FsbEJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3MvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2V4cC5wcm90b3R5cGUuZmxhZ3Mvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7OztBQ2ZhOztBQUViLFdBQVcsbUJBQU8sQ0FBQyw0REFBZTtBQUNsQyxtQkFBbUIsbUJBQU8sQ0FBQyw0REFBZTs7QUFFMUM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUSxXQUFXO0FBQ3ZDLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLG1CQUFtQjtBQUM5RCxD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RUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBLFdBQVcsc0RBQU87QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQztBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUwsSUFBSSw0RUFBZSxDQUFDLG1GQUFzQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0EsV0FBVyxzREFBTztBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDRFQUFlLENBQUMsbUZBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EOztBQUVwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtB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QzFDOzs7Ozs7Ozs7Ozs7O0FDekMzQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ087QUFDUDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFDQUFxQywwQkFBMEI7QUFDL0Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QiwwQkFBMEIsZUFBZTtBQUN0RTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidmVuZG9yc35yZWFjdF9yZWNoZXJjaGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzTG9vc2U7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkYXBwbHkgPSBHZXRJbnRyaW5zaWMoJyVGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHklJyk7XG52YXIgJGNhbGwgPSBHZXRJbnRyaW5zaWMoJyVGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCUnKTtcbnZhciAkcmVmbGVjdEFwcGx5ID0gR2V0SW50cmluc2ljKCclUmVmbGVjdC5hcHBseSUnLCB0cnVlKSB8fCBiaW5kLmNhbGwoJGNhbGwsICRhcHBseSk7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZGVmaW5lUHJvcGVydHklJywgdHJ1ZSk7XG5cbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0dHJ5IHtcblx0XHQkZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyB2YWx1ZTogMSB9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGRlZmluZVByb3BlcnR5XG5cdFx0JGRlZmluZVByb3BlcnR5ID0gbnVsbDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCaW5kKCkge1xuXHRyZXR1cm4gJHJlZmxlY3RBcHBseShiaW5kLCAkY2FsbCwgYXJndW1lbnRzKTtcbn07XG5cbnZhciBhcHBseUJpbmQgPSBmdW5jdGlvbiBhcHBseUJpbmQoKSB7XG5cdHJldHVybiAkcmVmbGVjdEFwcGx5KGJpbmQsICRhcHBseSwgYXJndW1lbnRzKTtcbn07XG5cbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0JGRlZmluZVByb3BlcnR5KG1vZHVsZS5leHBvcnRzLCAnYXBwbHknLCB7IHZhbHVlOiBhcHBseUJpbmQgfSk7XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cy5hcHBseSA9IGFwcGx5QmluZDtcbn1cbiIsImZ1bmN0aW9uIHQodCl7cmV0dXJuIG51bGwhPXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYxPT09dC5ub2RlVHlwZX1mdW5jdGlvbiBlKHQsZSl7cmV0dXJuKCFlfHxcImhpZGRlblwiIT09dCkmJlwidmlzaWJsZVwiIT09dCYmXCJjbGlwXCIhPT10fWZ1bmN0aW9uIG4odCxuKXtpZih0LmNsaWVudEhlaWdodDx0LnNjcm9sbEhlaWdodHx8dC5jbGllbnRXaWR0aDx0LnNjcm9sbFdpZHRoKXt2YXIgcj1nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCk7cmV0dXJuIGUoci5vdmVyZmxvd1ksbil8fGUoci5vdmVyZmxvd1gsbil8fGZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uKHQpe2lmKCF0Lm93bmVyRG9jdW1lbnR8fCF0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpcmV0dXJuIG51bGw7dHJ5e3JldHVybiB0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZnJhbWVFbGVtZW50fWNhdGNoKHQpe3JldHVybiBudWxsfX0odCk7cmV0dXJuISFlJiYoZS5jbGllbnRIZWlnaHQ8dC5zY3JvbGxIZWlnaHR8fGUuY2xpZW50V2lkdGg8dC5zY3JvbGxXaWR0aCl9KHQpfXJldHVybiExfWZ1bmN0aW9uIHIodCxlLG4scixpLG8sbCxkKXtyZXR1cm4gbzx0JiZsPmV8fG8+dCYmbDxlPzA6bzw9dCYmZDw9bnx8bD49ZSYmZD49bj9vLXQtcjpsPmUmJmQ8bnx8bzx0JiZkPm4/bC1lK2k6MH1leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlLGkpe3ZhciBvPXdpbmRvdyxsPWkuc2Nyb2xsTW9kZSxkPWkuYmxvY2ssdT1pLmlubGluZSxoPWkuYm91bmRhcnksYT1pLnNraXBPdmVyZmxvd0hpZGRlbkVsZW1lbnRzLGM9XCJmdW5jdGlvblwiPT10eXBlb2YgaD9oOmZ1bmN0aW9uKHQpe3JldHVybiB0IT09aH07aWYoIXQoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgdGFyZ2V0XCIpO2Zvcih2YXIgZj1kb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQscz1bXSxwPWU7dChwKSYmYyhwKTspe2lmKChwPXAucGFyZW50Tm9kZSk9PT1mKXtzLnB1c2gocCk7YnJlYWt9cD09PWRvY3VtZW50LmJvZHkmJm4ocCkmJiFuKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCl8fG4ocCxhKSYmcy5wdXNoKHApfWZvcih2YXIgZz1vLnZpc3VhbFZpZXdwb3J0P28udmlzdWFsVmlld3BvcnQud2lkdGg6aW5uZXJXaWR0aCxtPW8udmlzdWFsVmlld3BvcnQ/by52aXN1YWxWaWV3cG9ydC5oZWlnaHQ6aW5uZXJIZWlnaHQsdz13aW5kb3cuc2Nyb2xsWHx8cGFnZVhPZmZzZXQsdj13aW5kb3cuc2Nyb2xsWXx8cGFnZVlPZmZzZXQsVz1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGI9Vy5oZWlnaHQsSD1XLndpZHRoLHk9Vy50b3AsTT1XLnJpZ2h0LEU9Vy5ib3R0b20sVj1XLmxlZnQseD1cInN0YXJ0XCI9PT1kfHxcIm5lYXJlc3RcIj09PWQ/eTpcImVuZFwiPT09ZD9FOnkrYi8yLEk9XCJjZW50ZXJcIj09PXU/VitILzI6XCJlbmRcIj09PXU/TTpWLEM9W10sVD0wO1Q8cy5sZW5ndGg7VCsrKXt2YXIgaz1zW1RdLEI9ay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxEPUIuaGVpZ2h0LE89Qi53aWR0aCxSPUIudG9wLFg9Qi5yaWdodCxZPUIuYm90dG9tLEw9Qi5sZWZ0O2lmKFwiaWYtbmVlZGVkXCI9PT1sJiZ5Pj0wJiZWPj0wJiZFPD1tJiZNPD1nJiZ5Pj1SJiZFPD1ZJiZWPj1MJiZNPD1YKXJldHVybiBDO3ZhciBTPWdldENvbXB1dGVkU3R5bGUoayksaj1wYXJzZUludChTLmJvcmRlckxlZnRXaWR0aCwxMCksTj1wYXJzZUludChTLmJvcmRlclRvcFdpZHRoLDEwKSxxPXBhcnNlSW50KFMuYm9yZGVyUmlnaHRXaWR0aCwxMCksej1wYXJzZUludChTLmJvcmRlckJvdHRvbVdpZHRoLDEwKSxBPTAsRj0wLEc9XCJvZmZzZXRXaWR0aFwiaW4gaz9rLm9mZnNldFdpZHRoLWsuY2xpZW50V2lkdGgtai1xOjAsSj1cIm9mZnNldEhlaWdodFwiaW4gaz9rLm9mZnNldEhlaWdodC1rLmNsaWVudEhlaWdodC1OLXo6MDtpZihmPT09aylBPVwic3RhcnRcIj09PWQ/eDpcImVuZFwiPT09ZD94LW06XCJuZWFyZXN0XCI9PT1kP3Iodix2K20sbSxOLHosdit4LHYreCtiLGIpOngtbS8yLEY9XCJzdGFydFwiPT09dT9JOlwiY2VudGVyXCI9PT11P0ktZy8yOlwiZW5kXCI9PT11P0ktZzpyKHcsdytnLGcsaixxLHcrSSx3K0krSCxIKSxBPU1hdGgubWF4KDAsQSt2KSxGPU1hdGgubWF4KDAsRit3KTtlbHNle0E9XCJzdGFydFwiPT09ZD94LVItTjpcImVuZFwiPT09ZD94LVkreitKOlwibmVhcmVzdFwiPT09ZD9yKFIsWSxELE4seitKLHgseCtiLGIpOngtKFIrRC8yKStKLzIsRj1cInN0YXJ0XCI9PT11P0ktTC1qOlwiY2VudGVyXCI9PT11P0ktKEwrTy8yKStHLzI6XCJlbmRcIj09PXU/SS1YK3ErRzpyKEwsWCxPLGoscStHLEksSStILEgpO3ZhciBLPWsuc2Nyb2xsTGVmdCxQPWsuc2Nyb2xsVG9wO3grPVAtKEE9TWF0aC5tYXgoMCxNYXRoLm1pbihQK0Esay5zY3JvbGxIZWlnaHQtRCtKKSkpLEkrPUstKEY9TWF0aC5tYXgoMCxNYXRoLm1pbihLK0Ysay5zY3JvbGxXaWR0aC1PK0cpKSl9Qy5wdXNoKHtlbDprLHRvcDpBLGxlZnQ6Rn0pfXJldHVybiBDfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubW9kdWxlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2d1ZCA9IHJlcXVpcmUoJ2d1ZCcpO1xuXG52YXIgX2d1ZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ndWQpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTUFYX1NJR05FRF8zMV9CSVRfSU5UID0gMTA3Mzc0MTgyMztcblxuLy8gSW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbmZ1bmN0aW9uIG9iamVjdElzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudEVtaXR0ZXIodmFsdWUpIHtcbiAgdmFyIGhhbmRsZXJzID0gW107XG4gIHJldHVybiB7XG4gICAgb246IGZ1bmN0aW9uIG9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfSxcbiAgICBvZmY6IGZ1bmN0aW9uIG9mZihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVycyA9IGhhbmRsZXJzLmZpbHRlcihmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gaCAhPT0gaGFuZGxlcjtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWx1ZSwgY2hhbmdlZEJpdHMpIHtcbiAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyKHZhbHVlLCBjaGFuZ2VkQml0cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWFjdENvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICB2YXIgX1Byb3ZpZGVyJGNoaWxkQ29udGV4LCBfQ29uc3VtZXIkY29udGV4dFR5cGU7XG5cbiAgdmFyIGNvbnRleHRQcm9wID0gJ19fY3JlYXRlLXJlYWN0LWNvbnRleHQtJyArICgwLCBfZ3VkMi5kZWZhdWx0KSgpICsgJ19fJztcblxuICB2YXIgUHJvdmlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm92aWRlcik7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5lbWl0dGVyID0gY3JlYXRlRXZlbnRFbWl0dGVyKF90aGlzLnByb3BzLnZhbHVlKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gICAgfVxuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW2NvbnRleHRQcm9wXSA9IHRoaXMuZW1pdHRlciwgX3JlZjtcbiAgICB9O1xuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBuZXh0UHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBjaGFuZ2VkQml0cyA9IHZvaWQgMDtcblxuICAgICAgICBpZiAob2JqZWN0SXMob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoYW5nZWRCaXRzID0gMDsgLy8gTm8gY2hhbmdlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhbmdlZEJpdHMgPSB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09ICdmdW5jdGlvbicgPyBjYWxjdWxhdGVDaGFuZ2VkQml0cyhvbGRWYWx1ZSwgbmV3VmFsdWUpIDogTUFYX1NJR05FRF8zMV9CSVRfSU5UO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKChjaGFuZ2VkQml0cyAmIE1BWF9TSUdORURfMzFfQklUX0lOVCkgPT09IGNoYW5nZWRCaXRzLCAnY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IEV4cGVjdGVkIHRoZSByZXR1cm4gdmFsdWUgdG8gYmUgYSAnICsgJzMxLWJpdCBpbnRlZ2VyLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNoYW5nZWRCaXRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGFuZ2VkQml0cyB8PSAwO1xuXG4gICAgICAgICAgaWYgKGNoYW5nZWRCaXRzICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuc2V0KG5leHRQcm9wcy52YWx1ZSwgY2hhbmdlZEJpdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBQcm92aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfTtcblxuICAgIHJldHVybiBQcm92aWRlcjtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IChfUHJvdmlkZXIkY2hpbGRDb250ZXggPSB7fSwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4W2NvbnRleHRQcm9wXSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsIF9Qcm92aWRlciRjaGlsZENvbnRleCk7XG5cbiAgdmFyIENvbnN1bWVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gICAgX2luaGVyaXRzKENvbnN1bWVyLCBfQ29tcG9uZW50Mik7XG5cbiAgICBmdW5jdGlvbiBDb25zdW1lcigpIHtcbiAgICAgIHZhciBfdGVtcDIsIF90aGlzMiwgX3JldDI7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25zdW1lcik7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZXQyID0gKF90ZW1wMiA9IChfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50Mi5jYWxsLmFwcGx5KF9Db21wb25lbnQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzMiksIF90aGlzMi5zdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IF90aGlzMi5nZXRWYWx1ZSgpXG4gICAgICB9LCBfdGhpczIub25VcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSBfdGhpczIub2JzZXJ2ZWRCaXRzIHwgMDtcbiAgICAgICAgaWYgKChvYnNlcnZlZEJpdHMgJiBjaGFuZ2VkQml0cykgIT09IDApIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyB2YWx1ZTogX3RoaXMyLmdldFZhbHVlKCkgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIF90ZW1wMiksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzMiwgX3JldDIpO1xuICAgIH1cblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSBuZXh0UHJvcHMub2JzZXJ2ZWRCaXRzO1xuXG4gICAgICB0aGlzLm9ic2VydmVkQml0cyA9IG9ic2VydmVkQml0cyA9PT0gdW5kZWZpbmVkIHx8IG9ic2VydmVkQml0cyA9PT0gbnVsbCA/IE1BWF9TSUdORURfMzFfQklUX0lOVCAvLyBTdWJzY3JpYmUgdG8gYWxsIGNoYW5nZXMgYnkgZGVmYXVsdFxuICAgICAgOiBvYnNlcnZlZEJpdHM7XG4gICAgfTtcblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5vbih0aGlzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSB0aGlzLnByb3BzLm9ic2VydmVkQml0cztcblxuICAgICAgdGhpcy5vYnNlcnZlZEJpdHMgPSBvYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCB8fCBvYnNlcnZlZEJpdHMgPT09IG51bGwgPyBNQVhfU0lHTkVEXzMxX0JJVF9JTlQgLy8gU3Vic2NyaWJlIHRvIGFsbCBjaGFuZ2VzIGJ5IGRlZmF1bHRcbiAgICAgIDogb2JzZXJ2ZWRCaXRzO1xuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0ub2ZmKHRoaXMub25VcGRhdGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLmdldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBvbmx5Q2hpbGQodGhpcy5wcm9wcy5jaGlsZHJlbikodGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBDb25zdW1lcjtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBDb25zdW1lci5jb250ZXh0VHlwZXMgPSAoX0NvbnN1bWVyJGNvbnRleHRUeXBlID0ge30sIF9Db25zdW1lciRjb250ZXh0VHlwZVtjb250ZXh0UHJvcF0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgX0NvbnN1bWVyJGNvbnRleHRUeXBlKTtcblxuXG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IFByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBDb25zdW1lclxuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZWFjdENvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9pbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIF9pbXBsZW1lbnRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbXBsZW1lbnRhdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDb250ZXh0IHx8IF9pbXBsZW1lbnRhdGlvbjIuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsInZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnb2JqZWN0LWtleXMnKTtcbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJ2lzLWFyZ3VtZW50cycpO1xudmFyIGlzID0gcmVxdWlyZSgnb2JqZWN0LWlzJyk7XG52YXIgaXNSZWdleCA9IHJlcXVpcmUoJ2lzLXJlZ2V4Jyk7XG52YXIgZmxhZ3MgPSByZXF1aXJlKCdyZWdleHAucHJvdG90eXBlLmZsYWdzJyk7XG52YXIgaXNEYXRlID0gcmVxdWlyZSgnaXMtZGF0ZS1vYmplY3QnKTtcblxudmFyIGdldFRpbWUgPSBEYXRlLnByb3RvdHlwZS5nZXRUaW1lO1xuXG5mdW5jdGlvbiBkZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChvcHRzLnN0cmljdCA/IGlzKGFjdHVhbCwgZXhwZWN0ZWQpIDogYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gNy4zLiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLCBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQgfHwgKHR5cGVvZiBhY3R1YWwgIT09ICdvYmplY3QnICYmIHR5cGVvZiBleHBlY3RlZCAhPT0gJ29iamVjdCcpKSB7XG4gICAgcmV0dXJuIG9wdHMuc3RyaWN0ID8gaXMoYWN0dWFsLCBleHBlY3RlZCkgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG4gIH1cblxuICAvKlxuICAgKiA3LjQuIEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgICogZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gICAqIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgICogKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAgKiBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAgKiBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgb3B0cyk7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlcih4KSB7XG4gIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHgubGVuZ3RoICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIHguY29weSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeC5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeC5sZW5ndGggPiAwICYmIHR5cGVvZiB4WzBdICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgb3B0cykge1xuICAvKiBlc2xpbnQgbWF4LXN0YXRlbWVudHM6IFsyLCA1MF0gKi9cbiAgdmFyIGksIGtleTtcbiAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGEpIHx8IGlzVW5kZWZpbmVkT3JOdWxsKGIpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS5cbiAgaWYgKGEucHJvdG90eXBlICE9PSBiLnByb3RvdHlwZSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoaXNBcmd1bWVudHMoYSkgIT09IGlzQXJndW1lbnRzKGIpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHZhciBhSXNSZWdleCA9IGlzUmVnZXgoYSk7XG4gIHZhciBiSXNSZWdleCA9IGlzUmVnZXgoYik7XG4gIGlmIChhSXNSZWdleCAhPT0gYklzUmVnZXgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChhSXNSZWdleCB8fCBiSXNSZWdleCkge1xuICAgIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgZmxhZ3MoYSkgPT09IGZsYWdzKGIpO1xuICB9XG5cbiAgaWYgKGlzRGF0ZShhKSAmJiBpc0RhdGUoYikpIHtcbiAgICByZXR1cm4gZ2V0VGltZS5jYWxsKGEpID09PSBnZXRUaW1lLmNhbGwoYik7XG4gIH1cblxuICB2YXIgYUlzQnVmZmVyID0gaXNCdWZmZXIoYSk7XG4gIHZhciBiSXNCdWZmZXIgPSBpc0J1ZmZlcihiKTtcbiAgaWYgKGFJc0J1ZmZlciAhPT0gYklzQnVmZmVyKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYUlzQnVmZmVyIHx8IGJJc0J1ZmZlcikgeyAvLyAmJiB3b3VsZCB3b3JrIHRvbywgYmVjYXVzZSBib3RoIGFyZSB0cnVlIG9yIGJvdGggZmFsc2UgaGVyZVxuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhW2ldICE9PSBiW2ldKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgdHJ5IHtcbiAgICB2YXIga2EgPSBvYmplY3RLZXlzKGEpO1xuICAgIHZhciBrYiA9IG9iamVjdEtleXMoYik7XG4gIH0gY2F0Y2ggKGUpIHsgLy8gaGFwcGVucyB3aGVuIG9uZSBpcyBhIHN0cmluZyBsaXRlcmFsIGFuZCB0aGUgb3RoZXIgaXNuJ3RcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlcyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPT0ga2IubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIHRoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy8gfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT0ga2JbaV0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIH1cbiAgLy8gZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBvcHRzKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZXBFcXVhbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woJ2ZvbycpID09PSAnc3ltYm9sJztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIG9yaWdEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdHRyeSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iaiwgJ3gnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogb2JqIH0pO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0XHRmb3IgKHZhciBfIGluIG9iaikgeyAvLyBqc2NzOmlnbm9yZSBkaXNhbGxvd1VudXNlZFZhcmlhYmxlc1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gb2JqLnggPT09IG9iajtcblx0fSBjYXRjaCAoZSkgeyAvKiB0aGlzIGlzIElFIDguICovXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSBvcmlnRGVmaW5lUHJvcGVydHkgJiYgYXJlUHJvcGVydHlEZXNjcmlwdG9yc1N1cHBvcnRlZCgpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCB2YWx1ZSwgcHJlZGljYXRlKSB7XG5cdGlmIChuYW1lIGluIG9iamVjdCAmJiAoIWlzRnVuY3Rpb24ocHJlZGljYXRlKSB8fCAhcHJlZGljYXRlKCkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG5cdFx0b3JpZ0RlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG9iamVjdFtuYW1lXSA9IHZhbHVlO1xuXHR9XG59O1xuXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmplY3QsIG1hcCkge1xuXHR2YXIgcHJlZGljYXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDoge307XG5cdHZhciBwcm9wcyA9IGtleXMobWFwKTtcblx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRwcm9wcyA9IGNvbmNhdC5jYWxsKHByb3BzLCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG1hcCkpO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BzW2ldLCBtYXBbcHJvcHNbaV1dLCBwcmVkaWNhdGVzW3Byb3BzW2ldXSk7XG5cdH1cbn07XG5cbmRlZmluZVByb3BlcnRpZXMuc3VwcG9ydHNEZXNjcmlwdG9ycyA9ICEhc3VwcG9ydHNEZXNjcmlwdG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0aWVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBkbyBub3QgZWRpdCAuanMgZmlsZXMgZGlyZWN0bHkgLSBlZGl0IHNyYy9pbmRleC5qc3RcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdHJ1ZSBpZiBib3RoIE5hTiwgZmFsc2Ugb3RoZXJ3aXNlXG4gIHJldHVybiBhIT09YSAmJiBiIT09Yjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBuby1pbnZhbGlkLXRoaXM6IDEgKi9cblxudmFyIEVSUk9SX01FU1NBR0UgPSAnRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSAnO1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmdW5jVHlwZSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbCh0YXJnZXQpICE9PSBmdW5jVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUk9SX01FU1NBR0UgKyB0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBib3VuZDtcbiAgICB2YXIgYmluZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJvdW5kTGVuZ3RoID0gTWF0aC5tYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcbiAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvdW5kQXJncy5wdXNoKCckJyArIGkpO1xuICAgIH1cblxuICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBib3VuZEFyZ3Muam9pbignLCcpICsgJyl7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOyB9JykoYmluZGVyKTtcblxuICAgIGlmICh0YXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIHZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KCkge307XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGJvdW5kLnByb3RvdHlwZSA9IG5ldyBFbXB0eSgpO1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBib3VuZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBpbXBsZW1lbnRhdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsc1xuXHRBZ2dyZWdhdGVFcnJvcixcblx0QXRvbWljcyxcblx0RmluYWxpemF0aW9uUmVnaXN0cnksXG5cdFNoYXJlZEFycmF5QnVmZmVyLFxuXHRXZWFrUmVmLFxuKi9cblxudmFyIHVuZGVmaW5lZDtcblxudmFyICRTeW50YXhFcnJvciA9IFN5bnRheEVycm9yO1xudmFyICRGdW5jdGlvbiA9IEZ1bmN0aW9uO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxudmFyIGdldEV2YWxsZWRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChleHByZXNzaW9uU3ludGF4KSB7XG5cdHRyeSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG5cdFx0cmV0dXJuIEZ1bmN0aW9uKCdcInVzZSBzdHJpY3RcIjsgcmV0dXJuICgnICsgZXhwcmVzc2lvblN5bnRheCArICcpLmNvbnN0cnVjdG9yOycpKCk7XG5cdH0gY2F0Y2ggKGUpIHt9XG59O1xuXG52YXIgJGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuaWYgKCRnT1BEKSB7XG5cdHRyeSB7XG5cdFx0JGdPUEQoe30sICcnKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdCRnT1BEID0gbnVsbDsgLy8gdGhpcyBpcyBJRSA4LCB3aGljaCBoYXMgYSBicm9rZW4gZ09QRFxuXHR9XG59XG5cbnZhciB0aHJvd1R5cGVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoKTtcbn07XG52YXIgVGhyb3dUeXBlRXJyb3IgPSAkZ09QRFxuXHQ/IChmdW5jdGlvbiAoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnMsIG5vLWNhbGxlciwgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG5cdFx0XHRhcmd1bWVudHMuY2FsbGVlOyAvLyBJRSA4IGRvZXMgbm90IHRocm93IGhlcmVcblx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHR9IGNhdGNoIChjYWxsZWVUaHJvd3MpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIElFIDggdGhyb3dzIG9uIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYXJndW1lbnRzLCAnJylcblx0XHRcdFx0cmV0dXJuICRnT1BEKGFyZ3VtZW50cywgJ2NhbGxlZScpLmdldDtcblx0XHRcdH0gY2F0Y2ggKGdPUER0aHJvd3MpIHtcblx0XHRcdFx0cmV0dXJuIHRocm93VHlwZUVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fSgpKVxuXHQ6IHRocm93VHlwZUVycm9yO1xuXG52YXIgaGFzU3ltYm9scyA9IHJlcXVpcmUoJ2hhcy1zeW1ib2xzJykoKTtcblxudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Ll9fcHJvdG9fXzsgfTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b1xuXG52YXIgYXN5bmNHZW5GdW5jdGlvbiA9IGdldEV2YWxsZWRDb25zdHJ1Y3RvcignYXN5bmMgZnVuY3Rpb24qICgpIHt9Jyk7XG52YXIgYXN5bmNHZW5GdW5jdGlvblByb3RvdHlwZSA9IGFzeW5jR2VuRnVuY3Rpb24gPyBhc3luY0dlbkZ1bmN0aW9uLnByb3RvdHlwZSA6IHVuZGVmaW5lZDtcbnZhciBhc3luY0dlblByb3RvdHlwZSA9IGFzeW5jR2VuRnVuY3Rpb25Qcm90b3R5cGUgPyBhc3luY0dlbkZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA6IHVuZGVmaW5lZDtcblxudmFyIFR5cGVkQXJyYXkgPSB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBnZXRQcm90byhVaW50OEFycmF5KTtcblxudmFyIElOVFJJTlNJQ1MgPSB7XG5cdCclQWdncmVnYXRlRXJyb3IlJzogdHlwZW9mIEFnZ3JlZ2F0ZUVycm9yID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEFnZ3JlZ2F0ZUVycm9yLFxuXHQnJUFycmF5JSc6IEFycmF5LFxuXHQnJUFycmF5QnVmZmVyJSc6IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBcnJheUJ1ZmZlcixcblx0JyVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJUFzeW5jRnJvbVN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiB1bmRlZmluZWQsXG5cdCclQXN5bmNGdW5jdGlvbiUnOiBnZXRFdmFsbGVkQ29uc3RydWN0b3IoJ2FzeW5jIGZ1bmN0aW9uICgpIHt9JyksXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogYXN5bmNHZW5GdW5jdGlvblByb3RvdHlwZSxcblx0JyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJSc6IGFzeW5jR2VuRnVuY3Rpb24sXG5cdCclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiBhc3luY0dlblByb3RvdHlwZSA/IGdldFByb3RvKGFzeW5jR2VuUHJvdG90eXBlKSA6IHVuZGVmaW5lZCxcblx0JyVBdG9taWNzJSc6IHR5cGVvZiBBdG9taWNzID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEF0b21pY3MsXG5cdCclQmlnSW50JSc6IHR5cGVvZiBCaWdJbnQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQmlnSW50LFxuXHQnJUJvb2xlYW4lJzogQm9vbGVhbixcblx0JyVEYXRhVmlldyUnOiB0eXBlb2YgRGF0YVZpZXcgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRGF0YVZpZXcsXG5cdCclRGF0ZSUnOiBEYXRlLFxuXHQnJWRlY29kZVVSSSUnOiBkZWNvZGVVUkksXG5cdCclZGVjb2RlVVJJQ29tcG9uZW50JSc6IGRlY29kZVVSSUNvbXBvbmVudCxcblx0JyVlbmNvZGVVUkklJzogZW5jb2RlVVJJLFxuXHQnJWVuY29kZVVSSUNvbXBvbmVudCUnOiBlbmNvZGVVUklDb21wb25lbnQsXG5cdCclRXJyb3IlJzogRXJyb3IsXG5cdCclZXZhbCUnOiBldmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcblx0JyVFdmFsRXJyb3IlJzogRXZhbEVycm9yLFxuXHQnJUZsb2F0MzJBcnJheSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheSxcblx0JyVGbG9hdDY0QXJyYXklJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXksXG5cdCclRmluYWxpemF0aW9uUmVnaXN0cnklJzogdHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZpbmFsaXphdGlvblJlZ2lzdHJ5LFxuXHQnJUZ1bmN0aW9uJSc6ICRGdW5jdGlvbixcblx0JyVHZW5lcmF0b3JGdW5jdGlvbiUnOiBnZXRFdmFsbGVkQ29uc3RydWN0b3IoJ2Z1bmN0aW9uKiAoKSB7fScpLFxuXHQnJUludDhBcnJheSUnOiB0eXBlb2YgSW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheSxcblx0JyVJbnQxNkFycmF5JSc6IHR5cGVvZiBJbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDE2QXJyYXksXG5cdCclSW50MzJBcnJheSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LFxuXHQnJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJWlzTmFOJSc6IGlzTmFOLFxuXHQnJUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSA6IHVuZGVmaW5lZCxcblx0JyVKU09OJSc6IHR5cGVvZiBKU09OID09PSAnb2JqZWN0JyA/IEpTT04gOiB1bmRlZmluZWQsXG5cdCclTWFwJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTWFwLFxuXHQnJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclTWF0aCUnOiBNYXRoLFxuXHQnJU51bWJlciUnOiBOdW1iZXIsXG5cdCclT2JqZWN0JSc6IE9iamVjdCxcblx0JyVwYXJzZUZsb2F0JSc6IHBhcnNlRmxvYXQsXG5cdCclcGFyc2VJbnQlJzogcGFyc2VJbnQsXG5cdCclUHJvbWlzZSUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLFxuXHQnJVByb3h5JSc6IHR5cGVvZiBQcm94eSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm94eSxcblx0JyVSYW5nZUVycm9yJSc6IFJhbmdlRXJyb3IsXG5cdCclUmVmZXJlbmNlRXJyb3IlJzogUmVmZXJlbmNlRXJyb3IsXG5cdCclUmVmbGVjdCUnOiB0eXBlb2YgUmVmbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBSZWZsZWN0LFxuXHQnJVJlZ0V4cCUnOiBSZWdFeHAsXG5cdCclU2V0JSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LFxuXHQnJVNldEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IFNldCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclU2hhcmVkQXJyYXlCdWZmZXIlJzogdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNoYXJlZEFycmF5QnVmZmVyLFxuXHQnJVN0cmluZyUnOiBTdHJpbmcsXG5cdCclU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKCcnW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCclU3ltYm9sJSc6IGhhc1N5bWJvbHMgPyBTeW1ib2wgOiB1bmRlZmluZWQsXG5cdCclU3ludGF4RXJyb3IlJzogJFN5bnRheEVycm9yLFxuXHQnJVRocm93VHlwZUVycm9yJSc6IFRocm93VHlwZUVycm9yLFxuXHQnJVR5cGVkQXJyYXklJzogVHlwZWRBcnJheSxcblx0JyVUeXBlRXJyb3IlJzogJFR5cGVFcnJvcixcblx0JyVVaW50OEFycmF5JSc6IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4QXJyYXksXG5cdCclVWludDhDbGFtcGVkQXJyYXklJzogdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHQnJVVpbnQxNkFycmF5JSc6IHR5cGVvZiBVaW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MTZBcnJheSxcblx0JyVVaW50MzJBcnJheSUnOiB0eXBlb2YgVWludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDMyQXJyYXksXG5cdCclVVJJRXJyb3IlJzogVVJJRXJyb3IsXG5cdCclV2Vha01hcCUnOiB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrTWFwLFxuXHQnJVdlYWtSZWYlJzogdHlwZW9mIFdlYWtSZWYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1JlZixcblx0JyVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXRcbn07XG5cbnZhciBMRUdBQ1lfQUxJQVNFUyA9IHtcblx0JyVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiBbJ0FycmF5QnVmZmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFycmF5UHJvdG90eXBlJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclQXJyYXlQcm90b19lbnRyaWVzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2VudHJpZXMnXSxcblx0JyVBcnJheVByb3RvX2ZvckVhY2glJzogWydBcnJheScsICdwcm90b3R5cGUnLCAnZm9yRWFjaCddLFxuXHQnJUFycmF5UHJvdG9fa2V5cyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdrZXlzJ10sXG5cdCclQXJyYXlQcm90b192YWx1ZXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAndmFsdWVzJ10sXG5cdCclQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBbJ0FzeW5jRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogWydBc3luY0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFzeW5jR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnLCAncHJvdG90eXBlJ10sXG5cdCclQm9vbGVhblByb3RvdHlwZSUnOiBbJ0Jvb2xlYW4nLCAncHJvdG90eXBlJ10sXG5cdCclRGF0YVZpZXdQcm90b3R5cGUlJzogWydEYXRhVmlldycsICdwcm90b3R5cGUnXSxcblx0JyVEYXRlUHJvdG90eXBlJSc6IFsnRGF0ZScsICdwcm90b3R5cGUnXSxcblx0JyVFcnJvclByb3RvdHlwZSUnOiBbJ0Vycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJUV2YWxFcnJvclByb3RvdHlwZSUnOiBbJ0V2YWxFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVGbG9hdDMyQXJyYXlQcm90b3R5cGUlJzogWydGbG9hdDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclRmxvYXQ2NEFycmF5UHJvdG90eXBlJSc6IFsnRmxvYXQ2NEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUZ1bmN0aW9uUHJvdG90eXBlJSc6IFsnRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDhBcnJheVByb3RvdHlwZSUnOiBbJ0ludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnSW50MTZBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQzMkFycmF5UHJvdG90eXBlJSc6IFsnSW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVKU09OUGFyc2UlJzogWydKU09OJywgJ3BhcnNlJ10sXG5cdCclSlNPTlN0cmluZ2lmeSUnOiBbJ0pTT04nLCAnc3RyaW5naWZ5J10sXG5cdCclTWFwUHJvdG90eXBlJSc6IFsnTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJU51bWJlclByb3RvdHlwZSUnOiBbJ051bWJlcicsICdwcm90b3R5cGUnXSxcblx0JyVPYmplY3RQcm90b3R5cGUlJzogWydPYmplY3QnLCAncHJvdG90eXBlJ10sXG5cdCclT2JqUHJvdG9fdG9TdHJpbmclJzogWydPYmplY3QnLCAncHJvdG90eXBlJywgJ3RvU3RyaW5nJ10sXG5cdCclT2JqUHJvdG9fdmFsdWVPZiUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnLCAndmFsdWVPZiddLFxuXHQnJVByb21pc2VQcm90b3R5cGUlJzogWydQcm9taXNlJywgJ3Byb3RvdHlwZSddLFxuXHQnJVByb21pc2VQcm90b190aGVuJSc6IFsnUHJvbWlzZScsICdwcm90b3R5cGUnLCAndGhlbiddLFxuXHQnJVByb21pc2VfYWxsJSc6IFsnUHJvbWlzZScsICdhbGwnXSxcblx0JyVQcm9taXNlX3JlamVjdCUnOiBbJ1Byb21pc2UnLCAncmVqZWN0J10sXG5cdCclUHJvbWlzZV9yZXNvbHZlJSc6IFsnUHJvbWlzZScsICdyZXNvbHZlJ10sXG5cdCclUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBbJ1JhbmdlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogWydSZWZlcmVuY2VFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVSZWdFeHBQcm90b3R5cGUlJzogWydSZWdFeHAnLCAncHJvdG90eXBlJ10sXG5cdCclU2V0UHJvdG90eXBlJSc6IFsnU2V0JywgJ3Byb3RvdHlwZSddLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IFsnU2hhcmVkQXJyYXlCdWZmZXInLCAncHJvdG90eXBlJ10sXG5cdCclU3RyaW5nUHJvdG90eXBlJSc6IFsnU3RyaW5nJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN5bWJvbFByb3RvdHlwZSUnOiBbJ1N5bWJvbCcsICdwcm90b3R5cGUnXSxcblx0JyVTeW50YXhFcnJvclByb3RvdHlwZSUnOiBbJ1N5bnRheEVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVkQXJyYXlQcm90b3R5cGUlJzogWydUeXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVFcnJvclByb3RvdHlwZSUnOiBbJ1R5cGVFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OEFycmF5UHJvdG90eXBlJSc6IFsnVWludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQ4Q2xhbXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnVWludDE2QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDMyQXJyYXlQcm90b3R5cGUlJzogWydVaW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVUklFcnJvclByb3RvdHlwZSUnOiBbJ1VSSUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtNYXBQcm90b3R5cGUlJzogWydXZWFrTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtTZXRQcm90b3R5cGUlJzogWydXZWFrU2V0JywgJ3Byb3RvdHlwZSddXG59O1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCdoYXMnKTtcbnZhciAkY29uY2F0ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEFycmF5LnByb3RvdHlwZS5jb25jYXQpO1xudmFyICRzcGxpY2VBcHBseSA9IGJpbmQuY2FsbChGdW5jdGlvbi5hcHBseSwgQXJyYXkucHJvdG90eXBlLnNwbGljZSk7XG52YXIgJHJlcGxhY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcblxuLyogYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvNC4xNy4xNS9kaXN0L2xvZGFzaC5qcyNMNjczNS1MNjc0NCAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14lLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCUkKSkvZztcbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZzsgLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgc3RyaW5nVG9QYXRoID0gZnVuY3Rpb24gc3RyaW5nVG9QYXRoKHN0cmluZykge1xuXHR2YXIgcmVzdWx0ID0gW107XG5cdCRyZXBsYWNlKHN0cmluZywgcmVQcm9wTmFtZSwgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcblx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBxdW90ZSA/ICRyZXBsYWNlKHN1YlN0cmluZywgcmVFc2NhcGVDaGFyLCAnJDEnKSA6IG51bWJlciB8fCBtYXRjaDtcblx0fSk7XG5cdHJldHVybiByZXN1bHQ7XG59O1xuLyogZW5kIGFkYXB0YXRpb24gKi9cblxudmFyIGdldEJhc2VJbnRyaW5zaWMgPSBmdW5jdGlvbiBnZXRCYXNlSW50cmluc2ljKG5hbWUsIGFsbG93TWlzc2luZykge1xuXHR2YXIgaW50cmluc2ljTmFtZSA9IG5hbWU7XG5cdHZhciBhbGlhcztcblx0aWYgKGhhc093bihMRUdBQ1lfQUxJQVNFUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHRhbGlhcyA9IExFR0FDWV9BTElBU0VTW2ludHJpbnNpY05hbWVdO1xuXHRcdGludHJpbnNpY05hbWUgPSAnJScgKyBhbGlhc1swXSArICclJztcblx0fVxuXG5cdGlmIChoYXNPd24oSU5UUklOU0lDUywgaW50cmluc2ljTmFtZSkpIHtcblx0XHR2YXIgdmFsdWUgPSBJTlRSSU5TSUNTW2ludHJpbnNpY05hbWVdO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnICYmICFhbGxvd01pc3NpbmcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIScpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRhbGlhczogYWxpYXMsXG5cdFx0XHRuYW1lOiBpbnRyaW5zaWNOYW1lLFxuXHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0fTtcblx0fVxuXG5cdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZG9lcyBub3QgZXhpc3QhJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEdldEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpbnRyaW5zaWMgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgYWxsb3dNaXNzaW5nICE9PSAnYm9vbGVhbicpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignXCJhbGxvd01pc3NpbmdcIiBhcmd1bWVudCBtdXN0IGJlIGEgYm9vbGVhbicpO1xuXHR9XG5cblx0dmFyIHBhcnRzID0gc3RyaW5nVG9QYXRoKG5hbWUpO1xuXHR2YXIgaW50cmluc2ljQmFzZU5hbWUgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiAnJztcblxuXHR2YXIgaW50cmluc2ljID0gZ2V0QmFzZUludHJpbnNpYygnJScgKyBpbnRyaW5zaWNCYXNlTmFtZSArICclJywgYWxsb3dNaXNzaW5nKTtcblx0dmFyIGludHJpbnNpY1JlYWxOYW1lID0gaW50cmluc2ljLm5hbWU7XG5cdHZhciB2YWx1ZSA9IGludHJpbnNpYy52YWx1ZTtcblx0dmFyIHNraXBGdXJ0aGVyQ2FjaGluZyA9IGZhbHNlO1xuXG5cdHZhciBhbGlhcyA9IGludHJpbnNpYy5hbGlhcztcblx0aWYgKGFsaWFzKSB7XG5cdFx0aW50cmluc2ljQmFzZU5hbWUgPSBhbGlhc1swXTtcblx0XHQkc3BsaWNlQXBwbHkocGFydHMsICRjb25jYXQoWzAsIDFdLCBhbGlhcykpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDEsIGlzT3duID0gdHJ1ZTsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIHBhcnQgPSBwYXJ0c1tpXTtcblx0XHRpZiAocGFydCA9PT0gJ2NvbnN0cnVjdG9yJyB8fCAhaXNPd24pIHtcblx0XHRcdHNraXBGdXJ0aGVyQ2FjaGluZyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aW50cmluc2ljQmFzZU5hbWUgKz0gJy4nICsgcGFydDtcblx0XHRpbnRyaW5zaWNSZWFsTmFtZSA9ICclJyArIGludHJpbnNpY0Jhc2VOYW1lICsgJyUnO1xuXG5cdFx0aWYgKGhhc093bihJTlRSSU5TSUNTLCBpbnRyaW5zaWNSZWFsTmFtZSkpIHtcblx0XHRcdHZhbHVlID0gSU5UUklOU0lDU1tpbnRyaW5zaWNSZWFsTmFtZV07XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoJGdPUEQgJiYgKGkgKyAxKSA+PSBwYXJ0cy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGRlc2MgPSAkZ09QRCh2YWx1ZSwgcGFydCk7XG5cdFx0XHRcdGlzT3duID0gISFkZXNjO1xuXG5cdFx0XHRcdGlmICghYWxsb3dNaXNzaW5nICYmICEocGFydCBpbiB2YWx1ZSkpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYmFzZSBpbnRyaW5zaWMgZm9yICcgKyBuYW1lICsgJyBleGlzdHMsIGJ1dCB0aGUgcHJvcGVydHkgaXMgbm90IGF2YWlsYWJsZS4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBCeSBjb252ZW50aW9uLCB3aGVuIGEgZGF0YSBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdG8gYW4gYWNjZXNzb3Jcblx0XHRcdFx0Ly8gcHJvcGVydHkgdG8gZW11bGF0ZSBhIGRhdGEgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBzdWZmZXIgZnJvbVxuXHRcdFx0XHQvLyB0aGUgb3ZlcnJpZGUgbWlzdGFrZSwgdGhhdCBhY2Nlc3NvcidzIGdldHRlciBpcyBtYXJrZWQgd2l0aFxuXHRcdFx0XHQvLyBhbiBgb3JpZ2luYWxWYWx1ZWAgcHJvcGVydHkuIEhlcmUsIHdoZW4gd2UgZGV0ZWN0IHRoaXMsIHdlXG5cdFx0XHRcdC8vIHVwaG9sZCB0aGUgaWxsdXNpb24gYnkgcHJldGVuZGluZyB0byBzZWUgdGhhdCBvcmlnaW5hbCBkYXRhXG5cdFx0XHRcdC8vIHByb3BlcnR5LCBpLmUuLCByZXR1cm5pbmcgdGhlIHZhbHVlIHJhdGhlciB0aGFuIHRoZSBnZXR0ZXJcblx0XHRcdFx0Ly8gaXRzZWxmLlxuXHRcdFx0XHRpZiAoaXNPd24gJiYgJ2dldCcgaW4gZGVzYyAmJiAhKCdvcmlnaW5hbFZhbHVlJyBpbiBkZXNjLmdldCkpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGRlc2MuZ2V0O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydF07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlzT3duID0gaGFzT3duKHZhbHVlLCBwYXJ0KTtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZVtwYXJ0XTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzT3duICYmICFza2lwRnVydGhlckNhY2hpbmcpIHtcblx0XHRcdFx0SU5UUklOU0lDU1tpbnRyaW5zaWNSZWFsTmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufTtcbiIsIi8vIEBmbG93XG4ndXNlIHN0cmljdCc7XG5cbnZhciBrZXkgPSAnX19nbG9iYWxfdW5pcXVlX2lkX18nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZ2xvYmFsW2tleV0gPSAoZ2xvYmFsW2tleV0gfHwgMCkgKyAxO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9yaWdTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIGhhc1N5bWJvbFNoYW0gPSByZXF1aXJlKCcuL3NoYW1zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzTmF0aXZlU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sKCdmb28nKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sKCdiYXInKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0cmV0dXJuIGhhc1N5bWJvbFNoYW0oKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBjb21wbGV4aXR5OiBbMiwgMThdLCBtYXgtc3RhdGVtZW50czogWzIsIDMzXSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnKSB7IHJldHVybiB0cnVlOyB9XG5cblx0dmFyIG9iaiA9IHt9O1xuXHR2YXIgc3ltID0gU3ltYm9sKCd0ZXN0Jyk7XG5cdHZhciBzeW1PYmogPSBPYmplY3Qoc3ltKTtcblx0aWYgKHR5cGVvZiBzeW0gPT09ICdzdHJpbmcnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltT2JqKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9vYmplY3QuYXNzaWduL2lzc3Vlcy8xN1xuXHQvLyBpZiAoc3ltIGluc3RhbmNlb2YgU3ltYm9sKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMvaXNzdWVzLzRcblx0Ly8gaWYgKCEoc3ltT2JqIGluc3RhbmNlb2YgU3ltYm9sKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyBpZiAodHlwZW9mIFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIGlmIChTdHJpbmcoc3ltKSAhPT0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bVZhbCA9IDQyO1xuXHRvYmpbc3ltXSA9IHN5bVZhbDtcblx0Zm9yIChzeW0gaW4gb2JqKSB7IHJldHVybiBmYWxzZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdGlmICh0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKTtcblx0aWYgKHN5bXMubGVuZ3RoICE9PSAxIHx8IHN5bXNbMF0gIT09IHN5bSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgc3ltKTtcblx0XHRpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gc3ltVmFsIHx8IGRlc2NyaXB0b3IuZW51bWVyYWJsZSAhPT0gdHJ1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzU3RhbmRhcmRBcmd1bWVudHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHRpZiAoaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsdWUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbnZhciBpc0xlZ2FjeUFyZ3VtZW50cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdGlmIChpc1N0YW5kYXJkQXJndW1lbnRzKHZhbHVlKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHR0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJyAmJlxuXHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0dG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IEFycmF5XScgJiZcblx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgc3VwcG9ydHNTdGFuZGFyZEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBpc1N0YW5kYXJkQXJndW1lbnRzKGFyZ3VtZW50cyk7XG59KCkpO1xuXG5pc1N0YW5kYXJkQXJndW1lbnRzLmlzTGVnYWN5QXJndW1lbnRzID0gaXNMZWdhY3lBcmd1bWVudHM7IC8vIGZvciB0ZXN0c1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzU3RhbmRhcmRBcmd1bWVudHMgPyBpc1N0YW5kYXJkQXJndW1lbnRzIDogaXNMZWdhY3lBcmd1bWVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVHZXREYXlDYWxsKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0Z2V0RGF5LmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGRhdGVDbGFzcyA9ICdbb2JqZWN0IERhdGVdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNTeW1ib2xzID0gcmVxdWlyZSgnaGFzLXN5bWJvbHMnKSgpO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gaGFzU3ltYm9scyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcbnZhciBoYXNPd25Qcm9wZXJ0eTtcbnZhciByZWdleEV4ZWM7XG52YXIgaXNSZWdleE1hcmtlcjtcbnZhciBiYWRTdHJpbmdpZmllcjtcblxuaWYgKGhhc1RvU3RyaW5nVGFnKSB7XG5cdGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXHRyZWdleEV4ZWMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoUmVnRXhwLnByb3RvdHlwZS5leGVjKTtcblx0aXNSZWdleE1hcmtlciA9IHt9O1xuXG5cdHZhciB0aHJvd1JlZ2V4TWFya2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdHRocm93IGlzUmVnZXhNYXJrZXI7XG5cdH07XG5cdGJhZFN0cmluZ2lmaWVyID0ge1xuXHRcdHRvU3RyaW5nOiB0aHJvd1JlZ2V4TWFya2VyLFxuXHRcdHZhbHVlT2Y6IHRocm93UmVnZXhNYXJrZXJcblx0fTtcblxuXHRpZiAodHlwZW9mIFN5bWJvbC50b1ByaW1pdGl2ZSA9PT0gJ3N5bWJvbCcpIHtcblx0XHRiYWRTdHJpbmdpZmllcltTeW1ib2wudG9QcmltaXRpdmVdID0gdGhyb3dSZWdleE1hcmtlcjtcblx0fVxufVxuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIHJlZ2V4Q2xhc3MgPSAnW29iamVjdCBSZWdFeHBdJztcblxubW9kdWxlLmV4cG9ydHMgPSBoYXNUb1N0cmluZ1RhZ1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cblx0PyBmdW5jdGlvbiBpc1JlZ2V4KHZhbHVlKSB7XG5cdFx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBnT1BEKHZhbHVlLCAnbGFzdEluZGV4Jyk7XG5cdFx0dmFyIGhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgaGFzT3duUHJvcGVydHkoZGVzY3JpcHRvciwgJ3ZhbHVlJyk7XG5cdFx0aWYgKCFoYXNMYXN0SW5kZXhEYXRhUHJvcGVydHkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0cmVnZXhFeGVjKHZhbHVlLCBiYWRTdHJpbmdpZmllcik7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGUgPT09IGlzUmVnZXhNYXJrZXI7XG5cdFx0fVxuXHR9XG5cdDogZnVuY3Rpb24gaXNSZWdleCh2YWx1ZSkge1xuXHRcdC8vIEluIG9sZGVyIGJyb3dzZXJzLCB0eXBlb2YgcmVnZXggaW5jb3JyZWN0bHkgcmV0dXJucyAnZnVuY3Rpb24nXG5cdFx0aWYgKCF2YWx1ZSB8fCAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSByZWdleENsYXNzO1xuXHR9O1xuIiwiLy8gdGhlIHdoYXR3Zy1mZXRjaCBwb2x5ZmlsbCBpbnN0YWxscyB0aGUgZmV0Y2goKSBmdW5jdGlvblxuLy8gb24gdGhlIGdsb2JhbCBvYmplY3QgKHdpbmRvdyBvciBzZWxmKVxuLy9cbi8vIFJldHVybiB0aGF0IGFzIHRoZSBleHBvcnQgZm9yIHVzZSBpbiBXZWJwYWNrLCBCcm93c2VyaWZ5IGV0Yy5cbnJlcXVpcmUoJ3doYXR3Zy1mZXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBzZWxmLmZldGNoLmJpbmQoc2VsZik7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBudW1iZXJJc05hTiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpcyhhLCBiKSB7XG5cdGlmIChhID09PSAwICYmIGIgPT09IDApIHtcblx0XHRyZXR1cm4gMSAvIGEgPT09IDEgLyBiO1xuXHR9XG5cdGlmIChhID09PSBiKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKG51bWJlcklzTmFOKGEpICYmIG51bWJlcklzTmFOKGIpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJ2NhbGwtYmluZCcpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgc2hpbSA9IHJlcXVpcmUoJy4vc2hpbScpO1xuXG52YXIgcG9seWZpbGwgPSBjYWxsQmluZChnZXRQb2x5ZmlsbCgpLCBPYmplY3QpO1xuXG5kZWZpbmUocG9seWZpbGwsIHtcblx0Z2V0UG9seWZpbGw6IGdldFBvbHlmaWxsLFxuXHRpbXBsZW1lbnRhdGlvbjogaW1wbGVtZW50YXRpb24sXG5cdHNoaW06IHNoaW1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvbHlmaWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdHJldHVybiB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaW1wbGVtZW50YXRpb247XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLXByb3BlcnRpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltT2JqZWN0SXMoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cdGRlZmluZShPYmplY3QsIHsgaXM6IHBvbHlmaWxsIH0sIHtcblx0XHRpczogZnVuY3Rpb24gdGVzdE9iamVjdElzKCkge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5pcyAhPT0gcG9seWZpbGw7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXNTaGltO1xuaWYgKCFPYmplY3Qua2V5cykge1xuXHQvLyBtb2RpZmllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbVxuXHR2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblx0dmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblx0dmFyIGlzQXJncyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBnbG9iYWwtcmVxdWlyZVxuXHR2YXIgaXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblx0dmFyIGhhc0RvbnRFbnVtQnVnID0gIWlzRW51bWVyYWJsZS5jYWxsKHsgdG9TdHJpbmc6IG51bGwgfSwgJ3RvU3RyaW5nJyk7XG5cdHZhciBoYXNQcm90b0VudW1CdWcgPSBpc0VudW1lcmFibGUuY2FsbChmdW5jdGlvbiAoKSB7fSwgJ3Byb3RvdHlwZScpO1xuXHR2YXIgZG9udEVudW1zID0gW1xuXHRcdCd0b1N0cmluZycsXG5cdFx0J3RvTG9jYWxlU3RyaW5nJyxcblx0XHQndmFsdWVPZicsXG5cdFx0J2hhc093blByb3BlcnR5Jyxcblx0XHQnaXNQcm90b3R5cGVPZicsXG5cdFx0J3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcblx0XHQnY29uc3RydWN0b3InXG5cdF07XG5cdHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0dmFyIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuXHRcdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xuXHR9O1xuXHR2YXIgZXhjbHVkZWRLZXlzID0ge1xuXHRcdCRhcHBsaWNhdGlvbkNhY2hlOiB0cnVlLFxuXHRcdCRjb25zb2xlOiB0cnVlLFxuXHRcdCRleHRlcm5hbDogdHJ1ZSxcblx0XHQkZnJhbWU6IHRydWUsXG5cdFx0JGZyYW1lRWxlbWVudDogdHJ1ZSxcblx0XHQkZnJhbWVzOiB0cnVlLFxuXHRcdCRpbm5lckhlaWdodDogdHJ1ZSxcblx0XHQkaW5uZXJXaWR0aDogdHJ1ZSxcblx0XHQkb25tb3pmdWxsc2NyZWVuY2hhbmdlOiB0cnVlLFxuXHRcdCRvbm1vemZ1bGxzY3JlZW5lcnJvcjogdHJ1ZSxcblx0XHQkb3V0ZXJIZWlnaHQ6IHRydWUsXG5cdFx0JG91dGVyV2lkdGg6IHRydWUsXG5cdFx0JHBhZ2VYT2Zmc2V0OiB0cnVlLFxuXHRcdCRwYWdlWU9mZnNldDogdHJ1ZSxcblx0XHQkcGFyZW50OiB0cnVlLFxuXHRcdCRzY3JvbGxMZWZ0OiB0cnVlLFxuXHRcdCRzY3JvbGxUb3A6IHRydWUsXG5cdFx0JHNjcm9sbFg6IHRydWUsXG5cdFx0JHNjcm9sbFk6IHRydWUsXG5cdFx0JHNlbGY6IHRydWUsXG5cdFx0JHdlYmtpdEluZGV4ZWREQjogdHJ1ZSxcblx0XHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdFx0JHdpbmRvdzogdHJ1ZVxuXHR9O1xuXHR2YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0XHQvKiBnbG9iYWwgd2luZG93ICovXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoIWV4Y2x1ZGVkS2V5c1snJCcgKyBrXSAmJiBoYXMuY2FsbCh3aW5kb3csIGspICYmIHdpbmRvd1trXSAhPT0gbnVsbCAmJiB0eXBlb2Ygd2luZG93W2tdID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSh3aW5kb3dba10pO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9KCkpO1xuXHR2YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0XHQvKiBnbG9iYWwgd2luZG93ICovXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcpIHtcblx0XHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHR2YXIgaXNPYmplY3QgPSBvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCc7XG5cdFx0dmFyIGlzRnVuY3Rpb24gPSB0b1N0ci5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdFx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdFx0dmFyIGlzU3RyaW5nID0gaXNPYmplY3QgJiYgdG9TdHIuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBTdHJpbmddJztcblx0XHR2YXIgdGhlS2V5cyA9IFtdO1xuXG5cdFx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5rZXlzIGNhbGxlZCBvbiBhIG5vbi1vYmplY3QnKTtcblx0XHR9XG5cblx0XHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdFx0aWYgKGlzU3RyaW5nICYmIG9iamVjdC5sZW5ndGggPiAwICYmICFoYXMuY2FsbChvYmplY3QsIDApKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgb2JqZWN0Lmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdHRoZUtleXMucHVzaChTdHJpbmcoaikpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKHZhciBuYW1lIGluIG9iamVjdCkge1xuXHRcdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKG5hbWUpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChoYXNEb250RW51bUJ1Zykge1xuXHRcdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGRvbnRFbnVtcy5sZW5ndGg7ICsraykge1xuXHRcdFx0XHRpZiAoIShza2lwQ29uc3RydWN0b3IgJiYgZG9udEVudW1zW2tdID09PSAnY29uc3RydWN0b3InKSAmJiBoYXMuY2FsbChvYmplY3QsIGRvbnRFbnVtc1trXSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhlS2V5cztcblx0fTtcbn1cbm1vZHVsZS5leHBvcnRzID0ga2V5c1NoaW07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBpc0FyZ3MgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyk7XG5cbnZhciBvcmlnS2V5cyA9IE9iamVjdC5rZXlzO1xudmFyIGtleXNTaGltID0gb3JpZ0tleXMgPyBmdW5jdGlvbiBrZXlzKG8pIHsgcmV0dXJuIG9yaWdLZXlzKG8pOyB9IDogcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG52YXIgb3JpZ2luYWxLZXlzID0gT2JqZWN0LmtleXM7XG5cbmtleXNTaGltLnNoaW0gPSBmdW5jdGlvbiBzaGltT2JqZWN0S2V5cygpIHtcblx0aWYgKE9iamVjdC5rZXlzKSB7XG5cdFx0dmFyIGtleXNXb3Jrc1dpdGhBcmd1bWVudHMgPSAoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gU2FmYXJpIDUuMCBidWdcblx0XHRcdHZhciBhcmdzID0gT2JqZWN0LmtleXMoYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBhcmdzICYmIGFyZ3MubGVuZ3RoID09PSBhcmd1bWVudHMubGVuZ3RoO1xuXHRcdH0oMSwgMikpO1xuXHRcdGlmICgha2V5c1dvcmtzV2l0aEFyZ3VtZW50cykge1xuXHRcdFx0T2JqZWN0LmtleXMgPSBmdW5jdGlvbiBrZXlzKG9iamVjdCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuXHRcdFx0XHRpZiAoaXNBcmdzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxLZXlzKHNsaWNlLmNhbGwob2JqZWN0KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhvYmplY3QpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJncyA9IHN0ciA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cdGlmICghaXNBcmdzKSB7XG5cdFx0aXNBcmdzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0XHR2YWx1ZSAhPT0gbnVsbCAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0dHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcblx0XHRcdHZhbHVlLmxlbmd0aCA+PSAwICYmXG5cdFx0XHR0b1N0ci5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJncztcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRm9yY2VVcGRhdGUgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRm9yY2VVcGRhdGUnO1xuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVByZXZpb3VzJztcbmltcG9ydCBUeXBlYWhlYWQgZnJvbSAnLi4vY29yZS9UeXBlYWhlYWQnO1xuaW1wb3J0IHsgb3B0aW9uVHlwZSB9IGZyb20gJy4uL3Byb3BUeXBlcyc7XG5pbXBvcnQgeyBnZXREaXNwbGF5TmFtZSwgaXNGdW5jdGlvbiwgd2FybiB9IGZyb20gJy4uL3V0aWxzJztcbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBEZWxheSwgaW4gbWlsbGlzZWNvbmRzLCBiZWZvcmUgcGVyZm9ybWluZyBzZWFyY2guXG4gICAqL1xuICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgYSByZXF1ZXN0IGlzIGN1cnJlbnRseSBwZW5kaW5nLiBOZWNlc3NhcnkgZm9yIHRoZVxuICAgKiBjb250YWluZXIgdG8ga25vdyB3aGVuIG5ldyByZXN1bHRzIGFyZSBhdmFpbGFibGUuXG4gICAqL1xuICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBpbnB1dCBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBlbnRlcmVkIGJlZm9yZSBzaG93aW5nIHJlc3VsdHMuXG4gICAqL1xuICBtaW5MZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIHBlcmZvcm0gd2hlbiB0aGUgc2VhcmNoIGlzIGV4ZWN1dGVkLlxuICAgKi9cbiAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE9wdGlvbnMgdG8gYmUgcGFzc2VkIHRvIHRoZSB0eXBlYWhlYWQuIFdpbGwgdHlwaWNhbGx5IGJlIHRoZSBxdWVyeVxuICAgKiByZXN1bHRzLCBidXQgY2FuIGFsc28gYmUgaW5pdGlhbCBkZWZhdWx0IG9wdGlvbnMuXG4gICAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihvcHRpb25UeXBlKSxcblxuICAvKipcbiAgICogTWVzc2FnZSBkaXNwbGF5ZWQgaW4gdGhlIG1lbnUgd2hlbiB0aGVyZSBpcyBubyB1c2VyIGlucHV0LlxuICAgKi9cbiAgcHJvbXB0VGV4dDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgZGlzcGxheWVkIGluIHRoZSBtZW51IHdoaWxlIHRoZSByZXF1ZXN0IGlzIHBlbmRpbmcuXG4gICAqL1xuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBzaG91bGQgY2FjaGUgcXVlcnkgcmVzdWx0cy5cbiAgICovXG4gIHVzZUNhY2hlOiBQcm9wVHlwZXMuYm9vbFxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRlbGF5OiAyMDAsXG4gIG1pbkxlbmd0aDogMixcbiAgb3B0aW9uczogW10sXG4gIHByb21wdFRleHQ6ICdUeXBlIHRvIHNlYXJjaC4uLicsXG4gIHNlYXJjaFRleHQ6ICdTZWFyY2hpbmcuLi4nLFxuICB1c2VDYWNoZTogdHJ1ZVxufTtcblxuLyoqXG4gKiBMb2dpYyB0aGF0IGVuY2Fwc3VsYXRlcyBjb21tb24gYmVoYXZpb3IgYW5kIGZ1bmN0aW9uYWxpdHkgYXJvdW5kXG4gKiBhc3luY2hyb25vdXMgc2VhcmNoZXMsIGluY2x1ZGluZzpcbiAqXG4gKiAgLSBEZWJvdW5jaW5nIHVzZXIgaW5wdXRcbiAqICAtIE9wdGlvbmFsIHF1ZXJ5IGNhY2hpbmdcbiAqICAtIFNlYXJjaCBwcm9tcHQgYW5kIGVtcHR5IHJlc3VsdHMgYmVoYXZpb3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBc3luYyhwcm9wcykge1xuICB2YXIgYWxsb3dOZXcgPSBwcm9wcy5hbGxvd05ldyxcbiAgICAgIGRlbGF5ID0gcHJvcHMuZGVsYXksXG4gICAgICBlbXB0eUxhYmVsID0gcHJvcHMuZW1wdHlMYWJlbCxcbiAgICAgIGlzTG9hZGluZyA9IHByb3BzLmlzTG9hZGluZyxcbiAgICAgIG1pbkxlbmd0aCA9IHByb3BzLm1pbkxlbmd0aCxcbiAgICAgIG9uSW5wdXRDaGFuZ2UgPSBwcm9wcy5vbklucHV0Q2hhbmdlLFxuICAgICAgb25TZWFyY2ggPSBwcm9wcy5vblNlYXJjaCxcbiAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLFxuICAgICAgcHJvbXB0VGV4dCA9IHByb3BzLnByb21wdFRleHQsXG4gICAgICBzZWFyY2hUZXh0ID0gcHJvcHMuc2VhcmNoVGV4dCxcbiAgICAgIHVzZUNhY2hlID0gcHJvcHMudXNlQ2FjaGUsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImFsbG93TmV3XCIsIFwiZGVsYXlcIiwgXCJlbXB0eUxhYmVsXCIsIFwiaXNMb2FkaW5nXCIsIFwibWluTGVuZ3RoXCIsIFwib25JbnB1dENoYW5nZVwiLCBcIm9uU2VhcmNoXCIsIFwib3B0aW9uc1wiLCBcInByb21wdFRleHRcIiwgXCJzZWFyY2hUZXh0XCIsIFwidXNlQ2FjaGVcIl0pO1xuXG4gIHZhciBjYWNoZVJlZiA9IHVzZVJlZih7fSk7XG4gIHZhciBoYW5kbGVTZWFyY2hEZWJvdW5jZWRSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIHF1ZXJ5UmVmID0gdXNlUmVmKHByb3BzLmRlZmF1bHRJbnB1dFZhbHVlIHx8ICcnKTtcbiAgdmFyIGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAgdmFyIHByZXZQcm9wcyA9IHVzZVByZXZpb3VzKHByb3BzKTtcbiAgdmFyIGhhbmRsZVNlYXJjaCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHF1ZXJ5UmVmLmN1cnJlbnQgPSBxdWVyeTtcblxuICAgIGlmICghcXVlcnkgfHwgbWluTGVuZ3RoICYmIHF1ZXJ5Lmxlbmd0aCA8IG1pbkxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVXNlIGNhY2hlZCByZXN1bHRzLCBpZiBhcHBsaWNhYmxlLlxuXG5cbiAgICBpZiAodXNlQ2FjaGUgJiYgY2FjaGVSZWYuY3VycmVudFtxdWVyeV0pIHtcbiAgICAgIC8vIFJlLXJlbmRlciB0aGUgY29tcG9uZW50IHdpdGggdGhlIGNhY2hlZCByZXN1bHRzLlxuICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFBlcmZvcm0gdGhlIHNlYXJjaC5cblxuXG4gICAgb25TZWFyY2gocXVlcnkpO1xuICB9LCBbZm9yY2VVcGRhdGUsIG1pbkxlbmd0aCwgb25TZWFyY2gsIHVzZUNhY2hlXSk7IC8vIFNldCB0aGUgZGVib3VuY2VkIHNlYXJjaCBmdW5jdGlvbi5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGhhbmRsZVNlYXJjaERlYm91bmNlZFJlZi5jdXJyZW50ID0gZGVib3VuY2UoaGFuZGxlU2VhcmNoLCBkZWxheSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVNlYXJjaERlYm91bmNlZFJlZi5jdXJyZW50ICYmIGhhbmRsZVNlYXJjaERlYm91bmNlZFJlZi5jdXJyZW50LmNhbmNlbCgpO1xuICAgIH07XG4gIH0sIFtkZWxheSwgaGFuZGxlU2VhcmNoXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gRW5zdXJlIHRoYXQgd2UndmUgZ29uZSBmcm9tIGEgbG9hZGluZyB0byBhIGNvbXBsZXRlZCBzdGF0ZS4gT3RoZXJ3aXNlXG4gICAgLy8gYW4gZW1wdHkgcmVzcG9uc2UgY291bGQgZ2V0IGNhY2hlZCBpZiB0aGUgY29tcG9uZW50IHVwZGF0ZXMgZHVyaW5nIHRoZVxuICAgIC8vIHJlcXVlc3QgKGVnOiBpZiB0aGUgcGFyZW50IHJlLXJlbmRlcnMgZm9yIHNvbWUgcmVhc29uKS5cbiAgICBpZiAoIWlzTG9hZGluZyAmJiBwcmV2UHJvcHMgJiYgcHJldlByb3BzLmlzTG9hZGluZyAmJiB1c2VDYWNoZSkge1xuICAgICAgY2FjaGVSZWYuY3VycmVudFtxdWVyeVJlZi5jdXJyZW50XSA9IG9wdGlvbnM7XG4gICAgfVxuICB9KTtcblxuICB2YXIgZ2V0RW1wdHlMYWJlbCA9IGZ1bmN0aW9uIGdldEVtcHR5TGFiZWwoKSB7XG4gICAgaWYgKCFxdWVyeVJlZi5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHByb21wdFRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIHNlYXJjaFRleHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtcHR5TGFiZWw7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUlucHV0Q2hhbmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHF1ZXJ5LCBlKSB7XG4gICAgb25JbnB1dENoYW5nZSAmJiBvbklucHV0Q2hhbmdlKHF1ZXJ5LCBlKTtcbiAgICBoYW5kbGVTZWFyY2hEZWJvdW5jZWRSZWYuY3VycmVudCAmJiBoYW5kbGVTZWFyY2hEZWJvdW5jZWRSZWYuY3VycmVudChxdWVyeSk7XG4gIH0sIFtvbklucHV0Q2hhbmdlXSk7XG4gIHZhciBjYWNoZWRRdWVyeSA9IGNhY2hlUmVmLmN1cnJlbnRbcXVlcnlSZWYuY3VycmVudF07XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgIC8vIERpc2FibGUgY3VzdG9tIHNlbGVjdGlvbnMgZHVyaW5nIGEgc2VhcmNoIGlmIGBhbGxvd05ld2AgaXNuJ3QgYSBmdW5jdGlvbi5cbiAgICBhbGxvd05ldzogaXNGdW5jdGlvbihhbGxvd05ldykgPyBhbGxvd05ldyA6IGFsbG93TmV3ICYmICFpc0xvYWRpbmcsXG4gICAgZW1wdHlMYWJlbDogZ2V0RW1wdHlMYWJlbCgpLFxuICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoLFxuICAgIG9uSW5wdXRDaGFuZ2U6IGhhbmRsZUlucHV0Q2hhbmdlLFxuICAgIG9wdGlvbnM6IHVzZUNhY2hlICYmIGNhY2hlZFF1ZXJ5ID8gY2FjaGVkUXVlcnkgOiBvcHRpb25zXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBc3luYyhDb21wb25lbnQpIHtcbiAgdmFyIEFzeW5jVHlwZWFoZWFkID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdXNlQXN5bmMocHJvcHMpLCB7XG4gICAgICByZWY6IHJlZlxuICAgIH0pKTtcbiAgfSk7XG4gIEFzeW5jVHlwZWFoZWFkLmRpc3BsYXlOYW1lID0gXCJ3aXRoQXN5bmMoXCIgKyBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpICsgXCIpXCI7IC8vICRGbG93Rml4TWVcblxuICBBc3luY1R5cGVhaGVhZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICBBc3luY1R5cGVhaGVhZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4gIHJldHVybiBBc3luY1R5cGVhaGVhZDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzeW5jQ29udGFpbmVyKENvbXBvbmVudCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB3YXJuKGZhbHNlLCAnVGhlIGBhc3luY0NvbnRhaW5lcmAgZXhwb3J0IGlzIGRlcHJlY2F0ZWQ7IHVzZSBgd2l0aEFzeW5jYCBpbnN0ZWFkLicpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gIHJldHVybiB3aXRoQXN5bmMoQ29tcG9uZW50KTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RGlzcGxheU5hbWUsIGlzU2l6ZUxhcmdlLCBpc1NpemVTbWFsbCB9IGZyb20gJy4uL3V0aWxzJztcblxuZnVuY3Rpb24gd2l0aENsYXNzTmFtZXMoQ29tcG9uZW50KSB7XG4gIC8vIFVzZSBhIGNsYXNzIGluc3RlYWQgb2YgZnVuY3Rpb24gY29tcG9uZW50IHRvIHN1cHBvcnQgcmVmcy5cblxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvbiAqL1xuICB2YXIgV3JhcHBlZENvbXBvbmVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFdyYXBwZWRDb21wb25lbnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gV3JhcHBlZENvbXBvbmVudCgpIHtcbiAgICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvID0gV3JhcHBlZENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgaXNJbnZhbGlkID0gX3RoaXMkcHJvcHMuaXNJbnZhbGlkLFxuICAgICAgICAgIGlzVmFsaWQgPSBfdGhpcyRwcm9wcy5pc1ZhbGlkLFxuICAgICAgICAgIHNpemUgPSBfdGhpcyRwcm9wcy5zaXplLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcImlzSW52YWxpZFwiLCBcImlzVmFsaWRcIiwgXCJzaXplXCJdKTtcblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY3goJ2Zvcm0tY29udHJvbCcsICdyYnQtaW5wdXQnLCB7XG4gICAgICAgICAgJ2Zvcm0tY29udHJvbC1sZyc6IGlzU2l6ZUxhcmdlKHNpemUpLFxuICAgICAgICAgICdmb3JtLWNvbnRyb2wtc20nOiBpc1NpemVTbWFsbChzaXplKSxcbiAgICAgICAgICAnaXMtaW52YWxpZCc6IGlzSW52YWxpZCxcbiAgICAgICAgICAnaXMtdmFsaWQnOiBpc1ZhbGlkXG4gICAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQ7XG4gIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICBfZGVmaW5lUHJvcGVydHkoV3JhcHBlZENvbXBvbmVudCwgXCJkaXNwbGF5TmFtZVwiLCBcIndpdGhDbGFzc05hbWVzKFwiICsgZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSArIFwiKVwiKTtcblxuICByZXR1cm4gV3JhcHBlZENvbXBvbmVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENsYXNzTmFtZXM7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgc2Nyb2xsSW50b1ZpZXcgZnJvbSAnc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VUeXBlYWhlYWRDb250ZXh0IH0gZnJvbSAnLi4vY29yZS9Db250ZXh0JztcbmltcG9ydCB7IGdldERpc3BsYXlOYW1lLCBnZXRNZW51SXRlbUlkLCBwcmV2ZW50SW5wdXRCbHVyLCB3YXJuIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgb3B0aW9uVHlwZSB9IGZyb20gJy4uL3Byb3BUeXBlcyc7XG52YXIgcHJvcFR5cGVzID0ge1xuICBvcHRpb246IG9wdGlvblR5cGUuaXNSZXF1aXJlZCxcbiAgcG9zaXRpb246IFByb3BUeXBlcy5udW1iZXJcbn07XG5leHBvcnQgdmFyIHVzZUl0ZW0gPSBmdW5jdGlvbiB1c2VJdGVtKF9yZWYpIHtcbiAgdmFyIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIG9uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBvcHRpb24gPSBfcmVmLm9wdGlvbixcbiAgICAgIHBvc2l0aW9uID0gX3JlZi5wb3NpdGlvbixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wibGFiZWxcIiwgXCJvbkNsaWNrXCIsIFwib3B0aW9uXCIsIFwicG9zaXRpb25cIl0pO1xuXG4gIHZhciBfdXNlVHlwZWFoZWFkQ29udGV4dCA9IHVzZVR5cGVhaGVhZENvbnRleHQoKSxcbiAgICAgIGFjdGl2ZUluZGV4ID0gX3VzZVR5cGVhaGVhZENvbnRleHQuYWN0aXZlSW5kZXgsXG4gICAgICBpZCA9IF91c2VUeXBlYWhlYWRDb250ZXh0LmlkLFxuICAgICAgaXNPbmx5UmVzdWx0ID0gX3VzZVR5cGVhaGVhZENvbnRleHQuaXNPbmx5UmVzdWx0LFxuICAgICAgb25BY3RpdmVJdGVtQ2hhbmdlID0gX3VzZVR5cGVhaGVhZENvbnRleHQub25BY3RpdmVJdGVtQ2hhbmdlLFxuICAgICAgb25Jbml0aWFsSXRlbUNoYW5nZSA9IF91c2VUeXBlYWhlYWRDb250ZXh0Lm9uSW5pdGlhbEl0ZW1DaGFuZ2UsXG4gICAgICBvbk1lbnVJdGVtQ2xpY2sgPSBfdXNlVHlwZWFoZWFkQ29udGV4dC5vbk1lbnVJdGVtQ2xpY2ssXG4gICAgICBzZXRJdGVtID0gX3VzZVR5cGVhaGVhZENvbnRleHQuc2V0SXRlbTtcblxuICB2YXIgaXRlbVJlZiA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocG9zaXRpb24gPT09IDApIHtcbiAgICAgIG9uSW5pdGlhbEl0ZW1DaGFuZ2Uob3B0aW9uKTtcbiAgICB9XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgIG9uQWN0aXZlSXRlbUNoYW5nZShvcHRpb24pOyAvLyBBdXRvbWF0aWNhbGx5IHNjcm9sbCB0aGUgbWVudSBhcyB0aGUgdXNlciBrZXlzIHRocm91Z2ggaXQuXG5cbiAgICAgIHZhciBub2RlID0gaXRlbVJlZi5jdXJyZW50O1xuICAgICAgbm9kZSAmJiBzY3JvbGxJbnRvVmlldyhub2RlLCB7XG4gICAgICAgIGJsb2NrOiAnbmVhcmVzdCcsXG4gICAgICAgIGJvdW5kYXJ5OiBub2RlLnBhcmVudE5vZGUsXG4gICAgICAgIGlubGluZTogJ25lYXJlc3QnLFxuICAgICAgICBzY3JvbGxNb2RlOiAnaWYtbmVlZGVkJ1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcbiAgICBvbk1lbnVJdGVtQ2xpY2sob3B0aW9uLCBlKTtcbiAgICBvbkNsaWNrICYmIG9uQ2xpY2soZSk7XG4gIH0sIFtvbkNsaWNrLCBvbk1lbnVJdGVtQ2xpY2ssIG9wdGlvbl0pO1xuICB2YXIgYWN0aXZlID0gaXNPbmx5UmVzdWx0IHx8IGFjdGl2ZUluZGV4ID09PSBwb3NpdGlvbjsgLy8gVXBkYXRlIHRoZSBpdGVtJ3MgcG9zaXRpb24gaW4gdGhlIGl0ZW0gc3RhY2suXG5cbiAgc2V0SXRlbShvcHRpb24sIHBvc2l0aW9uKTtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICdhcmlhLWxhYmVsJzogbGFiZWwsXG4gICAgJ2FyaWEtc2VsZWN0ZWQnOiBhY3RpdmUsXG4gICAgaWQ6IGdldE1lbnVJdGVtSWQoaWQsIHBvc2l0aW9uKSxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICBvbk1vdXNlRG93bjogcHJldmVudElucHV0Qmx1cixcbiAgICByZWY6IGl0ZW1SZWYsXG4gICAgcm9sZTogJ29wdGlvbidcbiAgfSk7XG59O1xuZXhwb3J0IHZhciB3aXRoSXRlbSA9IGZ1bmN0aW9uIHdpdGhJdGVtKENvbXBvbmVudCkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBcIndpdGhJdGVtKFwiICsgZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSArIFwiKVwiO1xuXG4gIHZhciBXcmFwcGVkTWVudUl0ZW0gPSBmdW5jdGlvbiBXcmFwcGVkTWVudUl0ZW0ocHJvcHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCB1c2VJdGVtKHByb3BzKSk7XG4gIH07XG5cbiAgV3JhcHBlZE1lbnVJdGVtLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gIFdyYXBwZWRNZW51SXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG4gIHJldHVybiBXcmFwcGVkTWVudUl0ZW07XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUl0ZW1Db250YWluZXIoQ29tcG9uZW50KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHdhcm4oZmFsc2UsICdUaGUgYG1lbnVJdGVtQ29udGFpbmVyYCBleHBvcnQgaXMgZGVwcmVjYXRlZDsgdXNlIGB3aXRoSXRlbWAgaW5zdGVhZC4nKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuICByZXR1cm4gd2l0aEl0ZW0oQ29tcG9uZW50KTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlUm9vdENsb3NlIGZyb20gXCJyZWFjdC1vdmVybGF5cy91c2VSb290Q2xvc2VcIjtcbmltcG9ydCB7IGdldERpc3BsYXlOYW1lLCBpc0Z1bmN0aW9uLCB3YXJuIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQkFDS1NQQUNFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IG9wdGlvblR5cGUgfSBmcm9tICcuLi9wcm9wVHlwZXMnO1xudmFyIHByb3BUeXBlcyA9IHtcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9wdGlvbjogb3B0aW9uVHlwZS5pc1JlcXVpcmVkXG59O1xuZXhwb3J0IHZhciB1c2VUb2tlbiA9IGZ1bmN0aW9uIHVzZVRva2VuKF9yZWYpIHtcbiAgdmFyIG9uQmx1ciA9IF9yZWYub25CbHVyLFxuICAgICAgb25DbGljayA9IF9yZWYub25DbGljayxcbiAgICAgIG9uRm9jdXMgPSBfcmVmLm9uRm9jdXMsXG4gICAgICBvblJlbW92ZSA9IF9yZWYub25SZW1vdmUsXG4gICAgICBvcHRpb24gPSBfcmVmLm9wdGlvbixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wib25CbHVyXCIsIFwib25DbGlja1wiLCBcIm9uRm9jdXNcIiwgXCJvblJlbW92ZVwiLCBcIm9wdGlvblwiXSk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIGFjdGl2ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldEFjdGl2ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgX3VzZVN0YXRlMiA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgcm9vdEVsZW1lbnQgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgYXR0YWNoUmVmID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgaGFuZGxlQWN0aXZlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQWN0aXZlQ2hhbmdlKGUsIGlzQWN0aXZlLCBjYWxsYmFjaykge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgc2V0QWN0aXZlKGlzQWN0aXZlKTtcbiAgICB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgY2FsbGJhY2soZSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUJsdXIgPSBmdW5jdGlvbiBoYW5kbGVCbHVyKGUpIHtcbiAgICBoYW5kbGVBY3RpdmVDaGFuZ2UoZSwgZmFsc2UsIG9uQmx1cik7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGhhbmRsZUFjdGl2ZUNoYW5nZShlLCB0cnVlLCBvbkNsaWNrKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiBoYW5kbGVGb2N1cyhlKSB7XG4gICAgaGFuZGxlQWN0aXZlQ2hhbmdlKGUsIHRydWUsIG9uRm9jdXMpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVSZW1vdmUgPSBmdW5jdGlvbiBoYW5kbGVSZW1vdmUoKSB7XG4gICAgb25SZW1vdmUgJiYgb25SZW1vdmUob3B0aW9uKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZSkge1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEJBQ0tTUEFDRTpcbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgIC8vIFByZXZlbnQgYmFja3NwYWNlIGtleXByZXNzIGZyb20gdHJpZ2dlcmluZyB0aGUgYnJvd3NlciBcImJhY2tcIlxuICAgICAgICAgIC8vIGFjdGlvbi5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaGFuZGxlUmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIHVzZVJvb3RDbG9zZShyb290RWxlbWVudCwgaGFuZGxlQmx1ciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgZGlzYWJsZWQ6ICFhY3RpdmVcbiAgfSkpO1xuICByZXR1cm4gX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICBvblJlbW92ZTogaXNGdW5jdGlvbihvblJlbW92ZSkgPyBoYW5kbGVSZW1vdmUgOiB1bmRlZmluZWQsXG4gICAgcmVmOiBhdHRhY2hSZWZcbiAgfSk7XG59O1xuZXhwb3J0IHZhciB3aXRoVG9rZW4gPSBmdW5jdGlvbiB3aXRoVG9rZW4oQ29tcG9uZW50KSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IFwid2l0aFRva2VuKFwiICsgZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSArIFwiKVwiO1xuXG4gIHZhciBXcmFwcGVkVG9rZW4gPSBmdW5jdGlvbiBXcmFwcGVkVG9rZW4ocHJvcHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCB1c2VUb2tlbihwcm9wcykpO1xuICB9O1xuXG4gIFdyYXBwZWRUb2tlbi5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICBXcmFwcGVkVG9rZW4ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuICByZXR1cm4gV3JhcHBlZFRva2VuO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRva2VuQ29udGFpbmVyKENvbXBvbmVudCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB3YXJuKGZhbHNlLCAnVGhlIGB0b2tlbkNvbnRhaW5lcmAgZXhwb3J0IGlzIGRlcHJlY2F0ZWQ7IHVzZSBgd2l0aFRva2VuYCBpbnN0ZWFkLicpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gIHJldHVybiB3aXRoVG9rZW4oQ29tcG9uZW50KTtcbn0iLCJpbXBvcnQgeyB3aXRoQXN5bmMgfSBmcm9tICcuLi9iZWhhdmlvcnMvYXN5bmMnO1xuaW1wb3J0IFR5cGVhaGVhZCBmcm9tICcuL1R5cGVhaGVhZCc7XG5leHBvcnQgZGVmYXVsdCB3aXRoQXN5bmMoVHlwZWFoZWFkKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgaXNTaXplTGFyZ2UsIG5vb3AgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBzaXplVHlwZSB9IGZyb20gJy4uL3Byb3BUeXBlcyc7XG5pbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICcuLi9jb25zdGFudHMnO1xudmFyIHByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBzaXplOiBzaXplVHlwZVxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnQ2xlYXInLFxuICBvbkNsaWNrOiBub29wLFxuICBvbktleURvd246IG5vb3Bcbn07XG5cbi8qKlxuICogQ2xlYXJCdXR0b25cbiAqXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9jc3MvI2hlbHBlci1jbGFzc2VzLWNsb3NlXG4gKi9cbnZhciBDbGVhckJ1dHRvbiA9IGZ1bmN0aW9uIENsZWFyQnV0dG9uKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgX29uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBfb25LZXlEb3duID0gX3JlZi5vbktleURvd24sXG4gICAgICBzaXplID0gX3JlZi5zaXplLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJjbGFzc05hbWVcIiwgXCJsYWJlbFwiLCBcIm9uQ2xpY2tcIiwgXCJvbktleURvd25cIiwgXCJzaXplXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLFxuICAgIGNsYXNzTmFtZTogY3goJ2Nsb3NlJywgJ3JidC1jbG9zZScsIHtcbiAgICAgICdyYnQtY2xvc2UtbGcnOiBpc1NpemVMYXJnZShzaXplKVxuICAgIH0sIGNsYXNzTmFtZSksXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBfb25DbGljayhlKTtcbiAgICB9LFxuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgIC8vIFByZXZlbnQgYnJvd3NlciBmcm9tIG5hdmlnYXRpbmcgYmFjay5cbiAgICAgIGlmIChlLmtleUNvZGUgPT09IEJBQ0tTUEFDRSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIF9vbktleURvd24oZSk7XG4gICAgfSxcbiAgICB0eXBlOiBcImJ1dHRvblwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgfSwgXCJcXHhEN1wiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwic3Itb25seVwiXG4gIH0sIGxhYmVsKSk7XG59O1xuXG5DbGVhckJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5DbGVhckJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBDbGVhckJ1dHRvbjsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRNYXRjaEJvdW5kcyB9IGZyb20gJy4uL3V0aWxzJztcbnZhciBwcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhpZ2hsaWdodENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VhcmNoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBoaWdobGlnaHRDbGFzc05hbWU6ICdyYnQtaGlnaGxpZ2h0LXRleHQnXG59O1xuXG4vKipcbiAqIFN0cmlwcGVkLWRvd24gdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vaGVsaW9yL3JlYWN0LWhpZ2hsaWdodGVyXG4gKlxuICogUmVzdWx0cyBhcmUgYWxyZWFkeSBmaWx0ZXJlZCBieSB0aGUgdGltZSB0aGUgY29tcG9uZW50IGlzIHVzZWQgaW50ZXJuYWxseSBzb1xuICogd2UgY2FuIHNhZmVseSBpZ25vcmUgY2FzZSBhbmQgZGlhY3JpdGljYWwgbWFya3MgZm9yIHRoZSBwdXJwb3NlcyBvZiBtYXRjaGluZy5cbiAqL1xudmFyIEhpZ2hsaWdodGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShIaWdobGlnaHRlciwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhpZ2hsaWdodGVyKCkge1xuICAgIHJldHVybiBfUmVhY3QkUHVyZUNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSGlnaGxpZ2h0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaGlnaGxpZ2h0Q2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuaGlnaGxpZ2h0Q2xhc3NOYW1lLFxuICAgICAgICBzZWFyY2ggPSBfdGhpcyRwcm9wcy5zZWFyY2g7XG5cbiAgICBpZiAoIXNlYXJjaCB8fCAhY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hDb3VudCA9IDA7XG4gICAgdmFyIHJlbWFpbmluZyA9IGNoaWxkcmVuO1xuICAgIHZhciBoaWdobGlnaHRlckNoaWxkcmVuID0gW107XG5cbiAgICB3aGlsZSAocmVtYWluaW5nKSB7XG4gICAgICB2YXIgYm91bmRzID0gZ2V0TWF0Y2hCb3VuZHMocmVtYWluaW5nLCBzZWFyY2gpOyAvLyBObyBtYXRjaCBhbnl3aGVyZSBpbiB0aGUgcmVtYWluaW5nIHN0cmluZywgc3RvcC5cblxuICAgICAgaWYgKCFib3VuZHMpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZXJDaGlsZHJlbi5wdXNoKHJlbWFpbmluZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSAvLyBDYXB0dXJlIHRoZSBzdHJpbmcgdGhhdCBsZWFkcyB1cCB0byBhIG1hdGNoLlxuXG5cbiAgICAgIHZhciBub25NYXRjaCA9IHJlbWFpbmluZy5zbGljZSgwLCBib3VuZHMuc3RhcnQpO1xuXG4gICAgICBpZiAobm9uTWF0Y2gpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZXJDaGlsZHJlbi5wdXNoKG5vbk1hdGNoKTtcbiAgICAgIH0gLy8gQ2FwdHVyZSB0aGUgbWF0Y2hpbmcgc3RyaW5nLlxuXG5cbiAgICAgIHZhciBtYXRjaCA9IHJlbWFpbmluZy5zbGljZShib3VuZHMuc3RhcnQsIGJvdW5kcy5lbmQpO1xuICAgICAgaGlnaGxpZ2h0ZXJDaGlsZHJlbi5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm1hcmtcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGhpZ2hsaWdodENsYXNzTmFtZSxcbiAgICAgICAga2V5OiBtYXRjaENvdW50XG4gICAgICB9LCBtYXRjaCkpO1xuICAgICAgbWF0Y2hDb3VudCArPSAxOyAvLyBBbmQgaWYgdGhlcmUncyBhbnl0aGluZyBsZWZ0IG92ZXIsIGNvbnRpbnVlIHRoZSBsb29wLlxuXG4gICAgICByZW1haW5pbmcgPSByZW1haW5pbmcuc2xpY2UoYm91bmRzLmVuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVyQ2hpbGRyZW47XG4gIH07XG5cbiAgcmV0dXJuIEhpZ2hsaWdodGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KEhpZ2hsaWdodGVyLCBcInByb3BUeXBlc1wiLCBwcm9wVHlwZXMpO1xuXG5fZGVmaW5lUHJvcGVydHkoSGlnaGxpZ2h0ZXIsIFwiZGVmYXVsdFByb3BzXCIsIGRlZmF1bHRQcm9wcyk7XG5cbmV4cG9ydCBkZWZhdWx0IEhpZ2hsaWdodGVyOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IFJlYWN0LCB7IGNsb25lRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUeXBlYWhlYWRDb250ZXh0IH0gZnJvbSAnLi4vY29yZS9Db250ZXh0JztcbmltcG9ydCB7IGlzU2VsZWN0YWJsZSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFJFVFVSTiwgUklHSFQsIFRBQiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8vIElFIGRvZXNuJ3Qgc2VlbSB0byBnZXQgdGhlIGNvbXBvc2l0ZSBjb21wdXRlZCB2YWx1ZSAoZWc6ICdwYWRkaW5nJyxcbi8vICdib3JkZXJTdHlsZScsIGV0Yy4pLCBzbyBnZW5lcmF0ZSB0aGVzZSBmcm9tIHRoZSBpbmRpdmlkdWFsIHZhbHVlcy5cbmZ1bmN0aW9uIGludGVycG9sYXRlU3R5bGUoc3R5bGVzLCBhdHRyLCBzdWJhdHRyKSB7XG4gIGlmIChzdWJhdHRyID09PSB2b2lkIDApIHtcbiAgICBzdWJhdHRyID0gJyc7XG4gIH1cblxuICAvLyBUaXRsZS1jYXNlIHRoZSBzdWItYXR0cmlidXRlLlxuICBpZiAoc3ViYXR0cikge1xuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIHN1YmF0dHIgPSBzdWJhdHRyLnJlcGxhY2Uoc3ViYXR0clswXSwgc3ViYXR0clswXS50b1VwcGVyQ2FzZSgpKTtcbiAgfVxuXG4gIHJldHVybiBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddLm1hcChmdW5jdGlvbiAoZGlyKSB7XG4gICAgcmV0dXJuIHN0eWxlc1thdHRyICsgZGlyICsgc3ViYXR0cl07XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gY29weVN0eWxlcyhpbnB1dE5vZGUsIGhpbnROb2RlKSB7XG4gIGlmICghaW5wdXROb2RlIHx8ICFoaW50Tm9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpbnB1dFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaW5wdXROb2RlKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuICBoaW50Tm9kZS5zdHlsZS5ib3JkZXJTdHlsZSA9IGludGVycG9sYXRlU3R5bGUoaW5wdXRTdHlsZSwgJ2JvcmRlcicsICdzdHlsZScpO1xuICBoaW50Tm9kZS5zdHlsZS5ib3JkZXJXaWR0aCA9IGludGVycG9sYXRlU3R5bGUoaW5wdXRTdHlsZSwgJ2JvcmRlcicsICd3aWR0aCcpO1xuICBoaW50Tm9kZS5zdHlsZS5mb250U2l6ZSA9IGlucHV0U3R5bGUuZm9udFNpemU7XG4gIGhpbnROb2RlLnN0eWxlLmhlaWdodCA9IGlucHV0U3R5bGUuaGVpZ2h0O1xuICBoaW50Tm9kZS5zdHlsZS5saW5lSGVpZ2h0ID0gaW5wdXRTdHlsZS5saW5lSGVpZ2h0O1xuICBoaW50Tm9kZS5zdHlsZS5tYXJnaW4gPSBpbnRlcnBvbGF0ZVN0eWxlKGlucHV0U3R5bGUsICdtYXJnaW4nKTtcbiAgaGludE5vZGUuc3R5bGUucGFkZGluZyA9IGludGVycG9sYXRlU3R5bGUoaW5wdXRTdHlsZSwgJ3BhZGRpbmcnKTtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFNob3VsZFNlbGVjdChlLCBzdGF0ZSkge1xuICB2YXIgc2hvdWxkU2VsZWN0SGludCA9IGZhbHNlO1xuICB2YXIgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldCxcbiAgICAgIGtleUNvZGUgPSBlLmtleUNvZGU7XG5cbiAgaWYgKGtleUNvZGUgPT09IFJJR0hUKSB7XG4gICAgLy8gRm9yIHNlbGVjdGFibGUgaW5wdXQgdHlwZXMgKFwidGV4dFwiLCBcInNlYXJjaFwiKSwgb25seSBzZWxlY3QgdGhlIGhpbnQgaWZcbiAgICAvLyBpdCdzIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0IHZhbHVlLiBGb3Igbm9uLXNlbGVjdGFibGUgdHlwZXMgKFwiZW1haWxcIixcbiAgICAvLyBcIm51bWJlclwiKSwgYWx3YXlzIHNlbGVjdCB0aGUgaGludC5cbiAgICBzaG91bGRTZWxlY3RIaW50ID0gaXNTZWxlY3RhYmxlKGN1cnJlbnRUYXJnZXQpID8gY3VycmVudFRhcmdldC5zZWxlY3Rpb25TdGFydCA9PT0gY3VycmVudFRhcmdldC52YWx1ZS5sZW5ndGggOiB0cnVlO1xuICB9XG5cbiAgaWYgKGtleUNvZGUgPT09IFRBQikge1xuICAgIC8vIFByZXZlbnQgaW5wdXQgZnJvbSBibHVycmluZyBvbiBUQUIuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNob3VsZFNlbGVjdEhpbnQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGtleUNvZGUgPT09IFJFVFVSTikge1xuICAgIHNob3VsZFNlbGVjdEhpbnQgPSAhIXN0YXRlLnNlbGVjdEhpbnRPbkVudGVyO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZS5zaG91bGRTZWxlY3QgPT09ICdmdW5jdGlvbicgPyBzdGF0ZS5zaG91bGRTZWxlY3Qoc2hvdWxkU2VsZWN0SGludCwgZSkgOiBzaG91bGRTZWxlY3RIaW50O1xufVxuZXhwb3J0IHZhciB1c2VIaW50ID0gZnVuY3Rpb24gdXNlSGludChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBzaG91bGRTZWxlY3QgPSBfcmVmLnNob3VsZFNlbGVjdDtcbiAgIShSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDEpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnYHVzZUhpbnRgIGV4cGVjdHMgb25lIGNoaWxkLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcblxuICB2YXIgX3VzZVR5cGVhaGVhZENvbnRleHQgPSB1c2VUeXBlYWhlYWRDb250ZXh0KCksXG4gICAgICBoaW50VGV4dCA9IF91c2VUeXBlYWhlYWRDb250ZXh0LmhpbnRUZXh0LFxuICAgICAgaW5pdGlhbEl0ZW0gPSBfdXNlVHlwZWFoZWFkQ29udGV4dC5pbml0aWFsSXRlbSxcbiAgICAgIGlucHV0Tm9kZSA9IF91c2VUeXBlYWhlYWRDb250ZXh0LmlucHV0Tm9kZSxcbiAgICAgIG9uQWRkID0gX3VzZVR5cGVhaGVhZENvbnRleHQub25BZGQsXG4gICAgICBzZWxlY3RIaW50T25FbnRlciA9IF91c2VUeXBlYWhlYWRDb250ZXh0LnNlbGVjdEhpbnRPbkVudGVyO1xuXG4gIHZhciBoaW50UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHZhciBvbktleURvd24gPSBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgIGlmIChoaW50VGV4dCAmJiBpbml0aWFsSXRlbSAmJiBkZWZhdWx0U2hvdWxkU2VsZWN0KGUsIHtcbiAgICAgIHNlbGVjdEhpbnRPbkVudGVyOiBzZWxlY3RIaW50T25FbnRlcixcbiAgICAgIHNob3VsZFNlbGVjdDogc2hvdWxkU2VsZWN0XG4gICAgfSkpIHtcbiAgICAgIG9uQWRkKGluaXRpYWxJdGVtKTtcbiAgICB9XG5cbiAgICBjaGlsZHJlbi5wcm9wcy5vbktleURvd24gJiYgY2hpbGRyZW4ucHJvcHMub25LZXlEb3duKGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgY29weVN0eWxlcyhpbnB1dE5vZGUsIGhpbnRSZWYuY3VycmVudCk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNoaWxkOiAvKiNfX1BVUkVfXyovY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBfZXh0ZW5kcyh7fSwgY2hpbGRyZW4ucHJvcHMsIHtcbiAgICAgIG9uS2V5RG93bjogb25LZXlEb3duXG4gICAgfSkpLFxuICAgIGhpbnRSZWY6IGhpbnRSZWYsXG4gICAgaGludFRleHQ6IGhpbnRUZXh0XG4gIH07XG59O1xuXG52YXIgSGludCA9IGZ1bmN0aW9uIEhpbnQoX3JlZjIpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImNsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIF91c2VIaW50ID0gdXNlSGludChwcm9wcyksXG4gICAgICBjaGlsZCA9IF91c2VIaW50LmNoaWxkLFxuICAgICAgaGludFJlZiA9IF91c2VIaW50LmhpbnRSZWYsXG4gICAgICBoaW50VGV4dCA9IF91c2VIaW50LmhpbnRUZXh0O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgc3R5bGU6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXg6IDEsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfVxuICB9LCBjaGlsZCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogXCJyYnQtaW5wdXQtaGludFwiLFxuICAgIHJlZjogaGludFJlZixcbiAgICByZWFkT25seTogdHJ1ZSxcbiAgICBzdHlsZToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjM1KScsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICB0YWJJbmRleDogLTEsXG4gICAgdmFsdWU6IGhpbnRUZXh0XG4gIH0pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpbnQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgSW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGN4KCdyYnQtaW5wdXQtbWFpbicsIHByb3BzLmNsYXNzTmFtZSksXG4gICAgcmVmOiByZWZcbiAgfSkpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBwcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICdMb2FkaW5nLi4uJ1xufTtcblxudmFyIExvYWRlciA9IGZ1bmN0aW9uIExvYWRlcihfcmVmKSB7XG4gIHZhciBsYWJlbCA9IF9yZWYubGFiZWw7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInJidC1sb2FkZXIgc3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc21cIixcbiAgICByb2xlOiBcInN0YXR1c1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInNyLW9ubHlcIlxuICB9LCBsYWJlbCkpO1xufTtcblxuTG9hZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkxvYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7IiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFzZU1lbnVJdGVtIH0gZnJvbSAnLi9NZW51SXRlbSc7XG5pbXBvcnQgeyBwcmV2ZW50SW5wdXRCbHVyIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgY2hlY2tQcm9wVHlwZSwgaXNSZXF1aXJlZEZvckExMXkgfSBmcm9tICcuLi9wcm9wVHlwZXMnO1xuXG52YXIgTWVudURpdmlkZXIgPSBmdW5jdGlvbiBNZW51RGl2aWRlcihwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJkcm9wZG93bi1kaXZpZGVyXCIsXG4gICAgcm9sZTogXCJzZXBhcmF0b3JcIlxuICB9KTtcbn07XG5cbnZhciBNZW51SGVhZGVyID0gZnVuY3Rpb24gTWVudUhlYWRlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIC8qI19fUFVSRV9fKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvcm9sZS1oYXMtcmVxdWlyZWQtYXJpYS1wcm9wc1xuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IFwiZHJvcGRvd24taGVhZGVyXCIsXG4gICAgICByb2xlOiBcImhlYWRpbmdcIlxuICAgIH0pKVxuICApO1xufTtcblxudmFyIHByb3BUeXBlcyA9IHtcbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIHRvIGRpc3BsYXkgaW4gdGhlIG1lbnUgaWYgdGhlcmUgYXJlIG5vIHZhbGlkIHJlc3VsdHMuXG4gICAqL1xuICBlbXB0eUxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogTmVlZGVkIGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgKi9cbiAgaWQ6IGNoZWNrUHJvcFR5cGUoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLCBpc1JlcXVpcmVkRm9yQTExeSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gaGVpZ2h0IG9mIHRoZSBkcm9wZG93biBtZW51LlxuICAgKi9cbiAgbWF4SGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgJ2FyaWEtbGFiZWwnOiAnbWVudS1vcHRpb25zJyxcbiAgZW1wdHlMYWJlbDogJ05vIG1hdGNoZXMgZm91bmQuJyxcbiAgbWF4SGVpZ2h0OiAnMzAwcHgnXG59O1xuXG4vKipcbiAqIE1lbnUgY29tcG9uZW50IHRoYXQgaGFuZGxlcyBlbXB0eSBzdGF0ZSB3aGVuIHBhc3NlZCBhIHNldCBvZiByZXN1bHRzLlxuICovXG52YXIgTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShNZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNZW51KCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNZW51LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlucHV0SGVpZ2h0ID0gX3RoaXMkcHJvcHMuaW5wdXRIZWlnaHQsXG4gICAgICAgIHNjaGVkdWxlVXBkYXRlID0gX3RoaXMkcHJvcHMuc2NoZWR1bGVVcGRhdGU7IC8vIFVwZGF0ZSB0aGUgbWVudSBwb3NpdGlvbiBpZiB0aGUgaGVpZ2h0IG9mIHRoZSBpbnB1dCBjaGFuZ2VzLlxuXG4gICAgaWYgKGlucHV0SGVpZ2h0ICE9PSBwcmV2UHJvcHMuaW5wdXRIZWlnaHQpIHtcbiAgICAgIHNjaGVkdWxlVXBkYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICBlbXB0eUxhYmVsID0gX3RoaXMkcHJvcHMyLmVtcHR5TGFiZWwsXG4gICAgICAgIGlkID0gX3RoaXMkcHJvcHMyLmlkLFxuICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzMi5pbm5lclJlZixcbiAgICAgICAgbWF4SGVpZ2h0ID0gX3RoaXMkcHJvcHMyLm1heEhlaWdodCxcbiAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczIuc3R5bGUsXG4gICAgICAgIHRleHQgPSBfdGhpcyRwcm9wczIudGV4dDtcbiAgICB2YXIgY29udGVudHMgPSBDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDAgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCYXNlTWVudUl0ZW0sIHtcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgcm9sZTogXCJvcHRpb25cIlxuICAgIH0sIGVtcHR5TGFiZWwpIDogY2hpbGRyZW47XG4gICAgcmV0dXJuIChcbiAgICAgIC8qI19fUFVSRV9fKi9cblxuICAgICAgLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvaW50ZXJhY3RpdmUtc3VwcG9ydHMtZm9jdXMgKi9cbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgICBjbGFzc05hbWU6IGN4KCdyYnQtbWVudScsICdkcm9wZG93bi1tZW51JywgJ3Nob3cnLCBjbGFzc05hbWUpLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGtleTogLy8gRm9yY2UgYSByZS1yZW5kZXIgaWYgdGhlIHRleHQgY2hhbmdlcyB0byBlbnN1cmUgdGhhdCBtZW51XG4gICAgICAgIC8vIHBvc2l0aW9uaW5nIHVwZGF0ZXMgY29ycmVjdGx5LlxuICAgICAgICB0ZXh0LFxuICAgICAgICBvbk1vdXNlRG93bjogLy8gUHJldmVudCBpbnB1dCBmcm9tIGJsdXJyaW5nIHdoZW4gY2xpY2tpbmcgb24gdGhlIG1lbnUgc2Nyb2xsYmFyLlxuICAgICAgICBwcmV2ZW50SW5wdXRCbHVyLFxuICAgICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBzdHlsZSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgICB9KVxuICAgICAgfSwgY29udGVudHMpXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIGpzeC1hMTF5L2ludGVyYWN0aXZlLXN1cHBvcnRzLWZvY3VzICovXG5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBNZW51O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoTWVudSwgXCJwcm9wVHlwZXNcIiwgcHJvcFR5cGVzKTtcblxuX2RlZmluZVByb3BlcnR5KE1lbnUsIFwiZGVmYXVsdFByb3BzXCIsIGRlZmF1bHRQcm9wcyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShNZW51LCBcIkRpdmlkZXJcIiwgTWVudURpdmlkZXIpO1xuXG5fZGVmaW5lUHJvcGVydHkoTWVudSwgXCJIZWFkZXJcIiwgTWVudUhlYWRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aEl0ZW0gfSBmcm9tICcuLi9iZWhhdmlvcnMvaXRlbSc7XG52YXIgQmFzZU1lbnVJdGVtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYWN0aXZlID0gX3JlZi5hY3RpdmUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIF9vbkNsaWNrID0gX3JlZi5vbkNsaWNrLFxuICAgICAgb25Nb3VzZURvd24gPSBfcmVmLm9uTW91c2VEb3duLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJhY3RpdmVcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVkXCIsIFwib25DbGlja1wiLCBcIm9uTW91c2VEb3duXCJdKTtcblxuICByZXR1cm4gKFxuICAgIC8qI19fUFVSRV9fKi9cblxuICAgIC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiBjeCgnZHJvcGRvd24taXRlbScsIHtcbiAgICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgfSwgY2xhc3NOYW1lKSxcbiAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIWRpc2FibGVkICYmIF9vbkNsaWNrICYmIF9vbkNsaWNrKGUpO1xuICAgICAgfSxcbiAgICAgIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcbiAgICAgIHJlZjogcmVmXG4gICAgfSksIGNoaWxkcmVuKVxuICAgIC8qIGVzbGludC1lbmFibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG5cbiAgKTtcbn0pO1xuZXhwb3J0IHsgQmFzZU1lbnVJdGVtIH07XG5leHBvcnQgZGVmYXVsdCB3aXRoSXRlbShCYXNlTWVudUl0ZW0pOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBvcHBlciB9IGZyb20gJ3JlYWN0LXBvcHBlcic7XG5pbXBvcnQgeyB2YWx1ZXMgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBBTElHTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG4vLyBgRWxlbWVudGAgaXMgbm90IGRlZmluZWQgZHVyaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZywgc28gc2hpbSBpdCBoZXJlLlxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudmFyIFNhZmVFbGVtZW50ID0gdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24gKCkge30gOiBFbGVtZW50O1xudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgbWVudSBhbGlnbm1lbnQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGBqdXN0aWZ5YCwgd2hpY2ggbWFrZXMgdGhlXG4gICAqIG1lbnUgYXMgd2lkZSBhcyB0aGUgaW5wdXQgYW5kIHRydW5jYXRlcyBsb25nIHZhbHVlcy4gU3BlY2lmeWluZyBgbGVmdGBcbiAgICogb3IgYHJpZ2h0YCB3aWxsIGFsaWduIHRoZSBtZW51IHRvIHRoYXQgc2lkZSBhbmQgdGhlIHdpZHRoIHdpbGwgYmVcbiAgICogZGV0ZXJtaW5lZCBieSB0aGUgbGVuZ3RoIG9mIG1lbnUgaXRlbSB2YWx1ZXMuXG4gICAqL1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKHZhbHVlcyhBTElHTikpLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogU3BlY2lmeSB3aGV0aGVyIHRoZSBtZW51IHNob3VsZCBhcHBlYXIgYWJvdmUgdGhlIGlucHV0LlxuICAgKi9cbiAgZHJvcHVwOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gYXV0b21hdGljYWxseSBhZGp1c3QgdGhlIHBvc2l0aW9uIG9mIHRoZSBtZW51IHdoZW4gaXRcbiAgICogcmVhY2hlcyB0aGUgdmlld3BvcnQgYm91bmRhcmllcy5cbiAgICovXG4gIGZsaXA6IFByb3BUeXBlcy5ib29sLFxuICBpc01lbnVTaG93bjogUHJvcFR5cGVzLmJvb2wsXG4gIHBvc2l0aW9uRml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICByZWZlcmVuY2VFbGVtZW50OiBQcm9wVHlwZXMuaW5zdGFuY2VPZihTYWZlRWxlbWVudClcbn07XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbjogQUxJR04uSlVTVElGWSxcbiAgZHJvcHVwOiBmYWxzZSxcbiAgZmxpcDogZmFsc2UsXG4gIGlzTWVudVNob3duOiBmYWxzZSxcbiAgcG9zaXRpb25GaXhlZDogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGdldE1vZGlmaWVycyhfcmVmKSB7XG4gIHZhciBhbGlnbiA9IF9yZWYuYWxpZ24sXG4gICAgICBmbGlwID0gX3JlZi5mbGlwO1xuICByZXR1cm4ge1xuICAgIGNvbXB1dGVTdHlsZXM6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBmbjogZnVuY3Rpb24gZm4oX3JlZjIpIHtcbiAgICAgICAgdmFyIHN0eWxlcyA9IF9yZWYyLnN0eWxlcyxcbiAgICAgICAgICAgIGRhdGEgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wic3R5bGVzXCJdKTtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGRhdGEsIHtcbiAgICAgICAgICBzdHlsZXM6IF9leHRlbmRzKHt9LCBzdHlsZXMsIHtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbiBpbnN0ZWFkIG9mIGBhbGlnbiA9PT0gJ2p1c3RpZnknYFxuICAgICAgICAgICAgLy8gc2luY2UgaXQgYWxsb3dzIHRoZSBjb21wb25lbnQgdG8gZmFsbCBiYWNrIHRvIGp1c3RpZnlpbmcgdGhlXG4gICAgICAgICAgICAvLyBtZW51IHdpZHRoIGlmIGBhbGlnbmAgaXMgdW5kZWZpbmVkLlxuICAgICAgICAgICAgd2lkdGg6IGFsaWduICE9PSBBTElHTi5SSUdIVCAmJiBhbGlnbiAhPT0gQUxJR04uTEVGVCA/IC8vIFNldCB0aGUgcG9wcGVyIHdpZHRoIHRvIG1hdGNoIHRoZSB0YXJnZXQgd2lkdGguXG4gICAgICAgICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlLndpZHRoIDogc3R5bGVzLndpZHRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBmbGlwOiB7XG4gICAgICBlbmFibGVkOiBmbGlwXG4gICAgfSxcbiAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgIGVzY2FwZVdpdGhSZWZlcmVuY2U6IHRydWVcbiAgICB9XG4gIH07XG59IC8vIEZsb3cgZXhwZWN0cyBhIHN0cmluZyBsaXRlcmFsIHZhbHVlIGZvciBgcGxhY2VtZW50YC5cblxuXG52YXIgUExBQ0VNRU5UID0ge1xuICBib3R0b206IHtcbiAgICBlbmQ6ICdib3R0b20tZW5kJyxcbiAgICBzdGFydDogJ2JvdHRvbS1zdGFydCdcbiAgfSxcbiAgdG9wOiB7XG4gICAgZW5kOiAndG9wLWVuZCcsXG4gICAgc3RhcnQ6ICd0b3Atc3RhcnQnXG4gIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxhY2VtZW50KF9yZWYzKSB7XG4gIHZhciBhbGlnbiA9IF9yZWYzLmFsaWduLFxuICAgICAgZHJvcHVwID0gX3JlZjMuZHJvcHVwO1xuICB2YXIgeCA9IGFsaWduID09PSBBTElHTi5SSUdIVCA/ICdlbmQnIDogJ3N0YXJ0JztcbiAgdmFyIHkgPSBkcm9wdXAgPyAndG9wJyA6ICdib3R0b20nO1xuICByZXR1cm4gUExBQ0VNRU5UW3ldW3hdO1xufVxuXG52YXIgT3ZlcmxheSA9IGZ1bmN0aW9uIE92ZXJsYXkocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBpc01lbnVTaG93biA9IHByb3BzLmlzTWVudVNob3duLFxuICAgICAgcG9zaXRpb25GaXhlZCA9IHByb3BzLnBvc2l0aW9uRml4ZWQsXG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gcHJvcHMucmVmZXJlbmNlRWxlbWVudDtcblxuICBpZiAoIWlzTWVudVNob3duKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wcGVyLCB7XG4gICAgbW9kaWZpZXJzOiBnZXRNb2RpZmllcnMocHJvcHMpLFxuICAgIHBsYWNlbWVudDogZ2V0UGxhY2VtZW50KHByb3BzKSxcbiAgICBwb3NpdGlvbkZpeGVkOiBwb3NpdGlvbkZpeGVkLFxuICAgIHJlZmVyZW5jZUVsZW1lbnQ6IHJlZmVyZW5jZUVsZW1lbnRcbiAgfSwgZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgdmFyIHJlZiA9IF9yZWY0LnJlZixcbiAgICAgICAgcG9wcGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgW1wicmVmXCJdKTtcblxuICAgIHJldHVybiBjaGlsZHJlbihfZXh0ZW5kcyh7fSwgcG9wcGVyUHJvcHMsIHtcbiAgICAgIGlubmVyUmVmOiByZWYsXG4gICAgICBpbnB1dEhlaWdodDogcmVmZXJlbmNlRWxlbWVudCA/IHJlZmVyZW5jZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogMFxuICAgIH0pKTtcbiAgfSk7XG59O1xuXG5PdmVybGF5LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbk92ZXJsYXkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuZXhwb3J0IGRlZmF1bHQgT3ZlcmxheTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsZWFyQnV0dG9uIGZyb20gJy4vQ2xlYXJCdXR0b24nO1xuaW1wb3J0IHsgd2l0aFRva2VuIH0gZnJvbSAnLi4vYmVoYXZpb3JzL3Rva2VuJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscyc7XG52YXIgSW50ZXJhY3RpdmVUb2tlbiA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGFjdGl2ZSA9IF9yZWYuYWN0aXZlLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBvblJlbW92ZSA9IF9yZWYub25SZW1vdmUsXG4gICAgICB0YWJJbmRleCA9IF9yZWYudGFiSW5kZXgsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImFjdGl2ZVwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwib25SZW1vdmVcIiwgXCJ0YWJJbmRleFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogY3goJ3JidC10b2tlbicsICdyYnQtdG9rZW4tcmVtb3ZlYWJsZScsIHtcbiAgICAgICdyYnQtdG9rZW4tYWN0aXZlJzogISFhY3RpdmVcbiAgICB9LCBjbGFzc05hbWUpLFxuICAgIHJlZjogcmVmLFxuICAgIHRhYkluZGV4OiB0YWJJbmRleCB8fCAwXG4gIH0pLCBjaGlsZHJlbiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xlYXJCdXR0b24sIHtcbiAgICBjbGFzc05hbWU6IFwicmJ0LXRva2VuLXJlbW92ZS1idXR0b25cIixcbiAgICBsYWJlbDogXCJSZW1vdmVcIixcbiAgICBvbkNsaWNrOiBvblJlbW92ZSxcbiAgICB0YWJJbmRleDogLTFcbiAgfSkpO1xufSk7XG5cbnZhciBTdGF0aWNUb2tlbiA9IGZ1bmN0aW9uIFN0YXRpY1Rva2VuKF9yZWYyKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmMi5kaXNhYmxlZCxcbiAgICAgIGhyZWYgPSBfcmVmMi5ocmVmO1xuICB2YXIgY2xhc3NuYW1lcyA9IGN4KCdyYnQtdG9rZW4nLCB7XG4gICAgJ3JidC10b2tlbi1kaXNhYmxlZCc6IGRpc2FibGVkXG4gIH0sIGNsYXNzTmFtZSk7XG5cbiAgaWYgKGhyZWYgJiYgIWRpc2FibGVkKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXMsXG4gICAgICBocmVmOiBocmVmXG4gICAgfSwgY2hpbGRyZW4pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXNcbiAgfSwgY2hpbGRyZW4pO1xufTtcbi8qKlxuICogVG9rZW5cbiAqXG4gKiBJbmRpdmlkdWFsIHRva2VuIGNvbXBvbmVudCwgZ2VuZXJhbGx5IGRpc3BsYXllZCB3aXRoaW4gdGhlIFRva2VuaXplcklucHV0XG4gKiBjb21wb25lbnQsIGJ1dCBjYW4gYWxzbyBiZSByZW5kZXJlZCBvbiBpdHMgb3duLlxuICovXG5cblxudmFyIFRva2VuID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBvblJlbW92ZSA9IHByb3BzLm9uUmVtb3ZlLFxuICAgICAgcmVhZE9ubHkgPSBwcm9wcy5yZWFkT25seTtcbiAgcmV0dXJuICFkaXNhYmxlZCAmJiAhcmVhZE9ubHkgJiYgaXNGdW5jdGlvbihvblJlbW92ZSkgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnRlcmFjdGl2ZVRva2VuLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZlxuICB9KSkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0aWNUb2tlbiwgcHJvcHMpO1xufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoVG9rZW4oVG9rZW4pOyIsImltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VSb290Q2xvc2UgZnJvbSBcInJlYWN0LW92ZXJsYXlzL3VzZVJvb3RDbG9zZVwiO1xuaW1wb3J0IFR5cGVhaGVhZCBmcm9tICcuLi9jb3JlL1R5cGVhaGVhZCc7XG5pbXBvcnQgQ2xlYXJCdXR0b24gZnJvbSAnLi9DbGVhckJ1dHRvbic7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheSc7XG5pbXBvcnQgVG9rZW4gZnJvbSAnLi9Ub2tlbic7XG5pbXBvcnQgVHlwZWFoZWFkSW5wdXRNdWx0aSBmcm9tICcuL1R5cGVhaGVhZElucHV0TXVsdGknO1xuaW1wb3J0IFR5cGVhaGVhZElucHV0U2luZ2xlIGZyb20gJy4vVHlwZWFoZWFkSW5wdXRTaW5nbGUnO1xuaW1wb3J0IFR5cGVhaGVhZE1lbnUgZnJvbSAnLi9UeXBlYWhlYWRNZW51JztcbmltcG9ydCB7IGdldE9wdGlvbkxhYmVsLCBpc0Z1bmN0aW9uLCBpc1NpemVMYXJnZSwgcGljaywgcHJldmVudElucHV0Qmx1ciB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGNoZWNrUHJvcFR5cGUsIGlucHV0UHJvcHNUeXBlLCBzaXplVHlwZSB9IGZyb20gJy4uL3Byb3BUeXBlcyc7XG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogRGlzcGxheXMgYSBidXR0b24gdG8gY2xlYXIgdGhlIGlucHV0IHdoZW4gdGhlcmUgYXJlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBjbGVhckJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFByb3BzIHRvIGJlIGFwcGxpZWQgZGlyZWN0bHkgdG8gdGhlIGlucHV0LiBgb25CbHVyYCwgYG9uQ2hhbmdlYCxcbiAgICogYG9uRm9jdXNgLCBhbmQgYG9uS2V5RG93bmAgYXJlIGlnbm9yZWQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBjaGVja1Byb3BUeXBlKFByb3BUeXBlcy5vYmplY3QsIGlucHV0UHJvcHNUeXBlKSxcblxuICAvKipcbiAgICogQm9vdHN0cmFwIDQgb25seS4gQWRkcyB0aGUgYGlzLWludmFsaWRgIGNsYXNzbmFtZSB0byB0aGUgYGZvcm0tY29udHJvbGAuXG4gICAqL1xuICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZSB3aGV0aGVyIGFuIGFzeW5jaHJvbm91cyBkYXRhIGZldGNoIGlzIGhhcHBlbmluZy5cbiAgICovXG4gIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJvb3RzdHJhcCA0IG9ubHkuIEFkZHMgdGhlIGBpcy12YWxpZGAgY2xhc3NuYW1lIHRvIHRoZSBgZm9ybS1jb250cm9sYC5cbiAgICovXG4gIGlzVmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3IgY3VzdG9tIGlucHV0IHJlbmRlcmluZy5cbiAgICovXG4gIHJlbmRlcklucHV0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIGN1c3RvbSBtZW51IHJlbmRlcmluZy5cbiAgICovXG4gIHJlbmRlck1lbnU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3IgY3VzdG9tIG1lbnUgcmVuZGVyaW5nLlxuICAgKi9cbiAgcmVuZGVyVG9rZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHNpemUgb2YgdGhlIGlucHV0LlxuICAgKi9cbiAgc2l6ZTogc2l6ZVR5cGVcbn07XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjbGVhckJ1dHRvbjogZmFsc2UsXG4gIGlucHV0UHJvcHM6IHt9LFxuICBpc0ludmFsaWQ6IGZhbHNlLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBpc1ZhbGlkOiBmYWxzZSxcbiAgcmVuZGVyTWVudTogZnVuY3Rpb24gcmVuZGVyTWVudShyZXN1bHRzLCBtZW51UHJvcHMsIHByb3BzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFR5cGVhaGVhZE1lbnUsIF9leHRlbmRzKHt9LCBtZW51UHJvcHMsIHtcbiAgICAgIGxhYmVsS2V5OiBwcm9wcy5sYWJlbEtleSxcbiAgICAgIG9wdGlvbnM6IHJlc3VsdHMsXG4gICAgICB0ZXh0OiBwcm9wcy50ZXh0XG4gICAgfSkpO1xuICB9LFxuICByZW5kZXJUb2tlbjogZnVuY3Rpb24gcmVuZGVyVG9rZW4ob3B0aW9uLCBwcm9wcywgaWR4KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRva2VuLCB7XG4gICAgICBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZWQsXG4gICAgICBrZXk6IGlkeCxcbiAgICAgIG9uUmVtb3ZlOiBwcm9wcy5vblJlbW92ZSxcbiAgICAgIG9wdGlvbjogb3B0aW9uLFxuICAgICAgdGFiSW5kZXg6IHByb3BzLnRhYkluZGV4XG4gICAgfSwgZ2V0T3B0aW9uTGFiZWwob3B0aW9uLCBwcm9wcy5sYWJlbEtleSkpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRPdmVybGF5UHJvcHMocHJvcHMpIHtcbiAgcmV0dXJuIHBpY2socHJvcHMsIFsnYWxpZ24nLCAnZHJvcHVwJywgJ2ZsaXAnLCAncG9zaXRpb25GaXhlZCddKTtcbn1cblxudmFyIFJvb3RDbG9zZSA9IGZ1bmN0aW9uIFJvb3RDbG9zZShfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBvblJvb3RDbG9zZSA9IF9yZWYub25Sb290Q2xvc2UsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImNoaWxkcmVuXCIsIFwib25Sb290Q2xvc2VcIl0pO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShudWxsKSxcbiAgICAgIHJvb3RFbGVtZW50ID0gX3VzZVN0YXRlWzBdLFxuICAgICAgYXR0YWNoUmVmID0gX3VzZVN0YXRlWzFdO1xuXG4gIHVzZVJvb3RDbG9zZShyb290RWxlbWVudCwgb25Sb290Q2xvc2UsIHByb3BzKTtcbiAgcmV0dXJuIGNoaWxkcmVuKGF0dGFjaFJlZik7XG59O1xuXG52YXIgVHlwZWFoZWFkQ29tcG9uZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFR5cGVhaGVhZENvbXBvbmVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHlwZWFoZWFkQ29tcG9uZW50KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9yZWZlcmVuY2VFbGVtZW50XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVmZXJlbmNlRWxlbWVudFJlZlwiLCBmdW5jdGlvbiAocmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgX3RoaXMuX3JlZmVyZW5jZUVsZW1lbnQgPSByZWZlcmVuY2VFbGVtZW50O1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9yZW5kZXJJbnB1dFwiLCBmdW5jdGlvbiAoaW5wdXRQcm9wcywgcHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGlzSW52YWxpZCA9IF90aGlzJHByb3BzLmlzSW52YWxpZCxcbiAgICAgICAgICBpc1ZhbGlkID0gX3RoaXMkcHJvcHMuaXNWYWxpZCxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzLm11bHRpcGxlLFxuICAgICAgICAgIHJlbmRlcklucHV0ID0gX3RoaXMkcHJvcHMucmVuZGVySW5wdXQsXG4gICAgICAgICAgcmVuZGVyVG9rZW4gPSBfdGhpcyRwcm9wcy5yZW5kZXJUb2tlbixcbiAgICAgICAgICBzaXplID0gX3RoaXMkcHJvcHMuc2l6ZTtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24ocmVuZGVySW5wdXQpKSB7XG4gICAgICAgIHJldHVybiByZW5kZXJJbnB1dChpbnB1dFByb3BzLCBwcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IF9leHRlbmRzKHt9LCBpbnB1dFByb3BzLCB7XG4gICAgICAgIGlzSW52YWxpZDogaXNJbnZhbGlkLFxuICAgICAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxuICAgICAgICBzaXplOiBzaXplXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwZWFoZWFkSW5wdXRTaW5nbGUsIGNvbW1vblByb3BzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxhYmVsS2V5ID0gcHJvcHMubGFiZWxLZXksXG4gICAgICAgICAgb25SZW1vdmUgPSBwcm9wcy5vblJlbW92ZSxcbiAgICAgICAgICBzZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFR5cGVhaGVhZElucHV0TXVsdGksIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWRcbiAgICAgIH0pLCBzZWxlY3RlZC5tYXAoZnVuY3Rpb24gKG9wdGlvbiwgaWR4KSB7XG4gICAgICAgIHJldHVybiByZW5kZXJUb2tlbihvcHRpb24sIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgIGxhYmVsS2V5OiBsYWJlbEtleSxcbiAgICAgICAgICBvblJlbW92ZTogb25SZW1vdmVcbiAgICAgICAgfSksIGlkeCk7XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3JlbmRlck1lbnVcIiwgZnVuY3Rpb24gKHJlc3VsdHMsIG1lbnVQcm9wcywgcHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBlbXB0eUxhYmVsID0gX3RoaXMkcHJvcHMyLmVtcHR5TGFiZWwsXG4gICAgICAgICAgaWQgPSBfdGhpcyRwcm9wczIuaWQsXG4gICAgICAgICAgbWF4SGVpZ2h0ID0gX3RoaXMkcHJvcHMyLm1heEhlaWdodCxcbiAgICAgICAgICBuZXdTZWxlY3Rpb25QcmVmaXggPSBfdGhpcyRwcm9wczIubmV3U2VsZWN0aW9uUHJlZml4LFxuICAgICAgICAgIHBhZ2luYXRpb25UZXh0ID0gX3RoaXMkcHJvcHMyLnBhZ2luYXRpb25UZXh0LFxuICAgICAgICAgIHJlbmRlck1lbnUgPSBfdGhpcyRwcm9wczIucmVuZGVyTWVudSxcbiAgICAgICAgICByZW5kZXJNZW51SXRlbUNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLnJlbmRlck1lbnVJdGVtQ2hpbGRyZW47XG4gICAgICByZXR1cm4gcmVuZGVyTWVudShyZXN1bHRzLCBfZXh0ZW5kcyh7fSwgbWVudVByb3BzLCB7XG4gICAgICAgIGVtcHR5TGFiZWw6IGVtcHR5TGFiZWwsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgICAgIG5ld1NlbGVjdGlvblByZWZpeDogbmV3U2VsZWN0aW9uUHJlZml4LFxuICAgICAgICBwYWdpbmF0aW9uVGV4dDogcGFnaW5hdGlvblRleHQsXG4gICAgICAgIHJlbmRlck1lbnVJdGVtQ2hpbGRyZW46IHJlbmRlck1lbnVJdGVtQ2hpbGRyZW5cbiAgICAgIH0pLCBwcm9wcyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3JlbmRlckF1eFwiLCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBvbkNsZWFyID0gX3JlZjIub25DbGVhcixcbiAgICAgICAgICBzZWxlY3RlZCA9IF9yZWYyLnNlbGVjdGVkO1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNsZWFyQnV0dG9uID0gX3RoaXMkcHJvcHMzLmNsZWFyQnV0dG9uLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMzLmRpc2FibGVkLFxuICAgICAgICAgIGlzTG9hZGluZyA9IF90aGlzJHByb3BzMy5pc0xvYWRpbmcsXG4gICAgICAgICAgc2l6ZSA9IF90aGlzJHByb3BzMy5zaXplO1xuICAgICAgdmFyIGNvbnRlbnQ7XG5cbiAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgY29udGVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvYWRlciwgbnVsbCk7XG4gICAgICB9IGVsc2UgaWYgKGNsZWFyQnV0dG9uICYmICFkaXNhYmxlZCAmJiBzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgY29udGVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENsZWFyQnV0dG9uLCB7XG4gICAgICAgICAgb25DbGljazogb25DbGVhcixcbiAgICAgICAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKGUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlIG1haW4gaW5wdXQgZnJvbSBhdXRvLWZvY3VzaW5nIGFnYWluLlxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uTW91c2VEb3duOiBwcmV2ZW50SW5wdXRCbHVyLFxuICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50ID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGN4KCdyYnQtYXV4Jywge1xuICAgICAgICAgICdyYnQtYXV4LWxnJzogaXNTaXplTGFyZ2Uoc2l6ZSlcbiAgICAgICAgfSlcbiAgICAgIH0sIGNvbnRlbnQpIDogbnVsbDtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUeXBlYWhlYWRDb21wb25lbnQucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczQuY2hpbGRyZW4sXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNC5jbGFzc05hbWUsXG4gICAgICAgIGluc3RhbmNlUmVmID0gX3RoaXMkcHJvcHM0Lmluc3RhbmNlUmVmLFxuICAgICAgICBvcGVuID0gX3RoaXMkcHJvcHM0Lm9wZW4sXG4gICAgICAgIG9wdGlvbnMgPSBfdGhpcyRwcm9wczQub3B0aW9ucyxcbiAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczQuc3R5bGU7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFR5cGVhaGVhZCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICByZWY6IGluc3RhbmNlUmVmXG4gICAgfSksIGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIGdldElucHV0UHJvcHMgPSBfcmVmMy5nZXRJbnB1dFByb3BzLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcImdldElucHV0UHJvcHNcIl0pO1xuXG4gICAgICB2YXIgaGlkZU1lbnUgPSBwcm9wcy5oaWRlTWVudSxcbiAgICAgICAgICBpc01lbnVTaG93biA9IHByb3BzLmlzTWVudVNob3duLFxuICAgICAgICAgIHJlc3VsdHMgPSBwcm9wcy5yZXN1bHRzO1xuXG4gICAgICB2YXIgYXV4Q29udGVudCA9IF90aGlzMi5fcmVuZGVyQXV4KHByb3BzKTtcblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvb3RDbG9zZSwge1xuICAgICAgICBkaXNhYmxlZDogb3BlbiB8fCAhaXNNZW51U2hvd24sXG4gICAgICAgIG9uUm9vdENsb3NlOiBoaWRlTWVudVxuICAgICAgfSwgZnVuY3Rpb24gKHJlZikge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY3goJ3JidCcsIHtcbiAgICAgICAgICAgICdoYXMtYXV4JzogISFhdXhDb250ZW50XG4gICAgICAgICAgfSwgY2xhc3NOYW1lKSxcbiAgICAgICAgICByZWY6IHJlZixcbiAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlLCB7XG4gICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRhYkluZGV4OiAtMVxuICAgICAgICB9LCBfdGhpczIuX3JlbmRlcklucHV0KF9leHRlbmRzKHt9LCBnZXRJbnB1dFByb3BzKF90aGlzMi5wcm9wcy5pbnB1dFByb3BzKSwge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnRSZWY6IF90aGlzMi5yZWZlcmVuY2VFbGVtZW50UmVmXG4gICAgICAgIH0pLCBwcm9wcyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE92ZXJsYXksIF9leHRlbmRzKHt9LCBnZXRPdmVybGF5UHJvcHMoX3RoaXMyLnByb3BzKSwge1xuICAgICAgICAgIGlzTWVudVNob3duOiBpc01lbnVTaG93bixcbiAgICAgICAgICByZWZlcmVuY2VFbGVtZW50OiBfdGhpczIuX3JlZmVyZW5jZUVsZW1lbnRcbiAgICAgICAgfSksIGZ1bmN0aW9uIChtZW51UHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLl9yZW5kZXJNZW51KHJlc3VsdHMsIG1lbnVQcm9wcywgcHJvcHMpO1xuICAgICAgICB9KSwgYXV4Q29udGVudCwgaXNGdW5jdGlvbihjaGlsZHJlbikgPyBjaGlsZHJlbihwcm9wcykgOiBjaGlsZHJlbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gVHlwZWFoZWFkQ29tcG9uZW50O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoVHlwZWFoZWFkQ29tcG9uZW50LCBcInByb3BUeXBlc1wiLCBwcm9wVHlwZXMpO1xuXG5fZGVmaW5lUHJvcGVydHkoVHlwZWFoZWFkQ29tcG9uZW50LCBcImRlZmF1bHRQcm9wc1wiLCBkZWZhdWx0UHJvcHMpO1xuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwZWFoZWFkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBpbnN0YW5jZVJlZjogcmVmXG4gIH0pKTtcbn0pOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgKi9cblxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaW50IGZyb20gJy4vSGludCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgeyBpc1NlbGVjdGFibGUgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgd2l0aENsYXNzTmFtZXMgZnJvbSAnLi4vYmVoYXZpb3JzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IHsgQkFDS1NQQUNFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxudmFyIFR5cGVhaGVhZElucHV0TXVsdGkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHlwZWFoZWFkSW5wdXRNdWx0aSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHlwZWFoZWFkSW5wdXRNdWx0aSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ3cmFwcGVyUmVmXCIsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVSZWYoKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2lucHV0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0SW5wdXRSZWZcIiwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICBfdGhpcy5faW5wdXQgPSBpbnB1dDtcblxuICAgICAgX3RoaXMucHJvcHMuaW5wdXRSZWYoaW5wdXQpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVDb250YWluZXJDbGlja09yRm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIERvbid0IGZvY3VzIHRoZSBpbnB1dCBpZiBpdCdzIGRpc2FibGVkLlxuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5ibHVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gTW92ZSBjdXJzb3IgdG8gdGhlIGVuZCBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgYWN0dWFsIGlucHV0LlxuXG5cbiAgICAgIHZhciBpbnB1dE5vZGUgPSBfdGhpcy5faW5wdXQ7XG5cbiAgICAgIGlmICghaW5wdXROb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGUuY3VycmVudFRhcmdldCAhPT0gaW5wdXROb2RlICYmIGlzU2VsZWN0YWJsZShpbnB1dE5vZGUpKSB7XG4gICAgICAgIGlucHV0Tm9kZS5zZWxlY3Rpb25TdGFydCA9IGlucHV0Tm9kZS52YWx1ZS5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIGlucHV0Tm9kZS5mb2N1cygpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVLZXlEb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbktleURvd24gPSBfdGhpcyRwcm9wcy5vbktleURvd24sXG4gICAgICAgICAgc2VsZWN0ZWQgPSBfdGhpcyRwcm9wcy5zZWxlY3RlZCxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlO1xuXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIEJBQ0tTUEFDRTpcbiAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09PSBfdGhpcy5faW5wdXQgJiYgc2VsZWN0ZWQubGVuZ3RoICYmICF2YWx1ZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBicm93c2VyIGZyb20gZ29pbmcgYmFjay5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gSWYgdGhlIGlucHV0IGlzIHNlbGVjdGVkIGFuZCB0aGVyZSBpcyBubyB0ZXh0LCBmb2N1cyB0aGUgbGFzdFxuICAgICAgICAgICAgLy8gdG9rZW4gd2hlbiB0aGUgdXNlciBoaXRzIGJhY2tzcGFjZS5cblxuICAgICAgICAgICAgaWYgKF90aGlzLndyYXBwZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBfdGhpcy53cmFwcGVyUmVmLmN1cnJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgIHZhciBsYXN0VG9rZW4gPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgICAgbGFzdFRva2VuICYmIGxhc3RUb2tlbi5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIG9uS2V5RG93bihlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUeXBlYWhlYWRJbnB1dE11bHRpLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgaW5wdXRDbGFzc05hbWUgPSBfdGhpcyRwcm9wczIuaW5wdXRDbGFzc05hbWUsXG4gICAgICAgIGlucHV0UmVmID0gX3RoaXMkcHJvcHMyLmlucHV0UmVmLFxuICAgICAgICBwbGFjZWhvbGRlciA9IF90aGlzJHByb3BzMi5wbGFjZWhvbGRlcixcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudFJlZiA9IF90aGlzJHByb3BzMi5yZWZlcmVuY2VFbGVtZW50UmVmLFxuICAgICAgICBzZWxlY3RlZCA9IF90aGlzJHByb3BzMi5zZWxlY3RlZCxcbiAgICAgICAgc2hvdWxkU2VsZWN0SGludCA9IF90aGlzJHByb3BzMi5zaG91bGRTZWxlY3RIaW50LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzMiwgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJpbnB1dENsYXNzTmFtZVwiLCBcImlucHV0UmVmXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJyZWZlcmVuY2VFbGVtZW50UmVmXCIsIFwic2VsZWN0ZWRcIiwgXCJzaG91bGRTZWxlY3RIaW50XCJdKTtcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGN4KCdyYnQtaW5wdXQtbXVsdGknLCBjbGFzc05hbWUpLFxuICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgb25DbGljazogdGhpcy5faGFuZGxlQ29udGFpbmVyQ2xpY2tPckZvY3VzLFxuICAgICAgb25Gb2N1czogdGhpcy5faGFuZGxlQ29udGFpbmVyQ2xpY2tPckZvY3VzLFxuICAgICAgcmVmOiByZWZlcmVuY2VFbGVtZW50UmVmLFxuICAgICAgdGFiSW5kZXg6IC0xXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInJidC1pbnB1dC13cmFwcGVyXCIsXG4gICAgICByZWY6IHRoaXMud3JhcHBlclJlZlxuICAgIH0sIGNoaWxkcmVuLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIaW50LCB7XG4gICAgICBzaG91bGRTZWxlY3Q6IHNob3VsZFNlbGVjdEhpbnRcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IGlucHV0Q2xhc3NOYW1lLFxuICAgICAgb25LZXlEb3duOiB0aGlzLl9oYW5kbGVLZXlEb3duLFxuICAgICAgcGxhY2Vob2xkZXI6IHNlbGVjdGVkLmxlbmd0aCA/ICcnIDogcGxhY2Vob2xkZXIsXG4gICAgICByZWY6IHRoaXMuZ2V0SW5wdXRSZWYsXG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgIGN1cnNvcjogJ2luaGVyaXQnLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHpJbmRleDogMVxuICAgICAgfVxuICAgIH0pKSkpKTtcbiAgfTtcblxuICByZXR1cm4gVHlwZWFoZWFkSW5wdXRNdWx0aTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENsYXNzTmFtZXMoVHlwZWFoZWFkSW5wdXRNdWx0aSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpbnQgZnJvbSAnLi9IaW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCB3aXRoQ2xhc3NOYW1lcyBmcm9tICcuLi9iZWhhdmlvcnMvY2xhc3NOYW1lcyc7XG5leHBvcnQgZGVmYXVsdCB3aXRoQ2xhc3NOYW1lcyhmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgaW5wdXRSZWYgPSBfcmVmLmlucHV0UmVmLFxuICAgICAgcmVmZXJlbmNlRWxlbWVudFJlZiA9IF9yZWYucmVmZXJlbmNlRWxlbWVudFJlZixcbiAgICAgIHNob3VsZFNlbGVjdEhpbnQgPSBfcmVmLnNob3VsZFNlbGVjdEhpbnQsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImlucHV0UmVmXCIsIFwicmVmZXJlbmNlRWxlbWVudFJlZlwiLCBcInNob3VsZFNlbGVjdEhpbnRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChIaW50LCB7XG4gICAgc2hvdWxkU2VsZWN0OiBzaG91bGRTZWxlY3RIaW50XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICBpbnB1dFJlZihub2RlKTtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnRSZWYobm9kZSk7XG4gICAgfVxuICB9KSkpO1xufSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhpZ2hsaWdodGVyIGZyb20gJy4vSGlnaGxpZ2h0ZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJztcbmltcG9ydCB7IGdldE9wdGlvbkxhYmVsLCBnZXRPcHRpb25Qcm9wZXJ0eSB9IGZyb20gJy4uL3V0aWxzJztcbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBQcm92aWRlcyB0aGUgYWJpbGl0eSB0byBzcGVjaWZ5IGEgcHJlZml4IGJlZm9yZSB0aGUgdXNlci1lbnRlcmVkIHRleHQgdG9cbiAgICogaW5kaWNhdGUgdGhhdCB0aGUgc2VsZWN0aW9uIHdpbGwgYmUgbmV3LiBOby1vcCB1bmxlc3MgYGFsbG93TmV3PXt0cnVlfWAuXG4gICAqL1xuICBuZXdTZWxlY3Rpb25QcmVmaXg6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBQcm9tcHQgZGlzcGxheWVkIHdoZW4gbGFyZ2UgZGF0YSBzZXRzIGFyZSBwYWdpbmF0ZWQuXG4gICAqL1xuICBwYWdpbmF0aW9uVGV4dDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIGEgaG9vayBmb3IgY3VzdG9taXplZCByZW5kZXJpbmcgb2YgbWVudSBpdGVtIGNvbnRlbnRzLlxuICAgKi9cbiAgcmVuZGVyTWVudUl0ZW1DaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmNcbn07XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBuZXdTZWxlY3Rpb25QcmVmaXg6ICdOZXcgc2VsZWN0aW9uOiAnLFxuICBwYWdpbmF0aW9uVGV4dDogJ0Rpc3BsYXkgYWRkaXRpb25hbCByZXN1bHRzLi4uJyxcbiAgcmVuZGVyTWVudUl0ZW1DaGlsZHJlbjogZnVuY3Rpb24gcmVuZGVyTWVudUl0ZW1DaGlsZHJlbihvcHRpb24sIHByb3BzLCBpZHgpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSGlnaGxpZ2h0ZXIsIHtcbiAgICAgIHNlYXJjaDogcHJvcHMudGV4dFxuICAgIH0sIGdldE9wdGlvbkxhYmVsKG9wdGlvbiwgcHJvcHMubGFiZWxLZXkpKTtcbiAgfVxufTtcblxudmFyIFR5cGVhaGVhZE1lbnUgPSBmdW5jdGlvbiBUeXBlYWhlYWRNZW51KHByb3BzKSB7XG4gIHZhciBsYWJlbEtleSA9IHByb3BzLmxhYmVsS2V5LFxuICAgICAgbmV3U2VsZWN0aW9uUHJlZml4ID0gcHJvcHMubmV3U2VsZWN0aW9uUHJlZml4LFxuICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICBwYWdpbmF0aW9uVGV4dCA9IHByb3BzLnBhZ2luYXRpb25UZXh0LFxuICAgICAgcmVuZGVyTWVudUl0ZW1DaGlsZHJlbiA9IHByb3BzLnJlbmRlck1lbnVJdGVtQ2hpbGRyZW4sXG4gICAgICB0ZXh0ID0gcHJvcHMudGV4dCxcbiAgICAgIG1lbnVQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJsYWJlbEtleVwiLCBcIm5ld1NlbGVjdGlvblByZWZpeFwiLCBcIm9wdGlvbnNcIiwgXCJwYWdpbmF0aW9uVGV4dFwiLCBcInJlbmRlck1lbnVJdGVtQ2hpbGRyZW5cIiwgXCJ0ZXh0XCJdKTtcblxuICB2YXIgcmVuZGVyTWVudUl0ZW0gPSBmdW5jdGlvbiByZW5kZXJNZW51SXRlbShvcHRpb24sIHBvc2l0aW9uKSB7XG4gICAgdmFyIGxhYmVsID0gZ2V0T3B0aW9uTGFiZWwob3B0aW9uLCBsYWJlbEtleSk7XG4gICAgdmFyIG1lbnVJdGVtUHJvcHMgPSB7XG4gICAgICBkaXNhYmxlZDogZ2V0T3B0aW9uUHJvcGVydHkob3B0aW9uLCAnZGlzYWJsZWQnKSxcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgIG9wdGlvbjogb3B0aW9uLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgfTtcblxuICAgIGlmIChvcHRpb24uY3VzdG9tT3B0aW9uKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIF9leHRlbmRzKHt9LCBtZW51SXRlbVByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJyYnQtbWVudS1jdXN0b20tb3B0aW9uXCIsXG4gICAgICAgIGtleTogcG9zaXRpb24sXG4gICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgfSksIG5ld1NlbGVjdGlvblByZWZpeCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSGlnaGxpZ2h0ZXIsIHtcbiAgICAgICAgc2VhcmNoOiB0ZXh0XG4gICAgICB9LCBsYWJlbCkpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb24ucGFnaW5hdGlvbk9wdGlvbikge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7XG4gICAgICAgIGtleTogXCJwYWdpbmF0aW9uLWl0ZW1cIlxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudS5EaXZpZGVyLCBudWxsKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIF9leHRlbmRzKHt9LCBtZW51SXRlbVByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJyYnQtbWVudS1wYWdpbmF0aW9uLW9wdGlvblwiLFxuICAgICAgICBsYWJlbDogcGFnaW5hdGlvblRleHRcbiAgICAgIH0pLCBwYWdpbmF0aW9uVGV4dCkpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgX2V4dGVuZHMoe30sIG1lbnVJdGVtUHJvcHMsIHtcbiAgICAgIGtleTogcG9zaXRpb25cbiAgICB9KSwgcmVuZGVyTWVudUl0ZW1DaGlsZHJlbihvcHRpb24sIHByb3BzLCBwb3NpdGlvbikpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIEV4cGxpY3RseSBwYXNzIGB0ZXh0YCBzbyBGbG93IGRvZXNuJ3QgY29tcGxhaW4uLi5cbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIF9leHRlbmRzKHt9LCBtZW51UHJvcHMsIHtcbiAgICAgIHRleHQ6IHRleHRcbiAgICB9KSwgb3B0aW9ucy5tYXAocmVuZGVyTWVudUl0ZW0pKVxuICApO1xufTtcblxuVHlwZWFoZWFkTWVudS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5UeXBlYWhlYWRNZW51LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbmV4cG9ydCBkZWZhdWx0IFR5cGVhaGVhZE1lbnU7IiwiLyoqXG4gKiBDb21tb24gKG5vbi1wcmludGFibGUpIGtleWNvZGVzIGZvciBga2V5ZG93bmAgYW5kIGBrZXl1cGAgZXZlbnRzLiBOb3RlIHRoYXRcbiAqIGBrZXlwcmVzc2AgaGFuZGxlcyB0aGluZ3MgZGlmZmVyZW50bHkgYW5kIG1heSBub3QgcmV0dXJuIHRoZSBzYW1lIHZhbHVlcy5cbiAqL1xuZXhwb3J0IHZhciBCQUNLU1BBQ0UgPSA4O1xuZXhwb3J0IHZhciBUQUIgPSA5O1xuZXhwb3J0IHZhciBSRVRVUk4gPSAxMztcbmV4cG9ydCB2YXIgRVNDID0gMjc7XG5leHBvcnQgdmFyIFNQQUNFID0gMzI7XG5leHBvcnQgdmFyIExFRlQgPSAzNztcbmV4cG9ydCB2YXIgVVAgPSAzODtcbmV4cG9ydCB2YXIgUklHSFQgPSAzOTtcbmV4cG9ydCB2YXIgRE9XTiA9IDQwO1xuZXhwb3J0IHZhciBERUZBVUxUX0xBQkVMS0VZID0gJ2xhYmVsJztcbmV4cG9ydCB2YXIgQUxJR04gPSB7XG4gIEpVU1RJRlk6ICdqdXN0aWZ5JyxcbiAgTEVGVDogJ2xlZnQnLFxuICBSSUdIVDogJ3JpZ2h0J1xufTtcbmV4cG9ydCB2YXIgU0laRSA9IHtcbiAgTEFSR0U6ICdsYXJnZScsXG4gIExHOiAnbGcnLFxuICBTTTogJ3NtJyxcbiAgU01BTEw6ICdzbWFsbCdcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlscyc7XG5leHBvcnQgdmFyIFR5cGVhaGVhZENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCh7XG4gIGFjdGl2ZUluZGV4OiAtMSxcbiAgaGludFRleHQ6ICcnLFxuICBpZDogJycsXG4gIGluaXRpYWxJdGVtOiBudWxsLFxuICBpbnB1dE5vZGU6IG51bGwsXG4gIGlzT25seVJlc3VsdDogZmFsc2UsXG4gIG9uQWN0aXZlSXRlbUNoYW5nZTogbm9vcCxcbiAgb25BZGQ6IG5vb3AsXG4gIG9uSW5pdGlhbEl0ZW1DaGFuZ2U6IG5vb3AsXG4gIG9uTWVudUl0ZW1DbGljazogbm9vcCxcbiAgc2VsZWN0SGludE9uRW50ZXI6IHVuZGVmaW5lZCxcbiAgc2V0SXRlbTogbm9vcFxufSk7XG5leHBvcnQgdmFyIHVzZVR5cGVhaGVhZENvbnRleHQgPSBmdW5jdGlvbiB1c2VUeXBlYWhlYWRDb250ZXh0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChUeXBlYWhlYWRDb250ZXh0KTtcbn07IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHlwZWFoZWFkTWFuYWdlciBmcm9tICcuL1R5cGVhaGVhZE1hbmFnZXInO1xuaW1wb3J0IHsgY2FzZVNlbnNpdGl2ZVR5cGUsIGNoZWNrUHJvcFR5cGUsIGRlZmF1bHRJbnB1dFZhbHVlVHlwZSwgZGVmYXVsdFNlbGVjdGVkVHlwZSwgZGVwcmVjYXRlZCwgaGlnaGxpZ2h0T25seVJlc3VsdFR5cGUsIGlnbm9yZURpYWNyaXRpY3NUeXBlLCBpc1JlcXVpcmVkRm9yQTExeSwgbGFiZWxLZXlUeXBlLCBvcHRpb25UeXBlLCBzZWxlY3RlZFR5cGUgfSBmcm9tICcuLi9wcm9wVHlwZXMnO1xuaW1wb3J0IHsgYWRkQ3VzdG9tT3B0aW9uLCBkZWZhdWx0RmlsdGVyQnksIGdldE9wdGlvbkxhYmVsLCBnZXRTdHJpbmdMYWJlbEtleSwgZ2V0VXBkYXRlZEFjdGl2ZUluZGV4LCBnZXRUcnVuY2F0ZWRPcHRpb25zLCBoZWFkLCBpc1Nob3duLCBpc1N0cmluZywgbm9vcCwgdW5pcXVlSWQsIHZhbGlkYXRlU2VsZWN0ZWRQcm9wQ2hhbmdlIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgREVGQVVMVF9MQUJFTEtFWSwgRE9XTiwgRVNDLCBSRVRVUk4sIFRBQiwgVVAgfSBmcm9tICcuLi9jb25zdGFudHMnO1xudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgY3JlYXRpb24gb2YgbmV3IHNlbGVjdGlvbnMgb24gdGhlIGZseS4gTm90ZSB0aGF0IGFueSBuZXcgaXRlbXNcbiAgICogd2lsbCBiZSBhZGRlZCB0byB0aGUgbGlzdCBvZiBzZWxlY3Rpb25zLCBidXQgbm90IHRoZSBsaXN0IG9mIG9yaWdpbmFsXG4gICAqIG9wdGlvbnMgdW5sZXNzIGhhbmRsZWQgYXMgc3VjaCBieSBgVHlwZWFoZWFkYCdzIHBhcmVudC5cbiAgICpcbiAgICogSWYgYSBmdW5jdGlvbiBpcyBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciBhIGN1c3RvbVxuICAgKiBvcHRpb24gc2hvdWxkIGJlIGluY2x1ZGVkLiBUaGUgcmV0dXJuIHZhbHVlIHNob3VsZCBiZSB0cnVlIG9yIGZhbHNlLlxuICAgKi9cbiAgYWxsb3dOZXc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gIC8qKlxuICAgKiBBdXRvZm9jdXMgdGhlIGlucHV0IHdoZW4gdGhlIGNvbXBvbmVudCBpbml0aWFsbHkgbW91bnRzLlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgZmlsdGVyaW5nIHNob3VsZCBiZSBjYXNlLXNlbnNpdGl2ZS5cbiAgICovXG4gIGNhc2VTZW5zaXRpdmU6IGNoZWNrUHJvcFR5cGUoUHJvcFR5cGVzLmJvb2wsIGNhc2VTZW5zaXRpdmVUeXBlKSxcblxuICAvKipcbiAgICogVGhlIGluaXRpYWwgdmFsdWUgZGlzcGxheWVkIGluIHRoZSB0ZXh0IGlucHV0LlxuICAgKi9cbiAgZGVmYXVsdElucHV0VmFsdWU6IGNoZWNrUHJvcFR5cGUoUHJvcFR5cGVzLnN0cmluZywgZGVmYXVsdElucHV0VmFsdWVUeXBlKSxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIG1lbnUgaXMgZGlzcGxheWVkIHVwb24gaW5pdGlhbCByZW5kZXIuXG4gICAqL1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgYW55IHByZS1zZWxlY3RlZCBvcHRpb25zLiBVc2Ugb25seSBpZiB5b3Ugd2FudCB0aGUgY29tcG9uZW50IHRvXG4gICAqIGJlIHVuY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRTZWxlY3RlZDogY2hlY2tQcm9wVHlwZShQcm9wVHlwZXMuYXJyYXlPZihvcHRpb25UeXBlKSwgZGVmYXVsdFNlbGVjdGVkVHlwZSksXG5cbiAgLyoqXG4gICAqIEVpdGhlciBhbiBhcnJheSBvZiBmaWVsZHMgaW4gYG9wdGlvbmAgdG8gc2VhcmNoLCBvciBhIGN1c3RvbSBmaWx0ZXJpbmdcbiAgICogY2FsbGJhY2suXG4gICAqL1xuICBmaWx0ZXJCeTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkKSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogSGlnaGxpZ2h0cyB0aGUgbWVudSBpdGVtIGlmIHRoZXJlIGlzIG9ubHkgb25lIHJlc3VsdCBhbmQgYWxsb3dzIHNlbGVjdGluZ1xuICAgKiB0aGF0IGl0ZW0gYnkgaGl0dGluZyBlbnRlci4gRG9lcyBub3Qgd29yayB3aXRoIGBhbGxvd05ld2AuXG4gICAqL1xuICBoaWdobGlnaHRPbmx5UmVzdWx0OiBjaGVja1Byb3BUeXBlKFByb3BUeXBlcy5ib29sLCBoaWdobGlnaHRPbmx5UmVzdWx0VHlwZSksXG5cbiAgLyoqXG4gICAqIEFuIGh0bWwgaWQgYXR0cmlidXRlLCByZXF1aXJlZCBmb3IgYXNzaXN0aXZlIHRlY2hub2xvZ2llcyBzdWNoIGFzIHNjcmVlblxuICAgKiByZWFkZXJzLlxuICAgKi9cbiAgaWQ6IGNoZWNrUHJvcFR5cGUoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLCBpc1JlcXVpcmVkRm9yQTExeSksXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGZpbHRlciBzaG91bGQgaWdub3JlIGFjY2VudHMgYW5kIG90aGVyIGRpYWNyaXRpY2FsIG1hcmtzLlxuICAgKi9cbiAgaWdub3JlRGlhY3JpdGljczogY2hlY2tQcm9wVHlwZShQcm9wVHlwZXMuYm9vbCwgaWdub3JlRGlhY3JpdGljc1R5cGUpLFxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBvcHRpb24ga2V5IHRvIHVzZSBmb3IgZGlzcGxheSBvciBhIGZ1bmN0aW9uIHJldHVybmluZyB0aGVcbiAgICogZGlzcGxheSBzdHJpbmcuIEJ5IGRlZmF1bHQsIHRoZSBzZWxlY3RvciB3aWxsIHVzZSB0aGUgYGxhYmVsYCBrZXkuXG4gICAqL1xuICBsYWJlbEtleTogY2hlY2tQcm9wVHlwZShQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLCBsYWJlbEtleVR5cGUpLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHRvIGRpc3BsYXkgYnkgZGVmYXVsdC4gTW9zdGx5IGRvbmUgZm9yXG4gICAqIHBlcmZvcm1hbmNlIHJlYXNvbnMgc28gYXMgbm90IHRvIHJlbmRlciB0b28gbWFueSBET00gbm9kZXMgaW4gdGhlIGNhc2Ugb2ZcbiAgICogbGFyZ2UgZGF0YSBzZXRzLlxuICAgKi9cbiAgbWF4UmVzdWx0czogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogTnVtYmVyIG9mIGlucHV0IGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIGVudGVyZWQgYmVmb3JlIHNob3dpbmcgcmVzdWx0cy5cbiAgICovXG4gIG1pbkxlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgbXVsdGlwbGUgc2VsZWN0aW9ucyBhcmUgYWxsb3dlZC5cbiAgICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBpbnB1dCBpcyBibHVycmVkLiBSZWNlaXZlcyBhbiBldmVudC5cbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbmV2ZXIgaXRlbXMgYXJlIGFkZGVkIG9yIHJlbW92ZWQuIFJlY2VpdmVzIGFuIGFycmF5IG9mIHRoZVxuICAgKiBzZWxlY3RlZCBvcHRpb25zLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQuIFJlY2VpdmVzIGFuIGV2ZW50LlxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgaW5wdXQgdmFsdWUgY2hhbmdlcy4gUmVjZWl2ZXMgdGhlIHN0cmluZyB2YWx1ZSBvZiB0aGVcbiAgICogaW5wdXQuXG4gICAqL1xuICBvbklucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIGEga2V5IGlzIHByZXNzZWQuIFJlY2VpdmVzIGFuIGV2ZW50LlxuICAgKi9cbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIG1lbnUgdmlzaWJpbGl0eSBjaGFuZ2VzLlxuICAgKi9cbiAgb25NZW51VG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBwYWdpbmF0aW9uIG1lbnUgaXRlbSBpcyBjbGlja2VkLiBSZWNlaXZlcyBhbiBldmVudC5cbiAgICovXG4gIG9uUGFnaW5hdGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgbWVudSBzaG91bGQgYmUgZGlzcGxheWVkLiBgdW5kZWZpbmVkYCBhbGxvd3MgdGhlXG4gICAqIGNvbXBvbmVudCB0byBjb250cm9sIHZpc2liaWxpdHksIHdoaWxlIGB0cnVlYCBhbmQgYGZhbHNlYCBzaG93IGFuZCBoaWRlXG4gICAqIHRoZSBtZW51LCByZXNwZWN0aXZlbHkuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRnVsbCBzZXQgb2Ygb3B0aW9ucywgaW5jbHVkaW5nIHByZS1zZWxlY3RlZCBvcHRpb25zLiBNdXN0IGVpdGhlciBiZSBhblxuICAgKiBhcnJheSBvZiBvYmplY3RzIChyZWNvbW1lbmRlZCkgb3Igc3RyaW5ncy5cbiAgICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKG9wdGlvblR5cGUpLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEdpdmUgdXNlciB0aGUgYWJpbGl0eSB0byBkaXNwbGF5IGFkZGl0aW9uYWwgcmVzdWx0cyBpZiB0aGUgbnVtYmVyIG9mXG4gICAqIHJlc3VsdHMgZXhjZWVkcyBgbWF4UmVzdWx0c2AuXG4gICAqL1xuICBwYWdpbmF0ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBzZWxlY3RlZCBvcHRpb24ocykgZGlzcGxheWVkIGluIHRoZSBpbnB1dC4gVXNlIHRoaXMgcHJvcCBpZiB5b3Ugd2FudFxuICAgKiB0byBjb250cm9sIHRoZSBjb21wb25lbnQgdmlhIGl0cyBwYXJlbnQuXG4gICAqL1xuICBzZWxlY3RlZDogY2hlY2tQcm9wVHlwZShQcm9wVHlwZXMuYXJyYXlPZihvcHRpb25UeXBlKSwgc2VsZWN0ZWRUeXBlKSxcblxuICAvKipcbiAgICogQWxsb3dzIHNlbGVjdGluZyB0aGUgaGludGVkIHJlc3VsdCBieSBwcmVzc2luZyBlbnRlci5cbiAgICovXG4gIHNlbGVjdEhpbnRPbkVudGVyOiBkZXByZWNhdGVkKFByb3BUeXBlcy5ib29sLCAnVXNlIHRoZSBgc2hvdWxkU2VsZWN0YCBwcm9wIG9uIHRoZSBgSGludGAgY29tcG9uZW50IHRvIGRlZmluZSB3aGljaCAnICsgJ2tleXN0cm9rZXMgY2FuIHNlbGVjdCB0aGUgaGludC4nKVxufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGFsbG93TmV3OiBmYWxzZSxcbiAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlZmF1bHRJbnB1dFZhbHVlOiAnJyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBkZWZhdWx0U2VsZWN0ZWQ6IFtdLFxuICBmaWx0ZXJCeTogW10sXG4gIGhpZ2hsaWdodE9ubHlSZXN1bHQ6IGZhbHNlLFxuICBpZ25vcmVEaWFjcml0aWNzOiB0cnVlLFxuICBsYWJlbEtleTogREVGQVVMVF9MQUJFTEtFWSxcbiAgbWF4UmVzdWx0czogMTAwLFxuICBtaW5MZW5ndGg6IDAsXG4gIG11bHRpcGxlOiBmYWxzZSxcbiAgb25CbHVyOiBub29wLFxuICBvbkZvY3VzOiBub29wLFxuICBvbklucHV0Q2hhbmdlOiBub29wLFxuICBvbktleURvd246IG5vb3AsXG4gIG9uTWVudVRvZ2dsZTogbm9vcCxcbiAgb25QYWdpbmF0ZTogbm9vcCxcbiAgcGFnaW5hdGU6IHRydWVcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKHByb3BzKSB7XG4gIHZhciBkZWZhdWx0SW5wdXRWYWx1ZSA9IHByb3BzLmRlZmF1bHRJbnB1dFZhbHVlLFxuICAgICAgZGVmYXVsdE9wZW4gPSBwcm9wcy5kZWZhdWx0T3BlbixcbiAgICAgIGRlZmF1bHRTZWxlY3RlZCA9IHByb3BzLmRlZmF1bHRTZWxlY3RlZCxcbiAgICAgIG1heFJlc3VsdHMgPSBwcm9wcy5tYXhSZXN1bHRzLFxuICAgICAgbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZTtcbiAgdmFyIHNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy5zZWxlY3RlZC5zbGljZSgpIDogZGVmYXVsdFNlbGVjdGVkLnNsaWNlKCk7XG4gIHZhciB0ZXh0ID0gZGVmYXVsdElucHV0VmFsdWU7XG5cbiAgaWYgKCFtdWx0aXBsZSAmJiBzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAvLyBTZXQgdGhlIHRleHQgaWYgYW4gaW5pdGlhbCBzZWxlY3Rpb24gaXMgcGFzc2VkIGluLlxuICAgIHRleHQgPSBnZXRPcHRpb25MYWJlbChoZWFkKHNlbGVjdGVkKSwgcHJvcHMubGFiZWxLZXkpO1xuXG4gICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIExpbWl0IHRvIDEgc2VsZWN0aW9uIGluIHNpbmdsZS1zZWxlY3QgbW9kZS5cbiAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQuc2xpY2UoMCwgMSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhY3RpdmVJbmRleDogLTEsXG4gICAgYWN0aXZlSXRlbTogbnVsbCxcbiAgICBpbml0aWFsSXRlbTogbnVsbCxcbiAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgIHNlbGVjdGVkOiBzZWxlY3RlZCxcbiAgICBzaG93TWVudTogZGVmYXVsdE9wZW4sXG4gICAgc2hvd25SZXN1bHRzOiBtYXhSZXN1bHRzLFxuICAgIHRleHQ6IHRleHRcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclR5cGVhaGVhZChzdGF0ZSwgcHJvcHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBnZXRJbml0aWFsU3RhdGUocHJvcHMpLCB7XG4gICAgaXNGb2N1c2VkOiBzdGF0ZS5pc0ZvY3VzZWQsXG4gICAgc2VsZWN0ZWQ6IFtdLFxuICAgIHRleHQ6ICcnXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVNZW51KHN0YXRlLCBwcm9wcykge1xuICB2YXIgX2dldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZShwcm9wcyksXG4gICAgICBhY3RpdmVJbmRleCA9IF9nZXRJbml0aWFsU3RhdGUuYWN0aXZlSW5kZXgsXG4gICAgICBhY3RpdmVJdGVtID0gX2dldEluaXRpYWxTdGF0ZS5hY3RpdmVJdGVtLFxuICAgICAgaW5pdGlhbEl0ZW0gPSBfZ2V0SW5pdGlhbFN0YXRlLmluaXRpYWxJdGVtLFxuICAgICAgc2hvd25SZXN1bHRzID0gX2dldEluaXRpYWxTdGF0ZS5zaG93blJlc3VsdHM7XG5cbiAgcmV0dXJuIHtcbiAgICBhY3RpdmVJbmRleDogYWN0aXZlSW5kZXgsXG4gICAgYWN0aXZlSXRlbTogYWN0aXZlSXRlbSxcbiAgICBpbml0aWFsSXRlbTogaW5pdGlhbEl0ZW0sXG4gICAgc2hvd01lbnU6IGZhbHNlLFxuICAgIHNob3duUmVzdWx0czogc2hvd25SZXN1bHRzXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTWVudShzdGF0ZSwgcHJvcHMpIHtcbiAgcmV0dXJuIHN0YXRlLnNob3dNZW51ID8gaGlkZU1lbnUoc3RhdGUsIHByb3BzKSA6IHtcbiAgICBzaG93TWVudTogdHJ1ZVxuICB9O1xufVxuXG52YXIgVHlwZWFoZWFkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFR5cGVhaGVhZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHlwZWFoZWFkKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0YXRlXCIsIGdldEluaXRpYWxTdGF0ZShfdGhpcy5wcm9wcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlucHV0Tm9kZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlzTWVudVNob3duXCIsIGZhbHNlKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpdGVtc1wiLCBbXSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYmx1clwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5pbnB1dE5vZGUgJiYgX3RoaXMuaW5wdXROb2RlLmJsdXIoKTtcblxuICAgICAgX3RoaXMuaGlkZU1lbnUoKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjbGVhclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZShjbGVhclR5cGVhaGVhZCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaW5wdXROb2RlICYmIF90aGlzLmlucHV0Tm9kZS5mb2N1cygpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldElucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pbnB1dE5vZGU7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5wdXRSZWZcIiwgZnVuY3Rpb24gKGlucHV0Tm9kZSkge1xuICAgICAgX3RoaXMuaW5wdXROb2RlID0gaW5wdXROb2RlO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldEl0ZW1cIiwgZnVuY3Rpb24gKGl0ZW0sIHBvc2l0aW9uKSB7XG4gICAgICBfdGhpcy5pdGVtc1twb3NpdGlvbl0gPSBpdGVtO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhpZGVNZW51XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKGhpZGVNZW51KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ0b2dnbGVNZW51XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHRvZ2dsZU1lbnUpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVBY3RpdmVJbmRleENoYW5nZVwiLCBmdW5jdGlvbiAoYWN0aXZlSW5kZXgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleCxcbiAgICAgICAgICBhY3RpdmVJdGVtOiBhY3RpdmVJbmRleCA9PT0gLTEgPyBudWxsIDogc3RhdGUuYWN0aXZlSXRlbVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2hhbmRsZUFjdGl2ZUl0ZW1DaGFuZ2VcIiwgZnVuY3Rpb24gKGFjdGl2ZUl0ZW0pIHtcbiAgICAgIC8vIERvbid0IHVwZGF0ZSB0aGUgYWN0aXZlIGl0ZW0gaWYgaXQgaGFzbid0IGNoYW5nZWQuXG4gICAgICBpZiAoIWlzRXF1YWwoYWN0aXZlSXRlbSwgX3RoaXMuc3RhdGUuYWN0aXZlSXRlbSkpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGl2ZUl0ZW06IGFjdGl2ZUl0ZW1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2hhbmRsZUJsdXJcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucGVyc2lzdCgpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVDaGFuZ2VcIiwgZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiBfdGhpcy5wcm9wcy5vbkNoYW5nZShzZWxlY3RlZCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX2hhbmRsZUNsZWFyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKGNsZWFyVHlwZWFoZWFkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5faGFuZGxlQ2hhbmdlKFtdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVGb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wZXJzaXN0KCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNGb2N1c2VkOiB0cnVlLFxuICAgICAgICBzaG93TWVudTogdHJ1ZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVJbml0aWFsSXRlbUNoYW5nZVwiLCBmdW5jdGlvbiAoaW5pdGlhbEl0ZW0pIHtcbiAgICAgIC8vIERvbid0IHVwZGF0ZSB0aGUgaW5pdGlhbCBpdGVtIGlmIGl0IGhhc24ndCBjaGFuZ2VkLlxuICAgICAgaWYgKCFpc0VxdWFsKGluaXRpYWxJdGVtLCBfdGhpcy5zdGF0ZS5pbml0aWFsSXRlbSkpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGluaXRpYWxJdGVtOiBpbml0aWFsSXRlbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaGFuZGxlSW5wdXRDaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgdmFyIHRleHQgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzLm11bHRpcGxlLFxuICAgICAgICAgIG9uSW5wdXRDaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbklucHV0Q2hhbmdlOyAvLyBDbGVhciBzZWxlY3Rpb25zIHdoZW4gdGhlIGlucHV0IHZhbHVlIGNoYW5nZXMgaW4gc2luZ2xlLXNlbGVjdCBtb2RlLlxuXG4gICAgICB2YXIgc2hvdWxkQ2xlYXJTZWxlY3Rpb25zID0gX3RoaXMuc3RhdGUuc2VsZWN0ZWQubGVuZ3RoICYmICFtdWx0aXBsZTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlLCBwcm9wcykge1xuICAgICAgICB2YXIgX2dldEluaXRpYWxTdGF0ZTIgPSBnZXRJbml0aWFsU3RhdGUocHJvcHMpLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBfZ2V0SW5pdGlhbFN0YXRlMi5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0gPSBfZ2V0SW5pdGlhbFN0YXRlMi5hY3RpdmVJdGVtLFxuICAgICAgICAgICAgc2hvd25SZXN1bHRzID0gX2dldEluaXRpYWxTdGF0ZTIuc2hvd25SZXN1bHRzO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgICAgICAgIGFjdGl2ZUl0ZW06IGFjdGl2ZUl0ZW0sXG4gICAgICAgICAgc2VsZWN0ZWQ6IHNob3VsZENsZWFyU2VsZWN0aW9ucyA/IFtdIDogc3RhdGUuc2VsZWN0ZWQsXG4gICAgICAgICAgc2hvd01lbnU6IHRydWUsXG4gICAgICAgICAgc2hvd25SZXN1bHRzOiBzaG93blJlc3VsdHMsXG4gICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICB9O1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBvbklucHV0Q2hhbmdlKHRleHQsIGUpO1xuICAgICAgICBzaG91bGRDbGVhclNlbGVjdGlvbnMgJiYgX3RoaXMuX2hhbmRsZUNoYW5nZShbXSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaGFuZGxlS2V5RG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSBfdGhpcy5zdGF0ZS5hY3RpdmVJdGVtOyAvLyBTa2lwIG1vc3QgYWN0aW9ucyB3aGVuIHRoZSBtZW51IGlzIGhpZGRlbi5cblxuICAgICAgaWYgKCFfdGhpcy5pc01lbnVTaG93bikge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBVUCB8fCBlLmtleUNvZGUgPT09IERPV04pIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93TWVudTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMucHJvcHMub25LZXlEb3duKGUpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBVUDpcbiAgICAgICAgY2FzZSBET1dOOlxuICAgICAgICAgIC8vIFByZXZlbnQgaW5wdXQgY3Vyc29yIGZyb20gZ29pbmcgdG8gdGhlIGJlZ2lubmluZyB3aGVuIHByZXNzaW5nIHVwLlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIF90aGlzLl9oYW5kbGVBY3RpdmVJbmRleENoYW5nZShnZXRVcGRhdGVkQWN0aXZlSW5kZXgoX3RoaXMuc3RhdGUuYWN0aXZlSW5kZXgsIGUua2V5Q29kZSwgX3RoaXMuaXRlbXMpKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUkVUVVJOOlxuICAgICAgICAgIC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uIHdoaWxlIG1lbnUgaXMgb3Blbi5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYWN0aXZlSXRlbSAmJiBfdGhpcy5faGFuZGxlTWVudUl0ZW1TZWxlY3QoYWN0aXZlSXRlbSwgZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBFU0M6XG4gICAgICAgIGNhc2UgVEFCOlxuICAgICAgICAgIC8vIEVTQyBzaW1wbHkgaGlkZXMgdGhlIG1lbnUuIFRBQiB3aWxsIGJsdXIgdGhlIGlucHV0IGFuZCBtb3ZlIGZvY3VzIHRvXG4gICAgICAgICAgLy8gdGhlIG5leHQgaXRlbTsgaGlkZSB0aGUgbWVudSBzbyBpdCBkb2Vzbid0IGdhaW4gZm9jdXMuXG4gICAgICAgICAgX3RoaXMuaGlkZU1lbnUoKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaGFuZGxlTWVudUl0ZW1TZWxlY3RcIiwgZnVuY3Rpb24gKG9wdGlvbiwgZSkge1xuICAgICAgaWYgKG9wdGlvbi5wYWdpbmF0aW9uT3B0aW9uKSB7XG4gICAgICAgIF90aGlzLl9oYW5kbGVQYWdpbmF0ZShlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9oYW5kbGVTZWxlY3Rpb25BZGQob3B0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaGFuZGxlUGFnaW5hdGVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucGVyc2lzdCgpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2hvd25SZXN1bHRzOiBzdGF0ZS5zaG93blJlc3VsdHMgKyBwcm9wcy5tYXhSZXN1bHRzXG4gICAgICAgIH07XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblBhZ2luYXRlKGUsIF90aGlzLnN0YXRlLnNob3duUmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaGFuZGxlU2VsZWN0aW9uQWRkXCIsIGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMi5tdWx0aXBsZSxcbiAgICAgICAgICBsYWJlbEtleSA9IF90aGlzJHByb3BzMi5sYWJlbEtleTtcbiAgICAgIHZhciBzZWxlY3RlZDtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSBvcHRpb247XG4gICAgICB2YXIgdGV4dDsgLy8gQWRkIGEgdW5pcXVlIGlkIHRvIHRoZSBjdXN0b20gc2VsZWN0aW9uLiBBdm9pZCBkb2luZyB0aGlzIGluIGByZW5kZXJgIHNvXG4gICAgICAvLyB0aGUgaWQgZG9lc24ndCBpbmNyZW1lbnQgZXZlcnkgdGltZS5cblxuICAgICAgaWYgKCFpc1N0cmluZyhzZWxlY3Rpb24pICYmIHNlbGVjdGlvbi5jdXN0b21PcHRpb24pIHtcbiAgICAgICAgc2VsZWN0aW9uID0gX2V4dGVuZHMoe30sIHNlbGVjdGlvbiwge1xuICAgICAgICAgIGlkOiB1bmlxdWVJZCgnbmV3LWlkLScpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgLy8gSWYgbXVsdGlwbGUgc2VsZWN0aW9ucyBhcmUgYWxsb3dlZCwgYWRkIHRoZSBuZXcgc2VsZWN0aW9uIHRvIHRoZVxuICAgICAgICAvLyBleGlzdGluZyBzZWxlY3Rpb25zLlxuICAgICAgICBzZWxlY3RlZCA9IF90aGlzLnN0YXRlLnNlbGVjdGVkLmNvbmNhdChzZWxlY3Rpb24pO1xuICAgICAgICB0ZXh0ID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBvbmx5IGEgc2luZ2xlIHNlbGVjdGlvbiBpcyBhbGxvd2VkLCByZXBsYWNlIHRoZSBleGlzdGluZyBzZWxlY3Rpb25cbiAgICAgICAgLy8gd2l0aCB0aGUgbmV3IG9uZS5cbiAgICAgICAgc2VsZWN0ZWQgPSBbc2VsZWN0aW9uXTtcbiAgICAgICAgdGV4dCA9IGdldE9wdGlvbkxhYmVsKHNlbGVjdGlvbiwgbGFiZWxLZXkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlkZU1lbnUoc3RhdGUsIHByb3BzKSwge1xuICAgICAgICAgIGluaXRpYWxJdGVtOiBzZWxlY3Rpb24sXG4gICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkLFxuICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgfSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5faGFuZGxlQ2hhbmdlKHNlbGVjdGVkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9oYW5kbGVTZWxlY3Rpb25SZW1vdmVcIiwgZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgdmFyIHNlbGVjdGVkID0gX3RoaXMuc3RhdGUuc2VsZWN0ZWQuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuICFpc0VxdWFsKG9wdGlvbiwgc2VsZWN0aW9uKTtcbiAgICAgIH0pOyAvLyBNYWtlIHN1cmUgdGhlIGlucHV0IHN0YXlzIGZvY3VzZWQgYWZ0ZXIgdGhlIGl0ZW0gaXMgcmVtb3ZlZC5cblxuXG4gICAgICBfdGhpcy5mb2N1cygpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlkZU1lbnUoc3RhdGUsIHByb3BzKSwge1xuICAgICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFxuICAgICAgICB9KTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLl9oYW5kbGVDaGFuZ2Uoc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVHlwZWFoZWFkLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmF1dG9Gb2N1cyAmJiB0aGlzLmZvY3VzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBsYWJlbEtleSA9IF90aGlzJHByb3BzMy5sYWJlbEtleSxcbiAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczMubXVsdGlwbGUsXG4gICAgICAgIHNlbGVjdGVkID0gX3RoaXMkcHJvcHMzLnNlbGVjdGVkO1xuICAgIHZhbGlkYXRlU2VsZWN0ZWRQcm9wQ2hhbmdlKHNlbGVjdGVkLCBwcmV2UHJvcHMuc2VsZWN0ZWQpOyAvLyBTeW5jIHNlbGVjdGlvbnMgaW4gc3RhdGUgd2l0aCB0aG9zZSBpbiBwcm9wcy5cblxuICAgIGlmIChzZWxlY3RlZCAmJiAhaXNFcXVhbChzZWxlY3RlZCwgcHJldlN0YXRlLnNlbGVjdGVkKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGV4dDogc2VsZWN0ZWQubGVuZ3RoID8gZ2V0T3B0aW9uTGFiZWwoaGVhZChzZWxlY3RlZCksIGxhYmVsS2V5KSA6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIC8vIE9taXQgYG9uQ2hhbmdlYCBzbyBGbG93IGRvZXNuJ3QgY29tcGxhaW4uXG4gICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHM0Lm9uQ2hhbmdlLFxuICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHM0LCBbXCJvbkNoYW5nZVwiXSk7XG5cbiAgICB2YXIgbWVyZ2VkUHJvcHNBbmRTdGF0ZSA9IF9leHRlbmRzKHt9LCBvdGhlclByb3BzLCB0aGlzLnN0YXRlKTtcblxuICAgIHZhciBmaWx0ZXJCeSA9IG1lcmdlZFByb3BzQW5kU3RhdGUuZmlsdGVyQnksXG4gICAgICAgIGxhYmVsS2V5ID0gbWVyZ2VkUHJvcHNBbmRTdGF0ZS5sYWJlbEtleSxcbiAgICAgICAgb3B0aW9ucyA9IG1lcmdlZFByb3BzQW5kU3RhdGUub3B0aW9ucyxcbiAgICAgICAgcGFnaW5hdGUgPSBtZXJnZWRQcm9wc0FuZFN0YXRlLnBhZ2luYXRlLFxuICAgICAgICBzaG93blJlc3VsdHMgPSBtZXJnZWRQcm9wc0FuZFN0YXRlLnNob3duUmVzdWx0cyxcbiAgICAgICAgdGV4dCA9IG1lcmdlZFByb3BzQW5kU3RhdGUudGV4dDtcbiAgICB0aGlzLmlzTWVudVNob3duID0gaXNTaG93bihtZXJnZWRQcm9wc0FuZFN0YXRlKTtcbiAgICB0aGlzLml0ZW1zID0gW107IC8vIFJlc2V0IGl0ZW1zIG9uIHJlLXJlbmRlci5cblxuICAgIHZhciByZXN1bHRzID0gW107XG5cbiAgICBpZiAodGhpcy5pc01lbnVTaG93bikge1xuICAgICAgdmFyIGNiID0gdHlwZW9mIGZpbHRlckJ5ID09PSAnZnVuY3Rpb24nID8gZmlsdGVyQnkgOiBkZWZhdWx0RmlsdGVyQnk7XG4gICAgICByZXN1bHRzID0gb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gY2Iob3B0aW9uLCBtZXJnZWRQcm9wc0FuZFN0YXRlKTtcbiAgICAgIH0pOyAvLyBUaGlzIG11c3QgY29tZSBiZWZvcmUgcmVzdWx0cyBhcmUgdHJ1bmNhdGVkLlxuXG4gICAgICB2YXIgc2hvdWxkUGFnaW5hdGUgPSBwYWdpbmF0ZSAmJiByZXN1bHRzLmxlbmd0aCA+IHNob3duUmVzdWx0czsgLy8gVHJ1bmNhdGUgcmVzdWx0cyBpZiBuZWNlc3NhcnkuXG5cbiAgICAgIHJlc3VsdHMgPSBnZXRUcnVuY2F0ZWRPcHRpb25zKHJlc3VsdHMsIHNob3duUmVzdWx0cyk7IC8vIEFkZCB0aGUgY3VzdG9tIG9wdGlvbiBpZiBuZWNlc3NhcnkuXG5cbiAgICAgIGlmIChhZGRDdXN0b21PcHRpb24ocmVzdWx0cywgbWVyZ2VkUHJvcHNBbmRTdGF0ZSkpIHtcbiAgICAgICAgdmFyIF9yZXN1bHRzJHB1c2g7XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKChfcmVzdWx0cyRwdXNoID0ge1xuICAgICAgICAgIGN1c3RvbU9wdGlvbjogdHJ1ZVxuICAgICAgICB9LCBfcmVzdWx0cyRwdXNoW2dldFN0cmluZ0xhYmVsS2V5KGxhYmVsS2V5KV0gPSB0ZXh0LCBfcmVzdWx0cyRwdXNoKSk7XG4gICAgICB9IC8vIEFkZCB0aGUgcGFnaW5hdGlvbiBpdGVtIGlmIG5lY2Vzc2FyeS5cblxuXG4gICAgICBpZiAoc2hvdWxkUGFnaW5hdGUpIHtcbiAgICAgICAgdmFyIF9yZXN1bHRzJHB1c2gyO1xuXG4gICAgICAgIHJlc3VsdHMucHVzaCgoX3Jlc3VsdHMkcHVzaDIgPSB7fSwgX3Jlc3VsdHMkcHVzaDJbZ2V0U3RyaW5nTGFiZWxLZXkobGFiZWxLZXkpXSA9ICcnLCBfcmVzdWx0cyRwdXNoMi5wYWdpbmF0aW9uT3B0aW9uID0gdHJ1ZSwgX3Jlc3VsdHMkcHVzaDIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwZWFoZWFkTWFuYWdlciwgX2V4dGVuZHMoe30sIG1lcmdlZFByb3BzQW5kU3RhdGUsIHtcbiAgICAgIGhpZGVNZW51OiB0aGlzLmhpZGVNZW51LFxuICAgICAgaW5wdXROb2RlOiB0aGlzLmlucHV0Tm9kZSxcbiAgICAgIGlucHV0UmVmOiB0aGlzLmlucHV0UmVmLFxuICAgICAgaXNNZW51U2hvd246IHRoaXMuaXNNZW51U2hvd24sXG4gICAgICBvbkFjdGl2ZUl0ZW1DaGFuZ2U6IHRoaXMuX2hhbmRsZUFjdGl2ZUl0ZW1DaGFuZ2UsXG4gICAgICBvbkFkZDogdGhpcy5faGFuZGxlU2VsZWN0aW9uQWRkLFxuICAgICAgb25CbHVyOiB0aGlzLl9oYW5kbGVCbHVyLFxuICAgICAgb25DaGFuZ2U6IHRoaXMuX2hhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgb25DbGVhcjogdGhpcy5faGFuZGxlQ2xlYXIsXG4gICAgICBvbkZvY3VzOiB0aGlzLl9oYW5kbGVGb2N1cyxcbiAgICAgIG9uSGlkZTogdGhpcy5oaWRlTWVudSxcbiAgICAgIG9uSW5pdGlhbEl0ZW1DaGFuZ2U6IHRoaXMuX2hhbmRsZUluaXRpYWxJdGVtQ2hhbmdlLFxuICAgICAgb25LZXlEb3duOiB0aGlzLl9oYW5kbGVLZXlEb3duLFxuICAgICAgb25NZW51SXRlbUNsaWNrOiB0aGlzLl9oYW5kbGVNZW51SXRlbVNlbGVjdCxcbiAgICAgIG9uUmVtb3ZlOiB0aGlzLl9oYW5kbGVTZWxlY3Rpb25SZW1vdmUsXG4gICAgICByZXN1bHRzOiByZXN1bHRzLFxuICAgICAgc2V0SXRlbTogdGhpcy5zZXRJdGVtLFxuICAgICAgdG9nZ2xlTWVudTogdGhpcy50b2dnbGVNZW51XG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBUeXBlYWhlYWQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShUeXBlYWhlYWQsIFwicHJvcFR5cGVzXCIsIHByb3BUeXBlcyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShUeXBlYWhlYWQsIFwiZGVmYXVsdFByb3BzXCIsIGRlZmF1bHRQcm9wcyk7XG5cbmV4cG9ydCBkZWZhdWx0IFR5cGVhaGVhZDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VQcmV2aW91cyBmcm9tICdAcmVzdGFydC9ob29rcy91c2VQcmV2aW91cyc7XG5pbXBvcnQgeyBUeXBlYWhlYWRDb250ZXh0IH0gZnJvbSAnLi9Db250ZXh0JztcbmltcG9ydCB7IGdldEhpbnRUZXh0LCBnZXRJbnB1dFByb3BzLCBnZXRJbnB1dFRleHQsIGdldElzT25seVJlc3VsdCwgcGljayB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFJFVFVSTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG52YXIgaW5wdXRQcm9wS2V5cyA9IFsnYWN0aXZlSW5kZXgnLCAnZGlzYWJsZWQnLCAnaWQnLCAnaW5wdXRSZWYnLCAnaXNGb2N1c2VkJywgJ2lzTWVudVNob3duJywgJ211bHRpcGxlJywgJ29uQmx1cicsICdvbkNoYW5nZScsICdvbkZvY3VzJywgJ29uS2V5RG93bicsICdwbGFjZWhvbGRlciddO1xudmFyIHByb3BLZXlzID0gWydhY3RpdmVJbmRleCcsICdoaWRlTWVudScsICdpc01lbnVTaG93bicsICdsYWJlbEtleScsICdvbkNsZWFyJywgJ29uSGlkZScsICdvblJlbW92ZScsICdyZXN1bHRzJywgJ3NlbGVjdGVkJywgJ3RleHQnLCAndG9nZ2xlTWVudSddO1xudmFyIGNvbnRleHRLZXlzID0gWydhY3RpdmVJbmRleCcsICdpZCcsICdpbml0aWFsSXRlbScsICdpbnB1dE5vZGUnLCAnb25BY3RpdmVJdGVtQ2hhbmdlJywgJ29uQWRkJywgJ29uSW5pdGlhbEl0ZW1DaGFuZ2UnLCAnb25NZW51SXRlbUNsaWNrJywgJ3NlbGVjdEhpbnRPbkVudGVyJywgJ3NldEl0ZW0nXTtcblxudmFyIFR5cGVhaGVhZE1hbmFnZXIgPSBmdW5jdGlvbiBUeXBlYWhlYWRNYW5hZ2VyKHByb3BzKSB7XG4gIHZhciBhbGxvd05ldyA9IHByb3BzLmFsbG93TmV3LFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGluaXRpYWxJdGVtID0gcHJvcHMuaW5pdGlhbEl0ZW0sXG4gICAgICBpc01lbnVTaG93biA9IHByb3BzLmlzTWVudVNob3duLFxuICAgICAgb25BZGQgPSBwcm9wcy5vbkFkZCxcbiAgICAgIG9uSW5pdGlhbEl0ZW1DaGFuZ2UgPSBwcm9wcy5vbkluaXRpYWxJdGVtQ2hhbmdlLFxuICAgICAgb25LZXlEb3duID0gcHJvcHMub25LZXlEb3duLFxuICAgICAgb25NZW51VG9nZ2xlID0gcHJvcHMub25NZW51VG9nZ2xlLFxuICAgICAgcmVzdWx0cyA9IHByb3BzLnJlc3VsdHM7XG4gIHZhciBwcmV2UHJvcHMgPSB1c2VQcmV2aW91cyhwcm9wcyk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2xlYXIgdGhlIGluaXRpYWwgaXRlbSB3aGVuIHRoZXJlIGFyZSBubyByZXN1bHRzLlxuICAgIGlmICghKGFsbG93TmV3IHx8IHJlc3VsdHMubGVuZ3RoKSkge1xuICAgICAgb25Jbml0aWFsSXRlbUNoYW5nZShudWxsKTtcbiAgICB9XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcmV2UHJvcHMgJiYgcHJldlByb3BzLmlzTWVudVNob3duICE9PSBpc01lbnVTaG93bikge1xuICAgICAgb25NZW51VG9nZ2xlKGlzTWVudVNob3duKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgUkVUVVJOOlxuICAgICAgICBpZiAoaW5pdGlhbEl0ZW0gJiYgZ2V0SXNPbmx5UmVzdWx0KHByb3BzKSkge1xuICAgICAgICAgIG9uQWRkKGluaXRpYWxJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBvbktleURvd24oZSk7XG4gIH07XG5cbiAgdmFyIGNoaWxkUHJvcHMgPSBfZXh0ZW5kcyh7fSwgcGljayhwcm9wcywgcHJvcEtleXMpLCB7XG4gICAgZ2V0SW5wdXRQcm9wczogZ2V0SW5wdXRQcm9wcyhfZXh0ZW5kcyh7fSwgcGljayhwcm9wcywgaW5wdXRQcm9wS2V5cyksIHtcbiAgICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICAgIHZhbHVlOiBnZXRJbnB1dFRleHQocHJvcHMpXG4gICAgfSkpXG4gIH0pO1xuXG4gIHZhciBjb250ZXh0VmFsdWUgPSBfZXh0ZW5kcyh7fSwgcGljayhwcm9wcywgY29udGV4dEtleXMpLCB7XG4gICAgaGludFRleHQ6IGdldEhpbnRUZXh0KHByb3BzKSxcbiAgICBpc09ubHlSZXN1bHQ6IGdldElzT25seVJlc3VsdChwcm9wcylcbiAgfSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFR5cGVhaGVhZENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gIH0sIGNoaWxkcmVuKGNoaWxkUHJvcHMpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFR5cGVhaGVhZE1hbmFnZXI7IiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IF9Bc3luY1R5cGVhaGVhZCBmcm9tICcuL2NvbXBvbmVudHMvQXN5bmNUeXBlYWhlYWQnO1xuZXhwb3J0IHsgX0FzeW5jVHlwZWFoZWFkIGFzIEFzeW5jVHlwZWFoZWFkIH07XG5pbXBvcnQgX0NsZWFyQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9DbGVhckJ1dHRvbic7XG5leHBvcnQgeyBfQ2xlYXJCdXR0b24gYXMgQ2xlYXJCdXR0b24gfTtcbmltcG9ydCBfSGlnaGxpZ2h0ZXIgZnJvbSAnLi9jb21wb25lbnRzL0hpZ2hsaWdodGVyJztcbmV4cG9ydCB7IF9IaWdobGlnaHRlciBhcyBIaWdobGlnaHRlciB9O1xuaW1wb3J0IF9IaW50IGZyb20gJy4vY29tcG9uZW50cy9IaW50JztcbmV4cG9ydCB7IF9IaW50IGFzIEhpbnQgfTtcbmV4cG9ydCB7IHVzZUhpbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvSGludCc7XG5pbXBvcnQgX0lucHV0IGZyb20gJy4vY29tcG9uZW50cy9JbnB1dCc7XG5leHBvcnQgeyBfSW5wdXQgYXMgSW5wdXQgfTtcbmltcG9ydCBfTG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9Mb2FkZXInO1xuZXhwb3J0IHsgX0xvYWRlciBhcyBMb2FkZXIgfTtcbmltcG9ydCBfTWVudSBmcm9tICcuL2NvbXBvbmVudHMvTWVudSc7XG5leHBvcnQgeyBfTWVudSBhcyBNZW51IH07XG5pbXBvcnQgX01lbnVJdGVtIGZyb20gJy4vY29tcG9uZW50cy9NZW51SXRlbSc7XG5leHBvcnQgeyBfTWVudUl0ZW0gYXMgTWVudUl0ZW0gfTtcbmltcG9ydCBfVG9rZW4gZnJvbSAnLi9jb21wb25lbnRzL1Rva2VuJztcbmV4cG9ydCB7IF9Ub2tlbiBhcyBUb2tlbiB9O1xuaW1wb3J0IF9UeXBlYWhlYWQgZnJvbSAnLi9jb21wb25lbnRzL1R5cGVhaGVhZCc7XG5leHBvcnQgeyBfVHlwZWFoZWFkIGFzIFR5cGVhaGVhZCB9O1xuaW1wb3J0IF9UeXBlYWhlYWRJbnB1dE11bHRpIGZyb20gJy4vY29tcG9uZW50cy9UeXBlYWhlYWRJbnB1dE11bHRpJztcbmV4cG9ydCB7IF9UeXBlYWhlYWRJbnB1dE11bHRpIGFzIFR5cGVhaGVhZElucHV0TXVsdGkgfTtcbmltcG9ydCBfVHlwZWFoZWFkSW5wdXRTaW5nbGUgZnJvbSAnLi9jb21wb25lbnRzL1R5cGVhaGVhZElucHV0U2luZ2xlJztcbmV4cG9ydCB7IF9UeXBlYWhlYWRJbnB1dFNpbmdsZSBhcyBUeXBlYWhlYWRJbnB1dFNpbmdsZSB9O1xuaW1wb3J0IF9UeXBlYWhlYWRNZW51IGZyb20gJy4vY29tcG9uZW50cy9UeXBlYWhlYWRNZW51JztcbmV4cG9ydCB7IF9UeXBlYWhlYWRNZW51IGFzIFR5cGVhaGVhZE1lbnUgfTsgLy8gSE9DcyArIEhvb2tzXG5cbmltcG9ydCBfYXN5bmNDb250YWluZXIgZnJvbSAnLi9iZWhhdmlvcnMvYXN5bmMnO1xuZXhwb3J0IHsgX2FzeW5jQ29udGFpbmVyIGFzIGFzeW5jQ29udGFpbmVyIH07XG5leHBvcnQgeyB1c2VBc3luYywgd2l0aEFzeW5jIH0gZnJvbSAnLi9iZWhhdmlvcnMvYXN5bmMnO1xuaW1wb3J0IF9tZW51SXRlbUNvbnRhaW5lciBmcm9tICcuL2JlaGF2aW9ycy9pdGVtJztcbmV4cG9ydCB7IF9tZW51SXRlbUNvbnRhaW5lciBhcyBtZW51SXRlbUNvbnRhaW5lciB9O1xuZXhwb3J0IHsgdXNlSXRlbSwgd2l0aEl0ZW0gfSBmcm9tICcuL2JlaGF2aW9ycy9pdGVtJztcbmltcG9ydCBfdG9rZW5Db250YWluZXIgZnJvbSAnLi9iZWhhdmlvcnMvdG9rZW4nO1xuZXhwb3J0IHsgX3Rva2VuQ29udGFpbmVyIGFzIHRva2VuQ29udGFpbmVyIH07XG5leHBvcnQgeyB1c2VUb2tlbiwgd2l0aFRva2VuIH0gZnJvbSAnLi9iZWhhdmlvcnMvdG9rZW4nOyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCB2YWx1ZXMsIHdhcm4gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFNJWkUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgSU5QVVRfUFJPUFNfQkxBQ0tMSVNUID0gW3tcbiAgYWx0OiAnb25CbHVyJyxcbiAgcHJvcDogJ29uQmx1cidcbn0sIHtcbiAgYWx0OiAnb25JbnB1dENoYW5nZScsXG4gIHByb3A6ICdvbkNoYW5nZSdcbn0sIHtcbiAgYWx0OiAnb25Gb2N1cycsXG4gIHByb3A6ICdvbkZvY3VzJ1xufSwge1xuICBhbHQ6ICdvbktleURvd24nLFxuICBwcm9wOiAnb25LZXlEb3duJ1xufV07XG5leHBvcnQgdmFyIHNpemVUeXBlID0gUHJvcFR5cGVzLm9uZU9mKHZhbHVlcyhTSVpFKSk7XG4vKipcbiAqIEFsbG93cyBhZGRpdGlvbmFsIHdhcm5pbmdzIG9yIG1lc3NhZ2luZyByZWxhdGVkIHRvIHByb3AgdmFsaWRhdGlvbi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tQcm9wVHlwZSh2YWxpZGF0b3IsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgdmFyIF9Qcm9wVHlwZXMkY2hlY2tQcm9wVDtcblxuICAgIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygoX1Byb3BUeXBlcyRjaGVja1Byb3BUID0ge30sIF9Qcm9wVHlwZXMkY2hlY2tQcm9wVFtwcm9wTmFtZV0gPSB2YWxpZGF0b3IsIF9Qcm9wVHlwZXMkY2hlY2tQcm9wVCksIHByb3BzLCAncHJvcCcsIGNvbXBvbmVudE5hbWUpO1xuICAgIGlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gY2FzZVNlbnNpdGl2ZVR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBjYXNlU2Vuc2l0aXZlID0gcHJvcHMuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGZpbHRlckJ5ID0gcHJvcHMuZmlsdGVyQnk7XG4gIHdhcm4oIWNhc2VTZW5zaXRpdmUgfHwgdHlwZW9mIGZpbHRlckJ5ICE9PSAnZnVuY3Rpb24nLCAnWW91ciBgZmlsdGVyQnlgIGZ1bmN0aW9uIHdpbGwgb3ZlcnJpZGUgdGhlIGBjYXNlU2Vuc2l0aXZlYCBwcm9wLicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZWQodmFsaWRhdG9yLCByZWFzb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICB2YXIgX1Byb3BUeXBlcyRjaGVja1Byb3BUMjtcblxuICAgIGlmIChwcm9wc1twcm9wTmFtZV0gIT0gbnVsbCkge1xuICAgICAgd2FybihmYWxzZSwgXCJUaGUgYFwiICsgcHJvcE5hbWUgKyBcImAgcHJvcCBpcyBkZXByZWNhdGVkLiBcIiArIHJlYXNvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygoX1Byb3BUeXBlcyRjaGVja1Byb3BUMiA9IHt9LCBfUHJvcFR5cGVzJGNoZWNrUHJvcFQyW3Byb3BOYW1lXSA9IHZhbGlkYXRvciwgX1Byb3BUeXBlcyRjaGVja1Byb3BUMiksIHByb3BzLCAncHJvcCcsIGNvbXBvbmVudE5hbWUpO1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRJbnB1dFZhbHVlVHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIGRlZmF1bHRJbnB1dFZhbHVlID0gcHJvcHMuZGVmYXVsdElucHV0VmFsdWUsXG4gICAgICBkZWZhdWx0U2VsZWN0ZWQgPSBwcm9wcy5kZWZhdWx0U2VsZWN0ZWQsXG4gICAgICBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZDtcbiAgdmFyIG5hbWUgPSBkZWZhdWx0U2VsZWN0ZWQubGVuZ3RoID8gJ2RlZmF1bHRTZWxlY3RlZCcgOiAnc2VsZWN0ZWQnO1xuICB3YXJuKCEoIW11bHRpcGxlICYmIGRlZmF1bHRJbnB1dFZhbHVlICYmIChkZWZhdWx0U2VsZWN0ZWQubGVuZ3RoIHx8IHNlbGVjdGVkICYmIHNlbGVjdGVkLmxlbmd0aCkpLCBcImBkZWZhdWx0SW5wdXRWYWx1ZWAgd2lsbCBiZSBvdmVycmlkZGVuIGJ5IHRoZSB2YWx1ZSBmcm9tIGBcIiArIG5hbWUgKyBcImAuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRTZWxlY3RlZFR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBkZWZhdWx0U2VsZWN0ZWQgPSBwcm9wcy5kZWZhdWx0U2VsZWN0ZWQsXG4gICAgICBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlO1xuICB3YXJuKG11bHRpcGxlIHx8IGRlZmF1bHRTZWxlY3RlZC5sZW5ndGggPD0gMSwgJ1lvdSBhcmUgcGFzc2luZyBtdWx0aXBsZSBvcHRpb25zIHRvIHRoZSBgZGVmYXVsdFNlbGVjdGVkYCBwcm9wIG9mIGEgJyArICdUeXBlYWhlYWQgaW4gc2luZ2xlLXNlbGVjdCBtb2RlLiBUaGUgc2VsZWN0aW9ucyB3aWxsIGJlIHRydW5jYXRlZCB0byBhICcgKyAnc2luZ2xlIHNlbGVjdGlvbi4nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWdobGlnaHRPbmx5UmVzdWx0VHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIGFsbG93TmV3ID0gcHJvcHMuYWxsb3dOZXcsXG4gICAgICBoaWdobGlnaHRPbmx5UmVzdWx0ID0gcHJvcHMuaGlnaGxpZ2h0T25seVJlc3VsdDtcbiAgd2FybighKGhpZ2hsaWdodE9ubHlSZXN1bHQgJiYgYWxsb3dOZXcpLCAnYGhpZ2hsaWdodE9ubHlSZXN1bHRgIHdpbGwgbm90IHdvcmsgd2l0aCBgYWxsb3dOZXdgLicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlnbm9yZURpYWNyaXRpY3NUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgZmlsdGVyQnkgPSBwcm9wcy5maWx0ZXJCeSxcbiAgICAgIGlnbm9yZURpYWNyaXRpY3MgPSBwcm9wcy5pZ25vcmVEaWFjcml0aWNzO1xuICB3YXJuKGlnbm9yZURpYWNyaXRpY3MgfHwgdHlwZW9mIGZpbHRlckJ5ICE9PSAnZnVuY3Rpb24nLCAnWW91ciBgZmlsdGVyQnlgIGZ1bmN0aW9uIHdpbGwgb3ZlcnJpZGUgdGhlIGBpZ25vcmVEaWFjcml0aWNzYCBwcm9wLicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlucHV0UHJvcHNUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHM7XG5cbiAgaWYgKCEoaW5wdXRQcm9wcyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXRQcm9wcykgPT09ICdbb2JqZWN0IE9iamVjdF0nKSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBCbGFja2xpc3RlZCBwcm9wZXJ0aWVzLlxuXG5cbiAgSU5QVVRfUFJPUFNfQkxBQ0tMSVNULmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgYWx0ID0gX3JlZi5hbHQsXG4gICAgICAgIHByb3AgPSBfcmVmLnByb3A7XG4gICAgdmFyIG1zZyA9IGFsdCA/IFwiIFVzZSB0aGUgdG9wLWxldmVsIGBcIiArIGFsdCArIFwiYCBwcm9wIGluc3RlYWQuXCIgOiBudWxsO1xuICAgIHdhcm4oIWlucHV0UHJvcHNbcHJvcF0sIFwiVGhlIGBcIiArIHByb3AgKyBcImAgcHJvcGVydHkgb2YgYGlucHV0UHJvcHNgIHdpbGwgYmUgaWdub3JlZC5cIiArIG1zZyk7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVxdWlyZWRGb3JBMTF5KHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB3YXJuKHByb3BzW3Byb3BOYW1lXSAhPSBudWxsLCBcIlRoZSBwcm9wIGBcIiArIHByb3BOYW1lICsgXCJgIGlzIHJlcXVpcmVkIHRvIG1ha2UgYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCBcIiArICdhY2Nlc3NpYmxlIGZvciB1c2VycyBvZiBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIHN1Y2ggYXMgc2NyZWVuIHJlYWRlcnMuJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gbGFiZWxLZXlUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgYWxsb3dOZXcgPSBwcm9wcy5hbGxvd05ldyxcbiAgICAgIGxhYmVsS2V5ID0gcHJvcHMubGFiZWxLZXk7XG4gIHdhcm4oIShpc0Z1bmN0aW9uKGxhYmVsS2V5KSAmJiBhbGxvd05ldyksICdgbGFiZWxLZXlgIG11c3QgYmUgYSBzdHJpbmcgd2hlbiBgYWxsb3dOZXc9e3RydWV9YC4nKTtcbn1cbmV4cG9ydCB2YXIgb3B0aW9uVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKTtcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RlZFR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIHZhciBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWQ7XG4gIHdhcm4obXVsdGlwbGUgfHwgIXNlbGVjdGVkIHx8IHNlbGVjdGVkLmxlbmd0aCA8PSAxLCAnWW91IGFyZSBwYXNzaW5nIG11bHRpcGxlIG9wdGlvbnMgdG8gdGhlIGBzZWxlY3RlZGAgcHJvcCBvZiBhIFR5cGVhaGVhZCAnICsgJ2luIHNpbmdsZS1zZWxlY3QgbW9kZS4gVGhpcyBtYXkgbGVhZCB0byB1bmV4cGVjdGVkIGJlaGF2aW9ycyBvciBlcnJvcnMuJyk7XG4gIHdhcm4oIXNlbGVjdGVkIHx8IHNlbGVjdGVkICYmIGlzRnVuY3Rpb24ob25DaGFuZ2UpLCAnWW91IHByb3ZpZGVkIGEgYHNlbGVjdGVkYCBwcm9wIHdpdGhvdXQgYW4gYG9uQ2hhbmdlYCBoYW5kbGVyLiBJZiB5b3UgJyArICd3YW50IHRoZSB0eXBlYWhlYWQgdG8gYmUgdW5jb250cm9sbGVkLCB1c2UgYGRlZmF1bHRTZWxlY3RlZGAuICcgKyAnT3RoZXJ3aXNlLCBzZXQgYG9uQ2hhbmdlYC4nKTtcbn0iLCJpbXBvcnQgZ2V0T3B0aW9uTGFiZWwgZnJvbSAnLi9nZXRPcHRpb25MYWJlbCc7XG5cbmZ1bmN0aW9uIGFkZEN1c3RvbU9wdGlvbihyZXN1bHRzLCBwcm9wcykge1xuICB2YXIgYWxsb3dOZXcgPSBwcm9wcy5hbGxvd05ldyxcbiAgICAgIGxhYmVsS2V5ID0gcHJvcHMubGFiZWxLZXksXG4gICAgICB0ZXh0ID0gcHJvcHMudGV4dDtcblxuICBpZiAoIWFsbG93TmV3IHx8ICF0ZXh0LnRyaW0oKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBJZiB0aGUgY29uc3VtZXIgaGFzIHByb3ZpZGVkIGEgY2FsbGJhY2ssIHVzZSB0aGF0IHRvIGRldGVybWluZSB3aGV0aGVyIG9yXG4gIC8vIG5vdCB0byBhZGQgdGhlIGN1c3RvbSBvcHRpb24uXG5cblxuICBpZiAodHlwZW9mIGFsbG93TmV3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGFsbG93TmV3KHJlc3VsdHMsIHByb3BzKTtcbiAgfSAvLyBCeSBkZWZhdWx0LCBkb24ndCBhZGQgdGhlIGN1c3RvbSBvcHRpb24gaWYgdGhlcmUgaXMgYW4gZXhhY3QgdGV4dCBtYXRjaFxuICAvLyB3aXRoIGFuIGV4aXN0aW5nIG9wdGlvbi5cblxuXG4gIHJldHVybiAhcmVzdWx0cy5zb21lKGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIGdldE9wdGlvbkxhYmVsKG8sIGxhYmVsS2V5KSA9PT0gdGV4dDtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEN1c3RvbU9wdGlvbjsiLCJpbXBvcnQgaXNFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IGdldE9wdGlvblByb3BlcnR5IGZyb20gJy4vZ2V0T3B0aW9uUHJvcGVydHknO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNTdHJpbmcgfSBmcm9tICcuL25vZGFzaCc7XG5pbXBvcnQgc3RyaXBEaWFjcml0aWNzIGZyb20gJy4vc3RyaXBEaWFjcml0aWNzJztcbmltcG9ydCB3YXJuIGZyb20gJy4vd2Fybic7XG5cbmZ1bmN0aW9uIGlzTWF0Y2goaW5wdXQsIHN0cmluZywgcHJvcHMpIHtcbiAgdmFyIHNlYXJjaFN0ciA9IGlucHV0O1xuICB2YXIgc3RyID0gc3RyaW5nO1xuXG4gIGlmICghcHJvcHMuY2FzZVNlbnNpdGl2ZSkge1xuICAgIHNlYXJjaFN0ciA9IHNlYXJjaFN0ci50b0xvd2VyQ2FzZSgpO1xuICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgaWYgKHByb3BzLmlnbm9yZURpYWNyaXRpY3MpIHtcbiAgICBzZWFyY2hTdHIgPSBzdHJpcERpYWNyaXRpY3Moc2VhcmNoU3RyKTtcbiAgICBzdHIgPSBzdHJpcERpYWNyaXRpY3Moc3RyKTtcbiAgfVxuXG4gIHJldHVybiBzdHIuaW5kZXhPZihzZWFyY2hTdHIpICE9PSAtMTtcbn1cbi8qKlxuICogRGVmYXVsdCBhbGdvcml0aG0gZm9yIGZpbHRlcmluZyByZXN1bHRzLlxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdEZpbHRlckJ5KG9wdGlvbiwgcHJvcHMpIHtcbiAgdmFyIGZpbHRlckJ5ID0gcHJvcHMuZmlsdGVyQnksXG4gICAgICBsYWJlbEtleSA9IHByb3BzLmxhYmVsS2V5LFxuICAgICAgbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZSxcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWQsXG4gICAgICB0ZXh0ID0gcHJvcHMudGV4dDsgLy8gRG9uJ3Qgc2hvdyBzZWxlY3RlZCBvcHRpb25zIGluIHRoZSBtZW51IGZvciB0aGUgbXVsdGktc2VsZWN0IGNhc2UuXG5cbiAgaWYgKG11bHRpcGxlICYmIHNlbGVjdGVkLnNvbWUoZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gaXNFcXVhbChvLCBvcHRpb24pO1xuICB9KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0Z1bmN0aW9uKGxhYmVsS2V5KSAmJiBpc01hdGNoKHRleHQsIGxhYmVsS2V5KG9wdGlvbiksIHByb3BzKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGZpZWxkcyA9IGZpbHRlckJ5LnNsaWNlKCk7XG5cbiAgaWYgKGlzU3RyaW5nKGxhYmVsS2V5KSkge1xuICAgIC8vIEFkZCB0aGUgYGxhYmVsS2V5YCBmaWVsZCB0byB0aGUgbGlzdCBvZiBmaWVsZHMgaWYgaXQgaXNuJ3QgYWxyZWFkeSB0aGVyZS5cbiAgICBpZiAoZmllbGRzLmluZGV4T2YobGFiZWxLZXkpID09PSAtMSkge1xuICAgICAgZmllbGRzLnVuc2hpZnQobGFiZWxLZXkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc1N0cmluZyhvcHRpb24pKSB7XG4gICAgd2FybihmaWVsZHMubGVuZ3RoIDw9IDEsICdZb3UgY2Fubm90IGZpbHRlciBieSBwcm9wZXJ0aWVzIHdoZW4gYG9wdGlvbmAgaXMgYSBzdHJpbmcuJyk7XG4gICAgcmV0dXJuIGlzTWF0Y2godGV4dCwgb3B0aW9uLCBwcm9wcyk7XG4gIH1cblxuICByZXR1cm4gZmllbGRzLnNvbWUoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0T3B0aW9uUHJvcGVydHkob3B0aW9uLCBmaWVsZCk7XG5cbiAgICBpZiAoIWlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgd2FybihmYWxzZSwgJ0ZpZWxkcyBwYXNzZWQgdG8gYGZpbHRlckJ5YCBzaG91bGQgaGF2ZSBzdHJpbmcgdmFsdWVzLiBWYWx1ZSB3aWxsICcgKyAnYmUgY29udmVydGVkIHRvIGEgc3RyaW5nOyByZXN1bHRzIG1heSBiZSB1bmV4cGVjdGVkLicpO1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBpc01hdGNoKHRleHQsIHZhbHVlLCBwcm9wcyk7XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xufSIsImltcG9ydCBnZXRNYXRjaEJvdW5kcyBmcm9tICcuL2dldE1hdGNoQm91bmRzJztcbmltcG9ydCBnZXRPcHRpb25MYWJlbCBmcm9tICcuL2dldE9wdGlvbkxhYmVsJztcblxuZnVuY3Rpb24gZ2V0SGludFRleHQocHJvcHMpIHtcbiAgdmFyIGFjdGl2ZUluZGV4ID0gcHJvcHMuYWN0aXZlSW5kZXgsXG4gICAgICBpbml0aWFsSXRlbSA9IHByb3BzLmluaXRpYWxJdGVtLFxuICAgICAgaXNGb2N1c2VkID0gcHJvcHMuaXNGb2N1c2VkLFxuICAgICAgaXNNZW51U2hvd24gPSBwcm9wcy5pc01lbnVTaG93bixcbiAgICAgIGxhYmVsS2V5ID0gcHJvcHMubGFiZWxLZXksXG4gICAgICBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZCxcbiAgICAgIHRleHQgPSBwcm9wcy50ZXh0OyAvLyBEb24ndCBkaXNwbGF5IGEgaGludCB1bmRlciB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgaWYgKCAvLyBObyB0ZXh0IGVudGVyZWQuXG4gICF0ZXh0IHx8IC8vIFRoZSBpbnB1dCBpcyBub3QgZm9jdXNlZC5cbiAgIWlzRm9jdXNlZCB8fCAvLyBUaGUgbWVudSBpcyBoaWRkZW4uXG4gICFpc01lbnVTaG93biB8fCAvLyBObyBpdGVtIGluIHRoZSBtZW51LlxuICAhaW5pdGlhbEl0ZW0gfHwgLy8gVGhlIGluaXRpYWwgaXRlbSBpcyBhIGN1c3RvbSBvcHRpb24uXG4gIGluaXRpYWxJdGVtLmN1c3RvbU9wdGlvbiB8fCAvLyBPbmUgb2YgdGhlIG1lbnUgaXRlbXMgaXMgYWN0aXZlLlxuICBhY3RpdmVJbmRleCA+IC0xIHx8IC8vIFRoZXJlJ3MgYWxyZWFkeSBhIHNlbGVjdGlvbiBpbiBzaW5nbGUtc2VsZWN0IG1vZGUuXG4gICEhc2VsZWN0ZWQubGVuZ3RoICYmICFtdWx0aXBsZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBpbml0aWFsSXRlbVN0ciA9IGdldE9wdGlvbkxhYmVsKGluaXRpYWxJdGVtLCBsYWJlbEtleSk7XG4gIHZhciBib3VuZHMgPSBnZXRNYXRjaEJvdW5kcyhpbml0aWFsSXRlbVN0ci50b0xvd2VyQ2FzZSgpLCB0ZXh0LnRvTG93ZXJDYXNlKCkpO1xuXG4gIGlmICghKGJvdW5kcyAmJiBib3VuZHMuc3RhcnQgPT09IDApKSB7XG4gICAgcmV0dXJuICcnO1xuICB9IC8vIFRleHQgbWF0Y2hpbmcgaXMgY2FzZS0gYW5kIGFjY2VudC1pbnNlbnNpdGl2ZSwgc28gdG8gZGlzcGxheSB0aGUgaGludFxuICAvLyBjb3JyZWN0bHksIHNwbGljZSB0aGUgaW5wdXQgc3RyaW5nIHdpdGggdGhlIGhpbnQgc3RyaW5nLlxuXG5cbiAgcmV0dXJuIHRleHQgKyBpbml0aWFsSXRlbVN0ci5zbGljZShib3VuZHMuZW5kLCBpbml0aWFsSXRlbVN0ci5sZW5ndGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRIaW50VGV4dDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBnZXRNZW51SXRlbUlkIGZyb20gJy4vZ2V0TWVudUl0ZW1JZCc7XG5cbnZhciBnZXRJbnB1dFByb3BzID0gZnVuY3Rpb24gZ2V0SW5wdXRQcm9wcyhfcmVmKSB7XG4gIHZhciBhY3RpdmVJbmRleCA9IF9yZWYuYWN0aXZlSW5kZXgsXG4gICAgICBpZCA9IF9yZWYuaWQsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICAgIGlzTWVudVNob3duID0gX3JlZi5pc01lbnVTaG93bixcbiAgICAgIG11bHRpcGxlID0gX3JlZi5tdWx0aXBsZSxcbiAgICAgIG9uRm9jdXMgPSBfcmVmLm9uRm9jdXMsXG4gICAgICBwbGFjZWhvbGRlciA9IF9yZWYucGxhY2Vob2xkZXIsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYWN0aXZlSW5kZXhcIiwgXCJpZFwiLCBcImlzRm9jdXNlZFwiLCBcImlzTWVudVNob3duXCIsIFwibXVsdGlwbGVcIiwgXCJvbkZvY3VzXCIsIFwicGxhY2Vob2xkZXJcIl0pO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoX3RlbXApIHtcbiAgICB2YXIgX2N4O1xuXG4gICAgdmFyIF9yZWYyID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9yZWYyLmNsYXNzTmFtZSxcbiAgICAgICAgaW5wdXRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJjbGFzc05hbWVcIl0pO1xuXG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgc29ydC1rZXlzICovXG4gICAgICAvLyBUaGVzZSBwcm9wcyBjYW4gYmUgb3ZlcnJpZGRlbiBieSB2YWx1ZXMgaW4gYGlucHV0UHJvcHNgLlxuICAgICAgYXV0b0NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgIHR5cGU6ICd0ZXh0J1xuICAgIH0sIGlucHV0UHJvcHMsIHJlc3QsIHtcbiAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBhY3RpdmVJbmRleCA+PSAwID8gZ2V0TWVudUl0ZW1JZChpZCwgYWN0aXZlSW5kZXgpIDogdW5kZWZpbmVkLFxuICAgICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ2JvdGgnLFxuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBpc01lbnVTaG93bixcbiAgICAgICdhcmlhLWhhc3BvcHVwJzogJ2xpc3Rib3gnLFxuICAgICAgJ2FyaWEtb3ducyc6IGlzTWVudVNob3duID8gaWQgOiB1bmRlZmluZWQsXG4gICAgICBjbGFzc05hbWU6IGN4KChfY3ggPSB7fSwgX2N4W2NsYXNzTmFtZSB8fCAnJ10gPSAhbXVsdGlwbGUsIF9jeC5mb2N1cyA9IGlzRm9jdXNlZCwgX2N4KSksXG4gICAgICAvLyBSZS1vcGVuIHRoZSBtZW51LCBlZzogaWYgaXQncyBjbG9zZWQgdmlhIEVTQy5cbiAgICAgIG9uQ2xpY2s6IG9uRm9jdXMsXG4gICAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgICAgLy8gQ29tYm9ib3hlcyBhcmUgc2luZ2xlLXNlbGVjdCBieSBkZWZpbml0aW9uOlxuICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjEvI2NvbWJvYm94XG4gICAgICByb2xlOiAnY29tYm9ib3gnXG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHNvcnQta2V5cyAqL1xuXG4gICAgfSk7XG5cbiAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ2xpc3QnLFxuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiB1bmRlZmluZWQsXG4gICAgICBpbnB1dENsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgcm9sZTogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRJbnB1dFByb3BzOyIsImltcG9ydCBnZXRPcHRpb25MYWJlbCBmcm9tICcuL2dldE9wdGlvbkxhYmVsJztcbmltcG9ydCB7IGhlYWQgfSBmcm9tICcuL25vZGFzaCc7XG5cbmZ1bmN0aW9uIGdldElucHV0VGV4dChwcm9wcykge1xuICB2YXIgYWN0aXZlSXRlbSA9IHByb3BzLmFjdGl2ZUl0ZW0sXG4gICAgICBsYWJlbEtleSA9IHByb3BzLmxhYmVsS2V5LFxuICAgICAgbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZSxcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWQsXG4gICAgICB0ZXh0ID0gcHJvcHMudGV4dDtcblxuICBpZiAoYWN0aXZlSXRlbSkge1xuICAgIC8vIERpc3BsYXkgdGhlIGlucHV0IHZhbHVlIGlmIHRoZSBwYWdpbmF0aW9uIGl0ZW0gaXMgYWN0aXZlLlxuICAgIHJldHVybiBnZXRPcHRpb25MYWJlbChhY3RpdmVJdGVtLCBsYWJlbEtleSk7XG4gIH1cblxuICB2YXIgc2VsZWN0ZWRJdGVtID0gIW11bHRpcGxlICYmICEhc2VsZWN0ZWQubGVuZ3RoICYmIGhlYWQoc2VsZWN0ZWQpO1xuXG4gIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uTGFiZWwoc2VsZWN0ZWRJdGVtLCBsYWJlbEtleSk7XG4gIH1cblxuICByZXR1cm4gdGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SW5wdXRUZXh0OyIsImltcG9ydCBnZXRPcHRpb25Qcm9wZXJ0eSBmcm9tICcuL2dldE9wdGlvblByb3BlcnR5JztcbmltcG9ydCB7IGhlYWQgfSBmcm9tICcuL25vZGFzaCc7XG5cbmZ1bmN0aW9uIGdldElzT25seVJlc3VsdChwcm9wcykge1xuICB2YXIgYWxsb3dOZXcgPSBwcm9wcy5hbGxvd05ldyxcbiAgICAgIGhpZ2hsaWdodE9ubHlSZXN1bHQgPSBwcm9wcy5oaWdobGlnaHRPbmx5UmVzdWx0LFxuICAgICAgcmVzdWx0cyA9IHByb3BzLnJlc3VsdHM7XG5cbiAgaWYgKCFoaWdobGlnaHRPbmx5UmVzdWx0IHx8IGFsbG93TmV3KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoID09PSAxICYmICFnZXRPcHRpb25Qcm9wZXJ0eShoZWFkKHJlc3VsdHMpLCAnZGlzYWJsZWQnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SXNPbmx5UmVzdWx0OyIsImltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCBzdHJpcERpYWNyaXRpY3MgZnJvbSAnLi9zdHJpcERpYWNyaXRpY3MnO1xudmFyIENBU0VfSU5TRU5TSVRJVkUgPSAnaSc7XG52YXIgQ09NQklOSU5HX01BUktTID0gL1tcXHUwMzAwLVxcdTAzNkZdLztcbi8vIEV4cG9ydCBmb3IgdGVzdGluZy5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVTdHJpbmdSZWdleHAoc3RyKSB7XG4gICEodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnYGVzY2FwZVN0cmluZ1JlZ2V4cGAgZXhwZWN0ZWQgYSBzdHJpbmcuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwOyAvLyBFc2NhcGUgY2hhcmFjdGVycyB3aXRoIHNwZWNpYWwgbWVhbmluZyBlaXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgY2hhcmFjdGVyXG4gIC8vIHNldHMuIFVzZSBhIHNpbXBsZSBiYWNrc2xhc2ggZXNjYXBlIHdoZW4gaXTigJlzIGFsd2F5cyB2YWxpZCwgYW5kIGEgXFx1bm5ublxuICAvLyBlc2NhcGUgd2hlbiB0aGUgc2ltcGxlciBmb3JtIHdvdWxkIGJlIGRpc2FsbG93ZWQgYnkgVW5pY29kZSBwYXR0ZXJuc+KAmVxuICAvLyBzdHJpY3RlciBncmFtbWFyLlxuXG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csICdcXFxcJCYnKS5yZXBsYWNlKC8tL2csICdcXFxceDJkJyk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYXRjaEJvdW5kcyhzdWJqZWN0LCBzdHIpIHtcbiAgdmFyIHNlYXJjaCA9IG5ldyBSZWdFeHAoZXNjYXBlU3RyaW5nUmVnZXhwKHN0cmlwRGlhY3JpdGljcyhzdHIpKSwgQ0FTRV9JTlNFTlNJVElWRSk7XG4gIHZhciBtYXRjaGVzID0gc2VhcmNoLmV4ZWMoc3RyaXBEaWFjcml0aWNzKHN1YmplY3QpKTtcblxuICBpZiAoIW1hdGNoZXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBzdGFydCA9IG1hdGNoZXMuaW5kZXg7XG4gIHZhciBtYXRjaExlbmd0aCA9IG1hdGNoZXNbMF0ubGVuZ3RoOyAvLyBBY2NvdW50IGZvciBjb21iaW5pbmcgbWFya3MsIHdoaWNoIGNoYW5nZXMgdGhlIGluZGljZXMuXG5cbiAgaWYgKENPTUJJTklOR19NQVJLUy50ZXN0KHN1YmplY3QpKSB7XG4gICAgLy8gU3RhcnRpbmcgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc3ViamVjdCBzdHJpbmcsIGNoZWNrIGZvciB0aGUgbnVtYmVyIG9mXG4gICAgLy8gY29tYmluaW5nIG1hcmtzIGFuZCBpbmNyZW1lbnQgdGhlIHN0YXJ0IGluZGV4IHdoZW5ldmVyIG9uZSBpcyBmb3VuZC5cbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDw9IHN0YXJ0OyBpaSsrKSB7XG4gICAgICBpZiAoQ09NQklOSU5HX01BUktTLnRlc3Qoc3ViamVjdFtpaV0pKSB7XG4gICAgICAgIHN0YXJ0ICs9IDE7XG4gICAgICB9XG4gICAgfSAvLyBTaW1pbGFybHksIGluY3JlbWVudCB0aGUgbGVuZ3RoIG9mIHRoZSBtYXRjaCBzdHJpbmcgaWYgaXQgY29udGFpbnMgYVxuICAgIC8vIGNvbWJpbmluZyBtYXJrLlxuXG5cbiAgICBmb3IgKHZhciBfaWkgPSBzdGFydDsgX2lpIDw9IHN0YXJ0ICsgbWF0Y2hMZW5ndGg7IF9paSsrKSB7XG4gICAgICBpZiAoQ09NQklOSU5HX01BUktTLnRlc3Qoc3ViamVjdFtfaWldKSkge1xuICAgICAgICBtYXRjaExlbmd0aCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZW5kOiBzdGFydCArIG1hdGNoTGVuZ3RoLFxuICAgIHN0YXJ0OiBzdGFydFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1lbnVJdGVtSWQoaWQsIHBvc2l0aW9uKSB7XG4gIHJldHVybiAoaWQgfHwgJycpICsgXCItaXRlbS1cIiArIHBvc2l0aW9uO1xufSIsImltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCBnZXRTdHJpbmdMYWJlbEtleSBmcm9tICcuL2dldFN0cmluZ0xhYmVsS2V5JztcbmltcG9ydCB7IGlzRnVuY3Rpb24sIGlzU3RyaW5nIH0gZnJvbSAnLi9ub2Rhc2gnO1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgZGlzcGxheSBzdHJpbmcgZnJvbSBhbiBvcHRpb24uIE9wdGlvbnMgY2FuIGJlIHRoZSBzdHJpbmdcbiAqIHRoZW1zZWx2ZXMsIG9yIGFuIG9iamVjdCB3aXRoIGEgZGVmaW5lZCBkaXNwbGF5IHN0cmluZy4gQW55dGhpbmcgZWxzZSB0aHJvd3NcbiAqIGFuIGVycm9yLlxuICovXG5mdW5jdGlvbiBnZXRPcHRpb25MYWJlbChvcHRpb24sIGxhYmVsS2V5KSB7XG4gIC8vIEhhbmRsZSBpbnRlcm5hbGx5IGNyZWF0ZWQgb3B0aW9ucyBmaXJzdC5cbiAgaWYgKCFpc1N0cmluZyhvcHRpb24pICYmIChvcHRpb24ucGFnaW5hdGlvbk9wdGlvbiB8fCBvcHRpb24uY3VzdG9tT3B0aW9uKSkge1xuICAgIHJldHVybiBvcHRpb25bZ2V0U3RyaW5nTGFiZWxLZXkobGFiZWxLZXkpXTtcbiAgfVxuXG4gIHZhciBvcHRpb25MYWJlbDtcblxuICBpZiAoaXNGdW5jdGlvbihsYWJlbEtleSkpIHtcbiAgICBvcHRpb25MYWJlbCA9IGxhYmVsS2V5KG9wdGlvbik7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcob3B0aW9uKSkge1xuICAgIG9wdGlvbkxhYmVsID0gb3B0aW9uO1xuICB9IGVsc2Uge1xuICAgIC8vIGBvcHRpb25gIGlzIGFuIG9iamVjdCBhbmQgYGxhYmVsS2V5YCBpcyBhIHN0cmluZy5cbiAgICBvcHRpb25MYWJlbCA9IG9wdGlvbltsYWJlbEtleV07XG4gIH1cblxuICAhaXNTdHJpbmcob3B0aW9uTGFiZWwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnT25lIG9yIG1vcmUgb3B0aW9ucyBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgbGFiZWwgc3RyaW5nLiBDaGVjayB0aGUgJyArICdgbGFiZWxLZXlgIHByb3AgdG8gZW5zdXJlIHRoYXQgaXQgbWF0Y2hlcyB0aGUgY29ycmVjdCBvcHRpb24ga2V5IGFuZCAnICsgJ3Byb3ZpZGVzIGEgc3RyaW5nIGZvciBmaWx0ZXJpbmcgYW5kIGRpc3BsYXkuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gb3B0aW9uTGFiZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE9wdGlvbkxhYmVsOyIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi9ub2Rhc2gnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3B0aW9uUHJvcGVydHkob3B0aW9uLCBrZXkpIHtcbiAgaWYgKGlzU3RyaW5nKG9wdGlvbikpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbltrZXldO1xufSIsImltcG9ydCB7IERFRkFVTFRfTEFCRUxLRVkgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3RyaW5nTGFiZWxLZXkobGFiZWxLZXkpIHtcbiAgcmV0dXJuIHR5cGVvZiBsYWJlbEtleSA9PT0gJ3N0cmluZycgPyBsYWJlbEtleSA6IERFRkFVTFRfTEFCRUxLRVk7XG59IiwiLyoqXG4gKiBUcnVuY2F0ZXMgdGhlIHJlc3VsdCBzZXQgYmFzZWQgb24gYG1heFJlc3VsdHNgIGFuZCByZXR1cm5zIHRoZSBuZXcgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRUcnVuY2F0ZWRPcHRpb25zKG9wdGlvbnMsIG1heFJlc3VsdHMpIHtcbiAgaWYgKCFtYXhSZXN1bHRzIHx8IG1heFJlc3VsdHMgPj0gb3B0aW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLnNsaWNlKDAsIG1heFJlc3VsdHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRUcnVuY2F0ZWRPcHRpb25zOyIsImltcG9ydCB7IERPV04sIFVQIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gc2tpcERpc2FibGVkT3B0aW9ucyhjdXJyZW50SW5kZXgsIGtleUNvZGUsIGl0ZW1zKSB7XG4gIHZhciBuZXdJbmRleCA9IGN1cnJlbnRJbmRleDtcblxuICB3aGlsZSAoaXRlbXNbbmV3SW5kZXhdICYmIGl0ZW1zW25ld0luZGV4XS5kaXNhYmxlZCkge1xuICAgIG5ld0luZGV4ICs9IGtleUNvZGUgPT09IFVQID8gLTEgOiAxO1xuICB9XG5cbiAgcmV0dXJuIG5ld0luZGV4O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVcGRhdGVkQWN0aXZlSW5kZXgoY3VycmVudEluZGV4LCBrZXlDb2RlLCBpdGVtcykge1xuICB2YXIgbmV3SW5kZXggPSBjdXJyZW50SW5kZXg7IC8vIEluY3JlbWVudCBvciBkZWNyZW1lbnQgaW5kZXggYmFzZWQgb24gdXNlciBrZXlzdHJva2UuXG5cbiAgbmV3SW5kZXggKz0ga2V5Q29kZSA9PT0gVVAgPyAtMSA6IDE7IC8vIFNraXAgb3ZlciBhbnkgZGlzYWJsZWQgb3B0aW9ucy5cblxuICBuZXdJbmRleCA9IHNraXBEaXNhYmxlZE9wdGlvbnMobmV3SW5kZXgsIGtleUNvZGUsIGl0ZW1zKTsgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgZW5kLCBnbyBiYWNrIHRvIHRoZSBiZWdpbm5pbmcgb3IgdmljZS12ZXJzYS5cblxuICBpZiAobmV3SW5kZXggPT09IGl0ZW1zLmxlbmd0aCkge1xuICAgIG5ld0luZGV4ID0gLTE7XG4gIH0gZWxzZSBpZiAobmV3SW5kZXggPT09IC0yKSB7XG4gICAgbmV3SW5kZXggPSBpdGVtcy5sZW5ndGggLSAxOyAvLyBTa2lwIG92ZXIgYW55IGRpc2FibGVkIG9wdGlvbnMuXG5cbiAgICBuZXdJbmRleCA9IHNraXBEaXNhYmxlZE9wdGlvbnMobmV3SW5kZXgsIGtleUNvZGUsIGl0ZW1zKTtcbiAgfVxuXG4gIHJldHVybiBuZXdJbmRleDtcbn0iLCJpbXBvcnQgX2FkZEN1c3RvbU9wdGlvbiBmcm9tICcuL2FkZEN1c3RvbU9wdGlvbic7XG5leHBvcnQgeyBfYWRkQ3VzdG9tT3B0aW9uIGFzIGFkZEN1c3RvbU9wdGlvbiB9O1xuaW1wb3J0IF9kZWZhdWx0RmlsdGVyQnkgZnJvbSAnLi9kZWZhdWx0RmlsdGVyQnknO1xuZXhwb3J0IHsgX2RlZmF1bHRGaWx0ZXJCeSBhcyBkZWZhdWx0RmlsdGVyQnkgfTtcbmltcG9ydCBfZ2V0RGlzcGxheU5hbWUgZnJvbSAnLi9nZXREaXNwbGF5TmFtZSc7XG5leHBvcnQgeyBfZ2V0RGlzcGxheU5hbWUgYXMgZ2V0RGlzcGxheU5hbWUgfTtcbmltcG9ydCBfZ2V0SGludFRleHQgZnJvbSAnLi9nZXRIaW50VGV4dCc7XG5leHBvcnQgeyBfZ2V0SGludFRleHQgYXMgZ2V0SGludFRleHQgfTtcbmltcG9ydCBfZ2V0SW5wdXRQcm9wcyBmcm9tICcuL2dldElucHV0UHJvcHMnO1xuZXhwb3J0IHsgX2dldElucHV0UHJvcHMgYXMgZ2V0SW5wdXRQcm9wcyB9O1xuaW1wb3J0IF9nZXRJbnB1dFRleHQgZnJvbSAnLi9nZXRJbnB1dFRleHQnO1xuZXhwb3J0IHsgX2dldElucHV0VGV4dCBhcyBnZXRJbnB1dFRleHQgfTtcbmltcG9ydCBfZ2V0SXNPbmx5UmVzdWx0IGZyb20gJy4vZ2V0SXNPbmx5UmVzdWx0JztcbmV4cG9ydCB7IF9nZXRJc09ubHlSZXN1bHQgYXMgZ2V0SXNPbmx5UmVzdWx0IH07XG5pbXBvcnQgX2dldE1hdGNoQm91bmRzIGZyb20gJy4vZ2V0TWF0Y2hCb3VuZHMnO1xuZXhwb3J0IHsgX2dldE1hdGNoQm91bmRzIGFzIGdldE1hdGNoQm91bmRzIH07XG5leHBvcnQgeyBlc2NhcGVTdHJpbmdSZWdleHAgfSBmcm9tICcuL2dldE1hdGNoQm91bmRzJztcbmltcG9ydCBfZ2V0TWVudUl0ZW1JZCBmcm9tICcuL2dldE1lbnVJdGVtSWQnO1xuZXhwb3J0IHsgX2dldE1lbnVJdGVtSWQgYXMgZ2V0TWVudUl0ZW1JZCB9O1xuaW1wb3J0IF9nZXRPcHRpb25MYWJlbCBmcm9tICcuL2dldE9wdGlvbkxhYmVsJztcbmV4cG9ydCB7IF9nZXRPcHRpb25MYWJlbCBhcyBnZXRPcHRpb25MYWJlbCB9O1xuaW1wb3J0IF9nZXRPcHRpb25Qcm9wZXJ0eSBmcm9tICcuL2dldE9wdGlvblByb3BlcnR5JztcbmV4cG9ydCB7IF9nZXRPcHRpb25Qcm9wZXJ0eSBhcyBnZXRPcHRpb25Qcm9wZXJ0eSB9O1xuaW1wb3J0IF9nZXRTdHJpbmdMYWJlbEtleSBmcm9tICcuL2dldFN0cmluZ0xhYmVsS2V5JztcbmV4cG9ydCB7IF9nZXRTdHJpbmdMYWJlbEtleSBhcyBnZXRTdHJpbmdMYWJlbEtleSB9O1xuaW1wb3J0IF9nZXRUcnVuY2F0ZWRPcHRpb25zIGZyb20gJy4vZ2V0VHJ1bmNhdGVkT3B0aW9ucyc7XG5leHBvcnQgeyBfZ2V0VHJ1bmNhdGVkT3B0aW9ucyBhcyBnZXRUcnVuY2F0ZWRPcHRpb25zIH07XG5pbXBvcnQgX2dldFVwZGF0ZWRBY3RpdmVJbmRleCBmcm9tICcuL2dldFVwZGF0ZWRBY3RpdmVJbmRleCc7XG5leHBvcnQgeyBfZ2V0VXBkYXRlZEFjdGl2ZUluZGV4IGFzIGdldFVwZGF0ZWRBY3RpdmVJbmRleCB9O1xuaW1wb3J0IF9pc1NlbGVjdGFibGUgZnJvbSAnLi9pc1NlbGVjdGFibGUnO1xuZXhwb3J0IHsgX2lzU2VsZWN0YWJsZSBhcyBpc1NlbGVjdGFibGUgfTtcbmltcG9ydCBfaXNTaG93biBmcm9tICcuL2lzU2hvd24nO1xuZXhwb3J0IHsgX2lzU2hvd24gYXMgaXNTaG93biB9O1xuZXhwb3J0ICogZnJvbSAnLi9ub2Rhc2gnO1xuaW1wb3J0IF9wcmV2ZW50SW5wdXRCbHVyIGZyb20gJy4vcHJldmVudElucHV0Qmx1cic7XG5leHBvcnQgeyBfcHJldmVudElucHV0Qmx1ciBhcyBwcmV2ZW50SW5wdXRCbHVyIH07XG5leHBvcnQgKiBmcm9tICcuL3NpemUnO1xuaW1wb3J0IF9zdHJpcERpYWNyaXRpY3MgZnJvbSAnLi9zdHJpcERpYWNyaXRpY3MnO1xuZXhwb3J0IHsgX3N0cmlwRGlhY3JpdGljcyBhcyBzdHJpcERpYWNyaXRpY3MgfTtcbmltcG9ydCBfdmFsaWRhdGVTZWxlY3RlZFByb3BDaGFuZ2UgZnJvbSAnLi92YWxpZGF0ZVNlbGVjdGVkUHJvcENoYW5nZSc7XG5leHBvcnQgeyBfdmFsaWRhdGVTZWxlY3RlZFByb3BDaGFuZ2UgYXMgdmFsaWRhdGVTZWxlY3RlZFByb3BDaGFuZ2UgfTtcbmltcG9ydCBfd2FybiBmcm9tICcuL3dhcm4nO1xuZXhwb3J0IHsgX3dhcm4gYXMgd2FybiB9OyIsIi8qKlxuICogQ2hlY2sgaWYgYW4gaW5wdXQgdHlwZSBpcyBzZWxlY3RhYmxlLCBiYXNlZCBvbiBXSEFUV0cgc3BlYy5cbiAqXG4gKiBTZWU6XG4gKiAgLSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMTE3NzQ4OS9zZWxlY3Rpb25zdGFydC1zZWxlY3Rpb25lbmQtb24taW5wdXQtdHlwZS1udW1iZXItbm8tbG9uZ2VyLWFsbG93ZWQtaW4tY2hyb21lLzI0MTc1MzU3XG4gKiAgLSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnB1dC5odG1sI2RvLW5vdC1hcHBseVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NlbGVjdGFibGUoaW5wdXROb2RlKSB7XG4gIHJldHVybiBpbnB1dE5vZGUuc2VsZWN0aW9uU3RhcnQgIT0gbnVsbDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Nob3duKHByb3BzKSB7XG4gIHZhciBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIG1pbkxlbmd0aCA9IHByb3BzLm1pbkxlbmd0aCxcbiAgICAgIHNob3dNZW51ID0gcHJvcHMuc2hvd01lbnUsXG4gICAgICB0ZXh0ID0gcHJvcHMudGV4dDsgLy8gSWYgbWVudSB2aXNpYmlsaXR5IGlzIGNvbnRyb2xsZWQgdmlhIHByb3BzLCB0aGF0IHZhbHVlIHRha2VzIHByZWNlZGVuY2UuXG5cbiAgaWYgKG9wZW4gfHwgb3BlbiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3BlbjtcbiAgfVxuXG4gIGlmICh0ZXh0Lmxlbmd0aCA8IG1pbkxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBzaG93TWVudTtcbn0iLCJ2YXIgaWRDb3VudGVyID0gMDtcbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpICYmIGFyci5sZW5ndGggPyBhcnJbMF0gOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuZXhwb3J0IGZ1bmN0aW9uIHBpY2sob2JqLCBrZXlzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspKSB7XG4gICAgICByZXN1bHRba10gPSBvYmpba107XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVJZChwcmVmaXgpIHtcbiAgaWRDb3VudGVyICs9IDE7XG4gIHJldHVybiAocHJlZml4ID09IG51bGwgPyAnJyA6IFN0cmluZyhwcmVmaXgpKSArIGlkQ291bnRlcjtcbn0gLy8gRXhwb3J0IGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVzUG9seWZpbGwob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZShmdW5jdGlvbiAoYWNjdW0sIGtleSkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICBhY2N1bS5wdXNoKG9ialtrZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjdW07XG4gIH0sIFtdKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZXMob2JqKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKE9iamVjdC52YWx1ZXMpID8gT2JqZWN0LnZhbHVlcyhvYmopIDogdmFsdWVzUG9seWZpbGwob2JqKTtcbn0iLCIvKipcbiAqIFByZXZlbnQgdGhlIG1haW4gaW5wdXQgZnJvbSBibHVycmluZyB3aGVuIGEgbWVudSBpdGVtIG9yIHRoZSBjbGVhciBidXR0b24gaXNcbiAqIGNsaWNrZWQuICgjMjI2ICYgIzMxMClcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJldmVudElucHV0Qmx1cihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gaXNTaXplTGFyZ2Uoc2l6ZSkge1xuICByZXR1cm4gc2l6ZSA9PT0gJ2xhcmdlJyB8fCBzaXplID09PSAnbGcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU2l6ZVNtYWxsKHNpemUpIHtcbiAgcmV0dXJuIHNpemUgPT09ICdzbWFsbCcgfHwgc2l6ZSA9PT0gJ3NtJztcbn0iLCIvKipcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIFRha2VuIGZyb206IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTkwOTA0L3JlbW92ZS1hY2NlbnRzLWRpYWNyaXRpY3MtaW4tYS1zdHJpbmctaW4tamF2YXNjcmlwdC8xODM5MTkwMSMxODM5MTkwMVxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbnZhciBtYXAgPSBbe1xuICBiYXNlOiAnQScsXG4gIGxldHRlcnM6IFwiQVxcdTI0QjZcXHVGRjIxXFx4QzBcXHhDMVxceEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxceEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHhDNFxcdTAxREVcXHUxRUEyXFx4QzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2RlwiXG59LCB7XG4gIGJhc2U6ICdBQScsXG4gIGxldHRlcnM6IFwiXFx1QTczMlwiXG59LCB7XG4gIGJhc2U6ICdBRScsXG4gIGxldHRlcnM6IFwiXFx4QzZcXHUwMUZDXFx1MDFFMlwiXG59LCB7XG4gIGJhc2U6ICdBTycsXG4gIGxldHRlcnM6IFwiXFx1QTczNFwiXG59LCB7XG4gIGJhc2U6ICdBVScsXG4gIGxldHRlcnM6IFwiXFx1QTczNlwiXG59LCB7XG4gIGJhc2U6ICdBVicsXG4gIGxldHRlcnM6IFwiXFx1QTczOFxcdUE3M0FcIlxufSwge1xuICBiYXNlOiAnQVknLFxuICBsZXR0ZXJzOiBcIlxcdUE3M0NcIlxufSwge1xuICBiYXNlOiAnQicsXG4gIGxldHRlcnM6IFwiQlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXCJcbn0sIHtcbiAgYmFzZTogJ0MnLFxuICBsZXR0ZXJzOiBcIkNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHhDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VcIlxufSwge1xuICBiYXNlOiAnRCcsXG4gIGxldHRlcnM6IFwiRFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzlcXHhEMFwiXG59LCB7XG4gIGJhc2U6ICdEWicsXG4gIGxldHRlcnM6IFwiXFx1MDFGMVxcdTAxQzRcIlxufSwge1xuICBiYXNlOiAnRHonLFxuICBsZXR0ZXJzOiBcIlxcdTAxRjJcXHUwMUM1XCJcbn0sIHtcbiAgYmFzZTogJ0UnLFxuICBsZXR0ZXJzOiBcIkVcXHUyNEJBXFx1RkYyNVxceEM4XFx4QzlcXHhDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHhDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVcIlxufSwge1xuICBiYXNlOiAnRicsXG4gIGxldHRlcnM6IFwiRlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXCJcbn0sIHtcbiAgYmFzZTogJ0cnLFxuICBsZXR0ZXJzOiBcIkdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RVwiXG59LCB7XG4gIGJhc2U6ICdIJyxcbiAgbGV0dGVyczogXCJIXFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RFwiXG59LCB7XG4gIGJhc2U6ICdJJyxcbiAgbGV0dGVyczogXCJJXFx1MjRCRVxcdUZGMjlcXHhDQ1xceENEXFx4Q0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx4Q0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTdcIlxufSwge1xuICBiYXNlOiAnSicsXG4gIGxldHRlcnM6IFwiSlxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhcIlxufSwge1xuICBiYXNlOiAnSycsXG4gIGxldHRlcnM6IFwiS1xcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJcIlxufSwge1xuICBiYXNlOiAnTCcsXG4gIGxldHRlcnM6IFwiTFxcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXCJcbn0sIHtcbiAgYmFzZTogJ0xKJyxcbiAgbGV0dGVyczogXCJcXHUwMUM3XCJcbn0sIHtcbiAgYmFzZTogJ0xqJyxcbiAgbGV0dGVyczogXCJcXHUwMUM4XCJcbn0sIHtcbiAgYmFzZTogJ00nLFxuICBsZXR0ZXJzOiBcIk1cXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXCJcbn0sIHtcbiAgYmFzZTogJ04nLFxuICBsZXR0ZXJzOiBcIk5cXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx4RDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XCJcbn0sIHtcbiAgYmFzZTogJ05KJyxcbiAgbGV0dGVyczogXCJcXHUwMUNBXCJcbn0sIHtcbiAgYmFzZTogJ05qJyxcbiAgbGV0dGVyczogXCJcXHUwMUNCXCJcbn0sIHtcbiAgYmFzZTogJ08nLFxuICBsZXR0ZXJzOiBcIk9cXHUyNEM0XFx1RkYyRlxceEQyXFx4RDNcXHhENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHhENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxceEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xceEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENcIlxufSwge1xuICBiYXNlOiAnT0knLFxuICBsZXR0ZXJzOiBcIlxcdTAxQTJcIlxufSwge1xuICBiYXNlOiAnT08nLFxuICBsZXR0ZXJzOiBcIlxcdUE3NEVcIlxufSwge1xuICBiYXNlOiAnT1UnLFxuICBsZXR0ZXJzOiBcIlxcdTAyMjJcIlxufSwge1xuICBiYXNlOiAnT0UnLFxuICBsZXR0ZXJzOiBcIlxceDhDXFx1MDE1MlwiXG59LCB7XG4gIGJhc2U6ICdvZScsXG4gIGxldHRlcnM6IFwiXFx4OUNcXHUwMTUzXCJcbn0sIHtcbiAgYmFzZTogJ1AnLFxuICBsZXR0ZXJzOiBcIlBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRcIlxufSwge1xuICBiYXNlOiAnUScsXG4gIGxldHRlcnM6IFwiUVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXCJcbn0sIHtcbiAgYmFzZTogJ1InLFxuICBsZXR0ZXJzOiBcIlJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXCJcbn0sIHtcbiAgYmFzZTogJ1MnLFxuICBsZXR0ZXJzOiBcIlNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XCJcbn0sIHtcbiAgYmFzZTogJ1QnLFxuICBsZXR0ZXJzOiBcIlRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4NlwiXG59LCB7XG4gIGJhc2U6ICdUWicsXG4gIGxldHRlcnM6IFwiXFx1QTcyOFwiXG59LCB7XG4gIGJhc2U6ICdVJyxcbiAgbGV0dGVyczogXCJVXFx1MjRDQVxcdUZGMzVcXHhEOVxceERBXFx4REJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xceERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NFwiXG59LCB7XG4gIGJhc2U6ICdWJyxcbiAgbGV0dGVyczogXCJWXFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NVwiXG59LCB7XG4gIGJhc2U6ICdWWScsXG4gIGxldHRlcnM6IFwiXFx1QTc2MFwiXG59LCB7XG4gIGJhc2U6ICdXJyxcbiAgbGV0dGVyczogXCJXXFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXCJcbn0sIHtcbiAgYmFzZTogJ1gnLFxuICBsZXR0ZXJzOiBcIlhcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXCJcbn0sIHtcbiAgYmFzZTogJ1knLFxuICBsZXR0ZXJzOiBcIllcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHhERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVcIlxufSwge1xuICBiYXNlOiAnWicsXG4gIGxldHRlcnM6IFwiWlxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJcIlxufSwge1xuICBiYXNlOiAnYScsXG4gIGxldHRlcnM6IFwiYVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxceEUwXFx4RTFcXHhFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHhFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx4RTRcXHUwMURGXFx1MUVBM1xceEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBcIlxufSwge1xuICBiYXNlOiAnYWEnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzNcIlxufSwge1xuICBiYXNlOiAnYWUnLFxuICBsZXR0ZXJzOiBcIlxceEU2XFx1MDFGRFxcdTAxRTNcIlxufSwge1xuICBiYXNlOiAnYW8nLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzVcIlxufSwge1xuICBiYXNlOiAnYXUnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzdcIlxufSwge1xuICBiYXNlOiAnYXYnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzlcXHVBNzNCXCJcbn0sIHtcbiAgYmFzZTogJ2F5JyxcbiAgbGV0dGVyczogXCJcXHVBNzNEXCJcbn0sIHtcbiAgYmFzZTogJ2InLFxuICBsZXR0ZXJzOiBcImJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M1wiXG59LCB7XG4gIGJhc2U6ICdjJyxcbiAgbGV0dGVyczogXCJjXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx4RTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NFwiXG59LCB7XG4gIGJhc2U6ICdkJyxcbiAgbGV0dGVyczogXCJkXFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QVwiXG59LCB7XG4gIGJhc2U6ICdkeicsXG4gIGxldHRlcnM6IFwiXFx1MDFGM1xcdTAxQzZcIlxufSwge1xuICBiYXNlOiAnZScsXG4gIGxldHRlcnM6IFwiZVxcdTI0RDRcXHVGRjQ1XFx4RThcXHhFOVxceEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xceEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERcIlxufSwge1xuICBiYXNlOiAnZicsXG4gIGxldHRlcnM6IFwiZlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXCJcbn0sIHtcbiAgYmFzZTogJ2cnLFxuICBsZXR0ZXJzOiBcImdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3RlwiXG59LCB7XG4gIGJhc2U6ICdoJyxcbiAgbGV0dGVyczogXCJoXFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVcIlxufSwge1xuICBiYXNlOiAnaHYnLFxuICBsZXR0ZXJzOiBcIlxcdTAxOTVcIlxufSwge1xuICBiYXNlOiAnaScsXG4gIGxldHRlcnM6IFwiaVxcdTI0RDhcXHVGRjQ5XFx4RUNcXHhFRFxceEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx4RUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXCJcbn0sIHtcbiAgYmFzZTogJ2onLFxuICBsZXR0ZXJzOiBcImpcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OVwiXG59LCB7XG4gIGJhc2U6ICdrJyxcbiAgbGV0dGVyczogXCJrXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM1wiXG59LCB7XG4gIGJhc2U6ICdsJyxcbiAgbGV0dGVyczogXCJsXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XCJcbn0sIHtcbiAgYmFzZTogJ2xqJyxcbiAgbGV0dGVyczogXCJcXHUwMUM5XCJcbn0sIHtcbiAgYmFzZTogJ20nLFxuICBsZXR0ZXJzOiBcIm1cXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXCJcbn0sIHtcbiAgYmFzZTogJ24nLFxuICBsZXR0ZXJzOiBcIm5cXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx4RjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNVwiXG59LCB7XG4gIGJhc2U6ICduaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDQ1wiXG59LCB7XG4gIGJhc2U6ICdvJyxcbiAgbGV0dGVyczogXCJvXFx1MjRERVxcdUZGNEZcXHhGMlxceEYzXFx4RjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx4RjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHhGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHhGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XCJcbn0sIHtcbiAgYmFzZTogJ29pJyxcbiAgbGV0dGVyczogXCJcXHUwMUEzXCJcbn0sIHtcbiAgYmFzZTogJ291JyxcbiAgbGV0dGVyczogXCJcXHUwMjIzXCJcbn0sIHtcbiAgYmFzZTogJ29vJyxcbiAgbGV0dGVyczogXCJcXHVBNzRGXCJcbn0sIHtcbiAgYmFzZTogJ3AnLFxuICBsZXR0ZXJzOiBcInBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVcIlxufSwge1xuICBiYXNlOiAncScsXG4gIGxldHRlcnM6IFwicVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XCJcbn0sIHtcbiAgYmFzZTogJ3InLFxuICBsZXR0ZXJzOiBcInJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXCJcbn0sIHtcbiAgYmFzZTogJ3MnLFxuICBsZXR0ZXJzOiBcInNcXHUyNEUyXFx1RkY1M1xceERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJcIlxufSwge1xuICBiYXNlOiAndCcsXG4gIGxldHRlcnM6IFwidFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N1wiXG59LCB7XG4gIGJhc2U6ICd0eicsXG4gIGxldHRlcnM6IFwiXFx1QTcyOVwiXG59LCB7XG4gIGJhc2U6ICd1JyxcbiAgbGV0dGVyczogXCJ1XFx1MjRFNFxcdUZGNTVcXHhGOVxceEZBXFx4RkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxceEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OVwiXG59LCB7XG4gIGJhc2U6ICd2JyxcbiAgbGV0dGVyczogXCJ2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q1wiXG59LCB7XG4gIGJhc2U6ICd2eScsXG4gIGxldHRlcnM6IFwiXFx1QTc2MVwiXG59LCB7XG4gIGJhc2U6ICd3JyxcbiAgbGV0dGVyczogXCJ3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M1wiXG59LCB7XG4gIGJhc2U6ICd4JyxcbiAgbGV0dGVyczogXCJ4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RFwiXG59LCB7XG4gIGJhc2U6ICd5JyxcbiAgbGV0dGVyczogXCJ5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx4RkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx4RkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZcIlxufSwge1xuICBiYXNlOiAneicsXG4gIGxldHRlcnM6IFwielxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNcIlxufV07XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxudmFyIGRpYWNyaXRpY3NNYXAgPSB7fTtcblxuZm9yICh2YXIgaWkgPSAwOyBpaSA8IG1hcC5sZW5ndGg7IGlpKyspIHtcbiAgdmFyIGxldHRlcnMgPSBtYXBbaWldLmxldHRlcnM7XG5cbiAgZm9yICh2YXIgamogPSAwOyBqaiA8IGxldHRlcnMubGVuZ3RoOyBqaisrKSB7XG4gICAgZGlhY3JpdGljc01hcFtsZXR0ZXJzW2pqXV0gPSBtYXBbaWldLmJhc2U7XG4gIH1cbn0gLy8gXCJ3aGF0P1wiIHZlcnNpb24gLi4uIGh0dHA6Ly9qc3BlcmYuY29tL2RpYWNyaXRpY3MvMTJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3Moc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Rl0vZywgJycpIC8vIFJlbW92ZSBjb21iaW5pbmcgZGlhY3JpdGljc1xuXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4ICovXG4gIC5yZXBsYWNlKC9bXlxcdTAwMDAtXFx1MDA3RV0vZywgZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gZGlhY3JpdGljc01hcFthXSB8fCBhO1xuICB9KTtcbn0iLCJpbXBvcnQgd2FybiBmcm9tICcuL3dhcm4nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVTZWxlY3RlZFByb3BDaGFuZ2UocHJldlNlbGVjdGVkLCBzZWxlY3RlZCkge1xuICB2YXIgdW5jb250cm9sbGVkVG9Db250cm9sbGVkID0gIXByZXZTZWxlY3RlZCAmJiBzZWxlY3RlZDtcbiAgdmFyIGNvbnRyb2xsZWRUb1VuY29udHJvbGxlZCA9IHByZXZTZWxlY3RlZCAmJiAhc2VsZWN0ZWQ7XG4gIHZhciBmcm9tLCB0bywgcHJlY2VkZW50O1xuXG4gIGlmICh1bmNvbnRyb2xsZWRUb0NvbnRyb2xsZWQpIHtcbiAgICBmcm9tID0gJ3VuY29udHJvbGxlZCc7XG4gICAgdG8gPSAnY29udHJvbGxlZCc7XG4gICAgcHJlY2VkZW50ID0gJ2FuJztcbiAgfSBlbHNlIHtcbiAgICBmcm9tID0gJ2NvbnRyb2xsZWQnO1xuICAgIHRvID0gJ3VuY29udHJvbGxlZCc7XG4gICAgcHJlY2VkZW50ID0gJ2EnO1xuICB9XG5cbiAgdmFyIG1lc3NhZ2UgPSBcIllvdSBhcmUgY2hhbmdpbmcgXCIgKyBwcmVjZWRlbnQgKyBcIiBcIiArIGZyb20gKyBcIiB0eXBlYWhlYWQgdG8gYmUgXCIgKyB0byArIFwiLiBcIiArIChcIklucHV0IGVsZW1lbnRzIHNob3VsZCBub3Qgc3dpdGNoIGZyb20gXCIgKyBmcm9tICsgXCIgdG8gXCIgKyB0byArIFwiIChvciB2aWNlIHZlcnNhKS4gXCIpICsgJ0RlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgZWxlbWVudCBmb3IgdGhlICcgKyAnbGlmZXRpbWUgb2YgdGhlIGNvbXBvbmVudC4nO1xuICB3YXJuKCEodW5jb250cm9sbGVkVG9Db250cm9sbGVkIHx8IGNvbnRyb2xsZWRUb1VuY29udHJvbGxlZCksIG1lc3NhZ2UpO1xufSIsImltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xudmFyIHdhcm5lZCA9IHt9O1xuLyoqXG4gKiBDb3BpZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0VHJhaW5pbmcvcmVhY3Qtcm91dGVyL2Jsb2IvbWFzdGVyL21vZHVsZXMvcm91dGVyV2FybmluZy5qc1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm4oZmFsc2VUb1dhcm4sIG1lc3NhZ2UpIHtcbiAgLy8gT25seSBpc3N1ZSBkZXByZWNhdGlvbiB3YXJuaW5ncyBvbmNlLlxuICBpZiAoIWZhbHNlVG9XYXJuICYmIG1lc3NhZ2UuaW5kZXhPZignZGVwcmVjYXRlZCcpICE9PSAtMSkge1xuICAgIGlmICh3YXJuZWRbbWVzc2FnZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRbbWVzc2FnZV0gPSB0cnVlO1xuICB9XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgd2FybmluZy5hcHBseSh2b2lkIDAsIFtmYWxzZVRvV2FybiwgXCJbcmVhY3QtYm9vdHN0cmFwLXR5cGVhaGVhZF0gXCIgKyBtZXNzYWdlXS5jb25jYXQoYXJncykpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0V2FybmVkKCkge1xuICB3YXJuZWQgPSB7fTtcbn0iLCJpbXBvcnQgY29udGFpbnMgZnJvbSAnZG9tLWhlbHBlcnMvY29udGFpbnMnO1xuaW1wb3J0IGxpc3RlbiBmcm9tICdkb20taGVscGVycy9saXN0ZW4nO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG52YXIgZXNjYXBlS2V5Q29kZSA9IDI3O1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuLyoqXG4gKiBUaGUgYHVzZVJvb3RDbG9zZWAgaG9vayByZWdpc3RlcnMgeW91ciBjYWxsYmFjayBvbiB0aGUgZG9jdW1lbnRcbiAqIHdoZW4gcmVuZGVyZWQuIFBvd2VycyB0aGUgYDxPdmVybGF5Lz5gIGNvbXBvbmVudC4gVGhpcyBpcyB1c2VkIGFjaGlldmUgbW9kYWxcbiAqIHN0eWxlIGJlaGF2aW9yIHdoZXJlIHlvdXIgY2FsbGJhY2sgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgdHJpZXMgdG9cbiAqIGludGVyYWN0IHdpdGggdGhlIHJlc3Qgb2YgdGhlIGRvY3VtZW50IG9yIGhpdHMgdGhlIGBlc2NgIGtleS5cbiAqXG4gKiBAcGFyYW0ge1JlZjxIVE1MRWxlbWVudD58SFRNTEVsZW1lbnR9IHJlZiAgVGhlIGVsZW1lbnQgYm91bmRhcnlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uUm9vdENsb3NlXG4gKiBAcGFyYW0ge29iamVjdH0gIG9wdGlvbnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5kaXNhYmxlZFxuICogQHBhcmFtIHtzdHJpbmd9ICBvcHRpb25zLmNsaWNrVHJpZ2dlciBUaGUgRE9NIGV2ZW50IG5hbWUgKGNsaWNrLCBtb3VzZWRvd24sIGV0YykgdG8gYXR0YWNoIGxpc3RlbmVycyBvblxuICovXG5cblxuZnVuY3Rpb24gdXNlUm9vdENsb3NlKHJlZiwgb25Sb290Q2xvc2UsIF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBfcmVmJGNsaWNrVHJpZ2dlciA9IF9yZWYuY2xpY2tUcmlnZ2VyLFxuICAgICAgY2xpY2tUcmlnZ2VyID0gX3JlZiRjbGlja1RyaWdnZXIgPT09IHZvaWQgMCA/ICdjbGljaycgOiBfcmVmJGNsaWNrVHJpZ2dlcjtcblxuICB2YXIgcHJldmVudE1vdXNlUm9vdENsb3NlUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIG9uQ2xvc2UgPSBvblJvb3RDbG9zZSB8fCBub29wO1xuICB2YXIgaGFuZGxlTW91c2VDYXB0dXJlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgY3VycmVudFRhcmdldCA9IHJlZiAmJiAoJ2N1cnJlbnQnIGluIHJlZiA/IHJlZi5jdXJyZW50IDogcmVmKTtcbiAgICB3YXJuaW5nKCEhY3VycmVudFRhcmdldCwgJ1Jvb3RDbG9zZSBjYXB0dXJlZCBhIGNsb3NlIGV2ZW50IGJ1dCBkb2VzIG5vdCBoYXZlIGEgcmVmIHRvIGNvbXBhcmUgaXQgdG8uICcgKyAndXNlUm9vdENsb3NlKCksIHNob3VsZCBiZSBwYXNzZWQgYSByZWYgdGhhdCByZXNvbHZlcyB0byBhIERPTSBub2RlJyk7XG4gICAgcHJldmVudE1vdXNlUm9vdENsb3NlUmVmLmN1cnJlbnQgPSAhY3VycmVudFRhcmdldCB8fCBpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZSkgfHwgY29udGFpbnMoY3VycmVudFRhcmdldCwgZS50YXJnZXQpO1xuICB9LCBbcmVmXSk7XG4gIHZhciBoYW5kbGVNb3VzZSA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIXByZXZlbnRNb3VzZVJvb3RDbG9zZVJlZi5jdXJyZW50KSB7XG4gICAgICBvbkNsb3NlKGUpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBoYW5kbGVLZXlVcCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBlc2NhcGVLZXlDb2RlKSB7XG4gICAgICBvbkNsb3NlKGUpO1xuICAgIH1cbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRpc2FibGVkIHx8IHJlZiA9PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBkb2MgPSBvd25lckRvY3VtZW50KHJlZi5jdXJyZW50KTsgLy8gVXNlIGNhcHR1cmUgZm9yIHRoaXMgbGlzdGVuZXIgc28gaXQgZmlyZXMgYmVmb3JlIFJlYWN0J3MgbGlzdGVuZXIsIHRvXG4gICAgLy8gYXZvaWQgZmFsc2UgcG9zaXRpdmVzIGluIHRoZSBjb250YWlucygpIGNoZWNrIGJlbG93IGlmIHRoZSB0YXJnZXQgRE9NXG4gICAgLy8gZWxlbWVudCBpcyByZW1vdmVkIGluIHRoZSBSZWFjdCBtb3VzZSBjYWxsYmFjay5cblxuICAgIHZhciByZW1vdmVNb3VzZUNhcHR1cmVMaXN0ZW5lciA9IGxpc3Rlbihkb2MsIGNsaWNrVHJpZ2dlciwgaGFuZGxlTW91c2VDYXB0dXJlLCB0cnVlKTtcbiAgICB2YXIgcmVtb3ZlTW91c2VMaXN0ZW5lciA9IGxpc3Rlbihkb2MsIGNsaWNrVHJpZ2dlciwgaGFuZGxlTW91c2UpO1xuICAgIHZhciByZW1vdmVLZXl1cExpc3RlbmVyID0gbGlzdGVuKGRvYywgJ2tleXVwJywgaGFuZGxlS2V5VXApO1xuICAgIHZhciBtb2JpbGVTYWZhcmlIYWNrTGlzdGVuZXJzID0gW107XG5cbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jLmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgbW9iaWxlU2FmYXJpSGFja0xpc3RlbmVycyA9IFtdLnNsaWNlLmNhbGwoZG9jLmJvZHkuY2hpbGRyZW4pLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbihlbCwgJ21vdXNlbW92ZScsIG5vb3ApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZU1vdXNlQ2FwdHVyZUxpc3RlbmVyKCk7XG4gICAgICByZW1vdmVNb3VzZUxpc3RlbmVyKCk7XG4gICAgICByZW1vdmVLZXl1cExpc3RlbmVyKCk7XG4gICAgICBtb2JpbGVTYWZhcmlIYWNrTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbcmVmLCBkaXNhYmxlZCwgY2xpY2tUcmlnZ2VyLCBoYW5kbGVNb3VzZUNhcHR1cmUsIGhhbmRsZU1vdXNlLCBoYW5kbGVLZXlVcF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSb290Q2xvc2U7IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICdkb20taGVscGVycy9vd25lckRvY3VtZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb21wb25lbnRPckVsZW1lbnQpIHtcbiAgcmV0dXJuIG93bmVyRG9jdW1lbnQoUmVhY3RET00uZmluZERPTU5vZGUoY29tcG9uZW50T3JFbGVtZW50KSk7XG59IiwiaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUNvbnRleHQgZnJvbSAnY3JlYXRlLXJlYWN0LWNvbnRleHQnO1xuZXhwb3J0IHZhciBNYW5hZ2VyUmVmZXJlbmNlTm9kZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgdmFyIE1hbmFnZXJSZWZlcmVuY2VOb2RlU2V0dGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxudmFyIE1hbmFnZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWFuYWdlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTWFuYWdlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZWZlcmVuY2VOb2RlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0UmVmZXJlbmNlTm9kZVwiLCBmdW5jdGlvbiAobmV3UmVmZXJlbmNlTm9kZSkge1xuICAgICAgaWYgKG5ld1JlZmVyZW5jZU5vZGUgJiYgX3RoaXMucmVmZXJlbmNlTm9kZSAhPT0gbmV3UmVmZXJlbmNlTm9kZSkge1xuICAgICAgICBfdGhpcy5yZWZlcmVuY2VOb2RlID0gbmV3UmVmZXJlbmNlTm9kZTtcblxuICAgICAgICBfdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVmZXJlbmNlTm9kZSA9IG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChNYW5hZ2VyUmVmZXJlbmNlTm9kZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnJlZmVyZW5jZU5vZGVcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KE1hbmFnZXJSZWZlcmVuY2VOb2RlU2V0dGVyQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMuc2V0UmVmZXJlbmNlTm9kZVxuICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgfTtcblxuICByZXR1cm4gTWFuYWdlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgTWFuYWdlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgZGVlcEVxdWFsIGZyb20gXCJkZWVwLWVxdWFsXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUG9wcGVySlMgZnJvbSAncG9wcGVyLmpzJztcbmltcG9ydCB7IE1hbmFnZXJSZWZlcmVuY2VOb2RlQ29udGV4dCB9IGZyb20gJy4vTWFuYWdlcic7XG5pbXBvcnQgeyB1bndyYXBBcnJheSwgc2V0UmVmLCBzaGFsbG93RXF1YWwgfSBmcm9tICcuL3V0aWxzJztcbnZhciBpbml0aWFsU3R5bGUgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIG9wYWNpdHk6IDAsXG4gIHBvaW50ZXJFdmVudHM6ICdub25lJ1xufTtcbnZhciBpbml0aWFsQXJyb3dTdHlsZSA9IHt9O1xuZXhwb3J0IHZhciBJbm5lclBvcHBlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShJbm5lclBvcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5uZXJQb3BwZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwge1xuICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgcGxhY2VtZW50OiB1bmRlZmluZWRcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwb3BwZXJJbnN0YW5jZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInBvcHBlck5vZGVcIiwgbnVsbCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYXJyb3dOb2RlXCIsIG51bGwpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldFBvcHBlck5vZGVcIiwgZnVuY3Rpb24gKHBvcHBlck5vZGUpIHtcbiAgICAgIGlmICghcG9wcGVyTm9kZSB8fCBfdGhpcy5wb3BwZXJOb2RlID09PSBwb3BwZXJOb2RlKSByZXR1cm47XG4gICAgICBzZXRSZWYoX3RoaXMucHJvcHMuaW5uZXJSZWYsIHBvcHBlck5vZGUpO1xuICAgICAgX3RoaXMucG9wcGVyTm9kZSA9IHBvcHBlck5vZGU7XG5cbiAgICAgIF90aGlzLnVwZGF0ZVBvcHBlckluc3RhbmNlKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0QXJyb3dOb2RlXCIsIGZ1bmN0aW9uIChhcnJvd05vZGUpIHtcbiAgICAgIF90aGlzLmFycm93Tm9kZSA9IGFycm93Tm9kZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ1cGRhdGVTdGF0ZU1vZGlmaWVyXCIsIHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBvcmRlcjogOTAwLFxuICAgICAgZm46IGZ1bmN0aW9uIGZuKGRhdGEpIHtcbiAgICAgICAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldE9wdGlvbnNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGxhY2VtZW50OiBfdGhpcy5wcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgIGV2ZW50c0VuYWJsZWQ6IF90aGlzLnByb3BzLmV2ZW50c0VuYWJsZWQsXG4gICAgICAgIHBvc2l0aW9uRml4ZWQ6IF90aGlzLnByb3BzLnBvc2l0aW9uRml4ZWQsXG4gICAgICAgIG1vZGlmaWVyczogX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLm1vZGlmaWVycywge1xuICAgICAgICAgIGFycm93OiBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMubW9kaWZpZXJzICYmIF90aGlzLnByb3BzLm1vZGlmaWVycy5hcnJvdywge1xuICAgICAgICAgICAgZW5hYmxlZDogISFfdGhpcy5hcnJvd05vZGUsXG4gICAgICAgICAgICBlbGVtZW50OiBfdGhpcy5hcnJvd05vZGVcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhcHBseVN0eWxlOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlU3RhdGVNb2RpZmllcjogX3RoaXMudXBkYXRlU3RhdGVNb2RpZmllclxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZXRQb3BwZXJTdHlsZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIV90aGlzLnBvcHBlck5vZGUgfHwgIV90aGlzLnN0YXRlLmRhdGEgPyBpbml0aWFsU3R5bGUgOiBfZXh0ZW5kcyh7XG4gICAgICAgIHBvc2l0aW9uOiBfdGhpcy5zdGF0ZS5kYXRhLm9mZnNldHMucG9wcGVyLnBvc2l0aW9uXG4gICAgICB9LCBfdGhpcy5zdGF0ZS5kYXRhLnN0eWxlcyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0UG9wcGVyUGxhY2VtZW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhX3RoaXMuc3RhdGUuZGF0YSA/IHVuZGVmaW5lZCA6IF90aGlzLnN0YXRlLnBsYWNlbWVudDtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZXRBcnJvd1N0eWxlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhX3RoaXMuYXJyb3dOb2RlIHx8ICFfdGhpcy5zdGF0ZS5kYXRhID8gaW5pdGlhbEFycm93U3R5bGUgOiBfdGhpcy5zdGF0ZS5kYXRhLmFycm93U3R5bGVzO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldE91dE9mQm91bmRhcmllc1N0YXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5kYXRhID8gX3RoaXMuc3RhdGUuZGF0YS5oaWRlIDogdW5kZWZpbmVkO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRlc3Ryb3lQb3BwZXJJbnN0YW5jZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnBvcHBlckluc3RhbmNlKSByZXR1cm47XG5cbiAgICAgIF90aGlzLnBvcHBlckluc3RhbmNlLmRlc3Ryb3koKTtcblxuICAgICAgX3RoaXMucG9wcGVySW5zdGFuY2UgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVwZGF0ZVBvcHBlckluc3RhbmNlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksXG4gICAgICAgICAgcG9wcGVyTm9kZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5wb3BwZXJOb2RlO1xuXG4gICAgICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IF90aGlzLnByb3BzLnJlZmVyZW5jZUVsZW1lbnQ7XG4gICAgICBpZiAoIXJlZmVyZW5jZUVsZW1lbnQgfHwgIXBvcHBlck5vZGUpIHJldHVybjtcbiAgICAgIF90aGlzLnBvcHBlckluc3RhbmNlID0gbmV3IFBvcHBlckpTKHJlZmVyZW5jZUVsZW1lbnQsIHBvcHBlck5vZGUsIF90aGlzLmdldE9wdGlvbnMoKSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2NoZWR1bGVVcGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICAgIF90aGlzLnBvcHBlckluc3RhbmNlLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5uZXJQb3BwZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAvLyBJZiB0aGUgUG9wcGVyLmpzIG9wdGlvbnMgaGF2ZSBjaGFuZ2VkLCB1cGRhdGUgdGhlIGluc3RhbmNlIChkZXN0cm95ICsgY3JlYXRlKVxuICAgIGlmICh0aGlzLnByb3BzLnBsYWNlbWVudCAhPT0gcHJldlByb3BzLnBsYWNlbWVudCB8fCB0aGlzLnByb3BzLnJlZmVyZW5jZUVsZW1lbnQgIT09IHByZXZQcm9wcy5yZWZlcmVuY2VFbGVtZW50IHx8IHRoaXMucHJvcHMucG9zaXRpb25GaXhlZCAhPT0gcHJldlByb3BzLnBvc2l0aW9uRml4ZWQgfHwgIWRlZXBFcXVhbCh0aGlzLnByb3BzLm1vZGlmaWVycywgcHJldlByb3BzLm1vZGlmaWVycywge1xuICAgICAgc3RyaWN0OiB0cnVlXG4gICAgfSkpIHtcbiAgICAgIC8vIGRldmVsb3Agb25seSBjaGVjayB0aGF0IG1vZGlmaWVycyBpc24ndCBiZWluZyB1cGRhdGVkIG5lZWRsZXNzbHlcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGlmaWVycyAhPT0gcHJldlByb3BzLm1vZGlmaWVycyAmJiB0aGlzLnByb3BzLm1vZGlmaWVycyAhPSBudWxsICYmIHByZXZQcm9wcy5tb2RpZmllcnMgIT0gbnVsbCAmJiBzaGFsbG93RXF1YWwodGhpcy5wcm9wcy5tb2RpZmllcnMsIHByZXZQcm9wcy5tb2RpZmllcnMpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiJ21vZGlmaWVycycgcHJvcCByZWZlcmVuY2UgdXBkYXRlZCBldmVuIHRob3VnaCBhbGwgdmFsdWVzIGFwcGVhciB0aGUgc2FtZS5cXG5Db25zaWRlciBtZW1vaXppbmcgdGhlICdtb2RpZmllcnMnIG9iamVjdCB0byBhdm9pZCBuZWVkbGVzcyByZW5kZXJpbmcuXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlUG9wcGVySW5zdGFuY2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZXZlbnRzRW5hYmxlZCAhPT0gcHJldlByb3BzLmV2ZW50c0VuYWJsZWQgJiYgdGhpcy5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgdGhpcy5wcm9wcy5ldmVudHNFbmFibGVkID8gdGhpcy5wb3BwZXJJbnN0YW5jZS5lbmFibGVFdmVudExpc3RlbmVycygpIDogdGhpcy5wb3BwZXJJbnN0YW5jZS5kaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9IC8vIEEgcGxhY2VtZW50IGRpZmZlcmVuY2UgaW4gc3RhdGUgbWVhbnMgcG9wcGVyIGRldGVybWluZWQgYSBuZXcgcGxhY2VtZW50XG4gICAgLy8gYXBhcnQgZnJvbSB0aGUgcHJvcHMgdmFsdWUuIEJ5IHRoZSB0aW1lIHRoZSBwb3BwZXIgZWxlbWVudCBpcyByZW5kZXJlZCB3aXRoXG4gICAgLy8gdGhlIG5ldyBwb3NpdGlvbiBQb3BwZXIgaGFzIGFscmVhZHkgbWVhc3VyZWQgaXQsIGlmIHRoZSBwbGFjZSBjaGFuZ2UgdHJpZ2dlcnNcbiAgICAvLyBhIHNpemUgY2hhbmdlIGl0IHdpbGwgcmVzdWx0IGluIGEgbWlzYWxpZ25lZCBwb3BwZXIuIFNvIHdlIHNjaGVkdWxlIGFuIHVwZGF0ZSB0byBiZSBzdXJlLlxuXG5cbiAgICBpZiAocHJldlN0YXRlLnBsYWNlbWVudCAhPT0gdGhpcy5zdGF0ZS5wbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgc2V0UmVmKHRoaXMucHJvcHMuaW5uZXJSZWYsIG51bGwpO1xuICAgIHRoaXMuZGVzdHJveVBvcHBlckluc3RhbmNlKCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdW53cmFwQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikoe1xuICAgICAgcmVmOiB0aGlzLnNldFBvcHBlck5vZGUsXG4gICAgICBzdHlsZTogdGhpcy5nZXRQb3BwZXJTdHlsZSgpLFxuICAgICAgcGxhY2VtZW50OiB0aGlzLmdldFBvcHBlclBsYWNlbWVudCgpLFxuICAgICAgb3V0T2ZCb3VuZGFyaWVzOiB0aGlzLmdldE91dE9mQm91bmRhcmllc1N0YXRlKCksXG4gICAgICBzY2hlZHVsZVVwZGF0ZTogdGhpcy5zY2hlZHVsZVVwZGF0ZSxcbiAgICAgIGFycm93UHJvcHM6IHtcbiAgICAgICAgcmVmOiB0aGlzLnNldEFycm93Tm9kZSxcbiAgICAgICAgc3R5bGU6IHRoaXMuZ2V0QXJyb3dTdHlsZSgpXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIElubmVyUG9wcGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoSW5uZXJQb3BwZXIsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgZXZlbnRzRW5hYmxlZDogdHJ1ZSxcbiAgcmVmZXJlbmNlRWxlbWVudDogdW5kZWZpbmVkLFxuICBwb3NpdGlvbkZpeGVkOiBmYWxzZVxufSk7XG5cbnZhciBwbGFjZW1lbnRzID0gUG9wcGVySlMucGxhY2VtZW50cztcbmV4cG9ydCB7IHBsYWNlbWVudHMgfTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcHBlcihfcmVmKSB7XG4gIHZhciByZWZlcmVuY2VFbGVtZW50ID0gX3JlZi5yZWZlcmVuY2VFbGVtZW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJyZWZlcmVuY2VFbGVtZW50XCJdKTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChNYW5hZ2VyUmVmZXJlbmNlTm9kZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChyZWZlcmVuY2VOb2RlKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5uZXJQb3BwZXIsIF9leHRlbmRzKHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQ6IHJlZmVyZW5jZUVsZW1lbnQgIT09IHVuZGVmaW5lZCA/IHJlZmVyZW5jZUVsZW1lbnQgOiByZWZlcmVuY2VOb2RlXG4gICAgfSwgcHJvcHMpKTtcbiAgfSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuaW1wb3J0IHsgTWFuYWdlclJlZmVyZW5jZU5vZGVTZXR0ZXJDb250ZXh0IH0gZnJvbSAnLi9NYW5hZ2VyJztcbmltcG9ydCB7IHNhZmVJbnZva2UsIHVud3JhcEFycmF5LCBzZXRSZWYgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIElubmVyUmVmZXJlbmNlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKElubmVyUmVmZXJlbmNlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbm5lclJlZmVyZW5jZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZWZIYW5kbGVyXCIsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBzZXRSZWYoX3RoaXMucHJvcHMuaW5uZXJSZWYsIG5vZGUpO1xuICAgICAgc2FmZUludm9rZShfdGhpcy5wcm9wcy5zZXRSZWZlcmVuY2VOb2RlLCBub2RlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbm5lclJlZmVyZW5jZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgc2V0UmVmKHRoaXMucHJvcHMuaW5uZXJSZWYsIG51bGwpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgd2FybmluZyhCb29sZWFuKHRoaXMucHJvcHMuc2V0UmVmZXJlbmNlTm9kZSksICdgUmVmZXJlbmNlYCBzaG91bGQgbm90IGJlIHVzZWQgb3V0c2lkZSBvZiBhIGBNYW5hZ2VyYCBjb21wb25lbnQuJyk7XG4gICAgcmV0dXJuIHVud3JhcEFycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pKHtcbiAgICAgIHJlZjogdGhpcy5yZWZIYW5kbGVyXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIElubmVyUmVmZXJlbmNlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWZlcmVuY2UocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFuYWdlclJlZmVyZW5jZU5vZGVTZXR0ZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoc2V0UmVmZXJlbmNlTm9kZSkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KElubmVyUmVmZXJlbmNlLCBfZXh0ZW5kcyh7XG4gICAgICBzZXRSZWZlcmVuY2VOb2RlOiBzZXRSZWZlcmVuY2VOb2RlXG4gICAgfSwgcHJvcHMpKTtcbiAgfSk7XG59IiwiLy8gUHVibGljIGNvbXBvbmVudHNcbmltcG9ydCBQb3BwZXIsIHsgcGxhY2VtZW50cyB9IGZyb20gJy4vUG9wcGVyJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vTWFuYWdlcic7XG5pbXBvcnQgUmVmZXJlbmNlIGZyb20gJy4vUmVmZXJlbmNlJztcbmV4cG9ydCB7IFBvcHBlciwgcGxhY2VtZW50cywgTWFuYWdlciwgUmVmZXJlbmNlIH07IC8vIFB1YmxpYyB0eXBlcyIsIi8qKlxuICogVGFrZXMgYW4gYXJndW1lbnQgYW5kIGlmIGl0J3MgYW4gYXJyYXksIHJldHVybnMgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGFycmF5LFxuICogb3RoZXJ3aXNlIHJldHVybnMgdGhlIGFyZ3VtZW50LiBVc2VkIGZvciBQcmVhY3QgY29tcGF0aWJpbGl0eS5cbiAqL1xuZXhwb3J0IHZhciB1bndyYXBBcnJheSA9IGZ1bmN0aW9uIHVud3JhcEFycmF5KGFyZykge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpID8gYXJnWzBdIDogYXJnO1xufTtcbi8qKlxuICogVGFrZXMgYSBtYXliZS11bmRlZmluZWQgZnVuY3Rpb24gYW5kIGFyYml0cmFyeSBhcmdzIGFuZCBpbnZva2VzIHRoZSBmdW5jdGlvblxuICogb25seSBpZiBpdCBpcyBkZWZpbmVkLlxuICovXG5cbmV4cG9ydCB2YXIgc2FmZUludm9rZSA9IGZ1bmN0aW9uIHNhZmVJbnZva2UoZm4pIHtcbiAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gIH1cbn07XG4vKipcbiAqIERvZXMgYSBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIG9mIHR3byBvYmplY3RzIGJ5IGNvbXBhcmluZyB0aGUgcmVmZXJlbmNlXG4gKiBlcXVhbGl0eSBvZiBlYWNoIHZhbHVlLlxuICovXG5cbmV4cG9ydCB2YXIgc2hhbGxvd0VxdWFsID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChiS2V5cy5sZW5ndGggIT09IGFLZXlzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gYUtleXNbaV07XG5cbiAgICBpZiAob2JqQVtrZXldICE9PSBvYmpCW2tleV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4vKipcbiAqIFNldHMgYSByZWYgdXNpbmcgZWl0aGVyIGEgcmVmIGNhbGxiYWNrIG9yIGEgcmVmIG9iamVjdFxuICovXG5cbmV4cG9ydCB2YXIgc2V0UmVmID0gZnVuY3Rpb24gc2V0UmVmKHJlZiwgbm9kZSkge1xuICAvLyBpZiBpdHMgYSBmdW5jdGlvbiBjYWxsIGl0XG4gIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gc2FmZUludm9rZShyZWYsIG5vZGUpO1xuICB9IC8vIG90aGVyd2lzZSB3ZSBzaG91bGQgdHJlYXQgaXQgYXMgYSByZWYgb2JqZWN0XG4gIGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XG4gICAgICByZWYuY3VycmVudCA9IG5vZGU7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmxhZ3MoKSB7XG5cdGlmICh0aGlzICE9IG51bGwgJiYgdGhpcyAhPT0gJE9iamVjdCh0aGlzKSkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdSZWdFeHAucHJvdG90eXBlLmZsYWdzIGdldHRlciBjYWxsZWQgb24gbm9uLW9iamVjdCcpO1xuXHR9XG5cdHZhciByZXN1bHQgPSAnJztcblx0aWYgKHRoaXMuZ2xvYmFsKSB7XG5cdFx0cmVzdWx0ICs9ICdnJztcblx0fVxuXHRpZiAodGhpcy5pZ25vcmVDYXNlKSB7XG5cdFx0cmVzdWx0ICs9ICdpJztcblx0fVxuXHRpZiAodGhpcy5tdWx0aWxpbmUpIHtcblx0XHRyZXN1bHQgKz0gJ20nO1xuXHR9XG5cdGlmICh0aGlzLmRvdEFsbCkge1xuXHRcdHJlc3VsdCArPSAncyc7XG5cdH1cblx0aWYgKHRoaXMudW5pY29kZSkge1xuXHRcdHJlc3VsdCArPSAndSc7XG5cdH1cblx0aWYgKHRoaXMuc3RpY2t5KSB7XG5cdFx0cmVzdWx0ICs9ICd5Jztcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9oZWxwZXJzL2NhbGxCaW5kJyk7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcbnZhciBnZXRQb2x5ZmlsbCA9IHJlcXVpcmUoJy4vcG9seWZpbGwnKTtcbnZhciBzaGltID0gcmVxdWlyZSgnLi9zaGltJyk7XG5cbnZhciBmbGFnc0JvdW5kID0gY2FsbEJpbmQoaW1wbGVtZW50YXRpb24pO1xuXG5kZWZpbmUoZmxhZ3NCb3VuZCwge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhZ3NCb3VuZDtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsc1xuXHRBdG9taWNzLFxuXHRTaGFyZWRBcnJheUJ1ZmZlcixcbiovXG5cbnZhciB1bmRlZmluZWQ7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgJGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuaWYgKCRnT1BEKSB7XG5cdHRyeSB7XG5cdFx0JGdPUEQoe30sICcnKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdCRnT1BEID0gbnVsbDsgLy8gdGhpcyBpcyBJRSA4LCB3aGljaCBoYXMgYSBicm9rZW4gZ09QRFxuXHR9XG59XG5cbnZhciB0aHJvd1R5cGVFcnJvciA9IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3ICRUeXBlRXJyb3IoKTsgfTtcbnZhciBUaHJvd1R5cGVFcnJvciA9ICRnT1BEXG5cdD8gKGZ1bmN0aW9uICgpIHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9ucywgbm8tY2FsbGVyLCBuby1yZXN0cmljdGVkLXByb3BlcnRpZXNcblx0XHRcdGFyZ3VtZW50cy5jYWxsZWU7IC8vIElFIDggZG9lcyBub3QgdGhyb3cgaGVyZVxuXHRcdFx0cmV0dXJuIHRocm93VHlwZUVycm9yO1xuXHRcdH0gY2F0Y2ggKGNhbGxlZVRocm93cykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gSUUgOCB0aHJvd3Mgb24gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhcmd1bWVudHMsICcnKVxuXHRcdFx0XHRyZXR1cm4gJGdPUEQoYXJndW1lbnRzLCAnY2FsbGVlJykuZ2V0O1xuXHRcdFx0fSBjYXRjaCAoZ09QRHRocm93cykge1xuXHRcdFx0XHRyZXR1cm4gdGhyb3dUeXBlRXJyb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KCkpXG5cdDogdGhyb3dUeXBlRXJyb3I7XG5cbnZhciBoYXNTeW1ib2xzID0gcmVxdWlyZSgnaGFzLXN5bWJvbHMnKSgpO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguX19wcm90b19fOyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cbnZhciBnZW5lcmF0b3I7IC8vID0gZnVuY3Rpb24gKiAoKSB7fTtcbnZhciBnZW5lcmF0b3JGdW5jdGlvbiA9IGdlbmVyYXRvciA/IGdldFByb3RvKGdlbmVyYXRvcikgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNGbjsgLy8gYXN5bmMgZnVuY3Rpb24oKSB7fTtcbnZhciBhc3luY0Z1bmN0aW9uID0gYXN5bmNGbiA/IGFzeW5jRm4uY29uc3RydWN0b3IgOiB1bmRlZmluZWQ7XG52YXIgYXN5bmNHZW47IC8vIGFzeW5jIGZ1bmN0aW9uICogKCkge307XG52YXIgYXN5bmNHZW5GdW5jdGlvbiA9IGFzeW5jR2VuID8gZ2V0UHJvdG8oYXN5bmNHZW4pIDogdW5kZWZpbmVkO1xudmFyIGFzeW5jR2VuSXRlcmF0b3IgPSBhc3luY0dlbiA/IGFzeW5jR2VuKCkgOiB1bmRlZmluZWQ7XG5cbnZhciBUeXBlZEFycmF5ID0gdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8oVWludDhBcnJheSk7XG5cbnZhciBJTlRSSU5TSUNTID0ge1xuXHQnJUFycmF5JSc6IEFycmF5LFxuXHQnJUFycmF5QnVmZmVyJSc6IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBcnJheUJ1ZmZlcixcblx0JyVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXJyYXlCdWZmZXIucHJvdG90eXBlLFxuXHQnJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCclQXJyYXlQcm90b3R5cGUlJzogQXJyYXkucHJvdG90eXBlLFxuXHQnJUFycmF5UHJvdG9fZW50cmllcyUnOiBBcnJheS5wcm90b3R5cGUuZW50cmllcyxcblx0JyVBcnJheVByb3RvX2ZvckVhY2glJzogQXJyYXkucHJvdG90eXBlLmZvckVhY2gsXG5cdCclQXJyYXlQcm90b19rZXlzJSc6IEFycmF5LnByb3RvdHlwZS5rZXlzLFxuXHQnJUFycmF5UHJvdG9fdmFsdWVzJSc6IEFycmF5LnByb3RvdHlwZS52YWx1ZXMsXG5cdCclQXN5bmNGcm9tU3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Z1bmN0aW9uJSc6IGFzeW5jRnVuY3Rpb24sXG5cdCclQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBhc3luY0Z1bmN0aW9uID8gYXN5bmNGdW5jdGlvbi5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogYXN5bmNHZW4gPyBnZXRQcm90byhhc3luY0dlbkl0ZXJhdG9yKSA6IHVuZGVmaW5lZCxcblx0JyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJSc6IGFzeW5jR2VuRnVuY3Rpb24sXG5cdCclQXN5bmNHZW5lcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5GdW5jdGlvbiA/IGFzeW5jR2VuRnVuY3Rpb24ucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuXHQnJUFzeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogYXN5bmNHZW5JdGVyYXRvciAmJiBoYXNTeW1ib2xzICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yID8gYXN5bmNHZW5JdGVyYXRvcltTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSA6IHVuZGVmaW5lZCxcblx0JyVBdG9taWNzJSc6IHR5cGVvZiBBdG9taWNzID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEF0b21pY3MsXG5cdCclQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJUJvb2xlYW5Qcm90b3R5cGUlJzogQm9vbGVhbi5wcm90b3R5cGUsXG5cdCclRGF0YVZpZXclJzogdHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IERhdGFWaWV3LFxuXHQnJURhdGFWaWV3UHJvdG90eXBlJSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldy5wcm90b3R5cGUsXG5cdCclRGF0ZSUnOiBEYXRlLFxuXHQnJURhdGVQcm90b3R5cGUlJzogRGF0ZS5wcm90b3R5cGUsXG5cdCclZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyVkZWNvZGVVUklDb21wb25lbnQlJzogZGVjb2RlVVJJQ29tcG9uZW50LFxuXHQnJWVuY29kZVVSSSUnOiBlbmNvZGVVUkksXG5cdCclZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyVFcnJvciUnOiBFcnJvcixcblx0JyVFcnJvclByb3RvdHlwZSUnOiBFcnJvci5wcm90b3R5cGUsXG5cdCclZXZhbCUnOiBldmFsLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV2YWxcblx0JyVFdmFsRXJyb3IlJzogRXZhbEVycm9yLFxuXHQnJUV2YWxFcnJvclByb3RvdHlwZSUnOiBFdmFsRXJyb3IucHJvdG90eXBlLFxuXHQnJUZsb2F0MzJBcnJheSUnOiB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0MzJBcnJheSxcblx0JyVGbG9hdDMyQXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDMyQXJyYXkucHJvdG90eXBlLFxuXHQnJUZsb2F0NjRBcnJheSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheSxcblx0JyVGbG9hdDY0QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIEZsb2F0NjRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDY0QXJyYXkucHJvdG90eXBlLFxuXHQnJUZ1bmN0aW9uJSc6IEZ1bmN0aW9uLFxuXHQnJUZ1bmN0aW9uUHJvdG90eXBlJSc6IEZ1bmN0aW9uLnByb3RvdHlwZSxcblx0JyVHZW5lcmF0b3IlJzogZ2VuZXJhdG9yID8gZ2V0UHJvdG8oZ2VuZXJhdG9yKCkpIDogdW5kZWZpbmVkLFxuXHQnJUdlbmVyYXRvckZ1bmN0aW9uJSc6IGdlbmVyYXRvckZ1bmN0aW9uLFxuXHQnJUdlbmVyYXRvclByb3RvdHlwZSUnOiBnZW5lcmF0b3JGdW5jdGlvbiA/IGdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCclSW50OEFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBJbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50OEFycmF5LnByb3RvdHlwZSxcblx0JyVJbnQxNkFycmF5JSc6IHR5cGVvZiBJbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDE2QXJyYXksXG5cdCclSW50MTZBcnJheVByb3RvdHlwZSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXkucHJvdG90eXBlLFxuXHQnJUludDMyQXJyYXklJzogdHlwZW9mIEludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MzJBcnJheSxcblx0JyVJbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBJbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDMyQXJyYXkucHJvdG90eXBlLFxuXHQnJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJWlzTmFOJSc6IGlzTmFOLFxuXHQnJUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSA6IHVuZGVmaW5lZCxcblx0JyVKU09OJSc6IHR5cGVvZiBKU09OID09PSAnb2JqZWN0JyA/IEpTT04gOiB1bmRlZmluZWQsXG5cdCclSlNPTlBhcnNlJSc6IHR5cGVvZiBKU09OID09PSAnb2JqZWN0JyA/IEpTT04ucGFyc2UgOiB1bmRlZmluZWQsXG5cdCclTWFwJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTWFwLFxuXHQnJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclTWFwUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTWFwLnByb3RvdHlwZSxcblx0JyVNYXRoJSc6IE1hdGgsXG5cdCclTnVtYmVyJSc6IE51bWJlcixcblx0JyVOdW1iZXJQcm90b3R5cGUlJzogTnVtYmVyLnByb3RvdHlwZSxcblx0JyVPYmplY3QlJzogT2JqZWN0LFxuXHQnJU9iamVjdFByb3RvdHlwZSUnOiBPYmplY3QucHJvdG90eXBlLFxuXHQnJU9ialByb3RvX3RvU3RyaW5nJSc6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG5cdCclT2JqUHJvdG9fdmFsdWVPZiUnOiBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YsXG5cdCclcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJXBhcnNlSW50JSc6IHBhcnNlSW50LFxuXHQnJVByb21pc2UlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZSxcblx0JyVQcm9taXNlUHJvdG90eXBlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucHJvdG90eXBlLFxuXHQnJVByb21pc2VQcm90b190aGVuJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucHJvdG90eXBlLnRoZW4sXG5cdCclUHJvbWlzZV9hbGwlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5hbGwsXG5cdCclUHJvbWlzZV9yZWplY3QlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZS5yZWplY3QsXG5cdCclUHJvbWlzZV9yZXNvbHZlJSc6IHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFByb21pc2UucmVzb2x2ZSxcblx0JyVQcm94eSUnOiB0eXBlb2YgUHJveHkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJveHksXG5cdCclUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJVJhbmdlRXJyb3JQcm90b3R5cGUlJzogUmFuZ2VFcnJvci5wcm90b3R5cGUsXG5cdCclUmVmZXJlbmNlRXJyb3IlJzogUmVmZXJlbmNlRXJyb3IsXG5cdCclUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogUmVmZXJlbmNlRXJyb3IucHJvdG90eXBlLFxuXHQnJVJlZmxlY3QlJzogdHlwZW9mIFJlZmxlY3QgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUmVmbGVjdCxcblx0JyVSZWdFeHAlJzogUmVnRXhwLFxuXHQnJVJlZ0V4cFByb3RvdHlwZSUnOiBSZWdFeHAucHJvdG90eXBlLFxuXHQnJVNldCUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldCxcblx0JyVTZXRJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBTZXQoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJVNldFByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldC5wcm90b3R5cGUsXG5cdCclU2hhcmVkQXJyYXlCdWZmZXIlJzogdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNoYXJlZEFycmF5QnVmZmVyLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTaGFyZWRBcnJheUJ1ZmZlci5wcm90b3R5cGUsXG5cdCclU3RyaW5nJSc6IFN0cmluZyxcblx0JyVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oJydbU3ltYm9sLml0ZXJhdG9yXSgpKSA6IHVuZGVmaW5lZCxcblx0JyVTdHJpbmdQcm90b3R5cGUlJzogU3RyaW5nLnByb3RvdHlwZSxcblx0JyVTeW1ib2wlJzogaGFzU3ltYm9scyA/IFN5bWJvbCA6IHVuZGVmaW5lZCxcblx0JyVTeW1ib2xQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG5cdCclU3ludGF4RXJyb3IlJzogU3ludGF4RXJyb3IsXG5cdCclU3ludGF4RXJyb3JQcm90b3R5cGUlJzogU3ludGF4RXJyb3IucHJvdG90eXBlLFxuXHQnJVRocm93VHlwZUVycm9yJSc6IFRocm93VHlwZUVycm9yLFxuXHQnJVR5cGVkQXJyYXklJzogVHlwZWRBcnJheSxcblx0JyVUeXBlZEFycmF5UHJvdG90eXBlJSc6IFR5cGVkQXJyYXkgPyBUeXBlZEFycmF5LnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcblx0JyVUeXBlRXJyb3IlJzogJFR5cGVFcnJvcixcblx0JyVUeXBlRXJyb3JQcm90b3R5cGUlJzogJFR5cGVFcnJvci5wcm90b3R5cGUsXG5cdCclVWludDhBcnJheSUnOiB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OEFycmF5LFxuXHQnJVVpbnQ4QXJyYXlQcm90b3R5cGUlJzogdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDhBcnJheS5wcm90b3R5cGUsXG5cdCclVWludDhDbGFtcGVkQXJyYXklJzogdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHQnJVVpbnQ4Q2xhbXBlZEFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OENsYW1wZWRBcnJheS5wcm90b3R5cGUsXG5cdCclVWludDE2QXJyYXklJzogdHlwZW9mIFVpbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQxNkFycmF5LFxuXHQnJVVpbnQxNkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MTZBcnJheS5wcm90b3R5cGUsXG5cdCclVWludDMyQXJyYXklJzogdHlwZW9mIFVpbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQzMkFycmF5LFxuXHQnJVVpbnQzMkFycmF5UHJvdG90eXBlJSc6IHR5cGVvZiBVaW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MzJBcnJheS5wcm90b3R5cGUsXG5cdCclVVJJRXJyb3IlJzogVVJJRXJyb3IsXG5cdCclVVJJRXJyb3JQcm90b3R5cGUlJzogVVJJRXJyb3IucHJvdG90eXBlLFxuXHQnJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyVXZWFrTWFwUHJvdG90eXBlJSc6IHR5cGVvZiBXZWFrTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtNYXAucHJvdG90eXBlLFxuXHQnJVdlYWtTZXQlJzogdHlwZW9mIFdlYWtTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1NldCxcblx0JyVXZWFrU2V0UHJvdG90eXBlJSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXQucHJvdG90eXBlXG59O1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciAkcmVwbGFjZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xuXG4vKiBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi80LjE3LjE1L2Rpc3QvbG9kYXNoLmpzI0w2NzM1LUw2NzQ0ICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXiUuW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JSQpKS9nO1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nOyAvKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBmdW5jdGlvbiBzdHJpbmdUb1BhdGgoc3RyaW5nKSB7XG5cdHZhciByZXN1bHQgPSBbXTtcblx0JHJlcGxhY2Uoc3RyaW5nLCByZVByb3BOYW1lLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuXHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHF1b3RlID8gJHJlcGxhY2Uoc3ViU3RyaW5nLCByZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCk7XG5cdH0pO1xuXHRyZXR1cm4gcmVzdWx0O1xufTtcbi8qIGVuZCBhZGFwdGF0aW9uICovXG5cbnZhciBnZXRCYXNlSW50cmluc2ljID0gZnVuY3Rpb24gZ2V0QmFzZUludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKCEobmFtZSBpbiBJTlRSSU5TSUNTKSkge1xuXHRcdHRocm93IG5ldyBTeW50YXhFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBkb2VzIG5vdCBleGlzdCEnKTtcblx0fVxuXG5cdC8vIGlzdGFuYnVsIGlnbm9yZSBpZiAvLyBob3BlZnVsbHkgdGhpcyBpcyBpbXBvc3NpYmxlIHRvIHRlc3QgOi0pXG5cdGlmICh0eXBlb2YgSU5UUklOU0lDU1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgJiYgIWFsbG93TWlzc2luZykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIScpO1xuXHR9XG5cblx0cmV0dXJuIElOVFJJTlNJQ1NbbmFtZV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEdldEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludHJpbnNpYyBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG5cdH1cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhbGxvd01pc3NpbmcgIT09ICdib29sZWFuJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYWxsb3dNaXNzaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdHZhciBwYXJ0cyA9IHN0cmluZ1RvUGF0aChuYW1lKTtcblxuXHR2YXIgdmFsdWUgPSBnZXRCYXNlSW50cmluc2ljKCclJyArIChwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiAnJykgKyAnJScsIGFsbG93TWlzc2luZyk7XG5cdGZvciAodmFyIGkgPSAxOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRpZiAodmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0aWYgKCRnT1BEICYmIChpICsgMSkgPj0gcGFydHMubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBkZXNjID0gJGdPUEQodmFsdWUsIHBhcnRzW2ldKTtcblx0XHRcdFx0aWYgKCFhbGxvd01pc3NpbmcgJiYgIShwYXJ0c1tpXSBpbiB2YWx1ZSkpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYmFzZSBpbnRyaW5zaWMgZm9yICcgKyBuYW1lICsgJyBleGlzdHMsIGJ1dCB0aGUgcHJvcGVydHkgaXMgbm90IGF2YWlsYWJsZS4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBCeSBjb252ZW50aW9uLCB3aGVuIGEgZGF0YSBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdG8gYW4gYWNjZXNzb3Jcblx0XHRcdFx0Ly8gcHJvcGVydHkgdG8gZW11bGF0ZSBhIGRhdGEgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBzdWZmZXIgZnJvbVxuXHRcdFx0XHQvLyB0aGUgb3ZlcnJpZGUgbWlzdGFrZSwgdGhhdCBhY2Nlc3NvcidzIGdldHRlciBpcyBtYXJrZWQgd2l0aFxuXHRcdFx0XHQvLyBhbiBgb3JpZ2luYWxWYWx1ZWAgcHJvcGVydHkuIEhlcmUsIHdoZW4gd2UgZGV0ZWN0IHRoaXMsIHdlXG5cdFx0XHRcdC8vIHVwaG9sZCB0aGUgaWxsdXNpb24gYnkgcHJldGVuZGluZyB0byBzZWUgdGhhdCBvcmlnaW5hbCBkYXRhXG5cdFx0XHRcdC8vIHByb3BlcnR5LCBpLmUuLCByZXR1cm5pbmcgdGhlIHZhbHVlIHJhdGhlciB0aGFuIHRoZSBnZXR0ZXJcblx0XHRcdFx0Ly8gaXRzZWxmLlxuXHRcdFx0XHR2YWx1ZSA9IGRlc2MgJiYgJ2dldCcgaW4gZGVzYyAmJiAhKCdvcmlnaW5hbFZhbHVlJyBpbiBkZXNjLmdldCkgPyBkZXNjLmdldCA6IHZhbHVlW3BhcnRzW2ldXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydHNbaV1dO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJy4uL0dldEludHJpbnNpYycpO1xuXG52YXIgJGFwcGx5ID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5JScpO1xudmFyICRjYWxsID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwlJyk7XG52YXIgJHJlZmxlY3RBcHBseSA9IEdldEludHJpbnNpYygnJVJlZmxlY3QuYXBwbHklJywgdHJ1ZSkgfHwgYmluZC5jYWxsKCRjYWxsLCAkYXBwbHkpO1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmRlZmluZVByb3BlcnR5JScsIHRydWUpO1xuXG5pZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdHRyeSB7XG5cdFx0JGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgdmFsdWU6IDEgfSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBkZWZpbmVQcm9wZXJ0eVxuXHRcdCRkZWZpbmVQcm9wZXJ0eSA9IG51bGw7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsQmluZCgpIHtcblx0cmV0dXJuICRyZWZsZWN0QXBwbHkoYmluZCwgJGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuXG52YXIgYXBwbHlCaW5kID0gZnVuY3Rpb24gYXBwbHlCaW5kKCkge1xuXHRyZXR1cm4gJHJlZmxlY3RBcHBseShiaW5kLCAkYXBwbHksIGFyZ3VtZW50cyk7XG59O1xuXG5pZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdCRkZWZpbmVQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgJ2FwcGx5JywgeyB2YWx1ZTogYXBwbHlCaW5kIH0pO1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMuYXBwbHkgPSBhcHBseUJpbmQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpLnN1cHBvcnRzRGVzY3JpcHRvcnM7XG52YXIgJGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdGlmICghc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdSZWdFeHAucHJvdG90eXBlLmZsYWdzIHJlcXVpcmVzIGEgdHJ1ZSBFUzUgZW52aXJvbm1lbnQgdGhhdCBzdXBwb3J0cyBwcm9wZXJ0eSBkZXNjcmlwdG9ycycpO1xuXHR9XG5cdGlmICgoL2EvbWlnKS5mbGFncyA9PT0gJ2dpbScpIHtcblx0XHR2YXIgZGVzY3JpcHRvciA9ICRnT1BEKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycpO1xuXHRcdGlmIChkZXNjcmlwdG9yICYmIHR5cGVvZiBkZXNjcmlwdG9yLmdldCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgKC9hLykuZG90QWxsID09PSAnYm9vbGVhbicpIHtcblx0XHRcdHJldHVybiBkZXNjcmlwdG9yLmdldDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGltcGxlbWVudGF0aW9uO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBvcnRzRGVzY3JpcHRvcnMgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpLnN1cHBvcnRzRGVzY3JpcHRvcnM7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgVHlwZUVyciA9IFR5cGVFcnJvcjtcbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciByZWdleCA9IC9hLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGltRmxhZ3MoKSB7XG5cdGlmICghc3VwcG9ydHNEZXNjcmlwdG9ycyB8fCAhZ2V0UHJvdG8pIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycignUmVnRXhwLnByb3RvdHlwZS5mbGFncyByZXF1aXJlcyBhIHRydWUgRVM1IGVudmlyb25tZW50IHRoYXQgc3VwcG9ydHMgcHJvcGVydHkgZGVzY3JpcHRvcnMnKTtcblx0fVxuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXHR2YXIgcHJvdG8gPSBnZXRQcm90byhyZWdleCk7XG5cdHZhciBkZXNjcmlwdG9yID0gZ09QRChwcm90bywgJ2ZsYWdzJyk7XG5cdGlmICghZGVzY3JpcHRvciB8fCBkZXNjcmlwdG9yLmdldCAhPT0gcG9seWZpbGwpIHtcblx0XHRkZWZpbmVQcm9wZXJ0eShwcm90bywgJ2ZsYWdzJywge1xuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRnZXQ6IHBvbHlmaWxsXG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcbiIsImltcG9ydCBjb21wdXRlIGZyb20gJ2NvbXB1dGUtc2Nyb2xsLWludG8tdmlldyc7XG5cbmZ1bmN0aW9uIGlzT3B0aW9uc09iamVjdChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zID09PSBPYmplY3Qob3B0aW9ucykgJiYgT2JqZWN0LmtleXMob3B0aW9ucykubGVuZ3RoICE9PSAwO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0QmVoYXZpb3IoYWN0aW9ucywgYmVoYXZpb3IpIHtcbiAgaWYgKGJlaGF2aW9yID09PSB2b2lkIDApIHtcbiAgICBiZWhhdmlvciA9ICdhdXRvJztcbiAgfVxuXG4gIHZhciBjYW5TbW9vdGhTY3JvbGwgPSAoJ3Njcm9sbEJlaGF2aW9yJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlKTtcbiAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGVsID0gX3JlZi5lbCxcbiAgICAgICAgdG9wID0gX3JlZi50b3AsXG4gICAgICAgIGxlZnQgPSBfcmVmLmxlZnQ7XG5cbiAgICBpZiAoZWwuc2Nyb2xsICYmIGNhblNtb290aFNjcm9sbCkge1xuICAgICAgZWwuc2Nyb2xsKHtcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIGJlaGF2aW9yOiBiZWhhdmlvclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIGVsLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnMob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmxvY2s6ICdlbmQnLFxuICAgICAgaW5saW5lOiAnbmVhcmVzdCdcbiAgICB9O1xuICB9XG5cbiAgaWYgKGlzT3B0aW9uc09iamVjdChvcHRpb25zKSkge1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBibG9jazogJ3N0YXJ0JyxcbiAgICBpbmxpbmU6ICduZWFyZXN0J1xuICB9O1xufVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVmlldyh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgdmFyIHRhcmdldElzRGV0YWNoZWQgPSAhdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgaWYgKGlzT3B0aW9uc09iamVjdChvcHRpb25zKSAmJiB0eXBlb2Ygb3B0aW9ucy5iZWhhdmlvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBvcHRpb25zLmJlaGF2aW9yKHRhcmdldElzRGV0YWNoZWQgPyBbXSA6IGNvbXB1dGUodGFyZ2V0LCBvcHRpb25zKSk7XG4gIH1cblxuICBpZiAodGFyZ2V0SXNEZXRhY2hlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjb21wdXRlT3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucyk7XG4gIHJldHVybiBkZWZhdWx0QmVoYXZpb3IoY29tcHV0ZSh0YXJnZXQsIGNvbXB1dGVPcHRpb25zKSwgY29tcHV0ZU9wdGlvbnMuYmVoYXZpb3IpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxJbnRvVmlldzsiLCJ2YXIgZ2xvYmFsID1cbiAgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWxUaGlzKSB8fFxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYpIHx8XG4gICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwpXG5cbnZhciBzdXBwb3J0ID0ge1xuICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIGdsb2JhbCxcbiAgaXRlcmFibGU6ICdTeW1ib2wnIGluIGdsb2JhbCAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgYmxvYjpcbiAgICAnRmlsZVJlYWRlcicgaW4gZ2xvYmFsICYmXG4gICAgJ0Jsb2InIGluIGdsb2JhbCAmJlxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gZ2xvYmFsLFxuICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBnbG9iYWxcbn1cblxuZnVuY3Rpb24gaXNEYXRhVmlldyhvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG59XG5cbmlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICBdXG5cbiAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID1cbiAgICBBcnJheUJ1ZmZlci5pc1ZpZXcgfHxcbiAgICBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gIH1cbiAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXl9gfH4hXS9pLnRlc3QobmFtZSkgfHwgbmFtZSA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gIH1cbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgdmFyIGl0ZXJhdG9yID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXRlcmF0b3Jcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICB0aGlzLm1hcCA9IHt9XG5cbiAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgfSwgdGhpcylcbiAgfVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUgKyAnLCAnICsgdmFsdWUgOiB2YWx1ZVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICB9XG4gIH1cbn1cblxuSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICBpdGVtcy5wdXNoKG5hbWUpXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIGl0ZW1zLnB1c2godmFsdWUpXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbn1cblxuZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgfVxuICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgfVxuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgfVxuICByZXR1cm4gY2hhcnMuam9pbignJylcbn1cblxuZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gIGlmIChidWYuc2xpY2UpIHtcbiAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gIH0gZWxzZSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICB9XG59XG5cbmZ1bmN0aW9uIEJvZHkoKSB7XG4gIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgIC8qXG4gICAgICBmZXRjaC1tb2NrIHdyYXBzIHRoZSBSZXNwb25zZSBvYmplY3QgaW4gYW4gRVM2IFByb3h5IHRvXG4gICAgICBwcm92aWRlIHVzZWZ1bCB0ZXN0IGhhcm5lc3MgZmVhdHVyZXMgc3VjaCBhcyBmbHVzaC4gSG93ZXZlciwgb25cbiAgICAgIEVTNSBicm93c2VycyB3aXRob3V0IGZldGNoIG9yIFByb3h5IHN1cHBvcnQgcG9sbHlmaWxscyBtdXN0IGJlIHVzZWQ7XG4gICAgICB0aGUgcHJveHktcG9sbHlmaWxsIGlzIHVuYWJsZSB0byBwcm94eSBhbiBhdHRyaWJ1dGUgdW5sZXNzIGl0IGV4aXN0c1xuICAgICAgb24gdGhlIG9iamVjdCBiZWZvcmUgdGhlIFByb3h5IGlzIGNyZWF0ZWQuIFRoaXMgY2hhbmdlIGVuc3VyZXNcbiAgICAgIFJlc3BvbnNlLmJvZHlVc2VkIGV4aXN0cyBvbiB0aGUgaW5zdGFuY2UsIHdoaWxlIG1haW50YWluaW5nIHRoZVxuICAgICAgc2VtYW50aWMgb2Ygc2V0dGluZyBSZXF1ZXN0LmJvZHlVc2VkIGluIHRoZSBjb25zdHJ1Y3RvciBiZWZvcmVcbiAgICAgIF9pbml0Qm9keSBpcyBjYWxsZWQuXG4gICAgKi9cbiAgICB0aGlzLmJvZHlVc2VkID0gdGhpcy5ib2R5VXNlZFxuICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgIGlmICghYm9keSkge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICB2YXIgaXNDb25zdW1lZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChpc0NvbnN1bWVkKSB7XG4gICAgICAgICAgcmV0dXJuIGlzQ29uc3VtZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ1ZmZlci5zbGljZShcbiAgICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVPZmZzZXQsXG4gICAgICAgICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5ieXRlT2Zmc2V0ICsgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICB9XG4gIH1cblxuICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG52YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG5mdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgcmV0dXJuIG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xID8gdXBjYXNlZCA6IG1ldGhvZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVxdWVzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgdXNlIHRoZSBcIm5ld1wiIG9wZXJhdG9yLCB0aGlzIERPTSBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgfVxuICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgIHRoaXMuc2lnbmFsID0gaW5wdXQuc2lnbmFsXG4gICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gIH1cblxuICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdzYW1lLW9yaWdpbidcbiAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICB9XG4gIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgdGhpcy5zaWduYWwgPSBvcHRpb25zLnNpZ25hbCB8fCB0aGlzLnNpZ25hbFxuICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gIH1cbiAgdGhpcy5faW5pdEJvZHkoYm9keSlcblxuICBpZiAodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpIHtcbiAgICBpZiAob3B0aW9ucy5jYWNoZSA9PT0gJ25vLXN0b3JlJyB8fCBvcHRpb25zLmNhY2hlID09PSAnbm8tY2FjaGUnKSB7XG4gICAgICAvLyBTZWFyY2ggZm9yIGEgJ18nIHBhcmFtZXRlciBpbiB0aGUgcXVlcnkgc3RyaW5nXG4gICAgICB2YXIgcmVQYXJhbVNlYXJjaCA9IC8oWz8mXSlfPVteJl0qL1xuICAgICAgaWYgKHJlUGFyYW1TZWFyY2gudGVzdCh0aGlzLnVybCkpIHtcbiAgICAgICAgLy8gSWYgaXQgYWxyZWFkeSBleGlzdHMgdGhlbiBzZXQgdGhlIHZhbHVlIHdpdGggdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICB0aGlzLnVybCA9IHRoaXMudXJsLnJlcGxhY2UocmVQYXJhbVNlYXJjaCwgJyQxXz0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGEgbmV3ICdfJyBwYXJhbWV0ZXIgdG8gdGhlIGVuZCB3aXRoIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgdmFyIHJlUXVlcnlTdHJpbmcgPSAvXFw/L1xuICAgICAgICB0aGlzLnVybCArPSAocmVRdWVyeVN0cmluZy50ZXN0KHRoaXMudXJsKSA/ICcmJyA6ICc/JykgKyAnXz0nICsgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHtib2R5OiB0aGlzLl9ib2R5SW5pdH0pXG59XG5cbmZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgYm9keVxuICAgIC50cmltKClcbiAgICAuc3BsaXQoJyYnKVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICByZXR1cm4gZm9ybVxufVxuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgLy8gUmVwbGFjZSBpbnN0YW5jZXMgb2YgXFxyXFxuIGFuZCBcXG4gZm9sbG93ZWQgYnkgYXQgbGVhc3Qgb25lIHNwYWNlIG9yIGhvcml6b250YWwgdGFiIHdpdGggYSBzcGFjZVxuICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMlxuICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKVxuICAvLyBBdm9pZGluZyBzcGxpdCB2aWEgcmVnZXggdG8gd29yayBhcm91bmQgYSBjb21tb24gSUUxMSBidWcgd2l0aCB0aGUgY29yZS1qcyAzLjYuMCByZWdleCBwb2x5ZmlsbFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoL2lzc3Vlcy83NDhcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzc1MVxuICBwcmVQcm9jZXNzZWRIZWFkZXJzXG4gICAgLnNwbGl0KCdcXHInKVxuICAgIC5tYXAoZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICByZXR1cm4gaGVhZGVyLmluZGV4T2YoJ1xcbicpID09PSAwID8gaGVhZGVyLnN1YnN0cigxLCBoZWFkZXIubGVuZ3RoKSA6IGhlYWRlclxuICAgIH0pXG4gICAgLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gIHJldHVybiBoZWFkZXJzXG59XG5cbkJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuZXhwb3J0IGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXNwb25zZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgdXNlIHRoZSBcIm5ld1wiIG9wZXJhdG9yLCB0aGlzIERPTSBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpXG4gIH1cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMjAwIDogb3B0aW9ucy5zdGF0dXNcbiAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICcnXG4gIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbn1cblxuQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgIHVybDogdGhpcy51cmxcbiAgfSlcbn1cblxuUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cbnZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG5SZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gIH1cblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbn1cblxuZXhwb3J0IHZhciBET01FeGNlcHRpb24gPSBnbG9iYWwuRE9NRXhjZXB0aW9uXG50cnkge1xuICBuZXcgRE9NRXhjZXB0aW9uKClcbn0gY2F0Y2ggKGVycikge1xuICBET01FeGNlcHRpb24gPSBmdW5jdGlvbihtZXNzYWdlLCBuYW1lKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB2YXIgZXJyb3IgPSBFcnJvcihtZXNzYWdlKVxuICAgIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFja1xuICB9XG4gIERPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSlcbiAgRE9NRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERPTUV4Y2VwdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2goaW5wdXQsIGluaXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwgJiYgcmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSlcbiAgICB9XG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgIGZ1bmN0aW9uIGFib3J0WGhyKCkge1xuICAgICAgeGhyLmFib3J0KClcbiAgICB9XG5cbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IERPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpeFVybCh1cmwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB1cmwgPT09ICcnICYmIGdsb2JhbC5sb2NhdGlvbi5ocmVmID8gZ2xvYmFsLmxvY2F0aW9uLmhyZWYgOiB1cmxcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgICAgfVxuICAgIH1cblxuICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCBmaXhVcmwocmVxdWVzdC51cmwpLCB0cnVlKVxuXG4gICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdvbWl0Jykge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhocikge1xuICAgICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBzdXBwb3J0LmFycmF5QnVmZmVyICYmXG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICYmXG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluZGV4T2YoJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpICE9PSAtMVxuICAgICAgKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluaXQgJiYgdHlwZW9mIGluaXQuaGVhZGVycyA9PT0gJ29iamVjdCcgJiYgIShpbml0LmhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSkge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaW5pdC5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgbm9ybWFsaXplVmFsdWUoaW5pdC5oZWFkZXJzW25hbWVdKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwpIHtcbiAgICAgIHJlcXVlc3Quc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpXG5cbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRE9ORSAoc3VjY2VzcyBvciBmYWlsdXJlKVxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgfSlcbn1cblxuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG5cbmlmICghZ2xvYmFsLmZldGNoKSB7XG4gIGdsb2JhbC5mZXRjaCA9IGZldGNoXG4gIGdsb2JhbC5IZWFkZXJzID0gSGVhZGVyc1xuICBnbG9iYWwuUmVxdWVzdCA9IFJlcXVlc3RcbiAgZ2xvYmFsLlJlc3BvbnNlID0gUmVzcG9uc2Vcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=