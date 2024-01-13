function bg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o && Object.defineProperty(e, l, o.get ? o : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
    r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function r(l) {
    if (l.ep)
      return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var $g = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hd = { exports: {} }, va = {}, vd = { exports: {} }, te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ul = Symbol.for("react.element"), Dg = Symbol.for("react.portal"), Lg = Symbol.for("react.fragment"), Ig = Symbol.for("react.strict_mode"), Rg = Symbol.for("react.profiler"), Og = Symbol.for("react.provider"), Mg = Symbol.for("react.context"), zg = Symbol.for("react.forward_ref"), Fg = Symbol.for("react.suspense"), Ag = Symbol.for("react.memo"), Bg = Symbol.for("react.lazy"), Gc = Symbol.iterator;
function Ug(e) {
  return e === null || typeof e != "object" ? null : (e = Gc && e[Gc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var md = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, gd = Object.assign, yd = {};
function Vr(e, t, n) {
  this.props = e, this.context = t, this.refs = yd, this.updater = n || md;
}
Vr.prototype.isReactComponent = {};
Vr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Vr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wd() {
}
wd.prototype = Vr.prototype;
function Fs(e, t, n) {
  this.props = e, this.context = t, this.refs = yd, this.updater = n || md;
}
var As = Fs.prototype = new wd();
As.constructor = Fs;
gd(As, Vr.prototype);
As.isPureReactComponent = !0;
var Xc = Array.isArray, xd = Object.prototype.hasOwnProperty, Bs = { current: null }, kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cd(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      xd.call(t, r) && !kd.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var f = Array(u), p = 0; p < u; p++)
      f[p] = arguments[p + 2];
    l.children = f;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Ul, type: e, key: o, ref: i, props: l, _owner: Bs.current };
}
function Vg(e, t) {
  return { $$typeof: Ul, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Us(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ul;
}
function Hg(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Kc = /\/+/g;
function hi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Hg("" + e.key) : t.toString(36);
}
function bo(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ul:
          case Dg:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + hi(i, 0) : r, Xc(l) ? (n = "", e != null && (n = e.replace(Kc, "$&/") + "/"), bo(l, t, n, "", function(p) {
      return p;
    })) : l != null && (Us(l) && (l = Vg(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Kc, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Xc(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var f = r + hi(o, u);
      i += bo(o, t, n, f, l);
    }
  else if (f = Ug(e), typeof f == "function")
    for (e = f.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, f = r + hi(o, u++), i += bo(o, t, n, f, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function po(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return bo(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Wg(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Ze = { current: null }, $o = { transition: null }, Qg = { ReactCurrentDispatcher: Ze, ReactCurrentBatchConfig: $o, ReactCurrentOwner: Bs };
te.Children = { map: po, forEach: function(e, t, n) {
  po(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return po(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return po(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Us(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
te.Component = Vr;
te.Fragment = Lg;
te.Profiler = Rg;
te.PureComponent = Fs;
te.StrictMode = Ig;
te.Suspense = Fg;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qg;
te.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = gd({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Bs.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (f in t)
      xd.call(t, f) && !kd.hasOwnProperty(f) && (r[f] = t[f] === void 0 && u !== void 0 ? u[f] : t[f]);
  }
  var f = arguments.length - 2;
  if (f === 1)
    r.children = n;
  else if (1 < f) {
    u = Array(f);
    for (var p = 0; p < f; p++)
      u[p] = arguments[p + 2];
    r.children = u;
  }
  return { $$typeof: Ul, type: e.type, key: l, ref: o, props: r, _owner: i };
};
te.createContext = function(e) {
  return e = { $$typeof: Mg, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Og, _context: e }, e.Consumer = e;
};
te.createElement = Cd;
te.createFactory = function(e) {
  var t = Cd.bind(null, e);
  return t.type = e, t;
};
te.createRef = function() {
  return { current: null };
};
te.forwardRef = function(e) {
  return { $$typeof: zg, render: e };
};
te.isValidElement = Us;
te.lazy = function(e) {
  return { $$typeof: Bg, _payload: { _status: -1, _result: e }, _init: Wg };
};
te.memo = function(e, t) {
  return { $$typeof: Ag, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function(e) {
  var t = $o.transition;
  $o.transition = {};
  try {
    e();
  } finally {
    $o.transition = t;
  }
};
te.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
te.useCallback = function(e, t) {
  return Ze.current.useCallback(e, t);
};
te.useContext = function(e) {
  return Ze.current.useContext(e);
};
te.useDebugValue = function() {
};
te.useDeferredValue = function(e) {
  return Ze.current.useDeferredValue(e);
};
te.useEffect = function(e, t) {
  return Ze.current.useEffect(e, t);
};
te.useId = function() {
  return Ze.current.useId();
};
te.useImperativeHandle = function(e, t, n) {
  return Ze.current.useImperativeHandle(e, t, n);
};
te.useInsertionEffect = function(e, t) {
  return Ze.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function(e, t) {
  return Ze.current.useLayoutEffect(e, t);
};
te.useMemo = function(e, t) {
  return Ze.current.useMemo(e, t);
};
te.useReducer = function(e, t, n) {
  return Ze.current.useReducer(e, t, n);
};
te.useRef = function(e) {
  return Ze.current.useRef(e);
};
te.useState = function(e) {
  return Ze.current.useState(e);
};
te.useSyncExternalStore = function(e, t, n) {
  return Ze.current.useSyncExternalStore(e, t, n);
};
te.useTransition = function() {
  return Ze.current.useTransition();
};
te.version = "18.2.0";
vd.exports = te;
var $ = vd.exports;
const Pt = /* @__PURE__ */ zs($), Yg = /* @__PURE__ */ bg({
  __proto__: null,
  default: Pt
}, [$]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gg = $, Xg = Symbol.for("react.element"), Kg = Symbol.for("react.fragment"), qg = Object.prototype.hasOwnProperty, Zg = Gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Jg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sd(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    qg.call(t, r) && !Jg.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Xg, type: e, key: o, ref: i, props: l, _owner: Zg.current };
}
va.Fragment = Kg;
va.jsx = Sd;
va.jsxs = Sd;
hd.exports = va;
var d = hd.exports, Bi = {}, Ed = { exports: {} }, pt = {}, jd = { exports: {} }, Nd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(B, Y) {
    var G = B.length;
    B.push(Y);
    e:
      for (; 0 < G; ) {
        var fe = G - 1 >>> 1, ye = B[fe];
        if (0 < l(ye, Y))
          B[fe] = Y, B[G] = ye, G = fe;
        else
          break e;
      }
  }
  function n(B) {
    return B.length === 0 ? null : B[0];
  }
  function r(B) {
    if (B.length === 0)
      return null;
    var Y = B[0], G = B.pop();
    if (G !== Y) {
      B[0] = G;
      e:
        for (var fe = 0, ye = B.length, Mt = ye >>> 1; fe < Mt; ) {
          var et = 2 * (fe + 1) - 1, zn = B[et], vt = et + 1, an = B[vt];
          if (0 > l(zn, G))
            vt < ye && 0 > l(an, zn) ? (B[fe] = an, B[vt] = G, fe = vt) : (B[fe] = zn, B[et] = G, fe = et);
          else if (vt < ye && 0 > l(an, G))
            B[fe] = an, B[vt] = G, fe = vt;
          else
            break e;
        }
    }
    return Y;
  }
  function l(B, Y) {
    var G = B.sortIndex - Y.sortIndex;
    return G !== 0 ? G : B.id - Y.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var f = [], p = [], y = 1, k = null, S = 3, _ = !1, P = !1, w = !1, M = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function E(B) {
    for (var Y = n(p); Y !== null; ) {
      if (Y.callback === null)
        r(p);
      else if (Y.startTime <= B)
        r(p), Y.sortIndex = Y.expirationTime, t(f, Y);
      else
        break;
      Y = n(p);
    }
  }
  function b(B) {
    if (w = !1, E(B), !P)
      if (n(f) !== null)
        P = !0, ln(z);
      else {
        var Y = n(p);
        Y !== null && on(b, Y.startTime - B);
      }
  }
  function z(B, Y) {
    P = !1, w && (w = !1, x(F), F = -1), _ = !0;
    var G = S;
    try {
      for (E(Y), k = n(f); k !== null && (!(k.expirationTime > Y) || B && !Oe()); ) {
        var fe = k.callback;
        if (typeof fe == "function") {
          k.callback = null, S = k.priorityLevel;
          var ye = fe(k.expirationTime <= Y);
          Y = e.unstable_now(), typeof ye == "function" ? k.callback = ye : k === n(f) && r(f), E(Y);
        } else
          r(f);
        k = n(f);
      }
      if (k !== null)
        var Mt = !0;
      else {
        var et = n(p);
        et !== null && on(b, et.startTime - Y), Mt = !1;
      }
      return Mt;
    } finally {
      k = null, S = G, _ = !1;
    }
  }
  var D = !1, U = null, F = -1, he = 5, X = -1;
  function Oe() {
    return !(e.unstable_now() - X < he);
  }
  function Rt() {
    if (U !== null) {
      var B = e.unstable_now();
      X = B;
      var Y = !0;
      try {
        Y = U(!0, B);
      } finally {
        Y ? Ht() : (D = !1, U = null);
      }
    } else
      D = !1;
  }
  var Ht;
  if (typeof m == "function")
    Ht = function() {
      m(Rt);
    };
  else if (typeof MessageChannel < "u") {
    var Mn = new MessageChannel(), Ot = Mn.port2;
    Mn.port1.onmessage = Rt, Ht = function() {
      Ot.postMessage(null);
    };
  } else
    Ht = function() {
      M(Rt, 0);
    };
  function ln(B) {
    U = B, D || (D = !0, Ht());
  }
  function on(B, Y) {
    F = M(function() {
      B(e.unstable_now());
    }, Y);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(B) {
    B.callback = null;
  }, e.unstable_continueExecution = function() {
    P || _ || (P = !0, ln(z));
  }, e.unstable_forceFrameRate = function(B) {
    0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : he = 0 < B ? Math.floor(1e3 / B) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return S;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(f);
  }, e.unstable_next = function(B) {
    switch (S) {
      case 1:
      case 2:
      case 3:
        var Y = 3;
        break;
      default:
        Y = S;
    }
    var G = S;
    S = Y;
    try {
      return B();
    } finally {
      S = G;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(B, Y) {
    switch (B) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        B = 3;
    }
    var G = S;
    S = B;
    try {
      return Y();
    } finally {
      S = G;
    }
  }, e.unstable_scheduleCallback = function(B, Y, G) {
    var fe = e.unstable_now();
    switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? fe + G : fe) : G = fe, B) {
      case 1:
        var ye = -1;
        break;
      case 2:
        ye = 250;
        break;
      case 5:
        ye = 1073741823;
        break;
      case 4:
        ye = 1e4;
        break;
      default:
        ye = 5e3;
    }
    return ye = G + ye, B = { id: y++, callback: Y, priorityLevel: B, startTime: G, expirationTime: ye, sortIndex: -1 }, G > fe ? (B.sortIndex = G, t(p, B), n(f) === null && B === n(p) && (w ? (x(F), F = -1) : w = !0, on(b, G - fe))) : (B.sortIndex = ye, t(f, B), P || _ || (P = !0, ln(z))), B;
  }, e.unstable_shouldYield = Oe, e.unstable_wrapCallback = function(B) {
    var Y = S;
    return function() {
      var G = S;
      S = Y;
      try {
        return B.apply(this, arguments);
      } finally {
        S = G;
      }
    };
  };
})(Nd);
jd.exports = Nd;
var e1 = jd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d = $, dt = e1;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Pd = /* @__PURE__ */ new Set(), El = {};
function nr(e, t) {
  Or(e, t), Or(e + "Capture", t);
}
function Or(e, t) {
  for (El[e] = t, e = 0; e < t.length; e++)
    Pd.add(t[e]);
}
var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ui = Object.prototype.hasOwnProperty, t1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, qc = {}, Zc = {};
function n1(e) {
  return Ui.call(Zc, e) ? !0 : Ui.call(qc, e) ? !1 : t1.test(e) ? Zc[e] = !0 : (qc[e] = !0, !1);
}
function r1(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function l1(e, t, n, r) {
  if (t === null || typeof t > "u" || r1(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Je(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ue[e] = new Je(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ue[t] = new Je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ue[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ue[e] = new Je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ue[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ue[e] = new Je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ue[e] = new Je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ue[e] = new Je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ue[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vs = /[\-:]([a-z])/g;
function Hs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Vs,
    Hs
  );
  Ue[t] = new Je(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Vs, Hs);
  Ue[t] = new Je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Vs, Hs);
  Ue[t] = new Je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ue[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ue.xlinkHref = new Je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ue[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ws(e, t, n, r) {
  var l = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (l1(t, n, l, r) && (n = null), r || l === null ? n1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rn = _d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ho = Symbol.for("react.element"), yr = Symbol.for("react.portal"), wr = Symbol.for("react.fragment"), Qs = Symbol.for("react.strict_mode"), Vi = Symbol.for("react.profiler"), Td = Symbol.for("react.provider"), bd = Symbol.for("react.context"), Ys = Symbol.for("react.forward_ref"), Hi = Symbol.for("react.suspense"), Wi = Symbol.for("react.suspense_list"), Gs = Symbol.for("react.memo"), vn = Symbol.for("react.lazy"), $d = Symbol.for("react.offscreen"), Jc = Symbol.iterator;
function tl(e) {
  return e === null || typeof e != "object" ? null : (e = Jc && e[Jc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ke = Object.assign, vi;
function cl(e) {
  if (vi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      vi = t && t[1] || "";
    }
  return `
` + vi + e;
}
var mi = !1;
function gi(e, t) {
  if (!e || mi)
    return "";
  mi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (p) {
          r = p;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (p) {
        r = p;
      }
      e();
    }
  } catch (p) {
    if (p && r && typeof p.stack == "string") {
      for (var l = p.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var f = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), f;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    mi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? cl(e) : "";
}
function o1(e) {
  switch (e.tag) {
    case 5:
      return cl(e.type);
    case 16:
      return cl("Lazy");
    case 13:
      return cl("Suspense");
    case 19:
      return cl("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = gi(e.type, !1), e;
    case 11:
      return e = gi(e.type.render, !1), e;
    case 1:
      return e = gi(e.type, !0), e;
    default:
      return "";
  }
}
function Qi(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case wr:
      return "Fragment";
    case yr:
      return "Portal";
    case Vi:
      return "Profiler";
    case Qs:
      return "StrictMode";
    case Hi:
      return "Suspense";
    case Wi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bd:
        return (e.displayName || "Context") + ".Consumer";
      case Td:
        return (e._context.displayName || "Context") + ".Provider";
      case Ys:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Gs:
        return t = e.displayName || null, t !== null ? t : Qi(e.type) || "Memo";
      case vn:
        t = e._payload, e = e._init;
        try {
          return Qi(e(t));
        } catch {
        }
    }
  return null;
}
function a1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qi(t);
    case 8:
      return t === Qs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function $n(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Dd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function i1(e) {
  var t = Dd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function vo(e) {
  e._valueTracker || (e._valueTracker = i1(e));
}
function Ld(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Dd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Uo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yi(e, t) {
  var n = t.checked;
  return ke({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ef(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $n(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Id(e, t) {
  t = t.checked, t != null && Ws(e, "checked", t, !1);
}
function Gi(e, t) {
  Id(e, t);
  var n = $n(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Xi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xi(e, t.type, $n(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function tf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Xi(e, t, n) {
  (t !== "number" || Uo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fl = Array.isArray;
function br(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $n(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ki(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(O(91));
  return ke({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function nf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(O(92));
      if (fl(n)) {
        if (1 < n.length)
          throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: $n(n) };
}
function Rd(e, t) {
  var n = $n(t.value), r = $n(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function rf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Od(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Od(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var mo, Md = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (mo = mo || document.createElement("div"), mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mo.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function jl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hl = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, s1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(hl).forEach(function(e) {
  s1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), hl[t] = hl[e];
  });
});
function zd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hl.hasOwnProperty(e) && hl[e] ? ("" + t).trim() : t + "px";
}
function Fd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = zd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var u1 = ke({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Zi(e, t) {
  if (t) {
    if (u1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(O(62));
  }
}
function Ji(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var es = null;
function Xs(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ts = null, $r = null, Dr = null;
function lf(e) {
  if (e = Wl(e)) {
    if (typeof ts != "function")
      throw Error(O(280));
    var t = e.stateNode;
    t && (t = xa(t), ts(e.stateNode, e.type, t));
  }
}
function Ad(e) {
  $r ? Dr ? Dr.push(e) : Dr = [e] : $r = e;
}
function Bd() {
  if ($r) {
    var e = $r, t = Dr;
    if (Dr = $r = null, lf(e), t)
      for (e = 0; e < t.length; e++)
        lf(t[e]);
  }
}
function Ud(e, t) {
  return e(t);
}
function Vd() {
}
var yi = !1;
function Hd(e, t, n) {
  if (yi)
    return e(t, n);
  yi = !0;
  try {
    return Ud(e, t, n);
  } finally {
    yi = !1, ($r !== null || Dr !== null) && (Vd(), Bd());
  }
}
function Nl(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = xa(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(O(231, t, typeof n));
  return n;
}
var ns = !1;
if (Jt)
  try {
    var nl = {};
    Object.defineProperty(nl, "passive", { get: function() {
      ns = !0;
    } }), window.addEventListener("test", nl, nl), window.removeEventListener("test", nl, nl);
  } catch {
    ns = !1;
  }
function c1(e, t, n, r, l, o, i, u, f) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (y) {
    this.onError(y);
  }
}
var vl = !1, Vo = null, Ho = !1, rs = null, f1 = { onError: function(e) {
  vl = !0, Vo = e;
} };
function d1(e, t, n, r, l, o, i, u, f) {
  vl = !1, Vo = null, c1.apply(f1, arguments);
}
function p1(e, t, n, r, l, o, i, u, f) {
  if (d1.apply(this, arguments), vl) {
    if (vl) {
      var p = Vo;
      vl = !1, Vo = null;
    } else
      throw Error(O(198));
    Ho || (Ho = !0, rs = p);
  }
}
function rr(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Wd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function of(e) {
  if (rr(e) !== e)
    throw Error(O(188));
}
function h1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = rr(e), t === null)
      throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n)
          return of(l), e;
        if (o === r)
          return of(l), t;
        o = o.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return)
      n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(O(189));
      }
    }
    if (n.alternate !== r)
      throw Error(O(190));
  }
  if (n.tag !== 3)
    throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Qd(e) {
  return e = h1(e), e !== null ? Yd(e) : null;
}
function Yd(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Yd(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Gd = dt.unstable_scheduleCallback, af = dt.unstable_cancelCallback, v1 = dt.unstable_shouldYield, m1 = dt.unstable_requestPaint, Ee = dt.unstable_now, g1 = dt.unstable_getCurrentPriorityLevel, Ks = dt.unstable_ImmediatePriority, Xd = dt.unstable_UserBlockingPriority, Wo = dt.unstable_NormalPriority, y1 = dt.unstable_LowPriority, Kd = dt.unstable_IdlePriority, ma = null, Ut = null;
function w1(e) {
  if (Ut && typeof Ut.onCommitFiberRoot == "function")
    try {
      Ut.onCommitFiberRoot(ma, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Dt = Math.clz32 ? Math.clz32 : C1, x1 = Math.log, k1 = Math.LN2;
function C1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (x1(e) / k1 | 0) | 0;
}
var go = 64, yo = 4194304;
function dl(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Qo(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = dl(u) : (o &= i, o !== 0 && (r = dl(o)));
  } else
    i = n & ~l, i !== 0 ? r = dl(i) : o !== 0 && (r = dl(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Dt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function S1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function E1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Dt(o), u = 1 << i, f = l[i];
    f === -1 ? (!(u & n) || u & r) && (l[i] = S1(u, t)) : f <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function ls(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function qd() {
  var e = go;
  return go <<= 1, !(go & 4194240) && (go = 64), e;
}
function wi(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Vl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Dt(t), e[t] = n;
}
function j1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Dt(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function qs(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Dt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var ce = 0;
function Zd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Jd, Zs, ep, tp, np, os = !1, wo = [], Cn = null, Sn = null, En = null, _l = /* @__PURE__ */ new Map(), Pl = /* @__PURE__ */ new Map(), gn = [], N1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function sf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Cn = null;
      break;
    case "dragenter":
    case "dragleave":
      Sn = null;
      break;
    case "mouseover":
    case "mouseout":
      En = null;
      break;
    case "pointerover":
    case "pointerout":
      _l.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pl.delete(t.pointerId);
  }
}
function rl(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Wl(t), t !== null && Zs(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function _1(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Cn = rl(Cn, e, t, n, r, l), !0;
    case "dragenter":
      return Sn = rl(Sn, e, t, n, r, l), !0;
    case "mouseover":
      return En = rl(En, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return _l.set(o, rl(_l.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Pl.set(o, rl(Pl.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function rp(e) {
  var t = Qn(e.target);
  if (t !== null) {
    var n = rr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Wd(n), t !== null) {
          e.blockedOn = t, np(e.priority, function() {
            ep(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Do(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = as(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      es = r, n.target.dispatchEvent(r), es = null;
    } else
      return t = Wl(n), t !== null && Zs(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function uf(e, t, n) {
  Do(e) && n.delete(t);
}
function P1() {
  os = !1, Cn !== null && Do(Cn) && (Cn = null), Sn !== null && Do(Sn) && (Sn = null), En !== null && Do(En) && (En = null), _l.forEach(uf), Pl.forEach(uf);
}
function ll(e, t) {
  e.blockedOn === t && (e.blockedOn = null, os || (os = !0, dt.unstable_scheduleCallback(dt.unstable_NormalPriority, P1)));
}
function Tl(e) {
  function t(l) {
    return ll(l, e);
  }
  if (0 < wo.length) {
    ll(wo[0], e);
    for (var n = 1; n < wo.length; n++) {
      var r = wo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Cn !== null && ll(Cn, e), Sn !== null && ll(Sn, e), En !== null && ll(En, e), _l.forEach(t), Pl.forEach(t), n = 0; n < gn.length; n++)
    r = gn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gn.length && (n = gn[0], n.blockedOn === null); )
    rp(n), n.blockedOn === null && gn.shift();
}
var Lr = rn.ReactCurrentBatchConfig, Yo = !0;
function T1(e, t, n, r) {
  var l = ce, o = Lr.transition;
  Lr.transition = null;
  try {
    ce = 1, Js(e, t, n, r);
  } finally {
    ce = l, Lr.transition = o;
  }
}
function b1(e, t, n, r) {
  var l = ce, o = Lr.transition;
  Lr.transition = null;
  try {
    ce = 4, Js(e, t, n, r);
  } finally {
    ce = l, Lr.transition = o;
  }
}
function Js(e, t, n, r) {
  if (Yo) {
    var l = as(e, t, n, r);
    if (l === null)
      Ti(e, t, r, Go, n), sf(e, r);
    else if (_1(l, e, t, n, r))
      r.stopPropagation();
    else if (sf(e, r), t & 4 && -1 < N1.indexOf(e)) {
      for (; l !== null; ) {
        var o = Wl(l);
        if (o !== null && Jd(o), o = as(e, t, n, r), o === null && Ti(e, t, r, Go, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Ti(e, t, r, null, n);
  }
}
var Go = null;
function as(e, t, n, r) {
  if (Go = null, e = Xs(r), e = Qn(e), e !== null)
    if (t = rr(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Wd(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Go = e, null;
}
function lp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (g1()) {
        case Ks:
          return 1;
        case Xd:
          return 4;
        case Wo:
        case y1:
          return 16;
        case Kd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wn = null, eu = null, Lo = null;
function op() {
  if (Lo)
    return Lo;
  var e, t = eu, n = t.length, r, l = "value" in wn ? wn.value : wn.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return Lo = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Io(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function xo() {
  return !0;
}
function cf() {
  return !1;
}
function ht(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? xo : cf, this.isPropagationStopped = cf, this;
  }
  return ke(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xo);
  }, persist: function() {
  }, isPersistent: xo }), t;
}
var Hr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, tu = ht(Hr), Hl = ke({}, Hr, { view: 0, detail: 0 }), $1 = ht(Hl), xi, ki, ol, ga = ke({}, Hl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ol && (ol && e.type === "mousemove" ? (xi = e.screenX - ol.screenX, ki = e.screenY - ol.screenY) : ki = xi = 0, ol = e), xi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ki;
} }), ff = ht(ga), D1 = ke({}, ga, { dataTransfer: 0 }), L1 = ht(D1), I1 = ke({}, Hl, { relatedTarget: 0 }), Ci = ht(I1), R1 = ke({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), O1 = ht(R1), M1 = ke({}, Hr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), z1 = ht(M1), F1 = ke({}, Hr, { data: 0 }), df = ht(F1), A1 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, B1 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, U1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function V1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = U1[e]) ? !!t[e] : !1;
}
function nu() {
  return V1;
}
var H1 = ke({}, Hl, { key: function(e) {
  if (e.key) {
    var t = A1[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Io(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? B1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nu, charCode: function(e) {
  return e.type === "keypress" ? Io(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Io(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), W1 = ht(H1), Q1 = ke({}, ga, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pf = ht(Q1), Y1 = ke({}, Hl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nu }), G1 = ht(Y1), X1 = ke({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), K1 = ht(X1), q1 = ke({}, ga, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Z1 = ht(q1), J1 = [9, 13, 27, 32], ru = Jt && "CompositionEvent" in window, ml = null;
Jt && "documentMode" in document && (ml = document.documentMode);
var ey = Jt && "TextEvent" in window && !ml, ap = Jt && (!ru || ml && 8 < ml && 11 >= ml), hf = " ", vf = !1;
function ip(e, t) {
  switch (e) {
    case "keyup":
      return J1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function sp(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var xr = !1;
function ty(e, t) {
  switch (e) {
    case "compositionend":
      return sp(t);
    case "keypress":
      return t.which !== 32 ? null : (vf = !0, hf);
    case "textInput":
      return e = t.data, e === hf && vf ? null : e;
    default:
      return null;
  }
}
function ny(e, t) {
  if (xr)
    return e === "compositionend" || !ru && ip(e, t) ? (e = op(), Lo = eu = wn = null, xr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ap && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ry = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function mf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ry[e.type] : t === "textarea";
}
function up(e, t, n, r) {
  Ad(r), t = Xo(t, "onChange"), 0 < t.length && (n = new tu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var gl = null, bl = null;
function ly(e) {
  xp(e, 0);
}
function ya(e) {
  var t = Sr(e);
  if (Ld(t))
    return e;
}
function oy(e, t) {
  if (e === "change")
    return t;
}
var cp = !1;
if (Jt) {
  var Si;
  if (Jt) {
    var Ei = "oninput" in document;
    if (!Ei) {
      var gf = document.createElement("div");
      gf.setAttribute("oninput", "return;"), Ei = typeof gf.oninput == "function";
    }
    Si = Ei;
  } else
    Si = !1;
  cp = Si && (!document.documentMode || 9 < document.documentMode);
}
function yf() {
  gl && (gl.detachEvent("onpropertychange", fp), bl = gl = null);
}
function fp(e) {
  if (e.propertyName === "value" && ya(bl)) {
    var t = [];
    up(t, bl, e, Xs(e)), Hd(ly, t);
  }
}
function ay(e, t, n) {
  e === "focusin" ? (yf(), gl = t, bl = n, gl.attachEvent("onpropertychange", fp)) : e === "focusout" && yf();
}
function iy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ya(bl);
}
function sy(e, t) {
  if (e === "click")
    return ya(t);
}
function uy(e, t) {
  if (e === "input" || e === "change")
    return ya(t);
}
function cy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var It = typeof Object.is == "function" ? Object.is : cy;
function $l(e, t) {
  if (It(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ui.call(t, l) || !It(e[l], t[l]))
      return !1;
  }
  return !0;
}
function wf(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function xf(e, t) {
  var n = wf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = wf(n);
  }
}
function dp(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function pp() {
  for (var e = window, t = Uo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Uo(e.document);
  }
  return t;
}
function lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function fy(e) {
  var t = pp(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && dp(n.ownerDocument.documentElement, n)) {
    if (r !== null && lu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = xf(n, o);
        var i = xf(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var dy = Jt && "documentMode" in document && 11 >= document.documentMode, kr = null, is = null, yl = null, ss = !1;
function kf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ss || kr == null || kr !== Uo(r) || (r = kr, "selectionStart" in r && lu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), yl && $l(yl, r) || (yl = r, r = Xo(is, "onSelect"), 0 < r.length && (t = new tu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = kr)));
}
function ko(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Cr = { animationend: ko("Animation", "AnimationEnd"), animationiteration: ko("Animation", "AnimationIteration"), animationstart: ko("Animation", "AnimationStart"), transitionend: ko("Transition", "TransitionEnd") }, ji = {}, hp = {};
Jt && (hp = document.createElement("div").style, "AnimationEvent" in window || (delete Cr.animationend.animation, delete Cr.animationiteration.animation, delete Cr.animationstart.animation), "TransitionEvent" in window || delete Cr.transitionend.transition);
function wa(e) {
  if (ji[e])
    return ji[e];
  if (!Cr[e])
    return e;
  var t = Cr[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in hp)
      return ji[e] = t[n];
  return e;
}
var vp = wa("animationend"), mp = wa("animationiteration"), gp = wa("animationstart"), yp = wa("transitionend"), wp = /* @__PURE__ */ new Map(), Cf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ln(e, t) {
  wp.set(e, t), nr(t, [e]);
}
for (var Ni = 0; Ni < Cf.length; Ni++) {
  var _i = Cf[Ni], py = _i.toLowerCase(), hy = _i[0].toUpperCase() + _i.slice(1);
  Ln(py, "on" + hy);
}
Ln(vp, "onAnimationEnd");
Ln(mp, "onAnimationIteration");
Ln(gp, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(yp, "onTransitionEnd");
Or("onMouseEnter", ["mouseout", "mouseover"]);
Or("onMouseLeave", ["mouseout", "mouseover"]);
Or("onPointerEnter", ["pointerout", "pointerover"]);
Or("onPointerLeave", ["pointerout", "pointerover"]);
nr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
nr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
nr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
nr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vy = new Set("cancel close invalid load scroll toggle".split(" ").concat(pl));
function Sf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, p1(r, t, void 0, e), e.currentTarget = null;
}
function xp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], f = u.instance, p = u.currentTarget;
          if (u = u.listener, f !== o && l.isPropagationStopped())
            break e;
          Sf(l, u, p), o = f;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], f = u.instance, p = u.currentTarget, u = u.listener, f !== o && l.isPropagationStopped())
            break e;
          Sf(l, u, p), o = f;
        }
    }
  }
  if (Ho)
    throw e = rs, Ho = !1, rs = null, e;
}
function ve(e, t) {
  var n = t[ps];
  n === void 0 && (n = t[ps] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (kp(t, e, 2, !1), n.add(r));
}
function Pi(e, t, n) {
  var r = 0;
  t && (r |= 4), kp(n, e, r, t);
}
var Co = "_reactListening" + Math.random().toString(36).slice(2);
function Dl(e) {
  if (!e[Co]) {
    e[Co] = !0, Pd.forEach(function(n) {
      n !== "selectionchange" && (vy.has(n) || Pi(n, !1, e), Pi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Co] || (t[Co] = !0, Pi("selectionchange", !1, t));
  }
}
function kp(e, t, n, r) {
  switch (lp(t)) {
    case 1:
      var l = T1;
      break;
    case 4:
      l = b1;
      break;
    default:
      l = Js;
  }
  n = l.bind(null, t, n, e), l = void 0, !ns || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Ti(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && (f = i.stateNode.containerInfo, f === l || f.nodeType === 8 && f.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = Qn(u), i === null)
              return;
            if (f = i.tag, f === 5 || f === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  Hd(function() {
    var p = o, y = Xs(n), k = [];
    e: {
      var S = wp.get(e);
      if (S !== void 0) {
        var _ = tu, P = e;
        switch (e) {
          case "keypress":
            if (Io(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            _ = W1;
            break;
          case "focusin":
            P = "focus", _ = Ci;
            break;
          case "focusout":
            P = "blur", _ = Ci;
            break;
          case "beforeblur":
          case "afterblur":
            _ = Ci;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            _ = ff;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = L1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = G1;
            break;
          case vp:
          case mp:
          case gp:
            _ = O1;
            break;
          case yp:
            _ = K1;
            break;
          case "scroll":
            _ = $1;
            break;
          case "wheel":
            _ = Z1;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = z1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = pf;
        }
        var w = (t & 4) !== 0, M = !w && e === "scroll", x = w ? S !== null ? S + "Capture" : null : S;
        w = [];
        for (var m = p, E; m !== null; ) {
          E = m;
          var b = E.stateNode;
          if (E.tag === 5 && b !== null && (E = b, x !== null && (b = Nl(m, x), b != null && w.push(Ll(m, b, E)))), M)
            break;
          m = m.return;
        }
        0 < w.length && (S = new _(S, P, null, n, y), k.push({ event: S, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (S = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", S && n !== es && (P = n.relatedTarget || n.fromElement) && (Qn(P) || P[en]))
          break e;
        if ((_ || S) && (S = y.window === y ? y : (S = y.ownerDocument) ? S.defaultView || S.parentWindow : window, _ ? (P = n.relatedTarget || n.toElement, _ = p, P = P ? Qn(P) : null, P !== null && (M = rr(P), P !== M || P.tag !== 5 && P.tag !== 6) && (P = null)) : (_ = null, P = p), _ !== P)) {
          if (w = ff, b = "onMouseLeave", x = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (w = pf, b = "onPointerLeave", x = "onPointerEnter", m = "pointer"), M = _ == null ? S : Sr(_), E = P == null ? S : Sr(P), S = new w(b, m + "leave", _, n, y), S.target = M, S.relatedTarget = E, b = null, Qn(y) === p && (w = new w(x, m + "enter", P, n, y), w.target = E, w.relatedTarget = M, b = w), M = b, _ && P)
            t: {
              for (w = _, x = P, m = 0, E = w; E; E = gr(E))
                m++;
              for (E = 0, b = x; b; b = gr(b))
                E++;
              for (; 0 < m - E; )
                w = gr(w), m--;
              for (; 0 < E - m; )
                x = gr(x), E--;
              for (; m--; ) {
                if (w === x || x !== null && w === x.alternate)
                  break t;
                w = gr(w), x = gr(x);
              }
              w = null;
            }
          else
            w = null;
          _ !== null && Ef(k, S, _, w, !1), P !== null && M !== null && Ef(k, M, P, w, !0);
        }
      }
      e: {
        if (S = p ? Sr(p) : window, _ = S.nodeName && S.nodeName.toLowerCase(), _ === "select" || _ === "input" && S.type === "file")
          var z = oy;
        else if (mf(S))
          if (cp)
            z = uy;
          else {
            z = iy;
            var D = ay;
          }
        else
          (_ = S.nodeName) && _.toLowerCase() === "input" && (S.type === "checkbox" || S.type === "radio") && (z = sy);
        if (z && (z = z(e, p))) {
          up(k, z, n, y);
          break e;
        }
        D && D(e, S, p), e === "focusout" && (D = S._wrapperState) && D.controlled && S.type === "number" && Xi(S, "number", S.value);
      }
      switch (D = p ? Sr(p) : window, e) {
        case "focusin":
          (mf(D) || D.contentEditable === "true") && (kr = D, is = p, yl = null);
          break;
        case "focusout":
          yl = is = kr = null;
          break;
        case "mousedown":
          ss = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ss = !1, kf(k, n, y);
          break;
        case "selectionchange":
          if (dy)
            break;
        case "keydown":
        case "keyup":
          kf(k, n, y);
      }
      var U;
      if (ru)
        e: {
          switch (e) {
            case "compositionstart":
              var F = "onCompositionStart";
              break e;
            case "compositionend":
              F = "onCompositionEnd";
              break e;
            case "compositionupdate":
              F = "onCompositionUpdate";
              break e;
          }
          F = void 0;
        }
      else
        xr ? ip(e, n) && (F = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
      F && (ap && n.locale !== "ko" && (xr || F !== "onCompositionStart" ? F === "onCompositionEnd" && xr && (U = op()) : (wn = y, eu = "value" in wn ? wn.value : wn.textContent, xr = !0)), D = Xo(p, F), 0 < D.length && (F = new df(F, e, null, n, y), k.push({ event: F, listeners: D }), U ? F.data = U : (U = sp(n), U !== null && (F.data = U)))), (U = ey ? ty(e, n) : ny(e, n)) && (p = Xo(p, "onBeforeInput"), 0 < p.length && (y = new df("onBeforeInput", "beforeinput", null, n, y), k.push({ event: y, listeners: p }), y.data = U));
    }
    xp(k, t);
  });
}
function Ll(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Nl(e, n), o != null && r.unshift(Ll(e, o, l)), o = Nl(e, t), o != null && r.push(Ll(e, o, l))), e = e.return;
  }
  return r;
}
function gr(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ef(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, f = u.alternate, p = u.stateNode;
    if (f !== null && f === r)
      break;
    u.tag === 5 && p !== null && (u = p, l ? (f = Nl(n, o), f != null && i.unshift(Ll(n, f, u))) : l || (f = Nl(n, o), f != null && i.push(Ll(n, f, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var my = /\r\n?/g, gy = /\u0000|\uFFFD/g;
function jf(e) {
  return (typeof e == "string" ? e : "" + e).replace(my, `
`).replace(gy, "");
}
function So(e, t, n) {
  if (t = jf(t), jf(e) !== t && n)
    throw Error(O(425));
}
function Ko() {
}
var us = null, cs = null;
function fs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ds = typeof setTimeout == "function" ? setTimeout : void 0, yy = typeof clearTimeout == "function" ? clearTimeout : void 0, Nf = typeof Promise == "function" ? Promise : void 0, wy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nf < "u" ? function(e) {
  return Nf.resolve(null).then(e).catch(xy);
} : ds;
function xy(e) {
  setTimeout(function() {
    throw e;
  });
}
function bi(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Tl(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Tl(t);
}
function jn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function _f(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Wr = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Wr, Il = "__reactProps$" + Wr, en = "__reactContainer$" + Wr, ps = "__reactEvents$" + Wr, ky = "__reactListeners$" + Wr, Cy = "__reactHandles$" + Wr;
function Qn(e) {
  var t = e[Bt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[en] || n[Bt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = _f(e); e !== null; ) {
          if (n = e[Bt])
            return n;
          e = _f(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Wl(e) {
  return e = e[Bt] || e[en], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Sr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(O(33));
}
function xa(e) {
  return e[Il] || null;
}
var hs = [], Er = -1;
function In(e) {
  return { current: e };
}
function me(e) {
  0 > Er || (e.current = hs[Er], hs[Er] = null, Er--);
}
function pe(e, t) {
  Er++, hs[Er] = e.current, e.current = t;
}
var Dn = {}, Ge = In(Dn), lt = In(!1), qn = Dn;
function Mr(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ot(e) {
  return e = e.childContextTypes, e != null;
}
function qo() {
  me(lt), me(Ge);
}
function Pf(e, t, n) {
  if (Ge.current !== Dn)
    throw Error(O(168));
  pe(Ge, t), pe(lt, n);
}
function Cp(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(O(108, a1(e) || "Unknown", l));
  return ke({}, n, r);
}
function Zo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dn, qn = Ge.current, pe(Ge, e), pe(lt, lt.current), !0;
}
function Tf(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(O(169));
  n ? (e = Cp(e, t, qn), r.__reactInternalMemoizedMergedChildContext = e, me(lt), me(Ge), pe(Ge, e)) : me(lt), pe(lt, n);
}
var Xt = null, ka = !1, $i = !1;
function Sp(e) {
  Xt === null ? Xt = [e] : Xt.push(e);
}
function Sy(e) {
  ka = !0, Sp(e);
}
function Rn() {
  if (!$i && Xt !== null) {
    $i = !0;
    var e = 0, t = ce;
    try {
      var n = Xt;
      for (ce = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xt = null, ka = !1;
    } catch (l) {
      throw Xt !== null && (Xt = Xt.slice(e + 1)), Gd(Ks, Rn), l;
    } finally {
      ce = t, $i = !1;
    }
  }
  return null;
}
var jr = [], Nr = 0, Jo = null, ea = 0, gt = [], yt = 0, Zn = null, Kt = 1, qt = "";
function Hn(e, t) {
  jr[Nr++] = ea, jr[Nr++] = Jo, Jo = e, ea = t;
}
function Ep(e, t, n) {
  gt[yt++] = Kt, gt[yt++] = qt, gt[yt++] = Zn, Zn = e;
  var r = Kt;
  e = qt;
  var l = 32 - Dt(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Dt(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Kt = 1 << 32 - Dt(t) + l | n << l | r, qt = o + e;
  } else
    Kt = 1 << o | n << l | r, qt = e;
}
function ou(e) {
  e.return !== null && (Hn(e, 1), Ep(e, 1, 0));
}
function au(e) {
  for (; e === Jo; )
    Jo = jr[--Nr], jr[Nr] = null, ea = jr[--Nr], jr[Nr] = null;
  for (; e === Zn; )
    Zn = gt[--yt], gt[yt] = null, qt = gt[--yt], gt[yt] = null, Kt = gt[--yt], gt[yt] = null;
}
var ft = null, ct = null, ge = !1, $t = null;
function jp(e, t) {
  var n = wt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function bf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ft = e, ct = jn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ft = e, ct = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zn !== null ? { id: Kt, overflow: qt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = wt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ft = e, ct = null, !0) : !1;
    default:
      return !1;
  }
}
function vs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ms(e) {
  if (ge) {
    var t = ct;
    if (t) {
      var n = t;
      if (!bf(e, t)) {
        if (vs(e))
          throw Error(O(418));
        t = jn(n.nextSibling);
        var r = ft;
        t && bf(e, t) ? jp(r, n) : (e.flags = e.flags & -4097 | 2, ge = !1, ft = e);
      }
    } else {
      if (vs(e))
        throw Error(O(418));
      e.flags = e.flags & -4097 | 2, ge = !1, ft = e;
    }
  }
}
function $f(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ft = e;
}
function Eo(e) {
  if (e !== ft)
    return !1;
  if (!ge)
    return $f(e), ge = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fs(e.type, e.memoizedProps)), t && (t = ct)) {
    if (vs(e))
      throw Np(), Error(O(418));
    for (; t; )
      jp(e, t), t = jn(t.nextSibling);
  }
  if ($f(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ct = jn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else
    ct = ft ? jn(e.stateNode.nextSibling) : null;
  return !0;
}
function Np() {
  for (var e = ct; e; )
    e = jn(e.nextSibling);
}
function zr() {
  ct = ft = null, ge = !1;
}
function iu(e) {
  $t === null ? $t = [e] : $t.push(e);
}
var Ey = rn.ReactCurrentBatchConfig;
function Tt(e, t) {
  if (e && e.defaultProps) {
    t = ke({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ta = In(null), na = null, _r = null, su = null;
function uu() {
  su = _r = na = null;
}
function cu(e) {
  var t = ta.current;
  me(ta), e._currentValue = t;
}
function gs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Ir(e, t) {
  na = e, su = _r = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (rt = !0), e.firstContext = null);
}
function kt(e) {
  var t = e._currentValue;
  if (su !== e)
    if (e = { context: e, memoizedValue: t, next: null }, _r === null) {
      if (na === null)
        throw Error(O(308));
      _r = e, na.dependencies = { lanes: 0, firstContext: e };
    } else
      _r = _r.next = e;
  return t;
}
var Yn = null;
function fu(e) {
  Yn === null ? Yn = [e] : Yn.push(e);
}
function _p(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, fu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, tn(e, r);
}
function tn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var mn = !1;
function du(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Pp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Zt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, oe & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, tn(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, fu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, tn(e, n);
}
function Ro(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, qs(e, n);
  }
}
function Df(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else
      l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ra(e, t, n, r) {
  var l = e.updateQueue;
  mn = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var f = u, p = f.next;
    f.next = null, i === null ? o = p : i.next = p, i = f;
    var y = e.alternate;
    y !== null && (y = y.updateQueue, u = y.lastBaseUpdate, u !== i && (u === null ? y.firstBaseUpdate = p : u.next = p, y.lastBaseUpdate = f));
  }
  if (o !== null) {
    var k = l.baseState;
    i = 0, y = p = f = null, u = o;
    do {
      var S = u.lane, _ = u.eventTime;
      if ((r & S) === S) {
        y !== null && (y = y.next = {
          eventTime: _,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var P = e, w = u;
          switch (S = t, _ = n, w.tag) {
            case 1:
              if (P = w.payload, typeof P == "function") {
                k = P.call(_, k, S);
                break e;
              }
              k = P;
              break e;
            case 3:
              P.flags = P.flags & -65537 | 128;
            case 0:
              if (P = w.payload, S = typeof P == "function" ? P.call(_, k, S) : P, S == null)
                break e;
              k = ke({}, k, S);
              break e;
            case 2:
              mn = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, S = l.effects, S === null ? l.effects = [u] : S.push(u));
      } else
        _ = { eventTime: _, lane: S, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, y === null ? (p = y = _, f = k) : y = y.next = _, i |= S;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        S = u, u = S.next, S.next = null, l.lastBaseUpdate = S, l.shared.pending = null;
      }
    } while (!0);
    if (y === null && (f = k), l.baseState = f, l.firstBaseUpdate = p, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    er |= i, e.lanes = i, e.memoizedState = k;
  }
}
function Lf(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(O(191, l));
        l.call(r);
      }
    }
}
var Tp = new _d.Component().refs;
function ys(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ke({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ca = { isMounted: function(e) {
  return (e = e._reactInternals) ? rr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = qe(), l = Pn(e), o = Zt(r, l);
  o.payload = t, n != null && (o.callback = n), t = Nn(e, o, l), t !== null && (Lt(t, e, l, r), Ro(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = qe(), l = Pn(e), o = Zt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Nn(e, o, l), t !== null && (Lt(t, e, l, r), Ro(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = qe(), r = Pn(e), l = Zt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Nn(e, l, r), t !== null && (Lt(t, e, r, n), Ro(t, e, r));
} };
function If(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !$l(n, r) || !$l(l, o) : !0;
}
function bp(e, t, n) {
  var r = !1, l = Dn, o = t.contextType;
  return typeof o == "object" && o !== null ? o = kt(o) : (l = ot(t) ? qn : Ge.current, r = t.contextTypes, o = (r = r != null) ? Mr(e, l) : Dn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ca, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Rf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ca.enqueueReplaceState(t, t.state, null);
}
function ws(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = Tp, du(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = kt(o) : (o = ot(t) ? qn : Ge.current, l.context = Mr(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ys(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ca.enqueueReplaceState(l, l.state, null), ra(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function al(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(O(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === Tp && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(O(284));
    if (!n._owner)
      throw Error(O(290, e));
  }
  return e;
}
function jo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Of(e) {
  var t = e._init;
  return t(e._payload);
}
function $p(e) {
  function t(x, m) {
    if (e) {
      var E = x.deletions;
      E === null ? (x.deletions = [m], x.flags |= 16) : E.push(m);
    }
  }
  function n(x, m) {
    if (!e)
      return null;
    for (; m !== null; )
      t(x, m), m = m.sibling;
    return null;
  }
  function r(x, m) {
    for (x = /* @__PURE__ */ new Map(); m !== null; )
      m.key !== null ? x.set(m.key, m) : x.set(m.index, m), m = m.sibling;
    return x;
  }
  function l(x, m) {
    return x = Tn(x, m), x.index = 0, x.sibling = null, x;
  }
  function o(x, m, E) {
    return x.index = E, e ? (E = x.alternate, E !== null ? (E = E.index, E < m ? (x.flags |= 2, m) : E) : (x.flags |= 2, m)) : (x.flags |= 1048576, m);
  }
  function i(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function u(x, m, E, b) {
    return m === null || m.tag !== 6 ? (m = zi(E, x.mode, b), m.return = x, m) : (m = l(m, E), m.return = x, m);
  }
  function f(x, m, E, b) {
    var z = E.type;
    return z === wr ? y(x, m, E.props.children, b, E.key) : m !== null && (m.elementType === z || typeof z == "object" && z !== null && z.$$typeof === vn && Of(z) === m.type) ? (b = l(m, E.props), b.ref = al(x, m, E), b.return = x, b) : (b = Bo(E.type, E.key, E.props, null, x.mode, b), b.ref = al(x, m, E), b.return = x, b);
  }
  function p(x, m, E, b) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== E.containerInfo || m.stateNode.implementation !== E.implementation ? (m = Fi(E, x.mode, b), m.return = x, m) : (m = l(m, E.children || []), m.return = x, m);
  }
  function y(x, m, E, b, z) {
    return m === null || m.tag !== 7 ? (m = Kn(E, x.mode, b, z), m.return = x, m) : (m = l(m, E), m.return = x, m);
  }
  function k(x, m, E) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return m = zi("" + m, x.mode, E), m.return = x, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ho:
          return E = Bo(m.type, m.key, m.props, null, x.mode, E), E.ref = al(x, null, m), E.return = x, E;
        case yr:
          return m = Fi(m, x.mode, E), m.return = x, m;
        case vn:
          var b = m._init;
          return k(x, b(m._payload), E);
      }
      if (fl(m) || tl(m))
        return m = Kn(m, x.mode, E, null), m.return = x, m;
      jo(x, m);
    }
    return null;
  }
  function S(x, m, E, b) {
    var z = m !== null ? m.key : null;
    if (typeof E == "string" && E !== "" || typeof E == "number")
      return z !== null ? null : u(x, m, "" + E, b);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case ho:
          return E.key === z ? f(x, m, E, b) : null;
        case yr:
          return E.key === z ? p(x, m, E, b) : null;
        case vn:
          return z = E._init, S(
            x,
            m,
            z(E._payload),
            b
          );
      }
      if (fl(E) || tl(E))
        return z !== null ? null : y(x, m, E, b, null);
      jo(x, E);
    }
    return null;
  }
  function _(x, m, E, b, z) {
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return x = x.get(E) || null, u(m, x, "" + b, z);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case ho:
          return x = x.get(b.key === null ? E : b.key) || null, f(m, x, b, z);
        case yr:
          return x = x.get(b.key === null ? E : b.key) || null, p(m, x, b, z);
        case vn:
          var D = b._init;
          return _(x, m, E, D(b._payload), z);
      }
      if (fl(b) || tl(b))
        return x = x.get(E) || null, y(m, x, b, z, null);
      jo(m, b);
    }
    return null;
  }
  function P(x, m, E, b) {
    for (var z = null, D = null, U = m, F = m = 0, he = null; U !== null && F < E.length; F++) {
      U.index > F ? (he = U, U = null) : he = U.sibling;
      var X = S(x, U, E[F], b);
      if (X === null) {
        U === null && (U = he);
        break;
      }
      e && U && X.alternate === null && t(x, U), m = o(X, m, F), D === null ? z = X : D.sibling = X, D = X, U = he;
    }
    if (F === E.length)
      return n(x, U), ge && Hn(x, F), z;
    if (U === null) {
      for (; F < E.length; F++)
        U = k(x, E[F], b), U !== null && (m = o(U, m, F), D === null ? z = U : D.sibling = U, D = U);
      return ge && Hn(x, F), z;
    }
    for (U = r(x, U); F < E.length; F++)
      he = _(U, x, F, E[F], b), he !== null && (e && he.alternate !== null && U.delete(he.key === null ? F : he.key), m = o(he, m, F), D === null ? z = he : D.sibling = he, D = he);
    return e && U.forEach(function(Oe) {
      return t(x, Oe);
    }), ge && Hn(x, F), z;
  }
  function w(x, m, E, b) {
    var z = tl(E);
    if (typeof z != "function")
      throw Error(O(150));
    if (E = z.call(E), E == null)
      throw Error(O(151));
    for (var D = z = null, U = m, F = m = 0, he = null, X = E.next(); U !== null && !X.done; F++, X = E.next()) {
      U.index > F ? (he = U, U = null) : he = U.sibling;
      var Oe = S(x, U, X.value, b);
      if (Oe === null) {
        U === null && (U = he);
        break;
      }
      e && U && Oe.alternate === null && t(x, U), m = o(Oe, m, F), D === null ? z = Oe : D.sibling = Oe, D = Oe, U = he;
    }
    if (X.done)
      return n(
        x,
        U
      ), ge && Hn(x, F), z;
    if (U === null) {
      for (; !X.done; F++, X = E.next())
        X = k(x, X.value, b), X !== null && (m = o(X, m, F), D === null ? z = X : D.sibling = X, D = X);
      return ge && Hn(x, F), z;
    }
    for (U = r(x, U); !X.done; F++, X = E.next())
      X = _(U, x, F, X.value, b), X !== null && (e && X.alternate !== null && U.delete(X.key === null ? F : X.key), m = o(X, m, F), D === null ? z = X : D.sibling = X, D = X);
    return e && U.forEach(function(Rt) {
      return t(x, Rt);
    }), ge && Hn(x, F), z;
  }
  function M(x, m, E, b) {
    if (typeof E == "object" && E !== null && E.type === wr && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case ho:
          e: {
            for (var z = E.key, D = m; D !== null; ) {
              if (D.key === z) {
                if (z = E.type, z === wr) {
                  if (D.tag === 7) {
                    n(x, D.sibling), m = l(D, E.props.children), m.return = x, x = m;
                    break e;
                  }
                } else if (D.elementType === z || typeof z == "object" && z !== null && z.$$typeof === vn && Of(z) === D.type) {
                  n(x, D.sibling), m = l(D, E.props), m.ref = al(x, D, E), m.return = x, x = m;
                  break e;
                }
                n(x, D);
                break;
              } else
                t(x, D);
              D = D.sibling;
            }
            E.type === wr ? (m = Kn(E.props.children, x.mode, b, E.key), m.return = x, x = m) : (b = Bo(E.type, E.key, E.props, null, x.mode, b), b.ref = al(x, m, E), b.return = x, x = b);
          }
          return i(x);
        case yr:
          e: {
            for (D = E.key; m !== null; ) {
              if (m.key === D)
                if (m.tag === 4 && m.stateNode.containerInfo === E.containerInfo && m.stateNode.implementation === E.implementation) {
                  n(x, m.sibling), m = l(m, E.children || []), m.return = x, x = m;
                  break e;
                } else {
                  n(x, m);
                  break;
                }
              else
                t(x, m);
              m = m.sibling;
            }
            m = Fi(E, x.mode, b), m.return = x, x = m;
          }
          return i(x);
        case vn:
          return D = E._init, M(x, m, D(E._payload), b);
      }
      if (fl(E))
        return P(x, m, E, b);
      if (tl(E))
        return w(x, m, E, b);
      jo(x, E);
    }
    return typeof E == "string" && E !== "" || typeof E == "number" ? (E = "" + E, m !== null && m.tag === 6 ? (n(x, m.sibling), m = l(m, E), m.return = x, x = m) : (n(x, m), m = zi(E, x.mode, b), m.return = x, x = m), i(x)) : n(x, m);
  }
  return M;
}
var Fr = $p(!0), Dp = $p(!1), Ql = {}, Vt = In(Ql), Rl = In(Ql), Ol = In(Ql);
function Gn(e) {
  if (e === Ql)
    throw Error(O(174));
  return e;
}
function pu(e, t) {
  switch (pe(Ol, t), pe(Rl, e), pe(Vt, Ql), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qi(t, e);
  }
  me(Vt), pe(Vt, t);
}
function Ar() {
  me(Vt), me(Rl), me(Ol);
}
function Lp(e) {
  Gn(Ol.current);
  var t = Gn(Vt.current), n = qi(t, e.type);
  t !== n && (pe(Rl, e), pe(Vt, n));
}
function hu(e) {
  Rl.current === e && (me(Vt), me(Rl));
}
var we = In(0);
function la(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Di = [];
function vu() {
  for (var e = 0; e < Di.length; e++)
    Di[e]._workInProgressVersionPrimary = null;
  Di.length = 0;
}
var Oo = rn.ReactCurrentDispatcher, Li = rn.ReactCurrentBatchConfig, Jn = 0, xe = null, be = null, Ie = null, oa = !1, wl = !1, Ml = 0, jy = 0;
function We() {
  throw Error(O(321));
}
function mu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!It(e[n], t[n]))
      return !1;
  return !0;
}
function gu(e, t, n, r, l, o) {
  if (Jn = o, xe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Oo.current = e === null || e.memoizedState === null ? Ty : by, e = n(r, l), wl) {
    o = 0;
    do {
      if (wl = !1, Ml = 0, 25 <= o)
        throw Error(O(301));
      o += 1, Ie = be = null, t.updateQueue = null, Oo.current = $y, e = n(r, l);
    } while (wl);
  }
  if (Oo.current = aa, t = be !== null && be.next !== null, Jn = 0, Ie = be = xe = null, oa = !1, t)
    throw Error(O(300));
  return e;
}
function yu() {
  var e = Ml !== 0;
  return Ml = 0, e;
}
function At() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ie === null ? xe.memoizedState = Ie = e : Ie = Ie.next = e, Ie;
}
function Ct() {
  if (be === null) {
    var e = xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = be.next;
  var t = Ie === null ? xe.memoizedState : Ie.next;
  if (t !== null)
    Ie = t, be = e;
  else {
    if (e === null)
      throw Error(O(310));
    be = e, e = { memoizedState: be.memoizedState, baseState: be.baseState, baseQueue: be.baseQueue, queue: be.queue, next: null }, Ie === null ? xe.memoizedState = Ie = e : Ie = Ie.next = e;
  }
  return Ie;
}
function zl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ii(e) {
  var t = Ct(), n = t.queue;
  if (n === null)
    throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = be, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, f = null, p = o;
    do {
      var y = p.lane;
      if ((Jn & y) === y)
        f !== null && (f = f.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
      else {
        var k = {
          lane: y,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null
        };
        f === null ? (u = f = k, i = r) : f = f.next = k, xe.lanes |= y, er |= y;
      }
      p = p.next;
    } while (p !== null && p !== o);
    f === null ? i = r : f.next = u, It(r, t.memoizedState) || (rt = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = f, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, xe.lanes |= o, er |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ri(e) {
  var t = Ct(), n = t.queue;
  if (n === null)
    throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    It(o, t.memoizedState) || (rt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ip() {
}
function Rp(e, t) {
  var n = xe, r = Ct(), l = t(), o = !It(r.memoizedState, l);
  if (o && (r.memoizedState = l, rt = !0), r = r.queue, wu(zp.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Ie !== null && Ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, Fl(9, Mp.bind(null, n, r, l, t), void 0, null), Re === null)
      throw Error(O(349));
    Jn & 30 || Op(n, t, l);
  }
  return l;
}
function Op(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, xe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Mp(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Fp(t) && Ap(e);
}
function zp(e, t, n) {
  return n(function() {
    Fp(t) && Ap(e);
  });
}
function Fp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !It(e, n);
  } catch {
    return !0;
  }
}
function Ap(e) {
  var t = tn(e, 1);
  t !== null && Lt(t, e, 1, -1);
}
function Mf(e) {
  var t = At();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: zl, lastRenderedState: e }, t.queue = e, e = e.dispatch = Py.bind(null, xe, e), [t.memoizedState, e];
}
function Fl(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = xe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, xe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Bp() {
  return Ct().memoizedState;
}
function Mo(e, t, n, r) {
  var l = At();
  xe.flags |= e, l.memoizedState = Fl(1 | t, n, void 0, r === void 0 ? null : r);
}
function Sa(e, t, n, r) {
  var l = Ct();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (be !== null) {
    var i = be.memoizedState;
    if (o = i.destroy, r !== null && mu(r, i.deps)) {
      l.memoizedState = Fl(t, n, o, r);
      return;
    }
  }
  xe.flags |= e, l.memoizedState = Fl(1 | t, n, o, r);
}
function zf(e, t) {
  return Mo(8390656, 8, e, t);
}
function wu(e, t) {
  return Sa(2048, 8, e, t);
}
function Up(e, t) {
  return Sa(4, 2, e, t);
}
function Vp(e, t) {
  return Sa(4, 4, e, t);
}
function Hp(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Wp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Sa(4, 4, Hp.bind(null, t, e), n);
}
function xu() {
}
function Qp(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Yp(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Gp(e, t, n) {
  return Jn & 21 ? (It(n, t) || (n = qd(), xe.lanes |= n, er |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, rt = !0), e.memoizedState = n);
}
function Ny(e, t) {
  var n = ce;
  ce = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Li.transition;
  Li.transition = {};
  try {
    e(!1), t();
  } finally {
    ce = n, Li.transition = r;
  }
}
function Xp() {
  return Ct().memoizedState;
}
function _y(e, t, n) {
  var r = Pn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Kp(e))
    qp(t, n);
  else if (n = _p(e, t, n, r), n !== null) {
    var l = qe();
    Lt(n, e, r, l), Zp(n, t, r);
  }
}
function Py(e, t, n) {
  var r = Pn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Kp(e))
    qp(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, It(u, i)) {
          var f = t.interleaved;
          f === null ? (l.next = l, fu(t)) : (l.next = f.next, f.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = _p(e, t, l, r), n !== null && (l = qe(), Lt(n, e, r, l), Zp(n, t, r));
  }
}
function Kp(e) {
  var t = e.alternate;
  return e === xe || t !== null && t === xe;
}
function qp(e, t) {
  wl = oa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Zp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, qs(e, n);
  }
}
var aa = { readContext: kt, useCallback: We, useContext: We, useEffect: We, useImperativeHandle: We, useInsertionEffect: We, useLayoutEffect: We, useMemo: We, useReducer: We, useRef: We, useState: We, useDebugValue: We, useDeferredValue: We, useTransition: We, useMutableSource: We, useSyncExternalStore: We, useId: We, unstable_isNewReconciler: !1 }, Ty = { readContext: kt, useCallback: function(e, t) {
  return At().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: kt, useEffect: zf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Mo(
    4194308,
    4,
    Hp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Mo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Mo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = At();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = At();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = _y.bind(null, xe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = At();
  return e = { current: e }, t.memoizedState = e;
}, useState: Mf, useDebugValue: xu, useDeferredValue: function(e) {
  return At().memoizedState = e;
}, useTransition: function() {
  var e = Mf(!1), t = e[0];
  return e = Ny.bind(null, e[1]), At().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = xe, l = At();
  if (ge) {
    if (n === void 0)
      throw Error(O(407));
    n = n();
  } else {
    if (n = t(), Re === null)
      throw Error(O(349));
    Jn & 30 || Op(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, zf(zp.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Fl(9, Mp.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = At(), t = Re.identifierPrefix;
  if (ge) {
    var n = qt, r = Kt;
    n = (r & ~(1 << 32 - Dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ml++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = jy++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, by = {
  readContext: kt,
  useCallback: Qp,
  useContext: kt,
  useEffect: wu,
  useImperativeHandle: Wp,
  useInsertionEffect: Up,
  useLayoutEffect: Vp,
  useMemo: Yp,
  useReducer: Ii,
  useRef: Bp,
  useState: function() {
    return Ii(zl);
  },
  useDebugValue: xu,
  useDeferredValue: function(e) {
    var t = Ct();
    return Gp(t, be.memoizedState, e);
  },
  useTransition: function() {
    var e = Ii(zl)[0], t = Ct().memoizedState;
    return [e, t];
  },
  useMutableSource: Ip,
  useSyncExternalStore: Rp,
  useId: Xp,
  unstable_isNewReconciler: !1
}, $y = { readContext: kt, useCallback: Qp, useContext: kt, useEffect: wu, useImperativeHandle: Wp, useInsertionEffect: Up, useLayoutEffect: Vp, useMemo: Yp, useReducer: Ri, useRef: Bp, useState: function() {
  return Ri(zl);
}, useDebugValue: xu, useDeferredValue: function(e) {
  var t = Ct();
  return be === null ? t.memoizedState = e : Gp(t, be.memoizedState, e);
}, useTransition: function() {
  var e = Ri(zl)[0], t = Ct().memoizedState;
  return [e, t];
}, useMutableSource: Ip, useSyncExternalStore: Rp, useId: Xp, unstable_isNewReconciler: !1 };
function Br(e, t) {
  try {
    var n = "", r = t;
    do
      n += o1(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Oi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Dy = typeof WeakMap == "function" ? WeakMap : Map;
function Jp(e, t, n) {
  n = Zt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    sa || (sa = !0, bs = r), xs(e, t);
  }, n;
}
function eh(e, t, n) {
  n = Zt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      xs(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    xs(e, t), typeof r != "function" && (_n === null ? _n = /* @__PURE__ */ new Set([this]) : _n.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Ff(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Dy();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Qy.bind(null, e, t, n), t.then(e, e));
}
function Af(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bf(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Zt(-1, 1), t.tag = 2, Nn(n, t, 1))), n.lanes |= 1), e);
}
var Ly = rn.ReactCurrentOwner, rt = !1;
function Ke(e, t, n, r) {
  t.child = e === null ? Dp(t, null, n, r) : Fr(t, e.child, n, r);
}
function Uf(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Ir(t, l), r = gu(e, t, n, r, o, l), n = yu(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nn(e, t, l)) : (ge && n && ou(t), t.flags |= 1, Ke(e, t, r, l), t.child);
}
function Vf(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Pu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, th(e, t, o, r, l)) : (e = Bo(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $l, n(i, r) && e.ref === t.ref)
      return nn(e, t, l);
  }
  return t.flags |= 1, e = Tn(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function th(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($l(o, r) && e.ref === t.ref)
      if (rt = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (rt = !0);
      else
        return t.lanes = e.lanes, nn(e, t, l);
  }
  return ks(e, t, n, r, l);
}
function nh(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, pe(Tr, ut), ut |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, pe(Tr, ut), ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, pe(Tr, ut), ut |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, pe(Tr, ut), ut |= r;
  return Ke(e, t, l, n), t.child;
}
function rh(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ks(e, t, n, r, l) {
  var o = ot(n) ? qn : Ge.current;
  return o = Mr(t, o), Ir(t, l), n = gu(e, t, n, r, o, l), r = yu(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, nn(e, t, l)) : (ge && r && ou(t), t.flags |= 1, Ke(e, t, n, l), t.child);
}
function Hf(e, t, n, r, l) {
  if (ot(n)) {
    var o = !0;
    Zo(t);
  } else
    o = !1;
  if (Ir(t, l), t.stateNode === null)
    zo(e, t), bp(t, n, r), ws(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var f = i.context, p = n.contextType;
    typeof p == "object" && p !== null ? p = kt(p) : (p = ot(n) ? qn : Ge.current, p = Mr(t, p));
    var y = n.getDerivedStateFromProps, k = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    k || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || f !== p) && Rf(t, i, r, p), mn = !1;
    var S = t.memoizedState;
    i.state = S, ra(t, r, i, l), f = t.memoizedState, u !== r || S !== f || lt.current || mn ? (typeof y == "function" && (ys(t, n, y, r), f = t.memoizedState), (u = mn || If(t, n, u, r, S, f, p)) ? (k || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = f), i.props = r, i.state = f, i.context = p, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Pp(e, t), u = t.memoizedProps, p = t.type === t.elementType ? u : Tt(t.type, u), i.props = p, k = t.pendingProps, S = i.context, f = n.contextType, typeof f == "object" && f !== null ? f = kt(f) : (f = ot(n) ? qn : Ge.current, f = Mr(t, f));
    var _ = n.getDerivedStateFromProps;
    (y = typeof _ == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== k || S !== f) && Rf(t, i, r, f), mn = !1, S = t.memoizedState, i.state = S, ra(t, r, i, l);
    var P = t.memoizedState;
    u !== k || S !== P || lt.current || mn ? (typeof _ == "function" && (ys(t, n, _, r), P = t.memoizedState), (p = mn || If(t, n, p, r, S, P, f) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, P, f), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, P, f)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = P), i.props = r, i.state = P, i.context = f, r = p) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Cs(e, t, n, r, o, l);
}
function Cs(e, t, n, r, l, o) {
  rh(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Tf(t, n, !1), nn(e, t, o);
  r = t.stateNode, Ly.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Fr(t, e.child, null, o), t.child = Fr(t, null, u, o)) : Ke(e, t, u, o), t.memoizedState = r.state, l && Tf(t, n, !0), t.child;
}
function lh(e) {
  var t = e.stateNode;
  t.pendingContext ? Pf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pf(e, t.context, !1), pu(e, t.containerInfo);
}
function Wf(e, t, n, r, l) {
  return zr(), iu(l), t.flags |= 256, Ke(e, t, n, r), t.child;
}
var Ss = { dehydrated: null, treeContext: null, retryLane: 0 };
function Es(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function oh(e, t, n) {
  var r = t.pendingProps, l = we.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), pe(we, l & 1), e === null)
    return ms(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Na(i, r, 0, null), e = Kn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Es(n), t.memoizedState = Ss, e) : ku(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Iy(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var f = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = f, t.deletions = null) : (r = Tn(l, f), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Tn(u, o) : (o = Kn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Es(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ss, r;
  }
  return o = e.child, e = o.sibling, r = Tn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ku(e, t) {
  return t = Na({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function No(e, t, n, r) {
  return r !== null && iu(r), Fr(t, e.child, null, n), e = ku(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Iy(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Oi(Error(O(422))), No(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Na({ mode: "visible", children: r.children }, l, 0, null), o = Kn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Fr(t, e.child, null, i), t.child.memoizedState = Es(i), t.memoizedState = Ss, o);
  if (!(t.mode & 1))
    return No(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(O(419)), r = Oi(o, r, void 0), No(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, rt || u) {
    if (r = Re, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, tn(e, l), Lt(r, e, l, -1));
    }
    return _u(), r = Oi(Error(O(421))), No(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Yy.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ct = jn(l.nextSibling), ft = t, ge = !0, $t = null, e !== null && (gt[yt++] = Kt, gt[yt++] = qt, gt[yt++] = Zn, Kt = e.id, qt = e.overflow, Zn = t), t = ku(t, r.children), t.flags |= 4096, t);
}
function Qf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), gs(e.return, t, n);
}
function Mi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function ah(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (Ke(e, t, r.children, n), r = we.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Qf(e, n, t);
          else if (e.tag === 19)
            Qf(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (pe(we, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && la(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Mi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && la(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Mi(t, !0, n, null, o);
        break;
      case "together":
        Mi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function nn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), er |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Tn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ry(e, t, n) {
  switch (t.tag) {
    case 3:
      lh(t), zr();
      break;
    case 5:
      Lp(t);
      break;
    case 1:
      ot(t.type) && Zo(t);
      break;
    case 4:
      pu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      pe(ta, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (pe(we, we.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? oh(e, t, n) : (pe(we, we.current & 1), e = nn(e, t, n), e !== null ? e.sibling : null);
      pe(we, we.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return ah(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), pe(we, we.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, nh(e, t, n);
  }
  return nn(e, t, n);
}
var ih, js, sh, uh;
ih = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
js = function() {
};
sh = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Gn(Vt.current);
    var o = null;
    switch (n) {
      case "input":
        l = Yi(e, l), r = Yi(e, r), o = [];
        break;
      case "select":
        l = ke({}, l, { value: void 0 }), r = ke({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Ki(e, l), r = Ki(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ko);
    }
    Zi(n, r);
    var i;
    n = null;
    for (p in l)
      if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
        if (p === "style") {
          var u = l[p];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (El.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
    for (p in r) {
      var f = r[p];
      if (u = l != null ? l[p] : void 0, r.hasOwnProperty(p) && f !== u && (f != null || u != null))
        if (p === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || f && f.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in f)
              f.hasOwnProperty(i) && u[i] !== f[i] && (n || (n = {}), n[i] = f[i]);
          } else
            n || (o || (o = []), o.push(
              p,
              n
            )), n = f;
        else
          p === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, u = u ? u.__html : void 0, f != null && u !== f && (o = o || []).push(p, f)) : p === "children" ? typeof f != "string" && typeof f != "number" || (o = o || []).push(p, "" + f) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (El.hasOwnProperty(p) ? (f != null && p === "onScroll" && ve("scroll", e), o || u === f || (o = [])) : (o = o || []).push(p, f));
    }
    n && (o = o || []).push("style", n);
    var p = o;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
uh = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function il(e, t) {
  if (!ge)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function Qe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Oy(e, t, n) {
  var r = t.pendingProps;
  switch (au(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Qe(t), null;
    case 1:
      return ot(t.type) && qo(), Qe(t), null;
    case 3:
      return r = t.stateNode, Ar(), me(lt), me(Ge), vu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Eo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $t !== null && (Ls($t), $t = null))), js(e, t), Qe(t), null;
    case 5:
      hu(t);
      var l = Gn(Ol.current);
      if (n = t.type, e !== null && t.stateNode != null)
        sh(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(O(166));
          return Qe(t), null;
        }
        if (e = Gn(Vt.current), Eo(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Bt] = t, r[Il] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ve("cancel", r), ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ve("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < pl.length; l++)
                ve(pl[l], r);
              break;
            case "source":
              ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ve(
                "error",
                r
              ), ve("load", r);
              break;
            case "details":
              ve("toggle", r);
              break;
            case "input":
              ef(r, o), ve("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, ve("invalid", r);
              break;
            case "textarea":
              nf(r, o), ve("invalid", r);
          }
          Zi(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && So(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && So(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : El.hasOwnProperty(i) && u != null && i === "onScroll" && ve("scroll", r);
            }
          switch (n) {
            case "input":
              vo(r), tf(r, o, !0);
              break;
            case "textarea":
              vo(r), rf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ko);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Od(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Bt] = t, e[Il] = r, ih(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ji(n, r), n) {
              case "dialog":
                ve("cancel", e), ve("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < pl.length; l++)
                  ve(pl[l], e);
                l = r;
                break;
              case "source":
                ve("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                ve(
                  "error",
                  e
                ), ve("load", e), l = r;
                break;
              case "details":
                ve("toggle", e), l = r;
                break;
              case "input":
                ef(e, r), l = Yi(e, r), ve("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ke({}, r, { value: void 0 }), ve("invalid", e);
                break;
              case "textarea":
                nf(e, r), l = Ki(e, r), ve("invalid", e);
                break;
              default:
                l = r;
            }
            Zi(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var f = u[o];
                o === "style" ? Fd(e, f) : o === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, f != null && Md(e, f)) : o === "children" ? typeof f == "string" ? (n !== "textarea" || f !== "") && jl(e, f) : typeof f == "number" && jl(e, "" + f) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (El.hasOwnProperty(o) ? f != null && o === "onScroll" && ve("scroll", e) : f != null && Ws(e, o, f, i));
              }
            switch (n) {
              case "input":
                vo(e), tf(e, r, !1);
                break;
              case "textarea":
                vo(e), rf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $n(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? br(e, !!r.multiple, o, !1) : r.defaultValue != null && br(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ko);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Qe(t), null;
    case 6:
      if (e && t.stateNode != null)
        uh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(O(166));
        if (n = Gn(Ol.current), Gn(Vt.current), Eo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Bt] = t, (o = r.nodeValue !== n) && (e = ft, e !== null))
            switch (e.tag) {
              case 3:
                So(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && So(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Bt] = t, t.stateNode = r;
      }
      return Qe(t), null;
    case 13:
      if (me(we), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ge && ct !== null && t.mode & 1 && !(t.flags & 128))
          Np(), zr(), t.flags |= 98560, o = !1;
        else if (o = Eo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(O(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(O(317));
            o[Bt] = t;
          } else
            zr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Qe(t), o = !1;
        } else
          $t !== null && (Ls($t), $t = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || we.current & 1 ? $e === 0 && ($e = 3) : _u())), t.updateQueue !== null && (t.flags |= 4), Qe(t), null);
    case 4:
      return Ar(), js(e, t), e === null && Dl(t.stateNode.containerInfo), Qe(t), null;
    case 10:
      return cu(t.type._context), Qe(t), null;
    case 17:
      return ot(t.type) && qo(), Qe(t), null;
    case 19:
      if (me(we), o = t.memoizedState, o === null)
        return Qe(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          il(o, !1);
        else {
          if ($e !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = la(e), i !== null) {
                for (t.flags |= 128, il(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return pe(we, we.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && Ee() > Ur && (t.flags |= 128, r = !0, il(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = la(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), il(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !ge)
              return Qe(t), null;
          } else
            2 * Ee() - o.renderingStartTime > Ur && n !== 1073741824 && (t.flags |= 128, r = !0, il(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ee(), t.sibling = null, n = we.current, pe(we, r ? n & 1 | 2 : n & 1), t) : (Qe(t), null);
    case 22:
    case 23:
      return Nu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ut & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function My(e, t) {
  switch (au(t), t.tag) {
    case 1:
      return ot(t.type) && qo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ar(), me(lt), me(Ge), vu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return hu(t), null;
    case 13:
      if (me(we), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(O(340));
        zr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return me(we), null;
    case 4:
      return Ar(), null;
    case 10:
      return cu(t.type._context), null;
    case 22:
    case 23:
      return Nu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _o = !1, Ye = !1, zy = typeof WeakSet == "function" ? WeakSet : Set, H = null;
function Pr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ce(e, t, r);
      }
    else
      n.current = null;
}
function Ns(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var Yf = !1;
function Fy(e, t) {
  if (us = Yo, e = pp(), lu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, f = -1, p = 0, y = 0, k = e, S = null;
          t:
            for (; ; ) {
              for (var _; k !== n || l !== 0 && k.nodeType !== 3 || (u = i + l), k !== o || r !== 0 && k.nodeType !== 3 || (f = i + r), k.nodeType === 3 && (i += k.nodeValue.length), (_ = k.firstChild) !== null; )
                S = k, k = _;
              for (; ; ) {
                if (k === e)
                  break t;
                if (S === n && ++p === l && (u = i), S === o && ++y === r && (f = i), (_ = k.nextSibling) !== null)
                  break;
                k = S, S = k.parentNode;
              }
              k = _;
            }
          n = u === -1 || f === -1 ? null : { start: u, end: f };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (cs = { focusedElem: e, selectionRange: n }, Yo = !1, H = t; H !== null; )
    if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, H = e;
    else
      for (; H !== null; ) {
        t = H;
        try {
          var P = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (P !== null) {
                  var w = P.memoizedProps, M = P.memoizedState, x = t.stateNode, m = x.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Tt(t.type, w), M);
                  x.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var E = t.stateNode.containerInfo;
                E.nodeType === 1 ? E.textContent = "" : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (b) {
          Ce(t, t.return, b);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, H = e;
          break;
        }
        H = t.return;
      }
  return P = Yf, Yf = !1, P;
}
function xl(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Ns(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ea(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function _s(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function ch(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ch(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Bt], delete t[Il], delete t[ps], delete t[ky], delete t[Cy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function fh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gf(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || fh(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Ps(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ko));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ps(e, t, n), e = e.sibling; e !== null; )
      Ps(e, t, n), e = e.sibling;
}
function Ts(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ts(e, t, n), e = e.sibling; e !== null; )
      Ts(e, t, n), e = e.sibling;
}
var Ae = null, bt = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; )
    dh(e, t, n), n = n.sibling;
}
function dh(e, t, n) {
  if (Ut && typeof Ut.onCommitFiberUnmount == "function")
    try {
      Ut.onCommitFiberUnmount(ma, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ye || Pr(n, t);
    case 6:
      var r = Ae, l = bt;
      Ae = null, hn(e, t, n), Ae = r, bt = l, Ae !== null && (bt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null && (bt ? (e = Ae, n = n.stateNode, e.nodeType === 8 ? bi(e.parentNode, n) : e.nodeType === 1 && bi(e, n), Tl(e)) : bi(Ae, n.stateNode));
      break;
    case 4:
      r = Ae, l = bt, Ae = n.stateNode.containerInfo, bt = !0, hn(e, t, n), Ae = r, bt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ns(n, t, i), l = l.next;
        } while (l !== r);
      }
      hn(e, t, n);
      break;
    case 1:
      if (!Ye && (Pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          Ce(n, t, u);
        }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ye = (r = Ye) || n.memoizedState !== null, hn(e, t, n), Ye = r) : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
  }
}
function Xf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zy()), t.forEach(function(r) {
      var l = Gy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function _t(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                Ae = u.stateNode, bt = !1;
                break e;
              case 3:
                Ae = u.stateNode.containerInfo, bt = !0;
                break e;
              case 4:
                Ae = u.stateNode.containerInfo, bt = !0;
                break e;
            }
            u = u.return;
          }
        if (Ae === null)
          throw Error(O(160));
        dh(o, i, l), Ae = null, bt = !1;
        var f = l.alternate;
        f !== null && (f.return = null), l.return = null;
      } catch (p) {
        Ce(l, t, p);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      ph(t, e), t = t.sibling;
}
function ph(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (_t(t, e), Ft(e), r & 4) {
        try {
          xl(3, e, e.return), Ea(3, e);
        } catch (w) {
          Ce(e, e.return, w);
        }
        try {
          xl(5, e, e.return);
        } catch (w) {
          Ce(e, e.return, w);
        }
      }
      break;
    case 1:
      _t(t, e), Ft(e), r & 512 && n !== null && Pr(n, n.return);
      break;
    case 5:
      if (_t(t, e), Ft(e), r & 512 && n !== null && Pr(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          jl(l, "");
        } catch (w) {
          Ce(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, f = e.updateQueue;
        if (e.updateQueue = null, f !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Id(l, o), Ji(u, i);
            var p = Ji(u, o);
            for (i = 0; i < f.length; i += 2) {
              var y = f[i], k = f[i + 1];
              y === "style" ? Fd(l, k) : y === "dangerouslySetInnerHTML" ? Md(l, k) : y === "children" ? jl(l, k) : Ws(l, y, k, p);
            }
            switch (u) {
              case "input":
                Gi(l, o);
                break;
              case "textarea":
                Rd(l, o);
                break;
              case "select":
                var S = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var _ = o.value;
                _ != null ? br(l, !!o.multiple, _, !1) : S !== !!o.multiple && (o.defaultValue != null ? br(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : br(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Il] = o;
          } catch (w) {
            Ce(e, e.return, w);
          }
      }
      break;
    case 6:
      if (_t(t, e), Ft(e), r & 4) {
        if (e.stateNode === null)
          throw Error(O(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (w) {
          Ce(e, e.return, w);
        }
      }
      break;
    case 3:
      if (_t(t, e), Ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Tl(t.containerInfo);
        } catch (w) {
          Ce(e, e.return, w);
        }
      break;
    case 4:
      _t(t, e), Ft(e);
      break;
    case 13:
      _t(t, e), Ft(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Eu = Ee())), r & 4 && Xf(e);
      break;
    case 22:
      if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ye = (p = Ye) || y, _t(t, e), Ye = p) : _t(t, e), Ft(e), r & 8192) {
        if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1)
          for (H = e, y = e.child; y !== null; ) {
            for (k = H = y; H !== null; ) {
              switch (S = H, _ = S.child, S.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xl(4, S, S.return);
                  break;
                case 1:
                  Pr(S, S.return);
                  var P = S.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    r = S, n = S.return;
                    try {
                      t = r, P.props = t.memoizedProps, P.state = t.memoizedState, P.componentWillUnmount();
                    } catch (w) {
                      Ce(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Pr(S, S.return);
                  break;
                case 22:
                  if (S.memoizedState !== null) {
                    qf(k);
                    continue;
                  }
              }
              _ !== null ? (_.return = S, H = _) : qf(k);
            }
            y = y.sibling;
          }
        e:
          for (y = null, k = e; ; ) {
            if (k.tag === 5) {
              if (y === null) {
                y = k;
                try {
                  l = k.stateNode, p ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = k.stateNode, f = k.memoizedProps.style, i = f != null && f.hasOwnProperty("display") ? f.display : null, u.style.display = zd("display", i));
                } catch (w) {
                  Ce(e, e.return, w);
                }
              }
            } else if (k.tag === 6) {
              if (y === null)
                try {
                  k.stateNode.nodeValue = p ? "" : k.memoizedProps;
                } catch (w) {
                  Ce(e, e.return, w);
                }
            } else if ((k.tag !== 22 && k.tag !== 23 || k.memoizedState === null || k === e) && k.child !== null) {
              k.child.return = k, k = k.child;
              continue;
            }
            if (k === e)
              break e;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === e)
                break e;
              y === k && (y = null), k = k.return;
            }
            y === k && (y = null), k.sibling.return = k.return, k = k.sibling;
          }
      }
      break;
    case 19:
      _t(t, e), Ft(e), r & 4 && Xf(e);
      break;
    case 21:
      break;
    default:
      _t(
        t,
        e
      ), Ft(e);
  }
}
function Ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (fh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (jl(l, ""), r.flags &= -33);
          var o = Gf(e);
          Ts(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Gf(e);
          Ps(e, u, i);
          break;
        default:
          throw Error(O(161));
      }
    } catch (f) {
      Ce(e, e.return, f);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ay(e, t, n) {
  H = e, hh(e);
}
function hh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null; ) {
    var l = H, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || _o;
      if (!i) {
        var u = l.alternate, f = u !== null && u.memoizedState !== null || Ye;
        u = _o;
        var p = Ye;
        if (_o = i, (Ye = f) && !p)
          for (H = l; H !== null; )
            i = H, f = i.child, i.tag === 22 && i.memoizedState !== null ? Zf(l) : f !== null ? (f.return = i, H = f) : Zf(l);
        for (; o !== null; )
          H = o, hh(o), o = o.sibling;
        H = l, _o = u, Ye = p;
      }
      Kf(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, H = o) : Kf(e);
  }
}
function Kf(e) {
  for (; H !== null; ) {
    var t = H;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ye || Ea(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ye)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Lf(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Lf(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var f = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    f.autoFocus && n.focus();
                    break;
                  case "img":
                    f.src && (n.src = f.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var p = t.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var k = y.dehydrated;
                    k !== null && Tl(k);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Ye || t.flags & 512 && _s(t);
      } catch (S) {
        Ce(t, t.return, S);
      }
    }
    if (t === e) {
      H = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, H = n;
      break;
    }
    H = t.return;
  }
}
function qf(e) {
  for (; H !== null; ) {
    var t = H;
    if (t === e) {
      H = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, H = n;
      break;
    }
    H = t.return;
  }
}
function Zf(e) {
  for (; H !== null; ) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ea(4, t);
          } catch (f) {
            Ce(t, n, f);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (f) {
              Ce(t, l, f);
            }
          }
          var o = t.return;
          try {
            _s(t);
          } catch (f) {
            Ce(t, o, f);
          }
          break;
        case 5:
          var i = t.return;
          try {
            _s(t);
          } catch (f) {
            Ce(t, i, f);
          }
      }
    } catch (f) {
      Ce(t, t.return, f);
    }
    if (t === e) {
      H = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, H = u;
      break;
    }
    H = t.return;
  }
}
var By = Math.ceil, ia = rn.ReactCurrentDispatcher, Cu = rn.ReactCurrentOwner, xt = rn.ReactCurrentBatchConfig, oe = 0, Re = null, _e = null, Be = 0, ut = 0, Tr = In(0), $e = 0, Al = null, er = 0, ja = 0, Su = 0, kl = null, nt = null, Eu = 0, Ur = 1 / 0, Gt = null, sa = !1, bs = null, _n = null, Po = !1, xn = null, ua = 0, Cl = 0, $s = null, Fo = -1, Ao = 0;
function qe() {
  return oe & 6 ? Ee() : Fo !== -1 ? Fo : Fo = Ee();
}
function Pn(e) {
  return e.mode & 1 ? oe & 2 && Be !== 0 ? Be & -Be : Ey.transition !== null ? (Ao === 0 && (Ao = qd()), Ao) : (e = ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : lp(e.type)), e) : 1;
}
function Lt(e, t, n, r) {
  if (50 < Cl)
    throw Cl = 0, $s = null, Error(O(185));
  Vl(e, n, r), (!(oe & 2) || e !== Re) && (e === Re && (!(oe & 2) && (ja |= n), $e === 4 && yn(e, Be)), at(e, r), n === 1 && oe === 0 && !(t.mode & 1) && (Ur = Ee() + 500, ka && Rn()));
}
function at(e, t) {
  var n = e.callbackNode;
  E1(e, t);
  var r = Qo(e, e === Re ? Be : 0);
  if (r === 0)
    n !== null && af(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && af(n), t === 1)
      e.tag === 0 ? Sy(Jf.bind(null, e)) : Sp(Jf.bind(null, e)), wy(function() {
        !(oe & 6) && Rn();
      }), n = null;
    else {
      switch (Zd(r)) {
        case 1:
          n = Ks;
          break;
        case 4:
          n = Xd;
          break;
        case 16:
          n = Wo;
          break;
        case 536870912:
          n = Kd;
          break;
        default:
          n = Wo;
      }
      n = Ch(n, vh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function vh(e, t) {
  if (Fo = -1, Ao = 0, oe & 6)
    throw Error(O(327));
  var n = e.callbackNode;
  if (Rr() && e.callbackNode !== n)
    return null;
  var r = Qo(e, e === Re ? Be : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = ca(e, r);
  else {
    t = r;
    var l = oe;
    oe |= 2;
    var o = gh();
    (Re !== e || Be !== t) && (Gt = null, Ur = Ee() + 500, Xn(e, t));
    do
      try {
        Hy();
        break;
      } catch (u) {
        mh(e, u);
      }
    while (!0);
    uu(), ia.current = o, oe = l, _e !== null ? t = 0 : (Re = null, Be = 0, t = $e);
  }
  if (t !== 0) {
    if (t === 2 && (l = ls(e), l !== 0 && (r = l, t = Ds(e, l))), t === 1)
      throw n = Al, Xn(e, 0), yn(e, r), at(e, Ee()), n;
    if (t === 6)
      yn(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Uy(l) && (t = ca(e, r), t === 2 && (o = ls(e), o !== 0 && (r = o, t = Ds(e, o))), t === 1))
        throw n = Al, Xn(e, 0), yn(e, r), at(e, Ee()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Wn(e, nt, Gt);
          break;
        case 3:
          if (yn(e, r), (r & 130023424) === r && (t = Eu + 500 - Ee(), 10 < t)) {
            if (Qo(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              qe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ds(Wn.bind(null, e, nt, Gt), t);
            break;
          }
          Wn(e, nt, Gt);
          break;
        case 4:
          if (yn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Dt(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * By(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ds(Wn.bind(null, e, nt, Gt), r);
            break;
          }
          Wn(e, nt, Gt);
          break;
        case 5:
          Wn(e, nt, Gt);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return at(e, Ee()), e.callbackNode === n ? vh.bind(null, e) : null;
}
function Ds(e, t) {
  var n = kl;
  return e.current.memoizedState.isDehydrated && (Xn(e, t).flags |= 256), e = ca(e, t), e !== 2 && (t = nt, nt = n, t !== null && Ls(t)), e;
}
function Ls(e) {
  nt === null ? nt = e : nt.push.apply(nt, e);
}
function Uy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!It(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function yn(e, t) {
  for (t &= ~Su, t &= ~ja, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Dt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Jf(e) {
  if (oe & 6)
    throw Error(O(327));
  Rr();
  var t = Qo(e, 0);
  if (!(t & 1))
    return at(e, Ee()), null;
  var n = ca(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ls(e);
    r !== 0 && (t = r, n = Ds(e, r));
  }
  if (n === 1)
    throw n = Al, Xn(e, 0), yn(e, t), at(e, Ee()), n;
  if (n === 6)
    throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wn(e, nt, Gt), at(e, Ee()), null;
}
function ju(e, t) {
  var n = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    oe = n, oe === 0 && (Ur = Ee() + 500, ka && Rn());
  }
}
function tr(e) {
  xn !== null && xn.tag === 0 && !(oe & 6) && Rr();
  var t = oe;
  oe |= 1;
  var n = xt.transition, r = ce;
  try {
    if (xt.transition = null, ce = 1, e)
      return e();
  } finally {
    ce = r, xt.transition = n, oe = t, !(oe & 6) && Rn();
  }
}
function Nu() {
  ut = Tr.current, me(Tr);
}
function Xn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, yy(n)), _e !== null)
    for (n = _e.return; n !== null; ) {
      var r = n;
      switch (au(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && qo();
          break;
        case 3:
          Ar(), me(lt), me(Ge), vu();
          break;
        case 5:
          hu(r);
          break;
        case 4:
          Ar();
          break;
        case 13:
          me(we);
          break;
        case 19:
          me(we);
          break;
        case 10:
          cu(r.type._context);
          break;
        case 22:
        case 23:
          Nu();
      }
      n = n.return;
    }
  if (Re = e, _e = e = Tn(e.current, null), Be = ut = t, $e = 0, Al = null, Su = ja = er = 0, nt = kl = null, Yn !== null) {
    for (t = 0; t < Yn.length; t++)
      if (n = Yn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    Yn = null;
  }
  return e;
}
function mh(e, t) {
  do {
    var n = _e;
    try {
      if (uu(), Oo.current = aa, oa) {
        for (var r = xe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        oa = !1;
      }
      if (Jn = 0, Ie = be = xe = null, wl = !1, Ml = 0, Cu.current = null, n === null || n.return === null) {
        $e = 1, Al = t, _e = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, f = t;
        if (t = Be, u.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
          var p = f, y = u, k = y.tag;
          if (!(y.mode & 1) && (k === 0 || k === 11 || k === 15)) {
            var S = y.alternate;
            S ? (y.updateQueue = S.updateQueue, y.memoizedState = S.memoizedState, y.lanes = S.lanes) : (y.updateQueue = null, y.memoizedState = null);
          }
          var _ = Af(i);
          if (_ !== null) {
            _.flags &= -257, Bf(_, i, u, o, t), _.mode & 1 && Ff(o, p, t), t = _, f = p;
            var P = t.updateQueue;
            if (P === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(f), t.updateQueue = w;
            } else
              P.add(f);
            break e;
          } else {
            if (!(t & 1)) {
              Ff(o, p, t), _u();
              break e;
            }
            f = Error(O(426));
          }
        } else if (ge && u.mode & 1) {
          var M = Af(i);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256), Bf(M, i, u, o, t), iu(Br(f, u));
            break e;
          }
        }
        o = f = Br(f, u), $e !== 4 && ($e = 2), kl === null ? kl = [o] : kl.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var x = Jp(o, f, t);
              Df(o, x);
              break e;
            case 1:
              u = f;
              var m = o.type, E = o.stateNode;
              if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || E !== null && typeof E.componentDidCatch == "function" && (_n === null || !_n.has(E)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var b = eh(o, u, t);
                Df(o, b);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      wh(n);
    } catch (z) {
      t = z, _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function gh() {
  var e = ia.current;
  return ia.current = aa, e === null ? aa : e;
}
function _u() {
  ($e === 0 || $e === 3 || $e === 2) && ($e = 4), Re === null || !(er & 268435455) && !(ja & 268435455) || yn(Re, Be);
}
function ca(e, t) {
  var n = oe;
  oe |= 2;
  var r = gh();
  (Re !== e || Be !== t) && (Gt = null, Xn(e, t));
  do
    try {
      Vy();
      break;
    } catch (l) {
      mh(e, l);
    }
  while (!0);
  if (uu(), oe = n, ia.current = r, _e !== null)
    throw Error(O(261));
  return Re = null, Be = 0, $e;
}
function Vy() {
  for (; _e !== null; )
    yh(_e);
}
function Hy() {
  for (; _e !== null && !v1(); )
    yh(_e);
}
function yh(e) {
  var t = kh(e.alternate, e, ut);
  e.memoizedProps = e.pendingProps, t === null ? wh(e) : _e = t, Cu.current = null;
}
function wh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = My(n, t), n !== null) {
        n.flags &= 32767, _e = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        $e = 6, _e = null;
        return;
      }
    } else if (n = Oy(n, t, ut), n !== null) {
      _e = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  $e === 0 && ($e = 5);
}
function Wn(e, t, n) {
  var r = ce, l = xt.transition;
  try {
    xt.transition = null, ce = 1, Wy(e, t, n, r);
  } finally {
    xt.transition = l, ce = r;
  }
  return null;
}
function Wy(e, t, n, r) {
  do
    Rr();
  while (xn !== null);
  if (oe & 6)
    throw Error(O(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (j1(e, o), e === Re && (_e = Re = null, Be = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Po || (Po = !0, Ch(Wo, function() {
    return Rr(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = xt.transition, xt.transition = null;
    var i = ce;
    ce = 1;
    var u = oe;
    oe |= 4, Cu.current = null, Fy(e, n), ph(n, e), fy(cs), Yo = !!us, cs = us = null, e.current = n, Ay(n), m1(), oe = u, ce = i, xt.transition = o;
  } else
    e.current = n;
  if (Po && (Po = !1, xn = e, ua = l), o = e.pendingLanes, o === 0 && (_n = null), w1(n.stateNode), at(e, Ee()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (sa)
    throw sa = !1, e = bs, bs = null, e;
  return ua & 1 && e.tag !== 0 && Rr(), o = e.pendingLanes, o & 1 ? e === $s ? Cl++ : (Cl = 0, $s = e) : Cl = 0, Rn(), null;
}
function Rr() {
  if (xn !== null) {
    var e = Zd(ua), t = xt.transition, n = ce;
    try {
      if (xt.transition = null, ce = 16 > e ? 16 : e, xn === null)
        var r = !1;
      else {
        if (e = xn, xn = null, ua = 0, oe & 6)
          throw Error(O(331));
        var l = oe;
        for (oe |= 4, H = e.current; H !== null; ) {
          var o = H, i = o.child;
          if (H.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var f = 0; f < u.length; f++) {
                var p = u[f];
                for (H = p; H !== null; ) {
                  var y = H;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xl(8, y, o);
                  }
                  var k = y.child;
                  if (k !== null)
                    k.return = y, H = k;
                  else
                    for (; H !== null; ) {
                      y = H;
                      var S = y.sibling, _ = y.return;
                      if (ch(y), y === p) {
                        H = null;
                        break;
                      }
                      if (S !== null) {
                        S.return = _, H = S;
                        break;
                      }
                      H = _;
                    }
                }
              }
              var P = o.alternate;
              if (P !== null) {
                var w = P.child;
                if (w !== null) {
                  P.child = null;
                  do {
                    var M = w.sibling;
                    w.sibling = null, w = M;
                  } while (w !== null);
                }
              }
              H = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, H = i;
          else
            e:
              for (; H !== null; ) {
                if (o = H, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xl(9, o, o.return);
                  }
                var x = o.sibling;
                if (x !== null) {
                  x.return = o.return, H = x;
                  break e;
                }
                H = o.return;
              }
        }
        var m = e.current;
        for (H = m; H !== null; ) {
          i = H;
          var E = i.child;
          if (i.subtreeFlags & 2064 && E !== null)
            E.return = i, H = E;
          else
            e:
              for (i = m; H !== null; ) {
                if (u = H, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ea(9, u);
                    }
                  } catch (z) {
                    Ce(u, u.return, z);
                  }
                if (u === i) {
                  H = null;
                  break e;
                }
                var b = u.sibling;
                if (b !== null) {
                  b.return = u.return, H = b;
                  break e;
                }
                H = u.return;
              }
        }
        if (oe = l, Rn(), Ut && typeof Ut.onPostCommitFiberRoot == "function")
          try {
            Ut.onPostCommitFiberRoot(ma, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      ce = n, xt.transition = t;
    }
  }
  return !1;
}
function ed(e, t, n) {
  t = Br(n, t), t = Jp(e, t, 1), e = Nn(e, t, 1), t = qe(), e !== null && (Vl(e, 1, t), at(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3)
    ed(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ed(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_n === null || !_n.has(r))) {
          e = Br(n, e), e = eh(t, e, 1), t = Nn(t, e, 1), e = qe(), t !== null && (Vl(t, 1, e), at(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Qy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = qe(), e.pingedLanes |= e.suspendedLanes & n, Re === e && (Be & n) === n && ($e === 4 || $e === 3 && (Be & 130023424) === Be && 500 > Ee() - Eu ? Xn(e, 0) : Su |= n), at(e, t);
}
function xh(e, t) {
  t === 0 && (e.mode & 1 ? (t = yo, yo <<= 1, !(yo & 130023424) && (yo = 4194304)) : t = 1);
  var n = qe();
  e = tn(e, t), e !== null && (Vl(e, t, n), at(e, n));
}
function Yy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), xh(e, n);
}
function Gy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), xh(e, n);
}
var kh;
kh = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || lt.current)
      rt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return rt = !1, Ry(e, t, n);
      rt = !!(e.flags & 131072);
    }
  else
    rt = !1, ge && t.flags & 1048576 && Ep(t, ea, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zo(e, t), e = t.pendingProps;
      var l = Mr(t, Ge.current);
      Ir(t, n), l = gu(null, t, r, e, l, n);
      var o = yu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ot(r) ? (o = !0, Zo(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, du(t), l.updater = Ca, t.stateNode = l, l._reactInternals = t, ws(t, r, e, n), t = Cs(null, t, r, !0, o, n)) : (t.tag = 0, ge && o && ou(t), Ke(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zo(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ky(r), e = Tt(r, e), l) {
          case 0:
            t = ks(null, t, r, e, n);
            break e;
          case 1:
            t = Hf(null, t, r, e, n);
            break e;
          case 11:
            t = Uf(null, t, r, e, n);
            break e;
          case 14:
            t = Vf(null, t, r, Tt(r.type, e), n);
            break e;
        }
        throw Error(O(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Tt(r, l), ks(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Tt(r, l), Hf(e, t, r, l, n);
    case 3:
      e: {
        if (lh(t), e === null)
          throw Error(O(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Pp(e, t), ra(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Br(Error(O(423)), t), t = Wf(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Br(Error(O(424)), t), t = Wf(e, t, r, n, l);
            break e;
          } else
            for (ct = jn(t.stateNode.containerInfo.firstChild), ft = t, ge = !0, $t = null, n = Dp(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (zr(), r === l) {
            t = nn(e, t, n);
            break e;
          }
          Ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Lp(t), e === null && ms(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, fs(r, l) ? i = null : o !== null && fs(r, o) && (t.flags |= 32), rh(e, t), Ke(e, t, i, n), t.child;
    case 6:
      return e === null && ms(t), null;
    case 13:
      return oh(e, t, n);
    case 4:
      return pu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Fr(t, null, r, n) : Ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Tt(r, l), Uf(e, t, r, l, n);
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, pe(ta, r._currentValue), r._currentValue = i, o !== null)
          if (It(o.value, i)) {
            if (o.children === l.children && !lt.current) {
              t = nn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var f = u.firstContext; f !== null; ) {
                  if (f.context === r) {
                    if (o.tag === 1) {
                      f = Zt(-1, n & -n), f.tag = 2;
                      var p = o.updateQueue;
                      if (p !== null) {
                        p = p.shared;
                        var y = p.pending;
                        y === null ? f.next = f : (f.next = y.next, y.next = f), p.pending = f;
                      }
                    }
                    o.lanes |= n, f = o.alternate, f !== null && (f.lanes |= n), gs(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  f = f.next;
                }
              } else if (o.tag === 10)
                i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(O(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), gs(i, n, t), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Ke(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Ir(t, n), l = kt(l), r = r(l), t.flags |= 1, Ke(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Tt(r, t.pendingProps), l = Tt(r.type, l), Vf(e, t, r, l, n);
    case 15:
      return th(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Tt(r, l), zo(e, t), t.tag = 1, ot(r) ? (e = !0, Zo(t)) : e = !1, Ir(t, n), bp(t, r, l), ws(t, r, l, n), Cs(null, t, r, !0, e, n);
    case 19:
      return ah(e, t, n);
    case 22:
      return nh(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Ch(e, t) {
  return Gd(e, t);
}
function Xy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function wt(e, t, n, r) {
  return new Xy(e, t, n, r);
}
function Pu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ky(e) {
  if (typeof e == "function")
    return Pu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ys)
      return 11;
    if (e === Gs)
      return 14;
  }
  return 2;
}
function Tn(e, t) {
  var n = e.alternate;
  return n === null ? (n = wt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Bo(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Pu(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case wr:
          return Kn(n.children, l, o, t);
        case Qs:
          i = 8, l |= 8;
          break;
        case Vi:
          return e = wt(12, n, t, l | 2), e.elementType = Vi, e.lanes = o, e;
        case Hi:
          return e = wt(13, n, t, l), e.elementType = Hi, e.lanes = o, e;
        case Wi:
          return e = wt(19, n, t, l), e.elementType = Wi, e.lanes = o, e;
        case $d:
          return Na(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Td:
                i = 10;
                break e;
              case bd:
                i = 9;
                break e;
              case Ys:
                i = 11;
                break e;
              case Gs:
                i = 14;
                break e;
              case vn:
                i = 16, r = null;
                break e;
            }
          throw Error(O(130, e == null ? e : typeof e, ""));
      }
  return t = wt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Kn(e, t, n, r) {
  return e = wt(7, e, r, t), e.lanes = n, e;
}
function Na(e, t, n, r) {
  return e = wt(22, e, r, t), e.elementType = $d, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function zi(e, t, n) {
  return e = wt(6, e, null, t), e.lanes = n, e;
}
function Fi(e, t, n) {
  return t = wt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function qy(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wi(0), this.expirationTimes = wi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Tu(e, t, n, r, l, o, i, u, f) {
  return e = new qy(e, t, n, u, f), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = wt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, du(o), e;
}
function Zy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: yr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Sh(e) {
  if (!e)
    return Dn;
  e = e._reactInternals;
  e: {
    if (rr(e) !== e || e.tag !== 1)
      throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ot(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ot(n))
      return Cp(e, n, t);
  }
  return t;
}
function Eh(e, t, n, r, l, o, i, u, f) {
  return e = Tu(n, r, !0, e, l, o, i, u, f), e.context = Sh(null), n = e.current, r = qe(), l = Pn(n), o = Zt(r, l), o.callback = t ?? null, Nn(n, o, l), e.current.lanes = l, Vl(e, l, r), at(e, r), e;
}
function _a(e, t, n, r) {
  var l = t.current, o = qe(), i = Pn(l);
  return n = Sh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Zt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nn(l, t, i), e !== null && (Lt(e, l, i, o), Ro(e, l, i)), i;
}
function fa(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function td(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bu(e, t) {
  td(e, t), (e = e.alternate) && td(e, t);
}
function Jy() {
  return null;
}
var jh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function $u(e) {
  this._internalRoot = e;
}
Pa.prototype.render = $u.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(O(409));
  _a(e, t, null, null);
};
Pa.prototype.unmount = $u.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tr(function() {
      _a(null, e, null, null);
    }), t[en] = null;
  }
};
function Pa(e) {
  this._internalRoot = e;
}
Pa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = tp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gn.length && t !== 0 && t < gn[n].priority; n++)
      ;
    gn.splice(n, 0, e), n === 0 && rp(e);
  }
};
function Du(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ta(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function nd() {
}
function e2(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var p = fa(i);
        o.call(p);
      };
    }
    var i = Eh(t, r, e, 0, null, !1, !1, "", nd);
    return e._reactRootContainer = i, e[en] = i.current, Dl(e.nodeType === 8 ? e.parentNode : e), tr(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var p = fa(f);
      u.call(p);
    };
  }
  var f = Tu(e, 0, !1, null, null, !1, !1, "", nd);
  return e._reactRootContainer = f, e[en] = f.current, Dl(e.nodeType === 8 ? e.parentNode : e), tr(function() {
    _a(t, f, n, r);
  }), f;
}
function ba(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var f = fa(i);
        u.call(f);
      };
    }
    _a(t, i, e, l);
  } else
    i = e2(n, t, e, l, r);
  return fa(i);
}
Jd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dl(t.pendingLanes);
        n !== 0 && (qs(t, n | 1), at(t, Ee()), !(oe & 6) && (Ur = Ee() + 500, Rn()));
      }
      break;
    case 13:
      tr(function() {
        var r = tn(e, 1);
        if (r !== null) {
          var l = qe();
          Lt(r, e, 1, l);
        }
      }), bu(e, 1);
  }
};
Zs = function(e) {
  if (e.tag === 13) {
    var t = tn(e, 134217728);
    if (t !== null) {
      var n = qe();
      Lt(t, e, 134217728, n);
    }
    bu(e, 134217728);
  }
};
ep = function(e) {
  if (e.tag === 13) {
    var t = Pn(e), n = tn(e, t);
    if (n !== null) {
      var r = qe();
      Lt(n, e, t, r);
    }
    bu(e, t);
  }
};
tp = function() {
  return ce;
};
np = function(e, t) {
  var n = ce;
  try {
    return ce = e, t();
  } finally {
    ce = n;
  }
};
ts = function(e, t, n) {
  switch (t) {
    case "input":
      if (Gi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xa(r);
            if (!l)
              throw Error(O(90));
            Ld(r), Gi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Rd(e, n);
      break;
    case "select":
      t = n.value, t != null && br(e, !!n.multiple, t, !1);
  }
};
Ud = ju;
Vd = tr;
var t2 = { usingClientEntryPoint: !1, Events: [Wl, Sr, xa, Ad, Bd, ju] }, sl = { findFiberByHostInstance: Qn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, n2 = { bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: sl.findFiberByHostInstance || Jy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var To = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!To.isDisabled && To.supportsFiber)
    try {
      ma = To.inject(n2), Ut = To;
    } catch {
    }
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t2;
pt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Du(t))
    throw Error(O(200));
  return Zy(e, t, null, n);
};
pt.createRoot = function(e, t) {
  if (!Du(e))
    throw Error(O(299));
  var n = !1, r = "", l = jh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Tu(e, 1, !1, null, null, n, !1, r, l), e[en] = t.current, Dl(e.nodeType === 8 ? e.parentNode : e), new $u(t);
};
pt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = Qd(t), e = e === null ? null : e.stateNode, e;
};
pt.flushSync = function(e) {
  return tr(e);
};
pt.hydrate = function(e, t, n) {
  if (!Ta(t))
    throw Error(O(200));
  return ba(null, e, t, !0, n);
};
pt.hydrateRoot = function(e, t, n) {
  if (!Du(e))
    throw Error(O(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = jh;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Eh(t, null, e, 1, n ?? null, l, !1, o, i), e[en] = t.current, Dl(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new Pa(t);
};
pt.render = function(e, t, n) {
  if (!Ta(t))
    throw Error(O(200));
  return ba(null, e, t, !1, n);
};
pt.unmountComponentAtNode = function(e) {
  if (!Ta(e))
    throw Error(O(40));
  return e._reactRootContainer ? (tr(function() {
    ba(null, null, e, !1, function() {
      e._reactRootContainer = null, e[en] = null;
    });
  }), !0) : !1;
};
pt.unstable_batchedUpdates = ju;
pt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ta(n))
    throw Error(O(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(O(38));
  return ba(e, t, n, !1, r);
};
pt.version = "18.2.0-next-9e3b772b8-20220608";
function Nh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nh);
    } catch (e) {
      console.error(e);
    }
}
Nh(), Ed.exports = pt;
var _h = Ed.exports;
const r2 = /* @__PURE__ */ zs(_h);
var rd = _h;
Bi.createRoot = rd.createRoot, Bi.hydrateRoot = rd.hydrateRoot;
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Bl() {
  return Bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bl.apply(this, arguments);
}
var kn;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(kn || (kn = {}));
const ld = "popstate";
function l2(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let {
      pathname: o,
      search: i,
      hash: u
    } = r.location;
    return Is(
      "",
      {
        pathname: o,
        search: i,
        hash: u
      },
      // state defaults to `null` because `window.history.state` does
      l.state && l.state.usr || null,
      l.state && l.state.key || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : da(l);
  }
  return a2(t, n, null, e);
}
function Pe(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Lu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function o2() {
  return Math.random().toString(36).substr(2, 8);
}
function od(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Is(e, t, n, r) {
  return n === void 0 && (n = null), Bl({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Qr(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || o2()
  });
}
function da(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Qr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function a2(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: l = document.defaultView,
    v5Compat: o = !1
  } = r, i = l.history, u = kn.Pop, f = null, p = y();
  p == null && (p = 0, i.replaceState(Bl({}, i.state, {
    idx: p
  }), ""));
  function y() {
    return (i.state || {
      idx: null
    }).idx;
  }
  function k() {
    u = kn.Pop;
    let M = y(), x = M == null ? null : M - p;
    p = M, f && f({
      action: u,
      location: w.location,
      delta: x
    });
  }
  function S(M, x) {
    u = kn.Push;
    let m = Is(w.location, M, x);
    n && n(m, M), p = y() + 1;
    let E = od(m, p), b = w.createHref(m);
    try {
      i.pushState(E, "", b);
    } catch (z) {
      if (z instanceof DOMException && z.name === "DataCloneError")
        throw z;
      l.location.assign(b);
    }
    o && f && f({
      action: u,
      location: w.location,
      delta: 1
    });
  }
  function _(M, x) {
    u = kn.Replace;
    let m = Is(w.location, M, x);
    n && n(m, M), p = y();
    let E = od(m, p), b = w.createHref(m);
    i.replaceState(E, "", b), o && f && f({
      action: u,
      location: w.location,
      delta: 0
    });
  }
  function P(M) {
    let x = l.location.origin !== "null" ? l.location.origin : l.location.href, m = typeof M == "string" ? M : da(M);
    return Pe(x, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, x);
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(M) {
      if (f)
        throw new Error("A history only accepts one active listener");
      return l.addEventListener(ld, k), f = M, () => {
        l.removeEventListener(ld, k), f = null;
      };
    },
    createHref(M) {
      return t(l, M);
    },
    createURL: P,
    encodeLocation(M) {
      let x = P(M);
      return {
        pathname: x.pathname,
        search: x.search,
        hash: x.hash
      };
    },
    push: S,
    replace: _,
    go(M) {
      return i.go(M);
    }
  };
  return w;
}
var ad;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(ad || (ad = {}));
function i2(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Qr(t) : t, l = Iu(r.pathname || "/", n);
  if (l == null)
    return null;
  let o = Ph(e);
  s2(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u)
    i = g2(
      o[u],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      x2(l)
    );
  return i;
}
function Ph(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let f = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o
    };
    f.relativePath.startsWith("/") && (Pe(f.relativePath.startsWith(r), 'Absolute route path "' + f.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), f.relativePath = f.relativePath.slice(r.length));
    let p = bn([r, f.relativePath]), y = n.concat(f);
    o.children && o.children.length > 0 && (Pe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + p + '".')
    ), Ph(o.children, t, y, p)), !(o.path == null && !o.index) && t.push({
      path: p,
      score: v2(p, o.index),
      routesMeta: y
    });
  };
  return e.forEach((o, i) => {
    var u;
    if (o.path === "" || !((u = o.path) != null && u.includes("?")))
      l(o, i);
    else
      for (let f of Th(o.path))
        l(o, i, f);
  }), t;
}
function Th(e) {
  let t = e.split("/");
  if (t.length === 0)
    return [];
  let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return l ? [o, ""] : [o];
  let i = Th(r.join("/")), u = [];
  return u.push(...i.map((f) => f === "" ? o : [o, f].join("/"))), l && u.push(...i), u.map((f) => e.startsWith("/") && f === "" ? "/" : f);
}
function s2(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : m2(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const u2 = /^:\w+$/, c2 = 3, f2 = 2, d2 = 1, p2 = 10, h2 = -2, id = (e) => e === "*";
function v2(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(id) && (r += h2), t && (r += f2), n.filter((l) => !id(l)).reduce((l, o) => l + (u2.test(o) ? c2 : o === "" ? d2 : p2), r);
}
function m2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function g2(e, t) {
  let {
    routesMeta: n
  } = e, r = {}, l = "/", o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i], f = i === n.length - 1, p = l === "/" ? t : t.slice(l.length) || "/", y = y2({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: f
    }, p);
    if (!y)
      return null;
    Object.assign(r, y.params);
    let k = u.route;
    o.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: bn([l, y.pathname]),
      pathnameBase: E2(bn([l, y.pathnameBase])),
      route: k
    }), y.pathnameBase !== "/" && (l = bn([l, y.pathnameBase]));
  }
  return o;
}
function y2(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = w2(e.path, e.caseSensitive, e.end), l = t.match(n);
  if (!l)
    return null;
  let o = l[0], i = o.replace(/(.)\/+$/, "$1"), u = l.slice(1);
  return {
    params: r.reduce((p, y, k) => {
      let {
        paramName: S,
        isOptional: _
      } = y;
      if (S === "*") {
        let w = u[k] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const P = u[k];
      return _ && !P ? p[S] = void 0 : p[S] = k2(P || "", S), p;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e
  };
}
function w2(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), Lu(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (i, u, f) => (r.push({
    paramName: u,
    isOptional: f != null
  }), f ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r];
}
function x2(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return Lu(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function k2(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return Lu(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
  }
}
function Iu(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function C2(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = ""
  } = typeof e == "string" ? Qr(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : S2(n, t) : t,
    search: j2(r),
    hash: N2(l)
  };
}
function S2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((l) => {
    l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
  }), n.length > 1 ? n.join("/") : "/";
}
function Ai(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function bh(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function $h(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string" ? l = Qr(e) : (l = Bl({}, e), Pe(!l.pathname || !l.pathname.includes("?"), Ai("?", "pathname", "search", l)), Pe(!l.pathname || !l.pathname.includes("#"), Ai("#", "pathname", "hash", l)), Pe(!l.search || !l.search.includes("#"), Ai("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "", i = o ? "/" : l.pathname, u;
  if (r || i == null)
    u = n;
  else {
    let k = t.length - 1;
    if (i.startsWith("..")) {
      let S = i.split("/");
      for (; S[0] === ".."; )
        S.shift(), k -= 1;
      l.pathname = S.join("/");
    }
    u = k >= 0 ? t[k] : "/";
  }
  let f = C2(l, u), p = i && i !== "/" && i.endsWith("/"), y = (o || i === ".") && n.endsWith("/");
  return !f.pathname.endsWith("/") && (p || y) && (f.pathname += "/"), f;
}
const bn = (e) => e.join("/").replace(/\/\/+/g, "/"), E2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), j2 = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, N2 = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function _2(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Dh = ["post", "put", "patch", "delete"];
new Set(Dh);
const P2 = ["get", ...Dh];
new Set(P2);
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function pa() {
  return pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pa.apply(this, arguments);
}
const Ru = /* @__PURE__ */ $.createContext(null), T2 = /* @__PURE__ */ $.createContext(null), Yr = /* @__PURE__ */ $.createContext(null), $a = /* @__PURE__ */ $.createContext(null), On = /* @__PURE__ */ $.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), Lh = /* @__PURE__ */ $.createContext(null);
function b2(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Yl() || Pe(!1);
  let {
    basename: r,
    navigator: l
  } = $.useContext(Yr), {
    hash: o,
    pathname: i,
    search: u
  } = Oh(e, {
    relative: n
  }), f = i;
  return r !== "/" && (f = i === "/" ? r : bn([r, i])), l.createHref({
    pathname: f,
    search: u,
    hash: o
  });
}
function Yl() {
  return $.useContext($a) != null;
}
function Da() {
  return Yl() || Pe(!1), $.useContext($a).location;
}
function Ih(e) {
  $.useContext(Yr).static || $.useLayoutEffect(e);
}
function Rh() {
  let {
    isDataRoute: e
  } = $.useContext(On);
  return e ? W2() : $2();
}
function $2() {
  Yl() || Pe(!1);
  let e = $.useContext(Ru), {
    basename: t,
    navigator: n
  } = $.useContext(Yr), {
    matches: r
  } = $.useContext(On), {
    pathname: l
  } = Da(), o = JSON.stringify(bh(r).map((f) => f.pathnameBase)), i = $.useRef(!1);
  return Ih(() => {
    i.current = !0;
  }), $.useCallback(function(f, p) {
    if (p === void 0 && (p = {}), !i.current)
      return;
    if (typeof f == "number") {
      n.go(f);
      return;
    }
    let y = $h(f, JSON.parse(o), l, p.relative === "path");
    e == null && t !== "/" && (y.pathname = y.pathname === "/" ? t : bn([t, y.pathname])), (p.replace ? n.replace : n.push)(y, p.state, p);
  }, [t, n, o, l, e]);
}
const D2 = /* @__PURE__ */ $.createContext(null);
function L2(e) {
  let t = $.useContext(On).outlet;
  return t && /* @__PURE__ */ $.createElement(D2.Provider, {
    value: e
  }, t);
}
function Oh(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    matches: r
  } = $.useContext(On), {
    pathname: l
  } = Da(), o = JSON.stringify(bh(r).map((i) => i.pathnameBase));
  return $.useMemo(() => $h(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function I2(e, t) {
  return R2(e, t);
}
function R2(e, t, n) {
  Yl() || Pe(!1);
  let {
    navigator: r
  } = $.useContext(Yr), {
    matches: l
  } = $.useContext(On), o = l[l.length - 1], i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let f = Da(), p;
  if (t) {
    var y;
    let w = typeof t == "string" ? Qr(t) : t;
    u === "/" || (y = w.pathname) != null && y.startsWith(u) || Pe(!1), p = w;
  } else
    p = f;
  let k = p.pathname || "/", S = u === "/" ? k : k.slice(u.length) || "/", _ = i2(e, {
    pathname: S
  }), P = A2(_ && _.map((w) => Object.assign({}, w, {
    params: Object.assign({}, i, w.params),
    pathname: bn([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(w.pathname).pathname : w.pathname
    ]),
    pathnameBase: w.pathnameBase === "/" ? u : bn([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(w.pathnameBase).pathname : w.pathnameBase
    ])
  })), l, n);
  return t && P ? /* @__PURE__ */ $.createElement($a.Provider, {
    value: {
      location: pa({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, p),
      navigationType: kn.Pop
    }
  }, P) : P;
}
function O2() {
  let e = H2(), t = _2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, l = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ $.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ $.createElement("pre", {
    style: l
  }, n) : null, null);
}
const M2 = /* @__PURE__ */ $.createElement(O2, null);
class z2 extends $.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error || n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ $.createElement(On.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ $.createElement(Lh.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function F2(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, l = $.useContext(Ru);
  return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ $.createElement(On.Provider, {
    value: t
  }, r);
}
function A2(e, t, n) {
  var r;
  if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
    var l;
    if ((l = n) != null && l.errors)
      e = n.matches;
    else
      return null;
  }
  let o = e, i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex((f) => f.route.id && (i == null ? void 0 : i[f.route.id]));
    u >= 0 || Pe(!1), o = o.slice(0, Math.min(o.length, u + 1));
  }
  return o.reduceRight((u, f, p) => {
    let y = f.route.id ? i == null ? void 0 : i[f.route.id] : null, k = null;
    n && (k = f.route.errorElement || M2);
    let S = t.concat(o.slice(0, p + 1)), _ = () => {
      let P;
      return y ? P = k : f.route.Component ? P = /* @__PURE__ */ $.createElement(f.route.Component, null) : f.route.element ? P = f.route.element : P = u, /* @__PURE__ */ $.createElement(F2, {
        match: f,
        routeContext: {
          outlet: u,
          matches: S,
          isDataRoute: n != null
        },
        children: P
      });
    };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0) ? /* @__PURE__ */ $.createElement(z2, {
      location: n.location,
      revalidation: n.revalidation,
      component: k,
      error: y,
      children: _(),
      routeContext: {
        outlet: null,
        matches: S,
        isDataRoute: !0
      }
    }) : _();
  }, null);
}
var Mh = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Mh || {}), ha = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(ha || {});
function B2(e) {
  let t = $.useContext(Ru);
  return t || Pe(!1), t;
}
function U2(e) {
  let t = $.useContext(T2);
  return t || Pe(!1), t;
}
function V2(e) {
  let t = $.useContext(On);
  return t || Pe(!1), t;
}
function zh(e) {
  let t = V2(), n = t.matches[t.matches.length - 1];
  return n.route.id || Pe(!1), n.route.id;
}
function H2() {
  var e;
  let t = $.useContext(Lh), n = U2(ha.UseRouteError), r = zh(ha.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function W2() {
  let {
    router: e
  } = B2(Mh.UseNavigateStable), t = zh(ha.UseNavigateStable), n = $.useRef(!1);
  return Ih(() => {
    n.current = !0;
  }), $.useCallback(function(l, o) {
    o === void 0 && (o = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, pa({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
function Q2(e) {
  return L2(e.context);
}
function Se(e) {
  Pe(!1);
}
function Y2(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = kn.Pop,
    navigator: o,
    static: i = !1
  } = e;
  Yl() && Pe(!1);
  let u = t.replace(/^\/*/, "/"), f = $.useMemo(() => ({
    basename: u,
    navigator: o,
    static: i
  }), [u, o, i]);
  typeof r == "string" && (r = Qr(r));
  let {
    pathname: p = "/",
    search: y = "",
    hash: k = "",
    state: S = null,
    key: _ = "default"
  } = r, P = $.useMemo(() => {
    let w = Iu(p, u);
    return w == null ? null : {
      location: {
        pathname: w,
        search: y,
        hash: k,
        state: S,
        key: _
      },
      navigationType: l
    };
  }, [u, p, y, k, S, _, l]);
  return P == null ? null : /* @__PURE__ */ $.createElement(Yr.Provider, {
    value: f
  }, /* @__PURE__ */ $.createElement($a.Provider, {
    children: n,
    value: P
  }));
}
function G2(e) {
  let {
    children: t,
    location: n
  } = e;
  return I2(Rs(t), n);
}
new Promise(() => {
});
function Rs(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return $.Children.forEach(e, (r, l) => {
    if (!/* @__PURE__ */ $.isValidElement(r))
      return;
    let o = [...t, l];
    if (r.type === $.Fragment) {
      n.push.apply(n, Rs(r.props.children, o));
      return;
    }
    r.type !== Se && Pe(!1), !r.props.index || !r.props.children || Pe(!1);
    let i = {
      id: r.props.id || o.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (i.children = Rs(r.props.children, o)), n.push(i);
  }), n;
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Os() {
  return Os = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Os.apply(this, arguments);
}
function X2(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), l, o;
  for (o = 0; o < r.length; o++)
    l = r[o], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function K2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function q2(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !K2(e);
}
const Z2 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], J2 = "startTransition", sd = Yg[J2];
function ew(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: l
  } = e, o = $.useRef();
  o.current == null && (o.current = l2({
    window: l,
    v5Compat: !0
  }));
  let i = o.current, [u, f] = $.useState({
    action: i.action,
    location: i.location
  }), {
    v7_startTransition: p
  } = r || {}, y = $.useCallback((k) => {
    p && sd ? sd(() => f(k)) : f(k);
  }, [f, p]);
  return $.useLayoutEffect(() => i.listen(y), [i, y]), /* @__PURE__ */ $.createElement(Y2, {
    basename: t,
    children: n,
    location: u.location,
    navigationType: u.action,
    navigator: i
  });
}
const tw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", nw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Fe = /* @__PURE__ */ $.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: l,
    reloadDocument: o,
    replace: i,
    state: u,
    target: f,
    to: p,
    preventScrollReset: y,
    unstable_viewTransition: k
  } = t, S = X2(t, Z2), {
    basename: _
  } = $.useContext(Yr), P, w = !1;
  if (typeof p == "string" && nw.test(p) && (P = p, tw))
    try {
      let E = new URL(window.location.href), b = p.startsWith("//") ? new URL(E.protocol + p) : new URL(p), z = Iu(b.pathname, _);
      b.origin === E.origin && z != null ? p = z + b.search + b.hash : w = !0;
    } catch {
    }
  let M = b2(p, {
    relative: l
  }), x = rw(p, {
    replace: i,
    state: u,
    target: f,
    preventScrollReset: y,
    relative: l,
    unstable_viewTransition: k
  });
  function m(E) {
    r && r(E), E.defaultPrevented || x(E);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ $.createElement("a", Os({}, S, {
      href: P || M,
      onClick: w || o ? r : m,
      ref: n,
      target: f
    }))
  );
});
var ud;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(ud || (ud = {}));
var cd;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(cd || (cd = {}));
function rw(e, t) {
  let {
    target: n,
    replace: r,
    state: l,
    preventScrollReset: o,
    relative: i,
    unstable_viewTransition: u
  } = t === void 0 ? {} : t, f = Rh(), p = Da(), y = Oh(e, {
    relative: i
  });
  return $.useCallback((k) => {
    if (q2(k, n)) {
      k.preventDefault();
      let S = r !== void 0 ? r : da(p) === da(y);
      f(e, {
        replace: S,
        state: l,
        preventScrollReset: o,
        relative: i,
        unstable_viewTransition: u
      });
    }
  }, [p, f, y, r, l, n, e, o, i, u]);
}
function lw({ images: e, captions: t }) {
  return d.jsxs(d.Fragment, { children: [d.jsx("h1", { className: "mt-3 ms-3 mb-3", children: "Italy Photos" }), d.jsx("div", { className: "container", children: d.jsx("div", { className: "row", children: e.map((n, r) => d.jsxs("div", { className: "col-sm-6 col-md-4 mb-3 text-center", children: [d.jsx("img", { src: "/Italy/" + n, alt: "", className: "img-fluid" }), d.jsx("span", { className: "small", children: t[r] })] }, r)) }) })] });
}
function ow() {
  const e = [];
  for (let n = 1; n <= 22; n++)
    e.push(`${n}.jpg`);
  return e.push("river.gif"), e;
}
function aw() {
  return [
    "Man overlooking sea",
    '"Attenti ai gatti"',
    "Cat #1",
    "Cat #2",
    "Boat cat",
    "Boboli Gardens",
    "Gossamer wings",
    "Cafe Ambience",
    "Venice tunnels",
    "My favorite photo",
    "The Cosmos",
    "Apollo and Daphne",
    "The Colosseum",
    "View from Roman Forum",
    "Sunset #1",
    "Sunset #2",
    "Sistine Chapel",
    "Summit of the Gardens (Eden)",
    "St. Peter's Square",
    "A star in the tiles",
    "A little maze",
    "Murano glass cats",
    "Ponte Vecchio at night"
  ];
}
const iw = ({ tracks: e }) => d.jsxs(d.Fragment, { children: [d.jsx("div", { className: "container d-flex justify-content-center align-items-center", style: { marginTop: 30 }, children: d.jsx("h1", { children: "Phonebook" }) }), d.jsxs("div", { className: "container d-flex justify-content-center align-items-center", style: {
  width: "70vw",
  border: "1px dashed",
  backgroundColor: "#fff7ff",
  paddingTop: 40
}, children: [d.jsx("div", { style: { color: "grey", margin: 15, marginTop: 60 }, children: e.map((t, n) => d.jsx("li", { style: { listStyle: "none", height: 70 }, className: "d-flex align-items-center", children: d.jsx("img", { src: t.album.images[2].url, alt: "" }) }, n)) }), d.jsxs("div", { style: { color: "grey", margin: 15, width: 60 }, children: ["Number", d.jsx("br", {}), " ---------", e.map((t) => d.jsx("li", { className: "d-flex align-items-center", style: { listStyle: "none", height: 70 }, children: (t + 1).toString().padStart(3, "0") }, t))] }), d.jsxs("div", { style: { color: "grey", margin: 15 }, children: ["Name", d.jsx("br", {}), " -----------------------------------", e.map((t, n) => d.jsx("li", { style: { listStyle: "none", height: 70 }, className: "d-flex align-items-center", children: t.name }, n))] }), d.jsxs("div", { style: { color: "grey", margin: 15 }, children: ["Artist", d.jsx("br", {}), " ------------------------", e.map((t, n) => d.jsx("li", { style: { listStyle: "none", height: 70 }, className: "d-flex align-items-center", children: t.artists[0].name }, n))] }), d.jsxs("div", { className: "align-items-center", style: { color: "grey", margin: 15 }, children: ["Album", d.jsx("br", {}), " -----------------------------------------------", e.map((t, n) => d.jsx("li", { style: { listStyle: "none", height: 70 }, className: "d-flex align-items-center", children: t.album.name }, n))] })] })] });
function sw({ image: e, tracks: t }) {
  const [n, r] = $.useState(), [l, o] = $.useState(""), i = (y) => {
    const S = y.target.getBoundingClientRect(), _ = y.clientX - S.left, P = y.clientY - S.top, w = u(_, P);
    w != -1 && (r(w), console.log(n), o(l + w));
  }, u = (y, k) => y > 247 && y < 263 && k > 106 && k < 117 ? 1 : y > 233 && y < 248 && k > 91 && k < 102 ? 2 : y > 214 && y < 229 && k > 83 && k < 95 ? 3 : y > 193 && y < 208 && k > 85 && k < 96 ? 4 : y > 174 && y < 190 && k > 94 && k < 106 ? 5 : y > 162 && y < 178 && k > 112 && k < 122 ? 6 : y > 161 && y < 178 && k > 130 && k < 142 ? 7 : y > 170 && y < 186 && k > 148 && k < 159 ? 8 : y > 187 && y < 203 && k > 159 && k < 171 ? 9 : y > 207 && y < 224 && k > 163 && k < 175 ? 0 : -1, f = (y) => {
    o(y.target.value);
  }, p = (y) => {
    const k = new Audio("/Phonebook/dial.mp3"), S = new Audio(t[y].preview_url);
    S.volume = 0.5, o(""), k.onended = () => S.play(), k.play();
  };
  return d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "container d-flex justify-content-center align-items-center", style: { width: 400, marginTop: "10vh", marginBottom: 50 }, children: [d.jsx("img", { id: "phone", src: e, alt: "", className: "img-fluid", onClick: i }), d.jsx("h3", { style: { paddingLeft: 40 }, children: "Please Dial a Number." })] }), d.jsxs("div", { className: "container d-flex justify-content-center align-items-center", children: [d.jsx("input", { type: "text", placeholder: "+1 (***) L✧VE SONG", className: "text-center", value: l, onChange: f }), d.jsx("button", { className: "btn", style: { marginLeft: 20, backgroundColor: "#feebff", color: "grey" }, onClick: () => p(parseInt(l, 10) - 1), children: "Dial" })] })] });
}
function uw() {
  const e = new URLSearchParams(window.location.search);
  return e.has("code") ? e.get("code") : null;
}
function cw(e, t, n) {
  const [r, l] = $.useState(""), o = uw();
  return $.useEffect(() => {
    async function i() {
      if (o) {
        const u = new URLSearchParams();
        u.append("grant_type", "authorization_code"), u.append("code", o), u.append("redirect_uri", n);
        const f = {
          Authorization: `Basic ${btoa(`${e}:${t}`)}`,
          "Content-Type": "application/x-www-form-urlencoded"
        };
        fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: f,
          body: u
        }).then((p) => {
          if (p.ok)
            return p.json();
          throw new Error("Access token not obtained");
        }).then((p) => {
          l(p.access_token);
        }).catch((p) => {
          console.log(p);
        });
      }
    }
    i();
  }, []), r;
}
function fw() {
  const e = "4cf9bd164aef4b1fa8e5d72912fb770b", t = "fc66fd486cf84fdeb831d0943380260c", n = "http://localhost:5173/auth/callback", l = `https://accounts.spotify.com/authorize?client_id=${e}&redirect_uri=${n}&scope=user-top-read&response_type=code`, o = d.jsx("div", { className: "container d-flex justify-content-center align-items-center", style: { marginTop: 20 }, children: d.jsx("a", { href: l, className: "btn", style: { backgroundColor: "#feebff", color: "grey" }, children: "Login with Spotify" }) }), i = cw(e, t, n);
  return d.jsx(d.Fragment, { children: i === "" ? o : null });
}
let Fh = "";
const dw = (e) => {
  Fh = `Bearer ${e}`;
}, pw = () => {
  const [e, t] = $.useState(null);
  async function n(l, o) {
    try {
      return (await fetch(`https://api.spotify.com/${l}`, {
        headers: {
          Authorization: Fh
        },
        method: o
      })).json();
    } catch {
    }
  }
  async function r() {
    const l = await n("v1/me/top/tracks?time_range=short_term&limit=30", "GET");
    t(l.items);
  }
  return d.jsxs(d.Fragment, { children: [d.jsx(sw, { image: "/Phonebook/rotary_phone.webp", tracks: e }), d.jsx(fw, {}), e === null && d.jsx("div", { className: "container d-flex justify-content-center align-items-center", children: d.jsx("button", { className: "btn", style: {
    marginTop: 20,
    backgroundColor: "#feebff",
    color: "grey"
  }, onClick: () => r(), children: "Fetch Tracks" }) }), e !== null && d.jsx(iw, { tracks: e })] });
}, fd = { Tracks: pw, setToken: dw };
function Ms() {
  return Ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ms.apply(this, arguments);
}
var hw = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: !0, shuffle: !1, backDelay: 700, fadeOut: !1, fadeOutClass: "typed-fade-out", fadeOutDelay: 500, loop: !1, loopCount: 1 / 0, showCursor: !0, cursorChar: "|", autoInsertCss: !0, attr: null, bindInputFocusEvents: !1, contentType: "html", onBegin: function(e) {
}, onComplete: function(e) {
}, preStringTyped: function(e, t) {
}, onStringTyped: function(e, t) {
}, onLastStringBackspaced: function(e) {
}, onTypingPaused: function(e, t) {
}, onTypingResumed: function(e, t) {
}, onReset: function(e) {
}, onStop: function(e, t) {
}, onStart: function(e, t) {
}, onDestroy: function(e) {
} }, vw = new (/* @__PURE__ */ function() {
  function e() {
  }
  var t = e.prototype;
  return t.load = function(n, r, l) {
    if (n.el = typeof l == "string" ? document.querySelector(l) : l, n.options = Ms({}, hw, r), n.isInput = n.el.tagName.toLowerCase() === "input", n.attr = n.options.attr, n.bindInputFocusEvents = n.options.bindInputFocusEvents, n.showCursor = !n.isInput && n.options.showCursor, n.cursorChar = n.options.cursorChar, n.cursorBlinking = !0, n.elContent = n.attr ? n.el.getAttribute(n.attr) : n.el.textContent, n.contentType = n.options.contentType, n.typeSpeed = n.options.typeSpeed, n.startDelay = n.options.startDelay, n.backSpeed = n.options.backSpeed, n.smartBackspace = n.options.smartBackspace, n.backDelay = n.options.backDelay, n.fadeOut = n.options.fadeOut, n.fadeOutClass = n.options.fadeOutClass, n.fadeOutDelay = n.options.fadeOutDelay, n.isPaused = !1, n.strings = n.options.strings.map(function(p) {
      return p.trim();
    }), n.stringsElement = typeof n.options.stringsElement == "string" ? document.querySelector(n.options.stringsElement) : n.options.stringsElement, n.stringsElement) {
      n.strings = [], n.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
      var o = Array.prototype.slice.apply(n.stringsElement.children), i = o.length;
      if (i)
        for (var u = 0; u < i; u += 1)
          n.strings.push(o[u].innerHTML.trim());
    }
    for (var f in n.strPos = 0, n.currentElContent = this.getCurrentElContent(n), n.currentElContent && n.currentElContent.length > 0 && (n.strPos = n.currentElContent.length - 1, n.strings.unshift(n.currentElContent)), n.sequence = [], n.strings)
      n.sequence[f] = f;
    n.arrayPos = 0, n.stopNum = 0, n.loop = n.options.loop, n.loopCount = n.options.loopCount, n.curLoop = 0, n.shuffle = n.options.shuffle, n.pause = { status: !1, typewrite: !0, curString: "", curStrPos: 0 }, n.typingComplete = !1, n.autoInsertCss = n.options.autoInsertCss, n.autoInsertCss && (this.appendCursorAnimationCss(n), this.appendFadeOutAnimationCss(n));
  }, t.getCurrentElContent = function(n) {
    return n.attr ? n.el.getAttribute(n.attr) : n.isInput ? n.el.value : n.contentType === "html" ? n.el.innerHTML : n.el.textContent;
  }, t.appendCursorAnimationCss = function(n) {
    var r = "data-typed-js-cursor-css";
    if (n.showCursor && !document.querySelector("[" + r + "]")) {
      var l = document.createElement("style");
      l.setAttribute(r, "true"), l.innerHTML = `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `, document.body.appendChild(l);
    }
  }, t.appendFadeOutAnimationCss = function(n) {
    var r = "data-typed-fadeout-js-css";
    if (n.fadeOut && !document.querySelector("[" + r + "]")) {
      var l = document.createElement("style");
      l.setAttribute(r, "true"), l.innerHTML = `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `, document.body.appendChild(l);
    }
  }, e;
}())(), dd = new (/* @__PURE__ */ function() {
  function e() {
  }
  var t = e.prototype;
  return t.typeHtmlChars = function(n, r, l) {
    if (l.contentType !== "html")
      return r;
    var o = n.substring(r).charAt(0);
    if (o === "<" || o === "&") {
      var i;
      for (i = o === "<" ? ">" : ";"; n.substring(r + 1).charAt(0) !== i && !(1 + ++r > n.length); )
        ;
      r++;
    }
    return r;
  }, t.backSpaceHtmlChars = function(n, r, l) {
    if (l.contentType !== "html")
      return r;
    var o = n.substring(r).charAt(0);
    if (o === ">" || o === ";") {
      var i;
      for (i = o === ">" ? "<" : "&"; n.substring(r - 1).charAt(0) !== i && !(--r < 0); )
        ;
      r--;
    }
    return r;
  }, e;
}())(), mw = /* @__PURE__ */ function() {
  function e(n, r) {
    vw.load(this, r, n), this.begin();
  }
  var t = e.prototype;
  return t.toggle = function() {
    this.pause.status ? this.start() : this.stop();
  }, t.stop = function() {
    this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
  }, t.start = function() {
    this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
  }, t.destroy = function() {
    this.reset(!1), this.options.onDestroy(this);
  }, t.reset = function(n) {
    n === void 0 && (n = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, n && (this.insertCursor(), this.options.onReset(this), this.begin());
  }, t.begin = function() {
    var n = this;
    this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
      n.strPos === 0 ? n.typewrite(n.strings[n.sequence[n.arrayPos]], n.strPos) : n.backspace(n.strings[n.sequence[n.arrayPos]], n.strPos);
    }, this.startDelay);
  }, t.typewrite = function(n, r) {
    var l = this;
    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
    var o = this.humanizer(this.typeSpeed), i = 1;
    this.pause.status !== !0 ? this.timeout = setTimeout(function() {
      r = dd.typeHtmlChars(n, r, l);
      var u = 0, f = n.substring(r);
      if (f.charAt(0) === "^" && /^\^\d+/.test(f)) {
        var p = 1;
        p += (f = /\d+/.exec(f)[0]).length, u = parseInt(f), l.temporaryPause = !0, l.options.onTypingPaused(l.arrayPos, l), n = n.substring(0, r) + n.substring(r + p), l.toggleBlinking(!0);
      }
      if (f.charAt(0) === "`") {
        for (; n.substring(r + i).charAt(0) !== "`" && (i++, !(r + i > n.length)); )
          ;
        var y = n.substring(0, r), k = n.substring(y.length + 1, r + i), S = n.substring(r + i + 1);
        n = y + k + S, i--;
      }
      l.timeout = setTimeout(function() {
        l.toggleBlinking(!1), r >= n.length ? l.doneTyping(n, r) : l.keepTyping(n, r, i), l.temporaryPause && (l.temporaryPause = !1, l.options.onTypingResumed(l.arrayPos, l));
      }, u);
    }, o) : this.setPauseStatus(n, r, !0);
  }, t.keepTyping = function(n, r, l) {
    r === 0 && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
    var o = n.substring(0, r += l);
    this.replaceText(o), this.typewrite(n, r);
  }, t.doneTyping = function(n, r) {
    var l = this;
    this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
      l.backspace(n, r);
    }, this.backDelay));
  }, t.backspace = function(n, r) {
    var l = this;
    if (this.pause.status !== !0) {
      if (this.fadeOut)
        return this.initFadeOut();
      this.toggleBlinking(!1);
      var o = this.humanizer(this.backSpeed);
      this.timeout = setTimeout(function() {
        r = dd.backSpaceHtmlChars(n, r, l);
        var i = n.substring(0, r);
        if (l.replaceText(i), l.smartBackspace) {
          var u = l.strings[l.arrayPos + 1];
          l.stopNum = u && i === u.substring(0, r) ? r : 0;
        }
        r > l.stopNum ? (r--, l.backspace(n, r)) : r <= l.stopNum && (l.arrayPos++, l.arrayPos === l.strings.length ? (l.arrayPos = 0, l.options.onLastStringBackspaced(), l.shuffleStringsIfNeeded(), l.begin()) : l.typewrite(l.strings[l.sequence[l.arrayPos]], r));
      }, o);
    } else
      this.setPauseStatus(n, r, !1);
  }, t.complete = function() {
    this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
  }, t.setPauseStatus = function(n, r, l) {
    this.pause.typewrite = l, this.pause.curString = n, this.pause.curStrPos = r;
  }, t.toggleBlinking = function(n) {
    this.cursor && (this.pause.status || this.cursorBlinking !== n && (this.cursorBlinking = n, n ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
  }, t.humanizer = function(n) {
    return Math.round(Math.random() * n / 2) + n;
  }, t.shuffleStringsIfNeeded = function() {
    this.shuffle && (this.sequence = this.sequence.sort(function() {
      return Math.random() - 0.5;
    }));
  }, t.initFadeOut = function() {
    var n = this;
    return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
      n.arrayPos++, n.replaceText(""), n.strings.length > n.arrayPos ? n.typewrite(n.strings[n.sequence[n.arrayPos]], 0) : (n.typewrite(n.strings[0], 0), n.arrayPos = 0);
    }, this.fadeOutDelay);
  }, t.replaceText = function(n) {
    this.attr ? this.el.setAttribute(this.attr, n) : this.isInput ? this.el.value = n : this.contentType === "html" ? this.el.innerHTML = n : this.el.textContent = n;
  }, t.bindFocusEvents = function() {
    var n = this;
    this.isInput && (this.el.addEventListener("focus", function(r) {
      n.stop();
    }), this.el.addEventListener("blur", function(r) {
      n.el.value && n.el.value.length !== 0 || n.start();
    }));
  }, t.insertCursor = function() {
    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
  }, e;
}();
const pd = () => {
  const e = $.useRef(null), t = Rh(), [n, r] = $.useState(!1);
  $.useEffect(() => {
    const o = new mw(e.current, {
      strings: [
        "DAPPLED SUNLIGHT",
        "SILVER WHEAT",
        "BELLS CHIME",
        "ANGELS WEEP",
        "CAUGHT IN THE CURRENT",
        "PASSING TIME",
        "LOVE THE SINNER",
        "HATE THE SIN"
      ],
      typeSpeed: 35,
      fadeOut: !0,
      backDelay: 1350,
      loop: !0,
      showCursor: !1
    });
    return () => {
      o.destroy();
    };
  });
  const l = () => {
    r(!0), setTimeout(() => {
      t("/galaxy");
    }, 500);
  };
  return d.jsxs(d.Fragment, { children: [d.jsx("div", { className: "bg vh-100", style: { backgroundColor: "#0A080B" } }), d.jsxs("div", { className: n ? "fade-out" : "", onClick: l, style: { cursor: "pointer" }, children: [d.jsxs("div", { className: "bg", children: [d.jsx("video", { loop: !0, muted: !0, autoPlay: !0, children: d.jsx("source", { src: "/Home/home.mp4", type: "video/mp4" }) }), d.jsx("div", { className: "screen" })] }), d.jsx("section", { className: "caption", children: d.jsxs("div", { className: "wrapper", children: [d.jsx("span", { children: "⋅˚₊‧ ୨୧ ‧₊˚ ⋅" }), d.jsxs("div", { className: "center", children: [d.jsx("h1", { className: "title", children: "୨୧ ASHS_WRLD ୨୧" }), d.jsx("h4", { ref: e, className: "title", style: { marginTop: 50 } }), d.jsxs("span", { children: ["The universe created by 🍎. ", d.jsx("br", {}), " It can't represent 1% of her."] })] }), d.jsx("span", { children: "⋅˚₊‧ ୨୧ ‧₊˚ ⋅" })] }) })] })] });
}, gw = () => d.jsxs("div", { className: "galaxy", children: [d.jsx("img", { className: "fade-in gal-img", src: "/Home/galaxy2.jpeg" }), d.jsxs("div", { className: "d-flex fade-in vh-100 align-items-center justify-content-center", children: [d.jsxs("div", { className: "d-flex space-text flex-column title-cont", children: [d.jsx("h1", { className: "space-title", children: "Hi! ⭐️ I'm Ashley, it's nice to meet you!" }), d.jsx("h3", { className: "space-mid", children: "I am currently a freshman in the Texas A&M Engineering Honors program pursuing a B.S. in Computer Science. My passions include software engineering, data analytics, and surprisingly fashion 👠. I have experience in full-stack web development, machine learning, databases, scripting, and data visualization. Right now, I'm on the lookout for a 2024 summer SWE / data analytics internship so... feel free to message me or email me at ashlxyzhang@tamu.edu! 😊" }), d.jsxs("h5", { className: "space-subtitle", children: ["This website is an extension of my mind as a galaxy.", d.jsx("br", {}), "Feel free to explore it & enjoy!"] })] }), d.jsxs("span", { className: "space-text", style: {
  fontSize: 10,
  textAlign: "center",
  alignSelf: "end",
  zIndex: 1
}, children: ["Made with 💛 by 🍎 ", d.jsx("br", {}), "© 2024. All rights reserved."] }), d.jsxs("div", { className: "d-flex vh-100 align-items-center justify-content-center", children: [d.jsxs("div", { className: "dest-cont", style: { marginBottom: "2%", marginRight: "7%" }, children: [d.jsx(Fe, { to: "/", className: "destination", children: "🌎" }), d.jsx("div", { className: "dest-cap", children: d.jsx("span", { children: "Home (Earth)" }) })] }), d.jsxs("div", { className: "dest-cont", style: { marginBottom: "11%", marginRight: "15%" }, children: [d.jsx(Fe, { to: "/advent", className: "destination", children: "💫" }), d.jsx("span", { className: "dest-cap", children: "Advent Calendar" })] }), d.jsxs("div", { className: "dest-cont", style: { marginTop: "15%", marginLeft: "5%" }, children: [d.jsx(Fe, { to: "/phonebook", className: "destination", children: "🪐" }), d.jsx("span", { className: "dest-cap", children: "Phonebook" })] }), d.jsxs("div", { className: "dest-cont", style: { marginBottom: "4%", marginRight: "20%" }, children: [d.jsx(Fe, { to: "/italy", className: "destination", children: "🌌" }), d.jsx("span", { className: "dest-cap", children: "Italy Photos" })] })] })] })] }), yw = () => d.jsxs(d.Fragment, { children: [d.jsx("div", { className: "bg", children: d.jsx("img", { src: "/Advent/calendar.jpeg", alt: "" }) }), d.jsxs("div", { className: "container pt-4", children: [d.jsxs("div", { className: "row justify-content-end", children: [d.jsx("div", { className: "col empty" }), d.jsx("div", { className: "col empty" }), d.jsx("div", { className: "col empty" }), d.jsx("div", { className: "col empty" }), d.jsx("div", { className: "col empty" }), d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "1", children: "1" }), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_1.jpeg", alt: "strawberry cake" })] }), d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "2", children: "2" }), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_2.jpeg", alt: "angel wings" })] })] }), d.jsxs("div", { className: "row", children: [d.jsx("div", { className: "col", children: d.jsx(Fe, { to: "3", children: "3" }) }), d.jsx("div", { className: "col", children: "4" }), d.jsx("div", { className: "col", children: "5" }), d.jsx("div", { className: "col", children: "6" }), d.jsx("div", { className: "col", children: "7" }), d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "8", children: "8" }), d.jsx("br", {}), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_8.jpeg", alt: "apple heart" })] }), d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "9", children: "9" }), d.jsx("br", {}), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_9.jpeg", alt: "apple heart" })] })] }), d.jsxs("div", { className: "row", children: [d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "10", children: "10" }), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_10.jpeg", alt: "cloud" })] }), d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "11", children: "11" }), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_11.png", alt: "poppy" })] }), d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "12", children: "12" }), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_12.jpeg", alt: "smoothie" })] }), d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "13", children: "13" }), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/quilt/patch2.png", alt: "patch" })] }), d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "14", children: "14" }), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/clocks/clock4.png", alt: "patch" })] }), d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "15", children: "15" }), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_15.jpeg", alt: "pink fortune" })] }), d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "16", children: "16" }), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_16.jpeg", alt: "lily of the valley" })] })] }), d.jsxs("div", { className: "row", children: [d.jsxs("div", { className: "col", children: [d.jsx(Fe, { to: "17", children: "17" }), d.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_17.png", alt: "moon tarot" })] }), d.jsx("div", { className: "col", children: "18" }), d.jsx("div", { className: "col", children: "19" }), d.jsx("div", { className: "col", children: "20" }), d.jsx("div", { className: "col", children: "21" }), d.jsx("div", { className: "col", children: "22" }), d.jsx("div", { className: "col", children: "23" })] }), d.jsxs("div", { className: "row", children: [d.jsx("div", { className: "col", children: "24" }), d.jsx("div", { className: "col", children: "25" }), d.jsx("div", { className: "col", children: "26" }), d.jsx("div", { className: "col", children: "27" }), d.jsx("div", { className: "col", children: "28" }), d.jsx("div", { className: "col", children: "29" }), d.jsx("div", { className: "col", children: "30" })] }), d.jsxs("div", { className: "row", children: [d.jsx("div", { className: "col", children: "31" }), d.jsx("div", { className: "col empty" }), d.jsx("div", { className: "col empty" }), d.jsx("div", { className: "col empty" }), d.jsx("div", { className: "col empty" }), d.jsx("div", { className: "col empty" }), d.jsx("div", { className: "col empty" })] })] }), d.jsx(Q2, {})] }), ww = () => {
  const [e, t] = $.useState(""), [n, r] = $.useState(!1), [l, o] = $.useState({ x: 0, y: 0 }), [i, u] = $.useState({ x: 0, y: 0 }), [f, p] = $.useState([]), y = (_) => {
    r(!0), o({ x: _.clientX, y: _.clientY });
  }, k = (_) => {
    if (!n)
      return;
    const P = _.clientX - l.x, w = _.clientY - l.y;
    u({ x: P, y: w });
  }, S = () => {
    r(!1), e !== "" && p((_) => [
      ..._,
      {
        type: e,
        x: l.x + i.x,
        y: l.y + i.y
      }
    ]);
  };
  return d.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [d.jsx("span", { children: "Click the strawberry or the cream to choose a piece." }), d.jsx("span", { children: "Click the board to place a piece." }), d.jsxs("div", { className: "d-flex justify-content-center align-items-center mt-5", children: [d.jsx("img", { id: "waffle", src: "/Advent/waffle_board.png", alt: "waffle board", onMouseDown: y, onMouseMove: k, onMouseUp: S }), f.map((_, P) => d.jsx("img", { className: "placed", src: _.type, alt: "piece copy", style: {
    position: "fixed",
    left: `${_.x - 45}px`,
    top: `${_.y - 50}px`
  } }, P)), d.jsxs("div", { className: "d-flex flex-column", id: "pieces", children: [d.jsx("img", { src: "/Advent/strawberry.png", alt: "strawberry", onClick: () => t("/Advent/strawberry.png") }), d.jsx("img", { src: "/Advent/cream.png", alt: "cream", onClick: () => t("/Advent/cream.png") })] })] })] });
}, xw = () => ($.useEffect(() => {
  let e = null, t = null;
  return setTimeout(() => {
    e = window.open("/Advent/adam.jpeg", "Adam", `width=337, height=307, left=200, top=${window.innerHeight - 300}`), t = window.open("/Advent/god.jpeg", "God", `width=566, height=366, left=${window.innerWidth - 600}, top=100`);
  }, 500), () => {
    e && !e.closed && e.close(), t && !t.closed && t.close();
  };
}), d.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: ["The Creation of Adam", d.jsx("br", {}), d.jsx("img", { src: "/Advent/cross.gif", alt: "cross" })] })), kw = () => d.jsx("div", { className: "ascii" }), Cw = () => {
  const [e, t] = $.useState(!1), [n, r] = $.useState(""), l = (o) => {
    r(o.target.value);
  };
  return $.useEffect(() => {
    t(n === "fallen");
  }, [n]), d.jsx(d.Fragment, { children: d.jsxs("div", { className: "apple-tree d-flex flex-column justify-content-center align-items-center", children: [d.jsxs("p", { children: [`          # #### ####
        ### \\/#|### |/####
        ####\\/#/ \\||/##/_/##/_#
    #####  \\/###|/ \\/ # ###
     ##_\\_#\\_\\## | #/###_/_####
  ## #### # \\ #| /  #### ##/##
   __#_--###\`  |{,###---###-~
                 \\  }{`, d.jsxs("select", { value: n, onChange: l, children: [d.jsx("option", { value: "red-apple", children: "🍎" }), d.jsx("option", { value: "green-apple", children: "🍏" }), d.jsx("option", { value: "sakura", children: "🌸" }), d.jsx("option", { value: "oramge", children: "🍊" }), d.jsx("option", { value: "fallen" })] }), e ? `
                    }}{
                    }}{
                    {{} 🍎
         , -=-~{ .-^- _    ,   ,,
     / '          ,      ;         '  \`` : `
                    }}{
                    }}{
                    {{}
         , -=-~{ .-^- _    ,   ,,
     / '          ,      ;         '  \``] }), d.jsx("br", {}), d.jsx("span", { children: "𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊" })] }) });
}, Sw = () => {
  const [e, t] = $.useState(!1), [n, r] = $.useState(!1), [l, o] = $.useState(""), [i, u] = $.useState(["", "", "", "", "", "", "", "", ""]), [f, p] = $.useState(0), y = "🐡𓇼🐟💫🫧🐚🦀💌🌟🐠🐙🦑🪸⭐️🌀", k = (P) => {
    const w = P.length - 2, M = Math.floor(Math.random() * w / 2) * 2;
    return P.slice(M, M + 2);
  }, S = () => {
    r(!1), t(!0), setTimeout(() => {
      t(!1), r(!0), o(k(y));
    }, 2e3);
  }, _ = (P) => {
    if (l !== "" && P < 9) {
      const w = [...i];
      w[P] = l, p(f + 1), u(w);
    }
  };
  return d.jsxs("div", { className: "d-flex justify-content-center align-items-center", style: { fontFamily: "Courier New" }, children: [d.jsxs("div", { className: "fishing d-flex flex-column justify-content-center align-items-center", children: [d.jsx("img", { className: e ? "move-rod" : "", src: "/Advent/fishing_pole.webp", alt: "fishing pole" }), d.jsx("span", { className: `fished ${n ? "" : "d-none"}`, children: `  ${l}` }), "   ,(   ,(   ,(   ,(   ,(   ,(   ,(   ,(\n`-'  `-'  `-'  `-'  `-'  `-'  `-'  `-'  `", d.jsxs("div", { children: [d.jsx("button", { onClick: S, children: "Fish" }), d.jsx("button", { onClick: () => _(f), children: "Add to Inventory" })] })] }), d.jsxs("div", { className: "container text-center flex-wrap inventory", children: [d.jsx("img", { src: "/Advent/layout3.png", alt: "" }), d.jsx("div", { className: "row", children: d.jsx("h4", { children: "Inventory" }) }), d.jsx("div", { className: "row justify-content-center grid", children: i.map((P, w) => d.jsx("div", { className: "col-3", style: {
    display: "flex",
    justifyContent: "center",
    fontSize: 45,
    alignItems: "center"
  }, children: d.jsx("span", { children: P }) }, w)) })] })] });
}, Ew = () => {
  const e = ["lightblue", "#D1DFF6", "#C2D6F6", "#92B6F0", "#8BD4F6"], l = [`   _  _
  ( \`   )_
 (    )    \`)
(_   (_ .  _) _)`, `     _
    (  )
 ( \`  ) . )
(_, _(  ,_)_)`, `    _ .
  (  _ )_
(_  _(_ ,)`], [o, i] = $.useState([]), u = `          |
          |   .
   \`.  *  |     .'
     \`. ._|_* .'  .
   . * .'   \`.  *
-------|     |-------
   .  *\`.___.' *  .
      .'  |* \`.  *
    .' *  |  . \`.
        . |
          |`, f = "                       `::`\n                        /\n                       `    `;:`\n    _          .;:;          /\n  _(_)_        ::;       wWWWw  ,,,     _\n (_)@(_),,,  _ ';:;;'    (___) {{{}}  _(_)_\n  /(_) {{{}} >'. ||  _    ~Y~   ~Y~  (_)@(_)\n  |  {{}~Y~  `> \\||.'< (@)\\|{}} \\|/   /(_)\n(\\|/)~Y~\\|/    `>|/ <` \\Y/\\|~Y~ \\|/ (\\|/) \n \\|//\\|/\\|//    `||/`  \\|/\\|\\|/\\|//\\|//\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^", [p, y] = $.useState("sunny"), k = (_) => {
    y(_.target.value);
  }, S = (_) => {
    i([]);
    for (let P = 0; P < _; P++) {
      let w = l[Math.floor(Math.random() * 3)], M = Math.random() * (window.innerWidth - 150), x = Math.random() * 400, m = Math.random() * 0.2 + 0.9, E = e[Math.floor(Math.random() * 5)], b = {
        type: w,
        x: M,
        y: x,
        opacity: m,
        color: E
      };
      i((z) => [...z, b]);
    }
  };
  return $.useEffect(() => {
    p === "sunny" ? S(10) : p === "partly-sunny" ? S(20) : p === "cloudy" && S(30);
  }, [p]), d.jsxs("div", { className: "wrap", children: [d.jsxs("select", { value: p, onChange: k, id: "weather", children: [d.jsx("option", { value: "sunny", children: "☀️" }), d.jsx("option", { value: "partly-sunny", children: "⛅️" }), d.jsx("option", { value: "cloudy", children: "☁️" })] }), p === "sunny" && d.jsxs("div", { className: "sun-container", children: [d.jsx("span", { className: "dot" }), d.jsx("span", { className: "ascii sun", children: u })] }), p === "partly-sunny" && d.jsxs("div", { className: "sun-container", children: [d.jsx("span", { className: "dot", style: { backgroundColor: "#fde2a1" } }), d.jsx("span", { className: "ascii sun", style: { color: "#EFB93A" }, children: u })] }), d.jsx("div", { className: "clouds", children: d.jsx("div", { className: "ascii", children: o.map((_, P) => d.jsx("span", { className: "cloud", style: {
    left: `${_.x}px`,
    top: `${_.y}px`,
    opacity: _.opacity,
    color: _.color
  }, children: _.type }, P)) }) }), d.jsx("div", { className: "clouds2", children: d.jsx("div", { className: "ascii", children: o.map((_, P) => d.jsx("span", { className: "cloud", style: {
    left: _.x,
    top: _.y,
    opacity: _.opacity,
    color: _.color
  }, children: _.type }, P)) }) }), d.jsxs("div", { className: "gardens", children: [d.jsx("span", { className: "ascii garden", children: f }), d.jsx("span", { className: "ascii garden2", children: f }), d.jsx("span", { className: "ascii garden3", children: f }), d.jsx("span", { className: "ascii garden4", children: f })] })] });
}, jw = () => {
  const [e, t] = $.useState(0), [n, r] = $.useState(!0), l = ["dream.jpeg", "poppies.jpeg", "poppies2.gif", "dorothy.jpeg"], o = [
    "[ You wake up from a dream. ]",
    "[ You find yourself in a field of poppies. ]",
    "[ You start feeling a little sleepy... ]",
    "[ You settle down for a long, long nap. ]"
  ], i = () => {
    t(e + 1), e === 2 && r(!1);
  };
  return d.jsxs(d.Fragment, { children: [d.jsxs("div", { className: "bg", children: [d.jsx("div", { className: "screen" }), d.jsx("img", { src: `/Advent/${l[e]}`, alt: "dream" })] }), d.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center fade-in text", children: [d.jsx("span", { children: o[e] }), d.jsx("button", { className: n ? "dream-button" : "d-none", onClick: i, children: "Go forth" })] })] });
};
var Ah = { exports: {} };
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })($g, function() {
    for (var n = function(a, s, c) {
      return s === void 0 && (s = 0), c === void 0 && (c = 1), a < s ? s : a > c ? c : a;
    }, r = n, l = function(a) {
      a._clipped = !1, a._unclipped = a.slice(0);
      for (var s = 0; s <= 3; s++)
        s < 3 ? ((a[s] < 0 || a[s] > 255) && (a._clipped = !0), a[s] = r(a[s], 0, 255)) : s === 3 && (a[s] = r(a[s], 0, 1));
      return a;
    }, o = {}, i = 0, u = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; i < u.length; i += 1) {
      var f = u[i];
      o["[object " + f + "]"] = f.toLowerCase();
    }
    var p = function(a) {
      return o[Object.prototype.toString.call(a)] || "object";
    }, y = p, k = function(a, s) {
      return s === void 0 && (s = null), a.length >= 3 ? Array.prototype.slice.call(a) : y(a[0]) == "object" && s ? s.split("").filter(function(c) {
        return a[0][c] !== void 0;
      }).map(function(c) {
        return a[0][c];
      }) : a[0];
    }, S = p, _ = function(a) {
      if (a.length < 2)
        return null;
      var s = a.length - 1;
      return S(a[s]) == "string" ? a[s].toLowerCase() : null;
    }, P = Math.PI, w = {
      clip_rgb: l,
      limit: n,
      type: p,
      unpack: k,
      last: _,
      PI: P,
      TWOPI: P * 2,
      PITHIRD: P / 3,
      DEG2RAD: P / 180,
      RAD2DEG: 180 / P
    }, M = {
      format: {},
      autodetect: []
    }, x = w.last, m = w.clip_rgb, E = w.type, b = M, z = function() {
      for (var s = [], c = arguments.length; c--; )
        s[c] = arguments[c];
      var h = this;
      if (E(s[0]) === "object" && s[0].constructor && s[0].constructor === this.constructor)
        return s[0];
      var g = x(s), C = !1;
      if (!g) {
        C = !0, b.sorted || (b.autodetect = b.autodetect.sort(function(L, A) {
          return A.p - L.p;
        }), b.sorted = !0);
        for (var v = 0, j = b.autodetect; v < j.length; v += 1) {
          var N = j[v];
          if (g = N.test.apply(N, s), g)
            break;
        }
      }
      if (b.format[g]) {
        var T = b.format[g].apply(null, C ? s : s.slice(0, -1));
        h._rgb = m(T);
      } else
        throw new Error("unknown format: " + s);
      h._rgb.length === 3 && h._rgb.push(1);
    };
    z.prototype.toString = function() {
      return E(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var D = z, U = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(U.Color, [null].concat(a)))();
    };
    U.Color = D, U.version = "2.4.2";
    var F = U, he = w.unpack, X = Math.max, Oe = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = he(a, "rgb"), h = c[0], g = c[1], C = c[2];
      h = h / 255, g = g / 255, C = C / 255;
      var v = 1 - X(h, X(g, C)), j = v < 1 ? 1 / (1 - v) : 0, N = (1 - h - v) * j, T = (1 - g - v) * j, L = (1 - C - v) * j;
      return [N, T, L, v];
    }, Rt = Oe, Ht = w.unpack, Mn = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      a = Ht(a, "cmyk");
      var c = a[0], h = a[1], g = a[2], C = a[3], v = a.length > 4 ? a[4] : 1;
      return C === 1 ? [0, 0, 0, v] : [
        c >= 1 ? 0 : 255 * (1 - c) * (1 - C),
        // r
        h >= 1 ? 0 : 255 * (1 - h) * (1 - C),
        // g
        g >= 1 ? 0 : 255 * (1 - g) * (1 - C),
        // b
        v
      ];
    }, Ot = Mn, ln = F, on = D, B = M, Y = w.unpack, G = w.type, fe = Rt;
    on.prototype.cmyk = function() {
      return fe(this._rgb);
    }, ln.cmyk = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(on, [null].concat(a, ["cmyk"])))();
    }, B.format.cmyk = Ot, B.autodetect.push({
      p: 2,
      test: function() {
        for (var a = [], s = arguments.length; s--; )
          a[s] = arguments[s];
        if (a = Y(a, "cmyk"), G(a) === "array" && a.length === 4)
          return "cmyk";
      }
    });
    var ye = w.unpack, Mt = w.last, et = function(a) {
      return Math.round(a * 100) / 100;
    }, zn = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = ye(a, "hsla"), h = Mt(a) || "lsa";
      return c[0] = et(c[0] || 0), c[1] = et(c[1] * 100) + "%", c[2] = et(c[2] * 100) + "%", h === "hsla" || c.length > 3 && c[3] < 1 ? (c[3] = c.length > 3 ? c[3] : 1, h = "hsla") : c.length = 3, h + "(" + c.join(",") + ")";
    }, vt = zn, an = w.unpack, Gl = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      a = an(a, "rgba");
      var c = a[0], h = a[1], g = a[2];
      c /= 255, h /= 255, g /= 255;
      var C = Math.min(c, h, g), v = Math.max(c, h, g), j = (v + C) / 2, N, T;
      return v === C ? (N = 0, T = Number.NaN) : N = j < 0.5 ? (v - C) / (v + C) : (v - C) / (2 - v - C), c == v ? T = (h - g) / (v - C) : h == v ? T = 2 + (g - c) / (v - C) : g == v && (T = 4 + (c - h) / (v - C)), T *= 60, T < 0 && (T += 360), a.length > 3 && a[3] !== void 0 ? [T, N, j, a[3]] : [T, N, j];
    }, Xl = Gl, Kl = w.unpack, La = w.last, ql = vt, Ia = Xl, sn = Math.round, Zl = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = Kl(a, "rgba"), h = La(a) || "rgb";
      return h.substr(0, 3) == "hsl" ? ql(Ia(c), h) : (c[0] = sn(c[0]), c[1] = sn(c[1]), c[2] = sn(c[2]), (h === "rgba" || c.length > 3 && c[3] < 1) && (c[3] = c.length > 3 ? c[3] : 1, h = "rgba"), h + "(" + c.slice(0, h === "rgb" ? 3 : 4).join(",") + ")");
    }, mt = Zl, Jl = w.unpack, it = Math.round, Xe = function() {
      for (var a, s = [], c = arguments.length; c--; )
        s[c] = arguments[c];
      s = Jl(s, "hsl");
      var h = s[0], g = s[1], C = s[2], v, j, N;
      if (g === 0)
        v = j = N = C * 255;
      else {
        var T = [0, 0, 0], L = [0, 0, 0], A = C < 0.5 ? C * (1 + g) : C + g - C * g, I = 2 * C - A, W = h / 360;
        T[0] = W + 1 / 3, T[1] = W, T[2] = W - 1 / 3;
        for (var V = 0; V < 3; V++)
          T[V] < 0 && (T[V] += 1), T[V] > 1 && (T[V] -= 1), 6 * T[V] < 1 ? L[V] = I + (A - I) * 6 * T[V] : 2 * T[V] < 1 ? L[V] = A : 3 * T[V] < 2 ? L[V] = I + (A - I) * (2 / 3 - T[V]) * 6 : L[V] = I;
        a = [it(L[0] * 255), it(L[1] * 255), it(L[2] * 255)], v = a[0], j = a[1], N = a[2];
      }
      return s.length > 3 ? [v, j, N, s[3]] : [v, j, N, 1];
    }, zt = Xe, Gr = zt, Xr = M, Ve = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, un = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, Fn = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, St = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, lr = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, or = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, eo = Math.round, ar = function(a) {
      a = a.toLowerCase().trim();
      var s;
      if (Xr.format.named)
        try {
          return Xr.format.named(a);
        } catch {
        }
      if (s = a.match(Ve)) {
        for (var c = s.slice(1, 4), h = 0; h < 3; h++)
          c[h] = +c[h];
        return c[3] = 1, c;
      }
      if (s = a.match(un)) {
        for (var g = s.slice(1, 5), C = 0; C < 4; C++)
          g[C] = +g[C];
        return g;
      }
      if (s = a.match(Fn)) {
        for (var v = s.slice(1, 4), j = 0; j < 3; j++)
          v[j] = eo(v[j] * 2.55);
        return v[3] = 1, v;
      }
      if (s = a.match(St)) {
        for (var N = s.slice(1, 5), T = 0; T < 3; T++)
          N[T] = eo(N[T] * 2.55);
        return N[3] = +N[3], N;
      }
      if (s = a.match(lr)) {
        var L = s.slice(1, 4);
        L[1] *= 0.01, L[2] *= 0.01;
        var A = Gr(L);
        return A[3] = 1, A;
      }
      if (s = a.match(or)) {
        var I = s.slice(1, 4);
        I[1] *= 0.01, I[2] *= 0.01;
        var W = Gr(I);
        return W[3] = +s[4], W;
      }
    };
    ar.test = function(a) {
      return Ve.test(a) || un.test(a) || Fn.test(a) || St.test(a) || lr.test(a) || or.test(a);
    };
    var Ra = ar, Oa = F, to = D, Kr = M, Ma = w.type, za = mt, qr = Ra;
    to.prototype.css = function(a) {
      return za(this._rgb, a);
    }, Oa.css = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(to, [null].concat(a, ["css"])))();
    }, Kr.format.css = qr, Kr.autodetect.push({
      p: 5,
      test: function(a) {
        for (var s = [], c = arguments.length - 1; c-- > 0; )
          s[c] = arguments[c + 1];
        if (!s.length && Ma(a) === "string" && qr.test(a))
          return "css";
      }
    });
    var no = D, Fa = F, Aa = M, Te = w.unpack;
    Aa.format.gl = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = Te(a, "rgba");
      return c[0] *= 255, c[1] *= 255, c[2] *= 255, c;
    }, Fa.gl = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(no, [null].concat(a, ["gl"])))();
    }, no.prototype.gl = function() {
      var a = this._rgb;
      return [a[0] / 255, a[1] / 255, a[2] / 255, a[3]];
    };
    var Z = w.unpack, He = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = Z(a, "rgb"), h = c[0], g = c[1], C = c[2], v = Math.min(h, g, C), j = Math.max(h, g, C), N = j - v, T = N * 100 / 255, L = v / (255 - N) * 100, A;
      return N === 0 ? A = Number.NaN : (h === j && (A = (g - C) / N), g === j && (A = 2 + (C - h) / N), C === j && (A = 4 + (h - g) / N), A *= 60, A < 0 && (A += 360)), [A, T, L];
    }, je = He, Wt = w.unpack, An = Math.floor, Uh = function() {
      for (var a, s, c, h, g, C, v = [], j = arguments.length; j--; )
        v[j] = arguments[j];
      v = Wt(v, "hcg");
      var N = v[0], T = v[1], L = v[2], A, I, W;
      L = L * 255;
      var V = T * 255;
      if (T === 0)
        A = I = W = L;
      else {
        N === 360 && (N = 0), N > 360 && (N -= 360), N < 0 && (N += 360), N /= 60;
        var K = An(N), ee = N - K, re = L * (1 - T), ae = re + V * (1 - ee), Me = re + V * ee, Le = re + V;
        switch (K) {
          case 0:
            a = [Le, Me, re], A = a[0], I = a[1], W = a[2];
            break;
          case 1:
            s = [ae, Le, re], A = s[0], I = s[1], W = s[2];
            break;
          case 2:
            c = [re, Le, Me], A = c[0], I = c[1], W = c[2];
            break;
          case 3:
            h = [re, ae, Le], A = h[0], I = h[1], W = h[2];
            break;
          case 4:
            g = [Me, re, Le], A = g[0], I = g[1], W = g[2];
            break;
          case 5:
            C = [Le, re, ae], A = C[0], I = C[1], W = C[2];
            break;
        }
      }
      return [A, I, W, v.length > 3 ? v[3] : 1];
    }, Vh = Uh, Hh = w.unpack, Wh = w.type, Qh = F, Ou = D, Mu = M, Yh = je;
    Ou.prototype.hcg = function() {
      return Yh(this._rgb);
    }, Qh.hcg = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(Ou, [null].concat(a, ["hcg"])))();
    }, Mu.format.hcg = Vh, Mu.autodetect.push({
      p: 1,
      test: function() {
        for (var a = [], s = arguments.length; s--; )
          a[s] = arguments[s];
        if (a = Hh(a, "hcg"), Wh(a) === "array" && a.length === 3)
          return "hcg";
      }
    });
    var Gh = w.unpack, Xh = w.last, ro = Math.round, Kh = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = Gh(a, "rgba"), h = c[0], g = c[1], C = c[2], v = c[3], j = Xh(a) || "auto";
      v === void 0 && (v = 1), j === "auto" && (j = v < 1 ? "rgba" : "rgb"), h = ro(h), g = ro(g), C = ro(C);
      var N = h << 16 | g << 8 | C, T = "000000" + N.toString(16);
      T = T.substr(T.length - 6);
      var L = "0" + ro(v * 255).toString(16);
      switch (L = L.substr(L.length - 2), j.toLowerCase()) {
        case "rgba":
          return "#" + T + L;
        case "argb":
          return "#" + L + T;
        default:
          return "#" + T;
      }
    }, zu = Kh, qh = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, Zh = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, Jh = function(a) {
      if (a.match(qh)) {
        (a.length === 4 || a.length === 7) && (a = a.substr(1)), a.length === 3 && (a = a.split(""), a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);
        var s = parseInt(a, 16), c = s >> 16, h = s >> 8 & 255, g = s & 255;
        return [c, h, g, 1];
      }
      if (a.match(Zh)) {
        (a.length === 5 || a.length === 9) && (a = a.substr(1)), a.length === 4 && (a = a.split(""), a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2] + a[3] + a[3]);
        var C = parseInt(a, 16), v = C >> 24 & 255, j = C >> 16 & 255, N = C >> 8 & 255, T = Math.round((C & 255) / 255 * 100) / 100;
        return [v, j, N, T];
      }
      throw new Error("unknown hex color: " + a);
    }, Fu = Jh, ev = F, Au = D, tv = w.type, Bu = M, nv = zu;
    Au.prototype.hex = function(a) {
      return nv(this._rgb, a);
    }, ev.hex = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(Au, [null].concat(a, ["hex"])))();
    }, Bu.format.hex = Fu, Bu.autodetect.push({
      p: 4,
      test: function(a) {
        for (var s = [], c = arguments.length - 1; c-- > 0; )
          s[c] = arguments[c + 1];
        if (!s.length && tv(a) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(a.length) >= 0)
          return "hex";
      }
    });
    var rv = w.unpack, Uu = w.TWOPI, lv = Math.min, ov = Math.sqrt, av = Math.acos, iv = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = rv(a, "rgb"), h = c[0], g = c[1], C = c[2];
      h /= 255, g /= 255, C /= 255;
      var v, j = lv(h, g, C), N = (h + g + C) / 3, T = N > 0 ? 1 - j / N : 0;
      return T === 0 ? v = NaN : (v = (h - g + (h - C)) / 2, v /= ov((h - g) * (h - g) + (h - C) * (g - C)), v = av(v), C > g && (v = Uu - v), v /= Uu), [v * 360, T, N];
    }, sv = iv, uv = w.unpack, Ba = w.limit, ir = w.TWOPI, Ua = w.PITHIRD, sr = Math.cos, cv = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      a = uv(a, "hsi");
      var c = a[0], h = a[1], g = a[2], C, v, j;
      return isNaN(c) && (c = 0), isNaN(h) && (h = 0), c > 360 && (c -= 360), c < 0 && (c += 360), c /= 360, c < 1 / 3 ? (j = (1 - h) / 3, C = (1 + h * sr(ir * c) / sr(Ua - ir * c)) / 3, v = 1 - (j + C)) : c < 2 / 3 ? (c -= 1 / 3, C = (1 - h) / 3, v = (1 + h * sr(ir * c) / sr(Ua - ir * c)) / 3, j = 1 - (C + v)) : (c -= 2 / 3, v = (1 - h) / 3, j = (1 + h * sr(ir * c) / sr(Ua - ir * c)) / 3, C = 1 - (v + j)), C = Ba(g * C * 3), v = Ba(g * v * 3), j = Ba(g * j * 3), [C * 255, v * 255, j * 255, a.length > 3 ? a[3] : 1];
    }, fv = cv, dv = w.unpack, pv = w.type, hv = F, Vu = D, Hu = M, vv = sv;
    Vu.prototype.hsi = function() {
      return vv(this._rgb);
    }, hv.hsi = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(Vu, [null].concat(a, ["hsi"])))();
    }, Hu.format.hsi = fv, Hu.autodetect.push({
      p: 2,
      test: function() {
        for (var a = [], s = arguments.length; s--; )
          a[s] = arguments[s];
        if (a = dv(a, "hsi"), pv(a) === "array" && a.length === 3)
          return "hsi";
      }
    });
    var mv = w.unpack, gv = w.type, yv = F, Wu = D, Qu = M, wv = Xl;
    Wu.prototype.hsl = function() {
      return wv(this._rgb);
    }, yv.hsl = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(Wu, [null].concat(a, ["hsl"])))();
    }, Qu.format.hsl = zt, Qu.autodetect.push({
      p: 2,
      test: function() {
        for (var a = [], s = arguments.length; s--; )
          a[s] = arguments[s];
        if (a = mv(a, "hsl"), gv(a) === "array" && a.length === 3)
          return "hsl";
      }
    });
    var xv = w.unpack, kv = Math.min, Cv = Math.max, Sv = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      a = xv(a, "rgb");
      var c = a[0], h = a[1], g = a[2], C = kv(c, h, g), v = Cv(c, h, g), j = v - C, N, T, L;
      return L = v / 255, v === 0 ? (N = Number.NaN, T = 0) : (T = j / v, c === v && (N = (h - g) / j), h === v && (N = 2 + (g - c) / j), g === v && (N = 4 + (c - h) / j), N *= 60, N < 0 && (N += 360)), [N, T, L];
    }, Ev = Sv, jv = w.unpack, Nv = Math.floor, _v = function() {
      for (var a, s, c, h, g, C, v = [], j = arguments.length; j--; )
        v[j] = arguments[j];
      v = jv(v, "hsv");
      var N = v[0], T = v[1], L = v[2], A, I, W;
      if (L *= 255, T === 0)
        A = I = W = L;
      else {
        N === 360 && (N = 0), N > 360 && (N -= 360), N < 0 && (N += 360), N /= 60;
        var V = Nv(N), K = N - V, ee = L * (1 - T), re = L * (1 - T * K), ae = L * (1 - T * (1 - K));
        switch (V) {
          case 0:
            a = [L, ae, ee], A = a[0], I = a[1], W = a[2];
            break;
          case 1:
            s = [re, L, ee], A = s[0], I = s[1], W = s[2];
            break;
          case 2:
            c = [ee, L, ae], A = c[0], I = c[1], W = c[2];
            break;
          case 3:
            h = [ee, re, L], A = h[0], I = h[1], W = h[2];
            break;
          case 4:
            g = [ae, ee, L], A = g[0], I = g[1], W = g[2];
            break;
          case 5:
            C = [L, ee, re], A = C[0], I = C[1], W = C[2];
            break;
        }
      }
      return [A, I, W, v.length > 3 ? v[3] : 1];
    }, Pv = _v, Tv = w.unpack, bv = w.type, $v = F, Yu = D, Gu = M, Dv = Ev;
    Yu.prototype.hsv = function() {
      return Dv(this._rgb);
    }, $v.hsv = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(Yu, [null].concat(a, ["hsv"])))();
    }, Gu.format.hsv = Pv, Gu.autodetect.push({
      p: 2,
      test: function() {
        for (var a = [], s = arguments.length; s--; )
          a[s] = arguments[s];
        if (a = Tv(a, "hsv"), bv(a) === "array" && a.length === 3)
          return "hsv";
      }
    });
    var lo = {
      // Corresponds roughly to RGB brighter/darker
      Kn: 18,
      // D65 standard referent
      Xn: 0.95047,
      Yn: 1,
      Zn: 1.08883,
      t0: 0.137931034,
      // 4 / 29
      t1: 0.206896552,
      // 6 / 29
      t2: 0.12841855,
      // 3 * t1 * t1
      t3: 8856452e-9
      // t1 * t1 * t1
    }, ur = lo, Lv = w.unpack, Xu = Math.pow, Iv = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = Lv(a, "rgb"), h = c[0], g = c[1], C = c[2], v = Rv(h, g, C), j = v[0], N = v[1], T = v[2], L = 116 * N - 16;
      return [L < 0 ? 0 : L, 500 * (j - N), 200 * (N - T)];
    }, Va = function(a) {
      return (a /= 255) <= 0.04045 ? a / 12.92 : Xu((a + 0.055) / 1.055, 2.4);
    }, Ha = function(a) {
      return a > ur.t3 ? Xu(a, 1 / 3) : a / ur.t2 + ur.t0;
    }, Rv = function(a, s, c) {
      a = Va(a), s = Va(s), c = Va(c);
      var h = Ha((0.4124564 * a + 0.3575761 * s + 0.1804375 * c) / ur.Xn), g = Ha((0.2126729 * a + 0.7151522 * s + 0.072175 * c) / ur.Yn), C = Ha((0.0193339 * a + 0.119192 * s + 0.9503041 * c) / ur.Zn);
      return [h, g, C];
    }, Ku = Iv, cr = lo, Ov = w.unpack, Mv = Math.pow, zv = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      a = Ov(a, "lab");
      var c = a[0], h = a[1], g = a[2], C, v, j, N, T, L;
      return v = (c + 16) / 116, C = isNaN(h) ? v : v + h / 500, j = isNaN(g) ? v : v - g / 200, v = cr.Yn * Qa(v), C = cr.Xn * Qa(C), j = cr.Zn * Qa(j), N = Wa(3.2404542 * C - 1.5371385 * v - 0.4985314 * j), T = Wa(-0.969266 * C + 1.8760108 * v + 0.041556 * j), L = Wa(0.0556434 * C - 0.2040259 * v + 1.0572252 * j), [N, T, L, a.length > 3 ? a[3] : 1];
    }, Wa = function(a) {
      return 255 * (a <= 304e-5 ? 12.92 * a : 1.055 * Mv(a, 1 / 2.4) - 0.055);
    }, Qa = function(a) {
      return a > cr.t1 ? a * a * a : cr.t2 * (a - cr.t0);
    }, qu = zv, Fv = w.unpack, Av = w.type, Bv = F, Zu = D, Ju = M, Uv = Ku;
    Zu.prototype.lab = function() {
      return Uv(this._rgb);
    }, Bv.lab = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(Zu, [null].concat(a, ["lab"])))();
    }, Ju.format.lab = qu, Ju.autodetect.push({
      p: 2,
      test: function() {
        for (var a = [], s = arguments.length; s--; )
          a[s] = arguments[s];
        if (a = Fv(a, "lab"), Av(a) === "array" && a.length === 3)
          return "lab";
      }
    });
    var Vv = w.unpack, Hv = w.RAD2DEG, Wv = Math.sqrt, Qv = Math.atan2, Yv = Math.round, Gv = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = Vv(a, "lab"), h = c[0], g = c[1], C = c[2], v = Wv(g * g + C * C), j = (Qv(C, g) * Hv + 360) % 360;
      return Yv(v * 1e4) === 0 && (j = Number.NaN), [h, v, j];
    }, ec = Gv, Xv = w.unpack, Kv = Ku, qv = ec, Zv = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = Xv(a, "rgb"), h = c[0], g = c[1], C = c[2], v = Kv(h, g, C), j = v[0], N = v[1], T = v[2];
      return qv(j, N, T);
    }, Jv = Zv, e0 = w.unpack, t0 = w.DEG2RAD, n0 = Math.sin, r0 = Math.cos, l0 = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = e0(a, "lch"), h = c[0], g = c[1], C = c[2];
      return isNaN(C) && (C = 0), C = C * t0, [h, r0(C) * g, n0(C) * g];
    }, tc = l0, o0 = w.unpack, a0 = tc, i0 = qu, s0 = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      a = o0(a, "lch");
      var c = a[0], h = a[1], g = a[2], C = a0(c, h, g), v = C[0], j = C[1], N = C[2], T = i0(v, j, N), L = T[0], A = T[1], I = T[2];
      return [L, A, I, a.length > 3 ? a[3] : 1];
    }, nc = s0, u0 = w.unpack, c0 = nc, f0 = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = u0(a, "hcl").reverse();
      return c0.apply(void 0, c);
    }, d0 = f0, p0 = w.unpack, h0 = w.type, rc = F, oo = D, Ya = M, lc = Jv;
    oo.prototype.lch = function() {
      return lc(this._rgb);
    }, oo.prototype.hcl = function() {
      return lc(this._rgb).reverse();
    }, rc.lch = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(oo, [null].concat(a, ["lch"])))();
    }, rc.hcl = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(oo, [null].concat(a, ["hcl"])))();
    }, Ya.format.lch = nc, Ya.format.hcl = d0, ["lch", "hcl"].forEach(function(a) {
      return Ya.autodetect.push({
        p: 2,
        test: function() {
          for (var s = [], c = arguments.length; c--; )
            s[c] = arguments[c];
          if (s = p0(s, a), h0(s) === "array" && s.length === 3)
            return a;
        }
      });
    });
    var v0 = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    }, oc = v0, m0 = D, ac = M, g0 = w.type, Zr = oc, y0 = Fu, w0 = zu;
    m0.prototype.name = function() {
      for (var a = w0(this._rgb, "rgb"), s = 0, c = Object.keys(Zr); s < c.length; s += 1) {
        var h = c[s];
        if (Zr[h] === a)
          return h.toLowerCase();
      }
      return a;
    }, ac.format.named = function(a) {
      if (a = a.toLowerCase(), Zr[a])
        return y0(Zr[a]);
      throw new Error("unknown color name: " + a);
    }, ac.autodetect.push({
      p: 5,
      test: function(a) {
        for (var s = [], c = arguments.length - 1; c-- > 0; )
          s[c] = arguments[c + 1];
        if (!s.length && g0(a) === "string" && Zr[a.toLowerCase()])
          return "named";
      }
    });
    var x0 = w.unpack, k0 = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = x0(a, "rgb"), h = c[0], g = c[1], C = c[2];
      return (h << 16) + (g << 8) + C;
    }, C0 = k0, S0 = w.type, E0 = function(a) {
      if (S0(a) == "number" && a >= 0 && a <= 16777215) {
        var s = a >> 16, c = a >> 8 & 255, h = a & 255;
        return [s, c, h, 1];
      }
      throw new Error("unknown num color: " + a);
    }, j0 = E0, N0 = F, ic = D, sc = M, _0 = w.type, P0 = C0;
    ic.prototype.num = function() {
      return P0(this._rgb);
    }, N0.num = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(ic, [null].concat(a, ["num"])))();
    }, sc.format.num = j0, sc.autodetect.push({
      p: 5,
      test: function() {
        for (var a = [], s = arguments.length; s--; )
          a[s] = arguments[s];
        if (a.length === 1 && _0(a[0]) === "number" && a[0] >= 0 && a[0] <= 16777215)
          return "num";
      }
    });
    var T0 = F, Ga = D, uc = M, cc = w.unpack, fc = w.type, dc = Math.round;
    Ga.prototype.rgb = function(a) {
      return a === void 0 && (a = !0), a === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(dc);
    }, Ga.prototype.rgba = function(a) {
      return a === void 0 && (a = !0), this._rgb.slice(0, 4).map(function(s, c) {
        return c < 3 ? a === !1 ? s : dc(s) : s;
      });
    }, T0.rgb = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(Ga, [null].concat(a, ["rgb"])))();
    }, uc.format.rgb = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = cc(a, "rgba");
      return c[3] === void 0 && (c[3] = 1), c;
    }, uc.autodetect.push({
      p: 3,
      test: function() {
        for (var a = [], s = arguments.length; s--; )
          a[s] = arguments[s];
        if (a = cc(a, "rgba"), fc(a) === "array" && (a.length === 3 || a.length === 4 && fc(a[3]) == "number" && a[3] >= 0 && a[3] <= 1))
          return "rgb";
      }
    });
    var ao = Math.log, b0 = function(a) {
      var s = a / 100, c, h, g;
      return s < 66 ? (c = 255, h = s < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (h = s - 2) + 104.49216199393888 * ao(h), g = s < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (g = s - 10) + 115.67994401066147 * ao(g)) : (c = 351.97690566805693 + 0.114206453784165 * (c = s - 55) - 40.25366309332127 * ao(c), h = 325.4494125711974 + 0.07943456536662342 * (h = s - 50) - 28.0852963507957 * ao(h), g = 255), [c, h, g, 1];
    }, pc = b0, $0 = pc, D0 = w.unpack, L0 = Math.round, I0 = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      for (var c = D0(a, "rgb"), h = c[0], g = c[2], C = 1e3, v = 4e4, j = 0.4, N; v - C > j; ) {
        N = (v + C) * 0.5;
        var T = $0(N);
        T[2] / T[0] >= g / h ? v = N : C = N;
      }
      return L0(N);
    }, R0 = I0, Xa = F, io = D, Ka = M, O0 = R0;
    io.prototype.temp = io.prototype.kelvin = io.prototype.temperature = function() {
      return O0(this._rgb);
    }, Xa.temp = Xa.kelvin = Xa.temperature = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(io, [null].concat(a, ["temp"])))();
    }, Ka.format.temp = Ka.format.kelvin = Ka.format.temperature = pc;
    var M0 = w.unpack, qa = Math.cbrt, z0 = Math.pow, F0 = Math.sign, A0 = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = M0(a, "rgb"), h = c[0], g = c[1], C = c[2], v = [Za(h / 255), Za(g / 255), Za(C / 255)], j = v[0], N = v[1], T = v[2], L = qa(0.4122214708 * j + 0.5363325363 * N + 0.0514459929 * T), A = qa(0.2119034982 * j + 0.6806995451 * N + 0.1073969566 * T), I = qa(0.0883024619 * j + 0.2817188376 * N + 0.6299787005 * T);
      return [
        0.2104542553 * L + 0.793617785 * A - 0.0040720468 * I,
        1.9779984951 * L - 2.428592205 * A + 0.4505937099 * I,
        0.0259040371 * L + 0.7827717662 * A - 0.808675766 * I
      ];
    }, hc = A0;
    function Za(a) {
      var s = Math.abs(a);
      return s < 0.04045 ? a / 12.92 : (F0(a) || 1) * z0((s + 0.055) / 1.055, 2.4);
    }
    var B0 = w.unpack, so = Math.pow, U0 = Math.sign, V0 = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      a = B0(a, "lab");
      var c = a[0], h = a[1], g = a[2], C = so(c + 0.3963377774 * h + 0.2158037573 * g, 3), v = so(c - 0.1055613458 * h - 0.0638541728 * g, 3), j = so(c - 0.0894841775 * h - 1.291485548 * g, 3);
      return [
        255 * Ja(4.0767416621 * C - 3.3077115913 * v + 0.2309699292 * j),
        255 * Ja(-1.2684380046 * C + 2.6097574011 * v - 0.3413193965 * j),
        255 * Ja(-0.0041960863 * C - 0.7034186147 * v + 1.707614701 * j),
        a.length > 3 ? a[3] : 1
      ];
    }, vc = V0;
    function Ja(a) {
      var s = Math.abs(a);
      return s > 31308e-7 ? (U0(a) || 1) * (1.055 * so(s, 1 / 2.4) - 0.055) : a * 12.92;
    }
    var H0 = w.unpack, W0 = w.type, Q0 = F, mc = D, gc = M, Y0 = hc;
    mc.prototype.oklab = function() {
      return Y0(this._rgb);
    }, Q0.oklab = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(mc, [null].concat(a, ["oklab"])))();
    }, gc.format.oklab = vc, gc.autodetect.push({
      p: 3,
      test: function() {
        for (var a = [], s = arguments.length; s--; )
          a[s] = arguments[s];
        if (a = H0(a, "oklab"), W0(a) === "array" && a.length === 3)
          return "oklab";
      }
    });
    var G0 = w.unpack, X0 = hc, K0 = ec, q0 = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      var c = G0(a, "rgb"), h = c[0], g = c[1], C = c[2], v = X0(h, g, C), j = v[0], N = v[1], T = v[2];
      return K0(j, N, T);
    }, Z0 = q0, J0 = w.unpack, em = tc, tm = vc, nm = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      a = J0(a, "lch");
      var c = a[0], h = a[1], g = a[2], C = em(c, h, g), v = C[0], j = C[1], N = C[2], T = tm(v, j, N), L = T[0], A = T[1], I = T[2];
      return [L, A, I, a.length > 3 ? a[3] : 1];
    }, rm = nm, lm = w.unpack, om = w.type, am = F, yc = D, wc = M, im = Z0;
    yc.prototype.oklch = function() {
      return im(this._rgb);
    }, am.oklch = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      return new (Function.prototype.bind.apply(yc, [null].concat(a, ["oklch"])))();
    }, wc.format.oklch = rm, wc.autodetect.push({
      p: 3,
      test: function() {
        for (var a = [], s = arguments.length; s--; )
          a[s] = arguments[s];
        if (a = lm(a, "oklch"), om(a) === "array" && a.length === 3)
          return "oklch";
      }
    });
    var xc = D, sm = w.type;
    xc.prototype.alpha = function(a, s) {
      return s === void 0 && (s = !1), a !== void 0 && sm(a) === "number" ? s ? (this._rgb[3] = a, this) : new xc([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb") : this._rgb[3];
    };
    var um = D;
    um.prototype.clipped = function() {
      return this._rgb._clipped || !1;
    };
    var Bn = D, cm = lo;
    Bn.prototype.darken = function(a) {
      a === void 0 && (a = 1);
      var s = this, c = s.lab();
      return c[0] -= cm.Kn * a, new Bn(c, "lab").alpha(s.alpha(), !0);
    }, Bn.prototype.brighten = function(a) {
      return a === void 0 && (a = 1), this.darken(-a);
    }, Bn.prototype.darker = Bn.prototype.darken, Bn.prototype.brighter = Bn.prototype.brighten;
    var fm = D;
    fm.prototype.get = function(a) {
      var s = a.split("."), c = s[0], h = s[1], g = this[c]();
      if (h) {
        var C = c.indexOf(h) - (c.substr(0, 2) === "ok" ? 2 : 0);
        if (C > -1)
          return g[C];
        throw new Error("unknown channel " + h + " in mode " + c);
      } else
        return g;
    };
    var fr = D, dm = w.type, pm = Math.pow, hm = 1e-7, vm = 20;
    fr.prototype.luminance = function(a) {
      if (a !== void 0 && dm(a) === "number") {
        if (a === 0)
          return new fr([0, 0, 0, this._rgb[3]], "rgb");
        if (a === 1)
          return new fr([255, 255, 255, this._rgb[3]], "rgb");
        var s = this.luminance(), c = "rgb", h = vm, g = function(v, j) {
          var N = v.interpolate(j, 0.5, c), T = N.luminance();
          return Math.abs(a - T) < hm || !h-- ? N : T > a ? g(v, N) : g(N, j);
        }, C = (s > a ? g(new fr([0, 0, 0]), this) : g(this, new fr([255, 255, 255]))).rgb();
        return new fr(C.concat([this._rgb[3]]));
      }
      return mm.apply(void 0, this._rgb.slice(0, 3));
    };
    var mm = function(a, s, c) {
      return a = ei(a), s = ei(s), c = ei(c), 0.2126 * a + 0.7152 * s + 0.0722 * c;
    }, ei = function(a) {
      return a /= 255, a <= 0.03928 ? a / 12.92 : pm((a + 0.055) / 1.055, 2.4);
    }, st = {}, kc = D, Cc = w.type, uo = st, Sc = function(a, s, c) {
      c === void 0 && (c = 0.5);
      for (var h = [], g = arguments.length - 3; g-- > 0; )
        h[g] = arguments[g + 3];
      var C = h[0] || "lrgb";
      if (!uo[C] && !h.length && (C = Object.keys(uo)[0]), !uo[C])
        throw new Error("interpolation mode " + C + " is not defined");
      return Cc(a) !== "object" && (a = new kc(a)), Cc(s) !== "object" && (s = new kc(s)), uo[C](a, s, c).alpha(a.alpha() + c * (s.alpha() - a.alpha()));
    }, Ec = D, gm = Sc;
    Ec.prototype.mix = Ec.prototype.interpolate = function(a, s) {
      s === void 0 && (s = 0.5);
      for (var c = [], h = arguments.length - 2; h-- > 0; )
        c[h] = arguments[h + 2];
      return gm.apply(void 0, [this, a, s].concat(c));
    };
    var jc = D;
    jc.prototype.premultiply = function(a) {
      a === void 0 && (a = !1);
      var s = this._rgb, c = s[3];
      return a ? (this._rgb = [s[0] * c, s[1] * c, s[2] * c, c], this) : new jc([s[0] * c, s[1] * c, s[2] * c, c], "rgb");
    };
    var ti = D, ym = lo;
    ti.prototype.saturate = function(a) {
      a === void 0 && (a = 1);
      var s = this, c = s.lch();
      return c[1] += ym.Kn * a, c[1] < 0 && (c[1] = 0), new ti(c, "lch").alpha(s.alpha(), !0);
    }, ti.prototype.desaturate = function(a) {
      return a === void 0 && (a = 1), this.saturate(-a);
    };
    var Nc = D, _c = w.type;
    Nc.prototype.set = function(a, s, c) {
      c === void 0 && (c = !1);
      var h = a.split("."), g = h[0], C = h[1], v = this[g]();
      if (C) {
        var j = g.indexOf(C) - (g.substr(0, 2) === "ok" ? 2 : 0);
        if (j > -1) {
          if (_c(s) == "string")
            switch (s.charAt(0)) {
              case "+":
                v[j] += +s;
                break;
              case "-":
                v[j] += +s;
                break;
              case "*":
                v[j] *= +s.substr(1);
                break;
              case "/":
                v[j] /= +s.substr(1);
                break;
              default:
                v[j] = +s;
            }
          else if (_c(s) === "number")
            v[j] = s;
          else
            throw new Error("unsupported value for Color.set");
          var N = new Nc(v, g);
          return c ? (this._rgb = N._rgb, this) : N;
        }
        throw new Error("unknown channel " + C + " in mode " + g);
      } else
        return v;
    };
    var wm = D, xm = function(a, s, c) {
      var h = a._rgb, g = s._rgb;
      return new wm(
        h[0] + c * (g[0] - h[0]),
        h[1] + c * (g[1] - h[1]),
        h[2] + c * (g[2] - h[2]),
        "rgb"
      );
    };
    st.rgb = xm;
    var km = D, ni = Math.sqrt, dr = Math.pow, Cm = function(a, s, c) {
      var h = a._rgb, g = h[0], C = h[1], v = h[2], j = s._rgb, N = j[0], T = j[1], L = j[2];
      return new km(
        ni(dr(g, 2) * (1 - c) + dr(N, 2) * c),
        ni(dr(C, 2) * (1 - c) + dr(T, 2) * c),
        ni(dr(v, 2) * (1 - c) + dr(L, 2) * c),
        "rgb"
      );
    };
    st.lrgb = Cm;
    var Sm = D, Em = function(a, s, c) {
      var h = a.lab(), g = s.lab();
      return new Sm(
        h[0] + c * (g[0] - h[0]),
        h[1] + c * (g[1] - h[1]),
        h[2] + c * (g[2] - h[2]),
        "lab"
      );
    };
    st.lab = Em;
    var Pc = D, pr = function(a, s, c, h) {
      var g, C, v, j;
      h === "hsl" ? (v = a.hsl(), j = s.hsl()) : h === "hsv" ? (v = a.hsv(), j = s.hsv()) : h === "hcg" ? (v = a.hcg(), j = s.hcg()) : h === "hsi" ? (v = a.hsi(), j = s.hsi()) : h === "lch" || h === "hcl" ? (h = "hcl", v = a.hcl(), j = s.hcl()) : h === "oklch" && (v = a.oklch().reverse(), j = s.oklch().reverse());
      var N, T, L, A, I, W;
      (h.substr(0, 1) === "h" || h === "oklch") && (g = v, N = g[0], L = g[1], I = g[2], C = j, T = C[0], A = C[1], W = C[2]);
      var V, K, ee, re;
      return !isNaN(N) && !isNaN(T) ? (T > N && T - N > 180 ? re = T - (N + 360) : T < N && N - T > 180 ? re = T + 360 - N : re = T - N, K = N + c * re) : isNaN(N) ? isNaN(T) ? K = Number.NaN : (K = T, (I == 1 || I == 0) && h != "hsv" && (V = A)) : (K = N, (W == 1 || W == 0) && h != "hsv" && (V = L)), V === void 0 && (V = L + c * (A - L)), ee = I + c * (W - I), h === "oklch" ? new Pc([ee, V, K], h) : new Pc([K, V, ee], h);
    }, jm = pr, Tc = function(a, s, c) {
      return jm(a, s, c, "lch");
    };
    st.lch = Tc, st.hcl = Tc;
    var Nm = D, _m = function(a, s, c) {
      var h = a.num(), g = s.num();
      return new Nm(h + c * (g - h), "num");
    };
    st.num = _m;
    var Pm = pr, Tm = function(a, s, c) {
      return Pm(a, s, c, "hcg");
    };
    st.hcg = Tm;
    var bm = pr, $m = function(a, s, c) {
      return bm(a, s, c, "hsi");
    };
    st.hsi = $m;
    var Dm = pr, Lm = function(a, s, c) {
      return Dm(a, s, c, "hsl");
    };
    st.hsl = Lm;
    var Im = pr, Rm = function(a, s, c) {
      return Im(a, s, c, "hsv");
    };
    st.hsv = Rm;
    var Om = D, Mm = function(a, s, c) {
      var h = a.oklab(), g = s.oklab();
      return new Om(
        h[0] + c * (g[0] - h[0]),
        h[1] + c * (g[1] - h[1]),
        h[2] + c * (g[2] - h[2]),
        "oklab"
      );
    };
    st.oklab = Mm;
    var zm = pr, Fm = function(a, s, c) {
      return zm(a, s, c, "oklch");
    };
    st.oklch = Fm;
    var ri = D, Am = w.clip_rgb, li = Math.pow, oi = Math.sqrt, ai = Math.PI, bc = Math.cos, $c = Math.sin, Bm = Math.atan2, Um = function(a, s, c) {
      s === void 0 && (s = "lrgb"), c === void 0 && (c = null);
      var h = a.length;
      c || (c = Array.from(new Array(h)).map(function() {
        return 1;
      }));
      var g = h / c.reduce(function(K, ee) {
        return K + ee;
      });
      if (c.forEach(function(K, ee) {
        c[ee] *= g;
      }), a = a.map(function(K) {
        return new ri(K);
      }), s === "lrgb")
        return Vm(a, c);
      for (var C = a.shift(), v = C.get(s), j = [], N = 0, T = 0, L = 0; L < v.length; L++)
        if (v[L] = (v[L] || 0) * c[0], j.push(isNaN(v[L]) ? 0 : c[0]), s.charAt(L) === "h" && !isNaN(v[L])) {
          var A = v[L] / 180 * ai;
          N += bc(A) * c[0], T += $c(A) * c[0];
        }
      var I = C.alpha() * c[0];
      a.forEach(function(K, ee) {
        var re = K.get(s);
        I += K.alpha() * c[ee + 1];
        for (var ae = 0; ae < v.length; ae++)
          if (!isNaN(re[ae]))
            if (j[ae] += c[ee + 1], s.charAt(ae) === "h") {
              var Me = re[ae] / 180 * ai;
              N += bc(Me) * c[ee + 1], T += $c(Me) * c[ee + 1];
            } else
              v[ae] += re[ae] * c[ee + 1];
      });
      for (var W = 0; W < v.length; W++)
        if (s.charAt(W) === "h") {
          for (var V = Bm(T / j[W], N / j[W]) / ai * 180; V < 0; )
            V += 360;
          for (; V >= 360; )
            V -= 360;
          v[W] = V;
        } else
          v[W] = v[W] / j[W];
      return I /= h, new ri(v, s).alpha(I > 0.99999 ? 1 : I, !0);
    }, Vm = function(a, s) {
      for (var c = a.length, h = [0, 0, 0, 0], g = 0; g < a.length; g++) {
        var C = a[g], v = s[g] / c, j = C._rgb;
        h[0] += li(j[0], 2) * v, h[1] += li(j[1], 2) * v, h[2] += li(j[2], 2) * v, h[3] += j[3] * v;
      }
      return h[0] = oi(h[0]), h[1] = oi(h[1]), h[2] = oi(h[2]), h[3] > 0.9999999 && (h[3] = 1), new ri(Am(h));
    }, Et = F, hr = w.type, Hm = Math.pow, ii = function(a) {
      var s = "rgb", c = Et("#ccc"), h = 0, g = [0, 1], C = [], v = [0, 0], j = !1, N = [], T = !1, L = 0, A = 1, I = !1, W = {}, V = !0, K = 1, ee = function(R) {
        if (R = R || ["#fff", "#000"], R && hr(R) === "string" && Et.brewer && Et.brewer[R.toLowerCase()] && (R = Et.brewer[R.toLowerCase()]), hr(R) === "array") {
          R.length === 1 && (R = [R[0], R[0]]), R = R.slice(0);
          for (var Q = 0; Q < R.length; Q++)
            R[Q] = Et(R[Q]);
          C.length = 0;
          for (var J = 0; J < R.length; J++)
            C.push(J / (R.length - 1));
        }
        return tt(), N = R;
      }, re = function(R) {
        if (j != null) {
          for (var Q = j.length - 1, J = 0; J < Q && R >= j[J]; )
            J++;
          return J - 1;
        }
        return 0;
      }, ae = function(R) {
        return R;
      }, Me = function(R) {
        return R;
      }, Le = function(R, Q) {
        var J, q;
        if (Q == null && (Q = !1), isNaN(R) || R === null)
          return c;
        if (Q)
          q = R;
        else if (j && j.length > 2) {
          var ze = re(R);
          q = ze / (j.length - 2);
        } else
          A !== L ? q = (R - L) / (A - L) : q = 1;
        q = Me(q), Q || (q = ae(q)), K !== 1 && (q = Hm(q, K)), q = v[0] + q * (1 - v[0] - v[1]), q = Math.min(1, Math.max(0, q));
        var de = Math.floor(q * 1e4);
        if (V && W[de])
          J = W[de];
        else {
          if (hr(N) === "array")
            for (var le = 0; le < C.length; le++) {
              var ie = C[le];
              if (q <= ie) {
                J = N[le];
                break;
              }
              if (q >= ie && le === C.length - 1) {
                J = N[le];
                break;
              }
              if (q > ie && q < C[le + 1]) {
                q = (q - ie) / (C[le + 1] - ie), J = Et.interpolate(N[le], N[le + 1], q, s);
                break;
              }
            }
          else
            hr(N) === "function" && (J = N(q));
          V && (W[de] = J);
        }
        return J;
      }, tt = function() {
        return W = {};
      };
      ee(a);
      var ne = function(R) {
        var Q = Et(Le(R));
        return T && Q[T] ? Q[T]() : Q;
      };
      return ne.classes = function(R) {
        if (R != null) {
          if (hr(R) === "array")
            j = R, g = [R[0], R[R.length - 1]];
          else {
            var Q = Et.analyze(g);
            R === 0 ? j = [Q.min, Q.max] : j = Et.limits(Q, "e", R);
          }
          return ne;
        }
        return j;
      }, ne.domain = function(R) {
        if (!arguments.length)
          return g;
        L = R[0], A = R[R.length - 1], C = [];
        var Q = N.length;
        if (R.length === Q && L !== A)
          for (var J = 0, q = Array.from(R); J < q.length; J += 1) {
            var ze = q[J];
            C.push((ze - L) / (A - L));
          }
        else {
          for (var de = 0; de < Q; de++)
            C.push(de / (Q - 1));
          if (R.length > 2) {
            var le = R.map(function(se, ue) {
              return ue / (R.length - 1);
            }), ie = R.map(function(se) {
              return (se - L) / (A - L);
            });
            ie.every(function(se, ue) {
              return le[ue] === se;
            }) || (Me = function(se) {
              if (se <= 0 || se >= 1)
                return se;
              for (var ue = 0; se >= ie[ue + 1]; )
                ue++;
              var Nt = (se - ie[ue]) / (ie[ue + 1] - ie[ue]), dn = le[ue] + Nt * (le[ue + 1] - le[ue]);
              return dn;
            });
          }
        }
        return g = [L, A], ne;
      }, ne.mode = function(R) {
        return arguments.length ? (s = R, tt(), ne) : s;
      }, ne.range = function(R, Q) {
        return ee(R), ne;
      }, ne.out = function(R) {
        return T = R, ne;
      }, ne.spread = function(R) {
        return arguments.length ? (h = R, ne) : h;
      }, ne.correctLightness = function(R) {
        return R == null && (R = !0), I = R, tt(), I ? ae = function(Q) {
          for (var J = Le(0, !0).lab()[0], q = Le(1, !0).lab()[0], ze = J > q, de = Le(Q, !0).lab()[0], le = J + (q - J) * Q, ie = de - le, se = 0, ue = 1, Nt = 20; Math.abs(ie) > 0.01 && Nt-- > 0; )
            (function() {
              return ze && (ie *= -1), ie < 0 ? (se = Q, Q += (ue - Q) * 0.5) : (ue = Q, Q += (se - Q) * 0.5), de = Le(Q, !0).lab()[0], ie = de - le;
            })();
          return Q;
        } : ae = function(Q) {
          return Q;
        }, ne;
      }, ne.padding = function(R) {
        return R != null ? (hr(R) === "number" && (R = [R, R]), v = R, ne) : v;
      }, ne.colors = function(R, Q) {
        arguments.length < 2 && (Q = "hex");
        var J = [];
        if (arguments.length === 0)
          J = N.slice(0);
        else if (R === 1)
          J = [ne(0.5)];
        else if (R > 1) {
          var q = g[0], ze = g[1] - q;
          J = Wm(0, R, !1).map(function(ue) {
            return ne(q + ue / (R - 1) * ze);
          });
        } else {
          a = [];
          var de = [];
          if (j && j.length > 2)
            for (var le = 1, ie = j.length, se = 1 <= ie; se ? le < ie : le > ie; se ? le++ : le--)
              de.push((j[le - 1] + j[le]) * 0.5);
          else
            de = g;
          J = de.map(function(ue) {
            return ne(ue);
          });
        }
        return Et[Q] && (J = J.map(function(ue) {
          return ue[Q]();
        })), J;
      }, ne.cache = function(R) {
        return R != null ? (V = R, ne) : V;
      }, ne.gamma = function(R) {
        return R != null ? (K = R, ne) : K;
      }, ne.nodata = function(R) {
        return R != null ? (c = Et(R), ne) : c;
      }, ne;
    };
    function Wm(a, s, c) {
      for (var h = [], g = a < s, C = c ? g ? s + 1 : s - 1 : s, v = a; g ? v < C : v > C; g ? v++ : v--)
        h.push(v);
      return h;
    }
    var Jr = D, Qm = ii, Ym = function(a) {
      for (var s = [1, 1], c = 1; c < a; c++) {
        for (var h = [1], g = 1; g <= s.length; g++)
          h[g] = (s[g] || 0) + s[g - 1];
        s = h;
      }
      return s;
    }, Gm = function(a) {
      var s, c, h, g, C, v, j;
      if (a = a.map(function(I) {
        return new Jr(I);
      }), a.length === 2)
        s = a.map(function(I) {
          return I.lab();
        }), C = s[0], v = s[1], g = function(I) {
          var W = [0, 1, 2].map(function(V) {
            return C[V] + I * (v[V] - C[V]);
          });
          return new Jr(W, "lab");
        };
      else if (a.length === 3)
        c = a.map(function(I) {
          return I.lab();
        }), C = c[0], v = c[1], j = c[2], g = function(I) {
          var W = [0, 1, 2].map(function(V) {
            return (1 - I) * (1 - I) * C[V] + 2 * (1 - I) * I * v[V] + I * I * j[V];
          });
          return new Jr(W, "lab");
        };
      else if (a.length === 4) {
        var N;
        h = a.map(function(I) {
          return I.lab();
        }), C = h[0], v = h[1], j = h[2], N = h[3], g = function(I) {
          var W = [0, 1, 2].map(function(V) {
            return (1 - I) * (1 - I) * (1 - I) * C[V] + 3 * (1 - I) * (1 - I) * I * v[V] + 3 * (1 - I) * I * I * j[V] + I * I * I * N[V];
          });
          return new Jr(W, "lab");
        };
      } else if (a.length >= 5) {
        var T, L, A;
        T = a.map(function(I) {
          return I.lab();
        }), A = a.length - 1, L = Ym(A), g = function(I) {
          var W = 1 - I, V = [0, 1, 2].map(function(K) {
            return T.reduce(function(ee, re, ae) {
              return ee + L[ae] * Math.pow(W, A - ae) * Math.pow(I, ae) * re[K];
            }, 0);
          });
          return new Jr(V, "lab");
        };
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return g;
    }, Xm = function(a) {
      var s = Gm(a);
      return s.scale = function() {
        return Qm(s);
      }, s;
    }, si = F, jt = function(a, s, c) {
      if (!jt[c])
        throw new Error("unknown blend mode " + c);
      return jt[c](a, s);
    }, cn = function(a) {
      return function(s, c) {
        var h = si(c).rgb(), g = si(s).rgb();
        return si.rgb(a(h, g));
      };
    }, fn = function(a) {
      return function(s, c) {
        var h = [];
        return h[0] = a(s[0], c[0]), h[1] = a(s[1], c[1]), h[2] = a(s[2], c[2]), h;
      };
    }, Km = function(a) {
      return a;
    }, qm = function(a, s) {
      return a * s / 255;
    }, Zm = function(a, s) {
      return a > s ? s : a;
    }, Jm = function(a, s) {
      return a > s ? a : s;
    }, eg = function(a, s) {
      return 255 * (1 - (1 - a / 255) * (1 - s / 255));
    }, tg = function(a, s) {
      return s < 128 ? 2 * a * s / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - s / 255));
    }, ng = function(a, s) {
      return 255 * (1 - (1 - s / 255) / (a / 255));
    }, rg = function(a, s) {
      return a === 255 ? 255 : (a = 255 * (s / 255) / (1 - a / 255), a > 255 ? 255 : a);
    };
    jt.normal = cn(fn(Km)), jt.multiply = cn(fn(qm)), jt.screen = cn(fn(eg)), jt.overlay = cn(fn(tg)), jt.darken = cn(fn(Zm)), jt.lighten = cn(fn(Jm)), jt.dodge = cn(fn(rg)), jt.burn = cn(fn(ng));
    for (var lg = jt, ui = w.type, og = w.clip_rgb, ag = w.TWOPI, ig = Math.pow, sg = Math.sin, ug = Math.cos, Dc = F, cg = function(a, s, c, h, g) {
      a === void 0 && (a = 300), s === void 0 && (s = -1.5), c === void 0 && (c = 1), h === void 0 && (h = 1), g === void 0 && (g = [0, 1]);
      var C = 0, v;
      ui(g) === "array" ? v = g[1] - g[0] : (v = 0, g = [g, g]);
      var j = function(N) {
        var T = ag * ((a + 120) / 360 + s * N), L = ig(g[0] + v * N, h), A = C !== 0 ? c[0] + N * C : c, I = A * L * (1 - L) / 2, W = ug(T), V = sg(T), K = L + I * (-0.14861 * W + 1.78277 * V), ee = L + I * (-0.29227 * W - 0.90649 * V), re = L + I * (1.97294 * W);
        return Dc(og([K * 255, ee * 255, re * 255, 1]));
      };
      return j.start = function(N) {
        return N == null ? a : (a = N, j);
      }, j.rotations = function(N) {
        return N == null ? s : (s = N, j);
      }, j.gamma = function(N) {
        return N == null ? h : (h = N, j);
      }, j.hue = function(N) {
        return N == null ? c : (c = N, ui(c) === "array" ? (C = c[1] - c[0], C === 0 && (c = c[1])) : C = 0, j);
      }, j.lightness = function(N) {
        return N == null ? g : (ui(N) === "array" ? (g = N, v = N[1] - N[0]) : (g = [N, N], v = 0), j);
      }, j.scale = function() {
        return Dc.scale(j);
      }, j.hue(c), j;
    }, fg = D, dg = "0123456789abcdef", pg = Math.floor, hg = Math.random, vg = function() {
      for (var a = "#", s = 0; s < 6; s++)
        a += dg.charAt(pg(hg() * 16));
      return new fg(a, "hex");
    }, ci = p, Lc = Math.log, mg = Math.pow, gg = Math.floor, yg = Math.abs, Ic = function(a, s) {
      s === void 0 && (s = null);
      var c = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      return ci(a) === "object" && (a = Object.values(a)), a.forEach(function(h) {
        s && ci(h) === "object" && (h = h[s]), h != null && !isNaN(h) && (c.values.push(h), c.sum += h, h < c.min && (c.min = h), h > c.max && (c.max = h), c.count += 1);
      }), c.domain = [c.min, c.max], c.limits = function(h, g) {
        return Rc(c, h, g);
      }, c;
    }, Rc = function(a, s, c) {
      s === void 0 && (s = "equal"), c === void 0 && (c = 7), ci(a) == "array" && (a = Ic(a));
      var h = a.min, g = a.max, C = a.values.sort(function(di, pi) {
        return di - pi;
      });
      if (c === 1)
        return [h, g];
      var v = [];
      if (s.substr(0, 1) === "c" && (v.push(h), v.push(g)), s.substr(0, 1) === "e") {
        v.push(h);
        for (var j = 1; j < c; j++)
          v.push(h + j / c * (g - h));
        v.push(g);
      } else if (s.substr(0, 1) === "l") {
        if (h <= 0)
          throw new Error("Logarithmic scales are only possible for values > 0");
        var N = Math.LOG10E * Lc(h), T = Math.LOG10E * Lc(g);
        v.push(h);
        for (var L = 1; L < c; L++)
          v.push(mg(10, N + L / c * (T - N)));
        v.push(g);
      } else if (s.substr(0, 1) === "q") {
        v.push(h);
        for (var A = 1; A < c; A++) {
          var I = (C.length - 1) * A / c, W = gg(I);
          if (W === I)
            v.push(C[W]);
          else {
            var V = I - W;
            v.push(C[W] * (1 - V) + C[W + 1] * V);
          }
        }
        v.push(g);
      } else if (s.substr(0, 1) === "k") {
        var K, ee = C.length, re = new Array(ee), ae = new Array(c), Me = !0, Le = 0, tt = null;
        tt = [], tt.push(h);
        for (var ne = 1; ne < c; ne++)
          tt.push(h + ne / c * (g - h));
        for (tt.push(g); Me; ) {
          for (var R = 0; R < c; R++)
            ae[R] = 0;
          for (var Q = 0; Q < ee; Q++)
            for (var J = C[Q], q = Number.MAX_VALUE, ze = void 0, de = 0; de < c; de++) {
              var le = yg(tt[de] - J);
              le < q && (q = le, ze = de), ae[ze]++, re[Q] = ze;
            }
          for (var ie = new Array(c), se = 0; se < c; se++)
            ie[se] = null;
          for (var ue = 0; ue < ee; ue++)
            K = re[ue], ie[K] === null ? ie[K] = C[ue] : ie[K] += C[ue];
          for (var Nt = 0; Nt < c; Nt++)
            ie[Nt] *= 1 / ae[Nt];
          Me = !1;
          for (var dn = 0; dn < c; dn++)
            if (ie[dn] !== tt[dn]) {
              Me = !0;
              break;
            }
          tt = ie, Le++, Le > 200 && (Me = !1);
        }
        for (var pn = {}, vr = 0; vr < c; vr++)
          pn[vr] = [];
        for (var mr = 0; mr < ee; mr++)
          K = re[mr], pn[K].push(C[mr]);
        for (var Yt = [], Un = 0; Un < c; Un++)
          Yt.push(pn[Un][0]), Yt.push(pn[Un][pn[Un].length - 1]);
        Yt = Yt.sort(function(di, pi) {
          return di - pi;
        }), v.push(Yt[0]);
        for (var el = 1; el < Yt.length; el += 2) {
          var Vn = Yt[el];
          !isNaN(Vn) && v.indexOf(Vn) === -1 && v.push(Vn);
        }
      }
      return v;
    }, Oc = { analyze: Ic, limits: Rc }, Mc = D, wg = function(a, s) {
      a = new Mc(a), s = new Mc(s);
      var c = a.luminance(), h = s.luminance();
      return c > h ? (c + 0.05) / (h + 0.05) : (h + 0.05) / (c + 0.05);
    }, zc = D, Qt = Math.sqrt, Ne = Math.pow, xg = Math.min, kg = Math.max, Fc = Math.atan2, Ac = Math.abs, co = Math.cos, Bc = Math.sin, Cg = Math.exp, Uc = Math.PI, Sg = function(a, s, c, h, g) {
      c === void 0 && (c = 1), h === void 0 && (h = 1), g === void 0 && (g = 1);
      var C = function(Vn) {
        return 360 * Vn / (2 * Uc);
      }, v = function(Vn) {
        return 2 * Uc * Vn / 360;
      };
      a = new zc(a), s = new zc(s);
      var j = Array.from(a.lab()), N = j[0], T = j[1], L = j[2], A = Array.from(s.lab()), I = A[0], W = A[1], V = A[2], K = (N + I) / 2, ee = Qt(Ne(T, 2) + Ne(L, 2)), re = Qt(Ne(W, 2) + Ne(V, 2)), ae = (ee + re) / 2, Me = 0.5 * (1 - Qt(Ne(ae, 7) / (Ne(ae, 7) + Ne(25, 7)))), Le = T * (1 + Me), tt = W * (1 + Me), ne = Qt(Ne(Le, 2) + Ne(L, 2)), R = Qt(Ne(tt, 2) + Ne(V, 2)), Q = (ne + R) / 2, J = C(Fc(L, Le)), q = C(Fc(V, tt)), ze = J >= 0 ? J : J + 360, de = q >= 0 ? q : q + 360, le = Ac(ze - de) > 180 ? (ze + de + 360) / 2 : (ze + de) / 2, ie = 1 - 0.17 * co(v(le - 30)) + 0.24 * co(v(2 * le)) + 0.32 * co(v(3 * le + 6)) - 0.2 * co(v(4 * le - 63)), se = de - ze;
      se = Ac(se) <= 180 ? se : de <= ze ? se + 360 : se - 360, se = 2 * Qt(ne * R) * Bc(v(se) / 2);
      var ue = I - N, Nt = R - ne, dn = 1 + 0.015 * Ne(K - 50, 2) / Qt(20 + Ne(K - 50, 2)), pn = 1 + 0.045 * Q, vr = 1 + 0.015 * Q * ie, mr = 30 * Cg(-Ne((le - 275) / 25, 2)), Yt = 2 * Qt(Ne(Q, 7) / (Ne(Q, 7) + Ne(25, 7))), Un = -Yt * Bc(2 * v(mr)), el = Qt(Ne(ue / (c * dn), 2) + Ne(Nt / (h * pn), 2) + Ne(se / (g * vr), 2) + Un * (Nt / (h * pn)) * (se / (g * vr)));
      return kg(0, xg(100, el));
    }, Vc = D, Eg = function(a, s, c) {
      c === void 0 && (c = "lab"), a = new Vc(a), s = new Vc(s);
      var h = a.get(c), g = s.get(c), C = 0;
      for (var v in h) {
        var j = (h[v] || 0) - (g[v] || 0);
        C += j * j;
      }
      return Math.sqrt(C);
    }, jg = D, Ng = function() {
      for (var a = [], s = arguments.length; s--; )
        a[s] = arguments[s];
      try {
        return new (Function.prototype.bind.apply(jg, [null].concat(a)))(), !0;
      } catch {
        return !1;
      }
    }, Hc = F, Wc = ii, _g = {
      cool: function() {
        return Wc([Hc.hsl(180, 1, 0.9), Hc.hsl(250, 0.7, 0.4)]);
      },
      hot: function() {
        return Wc(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      }
    }, fo = {
      // sequential
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      // diverging
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      // qualitative
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    }, fi = 0, Qc = Object.keys(fo); fi < Qc.length; fi += 1) {
      var Yc = Qc[fi];
      fo[Yc.toLowerCase()] = fo[Yc];
    }
    var Pg = fo, De = F;
    De.average = Um, De.bezier = Xm, De.blend = lg, De.cubehelix = cg, De.mix = De.interpolate = Sc, De.random = vg, De.scale = ii, De.analyze = Oc.analyze, De.contrast = wg, De.deltaE = Sg, De.distance = Eg, De.limits = Oc.limits, De.valid = Ng, De.scales = _g, De.colors = oc, De.brewer = Pg;
    var Tg = De;
    return Tg;
  });
})(Ah);
var Nw = Ah.exports;
const Bh = /* @__PURE__ */ zs(Nw);
function Sl() {
  return Sl = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Sl.apply(this, arguments);
}
var _w = function(t, n) {
  n === void 0 && (n = !0), $.useEffect(function() {
    if (n) {
      var r = function(o) {
        o.key === "Escape" && t(o);
      };
      return document.addEventListener("keyup", r), function() {
        n && document.removeEventListener("keyup", r);
      };
    }
  }, [t, n]);
}, Pw = function(t, n) {
  n === void 0 && (n = !0), $.useEffect(function() {
    if (n) {
      var r = function() {
        t();
      };
      return window.addEventListener("resize", r), function() {
        n && window.removeEventListener("resize", r);
      };
    }
  }, [t, n]);
}, Tw = function(t, n, r) {
  r === void 0 && (r = !0), $.useEffect(function() {
    if (r) {
      var l = function(i) {
        var u = Array.isArray(t) ? t : [t], f = !1;
        u.forEach(function(p) {
          if (!p.current || p.current.contains(i.target)) {
            f = !0;
            return;
          }
        }), i.stopPropagation(), f || n(i);
      };
      return document.addEventListener("mousedown", l), document.addEventListener("touchstart", l), function() {
        r && (document.removeEventListener("mousedown", l), document.removeEventListener("touchstart", l));
      };
    }
  }, [t, n, r]);
}, bw = function(t, n) {
  n === void 0 && (n = !0), $.useEffect(function() {
    if (n) {
      var r = function(o) {
        if (o.keyCode === 9) {
          var i, u = t == null || (i = t.current) === null || i === void 0 ? void 0 : i.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'), f = Array.prototype.slice.call(u);
          if (f.length === 1) {
            o.preventDefault();
            return;
          }
          var p = f[0], y = f[f.length - 1];
          o.shiftKey && document.activeElement === p ? (o.preventDefault(), y.focus()) : document.activeElement === y && (o.preventDefault(), p.focus());
        }
      };
      return document.addEventListener("keydown", r), function() {
        n && document.removeEventListener("keydown", r);
      };
    }
  }, [t, n]);
}, $w = typeof window < "u" ? $.useLayoutEffect : $.useEffect, ul = {
  popupContent: {
    tooltip: {
      position: "absolute",
      zIndex: 999
    },
    modal: {
      position: "relative",
      margin: "auto"
    }
  },
  popupArrow: {
    height: "8px",
    width: "16px",
    position: "absolute",
    background: "transparent",
    color: "#FFF",
    zIndex: -1
  },
  overlay: {
    tooltip: {
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      zIndex: 999
    },
    modal: {
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      display: "flex",
      zIndex: 999
    }
  }
}, Dw = ["top left", "top center", "top right", "right top", "right center", "right bottom", "bottom left", "bottom center", "bottom right", "left top", "left center", "left bottom"], Lw = function(t, n, r, l, o) {
  var i = o.offsetX, u = o.offsetY, f = l ? 8 : 0, p = r.split(" "), y = t.top + t.height / 2, k = t.left + t.width / 2, S = n.height, _ = n.width, P = y - S / 2, w = k - _ / 2, M = "", x = "0%", m = "0%";
  switch (p[0]) {
    case "top":
      P -= S / 2 + t.height / 2 + f, M = "rotate(180deg)  translateX(50%)", x = "100%", m = "50%";
      break;
    case "bottom":
      P += S / 2 + t.height / 2 + f, M = "rotate(0deg) translateY(-100%) translateX(-50%)", m = "50%";
      break;
    case "left":
      w -= _ / 2 + t.width / 2 + f, M = " rotate(90deg)  translateY(50%) translateX(-25%)", m = "100%", x = "50%";
      break;
    case "right":
      w += _ / 2 + t.width / 2 + f, M = "rotate(-90deg)  translateY(-150%) translateX(25%)", x = "50%";
      break;
  }
  switch (p[1]) {
    case "top":
      P = t.top, x = t.height / 2 + "px";
      break;
    case "bottom":
      P = t.top - S + t.height, x = S - t.height / 2 + "px";
      break;
    case "left":
      w = t.left, m = t.width / 2 + "px";
      break;
    case "right":
      w = t.left - _ + t.width, m = _ - t.width / 2 + "px";
      break;
  }
  return P = p[0] === "top" ? P - u : P + u, w = p[0] === "left" ? w - i : w + i, {
    top: P,
    left: w,
    transform: M,
    arrowLeft: m,
    arrowTop: x
  };
}, Iw = function(t) {
  var n = {
    top: 0,
    left: 0,
    /* eslint-disable-next-line no-undef */
    width: window.innerWidth,
    /* eslint-disable-next-line no-undef */
    height: window.innerHeight
  };
  if (typeof t == "string") {
    var r = document.querySelector(t);
    r !== null && (n = r.getBoundingClientRect());
  }
  return n;
}, Rw = function(t, n, r, l, o, i) {
  var u = o.offsetX, f = o.offsetY, p = {
    arrowLeft: "0%",
    arrowTop: "0%",
    left: 0,
    top: 0,
    transform: "rotate(135deg)"
  }, y = 0, k = Iw(i), S = Array.isArray(r) ? r : [r];
  for ((i || Array.isArray(r)) && (S = [].concat(S, Dw)); y < S.length; ) {
    p = Lw(t, n, S[y], l, {
      offsetX: u,
      offsetY: f
    });
    var _ = {
      top: p.top,
      left: p.left,
      width: n.width,
      height: n.height
    };
    if (_.top <= k.top || _.left <= k.left || _.top + _.height >= k.top + k.height || _.left + _.width >= k.left + k.width)
      y++;
    else
      break;
  }
  return p;
}, Ow = 0, Mw = function() {
  var t = document.getElementById("popup-root");
  return t === null && (t = document.createElement("div"), t.setAttribute("id", "popup-root"), document.body.appendChild(t)), t;
}, zw = /* @__PURE__ */ $.forwardRef(function(e, t) {
  var n = e.trigger, r = n === void 0 ? null : n, l = e.onOpen, o = l === void 0 ? function() {
  } : l, i = e.onClose, u = i === void 0 ? function() {
  } : i, f = e.defaultOpen, p = f === void 0 ? !1 : f, y = e.open, k = y === void 0 ? void 0 : y, S = e.disabled, _ = S === void 0 ? !1 : S, P = e.nested, w = P === void 0 ? !1 : P, M = e.closeOnDocumentClick, x = M === void 0 ? !0 : M, m = e.repositionOnResize, E = m === void 0 ? !0 : m, b = e.closeOnEscape, z = b === void 0 ? !0 : b, D = e.on, U = D === void 0 ? ["click"] : D, F = e.contentStyle, he = F === void 0 ? {} : F, X = e.arrowStyle, Oe = X === void 0 ? {} : X, Rt = e.overlayStyle, Ht = Rt === void 0 ? {} : Rt, Mn = e.className, Ot = Mn === void 0 ? "" : Mn, ln = e.position, on = ln === void 0 ? "bottom center" : ln, B = e.modal, Y = B === void 0 ? !1 : B, G = e.lockScroll, fe = G === void 0 ? !1 : G, ye = e.arrow, Mt = ye === void 0 ? !0 : ye, et = e.offsetX, zn = et === void 0 ? 0 : et, vt = e.offsetY, an = vt === void 0 ? 0 : vt, Gl = e.mouseEnterDelay, Xl = Gl === void 0 ? 100 : Gl, Kl = e.mouseLeaveDelay, La = Kl === void 0 ? 100 : Kl, ql = e.keepTooltipInside, Ia = ql === void 0 ? !1 : ql, sn = e.children, Zl = $.useState(k || p), mt = Zl[0], Jl = Zl[1], it = $.useRef(null), Xe = $.useRef(null), zt = $.useRef(null), Gr = $.useRef(null), Xr = $.useRef("popup-" + ++Ow), Ve = Y ? !0 : !r, un = $.useRef(0);
  $w(function() {
    return mt ? (Gr.current = document.activeElement, Kr(), to(), Ra()) : Oa(), function() {
      clearTimeout(un.current);
    };
  }, [mt]), $.useEffect(function() {
    typeof k == "boolean" && (k ? Fn() : St());
  }, [k, _]);
  var Fn = function(Z) {
    mt || _ || (Jl(!0), setTimeout(function() {
      return o(Z);
    }, 0));
  }, St = function(Z) {
    var He;
    !mt || _ || (Jl(!1), Ve && ((He = Gr.current) === null || He === void 0 || He.focus()), setTimeout(function() {
      return u(Z);
    }, 0));
  }, lr = function(Z) {
    Z == null || Z.stopPropagation(), mt ? St(Z) : Fn(Z);
  }, or = function(Z) {
    clearTimeout(un.current), un.current = setTimeout(function() {
      return Fn(Z);
    }, Xl);
  }, eo = function(Z) {
    Z == null || Z.preventDefault(), lr();
  }, ar = function(Z) {
    clearTimeout(un.current), un.current = setTimeout(function() {
      return St(Z);
    }, La);
  }, Ra = function() {
    Ve && fe && (document.getElementsByTagName("body")[0].style.overflow = "hidden");
  }, Oa = function() {
    Ve && fe && (document.getElementsByTagName("body")[0].style.overflow = "auto");
  }, to = function() {
    var Z, He = Xe == null || (Z = Xe.current) === null || Z === void 0 ? void 0 : Z.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'), je = Array.prototype.slice.call(He)[0];
    je == null || je.focus();
  };
  $.useImperativeHandle(t, function() {
    return {
      open: function() {
        Fn();
      },
      close: function() {
        St();
      },
      toggle: function() {
        lr();
      }
    };
  });
  var Kr = function() {
    if (!(Ve || !mt) && !(!(it != null && it.current) || !(it != null && it.current) || !(Xe != null && Xe.current))) {
      var Z = it.current.getBoundingClientRect(), He = Xe.current.getBoundingClientRect(), je = Rw(Z, He, on, Mt, {
        offsetX: zn,
        offsetY: an
      }, Ia);
      if (Xe.current.style.top = je.top + window.scrollY + "px", Xe.current.style.left = je.left + window.scrollX + "px", Mt && zt.current) {
        var Wt, An;
        zt.current.style.transform = je.transform, zt.current.style.setProperty("-ms-transform", je.transform), zt.current.style.setProperty("-webkit-transform", je.transform), zt.current.style.top = ((Wt = Oe.top) === null || Wt === void 0 ? void 0 : Wt.toString()) || je.arrowTop, zt.current.style.left = ((An = Oe.left) === null || An === void 0 ? void 0 : An.toString()) || je.arrowLeft;
      }
    }
  };
  _w(St, z), bw(Xe, mt && Ve), Pw(Kr, E), Tw(r ? [Xe, it] : [Xe], St, x && !w);
  var Ma = function() {
    for (var Z = {
      key: "T",
      ref: it,
      "aria-describedby": Xr.current
    }, He = Array.isArray(U) ? U : [U], je = 0, Wt = He.length; je < Wt; je++)
      switch (He[je]) {
        case "click":
          Z.onClick = lr;
          break;
        case "right-click":
          Z.onContextMenu = eo;
          break;
        case "hover":
          Z.onMouseEnter = or, Z.onMouseLeave = ar;
          break;
        case "focus":
          Z.onFocus = or, Z.onBlur = ar;
          break;
      }
    if (typeof r == "function") {
      var An = r(mt);
      return !!r && Pt.cloneElement(An, Z);
    }
    return !!r && Pt.cloneElement(r, Z);
  }, za = function() {
    var Z = Ve ? ul.popupContent.modal : ul.popupContent.tooltip, He = {
      className: "popup-content " + (Ot !== "" ? Ot.split(" ").map(function(je) {
        return je + "-content";
      }).join(" ") : ""),
      style: Sl({}, Z, he, {
        pointerEvents: "auto"
      }),
      ref: Xe,
      onClick: function(Wt) {
        Wt.stopPropagation();
      }
    };
    return !Y && U.indexOf("hover") >= 0 && (He.onMouseEnter = or, He.onMouseLeave = ar), He;
  }, qr = function() {
    return Pt.createElement("div", Object.assign({}, za(), {
      key: "C",
      role: Ve ? "dialog" : "tooltip",
      id: Xr.current
    }), Mt && !Ve && Pt.createElement("div", {
      ref: zt,
      style: ul.popupArrow
    }, Pt.createElement("svg", {
      "data-testid": "arrow",
      className: "popup-arrow " + (Ot !== "" ? Ot.split(" ").map(function(Z) {
        return Z + "-arrow";
      }).join(" ") : ""),
      viewBox: "0 0 32 16",
      style: Sl({
        position: "absolute"
      }, Oe)
    }, Pt.createElement("path", {
      d: "M16 0l16 16H0z",
      fill: "currentcolor"
    }))), sn && typeof sn == "function" ? sn(St, mt) : sn);
  }, no = !(U.indexOf("hover") >= 0), Fa = Ve ? ul.overlay.modal : ul.overlay.tooltip, Aa = [no && Pt.createElement("div", {
    key: "O",
    "data-testid": "overlay",
    "data-popup": Ve ? "modal" : "tooltip",
    className: "popup-overlay " + (Ot !== "" ? Ot.split(" ").map(function(Te) {
      return Te + "-overlay";
    }).join(" ") : ""),
    style: Sl({}, Fa, Ht, {
      pointerEvents: x && w || Ve ? "auto" : "none"
    }),
    onClick: x && w ? St : void 0,
    tabIndex: -1
  }, Ve && qr()), !Ve && qr()];
  return Pt.createElement(Pt.Fragment, null, Ma(), mt && r2.createPortal(Aa, Mw()));
});
const Fw = () => {
  const e = "🍎🍏🍊🍋🍒🍇🍉🍓🍑🍈🍌🍐🍍🫐🥝🥥🥛🥑🍨🍠", t = [
    "DC2424",
    // apple
    "7CBB2D",
    // green apple
    "E48532",
    // orange
    "FBD438",
    // lemon
    "CB2236",
    // cherry
    "BE4279",
    // grape
    "E2454A",
    // watermelon
    "B31D1A",
    // strawberry
    "F68244",
    // peach
    "E4E4A6",
    // melon
    "FCE16A",
    // banana
    "CBCF58",
    // pear
    "D28930",
    // pineapple
    "84BCF8",
    // blueberry
    "A5BD40",
    // kiwi
    "E4E1D5",
    // coconut
    "FCFBF7",
    // milk
    "E8E868",
    // avocado
    "EED4A0",
    // ice cream
    "EED4A0"
    // yam
  ], n = [...e], [r, l] = $.useState([]), [o, i] = $.useState([]), u = (y, k) => {
    r.length < 3 && (l((S) => [y, ...S]), i((S) => [...S, t[k]]));
  }, f = () => {
    if (o.length > 2)
      return Bh.average(o).css();
  }, p = () => {
    l([]), i([]);
  };
  return d.jsx(d.Fragment, { children: d.jsxs("div", { className: "d-flex vh-100 justify-content-center align-items-center", children: [d.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [d.jsx("img", { src: "/Advent/blender.jpeg", alt: "blender", style: { height: "50vh", padding: 30 } }), d.jsx("div", { className: "d-flex flex-column", style: {
    marginTop: "-150px",
    position: "fixed",
    fontSize: 40
  }, children: r.map((y, k) => d.jsx("span", { children: y }, k)) }), d.jsxs("div", { className: "d-flex justify-content-center align-items-center", children: [d.jsx(zw, { trigger: d.jsx("button", { style: { width: 50, marginRight: 20 }, children: "Blend" }), className: "popup-content", modal: !0, children: d.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [d.jsx("span", { children: "Enjoy your smoothie <3" }), d.jsx("div", { className: "filter d-flex justify-content-center align-items-center", style: {
    backgroundColor: f()
  } }), d.jsx("img", { src: "/Advent/smoothie.png", alt: "smoothie", id: "smoothie" })] }) }), d.jsx("button", { onClick: p, children: "Clear" })] })] }), d.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [d.jsx("span", { children: "Choose 3 Ingredients." }), d.jsx("div", { className: "d-flex flex-wrap justify-content-center align-items-center p-3", style: { width: "35vw" }, children: n.map((y, k) => d.jsx(d.Fragment, { children: d.jsx("span", { onClick: () => u(y, k), style: { cursor: "pointer", fontSize: 50 }, children: y }, k) })) })] })] }) });
}, Aw = () => {
  const [e, t] = $.useState([]), n = (r) => {
    t((l) => [...l, r]);
  };
  return d.jsxs("div", { className: "d-flex vh-100 justify-content-center align-items-center", children: [d.jsxs("div", { className: "quilt d-flex flex-wrap justify-content-start align-items-center", children: [d.jsx("div", { className: "quilt-border quilt" }), e.map((r, l) => d.jsx("div", { children: d.jsx("img", { className: "patch", src: `/Advent/quilt/patch${r}.png` }) }, l))] }), d.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [d.jsx("span", { className: "mb-4", style: { fontSize: 20 }, children: "Make a quilt!" }), d.jsx("span", { children: "Patches" }), d.jsx("div", { className: "d-flex flex-wrap patch-container justify-content-center align-items-center", children: Array.from({ length: 11 }, (r, l) => 1 + l).map((r, l) => d.jsx("img", { className: "patch m-2 p-2", src: `/Advent/quilt/patch${r}.png`, onClick: () => n(r) }, l)) })] })] });
}, Bw = () => {
  const [e, t] = $.useState(/* @__PURE__ */ new Date());
  $.useEffect(() => {
    const u = setInterval(() => {
      t(/* @__PURE__ */ new Date());
    }, 1e3);
    return () => clearInterval(u);
  }, []);
  const n = () => e.getHours(), r = () => e.getMinutes(), l = () => e.getSeconds(), o = (u, f) => u % 12 * 30 + f * 0.5, i = (u) => u * 6;
  return d.jsxs("div", { className: "d-flex clock-container vh-100 justify-content-around align-items-center", children: [d.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [d.jsx("img", { className: "clock", src: "/Advent/clocks/clock1.png", alt: "first clock" }), d.jsx("div", { className: "hour-hand", style: {
    transform: `rotate(${o(n() - 2, r())}deg)`,
    transformOrigin: "50% 70%"
  } }), d.jsx("div", { className: "minute-hand", style: {
    transform: `rotate(${i(r())}deg)`,
    transformOrigin: "50% 75%"
  } }), d.jsx("div", { className: "second-hand", style: {
    transform: `rotate(${i(l())}deg)`,
    transformOrigin: "50% 75%"
  } }), d.jsx("div", { className: "clock-text", children: d.jsx("span", { children: "Cupertino, California" }) })] }), d.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [d.jsx("img", { className: "clock", src: "/Advent/clocks/clock2.png", alt: "second clock" }), d.jsx("div", { className: "hour-hand", style: {
    transform: `rotate(${o(n(), r())}deg)`,
    transformOrigin: "50% 70%"
  } }), d.jsx("div", { className: "minute-hand", style: {
    transform: `rotate(${i(r())}deg)`,
    transformOrigin: "50% 75%"
  } }), d.jsx("div", { className: "second-hand", style: {
    transform: `rotate(${i(l())}deg)`,
    transformOrigin: "50% 75%"
  } }), d.jsx("div", { className: "clock-text", children: d.jsx("span", { children: "Dallas, Texas" }) })] }), d.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [d.jsx("img", { className: "clock", src: "/Advent/clocks/clock3.png", alt: "third clock" }), d.jsx("div", { className: "hour-hand", style: {
    transform: `rotate(${o(n() + 1, r())}deg)`,
    transformOrigin: "50% 70%",
    backgroundColor: "#C31C2F",
    borderColor: "#911115"
  } }), d.jsx("div", { className: "minute-hand", style: {
    transform: `rotate(${i(r())}deg)`,
    transformOrigin: "50% 75%",
    backgroundColor: "#C31C2F",
    borderColor: "#911115"
  } }), d.jsx("div", { className: "second-hand", style: {
    transform: `rotate(${i(l())}deg)`,
    transformOrigin: "50% 75%",
    backgroundColor: "#C31C2F",
    borderColor: "#911115"
  } }), d.jsx("div", { className: "clock-text", children: d.jsx("span", { children: "New York, New York" }) })] })] });
}, Uw = () => {
  const [e, t] = $.useState(0), n = [
    "Follow your most intense obsessions mercilessly.",
    "I am a cage, in search of a bird.",
    "Anyone who keeps the ability to see beauty never grows old.",
    "A book must be the axe for the frozen sea within us.",
    "I am free and that is why I am lost.",
    "I cannot make you understand. I cannot make anyone understand what is happening inside me. I cannot even explain it to myself.",
    "All language is but a poor translation.",
    "I have the true feeling of myself only when I am unbearably unhappy.",
    "By believing passionately in something that still does not exist, we create it. The nonexistent is whatever we have not sufficiently desired."
  ], r = () => {
    t(e + 1);
  }, l = () => {
    t(0);
  };
  return d.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [d.jsx("span", { className: e === 0 ? "m-4" : "d-none", children: "Click me to crack open." }), d.jsx("img", { className: e === 0 ? "" : "d-none", src: "/Advent/fortune.jpeg", alt: "fortune cookie", onClick: r }), d.jsx("span", { className: e === 1 ? "m-4" : "d-none", children: "Click me to read your fortune." }), d.jsx("img", { className: e === 1 ? "m-4" : "d-none", src: "/Advent/fortune_2.png", alt: "open fortune", onClick: r }), d.jsx("span", { className: e === 2 ? "m-4" : "d-none", style: { width: 400, color: "#244684", textAlign: "center" }, onClick: r, children: n[Math.floor(Math.random() * n.length)] }), d.jsx("img", { className: e === 2 ? "m-4" : "d-none", style: { width: 500, position: "fixed", zIndex: -1 }, src: "/Advent/fortune_3.png", alt: "fortune message" }), d.jsxs("span", { className: e === 3 ? "m-4" : "d-none", style: { width: 400, color: "#244684", textAlign: "center" }, onClick: l, children: ["Your lucky numbers:", " ", Math.floor(Math.random() * 100) + ", " + Math.floor(Math.random() * 100) + ", " + Math.floor(Math.random() * 100)] }), d.jsx("img", { className: e === 3 ? "m-4" : "d-none", style: { width: 500, position: "fixed", zIndex: -1 }, src: "/Advent/fortune_3.png", alt: "fortune message" })] });
}, Vw = () => {
  const e = Bh.scale(["#3b8dcc", "#ffdbf8"]).mode("lab"), t = [
    "𖡼 . 𖤣 𓇗 𖡼 . 𖤣 𓇗 𖥧 𖡼 . 𓇗 𖤣 𖥧 𖡼 . 𖤣 𓇗 𖡼 . 𖤣 𓇗 𖥧 𖡼 . 𓇗 𖤣 𖥧",
    "𖤣 . 𖡼 𖥧 𓇢 𓆸 𖡼 . 𖤣 𖥧 𓆸 𖡼 . 𖤣 . 𖡼 𖥧 𓇢 𓆸 𖡼 . 𖤣 𖥧 𓆸 𖡼 .",
    "𖡼 . 𖤣 𑁍 . 𖤣 ❦ 𖥧 𖡼 🍎 𓇗 𖤣 𖥧 ❦ 𖡼 🐍 𖤣 𑁍 . 𖤣 ❦ 𖥧 𖡼 . 𓇗 𖤣",
    "❀ 𖤣 𖥧 𖡼 ⊱ ✿ ⊰ 𖡼 𖥧 𖤣 𖥧 𖡼 ⊱ ❀ 𖤣 𖥧 𖡼 ⊱ ✿ ⊰ 𖡼 𖥧 𖤣 𖥧 𖡼 ⊱",
    "₊ 𖤣 𖥧 𖡼 ˚ ✧ 𑁍 .ೃ ࿔ * : 𖤣 𖥧 𖡼 ₊ 𖤣 𖥧 𖡼 ˚ ✧ 𑁍 .ೃ ࿔ * : 𖤣 𖥧 𖡼"
  ], n = (r) => {
    if (r.target.style.color === "rgb(255, 219, 248)" || r.target.style.color === "rgb(253, 218, 248)")
      for (let l = 0; l <= 1; l += 0.01)
        setTimeout(() => {
          r.target.style.color = e(l).css();
        }, l * 2e3);
  };
  return d.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [d.jsx("span", { children: "The Garden of Eden" }), d.jsx("br", {}), t.map((r, l) => d.jsx("div", { className: "d-flex", children: r.split(" ").map((o, i) => d.jsx("span", { onMouseOver: n, style: { fontSize: 50, cursor: "pointer", color: "#ffdbf8" }, children: o }, i)) }, l))] });
}, Hw = () => {
  const [e, t] = $.useState([]), [n, r] = $.useState(!1), l = [
    "I",
    "II",
    "III",
    "IIII",
    "V",
    "VI",
    "VII",
    "VIII",
    "VIIII",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIIII",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XVIIII",
    "XX",
    "XXI",
    "fool"
  ], o = () => {
    if (e.length < 3) {
      let f = l[Math.floor(Math.random() * l.length)];
      for (; e.includes(f); )
        f = l[Math.floor(Math.random() * l.length)];
      t((p) => [...p, f]);
    }
  }, i = () => {
    t([]);
  }, u = () => {
    r(!0), setTimeout(() => {
      r(!1);
    }, 2e3);
  };
  return d.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [d.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center m-4", children: [d.jsx("span", { children: "Tarot Readings" }), d.jsx("span", { children: "Tarot de Marseille" }), d.jsx("span", { children: "Jean Dodal" })] }), d.jsx("div", { children: e.map((f, p) => d.jsx("img", { className: "fade-in m-2", src: `/Advent/cards/${f}.jpeg`, alt: "" }, p)) }), d.jsx("img", { className: n ? "rotate" : "", src: "/Advent/cards/back.jpeg", alt: "card backing" }), d.jsxs("div", { className: "d-flex flex-wrap m-4", children: [d.jsx("button", { onClick: u, className: "m-2", children: "Shuffle" }), d.jsx("button", { onClick: o, className: "m-2", children: "Draw" }), d.jsx("button", { onClick: i, className: "m-2", children: "Clear" })] })] });
}, Ww = () => {
  const e = ow(), t = aw();
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx(ew, { children: /* @__PURE__ */ d.jsxs(G2, { children: [
    /* @__PURE__ */ d.jsx(Se, { index: !0, element: /* @__PURE__ */ d.jsx(pd, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "/", element: /* @__PURE__ */ d.jsx(pd, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "galaxy", element: /* @__PURE__ */ d.jsx(gw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "phonebook", element: /* @__PURE__ */ d.jsx(fd.Tracks, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "auth/*", element: /* @__PURE__ */ d.jsx(fd.Tracks, {}) }),
    /* @__PURE__ */ d.jsx(
      Se,
      {
        path: "italy",
        element: /* @__PURE__ */ d.jsx(lw, { images: e, captions: t })
      }
    ),
    /* @__PURE__ */ d.jsx(Se, { path: "advent", element: /* @__PURE__ */ d.jsx(yw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/1", element: /* @__PURE__ */ d.jsx(ww, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/2", element: /* @__PURE__ */ d.jsx(xw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/3", element: /* @__PURE__ */ d.jsx(kw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/8", element: /* @__PURE__ */ d.jsx(Cw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/9", element: /* @__PURE__ */ d.jsx(Sw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/10", element: /* @__PURE__ */ d.jsx(Ew, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/11", element: /* @__PURE__ */ d.jsx(jw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/12", element: /* @__PURE__ */ d.jsx(Fw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/13", element: /* @__PURE__ */ d.jsx(Aw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/14", element: /* @__PURE__ */ d.jsx(Bw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/15", element: /* @__PURE__ */ d.jsx(Uw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/16", element: /* @__PURE__ */ d.jsx(Vw, {}) }),
    /* @__PURE__ */ d.jsx(Se, { path: "advent/17", element: /* @__PURE__ */ d.jsx(Hw, {}) })
  ] }) }) });
};
Bi.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ d.jsx(Pt.StrictMode, { children: /* @__PURE__ */ d.jsx(Ww, {}) })
);
