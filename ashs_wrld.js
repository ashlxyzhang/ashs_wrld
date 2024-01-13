import * as P from "react";
import Ne, { useState as J, useEffect as xe, useRef as Ye, forwardRef as $l, useImperativeHandle as El, useLayoutEffect as Al } from "react";
import wa from "react-dom";
var Dl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ja = { exports: {} }, er = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sl = Ne, Il = Symbol.for("react.element"), Tl = Symbol.for("react.fragment"), Ol = Object.prototype.hasOwnProperty, Ml = Sl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rl = { key: !0, ref: !0, __self: !0, __source: !0 };
function ka(n, o, r) {
  var i, c = {}, h = null, g = null;
  r !== void 0 && (h = "" + r), o.key !== void 0 && (h = "" + o.key), o.ref !== void 0 && (g = o.ref);
  for (i in o)
    Ol.call(o, i) && !Rl.hasOwnProperty(i) && (c[i] = o[i]);
  if (n && n.defaultProps)
    for (i in o = n.defaultProps, o)
      c[i] === void 0 && (c[i] = o[i]);
  return { $$typeof: Il, type: n, key: h, ref: g, props: c, _owner: Ml.current };
}
er.Fragment = Tl;
er.jsx = ka;
er.jsxs = ka;
ja.exports = er;
var s = ja.exports, qr = {}, ua = wa;
qr.createRoot = ua.createRoot, qr.hydrateRoot = ua.hydrateRoot;
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
function jt() {
  return jt = Object.assign ? Object.assign.bind() : function(n) {
    for (var o = 1; o < arguments.length; o++) {
      var r = arguments[o];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    }
    return n;
  }, jt.apply(this, arguments);
}
var Fe;
(function(n) {
  n.Pop = "POP", n.Push = "PUSH", n.Replace = "REPLACE";
})(Fe || (Fe = {}));
const fa = "popstate";
function Fl(n) {
  n === void 0 && (n = {});
  function o(i, c) {
    let {
      pathname: h,
      search: g,
      hash: x
    } = i.location;
    return Gr(
      "",
      {
        pathname: h,
        search: g,
        hash: x
      },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default"
    );
  }
  function r(i, c) {
    return typeof c == "string" ? c : Zt(c);
  }
  return Bl(o, r, null, n);
}
function ae(n, o) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(o);
}
function Hr(n, o) {
  if (!n) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {
    }
  }
}
function Ll() {
  return Math.random().toString(36).substr(2, 8);
}
function da(n, o) {
  return {
    usr: n.state,
    key: n.key,
    idx: o
  };
}
function Gr(n, o, r, i) {
  return r === void 0 && (r = null), jt({
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: ""
  }, typeof o == "string" ? it(o) : o, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: o && o.key || i || Ll()
  });
}
function Zt(n) {
  let {
    pathname: o = "/",
    search: r = "",
    hash: i = ""
  } = n;
  return r && r !== "?" && (o += r.charAt(0) === "?" ? r : "?" + r), i && i !== "#" && (o += i.charAt(0) === "#" ? i : "#" + i), o;
}
function it(n) {
  let o = {};
  if (n) {
    let r = n.indexOf("#");
    r >= 0 && (o.hash = n.substr(r), n = n.substr(0, r));
    let i = n.indexOf("?");
    i >= 0 && (o.search = n.substr(i), n = n.substr(0, i)), n && (o.pathname = n);
  }
  return o;
}
function Bl(n, o, r, i) {
  i === void 0 && (i = {});
  let {
    window: c = document.defaultView,
    v5Compat: h = !1
  } = i, g = c.history, x = Fe.Pop, b = null, w = k();
  w == null && (w = 0, g.replaceState(jt({}, g.state, {
    idx: w
  }), ""));
  function k() {
    return (g.state || {
      idx: null
    }).idx;
  }
  function _() {
    x = Fe.Pop;
    let T = k(), Y = T == null ? null : T - w;
    w = T, b && b({
      action: x,
      location: m.location,
      delta: Y
    });
  }
  function I(T, Y) {
    x = Fe.Push;
    let Z = Gr(m.location, T, Y);
    r && r(Z, T), w = k() + 1;
    let oe = da(Z, w), ee = m.createHref(Z);
    try {
      g.pushState(oe, "", ee);
    } catch (ge) {
      if (ge instanceof DOMException && ge.name === "DataCloneError")
        throw ge;
      c.location.assign(ee);
    }
    h && b && b({
      action: x,
      location: m.location,
      delta: 1
    });
  }
  function A(T, Y) {
    x = Fe.Replace;
    let Z = Gr(m.location, T, Y);
    r && r(Z, T), w = k();
    let oe = da(Z, w), ee = m.createHref(Z);
    g.replaceState(oe, "", ee), h && b && b({
      action: x,
      location: m.location,
      delta: 0
    });
  }
  function S(T) {
    let Y = c.location.origin !== "null" ? c.location.origin : c.location.href, Z = typeof T == "string" ? T : Zt(T);
    return ae(Y, "No window.location.(origin|href) available to create URL for href: " + Z), new URL(Z, Y);
  }
  let m = {
    get action() {
      return x;
    },
    get location() {
      return n(c, g);
    },
    listen(T) {
      if (b)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(fa, _), b = T, () => {
        c.removeEventListener(fa, _), b = null;
      };
    },
    createHref(T) {
      return o(c, T);
    },
    createURL: S,
    encodeLocation(T) {
      let Y = S(T);
      return {
        pathname: Y.pathname,
        search: Y.search,
        hash: Y.hash
      };
    },
    push: I,
    replace: A,
    go(T) {
      return g.go(T);
    }
  };
  return m;
}
var ha;
(function(n) {
  n.data = "data", n.deferred = "deferred", n.redirect = "redirect", n.error = "error";
})(ha || (ha = {}));
function zl(n, o, r) {
  r === void 0 && (r = "/");
  let i = typeof o == "string" ? it(o) : o, c = Vr(i.pathname || "/", r);
  if (c == null)
    return null;
  let h = Ca(n);
  Ul(h);
  let g = null;
  for (let x = 0; g == null && x < h.length; ++x)
    g = Zl(
      h[x],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      ec(c)
    );
  return g;
}
function Ca(n, o, r, i) {
  o === void 0 && (o = []), r === void 0 && (r = []), i === void 0 && (i = "");
  let c = (h, g, x) => {
    let b = {
      relativePath: x === void 0 ? h.path || "" : x,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: g,
      route: h
    };
    b.relativePath.startsWith("/") && (ae(b.relativePath.startsWith(i), 'Absolute route path "' + b.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), b.relativePath = b.relativePath.slice(i.length));
    let w = Le([i, b.relativePath]), k = r.concat(b);
    h.children && h.children.length > 0 && (ae(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + w + '".')
    ), Ca(h.children, o, k, w)), !(h.path == null && !h.index) && o.push({
      path: w,
      score: Vl(w, h.index),
      routesMeta: k
    });
  };
  return n.forEach((h, g) => {
    var x;
    if (h.path === "" || !((x = h.path) != null && x.includes("?")))
      c(h, g);
    else
      for (let b of Na(h.path))
        c(h, g, b);
  }), o;
}
function Na(n) {
  let o = n.split("/");
  if (o.length === 0)
    return [];
  let [r, ...i] = o, c = r.endsWith("?"), h = r.replace(/\?$/, "");
  if (i.length === 0)
    return c ? [h, ""] : [h];
  let g = Na(i.join("/")), x = [];
  return x.push(...g.map((b) => b === "" ? h : [h, b].join("/"))), c && x.push(...g), x.map((b) => n.startsWith("/") && b === "" ? "/" : b);
}
function Ul(n) {
  n.sort((o, r) => o.score !== r.score ? r.score - o.score : Jl(o.routesMeta.map((i) => i.childrenIndex), r.routesMeta.map((i) => i.childrenIndex)));
}
const ql = /^:\w+$/, Gl = 3, Wl = 2, Yl = 1, Xl = 10, Hl = -2, va = (n) => n === "*";
function Vl(n, o) {
  let r = n.split("/"), i = r.length;
  return r.some(va) && (i += Hl), o && (i += Wl), r.filter((c) => !va(c)).reduce((c, h) => c + (ql.test(h) ? Gl : h === "" ? Yl : Xl), i);
}
function Jl(n, o) {
  return n.length === o.length && n.slice(0, -1).every((i, c) => i === o[c]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    n[n.length - 1] - o[o.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Zl(n, o) {
  let {
    routesMeta: r
  } = n, i = {}, c = "/", h = [];
  for (let g = 0; g < r.length; ++g) {
    let x = r[g], b = g === r.length - 1, w = c === "/" ? o : o.slice(c.length) || "/", k = Ql({
      path: x.relativePath,
      caseSensitive: x.caseSensitive,
      end: b
    }, w);
    if (!k)
      return null;
    Object.assign(i, k.params);
    let _ = x.route;
    h.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: Le([c, k.pathname]),
      pathnameBase: ac(Le([c, k.pathnameBase])),
      route: _
    }), k.pathnameBase !== "/" && (c = Le([c, k.pathnameBase]));
  }
  return h;
}
function Ql(n, o) {
  typeof n == "string" && (n = {
    path: n,
    caseSensitive: !1,
    end: !0
  });
  let [r, i] = Kl(n.path, n.caseSensitive, n.end), c = o.match(r);
  if (!c)
    return null;
  let h = c[0], g = h.replace(/(.)\/+$/, "$1"), x = c.slice(1);
  return {
    params: i.reduce((w, k, _) => {
      let {
        paramName: I,
        isOptional: A
      } = k;
      if (I === "*") {
        let m = x[_] || "";
        g = h.slice(0, h.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const S = x[_];
      return A && !S ? w[I] = void 0 : w[I] = tc(S || "", I), w;
    }, {}),
    pathname: h,
    pathnameBase: g,
    pattern: n
  };
}
function Kl(n, o, r) {
  o === void 0 && (o = !1), r === void 0 && (r = !0), Hr(n === "*" || !n.endsWith("*") || n.endsWith("/*"), 'Route path "' + n + '" will be treated as if it were ' + ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'));
  let i = [], c = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (g, x, b) => (i.push({
    paramName: x,
    isOptional: b != null
  }), b ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return n.endsWith("*") ? (i.push({
    paramName: "*"
  }), c += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? c += "\\/*$" : n !== "" && n !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, o ? void 0 : "i"), i];
}
function ec(n) {
  try {
    return decodeURI(n);
  } catch (o) {
    return Hr(!1, 'The URL path "' + n + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + o + ").")), n;
  }
}
function tc(n, o) {
  try {
    return decodeURIComponent(n);
  } catch (r) {
    return Hr(!1, 'The value for the URL param "' + o + '" will not be decoded because' + (' the string "' + n + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + r + ").")), n;
  }
}
function Vr(n, o) {
  if (o === "/")
    return n;
  if (!n.toLowerCase().startsWith(o.toLowerCase()))
    return null;
  let r = o.endsWith("/") ? o.length - 1 : o.length, i = n.charAt(r);
  return i && i !== "/" ? null : n.slice(r) || "/";
}
function rc(n, o) {
  o === void 0 && (o = "/");
  let {
    pathname: r,
    search: i = "",
    hash: c = ""
  } = typeof n == "string" ? it(n) : n;
  return {
    pathname: r ? r.startsWith("/") ? r : nc(r, o) : o,
    search: sc(i),
    hash: oc(c)
  };
}
function nc(n, o) {
  let r = o.replace(/\/+$/, "").split("/");
  return n.split("/").forEach((c) => {
    c === ".." ? r.length > 1 && r.pop() : c !== "." && r.push(c);
  }), r.length > 1 ? r.join("/") : "/";
}
function Ur(n, o, r, i) {
  return "Cannot include a '" + n + "' character in a manually specified " + ("`to." + o + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function _a(n) {
  return n.filter((o, r) => r === 0 || o.route.path && o.route.path.length > 0);
}
function $a(n, o, r, i) {
  i === void 0 && (i = !1);
  let c;
  typeof n == "string" ? c = it(n) : (c = jt({}, n), ae(!c.pathname || !c.pathname.includes("?"), Ur("?", "pathname", "search", c)), ae(!c.pathname || !c.pathname.includes("#"), Ur("#", "pathname", "hash", c)), ae(!c.search || !c.search.includes("#"), Ur("#", "search", "hash", c)));
  let h = n === "" || c.pathname === "", g = h ? "/" : c.pathname, x;
  if (i || g == null)
    x = r;
  else {
    let _ = o.length - 1;
    if (g.startsWith("..")) {
      let I = g.split("/");
      for (; I[0] === ".."; )
        I.shift(), _ -= 1;
      c.pathname = I.join("/");
    }
    x = _ >= 0 ? o[_] : "/";
  }
  let b = rc(c, x), w = g && g !== "/" && g.endsWith("/"), k = (h || g === ".") && r.endsWith("/");
  return !b.pathname.endsWith("/") && (w || k) && (b.pathname += "/"), b;
}
const Le = (n) => n.join("/").replace(/\/\/+/g, "/"), ac = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"), sc = (n) => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n, oc = (n) => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function ic(n) {
  return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n;
}
const Ea = ["post", "put", "patch", "delete"];
new Set(Ea);
const lc = ["get", ...Ea];
new Set(lc);
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
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(n) {
    for (var o = 1; o < arguments.length; o++) {
      var r = arguments[o];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    }
    return n;
  }, Qt.apply(this, arguments);
}
const Jr = /* @__PURE__ */ P.createContext(null), cc = /* @__PURE__ */ P.createContext(null), lt = /* @__PURE__ */ P.createContext(null), tr = /* @__PURE__ */ P.createContext(null), Be = /* @__PURE__ */ P.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), Aa = /* @__PURE__ */ P.createContext(null);
function uc(n, o) {
  let {
    relative: r
  } = o === void 0 ? {} : o;
  kt() || ae(!1);
  let {
    basename: i,
    navigator: c
  } = P.useContext(lt), {
    hash: h,
    pathname: g,
    search: x
  } = Sa(n, {
    relative: r
  }), b = g;
  return i !== "/" && (b = g === "/" ? i : Le([i, g])), c.createHref({
    pathname: b,
    search: x,
    hash: h
  });
}
function kt() {
  return P.useContext(tr) != null;
}
function rr() {
  return kt() || ae(!1), P.useContext(tr).location;
}
function Da(n) {
  P.useContext(lt).static || P.useLayoutEffect(n);
}
function Pa() {
  let {
    isDataRoute: n
  } = P.useContext(Be);
  return n ? Nc() : fc();
}
function fc() {
  kt() || ae(!1);
  let n = P.useContext(Jr), {
    basename: o,
    navigator: r
  } = P.useContext(lt), {
    matches: i
  } = P.useContext(Be), {
    pathname: c
  } = rr(), h = JSON.stringify(_a(i).map((b) => b.pathnameBase)), g = P.useRef(!1);
  return Da(() => {
    g.current = !0;
  }), P.useCallback(function(b, w) {
    if (w === void 0 && (w = {}), !g.current)
      return;
    if (typeof b == "number") {
      r.go(b);
      return;
    }
    let k = $a(b, JSON.parse(h), c, w.relative === "path");
    n == null && o !== "/" && (k.pathname = k.pathname === "/" ? o : Le([o, k.pathname])), (w.replace ? r.replace : r.push)(k, w.state, w);
  }, [o, r, h, c, n]);
}
const dc = /* @__PURE__ */ P.createContext(null);
function hc(n) {
  let o = P.useContext(Be).outlet;
  return o && /* @__PURE__ */ P.createElement(dc.Provider, {
    value: n
  }, o);
}
function Sa(n, o) {
  let {
    relative: r
  } = o === void 0 ? {} : o, {
    matches: i
  } = P.useContext(Be), {
    pathname: c
  } = rr(), h = JSON.stringify(_a(i).map((g) => g.pathnameBase));
  return P.useMemo(() => $a(n, JSON.parse(h), c, r === "path"), [n, h, c, r]);
}
function vc(n, o) {
  return pc(n, o);
}
function pc(n, o, r) {
  kt() || ae(!1);
  let {
    navigator: i
  } = P.useContext(lt), {
    matches: c
  } = P.useContext(Be), h = c[c.length - 1], g = h ? h.params : {};
  h && h.pathname;
  let x = h ? h.pathnameBase : "/";
  h && h.route;
  let b = rr(), w;
  if (o) {
    var k;
    let m = typeof o == "string" ? it(o) : o;
    x === "/" || (k = m.pathname) != null && k.startsWith(x) || ae(!1), w = m;
  } else
    w = b;
  let _ = w.pathname || "/", I = x === "/" ? _ : _.slice(x.length) || "/", A = zl(n, {
    pathname: I
  }), S = xc(A && A.map((m) => Object.assign({}, m, {
    params: Object.assign({}, g, m.params),
    pathname: Le([
      x,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(m.pathname).pathname : m.pathname
    ]),
    pathnameBase: m.pathnameBase === "/" ? x : Le([
      x,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(m.pathnameBase).pathname : m.pathnameBase
    ])
  })), c, r);
  return o && S ? /* @__PURE__ */ P.createElement(tr.Provider, {
    value: {
      location: Qt({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, w),
      navigationType: Fe.Pop
    }
  }, S) : S;
}
function gc() {
  let n = Cc(), o = ic(n) ? n.status + " " + n.statusText : n instanceof Error ? n.message : JSON.stringify(n), r = n instanceof Error ? n.stack : null, c = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ P.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, o), r ? /* @__PURE__ */ P.createElement("pre", {
    style: c
  }, r) : null, null);
}
const mc = /* @__PURE__ */ P.createElement(gc, null);
class bc extends P.Component {
  constructor(o) {
    super(o), this.state = {
      location: o.location,
      revalidation: o.revalidation,
      error: o.error
    };
  }
  static getDerivedStateFromError(o) {
    return {
      error: o
    };
  }
  static getDerivedStateFromProps(o, r) {
    return r.location !== o.location || r.revalidation !== "idle" && o.revalidation === "idle" ? {
      error: o.error,
      location: o.location,
      revalidation: o.revalidation
    } : {
      error: o.error || r.error,
      location: r.location,
      revalidation: o.revalidation || r.revalidation
    };
  }
  componentDidCatch(o, r) {
    console.error("React Router caught the following error during render", o, r);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ P.createElement(Be.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ P.createElement(Aa.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function yc(n) {
  let {
    routeContext: o,
    match: r,
    children: i
  } = n, c = P.useContext(Jr);
  return c && c.static && c.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ P.createElement(Be.Provider, {
    value: o
  }, i);
}
function xc(n, o, r) {
  var i;
  if (o === void 0 && (o = []), r === void 0 && (r = null), n == null) {
    var c;
    if ((c = r) != null && c.errors)
      n = r.matches;
    else
      return null;
  }
  let h = n, g = (i = r) == null ? void 0 : i.errors;
  if (g != null) {
    let x = h.findIndex((b) => b.route.id && (g == null ? void 0 : g[b.route.id]));
    x >= 0 || ae(!1), h = h.slice(0, Math.min(h.length, x + 1));
  }
  return h.reduceRight((x, b, w) => {
    let k = b.route.id ? g == null ? void 0 : g[b.route.id] : null, _ = null;
    r && (_ = b.route.errorElement || mc);
    let I = o.concat(h.slice(0, w + 1)), A = () => {
      let S;
      return k ? S = _ : b.route.Component ? S = /* @__PURE__ */ P.createElement(b.route.Component, null) : b.route.element ? S = b.route.element : S = x, /* @__PURE__ */ P.createElement(yc, {
        match: b,
        routeContext: {
          outlet: x,
          matches: I,
          isDataRoute: r != null
        },
        children: S
      });
    };
    return r && (b.route.ErrorBoundary || b.route.errorElement || w === 0) ? /* @__PURE__ */ P.createElement(bc, {
      location: r.location,
      revalidation: r.revalidation,
      component: _,
      error: k,
      children: A(),
      routeContext: {
        outlet: null,
        matches: I,
        isDataRoute: !0
      }
    }) : A();
  }, null);
}
var Ia = /* @__PURE__ */ function(n) {
  return n.UseBlocker = "useBlocker", n.UseRevalidator = "useRevalidator", n.UseNavigateStable = "useNavigate", n;
}(Ia || {}), Kt = /* @__PURE__ */ function(n) {
  return n.UseBlocker = "useBlocker", n.UseLoaderData = "useLoaderData", n.UseActionData = "useActionData", n.UseRouteError = "useRouteError", n.UseNavigation = "useNavigation", n.UseRouteLoaderData = "useRouteLoaderData", n.UseMatches = "useMatches", n.UseRevalidator = "useRevalidator", n.UseNavigateStable = "useNavigate", n.UseRouteId = "useRouteId", n;
}(Kt || {});
function wc(n) {
  let o = P.useContext(Jr);
  return o || ae(!1), o;
}
function jc(n) {
  let o = P.useContext(cc);
  return o || ae(!1), o;
}
function kc(n) {
  let o = P.useContext(Be);
  return o || ae(!1), o;
}
function Ta(n) {
  let o = kc(), r = o.matches[o.matches.length - 1];
  return r.route.id || ae(!1), r.route.id;
}
function Cc() {
  var n;
  let o = P.useContext(Aa), r = jc(Kt.UseRouteError), i = Ta(Kt.UseRouteError);
  return o || ((n = r.errors) == null ? void 0 : n[i]);
}
function Nc() {
  let {
    router: n
  } = wc(Ia.UseNavigateStable), o = Ta(Kt.UseNavigateStable), r = P.useRef(!1);
  return Da(() => {
    r.current = !0;
  }), P.useCallback(function(c, h) {
    h === void 0 && (h = {}), r.current && (typeof c == "number" ? n.navigate(c) : n.navigate(c, Qt({
      fromRouteId: o
    }, h)));
  }, [n, o]);
}
function _c(n) {
  return hc(n.context);
}
function te(n) {
  ae(!1);
}
function $c(n) {
  let {
    basename: o = "/",
    children: r = null,
    location: i,
    navigationType: c = Fe.Pop,
    navigator: h,
    static: g = !1
  } = n;
  kt() && ae(!1);
  let x = o.replace(/^\/*/, "/"), b = P.useMemo(() => ({
    basename: x,
    navigator: h,
    static: g
  }), [x, h, g]);
  typeof i == "string" && (i = it(i));
  let {
    pathname: w = "/",
    search: k = "",
    hash: _ = "",
    state: I = null,
    key: A = "default"
  } = i, S = P.useMemo(() => {
    let m = Vr(w, x);
    return m == null ? null : {
      location: {
        pathname: m,
        search: k,
        hash: _,
        state: I,
        key: A
      },
      navigationType: c
    };
  }, [x, w, k, _, I, A, c]);
  return S == null ? null : /* @__PURE__ */ P.createElement(lt.Provider, {
    value: b
  }, /* @__PURE__ */ P.createElement(tr.Provider, {
    children: r,
    value: S
  }));
}
function Ec(n) {
  let {
    children: o,
    location: r
  } = n;
  return vc(Wr(o), r);
}
new Promise(() => {
});
function Wr(n, o) {
  o === void 0 && (o = []);
  let r = [];
  return P.Children.forEach(n, (i, c) => {
    if (!/* @__PURE__ */ P.isValidElement(i))
      return;
    let h = [...o, c];
    if (i.type === P.Fragment) {
      r.push.apply(r, Wr(i.props.children, h));
      return;
    }
    i.type !== te && ae(!1), !i.props.index || !i.props.children || ae(!1);
    let g = {
      id: i.props.id || h.join("-"),
      caseSensitive: i.props.caseSensitive,
      element: i.props.element,
      Component: i.props.Component,
      index: i.props.index,
      path: i.props.path,
      loader: i.props.loader,
      action: i.props.action,
      errorElement: i.props.errorElement,
      ErrorBoundary: i.props.ErrorBoundary,
      hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
      shouldRevalidate: i.props.shouldRevalidate,
      handle: i.props.handle,
      lazy: i.props.lazy
    };
    i.props.children && (g.children = Wr(i.props.children, h)), r.push(g);
  }), r;
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
function Yr() {
  return Yr = Object.assign ? Object.assign.bind() : function(n) {
    for (var o = 1; o < arguments.length; o++) {
      var r = arguments[o];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    }
    return n;
  }, Yr.apply(this, arguments);
}
function Ac(n, o) {
  if (n == null)
    return {};
  var r = {}, i = Object.keys(n), c, h;
  for (h = 0; h < i.length; h++)
    c = i[h], !(o.indexOf(c) >= 0) && (r[c] = n[c]);
  return r;
}
function Dc(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Pc(n, o) {
  return n.button === 0 && // Ignore everything but left clicks
  (!o || o === "_self") && // Let browser handle "target=_blank" etc.
  !Dc(n);
}
const Sc = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], Ic = "startTransition", pa = P[Ic];
function Tc(n) {
  let {
    basename: o,
    children: r,
    future: i,
    window: c
  } = n, h = P.useRef();
  h.current == null && (h.current = Fl({
    window: c,
    v5Compat: !0
  }));
  let g = h.current, [x, b] = P.useState({
    action: g.action,
    location: g.location
  }), {
    v7_startTransition: w
  } = i || {}, k = P.useCallback((_) => {
    w && pa ? pa(() => b(_)) : b(_);
  }, [b, w]);
  return P.useLayoutEffect(() => g.listen(k), [g, k]), /* @__PURE__ */ P.createElement($c, {
    basename: o,
    children: r,
    location: x.location,
    navigationType: x.action,
    navigator: g
  });
}
const Oc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Mc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, fe = /* @__PURE__ */ P.forwardRef(function(o, r) {
  let {
    onClick: i,
    relative: c,
    reloadDocument: h,
    replace: g,
    state: x,
    target: b,
    to: w,
    preventScrollReset: k,
    unstable_viewTransition: _
  } = o, I = Ac(o, Sc), {
    basename: A
  } = P.useContext(lt), S, m = !1;
  if (typeof w == "string" && Mc.test(w) && (S = w, Oc))
    try {
      let oe = new URL(window.location.href), ee = w.startsWith("//") ? new URL(oe.protocol + w) : new URL(w), ge = Vr(ee.pathname, A);
      ee.origin === oe.origin && ge != null ? w = ge + ee.search + ee.hash : m = !0;
    } catch {
    }
  let T = uc(w, {
    relative: c
  }), Y = Rc(w, {
    replace: g,
    state: x,
    target: b,
    preventScrollReset: k,
    relative: c,
    unstable_viewTransition: _
  });
  function Z(oe) {
    i && i(oe), oe.defaultPrevented || Y(oe);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ P.createElement("a", Yr({}, I, {
      href: S || T,
      onClick: m || h ? i : Z,
      ref: r,
      target: b
    }))
  );
});
var ga;
(function(n) {
  n.UseScrollRestoration = "useScrollRestoration", n.UseSubmit = "useSubmit", n.UseSubmitFetcher = "useSubmitFetcher", n.UseFetcher = "useFetcher", n.useViewTransitionState = "useViewTransitionState";
})(ga || (ga = {}));
var ma;
(function(n) {
  n.UseFetcher = "useFetcher", n.UseFetchers = "useFetchers", n.UseScrollRestoration = "useScrollRestoration";
})(ma || (ma = {}));
function Rc(n, o) {
  let {
    target: r,
    replace: i,
    state: c,
    preventScrollReset: h,
    relative: g,
    unstable_viewTransition: x
  } = o === void 0 ? {} : o, b = Pa(), w = rr(), k = Sa(n, {
    relative: g
  });
  return P.useCallback((_) => {
    if (Pc(_, r)) {
      _.preventDefault();
      let I = i !== void 0 ? i : Zt(w) === Zt(k);
      b(n, {
        replace: I,
        state: c,
        preventScrollReset: h,
        relative: g,
        unstable_viewTransition: x
      });
    }
  }, [w, b, k, i, c, r, n, h, g, x]);
}
function Fc({ images: n, captions: o }) {
  return s.jsxs(s.Fragment, { children: [s.jsx("h1", { className: "mt-3 ms-3 mb-3", children: "Italy Photos" }), s.jsx("div", { className: "container", children: s.jsx("div", { className: "row", children: n.map((r, i) => s.jsxs("div", { className: "col-sm-6 col-md-4 mb-3 text-center", children: [s.jsx("img", { src: "/Italy/" + r, alt: "", className: "img-fluid" }), s.jsx("span", { className: "small", children: o[i] })] }, i)) }) })] });
}
function Lc() {
  const n = [];
  for (let r = 1; r <= 22; r++)
    n.push(`${r}.jpg`);
  return n.push("river.gif"), n;
}
function Bc() {
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
const zc = ({ tracks: n }) => s.jsxs(s.Fragment, { children: [s.jsx("div", { className: "container d-flex justify-content-center align-items-center", style: { marginTop: 30 }, children: s.jsx("h1", { children: "Phonebook" }) }), s.jsxs("div", { className: "container d-flex justify-content-center align-items-center", style: {
  width: "70vw",
  border: "1px dashed",
  backgroundColor: "#fff7ff",
  paddingTop: 40
}, children: [s.jsx("div", { style: { color: "grey", margin: 15, marginTop: 60 }, children: n.map((o, r) => s.jsx("li", { style: { listStyle: "none", height: 70 }, className: "d-flex align-items-center", children: s.jsx("img", { src: o.album.images[2].url, alt: "" }) }, r)) }), s.jsxs("div", { style: { color: "grey", margin: 15, width: 60 }, children: ["Number", s.jsx("br", {}), " ---------", n.map((o) => s.jsx("li", { className: "d-flex align-items-center", style: { listStyle: "none", height: 70 }, children: (o + 1).toString().padStart(3, "0") }, o))] }), s.jsxs("div", { style: { color: "grey", margin: 15 }, children: ["Name", s.jsx("br", {}), " -----------------------------------", n.map((o, r) => s.jsx("li", { style: { listStyle: "none", height: 70 }, className: "d-flex align-items-center", children: o.name }, r))] }), s.jsxs("div", { style: { color: "grey", margin: 15 }, children: ["Artist", s.jsx("br", {}), " ------------------------", n.map((o, r) => s.jsx("li", { style: { listStyle: "none", height: 70 }, className: "d-flex align-items-center", children: o.artists[0].name }, r))] }), s.jsxs("div", { className: "align-items-center", style: { color: "grey", margin: 15 }, children: ["Album", s.jsx("br", {}), " -----------------------------------------------", n.map((o, r) => s.jsx("li", { style: { listStyle: "none", height: 70 }, className: "d-flex align-items-center", children: o.album.name }, r))] })] })] });
function Uc({ image: n, tracks: o }) {
  const [r, i] = J(), [c, h] = J(""), g = (k) => {
    const I = k.target.getBoundingClientRect(), A = k.clientX - I.left, S = k.clientY - I.top, m = x(A, S);
    m != -1 && (i(m), console.log(r), h(c + m));
  }, x = (k, _) => k > 247 && k < 263 && _ > 106 && _ < 117 ? 1 : k > 233 && k < 248 && _ > 91 && _ < 102 ? 2 : k > 214 && k < 229 && _ > 83 && _ < 95 ? 3 : k > 193 && k < 208 && _ > 85 && _ < 96 ? 4 : k > 174 && k < 190 && _ > 94 && _ < 106 ? 5 : k > 162 && k < 178 && _ > 112 && _ < 122 ? 6 : k > 161 && k < 178 && _ > 130 && _ < 142 ? 7 : k > 170 && k < 186 && _ > 148 && _ < 159 ? 8 : k > 187 && k < 203 && _ > 159 && _ < 171 ? 9 : k > 207 && k < 224 && _ > 163 && _ < 175 ? 0 : -1, b = (k) => {
    h(k.target.value);
  }, w = (k) => {
    const _ = new Audio("/Phonebook/dial.mp3"), I = new Audio(o[k].preview_url);
    I.volume = 0.5, h(""), _.onended = () => I.play(), _.play();
  };
  return s.jsxs(s.Fragment, { children: [s.jsxs("div", { className: "container d-flex justify-content-center align-items-center", style: { width: 400, marginTop: "10vh", marginBottom: 50 }, children: [s.jsx("img", { id: "phone", src: n, alt: "", className: "img-fluid", onClick: g }), s.jsx("h3", { style: { paddingLeft: 40 }, children: "Please Dial a Number." })] }), s.jsxs("div", { className: "container d-flex justify-content-center align-items-center", children: [s.jsx("input", { type: "text", placeholder: "+1 (***) L✧VE SONG", className: "text-center", value: c, onChange: b }), s.jsx("button", { className: "btn", style: { marginLeft: 20, backgroundColor: "#feebff", color: "grey" }, onClick: () => w(parseInt(c, 10) - 1), children: "Dial" })] })] });
}
function qc() {
  const n = new URLSearchParams(window.location.search);
  return n.has("code") ? n.get("code") : null;
}
function Gc(n, o, r) {
  const [i, c] = J(""), h = qc();
  return xe(() => {
    async function g() {
      if (h) {
        const x = new URLSearchParams();
        x.append("grant_type", "authorization_code"), x.append("code", h), x.append("redirect_uri", r);
        const b = {
          Authorization: `Basic ${btoa(`${n}:${o}`)}`,
          "Content-Type": "application/x-www-form-urlencoded"
        };
        fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: b,
          body: x
        }).then((w) => {
          if (w.ok)
            return w.json();
          throw new Error("Access token not obtained");
        }).then((w) => {
          c(w.access_token);
        }).catch((w) => {
          console.log(w);
        });
      }
    }
    g();
  }, []), i;
}
function Wc() {
  const n = "4cf9bd164aef4b1fa8e5d72912fb770b", o = "fc66fd486cf84fdeb831d0943380260c", r = "http://localhost:5173/auth/callback", c = `https://accounts.spotify.com/authorize?client_id=${n}&redirect_uri=${r}&scope=user-top-read&response_type=code`, h = s.jsx("div", { className: "container d-flex justify-content-center align-items-center", style: { marginTop: 20 }, children: s.jsx("a", { href: c, className: "btn", style: { backgroundColor: "#feebff", color: "grey" }, children: "Login with Spotify" }) }), g = Gc(n, o, r);
  return s.jsx(s.Fragment, { children: g === "" ? h : null });
}
let Oa = "";
const Yc = (n) => {
  Oa = `Bearer ${n}`;
}, Xc = () => {
  const [n, o] = J(null);
  async function r(c, h) {
    try {
      return (await fetch(`https://api.spotify.com/${c}`, {
        headers: {
          Authorization: Oa
        },
        method: h
      })).json();
    } catch {
    }
  }
  async function i() {
    const c = await r("v1/me/top/tracks?time_range=short_term&limit=30", "GET");
    o(c.items);
  }
  return s.jsxs(s.Fragment, { children: [s.jsx(Uc, { image: "/Phonebook/rotary_phone.webp", tracks: n }), s.jsx(Wc, {}), n === null && s.jsx("div", { className: "container d-flex justify-content-center align-items-center", children: s.jsx("button", { className: "btn", style: {
    marginTop: 20,
    backgroundColor: "#feebff",
    color: "grey"
  }, onClick: () => i(), children: "Fetch Tracks" }) }), n !== null && s.jsx(zc, { tracks: n })] });
}, ba = { Tracks: Xc, setToken: Yc };
function Xr() {
  return Xr = Object.assign ? Object.assign.bind() : function(n) {
    for (var o = 1; o < arguments.length; o++) {
      var r = arguments[o];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    }
    return n;
  }, Xr.apply(this, arguments);
}
var Hc = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: !0, shuffle: !1, backDelay: 700, fadeOut: !1, fadeOutClass: "typed-fade-out", fadeOutDelay: 500, loop: !1, loopCount: 1 / 0, showCursor: !0, cursorChar: "|", autoInsertCss: !0, attr: null, bindInputFocusEvents: !1, contentType: "html", onBegin: function(n) {
}, onComplete: function(n) {
}, preStringTyped: function(n, o) {
}, onStringTyped: function(n, o) {
}, onLastStringBackspaced: function(n) {
}, onTypingPaused: function(n, o) {
}, onTypingResumed: function(n, o) {
}, onReset: function(n) {
}, onStop: function(n, o) {
}, onStart: function(n, o) {
}, onDestroy: function(n) {
} }, Vc = new (/* @__PURE__ */ function() {
  function n() {
  }
  var o = n.prototype;
  return o.load = function(r, i, c) {
    if (r.el = typeof c == "string" ? document.querySelector(c) : c, r.options = Xr({}, Hc, i), r.isInput = r.el.tagName.toLowerCase() === "input", r.attr = r.options.attr, r.bindInputFocusEvents = r.options.bindInputFocusEvents, r.showCursor = !r.isInput && r.options.showCursor, r.cursorChar = r.options.cursorChar, r.cursorBlinking = !0, r.elContent = r.attr ? r.el.getAttribute(r.attr) : r.el.textContent, r.contentType = r.options.contentType, r.typeSpeed = r.options.typeSpeed, r.startDelay = r.options.startDelay, r.backSpeed = r.options.backSpeed, r.smartBackspace = r.options.smartBackspace, r.backDelay = r.options.backDelay, r.fadeOut = r.options.fadeOut, r.fadeOutClass = r.options.fadeOutClass, r.fadeOutDelay = r.options.fadeOutDelay, r.isPaused = !1, r.strings = r.options.strings.map(function(w) {
      return w.trim();
    }), r.stringsElement = typeof r.options.stringsElement == "string" ? document.querySelector(r.options.stringsElement) : r.options.stringsElement, r.stringsElement) {
      r.strings = [], r.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
      var h = Array.prototype.slice.apply(r.stringsElement.children), g = h.length;
      if (g)
        for (var x = 0; x < g; x += 1)
          r.strings.push(h[x].innerHTML.trim());
    }
    for (var b in r.strPos = 0, r.currentElContent = this.getCurrentElContent(r), r.currentElContent && r.currentElContent.length > 0 && (r.strPos = r.currentElContent.length - 1, r.strings.unshift(r.currentElContent)), r.sequence = [], r.strings)
      r.sequence[b] = b;
    r.arrayPos = 0, r.stopNum = 0, r.loop = r.options.loop, r.loopCount = r.options.loopCount, r.curLoop = 0, r.shuffle = r.options.shuffle, r.pause = { status: !1, typewrite: !0, curString: "", curStrPos: 0 }, r.typingComplete = !1, r.autoInsertCss = r.options.autoInsertCss, r.autoInsertCss && (this.appendCursorAnimationCss(r), this.appendFadeOutAnimationCss(r));
  }, o.getCurrentElContent = function(r) {
    return r.attr ? r.el.getAttribute(r.attr) : r.isInput ? r.el.value : r.contentType === "html" ? r.el.innerHTML : r.el.textContent;
  }, o.appendCursorAnimationCss = function(r) {
    var i = "data-typed-js-cursor-css";
    if (r.showCursor && !document.querySelector("[" + i + "]")) {
      var c = document.createElement("style");
      c.setAttribute(i, "true"), c.innerHTML = `
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
      `, document.body.appendChild(c);
    }
  }, o.appendFadeOutAnimationCss = function(r) {
    var i = "data-typed-fadeout-js-css";
    if (r.fadeOut && !document.querySelector("[" + i + "]")) {
      var c = document.createElement("style");
      c.setAttribute(i, "true"), c.innerHTML = `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `, document.body.appendChild(c);
    }
  }, n;
}())(), ya = new (/* @__PURE__ */ function() {
  function n() {
  }
  var o = n.prototype;
  return o.typeHtmlChars = function(r, i, c) {
    if (c.contentType !== "html")
      return i;
    var h = r.substring(i).charAt(0);
    if (h === "<" || h === "&") {
      var g;
      for (g = h === "<" ? ">" : ";"; r.substring(i + 1).charAt(0) !== g && !(1 + ++i > r.length); )
        ;
      i++;
    }
    return i;
  }, o.backSpaceHtmlChars = function(r, i, c) {
    if (c.contentType !== "html")
      return i;
    var h = r.substring(i).charAt(0);
    if (h === ">" || h === ";") {
      var g;
      for (g = h === ">" ? "<" : "&"; r.substring(i - 1).charAt(0) !== g && !(--i < 0); )
        ;
      i--;
    }
    return i;
  }, n;
}())(), Jc = /* @__PURE__ */ function() {
  function n(r, i) {
    Vc.load(this, i, r), this.begin();
  }
  var o = n.prototype;
  return o.toggle = function() {
    this.pause.status ? this.start() : this.stop();
  }, o.stop = function() {
    this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
  }, o.start = function() {
    this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
  }, o.destroy = function() {
    this.reset(!1), this.options.onDestroy(this);
  }, o.reset = function(r) {
    r === void 0 && (r = !0), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, r && (this.insertCursor(), this.options.onReset(this), this.begin());
  }, o.begin = function() {
    var r = this;
    this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
      r.strPos === 0 ? r.typewrite(r.strings[r.sequence[r.arrayPos]], r.strPos) : r.backspace(r.strings[r.sequence[r.arrayPos]], r.strPos);
    }, this.startDelay);
  }, o.typewrite = function(r, i) {
    var c = this;
    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
    var h = this.humanizer(this.typeSpeed), g = 1;
    this.pause.status !== !0 ? this.timeout = setTimeout(function() {
      i = ya.typeHtmlChars(r, i, c);
      var x = 0, b = r.substring(i);
      if (b.charAt(0) === "^" && /^\^\d+/.test(b)) {
        var w = 1;
        w += (b = /\d+/.exec(b)[0]).length, x = parseInt(b), c.temporaryPause = !0, c.options.onTypingPaused(c.arrayPos, c), r = r.substring(0, i) + r.substring(i + w), c.toggleBlinking(!0);
      }
      if (b.charAt(0) === "`") {
        for (; r.substring(i + g).charAt(0) !== "`" && (g++, !(i + g > r.length)); )
          ;
        var k = r.substring(0, i), _ = r.substring(k.length + 1, i + g), I = r.substring(i + g + 1);
        r = k + _ + I, g--;
      }
      c.timeout = setTimeout(function() {
        c.toggleBlinking(!1), i >= r.length ? c.doneTyping(r, i) : c.keepTyping(r, i, g), c.temporaryPause && (c.temporaryPause = !1, c.options.onTypingResumed(c.arrayPos, c));
      }, x);
    }, h) : this.setPauseStatus(r, i, !0);
  }, o.keepTyping = function(r, i, c) {
    i === 0 && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this));
    var h = r.substring(0, i += c);
    this.replaceText(h), this.typewrite(r, i);
  }, o.doneTyping = function(r, i) {
    var c = this;
    this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
      c.backspace(r, i);
    }, this.backDelay));
  }, o.backspace = function(r, i) {
    var c = this;
    if (this.pause.status !== !0) {
      if (this.fadeOut)
        return this.initFadeOut();
      this.toggleBlinking(!1);
      var h = this.humanizer(this.backSpeed);
      this.timeout = setTimeout(function() {
        i = ya.backSpaceHtmlChars(r, i, c);
        var g = r.substring(0, i);
        if (c.replaceText(g), c.smartBackspace) {
          var x = c.strings[c.arrayPos + 1];
          c.stopNum = x && g === x.substring(0, i) ? i : 0;
        }
        i > c.stopNum ? (i--, c.backspace(r, i)) : i <= c.stopNum && (c.arrayPos++, c.arrayPos === c.strings.length ? (c.arrayPos = 0, c.options.onLastStringBackspaced(), c.shuffleStringsIfNeeded(), c.begin()) : c.typewrite(c.strings[c.sequence[c.arrayPos]], i));
      }, h);
    } else
      this.setPauseStatus(r, i, !1);
  }, o.complete = function() {
    this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
  }, o.setPauseStatus = function(r, i, c) {
    this.pause.typewrite = c, this.pause.curString = r, this.pause.curStrPos = i;
  }, o.toggleBlinking = function(r) {
    this.cursor && (this.pause.status || this.cursorBlinking !== r && (this.cursorBlinking = r, r ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
  }, o.humanizer = function(r) {
    return Math.round(Math.random() * r / 2) + r;
  }, o.shuffleStringsIfNeeded = function() {
    this.shuffle && (this.sequence = this.sequence.sort(function() {
      return Math.random() - 0.5;
    }));
  }, o.initFadeOut = function() {
    var r = this;
    return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
      r.arrayPos++, r.replaceText(""), r.strings.length > r.arrayPos ? r.typewrite(r.strings[r.sequence[r.arrayPos]], 0) : (r.typewrite(r.strings[0], 0), r.arrayPos = 0);
    }, this.fadeOutDelay);
  }, o.replaceText = function(r) {
    this.attr ? this.el.setAttribute(this.attr, r) : this.isInput ? this.el.value = r : this.contentType === "html" ? this.el.innerHTML = r : this.el.textContent = r;
  }, o.bindFocusEvents = function() {
    var r = this;
    this.isInput && (this.el.addEventListener("focus", function(i) {
      r.stop();
    }), this.el.addEventListener("blur", function(i) {
      r.el.value && r.el.value.length !== 0 || r.start();
    }));
  }, o.insertCursor = function() {
    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
  }, n;
}();
const xa = () => {
  const n = Ye(null), o = Pa(), [r, i] = J(!1);
  xe(() => {
    const h = new Jc(n.current, {
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
      h.destroy();
    };
  });
  const c = () => {
    i(!0), setTimeout(() => {
      o("/galaxy");
    }, 500);
  };
  return s.jsxs(s.Fragment, { children: [s.jsx("div", { className: "bg vh-100", style: { backgroundColor: "#0A080B" } }), s.jsxs("div", { className: r ? "fade-out" : "", onClick: c, style: { cursor: "pointer" }, children: [s.jsxs("div", { className: "bg", children: [s.jsx("video", { loop: !0, muted: !0, autoPlay: !0, children: s.jsx("source", { src: "/Home/home.mp4", type: "video/mp4" }) }), s.jsx("div", { className: "screen" })] }), s.jsx("section", { className: "caption", children: s.jsxs("div", { className: "wrapper", children: [s.jsx("span", { children: "⋅˚₊‧ ୨୧ ‧₊˚ ⋅" }), s.jsxs("div", { className: "center", children: [s.jsx("h1", { className: "title", children: "୨୧ ASHS_WRLD ୨୧" }), s.jsx("h4", { ref: n, className: "title", style: { marginTop: 50 } }), s.jsxs("span", { children: ["The universe created by 🍎. ", s.jsx("br", {}), " It can't represent 1% of her."] })] }), s.jsx("span", { children: "⋅˚₊‧ ୨୧ ‧₊˚ ⋅" })] }) })] })] });
}, Zc = () => s.jsxs("div", { className: "galaxy", children: [s.jsx("img", { className: "fade-in gal-img", src: "/Home/galaxy2.jpeg" }), s.jsxs("div", { className: "d-flex fade-in vh-100 align-items-center justify-content-center", children: [s.jsxs("div", { className: "d-flex space-text flex-column title-cont", children: [s.jsx("h1", { className: "space-title", children: "Hi! ⭐️ I'm Ashley, it's nice to meet you!" }), s.jsx("h3", { className: "space-mid", children: "I am currently a freshman in the Texas A&M Engineering Honors program pursuing a B.S. in Computer Science. My passions include software engineering, data analytics, and surprisingly fashion 👠. I have experience in full-stack web development, machine learning, databases, scripting, and data visualization. Right now, I'm on the lookout for a 2024 summer SWE / data analytics internship so... feel free to message me or email me at ashlxyzhang@tamu.edu! 😊" }), s.jsxs("h5", { className: "space-subtitle", children: ["This website is an extension of my mind as a galaxy.", s.jsx("br", {}), "Feel free to explore it & enjoy!"] })] }), s.jsxs("span", { className: "space-text", style: {
  fontSize: 10,
  textAlign: "center",
  alignSelf: "end",
  zIndex: 1
}, children: ["Made with 💛 by 🍎 ", s.jsx("br", {}), "© 2024. All rights reserved."] }), s.jsxs("div", { className: "d-flex vh-100 align-items-center justify-content-center", children: [s.jsxs("div", { className: "dest-cont", style: { marginBottom: "2%", marginRight: "7%" }, children: [s.jsx(fe, { to: "/", className: "destination", children: "🌎" }), s.jsx("div", { className: "dest-cap", children: s.jsx("span", { children: "Home (Earth)" }) })] }), s.jsxs("div", { className: "dest-cont", style: { marginBottom: "11%", marginRight: "15%" }, children: [s.jsx(fe, { to: "/advent", className: "destination", children: "💫" }), s.jsx("span", { className: "dest-cap", children: "Advent Calendar" })] }), s.jsxs("div", { className: "dest-cont", style: { marginTop: "15%", marginLeft: "5%" }, children: [s.jsx(fe, { to: "/phonebook", className: "destination", children: "🪐" }), s.jsx("span", { className: "dest-cap", children: "Phonebook" })] }), s.jsxs("div", { className: "dest-cont", style: { marginBottom: "4%", marginRight: "20%" }, children: [s.jsx(fe, { to: "/italy", className: "destination", children: "🌌" }), s.jsx("span", { className: "dest-cap", children: "Italy Photos" })] })] })] })] }), Qc = () => s.jsxs(s.Fragment, { children: [s.jsx("div", { className: "bg", children: s.jsx("img", { src: "/Advent/calendar.jpeg", alt: "" }) }), s.jsxs("div", { className: "container pt-4", children: [s.jsxs("div", { className: "row justify-content-end", children: [s.jsx("div", { className: "col empty" }), s.jsx("div", { className: "col empty" }), s.jsx("div", { className: "col empty" }), s.jsx("div", { className: "col empty" }), s.jsx("div", { className: "col empty" }), s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "1", children: "1" }), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_1.jpeg", alt: "strawberry cake" })] }), s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "2", children: "2" }), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_2.jpeg", alt: "angel wings" })] })] }), s.jsxs("div", { className: "row", children: [s.jsx("div", { className: "col", children: s.jsx(fe, { to: "3", children: "3" }) }), s.jsx("div", { className: "col", children: "4" }), s.jsx("div", { className: "col", children: "5" }), s.jsx("div", { className: "col", children: "6" }), s.jsx("div", { className: "col", children: "7" }), s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "8", children: "8" }), s.jsx("br", {}), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_8.jpeg", alt: "apple heart" })] }), s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "9", children: "9" }), s.jsx("br", {}), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_9.jpeg", alt: "apple heart" })] })] }), s.jsxs("div", { className: "row", children: [s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "10", children: "10" }), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_10.jpeg", alt: "cloud" })] }), s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "11", children: "11" }), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_11.png", alt: "poppy" })] }), s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "12", children: "12" }), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_12.jpeg", alt: "smoothie" })] }), s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "13", children: "13" }), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/quilt/patch2.png", alt: "patch" })] }), s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "14", children: "14" }), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/clocks/clock4.png", alt: "patch" })] }), s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "15", children: "15" }), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_15.jpeg", alt: "pink fortune" })] }), s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "16", children: "16" }), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_16.jpeg", alt: "lily of the valley" })] })] }), s.jsxs("div", { className: "row", children: [s.jsxs("div", { className: "col", children: [s.jsx(fe, { to: "17", children: "17" }), s.jsx("img", { className: "mx-auto d-block", src: "/Advent/day_17.png", alt: "moon tarot" })] }), s.jsx("div", { className: "col", children: "18" }), s.jsx("div", { className: "col", children: "19" }), s.jsx("div", { className: "col", children: "20" }), s.jsx("div", { className: "col", children: "21" }), s.jsx("div", { className: "col", children: "22" }), s.jsx("div", { className: "col", children: "23" })] }), s.jsxs("div", { className: "row", children: [s.jsx("div", { className: "col", children: "24" }), s.jsx("div", { className: "col", children: "25" }), s.jsx("div", { className: "col", children: "26" }), s.jsx("div", { className: "col", children: "27" }), s.jsx("div", { className: "col", children: "28" }), s.jsx("div", { className: "col", children: "29" }), s.jsx("div", { className: "col", children: "30" })] }), s.jsxs("div", { className: "row", children: [s.jsx("div", { className: "col", children: "31" }), s.jsx("div", { className: "col empty" }), s.jsx("div", { className: "col empty" }), s.jsx("div", { className: "col empty" }), s.jsx("div", { className: "col empty" }), s.jsx("div", { className: "col empty" }), s.jsx("div", { className: "col empty" })] })] }), s.jsx(_c, {})] }), Kc = () => {
  const [n, o] = J(""), [r, i] = J(!1), [c, h] = J({ x: 0, y: 0 }), [g, x] = J({ x: 0, y: 0 }), [b, w] = J([]), k = (A) => {
    i(!0), h({ x: A.clientX, y: A.clientY });
  }, _ = (A) => {
    if (!r)
      return;
    const S = A.clientX - c.x, m = A.clientY - c.y;
    x({ x: S, y: m });
  }, I = () => {
    i(!1), n !== "" && w((A) => [
      ...A,
      {
        type: n,
        x: c.x + g.x,
        y: c.y + g.y
      }
    ]);
  };
  return s.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [s.jsx("span", { children: "Click the strawberry or the cream to choose a piece." }), s.jsx("span", { children: "Click the board to place a piece." }), s.jsxs("div", { className: "d-flex justify-content-center align-items-center mt-5", children: [s.jsx("img", { id: "waffle", src: "/Advent/waffle_board.png", alt: "waffle board", onMouseDown: k, onMouseMove: _, onMouseUp: I }), b.map((A, S) => s.jsx("img", { className: "placed", src: A.type, alt: "piece copy", style: {
    position: "fixed",
    left: `${A.x - 45}px`,
    top: `${A.y - 50}px`
  } }, S)), s.jsxs("div", { className: "d-flex flex-column", id: "pieces", children: [s.jsx("img", { src: "/Advent/strawberry.png", alt: "strawberry", onClick: () => o("/Advent/strawberry.png") }), s.jsx("img", { src: "/Advent/cream.png", alt: "cream", onClick: () => o("/Advent/cream.png") })] })] })] });
}, eu = () => (xe(() => {
  let n = null, o = null;
  return setTimeout(() => {
    n = window.open("/Advent/adam.jpeg", "Adam", `width=337, height=307, left=200, top=${window.innerHeight - 300}`), o = window.open("/Advent/god.jpeg", "God", `width=566, height=366, left=${window.innerWidth - 600}, top=100`);
  }, 500), () => {
    n && !n.closed && n.close(), o && !o.closed && o.close();
  };
}), s.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: ["The Creation of Adam", s.jsx("br", {}), s.jsx("img", { src: "/Advent/cross.gif", alt: "cross" })] })), tu = () => s.jsx("div", { className: "ascii" }), ru = () => {
  const [n, o] = J(!1), [r, i] = J(""), c = (h) => {
    i(h.target.value);
  };
  return xe(() => {
    o(r === "fallen");
  }, [r]), s.jsx(s.Fragment, { children: s.jsxs("div", { className: "apple-tree d-flex flex-column justify-content-center align-items-center", children: [s.jsxs("p", { children: [`          # #### ####
        ### \\/#|### |/####
        ####\\/#/ \\||/##/_/##/_#
    #####  \\/###|/ \\/ # ###
     ##_\\_#\\_\\## | #/###_/_####
  ## #### # \\ #| /  #### ##/##
   __#_--###\`  |{,###---###-~
                 \\  }{`, s.jsxs("select", { value: r, onChange: c, children: [s.jsx("option", { value: "red-apple", children: "🍎" }), s.jsx("option", { value: "green-apple", children: "🍏" }), s.jsx("option", { value: "sakura", children: "🌸" }), s.jsx("option", { value: "oramge", children: "🍊" }), s.jsx("option", { value: "fallen" })] }), n ? `
                    }}{
                    }}{
                    {{} 🍎
         , -=-~{ .-^- _    ,   ,,
     / '          ,      ;         '  \`` : `
                    }}{
                    }}{
                    {{}
         , -=-~{ .-^- _    ,   ,,
     / '          ,      ;         '  \``] }), s.jsx("br", {}), s.jsx("span", { children: "𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊" })] }) });
}, nu = () => {
  const [n, o] = J(!1), [r, i] = J(!1), [c, h] = J(""), [g, x] = J(["", "", "", "", "", "", "", "", ""]), [b, w] = J(0), k = "🐡𓇼🐟💫🫧🐚🦀💌🌟🐠🐙🦑🪸⭐️🌀", _ = (S) => {
    const m = S.length - 2, T = Math.floor(Math.random() * m / 2) * 2;
    return S.slice(T, T + 2);
  }, I = () => {
    i(!1), o(!0), setTimeout(() => {
      o(!1), i(!0), h(_(k));
    }, 2e3);
  }, A = (S) => {
    if (c !== "" && S < 9) {
      const m = [...g];
      m[S] = c, w(b + 1), x(m);
    }
  };
  return s.jsxs("div", { className: "d-flex justify-content-center align-items-center", style: { fontFamily: "Courier New" }, children: [s.jsxs("div", { className: "fishing d-flex flex-column justify-content-center align-items-center", children: [s.jsx("img", { className: n ? "move-rod" : "", src: "/Advent/fishing_pole.webp", alt: "fishing pole" }), s.jsx("span", { className: `fished ${r ? "" : "d-none"}`, children: `  ${c}` }), "   ,(   ,(   ,(   ,(   ,(   ,(   ,(   ,(\n`-'  `-'  `-'  `-'  `-'  `-'  `-'  `-'  `", s.jsxs("div", { children: [s.jsx("button", { onClick: I, children: "Fish" }), s.jsx("button", { onClick: () => A(b), children: "Add to Inventory" })] })] }), s.jsxs("div", { className: "container text-center flex-wrap inventory", children: [s.jsx("img", { src: "/Advent/layout3.png", alt: "" }), s.jsx("div", { className: "row", children: s.jsx("h4", { children: "Inventory" }) }), s.jsx("div", { className: "row justify-content-center grid", children: g.map((S, m) => s.jsx("div", { className: "col-3", style: {
    display: "flex",
    justifyContent: "center",
    fontSize: 45,
    alignItems: "center"
  }, children: s.jsx("span", { children: S }) }, m)) })] })] });
}, au = () => {
  const n = ["lightblue", "#D1DFF6", "#C2D6F6", "#92B6F0", "#8BD4F6"], c = [`   _  _
  ( \`   )_
 (    )    \`)
(_   (_ .  _) _)`, `     _
    (  )
 ( \`  ) . )
(_, _(  ,_)_)`, `    _ .
  (  _ )_
(_  _(_ ,)`], [h, g] = J([]), x = `          |
          |   .
   \`.  *  |     .'
     \`. ._|_* .'  .
   . * .'   \`.  *
-------|     |-------
   .  *\`.___.' *  .
      .'  |* \`.  *
    .' *  |  . \`.
        . |
          |`, b = "                       `::`\n                        /\n                       `    `;:`\n    _          .;:;          /\n  _(_)_        ::;       wWWWw  ,,,     _\n (_)@(_),,,  _ ';:;;'    (___) {{{}}  _(_)_\n  /(_) {{{}} >'. ||  _    ~Y~   ~Y~  (_)@(_)\n  |  {{}~Y~  `> \\||.'< (@)\\|{}} \\|/   /(_)\n(\\|/)~Y~\\|/    `>|/ <` \\Y/\\|~Y~ \\|/ (\\|/) \n \\|//\\|/\\|//    `||/`  \\|/\\|\\|/\\|//\\|//\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^", [w, k] = J("sunny"), _ = (A) => {
    k(A.target.value);
  }, I = (A) => {
    g([]);
    for (let S = 0; S < A; S++) {
      let m = c[Math.floor(Math.random() * 3)], T = Math.random() * (window.innerWidth - 150), Y = Math.random() * 400, Z = Math.random() * 0.2 + 0.9, oe = n[Math.floor(Math.random() * 5)], ee = {
        type: m,
        x: T,
        y: Y,
        opacity: Z,
        color: oe
      };
      g((ge) => [...ge, ee]);
    }
  };
  return xe(() => {
    w === "sunny" ? I(10) : w === "partly-sunny" ? I(20) : w === "cloudy" && I(30);
  }, [w]), s.jsxs("div", { className: "wrap", children: [s.jsxs("select", { value: w, onChange: _, id: "weather", children: [s.jsx("option", { value: "sunny", children: "☀️" }), s.jsx("option", { value: "partly-sunny", children: "⛅️" }), s.jsx("option", { value: "cloudy", children: "☁️" })] }), w === "sunny" && s.jsxs("div", { className: "sun-container", children: [s.jsx("span", { className: "dot" }), s.jsx("span", { className: "ascii sun", children: x })] }), w === "partly-sunny" && s.jsxs("div", { className: "sun-container", children: [s.jsx("span", { className: "dot", style: { backgroundColor: "#fde2a1" } }), s.jsx("span", { className: "ascii sun", style: { color: "#EFB93A" }, children: x })] }), s.jsx("div", { className: "clouds", children: s.jsx("div", { className: "ascii", children: h.map((A, S) => s.jsx("span", { className: "cloud", style: {
    left: `${A.x}px`,
    top: `${A.y}px`,
    opacity: A.opacity,
    color: A.color
  }, children: A.type }, S)) }) }), s.jsx("div", { className: "clouds2", children: s.jsx("div", { className: "ascii", children: h.map((A, S) => s.jsx("span", { className: "cloud", style: {
    left: A.x,
    top: A.y,
    opacity: A.opacity,
    color: A.color
  }, children: A.type }, S)) }) }), s.jsxs("div", { className: "gardens", children: [s.jsx("span", { className: "ascii garden", children: b }), s.jsx("span", { className: "ascii garden2", children: b }), s.jsx("span", { className: "ascii garden3", children: b }), s.jsx("span", { className: "ascii garden4", children: b })] })] });
}, su = () => {
  const [n, o] = J(0), [r, i] = J(!0), c = ["dream.jpeg", "poppies.jpeg", "poppies2.gif", "dorothy.jpeg"], h = [
    "[ You wake up from a dream. ]",
    "[ You find yourself in a field of poppies. ]",
    "[ You start feeling a little sleepy... ]",
    "[ You settle down for a long, long nap. ]"
  ], g = () => {
    o(n + 1), n === 2 && i(!1);
  };
  return s.jsxs(s.Fragment, { children: [s.jsxs("div", { className: "bg", children: [s.jsx("div", { className: "screen" }), s.jsx("img", { src: `/Advent/${c[n]}`, alt: "dream" })] }), s.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center fade-in text", children: [s.jsx("span", { children: h[n] }), s.jsx("button", { className: r ? "dream-button" : "d-none", onClick: g, children: "Go forth" })] })] });
};
var Ma = { exports: {} };
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
(function(n, o) {
  (function(r, i) {
    n.exports = i();
  })(Dl, function() {
    for (var r = function(e, t, a) {
      return t === void 0 && (t = 0), a === void 0 && (a = 1), e < t ? t : e > a ? a : e;
    }, i = r, c = function(e) {
      e._clipped = !1, e._unclipped = e.slice(0);
      for (var t = 0; t <= 3; t++)
        t < 3 ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0), e[t] = i(e[t], 0, 255)) : t === 3 && (e[t] = i(e[t], 0, 1));
      return e;
    }, h = {}, g = 0, x = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; g < x.length; g += 1) {
      var b = x[g];
      h["[object " + b + "]"] = b.toLowerCase();
    }
    var w = function(e) {
      return h[Object.prototype.toString.call(e)] || "object";
    }, k = w, _ = function(e, t) {
      return t === void 0 && (t = null), e.length >= 3 ? Array.prototype.slice.call(e) : k(e[0]) == "object" && t ? t.split("").filter(function(a) {
        return e[0][a] !== void 0;
      }).map(function(a) {
        return e[0][a];
      }) : e[0];
    }, I = w, A = function(e) {
      if (e.length < 2)
        return null;
      var t = e.length - 1;
      return I(e[t]) == "string" ? e[t].toLowerCase() : null;
    }, S = Math.PI, m = {
      clip_rgb: c,
      limit: r,
      type: w,
      unpack: _,
      last: A,
      PI: S,
      TWOPI: S * 2,
      PITHIRD: S / 3,
      DEG2RAD: S / 180,
      RAD2DEG: 180 / S
    }, T = {
      format: {},
      autodetect: []
    }, Y = m.last, Z = m.clip_rgb, oe = m.type, ee = T, ge = function() {
      for (var t = [], a = arguments.length; a--; )
        t[a] = arguments[a];
      var l = this;
      if (oe(t[0]) === "object" && t[0].constructor && t[0].constructor === this.constructor)
        return t[0];
      var f = Y(t), d = !1;
      if (!f) {
        d = !0, ee.sorted || (ee.autodetect = ee.autodetect.sort(function(j, $) {
          return $.p - j.p;
        }), ee.sorted = !0);
        for (var u = 0, v = ee.autodetect; u < v.length; u += 1) {
          var p = v[u];
          if (f = p.test.apply(p, t), f)
            break;
        }
      }
      if (ee.format[f]) {
        var y = ee.format[f].apply(null, d ? t : t.slice(0, -1));
        l._rgb = Z(y);
      } else
        throw new Error("unknown format: " + t);
      l._rgb.length === 3 && l._rgb.push(1);
    };
    ge.prototype.toString = function() {
      return oe(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var M = ge, _e = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(_e.Color, [null].concat(e)))();
    };
    _e.Color = M, _e.version = "2.4.2";
    var K = _e, nr = m.unpack, ct = Math.max, ut = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = nr(e, "rgb"), l = a[0], f = a[1], d = a[2];
      l = l / 255, f = f / 255, d = d / 255;
      var u = 1 - ct(l, ct(f, d)), v = u < 1 ? 1 / (1 - u) : 0, p = (1 - l - u) * v, y = (1 - f - u) * v, j = (1 - d - u) * v;
      return [p, y, j, u];
    }, Ct = ut, ar = m.unpack, Nt = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      e = ar(e, "cmyk");
      var a = e[0], l = e[1], f = e[2], d = e[3], u = e.length > 4 ? e[4] : 1;
      return d === 1 ? [0, 0, 0, u] : [
        a >= 1 ? 0 : 255 * (1 - a) * (1 - d),
        // r
        l >= 1 ? 0 : 255 * (1 - l) * (1 - d),
        // g
        f >= 1 ? 0 : 255 * (1 - f) * (1 - d),
        // b
        u
      ];
    }, Pe = Nt, _t = K, $t = M, ft = T, Et = m.unpack, At = m.type, Dt = Ct;
    $t.prototype.cmyk = function() {
      return Dt(this._rgb);
    }, _t.cmyk = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply($t, [null].concat(e, ["cmyk"])))();
    }, ft.format.cmyk = Pe, ft.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], t = arguments.length; t--; )
          e[t] = arguments[t];
        if (e = Et(e, "cmyk"), At(e) === "array" && e.length === 4)
          return "cmyk";
      }
    });
    var Pt = m.unpack, dt = m.last, Xe = function(e) {
      return Math.round(e * 100) / 100;
    }, sr = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = Pt(e, "hsla"), l = dt(e) || "lsa";
      return a[0] = Xe(a[0] || 0), a[1] = Xe(a[1] * 100) + "%", a[2] = Xe(a[2] * 100) + "%", l === "hsla" || a.length > 3 && a[3] < 1 ? (a[3] = a.length > 3 ? a[3] : 1, l = "hsla") : a.length = 3, l + "(" + a.join(",") + ")";
    }, St = sr, or = m.unpack, It = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      e = or(e, "rgba");
      var a = e[0], l = e[1], f = e[2];
      a /= 255, l /= 255, f /= 255;
      var d = Math.min(a, l, f), u = Math.max(a, l, f), v = (u + d) / 2, p, y;
      return u === d ? (p = 0, y = Number.NaN) : p = v < 0.5 ? (u - d) / (u + d) : (u - d) / (2 - u - d), a == u ? y = (l - f) / (u - d) : l == u ? y = 2 + (f - a) / (u - d) : f == u && (y = 4 + (a - l) / (u - d)), y *= 60, y < 0 && (y += 360), e.length > 3 && e[3] !== void 0 ? [y, p, v, e[3]] : [y, p, v];
    }, Tt = It, Ot = m.unpack, ir = m.last, Mt = St, lr = Tt, Se = Math.round, Rt = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = Ot(e, "rgba"), l = ir(e) || "rgb";
      return l.substr(0, 3) == "hsl" ? Mt(lr(a), l) : (a[0] = Se(a[0]), a[1] = Se(a[1]), a[2] = Se(a[2]), (l === "rgba" || a.length > 3 && a[3] < 1) && (a[3] = a.length > 3 ? a[3] : 1, l = "rgba"), l + "(" + a.slice(0, l === "rgb" ? 3 : 4).join(",") + ")");
    }, ye = Rt, Ft = m.unpack, me = Math.round, ve = function() {
      for (var e, t = [], a = arguments.length; a--; )
        t[a] = arguments[a];
      t = Ft(t, "hsl");
      var l = t[0], f = t[1], d = t[2], u, v, p;
      if (f === 0)
        u = v = p = d * 255;
      else {
        var y = [0, 0, 0], j = [0, 0, 0], $ = d < 0.5 ? d * (1 + f) : d + f - d * f, C = 2 * d - $, D = l / 360;
        y[0] = D + 1 / 3, y[1] = D, y[2] = D - 1 / 3;
        for (var E = 0; E < 3; E++)
          y[E] < 0 && (y[E] += 1), y[E] > 1 && (y[E] -= 1), 6 * y[E] < 1 ? j[E] = C + ($ - C) * 6 * y[E] : 2 * y[E] < 1 ? j[E] = $ : 3 * y[E] < 2 ? j[E] = C + ($ - C) * (2 / 3 - y[E]) * 6 : j[E] = C;
        e = [me(j[0] * 255), me(j[1] * 255), me(j[2] * 255)], u = e[0], v = e[1], p = e[2];
      }
      return t.length > 3 ? [u, v, p, t[3]] : [u, v, p, 1];
    }, $e = ve, ht = $e, vt = T, de = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, Ie = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, ze = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, we = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, He = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, Ve = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Lt = Math.round, Je = function(e) {
      e = e.toLowerCase().trim();
      var t;
      if (vt.format.named)
        try {
          return vt.format.named(e);
        } catch {
        }
      if (t = e.match(de)) {
        for (var a = t.slice(1, 4), l = 0; l < 3; l++)
          a[l] = +a[l];
        return a[3] = 1, a;
      }
      if (t = e.match(Ie)) {
        for (var f = t.slice(1, 5), d = 0; d < 4; d++)
          f[d] = +f[d];
        return f;
      }
      if (t = e.match(ze)) {
        for (var u = t.slice(1, 4), v = 0; v < 3; v++)
          u[v] = Lt(u[v] * 2.55);
        return u[3] = 1, u;
      }
      if (t = e.match(we)) {
        for (var p = t.slice(1, 5), y = 0; y < 3; y++)
          p[y] = Lt(p[y] * 2.55);
        return p[3] = +p[3], p;
      }
      if (t = e.match(He)) {
        var j = t.slice(1, 4);
        j[1] *= 0.01, j[2] *= 0.01;
        var $ = ht(j);
        return $[3] = 1, $;
      }
      if (t = e.match(Ve)) {
        var C = t.slice(1, 4);
        C[1] *= 0.01, C[2] *= 0.01;
        var D = ht(C);
        return D[3] = +t[4], D;
      }
    };
    Je.test = function(e) {
      return de.test(e) || Ie.test(e) || ze.test(e) || we.test(e) || He.test(e) || Ve.test(e);
    };
    var cr = Je, ur = K, Bt = M, pt = T, fr = m.type, dr = ye, gt = cr;
    Bt.prototype.css = function(e) {
      return dr(this._rgb, e);
    }, ur.css = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(Bt, [null].concat(e, ["css"])))();
    }, pt.format.css = gt, pt.autodetect.push({
      p: 5,
      test: function(e) {
        for (var t = [], a = arguments.length - 1; a-- > 0; )
          t[a] = arguments[a + 1];
        if (!t.length && fr(e) === "string" && gt.test(e))
          return "css";
      }
    });
    var zt = M, hr = K, vr = T, se = m.unpack;
    vr.format.gl = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = se(e, "rgba");
      return a[0] *= 255, a[1] *= 255, a[2] *= 255, a;
    }, hr.gl = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(zt, [null].concat(e, ["gl"])))();
    }, zt.prototype.gl = function() {
      var e = this._rgb;
      return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
    };
    var L = m.unpack, he = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = L(e, "rgb"), l = a[0], f = a[1], d = a[2], u = Math.min(l, f, d), v = Math.max(l, f, d), p = v - u, y = p * 100 / 255, j = u / (255 - p) * 100, $;
      return p === 0 ? $ = Number.NaN : (l === v && ($ = (f - d) / p), f === v && ($ = 2 + (d - l) / p), d === v && ($ = 4 + (l - f) / p), $ *= 60, $ < 0 && ($ += 360)), [$, y, j];
    }, re = he, Ee = m.unpack, Ue = Math.floor, Fa = function() {
      for (var e, t, a, l, f, d, u = [], v = arguments.length; v--; )
        u[v] = arguments[v];
      u = Ee(u, "hcg");
      var p = u[0], y = u[1], j = u[2], $, C, D;
      j = j * 255;
      var E = y * 255;
      if (y === 0)
        $ = C = D = j;
      else {
        p === 360 && (p = 0), p > 360 && (p -= 360), p < 0 && (p += 360), p /= 60;
        var R = Ue(p), z = p - R, q = j * (1 - y), W = q + E * (1 - z), ce = q + E * z, le = q + E;
        switch (R) {
          case 0:
            e = [le, ce, q], $ = e[0], C = e[1], D = e[2];
            break;
          case 1:
            t = [W, le, q], $ = t[0], C = t[1], D = t[2];
            break;
          case 2:
            a = [q, le, ce], $ = a[0], C = a[1], D = a[2];
            break;
          case 3:
            l = [q, W, le], $ = l[0], C = l[1], D = l[2];
            break;
          case 4:
            f = [ce, q, le], $ = f[0], C = f[1], D = f[2];
            break;
          case 5:
            d = [le, q, W], $ = d[0], C = d[1], D = d[2];
            break;
        }
      }
      return [$, C, D, u.length > 3 ? u[3] : 1];
    }, La = Fa, Ba = m.unpack, za = m.type, Ua = K, Zr = M, Qr = T, qa = re;
    Zr.prototype.hcg = function() {
      return qa(this._rgb);
    }, Ua.hcg = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(Zr, [null].concat(e, ["hcg"])))();
    }, Qr.format.hcg = La, Qr.autodetect.push({
      p: 1,
      test: function() {
        for (var e = [], t = arguments.length; t--; )
          e[t] = arguments[t];
        if (e = Ba(e, "hcg"), za(e) === "array" && e.length === 3)
          return "hcg";
      }
    });
    var Ga = m.unpack, Wa = m.last, Ut = Math.round, Ya = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = Ga(e, "rgba"), l = a[0], f = a[1], d = a[2], u = a[3], v = Wa(e) || "auto";
      u === void 0 && (u = 1), v === "auto" && (v = u < 1 ? "rgba" : "rgb"), l = Ut(l), f = Ut(f), d = Ut(d);
      var p = l << 16 | f << 8 | d, y = "000000" + p.toString(16);
      y = y.substr(y.length - 6);
      var j = "0" + Ut(u * 255).toString(16);
      switch (j = j.substr(j.length - 2), v.toLowerCase()) {
        case "rgba":
          return "#" + y + j;
        case "argb":
          return "#" + j + y;
        default:
          return "#" + y;
      }
    }, Kr = Ya, Xa = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, Ha = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, Va = function(e) {
      if (e.match(Xa)) {
        (e.length === 4 || e.length === 7) && (e = e.substr(1)), e.length === 3 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
        var t = parseInt(e, 16), a = t >> 16, l = t >> 8 & 255, f = t & 255;
        return [a, l, f, 1];
      }
      if (e.match(Ha)) {
        (e.length === 5 || e.length === 9) && (e = e.substr(1)), e.length === 4 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
        var d = parseInt(e, 16), u = d >> 24 & 255, v = d >> 16 & 255, p = d >> 8 & 255, y = Math.round((d & 255) / 255 * 100) / 100;
        return [u, v, p, y];
      }
      throw new Error("unknown hex color: " + e);
    }, en = Va, Ja = K, tn = M, Za = m.type, rn = T, Qa = Kr;
    tn.prototype.hex = function(e) {
      return Qa(this._rgb, e);
    }, Ja.hex = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(tn, [null].concat(e, ["hex"])))();
    }, rn.format.hex = en, rn.autodetect.push({
      p: 4,
      test: function(e) {
        for (var t = [], a = arguments.length - 1; a-- > 0; )
          t[a] = arguments[a + 1];
        if (!t.length && Za(e) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0)
          return "hex";
      }
    });
    var Ka = m.unpack, nn = m.TWOPI, es = Math.min, ts = Math.sqrt, rs = Math.acos, ns = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = Ka(e, "rgb"), l = a[0], f = a[1], d = a[2];
      l /= 255, f /= 255, d /= 255;
      var u, v = es(l, f, d), p = (l + f + d) / 3, y = p > 0 ? 1 - v / p : 0;
      return y === 0 ? u = NaN : (u = (l - f + (l - d)) / 2, u /= ts((l - f) * (l - f) + (l - d) * (f - d)), u = rs(u), d > f && (u = nn - u), u /= nn), [u * 360, y, p];
    }, as = ns, ss = m.unpack, pr = m.limit, Ze = m.TWOPI, gr = m.PITHIRD, Qe = Math.cos, os = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      e = ss(e, "hsi");
      var a = e[0], l = e[1], f = e[2], d, u, v;
      return isNaN(a) && (a = 0), isNaN(l) && (l = 0), a > 360 && (a -= 360), a < 0 && (a += 360), a /= 360, a < 1 / 3 ? (v = (1 - l) / 3, d = (1 + l * Qe(Ze * a) / Qe(gr - Ze * a)) / 3, u = 1 - (v + d)) : a < 2 / 3 ? (a -= 1 / 3, d = (1 - l) / 3, u = (1 + l * Qe(Ze * a) / Qe(gr - Ze * a)) / 3, v = 1 - (d + u)) : (a -= 2 / 3, u = (1 - l) / 3, v = (1 + l * Qe(Ze * a) / Qe(gr - Ze * a)) / 3, d = 1 - (u + v)), d = pr(f * d * 3), u = pr(f * u * 3), v = pr(f * v * 3), [d * 255, u * 255, v * 255, e.length > 3 ? e[3] : 1];
    }, is = os, ls = m.unpack, cs = m.type, us = K, an = M, sn = T, fs = as;
    an.prototype.hsi = function() {
      return fs(this._rgb);
    }, us.hsi = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(an, [null].concat(e, ["hsi"])))();
    }, sn.format.hsi = is, sn.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], t = arguments.length; t--; )
          e[t] = arguments[t];
        if (e = ls(e, "hsi"), cs(e) === "array" && e.length === 3)
          return "hsi";
      }
    });
    var ds = m.unpack, hs = m.type, vs = K, on = M, ln = T, ps = Tt;
    on.prototype.hsl = function() {
      return ps(this._rgb);
    }, vs.hsl = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(on, [null].concat(e, ["hsl"])))();
    }, ln.format.hsl = $e, ln.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], t = arguments.length; t--; )
          e[t] = arguments[t];
        if (e = ds(e, "hsl"), hs(e) === "array" && e.length === 3)
          return "hsl";
      }
    });
    var gs = m.unpack, ms = Math.min, bs = Math.max, ys = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      e = gs(e, "rgb");
      var a = e[0], l = e[1], f = e[2], d = ms(a, l, f), u = bs(a, l, f), v = u - d, p, y, j;
      return j = u / 255, u === 0 ? (p = Number.NaN, y = 0) : (y = v / u, a === u && (p = (l - f) / v), l === u && (p = 2 + (f - a) / v), f === u && (p = 4 + (a - l) / v), p *= 60, p < 0 && (p += 360)), [p, y, j];
    }, xs = ys, ws = m.unpack, js = Math.floor, ks = function() {
      for (var e, t, a, l, f, d, u = [], v = arguments.length; v--; )
        u[v] = arguments[v];
      u = ws(u, "hsv");
      var p = u[0], y = u[1], j = u[2], $, C, D;
      if (j *= 255, y === 0)
        $ = C = D = j;
      else {
        p === 360 && (p = 0), p > 360 && (p -= 360), p < 0 && (p += 360), p /= 60;
        var E = js(p), R = p - E, z = j * (1 - y), q = j * (1 - y * R), W = j * (1 - y * (1 - R));
        switch (E) {
          case 0:
            e = [j, W, z], $ = e[0], C = e[1], D = e[2];
            break;
          case 1:
            t = [q, j, z], $ = t[0], C = t[1], D = t[2];
            break;
          case 2:
            a = [z, j, W], $ = a[0], C = a[1], D = a[2];
            break;
          case 3:
            l = [z, q, j], $ = l[0], C = l[1], D = l[2];
            break;
          case 4:
            f = [W, z, j], $ = f[0], C = f[1], D = f[2];
            break;
          case 5:
            d = [j, z, q], $ = d[0], C = d[1], D = d[2];
            break;
        }
      }
      return [$, C, D, u.length > 3 ? u[3] : 1];
    }, Cs = ks, Ns = m.unpack, _s = m.type, $s = K, cn = M, un = T, Es = xs;
    cn.prototype.hsv = function() {
      return Es(this._rgb);
    }, $s.hsv = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(cn, [null].concat(e, ["hsv"])))();
    }, un.format.hsv = Cs, un.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], t = arguments.length; t--; )
          e[t] = arguments[t];
        if (e = Ns(e, "hsv"), _s(e) === "array" && e.length === 3)
          return "hsv";
      }
    });
    var qt = {
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
    }, Ke = qt, As = m.unpack, fn = Math.pow, Ds = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = As(e, "rgb"), l = a[0], f = a[1], d = a[2], u = Ps(l, f, d), v = u[0], p = u[1], y = u[2], j = 116 * p - 16;
      return [j < 0 ? 0 : j, 500 * (v - p), 200 * (p - y)];
    }, mr = function(e) {
      return (e /= 255) <= 0.04045 ? e / 12.92 : fn((e + 0.055) / 1.055, 2.4);
    }, br = function(e) {
      return e > Ke.t3 ? fn(e, 1 / 3) : e / Ke.t2 + Ke.t0;
    }, Ps = function(e, t, a) {
      e = mr(e), t = mr(t), a = mr(a);
      var l = br((0.4124564 * e + 0.3575761 * t + 0.1804375 * a) / Ke.Xn), f = br((0.2126729 * e + 0.7151522 * t + 0.072175 * a) / Ke.Yn), d = br((0.0193339 * e + 0.119192 * t + 0.9503041 * a) / Ke.Zn);
      return [l, f, d];
    }, dn = Ds, et = qt, Ss = m.unpack, Is = Math.pow, Ts = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      e = Ss(e, "lab");
      var a = e[0], l = e[1], f = e[2], d, u, v, p, y, j;
      return u = (a + 16) / 116, d = isNaN(l) ? u : u + l / 500, v = isNaN(f) ? u : u - f / 200, u = et.Yn * xr(u), d = et.Xn * xr(d), v = et.Zn * xr(v), p = yr(3.2404542 * d - 1.5371385 * u - 0.4985314 * v), y = yr(-0.969266 * d + 1.8760108 * u + 0.041556 * v), j = yr(0.0556434 * d - 0.2040259 * u + 1.0572252 * v), [p, y, j, e.length > 3 ? e[3] : 1];
    }, yr = function(e) {
      return 255 * (e <= 304e-5 ? 12.92 * e : 1.055 * Is(e, 1 / 2.4) - 0.055);
    }, xr = function(e) {
      return e > et.t1 ? e * e * e : et.t2 * (e - et.t0);
    }, hn = Ts, Os = m.unpack, Ms = m.type, Rs = K, vn = M, pn = T, Fs = dn;
    vn.prototype.lab = function() {
      return Fs(this._rgb);
    }, Rs.lab = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(vn, [null].concat(e, ["lab"])))();
    }, pn.format.lab = hn, pn.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], t = arguments.length; t--; )
          e[t] = arguments[t];
        if (e = Os(e, "lab"), Ms(e) === "array" && e.length === 3)
          return "lab";
      }
    });
    var Ls = m.unpack, Bs = m.RAD2DEG, zs = Math.sqrt, Us = Math.atan2, qs = Math.round, Gs = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = Ls(e, "lab"), l = a[0], f = a[1], d = a[2], u = zs(f * f + d * d), v = (Us(d, f) * Bs + 360) % 360;
      return qs(u * 1e4) === 0 && (v = Number.NaN), [l, u, v];
    }, gn = Gs, Ws = m.unpack, Ys = dn, Xs = gn, Hs = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = Ws(e, "rgb"), l = a[0], f = a[1], d = a[2], u = Ys(l, f, d), v = u[0], p = u[1], y = u[2];
      return Xs(v, p, y);
    }, Vs = Hs, Js = m.unpack, Zs = m.DEG2RAD, Qs = Math.sin, Ks = Math.cos, eo = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = Js(e, "lch"), l = a[0], f = a[1], d = a[2];
      return isNaN(d) && (d = 0), d = d * Zs, [l, Ks(d) * f, Qs(d) * f];
    }, mn = eo, to = m.unpack, ro = mn, no = hn, ao = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      e = to(e, "lch");
      var a = e[0], l = e[1], f = e[2], d = ro(a, l, f), u = d[0], v = d[1], p = d[2], y = no(u, v, p), j = y[0], $ = y[1], C = y[2];
      return [j, $, C, e.length > 3 ? e[3] : 1];
    }, bn = ao, so = m.unpack, oo = bn, io = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = so(e, "hcl").reverse();
      return oo.apply(void 0, a);
    }, lo = io, co = m.unpack, uo = m.type, yn = K, Gt = M, wr = T, xn = Vs;
    Gt.prototype.lch = function() {
      return xn(this._rgb);
    }, Gt.prototype.hcl = function() {
      return xn(this._rgb).reverse();
    }, yn.lch = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(Gt, [null].concat(e, ["lch"])))();
    }, yn.hcl = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(Gt, [null].concat(e, ["hcl"])))();
    }, wr.format.lch = bn, wr.format.hcl = lo, ["lch", "hcl"].forEach(function(e) {
      return wr.autodetect.push({
        p: 2,
        test: function() {
          for (var t = [], a = arguments.length; a--; )
            t[a] = arguments[a];
          if (t = co(t, e), uo(t) === "array" && t.length === 3)
            return e;
        }
      });
    });
    var fo = {
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
    }, wn = fo, ho = M, jn = T, vo = m.type, mt = wn, po = en, go = Kr;
    ho.prototype.name = function() {
      for (var e = go(this._rgb, "rgb"), t = 0, a = Object.keys(mt); t < a.length; t += 1) {
        var l = a[t];
        if (mt[l] === e)
          return l.toLowerCase();
      }
      return e;
    }, jn.format.named = function(e) {
      if (e = e.toLowerCase(), mt[e])
        return po(mt[e]);
      throw new Error("unknown color name: " + e);
    }, jn.autodetect.push({
      p: 5,
      test: function(e) {
        for (var t = [], a = arguments.length - 1; a-- > 0; )
          t[a] = arguments[a + 1];
        if (!t.length && vo(e) === "string" && mt[e.toLowerCase()])
          return "named";
      }
    });
    var mo = m.unpack, bo = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = mo(e, "rgb"), l = a[0], f = a[1], d = a[2];
      return (l << 16) + (f << 8) + d;
    }, yo = bo, xo = m.type, wo = function(e) {
      if (xo(e) == "number" && e >= 0 && e <= 16777215) {
        var t = e >> 16, a = e >> 8 & 255, l = e & 255;
        return [t, a, l, 1];
      }
      throw new Error("unknown num color: " + e);
    }, jo = wo, ko = K, kn = M, Cn = T, Co = m.type, No = yo;
    kn.prototype.num = function() {
      return No(this._rgb);
    }, ko.num = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(kn, [null].concat(e, ["num"])))();
    }, Cn.format.num = jo, Cn.autodetect.push({
      p: 5,
      test: function() {
        for (var e = [], t = arguments.length; t--; )
          e[t] = arguments[t];
        if (e.length === 1 && Co(e[0]) === "number" && e[0] >= 0 && e[0] <= 16777215)
          return "num";
      }
    });
    var _o = K, jr = M, Nn = T, _n = m.unpack, $n = m.type, En = Math.round;
    jr.prototype.rgb = function(e) {
      return e === void 0 && (e = !0), e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(En);
    }, jr.prototype.rgba = function(e) {
      return e === void 0 && (e = !0), this._rgb.slice(0, 4).map(function(t, a) {
        return a < 3 ? e === !1 ? t : En(t) : t;
      });
    }, _o.rgb = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(jr, [null].concat(e, ["rgb"])))();
    }, Nn.format.rgb = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = _n(e, "rgba");
      return a[3] === void 0 && (a[3] = 1), a;
    }, Nn.autodetect.push({
      p: 3,
      test: function() {
        for (var e = [], t = arguments.length; t--; )
          e[t] = arguments[t];
        if (e = _n(e, "rgba"), $n(e) === "array" && (e.length === 3 || e.length === 4 && $n(e[3]) == "number" && e[3] >= 0 && e[3] <= 1))
          return "rgb";
      }
    });
    var Wt = Math.log, $o = function(e) {
      var t = e / 100, a, l, f;
      return t < 66 ? (a = 255, l = t < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (l = t - 2) + 104.49216199393888 * Wt(l), f = t < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (f = t - 10) + 115.67994401066147 * Wt(f)) : (a = 351.97690566805693 + 0.114206453784165 * (a = t - 55) - 40.25366309332127 * Wt(a), l = 325.4494125711974 + 0.07943456536662342 * (l = t - 50) - 28.0852963507957 * Wt(l), f = 255), [a, l, f, 1];
    }, An = $o, Eo = An, Ao = m.unpack, Do = Math.round, Po = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      for (var a = Ao(e, "rgb"), l = a[0], f = a[2], d = 1e3, u = 4e4, v = 0.4, p; u - d > v; ) {
        p = (u + d) * 0.5;
        var y = Eo(p);
        y[2] / y[0] >= f / l ? u = p : d = p;
      }
      return Do(p);
    }, So = Po, kr = K, Yt = M, Cr = T, Io = So;
    Yt.prototype.temp = Yt.prototype.kelvin = Yt.prototype.temperature = function() {
      return Io(this._rgb);
    }, kr.temp = kr.kelvin = kr.temperature = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(Yt, [null].concat(e, ["temp"])))();
    }, Cr.format.temp = Cr.format.kelvin = Cr.format.temperature = An;
    var To = m.unpack, Nr = Math.cbrt, Oo = Math.pow, Mo = Math.sign, Ro = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = To(e, "rgb"), l = a[0], f = a[1], d = a[2], u = [_r(l / 255), _r(f / 255), _r(d / 255)], v = u[0], p = u[1], y = u[2], j = Nr(0.4122214708 * v + 0.5363325363 * p + 0.0514459929 * y), $ = Nr(0.2119034982 * v + 0.6806995451 * p + 0.1073969566 * y), C = Nr(0.0883024619 * v + 0.2817188376 * p + 0.6299787005 * y);
      return [
        0.2104542553 * j + 0.793617785 * $ - 0.0040720468 * C,
        1.9779984951 * j - 2.428592205 * $ + 0.4505937099 * C,
        0.0259040371 * j + 0.7827717662 * $ - 0.808675766 * C
      ];
    }, Dn = Ro;
    function _r(e) {
      var t = Math.abs(e);
      return t < 0.04045 ? e / 12.92 : (Mo(e) || 1) * Oo((t + 0.055) / 1.055, 2.4);
    }
    var Fo = m.unpack, Xt = Math.pow, Lo = Math.sign, Bo = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      e = Fo(e, "lab");
      var a = e[0], l = e[1], f = e[2], d = Xt(a + 0.3963377774 * l + 0.2158037573 * f, 3), u = Xt(a - 0.1055613458 * l - 0.0638541728 * f, 3), v = Xt(a - 0.0894841775 * l - 1.291485548 * f, 3);
      return [
        255 * $r(4.0767416621 * d - 3.3077115913 * u + 0.2309699292 * v),
        255 * $r(-1.2684380046 * d + 2.6097574011 * u - 0.3413193965 * v),
        255 * $r(-0.0041960863 * d - 0.7034186147 * u + 1.707614701 * v),
        e.length > 3 ? e[3] : 1
      ];
    }, Pn = Bo;
    function $r(e) {
      var t = Math.abs(e);
      return t > 31308e-7 ? (Lo(e) || 1) * (1.055 * Xt(t, 1 / 2.4) - 0.055) : e * 12.92;
    }
    var zo = m.unpack, Uo = m.type, qo = K, Sn = M, In = T, Go = Dn;
    Sn.prototype.oklab = function() {
      return Go(this._rgb);
    }, qo.oklab = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(Sn, [null].concat(e, ["oklab"])))();
    }, In.format.oklab = Pn, In.autodetect.push({
      p: 3,
      test: function() {
        for (var e = [], t = arguments.length; t--; )
          e[t] = arguments[t];
        if (e = zo(e, "oklab"), Uo(e) === "array" && e.length === 3)
          return "oklab";
      }
    });
    var Wo = m.unpack, Yo = Dn, Xo = gn, Ho = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      var a = Wo(e, "rgb"), l = a[0], f = a[1], d = a[2], u = Yo(l, f, d), v = u[0], p = u[1], y = u[2];
      return Xo(v, p, y);
    }, Vo = Ho, Jo = m.unpack, Zo = mn, Qo = Pn, Ko = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      e = Jo(e, "lch");
      var a = e[0], l = e[1], f = e[2], d = Zo(a, l, f), u = d[0], v = d[1], p = d[2], y = Qo(u, v, p), j = y[0], $ = y[1], C = y[2];
      return [j, $, C, e.length > 3 ? e[3] : 1];
    }, ei = Ko, ti = m.unpack, ri = m.type, ni = K, Tn = M, On = T, ai = Vo;
    Tn.prototype.oklch = function() {
      return ai(this._rgb);
    }, ni.oklch = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      return new (Function.prototype.bind.apply(Tn, [null].concat(e, ["oklch"])))();
    }, On.format.oklch = ei, On.autodetect.push({
      p: 3,
      test: function() {
        for (var e = [], t = arguments.length; t--; )
          e[t] = arguments[t];
        if (e = ti(e, "oklch"), ri(e) === "array" && e.length === 3)
          return "oklch";
      }
    });
    var Mn = M, si = m.type;
    Mn.prototype.alpha = function(e, t) {
      return t === void 0 && (t = !1), e !== void 0 && si(e) === "number" ? t ? (this._rgb[3] = e, this) : new Mn([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb") : this._rgb[3];
    };
    var oi = M;
    oi.prototype.clipped = function() {
      return this._rgb._clipped || !1;
    };
    var qe = M, ii = qt;
    qe.prototype.darken = function(e) {
      e === void 0 && (e = 1);
      var t = this, a = t.lab();
      return a[0] -= ii.Kn * e, new qe(a, "lab").alpha(t.alpha(), !0);
    }, qe.prototype.brighten = function(e) {
      return e === void 0 && (e = 1), this.darken(-e);
    }, qe.prototype.darker = qe.prototype.darken, qe.prototype.brighter = qe.prototype.brighten;
    var li = M;
    li.prototype.get = function(e) {
      var t = e.split("."), a = t[0], l = t[1], f = this[a]();
      if (l) {
        var d = a.indexOf(l) - (a.substr(0, 2) === "ok" ? 2 : 0);
        if (d > -1)
          return f[d];
        throw new Error("unknown channel " + l + " in mode " + a);
      } else
        return f;
    };
    var tt = M, ci = m.type, ui = Math.pow, fi = 1e-7, di = 20;
    tt.prototype.luminance = function(e) {
      if (e !== void 0 && ci(e) === "number") {
        if (e === 0)
          return new tt([0, 0, 0, this._rgb[3]], "rgb");
        if (e === 1)
          return new tt([255, 255, 255, this._rgb[3]], "rgb");
        var t = this.luminance(), a = "rgb", l = di, f = function(u, v) {
          var p = u.interpolate(v, 0.5, a), y = p.luminance();
          return Math.abs(e - y) < fi || !l-- ? p : y > e ? f(u, p) : f(p, v);
        }, d = (t > e ? f(new tt([0, 0, 0]), this) : f(this, new tt([255, 255, 255]))).rgb();
        return new tt(d.concat([this._rgb[3]]));
      }
      return hi.apply(void 0, this._rgb.slice(0, 3));
    };
    var hi = function(e, t, a) {
      return e = Er(e), t = Er(t), a = Er(a), 0.2126 * e + 0.7152 * t + 0.0722 * a;
    }, Er = function(e) {
      return e /= 255, e <= 0.03928 ? e / 12.92 : ui((e + 0.055) / 1.055, 2.4);
    }, be = {}, Rn = M, Fn = m.type, Ht = be, Ln = function(e, t, a) {
      a === void 0 && (a = 0.5);
      for (var l = [], f = arguments.length - 3; f-- > 0; )
        l[f] = arguments[f + 3];
      var d = l[0] || "lrgb";
      if (!Ht[d] && !l.length && (d = Object.keys(Ht)[0]), !Ht[d])
        throw new Error("interpolation mode " + d + " is not defined");
      return Fn(e) !== "object" && (e = new Rn(e)), Fn(t) !== "object" && (t = new Rn(t)), Ht[d](e, t, a).alpha(e.alpha() + a * (t.alpha() - e.alpha()));
    }, Bn = M, vi = Ln;
    Bn.prototype.mix = Bn.prototype.interpolate = function(e, t) {
      t === void 0 && (t = 0.5);
      for (var a = [], l = arguments.length - 2; l-- > 0; )
        a[l] = arguments[l + 2];
      return vi.apply(void 0, [this, e, t].concat(a));
    };
    var zn = M;
    zn.prototype.premultiply = function(e) {
      e === void 0 && (e = !1);
      var t = this._rgb, a = t[3];
      return e ? (this._rgb = [t[0] * a, t[1] * a, t[2] * a, a], this) : new zn([t[0] * a, t[1] * a, t[2] * a, a], "rgb");
    };
    var Ar = M, pi = qt;
    Ar.prototype.saturate = function(e) {
      e === void 0 && (e = 1);
      var t = this, a = t.lch();
      return a[1] += pi.Kn * e, a[1] < 0 && (a[1] = 0), new Ar(a, "lch").alpha(t.alpha(), !0);
    }, Ar.prototype.desaturate = function(e) {
      return e === void 0 && (e = 1), this.saturate(-e);
    };
    var Un = M, qn = m.type;
    Un.prototype.set = function(e, t, a) {
      a === void 0 && (a = !1);
      var l = e.split("."), f = l[0], d = l[1], u = this[f]();
      if (d) {
        var v = f.indexOf(d) - (f.substr(0, 2) === "ok" ? 2 : 0);
        if (v > -1) {
          if (qn(t) == "string")
            switch (t.charAt(0)) {
              case "+":
                u[v] += +t;
                break;
              case "-":
                u[v] += +t;
                break;
              case "*":
                u[v] *= +t.substr(1);
                break;
              case "/":
                u[v] /= +t.substr(1);
                break;
              default:
                u[v] = +t;
            }
          else if (qn(t) === "number")
            u[v] = t;
          else
            throw new Error("unsupported value for Color.set");
          var p = new Un(u, f);
          return a ? (this._rgb = p._rgb, this) : p;
        }
        throw new Error("unknown channel " + d + " in mode " + f);
      } else
        return u;
    };
    var gi = M, mi = function(e, t, a) {
      var l = e._rgb, f = t._rgb;
      return new gi(
        l[0] + a * (f[0] - l[0]),
        l[1] + a * (f[1] - l[1]),
        l[2] + a * (f[2] - l[2]),
        "rgb"
      );
    };
    be.rgb = mi;
    var bi = M, Dr = Math.sqrt, rt = Math.pow, yi = function(e, t, a) {
      var l = e._rgb, f = l[0], d = l[1], u = l[2], v = t._rgb, p = v[0], y = v[1], j = v[2];
      return new bi(
        Dr(rt(f, 2) * (1 - a) + rt(p, 2) * a),
        Dr(rt(d, 2) * (1 - a) + rt(y, 2) * a),
        Dr(rt(u, 2) * (1 - a) + rt(j, 2) * a),
        "rgb"
      );
    };
    be.lrgb = yi;
    var xi = M, wi = function(e, t, a) {
      var l = e.lab(), f = t.lab();
      return new xi(
        l[0] + a * (f[0] - l[0]),
        l[1] + a * (f[1] - l[1]),
        l[2] + a * (f[2] - l[2]),
        "lab"
      );
    };
    be.lab = wi;
    var Gn = M, nt = function(e, t, a, l) {
      var f, d, u, v;
      l === "hsl" ? (u = e.hsl(), v = t.hsl()) : l === "hsv" ? (u = e.hsv(), v = t.hsv()) : l === "hcg" ? (u = e.hcg(), v = t.hcg()) : l === "hsi" ? (u = e.hsi(), v = t.hsi()) : l === "lch" || l === "hcl" ? (l = "hcl", u = e.hcl(), v = t.hcl()) : l === "oklch" && (u = e.oklch().reverse(), v = t.oklch().reverse());
      var p, y, j, $, C, D;
      (l.substr(0, 1) === "h" || l === "oklch") && (f = u, p = f[0], j = f[1], C = f[2], d = v, y = d[0], $ = d[1], D = d[2]);
      var E, R, z, q;
      return !isNaN(p) && !isNaN(y) ? (y > p && y - p > 180 ? q = y - (p + 360) : y < p && p - y > 180 ? q = y + 360 - p : q = y - p, R = p + a * q) : isNaN(p) ? isNaN(y) ? R = Number.NaN : (R = y, (C == 1 || C == 0) && l != "hsv" && (E = $)) : (R = p, (D == 1 || D == 0) && l != "hsv" && (E = j)), E === void 0 && (E = j + a * ($ - j)), z = C + a * (D - C), l === "oklch" ? new Gn([z, E, R], l) : new Gn([R, E, z], l);
    }, ji = nt, Wn = function(e, t, a) {
      return ji(e, t, a, "lch");
    };
    be.lch = Wn, be.hcl = Wn;
    var ki = M, Ci = function(e, t, a) {
      var l = e.num(), f = t.num();
      return new ki(l + a * (f - l), "num");
    };
    be.num = Ci;
    var Ni = nt, _i = function(e, t, a) {
      return Ni(e, t, a, "hcg");
    };
    be.hcg = _i;
    var $i = nt, Ei = function(e, t, a) {
      return $i(e, t, a, "hsi");
    };
    be.hsi = Ei;
    var Ai = nt, Di = function(e, t, a) {
      return Ai(e, t, a, "hsl");
    };
    be.hsl = Di;
    var Pi = nt, Si = function(e, t, a) {
      return Pi(e, t, a, "hsv");
    };
    be.hsv = Si;
    var Ii = M, Ti = function(e, t, a) {
      var l = e.oklab(), f = t.oklab();
      return new Ii(
        l[0] + a * (f[0] - l[0]),
        l[1] + a * (f[1] - l[1]),
        l[2] + a * (f[2] - l[2]),
        "oklab"
      );
    };
    be.oklab = Ti;
    var Oi = nt, Mi = function(e, t, a) {
      return Oi(e, t, a, "oklch");
    };
    be.oklch = Mi;
    var Pr = M, Ri = m.clip_rgb, Sr = Math.pow, Ir = Math.sqrt, Tr = Math.PI, Yn = Math.cos, Xn = Math.sin, Fi = Math.atan2, Li = function(e, t, a) {
      t === void 0 && (t = "lrgb"), a === void 0 && (a = null);
      var l = e.length;
      a || (a = Array.from(new Array(l)).map(function() {
        return 1;
      }));
      var f = l / a.reduce(function(R, z) {
        return R + z;
      });
      if (a.forEach(function(R, z) {
        a[z] *= f;
      }), e = e.map(function(R) {
        return new Pr(R);
      }), t === "lrgb")
        return Bi(e, a);
      for (var d = e.shift(), u = d.get(t), v = [], p = 0, y = 0, j = 0; j < u.length; j++)
        if (u[j] = (u[j] || 0) * a[0], v.push(isNaN(u[j]) ? 0 : a[0]), t.charAt(j) === "h" && !isNaN(u[j])) {
          var $ = u[j] / 180 * Tr;
          p += Yn($) * a[0], y += Xn($) * a[0];
        }
      var C = d.alpha() * a[0];
      e.forEach(function(R, z) {
        var q = R.get(t);
        C += R.alpha() * a[z + 1];
        for (var W = 0; W < u.length; W++)
          if (!isNaN(q[W]))
            if (v[W] += a[z + 1], t.charAt(W) === "h") {
              var ce = q[W] / 180 * Tr;
              p += Yn(ce) * a[z + 1], y += Xn(ce) * a[z + 1];
            } else
              u[W] += q[W] * a[z + 1];
      });
      for (var D = 0; D < u.length; D++)
        if (t.charAt(D) === "h") {
          for (var E = Fi(y / v[D], p / v[D]) / Tr * 180; E < 0; )
            E += 360;
          for (; E >= 360; )
            E -= 360;
          u[D] = E;
        } else
          u[D] = u[D] / v[D];
      return C /= l, new Pr(u, t).alpha(C > 0.99999 ? 1 : C, !0);
    }, Bi = function(e, t) {
      for (var a = e.length, l = [0, 0, 0, 0], f = 0; f < e.length; f++) {
        var d = e[f], u = t[f] / a, v = d._rgb;
        l[0] += Sr(v[0], 2) * u, l[1] += Sr(v[1], 2) * u, l[2] += Sr(v[2], 2) * u, l[3] += v[3] * u;
      }
      return l[0] = Ir(l[0]), l[1] = Ir(l[1]), l[2] = Ir(l[2]), l[3] > 0.9999999 && (l[3] = 1), new Pr(Ri(l));
    }, je = K, at = m.type, zi = Math.pow, Or = function(e) {
      var t = "rgb", a = je("#ccc"), l = 0, f = [0, 1], d = [], u = [0, 0], v = !1, p = [], y = !1, j = 0, $ = 1, C = !1, D = {}, E = !0, R = 1, z = function(N) {
        if (N = N || ["#fff", "#000"], N && at(N) === "string" && je.brewer && je.brewer[N.toLowerCase()] && (N = je.brewer[N.toLowerCase()]), at(N) === "array") {
          N.length === 1 && (N = [N[0], N[0]]), N = N.slice(0);
          for (var O = 0; O < N.length; O++)
            N[O] = je(N[O]);
          d.length = 0;
          for (var B = 0; B < N.length; B++)
            d.push(B / (N.length - 1));
        }
        return pe(), p = N;
      }, q = function(N) {
        if (v != null) {
          for (var O = v.length - 1, B = 0; B < O && N >= v[B]; )
            B++;
          return B - 1;
        }
        return 0;
      }, W = function(N) {
        return N;
      }, ce = function(N) {
        return N;
      }, le = function(N, O) {
        var B, F;
        if (O == null && (O = !1), isNaN(N) || N === null)
          return a;
        if (O)
          F = N;
        else if (v && v.length > 2) {
          var ue = q(N);
          F = ue / (v.length - 2);
        } else
          $ !== j ? F = (N - j) / ($ - j) : F = 1;
        F = ce(F), O || (F = W(F)), R !== 1 && (F = zi(F, R)), F = u[0] + F * (1 - u[0] - u[1]), F = Math.min(1, Math.max(0, F));
        var Q = Math.floor(F * 1e4);
        if (E && D[Q])
          B = D[Q];
        else {
          if (at(p) === "array")
            for (var G = 0; G < d.length; G++) {
              var X = d[G];
              if (F <= X) {
                B = p[G];
                break;
              }
              if (F >= X && G === d.length - 1) {
                B = p[G];
                break;
              }
              if (F > X && F < d[G + 1]) {
                F = (F - X) / (d[G + 1] - X), B = je.interpolate(p[G], p[G + 1], F, t);
                break;
              }
            }
          else
            at(p) === "function" && (B = p(F));
          E && (D[Q] = B);
        }
        return B;
      }, pe = function() {
        return D = {};
      };
      z(e);
      var U = function(N) {
        var O = je(le(N));
        return y && O[y] ? O[y]() : O;
      };
      return U.classes = function(N) {
        if (N != null) {
          if (at(N) === "array")
            v = N, f = [N[0], N[N.length - 1]];
          else {
            var O = je.analyze(f);
            N === 0 ? v = [O.min, O.max] : v = je.limits(O, "e", N);
          }
          return U;
        }
        return v;
      }, U.domain = function(N) {
        if (!arguments.length)
          return f;
        j = N[0], $ = N[N.length - 1], d = [];
        var O = p.length;
        if (N.length === O && j !== $)
          for (var B = 0, F = Array.from(N); B < F.length; B += 1) {
            var ue = F[B];
            d.push((ue - j) / ($ - j));
          }
        else {
          for (var Q = 0; Q < O; Q++)
            d.push(Q / (O - 1));
          if (N.length > 2) {
            var G = N.map(function(H, V) {
              return V / (N.length - 1);
            }), X = N.map(function(H) {
              return (H - j) / ($ - j);
            });
            X.every(function(H, V) {
              return G[V] === H;
            }) || (ce = function(H) {
              if (H <= 0 || H >= 1)
                return H;
              for (var V = 0; H >= X[V + 1]; )
                V++;
              var Ce = (H - X[V]) / (X[V + 1] - X[V]), Me = G[V] + Ce * (G[V + 1] - G[V]);
              return Me;
            });
          }
        }
        return f = [j, $], U;
      }, U.mode = function(N) {
        return arguments.length ? (t = N, pe(), U) : t;
      }, U.range = function(N, O) {
        return z(N), U;
      }, U.out = function(N) {
        return y = N, U;
      }, U.spread = function(N) {
        return arguments.length ? (l = N, U) : l;
      }, U.correctLightness = function(N) {
        return N == null && (N = !0), C = N, pe(), C ? W = function(O) {
          for (var B = le(0, !0).lab()[0], F = le(1, !0).lab()[0], ue = B > F, Q = le(O, !0).lab()[0], G = B + (F - B) * O, X = Q - G, H = 0, V = 1, Ce = 20; Math.abs(X) > 0.01 && Ce-- > 0; )
            (function() {
              return ue && (X *= -1), X < 0 ? (H = O, O += (V - O) * 0.5) : (V = O, O += (H - O) * 0.5), Q = le(O, !0).lab()[0], X = Q - G;
            })();
          return O;
        } : W = function(O) {
          return O;
        }, U;
      }, U.padding = function(N) {
        return N != null ? (at(N) === "number" && (N = [N, N]), u = N, U) : u;
      }, U.colors = function(N, O) {
        arguments.length < 2 && (O = "hex");
        var B = [];
        if (arguments.length === 0)
          B = p.slice(0);
        else if (N === 1)
          B = [U(0.5)];
        else if (N > 1) {
          var F = f[0], ue = f[1] - F;
          B = Ui(0, N, !1).map(function(V) {
            return U(F + V / (N - 1) * ue);
          });
        } else {
          e = [];
          var Q = [];
          if (v && v.length > 2)
            for (var G = 1, X = v.length, H = 1 <= X; H ? G < X : G > X; H ? G++ : G--)
              Q.push((v[G - 1] + v[G]) * 0.5);
          else
            Q = f;
          B = Q.map(function(V) {
            return U(V);
          });
        }
        return je[O] && (B = B.map(function(V) {
          return V[O]();
        })), B;
      }, U.cache = function(N) {
        return N != null ? (E = N, U) : E;
      }, U.gamma = function(N) {
        return N != null ? (R = N, U) : R;
      }, U.nodata = function(N) {
        return N != null ? (a = je(N), U) : a;
      }, U;
    };
    function Ui(e, t, a) {
      for (var l = [], f = e < t, d = a ? f ? t + 1 : t - 1 : t, u = e; f ? u < d : u > d; f ? u++ : u--)
        l.push(u);
      return l;
    }
    var bt = M, qi = Or, Gi = function(e) {
      for (var t = [1, 1], a = 1; a < e; a++) {
        for (var l = [1], f = 1; f <= t.length; f++)
          l[f] = (t[f] || 0) + t[f - 1];
        t = l;
      }
      return t;
    }, Wi = function(e) {
      var t, a, l, f, d, u, v;
      if (e = e.map(function(C) {
        return new bt(C);
      }), e.length === 2)
        t = e.map(function(C) {
          return C.lab();
        }), d = t[0], u = t[1], f = function(C) {
          var D = [0, 1, 2].map(function(E) {
            return d[E] + C * (u[E] - d[E]);
          });
          return new bt(D, "lab");
        };
      else if (e.length === 3)
        a = e.map(function(C) {
          return C.lab();
        }), d = a[0], u = a[1], v = a[2], f = function(C) {
          var D = [0, 1, 2].map(function(E) {
            return (1 - C) * (1 - C) * d[E] + 2 * (1 - C) * C * u[E] + C * C * v[E];
          });
          return new bt(D, "lab");
        };
      else if (e.length === 4) {
        var p;
        l = e.map(function(C) {
          return C.lab();
        }), d = l[0], u = l[1], v = l[2], p = l[3], f = function(C) {
          var D = [0, 1, 2].map(function(E) {
            return (1 - C) * (1 - C) * (1 - C) * d[E] + 3 * (1 - C) * (1 - C) * C * u[E] + 3 * (1 - C) * C * C * v[E] + C * C * C * p[E];
          });
          return new bt(D, "lab");
        };
      } else if (e.length >= 5) {
        var y, j, $;
        y = e.map(function(C) {
          return C.lab();
        }), $ = e.length - 1, j = Gi($), f = function(C) {
          var D = 1 - C, E = [0, 1, 2].map(function(R) {
            return y.reduce(function(z, q, W) {
              return z + j[W] * Math.pow(D, $ - W) * Math.pow(C, W) * q[R];
            }, 0);
          });
          return new bt(E, "lab");
        };
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return f;
    }, Yi = function(e) {
      var t = Wi(e);
      return t.scale = function() {
        return qi(t);
      }, t;
    }, Mr = K, ke = function(e, t, a) {
      if (!ke[a])
        throw new Error("unknown blend mode " + a);
      return ke[a](e, t);
    }, Te = function(e) {
      return function(t, a) {
        var l = Mr(a).rgb(), f = Mr(t).rgb();
        return Mr.rgb(e(l, f));
      };
    }, Oe = function(e) {
      return function(t, a) {
        var l = [];
        return l[0] = e(t[0], a[0]), l[1] = e(t[1], a[1]), l[2] = e(t[2], a[2]), l;
      };
    }, Xi = function(e) {
      return e;
    }, Hi = function(e, t) {
      return e * t / 255;
    }, Vi = function(e, t) {
      return e > t ? t : e;
    }, Ji = function(e, t) {
      return e > t ? e : t;
    }, Zi = function(e, t) {
      return 255 * (1 - (1 - e / 255) * (1 - t / 255));
    }, Qi = function(e, t) {
      return t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
    }, Ki = function(e, t) {
      return 255 * (1 - (1 - t / 255) / (e / 255));
    }, el = function(e, t) {
      return e === 255 ? 255 : (e = 255 * (t / 255) / (1 - e / 255), e > 255 ? 255 : e);
    };
    ke.normal = Te(Oe(Xi)), ke.multiply = Te(Oe(Hi)), ke.screen = Te(Oe(Zi)), ke.overlay = Te(Oe(Qi)), ke.darken = Te(Oe(Vi)), ke.lighten = Te(Oe(Ji)), ke.dodge = Te(Oe(el)), ke.burn = Te(Oe(Ki));
    for (var tl = ke, Rr = m.type, rl = m.clip_rgb, nl = m.TWOPI, al = Math.pow, sl = Math.sin, ol = Math.cos, Hn = K, il = function(e, t, a, l, f) {
      e === void 0 && (e = 300), t === void 0 && (t = -1.5), a === void 0 && (a = 1), l === void 0 && (l = 1), f === void 0 && (f = [0, 1]);
      var d = 0, u;
      Rr(f) === "array" ? u = f[1] - f[0] : (u = 0, f = [f, f]);
      var v = function(p) {
        var y = nl * ((e + 120) / 360 + t * p), j = al(f[0] + u * p, l), $ = d !== 0 ? a[0] + p * d : a, C = $ * j * (1 - j) / 2, D = ol(y), E = sl(y), R = j + C * (-0.14861 * D + 1.78277 * E), z = j + C * (-0.29227 * D - 0.90649 * E), q = j + C * (1.97294 * D);
        return Hn(rl([R * 255, z * 255, q * 255, 1]));
      };
      return v.start = function(p) {
        return p == null ? e : (e = p, v);
      }, v.rotations = function(p) {
        return p == null ? t : (t = p, v);
      }, v.gamma = function(p) {
        return p == null ? l : (l = p, v);
      }, v.hue = function(p) {
        return p == null ? a : (a = p, Rr(a) === "array" ? (d = a[1] - a[0], d === 0 && (a = a[1])) : d = 0, v);
      }, v.lightness = function(p) {
        return p == null ? f : (Rr(p) === "array" ? (f = p, u = p[1] - p[0]) : (f = [p, p], u = 0), v);
      }, v.scale = function() {
        return Hn.scale(v);
      }, v.hue(a), v;
    }, ll = M, cl = "0123456789abcdef", ul = Math.floor, fl = Math.random, dl = function() {
      for (var e = "#", t = 0; t < 6; t++)
        e += cl.charAt(ul(fl() * 16));
      return new ll(e, "hex");
    }, Fr = w, Vn = Math.log, hl = Math.pow, vl = Math.floor, pl = Math.abs, Jn = function(e, t) {
      t === void 0 && (t = null);
      var a = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      return Fr(e) === "object" && (e = Object.values(e)), e.forEach(function(l) {
        t && Fr(l) === "object" && (l = l[t]), l != null && !isNaN(l) && (a.values.push(l), a.sum += l, l < a.min && (a.min = l), l > a.max && (a.max = l), a.count += 1);
      }), a.domain = [a.min, a.max], a.limits = function(l, f) {
        return Zn(a, l, f);
      }, a;
    }, Zn = function(e, t, a) {
      t === void 0 && (t = "equal"), a === void 0 && (a = 7), Fr(e) == "array" && (e = Jn(e));
      var l = e.min, f = e.max, d = e.values.sort(function(Br, zr) {
        return Br - zr;
      });
      if (a === 1)
        return [l, f];
      var u = [];
      if (t.substr(0, 1) === "c" && (u.push(l), u.push(f)), t.substr(0, 1) === "e") {
        u.push(l);
        for (var v = 1; v < a; v++)
          u.push(l + v / a * (f - l));
        u.push(f);
      } else if (t.substr(0, 1) === "l") {
        if (l <= 0)
          throw new Error("Logarithmic scales are only possible for values > 0");
        var p = Math.LOG10E * Vn(l), y = Math.LOG10E * Vn(f);
        u.push(l);
        for (var j = 1; j < a; j++)
          u.push(hl(10, p + j / a * (y - p)));
        u.push(f);
      } else if (t.substr(0, 1) === "q") {
        u.push(l);
        for (var $ = 1; $ < a; $++) {
          var C = (d.length - 1) * $ / a, D = vl(C);
          if (D === C)
            u.push(d[D]);
          else {
            var E = C - D;
            u.push(d[D] * (1 - E) + d[D + 1] * E);
          }
        }
        u.push(f);
      } else if (t.substr(0, 1) === "k") {
        var R, z = d.length, q = new Array(z), W = new Array(a), ce = !0, le = 0, pe = null;
        pe = [], pe.push(l);
        for (var U = 1; U < a; U++)
          pe.push(l + U / a * (f - l));
        for (pe.push(f); ce; ) {
          for (var N = 0; N < a; N++)
            W[N] = 0;
          for (var O = 0; O < z; O++)
            for (var B = d[O], F = Number.MAX_VALUE, ue = void 0, Q = 0; Q < a; Q++) {
              var G = pl(pe[Q] - B);
              G < F && (F = G, ue = Q), W[ue]++, q[O] = ue;
            }
          for (var X = new Array(a), H = 0; H < a; H++)
            X[H] = null;
          for (var V = 0; V < z; V++)
            R = q[V], X[R] === null ? X[R] = d[V] : X[R] += d[V];
          for (var Ce = 0; Ce < a; Ce++)
            X[Ce] *= 1 / W[Ce];
          ce = !1;
          for (var Me = 0; Me < a; Me++)
            if (X[Me] !== pe[Me]) {
              ce = !0;
              break;
            }
          pe = X, le++, le > 200 && (ce = !1);
        }
        for (var Re = {}, st = 0; st < a; st++)
          Re[st] = [];
        for (var ot = 0; ot < z; ot++)
          R = q[ot], Re[R].push(d[ot]);
        for (var De = [], Ge = 0; Ge < a; Ge++)
          De.push(Re[Ge][0]), De.push(Re[Ge][Re[Ge].length - 1]);
        De = De.sort(function(Br, zr) {
          return Br - zr;
        }), u.push(De[0]);
        for (var yt = 1; yt < De.length; yt += 2) {
          var We = De[yt];
          !isNaN(We) && u.indexOf(We) === -1 && u.push(We);
        }
      }
      return u;
    }, Qn = { analyze: Jn, limits: Zn }, Kn = M, gl = function(e, t) {
      e = new Kn(e), t = new Kn(t);
      var a = e.luminance(), l = t.luminance();
      return a > l ? (a + 0.05) / (l + 0.05) : (l + 0.05) / (a + 0.05);
    }, ea = M, Ae = Math.sqrt, ne = Math.pow, ml = Math.min, bl = Math.max, ta = Math.atan2, ra = Math.abs, Vt = Math.cos, na = Math.sin, yl = Math.exp, aa = Math.PI, xl = function(e, t, a, l, f) {
      a === void 0 && (a = 1), l === void 0 && (l = 1), f === void 0 && (f = 1);
      var d = function(We) {
        return 360 * We / (2 * aa);
      }, u = function(We) {
        return 2 * aa * We / 360;
      };
      e = new ea(e), t = new ea(t);
      var v = Array.from(e.lab()), p = v[0], y = v[1], j = v[2], $ = Array.from(t.lab()), C = $[0], D = $[1], E = $[2], R = (p + C) / 2, z = Ae(ne(y, 2) + ne(j, 2)), q = Ae(ne(D, 2) + ne(E, 2)), W = (z + q) / 2, ce = 0.5 * (1 - Ae(ne(W, 7) / (ne(W, 7) + ne(25, 7)))), le = y * (1 + ce), pe = D * (1 + ce), U = Ae(ne(le, 2) + ne(j, 2)), N = Ae(ne(pe, 2) + ne(E, 2)), O = (U + N) / 2, B = d(ta(j, le)), F = d(ta(E, pe)), ue = B >= 0 ? B : B + 360, Q = F >= 0 ? F : F + 360, G = ra(ue - Q) > 180 ? (ue + Q + 360) / 2 : (ue + Q) / 2, X = 1 - 0.17 * Vt(u(G - 30)) + 0.24 * Vt(u(2 * G)) + 0.32 * Vt(u(3 * G + 6)) - 0.2 * Vt(u(4 * G - 63)), H = Q - ue;
      H = ra(H) <= 180 ? H : Q <= ue ? H + 360 : H - 360, H = 2 * Ae(U * N) * na(u(H) / 2);
      var V = C - p, Ce = N - U, Me = 1 + 0.015 * ne(R - 50, 2) / Ae(20 + ne(R - 50, 2)), Re = 1 + 0.045 * O, st = 1 + 0.015 * O * X, ot = 30 * yl(-ne((G - 275) / 25, 2)), De = 2 * Ae(ne(O, 7) / (ne(O, 7) + ne(25, 7))), Ge = -De * na(2 * u(ot)), yt = Ae(ne(V / (a * Me), 2) + ne(Ce / (l * Re), 2) + ne(H / (f * st), 2) + Ge * (Ce / (l * Re)) * (H / (f * st)));
      return bl(0, ml(100, yt));
    }, sa = M, wl = function(e, t, a) {
      a === void 0 && (a = "lab"), e = new sa(e), t = new sa(t);
      var l = e.get(a), f = t.get(a), d = 0;
      for (var u in l) {
        var v = (l[u] || 0) - (f[u] || 0);
        d += v * v;
      }
      return Math.sqrt(d);
    }, jl = M, kl = function() {
      for (var e = [], t = arguments.length; t--; )
        e[t] = arguments[t];
      try {
        return new (Function.prototype.bind.apply(jl, [null].concat(e)))(), !0;
      } catch {
        return !1;
      }
    }, oa = K, ia = Or, Cl = {
      cool: function() {
        return ia([oa.hsl(180, 1, 0.9), oa.hsl(250, 0.7, 0.4)]);
      },
      hot: function() {
        return ia(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      }
    }, Jt = {
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
    }, Lr = 0, la = Object.keys(Jt); Lr < la.length; Lr += 1) {
      var ca = la[Lr];
      Jt[ca.toLowerCase()] = Jt[ca];
    }
    var Nl = Jt, ie = K;
    ie.average = Li, ie.bezier = Yi, ie.blend = tl, ie.cubehelix = il, ie.mix = ie.interpolate = Ln, ie.random = dl, ie.scale = Or, ie.analyze = Qn.analyze, ie.contrast = gl, ie.deltaE = xl, ie.distance = wl, ie.limits = Qn.limits, ie.valid = kl, ie.scales = Cl, ie.colors = wn, ie.brewer = Nl;
    var _l = ie;
    return _l;
  });
})(Ma);
var ou = Ma.exports;
const Ra = /* @__PURE__ */ Pl(ou);
function wt() {
  return wt = Object.assign || function(n) {
    for (var o = 1; o < arguments.length; o++) {
      var r = arguments[o];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    }
    return n;
  }, wt.apply(this, arguments);
}
var iu = function(o, r) {
  r === void 0 && (r = !0), xe(function() {
    if (r) {
      var i = function(h) {
        h.key === "Escape" && o(h);
      };
      return document.addEventListener("keyup", i), function() {
        r && document.removeEventListener("keyup", i);
      };
    }
  }, [o, r]);
}, lu = function(o, r) {
  r === void 0 && (r = !0), xe(function() {
    if (r) {
      var i = function() {
        o();
      };
      return window.addEventListener("resize", i), function() {
        r && window.removeEventListener("resize", i);
      };
    }
  }, [o, r]);
}, cu = function(o, r, i) {
  i === void 0 && (i = !0), xe(function() {
    if (i) {
      var c = function(g) {
        var x = Array.isArray(o) ? o : [o], b = !1;
        x.forEach(function(w) {
          if (!w.current || w.current.contains(g.target)) {
            b = !0;
            return;
          }
        }), g.stopPropagation(), b || r(g);
      };
      return document.addEventListener("mousedown", c), document.addEventListener("touchstart", c), function() {
        i && (document.removeEventListener("mousedown", c), document.removeEventListener("touchstart", c));
      };
    }
  }, [o, r, i]);
}, uu = function(o, r) {
  r === void 0 && (r = !0), xe(function() {
    if (r) {
      var i = function(h) {
        if (h.keyCode === 9) {
          var g, x = o == null || (g = o.current) === null || g === void 0 ? void 0 : g.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'), b = Array.prototype.slice.call(x);
          if (b.length === 1) {
            h.preventDefault();
            return;
          }
          var w = b[0], k = b[b.length - 1];
          h.shiftKey && document.activeElement === w ? (h.preventDefault(), k.focus()) : document.activeElement === k && (h.preventDefault(), w.focus());
        }
      };
      return document.addEventListener("keydown", i), function() {
        r && document.removeEventListener("keydown", i);
      };
    }
  }, [o, r]);
}, fu = typeof window < "u" ? Al : xe, xt = {
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
}, du = ["top left", "top center", "top right", "right top", "right center", "right bottom", "bottom left", "bottom center", "bottom right", "left top", "left center", "left bottom"], hu = function(o, r, i, c, h) {
  var g = h.offsetX, x = h.offsetY, b = c ? 8 : 0, w = i.split(" "), k = o.top + o.height / 2, _ = o.left + o.width / 2, I = r.height, A = r.width, S = k - I / 2, m = _ - A / 2, T = "", Y = "0%", Z = "0%";
  switch (w[0]) {
    case "top":
      S -= I / 2 + o.height / 2 + b, T = "rotate(180deg)  translateX(50%)", Y = "100%", Z = "50%";
      break;
    case "bottom":
      S += I / 2 + o.height / 2 + b, T = "rotate(0deg) translateY(-100%) translateX(-50%)", Z = "50%";
      break;
    case "left":
      m -= A / 2 + o.width / 2 + b, T = " rotate(90deg)  translateY(50%) translateX(-25%)", Z = "100%", Y = "50%";
      break;
    case "right":
      m += A / 2 + o.width / 2 + b, T = "rotate(-90deg)  translateY(-150%) translateX(25%)", Y = "50%";
      break;
  }
  switch (w[1]) {
    case "top":
      S = o.top, Y = o.height / 2 + "px";
      break;
    case "bottom":
      S = o.top - I + o.height, Y = I - o.height / 2 + "px";
      break;
    case "left":
      m = o.left, Z = o.width / 2 + "px";
      break;
    case "right":
      m = o.left - A + o.width, Z = A - o.width / 2 + "px";
      break;
  }
  return S = w[0] === "top" ? S - x : S + x, m = w[0] === "left" ? m - g : m + g, {
    top: S,
    left: m,
    transform: T,
    arrowLeft: Z,
    arrowTop: Y
  };
}, vu = function(o) {
  var r = {
    top: 0,
    left: 0,
    /* eslint-disable-next-line no-undef */
    width: window.innerWidth,
    /* eslint-disable-next-line no-undef */
    height: window.innerHeight
  };
  if (typeof o == "string") {
    var i = document.querySelector(o);
    i !== null && (r = i.getBoundingClientRect());
  }
  return r;
}, pu = function(o, r, i, c, h, g) {
  var x = h.offsetX, b = h.offsetY, w = {
    arrowLeft: "0%",
    arrowTop: "0%",
    left: 0,
    top: 0,
    transform: "rotate(135deg)"
  }, k = 0, _ = vu(g), I = Array.isArray(i) ? i : [i];
  for ((g || Array.isArray(i)) && (I = [].concat(I, du)); k < I.length; ) {
    w = hu(o, r, I[k], c, {
      offsetX: x,
      offsetY: b
    });
    var A = {
      top: w.top,
      left: w.left,
      width: r.width,
      height: r.height
    };
    if (A.top <= _.top || A.left <= _.left || A.top + A.height >= _.top + _.height || A.left + A.width >= _.left + _.width)
      k++;
    else
      break;
  }
  return w;
}, gu = 0, mu = function() {
  var o = document.getElementById("popup-root");
  return o === null && (o = document.createElement("div"), o.setAttribute("id", "popup-root"), document.body.appendChild(o)), o;
}, bu = /* @__PURE__ */ $l(function(n, o) {
  var r = n.trigger, i = r === void 0 ? null : r, c = n.onOpen, h = c === void 0 ? function() {
  } : c, g = n.onClose, x = g === void 0 ? function() {
  } : g, b = n.defaultOpen, w = b === void 0 ? !1 : b, k = n.open, _ = k === void 0 ? void 0 : k, I = n.disabled, A = I === void 0 ? !1 : I, S = n.nested, m = S === void 0 ? !1 : S, T = n.closeOnDocumentClick, Y = T === void 0 ? !0 : T, Z = n.repositionOnResize, oe = Z === void 0 ? !0 : Z, ee = n.closeOnEscape, ge = ee === void 0 ? !0 : ee, M = n.on, _e = M === void 0 ? ["click"] : M, K = n.contentStyle, nr = K === void 0 ? {} : K, ct = n.arrowStyle, ut = ct === void 0 ? {} : ct, Ct = n.overlayStyle, ar = Ct === void 0 ? {} : Ct, Nt = n.className, Pe = Nt === void 0 ? "" : Nt, _t = n.position, $t = _t === void 0 ? "bottom center" : _t, ft = n.modal, Et = ft === void 0 ? !1 : ft, At = n.lockScroll, Dt = At === void 0 ? !1 : At, Pt = n.arrow, dt = Pt === void 0 ? !0 : Pt, Xe = n.offsetX, sr = Xe === void 0 ? 0 : Xe, St = n.offsetY, or = St === void 0 ? 0 : St, It = n.mouseEnterDelay, Tt = It === void 0 ? 100 : It, Ot = n.mouseLeaveDelay, ir = Ot === void 0 ? 100 : Ot, Mt = n.keepTooltipInside, lr = Mt === void 0 ? !1 : Mt, Se = n.children, Rt = J(_ || w), ye = Rt[0], Ft = Rt[1], me = Ye(null), ve = Ye(null), $e = Ye(null), ht = Ye(null), vt = Ye("popup-" + ++gu), de = Et ? !0 : !i, Ie = Ye(0);
  fu(function() {
    return ye ? (ht.current = document.activeElement, pt(), Bt(), cr()) : ur(), function() {
      clearTimeout(Ie.current);
    };
  }, [ye]), xe(function() {
    typeof _ == "boolean" && (_ ? ze() : we());
  }, [_, A]);
  var ze = function(L) {
    ye || A || (Ft(!0), setTimeout(function() {
      return h(L);
    }, 0));
  }, we = function(L) {
    var he;
    !ye || A || (Ft(!1), de && ((he = ht.current) === null || he === void 0 || he.focus()), setTimeout(function() {
      return x(L);
    }, 0));
  }, He = function(L) {
    L == null || L.stopPropagation(), ye ? we(L) : ze(L);
  }, Ve = function(L) {
    clearTimeout(Ie.current), Ie.current = setTimeout(function() {
      return ze(L);
    }, Tt);
  }, Lt = function(L) {
    L == null || L.preventDefault(), He();
  }, Je = function(L) {
    clearTimeout(Ie.current), Ie.current = setTimeout(function() {
      return we(L);
    }, ir);
  }, cr = function() {
    de && Dt && (document.getElementsByTagName("body")[0].style.overflow = "hidden");
  }, ur = function() {
    de && Dt && (document.getElementsByTagName("body")[0].style.overflow = "auto");
  }, Bt = function() {
    var L, he = ve == null || (L = ve.current) === null || L === void 0 ? void 0 : L.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'), re = Array.prototype.slice.call(he)[0];
    re == null || re.focus();
  };
  El(o, function() {
    return {
      open: function() {
        ze();
      },
      close: function() {
        we();
      },
      toggle: function() {
        He();
      }
    };
  });
  var pt = function() {
    if (!(de || !ye) && !(!(me != null && me.current) || !(me != null && me.current) || !(ve != null && ve.current))) {
      var L = me.current.getBoundingClientRect(), he = ve.current.getBoundingClientRect(), re = pu(L, he, $t, dt, {
        offsetX: sr,
        offsetY: or
      }, lr);
      if (ve.current.style.top = re.top + window.scrollY + "px", ve.current.style.left = re.left + window.scrollX + "px", dt && $e.current) {
        var Ee, Ue;
        $e.current.style.transform = re.transform, $e.current.style.setProperty("-ms-transform", re.transform), $e.current.style.setProperty("-webkit-transform", re.transform), $e.current.style.top = ((Ee = ut.top) === null || Ee === void 0 ? void 0 : Ee.toString()) || re.arrowTop, $e.current.style.left = ((Ue = ut.left) === null || Ue === void 0 ? void 0 : Ue.toString()) || re.arrowLeft;
      }
    }
  };
  iu(we, ge), uu(ve, ye && de), lu(pt, oe), cu(i ? [ve, me] : [ve], we, Y && !m);
  var fr = function() {
    for (var L = {
      key: "T",
      ref: me,
      "aria-describedby": vt.current
    }, he = Array.isArray(_e) ? _e : [_e], re = 0, Ee = he.length; re < Ee; re++)
      switch (he[re]) {
        case "click":
          L.onClick = He;
          break;
        case "right-click":
          L.onContextMenu = Lt;
          break;
        case "hover":
          L.onMouseEnter = Ve, L.onMouseLeave = Je;
          break;
        case "focus":
          L.onFocus = Ve, L.onBlur = Je;
          break;
      }
    if (typeof i == "function") {
      var Ue = i(ye);
      return !!i && Ne.cloneElement(Ue, L);
    }
    return !!i && Ne.cloneElement(i, L);
  }, dr = function() {
    var L = de ? xt.popupContent.modal : xt.popupContent.tooltip, he = {
      className: "popup-content " + (Pe !== "" ? Pe.split(" ").map(function(re) {
        return re + "-content";
      }).join(" ") : ""),
      style: wt({}, L, nr, {
        pointerEvents: "auto"
      }),
      ref: ve,
      onClick: function(Ee) {
        Ee.stopPropagation();
      }
    };
    return !Et && _e.indexOf("hover") >= 0 && (he.onMouseEnter = Ve, he.onMouseLeave = Je), he;
  }, gt = function() {
    return Ne.createElement("div", Object.assign({}, dr(), {
      key: "C",
      role: de ? "dialog" : "tooltip",
      id: vt.current
    }), dt && !de && Ne.createElement("div", {
      ref: $e,
      style: xt.popupArrow
    }, Ne.createElement("svg", {
      "data-testid": "arrow",
      className: "popup-arrow " + (Pe !== "" ? Pe.split(" ").map(function(L) {
        return L + "-arrow";
      }).join(" ") : ""),
      viewBox: "0 0 32 16",
      style: wt({
        position: "absolute"
      }, ut)
    }, Ne.createElement("path", {
      d: "M16 0l16 16H0z",
      fill: "currentcolor"
    }))), Se && typeof Se == "function" ? Se(we, ye) : Se);
  }, zt = !(_e.indexOf("hover") >= 0), hr = de ? xt.overlay.modal : xt.overlay.tooltip, vr = [zt && Ne.createElement("div", {
    key: "O",
    "data-testid": "overlay",
    "data-popup": de ? "modal" : "tooltip",
    className: "popup-overlay " + (Pe !== "" ? Pe.split(" ").map(function(se) {
      return se + "-overlay";
    }).join(" ") : ""),
    style: wt({}, hr, ar, {
      pointerEvents: Y && m || de ? "auto" : "none"
    }),
    onClick: Y && m ? we : void 0,
    tabIndex: -1
  }, de && gt()), !de && gt()];
  return Ne.createElement(Ne.Fragment, null, fr(), ye && wa.createPortal(vr, mu()));
});
const yu = () => {
  const n = "🍎🍏🍊🍋🍒🍇🍉🍓🍑🍈🍌🍐🍍🫐🥝🥥🥛🥑🍨🍠", o = [
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
  ], r = [...n], [i, c] = J([]), [h, g] = J([]), x = (k, _) => {
    i.length < 3 && (c((I) => [k, ...I]), g((I) => [...I, o[_]]));
  }, b = () => {
    if (h.length > 2)
      return Ra.average(h).css();
  }, w = () => {
    c([]), g([]);
  };
  return s.jsx(s.Fragment, { children: s.jsxs("div", { className: "d-flex vh-100 justify-content-center align-items-center", children: [s.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [s.jsx("img", { src: "/Advent/blender.jpeg", alt: "blender", style: { height: "50vh", padding: 30 } }), s.jsx("div", { className: "d-flex flex-column", style: {
    marginTop: "-150px",
    position: "fixed",
    fontSize: 40
  }, children: i.map((k, _) => s.jsx("span", { children: k }, _)) }), s.jsxs("div", { className: "d-flex justify-content-center align-items-center", children: [s.jsx(bu, { trigger: s.jsx("button", { style: { width: 50, marginRight: 20 }, children: "Blend" }), className: "popup-content", modal: !0, children: s.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [s.jsx("span", { children: "Enjoy your smoothie <3" }), s.jsx("div", { className: "filter d-flex justify-content-center align-items-center", style: {
    backgroundColor: b()
  } }), s.jsx("img", { src: "/Advent/smoothie.png", alt: "smoothie", id: "smoothie" })] }) }), s.jsx("button", { onClick: w, children: "Clear" })] })] }), s.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [s.jsx("span", { children: "Choose 3 Ingredients." }), s.jsx("div", { className: "d-flex flex-wrap justify-content-center align-items-center p-3", style: { width: "35vw" }, children: r.map((k, _) => s.jsx(s.Fragment, { children: s.jsx("span", { onClick: () => x(k, _), style: { cursor: "pointer", fontSize: 50 }, children: k }, _) })) })] })] }) });
}, xu = () => {
  const [n, o] = J([]), r = (i) => {
    o((c) => [...c, i]);
  };
  return s.jsxs("div", { className: "d-flex vh-100 justify-content-center align-items-center", children: [s.jsxs("div", { className: "quilt d-flex flex-wrap justify-content-start align-items-center", children: [s.jsx("div", { className: "quilt-border quilt" }), n.map((i, c) => s.jsx("div", { children: s.jsx("img", { className: "patch", src: `/Advent/quilt/patch${i}.png` }) }, c))] }), s.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [s.jsx("span", { className: "mb-4", style: { fontSize: 20 }, children: "Make a quilt!" }), s.jsx("span", { children: "Patches" }), s.jsx("div", { className: "d-flex flex-wrap patch-container justify-content-center align-items-center", children: Array.from({ length: 11 }, (i, c) => 1 + c).map((i, c) => s.jsx("img", { className: "patch m-2 p-2", src: `/Advent/quilt/patch${i}.png`, onClick: () => r(i) }, c)) })] })] });
}, wu = () => {
  const [n, o] = J(/* @__PURE__ */ new Date());
  xe(() => {
    const x = setInterval(() => {
      o(/* @__PURE__ */ new Date());
    }, 1e3);
    return () => clearInterval(x);
  }, []);
  const r = () => n.getHours(), i = () => n.getMinutes(), c = () => n.getSeconds(), h = (x, b) => x % 12 * 30 + b * 0.5, g = (x) => x * 6;
  return s.jsxs("div", { className: "d-flex clock-container vh-100 justify-content-around align-items-center", children: [s.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [s.jsx("img", { className: "clock", src: "/Advent/clocks/clock1.png", alt: "first clock" }), s.jsx("div", { className: "hour-hand", style: {
    transform: `rotate(${h(r() - 2, i())}deg)`,
    transformOrigin: "50% 70%"
  } }), s.jsx("div", { className: "minute-hand", style: {
    transform: `rotate(${g(i())}deg)`,
    transformOrigin: "50% 75%"
  } }), s.jsx("div", { className: "second-hand", style: {
    transform: `rotate(${g(c())}deg)`,
    transformOrigin: "50% 75%"
  } }), s.jsx("div", { className: "clock-text", children: s.jsx("span", { children: "Cupertino, California" }) })] }), s.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [s.jsx("img", { className: "clock", src: "/Advent/clocks/clock2.png", alt: "second clock" }), s.jsx("div", { className: "hour-hand", style: {
    transform: `rotate(${h(r(), i())}deg)`,
    transformOrigin: "50% 70%"
  } }), s.jsx("div", { className: "minute-hand", style: {
    transform: `rotate(${g(i())}deg)`,
    transformOrigin: "50% 75%"
  } }), s.jsx("div", { className: "second-hand", style: {
    transform: `rotate(${g(c())}deg)`,
    transformOrigin: "50% 75%"
  } }), s.jsx("div", { className: "clock-text", children: s.jsx("span", { children: "Dallas, Texas" }) })] }), s.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center", children: [s.jsx("img", { className: "clock", src: "/Advent/clocks/clock3.png", alt: "third clock" }), s.jsx("div", { className: "hour-hand", style: {
    transform: `rotate(${h(r() + 1, i())}deg)`,
    transformOrigin: "50% 70%",
    backgroundColor: "#C31C2F",
    borderColor: "#911115"
  } }), s.jsx("div", { className: "minute-hand", style: {
    transform: `rotate(${g(i())}deg)`,
    transformOrigin: "50% 75%",
    backgroundColor: "#C31C2F",
    borderColor: "#911115"
  } }), s.jsx("div", { className: "second-hand", style: {
    transform: `rotate(${g(c())}deg)`,
    transformOrigin: "50% 75%",
    backgroundColor: "#C31C2F",
    borderColor: "#911115"
  } }), s.jsx("div", { className: "clock-text", children: s.jsx("span", { children: "New York, New York" }) })] })] });
}, ju = () => {
  const [n, o] = J(0), r = [
    "Follow your most intense obsessions mercilessly.",
    "I am a cage, in search of a bird.",
    "Anyone who keeps the ability to see beauty never grows old.",
    "A book must be the axe for the frozen sea within us.",
    "I am free and that is why I am lost.",
    "I cannot make you understand. I cannot make anyone understand what is happening inside me. I cannot even explain it to myself.",
    "All language is but a poor translation.",
    "I have the true feeling of myself only when I am unbearably unhappy.",
    "By believing passionately in something that still does not exist, we create it. The nonexistent is whatever we have not sufficiently desired."
  ], i = () => {
    o(n + 1);
  }, c = () => {
    o(0);
  };
  return s.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [s.jsx("span", { className: n === 0 ? "m-4" : "d-none", children: "Click me to crack open." }), s.jsx("img", { className: n === 0 ? "" : "d-none", src: "/Advent/fortune.jpeg", alt: "fortune cookie", onClick: i }), s.jsx("span", { className: n === 1 ? "m-4" : "d-none", children: "Click me to read your fortune." }), s.jsx("img", { className: n === 1 ? "m-4" : "d-none", src: "/Advent/fortune_2.png", alt: "open fortune", onClick: i }), s.jsx("span", { className: n === 2 ? "m-4" : "d-none", style: { width: 400, color: "#244684", textAlign: "center" }, onClick: i, children: r[Math.floor(Math.random() * r.length)] }), s.jsx("img", { className: n === 2 ? "m-4" : "d-none", style: { width: 500, position: "fixed", zIndex: -1 }, src: "/Advent/fortune_3.png", alt: "fortune message" }), s.jsxs("span", { className: n === 3 ? "m-4" : "d-none", style: { width: 400, color: "#244684", textAlign: "center" }, onClick: c, children: ["Your lucky numbers:", " ", Math.floor(Math.random() * 100) + ", " + Math.floor(Math.random() * 100) + ", " + Math.floor(Math.random() * 100)] }), s.jsx("img", { className: n === 3 ? "m-4" : "d-none", style: { width: 500, position: "fixed", zIndex: -1 }, src: "/Advent/fortune_3.png", alt: "fortune message" })] });
}, ku = () => {
  const n = Ra.scale(["#3b8dcc", "#ffdbf8"]).mode("lab"), o = [
    "𖡼 . 𖤣 𓇗 𖡼 . 𖤣 𓇗 𖥧 𖡼 . 𓇗 𖤣 𖥧 𖡼 . 𖤣 𓇗 𖡼 . 𖤣 𓇗 𖥧 𖡼 . 𓇗 𖤣 𖥧",
    "𖤣 . 𖡼 𖥧 𓇢 𓆸 𖡼 . 𖤣 𖥧 𓆸 𖡼 . 𖤣 . 𖡼 𖥧 𓇢 𓆸 𖡼 . 𖤣 𖥧 𓆸 𖡼 .",
    "𖡼 . 𖤣 𑁍 . 𖤣 ❦ 𖥧 𖡼 🍎 𓇗 𖤣 𖥧 ❦ 𖡼 🐍 𖤣 𑁍 . 𖤣 ❦ 𖥧 𖡼 . 𓇗 𖤣",
    "❀ 𖤣 𖥧 𖡼 ⊱ ✿ ⊰ 𖡼 𖥧 𖤣 𖥧 𖡼 ⊱ ❀ 𖤣 𖥧 𖡼 ⊱ ✿ ⊰ 𖡼 𖥧 𖤣 𖥧 𖡼 ⊱",
    "₊ 𖤣 𖥧 𖡼 ˚ ✧ 𑁍 .ೃ ࿔ * : 𖤣 𖥧 𖡼 ₊ 𖤣 𖥧 𖡼 ˚ ✧ 𑁍 .ೃ ࿔ * : 𖤣 𖥧 𖡼"
  ], r = (i) => {
    if (i.target.style.color === "rgb(255, 219, 248)" || i.target.style.color === "rgb(253, 218, 248)")
      for (let c = 0; c <= 1; c += 0.01)
        setTimeout(() => {
          i.target.style.color = n(c).css();
        }, c * 2e3);
  };
  return s.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [s.jsx("span", { children: "The Garden of Eden" }), s.jsx("br", {}), o.map((i, c) => s.jsx("div", { className: "d-flex", children: i.split(" ").map((h, g) => s.jsx("span", { onMouseOver: r, style: { fontSize: 50, cursor: "pointer", color: "#ffdbf8" }, children: h }, g)) }, c))] });
}, Cu = () => {
  const [n, o] = J([]), [r, i] = J(!1), c = [
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
  ], h = () => {
    if (n.length < 3) {
      let b = c[Math.floor(Math.random() * c.length)];
      for (; n.includes(b); )
        b = c[Math.floor(Math.random() * c.length)];
      o((w) => [...w, b]);
    }
  }, g = () => {
    o([]);
  }, x = () => {
    i(!0), setTimeout(() => {
      i(!1);
    }, 2e3);
  };
  return s.jsxs("div", { className: "d-flex flex-column vh-100 justify-content-center align-items-center", children: [s.jsxs("div", { className: "d-flex flex-column justify-content-center align-items-center m-4", children: [s.jsx("span", { children: "Tarot Readings" }), s.jsx("span", { children: "Tarot de Marseille" }), s.jsx("span", { children: "Jean Dodal" })] }), s.jsx("div", { children: n.map((b, w) => s.jsx("img", { className: "fade-in m-2", src: `/Advent/cards/${b}.jpeg`, alt: "" }, w)) }), s.jsx("img", { className: r ? "rotate" : "", src: "/Advent/cards/back.jpeg", alt: "card backing" }), s.jsxs("div", { className: "d-flex flex-wrap m-4", children: [s.jsx("button", { onClick: x, className: "m-2", children: "Shuffle" }), s.jsx("button", { onClick: h, className: "m-2", children: "Draw" }), s.jsx("button", { onClick: g, className: "m-2", children: "Clear" })] })] });
}, Nu = () => {
  const n = Lc(), o = Bc();
  return /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsx(Tc, { children: /* @__PURE__ */ s.jsxs(Ec, { children: [
    /* @__PURE__ */ s.jsx(te, { index: !0, element: /* @__PURE__ */ s.jsx(xa, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "/", element: /* @__PURE__ */ s.jsx(xa, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "galaxy", element: /* @__PURE__ */ s.jsx(Zc, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "phonebook", element: /* @__PURE__ */ s.jsx(ba.Tracks, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "auth/*", element: /* @__PURE__ */ s.jsx(ba.Tracks, {}) }),
    /* @__PURE__ */ s.jsx(
      te,
      {
        path: "italy",
        element: /* @__PURE__ */ s.jsx(Fc, { images: n, captions: o })
      }
    ),
    /* @__PURE__ */ s.jsx(te, { path: "advent", element: /* @__PURE__ */ s.jsx(Qc, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/1", element: /* @__PURE__ */ s.jsx(Kc, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/2", element: /* @__PURE__ */ s.jsx(eu, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/3", element: /* @__PURE__ */ s.jsx(tu, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/8", element: /* @__PURE__ */ s.jsx(ru, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/9", element: /* @__PURE__ */ s.jsx(nu, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/10", element: /* @__PURE__ */ s.jsx(au, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/11", element: /* @__PURE__ */ s.jsx(su, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/12", element: /* @__PURE__ */ s.jsx(yu, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/13", element: /* @__PURE__ */ s.jsx(xu, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/14", element: /* @__PURE__ */ s.jsx(wu, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/15", element: /* @__PURE__ */ s.jsx(ju, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/16", element: /* @__PURE__ */ s.jsx(ku, {}) }),
    /* @__PURE__ */ s.jsx(te, { path: "advent/17", element: /* @__PURE__ */ s.jsx(Cu, {}) })
  ] }) }) });
};
qr.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ s.jsx(Ne.StrictMode, { children: /* @__PURE__ */ s.jsx(Nu, {}) })
);
