"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * QuillComponent: Core, es5
 * Built with http://stenciljs.com
 */
function n(n, t) { for (var e, r, i = null, o = !1, u = !1, f = arguments.length; f-- > 2;)
    m.push(arguments[f]); for (; m.length > 0;) {
    var c = m.pop();
    if (c && void 0 !== c.pop)
        for (f = c.length; f--;)
            m.push(c[f]);
    else
        "boolean" == typeof c && (c = null), (u = "function" != typeof n) && (null == c ? c = "" : "number" == typeof c ? c = String(c) : "string" != typeof c && (u = !1)), u && o ? i[i.length - 1].vtext += c : null === i ? i = [u ? { vtext: c } : c] : i.push(u ? { vtext: c } : c), o = u;
} if (null != t) {
    if (t.className && (t.class = t.className), "object" == typeof t.class) {
        for (f in t.class)
            t.class[f] && m.push(f);
        t.class = m.join(" "), m.length = 0;
    }
    null != t.key && (e = t.key), null != t.name && (r = t.name);
} return "function" == typeof n ? n(t, i || [], g) : { vtag: n, vchildren: i, vtext: void 0, vattrs: t, vkey: e, vname: r, t: void 0, i: !1 }; }
exports.h = n;
function t(n, t, e) { void 0 === e && (e = {}); var r = Array.isArray(t) ? t : [t], i = n.document, u = e.hydratedCssClass || "hydrated", f = e.exclude; f && (r = r.filter(function (n) { return -1 === f.indexOf(n[0]); })); var c = r.map(function (n) { return n[0]; }); if (c.length > 0) {
    var a = i.createElement("style");
    a.innerHTML = c.join() + "{visibility:hidden}." + u + "{visibility:inherit}", a.setAttribute("data-styles", ""), i.head.insertBefore(a, i.head.firstChild);
} var l = e.namespace || "QuillComponent"; return P || (P = !0, function v(n, t, e) { (n["s-apps"] = n["s-apps"] || []).push(t), e.componentOnReady || (e.componentOnReady = function t() { function e(t) { if (r.nodeName.indexOf("-") > 0) {
    for (var e = n["s-apps"], i = 0, o = 0; o < e.length; o++)
        if (n[e[o]].componentOnReady) {
            if (n[e[o]].componentOnReady(r, t))
                return;
            i++;
        }
    if (i < e.length)
        return void (n["s-cr"] = n["s-cr"] || []).push([r, t]);
} t(null); } var r = this; return n.Promise ? new n.Promise(e) : { then: e }; }); }(n, l, n.HTMLElement.prototype)), applyPolyfills(n).then(function () { function t() { r.forEach(function (t) { var e; !function r(n) { return /\{\s*\[native code\]\s*\}/.test("" + n); }(n.customElements.define) ? (e = function (t) { return n.HTMLElement.call(this, t); }).prototype = Object.create(n.HTMLElement.prototype, { constructor: { value: e, configurable: !0 } }) : e = new Function("w", "return class extends w.HTMLElement{}")(n), x[l].o(function i(n) { var t = M(n), e = t.u, r = s(n[0]); return t.u = function (n) { var t = n.mode, i = n.scoped; return function o(n, t, e) { return Promise.resolve().then(function () { return require("./build/" + n + (t ? ".sc" : "") + ".entry.js"); }).then(function (n) { return n[e]; }); }("string" == typeof e ? e : e[t], i, r); }, t; }(t), e); }); } if (!x[l]) {
    var f = {}, c = e.resourcesUrl || "./";
    o(l, f, n, i, c, u), x[l] = W(l, f, n, i, c, u, r);
} if (window.customStyleShim)
    return x[l].s = window.customStyleShim, x[l].s.initShim().then(t); t(); }); }
exports.defineCustomElement = t;
this && this.l;
var e = this && this.v || function (n, t, e, r) { return new (e || (e = Promise))(function (i, o) { function u(n) { try {
    c(r.next(n));
}
catch (n) {
    o(n);
} } function f(n) { try {
    c(r.throw(n));
}
catch (n) {
    o(n);
} } function c(n) { n.done ? i(n.value) : new e(function (t) { t(n.value); }).then(u, f); } c((r = r.apply(n, t || [])).next()); }); }, r = this && this.p || function (n, t) { function e(e) { return function (u) { return function c(e) { if (r)
    throw new TypeError("Generator is already executing."); for (; f;)
    try {
        if (r = 1, i && (o = 2 & e[0] ? i.return : e[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, e[1])).done)
            return o;
        switch (i = 0, o && (e = [2 & e[0], o.value]), e[0]) {
            case 0:
            case 1:
                o = e;
                break;
            case 4: return f.label++, { value: e[1], done: !1 };
            case 5:
                f.label++, i = e[1], e = [0];
                continue;
            case 7:
                e = f.m.pop(), f.g.pop();
                continue;
            default:
                if (!(o = (o = f.g).length > 0 && o[o.length - 1]) && (6 === e[0] || 2 === e[0])) {
                    f = 0;
                    continue;
                }
                if (3 === e[0] && (!o || e[1] > o[0] && e[1] < o[3])) {
                    f.label = e[1];
                    break;
                }
                if (6 === e[0] && f.label < o[1]) {
                    f.label = o[1], o = e;
                    break;
                }
                if (o && f.label < o[2]) {
                    f.label = o[2], f.m.push(e);
                    break;
                }
                o[2] && f.m.pop(), f.g.pop();
                continue;
        }
        e = t.call(n, f);
    }
    catch (n) {
        e = [6, n], i = 0;
    }
    finally {
        r = o = 0;
    } if (5 & e[0])
    throw e[1]; return { value: e[0] ? e[1] : void 0, done: !0 }; }([e, u]); }; } var r, i, o, u, f = { label: 0, M: function () { if (1 & o[0])
        throw o[1]; return o[1]; }, g: [], m: [] }; return u = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (u[Symbol.iterator] = function () { return this; }), u; }, i = this, o = function () { };
function applyPolyfills(n) { n.j = function () { function t() { var n = setTimeout; return function () { return n(e, 1); }; } function e() { for (var n = 0; n < b; n += 2)
    (0, O[n])(O[n + 1]), O[n] = void 0, O[n + 1] = void 0; b = 0; } function r(n, t) { var e = this, r = new this.constructor(o); void 0 === r[_] && h(r); var i = e.k; if (i) {
    var u = arguments[i - 1];
    M(function () { return d(i, r, u, e.A); });
}
else
    v(e, r, n, t); return r; } function i(n) { if (n && "object" == typeof n && n.constructor === this)
    return n; var t = new this(o); return c(t, n), t; } function o() { } function u(n) { try {
    return n.then;
}
catch (n) {
    return P.error = n, P;
} } function f(n, t, e) { t.constructor === n.constructor && e === r && t.constructor.resolve === i ? function (n, t) { t.k === W ? s(n, t.A) : t.k === x ? l(n, t.A) : v(t, void 0, function (t) { return c(n, t); }, function (t) { return l(n, t); }); }(n, t) : e === P ? (l(n, P.error), P.error = null) : void 0 === e ? s(n, t) : "function" == typeof e ? function (n, t, e) { M(function (n) { var r = !1, i = function (n, t, e, r) { try {
    n.call(t, e, r);
}
catch (n) {
    return n;
} }(e, t, function (e) { r || (r = !0, t !== e ? c(n, e) : s(n, e)); }, function (t) { r || (r = !0, l(n, t)); }, n.C); !r && i && (r = !0, l(n, i)); }, n); }(n, t, e) : s(n, t); } function c(n, t) { if (n === t)
    l(n, new TypeError("cannot resolve promise w/ itself"));
else {
    var e = typeof t;
    null === t || "object" !== e && "function" !== e ? s(n, t) : f(n, t, u(t));
} } function a(n) { n.O && n.O(n.A), p(n); } function s(n, t) { n.k === T && (n.A = t, n.k = W, 0 !== n.S.length && M(p, n)); } function l(n, t) { n.k === T && (n.k = x, n.A = t, M(a, n)); } function v(n, t, e, r) { var i = n.S, o = i.length; n.O = null, i[o] = t, i[o + W] = e, i[o + x] = r, 0 === o && n.k && M(p, n); } function p(n) { var t = n.S, e = n.k; if (0 !== t.length) {
    for (var r, i, o = n.A, u = 0; u < t.length; u += 3)
        r = t[u], i = t[u + e], r ? d(e, r, i, o) : i(o);
    n.S.length = 0;
} } function d(n, t, e, r) { var i = "function" == typeof e, o = void 0, u = void 0, f = void 0, a = void 0; if (i) {
    try {
        o = e(r);
    }
    catch (n) {
        P.error = n, o = P;
    }
    if (o === P ? (a = !0, u = o.error, o.error = null) : f = !0, t === o)
        return void l(t, new TypeError("Cannot return same promise"));
}
else
    o = r, f = !0; t.k === T && (i && f ? c(t, o) : a ? l(t, u) : n === W ? s(t, o) : n === x && l(t, o)); } function h(n) { n[_] = N++, n.k = void 0, n.A = void 0, n.S = []; } var y, w = Array.isArray ? Array.isArray : function (n) { return "[object Array]" === Object.prototype.toString.call(n); }, b = 0, m = void 0, g = void 0, M = function (n, t) { O[b] = n, O[b + 1] = t, 2 === (b += 2) && (g ? g(e) : S()); }, j = (y = void 0 !== n ? n : void 0) || {}, k = j.MutationObserver || j.WebKitMutationObserver; j = "undefined" == typeof self; var $, A, E, C = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, O = Array(1e3), S = void 0; S = k ? ($ = 0, A = new k(e), E = document.createTextNode(""), A.observe(E, { characterData: !0 }), function () { E.data = $ = ++$ % 2; }) : C ? function () { var n = new MessageChannel; return n.port1.onmessage = e, function () { return n.port2.postMessage(0); }; }() : void 0 === y && "function" == typeof require ? function () { try {
    var n = Function("return this")().require("vertx");
    return void 0 !== (m = n._ || n.T) ? function () { m(e); } : t();
}
catch (n) {
    return t();
} }() : t(); var _ = Math.random().toString(36).substring(2), T = void 0, W = 1, x = 2, P = { error: null }, N = 0, R = function () { function n(n, t) { this.W = n, this.P = new n(o), this.P[_] || h(this.P), w(t) ? (this.N = this.length = t.length, this.A = Array(this.length), 0 === this.length ? s(this.P, this.A) : (this.length = this.length || 0, this.R(t), 0 === this.N && s(this.P, this.A))) : l(this.P, Error("Array Methods must be provided an Array")); } return n.prototype.R = function (n) { for (var t = 0; this.k === T && t < n.length; t++)
    this.L(n[t], t); }, n.prototype.L = function (n, t) { var e = this.W, c = e.resolve; c === i ? (c = u(n)) === r && n.k !== T ? this.D(n.k, t, n.A) : "function" != typeof c ? (this.N--, this.A[t] = n) : e === L ? (f(e = new e(o), n, c), this.F(e, t)) : this.F(new e(function (t) { return t(n); }), t) : this.F(c(n), t); }, n.prototype.D = function (n, t, e) { var r = this.P; r.k === T && (this.N--, n === x ? l(r, e) : this.A[t] = e), 0 === this.N && s(r, this.A); }, n.prototype.F = function (n, t) { var e = this; v(n, void 0, function (n) { return e.D(W, t, n); }, function (n) { return e.D(x, t, n); }); }, n; }(), L = function () { function n(t) { if (this[_] = N++, this.A = this.k = void 0, this.S = [], o !== t) {
    if ("function" != typeof t)
        throw new TypeError("Must pass a resolver fn as 1st arg");
    if (!(this instanceof n))
        throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");
    !function (n, t) { try {
        t(function (t) { c(n, t); }, function (t) { l(n, t); });
    }
    catch (t) {
        l(n, t);
    } }(this, t);
} } return n.prototype.catch = function (n) { return this.then(null, n); }, n.prototype.finally = function (n) { var t = this.constructor; return this.then(function (e) { return t.resolve(n()).then(function () { return e; }); }, function (e) { return t.resolve(n()).then(function () { throw e; }); }); }, n; }(); return L.prototype.then = r, L.all = function (n) { return new R(this, n).P; }, L.race = function (n) { var t = this; return w(n) ? new t(function (e, r) { for (var i = n.length, o = 0; o < i; o++)
    t.resolve(n[o]).then(e, r); }) : new t(function (n, t) { return t(new TypeError("Must pass array to race")); }); }, L.resolve = i, L.reject = function (n) { var t = new this(o); return l(t, n), t; }, L.H = function (n) { g = n; }, L.q = function (n) { M = n; }, L.U = M, L.B = function () { var n = void 0; if ("undefined" != typeof global)
    n = global;
else if ("undefined" != typeof self)
    n = self;
else
    try {
        n = Function("return this")();
    }
    catch (n) {
        throw Error("polyfill failed");
    } var t = n.Promise; if (t) {
    var e = null;
    try {
        e = Object.prototype.toString.call(t.resolve());
    }
    catch (n) { }
    if ("[object Promise]" === e && !t.cast)
        return;
} n.Promise = L; }, L.Promise = L, L.B(), L; }(); var t = []; return n.customElements && (!n.Element || n.Element.prototype.closest && n.Element.prototype.matches && n.Element.prototype.remove) || t.push(Promise.resolve().then(function () { return require("./polyfills/dom.js"); })), "function" == typeof Object.assign && Object.entries || t.push(Promise.resolve().then(function () { return require("./polyfills/object.js"); })), Array.prototype.find && Array.prototype.includes || t.push(Promise.resolve().then(function () { return require("./polyfills/array.js"); })), String.prototype.startsWith && String.prototype.endsWith || t.push(Promise.resolve().then(function () { return require("./polyfills/string.js"); })), n.fetch || t.push(Promise.resolve().then(function () { return require("./polyfills/fetch.js"); })), "undefined" != typeof WeakMap && n.CSS && n.CSS.supports && n.CSS.supports("color", "var(--c)") || t.push(Promise.resolve().then(function () { return require("./polyfills/css-shim.js"); })), function e() { try {
    var n = new URL("b", "http://a");
    return n.pathname = "c%20d", "http://a/c%20d" === n.href && n.searchParams;
}
catch (n) {
    return !1;
} } || t.push(Promise.resolve().then(function () { return require("./polyfills/url.js"); })), Promise.all(t).then(function (t) { t.forEach(function (t) { try {
    t.applyPolyfill(n, n.document);
}
catch (n) {
    console.error(n);
} }); }); }
var u = {}, f = { enter: 13, escape: 27, space: 32, tab: 9, left: 37, up: 38, right: 39, down: 40 }, c = function (n) { return null != n; }, a = function (n) { return n.toLowerCase(); }, s = function (n) { return a(n).split("-").map(function (n) { return n.charAt(0).toUpperCase() + n.slice(1); }).join(""); }, l = "http://www.w3.org/1999/xlink", v = function (n, t, e, r, i, o) { if ("class" !== e || o)
    if ("style" === e) {
        for (var u in r)
            i && null != i[u] || (/-/.test(u) ? t.style.removeProperty(u) : t.style[u] = "");
        for (var u in i)
            r && i[u] === r[u] || (/-/.test(u) ? t.style.setProperty(u, i[u]) : t.style[u] = i[u]);
    }
    else if ("o" !== e[0] || "n" !== e[1] || !/[A-Z]/.test(e[2]) || e in t)
        if ("list" !== e && "type" !== e && !o && (e in t || -1 !== ["object", "function"].indexOf(typeof i) && null !== i)) {
            var f = n.I(t);
            f && f.G && f.G[e] ? d(t, e, i) : "ref" !== e && (d(t, e, null == i ? "" : i), null != i && !1 !== i || n.Z.Y(t, e));
        }
        else
            null != i && "key" !== e ? function (n, t, e, r, i) { void 0 === r && (r = "boolean" == typeof e), i = t !== (t = t.replace(/^xlink\:?/, "")), null == e || r && (!e || "false" === e) ? i ? n.removeAttributeNS(l, a(t)) : n.removeAttribute(t) : "function" != typeof e && (e = r ? "" : e.toString(), i ? n.setAttributeNS(l, a(t), e) : n.setAttribute(t, e)); }(t, e, i) : (o || n.Z.J(t, e) && (null == i || !1 === i)) && n.Z.Y(t, e);
    else
        e = a(e) in t ? a(e.substring(2)) : a(e[2]) + e.substring(3), i ? i !== r && n.Z.K(t, e, i, 0) : n.Z.V(t, e, 0);
else if (r !== i) {
    var c = p(r), s = p(i), v = c.filter(function (n) { return !s.includes(n); }), h = p(t.className).filter(function (n) { return !v.includes(n); }), y = s.filter(function (n) { return !c.includes(n) && !h.includes(n); });
    h.push.apply(h, y), t.className = h.join(" ");
} }, p = function (n) { return null == n || "" === n ? [] : n.trim().split(/\s+/); }, d = function (n, t, e) { try {
    n[t] = e;
}
catch (n) { } }, h = function (n, t, e, r, i) { var o = 11 === e.t.nodeType && e.t.host ? e.t.host : e.t, f = t && t.vattrs || u, c = e.vattrs || u; for (i in f)
    c && null != c[i] || null == f[i] || v(n, o, i, f[i], void 0, r, e.i); for (i in c)
    i in f && c[i] === ("value" === i || "checked" === i ? o[i] : f[i]) || v(n, o, i, f[i], c[i], r, e.i); }, y = !1, w = function (n, t) { n && (n.vattrs && n.vattrs.ref && n.vattrs.ref(t ? null : n.t), n.vchildren && n.vchildren.forEach(function (n) { w(n, t); })); }, b = function (n, t) { var e = 0, r = !1, i = function () { return t.performance.now(); }, o = !1 !== n.asyncQueue, u = Promise.resolve(), f = [], c = [], a = [], s = [], l = function (t) { return function (e) { t.push(e), r || (r = !0, n.raf(d)); }; }, v = function (n) { for (var t = 0; t < n.length; t++)
    try {
        n[t](i());
    }
    catch (n) {
        console.error(n);
    } n.length = 0; }, p = function (n, t) { for (var e, r = 0; r < n.length && (e = i()) < t;)
    try {
        n[r++](e);
    }
    catch (n) {
        console.error(n);
    } r === n.length ? n.length = 0 : 0 !== r && n.splice(0, r); }, d = function () { e++, v(c); var t = o ? i() + 7 * Math.ceil(e * (1 / 22)) : Infinity; p(a, t), p(s, t), a.length > 0 && (s.push.apply(s, a), a.length = 0), (r = c.length + a.length + s.length > 0) ? n.raf(d) : e = 0; }; return n.raf || (n.raf = t.requestAnimationFrame.bind(t)), { tick: function (n) { f.push(n), 1 === f.length && u.then(function () { return v(f); }); }, read: l(c), write: l(a) }; }, m = [], g = { forEach: function (n, t) { return n.forEach(t); }, map: function (n, t) { return n.map(t); } }, M = function (n, t, e) { var r = n[0], i = n[1], o = n[3], u = n[4], f = n[5], c = { color: { X: "color" } }; if (o)
    for (t = 0; t < o.length; t++)
        c[(e = o[t])[0]] = { nn: e[1], tn: !!e[2], X: "string" == typeof e[3] ? e[3] : e[3] ? e[0] : 0, en: e[4] }; return { rn: r, u: i, G: Object.assign({}, c), in: u, on: f ? f.map(j) : void 0 }; }, j = function (n) { return { un: n[0], fn: n[1], cn: !!n[2], an: !!n[3], sn: !!n[4] }; }, k = function (n, t) { return c(t) && "object" != typeof t && "function" != typeof t ? n === Boolean || 4 === n ? "false" !== t && ("" === t || !!t) : n === Number || 8 === n ? parseFloat(t) : n === String || 2 === n ? t.toString() : t : t; }, $ = function (n, t, e) { n.ln.add(t), n.vn.has(t) || (n.vn.set(t, !0), n.pn ? n.queue.write(function () { return A(n, t, e); }) : n.queue.tick(function () { return A(n, t, e); })); }, A = function (t, o, u, f, c, a) { return e(i, void 0, void 0, function () { var e, i; return r(this, function (r) { switch (r.label) {
    case 0: return t.vn.delete(o), t.dn.has(o) ? [3, 12] : (c = t.hn.get(o)) ? [3, 6] : (a = t.yn.get(o)) && !a["s-rn"] ? ((a["s-rc"] = a["s-rc"] || []).push(function () { A(t, o, u); }), [2]) : (c = S(t, o, t.wn.get(o), u), [3, 5]);
    case 1: return r.g.push([1, 4, , 5]), c.componentWillLoad ? [4, c.componentWillLoad()] : [3, 3];
    case 2: r.M(), r.label = 3;
    case 3: return [3, 5];
    case 4: return e = r.M(), t.bn(e, 3, o), [3, 5];
    case 5:
    case 6: return [3, 11];
    case 7: return r.g.push([7, 10, , 11]), c.componentWillUpdate ? [4, c.componentWillUpdate()] : [3, 9];
    case 8: r.M(), r.label = 9;
    case 9: return [3, 11];
    case 10: return i = r.M(), t.bn(i, 5, o), [3, 11];
    case 11: (function (t, e, r, i) { try {
        var o = e.mn.host, u = e.mn.encapsulation, f = r;
        if (i.render || i.hostData || o) {
            t.gn = !0;
            var c = i.render && i.render();
            t.gn = !1;
            var a = n(null, void 0, c), s = t.Mn.get(r) || {};
            s.t = f, t.Mn.set(r, t.render(r, s, a, !1, u));
        }
        t.s && t.s.updateHost(r), r["s-rn"] = !0, r["s-rc"] && (r["s-rc"].forEach(function (n) { return n(); }), r["s-rc"] = null);
    }
    catch (n) {
        t.gn = !1, t.bn(n, 8, r, !0);
    } })(t, t.I(o), o, c), o["s-init"](), r.label = 12;
    case 12: return [2];
} }); }); }, E = function (n, t, e, r, i, o, u) { (u = n.jn.get(t)) || n.jn.set(t, u = {}); var f = u[e]; if (r !== f && (u[e] = r, o = n.hn.get(t))) {
    var c = u[O + e];
    if (c)
        for (var a = 0; a < c.length; a++)
            try {
                o[c[a]].call(o, r, f, e);
            }
            catch (n) {
                console.error(n);
            }
    !n.gn && t["s-rn"] && $(n, t, i);
} }, C = function (n, t, e, r) { Object.defineProperty(n, t, { configurable: !0, get: e, set: r }); }, O = "wc-", S = function (n, t, e, r, i, o) { try {
    i = new (o = n.I(t).mn), function (n, t, e, r, i, o) { n.kn.set(r, e), n.jn.has(e) || n.jn.set(e, {}), Object.entries(Object.assign({ color: { type: String } }, t.properties, { mode: { type: String } })).forEach(function (t) { var u = t[0], f = t[1]; (function (n, t, e, r, i, o, u, f, a) { if (t.type) {
        var s = n.jn.get(e);
        !t.attr || void 0 !== s[i] && "" !== s[i] || (f = o && o.$n) && c(a = f[t.attr]) && (s[i] = k(t.type, a)), e.hasOwnProperty(i) && (void 0 === s[i] && (s[i] = k(t.type, e[i])), "mode" !== i && delete e[i]), r.hasOwnProperty(i) && void 0 === s[i] && (s[i] = r[i]), t.watchCallbacks && (s[O + i] = t.watchCallbacks.slice()), C(r, i, function l(t) { return (t = n.jn.get(n.kn.get(this))) && t[i]; }, function v(e, r) { (r = n.kn.get(this)) && t.mutable && E(n, r, i, e, u); });
    }
    else
        t.elementRef && (p = r, d = i, h = e, Object.defineProperty(p, d, { configurable: !0, value: h })); var p, d, h; })(n, f, e, r, u, i, o); }); }(n, o, t, i, e, r), function u(n, t, e) { if (t) {
        var r = n.kn.get(e);
        t.forEach(function (t) { e[t.method] = { emit: function (e) { return n.An(r, t.name, { bubbles: t.bubbles, composed: t.composed, cancelable: t.cancelable, detail: e }); } }; });
    } }(n, o.events, i);
}
catch (e) {
    i = {}, n.bn(e, 7, t, !0);
} return n.hn.set(t, i), i; }, _ = function (n, t) { for (var e = 0; e < t.childNodes.length; e++) {
    var r = t.childNodes[e];
    if (1 === r.nodeType) {
        if (n.I(r) && !n.En.has(r))
            return !1;
        if (!_(n, r))
            return !1;
    }
} return !0; }, T = function (n, t, e, r, i, o) { if (n.ln.delete(t), (i = n.yn.get(t)) && ((r = i["s-ld"]) && ((e = r.indexOf(t)) > -1 && r.splice(e, 1), r.length || i["s-init"] && i["s-init"]()), n.yn.delete(t)), n.Cn.length && !n.ln.size)
    for (; o = n.Cn.shift();)
        o(); }, W = function (t, e, r, i, o, u) { var s = r.performance, l = { html: {} }, v = r[t] = r[t] || {}, p = function (n, t, e) { var r = new WeakMap, i = { On: e, Sn: !!e.documentElement.attachShadow, _n: !1, Tn: function (n) { return n.nodeType; }, Wn: function (n) { return e.createElement(n); }, xn: function (n, t) { return e.createElementNS(n, t); }, Pn: function (n) { return e.createTextNode(n); }, Nn: function (n) { return e.createComment(n); }, Rn: function (n, t, e) { return n.insertBefore(t, e); }, Ln: function (n) { return n.remove(); }, Dn: function (n, t) { return n.appendChild(t); }, Fn: function (n, t) { if (n.classList)
        n.classList.add(t);
    else if ("svg" === n.nodeName.toLowerCase()) {
        var e = n.getAttribute("class") || "";
        e.split(" ").includes(t) || (e += " " + t), n.setAttribute("class", e.trim());
    } }, Hn: function (n) { return n.childNodes; }, qn: function (n) { return n.parentNode; }, Un: function (n) { return n.nextSibling; }, Bn: function (n) { return n.previousSibling; }, In: function (n) { return a(n.nodeName); }, Gn: function (n) { return n.textContent; }, Qn: function (n, t) { return n.textContent = t; }, Yn: function (n, t) { return n.getAttribute(t); }, Zn: function (n, t, e) { return n.setAttribute(t, e); }, Y: function (n, t) { return n.removeAttribute(t); }, J: function (n, t) { return n.hasAttribute(t); }, zn: function (t) { return t.getAttribute("mode") || (n.Context || {}).mode; }, Jn: function (n, r) { return "child" === r ? n.firstElementChild : "parent" === r ? i.Kn(n) : "body" === r ? e.body : "document" === r ? e : "window" === r ? t : n; }, K: function (t, e, o, u, c, a, s, l, v, p) { var d = t, h = o, y = r.get(t); p = e + u, y && y[p] && y[p](), "string" == typeof s ? d = i.Jn(t, s) : "object" == typeof s ? d = s : (v = e.split(":")).length > 1 && (d = i.Jn(t, v[0]), e = v[1]), d && ((v = e.split(".")).length > 1 && (e = v[0], h = function (n) { n.keyCode === f[v[1]] && o(n); }), l = i._n ? { capture: !!c, passive: !!a } : !!c, n.ael(d, e, h, l), y || r.set(t, y = {}), y[p] = function () { d && n.rel(d, e, h, l), y[p] = null; }); }, V: function (n, t, e, i) { (i = r.get(n)) && (t ? i[t + e] && i[t + e]() : Object.keys(i).forEach(function (n) { i[n] && i[n](); })); }, Vn: function (n, e, r, i) { return i = new t.CustomEvent(e, r), n && n.dispatchEvent(i), i; }, Kn: function (n, t) { return (t = i.qn(n)) && 11 === i.Tn(t) ? t.host : t; }, Xn: function (n, t, e, r) { return n.setAttributeNS(t, e, r); } }; "function" != typeof t.CustomEvent && (t.CustomEvent = function (n, t, r) { return t = t || {}, (r = e.createEvent("CustomEvent")).initCustomEvent(n, t.bubbles, t.cancelable, t.detail), r; }, t.CustomEvent.prototype = t.Event.prototype), n.ael || (n.ael = function (n, t, e, r) { return n.addEventListener(t, e, r); }, n.rel = function (n, t, e, r) { return n.removeEventListener(t, e, r); }); try {
    t.addEventListener("e", null, Object.defineProperty({}, "passive", { get: function () { return i._n = !0; } }));
}
catch (n) { } return i; }(v, r, i), d = p.On.documentElement, m = r["s-defined"] = r["s-defined"] || {}, g = { Z: p, o: function (n, t) { r.customElements.get(n.rn) || (function (n, t, e, r, i) { if (e.connectedCallback = function () { (function (n, t, e) { n.dn.delete(e), n.En.has(e) || (n.nt = !0, n.ln.add(e), n.En.set(e, !0), function (n, t, e) { for (e = t; e = n.Z.Kn(e);)
        if (n.tt(e)) {
            n.et.has(t) || (n.yn.set(t, e), (e["s-ld"] = e["s-ld"] || []).push(t));
            break;
        } }(n, e), n.queue.tick(function () { n.wn.set(e, function (n, t, e, r, i) { if (e.mode || (e.mode = n.zn(e)), e["s-cr"] || n.Yn(e, "ssrv") || n.Sn && 1 === t.in || (e["s-cr"] = n.Pn(""), e["s-cr"]["s-cn"] = !0, n.Rn(e, e["s-cr"], n.Hn(e)[0])), !n.Sn && 1 === t.in)
        try {
            !window.HTMLElement || "shadowRoot" in window.HTMLElement.prototype || (e.shadowRoot = e);
        }
        catch (n) { } return r = { $n: {} }, t.G && Object.keys(t.G).forEach(function (o) { (i = t.G[o].X) && (r.$n[i] = n.Yn(e, i)); }), r; }(n.Z, t, e)), n.rt(t, e); })); })(n, t, this); }, e.disconnectedCallback = function () { (function (n, t) { if (!n.it && function (n, t) { for (; t;) {
        if (!n.qn(t))
            return 9 !== n.Tn(t);
        t = n.qn(t);
    } }(n.Z, t)) {
        n.dn.set(t, !0), T(n, t), w(n.Mn.get(t), !0);
        var e = n.hn.get(t);
        e && e.componentDidUnload && e.componentDidUnload(), n.Z.V(t), n.ot.delete(t), n.s && n.s.removeHost(t), [n.yn, n.ut, n.wn].forEach(function (n) { return n.delete(t); });
    } })(n, this); }, e["s-init"] = function () { (function (n, t, e, r, i, o, u) { if (_(n, t) && (i = n.hn.get(t)) && !n.dn.has(t) && (!t["s-ld"] || !t["s-ld"].length)) {
        n.et.set(t, !0), (u = n.ft.has(t)) || (n.ft.set(t, !0), t["s-ld"] = void 0, n.Z.Fn(t, e));
        try {
            w(n.Mn.get(t)), (o = n.ut.get(t)) && (o.forEach(function (n) { return n(t); }), n.ut.delete(t)), !u && i.componentDidLoad && i.componentDidLoad();
        }
        catch (e) {
            n.bn(e, 4, t);
        }
        T(n, t);
    } })(n, this, r); }, e.forceUpdate = function () { $(n, this, i); }, t.G) {
        var o = Object.entries(t.G), u = {};
        o.forEach(function (n) { var t = n[0], e = n[1].X; e && (u[e] = t); }), u = Object.assign({}, u), e.attributeChangedCallback = function (n, t, e) { (function r(n, t, e, i) { var o = n[a(e)]; o && (t[o] = (null !== i || "boolean" != typeof t[o]) && i); })(u, this, n, e); }, function (n, t, e, r) { o.forEach(function (t) { var i = t[0], o = t[1]; 3 & o.nn && C(e, i, function t() { return (n.jn.get(this) || {})[i]; }, function t(e) { E(n, this, i, k(o.en, e), r); }); }); }(n, 0, e, i);
    } }(g, l[n.rn] = n, t.prototype, u, s), t.observedAttributes = Object.values(n.G).map(function (n) { return n.X; }).filter(function (n) { return !!n; }), r.customElements.define(n.rn, t)); }, I: function (n) { return l[p.In(n)]; }, ct: function (n) { return e[n]; }, isClient: !0, tt: function (n) { return !(!m[p.In(n)] && !g.I(n)); }, bn: function (n, t, e) { return console.error(n, t, e && e.tagName); }, queue: e.queue = b(v, r), rt: function (n, t) { var e = { mode: t.mode, scoped: !1 }; n.u(e).then(function (e) { try {
        n.mn = e;
    }
    catch (t) {
        console.error(t), n.mn = function r() { };
    } $(g, t, s); }); }, gn: !1, pn: !1, it: !1, at: void 0, yn: new WeakMap, st: new WeakMap, En: new WeakMap, ot: new WeakMap, ft: new WeakMap, et: new WeakMap, kn: new WeakMap, wn: new WeakMap, hn: new WeakMap, dn: new WeakMap, vn: new WeakMap, ut: new WeakMap, lt: new WeakMap, Mn: new WeakMap, jn: new WeakMap, ln: new Set, Cn: [] }; return e.isServer = e.isPrerender = !(e.isClient = !0), e.window = r, e.location = r.location, e.document = i, e.resourcesUrl = e.publicPath = o, g.An = e.emit = function (n, t, r) { return p.Vn(n, e.eventNameFn ? e.eventNameFn(t) : t, r); }, v.h = n, v.Context = e, v.onReady = function () { return new Promise(function (n) { return g.queue.write(function () { return g.ln.size ? g.Cn.push(n) : n(); }); }); }, g.render = function (n, t) { var e, r, i, o, u, f, a, s = function (i, v, p, d, w, b, m, g, M) { if (g = v.vchildren[p], e || (o = !0, "slot" === g.vtag && (r && t.Fn(d, r + "-s"), g.vchildren ? g.vt = !0 : g.pt = !0)), c(g.vtext))
    g.t = t.Pn(g.vtext);
else if (g.pt)
    g.t = t.Pn("");
else {
    if (b = g.t = y || "svg" === g.vtag ? t.xn("http://www.w3.org/2000/svg", g.vtag) : t.Wn(g.vt ? "slot-fb" : g.vtag), n.tt(b) && n.et.delete(a), y = "svg" === g.vtag || "foreignObject" !== g.vtag && y, h(n, null, g, y), c(r) && b["s-si"] !== r && t.Fn(b, b["s-si"] = r), g.vchildren)
        for (w = 0; w < g.vchildren.length; ++w)
            (m = s(i, g, w, b)) && t.Dn(b, m);
    "svg" === g.vtag && (y = !1);
} return g.t["s-hn"] = f, (g.vt || g.pt) && (g.t["s-sr"] = !0, g.t["s-cr"] = u, g.t["s-sn"] = g.vname || "", (M = i && i.vchildren && i.vchildren[p]) && M.vtag === g.vtag && i.t && l(i.t)), g.t; }, l = function (e, r, i, u) { n.it = !0; var c = t.Hn(e); for (i = c.length - 1; i >= 0; i--)
    (u = c[i])["s-hn"] !== f && u["s-ol"] && (t.Ln(u), t.Rn(b(u), u, w(u)), t.Ln(u["s-ol"]), u["s-ol"] = null, o = !0), r && l(u, r); n.it = !1; }, v = function (n, e, r, i, o, u, a, l) { var v = n["s-cr"]; for ((a = v && t.qn(v) || n).shadowRoot && t.In(a) === f && (a = a.shadowRoot); o <= u; ++o)
    i[o] && (l = c(i[o].vtext) ? t.Pn(i[o].vtext) : s(null, r, o, n)) && (i[o].t = l, t.Rn(a, l, w(e))); }, p = function (n, e, r, o) { for (; e <= r; ++e)
    c(n[e]) && (o = n[e].t, i = !0, o["s-ol"] ? t.Ln(o["s-ol"]) : l(o, !0), t.Ln(o)); }, d = function (n, t) { return n.vtag === t.vtag && n.vkey === t.vkey && ("slot" !== n.vtag || n.vname === t.vname); }, w = function (n) { return n && n["s-ol"] ? n["s-ol"] : n; }, b = function (n) { return t.qn(n["s-ol"] ? n["s-ol"] : n); }, m = function (e, r, i) { var o = r.t = e.t, u = e.vchildren, f = r.vchildren; y = r.t && c(t.Kn(r.t)) && void 0 !== r.t.ownerSVGElement, y = "svg" === r.vtag || "foreignObject" !== r.vtag && y, c(r.vtext) ? (i = o["s-cr"]) ? t.Qn(t.qn(i), r.vtext) : e.vtext !== r.vtext && t.Qn(o, r.vtext) : ("slot" !== r.vtag && h(n, e, r, y), c(u) && c(f) ? function (n, e, r, i, o, u, f, a) { for (var h = 0, y = 0, g = e.length - 1, M = e[0], j = e[g], k = i.length - 1, $ = i[0], A = i[k]; h <= g && y <= k;)
    if (null == M)
        M = e[++h];
    else if (null == j)
        j = e[--g];
    else if (null == $)
        $ = i[++y];
    else if (null == A)
        A = i[--k];
    else if (d(M, $))
        m(M, $), M = e[++h], $ = i[++y];
    else if (d(j, A))
        m(j, A), j = e[--g], A = i[--k];
    else if (d(M, A))
        "slot" !== M.vtag && "slot" !== A.vtag || l(t.qn(M.t)), m(M, A), t.Rn(n, M.t, t.Un(j.t)), M = e[++h], A = i[--k];
    else if (d(j, $))
        "slot" !== M.vtag && "slot" !== A.vtag || l(t.qn(j.t)), m(j, $), t.Rn(n, j.t, M.t), j = e[--g], $ = i[++y];
    else {
        for (o = null, u = h; u <= g; ++u)
            if (e[u] && c(e[u].vkey) && e[u].vkey === $.vkey) {
                o = u;
                break;
            }
        c(o) ? ((a = e[o]).vtag !== $.vtag ? f = s(e && e[y], r, o, n) : (m(a, $), e[o] = void 0, f = a.t), $ = i[++y]) : (f = s(e && e[y], r, y, n), $ = i[++y]), f && t.Rn(b(M.t), f, w(M.t));
    } h > g ? v(n, null == i[k + 1] ? null : i[k + 1].t, r, i, y, k) : y > k && p(e, h, g); }(o, u, r, f) : c(f) ? (c(e.vtext) && t.Qn(o, ""), v(o, null, r, f, 0, f.length - 1)) : c(u) && p(u, 0, u.length - 1)), y && "svg" === r.vtag && (y = !1); }, g = function (n, e, r, i, o, u, f, c) { for (i = 0, o = (r = t.Hn(n)).length; i < o; i++)
    if (e = r[i], 1 === t.Tn(e)) {
        if (e["s-sr"])
            for (f = e["s-sn"], e.hidden = !1, u = 0; u < o; u++)
                if (r[u]["s-hn"] !== e["s-hn"])
                    if (c = t.Tn(r[u]), "" !== f) {
                        if (1 === c && f === t.Yn(r[u], "slot")) {
                            e.hidden = !0;
                            break;
                        }
                    }
                    else if (1 === c || 3 === c && "" !== t.Gn(r[u]).trim()) {
                        e.hidden = !0;
                        break;
                    }
        g(e);
    } }, M = [], j = function (n, e, r, o, u, f, c, a, s, l) { for (u = 0, f = (e = t.Hn(n)).length; u < f; u++) {
    if ((r = e[u])["s-sr"] && (o = r["s-cr"]))
        for (a = t.Hn(t.qn(o)), s = r["s-sn"], c = a.length - 1; c >= 0; c--)
            (o = a[c])["s-cn"] || o["s-nr"] || o["s-hn"] === r["s-hn"] || ((3 === (l = t.Tn(o)) || 8 === l) && "" === s || 1 === l && null === t.Yn(o, "slot") && "" === s || 1 === l && t.Yn(o, "slot") === s) && (M.some(function (n) { return n.dt === o; }) || (i = !0, o["s-sn"] = s, M.push({ ht: r, dt: o })));
    1 === t.Tn(r) && j(r);
} }; return function (c, s, l, v, p, d, h, y, w, b, k, $) { if (a = c, f = t.In(a), u = a["s-cr"], e = v, r = a["s-sc"], o = i = !1, m(s, l), o) {
    for (j(l.t), h = 0; h < M.length; h++)
        (y = M[h]).dt["s-ol"] || ((w = t.Pn(""))["s-nr"] = y.dt, t.Rn(t.qn(y.dt), y.dt["s-ol"] = w, y.dt));
    for (n.it = !0, h = 0; h < M.length; h++) {
        for (y = M[h], k = t.qn(y.ht), $ = t.Un(y.ht), w = y.dt["s-ol"]; w = t.Bn(w);)
            if ((b = w["s-nr"]) && b && b["s-sn"] === y.dt["s-sn"] && k === t.qn(b) && (b = t.Un(b)) && b && !b["s-nr"]) {
                $ = b;
                break;
            }
        (!$ && k !== t.qn(y.dt) || t.Un(y.dt) !== $) && y.dt !== $ && (t.Ln(y.dt), t.Rn(k, y.dt, $));
    }
    n.it = !1;
} return i && g(l.t), M.length = 0, l; }; }(g, p), d["s-ld"] = [], d["s-rn"] = !0, d["s-init"] = function () { g.et.set(d, v.loaded = g.pn = !0), p.Vn(r, "appload", { detail: { namespace: t } }); }, function (n, t, e, r, i, o) { if (t.componentOnReady = function (t, e) { if (!t.nodeName.includes("-"))
    return e(null), !1; var r = n.I(t); if (r)
    if (n.et.has(t))
        e(t);
    else {
        var i = n.ut.get(t) || [];
        i.push(e), n.ut.set(t, i);
    } return !!r; }, i) {
    for (o = i.length - 1; o >= 0; o--)
        t.componentOnReady(i[o][0], i[o][1]) && i.splice(o, 1);
    for (o = 0; o < r.length; o++)
        if (!e[r[o]].componentOnReady)
            return;
    for (o = 0; o < i.length; o++)
        i[o][1](null);
    i.length = 0;
} }(g, v, r, r["s-apps"], r["s-cr"]), v.initialized = !0, g; }, x = {}, P = !1;
