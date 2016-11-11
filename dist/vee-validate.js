(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VeeValidate = factory());
}(this, (function () { 'use strict';

var alpha$1 = (function (value) {
  return (/^[a-zA-Z]*$/.test(value)
  );
});

var alpha_dash$1 = (function (value) {
  return (/^[a-zA-Z0-9_-]*$/.test(value)
  );
});

var alpha_num$1 = (function (value) {
  return (/^[a-zA-Z0-9]*$/.test(value)
  );
});

var alpha_spaces$1 = (function (value) {
  return (/^[a-zA-Z\s]*$/.test(value)
  );
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
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

var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();











var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var between$1 = (function (value, _ref) {
  var _ref2 = slicedToArray(_ref, 2);

  var min = _ref2[0];
  var max = _ref2[1];
  return Number(min) <= value && Number(max) >= value;
});

var confirmed$1 = (function (value, _ref) {
    var _ref2 = slicedToArray(_ref, 1);

    var confirmedField = _ref2[0];

    var field = document.querySelector("input[name='" + confirmedField + "']");

    return !!(field && String(value) === field.value);
});

var decimal$1 = (function (value) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'];

    var _ref2 = slicedToArray(_ref, 1);

    var decimals = _ref2[0];

    if (Array.isArray(value)) {
        return false;
    }

    if (value === null || value === undefined || value === '') {
        return true;
    }

    var regexPart = decimals === '*' ? '+' : '{1,' + decimals + '}';
    var regex = new RegExp('^-?\\d*(\\.\\d' + regexPart + ')?$');

    if (!regex.test(value)) {
        return false;
    }

    return !Number.isNaN(parseFloat(value));
});

var digits$1 = (function (value, _ref) {
    var _ref2 = slicedToArray(_ref, 1);

    var length = _ref2[0];

    var strVal = String(value);

    return (/^[0-9]*$/.test(strVal) && strVal.length === Number(length)
    );
});

var validateImage = function validateImage(file, width, height) {
    var URL = window.URL || window.webkitURL;
    return new Promise(function (resolve) {
        var image = new Image();
        image.onerror = function () {
            return resolve({ valid: false });
        };
        image.onload = function () {
            return resolve({
                valid: image.width === Number(width) && image.height === Number(height)
            });
        };

        image.src = URL.createObjectURL(file);
    });
};

var dimensions$1 = (function (files, _ref) {
    var _ref2 = slicedToArray(_ref, 2);

    var width = _ref2[0];
    var height = _ref2[1];

    var list = [];
    for (var i = 0; i < files.length; i++) {
        // if file is not an image, reject.
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return false;
        }

        list.push(files[i]);
    }

    return Promise.all(list.map(function (file) {
        return validateImage(file, width, height);
    }));
});

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var assertString_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  if (typeof input !== 'string') {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];
});

var merge_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];
});

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

exports.default = isByteLength;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof$1(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];



var isByteLength$1 = Object.freeze({

});

var isFQDN = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFDQN;

var _assertString = assertString_1;

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = merge_1;

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFDQN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    if (/[\uff01-\uff5e]/.test(part)) {
      // disallow full-width chars
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];
});

var require$$1 = ( isByteLength$1 && isByteLength$1['default'] ) || isByteLength$1;

var isEmail_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = assertString_1;

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = merge_1;

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = require$$1;

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = isFQDN;

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var default_email_options = {
  allow_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 256 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];
});

var isEmail = unwrapExports(isEmail_1);

var email$1 = (function (value) {
  return isEmail(String(value));
});

var ext$1 = (function (files, extensions) {
    var regex = new RegExp('.(' + extensions.join('|') + ')$', 'i');
    for (var i = 0; i < files.length; i++) {
        if (!regex.test(files[i].name)) {
            return false;
        }
    }

    return true;
});

var image$1 = (function (files) {
    for (var i = 0; i < files.length; i++) {
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return false;
        }
    }

    return true;
});

var In = (function (value, options) {
  return !!options.filter(function (option) {
    return option == value;
  }).length;
}); // eslint-disable-line

var isIP_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = assertString_1;

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];
});

var isIP = unwrapExports(isIP_1);

var ip$1 = (function (value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [4];

  var _ref2 = slicedToArray(_ref, 1);

  var version = _ref2[0];
  return isIP(value, version);
});

var max$1 = (function (value, _ref) {
    var _ref2 = slicedToArray(_ref, 1);

    var length = _ref2[0];

    if (value === undefined || value === null) {
        return length >= 0;
    }

    return String(value).length <= length;
});

var max_value$1 = (function (value, _ref) {
    var _ref2 = slicedToArray(_ref, 1);

    var max = _ref2[0];

    if (Array.isArray(value) || value === null || value === undefined || value === '') {
        return false;
    }

    return Number(value) <= max;
});

var mimes$1 = (function (files, mimes) {
    var regex = new RegExp(mimes.join('|').replace('*', '.+') + '$', 'i');
    for (var i = 0; i < files.length; i++) {
        if (!regex.test(files[i].type)) {
            return false;
        }
    }

    return true;
});

var min$1 = (function (value, _ref) {
    var _ref2 = slicedToArray(_ref, 1);

    var length = _ref2[0];

    if (value === undefined || value === null) {
        return false;
    }
    return String(value).length >= length;
});

var min_value$1 = (function (value, _ref) {
    var _ref2 = slicedToArray(_ref, 1);

    var min = _ref2[0];

    if (Array.isArray(value) || value === null || value === undefined || value === '') {
        return false;
    }

    return Number(value) >= min;
});

var not_in$1 = (function (value, options) {
  return !options.filter(function (option) {
    return option == value;
  }).length;
}); // eslint-disable-line

var isNumeric_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = assertString_1;

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var numeric = /^[-+]?[0-9]+$/;

function isNumeric(str) {
  (0, _assertString2.default)(str);
  return numeric.test(str);
}
module.exports = exports['default'];
});

var isNumeric = unwrapExports(isNumeric_1);

var numeric$1 = (function (value) {
  return isNumeric(String(value));
});

var regex$1 = (function (value, _ref) {
    var _ref2 = toArray(_ref);

    var regex = _ref2[0];

    var flags = _ref2.slice(1);

    if (regex instanceof RegExp) {
        return regex.test(value);
    }

    return new RegExp(regex, flags).test(String(value));
});

var required$1 = (function (value) {
    if (Array.isArray(value)) {
        return !!value.length;
    }

    if (value === undefined || value === null) {
        return false;
    }

    return !!String(value).trim().length;
});

var size$1 = (function (files, _ref) {
    var _ref2 = slicedToArray(_ref, 1);

    var size = _ref2[0];

    if (isNaN(size)) {
        return false;
    }

    var nSize = Number(size) * 1024;
    for (var i = 0; i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }

    return true;
});

var isURL_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = assertString_1;

var _assertString2 = _interopRequireDefault(_assertString);

var _isFQDN = isFQDN;

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isIP = isIP_1;

var _isIP2 = _interopRequireDefault(_isIP);

var _merge = merge_1;

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /\s/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6)) && host !== 'localhost') {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];
});

var isURL = unwrapExports(isURL_1);

var url$1 = (function (value, domains) {
  return isURL(value, { host_whitelist: domains || false });
});

/* eslint-disable camelcase */
var Rules = {
    alpha_dash: alpha_dash$1,
    alpha_num: alpha_num$1,
    alpha_spaces: alpha_spaces$1,
    alpha: alpha$1,
    between: between$1,
    confirmed: confirmed$1,
    decimal: decimal$1,
    digits: digits$1,
    dimensions: dimensions$1,
    email: email$1,
    ext: ext$1,
    image: image$1,
    in: In,
    ip: ip$1,
    max: max$1,
    max_value: max_value$1,
    mimes: mimes$1,
    min: min$1,
    min_value: min_value$1,
    not_in: not_in$1,
    numeric: numeric$1,
    regex: regex$1,
    required: required$1,
    size: size$1,
    url: url$1
};

var ErrorBag = function () {
    function ErrorBag() {
        classCallCheck(this, ErrorBag);

        this.errors = [];
    }

    /**
     * Adds an error to the internal array.
     *
     * @param {string} field The field name.
     * @param {string} msg The error message.
     * @param {String} scope The Scope name, optional.
     */


    createClass(ErrorBag, [{
        key: "add",
        value: function add(field, msg, scope, rule) {
            var error = {
                field: field,
                msg: msg,
                rule: rule
            };

            if (scope) {
                error.scope = scope;
            }

            this.errors.push(error);
        }

        /**
         * Gets all error messages from the internal array.
         *
         * @param {String} scope The Scope name, optional.
         * @return {Array} errors Array of all error messages.
         */

    }, {
        key: "all",
        value: function all(scope) {
            if (scope) {
                return this.errors.filter(function (e) {
                    return e.scope === scope;
                }).map(function (e) {
                    return e.msg;
                });
            }

            return this.errors.map(function (e) {
                return e.msg;
            });
        }

        /**
         * Checks if there is any errrors in the internal array.
         * @param {String} scope The Scope name, optional.
         * @return {boolean} result True if there was at least one error, false otherwise.
         */

    }, {
        key: "any",
        value: function any(scope) {
            if (scope) {
                return !!this.errors.filter(function (e) {
                    return e.scope === scope;
                }).length;
            }

            return !!this.errors.length;
        }

        /**
         * Removes all items from the internal array.
         * @param {String} scope The Scope name, optional.
         */

    }, {
        key: "clear",
        value: function clear(scope) {
            if (scope) {
                this.errors = this.errors.filter(function (e) {
                    return e.scope !== scope;
                });

                return;
            }

            this.errors = [];
        }

        /**
         * Collects errors into groups or for a specific field.
         *
         * @param  {string} field The field name.
         * @param  {string} scope The scope name.
         * @return {Array} errors The errors for the specified field.
         */

    }, {
        key: "collect",
        value: function collect(field, scope) {
            var _this = this;

            if (!field) {
                var _ret = function () {
                    var collection = {};
                    _this.errors.forEach(function (e) {
                        if (!collection[e.field]) {
                            collection[e.field] = [];
                        }

                        collection[e.field].push(e.msg);
                    });

                    return {
                        v: collection
                    };
                }();

                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
            }

            if (scope) {
                return this.errors.filter(function (e) {
                    return e.field === field && e.scope === scope;
                }).map(function (e) {
                    return e.msg;
                });
            }

            return this.errors.filter(function (e) {
                return e.field === field;
            }).map(function (e) {
                return e.msg;
            });
        }
        /**
         * Gets the internal array length.
         *
         * @return {Number} length The internal array length.
         */

    }, {
        key: "count",
        value: function count() {
            return this.errors.length;
        }

        /**
         * Gets the first error message for a specific field.
         *
         * @param  {string} field The field name.
         * @return {string|null} message The error message.
         */

    }, {
        key: "first",
        value: function first(field, scope) {
            for (var i = 0; i < this.errors.length; i++) {
                if (this.errors[i].field === field) {
                    if (scope) {
                        if (this.errors[i].scope === scope) {
                            return this.errors[i].msg;
                        }
                    } else {
                        return this.errors[i].msg;
                    }
                }
            }

            return null;
        }

        /**
         * Checks if the internal array has at least one error for the specified field.
         *
         * @param  {string} field The specified field.
         * @return {Boolean} result True if at least one error is found, false otherwise.
         */

    }, {
        key: "has",
        value: function has(field, scope) {
            for (var i = 0; i < this.errors.length; i++) {
                if (this.errors[i].field === field) {
                    if (scope) {
                        if (this.errors[i].scope === scope) {
                            return true;
                        }
                    } else {
                        return true;
                    }
                }
            }

            return false;
        }

        /**
         * Removes all error messages assoicated with a specific field.
         *
         * @param  {string} field The field which messages are to be removed.
         * @param {String} scope The Scope name, optional.
         */

    }, {
        key: "remove",
        value: function remove(field, scope) {
            if (scope) {
                this.errors = this.errors.filter(function (e) {
                    return e.field !== field || e.scope !== scope;
                });

                return;
            }

            this.errors = this.errors.filter(function (e) {
                return e.field !== field;
            });
        }
    }]);
    return ErrorBag;
}();

var _class = function () {
    function _class(msg) {
        classCallCheck(this, _class);

        this.msg = msg;
    }

    createClass(_class, [{
        key: "toString",
        value: function toString() {
            return this.msg;
        }
    }]);
    return _class;
}();

/**
 * Determines the input field scope.
 */
var getScope = function getScope(el) {
    return el.dataset.scope || el.form && el.form.dataset.scope;
};

/**
 * Debounces a function.
 */
var debounce = function debounce(func) {
    var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var execAsap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!threshold) {
        return func;
    }

    var timeout = void 0;

    return function debounced(_ref) {
        var _ref2 = toArray(_ref);

        var args = _ref2;

        var obj = this;

        function delayed() {
            if (!execAsap) {
                func.apply(obj, args);
            }
            timeout = null;
        }

        if (timeout) {
            clearTimeout(timeout);
        } else if (execAsap) {
            func.apply.apply(func, [obj].concat(toConsumableArray(args)));
        }

        timeout = setTimeout(delayed, threshold || 100);
    };
};

/**
 * Emits a warning to the console.
 */
var warn = function warn(message) {
    if (!console) {
        return;
    }

    console.warn('vee-validate: ' + message); // eslint-disable-line
};

/**
 * Checks if the value is an object.
 */
// eslint-disable-next-line
var isObject = function isObject(object) {
    return object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && !Array.isArray(object) && object !== null;
};

/* eslint-disable prefer-rest-params */
var Dictionary = function () {
    function Dictionary() {
        var dictionary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        classCallCheck(this, Dictionary);

        this.dictionary = {};
        this.merge(dictionary);
    }

    createClass(Dictionary, [{
        key: 'hasLocale',
        value: function hasLocale(locale) {
            return !!this.dictionary[locale];
        }
    }, {
        key: 'getMessage',
        value: function getMessage(locale, key) {
            var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            if (!this.hasMessage(locale, key)) {
                return fallback;
            }

            return this.dictionary[locale].messages[key];
        }
    }, {
        key: 'getAttribute',
        value: function getAttribute(locale, key) {
            var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            if (!this.hasAttribute(locale, key)) {
                return fallback;
            }

            return this.dictionary[locale].attributes[key];
        }
    }, {
        key: 'hasMessage',
        value: function hasMessage(locale, key) {
            return !!(this.hasLocale(locale) && this.dictionary[locale].messages && this.dictionary[locale].messages[key]);
        }
    }, {
        key: 'hasAttribute',
        value: function hasAttribute(locale, key) {
            return !!(this.hasLocale(locale) && this.dictionary[locale].attributes && this.dictionary[locale].attributes[key]);
        }
    }, {
        key: 'merge',
        value: function merge(dictionary) {
            this._merge(this.dictionary, dictionary);
        }
    }, {
        key: 'setMessage',
        value: function setMessage(locale, key, message) {
            if (!this.hasLocale(locale)) {
                this.dictionary[locale] = {
                    messages: {},
                    attributes: {}
                };
            }

            this.dictionary[locale].messages[key] = message;
        }
    }, {
        key: 'setAttribute',
        value: function setAttribute(locale, key, attribute) {
            if (!this.hasLocale(locale)) {
                this.dictionary[locale] = {
                    messages: {},
                    attributes: {}
                };
            }

            this.dictionary[locale].attributes[key] = attribute;
        }
    }, {
        key: '_merge',
        value: function _merge(target, source) {
            var _this = this;

            if (!(isObject(target) && isObject(source))) {
                return target;
            }

            Object.keys(source).forEach(function (key) {
                if (isObject(source[key])) {
                    if (!target[key]) {
                        _extends(target, defineProperty({}, key, {}));
                    }

                    _this._merge(target[key], source[key]);
                    return;
                }

                _extends(target, defineProperty({}, key, source[key]));
            });

            return target;
        }
    }]);
    return Dictionary;
}();

/* istanbul ignore next */
/* eslint-disable max-len */
var messages = {
    alpha_dash: function alpha_dash(field) {
        return 'The ' + field + ' may contain alpha-numeric characters as well as dashes and underscores.';
    },
    alpha_num: function alpha_num(field) {
        return 'The ' + field + ' may only contain alpha-numeric characters.';
    },
    alpha_spaces: function alpha_spaces(field) {
        return 'The ' + field + ' may only contain alphabetic characters as well as spaces.';
    },
    alpha: function alpha(field) {
        return 'The ' + field + ' may only contain alphabetic characters.';
    },
    between: function between(field, _ref) {
        var _ref2 = slicedToArray(_ref, 2);

        var min = _ref2[0];
        var max = _ref2[1];
        return 'The ' + field + ' must be between ' + min + ' and ' + max + '.';
    },
    confirmed: function confirmed(field, _ref3) {
        var _ref4 = slicedToArray(_ref3, 1);

        var confirmedField = _ref4[0];
        return 'The ' + field + ' does not match the ' + confirmedField + '.';
    },
    decimal: function decimal(field) {
        var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'];

        var _ref6 = slicedToArray(_ref5, 1);

        var decimals = _ref6[0];
        return 'The ' + field + ' must be numeric and may contain ' + (decimals === '*' ? '' : decimals) + ' decimal points.';
    },
    digits: function digits(field, _ref7) {
        var _ref8 = slicedToArray(_ref7, 1);

        var length = _ref8[0];
        return 'The ' + field + ' must be numeric and exactly contain ' + length + ' digits.';
    },
    dimensions: function dimensions(field, _ref9) {
        var _ref10 = slicedToArray(_ref9, 2);

        var width = _ref10[0];
        var height = _ref10[1];
        return 'The ' + field + ' must be ' + width + ' pixels by ' + height + ' pixels.';
    },
    email: function email(field) {
        return 'The ' + field + ' must be a valid email.';
    },
    ext: function ext(field) {
        return 'The ' + field + ' must be a valid file.';
    },
    image: function image(field) {
        return 'The ' + field + ' must be an image.';
    },
    in: function _in(field) {
        return 'The ' + field + ' must be a valid value.';
    },
    ip: function ip(field) {
        return 'The ' + field + ' must be a valid ip address.';
    },
    max: function max(field, _ref11) {
        var _ref12 = slicedToArray(_ref11, 1);

        var length = _ref12[0];
        return 'The ' + field + ' may not be greater than ' + length + ' characters.';
    },
    max_value: function max_value(field, _ref13) {
        var _ref14 = slicedToArray(_ref13, 1);

        var max = _ref14[0];
        return 'The ' + field + ' must be ' + max + ' or less.';
    },
    mimes: function mimes(field) {
        return 'The ' + field + ' must have a valid file type.';
    },
    min: function min(field, _ref15) {
        var _ref16 = slicedToArray(_ref15, 1);

        var length = _ref16[0];
        return 'The ' + field + ' must be at least ' + length + ' characters.';
    },
    min_value: function min_value(field, _ref17) {
        var _ref18 = slicedToArray(_ref17, 1);

        var min = _ref18[0];
        return 'The ' + field + ' must be ' + min + ' or more.';
    },
    not_in: function not_in(field) {
        return 'The ' + field + ' must be a valid value.';
    },
    numeric: function numeric(field) {
        return 'The ' + field + ' may only contain numeric characters.';
    },
    regex: function regex(field) {
        return 'The ' + field + ' format is invalid.';
    },
    required: function required(field) {
        return 'The ' + field + ' is required.';
    },
    size: function size(field, _ref19) {
        var _ref20 = slicedToArray(_ref19, 1);

        var _size = _ref20[0];
        return 'The ' + field + ' must be less than ' + _size + ' KB.';
    },
    url: function url(field) {
        return 'The ' + field + ' is not a valid URL.';
    }
};

var after$1 = (function (moment) {
    return function (value, _ref) {
        var _ref2 = slicedToArray(_ref, 2);

        var targetField = _ref2[0];
        var format = _ref2[1];

        var dateValue = moment(value, format, true);
        var field = document.querySelector("input[name='" + targetField + "']");

        if (!(dateValue.isValid() && field)) {
            return false;
        }

        var other = moment(field.value, format, true);

        if (!other.isValid()) {
            return false;
        }

        return dateValue.isAfter(other);
    };
});

var before$1 = (function (moment) {
    return function (value, _ref) {
        var _ref2 = slicedToArray(_ref, 2);

        var targetField = _ref2[0];
        var format = _ref2[1];

        var dateValue = moment(value, format, true);
        var field = document.querySelector("input[name='" + targetField + "']");

        if (!dateValue.isValid() || !field) {
            return false;
        }

        var other = moment(field.value, format, true);

        if (!other.isValid()) {
            return false;
        }

        return dateValue.isBefore(other);
    };
});

var date_format$1 = (function (moment) {
  return function (value, _ref) {
    var _ref2 = slicedToArray(_ref, 1);

    var format = _ref2[0];
    return moment(value, format, true).isValid();
  };
});

var date_between$1 = (function (moment) {
    return function (value, _ref) {
        var _ref2 = slicedToArray(_ref, 3);

        var min = _ref2[0];
        var max = _ref2[1];
        var format = _ref2[2];

        var minDate = moment(min, format, true);
        var maxDate = moment(max, format, true);
        var dateVal = moment(value, format, true);

        if (!(minDate.isValid() && maxDate.isValid() && dateVal.isValid())) {
            return false;
        }

        return dateVal.isBetween(minDate, maxDate);
    };
});

/* istanbul ignore next */
/* eslint-disable max-len */
var messages$1 = {
    after: function after(field, _ref) {
        var _ref2 = slicedToArray(_ref, 1);

        var target = _ref2[0];
        return "The " + field + " must be after " + target + ".";
    },
    before: function before(field, _ref3) {
        var _ref4 = slicedToArray(_ref3, 1);

        var target = _ref4[0];
        return "The " + field + " must be before " + target + ".";
    },
    date_between: function date_between(field, _ref5) {
        var _ref6 = slicedToArray(_ref5, 2);

        var min = _ref6[0];
        var max = _ref6[1];
        return "The " + field + " must be between " + min + " and " + max + ".";
    },
    date_format: function date_format(field, _ref7) {
        var _ref8 = slicedToArray(_ref7, 1);

        var format = _ref8[0];
        return "The " + field + " must be in the format " + format + ".";
    }
};

var date = {
    make: function make(moment) {
        return {
            date_format: date_format$1(moment),
            after: after$1(moment),
            before: before$1(moment),
            date_between: date_between$1(moment)
        };
    },
    messages: messages$1,
    installed: false
};

var FieldBag = function () {
    function FieldBag() {
        classCallCheck(this, FieldBag);

        this.fields = {};
    }

    /**
     * Initializes and adds a new field to the bag.
     */


    createClass(FieldBag, [{
        key: '_add',
        value: function _add(name) {
            this.fields[name] = {};
            this._setFlags(name, { dirty: false, valid: false }, true);
        }

        /**
         * Remooves a field from the bag.
         */

    }, {
        key: '_remove',
        value: function _remove(name) {
            delete this.fields[name];
        }

        /**
         * Resets the flags state for a specified field or all fields.
         */

    }, {
        key: 'reset',
        value: function reset(name) {
            var _this = this;

            if (!name) {
                Object.keys(this.fields).forEach(function (field) {
                    _this._setFlags(field, { dirty: false, valid: false }, true);
                });

                return;
            }

            this._setFlags(name, { dirty: false, valid: false }, true);
        }

        /**
         * Sets the flags for a specified field.
         */

    }, {
        key: '_setFlags',
        value: function _setFlags(name, flags) {
            var _this2 = this;

            var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            return Object.keys(flags).every(function (flag) {
                return _this2._setFlag(name, flag, flags[flag], initial);
            });
        }

        /**
         * Sets a flag for a specified field.
         */

    }, {
        key: '_setFlag',
        value: function _setFlag(name, flag, value) {
            var initial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            var method = 'set' + flag.charAt(0).toUpperCase() + flag.slice(1);
            if (typeof this[method] !== 'function') {
                return false;
            }

            this[method](name, value, initial);

            return true;
        }

        /**
         * Sets the dirty flag along with dependant flags.
         */

    }, {
        key: 'setDirty',
        value: function setDirty(name, value) {
            var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            this.fields[name].dirty = value;
            this.fields[name].clean = initial || !value;
            this.fields[name].passed = this.fields[name].valid && value;
            this.fields[name].failed = !this.fields[name].valid && value;
        }

        /**
         * Sets the valid flag along with dependant flags.
         */

    }, {
        key: 'setValid',
        value: function setValid(name, value) {
            this.fields[name].valid = value;
            this.fields[name].passed = this.fields[name].dirty && value;
            this.fields[name].failed = this.fields[name].dirty && !value;
        }

        /**
         * Gets a field flag value.
         */

    }, {
        key: '_getFieldFlag',
        value: function _getFieldFlag(name, flag) {
            if (this.fields[name]) {
                return this.fields[name][flag];
            }

            return false;
        }
    }, {
        key: 'dirty',
        value: function dirty(name) {
            var _this3 = this;

            if (!name) {
                return Object.keys(this.fields).some(function (field) {
                    return _this3.fields[field].dirty;
                });
            }

            return this._getFieldFlag(name, 'dirty');
        }
    }, {
        key: 'valid',
        value: function valid(name) {
            var _this4 = this;

            if (!name) {
                return Object.keys(this.fields).every(function (field) {
                    return _this4.fields[field].valid;
                });
            }

            return this._getFieldFlag(name, 'valid');
        }
    }, {
        key: 'passed',
        value: function passed(name) {
            var _this5 = this;

            if (!name) {
                return Object.keys(this.fields).every(function (field) {
                    return _this5.fields[field].passed;
                });
            }

            return this._getFieldFlag(name, 'passed');
        }
    }, {
        key: 'failed',
        value: function failed(name) {
            var _this6 = this;

            if (!name) {
                return Object.keys(this.fields).some(function (field) {
                    return _this6.fields[field].failed;
                });
            }

            return this._getFieldFlag(name, 'failed');
        }
    }, {
        key: 'clean',
        value: function clean(name) {
            if (!name) {
                return !this.dirty();
            }

            return this._getFieldFlag(name, 'clean');
        }
    }]);
    return FieldBag;
}();

var EVENT_NAME = 'veeValidate';
var DEFAULT_LOCALE = 'en';
var STRICT_MODE = true;

var dictionary = new Dictionary({
    en: {
        messages: messages,
        attributes: {}
    }
});

var Validator = function () {
    function Validator(validations, $vm) {
        classCallCheck(this, Validator);

        this.locale = DEFAULT_LOCALE;
        this.strictMode = STRICT_MODE;
        this.$fields = {};
        this.fieldBag = new FieldBag();
        this._createFields(validations);
        this.errorBag = new ErrorBag();
        this.$vm = $vm;

        // if momentjs is present, install the validators.
        if (typeof moment === 'function') {
            // eslint-disable-next-line
            this.installDateTimeValidators(moment);
        }
    }

    /**
     * Sets the default locale for all validators.
     *
     * @param {String} language The locale id.
     */


    createClass(Validator, [{
        key: 'installDateTimeValidators',


        /**
         * Just an alias to the static method for convienece.
         */
        value: function installDateTimeValidators(moment) {
            Validator.installDateTimeValidators(moment);
        }

        /**
         * Sets the operating mode for this validator.
         * strictMode = true: Values without a rule are invalid and cause failure.
         * strictMode = false: Values without a rule are valid and are skipped.
         * @param {Boolean} strictMode.
         */

    }, {
        key: 'setStrictMode',
        value: function setStrictMode() {
            var strictMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this.strictMode = strictMode;
        }

        /**
         * Updates the dicitionary, overwriting existing values and adding new ones.
         *
         * @param  {object} data The dictionary object.
        =     */

    }, {
        key: 'setLocale',


        /**
         * Sets the validator current langauge.
         *
         * @param {string} language locale or language id.
         */
        value: function setLocale(language) {
            /* istanbul ignore if */
            if (!dictionary.hasLocale(language)) {
                // eslint-disable-next-line
                warn('You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated.');
            }

            this.locale = language;
        }

        /**
         * Registers a field to be validated.
         *
         * @param  {string} name The field name.
         * @param  {string} checks validations expression.
         * @param {string} prettyName Custom name to be used as field name in error messages.
         */

    }, {
        key: 'attach',
        value: function attach(name, checks) {
            var prettyName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            this.errorBag.remove(name);
            this._createField(name, checks);

            if (prettyName) {
                this.$fields[name].name = prettyName;
            }
        }

        /**
         * Updates the messages dicitionary, overwriting existing values and adding new ones.
         *
         * @param  {object} data The messages object.
         */

    }, {
        key: 'updateDictionary',
        value: function updateDictionary(data) {
            Validator.updateDictionary(data);
        }

        /**
         * Removes a field from the validator.
         *
         * @param  {string} name The name of the field.
         */

    }, {
        key: 'detach',
        value: function detach(name) {
            /* istanbul ignore if */
            if (this.$vm && typeof this.$vm.$emit === 'function') {
                this.$vm.$emit('VALIDATOR_OFF', name);
            }

            delete this.$fields[name];
            this.fieldBag._remove(name);
        }

        /**
         * Adds a custom validator to the list of validation rules.
         *
         * @param  {string} name The name of the validator.
         * @param  {object|function} validator The validator object/function.
         */

    }, {
        key: 'extend',
        value: function extend(name, validator) {
            Validator.extend(name, validator);
        }

        /**
         * Validates each value against the corresponding field validations.
         * @param  {object} values The values to be validated.
         * @return {boolean|Promise|void} result Returns a boolean or a promise that will
         * resolve to a boolean.
         */

    }, {
        key: 'validateAll',
        value: function validateAll(values) {
            var _this = this;

            /* istanbul ignore if */
            if (this.$vm && (!values || typeof values === 'string')) {
                this.errorBag.clear(values);
                this.$vm.$emit(EVENT_NAME, values);

                return;
            }

            var test = true;
            var promises = [];
            this.errorBag.clear();
            Object.keys(values).forEach(function (property) {
                var result = _this.validate(property, values[property]);
                if (typeof result.then === 'function') {
                    promises.push(result);
                    return;
                }

                test = test && result;
            });

            if (promises.length) {
                // eslint-disable-next-line
                return Promise.all(promises).then(function (values) {
                    return values.every(function (t) {
                        return t;
                    }) && test;
                });
            }

            return test; // eslint-disable-line
        }

        /**
         * Validates a value against a registered field validations.
         *
         * @param  {string} name the field name.
         * @param  {*} value The value to be validated.
         * @return {boolean|Promise} result returns a boolean or a promise that will resolve to
         *  a boolean.
         */

    }, {
        key: 'validate',
        value: function validate(name, value, scope) {
            var _this2 = this;

            if (!this.$fields[name]) {
                if (!this.strictMode) {
                    return true;
                }
                warn('Trying to validate a non-existant field: "' + name + '". Use "attach()" first.');

                return false;
            }

            this.errorBag.remove(name, scope);
            // if its not required and is empty or null or undefined then it passes.
            if (!this.$fields[name].required && ~[null, undefined, ''].indexOf(value)) {
                return true;
            }

            var test = true;
            var promises = [];
            this.$fields[name].validations.forEach(function (rule) {
                var result = _this2._test(name, value, rule, scope);
                if (typeof result.then === 'function') {
                    promises.push(result);
                    return;
                }

                test = test && result;
            });

            if (promises.length) {
                return Promise.all(promises).then(function (values) {
                    var valid = values.every(function (t) {
                        return t;
                    }) && test;
                    _this2.fieldBag._setFlags(name, { valid: valid, dirty: true });

                    return valid;
                });
            }

            this.fieldBag._setFlags(name, { valid: test, dirty: true });

            return test;
        }

        /**
         * Creates the fields to be validated.
         *
         * @param  {object} validations
         * @return {object} Normalized object.
         */

    }, {
        key: '_createFields',
        value: function _createFields(validations) {
            var _this3 = this;

            if (!validations) {
                return;
            }

            Object.keys(validations).forEach(function (field) {
                _this3._createField(field, validations[field]);
            });
        }

        /**
         * Creates a field entry in the fields object.
         * @param {String} name.
         * @param {String} Checks.
         */

    }, {
        key: '_createField',
        value: function _createField(name, checks) {
            var _this4 = this;

            if (!this.$fields[name]) {
                this.$fields[name] = {};
            }

            this.fieldBag._add(name);
            this.$fields[name].validations = [];

            if (Array.isArray(checks)) {
                this.$fields[name].validations = checks;

                return;
            }

            checks.split('|').forEach(function (rule) {
                var normalizedRule = _this4._normalizeRule(rule, _this4.$fields[name].validations);
                if (normalizedRule.name === 'required') {
                    _this4.$fields[name].required = true;
                }

                _this4.$fields[name].validations.push(normalizedRule);
            });
        }

        /**
         * Normalizes a single validation object.
         *
         * @param  {string} rule The rule to be normalized.
         * @return {object} rule The normalized rule.
         */

    }, {
        key: '_normalizeRule',
        value: function _normalizeRule(rule, validations) {
            var params = [];
            var name = rule.split(':')[0];
            if (~rule.indexOf(':')) {
                params = rule.split(':')[1].split(',');
            }

            // Those rules need the date format to parse and compare correctly.
            if (date.installed && ~['after', 'before', 'date_between'].indexOf(name)) {
                var dateFormat = validations.filter(function (v) {
                    return v.name === 'date_format';
                })[0];
                if (dateFormat) {
                    // pass it as the last param.
                    params.push(dateFormat.params[0]);
                }
            }

            return { name: name, params: params };
        }

        /**
         * Formats an error message for field and a rule.
         *
         * @param  {string} field The field name.
         * @param  {object} rule Normalized rule object.
         * @param {object} data Additional Information about the validation result.
         * @return {string} msg Formatted error message.
         */

    }, {
        key: '_formatErrorMessage',
        value: function _formatErrorMessage(field, rule) {
            var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var name = this._getFieldDisplayName(field);
            var params = this._getLocalizedParams(rule);

            if (!dictionary.hasLocale(this.locale) || typeof dictionary.getMessage(this.locale, rule.name) !== 'function') {
                // Default to english message.
                return dictionary.getMessage('en', rule.name)(name, params, data);
            }

            return dictionary.getMessage(this.locale, rule.name)(name, params, data);
        }

        /**
         * Translates the parameters passed to the rule (mainly for target fields).
         */

    }, {
        key: '_getLocalizedParams',
        value: function _getLocalizedParams(rule) {
            if (~['after', 'before', 'confirmed'].indexOf(rule.name) && rule.params && rule.params[0]) {
                return [dictionary.getAttribute(this.locale, rule.params[0], rule.params[0])];
            }

            return rule.params;
        }

        /**
         * Resolves an appropiate display name, first checking 'data-as' or the registered 'prettyName'
         * Then the dictionary, then fallsback to field name.
         * @return {String} displayName The name to be used in the errors.
         */

    }, {
        key: '_getFieldDisplayName',
        value: function _getFieldDisplayName(field) {
            return this.$fields[field].name || dictionary.getAttribute(this.locale, field, field);
        }

        /**
         * Tests a single input value against a rule.
         *
         * @param  {*} name The name of the field.
         * @param  {*} value  [description]
         * @param  {object} rule the rule object.
         * @return {boolean} Wether if it passes the check.
         */

    }, {
        key: '_test',
        value: function _test(name, value, rule, scope) {
            var _this5 = this;

            var validator = Rules[rule.name];
            var result = validator(value, rule.params);

            if (typeof result.then === 'function') {
                return result.then(function (values) {
                    var allValid = true;
                    if (Array.isArray(values)) {
                        allValid = values.every(function (t) {
                            return t.valid;
                        });
                        if (!allValid) {
                            _this5.errorBag.add(name, _this5._formatErrorMessage(name, rule), scope, rule);
                        }
                    } else {
                        // Is a single object.
                        allValid = values.valid;
                        _this5.errorBag.add(name, rule, _this5._formatErrorMessage(name, rule, values.data), scope);
                    }

                    return allValid;
                });
            }

            if (isObject(result)) {
                if (!result.valid) {
                    this.errorBag.add(name, this._formatErrorMessage(name, rule, result.data), scope, rule);
                }

                return result.valid;
            }

            if (!result) {
                this.errorBag.add(name, this._formatErrorMessage(name, rule), scope, rule);
            }

            return result;
        }

        /**
         * Gets the internal errorBag instance.
         *
         * @return {ErrorBag} errorBag The internal error bag object.
         */

    }, {
        key: 'getErrors',
        value: function getErrors() {
            return this.errorBag;
        }
    }], [{
        key: 'setDefaultLocale',
        value: function setDefaultLocale() {
            var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';

            /* istanbul ignore if */
            if (!dictionary.hasLocale(language)) {
                // eslint-disable-next-line
                warn('You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated.');
            }

            DEFAULT_LOCALE = language;
        }

        /**
         * Sets the operating mode for all newly created validators.
         * strictMode = true: Values without a rule are invalid and cause failure.
         * strictMode = false: Values without a rule are valid and are skipped.
         * @param {Boolean} strictMode.
         */

    }, {
        key: 'setStrictMode',
        value: function setStrictMode() {
            var strictMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            STRICT_MODE = strictMode;
        }

        /**
         * Installs the datetime validators and the messages.
         */

    }, {
        key: 'installDateTimeValidators',
        value: function installDateTimeValidators(moment) {
            if (typeof moment !== 'function') {
                warn('To use the date-time validators you must provide moment reference.');

                return false;
            }

            if (date.installed) {
                return true;
            }

            var validators = date.make(moment);
            Object.keys(validators).forEach(function (name) {
                Validator.extend(name, validators[name]);
            });

            Validator.updateDictionary({
                en: {
                    messages: date.messages
                }
            });
            date.installed = true;

            return true;
        }
    }, {
        key: 'updateDictionary',
        value: function updateDictionary(data) {
            dictionary.merge(data);
        }

        /**
         * Static constructor.
         *
         * @param  {object} validations The validations object.
         * @return {Validator} validator A validator object.
         */

    }, {
        key: 'create',
        value: function create(validations, $vm) {
            return new Validator(validations, $vm);
        }

        /**
         * Adds a custom validator to the list of validation rules.
         *
         * @param  {string} name The name of the validator.
         * @param  {object|function} validator The validator object/function.
         */

    }, {
        key: 'extend',
        value: function extend(name, validator) {
            Validator._guardExtend(name, validator);
            Validator._merge(name, validator);
        }

        /**
         * Merges a validator object into the Rules and Messages.
         *
         * @param  {string} name The name of the validator.
         * @param  {function|object} validator The validator object.
         */

    }, {
        key: '_merge',
        value: function _merge(name, validator) {
            if (typeof validator === 'function') {
                Rules[name] = validator;
                dictionary.setMessage('en', name, function (field) {
                    return 'The ' + field + ' value is not valid.';
                });
                return;
            }

            Rules[name] = validator.validate;

            if (validator.getMessage && typeof validator.getMessage === 'function') {
                dictionary.setMessage('en', name, validator.getMessage);
            }

            if (validator.messages) {
                dictionary.merge(Object.keys(validator.messages).reduce(function (prev, curr) {
                    var dict = prev;
                    dict[curr] = {
                        messages: defineProperty({}, name, validator.messages[curr])
                    };

                    return dict;
                }, {}));
            }
        }

        /**
         * Guards from extnsion violations.
         *
         * @param  {string} name name of the validation rule.
         * @param  {object} validator a validation rule object.
         */

    }, {
        key: '_guardExtend',
        value: function _guardExtend(name, validator) {
            if (Rules[name]) {
                throw new _class('Extension Error: There is an existing validator with the same name \'' + name + '\'.');
            }

            if (typeof validator === 'function') {
                return;
            }

            if (typeof validator.validate !== 'function') {
                throw new _class(
                // eslint-disable-next-line
                'Extension Error: The validator \'' + name + '\' must be a function or have a \'validate\' method.');
            }

            if (typeof validator.getMessage !== 'function' && _typeof(validator.messages) !== 'object') {
                throw new _class(
                // eslint-disable-next-line
                'Extension Error: The validator \'' + name + '\' must have a \'getMessage\' method or have a \'messages\' object.');
            }
        }
    }]);
    return Validator;
}();

/**
 * Keeps track of $vm, $validator instances.
 * @type {Array}
 */
var instances = [];

/**
 * Finds a validator instance from the instances array.
 * @param  {[type]} $vm The Vue instance.
 * @return {object} pair the $vm,$validator pair.
 */
var find = function find($vm) {
    for (var i = 0; i < instances.length; i++) {
        if (instances[i].$vm === $vm) {
            return instances[i].$validator;
        }
    }

    return undefined;
};

/**
 * Registers a validator for a $vm instance.
 * @param  {*} $vm The Vue instance.
 * @return {Validator} $validator The validator instance.
 */
var register = function register($vm) {
    var instance = find($vm);
    if (!instance) {
        instance = Validator.create(undefined, $vm);

        instances.push({
            $vm: $vm,
            $validator: instance
        });
    }

    return instance;
};

var unregister = function unregister($vm) {
    for (var i = 0; i < instances.length; i++) {
        if (instances[i].$vm === $vm) {
            instances.splice(i, 1);

            return true;
        }
    }

    return false;
};

var mixin = (function (options) {
    return {
        data: function data() {
            return defineProperty({}, options.errorBagName, this.$validator.errorBag);
        },

        computed: defineProperty({}, options.fieldsBagName, {
            get: function get() {
                return this.$validator.fieldBag;
            }
        }),
        mounted: function mounted() {
            this.$emit('validatorReady');
        },
        destroyed: function destroyed() {
            unregister(this);
        }
    };
});

var DEFAULT_EVENT_NAME = 'veeValidate';

var ListenerGenerator = function () {
    function ListenerGenerator(el, binding, context, options) {
        classCallCheck(this, ListenerGenerator);

        this.callbacks = [];
        this.el = el;
        this.binding = binding;
        this.vm = context;
        this.options = options;
        this.fieldName = binding.expression || el.name;
    }

    /**
     * Determines if the validation rule requires additional listeners on target fields.
     */


    createClass(ListenerGenerator, [{
        key: '_hasFieldDependency',
        value: function _hasFieldDependency(rules) {
            var results = rules.split('|').filter(function (r) {
                return !!r.match(/confirmed|after|before/);
            });
            if (!results.length) {
                return false;
            }

            return results[0].split(':')[1];
        }

        /**
         * Validates input value, triggered by 'input' event.
         */

    }, {
        key: '_inputListener',
        value: function _inputListener() {
            this.vm.$validator.validate(this.fieldName, this.el.value, getScope(this.el));
        }

        /**
         * Validates files, triggered by 'change' event.
         */

    }, {
        key: '_fileListener',
        value: function _fileListener() {
            var isValid = this.vm.$validator.validate(this.fieldName, this.el.files, getScope(this.el));
            if (!isValid && this.binding.modifiers.reject) {
                // eslint-disable-next-line
                el.value = '';
            }
        }

        /**
         * Validates radio buttons, triggered by 'change' event.
         */

    }, {
        key: '_radioListener',
        value: function _radioListener() {
            var checked = document.querySelector('input[name="' + this.el.name + '"]:checked');
            if (!checked) {
                this.vm.$validator.validate(this.fieldName, null, getScope(this.el));
                return;
            }

            this.vm.$validator.validate(this.fieldName, checked.value, getScope(this.el));
        }

        /**
         * Validates checkboxes, triggered by change event.
         */

    }, {
        key: '_checkboxListener',
        value: function _checkboxListener() {
            var _this = this;

            var checkedBoxes = document.querySelectorAll('input[name="' + this.el.name + '"]:checked');
            if (!checkedBoxes || !checkedBoxes.length) {
                this.vm.$validator.validate(this.fieldName, null, getScope(this.el));
                return;
            }

            [].concat(toConsumableArray(checkedBoxes)).forEach(function (box) {
                _this.vm.$validator.validate(_this.fieldName, box.value, getScope(_this.el));
            });
        }

        /**
         * Returns a scoped callback, only runs if the el scope is the same as the recieved scope
         * From the event.
         */

    }, {
        key: '_getScopedListener',
        value: function _getScopedListener(callback) {
            var _this2 = this;

            return function (scope) {
                if (!scope || scope === getScope(_this2.el) || scope instanceof Event) {
                    callback();
                }
            };
        }

        /**
         * Attaches validator event-triggered validation.
         */

    }, {
        key: '_attachValidatorEvent',
        value: function _attachValidatorEvent() {
            var _this3 = this;

            var listener = this._getScopedListener(this._getSuitableListener().listener.bind(this));

            this.vm.$on(DEFAULT_EVENT_NAME, listener);
            this.callbacks.push({ name: DEFAULT_EVENT_NAME, listener: listener });
            this.vm.$on('VALIDATOR_OFF', function (field) {
                if (_this3.fieldName === field) {
                    _this3.detach();
                }
            });

            var fieldName = this._hasFieldDependency(this.el.dataset.rules);
            if (fieldName) {
                // Wait for the validator ready triggered when vm is mounted because maybe
                // the element isn't mounted yet.
                this.vm.$once('validatorReady', function () {
                    var target = document.querySelector('input[name=\'' + fieldName + '\']');
                    if (!target) {
                        warn('Cannot find target field, no additional listeners were attached.');
                        return;
                    }

                    target.addEventListener('input', listener);
                    _this3.callbacks.push({ name: 'input', listener: listener, el: target });
                });
            }
        }

        /**
         * Determines a suitable listener for the element.
         */

    }, {
        key: '_getSuitableListener',
        value: function _getSuitableListener() {
            var listener = void 0;

            // determine the suitable listener and events to handle
            switch (this.el.type) {
                case 'file':
                    listener = {
                        names: ['change'],
                        listener: this._fileListener
                    };
                    break;

                case 'radio':
                    listener = {
                        names: ['change'],
                        listener: this._radioListener
                    };
                    break;

                case 'checkbox':
                    listener = {
                        names: ['change'],
                        listener: this._checkboxListener
                    };
                    break;

                default:
                    listener = {
                        names: ['input', 'blur'],
                        listener: this._inputListener
                    };
                    break;
            }

            // users are able to skip validation on certain events
            // pipe separated list of handler names to skip
            var skipValidateOn = this.el.dataset.skip ? this.el.dataset.skip.split('|') : [];
            listener.names = listener.names.filter(function (listenerName) {
                return skipValidateOn.indexOf(listenerName) === -1;
            });

            return listener;
        }

        /**
         * Attachs a suitable listener for the input.
         */

    }, {
        key: '_attachFieldListeners',
        value: function _attachFieldListeners() {
            var _this4 = this;

            var handler = this._getSuitableListener();
            var listener = debounce(handler.listener.bind(this), this.el.dataset.delay || this.options.delay);

            if (~['radio', 'checkbox'].indexOf(this.el.type)) {
                this.vm.$once('validatorReady', function () {
                    [].concat(toConsumableArray(document.querySelectorAll('input[name="' + _this4.el.name + '"]'))).forEach(function (input) {
                        handler.names.forEach(function (handlerName) {
                            input.addEventListener(handlerName, listener);
                            _this4.callbacks.push({ name: handlerName, listener: listener, el: input });
                        });
                    });
                });

                return;
            }

            handler.names.forEach(function (handlerName) {
                _this4.el.addEventListener(handlerName, listener);
                _this4.callbacks.push({ name: handlerName, listener: listener, el: _this4.el });
            });
        }

        /**
         * Attaches the Event Listeners.
         */

    }, {
        key: 'attach',
        value: function attach() {
            this.vm.$validator.attach(this.fieldName, this.el.dataset.rules, this.el.dataset.as);
            this._attachValidatorEvent();

            if (this.binding.expression) {
                // if its bound, validate it. (since update doesn't trigger after bind).
                if (!this.binding.modifiers.initial) {
                    this.vm.$validator.validate(this.binding.expression, this.binding.value, getScope(this.el));
                }

                return;
            }

            this._attachFieldListeners();
        }

        /**
         * Removes all attached event listeners.
         */

    }, {
        key: 'detach',
        value: function detach() {
            var _this5 = this;

            this.callbacks.filter(function (_ref) {
                var name = _ref.name;
                return name === DEFAULT_EVENT_NAME;
            }).forEach(function (h) {
                _this5.vm.$off(DEFAULT_EVENT_NAME, h.listener);
            });

            this.callbacks.filter(function (_ref2) {
                var name = _ref2.name;
                return name !== DEFAULT_EVENT_NAME;
            }).forEach(function (h) {
                h.el.removeEventListener(h.name, h.listener);
            });
        }
    }]);
    return ListenerGenerator;
}();

var listenersInstances = [];

var directive = (function (options) {
    return {
        bind: function bind(el, binding, _ref) {
            var context = _ref.context;

            var listener = new ListenerGenerator(el, binding, context, options);
            listener.attach();
            listenersInstances.push({ vm: context, el: el, instance: listener });
        },
        update: function update(el, _ref2, _ref3) {
            var expression = _ref2.expression;
            var value = _ref2.value;
            var modifiers = _ref2.modifiers;
            var oldValue = _ref2.oldValue;
            var context = _ref3.context;

            if (!expression || value === oldValue) {
                return;
            }

            context.$validator.validate(expression || el.name, value, getScope(el));
        },
        unbind: function unbind(el, binding, _ref4) {
            var context = _ref4.context;

            var holder = listenersInstances.filter(function (l) {
                return l.vm === context && l.el === el;
            })[0];
            holder.instance.detach();
            listenersInstances.splice(listenersInstances.indexOf(holder), 1);
        }
    };
});

// eslint-disable-next-line
var install = function install(Vue) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _ref$locale = _ref.locale;
    var locale = _ref$locale === undefined ? 'en' : _ref$locale;
    var _ref$delay = _ref.delay;
    var delay = _ref$delay === undefined ? 0 : _ref$delay;
    var _ref$errorBagName = _ref.errorBagName;
    var errorBagName = _ref$errorBagName === undefined ? 'errors' : _ref$errorBagName;
    var _ref$dictionary = _ref.dictionary;
    var dictionary = _ref$dictionary === undefined ? null : _ref$dictionary;
    var _ref$strict = _ref.strict;
    var strict = _ref$strict === undefined ? true : _ref$strict;
    var _ref$fieldsBagName = _ref.fieldsBagName;
    var fieldsBagName = _ref$fieldsBagName === undefined ? 'fields' : _ref$fieldsBagName;

    if (dictionary) {
        Validator.updateDictionary(dictionary);
    }

    Validator.setDefaultLocale(locale);
    Validator.setStrictMode(strict);

    var options = {
        locale: locale,
        delay: delay,
        dictionary: dictionary,
        errorBagName: errorBagName,
        fieldsBagName: fieldsBagName
    };

    Object.defineProperties(Vue.prototype, {
        $validator: {
            get: function get() {
                return register(this);
            }
        }
    });

    Vue.mixin(mixin(options)); // Install Mixin.
    Vue.directive('validate', directive(options)); // Install directive.
};

var index = { install: install, Validator: Validator, ErrorBag: ErrorBag };

return index;

})));
