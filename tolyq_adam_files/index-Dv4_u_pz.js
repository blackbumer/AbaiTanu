function qy(l, s) {
    for (var o = 0; o < s.length; o++) {
        const c = s[o];
        if (typeof c != "string" && !Array.isArray(c)) {
            for (const f in c)
                if (f !== "default" && !(f in l)) {
                    const m = Object.getOwnPropertyDescriptor(c, f);
                    m && Object.defineProperty(l, f, m.get ? m : {
                        enumerable: !0,
                        get: () => c[f]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload"))
        return;
    for (const f of document.querySelectorAll('link[rel="modulepreload"]'))
        c(f);
    new MutationObserver(f => {
        for (const m of f)
            if (m.type === "childList")
                for (const p of m.addedNodes)
                    p.tagName === "LINK" && p.rel === "modulepreload" && c(p)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function o(f) {
        const m = {};
        return f.integrity && (m.integrity = f.integrity),
        f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
        f.crossOrigin === "use-credentials" ? m.credentials = "include" : f.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin",
        m
    }
    function c(f) {
        if (f.ep)
            return;
        f.ep = !0;
        const m = o(f);
        fetch(f.href, m)
    }
}
)();
function Rh(l) {
    return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l
}
var Mc = {
    exports: {}
}
  , fs = {};
var Rp;
function By() {
    if (Rp)
        return fs;
    Rp = 1;
    var l = Symbol.for("react.transitional.element")
      , s = Symbol.for("react.fragment");
    function o(c, f, m) {
        var p = null;
        if (m !== void 0 && (p = "" + m),
        f.key !== void 0 && (p = "" + f.key),
        "key"in f) {
            m = {};
            for (var g in f)
                g !== "key" && (m[g] = f[g])
        } else
            m = f;
        return f = m.ref,
        {
            $$typeof: l,
            type: c,
            key: p,
            ref: f !== void 0 ? f : null,
            props: m
        }
    }
    return fs.Fragment = s,
    fs.jsx = o,
    fs.jsxs = o,
    fs
}
var zp;
function Yy() {
    return zp || (zp = 1,
    Mc.exports = By()),
    Mc.exports
}
var u = Yy()
  , Dc = {
    exports: {}
}
  , ds = {}
  , _c = {
    exports: {}
}
  , Uc = {};
var Mp;
function Gy() {
    return Mp || (Mp = 1,
    (function(l) {
        function s(O, k) {
            var H = O.length;
            O.push(k);
            e: for (; 0 < H; ) {
                var se = H - 1 >>> 1
                  , ue = O[se];
                if (0 < f(ue, k))
                    O[se] = k,
                    O[H] = ue,
                    H = se;
                else
                    break e
            }
        }
        function o(O) {
            return O.length === 0 ? null : O[0]
        }
        function c(O) {
            if (O.length === 0)
                return null;
            var k = O[0]
              , H = O.pop();
            if (H !== k) {
                O[0] = H;
                e: for (var se = 0, ue = O.length, N = ue >>> 1; se < N; ) {
                    var q = 2 * (se + 1) - 1
                      , Z = O[q]
                      , W = q + 1
                      , re = O[W];
                    if (0 > f(Z, H))
                        W < ue && 0 > f(re, Z) ? (O[se] = re,
                        O[W] = H,
                        se = W) : (O[se] = Z,
                        O[q] = H,
                        se = q);
                    else if (W < ue && 0 > f(re, H))
                        O[se] = re,
                        O[W] = H,
                        se = W;
                    else
                        break e
                }
            }
            return k
        }
        function f(O, k) {
            var H = O.sortIndex - k.sortIndex;
            return H !== 0 ? H : O.id - k.id
        }
        if (l.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var m = performance;
            l.unstable_now = function() {
                return m.now()
            }
        } else {
            var p = Date
              , g = p.now();
            l.unstable_now = function() {
                return p.now() - g
            }
        }
        var v = []
          , h = []
          , y = 1
          , b = null
          , T = 3
          , R = !1
          , _ = !1
          , A = !1
          , D = !1
          , Y = typeof setTimeout == "function" ? setTimeout : null
          , V = typeof clearTimeout == "function" ? clearTimeout : null
          , Q = typeof setImmediate < "u" ? setImmediate : null;
        function K(O) {
            for (var k = o(h); k !== null; ) {
                if (k.callback === null)
                    c(h);
                else if (k.startTime <= O)
                    c(h),
                    k.sortIndex = k.expirationTime,
                    s(v, k);
                else
                    break;
                k = o(h)
            }
        }
        function J(O) {
            if (A = !1,
            K(O),
            !_)
                if (o(v) !== null)
                    _ = !0,
                    I || (I = !0,
                    he());
                else {
                    var k = o(h);
                    k !== null && fe(J, k.startTime - O)
                }
        }
        var I = !1
          , X = -1
          , F = 5
          , oe = -1;
        function xe() {
            return D ? !0 : !(l.unstable_now() - oe < F)
        }
        function ve() {
            if (D = !1,
            I) {
                var O = l.unstable_now();
                oe = O;
                var k = !0;
                try {
                    e: {
                        _ = !1,
                        A && (A = !1,
                        V(X),
                        X = -1),
                        R = !0;
                        var H = T;
                        try {
                            t: {
                                for (K(O),
                                b = o(v); b !== null && !(b.expirationTime > O && xe()); ) {
                                    var se = b.callback;
                                    if (typeof se == "function") {
                                        b.callback = null,
                                        T = b.priorityLevel;
                                        var ue = se(b.expirationTime <= O);
                                        if (O = l.unstable_now(),
                                        typeof ue == "function") {
                                            b.callback = ue,
                                            K(O),
                                            k = !0;
                                            break t
                                        }
                                        b === o(v) && c(v),
                                        K(O)
                                    } else
                                        c(v);
                                    b = o(v)
                                }
                                if (b !== null)
                                    k = !0;
                                else {
                                    var N = o(h);
                                    N !== null && fe(J, N.startTime - O),
                                    k = !1
                                }
                            }
                            break e
                        } finally {
                            b = null,
                            T = H,
                            R = !1
                        }
                        k = void 0
                    }
                } finally {
                    k ? he() : I = !1
                }
            }
        }
        var he;
        if (typeof Q == "function")
            he = function() {
                Q(ve)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var je = new MessageChannel
              , P = je.port2;
            je.port1.onmessage = ve,
            he = function() {
                P.postMessage(null)
            }
        } else
            he = function() {
                Y(ve, 0)
            }
            ;
        function fe(O, k) {
            X = Y(function() {
                O(l.unstable_now())
            }, k)
        }
        l.unstable_IdlePriority = 5,
        l.unstable_ImmediatePriority = 1,
        l.unstable_LowPriority = 4,
        l.unstable_NormalPriority = 3,
        l.unstable_Profiling = null,
        l.unstable_UserBlockingPriority = 2,
        l.unstable_cancelCallback = function(O) {
            O.callback = null
        }
        ,
        l.unstable_forceFrameRate = function(O) {
            0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < O ? Math.floor(1e3 / O) : 5
        }
        ,
        l.unstable_getCurrentPriorityLevel = function() {
            return T
        }
        ,
        l.unstable_next = function(O) {
            switch (T) {
            case 1:
            case 2:
            case 3:
                var k = 3;
                break;
            default:
                k = T
            }
            var H = T;
            T = k;
            try {
                return O()
            } finally {
                T = H
            }
        }
        ,
        l.unstable_requestPaint = function() {
            D = !0
        }
        ,
        l.unstable_runWithPriority = function(O, k) {
            switch (O) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                O = 3
            }
            var H = T;
            T = O;
            try {
                return k()
            } finally {
                T = H
            }
        }
        ,
        l.unstable_scheduleCallback = function(O, k, H) {
            var se = l.unstable_now();
            switch (typeof H == "object" && H !== null ? (H = H.delay,
            H = typeof H == "number" && 0 < H ? se + H : se) : H = se,
            O) {
            case 1:
                var ue = -1;
                break;
            case 2:
                ue = 250;
                break;
            case 5:
                ue = 1073741823;
                break;
            case 4:
                ue = 1e4;
                break;
            default:
                ue = 5e3
            }
            return ue = H + ue,
            O = {
                id: y++,
                callback: k,
                priorityLevel: O,
                startTime: H,
                expirationTime: ue,
                sortIndex: -1
            },
            H > se ? (O.sortIndex = H,
            s(h, O),
            o(v) === null && O === o(h) && (A ? (V(X),
            X = -1) : A = !0,
            fe(J, H - se))) : (O.sortIndex = ue,
            s(v, O),
            _ || R || (_ = !0,
            I || (I = !0,
            he()))),
            O
        }
        ,
        l.unstable_shouldYield = xe,
        l.unstable_wrapCallback = function(O) {
            var k = T;
            return function() {
                var H = T;
                T = k;
                try {
                    return O.apply(this, arguments)
                } finally {
                    T = H
                }
            }
        }
    }
    )(Uc)),
    Uc
}
var Dp;
function ky() {
    return Dp || (Dp = 1,
    _c.exports = Gy()),
    _c.exports
}
var Hc = {
    exports: {}
}
  , ce = {};
var _p;
function Qy() {
    if (_p)
        return ce;
    _p = 1;
    var l = Symbol.for("react.transitional.element")
      , s = Symbol.for("react.portal")
      , o = Symbol.for("react.fragment")
      , c = Symbol.for("react.strict_mode")
      , f = Symbol.for("react.profiler")
      , m = Symbol.for("react.consumer")
      , p = Symbol.for("react.context")
      , g = Symbol.for("react.forward_ref")
      , v = Symbol.for("react.suspense")
      , h = Symbol.for("react.memo")
      , y = Symbol.for("react.lazy")
      , b = Symbol.for("react.activity")
      , T = Symbol.iterator;
    function R(N) {
        return N === null || typeof N != "object" ? null : (N = T && N[T] || N["@@iterator"],
        typeof N == "function" ? N : null)
    }
    var _ = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , A = Object.assign
      , D = {};
    function Y(N, q, Z) {
        this.props = N,
        this.context = q,
        this.refs = D,
        this.updater = Z || _
    }
    Y.prototype.isReactComponent = {},
    Y.prototype.setState = function(N, q) {
        if (typeof N != "object" && typeof N != "function" && N != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, N, q, "setState")
    }
    ,
    Y.prototype.forceUpdate = function(N) {
        this.updater.enqueueForceUpdate(this, N, "forceUpdate")
    }
    ;
    function V() {}
    V.prototype = Y.prototype;
    function Q(N, q, Z) {
        this.props = N,
        this.context = q,
        this.refs = D,
        this.updater = Z || _
    }
    var K = Q.prototype = new V;
    K.constructor = Q,
    A(K, Y.prototype),
    K.isPureReactComponent = !0;
    var J = Array.isArray;
    function I() {}
    var X = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , F = Object.prototype.hasOwnProperty;
    function oe(N, q, Z) {
        var W = Z.ref;
        return {
            $$typeof: l,
            type: N,
            key: q,
            ref: W !== void 0 ? W : null,
            props: Z
        }
    }
    function xe(N, q) {
        return oe(N.type, q, N.props)
    }
    function ve(N) {
        return typeof N == "object" && N !== null && N.$$typeof === l
    }
    function he(N) {
        var q = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + N.replace(/[=:]/g, function(Z) {
            return q[Z]
        })
    }
    var je = /\/+/g;
    function P(N, q) {
        return typeof N == "object" && N !== null && N.key != null ? he("" + N.key) : q.toString(36)
    }
    function fe(N) {
        switch (N.status) {
        case "fulfilled":
            return N.value;
        case "rejected":
            throw N.reason;
        default:
            switch (typeof N.status == "string" ? N.then(I, I) : (N.status = "pending",
            N.then(function(q) {
                N.status === "pending" && (N.status = "fulfilled",
                N.value = q)
            }, function(q) {
                N.status === "pending" && (N.status = "rejected",
                N.reason = q)
            })),
            N.status) {
            case "fulfilled":
                return N.value;
            case "rejected":
                throw N.reason
            }
        }
        throw N
    }
    function O(N, q, Z, W, re) {
        var de = typeof N;
        (de === "undefined" || de === "boolean") && (N = null);
        var ae = !1;
        if (N === null)
            ae = !0;
        else
            switch (de) {
            case "bigint":
            case "string":
            case "number":
                ae = !0;
                break;
            case "object":
                switch (N.$$typeof) {
                case l:
                case s:
                    ae = !0;
                    break;
                case y:
                    return ae = N._init,
                    O(ae(N._payload), q, Z, W, re)
                }
            }
        if (ae)
            return re = re(N),
            ae = W === "" ? "." + P(N, 0) : W,
            J(re) ? (Z = "",
            ae != null && (Z = ae.replace(je, "$&/") + "/"),
            O(re, q, Z, "", function(At) {
                return At
            })) : re != null && (ve(re) && (re = xe(re, Z + (re.key == null || N && N.key === re.key ? "" : ("" + re.key).replace(je, "$&/") + "/") + ae)),
            q.push(re)),
            1;
        ae = 0;
        var Ye = W === "" ? "." : W + ":";
        if (J(N))
            for (var Re = 0; Re < N.length; Re++)
                W = N[Re],
                de = Ye + P(W, Re),
                ae += O(W, q, Z, de, re);
        else if (Re = R(N),
        typeof Re == "function")
            for (N = Re.call(N),
            Re = 0; !(W = N.next()).done; )
                W = W.value,
                de = Ye + P(W, Re++),
                ae += O(W, q, Z, de, re);
        else if (de === "object") {
            if (typeof N.then == "function")
                return O(fe(N), q, Z, W, re);
            throw q = String(N),
            Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ae
    }
    function k(N, q, Z) {
        if (N == null)
            return N;
        var W = []
          , re = 0;
        return O(N, W, "", "", function(de) {
            return q.call(Z, de, re++)
        }),
        W
    }
    function H(N) {
        if (N._status === -1) {
            var q = N._result;
            q = q(),
            q.then(function(Z) {
                (N._status === 0 || N._status === -1) && (N._status = 1,
                N._result = Z)
            }, function(Z) {
                (N._status === 0 || N._status === -1) && (N._status = 2,
                N._result = Z)
            }),
            N._status === -1 && (N._status = 0,
            N._result = q)
        }
        if (N._status === 1)
            return N._result.default;
        throw N._result
    }
    var se = typeof reportError == "function" ? reportError : function(N) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var q = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof N == "object" && N !== null && typeof N.message == "string" ? String(N.message) : String(N),
                error: N
            });
            if (!window.dispatchEvent(q))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", N);
            return
        }
        console.error(N)
    }
      , ue = {
        map: k,
        forEach: function(N, q, Z) {
            k(N, function() {
                q.apply(this, arguments)
            }, Z)
        },
        count: function(N) {
            var q = 0;
            return k(N, function() {
                q++
            }),
            q
        },
        toArray: function(N) {
            return k(N, function(q) {
                return q
            }) || []
        },
        only: function(N) {
            if (!ve(N))
                throw Error("React.Children.only expected to receive a single React element child.");
            return N
        }
    };
    return ce.Activity = b,
    ce.Children = ue,
    ce.Component = Y,
    ce.Fragment = o,
    ce.Profiler = f,
    ce.PureComponent = Q,
    ce.StrictMode = c,
    ce.Suspense = v,
    ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X,
    ce.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(N) {
            return X.H.useMemoCache(N)
        }
    },
    ce.cache = function(N) {
        return function() {
            return N.apply(null, arguments)
        }
    }
    ,
    ce.cacheSignal = function() {
        return null
    }
    ,
    ce.cloneElement = function(N, q, Z) {
        if (N == null)
            throw Error("The argument must be a React element, but you passed " + N + ".");
        var W = A({}, N.props)
          , re = N.key;
        if (q != null)
            for (de in q.key !== void 0 && (re = "" + q.key),
            q)
                !F.call(q, de) || de === "key" || de === "__self" || de === "__source" || de === "ref" && q.ref === void 0 || (W[de] = q[de]);
        var de = arguments.length - 2;
        if (de === 1)
            W.children = Z;
        else if (1 < de) {
            for (var ae = Array(de), Ye = 0; Ye < de; Ye++)
                ae[Ye] = arguments[Ye + 2];
            W.children = ae
        }
        return oe(N.type, re, W)
    }
    ,
    ce.createContext = function(N) {
        return N = {
            $$typeof: p,
            _currentValue: N,
            _currentValue2: N,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        N.Provider = N,
        N.Consumer = {
            $$typeof: m,
            _context: N
        },
        N
    }
    ,
    ce.createElement = function(N, q, Z) {
        var W, re = {}, de = null;
        if (q != null)
            for (W in q.key !== void 0 && (de = "" + q.key),
            q)
                F.call(q, W) && W !== "key" && W !== "__self" && W !== "__source" && (re[W] = q[W]);
        var ae = arguments.length - 2;
        if (ae === 1)
            re.children = Z;
        else if (1 < ae) {
            for (var Ye = Array(ae), Re = 0; Re < ae; Re++)
                Ye[Re] = arguments[Re + 2];
            re.children = Ye
        }
        if (N && N.defaultProps)
            for (W in ae = N.defaultProps,
            ae)
                re[W] === void 0 && (re[W] = ae[W]);
        return oe(N, de, re)
    }
    ,
    ce.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ce.forwardRef = function(N) {
        return {
            $$typeof: g,
            render: N
        }
    }
    ,
    ce.isValidElement = ve,
    ce.lazy = function(N) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: N
            },
            _init: H
        }
    }
    ,
    ce.memo = function(N, q) {
        return {
            $$typeof: h,
            type: N,
            compare: q === void 0 ? null : q
        }
    }
    ,
    ce.startTransition = function(N) {
        var q = X.T
          , Z = {};
        X.T = Z;
        try {
            var W = N()
              , re = X.S;
            re !== null && re(Z, W),
            typeof W == "object" && W !== null && typeof W.then == "function" && W.then(I, se)
        } catch (de) {
            se(de)
        } finally {
            q !== null && Z.types !== null && (q.types = Z.types),
            X.T = q
        }
    }
    ,
    ce.unstable_useCacheRefresh = function() {
        return X.H.useCacheRefresh()
    }
    ,
    ce.use = function(N) {
        return X.H.use(N)
    }
    ,
    ce.useActionState = function(N, q, Z) {
        return X.H.useActionState(N, q, Z)
    }
    ,
    ce.useCallback = function(N, q) {
        return X.H.useCallback(N, q)
    }
    ,
    ce.useContext = function(N) {
        return X.H.useContext(N)
    }
    ,
    ce.useDebugValue = function() {}
    ,
    ce.useDeferredValue = function(N, q) {
        return X.H.useDeferredValue(N, q)
    }
    ,
    ce.useEffect = function(N, q) {
        return X.H.useEffect(N, q)
    }
    ,
    ce.useEffectEvent = function(N) {
        return X.H.useEffectEvent(N)
    }
    ,
    ce.useId = function() {
        return X.H.useId()
    }
    ,
    ce.useImperativeHandle = function(N, q, Z) {
        return X.H.useImperativeHandle(N, q, Z)
    }
    ,
    ce.useInsertionEffect = function(N, q) {
        return X.H.useInsertionEffect(N, q)
    }
    ,
    ce.useLayoutEffect = function(N, q) {
        return X.H.useLayoutEffect(N, q)
    }
    ,
    ce.useMemo = function(N, q) {
        return X.H.useMemo(N, q)
    }
    ,
    ce.useOptimistic = function(N, q) {
        return X.H.useOptimistic(N, q)
    }
    ,
    ce.useReducer = function(N, q, Z) {
        return X.H.useReducer(N, q, Z)
    }
    ,
    ce.useRef = function(N) {
        return X.H.useRef(N)
    }
    ,
    ce.useState = function(N) {
        return X.H.useState(N)
    }
    ,
    ce.useSyncExternalStore = function(N, q, Z) {
        return X.H.useSyncExternalStore(N, q, Z)
    }
    ,
    ce.useTransition = function() {
        return X.H.useTransition()
    }
    ,
    ce.version = "19.2.3",
    ce
}
var Up;
function er() {
    return Up || (Up = 1,
    Hc.exports = Qy()),
    Hc.exports
}
var Lc = {
    exports: {}
}
  , at = {};
var Hp;
function Vy() {
    if (Hp)
        return at;
    Hp = 1;
    var l = er();
    function s(v) {
        var h = "https://react.dev/errors/" + v;
        if (1 < arguments.length) {
            h += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++)
                h += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + v + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o() {}
    var c = {
        d: {
            f: o,
            r: function() {
                throw Error(s(522))
            },
            D: o,
            C: o,
            L: o,
            m: o,
            X: o,
            S: o,
            M: o
        },
        p: 0,
        findDOMNode: null
    }
      , f = Symbol.for("react.portal");
    function m(v, h, y) {
        var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: f,
            key: b == null ? null : "" + b,
            children: v,
            containerInfo: h,
            implementation: y
        }
    }
    var p = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function g(v, h) {
        if (v === "font")
            return "";
        if (typeof h == "string")
            return h === "use-credentials" ? h : ""
    }
    return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c,
    at.createPortal = function(v, h) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
            throw Error(s(299));
        return m(v, h, null, y)
    }
    ,
    at.flushSync = function(v) {
        var h = p.T
          , y = c.p;
        try {
            if (p.T = null,
            c.p = 2,
            v)
                return v()
        } finally {
            p.T = h,
            c.p = y,
            c.d.f()
        }
    }
    ,
    at.preconnect = function(v, h) {
        typeof v == "string" && (h ? (h = h.crossOrigin,
        h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null,
        c.d.C(v, h))
    }
    ,
    at.prefetchDNS = function(v) {
        typeof v == "string" && c.d.D(v)
    }
    ,
    at.preinit = function(v, h) {
        if (typeof v == "string" && h && typeof h.as == "string") {
            var y = h.as
              , b = g(y, h.crossOrigin)
              , T = typeof h.integrity == "string" ? h.integrity : void 0
              , R = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
            y === "style" ? c.d.S(v, typeof h.precedence == "string" ? h.precedence : void 0, {
                crossOrigin: b,
                integrity: T,
                fetchPriority: R
            }) : y === "script" && c.d.X(v, {
                crossOrigin: b,
                integrity: T,
                fetchPriority: R,
                nonce: typeof h.nonce == "string" ? h.nonce : void 0
            })
        }
    }
    ,
    at.preinitModule = function(v, h) {
        if (typeof v == "string")
            if (typeof h == "object" && h !== null) {
                if (h.as == null || h.as === "script") {
                    var y = g(h.as, h.crossOrigin);
                    c.d.M(v, {
                        crossOrigin: y,
                        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                        nonce: typeof h.nonce == "string" ? h.nonce : void 0
                    })
                }
            } else
                h == null && c.d.M(v)
    }
    ,
    at.preload = function(v, h) {
        if (typeof v == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
            var y = h.as
              , b = g(y, h.crossOrigin);
            c.d.L(v, y, {
                crossOrigin: b,
                integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                nonce: typeof h.nonce == "string" ? h.nonce : void 0,
                type: typeof h.type == "string" ? h.type : void 0,
                fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
                referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
                imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
                imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
                media: typeof h.media == "string" ? h.media : void 0
            })
        }
    }
    ,
    at.preloadModule = function(v, h) {
        if (typeof v == "string")
            if (h) {
                var y = g(h.as, h.crossOrigin);
                c.d.m(v, {
                    as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
                    crossOrigin: y,
                    integrity: typeof h.integrity == "string" ? h.integrity : void 0
                })
            } else
                c.d.m(v)
    }
    ,
    at.requestFormReset = function(v) {
        c.d.r(v)
    }
    ,
    at.unstable_batchedUpdates = function(v, h) {
        return v(h)
    }
    ,
    at.useFormState = function(v, h, y) {
        return p.H.useFormState(v, h, y)
    }
    ,
    at.useFormStatus = function() {
        return p.H.useHostTransitionStatus()
    }
    ,
    at.version = "19.2.3",
    at
}
var Lp;
function zh() {
    if (Lp)
        return Lc.exports;
    Lp = 1;
    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
            } catch (s) {
                console.error(s)
            }
    }
    return l(),
    Lc.exports = Vy(),
    Lc.exports
}
var qp;
function Xy() {
    if (qp)
        return ds;
    qp = 1;
    var l = ky()
      , s = er()
      , o = zh();
    function c(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function f(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function m(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function p(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function g(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function v(e) {
        if (m(e) !== e)
            throw Error(c(188))
    }
    function h(e) {
        var t = e.alternate;
        if (!t) {
            if (t = m(e),
            t === null)
                throw Error(c(188));
            return t !== e ? null : e
        }
        for (var n = e, a = t; ; ) {
            var i = n.return;
            if (i === null)
                break;
            var r = i.alternate;
            if (r === null) {
                if (a = i.return,
                a !== null) {
                    n = a;
                    continue
                }
                break
            }
            if (i.child === r.child) {
                for (r = i.child; r; ) {
                    if (r === n)
                        return v(i),
                        e;
                    if (r === a)
                        return v(i),
                        t;
                    r = r.sibling
                }
                throw Error(c(188))
            }
            if (n.return !== a.return)
                n = i,
                a = r;
            else {
                for (var d = !1, x = i.child; x; ) {
                    if (x === n) {
                        d = !0,
                        n = i,
                        a = r;
                        break
                    }
                    if (x === a) {
                        d = !0,
                        a = i,
                        n = r;
                        break
                    }
                    x = x.sibling
                }
                if (!d) {
                    for (x = r.child; x; ) {
                        if (x === n) {
                            d = !0,
                            n = r,
                            a = i;
                            break
                        }
                        if (x === a) {
                            d = !0,
                            a = r,
                            n = i;
                            break
                        }
                        x = x.sibling
                    }
                    if (!d)
                        throw Error(c(189))
                }
            }
            if (n.alternate !== a)
                throw Error(c(190))
        }
        if (n.tag !== 3)
            throw Error(c(188));
        return n.stateNode.current === n ? e : t
    }
    function y(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = y(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var b = Object.assign
      , T = Symbol.for("react.element")
      , R = Symbol.for("react.transitional.element")
      , _ = Symbol.for("react.portal")
      , A = Symbol.for("react.fragment")
      , D = Symbol.for("react.strict_mode")
      , Y = Symbol.for("react.profiler")
      , V = Symbol.for("react.consumer")
      , Q = Symbol.for("react.context")
      , K = Symbol.for("react.forward_ref")
      , J = Symbol.for("react.suspense")
      , I = Symbol.for("react.suspense_list")
      , X = Symbol.for("react.memo")
      , F = Symbol.for("react.lazy")
      , oe = Symbol.for("react.activity")
      , xe = Symbol.for("react.memo_cache_sentinel")
      , ve = Symbol.iterator;
    function he(e) {
        return e === null || typeof e != "object" ? null : (e = ve && e[ve] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var je = Symbol.for("react.client.reference");
    function P(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === je ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case A:
            return "Fragment";
        case Y:
            return "Profiler";
        case D:
            return "StrictMode";
        case J:
            return "Suspense";
        case I:
            return "SuspenseList";
        case oe:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case _:
                return "Portal";
            case Q:
                return e.displayName || "Context";
            case V:
                return (e._context.displayName || "Context") + ".Consumer";
            case K:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case X:
                return t = e.displayName || null,
                t !== null ? t : P(e.type) || "Memo";
            case F:
                t = e._payload,
                e = e._init;
                try {
                    return P(e(t))
                } catch {}
            }
        return null
    }
    var fe = Array.isArray
      , O = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , k = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , H = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , se = []
      , ue = -1;
    function N(e) {
        return {
            current: e
        }
    }
    function q(e) {
        0 > ue || (e.current = se[ue],
        se[ue] = null,
        ue--)
    }
    function Z(e, t) {
        ue++,
        se[ue] = e.current,
        e.current = t
    }
    var W = N(null)
      , re = N(null)
      , de = N(null)
      , ae = N(null);
    function Ye(e, t) {
        switch (Z(de, t),
        Z(re, e),
        Z(W, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? $m(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = $m(t),
                e = ep(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        q(W),
        Z(W, e)
    }
    function Re() {
        q(W),
        q(re),
        q(de)
    }
    function At(e) {
        e.memoizedState !== null && Z(ae, e);
        var t = W.current
          , n = ep(t, e.type);
        t !== n && (Z(re, e),
        Z(W, n))
    }
    function Xt(e) {
        re.current === e && (q(W),
        q(re)),
        ae.current === e && (q(ae),
        rs._currentValue = H)
    }
    var Zt, na;
    function aa(e) {
        if (Zt === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                Zt = t && t[1] || "",
                na = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Zt + e + na
    }
    var pr = !1;
    function hr(e, t) {
        if (!e || pr)
            return "";
        pr = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var G = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(G.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(G, [])
                                } catch (U) {
                                    var M = U
                                }
                                Reflect.construct(e, [], G)
                            } else {
                                try {
                                    G.call()
                                } catch (U) {
                                    M = U
                                }
                                e.call(G.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (U) {
                                M = U
                            }
                            (G = e()) && typeof G.catch == "function" && G.catch(function() {})
                        }
                    } catch (U) {
                        if (U && M && typeof U.stack == "string")
                            return [U.stack, M.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            i && i.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var r = a.DetermineComponentFrameRoot()
              , d = r[0]
              , x = r[1];
            if (d && x) {
                var w = d.split(`
`)
                  , z = x.split(`
`);
                for (i = a = 0; a < w.length && !w[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; i < z.length && !z[i].includes("DetermineComponentFrameRoot"); )
                    i++;
                if (a === w.length || i === z.length)
                    for (a = w.length - 1,
                    i = z.length - 1; 1 <= a && 0 <= i && w[a] !== z[i]; )
                        i--;
                for (; 1 <= a && 0 <= i; a--,
                i--)
                    if (w[a] !== z[i]) {
                        if (a !== 1 || i !== 1)
                            do
                                if (a--,
                                i--,
                                0 > i || w[a] !== z[i]) {
                                    var L = `
` + w[a].replace(" at new ", " at ");
                                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)),
                                    L
                                }
                            while (1 <= a && 0 <= i);
                        break
                    }
            }
        } finally {
            pr = !1,
            Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? aa(n) : ""
    }
    function hg(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return aa(e.type);
        case 16:
            return aa("Lazy");
        case 13:
            return e.child !== t && t !== null ? aa("Suspense Fallback") : aa("Suspense");
        case 19:
            return aa("SuspenseList");
        case 0:
        case 15:
            return hr(e.type, !1);
        case 11:
            return hr(e.type.render, !1);
        case 1:
            return hr(e.type, !0);
        case 31:
            return aa("Activity");
        default:
            return ""
        }
    }
    function Cu(e) {
        try {
            var t = ""
              , n = null;
            do
                t += hg(e, n),
                n = e,
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var xr = Object.prototype.hasOwnProperty
      , gr = l.unstable_scheduleCallback
      , vr = l.unstable_cancelCallback
      , xg = l.unstable_shouldYield
      , gg = l.unstable_requestPaint
      , pt = l.unstable_now
      , vg = l.unstable_getCurrentPriorityLevel
      , Ru = l.unstable_ImmediatePriority
      , zu = l.unstable_UserBlockingPriority
      , Ss = l.unstable_NormalPriority
      , yg = l.unstable_LowPriority
      , Mu = l.unstable_IdlePriority
      , bg = l.log
      , wg = l.unstable_setDisableYieldValue
      , yl = null
      , ht = null;
    function En(e) {
        if (typeof bg == "function" && wg(e),
        ht && typeof ht.setStrictMode == "function")
            try {
                ht.setStrictMode(yl, e)
            } catch {}
    }
    var xt = Math.clz32 ? Math.clz32 : jg
      , Sg = Math.log
      , Ng = Math.LN2;
    function jg(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Sg(e) / Ng | 0) | 0
    }
    var Ns = 256
      , js = 262144
      , Es = 4194304;
    function la(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
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
            return 64;
        case 128:
            return 128;
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
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function Ts(e, t, n) {
        var a = e.pendingLanes;
        if (a === 0)
            return 0;
        var i = 0
          , r = e.suspendedLanes
          , d = e.pingedLanes;
        e = e.warmLanes;
        var x = a & 134217727;
        return x !== 0 ? (a = x & ~r,
        a !== 0 ? i = la(a) : (d &= x,
        d !== 0 ? i = la(d) : n || (n = x & ~e,
        n !== 0 && (i = la(n))))) : (x = a & ~r,
        x !== 0 ? i = la(x) : d !== 0 ? i = la(d) : n || (n = a & ~e,
        n !== 0 && (i = la(n)))),
        i === 0 ? 0 : t !== 0 && t !== i && (t & r) === 0 && (r = i & -i,
        n = t & -t,
        r >= n || r === 32 && (n & 4194048) !== 0) ? t : i
    }
    function bl(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Eg(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
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
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Du() {
        var e = Es;
        return Es <<= 1,
        (Es & 62914560) === 0 && (Es = 4194304),
        e
    }
    function yr(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function wl(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Tg(e, t, n, a, i, r) {
        var d = e.pendingLanes;
        e.pendingLanes = n,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= n,
        e.entangledLanes &= n,
        e.errorRecoveryDisabledLanes &= n,
        e.shellSuspendCounter = 0;
        var x = e.entanglements
          , w = e.expirationTimes
          , z = e.hiddenUpdates;
        for (n = d & ~n; 0 < n; ) {
            var L = 31 - xt(n)
              , G = 1 << L;
            x[L] = 0,
            w[L] = -1;
            var M = z[L];
            if (M !== null)
                for (z[L] = null,
                L = 0; L < M.length; L++) {
                    var U = M[L];
                    U !== null && (U.lane &= -536870913)
                }
            n &= ~G
        }
        a !== 0 && _u(e, a, 0),
        r !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(d & ~t))
    }
    function _u(e, t, n) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var a = 31 - xt(t);
        e.entangledLanes |= t,
        e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930
    }
    function Uu(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var a = 31 - xt(n)
              , i = 1 << a;
            i & t | e[a] & t && (e[a] |= t),
            n &= ~i
        }
    }
    function Hu(e, t) {
        var n = t & -t;
        return n = (n & 42) !== 0 ? 1 : br(n),
        (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    }
    function br(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
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
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function wr(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Lu() {
        var e = k.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : Np(e.type))
    }
    function qu(e, t) {
        var n = k.p;
        try {
            return k.p = e,
            t()
        } finally {
            k.p = n
        }
    }
    var Tn = Math.random().toString(36).slice(2)
      , Pe = "__reactFiber$" + Tn
      , it = "__reactProps$" + Tn
      , Ea = "__reactContainer$" + Tn
      , Sr = "__reactEvents$" + Tn
      , Ag = "__reactListeners$" + Tn
      , Og = "__reactHandles$" + Tn
      , Bu = "__reactResources$" + Tn
      , Sl = "__reactMarker$" + Tn;
    function Nr(e) {
        delete e[Pe],
        delete e[it],
        delete e[Sr],
        delete e[Ag],
        delete e[Og]
    }
    function Ta(e) {
        var t = e[Pe];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[Ea] || n[Pe]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = rp(e); e !== null; ) {
                        if (n = e[Pe])
                            return n;
                        e = rp(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function Aa(e) {
        if (e = e[Pe] || e[Ea]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function Nl(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(c(33))
    }
    function Oa(e) {
        var t = e[Bu];
        return t || (t = e[Bu] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function We(e) {
        e[Sl] = !0
    }
    var Yu = new Set
      , Gu = {};
    function sa(e, t) {
        Ca(e, t),
        Ca(e + "Capture", t)
    }
    function Ca(e, t) {
        for (Gu[e] = t,
        e = 0; e < t.length; e++)
            Yu.add(t[e])
    }
    var Cg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , ku = {}
      , Qu = {};
    function Rg(e) {
        return xr.call(Qu, e) ? !0 : xr.call(ku, e) ? !1 : Cg.test(e) ? Qu[e] = !0 : (ku[e] = !0,
        !1)
    }
    function As(e, t, n) {
        if (Rg(t))
            if (n === null)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + n)
            }
    }
    function Os(e, t, n) {
        if (n === null)
            e.removeAttribute(t);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + n)
        }
    }
    function tn(e, t, n, a) {
        if (a === null)
            e.removeAttribute(n);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(n);
                return
            }
            e.setAttributeNS(t, n, "" + a)
        }
    }
    function Ot(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Vu(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function zg(e, t, n) {
        var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var i = a.get
              , r = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return i.call(this)
                },
                set: function(d) {
                    n = "" + d,
                    r.call(this, d)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(d) {
                    n = "" + d
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function jr(e) {
        if (!e._valueTracker) {
            var t = Vu(e) ? "checked" : "value";
            e._valueTracker = zg(e, t, "" + e[t])
        }
    }
    function Xu(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , a = "";
        return e && (a = Vu(e) ? e.checked ? "true" : "false" : e.value),
        e = a,
        e !== n ? (t.setValue(e),
        !0) : !1
    }
    function f2(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Mg = /[\n"\\]/g;
    function Ct(e) {
        return e.replace(Mg, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Er(e, t, n, a, i, r, d, x) {
        e.name = "",
        d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"),
        t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ot(t)) : e.value !== "" + Ot(t) && (e.value = "" + Ot(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"),
        t != null ? Tr(e, d, Ot(t)) : n != null ? Tr(e, d, Ot(n)) : a != null && e.removeAttribute("value"),
        i == null && r != null && (e.defaultChecked = !!r),
        i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"),
        x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? e.name = "" + Ot(x) : e.removeAttribute("name")
    }
    function Zu(e, t, n, a, i, r, d, x) {
        if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r),
        t != null || n != null) {
            if (!(r !== "submit" && r !== "reset" || t != null)) {
                jr(e);
                return
            }
            n = n != null ? "" + Ot(n) : "",
            t = t != null ? "" + Ot(t) : n,
            x || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        a = a ?? i,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        e.checked = x ? e.checked : !!a,
        e.defaultChecked = !!a,
        d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d),
        jr(e)
    }
    function Tr(e, t, n) {
        t === "number" && Cs(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }
    function Ra(e, t, n, a) {
        if (e = e.options,
        t) {
            t = {};
            for (var i = 0; i < n.length; i++)
                t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                i = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && a && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + Ot(n),
            t = null,
            i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    e[i].selected = !0,
                    a && (e[i].defaultSelected = !0);
                    return
                }
                t !== null || e[i].disabled || (t = e[i])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Ku(e, t, n) {
        if (t != null && (t = "" + Ot(t),
        t !== e.value && (e.value = t),
        n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n != null ? "" + Ot(n) : ""
    }
    function Ju(e, t, n, a) {
        if (t == null) {
            if (a != null) {
                if (n != null)
                    throw Error(c(92));
                if (fe(a)) {
                    if (1 < a.length)
                        throw Error(c(93));
                    a = a[0]
                }
                n = a
            }
            n == null && (n = ""),
            t = n
        }
        n = Ot(t),
        e.defaultValue = n,
        a = e.textContent,
        a === n && a !== "" && a !== null && (e.value = a),
        jr(e)
    }
    function za(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Dg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Fu(e, t, n) {
        var a = t.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Dg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }
    function Wu(e, t, n) {
        if (t != null && typeof t != "object")
            throw Error(c(62));
        if (e = e.style,
        n != null) {
            for (var a in n)
                !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var i in t)
                a = t[i],
                t.hasOwnProperty(i) && n[i] !== a && Fu(e, i, a)
        } else
            for (var r in t)
                t.hasOwnProperty(r) && Fu(e, r, t[r])
    }
    function Ar(e) {
        if (e.indexOf("-") === -1)
            return !1;
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
            return !0
        }
    }
    var _g = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , Ug = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Rs(e) {
        return Ug.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function nn() {}
    var Or = null;
    function Cr(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Ma = null
      , Da = null;
    function Iu(e) {
        var t = Aa(e);
        if (t && (e = t.stateNode)) {
            var n = e[it] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (Er(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                t = n.name,
                n.type === "radio" && t != null) {
                    for (n = e; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + Ct("" + t) + '"][type="radio"]'),
                    t = 0; t < n.length; t++) {
                        var a = n[t];
                        if (a !== e && a.form === e.form) {
                            var i = a[it] || null;
                            if (!i)
                                throw Error(c(90));
                            Er(a, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name)
                        }
                    }
                    for (t = 0; t < n.length; t++)
                        a = n[t],
                        a.form === e.form && Xu(a)
                }
                break e;
            case "textarea":
                Ku(e, n.value, n.defaultValue);
                break e;
            case "select":
                t = n.value,
                t != null && Ra(e, !!n.multiple, t, !1)
            }
        }
    }
    var Rr = !1;
    function Pu(e, t, n) {
        if (Rr)
            return e(t, n);
        Rr = !0;
        try {
            var a = e(t);
            return a
        } finally {
            if (Rr = !1,
            (Ma !== null || Da !== null) && (gi(),
            Ma && (t = Ma,
            e = Da,
            Da = Ma = null,
            Iu(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Iu(e[t])
        }
    }
    function jl(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var a = n[it] || null;
        if (a === null)
            return null;
        n = a[t];
        e: switch (t) {
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
            (a = !a.disabled) || (e = e.type,
            a = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !a;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(c(231, t, typeof n));
        return n
    }
    var an = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , zr = !1;
    if (an)
        try {
            var El = {};
            Object.defineProperty(El, "passive", {
                get: function() {
                    zr = !0
                }
            }),
            window.addEventListener("test", El, El),
            window.removeEventListener("test", El, El)
        } catch {
            zr = !1
        }
    var An = null
      , Mr = null
      , zs = null;
    function $u() {
        if (zs)
            return zs;
        var e, t = Mr, n = t.length, a, i = "value"in An ? An.value : An.textContent, r = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++)
            ;
        var d = n - e;
        for (a = 1; a <= d && t[n - a] === i[r - a]; a++)
            ;
        return zs = i.slice(e, 1 < a ? 1 - a : void 0)
    }
    function Ms(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Ds() {
        return !0
    }
    function ef() {
        return !1
    }
    function rt(e) {
        function t(n, a, i, r, d) {
            this._reactName = n,
            this._targetInst = i,
            this.type = a,
            this.nativeEvent = r,
            this.target = d,
            this.currentTarget = null;
            for (var x in e)
                e.hasOwnProperty(x) && (n = e[x],
                this[x] = n ? n(r) : r[x]);
            return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Ds : ef,
            this.isPropagationStopped = ef,
            this
        }
        return b(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Ds)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Ds)
            },
            persist: function() {},
            isPersistent: Ds
        }),
        t
    }
    var ia = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, _s = rt(ia), Tl = b({}, ia, {
        view: 0,
        detail: 0
    }), Hg = rt(Tl), Dr, _r, Al, Us = b({}, Tl, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Hr,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Al && (Al && e.type === "mousemove" ? (Dr = e.screenX - Al.screenX,
            _r = e.screenY - Al.screenY) : _r = Dr = 0,
            Al = e),
            Dr)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : _r
        }
    }), tf = rt(Us), Lg = b({}, Us, {
        dataTransfer: 0
    }), qg = rt(Lg), Bg = b({}, Tl, {
        relatedTarget: 0
    }), Ur = rt(Bg), Yg = b({}, ia, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Gg = rt(Yg), kg = b({}, ia, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), Qg = rt(kg), Vg = b({}, ia, {
        data: 0
    }), nf = rt(Vg), Xg = {
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
    }, Zg = {
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
    }, Kg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Jg(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Kg[e]) ? !!t[e] : !1
    }
    function Hr() {
        return Jg
    }
    var Fg = b({}, Tl, {
        key: function(e) {
            if (e.key) {
                var t = Xg[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Ms(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zg[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Hr,
        charCode: function(e) {
            return e.type === "keypress" ? Ms(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ms(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Wg = rt(Fg)
      , Ig = b({}, Us, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , af = rt(Ig)
      , Pg = b({}, Tl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Hr
    })
      , $g = rt(Pg)
      , ev = b({}, ia, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , tv = rt(ev)
      , nv = b({}, Us, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , av = rt(nv)
      , lv = b({}, ia, {
        newState: 0,
        oldState: 0
    })
      , sv = rt(lv)
      , iv = [9, 13, 27, 32]
      , Lr = an && "CompositionEvent"in window
      , Ol = null;
    an && "documentMode"in document && (Ol = document.documentMode);
    var rv = an && "TextEvent"in window && !Ol
      , lf = an && (!Lr || Ol && 8 < Ol && 11 >= Ol)
      , sf = " "
      , rf = !1;
    function of(e, t) {
        switch (e) {
        case "keyup":
            return iv.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function cf(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var _a = !1;
    function ov(e, t) {
        switch (e) {
        case "compositionend":
            return cf(t);
        case "keypress":
            return t.which !== 32 ? null : (rf = !0,
            sf);
        case "textInput":
            return e = t.data,
            e === sf && rf ? null : e;
        default:
            return null
        }
    }
    function cv(e, t) {
        if (_a)
            return e === "compositionend" || !Lr && of(e, t) ? (e = $u(),
            zs = Mr = An = null,
            _a = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return lf && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var uv = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function uf(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!uv[e.type] : t === "textarea"
    }
    function ff(e, t, n, a) {
        Ma ? Da ? Da.push(a) : Da = [a] : Ma = a,
        t = ji(t, "onChange"),
        0 < t.length && (n = new _s("onChange","change",null,n,a),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var Cl = null
      , Rl = null;
    function fv(e) {
        Km(e, 0)
    }
    function Hs(e) {
        var t = Nl(e);
        if (Xu(t))
            return e
    }
    function df(e, t) {
        if (e === "change")
            return t
    }
    var mf = !1;
    if (an) {
        var qr;
        if (an) {
            var Br = "oninput"in document;
            if (!Br) {
                var pf = document.createElement("div");
                pf.setAttribute("oninput", "return;"),
                Br = typeof pf.oninput == "function"
            }
            qr = Br
        } else
            qr = !1;
        mf = qr && (!document.documentMode || 9 < document.documentMode)
    }
    function hf() {
        Cl && (Cl.detachEvent("onpropertychange", xf),
        Rl = Cl = null)
    }
    function xf(e) {
        if (e.propertyName === "value" && Hs(Rl)) {
            var t = [];
            ff(t, Rl, e, Cr(e)),
            Pu(fv, t)
        }
    }
    function dv(e, t, n) {
        e === "focusin" ? (hf(),
        Cl = t,
        Rl = n,
        Cl.attachEvent("onpropertychange", xf)) : e === "focusout" && hf()
    }
    function mv(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Hs(Rl)
    }
    function pv(e, t) {
        if (e === "click")
            return Hs(t)
    }
    function hv(e, t) {
        if (e === "input" || e === "change")
            return Hs(t)
    }
    function xv(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var gt = typeof Object.is == "function" ? Object.is : xv;
    function zl(e, t) {
        if (gt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
          , a = Object.keys(t);
        if (n.length !== a.length)
            return !1;
        for (a = 0; a < n.length; a++) {
            var i = n[a];
            if (!xr.call(t, i) || !gt(e[i], t[i]))
                return !1
        }
        return !0
    }
    function gf(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function vf(e, t) {
        var n = gf(e);
        e = 0;
        for (var a; n; ) {
            if (n.nodeType === 3) {
                if (a = e + n.textContent.length,
                e <= t && a >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = a
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = gf(n)
        }
    }
    function yf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function bf(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Cs(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = Cs(e.document)
        }
        return t
    }
    function Yr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var gv = an && "documentMode"in document && 11 >= document.documentMode
      , Ua = null
      , Gr = null
      , Ml = null
      , kr = !1;
    function wf(e, t, n) {
        var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        kr || Ua == null || Ua !== Cs(a) || (a = Ua,
        "selectionStart"in a && Yr(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Ml && zl(Ml, a) || (Ml = a,
        a = ji(Gr, "onSelect"),
        0 < a.length && (t = new _s("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: a
        }),
        t.target = Ua)))
    }
    function ra(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var Ha = {
        animationend: ra("Animation", "AnimationEnd"),
        animationiteration: ra("Animation", "AnimationIteration"),
        animationstart: ra("Animation", "AnimationStart"),
        transitionrun: ra("Transition", "TransitionRun"),
        transitionstart: ra("Transition", "TransitionStart"),
        transitioncancel: ra("Transition", "TransitionCancel"),
        transitionend: ra("Transition", "TransitionEnd")
    }
      , Qr = {}
      , Sf = {};
    an && (Sf = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ha.animationend.animation,
    delete Ha.animationiteration.animation,
    delete Ha.animationstart.animation),
    "TransitionEvent"in window || delete Ha.transitionend.transition);
    function oa(e) {
        if (Qr[e])
            return Qr[e];
        if (!Ha[e])
            return e;
        var t = Ha[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Sf)
                return Qr[e] = t[n];
        return e
    }
    var Nf = oa("animationend")
      , jf = oa("animationiteration")
      , Ef = oa("animationstart")
      , vv = oa("transitionrun")
      , yv = oa("transitionstart")
      , bv = oa("transitioncancel")
      , Tf = oa("transitionend")
      , Af = new Map
      , Vr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Vr.push("scrollEnd");
    function qt(e, t) {
        Af.set(e, t),
        sa(t, [e])
    }
    var Ls = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , Rt = []
      , La = 0
      , Xr = 0;
    function qs() {
        for (var e = La, t = Xr = La = 0; t < e; ) {
            var n = Rt[t];
            Rt[t++] = null;
            var a = Rt[t];
            Rt[t++] = null;
            var i = Rt[t];
            Rt[t++] = null;
            var r = Rt[t];
            if (Rt[t++] = null,
            a !== null && i !== null) {
                var d = a.pending;
                d === null ? i.next = i : (i.next = d.next,
                d.next = i),
                a.pending = i
            }
            r !== 0 && Of(n, i, r)
        }
    }
    function Bs(e, t, n, a) {
        Rt[La++] = e,
        Rt[La++] = t,
        Rt[La++] = n,
        Rt[La++] = a,
        Xr |= a,
        e.lanes |= a,
        e = e.alternate,
        e !== null && (e.lanes |= a)
    }
    function Zr(e, t, n, a) {
        return Bs(e, t, n, a),
        Ys(e)
    }
    function ca(e, t) {
        return Bs(e, null, null, t),
        Ys(e)
    }
    function Of(e, t, n) {
        e.lanes |= n;
        var a = e.alternate;
        a !== null && (a.lanes |= n);
        for (var i = !1, r = e.return; r !== null; )
            r.childLanes |= n,
            a = r.alternate,
            a !== null && (a.childLanes |= n),
            r.tag === 22 && (e = r.stateNode,
            e === null || e._visibility & 1 || (i = !0)),
            e = r,
            r = r.return;
        return e.tag === 3 ? (r = e.stateNode,
        i && t !== null && (i = 31 - xt(n),
        e = r.hiddenUpdates,
        a = e[i],
        a === null ? e[i] = [t] : a.push(t),
        t.lane = n | 536870912),
        r) : null
    }
    function Ys(e) {
        if (50 < es)
            throw es = 0,
            nc = null,
            Error(c(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var qa = {};
    function wv(e, t, n, a) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function vt(e, t, n, a) {
        return new wv(e,t,n,a)
    }
    function Kr(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function ln(e, t) {
        var n = e.alternate;
        return n === null ? (n = vt(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 65011712,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n.refCleanup = e.refCleanup,
        n
    }
    function Cf(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = n.childLanes,
        e.lanes = n.lanes,
        e.child = n.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = n.memoizedProps,
        e.memoizedState = n.memoizedState,
        e.updateQueue = n.updateQueue,
        e.type = n.type,
        t = n.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Gs(e, t, n, a, i, r) {
        var d = 0;
        if (a = e,
        typeof e == "function")
            Kr(e) && (d = 1);
        else if (typeof e == "string")
            d = Ty(e, n, W.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case oe:
                return e = vt(31, n, t, i),
                e.elementType = oe,
                e.lanes = r,
                e;
            case A:
                return ua(n.children, i, r, t);
            case D:
                d = 8,
                i |= 24;
                break;
            case Y:
                return e = vt(12, n, t, i | 2),
                e.elementType = Y,
                e.lanes = r,
                e;
            case J:
                return e = vt(13, n, t, i),
                e.elementType = J,
                e.lanes = r,
                e;
            case I:
                return e = vt(19, n, t, i),
                e.elementType = I,
                e.lanes = r,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case Q:
                        d = 10;
                        break e;
                    case V:
                        d = 9;
                        break e;
                    case K:
                        d = 11;
                        break e;
                    case X:
                        d = 14;
                        break e;
                    case F:
                        d = 16,
                        a = null;
                        break e
                    }
                d = 29,
                n = Error(c(130, e === null ? "null" : typeof e, "")),
                a = null
            }
        return t = vt(d, n, t, i),
        t.elementType = e,
        t.type = a,
        t.lanes = r,
        t
    }
    function ua(e, t, n, a) {
        return e = vt(7, e, a, t),
        e.lanes = n,
        e
    }
    function Jr(e, t, n) {
        return e = vt(6, e, null, t),
        e.lanes = n,
        e
    }
    function Rf(e) {
        var t = vt(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function Fr(e, t, n) {
        return t = vt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var zf = new WeakMap;
    function zt(e, t) {
        if (typeof e == "object" && e !== null) {
            var n = zf.get(e);
            return n !== void 0 ? n : (t = {
                value: e,
                source: t,
                stack: Cu(t)
            },
            zf.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: Cu(t)
        }
    }
    var Ba = []
      , Ya = 0
      , ks = null
      , Dl = 0
      , Mt = []
      , Dt = 0
      , On = null
      , Kt = 1
      , Jt = "";
    function sn(e, t) {
        Ba[Ya++] = Dl,
        Ba[Ya++] = ks,
        ks = e,
        Dl = t
    }
    function Mf(e, t, n) {
        Mt[Dt++] = Kt,
        Mt[Dt++] = Jt,
        Mt[Dt++] = On,
        On = e;
        var a = Kt;
        e = Jt;
        var i = 32 - xt(a) - 1;
        a &= ~(1 << i),
        n += 1;
        var r = 32 - xt(t) + i;
        if (30 < r) {
            var d = i - i % 5;
            r = (a & (1 << d) - 1).toString(32),
            a >>= d,
            i -= d,
            Kt = 1 << 32 - xt(t) + i | n << i | a,
            Jt = r + e
        } else
            Kt = 1 << r | n << i | a,
            Jt = e
    }
    function Wr(e) {
        e.return !== null && (sn(e, 1),
        Mf(e, 1, 0))
    }
    function Ir(e) {
        for (; e === ks; )
            ks = Ba[--Ya],
            Ba[Ya] = null,
            Dl = Ba[--Ya],
            Ba[Ya] = null;
        for (; e === On; )
            On = Mt[--Dt],
            Mt[Dt] = null,
            Jt = Mt[--Dt],
            Mt[Dt] = null,
            Kt = Mt[--Dt],
            Mt[Dt] = null
    }
    function Df(e, t) {
        Mt[Dt++] = Kt,
        Mt[Dt++] = Jt,
        Mt[Dt++] = On,
        Kt = t.id,
        Jt = t.overflow,
        On = e
    }
    var $e = null
      , Ue = null
      , Ne = !1
      , Cn = null
      , _t = !1
      , Pr = Error(c(519));
    function Rn(e) {
        var t = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw _l(zt(t, e)),
        Pr
    }
    function _f(e) {
        var t = e.stateNode
          , n = e.type
          , a = e.memoizedProps;
        switch (t[Pe] = e,
        t[it] = a,
        n) {
        case "dialog":
            be("cancel", t),
            be("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            be("load", t);
            break;
        case "video":
        case "audio":
            for (n = 0; n < ns.length; n++)
                be(ns[n], t);
            break;
        case "source":
            be("error", t);
            break;
        case "img":
        case "image":
        case "link":
            be("error", t),
            be("load", t);
            break;
        case "details":
            be("toggle", t);
            break;
        case "input":
            be("invalid", t),
            Zu(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            be("invalid", t);
            break;
        case "textarea":
            be("invalid", t),
            Ju(t, a.value, a.defaultValue, a.children)
        }
        n = a.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Im(t.textContent, n) ? (a.popover != null && (be("beforetoggle", t),
        be("toggle", t)),
        a.onScroll != null && be("scroll", t),
        a.onScrollEnd != null && be("scrollend", t),
        a.onClick != null && (t.onclick = nn),
        t = !0) : t = !1,
        t || Rn(e, !0)
    }
    function Uf(e) {
        for ($e = e.return; $e; )
            switch ($e.tag) {
            case 5:
            case 31:
            case 13:
                _t = !1;
                return;
            case 27:
            case 3:
                _t = !0;
                return;
            default:
                $e = $e.return
            }
    }
    function Ga(e) {
        if (e !== $e)
            return !1;
        if (!Ne)
            return Uf(e),
            Ne = !0,
            !1;
        var t = e.tag, n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type,
        n = !(n !== "form" && n !== "button") || gc(e.type, e.memoizedProps)),
        n = !n),
        n && Ue && Rn(e),
        Uf(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(c(317));
            Ue = ip(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(c(317));
            Ue = ip(e)
        } else
            t === 27 ? (t = Ue,
            Vn(e.type) ? (e = Sc,
            Sc = null,
            Ue = e) : Ue = t) : Ue = $e ? Ht(e.stateNode.nextSibling) : null;
        return !0
    }
    function fa() {
        Ue = $e = null,
        Ne = !1
    }
    function $r() {
        var e = Cn;
        return e !== null && (ft === null ? ft = e : ft.push.apply(ft, e),
        Cn = null),
        e
    }
    function _l(e) {
        Cn === null ? Cn = [e] : Cn.push(e)
    }
    var eo = N(null)
      , da = null
      , rn = null;
    function zn(e, t, n) {
        Z(eo, t._currentValue),
        t._currentValue = n
    }
    function on(e) {
        e._currentValue = eo.current,
        q(eo)
    }
    function to(e, t, n) {
        for (; e !== null; ) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            e === n)
                break;
            e = e.return
        }
    }
    function no(e, t, n, a) {
        var i = e.child;
        for (i !== null && (i.return = e); i !== null; ) {
            var r = i.dependencies;
            if (r !== null) {
                var d = i.child;
                r = r.firstContext;
                e: for (; r !== null; ) {
                    var x = r;
                    r = i;
                    for (var w = 0; w < t.length; w++)
                        if (x.context === t[w]) {
                            r.lanes |= n,
                            x = r.alternate,
                            x !== null && (x.lanes |= n),
                            to(r.return, n, e),
                            a || (d = null);
                            break e
                        }
                    r = x.next
                }
            } else if (i.tag === 18) {
                if (d = i.return,
                d === null)
                    throw Error(c(341));
                d.lanes |= n,
                r = d.alternate,
                r !== null && (r.lanes |= n),
                to(d, n, e),
                d = null
            } else
                d = i.child;
            if (d !== null)
                d.return = i;
            else
                for (d = i; d !== null; ) {
                    if (d === e) {
                        d = null;
                        break
                    }
                    if (i = d.sibling,
                    i !== null) {
                        i.return = d.return,
                        d = i;
                        break
                    }
                    d = d.return
                }
            i = d
        }
    }
    function ka(e, t, n, a) {
        e = null;
        for (var i = t, r = !1; i !== null; ) {
            if (!r) {
                if ((i.flags & 524288) !== 0)
                    r = !0;
                else if ((i.flags & 262144) !== 0)
                    break
            }
            if (i.tag === 10) {
                var d = i.alternate;
                if (d === null)
                    throw Error(c(387));
                if (d = d.memoizedProps,
                d !== null) {
                    var x = i.type;
                    gt(i.pendingProps.value, d.value) || (e !== null ? e.push(x) : e = [x])
                }
            } else if (i === ae.current) {
                if (d = i.alternate,
                d === null)
                    throw Error(c(387));
                d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(rs) : e = [rs])
            }
            i = i.return
        }
        e !== null && no(t, e, n, a),
        t.flags |= 262144
    }
    function Qs(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!gt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function ma(e) {
        da = e,
        rn = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function et(e) {
        return Hf(da, e)
    }
    function Vs(e, t) {
        return da === null && ma(e),
        Hf(e, t)
    }
    function Hf(e, t) {
        var n = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: n,
            next: null
        },
        rn === null) {
            if (e === null)
                throw Error(c(308));
            rn = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            rn = rn.next = t;
        return n
    }
    var Sv = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(n, a) {
                e.push(a)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(n) {
                return n()
            })
        }
    }
      , Nv = l.unstable_scheduleCallback
      , jv = l.unstable_NormalPriority
      , Qe = {
        $$typeof: Q,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function ao() {
        return {
            controller: new Sv,
            data: new Map,
            refCount: 0
        }
    }
    function Ul(e) {
        e.refCount--,
        e.refCount === 0 && Nv(jv, function() {
            e.controller.abort()
        })
    }
    var Hl = null
      , lo = 0
      , Qa = 0
      , Va = null;
    function Ev(e, t) {
        if (Hl === null) {
            var n = Hl = [];
            lo = 0,
            Qa = oc(),
            Va = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    n.push(a)
                }
            }
        }
        return lo++,
        t.then(Lf, Lf),
        t
    }
    function Lf() {
        if (--lo === 0 && Hl !== null) {
            Va !== null && (Va.status = "fulfilled");
            var e = Hl;
            Hl = null,
            Qa = 0,
            Va = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Tv(e, t) {
        var n = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(i) {
                n.push(i)
            }
        };
        return e.then(function() {
            a.status = "fulfilled",
            a.value = t;
            for (var i = 0; i < n.length; i++)
                (0,
                n[i])(t)
        }, function(i) {
            for (a.status = "rejected",
            a.reason = i,
            i = 0; i < n.length; i++)
                (0,
                n[i])(void 0)
        }),
        a
    }
    var qf = O.S;
    O.S = function(e, t) {
        wm = pt(),
        typeof t == "object" && t !== null && typeof t.then == "function" && Ev(e, t),
        qf !== null && qf(e, t)
    }
    ;
    var pa = N(null);
    function so() {
        var e = pa.current;
        return e !== null ? e : _e.pooledCache
    }
    function Xs(e, t) {
        t === null ? Z(pa, pa.current) : Z(pa, t.pool)
    }
    function Bf() {
        var e = so();
        return e === null ? null : {
            parent: Qe._currentValue,
            pool: e
        }
    }
    var Xa = Error(c(460))
      , io = Error(c(474))
      , Zs = Error(c(542))
      , Ks = {
        then: function() {}
    };
    function Yf(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Gf(e, t, n) {
        switch (n = e[n],
        n === void 0 ? e.push(t) : n !== t && (t.then(nn, nn),
        t = n),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Qf(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(nn, nn);
            else {
                if (e = _e,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(c(482));
                e = t,
                e.status = "pending",
                e.then(function(a) {
                    if (t.status === "pending") {
                        var i = t;
                        i.status = "fulfilled",
                        i.value = a
                    }
                }, function(a) {
                    if (t.status === "pending") {
                        var i = t;
                        i.status = "rejected",
                        i.reason = a
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Qf(e),
                e
            }
            throw xa = t,
            Xa
        }
    }
    function ha(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (n) {
            throw n !== null && typeof n == "object" && typeof n.then == "function" ? (xa = n,
            Xa) : n
        }
    }
    var xa = null;
    function kf() {
        if (xa === null)
            throw Error(c(459));
        var e = xa;
        return xa = null,
        e
    }
    function Qf(e) {
        if (e === Xa || e === Zs)
            throw Error(c(483))
    }
    var Za = null
      , Ll = 0;
    function Js(e) {
        var t = Ll;
        return Ll += 1,
        Za === null && (Za = []),
        Gf(Za, e, t)
    }
    function ql(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function Fs(e, t) {
        throw t.$$typeof === T ? Error(c(525)) : (e = Object.prototype.toString.call(t),
        Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Vf(e) {
        function t(E, j) {
            if (e) {
                var C = E.deletions;
                C === null ? (E.deletions = [j],
                E.flags |= 16) : C.push(j)
            }
        }
        function n(E, j) {
            if (!e)
                return null;
            for (; j !== null; )
                t(E, j),
                j = j.sibling;
            return null
        }
        function a(E) {
            for (var j = new Map; E !== null; )
                E.key !== null ? j.set(E.key, E) : j.set(E.index, E),
                E = E.sibling;
            return j
        }
        function i(E, j) {
            return E = ln(E, j),
            E.index = 0,
            E.sibling = null,
            E
        }
        function r(E, j, C) {
            return E.index = C,
            e ? (C = E.alternate,
            C !== null ? (C = C.index,
            C < j ? (E.flags |= 67108866,
            j) : C) : (E.flags |= 67108866,
            j)) : (E.flags |= 1048576,
            j)
        }
        function d(E) {
            return e && E.alternate === null && (E.flags |= 67108866),
            E
        }
        function x(E, j, C, B) {
            return j === null || j.tag !== 6 ? (j = Jr(C, E.mode, B),
            j.return = E,
            j) : (j = i(j, C),
            j.return = E,
            j)
        }
        function w(E, j, C, B) {
            var le = C.type;
            return le === A ? L(E, j, C.props.children, B, C.key) : j !== null && (j.elementType === le || typeof le == "object" && le !== null && le.$$typeof === F && ha(le) === j.type) ? (j = i(j, C.props),
            ql(j, C),
            j.return = E,
            j) : (j = Gs(C.type, C.key, C.props, null, E.mode, B),
            ql(j, C),
            j.return = E,
            j)
        }
        function z(E, j, C, B) {
            return j === null || j.tag !== 4 || j.stateNode.containerInfo !== C.containerInfo || j.stateNode.implementation !== C.implementation ? (j = Fr(C, E.mode, B),
            j.return = E,
            j) : (j = i(j, C.children || []),
            j.return = E,
            j)
        }
        function L(E, j, C, B, le) {
            return j === null || j.tag !== 7 ? (j = ua(C, E.mode, B, le),
            j.return = E,
            j) : (j = i(j, C),
            j.return = E,
            j)
        }
        function G(E, j, C) {
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
                return j = Jr("" + j, E.mode, C),
                j.return = E,
                j;
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case R:
                    return C = Gs(j.type, j.key, j.props, null, E.mode, C),
                    ql(C, j),
                    C.return = E,
                    C;
                case _:
                    return j = Fr(j, E.mode, C),
                    j.return = E,
                    j;
                case F:
                    return j = ha(j),
                    G(E, j, C)
                }
                if (fe(j) || he(j))
                    return j = ua(j, E.mode, C, null),
                    j.return = E,
                    j;
                if (typeof j.then == "function")
                    return G(E, Js(j), C);
                if (j.$$typeof === Q)
                    return G(E, Vs(E, j), C);
                Fs(E, j)
            }
            return null
        }
        function M(E, j, C, B) {
            var le = j !== null ? j.key : null;
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
                return le !== null ? null : x(E, j, "" + C, B);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                case R:
                    return C.key === le ? w(E, j, C, B) : null;
                case _:
                    return C.key === le ? z(E, j, C, B) : null;
                case F:
                    return C = ha(C),
                    M(E, j, C, B)
                }
                if (fe(C) || he(C))
                    return le !== null ? null : L(E, j, C, B, null);
                if (typeof C.then == "function")
                    return M(E, j, Js(C), B);
                if (C.$$typeof === Q)
                    return M(E, j, Vs(E, C), B);
                Fs(E, C)
            }
            return null
        }
        function U(E, j, C, B, le) {
            if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
                return E = E.get(C) || null,
                x(j, E, "" + B, le);
            if (typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                case R:
                    return E = E.get(B.key === null ? C : B.key) || null,
                    w(j, E, B, le);
                case _:
                    return E = E.get(B.key === null ? C : B.key) || null,
                    z(j, E, B, le);
                case F:
                    return B = ha(B),
                    U(E, j, C, B, le)
                }
                if (fe(B) || he(B))
                    return E = E.get(C) || null,
                    L(j, E, B, le, null);
                if (typeof B.then == "function")
                    return U(E, j, C, Js(B), le);
                if (B.$$typeof === Q)
                    return U(E, j, C, Vs(j, B), le);
                Fs(j, B)
            }
            return null
        }
        function $(E, j, C, B) {
            for (var le = null, Ee = null, ne = j, pe = j = 0, Se = null; ne !== null && pe < C.length; pe++) {
                ne.index > pe ? (Se = ne,
                ne = null) : Se = ne.sibling;
                var Te = M(E, ne, C[pe], B);
                if (Te === null) {
                    ne === null && (ne = Se);
                    break
                }
                e && ne && Te.alternate === null && t(E, ne),
                j = r(Te, j, pe),
                Ee === null ? le = Te : Ee.sibling = Te,
                Ee = Te,
                ne = Se
            }
            if (pe === C.length)
                return n(E, ne),
                Ne && sn(E, pe),
                le;
            if (ne === null) {
                for (; pe < C.length; pe++)
                    ne = G(E, C[pe], B),
                    ne !== null && (j = r(ne, j, pe),
                    Ee === null ? le = ne : Ee.sibling = ne,
                    Ee = ne);
                return Ne && sn(E, pe),
                le
            }
            for (ne = a(ne); pe < C.length; pe++)
                Se = U(ne, E, pe, C[pe], B),
                Se !== null && (e && Se.alternate !== null && ne.delete(Se.key === null ? pe : Se.key),
                j = r(Se, j, pe),
                Ee === null ? le = Se : Ee.sibling = Se,
                Ee = Se);
            return e && ne.forEach(function(Fn) {
                return t(E, Fn)
            }),
            Ne && sn(E, pe),
            le
        }
        function ie(E, j, C, B) {
            if (C == null)
                throw Error(c(151));
            for (var le = null, Ee = null, ne = j, pe = j = 0, Se = null, Te = C.next(); ne !== null && !Te.done; pe++,
            Te = C.next()) {
                ne.index > pe ? (Se = ne,
                ne = null) : Se = ne.sibling;
                var Fn = M(E, ne, Te.value, B);
                if (Fn === null) {
                    ne === null && (ne = Se);
                    break
                }
                e && ne && Fn.alternate === null && t(E, ne),
                j = r(Fn, j, pe),
                Ee === null ? le = Fn : Ee.sibling = Fn,
                Ee = Fn,
                ne = Se
            }
            if (Te.done)
                return n(E, ne),
                Ne && sn(E, pe),
                le;
            if (ne === null) {
                for (; !Te.done; pe++,
                Te = C.next())
                    Te = G(E, Te.value, B),
                    Te !== null && (j = r(Te, j, pe),
                    Ee === null ? le = Te : Ee.sibling = Te,
                    Ee = Te);
                return Ne && sn(E, pe),
                le
            }
            for (ne = a(ne); !Te.done; pe++,
            Te = C.next())
                Te = U(ne, E, pe, Te.value, B),
                Te !== null && (e && Te.alternate !== null && ne.delete(Te.key === null ? pe : Te.key),
                j = r(Te, j, pe),
                Ee === null ? le = Te : Ee.sibling = Te,
                Ee = Te);
            return e && ne.forEach(function(Ly) {
                return t(E, Ly)
            }),
            Ne && sn(E, pe),
            le
        }
        function De(E, j, C, B) {
            if (typeof C == "object" && C !== null && C.type === A && C.key === null && (C = C.props.children),
            typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                case R:
                    e: {
                        for (var le = C.key; j !== null; ) {
                            if (j.key === le) {
                                if (le = C.type,
                                le === A) {
                                    if (j.tag === 7) {
                                        n(E, j.sibling),
                                        B = i(j, C.props.children),
                                        B.return = E,
                                        E = B;
                                        break e
                                    }
                                } else if (j.elementType === le || typeof le == "object" && le !== null && le.$$typeof === F && ha(le) === j.type) {
                                    n(E, j.sibling),
                                    B = i(j, C.props),
                                    ql(B, C),
                                    B.return = E,
                                    E = B;
                                    break e
                                }
                                n(E, j);
                                break
                            } else
                                t(E, j);
                            j = j.sibling
                        }
                        C.type === A ? (B = ua(C.props.children, E.mode, B, C.key),
                        B.return = E,
                        E = B) : (B = Gs(C.type, C.key, C.props, null, E.mode, B),
                        ql(B, C),
                        B.return = E,
                        E = B)
                    }
                    return d(E);
                case _:
                    e: {
                        for (le = C.key; j !== null; ) {
                            if (j.key === le)
                                if (j.tag === 4 && j.stateNode.containerInfo === C.containerInfo && j.stateNode.implementation === C.implementation) {
                                    n(E, j.sibling),
                                    B = i(j, C.children || []),
                                    B.return = E,
                                    E = B;
                                    break e
                                } else {
                                    n(E, j);
                                    break
                                }
                            else
                                t(E, j);
                            j = j.sibling
                        }
                        B = Fr(C, E.mode, B),
                        B.return = E,
                        E = B
                    }
                    return d(E);
                case F:
                    return C = ha(C),
                    De(E, j, C, B)
                }
                if (fe(C))
                    return $(E, j, C, B);
                if (he(C)) {
                    if (le = he(C),
                    typeof le != "function")
                        throw Error(c(150));
                    return C = le.call(C),
                    ie(E, j, C, B)
                }
                if (typeof C.then == "function")
                    return De(E, j, Js(C), B);
                if (C.$$typeof === Q)
                    return De(E, j, Vs(E, C), B);
                Fs(E, C)
            }
            return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C,
            j !== null && j.tag === 6 ? (n(E, j.sibling),
            B = i(j, C),
            B.return = E,
            E = B) : (n(E, j),
            B = Jr(C, E.mode, B),
            B.return = E,
            E = B),
            d(E)) : n(E, j)
        }
        return function(E, j, C, B) {
            try {
                Ll = 0;
                var le = De(E, j, C, B);
                return Za = null,
                le
            } catch (ne) {
                if (ne === Xa || ne === Zs)
                    throw ne;
                var Ee = vt(29, ne, null, E.mode);
                return Ee.lanes = B,
                Ee.return = E,
                Ee
            }
        }
    }
    var ga = Vf(!0)
      , Xf = Vf(!1)
      , Mn = !1;
    function ro(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function oo(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function Dn(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function _n(e, t, n) {
        var a = e.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (Ae & 2) !== 0) {
            var i = a.pending;
            return i === null ? t.next = t : (t.next = i.next,
            i.next = t),
            a.pending = t,
            t = Ys(e),
            Of(e, null, n),
            t
        }
        return Bs(e, a, t, n),
        Ys(e)
    }
    function Bl(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (n & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes,
            n |= a,
            t.lanes = n,
            Uu(e, n)
        }
    }
    function co(e, t) {
        var n = e.updateQueue
          , a = e.alternate;
        if (a !== null && (a = a.updateQueue,
        n === a)) {
            var i = null
              , r = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var d = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    r === null ? i = r = d : r = r.next = d,
                    n = n.next
                } while (n !== null);
                r === null ? i = r = t : r = r.next = t
            } else
                i = r = t;
            n = {
                baseState: a.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: r,
                shared: a.shared,
                callbacks: a.callbacks
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    var uo = !1;
    function Yl() {
        if (uo) {
            var e = Va;
            if (e !== null)
                throw e
        }
    }
    function Gl(e, t, n, a) {
        uo = !1;
        var i = e.updateQueue;
        Mn = !1;
        var r = i.firstBaseUpdate
          , d = i.lastBaseUpdate
          , x = i.shared.pending;
        if (x !== null) {
            i.shared.pending = null;
            var w = x
              , z = w.next;
            w.next = null,
            d === null ? r = z : d.next = z,
            d = w;
            var L = e.alternate;
            L !== null && (L = L.updateQueue,
            x = L.lastBaseUpdate,
            x !== d && (x === null ? L.firstBaseUpdate = z : x.next = z,
            L.lastBaseUpdate = w))
        }
        if (r !== null) {
            var G = i.baseState;
            d = 0,
            L = z = w = null,
            x = r;
            do {
                var M = x.lane & -536870913
                  , U = M !== x.lane;
                if (U ? (we & M) === M : (a & M) === M) {
                    M !== 0 && M === Qa && (uo = !0),
                    L !== null && (L = L.next = {
                        lane: 0,
                        tag: x.tag,
                        payload: x.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var $ = e
                          , ie = x;
                        M = t;
                        var De = n;
                        switch (ie.tag) {
                        case 1:
                            if ($ = ie.payload,
                            typeof $ == "function") {
                                G = $.call(De, G, M);
                                break e
                            }
                            G = $;
                            break e;
                        case 3:
                            $.flags = $.flags & -65537 | 128;
                        case 0:
                            if ($ = ie.payload,
                            M = typeof $ == "function" ? $.call(De, G, M) : $,
                            M == null)
                                break e;
                            G = b({}, G, M);
                            break e;
                        case 2:
                            Mn = !0
                        }
                    }
                    M = x.callback,
                    M !== null && (e.flags |= 64,
                    U && (e.flags |= 8192),
                    U = i.callbacks,
                    U === null ? i.callbacks = [M] : U.push(M))
                } else
                    U = {
                        lane: M,
                        tag: x.tag,
                        payload: x.payload,
                        callback: x.callback,
                        next: null
                    },
                    L === null ? (z = L = U,
                    w = G) : L = L.next = U,
                    d |= M;
                if (x = x.next,
                x === null) {
                    if (x = i.shared.pending,
                    x === null)
                        break;
                    U = x,
                    x = U.next,
                    U.next = null,
                    i.lastBaseUpdate = U,
                    i.shared.pending = null
                }
            } while (!0);
            L === null && (w = G),
            i.baseState = w,
            i.firstBaseUpdate = z,
            i.lastBaseUpdate = L,
            r === null && (i.shared.lanes = 0),
            Bn |= d,
            e.lanes = d,
            e.memoizedState = G
        }
    }
    function Zf(e, t) {
        if (typeof e != "function")
            throw Error(c(191, e));
        e.call(t)
    }
    function Kf(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null,
            e = 0; e < n.length; e++)
                Zf(n[e], t)
    }
    var Ka = N(null)
      , Ws = N(0);
    function Jf(e, t) {
        e = gn,
        Z(Ws, e),
        Z(Ka, t),
        gn = e | t.baseLanes
    }
    function fo() {
        Z(Ws, gn),
        Z(Ka, Ka.current)
    }
    function mo() {
        gn = Ws.current,
        q(Ka),
        q(Ws)
    }
    var yt = N(null)
      , Ut = null;
    function Un(e) {
        var t = e.alternate;
        Z(Ge, Ge.current & 1),
        Z(yt, e),
        Ut === null && (t === null || Ka.current !== null || t.memoizedState !== null) && (Ut = e)
    }
    function po(e) {
        Z(Ge, Ge.current),
        Z(yt, e),
        Ut === null && (Ut = e)
    }
    function Ff(e) {
        e.tag === 22 ? (Z(Ge, Ge.current),
        Z(yt, e),
        Ut === null && (Ut = e)) : Hn()
    }
    function Hn() {
        Z(Ge, Ge.current),
        Z(yt, yt.current)
    }
    function bt(e) {
        q(yt),
        Ut === e && (Ut = null),
        q(Ge)
    }
    var Ge = N(0);
    function Is(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || bc(n) || wc(n)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var cn = 0
      , me = null
      , ze = null
      , Ve = null
      , Ps = !1
      , Ja = !1
      , va = !1
      , $s = 0
      , kl = 0
      , Fa = null
      , Av = 0;
    function qe() {
        throw Error(c(321))
    }
    function ho(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!gt(e[n], t[n]))
                return !1;
        return !0
    }
    function xo(e, t, n, a, i, r) {
        return cn = r,
        me = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        O.H = e === null || e.memoizedState === null ? Md : zo,
        va = !1,
        r = n(a, i),
        va = !1,
        Ja && (r = If(t, n, a, i)),
        Wf(e),
        r
    }
    function Wf(e) {
        O.H = Xl;
        var t = ze !== null && ze.next !== null;
        if (cn = 0,
        Ve = ze = me = null,
        Ps = !1,
        kl = 0,
        Fa = null,
        t)
            throw Error(c(300));
        e === null || Xe || (e = e.dependencies,
        e !== null && Qs(e) && (Xe = !0))
    }
    function If(e, t, n, a) {
        me = e;
        var i = 0;
        do {
            if (Ja && (Fa = null),
            kl = 0,
            Ja = !1,
            25 <= i)
                throw Error(c(301));
            if (i += 1,
            Ve = ze = null,
            e.updateQueue != null) {
                var r = e.updateQueue;
                r.lastEffect = null,
                r.events = null,
                r.stores = null,
                r.memoCache != null && (r.memoCache.index = 0)
            }
            O.H = Dd,
            r = t(n, a)
        } while (Ja);
        return r
    }
    function Ov() {
        var e = O.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Ql(t) : t,
        e = e.useState()[0],
        (ze !== null ? ze.memoizedState : null) !== e && (me.flags |= 1024),
        t
    }
    function go() {
        var e = $s !== 0;
        return $s = 0,
        e
    }
    function vo(e, t, n) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~n
    }
    function yo(e) {
        if (Ps) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            Ps = !1
        }
        cn = 0,
        Ve = ze = me = null,
        Ja = !1,
        kl = $s = 0,
        Fa = null
    }
    function lt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ve === null ? me.memoizedState = Ve = e : Ve = Ve.next = e,
        Ve
    }
    function ke() {
        if (ze === null) {
            var e = me.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = ze.next;
        var t = Ve === null ? me.memoizedState : Ve.next;
        if (t !== null)
            Ve = t,
            ze = e;
        else {
            if (e === null)
                throw me.alternate === null ? Error(c(467)) : Error(c(310));
            ze = e,
            e = {
                memoizedState: ze.memoizedState,
                baseState: ze.baseState,
                baseQueue: ze.baseQueue,
                queue: ze.queue,
                next: null
            },
            Ve === null ? me.memoizedState = Ve = e : Ve = Ve.next = e
        }
        return Ve
    }
    function ei() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Ql(e) {
        var t = kl;
        return kl += 1,
        Fa === null && (Fa = []),
        e = Gf(Fa, e, t),
        t = me,
        (Ve === null ? t.memoizedState : Ve.next) === null && (t = t.alternate,
        O.H = t === null || t.memoizedState === null ? Md : zo),
        e
    }
    function ti(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Ql(e);
            if (e.$$typeof === Q)
                return et(e)
        }
        throw Error(c(438, String(e)))
    }
    function bo(e) {
        var t = null
          , n = me.updateQueue;
        if (n !== null && (t = n.memoCache),
        t == null) {
            var a = me.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (t = {
                data: a.data.map(function(i) {
                    return i.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        n === null && (n = ei(),
        me.updateQueue = n),
        n.memoCache = t,
        n = t.data[t.index],
        n === void 0)
            for (n = t.data[t.index] = Array(e),
            a = 0; a < e; a++)
                n[a] = xe;
        return t.index++,
        n
    }
    function un(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function ni(e) {
        var t = ke();
        return wo(t, ze, e)
    }
    function wo(e, t, n) {
        var a = e.queue;
        if (a === null)
            throw Error(c(311));
        a.lastRenderedReducer = n;
        var i = e.baseQueue
          , r = a.pending;
        if (r !== null) {
            if (i !== null) {
                var d = i.next;
                i.next = r.next,
                r.next = d
            }
            t.baseQueue = i = r,
            a.pending = null
        }
        if (r = e.baseState,
        i === null)
            e.memoizedState = r;
        else {
            t = i.next;
            var x = d = null
              , w = null
              , z = t
              , L = !1;
            do {
                var G = z.lane & -536870913;
                if (G !== z.lane ? (we & G) === G : (cn & G) === G) {
                    var M = z.revertLane;
                    if (M === 0)
                        w !== null && (w = w.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }),
                        G === Qa && (L = !0);
                    else if ((cn & M) === M) {
                        z = z.next,
                        M === Qa && (L = !0);
                        continue
                    } else
                        G = {
                            lane: 0,
                            revertLane: z.revertLane,
                            gesture: null,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        },
                        w === null ? (x = w = G,
                        d = r) : w = w.next = G,
                        me.lanes |= M,
                        Bn |= M;
                    G = z.action,
                    va && n(r, G),
                    r = z.hasEagerState ? z.eagerState : n(r, G)
                } else
                    M = {
                        lane: G,
                        revertLane: z.revertLane,
                        gesture: z.gesture,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    },
                    w === null ? (x = w = M,
                    d = r) : w = w.next = M,
                    me.lanes |= G,
                    Bn |= G;
                z = z.next
            } while (z !== null && z !== t);
            if (w === null ? d = r : w.next = x,
            !gt(r, e.memoizedState) && (Xe = !0,
            L && (n = Va,
            n !== null)))
                throw n;
            e.memoizedState = r,
            e.baseState = d,
            e.baseQueue = w,
            a.lastRenderedState = r
        }
        return i === null && (a.lanes = 0),
        [e.memoizedState, a.dispatch]
    }
    function So(e) {
        var t = ke()
          , n = t.queue;
        if (n === null)
            throw Error(c(311));
        n.lastRenderedReducer = e;
        var a = n.dispatch
          , i = n.pending
          , r = t.memoizedState;
        if (i !== null) {
            n.pending = null;
            var d = i = i.next;
            do
                r = e(r, d.action),
                d = d.next;
            while (d !== i);
            gt(r, t.memoizedState) || (Xe = !0),
            t.memoizedState = r,
            t.baseQueue === null && (t.baseState = r),
            n.lastRenderedState = r
        }
        return [r, a]
    }
    function Pf(e, t, n) {
        var a = me
          , i = ke()
          , r = Ne;
        if (r) {
            if (n === void 0)
                throw Error(c(407));
            n = n()
        } else
            n = t();
        var d = !gt((ze || i).memoizedState, n);
        if (d && (i.memoizedState = n,
        Xe = !0),
        i = i.queue,
        Eo(td.bind(null, a, i, e), [e]),
        i.getSnapshot !== t || d || Ve !== null && Ve.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            Wa(9, {
                destroy: void 0
            }, ed.bind(null, a, i, n, t), null),
            _e === null)
                throw Error(c(349));
            r || (cn & 127) !== 0 || $f(a, t, n)
        }
        return n
    }
    function $f(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = me.updateQueue,
        t === null ? (t = ei(),
        me.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function ed(e, t, n, a) {
        t.value = n,
        t.getSnapshot = a,
        nd(t) && ad(e)
    }
    function td(e, t, n) {
        return n(function() {
            nd(t) && ad(e)
        })
    }
    function nd(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !gt(e, n)
        } catch {
            return !0
        }
    }
    function ad(e) {
        var t = ca(e, 2);
        t !== null && dt(t, e, 2)
    }
    function No(e) {
        var t = lt();
        if (typeof e == "function") {
            var n = e;
            if (e = n(),
            va) {
                En(!0);
                try {
                    n()
                } finally {
                    En(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: un,
            lastRenderedState: e
        },
        t
    }
    function ld(e, t, n, a) {
        return e.baseState = n,
        wo(e, ze, typeof a == "function" ? a : un)
    }
    function Cv(e, t, n, a, i) {
        if (si(e))
            throw Error(c(485));
        if (e = t.action,
        e !== null) {
            var r = {
                payload: i,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(d) {
                    r.listeners.push(d)
                }
            };
            O.T !== null ? n(!0) : r.isTransition = !1,
            a(r),
            n = t.pending,
            n === null ? (r.next = t.pending = r,
            sd(t, r)) : (r.next = n.next,
            t.pending = n.next = r)
        }
    }
    function sd(e, t) {
        var n = t.action
          , a = t.payload
          , i = e.state;
        if (t.isTransition) {
            var r = O.T
              , d = {};
            O.T = d;
            try {
                var x = n(i, a)
                  , w = O.S;
                w !== null && w(d, x),
                id(e, t, x)
            } catch (z) {
                jo(e, t, z)
            } finally {
                r !== null && d.types !== null && (r.types = d.types),
                O.T = r
            }
        } else
            try {
                r = n(i, a),
                id(e, t, r)
            } catch (z) {
                jo(e, t, z)
            }
    }
    function id(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
            rd(e, t, a)
        }, function(a) {
            return jo(e, t, a)
        }) : rd(e, t, n)
    }
    function rd(e, t, n) {
        t.status = "fulfilled",
        t.value = n,
        od(t),
        e.state = n,
        t = e.pending,
        t !== null && (n = t.next,
        n === t ? e.pending = null : (n = n.next,
        t.next = n,
        sd(e, n)))
    }
    function jo(e, t, n) {
        var a = e.pending;
        if (e.pending = null,
        a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                t.reason = n,
                od(t),
                t = t.next;
            while (t !== a)
        }
        e.action = null
    }
    function od(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function cd(e, t) {
        return t
    }
    function ud(e, t) {
        if (Ne) {
            var n = _e.formState;
            if (n !== null) {
                e: {
                    var a = me;
                    if (Ne) {
                        if (Ue) {
                            t: {
                                for (var i = Ue, r = _t; i.nodeType !== 8; ) {
                                    if (!r) {
                                        i = null;
                                        break t
                                    }
                                    if (i = Ht(i.nextSibling),
                                    i === null) {
                                        i = null;
                                        break t
                                    }
                                }
                                r = i.data,
                                i = r === "F!" || r === "F" ? i : null
                            }
                            if (i) {
                                Ue = Ht(i.nextSibling),
                                a = i.data === "F!";
                                break e
                            }
                        }
                        Rn(a)
                    }
                    a = !1
                }
                a && (t = n[0])
            }
        }
        return n = lt(),
        n.memoizedState = n.baseState = t,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: cd,
            lastRenderedState: t
        },
        n.queue = a,
        n = Cd.bind(null, me, a),
        a.dispatch = n,
        a = No(!1),
        r = Ro.bind(null, me, !1, a.queue),
        a = lt(),
        i = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        a.queue = i,
        n = Cv.bind(null, me, i, r, n),
        i.dispatch = n,
        a.memoizedState = e,
        [t, n, !1]
    }
    function fd(e) {
        var t = ke();
        return dd(t, ze, e)
    }
    function dd(e, t, n) {
        if (t = wo(e, t, cd)[0],
        e = ni(un)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = Ql(t)
            } catch (d) {
                throw d === Xa ? Zs : d
            }
        else
            a = t;
        t = ke();
        var i = t.queue
          , r = i.dispatch;
        return n !== t.memoizedState && (me.flags |= 2048,
        Wa(9, {
            destroy: void 0
        }, Rv.bind(null, i, n), null)),
        [a, r, e]
    }
    function Rv(e, t) {
        e.action = t
    }
    function md(e) {
        var t = ke()
          , n = ze;
        if (n !== null)
            return dd(t, n, e);
        ke(),
        t = t.memoizedState,
        n = ke();
        var a = n.queue.dispatch;
        return n.memoizedState = e,
        [t, a, !1]
    }
    function Wa(e, t, n, a) {
        return e = {
            tag: e,
            create: n,
            deps: a,
            inst: t,
            next: null
        },
        t = me.updateQueue,
        t === null && (t = ei(),
        me.updateQueue = t),
        n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (a = n.next,
        n.next = e,
        e.next = a,
        t.lastEffect = e),
        e
    }
    function pd() {
        return ke().memoizedState
    }
    function ai(e, t, n, a) {
        var i = lt();
        me.flags |= e,
        i.memoizedState = Wa(1 | t, {
            destroy: void 0
        }, n, a === void 0 ? null : a)
    }
    function li(e, t, n, a) {
        var i = ke();
        a = a === void 0 ? null : a;
        var r = i.memoizedState.inst;
        ze !== null && a !== null && ho(a, ze.memoizedState.deps) ? i.memoizedState = Wa(t, r, n, a) : (me.flags |= e,
        i.memoizedState = Wa(1 | t, r, n, a))
    }
    function hd(e, t) {
        ai(8390656, 8, e, t)
    }
    function Eo(e, t) {
        li(2048, 8, e, t)
    }
    function zv(e) {
        me.flags |= 4;
        var t = me.updateQueue;
        if (t === null)
            t = ei(),
            me.updateQueue = t,
            t.events = [e];
        else {
            var n = t.events;
            n === null ? t.events = [e] : n.push(e)
        }
    }
    function xd(e) {
        var t = ke().memoizedState;
        return zv({
            ref: t,
            nextImpl: e
        }),
        function() {
            if ((Ae & 2) !== 0)
                throw Error(c(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function gd(e, t) {
        return li(4, 2, e, t)
    }
    function vd(e, t) {
        return li(4, 4, e, t)
    }
    function yd(e, t) {
        if (typeof t == "function") {
            e = e();
            var n = t(e);
            return function() {
                typeof n == "function" ? n() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function bd(e, t, n) {
        n = n != null ? n.concat([e]) : null,
        li(4, 4, yd.bind(null, t, e), n)
    }
    function To() {}
    function wd(e, t) {
        var n = ke();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        return t !== null && ho(t, a[1]) ? a[0] : (n.memoizedState = [e, t],
        e)
    }
    function Sd(e, t) {
        var n = ke();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        if (t !== null && ho(t, a[1]))
            return a[0];
        if (a = e(),
        va) {
            En(!0);
            try {
                e()
            } finally {
                En(!1)
            }
        }
        return n.memoizedState = [a, t],
        a
    }
    function Ao(e, t, n) {
        return n === void 0 || (cn & 1073741824) !== 0 && (we & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n,
        e = Nm(),
        me.lanes |= e,
        Bn |= e,
        n)
    }
    function Nd(e, t, n, a) {
        return gt(n, t) ? n : Ka.current !== null ? (e = Ao(e, n, a),
        gt(e, t) || (Xe = !0),
        e) : (cn & 42) === 0 || (cn & 1073741824) !== 0 && (we & 261930) === 0 ? (Xe = !0,
        e.memoizedState = n) : (e = Nm(),
        me.lanes |= e,
        Bn |= e,
        t)
    }
    function jd(e, t, n, a, i) {
        var r = k.p;
        k.p = r !== 0 && 8 > r ? r : 8;
        var d = O.T
          , x = {};
        O.T = x,
        Ro(e, !1, t, n);
        try {
            var w = i()
              , z = O.S;
            if (z !== null && z(x, w),
            w !== null && typeof w == "object" && typeof w.then == "function") {
                var L = Tv(w, a);
                Vl(e, t, L, Nt(e))
            } else
                Vl(e, t, a, Nt(e))
        } catch (G) {
            Vl(e, t, {
                then: function() {},
                status: "rejected",
                reason: G
            }, Nt())
        } finally {
            k.p = r,
            d !== null && x.types !== null && (d.types = x.types),
            O.T = d
        }
    }
    function Mv() {}
    function Oo(e, t, n, a) {
        if (e.tag !== 5)
            throw Error(c(476));
        var i = Ed(e).queue;
        jd(e, i, t, H, n === null ? Mv : function() {
            return Td(e),
            n(a)
        }
        )
    }
    function Ed(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: H,
            baseState: H,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: un,
                lastRenderedState: H
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: un,
                lastRenderedState: n
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Td(e) {
        var t = Ed(e);
        t.next === null && (t = e.alternate.memoizedState),
        Vl(e, t.next.queue, {}, Nt())
    }
    function Co() {
        return et(rs)
    }
    function Ad() {
        return ke().memoizedState
    }
    function Od() {
        return ke().memoizedState
    }
    function Dv(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var n = Nt();
                e = Dn(n);
                var a = _n(t, e, n);
                a !== null && (dt(a, t, n),
                Bl(a, t, n)),
                t = {
                    cache: ao()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function _v(e, t, n) {
        var a = Nt();
        n = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        si(e) ? Rd(t, n) : (n = Zr(e, t, n, a),
        n !== null && (dt(n, e, a),
        zd(n, t, a)))
    }
    function Cd(e, t, n) {
        var a = Nt();
        Vl(e, t, n, a)
    }
    function Vl(e, t, n, a) {
        var i = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (si(e))
            Rd(t, i);
        else {
            var r = e.alternate;
            if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer,
            r !== null))
                try {
                    var d = t.lastRenderedState
                      , x = r(d, n);
                    if (i.hasEagerState = !0,
                    i.eagerState = x,
                    gt(x, d))
                        return Bs(e, t, i, 0),
                        _e === null && qs(),
                        !1
                } catch {}
            if (n = Zr(e, t, i, a),
            n !== null)
                return dt(n, e, a),
                zd(n, t, a),
                !0
        }
        return !1
    }
    function Ro(e, t, n, a) {
        if (a = {
            lane: 2,
            revertLane: oc(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        si(e)) {
            if (t)
                throw Error(c(479))
        } else
            t = Zr(e, n, a, 2),
            t !== null && dt(t, e, 2)
    }
    function si(e) {
        var t = e.alternate;
        return e === me || t !== null && t === me
    }
    function Rd(e, t) {
        Ja = Ps = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function zd(e, t, n) {
        if ((n & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes,
            n |= a,
            t.lanes = n,
            Uu(e, n)
        }
    }
    var Xl = {
        readContext: et,
        use: ti,
        useCallback: qe,
        useContext: qe,
        useEffect: qe,
        useImperativeHandle: qe,
        useLayoutEffect: qe,
        useInsertionEffect: qe,
        useMemo: qe,
        useReducer: qe,
        useRef: qe,
        useState: qe,
        useDebugValue: qe,
        useDeferredValue: qe,
        useTransition: qe,
        useSyncExternalStore: qe,
        useId: qe,
        useHostTransitionStatus: qe,
        useFormState: qe,
        useActionState: qe,
        useOptimistic: qe,
        useMemoCache: qe,
        useCacheRefresh: qe
    };
    Xl.useEffectEvent = qe;
    var Md = {
        readContext: et,
        use: ti,
        useCallback: function(e, t) {
            return lt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: et,
        useEffect: hd,
        useImperativeHandle: function(e, t, n) {
            n = n != null ? n.concat([e]) : null,
            ai(4194308, 4, yd.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return ai(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            ai(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = lt();
            t = t === void 0 ? null : t;
            var a = e();
            if (va) {
                En(!0);
                try {
                    e()
                } finally {
                    En(!1)
                }
            }
            return n.memoizedState = [a, t],
            a
        },
        useReducer: function(e, t, n) {
            var a = lt();
            if (n !== void 0) {
                var i = n(t);
                if (va) {
                    En(!0);
                    try {
                        n(t)
                    } finally {
                        En(!1)
                    }
                }
            } else
                i = t;
            return a.memoizedState = a.baseState = i,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: i
            },
            a.queue = e,
            e = e.dispatch = _v.bind(null, me, e),
            [a.memoizedState, e]
        },
        useRef: function(e) {
            var t = lt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = No(e);
            var t = e.queue
              , n = Cd.bind(null, me, t);
            return t.dispatch = n,
            [e.memoizedState, n]
        },
        useDebugValue: To,
        useDeferredValue: function(e, t) {
            var n = lt();
            return Ao(n, e, t)
        },
        useTransition: function() {
            var e = No(!1);
            return e = jd.bind(null, me, e.queue, !0, !1),
            lt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, n) {
            var a = me
              , i = lt();
            if (Ne) {
                if (n === void 0)
                    throw Error(c(407));
                n = n()
            } else {
                if (n = t(),
                _e === null)
                    throw Error(c(349));
                (we & 127) !== 0 || $f(a, t, n)
            }
            i.memoizedState = n;
            var r = {
                value: n,
                getSnapshot: t
            };
            return i.queue = r,
            hd(td.bind(null, a, r, e), [e]),
            a.flags |= 2048,
            Wa(9, {
                destroy: void 0
            }, ed.bind(null, a, r, n, t), null),
            n
        },
        useId: function() {
            var e = lt()
              , t = _e.identifierPrefix;
            if (Ne) {
                var n = Jt
                  , a = Kt;
                n = (a & ~(1 << 32 - xt(a) - 1)).toString(32) + n,
                t = "_" + t + "R_" + n,
                n = $s++,
                0 < n && (t += "H" + n.toString(32)),
                t += "_"
            } else
                n = Av++,
                t = "_" + t + "r_" + n.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: Co,
        useFormState: ud,
        useActionState: ud,
        useOptimistic: function(e) {
            var t = lt();
            t.memoizedState = t.baseState = e;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = n,
            t = Ro.bind(null, me, !0, n),
            n.dispatch = t,
            [e, t]
        },
        useMemoCache: bo,
        useCacheRefresh: function() {
            return lt().memoizedState = Dv.bind(null, me)
        },
        useEffectEvent: function(e) {
            var t = lt()
              , n = {
                impl: e
            };
            return t.memoizedState = n,
            function() {
                if ((Ae & 2) !== 0)
                    throw Error(c(440));
                return n.impl.apply(void 0, arguments)
            }
        }
    }
      , zo = {
        readContext: et,
        use: ti,
        useCallback: wd,
        useContext: et,
        useEffect: Eo,
        useImperativeHandle: bd,
        useInsertionEffect: gd,
        useLayoutEffect: vd,
        useMemo: Sd,
        useReducer: ni,
        useRef: pd,
        useState: function() {
            return ni(un)
        },
        useDebugValue: To,
        useDeferredValue: function(e, t) {
            var n = ke();
            return Nd(n, ze.memoizedState, e, t)
        },
        useTransition: function() {
            var e = ni(un)[0]
              , t = ke().memoizedState;
            return [typeof e == "boolean" ? e : Ql(e), t]
        },
        useSyncExternalStore: Pf,
        useId: Ad,
        useHostTransitionStatus: Co,
        useFormState: fd,
        useActionState: fd,
        useOptimistic: function(e, t) {
            var n = ke();
            return ld(n, ze, e, t)
        },
        useMemoCache: bo,
        useCacheRefresh: Od
    };
    zo.useEffectEvent = xd;
    var Dd = {
        readContext: et,
        use: ti,
        useCallback: wd,
        useContext: et,
        useEffect: Eo,
        useImperativeHandle: bd,
        useInsertionEffect: gd,
        useLayoutEffect: vd,
        useMemo: Sd,
        useReducer: So,
        useRef: pd,
        useState: function() {
            return So(un)
        },
        useDebugValue: To,
        useDeferredValue: function(e, t) {
            var n = ke();
            return ze === null ? Ao(n, e, t) : Nd(n, ze.memoizedState, e, t)
        },
        useTransition: function() {
            var e = So(un)[0]
              , t = ke().memoizedState;
            return [typeof e == "boolean" ? e : Ql(e), t]
        },
        useSyncExternalStore: Pf,
        useId: Ad,
        useHostTransitionStatus: Co,
        useFormState: md,
        useActionState: md,
        useOptimistic: function(e, t) {
            var n = ke();
            return ze !== null ? ld(n, ze, e, t) : (n.baseState = e,
            [e, n.queue.dispatch])
        },
        useMemoCache: bo,
        useCacheRefresh: Od
    };
    Dd.useEffectEvent = xd;
    function Mo(e, t, n, a) {
        t = e.memoizedState,
        n = n(a, t),
        n = n == null ? t : b({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Do = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var a = Nt()
              , i = Dn(a);
            i.payload = t,
            n != null && (i.callback = n),
            t = _n(e, i, a),
            t !== null && (dt(t, e, a),
            Bl(t, e, a))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var a = Nt()
              , i = Dn(a);
            i.tag = 1,
            i.payload = t,
            n != null && (i.callback = n),
            t = _n(e, i, a),
            t !== null && (dt(t, e, a),
            Bl(t, e, a))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Nt()
              , a = Dn(n);
            a.tag = 2,
            t != null && (a.callback = t),
            t = _n(e, a, n),
            t !== null && (dt(t, e, n),
            Bl(t, e, n))
        }
    };
    function _d(e, t, n, a, i, r, d) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, r, d) : t.prototype && t.prototype.isPureReactComponent ? !zl(n, a) || !zl(i, r) : !0
    }
    function Ud(e, t, n, a) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a),
        t.state !== e && Do.enqueueReplaceState(t, t.state, null)
    }
    function ya(e, t) {
        var n = t;
        if ("ref"in t) {
            n = {};
            for (var a in t)
                a !== "ref" && (n[a] = t[a])
        }
        if (e = e.defaultProps) {
            n === t && (n = b({}, n));
            for (var i in e)
                n[i] === void 0 && (n[i] = e[i])
        }
        return n
    }
    function Hd(e) {
        Ls(e)
    }
    function Ld(e) {
        console.error(e)
    }
    function qd(e) {
        Ls(e)
    }
    function ii(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function Bd(e, t, n) {
        try {
            var a = e.onCaughtError;
            a(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    function _o(e, t, n) {
        return n = Dn(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            ii(e, t)
        }
        ,
        n
    }
    function Yd(e) {
        return e = Dn(e),
        e.tag = 3,
        e
    }
    function Gd(e, t, n, a) {
        var i = n.type.getDerivedStateFromError;
        if (typeof i == "function") {
            var r = a.value;
            e.payload = function() {
                return i(r)
            }
            ,
            e.callback = function() {
                Bd(t, n, a)
            }
        }
        var d = n.stateNode;
        d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
            Bd(t, n, a),
            typeof i != "function" && (Yn === null ? Yn = new Set([this]) : Yn.add(this));
            var x = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: x !== null ? x : ""
            })
        }
        )
    }
    function Uv(e, t, n, a, i) {
        if (n.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = n.alternate,
            t !== null && ka(t, n, i, !0),
            n = yt.current,
            n !== null) {
                switch (n.tag) {
                case 31:
                case 13:
                    return Ut === null ? vi() : n.alternate === null && Be === 0 && (Be = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = i,
                    a === Ks ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? n.updateQueue = new Set([a]) : t.add(a),
                    sc(e, a, i)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    a === Ks ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    n.updateQueue = t) : (n = t.retryQueue,
                    n === null ? t.retryQueue = new Set([a]) : n.add(a)),
                    sc(e, a, i)),
                    !1
                }
                throw Error(c(435, n.tag))
            }
            return sc(e, a, i),
            vi(),
            !1
        }
        if (Ne)
            return t = yt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = i,
            a !== Pr && (e = Error(c(422), {
                cause: a
            }),
            _l(zt(e, n)))) : (a !== Pr && (t = Error(c(423), {
                cause: a
            }),
            _l(zt(t, n))),
            e = e.current.alternate,
            e.flags |= 65536,
            i &= -i,
            e.lanes |= i,
            a = zt(a, n),
            i = _o(e.stateNode, a, i),
            co(e, i),
            Be !== 4 && (Be = 2)),
            !1;
        var r = Error(c(520), {
            cause: a
        });
        if (r = zt(r, n),
        $l === null ? $l = [r] : $l.push(r),
        Be !== 4 && (Be = 2),
        t === null)
            return !0;
        a = zt(a, n),
        n = t;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                e = i & -i,
                n.lanes |= e,
                e = _o(n.stateNode, a, e),
                co(n, e),
                !1;
            case 1:
                if (t = n.type,
                r = n.stateNode,
                (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Yn === null || !Yn.has(r))))
                    return n.flags |= 65536,
                    i &= -i,
                    n.lanes |= i,
                    i = Yd(i),
                    Gd(i, e, n, a),
                    co(n, i),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var Uo = Error(c(461))
      , Xe = !1;
    function tt(e, t, n, a) {
        t.child = e === null ? Xf(t, null, n, a) : ga(t, e.child, n, a)
    }
    function kd(e, t, n, a, i) {
        n = n.render;
        var r = t.ref;
        if ("ref"in a) {
            var d = {};
            for (var x in a)
                x !== "ref" && (d[x] = a[x])
        } else
            d = a;
        return ma(t),
        a = xo(e, t, n, d, r, i),
        x = go(),
        e !== null && !Xe ? (vo(e, t, i),
        fn(e, t, i)) : (Ne && x && Wr(t),
        t.flags |= 1,
        tt(e, t, a, i),
        t.child)
    }
    function Qd(e, t, n, a, i) {
        if (e === null) {
            var r = n.type;
            return typeof r == "function" && !Kr(r) && r.defaultProps === void 0 && n.compare === null ? (t.tag = 15,
            t.type = r,
            Vd(e, t, r, a, i)) : (e = Gs(n.type, null, a, t, t.mode, i),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (r = e.child,
        !Qo(e, i)) {
            var d = r.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : zl,
            n(d, a) && e.ref === t.ref)
                return fn(e, t, i)
        }
        return t.flags |= 1,
        e = ln(r, a),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Vd(e, t, n, a, i) {
        if (e !== null) {
            var r = e.memoizedProps;
            if (zl(r, a) && e.ref === t.ref)
                if (Xe = !1,
                t.pendingProps = a = r,
                Qo(e, i))
                    (e.flags & 131072) !== 0 && (Xe = !0);
                else
                    return t.lanes = e.lanes,
                    fn(e, t, i)
        }
        return Ho(e, t, n, a, i)
    }
    function Xd(e, t, n, a) {
        var i = a.children
          , r = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (r = r !== null ? r.baseLanes | n : n,
                e !== null) {
                    for (a = t.child = e.child,
                    i = 0; a !== null; )
                        i = i | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = i & ~r
                } else
                    a = 0,
                    t.child = null;
                return Zd(e, t, r, n, a)
            }
            if ((n & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Xs(t, r !== null ? r.cachePool : null),
                r !== null ? Jf(t, r) : fo(),
                Ff(t);
            else
                return a = t.lanes = 536870912,
                Zd(e, t, r !== null ? r.baseLanes | n : n, n, a)
        } else
            r !== null ? (Xs(t, r.cachePool),
            Jf(t, r),
            Hn(),
            t.memoizedState = null) : (e !== null && Xs(t, null),
            fo(),
            Hn());
        return tt(e, t, i, n),
        t.child
    }
    function Zl(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function Zd(e, t, n, a, i) {
        var r = so();
        return r = r === null ? null : {
            parent: Qe._currentValue,
            pool: r
        },
        t.memoizedState = {
            baseLanes: n,
            cachePool: r
        },
        e !== null && Xs(t, null),
        fo(),
        Ff(t),
        e !== null && ka(e, t, a, !0),
        t.childLanes = i,
        null
    }
    function ri(e, t) {
        return t = ci({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function Kd(e, t, n) {
        return ga(t, e.child, null, n),
        e = ri(t, t.pendingProps),
        e.flags |= 2,
        bt(t),
        t.memoizedState = null,
        e
    }
    function Hv(e, t, n) {
        var a = t.pendingProps
          , i = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        e === null) {
            if (Ne) {
                if (a.mode === "hidden")
                    return e = ri(t, a),
                    t.lanes = 536870912,
                    Zl(null, e);
                if (po(t),
                (e = Ue) ? (e = sp(e, _t),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: On !== null ? {
                        id: Kt,
                        overflow: Jt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = Rf(e),
                n.return = t,
                t.child = n,
                $e = t,
                Ue = null)) : e = null,
                e === null)
                    throw Rn(t);
                return t.lanes = 536870912,
                null
            }
            return ri(t, a)
        }
        var r = e.memoizedState;
        if (r !== null) {
            var d = r.dehydrated;
            if (po(t),
            i)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = Kd(e, t, n);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(c(558));
            else if (Xe || ka(e, t, n, !1),
            i = (n & e.childLanes) !== 0,
            Xe || i) {
                if (a = _e,
                a !== null && (d = Hu(a, n),
                d !== 0 && d !== r.retryLane))
                    throw r.retryLane = d,
                    ca(e, d),
                    dt(a, e, d),
                    Uo;
                vi(),
                t = Kd(e, t, n)
            } else
                e = r.treeContext,
                Ue = Ht(d.nextSibling),
                $e = t,
                Ne = !0,
                Cn = null,
                _t = !1,
                e !== null && Df(t, e),
                t = ri(t, a),
                t.flags |= 4096;
            return t
        }
        return e = ln(e.child, {
            mode: a.mode,
            children: a.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function oi(e, t) {
        var n = t.ref;
        if (n === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(c(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }
    function Ho(e, t, n, a, i) {
        return ma(t),
        n = xo(e, t, n, a, void 0, i),
        a = go(),
        e !== null && !Xe ? (vo(e, t, i),
        fn(e, t, i)) : (Ne && a && Wr(t),
        t.flags |= 1,
        tt(e, t, n, i),
        t.child)
    }
    function Jd(e, t, n, a, i, r) {
        return ma(t),
        t.updateQueue = null,
        n = If(t, a, n, i),
        Wf(e),
        a = go(),
        e !== null && !Xe ? (vo(e, t, r),
        fn(e, t, r)) : (Ne && a && Wr(t),
        t.flags |= 1,
        tt(e, t, n, r),
        t.child)
    }
    function Fd(e, t, n, a, i) {
        if (ma(t),
        t.stateNode === null) {
            var r = qa
              , d = n.contextType;
            typeof d == "object" && d !== null && (r = et(d)),
            r = new n(a,r),
            t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
            r.updater = Do,
            t.stateNode = r,
            r._reactInternals = t,
            r = t.stateNode,
            r.props = a,
            r.state = t.memoizedState,
            r.refs = {},
            ro(t),
            d = n.contextType,
            r.context = typeof d == "object" && d !== null ? et(d) : qa,
            r.state = t.memoizedState,
            d = n.getDerivedStateFromProps,
            typeof d == "function" && (Mo(t, n, d, a),
            r.state = t.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (d = r.state,
            typeof r.componentWillMount == "function" && r.componentWillMount(),
            typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
            d !== r.state && Do.enqueueReplaceState(r, r.state, null),
            Gl(t, a, r, i),
            Yl(),
            r.state = t.memoizedState),
            typeof r.componentDidMount == "function" && (t.flags |= 4194308),
            a = !0
        } else if (e === null) {
            r = t.stateNode;
            var x = t.memoizedProps
              , w = ya(n, x);
            r.props = w;
            var z = r.context
              , L = n.contextType;
            d = qa,
            typeof L == "object" && L !== null && (d = et(L));
            var G = n.getDerivedStateFromProps;
            L = typeof G == "function" || typeof r.getSnapshotBeforeUpdate == "function",
            x = t.pendingProps !== x,
            L || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (x || z !== d) && Ud(t, r, a, d),
            Mn = !1;
            var M = t.memoizedState;
            r.state = M,
            Gl(t, a, r, i),
            Yl(),
            z = t.memoizedState,
            x || M !== z || Mn ? (typeof G == "function" && (Mo(t, n, G, a),
            z = t.memoizedState),
            (w = Mn || _d(t, n, w, a, M, z, d)) ? (L || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(),
            typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()),
            typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = z),
            r.props = a,
            r.state = z,
            r.context = d,
            a = w) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            r = t.stateNode,
            oo(e, t),
            d = t.memoizedProps,
            L = ya(n, d),
            r.props = L,
            G = t.pendingProps,
            M = r.context,
            z = n.contextType,
            w = qa,
            typeof z == "object" && z !== null && (w = et(z)),
            x = n.getDerivedStateFromProps,
            (z = typeof x == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (d !== G || M !== w) && Ud(t, r, a, w),
            Mn = !1,
            M = t.memoizedState,
            r.state = M,
            Gl(t, a, r, i),
            Yl();
            var U = t.memoizedState;
            d !== G || M !== U || Mn || e !== null && e.dependencies !== null && Qs(e.dependencies) ? (typeof x == "function" && (Mo(t, n, x, a),
            U = t.memoizedState),
            (L = Mn || _d(t, n, L, a, M, U, w) || e !== null && e.dependencies !== null && Qs(e.dependencies)) ? (z || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(a, U, w),
            typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(a, U, w)),
            typeof r.componentDidUpdate == "function" && (t.flags |= 4),
            typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 4),
            typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = U),
            r.props = a,
            r.state = U,
            r.context = w,
            a = L) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 4),
            typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return r = a,
        oi(e, t),
        a = (t.flags & 128) !== 0,
        r || a ? (r = t.stateNode,
        n = a && typeof n.getDerivedStateFromError != "function" ? null : r.render(),
        t.flags |= 1,
        e !== null && a ? (t.child = ga(t, e.child, null, i),
        t.child = ga(t, null, n, i)) : tt(e, t, n, i),
        t.memoizedState = r.state,
        e = t.child) : e = fn(e, t, i),
        e
    }
    function Wd(e, t, n, a) {
        return fa(),
        t.flags |= 256,
        tt(e, t, n, a),
        t.child
    }
    var Lo = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function qo(e) {
        return {
            baseLanes: e,
            cachePool: Bf()
        }
    }
    function Bo(e, t, n) {
        return e = e !== null ? e.childLanes & ~n : 0,
        t && (e |= St),
        e
    }
    function Id(e, t, n) {
        var a = t.pendingProps, i = !1, r = (t.flags & 128) !== 0, d;
        if ((d = r) || (d = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0),
        d && (i = !0,
        t.flags &= -129),
        d = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (Ne) {
                if (i ? Un(t) : Hn(),
                (e = Ue) ? (e = sp(e, _t),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: On !== null ? {
                        id: Kt,
                        overflow: Jt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = Rf(e),
                n.return = t,
                t.child = n,
                $e = t,
                Ue = null)) : e = null,
                e === null)
                    throw Rn(t);
                return wc(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var x = a.children;
            return a = a.fallback,
            i ? (Hn(),
            i = t.mode,
            x = ci({
                mode: "hidden",
                children: x
            }, i),
            a = ua(a, i, n, null),
            x.return = t,
            a.return = t,
            x.sibling = a,
            t.child = x,
            a = t.child,
            a.memoizedState = qo(n),
            a.childLanes = Bo(e, d, n),
            t.memoizedState = Lo,
            Zl(null, a)) : (Un(t),
            Yo(t, x))
        }
        var w = e.memoizedState;
        if (w !== null && (x = w.dehydrated,
        x !== null)) {
            if (r)
                t.flags & 256 ? (Un(t),
                t.flags &= -257,
                t = Go(e, t, n)) : t.memoizedState !== null ? (Hn(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (Hn(),
                x = a.fallback,
                i = t.mode,
                a = ci({
                    mode: "visible",
                    children: a.children
                }, i),
                x = ua(x, i, n, null),
                x.flags |= 2,
                a.return = t,
                x.return = t,
                a.sibling = x,
                t.child = a,
                ga(t, e.child, null, n),
                a = t.child,
                a.memoizedState = qo(n),
                a.childLanes = Bo(e, d, n),
                t.memoizedState = Lo,
                t = Zl(null, a));
            else if (Un(t),
            wc(x)) {
                if (d = x.nextSibling && x.nextSibling.dataset,
                d)
                    var z = d.dgst;
                d = z,
                a = Error(c(419)),
                a.stack = "",
                a.digest = d,
                _l({
                    value: a,
                    source: null,
                    stack: null
                }),
                t = Go(e, t, n)
            } else if (Xe || ka(e, t, n, !1),
            d = (n & e.childLanes) !== 0,
            Xe || d) {
                if (d = _e,
                d !== null && (a = Hu(d, n),
                a !== 0 && a !== w.retryLane))
                    throw w.retryLane = a,
                    ca(e, a),
                    dt(d, e, a),
                    Uo;
                bc(x) || vi(),
                t = Go(e, t, n)
            } else
                bc(x) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = w.treeContext,
                Ue = Ht(x.nextSibling),
                $e = t,
                Ne = !0,
                Cn = null,
                _t = !1,
                e !== null && Df(t, e),
                t = Yo(t, a.children),
                t.flags |= 4096);
            return t
        }
        return i ? (Hn(),
        x = a.fallback,
        i = t.mode,
        w = e.child,
        z = w.sibling,
        a = ln(w, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = w.subtreeFlags & 65011712,
        z !== null ? x = ln(z, x) : (x = ua(x, i, n, null),
        x.flags |= 2),
        x.return = t,
        a.return = t,
        a.sibling = x,
        t.child = a,
        Zl(null, a),
        a = t.child,
        x = e.child.memoizedState,
        x === null ? x = qo(n) : (i = x.cachePool,
        i !== null ? (w = Qe._currentValue,
        i = i.parent !== w ? {
            parent: w,
            pool: w
        } : i) : i = Bf(),
        x = {
            baseLanes: x.baseLanes | n,
            cachePool: i
        }),
        a.memoizedState = x,
        a.childLanes = Bo(e, d, n),
        t.memoizedState = Lo,
        Zl(e.child, a)) : (Un(t),
        n = e.child,
        e = n.sibling,
        n = ln(n, {
            mode: "visible",
            children: a.children
        }),
        n.return = t,
        n.sibling = null,
        e !== null && (d = t.deletions,
        d === null ? (t.deletions = [e],
        t.flags |= 16) : d.push(e)),
        t.child = n,
        t.memoizedState = null,
        n)
    }
    function Yo(e, t) {
        return t = ci({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function ci(e, t) {
        return e = vt(22, e, null, t),
        e.lanes = 0,
        e
    }
    function Go(e, t, n) {
        return ga(t, e.child, null, n),
        e = Yo(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Pd(e, t, n) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t),
        to(e.return, t, n)
    }
    function ko(e, t, n, a, i, r) {
        var d = e.memoizedState;
        d === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: n,
            tailMode: i,
            treeForkCount: r
        } : (d.isBackwards = t,
        d.rendering = null,
        d.renderingStartTime = 0,
        d.last = a,
        d.tail = n,
        d.tailMode = i,
        d.treeForkCount = r)
    }
    function $d(e, t, n) {
        var a = t.pendingProps
          , i = a.revealOrder
          , r = a.tail;
        a = a.children;
        var d = Ge.current
          , x = (d & 2) !== 0;
        if (x ? (d = d & 1 | 2,
        t.flags |= 128) : d &= 1,
        Z(Ge, d),
        tt(e, t, a, n),
        a = Ne ? Dl : 0,
        !x && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Pd(e, n, t);
                else if (e.tag === 19)
                    Pd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Is(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            ko(t, !1, i, n, r, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Is(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            ko(t, !0, n, null, r, a);
            break;
        case "together":
            ko(t, !1, null, null, void 0, a);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function fn(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        Bn |= t.lanes,
        (n & t.childLanes) === 0)
            if (e !== null) {
                if (ka(e, t, n, !1),
                (n & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(c(153));
        if (t.child !== null) {
            for (e = t.child,
            n = ln(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = ln(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function Qo(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Qs(e)))
    }
    function Lv(e, t, n) {
        switch (t.tag) {
        case 3:
            Ye(t, t.stateNode.containerInfo),
            zn(t, Qe, e.memoizedState.cache),
            fa();
            break;
        case 27:
        case 5:
            At(t);
            break;
        case 4:
            Ye(t, t.stateNode.containerInfo);
            break;
        case 10:
            zn(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                po(t),
                null;
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (Un(t),
                t.flags |= 128,
                null) : (n & t.child.childLanes) !== 0 ? Id(e, t, n) : (Un(t),
                e = fn(e, t, n),
                e !== null ? e.sibling : null);
            Un(t);
            break;
        case 19:
            var i = (e.flags & 128) !== 0;
            if (a = (n & t.childLanes) !== 0,
            a || (ka(e, t, n, !1),
            a = (n & t.childLanes) !== 0),
            i) {
                if (a)
                    return $d(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState,
            i !== null && (i.rendering = null,
            i.tail = null,
            i.lastEffect = null),
            Z(Ge, Ge.current),
            a)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            Xd(e, t, n, t.pendingProps);
        case 24:
            zn(t, Qe, e.memoizedState.cache)
        }
        return fn(e, t, n)
    }
    function em(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                Xe = !0;
            else {
                if (!Qo(e, n) && (t.flags & 128) === 0)
                    return Xe = !1,
                    Lv(e, t, n);
                Xe = (e.flags & 131072) !== 0
            }
        else
            Xe = !1,
            Ne && (t.flags & 1048576) !== 0 && Mf(t, Dl, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                var a = t.pendingProps;
                if (e = ha(t.elementType),
                t.type = e,
                typeof e == "function")
                    Kr(e) ? (a = ya(e, a),
                    t.tag = 1,
                    t = Fd(null, t, e, a, n)) : (t.tag = 0,
                    t = Ho(null, t, e, a, n));
                else {
                    if (e != null) {
                        var i = e.$$typeof;
                        if (i === K) {
                            t.tag = 11,
                            t = kd(null, t, e, a, n);
                            break e
                        } else if (i === X) {
                            t.tag = 14,
                            t = Qd(null, t, e, a, n);
                            break e
                        }
                    }
                    throw t = P(e) || e,
                    Error(c(306, t, ""))
                }
            }
            return t;
        case 0:
            return Ho(e, t, t.type, t.pendingProps, n);
        case 1:
            return a = t.type,
            i = ya(a, t.pendingProps),
            Fd(e, t, a, i, n);
        case 3:
            e: {
                if (Ye(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(c(387));
                a = t.pendingProps;
                var r = t.memoizedState;
                i = r.element,
                oo(e, t),
                Gl(t, a, null, n);
                var d = t.memoizedState;
                if (a = d.cache,
                zn(t, Qe, a),
                a !== r.cache && no(t, [Qe], n, !0),
                Yl(),
                a = d.element,
                r.isDehydrated)
                    if (r = {
                        element: a,
                        isDehydrated: !1,
                        cache: d.cache
                    },
                    t.updateQueue.baseState = r,
                    t.memoizedState = r,
                    t.flags & 256) {
                        t = Wd(e, t, a, n);
                        break e
                    } else if (a !== i) {
                        i = zt(Error(c(424)), t),
                        _l(i),
                        t = Wd(e, t, a, n);
                        break e
                    } else
                        for (e = t.stateNode.containerInfo,
                        e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e,
                        Ue = Ht(e.firstChild),
                        $e = t,
                        Ne = !0,
                        Cn = null,
                        _t = !0,
                        n = Xf(t, null, a, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling;
                else {
                    if (fa(),
                    a === i) {
                        t = fn(e, t, n);
                        break e
                    }
                    tt(e, t, a, n)
                }
                t = t.child
            }
            return t;
        case 26:
            return oi(e, t),
            e === null ? (n = fp(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Ne || (n = t.type,
            e = t.pendingProps,
            a = Ei(de.current).createElement(n),
            a[Pe] = t,
            a[it] = e,
            nt(a, n, e),
            We(a),
            t.stateNode = a) : t.memoizedState = fp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return At(t),
            e === null && Ne && (a = t.stateNode = op(t.type, t.pendingProps, de.current),
            $e = t,
            _t = !0,
            i = Ue,
            Vn(t.type) ? (Sc = i,
            Ue = Ht(a.firstChild)) : Ue = i),
            tt(e, t, t.pendingProps.children, n),
            oi(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && Ne && ((i = a = Ue) && (a = my(a, t.type, t.pendingProps, _t),
            a !== null ? (t.stateNode = a,
            $e = t,
            Ue = Ht(a.firstChild),
            _t = !1,
            i = !0) : i = !1),
            i || Rn(t)),
            At(t),
            i = t.type,
            r = t.pendingProps,
            d = e !== null ? e.memoizedProps : null,
            a = r.children,
            gc(i, r) ? a = null : d !== null && gc(i, d) && (t.flags |= 32),
            t.memoizedState !== null && (i = xo(e, t, Ov, null, null, n),
            rs._currentValue = i),
            oi(e, t),
            tt(e, t, a, n),
            t.child;
        case 6:
            return e === null && Ne && ((e = n = Ue) && (n = py(n, t.pendingProps, _t),
            n !== null ? (t.stateNode = n,
            $e = t,
            Ue = null,
            e = !0) : e = !1),
            e || Rn(t)),
            null;
        case 13:
            return Id(e, t, n);
        case 4:
            return Ye(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            e === null ? t.child = ga(t, null, a, n) : tt(e, t, a, n),
            t.child;
        case 11:
            return kd(e, t, t.type, t.pendingProps, n);
        case 7:
            return tt(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return tt(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return tt(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            return a = t.pendingProps,
            zn(t, t.type, a.value),
            tt(e, t, a.children, n),
            t.child;
        case 9:
            return i = t.type._context,
            a = t.pendingProps.children,
            ma(t),
            i = et(i),
            a = a(i),
            t.flags |= 1,
            tt(e, t, a, n),
            t.child;
        case 14:
            return Qd(e, t, t.type, t.pendingProps, n);
        case 15:
            return Vd(e, t, t.type, t.pendingProps, n);
        case 19:
            return $d(e, t, n);
        case 31:
            return Hv(e, t, n);
        case 22:
            return Xd(e, t, n, t.pendingProps);
        case 24:
            return ma(t),
            a = et(Qe),
            e === null ? (i = so(),
            i === null && (i = _e,
            r = ao(),
            i.pooledCache = r,
            r.refCount++,
            r !== null && (i.pooledCacheLanes |= n),
            i = r),
            t.memoizedState = {
                parent: a,
                cache: i
            },
            ro(t),
            zn(t, Qe, i)) : ((e.lanes & n) !== 0 && (oo(e, t),
            Gl(t, null, null, n),
            Yl()),
            i = e.memoizedState,
            r = t.memoizedState,
            i.parent !== a ? (i = {
                parent: a,
                cache: a
            },
            t.memoizedState = i,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
            zn(t, Qe, a)) : (a = r.cache,
            zn(t, Qe, a),
            a !== i.cache && no(t, [Qe], n, !0))),
            tt(e, t, t.pendingProps.children, n),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(c(156, t.tag))
    }
    function dn(e) {
        e.flags |= 4
    }
    function Vo(e, t, n, a, i) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (i & 335544128) === i)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (Am())
                    e.flags |= 8192;
                else
                    throw xa = Ks,
                    io
        } else
            e.flags &= -16777217
    }
    function tm(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !xp(t))
            if (Am())
                e.flags |= 8192;
            else
                throw xa = Ks,
                io
    }
    function ui(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? Du() : 536870912,
        e.lanes |= t,
        el |= t)
    }
    function Kl(e, t) {
        if (!Ne)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var a = null; n !== null; )
                    n.alternate !== null && (a = n),
                    n = n.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
            }
    }
    function He(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , a = 0;
        if (t)
            for (var i = e.child; i !== null; )
                n |= i.lanes | i.childLanes,
                a |= i.subtreeFlags & 65011712,
                a |= i.flags & 65011712,
                i.return = e,
                i = i.sibling;
        else
            for (i = e.child; i !== null; )
                n |= i.lanes | i.childLanes,
                a |= i.subtreeFlags,
                a |= i.flags,
                i.return = e,
                i = i.sibling;
        return e.subtreeFlags |= a,
        e.childLanes = n,
        t
    }
    function qv(e, t, n) {
        var a = t.pendingProps;
        switch (Ir(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return He(t),
            null;
        case 1:
            return He(t),
            null;
        case 3:
            return n = t.stateNode,
            a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            on(Qe),
            Re(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (e === null || e.child === null) && (Ga(t) ? dn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            $r())),
            He(t),
            null;
        case 26:
            var i = t.type
              , r = t.memoizedState;
            return e === null ? (dn(t),
            r !== null ? (He(t),
            tm(t, r)) : (He(t),
            Vo(t, i, null, a, n))) : r ? r !== e.memoizedState ? (dn(t),
            He(t),
            tm(t, r)) : (He(t),
            t.flags &= -16777217) : (e = e.memoizedProps,
            e !== a && dn(t),
            He(t),
            Vo(t, i, e, a, n)),
            null;
        case 27:
            if (Xt(t),
            n = de.current,
            i = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== a && dn(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(c(166));
                    return He(t),
                    null
                }
                e = W.current,
                Ga(t) ? _f(t) : (e = op(i, a, n),
                t.stateNode = e,
                dn(t))
            }
            return He(t),
            null;
        case 5:
            if (Xt(t),
            i = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== a && dn(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(c(166));
                    return He(t),
                    null
                }
                if (r = W.current,
                Ga(t))
                    _f(t);
                else {
                    var d = Ei(de.current);
                    switch (r) {
                    case 1:
                        r = d.createElementNS("http://www.w3.org/2000/svg", i);
                        break;
                    case 2:
                        r = d.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                        break;
                    default:
                        switch (i) {
                        case "svg":
                            r = d.createElementNS("http://www.w3.org/2000/svg", i);
                            break;
                        case "math":
                            r = d.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                            break;
                        case "script":
                            r = d.createElement("div"),
                            r.innerHTML = "<script><\/script>",
                            r = r.removeChild(r.firstChild);
                            break;
                        case "select":
                            r = typeof a.is == "string" ? d.createElement("select", {
                                is: a.is
                            }) : d.createElement("select"),
                            a.multiple ? r.multiple = !0 : a.size && (r.size = a.size);
                            break;
                        default:
                            r = typeof a.is == "string" ? d.createElement(i, {
                                is: a.is
                            }) : d.createElement(i)
                        }
                    }
                    r[Pe] = t,
                    r[it] = a;
                    e: for (d = t.child; d !== null; ) {
                        if (d.tag === 5 || d.tag === 6)
                            r.appendChild(d.stateNode);
                        else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                            d.child.return = d,
                            d = d.child;
                            continue
                        }
                        if (d === t)
                            break e;
                        for (; d.sibling === null; ) {
                            if (d.return === null || d.return === t)
                                break e;
                            d = d.return
                        }
                        d.sibling.return = d.return,
                        d = d.sibling
                    }
                    t.stateNode = r;
                    e: switch (nt(r, i, a),
                    i) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break e;
                    case "img":
                        a = !0;
                        break e;
                    default:
                        a = !1
                    }
                    a && dn(t)
                }
            }
            return He(t),
            Vo(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== a && dn(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(c(166));
                if (e = de.current,
                Ga(t)) {
                    if (e = t.stateNode,
                    n = t.memoizedProps,
                    a = null,
                    i = $e,
                    i !== null)
                        switch (i.tag) {
                        case 27:
                        case 5:
                            a = i.memoizedProps
                        }
                    e[Pe] = t,
                    e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Im(e.nodeValue, n)),
                    e || Rn(t, !0)
                } else
                    e = Ei(e).createTextNode(a),
                    e[Pe] = t,
                    t.stateNode = e
            }
            return He(t),
            null;
        case 31:
            if (n = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (a = Ga(t),
                n !== null) {
                    if (e === null) {
                        if (!a)
                            throw Error(c(318));
                        if (e = t.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(c(557));
                        e[Pe] = t
                    } else
                        fa(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    He(t),
                    e = !1
                } else
                    n = $r(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (bt(t),
                    t) : (bt(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(c(558))
            }
            return He(t),
            null;
        case 13:
            if (a = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (i = Ga(t),
                a !== null && a.dehydrated !== null) {
                    if (e === null) {
                        if (!i)
                            throw Error(c(318));
                        if (i = t.memoizedState,
                        i = i !== null ? i.dehydrated : null,
                        !i)
                            throw Error(c(317));
                        i[Pe] = t
                    } else
                        fa(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    He(t),
                    i = !1
                } else
                    i = $r(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
                    i = !0;
                if (!i)
                    return t.flags & 256 ? (bt(t),
                    t) : (bt(t),
                    null)
            }
            return bt(t),
            (t.flags & 128) !== 0 ? (t.lanes = n,
            t) : (n = a !== null,
            e = e !== null && e.memoizedState !== null,
            n && (a = t.child,
            i = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool),
            r = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (r = a.memoizedState.cachePool.pool),
            r !== i && (a.flags |= 2048)),
            n !== e && n && (t.child.flags |= 8192),
            ui(t, t.updateQueue),
            He(t),
            null);
        case 4:
            return Re(),
            e === null && dc(t.stateNode.containerInfo),
            He(t),
            null;
        case 10:
            return on(t.type),
            He(t),
            null;
        case 19:
            if (q(Ge),
            a = t.memoizedState,
            a === null)
                return He(t),
                null;
            if (i = (t.flags & 128) !== 0,
            r = a.rendering,
            r === null)
                if (i)
                    Kl(a, !1);
                else {
                    if (Be !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (r = Is(e),
                            r !== null) {
                                for (t.flags |= 128,
                                Kl(a, !1),
                                e = r.updateQueue,
                                t.updateQueue = e,
                                ui(t, e),
                                t.subtreeFlags = 0,
                                e = n,
                                n = t.child; n !== null; )
                                    Cf(n, e),
                                    n = n.sibling;
                                return Z(Ge, Ge.current & 1 | 2),
                                Ne && sn(t, a.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    a.tail !== null && pt() > hi && (t.flags |= 128,
                    i = !0,
                    Kl(a, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!i)
                    if (e = Is(r),
                    e !== null) {
                        if (t.flags |= 128,
                        i = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        ui(t, e),
                        Kl(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !r.alternate && !Ne)
                            return He(t),
                            null
                    } else
                        2 * pt() - a.renderingStartTime > hi && n !== 536870912 && (t.flags |= 128,
                        i = !0,
                        Kl(a, !1),
                        t.lanes = 4194304);
                a.isBackwards ? (r.sibling = t.child,
                t.child = r) : (e = a.last,
                e !== null ? e.sibling = r : t.child = r,
                a.last = r)
            }
            return a.tail !== null ? (e = a.tail,
            a.rendering = e,
            a.tail = e.sibling,
            a.renderingStartTime = pt(),
            e.sibling = null,
            n = Ge.current,
            Z(Ge, i ? n & 1 | 2 : n & 1),
            Ne && sn(t, a.treeForkCount),
            e) : (He(t),
            null);
        case 22:
        case 23:
            return bt(t),
            mo(),
            a = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (He(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : He(t),
            n = t.updateQueue,
            n !== null && ui(t, n.retryQueue),
            n = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            a = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== n && (t.flags |= 2048),
            e !== null && q(pa),
            null;
        case 24:
            return n = null,
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            on(Qe),
            He(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(c(156, t.tag))
    }
    function Bv(e, t) {
        switch (Ir(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return on(Qe),
            Re(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Xt(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (bt(t),
                t.alternate === null)
                    throw Error(c(340));
                fa()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (bt(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(c(340));
                fa()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return q(Ge),
            null;
        case 4:
            return Re(),
            null;
        case 10:
            return on(t.type),
            null;
        case 22:
        case 23:
            return bt(t),
            mo(),
            e !== null && q(pa),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return on(Qe),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function nm(e, t) {
        switch (Ir(t),
        t.tag) {
        case 3:
            on(Qe),
            Re();
            break;
        case 26:
        case 27:
        case 5:
            Xt(t);
            break;
        case 4:
            Re();
            break;
        case 31:
            t.memoizedState !== null && bt(t);
            break;
        case 13:
            bt(t);
            break;
        case 19:
            q(Ge);
            break;
        case 10:
            on(t.type);
            break;
        case 22:
        case 23:
            bt(t),
            mo(),
            e !== null && q(pa);
            break;
        case 24:
            on(Qe)
        }
    }
    function Jl(e, t) {
        try {
            var n = t.updateQueue
              , a = n !== null ? n.lastEffect : null;
            if (a !== null) {
                var i = a.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        a = void 0;
                        var r = n.create
                          , d = n.inst;
                        a = r(),
                        d.destroy = a
                    }
                    n = n.next
                } while (n !== i)
            }
        } catch (x) {
            Ce(t, t.return, x)
        }
    }
    function Ln(e, t, n) {
        try {
            var a = t.updateQueue
              , i = a !== null ? a.lastEffect : null;
            if (i !== null) {
                var r = i.next;
                a = r;
                do {
                    if ((a.tag & e) === e) {
                        var d = a.inst
                          , x = d.destroy;
                        if (x !== void 0) {
                            d.destroy = void 0,
                            i = t;
                            var w = n
                              , z = x;
                            try {
                                z()
                            } catch (L) {
                                Ce(i, w, L)
                            }
                        }
                    }
                    a = a.next
                } while (a !== r)
            }
        } catch (L) {
            Ce(t, t.return, L)
        }
    }
    function am(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                Kf(t, n)
            } catch (a) {
                Ce(e, e.return, a)
            }
        }
    }
    function lm(e, t, n) {
        n.props = ya(e.type, e.memoizedProps),
        n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (a) {
            Ce(e, t, a)
        }
    }
    function Fl(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var a = e.stateNode;
                    break;
                case 30:
                    a = e.stateNode;
                    break;
                default:
                    a = e.stateNode
                }
                typeof n == "function" ? e.refCleanup = n(a) : n.current = a
            }
        } catch (i) {
            Ce(e, t, i)
        }
    }
    function Ft(e, t) {
        var n = e.ref
          , a = e.refCleanup;
        if (n !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (i) {
                    Ce(e, t, i)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (i) {
                    Ce(e, t, i)
                }
            else
                n.current = null
    }
    function sm(e) {
        var t = e.type
          , n = e.memoizedProps
          , a = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && a.focus();
                break e;
            case "img":
                n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet)
            }
        } catch (i) {
            Ce(e, e.return, i)
        }
    }
    function Xo(e, t, n) {
        try {
            var a = e.stateNode;
            ry(a, e.type, n, t),
            a[it] = t
        } catch (i) {
            Ce(e, e.return, i)
        }
    }
    function im(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Vn(e.type) || e.tag === 4
    }
    function Zo(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || im(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Vn(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Ko(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            t.appendChild(e),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = nn));
        else if (a !== 4 && (a === 27 && Vn(e.type) && (n = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (Ko(e, t, n),
            e = e.sibling; e !== null; )
                Ko(e, t, n),
                e = e.sibling
    }
    function fi(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (a !== 4 && (a === 27 && Vn(e.type) && (n = e.stateNode),
        e = e.child,
        e !== null))
            for (fi(e, t, n),
            e = e.sibling; e !== null; )
                fi(e, t, n),
                e = e.sibling
    }
    function rm(e) {
        var t = e.stateNode
          , n = e.memoizedProps;
        try {
            for (var a = e.type, i = t.attributes; i.length; )
                t.removeAttributeNode(i[0]);
            nt(t, a, n),
            t[Pe] = e,
            t[it] = n
        } catch (r) {
            Ce(e, e.return, r)
        }
    }
    var mn = !1
      , Ze = !1
      , Jo = !1
      , om = typeof WeakSet == "function" ? WeakSet : Set
      , Ie = null;
    function Yv(e, t) {
        if (e = e.containerInfo,
        hc = Mi,
        e = bf(e),
        Yr(e)) {
            if ("selectionStart"in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var a = n.getSelection && n.getSelection();
                    if (a && a.rangeCount !== 0) {
                        n = a.anchorNode;
                        var i = a.anchorOffset
                          , r = a.focusNode;
                        a = a.focusOffset;
                        try {
                            n.nodeType,
                            r.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var d = 0
                          , x = -1
                          , w = -1
                          , z = 0
                          , L = 0
                          , G = e
                          , M = null;
                        t: for (; ; ) {
                            for (var U; G !== n || i !== 0 && G.nodeType !== 3 || (x = d + i),
                            G !== r || a !== 0 && G.nodeType !== 3 || (w = d + a),
                            G.nodeType === 3 && (d += G.nodeValue.length),
                            (U = G.firstChild) !== null; )
                                M = G,
                                G = U;
                            for (; ; ) {
                                if (G === e)
                                    break t;
                                if (M === n && ++z === i && (x = d),
                                M === r && ++L === a && (w = d),
                                (U = G.nextSibling) !== null)
                                    break;
                                G = M,
                                M = G.parentNode
                            }
                            G = U
                        }
                        n = x === -1 || w === -1 ? null : {
                            start: x,
                            end: w
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (xc = {
            focusedElem: e,
            selectionRange: n
        },
        Mi = !1,
        Ie = t; Ie !== null; )
            if (t = Ie,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                Ie = e;
            else
                for (; Ie !== null; ) {
                    switch (t = Ie,
                    r = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue,
                        e = e !== null ? e.events : null,
                        e !== null))
                            for (n = 0; n < e.length; n++)
                                i = e[n],
                                i.ref.impl = i.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && r !== null) {
                            e = void 0,
                            n = t,
                            i = r.memoizedProps,
                            r = r.memoizedState,
                            a = n.stateNode;
                            try {
                                var $ = ya(n.type, i);
                                e = a.getSnapshotBeforeUpdate($, r),
                                a.__reactInternalSnapshotBeforeUpdate = e
                            } catch (ie) {
                                Ce(n, n.return, ie)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            n = e.nodeType,
                            n === 9)
                                yc(e);
                            else if (n === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    yc(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(c(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        Ie = e;
                        break
                    }
                    Ie = t.return
                }
    }
    function cm(e, t, n) {
        var a = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            hn(e, n),
            a & 4 && Jl(5, n);
            break;
        case 1:
            if (hn(e, n),
            a & 4)
                if (e = n.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (d) {
                        Ce(n, n.return, d)
                    }
                else {
                    var i = ya(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (d) {
                        Ce(n, n.return, d)
                    }
                }
            a & 64 && am(n),
            a & 512 && Fl(n, n.return);
            break;
        case 3:
            if (hn(e, n),
            a & 64 && (e = n.updateQueue,
            e !== null)) {
                if (t = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        t = n.child.stateNode;
                        break;
                    case 1:
                        t = n.child.stateNode
                    }
                try {
                    Kf(e, t)
                } catch (d) {
                    Ce(n, n.return, d)
                }
            }
            break;
        case 27:
            t === null && a & 4 && rm(n);
        case 26:
        case 5:
            hn(e, n),
            t === null && a & 4 && sm(n),
            a & 512 && Fl(n, n.return);
            break;
        case 12:
            hn(e, n);
            break;
        case 31:
            hn(e, n),
            a & 4 && dm(e, n);
            break;
        case 13:
            hn(e, n),
            a & 4 && mm(e, n),
            a & 64 && (e = n.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (n = Fv.bind(null, n),
            hy(e, n))));
            break;
        case 22:
            if (a = n.memoizedState !== null || mn,
            !a) {
                t = t !== null && t.memoizedState !== null || Ze,
                i = mn;
                var r = Ze;
                mn = a,
                (Ze = t) && !r ? xn(e, n, (n.subtreeFlags & 8772) !== 0) : hn(e, n),
                mn = i,
                Ze = r
            }
            break;
        case 30:
            break;
        default:
            hn(e, n)
        }
    }
    function um(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        um(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && Nr(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Le = null
      , ot = !1;
    function pn(e, t, n) {
        for (n = n.child; n !== null; )
            fm(e, t, n),
            n = n.sibling
    }
    function fm(e, t, n) {
        if (ht && typeof ht.onCommitFiberUnmount == "function")
            try {
                ht.onCommitFiberUnmount(yl, n)
            } catch {}
        switch (n.tag) {
        case 26:
            Ze || Ft(n, t),
            pn(e, t, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            Ze || Ft(n, t);
            var a = Le
              , i = ot;
            Vn(n.type) && (Le = n.stateNode,
            ot = !1),
            pn(e, t, n),
            ls(n.stateNode),
            Le = a,
            ot = i;
            break;
        case 5:
            Ze || Ft(n, t);
        case 6:
            if (a = Le,
            i = ot,
            Le = null,
            pn(e, t, n),
            Le = a,
            ot = i,
            Le !== null)
                if (ot)
                    try {
                        (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(n.stateNode)
                    } catch (r) {
                        Ce(n, t, r)
                    }
                else
                    try {
                        Le.removeChild(n.stateNode)
                    } catch (r) {
                        Ce(n, t, r)
                    }
            break;
        case 18:
            Le !== null && (ot ? (e = Le,
            ap(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode),
            ol(e)) : ap(Le, n.stateNode));
            break;
        case 4:
            a = Le,
            i = ot,
            Le = n.stateNode.containerInfo,
            ot = !0,
            pn(e, t, n),
            Le = a,
            ot = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Ln(2, n, t),
            Ze || Ln(4, n, t),
            pn(e, t, n);
            break;
        case 1:
            Ze || (Ft(n, t),
            a = n.stateNode,
            typeof a.componentWillUnmount == "function" && lm(n, t, a)),
            pn(e, t, n);
            break;
        case 21:
            pn(e, t, n);
            break;
        case 22:
            Ze = (a = Ze) || n.memoizedState !== null,
            pn(e, t, n),
            Ze = a;
            break;
        default:
            pn(e, t, n)
        }
    }
    function dm(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                ol(e)
            } catch (n) {
                Ce(t, t.return, n)
            }
        }
    }
    function mm(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                ol(e)
            } catch (n) {
                Ce(t, t.return, n)
            }
    }
    function Gv(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new om),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new om),
            t;
        default:
            throw Error(c(435, e.tag))
        }
    }
    function di(e, t) {
        var n = Gv(e);
        t.forEach(function(a) {
            if (!n.has(a)) {
                n.add(a);
                var i = Wv.bind(null, e, a);
                a.then(i, i)
            }
        })
    }
    function ct(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var a = 0; a < n.length; a++) {
                var i = n[a]
                  , r = e
                  , d = t
                  , x = d;
                e: for (; x !== null; ) {
                    switch (x.tag) {
                    case 27:
                        if (Vn(x.type)) {
                            Le = x.stateNode,
                            ot = !1;
                            break e
                        }
                        break;
                    case 5:
                        Le = x.stateNode,
                        ot = !1;
                        break e;
                    case 3:
                    case 4:
                        Le = x.stateNode.containerInfo,
                        ot = !0;
                        break e
                    }
                    x = x.return
                }
                if (Le === null)
                    throw Error(c(160));
                fm(r, d, i),
                Le = null,
                ot = !1,
                r = i.alternate,
                r !== null && (r.return = null),
                i.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                pm(t, e),
                t = t.sibling
    }
    var Bt = null;
    function pm(e, t) {
        var n = e.alternate
          , a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ct(t, e),
            ut(e),
            a & 4 && (Ln(3, e, e.return),
            Jl(3, e),
            Ln(5, e, e.return));
            break;
        case 1:
            ct(t, e),
            ut(e),
            a & 512 && (Ze || n === null || Ft(n, n.return)),
            a & 64 && mn && (e = e.updateQueue,
            e !== null && (a = e.callbacks,
            a !== null && (n = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
            break;
        case 26:
            var i = Bt;
            if (ct(t, e),
            ut(e),
            a & 512 && (Ze || n === null || Ft(n, n.return)),
            a & 4) {
                var r = n !== null ? n.memoizedState : null;
                if (a = e.memoizedState,
                n === null)
                    if (a === null)
                        if (e.stateNode === null) {
                            e: {
                                a = e.type,
                                n = e.memoizedProps,
                                i = i.ownerDocument || i;
                                t: switch (a) {
                                case "title":
                                    r = i.getElementsByTagName("title")[0],
                                    (!r || r[Sl] || r[Pe] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = i.createElement(a),
                                    i.head.insertBefore(r, i.querySelector("head > title"))),
                                    nt(r, a, n),
                                    r[Pe] = e,
                                    We(r),
                                    a = r;
                                    break e;
                                case "link":
                                    var d = pp("link", "href", i).get(a + (n.href || ""));
                                    if (d) {
                                        for (var x = 0; x < d.length; x++)
                                            if (r = d[x],
                                            r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                d.splice(x, 1);
                                                break t
                                            }
                                    }
                                    r = i.createElement(a),
                                    nt(r, a, n),
                                    i.head.appendChild(r);
                                    break;
                                case "meta":
                                    if (d = pp("meta", "content", i).get(a + (n.content || ""))) {
                                        for (x = 0; x < d.length; x++)
                                            if (r = d[x],
                                            r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                d.splice(x, 1);
                                                break t
                                            }
                                    }
                                    r = i.createElement(a),
                                    nt(r, a, n),
                                    i.head.appendChild(r);
                                    break;
                                default:
                                    throw Error(c(468, a))
                                }
                                r[Pe] = e,
                                We(r),
                                a = r
                            }
                            e.stateNode = a
                        } else
                            hp(i, e.type, e.stateNode);
                    else
                        e.stateNode = mp(i, a, e.memoizedProps);
                else
                    r !== a ? (r === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : r.count--,
                    a === null ? hp(i, e.type, e.stateNode) : mp(i, a, e.memoizedProps)) : a === null && e.stateNode !== null && Xo(e, e.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            ct(t, e),
            ut(e),
            a & 512 && (Ze || n === null || Ft(n, n.return)),
            n !== null && a & 4 && Xo(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (ct(t, e),
            ut(e),
            a & 512 && (Ze || n === null || Ft(n, n.return)),
            e.flags & 32) {
                i = e.stateNode;
                try {
                    za(i, "")
                } catch ($) {
                    Ce(e, e.return, $)
                }
            }
            a & 4 && e.stateNode != null && (i = e.memoizedProps,
            Xo(e, i, n !== null ? n.memoizedProps : i)),
            a & 1024 && (Jo = !0);
            break;
        case 6:
            if (ct(t, e),
            ut(e),
            a & 4) {
                if (e.stateNode === null)
                    throw Error(c(162));
                a = e.memoizedProps,
                n = e.stateNode;
                try {
                    n.nodeValue = a
                } catch ($) {
                    Ce(e, e.return, $)
                }
            }
            break;
        case 3:
            if (Oi = null,
            i = Bt,
            Bt = Ti(t.containerInfo),
            ct(t, e),
            Bt = i,
            ut(e),
            a & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    ol(t.containerInfo)
                } catch ($) {
                    Ce(e, e.return, $)
                }
            Jo && (Jo = !1,
            hm(e));
            break;
        case 4:
            a = Bt,
            Bt = Ti(e.stateNode.containerInfo),
            ct(t, e),
            ut(e),
            Bt = a;
            break;
        case 12:
            ct(t, e),
            ut(e);
            break;
        case 31:
            ct(t, e),
            ut(e),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            di(e, a)));
            break;
        case 13:
            ct(t, e),
            ut(e),
            e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (pi = pt()),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            di(e, a)));
            break;
        case 22:
            i = e.memoizedState !== null;
            var w = n !== null && n.memoizedState !== null
              , z = mn
              , L = Ze;
            if (mn = z || i,
            Ze = L || w,
            ct(t, e),
            Ze = L,
            mn = z,
            ut(e),
            a & 8192)
                e: for (t = e.stateNode,
                t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                i && (n === null || w || mn || Ze || ba(e)),
                n = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            w = n = t;
                            try {
                                if (r = w.stateNode,
                                i)
                                    d = r.style,
                                    typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                                else {
                                    x = w.stateNode;
                                    var G = w.memoizedProps.style
                                      , M = G != null && G.hasOwnProperty("display") ? G.display : null;
                                    x.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim()
                                }
                            } catch ($) {
                                Ce(w, w.return, $)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            w = t;
                            try {
                                w.stateNode.nodeValue = i ? "" : w.memoizedProps
                            } catch ($) {
                                Ce(w, w.return, $)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (n === null) {
                            w = t;
                            try {
                                var U = w.stateNode;
                                i ? lp(U, !0) : lp(w.stateNode, !1)
                            } catch ($) {
                                Ce(w, w.return, $)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        n === t && (n = null),
                        t = t.return
                    }
                    n === t && (n = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a & 4 && (a = e.updateQueue,
            a !== null && (n = a.retryQueue,
            n !== null && (a.retryQueue = null,
            di(e, n))));
            break;
        case 19:
            ct(t, e),
            ut(e),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            di(e, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ct(t, e),
            ut(e)
        }
    }
    function ut(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, a = e.return; a !== null; ) {
                    if (im(a)) {
                        n = a;
                        break
                    }
                    a = a.return
                }
                if (n == null)
                    throw Error(c(160));
                switch (n.tag) {
                case 27:
                    var i = n.stateNode
                      , r = Zo(e);
                    fi(e, r, i);
                    break;
                case 5:
                    var d = n.stateNode;
                    n.flags & 32 && (za(d, ""),
                    n.flags &= -33);
                    var x = Zo(e);
                    fi(e, x, d);
                    break;
                case 3:
                case 4:
                    var w = n.stateNode.containerInfo
                      , z = Zo(e);
                    Ko(e, z, w);
                    break;
                default:
                    throw Error(c(161))
                }
            } catch (L) {
                Ce(e, e.return, L)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function hm(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                hm(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function hn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                cm(e, t.alternate, t),
                t = t.sibling
    }
    function ba(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Ln(4, t, t.return),
                ba(t);
                break;
            case 1:
                Ft(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == "function" && lm(t, t.return, n),
                ba(t);
                break;
            case 27:
                ls(t.stateNode);
            case 26:
            case 5:
                Ft(t, t.return),
                ba(t);
                break;
            case 22:
                t.memoizedState === null && ba(t);
                break;
            case 30:
                ba(t);
                break;
            default:
                ba(t)
            }
            e = e.sibling
        }
    }
    function xn(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var a = t.alternate
              , i = e
              , r = t
              , d = r.flags;
            switch (r.tag) {
            case 0:
            case 11:
            case 15:
                xn(i, r, n),
                Jl(4, r);
                break;
            case 1:
                if (xn(i, r, n),
                a = r,
                i = a.stateNode,
                typeof i.componentDidMount == "function")
                    try {
                        i.componentDidMount()
                    } catch (z) {
                        Ce(a, a.return, z)
                    }
                if (a = r,
                i = a.updateQueue,
                i !== null) {
                    var x = a.stateNode;
                    try {
                        var w = i.shared.hiddenCallbacks;
                        if (w !== null)
                            for (i.shared.hiddenCallbacks = null,
                            i = 0; i < w.length; i++)
                                Zf(w[i], x)
                    } catch (z) {
                        Ce(a, a.return, z)
                    }
                }
                n && d & 64 && am(r),
                Fl(r, r.return);
                break;
            case 27:
                rm(r);
            case 26:
            case 5:
                xn(i, r, n),
                n && a === null && d & 4 && sm(r),
                Fl(r, r.return);
                break;
            case 12:
                xn(i, r, n);
                break;
            case 31:
                xn(i, r, n),
                n && d & 4 && dm(i, r);
                break;
            case 13:
                xn(i, r, n),
                n && d & 4 && mm(i, r);
                break;
            case 22:
                r.memoizedState === null && xn(i, r, n),
                Fl(r, r.return);
                break;
            case 30:
                break;
            default:
                xn(i, r, n)
            }
            t = t.sibling
        }
    }
    function Fo(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++,
        n != null && Ul(n))
    }
    function Wo(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && Ul(e))
    }
    function Yt(e, t, n, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                xm(e, t, n, a),
                t = t.sibling
    }
    function xm(e, t, n, a) {
        var i = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Yt(e, t, n, a),
            i & 2048 && Jl(9, t);
            break;
        case 1:
            Yt(e, t, n, a);
            break;
        case 3:
            Yt(e, t, n, a),
            i & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && Ul(e)));
            break;
        case 12:
            if (i & 2048) {
                Yt(e, t, n, a),
                e = t.stateNode;
                try {
                    var r = t.memoizedProps
                      , d = r.id
                      , x = r.onPostCommit;
                    typeof x == "function" && x(d, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (w) {
                    Ce(t, t.return, w)
                }
            } else
                Yt(e, t, n, a);
            break;
        case 31:
            Yt(e, t, n, a);
            break;
        case 13:
            Yt(e, t, n, a);
            break;
        case 23:
            break;
        case 22:
            r = t.stateNode,
            d = t.alternate,
            t.memoizedState !== null ? r._visibility & 2 ? Yt(e, t, n, a) : Wl(e, t) : r._visibility & 2 ? Yt(e, t, n, a) : (r._visibility |= 2,
            Ia(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
            i & 2048 && Fo(d, t);
            break;
        case 24:
            Yt(e, t, n, a),
            i & 2048 && Wo(t.alternate, t);
            break;
        default:
            Yt(e, t, n, a)
        }
    }
    function Ia(e, t, n, a, i) {
        for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var r = e
              , d = t
              , x = n
              , w = a
              , z = d.flags;
            switch (d.tag) {
            case 0:
            case 11:
            case 15:
                Ia(r, d, x, w, i),
                Jl(8, d);
                break;
            case 23:
                break;
            case 22:
                var L = d.stateNode;
                d.memoizedState !== null ? L._visibility & 2 ? Ia(r, d, x, w, i) : Wl(r, d) : (L._visibility |= 2,
                Ia(r, d, x, w, i)),
                i && z & 2048 && Fo(d.alternate, d);
                break;
            case 24:
                Ia(r, d, x, w, i),
                i && z & 2048 && Wo(d.alternate, d);
                break;
            default:
                Ia(r, d, x, w, i)
            }
            t = t.sibling
        }
    }
    function Wl(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var n = e
                  , a = t
                  , i = a.flags;
                switch (a.tag) {
                case 22:
                    Wl(n, a),
                    i & 2048 && Fo(a.alternate, a);
                    break;
                case 24:
                    Wl(n, a),
                    i & 2048 && Wo(a.alternate, a);
                    break;
                default:
                    Wl(n, a)
                }
                t = t.sibling
            }
    }
    var Il = 8192;
    function Pa(e, t, n) {
        if (e.subtreeFlags & Il)
            for (e = e.child; e !== null; )
                gm(e, t, n),
                e = e.sibling
    }
    function gm(e, t, n) {
        switch (e.tag) {
        case 26:
            Pa(e, t, n),
            e.flags & Il && e.memoizedState !== null && Ay(n, Bt, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Pa(e, t, n);
            break;
        case 3:
        case 4:
            var a = Bt;
            Bt = Ti(e.stateNode.containerInfo),
            Pa(e, t, n),
            Bt = a;
            break;
        case 22:
            e.memoizedState === null && (a = e.alternate,
            a !== null && a.memoizedState !== null ? (a = Il,
            Il = 16777216,
            Pa(e, t, n),
            Il = a) : Pa(e, t, n));
            break;
        default:
            Pa(e, t, n)
        }
    }
    function vm(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Pl(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    Ie = a,
                    bm(a, e)
                }
            vm(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                ym(e),
                e = e.sibling
    }
    function ym(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Pl(e),
            e.flags & 2048 && Ln(9, e, e.return);
            break;
        case 3:
            Pl(e);
            break;
        case 12:
            Pl(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            mi(e)) : Pl(e);
            break;
        default:
            Pl(e)
        }
    }
    function mi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    Ie = a,
                    bm(a, e)
                }
            vm(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                Ln(8, t, t.return),
                mi(t);
                break;
            case 22:
                n = t.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                mi(t));
                break;
            default:
                mi(t)
            }
            e = e.sibling
        }
    }
    function bm(e, t) {
        for (; Ie !== null; ) {
            var n = Ie;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Ln(8, n, t);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var a = n.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                Ul(n.memoizedState.cache)
            }
            if (a = n.child,
            a !== null)
                a.return = n,
                Ie = a;
            else
                e: for (n = e; Ie !== null; ) {
                    a = Ie;
                    var i = a.sibling
                      , r = a.return;
                    if (um(a),
                    a === n) {
                        Ie = null;
                        break e
                    }
                    if (i !== null) {
                        i.return = r,
                        Ie = i;
                        break e
                    }
                    Ie = r
                }
        }
    }
    var kv = {
        getCacheForType: function(e) {
            var t = et(Qe)
              , n = t.data.get(e);
            return n === void 0 && (n = e(),
            t.data.set(e, n)),
            n
        },
        cacheSignal: function() {
            return et(Qe).controller.signal
        }
    }
      , Qv = typeof WeakMap == "function" ? WeakMap : Map
      , Ae = 0
      , _e = null
      , ye = null
      , we = 0
      , Oe = 0
      , wt = null
      , qn = !1
      , $a = !1
      , Io = !1
      , gn = 0
      , Be = 0
      , Bn = 0
      , wa = 0
      , Po = 0
      , St = 0
      , el = 0
      , $l = null
      , ft = null
      , $o = !1
      , pi = 0
      , wm = 0
      , hi = 1 / 0
      , xi = null
      , Yn = null
      , Ke = 0
      , Gn = null
      , tl = null
      , vn = 0
      , ec = 0
      , tc = null
      , Sm = null
      , es = 0
      , nc = null;
    function Nt() {
        return (Ae & 2) !== 0 && we !== 0 ? we & -we : O.T !== null ? oc() : Lu()
    }
    function Nm() {
        if (St === 0)
            if ((we & 536870912) === 0 || Ne) {
                var e = js;
                js <<= 1,
                (js & 3932160) === 0 && (js = 262144),
                St = e
            } else
                St = 536870912;
        return e = yt.current,
        e !== null && (e.flags |= 32),
        St
    }
    function dt(e, t, n) {
        (e === _e && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null) && (nl(e, 0),
        kn(e, we, St, !1)),
        wl(e, n),
        ((Ae & 2) === 0 || e !== _e) && (e === _e && ((Ae & 2) === 0 && (wa |= n),
        Be === 4 && kn(e, we, St, !1)),
        Wt(e))
    }
    function jm(e, t, n) {
        if ((Ae & 6) !== 0)
            throw Error(c(327));
        var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || bl(e, t)
          , i = a ? Zv(e, t) : lc(e, t, !0)
          , r = a;
        do {
            if (i === 0) {
                $a && !a && kn(e, t, 0, !1);
                break
            } else {
                if (n = e.current.alternate,
                r && !Vv(n)) {
                    i = lc(e, t, !1),
                    r = !1;
                    continue
                }
                if (i === 2) {
                    if (r = t,
                    e.errorRecoveryDisabledLanes & r)
                        var d = 0;
                    else
                        d = e.pendingLanes & -536870913,
                        d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
                    if (d !== 0) {
                        t = d;
                        e: {
                            var x = e;
                            i = $l;
                            var w = x.current.memoizedState.isDehydrated;
                            if (w && (nl(x, d).flags |= 256),
                            d = lc(x, d, !1),
                            d !== 2) {
                                if (Io && !w) {
                                    x.errorRecoveryDisabledLanes |= r,
                                    wa |= r,
                                    i = 4;
                                    break e
                                }
                                r = ft,
                                ft = i,
                                r !== null && (ft === null ? ft = r : ft.push.apply(ft, r))
                            }
                            i = d
                        }
                        if (r = !1,
                        i !== 2)
                            continue
                    }
                }
                if (i === 1) {
                    nl(e, 0),
                    kn(e, t, 0, !0);
                    break
                }
                e: {
                    switch (a = e,
                    r = i,
                    r) {
                    case 0:
                    case 1:
                        throw Error(c(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        kn(a, t, St, !qn);
                        break e;
                    case 2:
                        ft = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(c(329))
                    }
                    if ((t & 62914560) === t && (i = pi + 300 - pt(),
                    10 < i)) {
                        if (kn(a, t, St, !qn),
                        Ts(a, 0, !0) !== 0)
                            break e;
                        vn = t,
                        a.timeoutHandle = tp(Em.bind(null, a, n, ft, xi, $o, t, St, wa, el, qn, r, "Throttled", -0, 0), i);
                        break e
                    }
                    Em(a, n, ft, xi, $o, t, St, wa, el, qn, r, null, -0, 0)
                }
            }
            break
        } while (!0);
        Wt(e)
    }
    function Em(e, t, n, a, i, r, d, x, w, z, L, G, M, U) {
        if (e.timeoutHandle = -1,
        G = t.subtreeFlags,
        G & 8192 || (G & 16785408) === 16785408) {
            G = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: nn
            },
            gm(t, r, G);
            var $ = (r & 62914560) === r ? pi - pt() : (r & 4194048) === r ? wm - pt() : 0;
            if ($ = Oy(G, $),
            $ !== null) {
                vn = r,
                e.cancelPendingCommit = $(Dm.bind(null, e, t, r, n, a, i, d, x, w, L, G, null, M, U)),
                kn(e, r, d, !z);
                return
            }
        }
        Dm(e, t, r, n, a, i, d, x, w)
    }
    function Vv(e) {
        for (var t = e; ; ) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var a = 0; a < n.length; a++) {
                    var i = n[a]
                      , r = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!gt(r(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function kn(e, t, n, a) {
        t &= ~Po,
        t &= ~wa,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        a && (e.warmLanes |= t),
        a = e.expirationTimes;
        for (var i = t; 0 < i; ) {
            var r = 31 - xt(i)
              , d = 1 << r;
            a[r] = -1,
            i &= ~d
        }
        n !== 0 && _u(e, n, t)
    }
    function gi() {
        return (Ae & 6) === 0 ? (ts(0),
        !1) : !0
    }
    function ac() {
        if (ye !== null) {
            if (Oe === 0)
                var e = ye.return;
            else
                e = ye,
                rn = da = null,
                yo(e),
                Za = null,
                Ll = 0,
                e = ye;
            for (; e !== null; )
                nm(e.alternate, e),
                e = e.return;
            ye = null
        }
    }
    function nl(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1,
        uy(n)),
        n = e.cancelPendingCommit,
        n !== null && (e.cancelPendingCommit = null,
        n()),
        vn = 0,
        ac(),
        _e = e,
        ye = n = ln(e.current, null),
        we = t,
        Oe = 0,
        wt = null,
        qn = !1,
        $a = bl(e, t),
        Io = !1,
        el = St = Po = wa = Bn = Be = 0,
        ft = $l = null,
        $o = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements,
            a &= t; 0 < a; ) {
                var i = 31 - xt(a)
                  , r = 1 << i;
                t |= e[i],
                a &= ~r
            }
        return gn = t,
        qs(),
        n
    }
    function Tm(e, t) {
        me = null,
        O.H = Xl,
        t === Xa || t === Zs ? (t = kf(),
        Oe = 3) : t === io ? (t = kf(),
        Oe = 4) : Oe = t === Uo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        wt = t,
        ye === null && (Be = 1,
        ii(e, zt(t, e.current)))
    }
    function Am() {
        var e = yt.current;
        return e === null ? !0 : (we & 4194048) === we ? Ut === null : (we & 62914560) === we || (we & 536870912) !== 0 ? e === Ut : !1
    }
    function Om() {
        var e = O.H;
        return O.H = Xl,
        e === null ? Xl : e
    }
    function Cm() {
        var e = O.A;
        return O.A = kv,
        e
    }
    function vi() {
        Be = 4,
        qn || (we & 4194048) !== we && yt.current !== null || ($a = !0),
        (Bn & 134217727) === 0 && (wa & 134217727) === 0 || _e === null || kn(_e, we, St, !1)
    }
    function lc(e, t, n) {
        var a = Ae;
        Ae |= 2;
        var i = Om()
          , r = Cm();
        (_e !== e || we !== t) && (xi = null,
        nl(e, t)),
        t = !1;
        var d = Be;
        e: do
            try {
                if (Oe !== 0 && ye !== null) {
                    var x = ye
                      , w = wt;
                    switch (Oe) {
                    case 8:
                        ac(),
                        d = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        yt.current === null && (t = !0);
                        var z = Oe;
                        if (Oe = 0,
                        wt = null,
                        al(e, x, w, z),
                        n && $a) {
                            d = 0;
                            break e
                        }
                        break;
                    default:
                        z = Oe,
                        Oe = 0,
                        wt = null,
                        al(e, x, w, z)
                    }
                }
                Xv(),
                d = Be;
                break
            } catch (L) {
                Tm(e, L)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        rn = da = null,
        Ae = a,
        O.H = i,
        O.A = r,
        ye === null && (_e = null,
        we = 0,
        qs()),
        d
    }
    function Xv() {
        for (; ye !== null; )
            Rm(ye)
    }
    function Zv(e, t) {
        var n = Ae;
        Ae |= 2;
        var a = Om()
          , i = Cm();
        _e !== e || we !== t ? (xi = null,
        hi = pt() + 500,
        nl(e, t)) : $a = bl(e, t);
        e: do
            try {
                if (Oe !== 0 && ye !== null) {
                    t = ye;
                    var r = wt;
                    t: switch (Oe) {
                    case 1:
                        Oe = 0,
                        wt = null,
                        al(e, t, r, 1);
                        break;
                    case 2:
                    case 9:
                        if (Yf(r)) {
                            Oe = 0,
                            wt = null,
                            zm(t);
                            break
                        }
                        t = function() {
                            Oe !== 2 && Oe !== 9 || _e !== e || (Oe = 7),
                            Wt(e)
                        }
                        ,
                        r.then(t, t);
                        break e;
                    case 3:
                        Oe = 7;
                        break e;
                    case 4:
                        Oe = 5;
                        break e;
                    case 7:
                        Yf(r) ? (Oe = 0,
                        wt = null,
                        zm(t)) : (Oe = 0,
                        wt = null,
                        al(e, t, r, 7));
                        break;
                    case 5:
                        var d = null;
                        switch (ye.tag) {
                        case 26:
                            d = ye.memoizedState;
                        case 5:
                        case 27:
                            var x = ye;
                            if (d ? xp(d) : x.stateNode.complete) {
                                Oe = 0,
                                wt = null;
                                var w = x.sibling;
                                if (w !== null)
                                    ye = w;
                                else {
                                    var z = x.return;
                                    z !== null ? (ye = z,
                                    yi(z)) : ye = null
                                }
                                break t
                            }
                        }
                        Oe = 0,
                        wt = null,
                        al(e, t, r, 5);
                        break;
                    case 6:
                        Oe = 0,
                        wt = null,
                        al(e, t, r, 6);
                        break;
                    case 8:
                        ac(),
                        Be = 6;
                        break e;
                    default:
                        throw Error(c(462))
                    }
                }
                Kv();
                break
            } catch (L) {
                Tm(e, L)
            }
        while (!0);
        return rn = da = null,
        O.H = a,
        O.A = i,
        Ae = n,
        ye !== null ? 0 : (_e = null,
        we = 0,
        qs(),
        Be)
    }
    function Kv() {
        for (; ye !== null && !xg(); )
            Rm(ye)
    }
    function Rm(e) {
        var t = em(e.alternate, e, gn);
        e.memoizedProps = e.pendingProps,
        t === null ? yi(e) : ye = t
    }
    function zm(e) {
        var t = e
          , n = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Jd(n, t, t.pendingProps, t.type, void 0, we);
            break;
        case 11:
            t = Jd(n, t, t.pendingProps, t.type.render, t.ref, we);
            break;
        case 5:
            yo(t);
        default:
            nm(n, t),
            t = ye = Cf(t, gn),
            t = em(n, t, gn)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? yi(e) : ye = t
    }
    function al(e, t, n, a) {
        rn = da = null,
        yo(t),
        Za = null,
        Ll = 0;
        var i = t.return;
        try {
            if (Uv(e, i, t, n, we)) {
                Be = 1,
                ii(e, zt(n, e.current)),
                ye = null;
                return
            }
        } catch (r) {
            if (i !== null)
                throw ye = i,
                r;
            Be = 1,
            ii(e, zt(n, e.current)),
            ye = null;
            return
        }
        t.flags & 32768 ? (Ne || a === 1 ? e = !0 : $a || (we & 536870912) !== 0 ? e = !1 : (qn = e = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = yt.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        Mm(t, e)) : yi(t)
    }
    function yi(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Mm(t, qn);
                return
            }
            e = t.return;
            var n = qv(t.alternate, t, gn);
            if (n !== null) {
                ye = n;
                return
            }
            if (t = t.sibling,
            t !== null) {
                ye = t;
                return
            }
            ye = t = e
        } while (t !== null);
        Be === 0 && (Be = 5)
    }
    function Mm(e, t) {
        do {
            var n = Bv(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767,
                ye = n;
                return
            }
            if (n = e.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                ye = e;
                return
            }
            ye = e = n
        } while (e !== null);
        Be = 6,
        ye = null
    }
    function Dm(e, t, n, a, i, r, d, x, w) {
        e.cancelPendingCommit = null;
        do
            bi();
        while (Ke !== 0);
        if ((Ae & 6) !== 0)
            throw Error(c(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(c(177));
            if (r = t.lanes | t.childLanes,
            r |= Xr,
            Tg(e, n, r, d, x, w),
            e === _e && (ye = _e = null,
            we = 0),
            tl = t,
            Gn = e,
            vn = n,
            ec = r,
            tc = i,
            Sm = a,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            Iv(Ss, function() {
                return qm(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            a = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || a) {
                a = O.T,
                O.T = null,
                i = k.p,
                k.p = 2,
                d = Ae,
                Ae |= 4;
                try {
                    Yv(e, t, n)
                } finally {
                    Ae = d,
                    k.p = i,
                    O.T = a
                }
            }
            Ke = 1,
            _m(),
            Um(),
            Hm()
        }
    }
    function _m() {
        if (Ke === 1) {
            Ke = 0;
            var e = Gn
              , t = tl
              , n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                n = O.T,
                O.T = null;
                var a = k.p;
                k.p = 2;
                var i = Ae;
                Ae |= 4;
                try {
                    pm(t, e);
                    var r = xc
                      , d = bf(e.containerInfo)
                      , x = r.focusedElem
                      , w = r.selectionRange;
                    if (d !== x && x && x.ownerDocument && yf(x.ownerDocument.documentElement, x)) {
                        if (w !== null && Yr(x)) {
                            var z = w.start
                              , L = w.end;
                            if (L === void 0 && (L = z),
                            "selectionStart"in x)
                                x.selectionStart = z,
                                x.selectionEnd = Math.min(L, x.value.length);
                            else {
                                var G = x.ownerDocument || document
                                  , M = G && G.defaultView || window;
                                if (M.getSelection) {
                                    var U = M.getSelection()
                                      , $ = x.textContent.length
                                      , ie = Math.min(w.start, $)
                                      , De = w.end === void 0 ? ie : Math.min(w.end, $);
                                    !U.extend && ie > De && (d = De,
                                    De = ie,
                                    ie = d);
                                    var E = vf(x, ie)
                                      , j = vf(x, De);
                                    if (E && j && (U.rangeCount !== 1 || U.anchorNode !== E.node || U.anchorOffset !== E.offset || U.focusNode !== j.node || U.focusOffset !== j.offset)) {
                                        var C = G.createRange();
                                        C.setStart(E.node, E.offset),
                                        U.removeAllRanges(),
                                        ie > De ? (U.addRange(C),
                                        U.extend(j.node, j.offset)) : (C.setEnd(j.node, j.offset),
                                        U.addRange(C))
                                    }
                                }
                            }
                        }
                        for (G = [],
                        U = x; U = U.parentNode; )
                            U.nodeType === 1 && G.push({
                                element: U,
                                left: U.scrollLeft,
                                top: U.scrollTop
                            });
                        for (typeof x.focus == "function" && x.focus(),
                        x = 0; x < G.length; x++) {
                            var B = G[x];
                            B.element.scrollLeft = B.left,
                            B.element.scrollTop = B.top
                        }
                    }
                    Mi = !!hc,
                    xc = hc = null
                } finally {
                    Ae = i,
                    k.p = a,
                    O.T = n
                }
            }
            e.current = t,
            Ke = 2
        }
    }
    function Um() {
        if (Ke === 2) {
            Ke = 0;
            var e = Gn
              , t = tl
              , n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                n = O.T,
                O.T = null;
                var a = k.p;
                k.p = 2;
                var i = Ae;
                Ae |= 4;
                try {
                    cm(e, t.alternate, t)
                } finally {
                    Ae = i,
                    k.p = a,
                    O.T = n
                }
            }
            Ke = 3
        }
    }
    function Hm() {
        if (Ke === 4 || Ke === 3) {
            Ke = 0,
            gg();
            var e = Gn
              , t = tl
              , n = vn
              , a = Sm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0,
            tl = Gn = null,
            Lm(e, e.pendingLanes));
            var i = e.pendingLanes;
            if (i === 0 && (Yn = null),
            wr(n),
            t = t.stateNode,
            ht && typeof ht.onCommitFiberRoot == "function")
                try {
                    ht.onCommitFiberRoot(yl, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                t = O.T,
                i = k.p,
                k.p = 2,
                O.T = null;
                try {
                    for (var r = e.onRecoverableError, d = 0; d < a.length; d++) {
                        var x = a[d];
                        r(x.value, {
                            componentStack: x.stack
                        })
                    }
                } finally {
                    O.T = t,
                    k.p = i
                }
            }
            (vn & 3) !== 0 && bi(),
            Wt(e),
            i = e.pendingLanes,
            (n & 261930) !== 0 && (i & 42) !== 0 ? e === nc ? es++ : (es = 0,
            nc = e) : es = 0,
            ts(0)
        }
    }
    function Lm(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        Ul(t)))
    }
    function bi() {
        return _m(),
        Um(),
        Hm(),
        qm()
    }
    function qm() {
        if (Ke !== 5)
            return !1;
        var e = Gn
          , t = ec;
        ec = 0;
        var n = wr(vn)
          , a = O.T
          , i = k.p;
        try {
            k.p = 32 > n ? 32 : n,
            O.T = null,
            n = tc,
            tc = null;
            var r = Gn
              , d = vn;
            if (Ke = 0,
            tl = Gn = null,
            vn = 0,
            (Ae & 6) !== 0)
                throw Error(c(331));
            var x = Ae;
            if (Ae |= 4,
            ym(r.current),
            xm(r, r.current, d, n),
            Ae = x,
            ts(0, !1),
            ht && typeof ht.onPostCommitFiberRoot == "function")
                try {
                    ht.onPostCommitFiberRoot(yl, r)
                } catch {}
            return !0
        } finally {
            k.p = i,
            O.T = a,
            Lm(e, t)
        }
    }
    function Bm(e, t, n) {
        t = zt(n, t),
        t = _o(e.stateNode, t, 2),
        e = _n(e, t, 2),
        e !== null && (wl(e, 2),
        Wt(e))
    }
    function Ce(e, t, n) {
        if (e.tag === 3)
            Bm(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Bm(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Yn === null || !Yn.has(a))) {
                        e = zt(n, e),
                        n = Yd(2),
                        a = _n(t, n, 2),
                        a !== null && (Gd(n, a, t, e),
                        wl(a, 2),
                        Wt(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function sc(e, t, n) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new Qv;
            var i = new Set;
            a.set(t, i)
        } else
            i = a.get(t),
            i === void 0 && (i = new Set,
            a.set(t, i));
        i.has(n) || (Io = !0,
        i.add(n),
        e = Jv.bind(null, e, t, n),
        t.then(e, e))
    }
    function Jv(e, t, n) {
        var a = e.pingCache;
        a !== null && a.delete(t),
        e.pingedLanes |= e.suspendedLanes & n,
        e.warmLanes &= ~n,
        _e === e && (we & n) === n && (Be === 4 || Be === 3 && (we & 62914560) === we && 300 > pt() - pi ? (Ae & 2) === 0 && nl(e, 0) : Po |= n,
        el === we && (el = 0)),
        Wt(e)
    }
    function Ym(e, t) {
        t === 0 && (t = Du()),
        e = ca(e, t),
        e !== null && (wl(e, t),
        Wt(e))
    }
    function Fv(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        Ym(e, n)
    }
    function Wv(e, t) {
        var n = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var a = e.stateNode
              , i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            a = e.stateNode;
            break;
        case 22:
            a = e.stateNode._retryCache;
            break;
        default:
            throw Error(c(314))
        }
        a !== null && a.delete(t),
        Ym(e, n)
    }
    function Iv(e, t) {
        return gr(e, t)
    }
    var wi = null
      , ll = null
      , ic = !1
      , Si = !1
      , rc = !1
      , Qn = 0;
    function Wt(e) {
        e !== ll && e.next === null && (ll === null ? wi = ll = e : ll = ll.next = e),
        Si = !0,
        ic || (ic = !0,
        $v())
    }
    function ts(e, t) {
        if (!rc && Si) {
            rc = !0;
            do
                for (var n = !1, a = wi; a !== null; ) {
                    if (e !== 0) {
                        var i = a.pendingLanes;
                        if (i === 0)
                            var r = 0;
                        else {
                            var d = a.suspendedLanes
                              , x = a.pingedLanes;
                            r = (1 << 31 - xt(42 | e) + 1) - 1,
                            r &= i & ~(d & ~x),
                            r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0
                        }
                        r !== 0 && (n = !0,
                        Vm(a, r))
                    } else
                        r = we,
                        r = Ts(a, a === _e ? r : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (r & 3) === 0 || bl(a, r) || (n = !0,
                        Vm(a, r));
                    a = a.next
                }
            while (n);
            rc = !1
        }
    }
    function Pv() {
        Gm()
    }
    function Gm() {
        Si = ic = !1;
        var e = 0;
        Qn !== 0 && cy() && (e = Qn);
        for (var t = pt(), n = null, a = wi; a !== null; ) {
            var i = a.next
              , r = km(a, t);
            r === 0 ? (a.next = null,
            n === null ? wi = i : n.next = i,
            i === null && (ll = n)) : (n = a,
            (e !== 0 || (r & 3) !== 0) && (Si = !0)),
            a = i
        }
        Ke !== 0 && Ke !== 5 || ts(e),
        Qn !== 0 && (Qn = 0)
    }
    function km(e, t) {
        for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
            var d = 31 - xt(r)
              , x = 1 << d
              , w = i[d];
            w === -1 ? ((x & n) === 0 || (x & a) !== 0) && (i[d] = Eg(x, t)) : w <= t && (e.expiredLanes |= x),
            r &= ~x
        }
        if (t = _e,
        n = we,
        n = Ts(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a = e.callbackNode,
        n === 0 || e === t && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && vr(a),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((n & 3) === 0 || bl(e, n)) {
            if (t = n & -n,
            t === e.callbackPriority)
                return t;
            switch (a !== null && vr(a),
            wr(n)) {
            case 2:
            case 8:
                n = zu;
                break;
            case 32:
                n = Ss;
                break;
            case 268435456:
                n = Mu;
                break;
            default:
                n = Ss
            }
            return a = Qm.bind(null, e),
            n = gr(n, a),
            e.callbackPriority = t,
            e.callbackNode = n,
            t
        }
        return a !== null && a !== null && vr(a),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Qm(e, t) {
        if (Ke !== 0 && Ke !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var n = e.callbackNode;
        if (bi() && e.callbackNode !== n)
            return null;
        var a = we;
        return a = Ts(e, e === _e ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a === 0 ? null : (jm(e, a, t),
        km(e, pt()),
        e.callbackNode != null && e.callbackNode === n ? Qm.bind(null, e) : null)
    }
    function Vm(e, t) {
        if (bi())
            return null;
        jm(e, t, !0)
    }
    function $v() {
        fy(function() {
            (Ae & 6) !== 0 ? gr(Ru, Pv) : Gm()
        })
    }
    function oc() {
        if (Qn === 0) {
            var e = Qa;
            e === 0 && (e = Ns,
            Ns <<= 1,
            (Ns & 261888) === 0 && (Ns = 256)),
            Qn = e
        }
        return Qn
    }
    function Xm(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Rs("" + e)
    }
    function Zm(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name,
        n.value = t.value,
        e.id && n.setAttribute("form", e.id),
        t.parentNode.insertBefore(n, t),
        e = new FormData(e),
        n.parentNode.removeChild(n),
        e
    }
    function ey(e, t, n, a, i) {
        if (t === "submit" && n && n.stateNode === i) {
            var r = Xm((i[it] || null).action)
              , d = a.submitter;
            d && (t = (t = d[it] || null) ? Xm(t.formAction) : d.getAttribute("formAction"),
            t !== null && (r = t,
            d = null));
            var x = new _s("action","action",null,a,i);
            e.push({
                event: x,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Qn !== 0) {
                                var w = d ? Zm(i, d) : new FormData(i);
                                Oo(n, {
                                    pending: !0,
                                    data: w,
                                    method: i.method,
                                    action: r
                                }, null, w)
                            }
                        } else
                            typeof r == "function" && (x.preventDefault(),
                            w = d ? Zm(i, d) : new FormData(i),
                            Oo(n, {
                                pending: !0,
                                data: w,
                                method: i.method,
                                action: r
                            }, r, w))
                    },
                    currentTarget: i
                }]
            })
        }
    }
    for (var cc = 0; cc < Vr.length; cc++) {
        var uc = Vr[cc]
          , ty = uc.toLowerCase()
          , ny = uc[0].toUpperCase() + uc.slice(1);
        qt(ty, "on" + ny)
    }
    qt(Nf, "onAnimationEnd"),
    qt(jf, "onAnimationIteration"),
    qt(Ef, "onAnimationStart"),
    qt("dblclick", "onDoubleClick"),
    qt("focusin", "onFocus"),
    qt("focusout", "onBlur"),
    qt(vv, "onTransitionRun"),
    qt(yv, "onTransitionStart"),
    qt(bv, "onTransitionCancel"),
    qt(Tf, "onTransitionEnd"),
    Ca("onMouseEnter", ["mouseout", "mouseover"]),
    Ca("onMouseLeave", ["mouseout", "mouseover"]),
    Ca("onPointerEnter", ["pointerout", "pointerover"]),
    Ca("onPointerLeave", ["pointerout", "pointerover"]),
    sa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    sa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    sa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    sa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    sa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    sa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ns = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , ay = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ns));
    function Km(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var a = e[n]
              , i = a.event;
            a = a.listeners;
            e: {
                var r = void 0;
                if (t)
                    for (var d = a.length - 1; 0 <= d; d--) {
                        var x = a[d]
                          , w = x.instance
                          , z = x.currentTarget;
                        if (x = x.listener,
                        w !== r && i.isPropagationStopped())
                            break e;
                        r = x,
                        i.currentTarget = z;
                        try {
                            r(i)
                        } catch (L) {
                            Ls(L)
                        }
                        i.currentTarget = null,
                        r = w
                    }
                else
                    for (d = 0; d < a.length; d++) {
                        if (x = a[d],
                        w = x.instance,
                        z = x.currentTarget,
                        x = x.listener,
                        w !== r && i.isPropagationStopped())
                            break e;
                        r = x,
                        i.currentTarget = z;
                        try {
                            r(i)
                        } catch (L) {
                            Ls(L)
                        }
                        i.currentTarget = null,
                        r = w
                    }
            }
        }
    }
    function be(e, t) {
        var n = t[Sr];
        n === void 0 && (n = t[Sr] = new Set);
        var a = e + "__bubble";
        n.has(a) || (Jm(t, e, 2, !1),
        n.add(a))
    }
    function fc(e, t, n) {
        var a = 0;
        t && (a |= 4),
        Jm(n, e, a, t)
    }
    var Ni = "_reactListening" + Math.random().toString(36).slice(2);
    function dc(e) {
        if (!e[Ni]) {
            e[Ni] = !0,
            Yu.forEach(function(n) {
                n !== "selectionchange" && (ay.has(n) || fc(n, !1, e),
                fc(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Ni] || (t[Ni] = !0,
            fc("selectionchange", !1, t))
        }
    }
    function Jm(e, t, n, a) {
        switch (Np(t)) {
        case 2:
            var i = zy;
            break;
        case 8:
            i = My;
            break;
        default:
            i = Ac
        }
        n = i.bind(null, t, n, e),
        i = void 0,
        !zr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
        a ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
            passive: i
        }) : e.addEventListener(t, n, !1)
    }
    function mc(e, t, n, a, i) {
        var r = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (; ; ) {
                if (a === null)
                    return;
                var d = a.tag;
                if (d === 3 || d === 4) {
                    var x = a.stateNode.containerInfo;
                    if (x === i)
                        break;
                    if (d === 4)
                        for (d = a.return; d !== null; ) {
                            var w = d.tag;
                            if ((w === 3 || w === 4) && d.stateNode.containerInfo === i)
                                return;
                            d = d.return
                        }
                    for (; x !== null; ) {
                        if (d = Ta(x),
                        d === null)
                            return;
                        if (w = d.tag,
                        w === 5 || w === 6 || w === 26 || w === 27) {
                            a = r = d;
                            continue e
                        }
                        x = x.parentNode
                    }
                }
                a = a.return
            }
        Pu(function() {
            var z = r
              , L = Cr(n)
              , G = [];
            e: {
                var M = Af.get(e);
                if (M !== void 0) {
                    var U = _s
                      , $ = e;
                    switch (e) {
                    case "keypress":
                        if (Ms(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        U = Wg;
                        break;
                    case "focusin":
                        $ = "focus",
                        U = Ur;
                        break;
                    case "focusout":
                        $ = "blur",
                        U = Ur;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        U = Ur;
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
                        U = tf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        U = qg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        U = $g;
                        break;
                    case Nf:
                    case jf:
                    case Ef:
                        U = Gg;
                        break;
                    case Tf:
                        U = tv;
                        break;
                    case "scroll":
                    case "scrollend":
                        U = Hg;
                        break;
                    case "wheel":
                        U = av;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        U = Qg;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        U = af;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        U = sv
                    }
                    var ie = (t & 4) !== 0
                      , De = !ie && (e === "scroll" || e === "scrollend")
                      , E = ie ? M !== null ? M + "Capture" : null : M;
                    ie = [];
                    for (var j = z, C; j !== null; ) {
                        var B = j;
                        if (C = B.stateNode,
                        B = B.tag,
                        B !== 5 && B !== 26 && B !== 27 || C === null || E === null || (B = jl(j, E),
                        B != null && ie.push(as(j, B, C))),
                        De)
                            break;
                        j = j.return
                    }
                    0 < ie.length && (M = new U(M,$,null,n,L),
                    G.push({
                        event: M,
                        listeners: ie
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (M = e === "mouseover" || e === "pointerover",
                    U = e === "mouseout" || e === "pointerout",
                    M && n !== Or && ($ = n.relatedTarget || n.fromElement) && (Ta($) || $[Ea]))
                        break e;
                    if ((U || M) && (M = L.window === L ? L : (M = L.ownerDocument) ? M.defaultView || M.parentWindow : window,
                    U ? ($ = n.relatedTarget || n.toElement,
                    U = z,
                    $ = $ ? Ta($) : null,
                    $ !== null && (De = m($),
                    ie = $.tag,
                    $ !== De || ie !== 5 && ie !== 27 && ie !== 6) && ($ = null)) : (U = null,
                    $ = z),
                    U !== $)) {
                        if (ie = tf,
                        B = "onMouseLeave",
                        E = "onMouseEnter",
                        j = "mouse",
                        (e === "pointerout" || e === "pointerover") && (ie = af,
                        B = "onPointerLeave",
                        E = "onPointerEnter",
                        j = "pointer"),
                        De = U == null ? M : Nl(U),
                        C = $ == null ? M : Nl($),
                        M = new ie(B,j + "leave",U,n,L),
                        M.target = De,
                        M.relatedTarget = C,
                        B = null,
                        Ta(L) === z && (ie = new ie(E,j + "enter",$,n,L),
                        ie.target = C,
                        ie.relatedTarget = De,
                        B = ie),
                        De = B,
                        U && $)
                            t: {
                                for (ie = ly,
                                E = U,
                                j = $,
                                C = 0,
                                B = E; B; B = ie(B))
                                    C++;
                                B = 0;
                                for (var le = j; le; le = ie(le))
                                    B++;
                                for (; 0 < C - B; )
                                    E = ie(E),
                                    C--;
                                for (; 0 < B - C; )
                                    j = ie(j),
                                    B--;
                                for (; C--; ) {
                                    if (E === j || j !== null && E === j.alternate) {
                                        ie = E;
                                        break t
                                    }
                                    E = ie(E),
                                    j = ie(j)
                                }
                                ie = null
                            }
                        else
                            ie = null;
                        U !== null && Fm(G, M, U, ie, !1),
                        $ !== null && De !== null && Fm(G, De, $, ie, !0)
                    }
                }
                e: {
                    if (M = z ? Nl(z) : window,
                    U = M.nodeName && M.nodeName.toLowerCase(),
                    U === "select" || U === "input" && M.type === "file")
                        var Ee = df;
                    else if (uf(M))
                        if (mf)
                            Ee = hv;
                        else {
                            Ee = mv;
                            var ne = dv
                        }
                    else
                        U = M.nodeName,
                        !U || U.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? z && Ar(z.elementType) && (Ee = df) : Ee = pv;
                    if (Ee && (Ee = Ee(e, z))) {
                        ff(G, Ee, n, L);
                        break e
                    }
                    ne && ne(e, M, z),
                    e === "focusout" && z && M.type === "number" && z.memoizedProps.value != null && Tr(M, "number", M.value)
                }
                switch (ne = z ? Nl(z) : window,
                e) {
                case "focusin":
                    (uf(ne) || ne.contentEditable === "true") && (Ua = ne,
                    Gr = z,
                    Ml = null);
                    break;
                case "focusout":
                    Ml = Gr = Ua = null;
                    break;
                case "mousedown":
                    kr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    kr = !1,
                    wf(G, n, L);
                    break;
                case "selectionchange":
                    if (gv)
                        break;
                case "keydown":
                case "keyup":
                    wf(G, n, L)
                }
                var pe;
                if (Lr)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var Se = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Se = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Se = "onCompositionUpdate";
                            break e
                        }
                        Se = void 0
                    }
                else
                    _a ? of(e, n) && (Se = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Se = "onCompositionStart");
                Se && (lf && n.locale !== "ko" && (_a || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && _a && (pe = $u()) : (An = L,
                Mr = "value"in An ? An.value : An.textContent,
                _a = !0)),
                ne = ji(z, Se),
                0 < ne.length && (Se = new nf(Se,e,null,n,L),
                G.push({
                    event: Se,
                    listeners: ne
                }),
                pe ? Se.data = pe : (pe = cf(n),
                pe !== null && (Se.data = pe)))),
                (pe = rv ? ov(e, n) : cv(e, n)) && (Se = ji(z, "onBeforeInput"),
                0 < Se.length && (ne = new nf("onBeforeInput","beforeinput",null,n,L),
                G.push({
                    event: ne,
                    listeners: Se
                }),
                ne.data = pe)),
                ey(G, e, z, n, L)
            }
            Km(G, t)
        })
    }
    function as(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function ji(e, t) {
        for (var n = t + "Capture", a = []; e !== null; ) {
            var i = e
              , r = i.stateNode;
            if (i = i.tag,
            i !== 5 && i !== 26 && i !== 27 || r === null || (i = jl(e, n),
            i != null && a.unshift(as(e, i, r)),
            i = jl(e, t),
            i != null && a.push(as(e, i, r))),
            e.tag === 3)
                return a;
            e = e.return
        }
        return []
    }
    function ly(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Fm(e, t, n, a, i) {
        for (var r = t._reactName, d = []; n !== null && n !== a; ) {
            var x = n
              , w = x.alternate
              , z = x.stateNode;
            if (x = x.tag,
            w !== null && w === a)
                break;
            x !== 5 && x !== 26 && x !== 27 || z === null || (w = z,
            i ? (z = jl(n, r),
            z != null && d.unshift(as(n, z, w))) : i || (z = jl(n, r),
            z != null && d.push(as(n, z, w)))),
            n = n.return
        }
        d.length !== 0 && e.push({
            event: t,
            listeners: d
        })
    }
    var sy = /\r\n?/g
      , iy = /\u0000|\uFFFD/g;
    function Wm(e) {
        return (typeof e == "string" ? e : "" + e).replace(sy, `
`).replace(iy, "")
    }
    function Im(e, t) {
        return t = Wm(t),
        Wm(e) === t
    }
    function Me(e, t, n, a, i, r) {
        switch (n) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || za(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && za(e, "" + a);
            break;
        case "className":
            Os(e, "class", a);
            break;
        case "tabIndex":
            Os(e, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Os(e, n, a);
            break;
        case "style":
            Wu(e, a, r);
            break;
        case "data":
            if (t !== "object") {
                Os(e, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || n !== "href")) {
                e.removeAttribute(n);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(n);
                break
            }
            a = Rs("" + a),
            e.setAttribute(n, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof r == "function" && (n === "formAction" ? (t !== "input" && Me(e, t, "name", i.name, i, null),
                Me(e, t, "formEncType", i.formEncType, i, null),
                Me(e, t, "formMethod", i.formMethod, i, null),
                Me(e, t, "formTarget", i.formTarget, i, null)) : (Me(e, t, "encType", i.encType, i, null),
                Me(e, t, "method", i.method, i, null),
                Me(e, t, "target", i.target, i, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(n);
                break
            }
            a = Rs("" + a),
            e.setAttribute(n, a);
            break;
        case "onClick":
            a != null && (e.onclick = nn);
            break;
        case "onScroll":
            a != null && be("scroll", e);
            break;
        case "onScrollEnd":
            a != null && be("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(c(61));
                if (n = a.__html,
                n != null) {
                    if (i.children != null)
                        throw Error(c(60));
                    e.innerHTML = n
                }
            }
            break;
        case "multiple":
            e.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            e.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            n = Rs("" + a),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
            break;
        case "capture":
        case "download":
            a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
            break;
        case "popover":
            be("beforetoggle", e),
            be("toggle", e),
            As(e, "popover", a);
            break;
        case "xlinkActuate":
            tn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            tn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            tn(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            tn(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            tn(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            tn(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            tn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            tn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            tn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            As(e, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = _g.get(n) || n,
            As(e, n, a))
        }
    }
    function pc(e, t, n, a, i, r) {
        switch (n) {
        case "style":
            Wu(e, a, r);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(c(61));
                if (n = a.__html,
                n != null) {
                    if (i.children != null)
                        throw Error(c(60));
                    e.innerHTML = n
                }
            }
            break;
        case "children":
            typeof a == "string" ? za(e, a) : (typeof a == "number" || typeof a == "bigint") && za(e, "" + a);
            break;
        case "onScroll":
            a != null && be("scroll", e);
            break;
        case "onScrollEnd":
            a != null && be("scrollend", e);
            break;
        case "onClick":
            a != null && (e.onclick = nn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Gu.hasOwnProperty(n))
                e: {
                    if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"),
                    t = n.slice(2, i ? n.length - 7 : void 0),
                    r = e[it] || null,
                    r = r != null ? r[n] : null,
                    typeof r == "function" && e.removeEventListener(t, r, i),
                    typeof a == "function")) {
                        typeof r != "function" && r !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                        e.addEventListener(t, a, i);
                        break e
                    }
                    n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : As(e, n, a)
                }
        }
    }
    function nt(e, t, n) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            be("error", e),
            be("load", e);
            var a = !1, i = !1, r;
            for (r in n)
                if (n.hasOwnProperty(r)) {
                    var d = n[r];
                    if (d != null)
                        switch (r) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            i = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(c(137, t));
                        default:
                            Me(e, t, r, d, n, null)
                        }
                }
            i && Me(e, t, "srcSet", n.srcSet, n, null),
            a && Me(e, t, "src", n.src, n, null);
            return;
        case "input":
            be("invalid", e);
            var x = r = d = i = null
              , w = null
              , z = null;
            for (a in n)
                if (n.hasOwnProperty(a)) {
                    var L = n[a];
                    if (L != null)
                        switch (a) {
                        case "name":
                            i = L;
                            break;
                        case "type":
                            d = L;
                            break;
                        case "checked":
                            w = L;
                            break;
                        case "defaultChecked":
                            z = L;
                            break;
                        case "value":
                            r = L;
                            break;
                        case "defaultValue":
                            x = L;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (L != null)
                                throw Error(c(137, t));
                            break;
                        default:
                            Me(e, t, a, L, n, null)
                        }
                }
            Zu(e, r, x, w, z, d, i, !1);
            return;
        case "select":
            be("invalid", e),
            a = d = r = null;
            for (i in n)
                if (n.hasOwnProperty(i) && (x = n[i],
                x != null))
                    switch (i) {
                    case "value":
                        r = x;
                        break;
                    case "defaultValue":
                        d = x;
                        break;
                    case "multiple":
                        a = x;
                    default:
                        Me(e, t, i, x, n, null)
                    }
            t = r,
            n = d,
            e.multiple = !!a,
            t != null ? Ra(e, !!a, t, !1) : n != null && Ra(e, !!a, n, !0);
            return;
        case "textarea":
            be("invalid", e),
            r = i = a = null;
            for (d in n)
                if (n.hasOwnProperty(d) && (x = n[d],
                x != null))
                    switch (d) {
                    case "value":
                        a = x;
                        break;
                    case "defaultValue":
                        i = x;
                        break;
                    case "children":
                        r = x;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (x != null)
                            throw Error(c(91));
                        break;
                    default:
                        Me(e, t, d, x, n, null)
                    }
            Ju(e, a, i, r);
            return;
        case "option":
            for (w in n)
                n.hasOwnProperty(w) && (a = n[w],
                a != null) && (w === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Me(e, t, w, a, n, null));
            return;
        case "dialog":
            be("beforetoggle", e),
            be("toggle", e),
            be("cancel", e),
            be("close", e);
            break;
        case "iframe":
        case "object":
            be("load", e);
            break;
        case "video":
        case "audio":
            for (a = 0; a < ns.length; a++)
                be(ns[a], e);
            break;
        case "image":
            be("error", e),
            be("load", e);
            break;
        case "details":
            be("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            be("error", e),
            be("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (z in n)
                if (n.hasOwnProperty(z) && (a = n[z],
                a != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(c(137, t));
                    default:
                        Me(e, t, z, a, n, null)
                    }
            return;
        default:
            if (Ar(t)) {
                for (L in n)
                    n.hasOwnProperty(L) && (a = n[L],
                    a !== void 0 && pc(e, t, L, a, n, void 0));
                return
            }
        }
        for (x in n)
            n.hasOwnProperty(x) && (a = n[x],
            a != null && Me(e, t, x, a, n, null))
    }
    function ry(e, t, n, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var i = null
              , r = null
              , d = null
              , x = null
              , w = null
              , z = null
              , L = null;
            for (U in n) {
                var G = n[U];
                if (n.hasOwnProperty(U) && G != null)
                    switch (U) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        w = G;
                    default:
                        a.hasOwnProperty(U) || Me(e, t, U, null, a, G)
                    }
            }
            for (var M in a) {
                var U = a[M];
                if (G = n[M],
                a.hasOwnProperty(M) && (U != null || G != null))
                    switch (M) {
                    case "type":
                        r = U;
                        break;
                    case "name":
                        i = U;
                        break;
                    case "checked":
                        z = U;
                        break;
                    case "defaultChecked":
                        L = U;
                        break;
                    case "value":
                        d = U;
                        break;
                    case "defaultValue":
                        x = U;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (U != null)
                            throw Error(c(137, t));
                        break;
                    default:
                        U !== G && Me(e, t, M, U, a, G)
                    }
            }
            Er(e, d, x, w, z, L, r, i);
            return;
        case "select":
            U = d = x = M = null;
            for (r in n)
                if (w = n[r],
                n.hasOwnProperty(r) && w != null)
                    switch (r) {
                    case "value":
                        break;
                    case "multiple":
                        U = w;
                    default:
                        a.hasOwnProperty(r) || Me(e, t, r, null, a, w)
                    }
            for (i in a)
                if (r = a[i],
                w = n[i],
                a.hasOwnProperty(i) && (r != null || w != null))
                    switch (i) {
                    case "value":
                        M = r;
                        break;
                    case "defaultValue":
                        x = r;
                        break;
                    case "multiple":
                        d = r;
                    default:
                        r !== w && Me(e, t, i, r, a, w)
                    }
            t = x,
            n = d,
            a = U,
            M != null ? Ra(e, !!n, M, !1) : !!a != !!n && (t != null ? Ra(e, !!n, t, !0) : Ra(e, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            U = M = null;
            for (x in n)
                if (i = n[x],
                n.hasOwnProperty(x) && i != null && !a.hasOwnProperty(x))
                    switch (x) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Me(e, t, x, null, a, i)
                    }
            for (d in a)
                if (i = a[d],
                r = n[d],
                a.hasOwnProperty(d) && (i != null || r != null))
                    switch (d) {
                    case "value":
                        M = i;
                        break;
                    case "defaultValue":
                        U = i;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (i != null)
                            throw Error(c(91));
                        break;
                    default:
                        i !== r && Me(e, t, d, i, a, r)
                    }
            Ku(e, M, U);
            return;
        case "option":
            for (var $ in n)
                M = n[$],
                n.hasOwnProperty($) && M != null && !a.hasOwnProperty($) && ($ === "selected" ? e.selected = !1 : Me(e, t, $, null, a, M));
            for (w in a)
                M = a[w],
                U = n[w],
                a.hasOwnProperty(w) && M !== U && (M != null || U != null) && (w === "selected" ? e.selected = M && typeof M != "function" && typeof M != "symbol" : Me(e, t, w, M, a, U));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var ie in n)
                M = n[ie],
                n.hasOwnProperty(ie) && M != null && !a.hasOwnProperty(ie) && Me(e, t, ie, null, a, M);
            for (z in a)
                if (M = a[z],
                U = n[z],
                a.hasOwnProperty(z) && M !== U && (M != null || U != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (M != null)
                            throw Error(c(137, t));
                        break;
                    default:
                        Me(e, t, z, M, a, U)
                    }
            return;
        default:
            if (Ar(t)) {
                for (var De in n)
                    M = n[De],
                    n.hasOwnProperty(De) && M !== void 0 && !a.hasOwnProperty(De) && pc(e, t, De, void 0, a, M);
                for (L in a)
                    M = a[L],
                    U = n[L],
                    !a.hasOwnProperty(L) || M === U || M === void 0 && U === void 0 || pc(e, t, L, M, a, U);
                return
            }
        }
        for (var E in n)
            M = n[E],
            n.hasOwnProperty(E) && M != null && !a.hasOwnProperty(E) && Me(e, t, E, null, a, M);
        for (G in a)
            M = a[G],
            U = n[G],
            !a.hasOwnProperty(G) || M === U || M == null && U == null || Me(e, t, G, M, a, U)
    }
    function Pm(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function oy() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
                var i = n[a]
                  , r = i.transferSize
                  , d = i.initiatorType
                  , x = i.duration;
                if (r && x && Pm(d)) {
                    for (d = 0,
                    x = i.responseEnd,
                    a += 1; a < n.length; a++) {
                        var w = n[a]
                          , z = w.startTime;
                        if (z > x)
                            break;
                        var L = w.transferSize
                          , G = w.initiatorType;
                        L && Pm(G) && (w = w.responseEnd,
                        d += L * (w < x ? 1 : (x - z) / (w - z)))
                    }
                    if (--a,
                    t += 8 * (r + d) / (i.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var hc = null
      , xc = null;
    function Ei(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function $m(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function ep(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function gc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var vc = null;
    function cy() {
        var e = window.event;
        return e && e.type === "popstate" ? e === vc ? !1 : (vc = e,
        !0) : (vc = null,
        !1)
    }
    var tp = typeof setTimeout == "function" ? setTimeout : void 0
      , uy = typeof clearTimeout == "function" ? clearTimeout : void 0
      , np = typeof Promise == "function" ? Promise : void 0
      , fy = typeof queueMicrotask == "function" ? queueMicrotask : typeof np < "u" ? function(e) {
        return np.resolve(null).then(e).catch(dy)
    }
    : tp;
    function dy(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Vn(e) {
        return e === "head"
    }
    function ap(e, t) {
        var n = t
          , a = 0;
        do {
            var i = n.nextSibling;
            if (e.removeChild(n),
            i && i.nodeType === 8)
                if (n = i.data,
                n === "/$" || n === "/&") {
                    if (a === 0) {
                        e.removeChild(i),
                        ol(t);
                        return
                    }
                    a--
                } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
                    a++;
                else if (n === "html")
                    ls(e.ownerDocument.documentElement);
                else if (n === "head") {
                    n = e.ownerDocument.head,
                    ls(n);
                    for (var r = n.firstChild; r; ) {
                        var d = r.nextSibling
                          , x = r.nodeName;
                        r[Sl] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r),
                        r = d
                    }
                } else
                    n === "body" && ls(e.ownerDocument.body);
            n = i
        } while (n);
        ol(t)
    }
    function lp(e, t) {
        var n = e;
        e = 0;
        do {
            var a = n.nextSibling;
            if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display,
            n.style.display = "none") : (n.style.display = n._stashedDisplay || "",
            n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue,
            n.nodeValue = "") : n.nodeValue = n._stashedText || ""),
            a && a.nodeType === 8)
                if (n = a.data,
                n === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
            n = a
        } while (n)
    }
    function yc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                yc(n),
                Nr(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(n)
        }
    }
    function my(e, t, n, a) {
        for (; e.nodeType === 1; ) {
            var i = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (a) {
                if (!e[Sl])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (r = e.getAttribute("rel"),
                        r === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (r !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (r = e.getAttribute("src"),
                        (r !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var r = i.name == null ? null : "" + i.name;
                if (i.type === "hidden" && e.getAttribute("name") === r)
                    return e
            } else
                return e;
            if (e = Ht(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function py(e, t, n) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ht(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function sp(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ht(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function bc(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function wc(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function hy(e, t) {
        var n = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || n.readyState !== "loading")
            t();
        else {
            var a = function() {
                t(),
                n.removeEventListener("DOMContentLoaded", a)
            };
            n.addEventListener("DOMContentLoaded", a),
            e._reactRetry = a
        }
    }
    function Ht(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var Sc = null;
    function ip(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$" || n === "/&") {
                    if (t === 0)
                        return Ht(e.nextSibling);
                    t--
                } else
                    n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function rp(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n !== "/$" && n !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function op(e, t, n) {
        switch (t = Ei(n),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(c(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(c(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(c(454));
            return e;
        default:
            throw Error(c(451))
        }
    }
    function ls(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        Nr(e)
    }
    var Lt = new Map
      , cp = new Set;
    function Ti(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var yn = k.d;
    k.d = {
        f: xy,
        r: gy,
        D: vy,
        C: yy,
        L: by,
        m: wy,
        X: Ny,
        S: Sy,
        M: jy
    };
    function xy() {
        var e = yn.f()
          , t = gi();
        return e || t
    }
    function gy(e) {
        var t = Aa(e);
        t !== null && t.tag === 5 && t.type === "form" ? Td(t) : yn.r(e)
    }
    var sl = typeof document > "u" ? null : document;
    function up(e, t, n) {
        var a = sl;
        if (a && typeof t == "string" && t) {
            var i = Ct(t);
            i = 'link[rel="' + e + '"][href="' + i + '"]',
            typeof n == "string" && (i += '[crossorigin="' + n + '"]'),
            cp.has(i) || (cp.add(i),
            e = {
                rel: e,
                crossOrigin: n,
                href: t
            },
            a.querySelector(i) === null && (t = a.createElement("link"),
            nt(t, "link", e),
            We(t),
            a.head.appendChild(t)))
        }
    }
    function vy(e) {
        yn.D(e),
        up("dns-prefetch", e, null)
    }
    function yy(e, t) {
        yn.C(e, t),
        up("preconnect", e, t)
    }
    function by(e, t, n) {
        yn.L(e, t, n);
        var a = sl;
        if (a && e && t) {
            var i = 'link[rel="preload"][as="' + Ct(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Ct(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (i += '[imagesizes="' + Ct(n.imageSizes) + '"]')) : i += '[href="' + Ct(e) + '"]';
            var r = i;
            switch (t) {
            case "style":
                r = il(e);
                break;
            case "script":
                r = rl(e)
            }
            Lt.has(r) || (e = b({
                rel: "preload",
                href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n),
            Lt.set(r, e),
            a.querySelector(i) !== null || t === "style" && a.querySelector(ss(r)) || t === "script" && a.querySelector(is(r)) || (t = a.createElement("link"),
            nt(t, "link", e),
            We(t),
            a.head.appendChild(t)))
        }
    }
    function wy(e, t) {
        yn.m(e, t);
        var n = sl;
        if (n && e) {
            var a = t && typeof t.as == "string" ? t.as : "script"
              , i = 'link[rel="modulepreload"][as="' + Ct(a) + '"][href="' + Ct(e) + '"]'
              , r = i;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                r = rl(e)
            }
            if (!Lt.has(r) && (e = b({
                rel: "modulepreload",
                href: e
            }, t),
            Lt.set(r, e),
            n.querySelector(i) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(is(r)))
                        return
                }
                a = n.createElement("link"),
                nt(a, "link", e),
                We(a),
                n.head.appendChild(a)
            }
        }
    }
    function Sy(e, t, n) {
        yn.S(e, t, n);
        var a = sl;
        if (a && e) {
            var i = Oa(a).hoistableStyles
              , r = il(e);
            t = t || "default";
            var d = i.get(r);
            if (!d) {
                var x = {
                    loading: 0,
                    preload: null
                };
                if (d = a.querySelector(ss(r)))
                    x.loading = 5;
                else {
                    e = b({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, n),
                    (n = Lt.get(r)) && Nc(e, n);
                    var w = d = a.createElement("link");
                    We(w),
                    nt(w, "link", e),
                    w._p = new Promise(function(z, L) {
                        w.onload = z,
                        w.onerror = L
                    }
                    ),
                    w.addEventListener("load", function() {
                        x.loading |= 1
                    }),
                    w.addEventListener("error", function() {
                        x.loading |= 2
                    }),
                    x.loading |= 4,
                    Ai(d, t, a)
                }
                d = {
                    type: "stylesheet",
                    instance: d,
                    count: 1,
                    state: x
                },
                i.set(r, d)
            }
        }
    }
    function Ny(e, t) {
        yn.X(e, t);
        var n = sl;
        if (n && e) {
            var a = Oa(n).hoistableScripts
              , i = rl(e)
              , r = a.get(i);
            r || (r = n.querySelector(is(i)),
            r || (e = b({
                src: e,
                async: !0
            }, t),
            (t = Lt.get(i)) && jc(e, t),
            r = n.createElement("script"),
            We(r),
            nt(r, "link", e),
            n.head.appendChild(r)),
            r = {
                type: "script",
                instance: r,
                count: 1,
                state: null
            },
            a.set(i, r))
        }
    }
    function jy(e, t) {
        yn.M(e, t);
        var n = sl;
        if (n && e) {
            var a = Oa(n).hoistableScripts
              , i = rl(e)
              , r = a.get(i);
            r || (r = n.querySelector(is(i)),
            r || (e = b({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = Lt.get(i)) && jc(e, t),
            r = n.createElement("script"),
            We(r),
            nt(r, "link", e),
            n.head.appendChild(r)),
            r = {
                type: "script",
                instance: r,
                count: 1,
                state: null
            },
            a.set(i, r))
        }
    }
    function fp(e, t, n, a) {
        var i = (i = de.current) ? Ti(i) : null;
        if (!i)
            throw Error(c(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (t = il(n.href),
            n = Oa(i).hoistableStyles,
            a = n.get(t),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                e = il(n.href);
                var r = Oa(i).hoistableStyles
                  , d = r.get(e);
                if (d || (i = i.ownerDocument || i,
                d = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                r.set(e, d),
                (r = i.querySelector(ss(e))) && !r._p && (d.instance = r,
                d.state.loading = 5),
                Lt.has(e) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                Lt.set(e, n),
                r || Ey(i, e, n, d.state))),
                t && a === null)
                    throw Error(c(528, ""));
                return d
            }
            if (t && a !== null)
                throw Error(c(529, ""));
            return null;
        case "script":
            return t = n.async,
            n = n.src,
            typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = rl(n),
            n = Oa(i).hoistableScripts,
            a = n.get(t),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(c(444, e))
        }
    }
    function il(e) {
        return 'href="' + Ct(e) + '"'
    }
    function ss(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function dp(e) {
        return b({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Ey(e, t, n, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"),
        a.preload = t,
        t.addEventListener("load", function() {
            return a.loading |= 1
        }),
        t.addEventListener("error", function() {
            return a.loading |= 2
        }),
        nt(t, "link", n),
        We(t),
        e.head.appendChild(t))
    }
    function rl(e) {
        return '[src="' + Ct(e) + '"]'
    }
    function is(e) {
        return "script[async]" + e
    }
    function mp(e, t, n) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var a = e.querySelector('style[data-href~="' + Ct(n.href) + '"]');
                if (a)
                    return t.instance = a,
                    We(a),
                    a;
                var i = b({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return a = (e.ownerDocument || e).createElement("style"),
                We(a),
                nt(a, "style", i),
                Ai(a, n.precedence, e),
                t.instance = a;
            case "stylesheet":
                i = il(n.href);
                var r = e.querySelector(ss(i));
                if (r)
                    return t.state.loading |= 4,
                    t.instance = r,
                    We(r),
                    r;
                a = dp(n),
                (i = Lt.get(i)) && Nc(a, i),
                r = (e.ownerDocument || e).createElement("link"),
                We(r);
                var d = r;
                return d._p = new Promise(function(x, w) {
                    d.onload = x,
                    d.onerror = w
                }
                ),
                nt(r, "link", a),
                t.state.loading |= 4,
                Ai(r, n.precedence, e),
                t.instance = r;
            case "script":
                return r = rl(n.src),
                (i = e.querySelector(is(r))) ? (t.instance = i,
                We(i),
                i) : (a = n,
                (i = Lt.get(r)) && (a = b({}, n),
                jc(a, i)),
                e = e.ownerDocument || e,
                i = e.createElement("script"),
                We(i),
                nt(i, "link", a),
                e.head.appendChild(i),
                t.instance = i);
            case "void":
                return null;
            default:
                throw Error(c(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
            t.state.loading |= 4,
            Ai(a, n.precedence, e));
        return t.instance
    }
    function Ai(e, t, n) {
        for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = a.length ? a[a.length - 1] : null, r = i, d = 0; d < a.length; d++) {
            var x = a[d];
            if (x.dataset.precedence === t)
                r = x;
            else if (r !== i)
                break
        }
        r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = n.nodeType === 9 ? n.head : n,
        t.insertBefore(e, t.firstChild))
    }
    function Nc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function jc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var Oi = null;
    function pp(e, t, n) {
        if (Oi === null) {
            var a = new Map
              , i = Oi = new Map;
            i.set(n, a)
        } else
            i = Oi,
            a = i.get(n),
            a || (a = new Map,
            i.set(n, a));
        if (a.has(e))
            return a;
        for (a.set(e, null),
        n = n.getElementsByTagName(e),
        i = 0; i < n.length; i++) {
            var r = n[i];
            if (!(r[Sl] || r[Pe] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
                var d = r.getAttribute(t) || "";
                d = e + d;
                var x = a.get(d);
                x ? x.push(r) : a.set(d, [r])
            }
        }
        return a
    }
    function hp(e, t, n) {
        e = e.ownerDocument || e,
        e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
    }
    function Ty(e, t, n) {
        if (n === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (e = t.disabled,
            typeof t.precedence == "string" && e == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function xp(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function Ay(e, t, n, a) {
        if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var i = il(a.href)
                  , r = t.querySelector(ss(i));
                if (r) {
                    t = r._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                    e = Ci.bind(e),
                    t.then(e, e)),
                    n.state.loading |= 4,
                    n.instance = r,
                    We(r);
                    return
                }
                r = t.ownerDocument || t,
                a = dp(a),
                (i = Lt.get(i)) && Nc(a, i),
                r = r.createElement("link"),
                We(r);
                var d = r;
                d._p = new Promise(function(x, w) {
                    d.onload = x,
                    d.onerror = w
                }
                ),
                nt(r, "link", a),
                n.instance = r
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(n, t),
            (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++,
            n = Ci.bind(e),
            t.addEventListener("load", n),
            t.addEventListener("error", n))
        }
    }
    var Ec = 0;
    function Oy(e, t) {
        return e.stylesheets && e.count === 0 && zi(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(n) {
            var a = setTimeout(function() {
                if (e.stylesheets && zi(e, e.stylesheets),
                e.unsuspend) {
                    var r = e.unsuspend;
                    e.unsuspend = null,
                    r()
                }
            }, 6e4 + t);
            0 < e.imgBytes && Ec === 0 && (Ec = 62500 * oy());
            var i = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && zi(e, e.stylesheets),
                e.unsuspend)) {
                    var r = e.unsuspend;
                    e.unsuspend = null,
                    r()
                }
            }, (e.imgBytes > Ec ? 50 : 800) + t);
            return e.unsuspend = n,
            function() {
                e.unsuspend = null,
                clearTimeout(a),
                clearTimeout(i)
            }
        }
        : null
    }
    function Ci() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                zi(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Ri = null;
    function zi(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Ri = new Map,
        t.forEach(Cy, e),
        Ri = null,
        Ci.call(e))
    }
    function Cy(e, t) {
        if (!(t.state.loading & 4)) {
            var n = Ri.get(e);
            if (n)
                var a = n.get(null);
            else {
                n = new Map,
                Ri.set(e, n);
                for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < i.length; r++) {
                    var d = i[r];
                    (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d),
                    a = d)
                }
                a && n.set(null, a)
            }
            i = t.instance,
            d = i.getAttribute("data-precedence"),
            r = n.get(d) || a,
            r === a && n.set(null, i),
            n.set(d, i),
            this.count++,
            a = Ci.bind(this),
            i.addEventListener("load", a),
            i.addEventListener("error", a),
            r ? r.parentNode.insertBefore(i, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(i, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var rs = {
        $$typeof: Q,
        Provider: null,
        Consumer: null,
        _currentValue: H,
        _currentValue2: H,
        _threadCount: 0
    };
    function Ry(e, t, n, a, i, r, d, x, w) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = yr(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = yr(0),
        this.hiddenUpdates = yr(null),
        this.identifierPrefix = a,
        this.onUncaughtError = i,
        this.onCaughtError = r,
        this.onRecoverableError = d,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = w,
        this.incompleteTransitions = new Map
    }
    function gp(e, t, n, a, i, r, d, x, w, z, L, G) {
        return e = new Ry(e,t,n,d,w,z,L,G,x),
        t = 1,
        r === !0 && (t |= 24),
        r = vt(3, null, null, t),
        e.current = r,
        r.stateNode = e,
        t = ao(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        r.memoizedState = {
            element: a,
            isDehydrated: n,
            cache: t
        },
        ro(r),
        e
    }
    function vp(e) {
        return e ? (e = qa,
        e) : qa
    }
    function yp(e, t, n, a, i, r) {
        i = vp(i),
        a.context === null ? a.context = i : a.pendingContext = i,
        a = Dn(t),
        a.payload = {
            element: n
        },
        r = r === void 0 ? null : r,
        r !== null && (a.callback = r),
        n = _n(e, a, t),
        n !== null && (dt(n, e, t),
        Bl(n, e, t))
    }
    function bp(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function Tc(e, t) {
        bp(e, t),
        (e = e.alternate) && bp(e, t)
    }
    function wp(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = ca(e, 67108864);
            t !== null && dt(t, e, 67108864),
            Tc(e, 67108864)
        }
    }
    function Sp(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Nt();
            t = br(t);
            var n = ca(e, t);
            n !== null && dt(n, e, t),
            Tc(e, t)
        }
    }
    var Mi = !0;
    function zy(e, t, n, a) {
        var i = O.T;
        O.T = null;
        var r = k.p;
        try {
            k.p = 2,
            Ac(e, t, n, a)
        } finally {
            k.p = r,
            O.T = i
        }
    }
    function My(e, t, n, a) {
        var i = O.T;
        O.T = null;
        var r = k.p;
        try {
            k.p = 8,
            Ac(e, t, n, a)
        } finally {
            k.p = r,
            O.T = i
        }
    }
    function Ac(e, t, n, a) {
        if (Mi) {
            var i = Oc(a);
            if (i === null)
                mc(e, t, a, Di, n),
                jp(e, a);
            else if (_y(i, e, t, n, a))
                a.stopPropagation();
            else if (jp(e, a),
            t & 4 && -1 < Dy.indexOf(e)) {
                for (; i !== null; ) {
                    var r = Aa(i);
                    if (r !== null)
                        switch (r.tag) {
                        case 3:
                            if (r = r.stateNode,
                            r.current.memoizedState.isDehydrated) {
                                var d = la(r.pendingLanes);
                                if (d !== 0) {
                                    var x = r;
                                    for (x.pendingLanes |= 2,
                                    x.entangledLanes |= 2; d; ) {
                                        var w = 1 << 31 - xt(d);
                                        x.entanglements[1] |= w,
                                        d &= ~w
                                    }
                                    Wt(r),
                                    (Ae & 6) === 0 && (hi = pt() + 500,
                                    ts(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            x = ca(r, 2),
                            x !== null && dt(x, r, 2),
                            gi(),
                            Tc(r, 2)
                        }
                    if (r = Oc(a),
                    r === null && mc(e, t, a, Di, n),
                    r === i)
                        break;
                    i = r
                }
                i !== null && a.stopPropagation()
            } else
                mc(e, t, a, null, n)
        }
    }
    function Oc(e) {
        return e = Cr(e),
        Cc(e)
    }
    var Di = null;
    function Cc(e) {
        if (Di = null,
        e = Ta(e),
        e !== null) {
            var t = m(e);
            if (t === null)
                e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = p(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 31) {
                    if (e = g(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return Di = e,
        null
    }
    function Np(e) {
        switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (vg()) {
            case Ru:
                return 2;
            case zu:
                return 8;
            case Ss:
            case yg:
                return 32;
            case Mu:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Rc = !1
      , Xn = null
      , Zn = null
      , Kn = null
      , os = new Map
      , cs = new Map
      , Jn = []
      , Dy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function jp(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Xn = null;
            break;
        case "dragenter":
        case "dragleave":
            Zn = null;
            break;
        case "mouseover":
        case "mouseout":
            Kn = null;
            break;
        case "pointerover":
        case "pointerout":
            os.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            cs.delete(t.pointerId)
        }
    }
    function us(e, t, n, a, i, r) {
        return e === null || e.nativeEvent !== r ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: a,
            nativeEvent: r,
            targetContainers: [i]
        },
        t !== null && (t = Aa(t),
        t !== null && wp(t)),
        e) : (e.eventSystemFlags |= a,
        t = e.targetContainers,
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e)
    }
    function _y(e, t, n, a, i) {
        switch (t) {
        case "focusin":
            return Xn = us(Xn, e, t, n, a, i),
            !0;
        case "dragenter":
            return Zn = us(Zn, e, t, n, a, i),
            !0;
        case "mouseover":
            return Kn = us(Kn, e, t, n, a, i),
            !0;
        case "pointerover":
            var r = i.pointerId;
            return os.set(r, us(os.get(r) || null, e, t, n, a, i)),
            !0;
        case "gotpointercapture":
            return r = i.pointerId,
            cs.set(r, us(cs.get(r) || null, e, t, n, a, i)),
            !0
        }
        return !1
    }
    function Ep(e) {
        var t = Ta(e.target);
        if (t !== null) {
            var n = m(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = p(n),
                    t !== null) {
                        e.blockedOn = t,
                        qu(e.priority, function() {
                            Sp(n)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = g(n),
                    t !== null) {
                        e.blockedOn = t,
                        qu(e.priority, function() {
                            Sp(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function _i(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Oc(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var a = new n.constructor(n.type,n);
                Or = a,
                n.target.dispatchEvent(a),
                Or = null
            } else
                return t = Aa(n),
                t !== null && wp(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function Tp(e, t, n) {
        _i(e) && n.delete(t)
    }
    function Uy() {
        Rc = !1,
        Xn !== null && _i(Xn) && (Xn = null),
        Zn !== null && _i(Zn) && (Zn = null),
        Kn !== null && _i(Kn) && (Kn = null),
        os.forEach(Tp),
        cs.forEach(Tp)
    }
    function Ui(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Rc || (Rc = !0,
        l.unstable_scheduleCallback(l.unstable_NormalPriority, Uy)))
    }
    var Hi = null;
    function Ap(e) {
        Hi !== e && (Hi = e,
        l.unstable_scheduleCallback(l.unstable_NormalPriority, function() {
            Hi === e && (Hi = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t]
                  , a = e[t + 1]
                  , i = e[t + 2];
                if (typeof a != "function") {
                    if (Cc(a || n) === null)
                        continue;
                    break
                }
                var r = Aa(n);
                r !== null && (e.splice(t, 3),
                t -= 3,
                Oo(r, {
                    pending: !0,
                    data: i,
                    method: n.method,
                    action: a
                }, a, i))
            }
        }))
    }
    function ol(e) {
        function t(w) {
            return Ui(w, e)
        }
        Xn !== null && Ui(Xn, e),
        Zn !== null && Ui(Zn, e),
        Kn !== null && Ui(Kn, e),
        os.forEach(t),
        cs.forEach(t);
        for (var n = 0; n < Jn.length; n++) {
            var a = Jn[n];
            a.blockedOn === e && (a.blockedOn = null)
        }
        for (; 0 < Jn.length && (n = Jn[0],
        n.blockedOn === null); )
            Ep(n),
            n.blockedOn === null && Jn.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay,
        n != null)
            for (a = 0; a < n.length; a += 3) {
                var i = n[a]
                  , r = n[a + 1]
                  , d = i[it] || null;
                if (typeof r == "function")
                    d || Ap(n);
                else if (d) {
                    var x = null;
                    if (r && r.hasAttribute("formAction")) {
                        if (i = r,
                        d = r[it] || null)
                            x = d.formAction;
                        else if (Cc(i) !== null)
                            continue
                    } else
                        x = d.action;
                    typeof x == "function" ? n[a + 1] = x : (n.splice(a, 3),
                    a -= 3),
                    Ap(n)
                }
            }
    }
    function Op() {
        function e(r) {
            r.canIntercept && r.info === "react-transition" && r.intercept({
                handler: function() {
                    return new Promise(function(d) {
                        return i = d
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            i !== null && (i(),
            i = null),
            a || setTimeout(n, 20)
        }
        function n() {
            if (!a && !navigation.transition) {
                var r = navigation.currentEntry;
                r && r.url != null && navigation.navigate(r.url, {
                    state: r.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , i = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(n, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                i !== null && (i(),
                i = null)
            }
        }
    }
    function zc(e) {
        this._internalRoot = e
    }
    Li.prototype.render = zc.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(c(409));
        var n = t.current
          , a = Nt();
        yp(n, a, e, t, null, null)
    }
    ,
    Li.prototype.unmount = zc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            yp(e.current, 2, null, e, null, null),
            gi(),
            t[Ea] = null
        }
    }
    ;
    function Li(e) {
        this._internalRoot = e
    }
    Li.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Lu();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Jn.length && t !== 0 && t < Jn[n].priority; n++)
                ;
            Jn.splice(n, 0, e),
            n === 0 && Ep(e)
        }
    }
    ;
    var Cp = s.version;
    if (Cp !== "19.2.3")
        throw Error(c(527, Cp, "19.2.3"));
    k.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","),
            Error(c(268, e)));
        return e = h(t),
        e = e !== null ? y(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var Hy = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: O,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!qi.isDisabled && qi.supportsFiber)
            try {
                yl = qi.inject(Hy),
                ht = qi
            } catch {}
    }
    return ds.createRoot = function(e, t) {
        if (!f(e))
            throw Error(c(299));
        var n = !1
          , a = ""
          , i = Hd
          , r = Ld
          , d = qd;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
        t.onCaughtError !== void 0 && (r = t.onCaughtError),
        t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        t = gp(e, 1, !1, null, null, n, a, null, i, r, d, Op),
        e[Ea] = t.current,
        dc(e),
        new zc(t)
    }
    ,
    ds.hydrateRoot = function(e, t, n) {
        if (!f(e))
            throw Error(c(299));
        var a = !1
          , i = ""
          , r = Hd
          , d = Ld
          , x = qd
          , w = null;
        return n != null && (n.unstable_strictMode === !0 && (a = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
        n.onCaughtError !== void 0 && (d = n.onCaughtError),
        n.onRecoverableError !== void 0 && (x = n.onRecoverableError),
        n.formState !== void 0 && (w = n.formState)),
        t = gp(e, 1, !0, t, n ?? null, a, i, w, r, d, x, Op),
        t.context = vp(null),
        n = t.current,
        a = Nt(),
        a = br(a),
        i = Dn(a),
        i.callback = null,
        _n(n, i, a),
        n = a,
        t.current.lanes = n,
        wl(t, n),
        Wt(t),
        e[Ea] = t.current,
        dc(e),
        new Li(t)
    }
    ,
    ds.version = "19.2.3",
    ds
}
var Bp;
function Zy() {
    if (Bp)
        return Dc.exports;
    Bp = 1;
    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
            } catch (s) {
                console.error(s)
            }
    }
    return l(),
    Dc.exports = Xy(),
    Dc.exports
}
var Ky = Zy();
function Jy(l, s) {
    if (l instanceof RegExp)
        return {
            keys: !1,
            pattern: l
        };
    var o, c, f, m, p = [], g = "", v = l.split("/");
    for (v[0] || v.shift(); f = v.shift(); )
        o = f[0],
        o === "*" ? (p.push(o),
        g += f[1] === "?" ? "(?:/(.*))?" : "/(.*)") : o === ":" ? (c = f.indexOf("?", 1),
        m = f.indexOf(".", 1),
        p.push(f.substring(1, ~c ? c : ~m ? m : f.length)),
        g += ~c && !~m ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~m && (g += (~c ? "?" : "") + "\\" + f.substring(m))) : g += "/" + f;
    return {
        keys: p,
        pattern: new RegExp("^" + g + (s ? "(?=$|/)" : "/?$"),"i")
    }
}
var S = er();
const In = Rh(S)
  , Mh = qy({
    __proto__: null,
    default: In
}, [S]);
var qc = {
    exports: {}
}
  , Bc = {};
var Yp;
function Fy() {
    if (Yp)
        return Bc;
    Yp = 1;
    var l = er();
    function s(b, T) {
        return b === T && (b !== 0 || 1 / b === 1 / T) || b !== b && T !== T
    }
    var o = typeof Object.is == "function" ? Object.is : s
      , c = l.useState
      , f = l.useEffect
      , m = l.useLayoutEffect
      , p = l.useDebugValue;
    function g(b, T) {
        var R = T()
          , _ = c({
            inst: {
                value: R,
                getSnapshot: T
            }
        })
          , A = _[0].inst
          , D = _[1];
        return m(function() {
            A.value = R,
            A.getSnapshot = T,
            v(A) && D({
                inst: A
            })
        }, [b, R, T]),
        f(function() {
            return v(A) && D({
                inst: A
            }),
            b(function() {
                v(A) && D({
                    inst: A
                })
            })
        }, [b]),
        p(R),
        R
    }
    function v(b) {
        var T = b.getSnapshot;
        b = b.value;
        try {
            var R = T();
            return !o(b, R)
        } catch {
            return !0
        }
    }
    function h(b, T) {
        return T()
    }
    var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : g;
    return Bc.useSyncExternalStore = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : y,
    Bc
}
var Gp;
function Wy() {
    return Gp || (Gp = 1,
    qc.exports = Fy()),
    qc.exports
}
var Iy = Wy();
const Py = Mh.useInsertionEffect
  , $y = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , eb = $y ? S.useLayoutEffect : S.useEffect
  , tb = Py || eb
  , Dh = l => {
    const s = S.useRef([l, (...o) => s[0](...o)]).current;
    return tb( () => {
        s[0] = l
    }
    ),
    s[1]
}
  , nb = "popstate"
  , ru = "pushState"
  , ou = "replaceState"
  , ab = "hashchange"
  , kp = [nb, ru, ou, ab]
  , lb = l => {
    for (const s of kp)
        addEventListener(s, l);
    return () => {
        for (const s of kp)
            removeEventListener(s, l)
    }
}
  , _h = (l, s) => Iy.useSyncExternalStore(lb, l, s)
  , Qp = () => location.search
  , sb = ({ssrSearch: l}={}) => _h(Qp, l != null ? () => l : Qp)
  , Vp = () => location.pathname
  , ib = ({ssrPath: l}={}) => _h(Vp, l != null ? () => l : Vp)
  , rb = (l, {replace: s=!1, state: o=null}={}) => history[s ? ou : ru](o, "", l)
  , ob = (l={}) => [ib(l), rb]
  , Xp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Xp] > "u") {
    for (const l of [ru, ou]) {
        const s = history[l];
        history[l] = function() {
            const o = s.apply(this, arguments)
              , c = new Event(l);
            return c.arguments = arguments,
            dispatchEvent(c),
            o
        }
    }
    Object.defineProperty(window, Xp, {
        value: !0
    })
}
const cb = (l, s) => s.toLowerCase().indexOf(l.toLowerCase()) ? "~" + s : s.slice(l.length) || "/"
  , Uh = (l="") => l === "/" ? "" : l
  , ub = (l, s) => l[0] === "~" ? l.slice(1) : Uh(s) + l
  , fb = (l="", s) => cb(Zp(Uh(l)), Zp(s))
  , Zp = l => {
    try {
        return decodeURI(l)
    } catch {
        return l
    }
}
  , Hh = {
    hook: ob,
    searchHook: sb,
    parser: Jy,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: l => l,
    aroundNav: (l, s, o) => l(s, o)
}
  , Lh = S.createContext(Hh)
  , tr = () => S.useContext(Lh)
  , qh = {}
  , Bh = S.createContext(qh)
  , db = () => S.useContext(Bh)
  , cu = l => {
    const [s,o] = l.hook(l);
    return [fb(l.base, s), Dh( (c, f) => l.aroundNav(o, ub(c, l.base), f))]
}
  , Yh = (l, s, o, c) => {
    const {pattern: f, keys: m} = s instanceof RegExp ? {
        keys: !1,
        pattern: s
    } : l(s || "*", c)
      , p = f.exec(o) || []
      , [g,...v] = p;
    return g !== void 0 ? [!0, ( () => {
        const h = m !== !1 ? Object.fromEntries(m.map( (b, T) => [b, v[T]])) : p.groups;
        let y = {
            ...v
        };
        return h && Object.assign(y, h),
        y
    }
    )(), ...c ? [g] : []] : [!1, null]
}
  , mb = ({children: l, ...s}) => {
    const o = tr()
      , c = s.hook ? Hh : o;
    let f = c;
    const [m,p=s.ssrSearch ?? ""] = s.ssrPath?.split("?") ?? [];
    m && (s.ssrSearch = p,
    s.ssrPath = m),
    s.hrefs = s.hrefs ?? s.hook?.hrefs,
    s.searchHook = s.searchHook ?? s.hook?.searchHook;
    let g = S.useRef({})
      , v = g.current
      , h = v;
    for (let y in c) {
        const b = y === "base" ? c[y] + (s[y] ?? "") : s[y] ?? c[y];
        v === h && b !== h[y] && (g.current = h = {
            ...h
        }),
        h[y] = b,
        (b !== c[y] || b !== f[y]) && (f = h)
    }
    return S.createElement(Lh.Provider, {
        value: f,
        children: l
    })
}
  , Kp = ({children: l, component: s}, o) => s ? S.createElement(s, {
    params: o
}) : typeof l == "function" ? l(o) : l
  , pb = l => {
    let s = S.useRef(qh);
    const o = s.current;
    return s.current = Object.keys(l).length !== Object.keys(o).length || Object.entries(l).some( ([c,f]) => f !== o[c]) ? l : o
}
  , Sa = ({path: l, nest: s, match: o, ...c}) => {
    const f = tr()
      , [m] = cu(f)
      , [p,g,v] = o ?? Yh(f.parser, l, m, s)
      , h = pb({
        ...db(),
        ...g
    });
    if (!p)
        return null;
    const y = v ? S.createElement(mb, {
        base: v
    }, Kp(c, h)) : Kp(c, h);
    return S.createElement(Bh.Provider, {
        value: h,
        children: y
    })
}
  , hb = S.forwardRef( (l, s) => {
    const o = tr()
      , [c,f] = cu(o)
      , {to: m="", href: p=m, onClick: g, asChild: v, children: h, className: y, replace: b, state: T, transition: R, ..._} = l
      , A = Dh(Y => {
        Y.ctrlKey || Y.metaKey || Y.altKey || Y.shiftKey || Y.button !== 0 || (g?.(Y),
        Y.defaultPrevented || (Y.preventDefault(),
        f(p, l)))
    }
    )
      , D = o.hrefs(p[0] === "~" ? p.slice(1) : o.base + p, o);
    return v && S.isValidElement(h) ? S.cloneElement(h, {
        onClick: A,
        href: D
    }) : S.createElement("a", {
        ..._,
        onClick: A,
        href: D,
        className: y?.call ? y(c === p) : y,
        children: h,
        ref: s
    })
}
)
  , Gh = l => Array.isArray(l) ? l.flatMap(s => Gh(s && s.type === S.Fragment ? s.props.children : s)) : [l]
  , xb = ({children: l, location: s}) => {
    const o = tr()
      , [c] = cu(o);
    for (const f of Gh(l)) {
        let m = 0;
        if (S.isValidElement(f) && (m = Yh(o.parser, f.props.path, s || c, f.props.nest))[0])
            return S.cloneElement(f, {
                match: m
            })
    }
    return null
}
;
var nr = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(l) {
        return this.listeners.add(l),
        this.onSubscribe(),
        () => {
            this.listeners.delete(l),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , gb = {
    setTimeout: (l, s) => setTimeout(l, s),
    clearTimeout: l => clearTimeout(l),
    setInterval: (l, s) => setInterval(l, s),
    clearInterval: l => clearInterval(l)
}
  , vb = class {
    #e = gb;
    #t = !1;
    setTimeoutProvider(l) {
        this.#e = l
    }
    setTimeout(l, s) {
        return this.#e.setTimeout(l, s)
    }
    clearTimeout(l) {
        this.#e.clearTimeout(l)
    }
    setInterval(l, s) {
        return this.#e.setInterval(l, s)
    }
    clearInterval(l) {
        this.#e.clearInterval(l)
    }
}
  , Jc = new vb;
function yb(l) {
    setTimeout(l, 0)
}
var ar = typeof window > "u" || "Deno"in globalThis;
function Gt() {}
function bb(l, s) {
    return typeof l == "function" ? l(s) : l
}
function wb(l) {
    return typeof l == "number" && l >= 0 && l !== 1 / 0
}
function Sb(l, s) {
    return Math.max(l + (s || 0) - Date.now(), 0)
}
function Fc(l, s) {
    return typeof l == "function" ? l(s) : l
}
function Nb(l, s) {
    return typeof l == "function" ? l(s) : l
}
function Jp(l, s) {
    const {type: o="all", exact: c, fetchStatus: f, predicate: m, queryKey: p, stale: g} = l;
    if (p) {
        if (c) {
            if (s.queryHash !== uu(p, s.options))
                return !1
        } else if (!xs(s.queryKey, p))
            return !1
    }
    if (o !== "all") {
        const v = s.isActive();
        if (o === "active" && !v || o === "inactive" && v)
            return !1
    }
    return !(typeof g == "boolean" && s.isStale() !== g || f && f !== s.state.fetchStatus || m && !m(s))
}
function Fp(l, s) {
    const {exact: o, status: c, predicate: f, mutationKey: m} = l;
    if (m) {
        if (!s.options.mutationKey)
            return !1;
        if (o) {
            if (hs(s.options.mutationKey) !== hs(m))
                return !1
        } else if (!xs(s.options.mutationKey, m))
            return !1
    }
    return !(c && s.state.status !== c || f && !f(s))
}
function uu(l, s) {
    return (s?.queryKeyHashFn || hs)(l)
}
function hs(l) {
    return JSON.stringify(l, (s, o) => Wc(o) ? Object.keys(o).sort().reduce( (c, f) => (c[f] = o[f],
    c), {}) : o)
}
function xs(l, s) {
    return l === s ? !0 : typeof l != typeof s ? !1 : l && s && typeof l == "object" && typeof s == "object" ? Object.keys(s).every(o => xs(l[o], s[o])) : !1
}
var jb = Object.prototype.hasOwnProperty;
function kh(l, s, o=0) {
    if (l === s)
        return l;
    if (o > 500)
        return s;
    const c = Wp(l) && Wp(s);
    if (!c && !(Wc(l) && Wc(s)))
        return s;
    const m = (c ? l : Object.keys(l)).length
      , p = c ? s : Object.keys(s)
      , g = p.length
      , v = c ? new Array(g) : {};
    let h = 0;
    for (let y = 0; y < g; y++) {
        const b = c ? y : p[y]
          , T = l[b]
          , R = s[b];
        if (T === R) {
            v[b] = T,
            (c ? y < m : jb.call(l, b)) && h++;
            continue
        }
        if (T === null || R === null || typeof T != "object" || typeof R != "object") {
            v[b] = R;
            continue
        }
        const _ = kh(T, R, o + 1);
        v[b] = _,
        _ === T && h++
    }
    return m === g && h === m ? l : v
}
function Wp(l) {
    return Array.isArray(l) && l.length === Object.keys(l).length
}
function Wc(l) {
    if (!Ip(l))
        return !1;
    const s = l.constructor;
    if (s === void 0)
        return !0;
    const o = s.prototype;
    return !(!Ip(o) || !o.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(l) !== Object.prototype)
}
function Ip(l) {
    return Object.prototype.toString.call(l) === "[object Object]"
}
function Eb(l) {
    return new Promise(s => {
        Jc.setTimeout(s, l)
    }
    )
}
function Tb(l, s, o) {
    return typeof o.structuralSharing == "function" ? o.structuralSharing(l, s) : o.structuralSharing !== !1 ? kh(l, s) : s
}
function Ab(l, s, o=0) {
    const c = [...l, s];
    return o && c.length > o ? c.slice(1) : c
}
function Ob(l, s, o=0) {
    const c = [s, ...l];
    return o && c.length > o ? c.slice(0, -1) : c
}
var fu = Symbol();
function Qh(l, s) {
    return !l.queryFn && s?.initialPromise ? () => s.initialPromise : !l.queryFn || l.queryFn === fu ? () => Promise.reject(new Error(`Missing queryFn: '${l.queryHash}'`)) : l.queryFn
}
function Cb(l, s, o) {
    let c = !1, f;
    return Object.defineProperty(l, "signal", {
        enumerable: !0,
        get: () => (f ??= s(),
        c || (c = !0,
        f.aborted ? o() : f.addEventListener("abort", o, {
            once: !0
        })),
        f)
    }),
    l
}
var Rb = class extends nr {
    #e;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = l => {
            if (!ar && window.addEventListener) {
                const s = () => l();
                return window.addEventListener("visibilitychange", s, !1),
                () => {
                    window.removeEventListener("visibilitychange", s)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(l) {
        this.#n = l,
        this.#t?.(),
        this.#t = l(s => {
            typeof s == "boolean" ? this.setFocused(s) : this.onFocus()
        }
        )
    }
    setFocused(l) {
        this.#e !== l && (this.#e = l,
        this.onFocus())
    }
    onFocus() {
        const l = this.isFocused();
        this.listeners.forEach(s => {
            s(l)
        }
        )
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
    }
}
  , Vh = new Rb;
function zb() {
    let l, s;
    const o = new Promise( (f, m) => {
        l = f,
        s = m
    }
    );
    o.status = "pending",
    o.catch( () => {}
    );
    function c(f) {
        Object.assign(o, f),
        delete o.resolve,
        delete o.reject
    }
    return o.resolve = f => {
        c({
            status: "fulfilled",
            value: f
        }),
        l(f)
    }
    ,
    o.reject = f => {
        c({
            status: "rejected",
            reason: f
        }),
        s(f)
    }
    ,
    o
}
var Mb = yb;
function Db() {
    let l = []
      , s = 0
      , o = g => {
        g()
    }
      , c = g => {
        g()
    }
      , f = Mb;
    const m = g => {
        s ? l.push(g) : f( () => {
            o(g)
        }
        )
    }
      , p = () => {
        const g = l;
        l = [],
        g.length && f( () => {
            c( () => {
                g.forEach(v => {
                    o(v)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: g => {
            let v;
            s++;
            try {
                v = g()
            } finally {
                s--,
                s || p()
            }
            return v
        }
        ,
        batchCalls: g => (...v) => {
            m( () => {
                g(...v)
            }
            )
        }
        ,
        schedule: m,
        setNotifyFunction: g => {
            o = g
        }
        ,
        setBatchNotifyFunction: g => {
            c = g
        }
        ,
        setScheduler: g => {
            f = g
        }
    }
}
var st = Db()
  , _b = class extends nr {
    #e = !0;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = l => {
            if (!ar && window.addEventListener) {
                const s = () => l(!0)
                  , o = () => l(!1);
                return window.addEventListener("online", s, !1),
                window.addEventListener("offline", o, !1),
                () => {
                    window.removeEventListener("online", s),
                    window.removeEventListener("offline", o)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(l) {
        this.#n = l,
        this.#t?.(),
        this.#t = l(this.setOnline.bind(this))
    }
    setOnline(l) {
        this.#e !== l && (this.#e = l,
        this.listeners.forEach(o => {
            o(l)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
  , Ji = new _b;
function Ub(l) {
    return Math.min(1e3 * 2 ** l, 3e4)
}
function Xh(l) {
    return (l ?? "online") === "online" ? Ji.isOnline() : !0
}
var Ic = class extends Error {
    constructor(l) {
        super("CancelledError"),
        this.revert = l?.revert,
        this.silent = l?.silent
    }
}
;
function Zh(l) {
    let s = !1, o = 0, c;
    const f = zb()
      , m = () => f.status !== "pending"
      , p = A => {
        if (!m()) {
            const D = new Ic(A);
            T(D),
            l.onCancel?.(D)
        }
    }
      , g = () => {
        s = !0
    }
      , v = () => {
        s = !1
    }
      , h = () => Vh.isFocused() && (l.networkMode === "always" || Ji.isOnline()) && l.canRun()
      , y = () => Xh(l.networkMode) && l.canRun()
      , b = A => {
        m() || (c?.(),
        f.resolve(A))
    }
      , T = A => {
        m() || (c?.(),
        f.reject(A))
    }
      , R = () => new Promise(A => {
        c = D => {
            (m() || h()) && A(D)
        }
        ,
        l.onPause?.()
    }
    ).then( () => {
        c = void 0,
        m() || l.onContinue?.()
    }
    )
      , _ = () => {
        if (m())
            return;
        let A;
        const D = o === 0 ? l.initialPromise : void 0;
        try {
            A = D ?? l.fn()
        } catch (Y) {
            A = Promise.reject(Y)
        }
        Promise.resolve(A).then(b).catch(Y => {
            if (m())
                return;
            const V = l.retry ?? (ar ? 0 : 3)
              , Q = l.retryDelay ?? Ub
              , K = typeof Q == "function" ? Q(o, Y) : Q
              , J = V === !0 || typeof V == "number" && o < V || typeof V == "function" && V(o, Y);
            if (s || !J) {
                T(Y);
                return
            }
            o++,
            l.onFail?.(o, Y),
            Eb(K).then( () => h() ? void 0 : R()).then( () => {
                s ? T(Y) : _()
            }
            )
        }
        )
    }
    ;
    return {
        promise: f,
        status: () => f.status,
        cancel: p,
        continue: () => (c?.(),
        f),
        cancelRetry: g,
        continueRetry: v,
        canStart: y,
        start: () => (y() ? _() : R().then(_),
        f)
    }
}
var Kh = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        wb(this.gcTime) && (this.#e = Jc.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(l) {
        this.gcTime = Math.max(this.gcTime || 0, l ?? (ar ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e && (Jc.clearTimeout(this.#e),
        this.#e = void 0)
    }
}
  , Hb = class extends Kh {
    #e;
    #t;
    #n;
    #l;
    #a;
    #i;
    #r;
    constructor(l) {
        super(),
        this.#r = !1,
        this.#i = l.defaultOptions,
        this.setOptions(l.options),
        this.observers = [],
        this.#l = l.client,
        this.#n = this.#l.getQueryCache(),
        this.queryKey = l.queryKey,
        this.queryHash = l.queryHash,
        this.#e = $p(this.options),
        this.state = l.state ?? this.#e,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#a?.promise
    }
    setOptions(l) {
        if (this.options = {
            ...this.#i,
            ...l
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const s = $p(this.options);
            s.data !== void 0 && (this.setState(Pp(s.data, s.dataUpdatedAt)),
            this.#e = s)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
    }
    setData(l, s) {
        const o = Tb(this.state.data, l, this.options);
        return this.#s({
            data: o,
            type: "success",
            dataUpdatedAt: s?.updatedAt,
            manual: s?.manual
        }),
        o
    }
    setState(l, s) {
        this.#s({
            type: "setState",
            state: l,
            setStateOptions: s
        })
    }
    cancel(l) {
        const s = this.#a?.promise;
        return this.#a?.cancel(l),
        s ? s.then(Gt).catch(Gt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.#e)
    }
    isActive() {
        return this.observers.some(l => Nb(l.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === fu || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(l => Fc(l.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(l => l.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(l=0) {
        return this.state.data === void 0 ? !0 : l === "static" ? !1 : this.state.isInvalidated ? !0 : !Sb(this.state.dataUpdatedAt, l)
    }
    onFocus() {
        this.observers.find(s => s.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    onOnline() {
        this.observers.find(s => s.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    addObserver(l) {
        this.observers.includes(l) || (this.observers.push(l),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            query: this,
            observer: l
        }))
    }
    removeObserver(l) {
        this.observers.includes(l) && (this.observers = this.observers.filter(s => s !== l),
        this.observers.length || (this.#a && (this.#r ? this.#a.cancel({
            revert: !0
        }) : this.#a.cancelRetry()),
        this.scheduleGc()),
        this.#n.notify({
            type: "observerRemoved",
            query: this,
            observer: l
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.#s({
            type: "invalidate"
        })
    }
    async fetch(l, s) {
        if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
            if (this.state.data !== void 0 && s?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#a)
                return this.#a.continueRetry(),
                this.#a.promise
        }
        if (l && this.setOptions(l),
        !this.options.queryFn) {
            const g = this.observers.find(v => v.options.queryFn);
            g && this.setOptions(g.options)
        }
        const o = new AbortController
          , c = g => {
            Object.defineProperty(g, "signal", {
                enumerable: !0,
                get: () => (this.#r = !0,
                o.signal)
            })
        }
          , f = () => {
            const g = Qh(this.options, s)
              , h = ( () => {
                const y = {
                    client: this.#l,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return c(y),
                y
            }
            )();
            return this.#r = !1,
            this.options.persister ? this.options.persister(g, h, this) : g(h)
        }
          , p = ( () => {
            const g = {
                fetchOptions: s,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#l,
                state: this.state,
                fetchFn: f
            };
            return c(g),
            g
        }
        )();
        this.options.behavior?.onFetch(p, this),
        this.#t = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== p.fetchOptions?.meta) && this.#s({
            type: "fetch",
            meta: p.fetchOptions?.meta
        }),
        this.#a = Zh({
            initialPromise: s?.initialPromise,
            fn: p.fetchFn,
            onCancel: g => {
                g instanceof Ic && g.revert && this.setState({
                    ...this.#t,
                    fetchStatus: "idle"
                }),
                o.abort()
            }
            ,
            onFail: (g, v) => {
                this.#s({
                    type: "failed",
                    failureCount: g,
                    error: v
                })
            }
            ,
            onPause: () => {
                this.#s({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#s({
                    type: "continue"
                })
            }
            ,
            retry: p.options.retry,
            retryDelay: p.options.retryDelay,
            networkMode: p.options.networkMode,
            canRun: () => !0
        });
        try {
            const g = await this.#a.start();
            if (g === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(g),
            this.#n.config.onSuccess?.(g, this),
            this.#n.config.onSettled?.(g, this.state.error, this),
            g
        } catch (g) {
            if (g instanceof Ic) {
                if (g.silent)
                    return this.#a.promise;
                if (g.revert) {
                    if (this.state.data === void 0)
                        throw g;
                    return this.state.data
                }
            }
            throw this.#s({
                type: "error",
                error: g
            }),
            this.#n.config.onError?.(g, this),
            this.#n.config.onSettled?.(this.state.data, g, this),
            g
        } finally {
            this.scheduleGc()
        }
    }
    #s(l) {
        const s = o => {
            switch (l.type) {
            case "failed":
                return {
                    ...o,
                    fetchFailureCount: l.failureCount,
                    fetchFailureReason: l.error
                };
            case "pause":
                return {
                    ...o,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...o,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...o,
                    ...Lb(o.data, this.options),
                    fetchMeta: l.meta ?? null
                };
            case "success":
                const c = {
                    ...o,
                    ...Pp(l.data, l.dataUpdatedAt),
                    dataUpdateCount: o.dataUpdateCount + 1,
                    ...!l.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                return this.#t = l.manual ? c : void 0,
                c;
            case "error":
                const f = l.error;
                return {
                    ...o,
                    error: f,
                    errorUpdateCount: o.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: o.fetchFailureCount + 1,
                    fetchFailureReason: f,
                    fetchStatus: "idle",
                    status: "error",
                    isInvalidated: !0
                };
            case "invalidate":
                return {
                    ...o,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...o,
                    ...l.state
                }
            }
        }
        ;
        this.state = s(this.state),
        st.batch( () => {
            this.observers.forEach(o => {
                o.onQueryUpdate()
            }
            ),
            this.#n.notify({
                query: this,
                type: "updated",
                action: l
            })
        }
        )
    }
}
;
function Lb(l, s) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Xh(s.networkMode) ? "fetching" : "paused",
        ...l === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Pp(l, s) {
    return {
        data: l,
        dataUpdatedAt: s ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}
function $p(l) {
    const s = typeof l.initialData == "function" ? l.initialData() : l.initialData
      , o = s !== void 0
      , c = o ? typeof l.initialDataUpdatedAt == "function" ? l.initialDataUpdatedAt() : l.initialDataUpdatedAt : 0;
    return {
        data: s,
        dataUpdateCount: 0,
        dataUpdatedAt: o ? c ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: o ? "success" : "pending",
        fetchStatus: "idle"
    }
}
function eh(l) {
    return {
        onFetch: (s, o) => {
            const c = s.options
              , f = s.fetchOptions?.meta?.fetchMore?.direction
              , m = s.state.data?.pages || []
              , p = s.state.data?.pageParams || [];
            let g = {
                pages: [],
                pageParams: []
            }
              , v = 0;
            const h = async () => {
                let y = !1;
                const b = _ => {
                    Cb(_, () => s.signal, () => y = !0)
                }
                  , T = Qh(s.options, s.fetchOptions)
                  , R = async (_, A, D) => {
                    if (y)
                        return Promise.reject();
                    if (A == null && _.pages.length)
                        return Promise.resolve(_);
                    const V = ( () => {
                        const I = {
                            client: s.client,
                            queryKey: s.queryKey,
                            pageParam: A,
                            direction: D ? "backward" : "forward",
                            meta: s.options.meta
                        };
                        return b(I),
                        I
                    }
                    )()
                      , Q = await T(V)
                      , {maxPages: K} = s.options
                      , J = D ? Ob : Ab;
                    return {
                        pages: J(_.pages, Q, K),
                        pageParams: J(_.pageParams, A, K)
                    }
                }
                ;
                if (f && m.length) {
                    const _ = f === "backward"
                      , A = _ ? qb : th
                      , D = {
                        pages: m,
                        pageParams: p
                    }
                      , Y = A(c, D);
                    g = await R(D, Y, _)
                } else {
                    const _ = l ?? m.length;
                    do {
                        const A = v === 0 ? p[0] ?? c.initialPageParam : th(c, g);
                        if (v > 0 && A == null)
                            break;
                        g = await R(g, A),
                        v++
                    } while (v < _)
                }
                return g
            }
            ;
            s.options.persister ? s.fetchFn = () => s.options.persister?.(h, {
                client: s.client,
                queryKey: s.queryKey,
                meta: s.options.meta,
                signal: s.signal
            }, o) : s.fetchFn = h
        }
    }
}
function th(l, {pages: s, pageParams: o}) {
    const c = s.length - 1;
    return s.length > 0 ? l.getNextPageParam(s[c], s, o[c], o) : void 0
}
function qb(l, {pages: s, pageParams: o}) {
    return s.length > 0 ? l.getPreviousPageParam?.(s[0], s, o[0], o) : void 0
}
var Bb = class extends Kh {
    #e;
    #t;
    #n;
    #l;
    constructor(l) {
        super(),
        this.#e = l.client,
        this.mutationId = l.mutationId,
        this.#n = l.mutationCache,
        this.#t = [],
        this.state = l.state || Yb(),
        this.setOptions(l.options),
        this.scheduleGc()
    }
    setOptions(l) {
        this.options = l,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(l) {
        this.#t.includes(l) || (this.#t.push(l),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            mutation: this,
            observer: l
        }))
    }
    removeObserver(l) {
        this.#t = this.#t.filter(s => s !== l),
        this.scheduleGc(),
        this.#n.notify({
            type: "observerRemoved",
            mutation: this,
            observer: l
        })
    }
    optionalRemove() {
        this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this))
    }
    continue() {
        return this.#l?.continue() ?? this.execute(this.state.variables)
    }
    async execute(l) {
        const s = () => {
            this.#a({
                type: "continue"
            })
        }
          , o = {
            client: this.#e,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#l = Zh({
            fn: () => this.options.mutationFn ? this.options.mutationFn(l, o) : Promise.reject(new Error("No mutationFn found")),
            onFail: (m, p) => {
                this.#a({
                    type: "failed",
                    failureCount: m,
                    error: p
                })
            }
            ,
            onPause: () => {
                this.#a({
                    type: "pause"
                })
            }
            ,
            onContinue: s,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#n.canRun(this)
        });
        const c = this.state.status === "pending"
          , f = !this.#l.canStart();
        try {
            if (c)
                s();
            else {
                this.#a({
                    type: "pending",
                    variables: l,
                    isPaused: f
                }),
                await this.#n.config.onMutate?.(l, this, o);
                const p = await this.options.onMutate?.(l, o);
                p !== this.state.context && this.#a({
                    type: "pending",
                    context: p,
                    variables: l,
                    isPaused: f
                })
            }
            const m = await this.#l.start();
            return await this.#n.config.onSuccess?.(m, l, this.state.context, this, o),
            await this.options.onSuccess?.(m, l, this.state.context, o),
            await this.#n.config.onSettled?.(m, null, this.state.variables, this.state.context, this, o),
            await this.options.onSettled?.(m, null, l, this.state.context, o),
            this.#a({
                type: "success",
                data: m
            }),
            m
        } catch (m) {
            try {
                await this.#n.config.onError?.(m, l, this.state.context, this, o)
            } catch (p) {
                Promise.reject(p)
            }
            try {
                await this.options.onError?.(m, l, this.state.context, o)
            } catch (p) {
                Promise.reject(p)
            }
            try {
                await this.#n.config.onSettled?.(void 0, m, this.state.variables, this.state.context, this, o)
            } catch (p) {
                Promise.reject(p)
            }
            try {
                await this.options.onSettled?.(void 0, m, l, this.state.context, o)
            } catch (p) {
                Promise.reject(p)
            }
            throw this.#a({
                type: "error",
                error: m
            }),
            m
        } finally {
            this.#n.runNext(this)
        }
    }
    #a(l) {
        const s = o => {
            switch (l.type) {
            case "failed":
                return {
                    ...o,
                    failureCount: l.failureCount,
                    failureReason: l.error
                };
            case "pause":
                return {
                    ...o,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...o,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...o,
                    context: l.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: l.isPaused,
                    status: "pending",
                    variables: l.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...o,
                    data: l.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...o,
                    data: void 0,
                    error: l.error,
                    failureCount: o.failureCount + 1,
                    failureReason: l.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = s(this.state),
        st.batch( () => {
            this.#t.forEach(o => {
                o.onMutationUpdate(l)
            }
            ),
            this.#n.notify({
                mutation: this,
                type: "updated",
                action: l
            })
        }
        )
    }
}
;
function Yb() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Gb = class extends nr {
    constructor(l={}) {
        super(),
        this.config = l,
        this.#e = new Set,
        this.#t = new Map,
        this.#n = 0
    }
    #e;
    #t;
    #n;
    build(l, s, o) {
        const c = new Bb({
            client: l,
            mutationCache: this,
            mutationId: ++this.#n,
            options: l.defaultMutationOptions(s),
            state: o
        });
        return this.add(c),
        c
    }
    add(l) {
        this.#e.add(l);
        const s = Bi(l);
        if (typeof s == "string") {
            const o = this.#t.get(s);
            o ? o.push(l) : this.#t.set(s, [l])
        }
        this.notify({
            type: "added",
            mutation: l
        })
    }
    remove(l) {
        if (this.#e.delete(l)) {
            const s = Bi(l);
            if (typeof s == "string") {
                const o = this.#t.get(s);
                if (o)
                    if (o.length > 1) {
                        const c = o.indexOf(l);
                        c !== -1 && o.splice(c, 1)
                    } else
                        o[0] === l && this.#t.delete(s)
            }
        }
        this.notify({
            type: "removed",
            mutation: l
        })
    }
    canRun(l) {
        const s = Bi(l);
        if (typeof s == "string") {
            const c = this.#t.get(s)?.find(f => f.state.status === "pending");
            return !c || c === l
        } else
            return !0
    }
    runNext(l) {
        const s = Bi(l);
        return typeof s == "string" ? this.#t.get(s)?.find(c => c !== l && c.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        st.batch( () => {
            this.#e.forEach(l => {
                this.notify({
                    type: "removed",
                    mutation: l
                })
            }
            ),
            this.#e.clear(),
            this.#t.clear()
        }
        )
    }
    getAll() {
        return Array.from(this.#e)
    }
    find(l) {
        const s = {
            exact: !0,
            ...l
        };
        return this.getAll().find(o => Fp(s, o))
    }
    findAll(l={}) {
        return this.getAll().filter(s => Fp(l, s))
    }
    notify(l) {
        st.batch( () => {
            this.listeners.forEach(s => {
                s(l)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const l = this.getAll().filter(s => s.state.isPaused);
        return st.batch( () => Promise.all(l.map(s => s.continue().catch(Gt))))
    }
}
;
function Bi(l) {
    return l.options.scope?.id
}
var kb = class extends nr {
    constructor(l={}) {
        super(),
        this.config = l,
        this.#e = new Map
    }
    #e;
    build(l, s, o) {
        const c = s.queryKey
          , f = s.queryHash ?? uu(c, s);
        let m = this.get(f);
        return m || (m = new Hb({
            client: l,
            queryKey: c,
            queryHash: f,
            options: l.defaultQueryOptions(s),
            state: o,
            defaultOptions: l.getQueryDefaults(c)
        }),
        this.add(m)),
        m
    }
    add(l) {
        this.#e.has(l.queryHash) || (this.#e.set(l.queryHash, l),
        this.notify({
            type: "added",
            query: l
        }))
    }
    remove(l) {
        const s = this.#e.get(l.queryHash);
        s && (l.destroy(),
        s === l && this.#e.delete(l.queryHash),
        this.notify({
            type: "removed",
            query: l
        }))
    }
    clear() {
        st.batch( () => {
            this.getAll().forEach(l => {
                this.remove(l)
            }
            )
        }
        )
    }
    get(l) {
        return this.#e.get(l)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(l) {
        const s = {
            exact: !0,
            ...l
        };
        return this.getAll().find(o => Jp(s, o))
    }
    findAll(l={}) {
        const s = this.getAll();
        return Object.keys(l).length > 0 ? s.filter(o => Jp(l, o)) : s
    }
    notify(l) {
        st.batch( () => {
            this.listeners.forEach(s => {
                s(l)
            }
            )
        }
        )
    }
    onFocus() {
        st.batch( () => {
            this.getAll().forEach(l => {
                l.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        st.batch( () => {
            this.getAll().forEach(l => {
                l.onOnline()
            }
            )
        }
        )
    }
}
  , Qb = class {
    #e;
    #t;
    #n;
    #l;
    #a;
    #i;
    #r;
    #s;
    constructor(l={}) {
        this.#e = l.queryCache || new kb,
        this.#t = l.mutationCache || new Gb,
        this.#n = l.defaultOptions || {},
        this.#l = new Map,
        this.#a = new Map,
        this.#i = 0
    }
    mount() {
        this.#i++,
        this.#i === 1 && (this.#r = Vh.subscribe(async l => {
            l && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#s = Ji.subscribe(async l => {
            l && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#i--,
        this.#i === 0 && (this.#r?.(),
        this.#r = void 0,
        this.#s?.(),
        this.#s = void 0)
    }
    isFetching(l) {
        return this.#e.findAll({
            ...l,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(l) {
        return this.#t.findAll({
            ...l,
            status: "pending"
        }).length
    }
    getQueryData(l) {
        const s = this.defaultQueryOptions({
            queryKey: l
        });
        return this.#e.get(s.queryHash)?.state.data
    }
    ensureQueryData(l) {
        const s = this.defaultQueryOptions(l)
          , o = this.#e.build(this, s)
          , c = o.state.data;
        return c === void 0 ? this.fetchQuery(l) : (l.revalidateIfStale && o.isStaleByTime(Fc(s.staleTime, o)) && this.prefetchQuery(s),
        Promise.resolve(c))
    }
    getQueriesData(l) {
        return this.#e.findAll(l).map( ({queryKey: s, state: o}) => {
            const c = o.data;
            return [s, c]
        }
        )
    }
    setQueryData(l, s, o) {
        const c = this.defaultQueryOptions({
            queryKey: l
        })
          , m = this.#e.get(c.queryHash)?.state.data
          , p = bb(s, m);
        if (p !== void 0)
            return this.#e.build(this, c).setData(p, {
                ...o,
                manual: !0
            })
    }
    setQueriesData(l, s, o) {
        return st.batch( () => this.#e.findAll(l).map( ({queryKey: c}) => [c, this.setQueryData(c, s, o)]))
    }
    getQueryState(l) {
        const s = this.defaultQueryOptions({
            queryKey: l
        });
        return this.#e.get(s.queryHash)?.state
    }
    removeQueries(l) {
        const s = this.#e;
        st.batch( () => {
            s.findAll(l).forEach(o => {
                s.remove(o)
            }
            )
        }
        )
    }
    resetQueries(l, s) {
        const o = this.#e;
        return st.batch( () => (o.findAll(l).forEach(c => {
            c.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...l
        }, s)))
    }
    cancelQueries(l, s={}) {
        const o = {
            revert: !0,
            ...s
        }
          , c = st.batch( () => this.#e.findAll(l).map(f => f.cancel(o)));
        return Promise.all(c).then(Gt).catch(Gt)
    }
    invalidateQueries(l, s={}) {
        return st.batch( () => (this.#e.findAll(l).forEach(o => {
            o.invalidate()
        }
        ),
        l?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
            ...l,
            type: l?.refetchType ?? l?.type ?? "active"
        }, s)))
    }
    refetchQueries(l, s={}) {
        const o = {
            ...s,
            cancelRefetch: s.cancelRefetch ?? !0
        }
          , c = st.batch( () => this.#e.findAll(l).filter(f => !f.isDisabled() && !f.isStatic()).map(f => {
            let m = f.fetch(void 0, o);
            return o.throwOnError || (m = m.catch(Gt)),
            f.state.fetchStatus === "paused" ? Promise.resolve() : m
        }
        ));
        return Promise.all(c).then(Gt)
    }
    fetchQuery(l) {
        const s = this.defaultQueryOptions(l);
        s.retry === void 0 && (s.retry = !1);
        const o = this.#e.build(this, s);
        return o.isStaleByTime(Fc(s.staleTime, o)) ? o.fetch(s) : Promise.resolve(o.state.data)
    }
    prefetchQuery(l) {
        return this.fetchQuery(l).then(Gt).catch(Gt)
    }
    fetchInfiniteQuery(l) {
        return l.behavior = eh(l.pages),
        this.fetchQuery(l)
    }
    prefetchInfiniteQuery(l) {
        return this.fetchInfiniteQuery(l).then(Gt).catch(Gt)
    }
    ensureInfiniteQueryData(l) {
        return l.behavior = eh(l.pages),
        this.ensureQueryData(l)
    }
    resumePausedMutations() {
        return Ji.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#t
    }
    getDefaultOptions() {
        return this.#n
    }
    setDefaultOptions(l) {
        this.#n = l
    }
    setQueryDefaults(l, s) {
        this.#l.set(hs(l), {
            queryKey: l,
            defaultOptions: s
        })
    }
    getQueryDefaults(l) {
        const s = [...this.#l.values()]
          , o = {};
        return s.forEach(c => {
            xs(l, c.queryKey) && Object.assign(o, c.defaultOptions)
        }
        ),
        o
    }
    setMutationDefaults(l, s) {
        this.#a.set(hs(l), {
            mutationKey: l,
            defaultOptions: s
        })
    }
    getMutationDefaults(l) {
        const s = [...this.#a.values()]
          , o = {};
        return s.forEach(c => {
            xs(l, c.mutationKey) && Object.assign(o, c.defaultOptions)
        }
        ),
        o
    }
    defaultQueryOptions(l) {
        if (l._defaulted)
            return l;
        const s = {
            ...this.#n.queries,
            ...this.getQueryDefaults(l.queryKey),
            ...l,
            _defaulted: !0
        };
        return s.queryHash || (s.queryHash = uu(s.queryKey, s)),
        s.refetchOnReconnect === void 0 && (s.refetchOnReconnect = s.networkMode !== "always"),
        s.throwOnError === void 0 && (s.throwOnError = !!s.suspense),
        !s.networkMode && s.persister && (s.networkMode = "offlineFirst"),
        s.queryFn === fu && (s.enabled = !1),
        s
    }
    defaultMutationOptions(l) {
        return l?._defaulted ? l : {
            ...this.#n.mutations,
            ...l?.mutationKey && this.getMutationDefaults(l.mutationKey),
            ...l,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#t.clear()
    }
}
  , Vb = S.createContext(void 0)
  , Xb = ({client: l, children: s}) => (S.useEffect( () => (l.mount(),
() => {
    l.unmount()
}
), [l]),
u.jsx(Vb.Provider, {
    value: l,
    children: s
}));
async function Zb(l) {
    if (!l.ok) {
        const s = await l.text() || l.statusText;
        throw new Error(`${l.status}: ${s}`)
    }
}
const Kb = ({on401: l}) => async ({queryKey: s}) => {
    const o = await fetch(s.join("/"), {
        credentials: "include"
    });
    return await Zb(o),
    await o.json()
}
  , Jb = new Qb({
    defaultOptions: {
        queries: {
            queryFn: Kb({
                on401: "throw"
            }),
            refetchInterval: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            retry: !1
        },
        mutations: {
            retry: !1
        }
    }
})
  , Fb = 1
  , Wb = 1e6;
let Yc = 0;
function Ib() {
    return Yc = (Yc + 1) % Number.MAX_SAFE_INTEGER,
    Yc.toString()
}
const Gc = new Map
  , nh = l => {
    if (Gc.has(l))
        return;
    const s = setTimeout( () => {
        Gc.delete(l),
        ps({
            type: "REMOVE_TOAST",
            toastId: l
        })
    }
    , Wb);
    Gc.set(l, s)
}
  , Pb = (l, s) => {
    switch (s.type) {
    case "ADD_TOAST":
        return {
            ...l,
            toasts: [s.toast, ...l.toasts].slice(0, Fb)
        };
    case "UPDATE_TOAST":
        return {
            ...l,
            toasts: l.toasts.map(o => o.id === s.toast.id ? {
                ...o,
                ...s.toast
            } : o)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: o} = s;
            return o ? nh(o) : l.toasts.forEach(c => {
                nh(c.id)
            }
            ),
            {
                ...l,
                toasts: l.toasts.map(c => c.id === o || o === void 0 ? {
                    ...c,
                    open: !1
                } : c)
            }
        }
    case "REMOVE_TOAST":
        return s.toastId === void 0 ? {
            ...l,
            toasts: []
        } : {
            ...l,
            toasts: l.toasts.filter(o => o.id !== s.toastId)
        }
    }
}
  , Xi = [];
let Zi = {
    toasts: []
};
function ps(l) {
    Zi = Pb(Zi, l),
    Xi.forEach(s => {
        s(Zi)
    }
    )
}
function $b({...l}) {
    const s = Ib()
      , o = f => ps({
        type: "UPDATE_TOAST",
        toast: {
            ...f,
            id: s
        }
    })
      , c = () => ps({
        type: "DISMISS_TOAST",
        toastId: s
    });
    return ps({
        type: "ADD_TOAST",
        toast: {
            ...l,
            id: s,
            open: !0,
            onOpenChange: f => {
                f || c()
            }
        }
    }),
    {
        id: s,
        dismiss: c,
        update: o
    }
}
function e0() {
    const [l,s] = S.useState(Zi);
    return S.useEffect( () => (Xi.push(s),
    () => {
        const o = Xi.indexOf(s);
        o > -1 && Xi.splice(o, 1)
    }
    ), [l]),
    {
        ...l,
        toast: $b,
        dismiss: o => ps({
            type: "DISMISS_TOAST",
            toastId: o
        })
    }
}
var lr = zh();
const t0 = Rh(lr);
function Fe(l, s, {checkForDefaultPrevented: o=!0}={}) {
    return function(f) {
        if (l?.(f),
        o === !1 || !f.defaultPrevented)
            return s?.(f)
    }
}
function ah(l, s) {
    if (typeof l == "function")
        return l(s);
    l != null && (l.current = s)
}
function du(...l) {
    return s => {
        let o = !1;
        const c = l.map(f => {
            const m = ah(f, s);
            return !o && typeof m == "function" && (o = !0),
            m
        }
        );
        if (o)
            return () => {
                for (let f = 0; f < c.length; f++) {
                    const m = c[f];
                    typeof m == "function" ? m() : ah(l[f], null)
                }
            }
    }
}
function kt(...l) {
    return S.useCallback(du(...l), l)
}
function sr(l, s=[]) {
    let o = [];
    function c(m, p) {
        const g = S.createContext(p)
          , v = o.length;
        o = [...o, p];
        const h = b => {
            const {scope: T, children: R, ..._} = b
              , A = T?.[l]?.[v] || g
              , D = S.useMemo( () => _, Object.values(_));
            return u.jsx(A.Provider, {
                value: D,
                children: R
            })
        }
        ;
        h.displayName = m + "Provider";
        function y(b, T) {
            const R = T?.[l]?.[v] || g
              , _ = S.useContext(R);
            if (_)
                return _;
            if (p !== void 0)
                return p;
            throw new Error(`\`${b}\` must be used within \`${m}\``)
        }
        return [h, y]
    }
    const f = () => {
        const m = o.map(p => S.createContext(p));
        return function(g) {
            const v = g?.[l] || m;
            return S.useMemo( () => ({
                [`__scope${l}`]: {
                    ...g,
                    [l]: v
                }
            }), [g, v])
        }
    }
    ;
    return f.scopeName = l,
    [c, n0(f, ...s)]
}
function n0(...l) {
    const s = l[0];
    if (l.length === 1)
        return s;
    const o = () => {
        const c = l.map(f => ({
            useScope: f(),
            scopeName: f.scopeName
        }));
        return function(m) {
            const p = c.reduce( (g, {useScope: v, scopeName: h}) => {
                const b = v(m)[`__scope${h}`];
                return {
                    ...g,
                    ...b
                }
            }
            , {});
            return S.useMemo( () => ({
                [`__scope${s.scopeName}`]: p
            }), [p])
        }
    }
    ;
    return o.scopeName = s.scopeName,
    o
}
function lh(l) {
    const s = a0(l)
      , o = S.forwardRef( (c, f) => {
        const {children: m, ...p} = c
          , g = S.Children.toArray(m)
          , v = g.find(s0);
        if (v) {
            const h = v.props.children
              , y = g.map(b => b === v ? S.Children.count(h) > 1 ? S.Children.only(null) : S.isValidElement(h) ? h.props.children : null : b);
            return u.jsx(s, {
                ...p,
                ref: f,
                children: S.isValidElement(h) ? S.cloneElement(h, void 0, y) : null
            })
        }
        return u.jsx(s, {
            ...p,
            ref: f,
            children: m
        })
    }
    );
    return o.displayName = `${l}.Slot`,
    o
}
function a0(l) {
    const s = S.forwardRef( (o, c) => {
        const {children: f, ...m} = o;
        if (S.isValidElement(f)) {
            const p = r0(f)
              , g = i0(m, f.props);
            return f.type !== S.Fragment && (g.ref = c ? du(c, p) : p),
            S.cloneElement(f, g)
        }
        return S.Children.count(f) > 1 ? S.Children.only(null) : null
    }
    );
    return s.displayName = `${l}.SlotClone`,
    s
}
var l0 = Symbol("radix.slottable");
function s0(l) {
    return S.isValidElement(l) && typeof l.type == "function" && "__radixId"in l.type && l.type.__radixId === l0
}
function i0(l, s) {
    const o = {
        ...s
    };
    for (const c in s) {
        const f = l[c]
          , m = s[c];
        /^on[A-Z]/.test(c) ? f && m ? o[c] = (...g) => {
            const v = m(...g);
            return f(...g),
            v
        }
        : f && (o[c] = f) : c === "style" ? o[c] = {
            ...f,
            ...m
        } : c === "className" && (o[c] = [f, m].filter(Boolean).join(" "))
    }
    return {
        ...l,
        ...o
    }
}
function r0(l) {
    let s = Object.getOwnPropertyDescriptor(l.props, "ref")?.get
      , o = s && "isReactWarning"in s && s.isReactWarning;
    return o ? l.ref : (s = Object.getOwnPropertyDescriptor(l, "ref")?.get,
    o = s && "isReactWarning"in s && s.isReactWarning,
    o ? l.props.ref : l.props.ref || l.ref)
}
function o0(l) {
    const s = l + "CollectionProvider"
      , [o,c] = sr(s)
      , [f,m] = o(s, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , p = A => {
        const {scope: D, children: Y} = A
          , V = In.useRef(null)
          , Q = In.useRef(new Map).current;
        return u.jsx(f, {
            scope: D,
            itemMap: Q,
            collectionRef: V,
            children: Y
        })
    }
    ;
    p.displayName = s;
    const g = l + "CollectionSlot"
      , v = lh(g)
      , h = In.forwardRef( (A, D) => {
        const {scope: Y, children: V} = A
          , Q = m(g, Y)
          , K = kt(D, Q.collectionRef);
        return u.jsx(v, {
            ref: K,
            children: V
        })
    }
    );
    h.displayName = g;
    const y = l + "CollectionItemSlot"
      , b = "data-radix-collection-item"
      , T = lh(y)
      , R = In.forwardRef( (A, D) => {
        const {scope: Y, children: V, ...Q} = A
          , K = In.useRef(null)
          , J = kt(D, K)
          , I = m(y, Y);
        return In.useEffect( () => (I.itemMap.set(K, {
            ref: K,
            ...Q
        }),
        () => {
            I.itemMap.delete(K)
        }
        )),
        u.jsx(T, {
            [b]: "",
            ref: J,
            children: V
        })
    }
    );
    R.displayName = y;
    function _(A) {
        const D = m(l + "CollectionConsumer", A);
        return In.useCallback( () => {
            const V = D.collectionRef.current;
            if (!V)
                return [];
            const Q = Array.from(V.querySelectorAll(`[${b}]`));
            return Array.from(D.itemMap.values()).sort( (I, X) => Q.indexOf(I.ref.current) - Q.indexOf(X.ref.current))
        }
        , [D.collectionRef, D.itemMap])
    }
    return [{
        Provider: p,
        Slot: h,
        ItemSlot: R
    }, _, c]
}
function c0(l) {
    const s = u0(l)
      , o = S.forwardRef( (c, f) => {
        const {children: m, ...p} = c
          , g = S.Children.toArray(m)
          , v = g.find(d0);
        if (v) {
            const h = v.props.children
              , y = g.map(b => b === v ? S.Children.count(h) > 1 ? S.Children.only(null) : S.isValidElement(h) ? h.props.children : null : b);
            return u.jsx(s, {
                ...p,
                ref: f,
                children: S.isValidElement(h) ? S.cloneElement(h, void 0, y) : null
            })
        }
        return u.jsx(s, {
            ...p,
            ref: f,
            children: m
        })
    }
    );
    return o.displayName = `${l}.Slot`,
    o
}
function u0(l) {
    const s = S.forwardRef( (o, c) => {
        const {children: f, ...m} = o;
        if (S.isValidElement(f)) {
            const p = p0(f)
              , g = m0(m, f.props);
            return f.type !== S.Fragment && (g.ref = c ? du(c, p) : p),
            S.cloneElement(f, g)
        }
        return S.Children.count(f) > 1 ? S.Children.only(null) : null
    }
    );
    return s.displayName = `${l}.SlotClone`,
    s
}
var f0 = Symbol("radix.slottable");
function d0(l) {
    return S.isValidElement(l) && typeof l.type == "function" && "__radixId"in l.type && l.type.__radixId === f0
}
function m0(l, s) {
    const o = {
        ...s
    };
    for (const c in s) {
        const f = l[c]
          , m = s[c];
        /^on[A-Z]/.test(c) ? f && m ? o[c] = (...g) => {
            const v = m(...g);
            return f(...g),
            v
        }
        : f && (o[c] = f) : c === "style" ? o[c] = {
            ...f,
            ...m
        } : c === "className" && (o[c] = [f, m].filter(Boolean).join(" "))
    }
    return {
        ...l,
        ...o
    }
}
function p0(l) {
    let s = Object.getOwnPropertyDescriptor(l.props, "ref")?.get
      , o = s && "isReactWarning"in s && s.isReactWarning;
    return o ? l.ref : (s = Object.getOwnPropertyDescriptor(l, "ref")?.get,
    o = s && "isReactWarning"in s && s.isReactWarning,
    o ? l.props.ref : l.props.ref || l.ref)
}
var h0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , mt = h0.reduce( (l, s) => {
    const o = c0(`Primitive.${s}`)
      , c = S.forwardRef( (f, m) => {
        const {asChild: p, ...g} = f
          , v = p ? o : s;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        u.jsx(v, {
            ...g,
            ref: m
        })
    }
    );
    return c.displayName = `Primitive.${s}`,
    {
        ...l,
        [s]: c
    }
}
, {});
function Jh(l, s) {
    l && lr.flushSync( () => l.dispatchEvent(s))
}
function Pn(l) {
    const s = S.useRef(l);
    return S.useEffect( () => {
        s.current = l
    }
    ),
    S.useMemo( () => (...o) => s.current?.(...o), [])
}
function x0(l, s=globalThis?.document) {
    const o = Pn(l);
    S.useEffect( () => {
        const c = f => {
            f.key === "Escape" && o(f)
        }
        ;
        return s.addEventListener("keydown", c, {
            capture: !0
        }),
        () => s.removeEventListener("keydown", c, {
            capture: !0
        })
    }
    , [o, s])
}
var g0 = "DismissableLayer", Pc = "dismissableLayer.update", v0 = "dismissableLayer.pointerDownOutside", y0 = "dismissableLayer.focusOutside", sh, Fh = S.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), mu = S.forwardRef( (l, s) => {
    const {disableOutsidePointerEvents: o=!1, onEscapeKeyDown: c, onPointerDownOutside: f, onFocusOutside: m, onInteractOutside: p, onDismiss: g, ...v} = l
      , h = S.useContext(Fh)
      , [y,b] = S.useState(null)
      , T = y?.ownerDocument ?? globalThis?.document
      , [,R] = S.useState({})
      , _ = kt(s, X => b(X))
      , A = Array.from(h.layers)
      , [D] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1)
      , Y = A.indexOf(D)
      , V = y ? A.indexOf(y) : -1
      , Q = h.layersWithOutsidePointerEventsDisabled.size > 0
      , K = V >= Y
      , J = w0(X => {
        const F = X.target
          , oe = [...h.branches].some(xe => xe.contains(F));
        !K || oe || (f?.(X),
        p?.(X),
        X.defaultPrevented || g?.())
    }
    , T)
      , I = S0(X => {
        const F = X.target;
        [...h.branches].some(xe => xe.contains(F)) || (m?.(X),
        p?.(X),
        X.defaultPrevented || g?.())
    }
    , T);
    return x0(X => {
        V === h.layers.size - 1 && (c?.(X),
        !X.defaultPrevented && g && (X.preventDefault(),
        g()))
    }
    , T),
    S.useEffect( () => {
        if (y)
            return o && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (sh = T.body.style.pointerEvents,
            T.body.style.pointerEvents = "none"),
            h.layersWithOutsidePointerEventsDisabled.add(y)),
            h.layers.add(y),
            ih(),
            () => {
                o && h.layersWithOutsidePointerEventsDisabled.size === 1 && (T.body.style.pointerEvents = sh)
            }
    }
    , [y, T, o, h]),
    S.useEffect( () => () => {
        y && (h.layers.delete(y),
        h.layersWithOutsidePointerEventsDisabled.delete(y),
        ih())
    }
    , [y, h]),
    S.useEffect( () => {
        const X = () => R({});
        return document.addEventListener(Pc, X),
        () => document.removeEventListener(Pc, X)
    }
    , []),
    u.jsx(mt.div, {
        ...v,
        ref: _,
        style: {
            pointerEvents: Q ? K ? "auto" : "none" : void 0,
            ...l.style
        },
        onFocusCapture: Fe(l.onFocusCapture, I.onFocusCapture),
        onBlurCapture: Fe(l.onBlurCapture, I.onBlurCapture),
        onPointerDownCapture: Fe(l.onPointerDownCapture, J.onPointerDownCapture)
    })
}
);
mu.displayName = g0;
var b0 = "DismissableLayerBranch"
  , Wh = S.forwardRef( (l, s) => {
    const o = S.useContext(Fh)
      , c = S.useRef(null)
      , f = kt(s, c);
    return S.useEffect( () => {
        const m = c.current;
        if (m)
            return o.branches.add(m),
            () => {
                o.branches.delete(m)
            }
    }
    , [o.branches]),
    u.jsx(mt.div, {
        ...l,
        ref: f
    })
}
);
Wh.displayName = b0;
function w0(l, s=globalThis?.document) {
    const o = Pn(l)
      , c = S.useRef(!1)
      , f = S.useRef( () => {}
    );
    return S.useEffect( () => {
        const m = g => {
            if (g.target && !c.current) {
                let v = function() {
                    Ih(v0, o, h, {
                        discrete: !0
                    })
                };
                const h = {
                    originalEvent: g
                };
                g.pointerType === "touch" ? (s.removeEventListener("click", f.current),
                f.current = v,
                s.addEventListener("click", f.current, {
                    once: !0
                })) : v()
            } else
                s.removeEventListener("click", f.current);
            c.current = !1
        }
          , p = window.setTimeout( () => {
            s.addEventListener("pointerdown", m)
        }
        , 0);
        return () => {
            window.clearTimeout(p),
            s.removeEventListener("pointerdown", m),
            s.removeEventListener("click", f.current)
        }
    }
    , [s, o]),
    {
        onPointerDownCapture: () => c.current = !0
    }
}
function S0(l, s=globalThis?.document) {
    const o = Pn(l)
      , c = S.useRef(!1);
    return S.useEffect( () => {
        const f = m => {
            m.target && !c.current && Ih(y0, o, {
                originalEvent: m
            }, {
                discrete: !1
            })
        }
        ;
        return s.addEventListener("focusin", f),
        () => s.removeEventListener("focusin", f)
    }
    , [s, o]),
    {
        onFocusCapture: () => c.current = !0,
        onBlurCapture: () => c.current = !1
    }
}
function ih() {
    const l = new CustomEvent(Pc);
    document.dispatchEvent(l)
}
function Ih(l, s, o, {discrete: c}) {
    const f = o.originalEvent.target
      , m = new CustomEvent(l,{
        bubbles: !1,
        cancelable: !0,
        detail: o
    });
    s && f.addEventListener(l, s, {
        once: !0
    }),
    c ? Jh(f, m) : f.dispatchEvent(m)
}
var N0 = mu
  , j0 = Wh
  , $n = globalThis?.document ? S.useLayoutEffect : () => {}
  , E0 = "Portal"
  , pu = S.forwardRef( (l, s) => {
    const {container: o, ...c} = l
      , [f,m] = S.useState(!1);
    $n( () => m(!0), []);
    const p = o || f && globalThis?.document?.body;
    return p ? t0.createPortal(u.jsx(mt.div, {
        ...c,
        ref: s
    }), p) : null
}
);
pu.displayName = E0;
function T0(l, s) {
    return S.useReducer( (o, c) => s[o][c] ?? o, l)
}
var ir = l => {
    const {present: s, children: o} = l
      , c = A0(s)
      , f = typeof o == "function" ? o({
        present: c.isPresent
    }) : S.Children.only(o)
      , m = kt(c.ref, O0(f));
    return typeof o == "function" || c.isPresent ? S.cloneElement(f, {
        ref: m
    }) : null
}
;
ir.displayName = "Presence";
function A0(l) {
    const [s,o] = S.useState()
      , c = S.useRef(null)
      , f = S.useRef(l)
      , m = S.useRef("none")
      , p = l ? "mounted" : "unmounted"
      , [g,v] = T0(p, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return S.useEffect( () => {
        const h = Yi(c.current);
        m.current = g === "mounted" ? h : "none"
    }
    , [g]),
    $n( () => {
        const h = c.current
          , y = f.current;
        if (y !== l) {
            const T = m.current
              , R = Yi(h);
            l ? v("MOUNT") : R === "none" || h?.display === "none" ? v("UNMOUNT") : v(y && T !== R ? "ANIMATION_OUT" : "UNMOUNT"),
            f.current = l
        }
    }
    , [l, v]),
    $n( () => {
        if (s) {
            let h;
            const y = s.ownerDocument.defaultView ?? window
              , b = R => {
                const A = Yi(c.current).includes(CSS.escape(R.animationName));
                if (R.target === s && A && (v("ANIMATION_END"),
                !f.current)) {
                    const D = s.style.animationFillMode;
                    s.style.animationFillMode = "forwards",
                    h = y.setTimeout( () => {
                        s.style.animationFillMode === "forwards" && (s.style.animationFillMode = D)
                    }
                    )
                }
            }
              , T = R => {
                R.target === s && (m.current = Yi(c.current))
            }
            ;
            return s.addEventListener("animationstart", T),
            s.addEventListener("animationcancel", b),
            s.addEventListener("animationend", b),
            () => {
                y.clearTimeout(h),
                s.removeEventListener("animationstart", T),
                s.removeEventListener("animationcancel", b),
                s.removeEventListener("animationend", b)
            }
        } else
            v("ANIMATION_END")
    }
    , [s, v]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(g),
        ref: S.useCallback(h => {
            c.current = h ? getComputedStyle(h) : null,
            o(h)
        }
        , [])
    }
}
function Yi(l) {
    return l?.animationName || "none"
}
function O0(l) {
    let s = Object.getOwnPropertyDescriptor(l.props, "ref")?.get
      , o = s && "isReactWarning"in s && s.isReactWarning;
    return o ? l.ref : (s = Object.getOwnPropertyDescriptor(l, "ref")?.get,
    o = s && "isReactWarning"in s && s.isReactWarning,
    o ? l.props.ref : l.props.ref || l.ref)
}
var C0 = Mh[" useInsertionEffect ".trim().toString()] || $n;
function R0({prop: l, defaultProp: s, onChange: o= () => {}
, caller: c}) {
    const [f,m,p] = z0({
        defaultProp: s,
        onChange: o
    })
      , g = l !== void 0
      , v = g ? l : f;
    {
        const y = S.useRef(l !== void 0);
        S.useEffect( () => {
            const b = y.current;
            b !== g && console.warn(`${c} is changing from ${b ? "controlled" : "uncontrolled"} to ${g ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            y.current = g
        }
        , [g, c])
    }
    const h = S.useCallback(y => {
        if (g) {
            const b = M0(y) ? y(l) : y;
            b !== l && p.current?.(b)
        } else
            m(y)
    }
    , [g, l, m, p]);
    return [v, h]
}
function z0({defaultProp: l, onChange: s}) {
    const [o,c] = S.useState(l)
      , f = S.useRef(o)
      , m = S.useRef(s);
    return C0( () => {
        m.current = s
    }
    , [s]),
    S.useEffect( () => {
        f.current !== o && (m.current?.(o),
        f.current = o)
    }
    , [o, f]),
    [o, c, m]
}
function M0(l) {
    return typeof l == "function"
}
var D0 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , _0 = "VisuallyHidden"
  , rr = S.forwardRef( (l, s) => u.jsx(mt.span, {
    ...l,
    ref: s,
    style: {
        ...D0,
        ...l.style
    }
}));
rr.displayName = _0;
var U0 = rr
  , hu = "ToastProvider"
  , [xu,H0,L0] = o0("Toast")
  , [Ph] = sr("Toast", [L0])
  , [q0,or] = Ph(hu)
  , $h = l => {
    const {__scopeToast: s, label: o="Notification", duration: c=5e3, swipeDirection: f="right", swipeThreshold: m=50, children: p} = l
      , [g,v] = S.useState(null)
      , [h,y] = S.useState(0)
      , b = S.useRef(!1)
      , T = S.useRef(!1);
    return o.trim() || console.error(`Invalid prop \`label\` supplied to \`${hu}\`. Expected non-empty \`string\`.`),
    u.jsx(xu.Provider, {
        scope: s,
        children: u.jsx(q0, {
            scope: s,
            label: o,
            duration: c,
            swipeDirection: f,
            swipeThreshold: m,
            toastCount: h,
            viewport: g,
            onViewportChange: v,
            onToastAdd: S.useCallback( () => y(R => R + 1), []),
            onToastRemove: S.useCallback( () => y(R => R - 1), []),
            isFocusedToastEscapeKeyDownRef: b,
            isClosePausedRef: T,
            children: p
        })
    })
}
;
$h.displayName = hu;
var ex = "ToastViewport"
  , B0 = ["F8"]
  , $c = "toast.viewportPause"
  , eu = "toast.viewportResume"
  , tx = S.forwardRef( (l, s) => {
    const {__scopeToast: o, hotkey: c=B0, label: f="Notifications ({hotkey})", ...m} = l
      , p = or(ex, o)
      , g = H0(o)
      , v = S.useRef(null)
      , h = S.useRef(null)
      , y = S.useRef(null)
      , b = S.useRef(null)
      , T = kt(s, b, p.onViewportChange)
      , R = c.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , _ = p.toastCount > 0;
    S.useEffect( () => {
        const D = Y => {
            c.length !== 0 && c.every(Q => Y[Q] || Y.code === Q) && b.current?.focus()
        }
        ;
        return document.addEventListener("keydown", D),
        () => document.removeEventListener("keydown", D)
    }
    , [c]),
    S.useEffect( () => {
        const D = v.current
          , Y = b.current;
        if (_ && D && Y) {
            const V = () => {
                if (!p.isClosePausedRef.current) {
                    const I = new CustomEvent($c);
                    Y.dispatchEvent(I),
                    p.isClosePausedRef.current = !0
                }
            }
              , Q = () => {
                if (p.isClosePausedRef.current) {
                    const I = new CustomEvent(eu);
                    Y.dispatchEvent(I),
                    p.isClosePausedRef.current = !1
                }
            }
              , K = I => {
                !D.contains(I.relatedTarget) && Q()
            }
              , J = () => {
                D.contains(document.activeElement) || Q()
            }
            ;
            return D.addEventListener("focusin", V),
            D.addEventListener("focusout", K),
            D.addEventListener("pointermove", V),
            D.addEventListener("pointerleave", J),
            window.addEventListener("blur", V),
            window.addEventListener("focus", Q),
            () => {
                D.removeEventListener("focusin", V),
                D.removeEventListener("focusout", K),
                D.removeEventListener("pointermove", V),
                D.removeEventListener("pointerleave", J),
                window.removeEventListener("blur", V),
                window.removeEventListener("focus", Q)
            }
        }
    }
    , [_, p.isClosePausedRef]);
    const A = S.useCallback( ({tabbingDirection: D}) => {
        const V = g().map(Q => {
            const K = Q.ref.current
              , J = [K, ...P0(K)];
            return D === "forwards" ? J : J.reverse()
        }
        );
        return (D === "forwards" ? V.reverse() : V).flat()
    }
    , [g]);
    return S.useEffect( () => {
        const D = b.current;
        if (D) {
            const Y = V => {
                const Q = V.altKey || V.ctrlKey || V.metaKey;
                if (V.key === "Tab" && !Q) {
                    const J = document.activeElement
                      , I = V.shiftKey;
                    if (V.target === D && I) {
                        h.current?.focus();
                        return
                    }
                    const oe = A({
                        tabbingDirection: I ? "backwards" : "forwards"
                    })
                      , xe = oe.findIndex(ve => ve === J);
                    kc(oe.slice(xe + 1)) ? V.preventDefault() : I ? h.current?.focus() : y.current?.focus()
                }
            }
            ;
            return D.addEventListener("keydown", Y),
            () => D.removeEventListener("keydown", Y)
        }
    }
    , [g, A]),
    u.jsxs(j0, {
        ref: v,
        role: "region",
        "aria-label": f.replace("{hotkey}", R),
        tabIndex: -1,
        style: {
            pointerEvents: _ ? void 0 : "none"
        },
        children: [_ && u.jsx(tu, {
            ref: h,
            onFocusFromOutsideViewport: () => {
                const D = A({
                    tabbingDirection: "forwards"
                });
                kc(D)
            }
        }), u.jsx(xu.Slot, {
            scope: o,
            children: u.jsx(mt.ol, {
                tabIndex: -1,
                ...m,
                ref: T
            })
        }), _ && u.jsx(tu, {
            ref: y,
            onFocusFromOutsideViewport: () => {
                const D = A({
                    tabbingDirection: "backwards"
                });
                kc(D)
            }
        })]
    })
}
);
tx.displayName = ex;
var nx = "ToastFocusProxy"
  , tu = S.forwardRef( (l, s) => {
    const {__scopeToast: o, onFocusFromOutsideViewport: c, ...f} = l
      , m = or(nx, o);
    return u.jsx(rr, {
        tabIndex: 0,
        ...f,
        ref: s,
        style: {
            position: "fixed"
        },
        onFocus: p => {
            const g = p.relatedTarget;
            !m.viewport?.contains(g) && c()
        }
    })
}
);
tu.displayName = nx;
var ys = "Toast"
  , Y0 = "toast.swipeStart"
  , G0 = "toast.swipeMove"
  , k0 = "toast.swipeCancel"
  , Q0 = "toast.swipeEnd"
  , ax = S.forwardRef( (l, s) => {
    const {forceMount: o, open: c, defaultOpen: f, onOpenChange: m, ...p} = l
      , [g,v] = R0({
        prop: c,
        defaultProp: f ?? !0,
        onChange: m,
        caller: ys
    });
    return u.jsx(ir, {
        present: o || g,
        children: u.jsx(Z0, {
            open: g,
            ...p,
            ref: s,
            onClose: () => v(!1),
            onPause: Pn(l.onPause),
            onResume: Pn(l.onResume),
            onSwipeStart: Fe(l.onSwipeStart, h => {
                h.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Fe(l.onSwipeMove, h => {
                const {x: y, y: b} = h.detail.delta;
                h.currentTarget.setAttribute("data-swipe", "move"),
                h.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${y}px`),
                h.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${b}px`)
            }
            ),
            onSwipeCancel: Fe(l.onSwipeCancel, h => {
                h.currentTarget.setAttribute("data-swipe", "cancel"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Fe(l.onSwipeEnd, h => {
                const {x: y, y: b} = h.detail.delta;
                h.currentTarget.setAttribute("data-swipe", "end"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                h.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${y}px`),
                h.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${b}px`),
                v(!1)
            }
            )
        })
    })
}
);
ax.displayName = ys;
var [V0,X0] = Ph(ys, {
    onClose() {}
})
  , Z0 = S.forwardRef( (l, s) => {
    const {__scopeToast: o, type: c="foreground", duration: f, open: m, onClose: p, onEscapeKeyDown: g, onPause: v, onResume: h, onSwipeStart: y, onSwipeMove: b, onSwipeCancel: T, onSwipeEnd: R, ..._} = l
      , A = or(ys, o)
      , [D,Y] = S.useState(null)
      , V = kt(s, P => Y(P))
      , Q = S.useRef(null)
      , K = S.useRef(null)
      , J = f || A.duration
      , I = S.useRef(0)
      , X = S.useRef(J)
      , F = S.useRef(0)
      , {onToastAdd: oe, onToastRemove: xe} = A
      , ve = Pn( () => {
        D?.contains(document.activeElement) && A.viewport?.focus(),
        p()
    }
    )
      , he = S.useCallback(P => {
        !P || P === 1 / 0 || (window.clearTimeout(F.current),
        I.current = new Date().getTime(),
        F.current = window.setTimeout(ve, P))
    }
    , [ve]);
    S.useEffect( () => {
        const P = A.viewport;
        if (P) {
            const fe = () => {
                he(X.current),
                h?.()
            }
              , O = () => {
                const k = new Date().getTime() - I.current;
                X.current = X.current - k,
                window.clearTimeout(F.current),
                v?.()
            }
            ;
            return P.addEventListener($c, O),
            P.addEventListener(eu, fe),
            () => {
                P.removeEventListener($c, O),
                P.removeEventListener(eu, fe)
            }
        }
    }
    , [A.viewport, J, v, h, he]),
    S.useEffect( () => {
        m && !A.isClosePausedRef.current && he(J)
    }
    , [m, J, A.isClosePausedRef, he]),
    S.useEffect( () => (oe(),
    () => xe()), [oe, xe]);
    const je = S.useMemo( () => D ? ux(D) : null, [D]);
    return A.viewport ? u.jsxs(u.Fragment, {
        children: [je && u.jsx(K0, {
            __scopeToast: o,
            role: "status",
            "aria-live": c === "foreground" ? "assertive" : "polite",
            children: je
        }), u.jsx(V0, {
            scope: o,
            onClose: ve,
            children: lr.createPortal(u.jsx(xu.ItemSlot, {
                scope: o,
                children: u.jsx(N0, {
                    asChild: !0,
                    onEscapeKeyDown: Fe(g, () => {
                        A.isFocusedToastEscapeKeyDownRef.current || ve(),
                        A.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: u.jsx(mt.li, {
                        tabIndex: 0,
                        "data-state": m ? "open" : "closed",
                        "data-swipe-direction": A.swipeDirection,
                        ..._,
                        ref: V,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...l.style
                        },
                        onKeyDown: Fe(l.onKeyDown, P => {
                            P.key === "Escape" && (g?.(P.nativeEvent),
                            P.nativeEvent.defaultPrevented || (A.isFocusedToastEscapeKeyDownRef.current = !0,
                            ve()))
                        }
                        ),
                        onPointerDown: Fe(l.onPointerDown, P => {
                            P.button === 0 && (Q.current = {
                                x: P.clientX,
                                y: P.clientY
                            })
                        }
                        ),
                        onPointerMove: Fe(l.onPointerMove, P => {
                            if (!Q.current)
                                return;
                            const fe = P.clientX - Q.current.x
                              , O = P.clientY - Q.current.y
                              , k = !!K.current
                              , H = ["left", "right"].includes(A.swipeDirection)
                              , se = ["left", "up"].includes(A.swipeDirection) ? Math.min : Math.max
                              , ue = H ? se(0, fe) : 0
                              , N = H ? 0 : se(0, O)
                              , q = P.pointerType === "touch" ? 10 : 2
                              , Z = {
                                x: ue,
                                y: N
                            }
                              , W = {
                                originalEvent: P,
                                delta: Z
                            };
                            k ? (K.current = Z,
                            Gi(G0, b, W, {
                                discrete: !1
                            })) : rh(Z, A.swipeDirection, q) ? (K.current = Z,
                            Gi(Y0, y, W, {
                                discrete: !1
                            }),
                            P.target.setPointerCapture(P.pointerId)) : (Math.abs(fe) > q || Math.abs(O) > q) && (Q.current = null)
                        }
                        ),
                        onPointerUp: Fe(l.onPointerUp, P => {
                            const fe = K.current
                              , O = P.target;
                            if (O.hasPointerCapture(P.pointerId) && O.releasePointerCapture(P.pointerId),
                            K.current = null,
                            Q.current = null,
                            fe) {
                                const k = P.currentTarget
                                  , H = {
                                    originalEvent: P,
                                    delta: fe
                                };
                                rh(fe, A.swipeDirection, A.swipeThreshold) ? Gi(Q0, R, H, {
                                    discrete: !0
                                }) : Gi(k0, T, H, {
                                    discrete: !0
                                }),
                                k.addEventListener("click", se => se.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), A.viewport)
        })]
    }) : null
}
)
  , K0 = l => {
    const {__scopeToast: s, children: o, ...c} = l
      , f = or(ys, s)
      , [m,p] = S.useState(!1)
      , [g,v] = S.useState(!1);
    return W0( () => p(!0)),
    S.useEffect( () => {
        const h = window.setTimeout( () => v(!0), 1e3);
        return () => window.clearTimeout(h)
    }
    , []),
    g ? null : u.jsx(pu, {
        asChild: !0,
        children: u.jsx(rr, {
            ...c,
            children: m && u.jsxs(u.Fragment, {
                children: [f.label, " ", o]
            })
        })
    })
}
  , J0 = "ToastTitle"
  , lx = S.forwardRef( (l, s) => {
    const {__scopeToast: o, ...c} = l;
    return u.jsx(mt.div, {
        ...c,
        ref: s
    })
}
);
lx.displayName = J0;
var F0 = "ToastDescription"
  , sx = S.forwardRef( (l, s) => {
    const {__scopeToast: o, ...c} = l;
    return u.jsx(mt.div, {
        ...c,
        ref: s
    })
}
);
sx.displayName = F0;
var ix = "ToastAction"
  , rx = S.forwardRef( (l, s) => {
    const {altText: o, ...c} = l;
    return o.trim() ? u.jsx(cx, {
        altText: o,
        asChild: !0,
        children: u.jsx(gu, {
            ...c,
            ref: s
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${ix}\`. Expected non-empty \`string\`.`),
    null)
}
);
rx.displayName = ix;
var ox = "ToastClose"
  , gu = S.forwardRef( (l, s) => {
    const {__scopeToast: o, ...c} = l
      , f = X0(ox, o);
    return u.jsx(cx, {
        asChild: !0,
        children: u.jsx(mt.button, {
            type: "button",
            ...c,
            ref: s,
            onClick: Fe(l.onClick, f.onClose)
        })
    })
}
);
gu.displayName = ox;
var cx = S.forwardRef( (l, s) => {
    const {__scopeToast: o, altText: c, ...f} = l;
    return u.jsx(mt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": c || void 0,
        ...f,
        ref: s
    })
}
);
function ux(l) {
    const s = [];
    return Array.from(l.childNodes).forEach(c => {
        if (c.nodeType === c.TEXT_NODE && c.textContent && s.push(c.textContent),
        I0(c)) {
            const f = c.ariaHidden || c.hidden || c.style.display === "none"
              , m = c.dataset.radixToastAnnounceExclude === "";
            if (!f)
                if (m) {
                    const p = c.dataset.radixToastAnnounceAlt;
                    p && s.push(p)
                } else
                    s.push(...ux(c))
        }
    }
    ),
    s
}
function Gi(l, s, o, {discrete: c}) {
    const f = o.originalEvent.currentTarget
      , m = new CustomEvent(l,{
        bubbles: !0,
        cancelable: !0,
        detail: o
    });
    s && f.addEventListener(l, s, {
        once: !0
    }),
    c ? Jh(f, m) : f.dispatchEvent(m)
}
var rh = (l, s, o=0) => {
    const c = Math.abs(l.x)
      , f = Math.abs(l.y)
      , m = c > f;
    return s === "left" || s === "right" ? m && c > o : !m && f > o
}
;
function W0(l= () => {}
) {
    const s = Pn(l);
    $n( () => {
        let o = 0
          , c = 0;
        return o = window.requestAnimationFrame( () => c = window.requestAnimationFrame(s)),
        () => {
            window.cancelAnimationFrame(o),
            window.cancelAnimationFrame(c)
        }
    }
    , [s])
}
function I0(l) {
    return l.nodeType === l.ELEMENT_NODE
}
function P0(l) {
    const s = []
      , o = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
        acceptNode: c => {
            const f = c.tagName === "INPUT" && c.type === "hidden";
            return c.disabled || c.hidden || f ? NodeFilter.FILTER_SKIP : c.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; o.nextNode(); )
        s.push(o.currentNode);
    return s
}
function kc(l) {
    const s = document.activeElement;
    return l.some(o => o === s ? !0 : (o.focus(),
    document.activeElement !== s))
}
var $0 = $h
  , fx = tx
  , dx = ax
  , mx = lx
  , px = sx
  , hx = rx
  , xx = gu;
function gx(l) {
    var s, o, c = "";
    if (typeof l == "string" || typeof l == "number")
        c += l;
    else if (typeof l == "object")
        if (Array.isArray(l)) {
            var f = l.length;
            for (s = 0; s < f; s++)
                l[s] && (o = gx(l[s])) && (c && (c += " "),
                c += o)
        } else
            for (o in l)
                l[o] && (c && (c += " "),
                c += o);
    return c
}
function vx() {
    for (var l, s, o = 0, c = "", f = arguments.length; o < f; o++)
        (l = arguments[o]) && (s = gx(l)) && (c && (c += " "),
        c += s);
    return c
}
const oh = l => typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l
  , ch = vx
  , e1 = (l, s) => o => {
    var c;
    if (s?.variants == null)
        return ch(l, o?.class, o?.className);
    const {variants: f, defaultVariants: m} = s
      , p = Object.keys(f).map(h => {
        const y = o?.[h]
          , b = m?.[h];
        if (y === null)
            return null;
        const T = oh(y) || oh(b);
        return f[h][T]
    }
    )
      , g = o && Object.entries(o).reduce( (h, y) => {
        let[b,T] = y;
        return T === void 0 || (h[b] = T),
        h
    }
    , {})
      , v = s == null || (c = s.compoundVariants) === null || c === void 0 ? void 0 : c.reduce( (h, y) => {
        let {class: b, className: T, ...R} = y;
        return Object.entries(R).every(_ => {
            let[A,D] = _;
            return Array.isArray(D) ? D.includes({
                ...m,
                ...g
            }[A]) : {
                ...m,
                ...g
            }[A] === D
        }
        ) ? [...h, b, T] : h
    }
    , []);
    return ch(l, p, v, o?.class, o?.className)
}
;
const t1 = l => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , n1 = l => l.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, o, c) => c ? c.toUpperCase() : o.toLowerCase())
  , uh = l => {
    const s = n1(l);
    return s.charAt(0).toUpperCase() + s.slice(1)
}
  , yx = (...l) => l.filter( (s, o, c) => !!s && s.trim() !== "" && c.indexOf(s) === o).join(" ").trim()
  , a1 = l => {
    for (const s in l)
        if (s.startsWith("aria-") || s === "role" || s === "title")
            return !0
}
;
var l1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const s1 = S.forwardRef( ({color: l="currentColor", size: s=24, strokeWidth: o=2, absoluteStrokeWidth: c, className: f="", children: m, iconNode: p, ...g}, v) => S.createElement("svg", {
    ref: v,
    ...l1,
    width: s,
    height: s,
    stroke: l,
    strokeWidth: c ? Number(o) * 24 / Number(s) : o,
    className: yx("lucide", f),
    ...!m && !a1(g) && {
        "aria-hidden": "true"
    },
    ...g
}, [...p.map( ([h,y]) => S.createElement(h, y)), ...Array.isArray(m) ? m : [m]]));
const vu = (l, s) => {
    const o = S.forwardRef( ({className: c, ...f}, m) => S.createElement(s1, {
        ref: m,
        iconNode: s,
        className: yx(`lucide-${t1(uh(l))}`, `lucide-${l}`, c),
        ...f
    }));
    return o.displayName = uh(l),
    o
}
;
const i1 = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]
  , r1 = vu("circle-alert", i1);
const o1 = [["path", {
    d: "M4 5h16",
    key: "1tepv9"
}], ["path", {
    d: "M4 12h16",
    key: "1lakjw"
}], ["path", {
    d: "M4 19h16",
    key: "1djgab"
}]]
  , c1 = vu("menu", o1);
const u1 = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , bx = vu("x", u1)
  , f1 = (l, s) => {
    const o = new Array(l.length + s.length);
    for (let c = 0; c < l.length; c++)
        o[c] = l[c];
    for (let c = 0; c < s.length; c++)
        o[l.length + c] = s[c];
    return o
}
  , d1 = (l, s) => ({
    classGroupId: l,
    validator: s
})
  , wx = (l=new Map, s=null, o) => ({
    nextPart: l,
    validators: s,
    classGroupId: o
})
  , Fi = "-"
  , fh = []
  , m1 = "arbitrary.."
  , p1 = l => {
    const s = x1(l)
      , {conflictingClassGroups: o, conflictingClassGroupModifiers: c} = l;
    return {
        getClassGroupId: p => {
            if (p.startsWith("[") && p.endsWith("]"))
                return h1(p);
            const g = p.split(Fi)
              , v = g[0] === "" && g.length > 1 ? 1 : 0;
            return Sx(g, v, s)
        }
        ,
        getConflictingClassGroupIds: (p, g) => {
            if (g) {
                const v = c[p]
                  , h = o[p];
                return v ? h ? f1(h, v) : v : h || fh
            }
            return o[p] || fh
        }
    }
}
  , Sx = (l, s, o) => {
    if (l.length - s === 0)
        return o.classGroupId;
    const f = l[s]
      , m = o.nextPart.get(f);
    if (m) {
        const h = Sx(l, s + 1, m);
        if (h)
            return h
    }
    const p = o.validators;
    if (p === null)
        return;
    const g = s === 0 ? l.join(Fi) : l.slice(s).join(Fi)
      , v = p.length;
    for (let h = 0; h < v; h++) {
        const y = p[h];
        if (y.validator(g))
            return y.classGroupId
    }
}
  , h1 = l => l.slice(1, -1).indexOf(":") === -1 ? void 0 : ( () => {
    const s = l.slice(1, -1)
      , o = s.indexOf(":")
      , c = s.slice(0, o);
    return c ? m1 + c : void 0
}
)()
  , x1 = l => {
    const {theme: s, classGroups: o} = l;
    return g1(o, s)
}
  , g1 = (l, s) => {
    const o = wx();
    for (const c in l) {
        const f = l[c];
        yu(f, o, c, s)
    }
    return o
}
  , yu = (l, s, o, c) => {
    const f = l.length;
    for (let m = 0; m < f; m++) {
        const p = l[m];
        v1(p, s, o, c)
    }
}
  , v1 = (l, s, o, c) => {
    if (typeof l == "string") {
        y1(l, s, o);
        return
    }
    if (typeof l == "function") {
        b1(l, s, o, c);
        return
    }
    w1(l, s, o, c)
}
  , y1 = (l, s, o) => {
    const c = l === "" ? s : Nx(s, l);
    c.classGroupId = o
}
  , b1 = (l, s, o, c) => {
    if (S1(l)) {
        yu(l(c), s, o, c);
        return
    }
    s.validators === null && (s.validators = []),
    s.validators.push(d1(o, l))
}
  , w1 = (l, s, o, c) => {
    const f = Object.entries(l)
      , m = f.length;
    for (let p = 0; p < m; p++) {
        const [g,v] = f[p];
        yu(v, Nx(s, g), o, c)
    }
}
  , Nx = (l, s) => {
    let o = l;
    const c = s.split(Fi)
      , f = c.length;
    for (let m = 0; m < f; m++) {
        const p = c[m];
        let g = o.nextPart.get(p);
        g || (g = wx(),
        o.nextPart.set(p, g)),
        o = g
    }
    return o
}
  , S1 = l => "isThemeGetter"in l && l.isThemeGetter === !0
  , N1 = l => {
    if (l < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let s = 0
      , o = Object.create(null)
      , c = Object.create(null);
    const f = (m, p) => {
        o[m] = p,
        s++,
        s > l && (s = 0,
        c = o,
        o = Object.create(null))
    }
    ;
    return {
        get(m) {
            let p = o[m];
            if (p !== void 0)
                return p;
            if ((p = c[m]) !== void 0)
                return f(m, p),
                p
        },
        set(m, p) {
            m in o ? o[m] = p : f(m, p)
        }
    }
}
  , nu = "!"
  , dh = ":"
  , j1 = []
  , mh = (l, s, o, c, f) => ({
    modifiers: l,
    hasImportantModifier: s,
    baseClassName: o,
    maybePostfixModifierPosition: c,
    isExternal: f
})
  , E1 = l => {
    const {prefix: s, experimentalParseClassName: o} = l;
    let c = f => {
        const m = [];
        let p = 0, g = 0, v = 0, h;
        const y = f.length;
        for (let A = 0; A < y; A++) {
            const D = f[A];
            if (p === 0 && g === 0) {
                if (D === dh) {
                    m.push(f.slice(v, A)),
                    v = A + 1;
                    continue
                }
                if (D === "/") {
                    h = A;
                    continue
                }
            }
            D === "[" ? p++ : D === "]" ? p-- : D === "(" ? g++ : D === ")" && g--
        }
        const b = m.length === 0 ? f : f.slice(v);
        let T = b
          , R = !1;
        b.endsWith(nu) ? (T = b.slice(0, -1),
        R = !0) : b.startsWith(nu) && (T = b.slice(1),
        R = !0);
        const _ = h && h > v ? h - v : void 0;
        return mh(m, R, T, _)
    }
    ;
    if (s) {
        const f = s + dh
          , m = c;
        c = p => p.startsWith(f) ? m(p.slice(f.length)) : mh(j1, !1, p, void 0, !0)
    }
    if (o) {
        const f = c;
        c = m => o({
            className: m,
            parseClassName: f
        })
    }
    return c
}
  , T1 = l => {
    const s = new Map;
    return l.orderSensitiveModifiers.forEach( (o, c) => {
        s.set(o, 1e6 + c)
    }
    ),
    o => {
        const c = [];
        let f = [];
        for (let m = 0; m < o.length; m++) {
            const p = o[m]
              , g = p[0] === "["
              , v = s.has(p);
            g || v ? (f.length > 0 && (f.sort(),
            c.push(...f),
            f = []),
            c.push(p)) : f.push(p)
        }
        return f.length > 0 && (f.sort(),
        c.push(...f)),
        c
    }
}
  , A1 = l => ({
    cache: N1(l.cacheSize),
    parseClassName: E1(l),
    sortModifiers: T1(l),
    ...p1(l)
})
  , O1 = /\s+/
  , C1 = (l, s) => {
    const {parseClassName: o, getClassGroupId: c, getConflictingClassGroupIds: f, sortModifiers: m} = s
      , p = []
      , g = l.trim().split(O1);
    let v = "";
    for (let h = g.length - 1; h >= 0; h -= 1) {
        const y = g[h]
          , {isExternal: b, modifiers: T, hasImportantModifier: R, baseClassName: _, maybePostfixModifierPosition: A} = o(y);
        if (b) {
            v = y + (v.length > 0 ? " " + v : v);
            continue
        }
        let D = !!A
          , Y = c(D ? _.substring(0, A) : _);
        if (!Y) {
            if (!D) {
                v = y + (v.length > 0 ? " " + v : v);
                continue
            }
            if (Y = c(_),
            !Y) {
                v = y + (v.length > 0 ? " " + v : v);
                continue
            }
            D = !1
        }
        const V = T.length === 0 ? "" : T.length === 1 ? T[0] : m(T).join(":")
          , Q = R ? V + nu : V
          , K = Q + Y;
        if (p.indexOf(K) > -1)
            continue;
        p.push(K);
        const J = f(Y, D);
        for (let I = 0; I < J.length; ++I) {
            const X = J[I];
            p.push(Q + X)
        }
        v = y + (v.length > 0 ? " " + v : v)
    }
    return v
}
  , R1 = (...l) => {
    let s = 0, o, c, f = "";
    for (; s < l.length; )
        (o = l[s++]) && (c = jx(o)) && (f && (f += " "),
        f += c);
    return f
}
  , jx = l => {
    if (typeof l == "string")
        return l;
    let s, o = "";
    for (let c = 0; c < l.length; c++)
        l[c] && (s = jx(l[c])) && (o && (o += " "),
        o += s);
    return o
}
  , z1 = (l, ...s) => {
    let o, c, f, m;
    const p = v => {
        const h = s.reduce( (y, b) => b(y), l());
        return o = A1(h),
        c = o.cache.get,
        f = o.cache.set,
        m = g,
        g(v)
    }
      , g = v => {
        const h = c(v);
        if (h)
            return h;
        const y = C1(v, o);
        return f(v, y),
        y
    }
    ;
    return m = p,
    (...v) => m(R1(...v))
}
  , M1 = []
  , Je = l => {
    const s = o => o[l] || M1;
    return s.isThemeGetter = !0,
    s
}
  , Ex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Tx = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , D1 = /^\d+\/\d+$/
  , _1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , U1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , H1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , L1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , q1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , cl = l => D1.test(l)
  , ge = l => !!l && !Number.isNaN(Number(l))
  , Wn = l => !!l && Number.isInteger(Number(l))
  , Qc = l => l.endsWith("%") && ge(l.slice(0, -1))
  , bn = l => _1.test(l)
  , B1 = () => !0
  , Y1 = l => U1.test(l) && !H1.test(l)
  , Ax = () => !1
  , G1 = l => L1.test(l)
  , k1 = l => q1.test(l)
  , Q1 = l => !ee(l) && !te(l)
  , V1 = l => ml(l, Rx, Ax)
  , ee = l => Ex.test(l)
  , Na = l => ml(l, zx, Y1)
  , Vc = l => ml(l, F1, ge)
  , ph = l => ml(l, Ox, Ax)
  , X1 = l => ml(l, Cx, k1)
  , ki = l => ml(l, Mx, G1)
  , te = l => Tx.test(l)
  , ms = l => pl(l, zx)
  , Z1 = l => pl(l, W1)
  , hh = l => pl(l, Ox)
  , K1 = l => pl(l, Rx)
  , J1 = l => pl(l, Cx)
  , Qi = l => pl(l, Mx, !0)
  , ml = (l, s, o) => {
    const c = Ex.exec(l);
    return c ? c[1] ? s(c[1]) : o(c[2]) : !1
}
  , pl = (l, s, o=!1) => {
    const c = Tx.exec(l);
    return c ? c[1] ? s(c[1]) : o : !1
}
  , Ox = l => l === "position" || l === "percentage"
  , Cx = l => l === "image" || l === "url"
  , Rx = l => l === "length" || l === "size" || l === "bg-size"
  , zx = l => l === "length"
  , F1 = l => l === "number"
  , W1 = l => l === "family-name"
  , Mx = l => l === "shadow"
  , I1 = () => {
    const l = Je("color")
      , s = Je("font")
      , o = Je("text")
      , c = Je("font-weight")
      , f = Je("tracking")
      , m = Je("leading")
      , p = Je("breakpoint")
      , g = Je("container")
      , v = Je("spacing")
      , h = Je("radius")
      , y = Je("shadow")
      , b = Je("inset-shadow")
      , T = Je("text-shadow")
      , R = Je("drop-shadow")
      , _ = Je("blur")
      , A = Je("perspective")
      , D = Je("aspect")
      , Y = Je("ease")
      , V = Je("animate")
      , Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , K = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , J = () => [...K(), te, ee]
      , I = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , X = () => ["auto", "contain", "none"]
      , F = () => [te, ee, v]
      , oe = () => [cl, "full", "auto", ...F()]
      , xe = () => [Wn, "none", "subgrid", te, ee]
      , ve = () => ["auto", {
        span: ["full", Wn, te, ee]
    }, Wn, te, ee]
      , he = () => [Wn, "auto", te, ee]
      , je = () => ["auto", "min", "max", "fr", te, ee]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , fe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , O = () => ["auto", ...F()]
      , k = () => [cl, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...F()]
      , H = () => [l, te, ee]
      , se = () => [...K(), hh, ph, {
        position: [te, ee]
    }]
      , ue = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , N = () => ["auto", "cover", "contain", K1, V1, {
        size: [te, ee]
    }]
      , q = () => [Qc, ms, Na]
      , Z = () => ["", "none", "full", h, te, ee]
      , W = () => ["", ge, ms, Na]
      , re = () => ["solid", "dashed", "dotted", "double"]
      , de = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , ae = () => [ge, Qc, hh, ph]
      , Ye = () => ["", "none", _, te, ee]
      , Re = () => ["none", ge, te, ee]
      , At = () => ["none", ge, te, ee]
      , Xt = () => [ge, te, ee]
      , Zt = () => [cl, "full", ...F()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [bn],
            breakpoint: [bn],
            color: [B1],
            container: [bn],
            "drop-shadow": [bn],
            ease: ["in", "out", "in-out"],
            font: [Q1],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [bn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [bn],
            shadow: [bn],
            spacing: ["px", ge],
            text: [bn],
            "text-shadow": [bn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", cl, ee, te, D]
            }],
            container: ["container"],
            columns: [{
                columns: [ge, ee, te, g]
            }],
            "break-after": [{
                "break-after": Q()
            }],
            "break-before": [{
                "break-before": Q()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: J()
            }],
            overflow: [{
                overflow: I()
            }],
            "overflow-x": [{
                "overflow-x": I()
            }],
            "overflow-y": [{
                "overflow-y": I()
            }],
            overscroll: [{
                overscroll: X()
            }],
            "overscroll-x": [{
                "overscroll-x": X()
            }],
            "overscroll-y": [{
                "overscroll-y": X()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: oe()
            }],
            "inset-x": [{
                "inset-x": oe()
            }],
            "inset-y": [{
                "inset-y": oe()
            }],
            start: [{
                start: oe()
            }],
            end: [{
                end: oe()
            }],
            top: [{
                top: oe()
            }],
            right: [{
                right: oe()
            }],
            bottom: [{
                bottom: oe()
            }],
            left: [{
                left: oe()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [Wn, "auto", te, ee]
            }],
            basis: [{
                basis: [cl, "full", "auto", g, ...F()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [ge, cl, "auto", "initial", "none", ee]
            }],
            grow: [{
                grow: ["", ge, te, ee]
            }],
            shrink: [{
                shrink: ["", ge, te, ee]
            }],
            order: [{
                order: [Wn, "first", "last", "none", te, ee]
            }],
            "grid-cols": [{
                "grid-cols": xe()
            }],
            "col-start-end": [{
                col: ve()
            }],
            "col-start": [{
                "col-start": he()
            }],
            "col-end": [{
                "col-end": he()
            }],
            "grid-rows": [{
                "grid-rows": xe()
            }],
            "row-start-end": [{
                row: ve()
            }],
            "row-start": [{
                "row-start": he()
            }],
            "row-end": [{
                "row-end": he()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": je()
            }],
            "auto-rows": [{
                "auto-rows": je()
            }],
            gap: [{
                gap: F()
            }],
            "gap-x": [{
                "gap-x": F()
            }],
            "gap-y": [{
                "gap-y": F()
            }],
            "justify-content": [{
                justify: [...P(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...fe(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...fe()]
            }],
            "align-content": [{
                content: ["normal", ...P()]
            }],
            "align-items": [{
                items: [...fe(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...fe(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": P()
            }],
            "place-items": [{
                "place-items": [...fe(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...fe()]
            }],
            p: [{
                p: F()
            }],
            px: [{
                px: F()
            }],
            py: [{
                py: F()
            }],
            ps: [{
                ps: F()
            }],
            pe: [{
                pe: F()
            }],
            pt: [{
                pt: F()
            }],
            pr: [{
                pr: F()
            }],
            pb: [{
                pb: F()
            }],
            pl: [{
                pl: F()
            }],
            m: [{
                m: O()
            }],
            mx: [{
                mx: O()
            }],
            my: [{
                my: O()
            }],
            ms: [{
                ms: O()
            }],
            me: [{
                me: O()
            }],
            mt: [{
                mt: O()
            }],
            mr: [{
                mr: O()
            }],
            mb: [{
                mb: O()
            }],
            ml: [{
                ml: O()
            }],
            "space-x": [{
                "space-x": F()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": F()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: k()
            }],
            w: [{
                w: [g, "screen", ...k()]
            }],
            "min-w": [{
                "min-w": [g, "screen", "none", ...k()]
            }],
            "max-w": [{
                "max-w": [g, "screen", "none", "prose", {
                    screen: [p]
                }, ...k()]
            }],
            h: [{
                h: ["screen", "lh", ...k()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...k()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...k()]
            }],
            "font-size": [{
                text: ["base", o, ms, Na]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [c, te, Vc]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Qc, ee]
            }],
            "font-family": [{
                font: [Z1, ee, s]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [f, te, ee]
            }],
            "line-clamp": [{
                "line-clamp": [ge, "none", te, Vc]
            }],
            leading: [{
                leading: [m, ...F()]
            }],
            "list-image": [{
                "list-image": ["none", te, ee]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", te, ee]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: H()
            }],
            "text-color": [{
                text: H()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...re(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [ge, "from-font", "auto", te, Na]
            }],
            "text-decoration-color": [{
                decoration: H()
            }],
            "underline-offset": [{
                "underline-offset": [ge, "auto", te, ee]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: F()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", te, ee]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", te, ee]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: se()
            }],
            "bg-repeat": [{
                bg: ue()
            }],
            "bg-size": [{
                bg: N()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Wn, te, ee],
                    radial: ["", te, ee],
                    conic: [Wn, te, ee]
                }, J1, X1]
            }],
            "bg-color": [{
                bg: H()
            }],
            "gradient-from-pos": [{
                from: q()
            }],
            "gradient-via-pos": [{
                via: q()
            }],
            "gradient-to-pos": [{
                to: q()
            }],
            "gradient-from": [{
                from: H()
            }],
            "gradient-via": [{
                via: H()
            }],
            "gradient-to": [{
                to: H()
            }],
            rounded: [{
                rounded: Z()
            }],
            "rounded-s": [{
                "rounded-s": Z()
            }],
            "rounded-e": [{
                "rounded-e": Z()
            }],
            "rounded-t": [{
                "rounded-t": Z()
            }],
            "rounded-r": [{
                "rounded-r": Z()
            }],
            "rounded-b": [{
                "rounded-b": Z()
            }],
            "rounded-l": [{
                "rounded-l": Z()
            }],
            "rounded-ss": [{
                "rounded-ss": Z()
            }],
            "rounded-se": [{
                "rounded-se": Z()
            }],
            "rounded-ee": [{
                "rounded-ee": Z()
            }],
            "rounded-es": [{
                "rounded-es": Z()
            }],
            "rounded-tl": [{
                "rounded-tl": Z()
            }],
            "rounded-tr": [{
                "rounded-tr": Z()
            }],
            "rounded-br": [{
                "rounded-br": Z()
            }],
            "rounded-bl": [{
                "rounded-bl": Z()
            }],
            "border-w": [{
                border: W()
            }],
            "border-w-x": [{
                "border-x": W()
            }],
            "border-w-y": [{
                "border-y": W()
            }],
            "border-w-s": [{
                "border-s": W()
            }],
            "border-w-e": [{
                "border-e": W()
            }],
            "border-w-t": [{
                "border-t": W()
            }],
            "border-w-r": [{
                "border-r": W()
            }],
            "border-w-b": [{
                "border-b": W()
            }],
            "border-w-l": [{
                "border-l": W()
            }],
            "divide-x": [{
                "divide-x": W()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": W()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...re(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...re(), "hidden", "none"]
            }],
            "border-color": [{
                border: H()
            }],
            "border-color-x": [{
                "border-x": H()
            }],
            "border-color-y": [{
                "border-y": H()
            }],
            "border-color-s": [{
                "border-s": H()
            }],
            "border-color-e": [{
                "border-e": H()
            }],
            "border-color-t": [{
                "border-t": H()
            }],
            "border-color-r": [{
                "border-r": H()
            }],
            "border-color-b": [{
                "border-b": H()
            }],
            "border-color-l": [{
                "border-l": H()
            }],
            "divide-color": [{
                divide: H()
            }],
            "outline-style": [{
                outline: [...re(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [ge, te, ee]
            }],
            "outline-w": [{
                outline: ["", ge, ms, Na]
            }],
            "outline-color": [{
                outline: H()
            }],
            shadow: [{
                shadow: ["", "none", y, Qi, ki]
            }],
            "shadow-color": [{
                shadow: H()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", b, Qi, ki]
            }],
            "inset-shadow-color": [{
                "inset-shadow": H()
            }],
            "ring-w": [{
                ring: W()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: H()
            }],
            "ring-offset-w": [{
                "ring-offset": [ge, Na]
            }],
            "ring-offset-color": [{
                "ring-offset": H()
            }],
            "inset-ring-w": [{
                "inset-ring": W()
            }],
            "inset-ring-color": [{
                "inset-ring": H()
            }],
            "text-shadow": [{
                "text-shadow": ["none", T, Qi, ki]
            }],
            "text-shadow-color": [{
                "text-shadow": H()
            }],
            opacity: [{
                opacity: [ge, te, ee]
            }],
            "mix-blend": [{
                "mix-blend": [...de(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": de()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [ge]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": ae()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": ae()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": H()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": H()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": ae()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": ae()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": H()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": H()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": ae()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": ae()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": H()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": H()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": ae()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": ae()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": H()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": H()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": ae()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": ae()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": H()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": H()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": ae()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": ae()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": H()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": H()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": ae()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": ae()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": H()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": H()
            }],
            "mask-image-radial": [{
                "mask-radial": [te, ee]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": ae()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": ae()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": H()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": H()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": K()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [ge]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": ae()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": ae()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": H()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": H()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: se()
            }],
            "mask-repeat": [{
                mask: ue()
            }],
            "mask-size": [{
                mask: N()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", te, ee]
            }],
            filter: [{
                filter: ["", "none", te, ee]
            }],
            blur: [{
                blur: Ye()
            }],
            brightness: [{
                brightness: [ge, te, ee]
            }],
            contrast: [{
                contrast: [ge, te, ee]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", R, Qi, ki]
            }],
            "drop-shadow-color": [{
                "drop-shadow": H()
            }],
            grayscale: [{
                grayscale: ["", ge, te, ee]
            }],
            "hue-rotate": [{
                "hue-rotate": [ge, te, ee]
            }],
            invert: [{
                invert: ["", ge, te, ee]
            }],
            saturate: [{
                saturate: [ge, te, ee]
            }],
            sepia: [{
                sepia: ["", ge, te, ee]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", te, ee]
            }],
            "backdrop-blur": [{
                "backdrop-blur": Ye()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [ge, te, ee]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [ge, te, ee]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", ge, te, ee]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [ge, te, ee]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", ge, te, ee]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [ge, te, ee]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [ge, te, ee]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", ge, te, ee]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": F()
            }],
            "border-spacing-x": [{
                "border-spacing-x": F()
            }],
            "border-spacing-y": [{
                "border-spacing-y": F()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", te, ee]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [ge, "initial", te, ee]
            }],
            ease: [{
                ease: ["linear", "initial", Y, te, ee]
            }],
            delay: [{
                delay: [ge, te, ee]
            }],
            animate: [{
                animate: ["none", V, te, ee]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [A, te, ee]
            }],
            "perspective-origin": [{
                "perspective-origin": J()
            }],
            rotate: [{
                rotate: Re()
            }],
            "rotate-x": [{
                "rotate-x": Re()
            }],
            "rotate-y": [{
                "rotate-y": Re()
            }],
            "rotate-z": [{
                "rotate-z": Re()
            }],
            scale: [{
                scale: At()
            }],
            "scale-x": [{
                "scale-x": At()
            }],
            "scale-y": [{
                "scale-y": At()
            }],
            "scale-z": [{
                "scale-z": At()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: Xt()
            }],
            "skew-x": [{
                "skew-x": Xt()
            }],
            "skew-y": [{
                "skew-y": Xt()
            }],
            transform: [{
                transform: [te, ee, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: J()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: Zt()
            }],
            "translate-x": [{
                "translate-x": Zt()
            }],
            "translate-y": [{
                "translate-y": Zt()
            }],
            "translate-z": [{
                "translate-z": Zt()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: H()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: H()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", te, ee]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": F()
            }],
            "scroll-mx": [{
                "scroll-mx": F()
            }],
            "scroll-my": [{
                "scroll-my": F()
            }],
            "scroll-ms": [{
                "scroll-ms": F()
            }],
            "scroll-me": [{
                "scroll-me": F()
            }],
            "scroll-mt": [{
                "scroll-mt": F()
            }],
            "scroll-mr": [{
                "scroll-mr": F()
            }],
            "scroll-mb": [{
                "scroll-mb": F()
            }],
            "scroll-ml": [{
                "scroll-ml": F()
            }],
            "scroll-p": [{
                "scroll-p": F()
            }],
            "scroll-px": [{
                "scroll-px": F()
            }],
            "scroll-py": [{
                "scroll-py": F()
            }],
            "scroll-ps": [{
                "scroll-ps": F()
            }],
            "scroll-pe": [{
                "scroll-pe": F()
            }],
            "scroll-pt": [{
                "scroll-pt": F()
            }],
            "scroll-pr": [{
                "scroll-pr": F()
            }],
            "scroll-pb": [{
                "scroll-pb": F()
            }],
            "scroll-pl": [{
                "scroll-pl": F()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", te, ee]
            }],
            fill: [{
                fill: ["none", ...H()]
            }],
            "stroke-w": [{
                stroke: [ge, ms, Na, Vc]
            }],
            stroke: [{
                stroke: ["none", ...H()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , P1 = z1(I1);
function Tt(...l) {
    return P1(vx(l))
}
const $1 = $0
  , Dx = S.forwardRef( ({className: l, ...s}, o) => u.jsx(fx, {
    ref: o,
    className: Tt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", l),
    ...s
}));
Dx.displayName = fx.displayName;
const ew = e1("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , _x = S.forwardRef( ({className: l, variant: s, ...o}, c) => u.jsx(dx, {
    ref: c,
    className: Tt(ew({
        variant: s
    }), l),
    ...o
}));
_x.displayName = dx.displayName;
const tw = S.forwardRef( ({className: l, ...s}, o) => u.jsx(hx, {
    ref: o,
    className: Tt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", l),
    ...s
}));
tw.displayName = hx.displayName;
const Ux = S.forwardRef( ({className: l, ...s}, o) => u.jsx(xx, {
    ref: o,
    className: Tt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", l),
    "toast-close": "",
    ...s,
    children: u.jsx(bx, {
        className: "h-4 w-4"
    })
}));
Ux.displayName = xx.displayName;
const Hx = S.forwardRef( ({className: l, ...s}, o) => u.jsx(mx, {
    ref: o,
    className: Tt("text-sm font-semibold", l),
    ...s
}));
Hx.displayName = mx.displayName;
const Lx = S.forwardRef( ({className: l, ...s}, o) => u.jsx(px, {
    ref: o,
    className: Tt("text-sm opacity-90", l),
    ...s
}));
Lx.displayName = px.displayName;
function nw() {
    const {toasts: l} = e0();
    return u.jsxs($1, {
        children: [l.map(function({id: s, title: o, description: c, action: f, ...m}) {
            return u.jsxs(_x, {
                ...m,
                children: [u.jsxs("div", {
                    className: "grid gap-1",
                    children: [o && u.jsx(Hx, {
                        children: o
                    }), c && u.jsx(Lx, {
                        children: c
                    })]
                }), f, u.jsx(Ux, {})]
            }, s)
        }), u.jsx(Dx, {})]
    })
}
const aw = ["top", "right", "bottom", "left"]
  , ea = Math.min
  , jt = Math.max
  , Wi = Math.round
  , Vi = Math.floor
  , Pt = l => ({
    x: l,
    y: l
})
  , lw = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , sw = {
    start: "end",
    end: "start"
};
function au(l, s, o) {
    return jt(l, ea(s, o))
}
function wn(l, s) {
    return typeof l == "function" ? l(s) : l
}
function Sn(l) {
    return l.split("-")[0]
}
function hl(l) {
    return l.split("-")[1]
}
function bu(l) {
    return l === "x" ? "y" : "x"
}
function wu(l) {
    return l === "y" ? "height" : "width"
}
const iw = new Set(["top", "bottom"]);
function It(l) {
    return iw.has(Sn(l)) ? "y" : "x"
}
function Su(l) {
    return bu(It(l))
}
function rw(l, s, o) {
    o === void 0 && (o = !1);
    const c = hl(l)
      , f = Su(l)
      , m = wu(f);
    let p = f === "x" ? c === (o ? "end" : "start") ? "right" : "left" : c === "start" ? "bottom" : "top";
    return s.reference[m] > s.floating[m] && (p = Ii(p)),
    [p, Ii(p)]
}
function ow(l) {
    const s = Ii(l);
    return [lu(l), s, lu(s)]
}
function lu(l) {
    return l.replace(/start|end/g, s => sw[s])
}
const xh = ["left", "right"]
  , gh = ["right", "left"]
  , cw = ["top", "bottom"]
  , uw = ["bottom", "top"];
function fw(l, s, o) {
    switch (l) {
    case "top":
    case "bottom":
        return o ? s ? gh : xh : s ? xh : gh;
    case "left":
    case "right":
        return s ? cw : uw;
    default:
        return []
    }
}
function dw(l, s, o, c) {
    const f = hl(l);
    let m = fw(Sn(l), o === "start", c);
    return f && (m = m.map(p => p + "-" + f),
    s && (m = m.concat(m.map(lu)))),
    m
}
function Ii(l) {
    return l.replace(/left|right|bottom|top/g, s => lw[s])
}
function mw(l) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...l
    }
}
function qx(l) {
    return typeof l != "number" ? mw(l) : {
        top: l,
        right: l,
        bottom: l,
        left: l
    }
}
function Pi(l) {
    const {x: s, y: o, width: c, height: f} = l;
    return {
        width: c,
        height: f,
        top: o,
        left: s,
        right: s + c,
        bottom: o + f,
        x: s,
        y: o
    }
}
function vh(l, s, o) {
    let {reference: c, floating: f} = l;
    const m = It(s)
      , p = Su(s)
      , g = wu(p)
      , v = Sn(s)
      , h = m === "y"
      , y = c.x + c.width / 2 - f.width / 2
      , b = c.y + c.height / 2 - f.height / 2
      , T = c[g] / 2 - f[g] / 2;
    let R;
    switch (v) {
    case "top":
        R = {
            x: y,
            y: c.y - f.height
        };
        break;
    case "bottom":
        R = {
            x: y,
            y: c.y + c.height
        };
        break;
    case "right":
        R = {
            x: c.x + c.width,
            y: b
        };
        break;
    case "left":
        R = {
            x: c.x - f.width,
            y: b
        };
        break;
    default:
        R = {
            x: c.x,
            y: c.y
        }
    }
    switch (hl(s)) {
    case "start":
        R[p] -= T * (o && h ? -1 : 1);
        break;
    case "end":
        R[p] += T * (o && h ? -1 : 1);
        break
    }
    return R
}
const pw = async (l, s, o) => {
    const {placement: c="bottom", strategy: f="absolute", middleware: m=[], platform: p} = o
      , g = m.filter(Boolean)
      , v = await (p.isRTL == null ? void 0 : p.isRTL(s));
    let h = await p.getElementRects({
        reference: l,
        floating: s,
        strategy: f
    })
      , {x: y, y: b} = vh(h, c, v)
      , T = c
      , R = {}
      , _ = 0;
    for (let A = 0; A < g.length; A++) {
        const {name: D, fn: Y} = g[A]
          , {x: V, y: Q, data: K, reset: J} = await Y({
            x: y,
            y: b,
            initialPlacement: c,
            placement: T,
            strategy: f,
            middlewareData: R,
            rects: h,
            platform: p,
            elements: {
                reference: l,
                floating: s
            }
        });
        y = V ?? y,
        b = Q ?? b,
        R = {
            ...R,
            [D]: {
                ...R[D],
                ...K
            }
        },
        J && _ <= 50 && (_++,
        typeof J == "object" && (J.placement && (T = J.placement),
        J.rects && (h = J.rects === !0 ? await p.getElementRects({
            reference: l,
            floating: s,
            strategy: f
        }) : J.rects),
        {x: y, y: b} = vh(h, T, v)),
        A = -1)
    }
    return {
        x: y,
        y: b,
        placement: T,
        strategy: f,
        middlewareData: R
    }
}
;
async function gs(l, s) {
    var o;
    s === void 0 && (s = {});
    const {x: c, y: f, platform: m, rects: p, elements: g, strategy: v} = l
      , {boundary: h="clippingAncestors", rootBoundary: y="viewport", elementContext: b="floating", altBoundary: T=!1, padding: R=0} = wn(s, l)
      , _ = qx(R)
      , D = g[T ? b === "floating" ? "reference" : "floating" : b]
      , Y = Pi(await m.getClippingRect({
        element: (o = await (m.isElement == null ? void 0 : m.isElement(D))) == null || o ? D : D.contextElement || await (m.getDocumentElement == null ? void 0 : m.getDocumentElement(g.floating)),
        boundary: h,
        rootBoundary: y,
        strategy: v
    }))
      , V = b === "floating" ? {
        x: c,
        y: f,
        width: p.floating.width,
        height: p.floating.height
    } : p.reference
      , Q = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(g.floating))
      , K = await (m.isElement == null ? void 0 : m.isElement(Q)) ? await (m.getScale == null ? void 0 : m.getScale(Q)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , J = Pi(m.convertOffsetParentRelativeRectToViewportRelativeRect ? await m.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: g,
        rect: V,
        offsetParent: Q,
        strategy: v
    }) : V);
    return {
        top: (Y.top - J.top + _.top) / K.y,
        bottom: (J.bottom - Y.bottom + _.bottom) / K.y,
        left: (Y.left - J.left + _.left) / K.x,
        right: (J.right - Y.right + _.right) / K.x
    }
}
const hw = l => ({
    name: "arrow",
    options: l,
    async fn(s) {
        const {x: o, y: c, placement: f, rects: m, platform: p, elements: g, middlewareData: v} = s
          , {element: h, padding: y=0} = wn(l, s) || {};
        if (h == null)
            return {};
        const b = qx(y)
          , T = {
            x: o,
            y: c
        }
          , R = Su(f)
          , _ = wu(R)
          , A = await p.getDimensions(h)
          , D = R === "y"
          , Y = D ? "top" : "left"
          , V = D ? "bottom" : "right"
          , Q = D ? "clientHeight" : "clientWidth"
          , K = m.reference[_] + m.reference[R] - T[R] - m.floating[_]
          , J = T[R] - m.reference[R]
          , I = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(h));
        let X = I ? I[Q] : 0;
        (!X || !await (p.isElement == null ? void 0 : p.isElement(I))) && (X = g.floating[Q] || m.floating[_]);
        const F = K / 2 - J / 2
          , oe = X / 2 - A[_] / 2 - 1
          , xe = ea(b[Y], oe)
          , ve = ea(b[V], oe)
          , he = xe
          , je = X - A[_] - ve
          , P = X / 2 - A[_] / 2 + F
          , fe = au(he, P, je)
          , O = !v.arrow && hl(f) != null && P !== fe && m.reference[_] / 2 - (P < he ? xe : ve) - A[_] / 2 < 0
          , k = O ? P < he ? P - he : P - je : 0;
        return {
            [R]: T[R] + k,
            data: {
                [R]: fe,
                centerOffset: P - fe - k,
                ...O && {
                    alignmentOffset: k
                }
            },
            reset: O
        }
    }
})
  , xw = function(l) {
    return l === void 0 && (l = {}),
    {
        name: "flip",
        options: l,
        async fn(s) {
            var o, c;
            const {placement: f, middlewareData: m, rects: p, initialPlacement: g, platform: v, elements: h} = s
              , {mainAxis: y=!0, crossAxis: b=!0, fallbackPlacements: T, fallbackStrategy: R="bestFit", fallbackAxisSideDirection: _="none", flipAlignment: A=!0, ...D} = wn(l, s);
            if ((o = m.arrow) != null && o.alignmentOffset)
                return {};
            const Y = Sn(f)
              , V = It(g)
              , Q = Sn(g) === g
              , K = await (v.isRTL == null ? void 0 : v.isRTL(h.floating))
              , J = T || (Q || !A ? [Ii(g)] : ow(g))
              , I = _ !== "none";
            !T && I && J.push(...dw(g, A, _, K));
            const X = [g, ...J]
              , F = await gs(s, D)
              , oe = [];
            let xe = ((c = m.flip) == null ? void 0 : c.overflows) || [];
            if (y && oe.push(F[Y]),
            b) {
                const P = rw(f, p, K);
                oe.push(F[P[0]], F[P[1]])
            }
            if (xe = [...xe, {
                placement: f,
                overflows: oe
            }],
            !oe.every(P => P <= 0)) {
                var ve, he;
                const P = (((ve = m.flip) == null ? void 0 : ve.index) || 0) + 1
                  , fe = X[P];
                if (fe && (!(b === "alignment" ? V !== It(fe) : !1) || xe.every(H => It(H.placement) === V ? H.overflows[0] > 0 : !0)))
                    return {
                        data: {
                            index: P,
                            overflows: xe
                        },
                        reset: {
                            placement: fe
                        }
                    };
                let O = (he = xe.filter(k => k.overflows[0] <= 0).sort( (k, H) => k.overflows[1] - H.overflows[1])[0]) == null ? void 0 : he.placement;
                if (!O)
                    switch (R) {
                    case "bestFit":
                        {
                            var je;
                            const k = (je = xe.filter(H => {
                                if (I) {
                                    const se = It(H.placement);
                                    return se === V || se === "y"
                                }
                                return !0
                            }
                            ).map(H => [H.placement, H.overflows.filter(se => se > 0).reduce( (se, ue) => se + ue, 0)]).sort( (H, se) => H[1] - se[1])[0]) == null ? void 0 : je[0];
                            k && (O = k);
                            break
                        }
                    case "initialPlacement":
                        O = g;
                        break
                    }
                if (f !== O)
                    return {
                        reset: {
                            placement: O
                        }
                    }
            }
            return {}
        }
    }
};
function yh(l, s) {
    return {
        top: l.top - s.height,
        right: l.right - s.width,
        bottom: l.bottom - s.height,
        left: l.left - s.width
    }
}
function bh(l) {
    return aw.some(s => l[s] >= 0)
}
const gw = function(l) {
    return l === void 0 && (l = {}),
    {
        name: "hide",
        options: l,
        async fn(s) {
            const {rects: o} = s
              , {strategy: c="referenceHidden", ...f} = wn(l, s);
            switch (c) {
            case "referenceHidden":
                {
                    const m = await gs(s, {
                        ...f,
                        elementContext: "reference"
                    })
                      , p = yh(m, o.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: p,
                            referenceHidden: bh(p)
                        }
                    }
                }
            case "escaped":
                {
                    const m = await gs(s, {
                        ...f,
                        altBoundary: !0
                    })
                      , p = yh(m, o.floating);
                    return {
                        data: {
                            escapedOffsets: p,
                            escaped: bh(p)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Bx = new Set(["left", "top"]);
async function vw(l, s) {
    const {placement: o, platform: c, elements: f} = l
      , m = await (c.isRTL == null ? void 0 : c.isRTL(f.floating))
      , p = Sn(o)
      , g = hl(o)
      , v = It(o) === "y"
      , h = Bx.has(p) ? -1 : 1
      , y = m && v ? -1 : 1
      , b = wn(s, l);
    let {mainAxis: T, crossAxis: R, alignmentAxis: _} = typeof b == "number" ? {
        mainAxis: b,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: b.mainAxis || 0,
        crossAxis: b.crossAxis || 0,
        alignmentAxis: b.alignmentAxis
    };
    return g && typeof _ == "number" && (R = g === "end" ? _ * -1 : _),
    v ? {
        x: R * y,
        y: T * h
    } : {
        x: T * h,
        y: R * y
    }
}
const yw = function(l) {
    return l === void 0 && (l = 0),
    {
        name: "offset",
        options: l,
        async fn(s) {
            var o, c;
            const {x: f, y: m, placement: p, middlewareData: g} = s
              , v = await vw(s, l);
            return p === ((o = g.offset) == null ? void 0 : o.placement) && (c = g.arrow) != null && c.alignmentOffset ? {} : {
                x: f + v.x,
                y: m + v.y,
                data: {
                    ...v,
                    placement: p
                }
            }
        }
    }
}
  , bw = function(l) {
    return l === void 0 && (l = {}),
    {
        name: "shift",
        options: l,
        async fn(s) {
            const {x: o, y: c, placement: f} = s
              , {mainAxis: m=!0, crossAxis: p=!1, limiter: g={
                fn: D => {
                    let {x: Y, y: V} = D;
                    return {
                        x: Y,
                        y: V
                    }
                }
            }, ...v} = wn(l, s)
              , h = {
                x: o,
                y: c
            }
              , y = await gs(s, v)
              , b = It(Sn(f))
              , T = bu(b);
            let R = h[T]
              , _ = h[b];
            if (m) {
                const D = T === "y" ? "top" : "left"
                  , Y = T === "y" ? "bottom" : "right"
                  , V = R + y[D]
                  , Q = R - y[Y];
                R = au(V, R, Q)
            }
            if (p) {
                const D = b === "y" ? "top" : "left"
                  , Y = b === "y" ? "bottom" : "right"
                  , V = _ + y[D]
                  , Q = _ - y[Y];
                _ = au(V, _, Q)
            }
            const A = g.fn({
                ...s,
                [T]: R,
                [b]: _
            });
            return {
                ...A,
                data: {
                    x: A.x - o,
                    y: A.y - c,
                    enabled: {
                        [T]: m,
                        [b]: p
                    }
                }
            }
        }
    }
}
  , ww = function(l) {
    return l === void 0 && (l = {}),
    {
        options: l,
        fn(s) {
            const {x: o, y: c, placement: f, rects: m, middlewareData: p} = s
              , {offset: g=0, mainAxis: v=!0, crossAxis: h=!0} = wn(l, s)
              , y = {
                x: o,
                y: c
            }
              , b = It(f)
              , T = bu(b);
            let R = y[T]
              , _ = y[b];
            const A = wn(g, s)
              , D = typeof A == "number" ? {
                mainAxis: A,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...A
            };
            if (v) {
                const Q = T === "y" ? "height" : "width"
                  , K = m.reference[T] - m.floating[Q] + D.mainAxis
                  , J = m.reference[T] + m.reference[Q] - D.mainAxis;
                R < K ? R = K : R > J && (R = J)
            }
            if (h) {
                var Y, V;
                const Q = T === "y" ? "width" : "height"
                  , K = Bx.has(Sn(f))
                  , J = m.reference[b] - m.floating[Q] + (K && ((Y = p.offset) == null ? void 0 : Y[b]) || 0) + (K ? 0 : D.crossAxis)
                  , I = m.reference[b] + m.reference[Q] + (K ? 0 : ((V = p.offset) == null ? void 0 : V[b]) || 0) - (K ? D.crossAxis : 0);
                _ < J ? _ = J : _ > I && (_ = I)
            }
            return {
                [T]: R,
                [b]: _
            }
        }
    }
}
  , Sw = function(l) {
    return l === void 0 && (l = {}),
    {
        name: "size",
        options: l,
        async fn(s) {
            var o, c;
            const {placement: f, rects: m, platform: p, elements: g} = s
              , {apply: v= () => {}
            , ...h} = wn(l, s)
              , y = await gs(s, h)
              , b = Sn(f)
              , T = hl(f)
              , R = It(f) === "y"
              , {width: _, height: A} = m.floating;
            let D, Y;
            b === "top" || b === "bottom" ? (D = b,
            Y = T === (await (p.isRTL == null ? void 0 : p.isRTL(g.floating)) ? "start" : "end") ? "left" : "right") : (Y = b,
            D = T === "end" ? "top" : "bottom");
            const V = A - y.top - y.bottom
              , Q = _ - y.left - y.right
              , K = ea(A - y[D], V)
              , J = ea(_ - y[Y], Q)
              , I = !s.middlewareData.shift;
            let X = K
              , F = J;
            if ((o = s.middlewareData.shift) != null && o.enabled.x && (F = Q),
            (c = s.middlewareData.shift) != null && c.enabled.y && (X = V),
            I && !T) {
                const xe = jt(y.left, 0)
                  , ve = jt(y.right, 0)
                  , he = jt(y.top, 0)
                  , je = jt(y.bottom, 0);
                R ? F = _ - 2 * (xe !== 0 || ve !== 0 ? xe + ve : jt(y.left, y.right)) : X = A - 2 * (he !== 0 || je !== 0 ? he + je : jt(y.top, y.bottom))
            }
            await v({
                ...s,
                availableWidth: F,
                availableHeight: X
            });
            const oe = await p.getDimensions(g.floating);
            return _ !== oe.width || A !== oe.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function cr() {
    return typeof window < "u"
}
function xl(l) {
    return Yx(l) ? (l.nodeName || "").toLowerCase() : "#document"
}
function Et(l) {
    var s;
    return (l == null || (s = l.ownerDocument) == null ? void 0 : s.defaultView) || window
}
function en(l) {
    var s;
    return (s = (Yx(l) ? l.ownerDocument : l.document) || window.document) == null ? void 0 : s.documentElement
}
function Yx(l) {
    return cr() ? l instanceof Node || l instanceof Et(l).Node : !1
}
function Qt(l) {
    return cr() ? l instanceof Element || l instanceof Et(l).Element : !1
}
function $t(l) {
    return cr() ? l instanceof HTMLElement || l instanceof Et(l).HTMLElement : !1
}
function wh(l) {
    return !cr() || typeof ShadowRoot > "u" ? !1 : l instanceof ShadowRoot || l instanceof Et(l).ShadowRoot
}
const Nw = new Set(["inline", "contents"]);
function bs(l) {
    const {overflow: s, overflowX: o, overflowY: c, display: f} = Vt(l);
    return /auto|scroll|overlay|hidden|clip/.test(s + c + o) && !Nw.has(f)
}
const jw = new Set(["table", "td", "th"]);
function Ew(l) {
    return jw.has(xl(l))
}
const Tw = [":popover-open", ":modal"];
function ur(l) {
    return Tw.some(s => {
        try {
            return l.matches(s)
        } catch {
            return !1
        }
    }
    )
}
const Aw = ["transform", "translate", "scale", "rotate", "perspective"]
  , Ow = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , Cw = ["paint", "layout", "strict", "content"];
function Nu(l) {
    const s = ju()
      , o = Qt(l) ? Vt(l) : l;
    return Aw.some(c => o[c] ? o[c] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !s && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !s && (o.filter ? o.filter !== "none" : !1) || Ow.some(c => (o.willChange || "").includes(c)) || Cw.some(c => (o.contain || "").includes(c))
}
function Rw(l) {
    let s = ta(l);
    for (; $t(s) && !fl(s); ) {
        if (Nu(s))
            return s;
        if (ur(s))
            return null;
        s = ta(s)
    }
    return null
}
function ju() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const zw = new Set(["html", "body", "#document"]);
function fl(l) {
    return zw.has(xl(l))
}
function Vt(l) {
    return Et(l).getComputedStyle(l)
}
function fr(l) {
    return Qt(l) ? {
        scrollLeft: l.scrollLeft,
        scrollTop: l.scrollTop
    } : {
        scrollLeft: l.scrollX,
        scrollTop: l.scrollY
    }
}
function ta(l) {
    if (xl(l) === "html")
        return l;
    const s = l.assignedSlot || l.parentNode || wh(l) && l.host || en(l);
    return wh(s) ? s.host : s
}
function Gx(l) {
    const s = ta(l);
    return fl(s) ? l.ownerDocument ? l.ownerDocument.body : l.body : $t(s) && bs(s) ? s : Gx(s)
}
function vs(l, s, o) {
    var c;
    s === void 0 && (s = []),
    o === void 0 && (o = !0);
    const f = Gx(l)
      , m = f === ((c = l.ownerDocument) == null ? void 0 : c.body)
      , p = Et(f);
    if (m) {
        const g = su(p);
        return s.concat(p, p.visualViewport || [], bs(f) ? f : [], g && o ? vs(g) : [])
    }
    return s.concat(f, vs(f, [], o))
}
function su(l) {
    return l.parent && Object.getPrototypeOf(l.parent) ? l.frameElement : null
}
function kx(l) {
    const s = Vt(l);
    let o = parseFloat(s.width) || 0
      , c = parseFloat(s.height) || 0;
    const f = $t(l)
      , m = f ? l.offsetWidth : o
      , p = f ? l.offsetHeight : c
      , g = Wi(o) !== m || Wi(c) !== p;
    return g && (o = m,
    c = p),
    {
        width: o,
        height: c,
        $: g
    }
}
function Eu(l) {
    return Qt(l) ? l : l.contextElement
}
function ul(l) {
    const s = Eu(l);
    if (!$t(s))
        return Pt(1);
    const o = s.getBoundingClientRect()
      , {width: c, height: f, $: m} = kx(s);
    let p = (m ? Wi(o.width) : o.width) / c
      , g = (m ? Wi(o.height) : o.height) / f;
    return (!p || !Number.isFinite(p)) && (p = 1),
    (!g || !Number.isFinite(g)) && (g = 1),
    {
        x: p,
        y: g
    }
}
const Mw = Pt(0);
function Qx(l) {
    const s = Et(l);
    return !ju() || !s.visualViewport ? Mw : {
        x: s.visualViewport.offsetLeft,
        y: s.visualViewport.offsetTop
    }
}
function Dw(l, s, o) {
    return s === void 0 && (s = !1),
    !o || s && o !== Et(l) ? !1 : s
}
function ja(l, s, o, c) {
    s === void 0 && (s = !1),
    o === void 0 && (o = !1);
    const f = l.getBoundingClientRect()
      , m = Eu(l);
    let p = Pt(1);
    s && (c ? Qt(c) && (p = ul(c)) : p = ul(l));
    const g = Dw(m, o, c) ? Qx(m) : Pt(0);
    let v = (f.left + g.x) / p.x
      , h = (f.top + g.y) / p.y
      , y = f.width / p.x
      , b = f.height / p.y;
    if (m) {
        const T = Et(m)
          , R = c && Qt(c) ? Et(c) : c;
        let _ = T
          , A = su(_);
        for (; A && c && R !== _; ) {
            const D = ul(A)
              , Y = A.getBoundingClientRect()
              , V = Vt(A)
              , Q = Y.left + (A.clientLeft + parseFloat(V.paddingLeft)) * D.x
              , K = Y.top + (A.clientTop + parseFloat(V.paddingTop)) * D.y;
            v *= D.x,
            h *= D.y,
            y *= D.x,
            b *= D.y,
            v += Q,
            h += K,
            _ = Et(A),
            A = su(_)
        }
    }
    return Pi({
        width: y,
        height: b,
        x: v,
        y: h
    })
}
function dr(l, s) {
    const o = fr(l).scrollLeft;
    return s ? s.left + o : ja(en(l)).left + o
}
function Vx(l, s) {
    const o = l.getBoundingClientRect()
      , c = o.left + s.scrollLeft - dr(l, o)
      , f = o.top + s.scrollTop;
    return {
        x: c,
        y: f
    }
}
function _w(l) {
    let {elements: s, rect: o, offsetParent: c, strategy: f} = l;
    const m = f === "fixed"
      , p = en(c)
      , g = s ? ur(s.floating) : !1;
    if (c === p || g && m)
        return o;
    let v = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , h = Pt(1);
    const y = Pt(0)
      , b = $t(c);
    if ((b || !b && !m) && ((xl(c) !== "body" || bs(p)) && (v = fr(c)),
    $t(c))) {
        const R = ja(c);
        h = ul(c),
        y.x = R.x + c.clientLeft,
        y.y = R.y + c.clientTop
    }
    const T = p && !b && !m ? Vx(p, v) : Pt(0);
    return {
        width: o.width * h.x,
        height: o.height * h.y,
        x: o.x * h.x - v.scrollLeft * h.x + y.x + T.x,
        y: o.y * h.y - v.scrollTop * h.y + y.y + T.y
    }
}
function Uw(l) {
    return Array.from(l.getClientRects())
}
function Hw(l) {
    const s = en(l)
      , o = fr(l)
      , c = l.ownerDocument.body
      , f = jt(s.scrollWidth, s.clientWidth, c.scrollWidth, c.clientWidth)
      , m = jt(s.scrollHeight, s.clientHeight, c.scrollHeight, c.clientHeight);
    let p = -o.scrollLeft + dr(l);
    const g = -o.scrollTop;
    return Vt(c).direction === "rtl" && (p += jt(s.clientWidth, c.clientWidth) - f),
    {
        width: f,
        height: m,
        x: p,
        y: g
    }
}
const Sh = 25;
function Lw(l, s) {
    const o = Et(l)
      , c = en(l)
      , f = o.visualViewport;
    let m = c.clientWidth
      , p = c.clientHeight
      , g = 0
      , v = 0;
    if (f) {
        m = f.width,
        p = f.height;
        const y = ju();
        (!y || y && s === "fixed") && (g = f.offsetLeft,
        v = f.offsetTop)
    }
    const h = dr(c);
    if (h <= 0) {
        const y = c.ownerDocument
          , b = y.body
          , T = getComputedStyle(b)
          , R = y.compatMode === "CSS1Compat" && parseFloat(T.marginLeft) + parseFloat(T.marginRight) || 0
          , _ = Math.abs(c.clientWidth - b.clientWidth - R);
        _ <= Sh && (m -= _)
    } else
        h <= Sh && (m += h);
    return {
        width: m,
        height: p,
        x: g,
        y: v
    }
}
const qw = new Set(["absolute", "fixed"]);
function Bw(l, s) {
    const o = ja(l, !0, s === "fixed")
      , c = o.top + l.clientTop
      , f = o.left + l.clientLeft
      , m = $t(l) ? ul(l) : Pt(1)
      , p = l.clientWidth * m.x
      , g = l.clientHeight * m.y
      , v = f * m.x
      , h = c * m.y;
    return {
        width: p,
        height: g,
        x: v,
        y: h
    }
}
function Nh(l, s, o) {
    let c;
    if (s === "viewport")
        c = Lw(l, o);
    else if (s === "document")
        c = Hw(en(l));
    else if (Qt(s))
        c = Bw(s, o);
    else {
        const f = Qx(l);
        c = {
            x: s.x - f.x,
            y: s.y - f.y,
            width: s.width,
            height: s.height
        }
    }
    return Pi(c)
}
function Xx(l, s) {
    const o = ta(l);
    return o === s || !Qt(o) || fl(o) ? !1 : Vt(o).position === "fixed" || Xx(o, s)
}
function Yw(l, s) {
    const o = s.get(l);
    if (o)
        return o;
    let c = vs(l, [], !1).filter(g => Qt(g) && xl(g) !== "body")
      , f = null;
    const m = Vt(l).position === "fixed";
    let p = m ? ta(l) : l;
    for (; Qt(p) && !fl(p); ) {
        const g = Vt(p)
          , v = Nu(p);
        !v && g.position === "fixed" && (f = null),
        (m ? !v && !f : !v && g.position === "static" && !!f && qw.has(f.position) || bs(p) && !v && Xx(l, p)) ? c = c.filter(y => y !== p) : f = g,
        p = ta(p)
    }
    return s.set(l, c),
    c
}
function Gw(l) {
    let {element: s, boundary: o, rootBoundary: c, strategy: f} = l;
    const p = [...o === "clippingAncestors" ? ur(s) ? [] : Yw(s, this._c) : [].concat(o), c]
      , g = p[0]
      , v = p.reduce( (h, y) => {
        const b = Nh(s, y, f);
        return h.top = jt(b.top, h.top),
        h.right = ea(b.right, h.right),
        h.bottom = ea(b.bottom, h.bottom),
        h.left = jt(b.left, h.left),
        h
    }
    , Nh(s, g, f));
    return {
        width: v.right - v.left,
        height: v.bottom - v.top,
        x: v.left,
        y: v.top
    }
}
function kw(l) {
    const {width: s, height: o} = kx(l);
    return {
        width: s,
        height: o
    }
}
function Qw(l, s, o) {
    const c = $t(s)
      , f = en(s)
      , m = o === "fixed"
      , p = ja(l, !0, m, s);
    let g = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const v = Pt(0);
    function h() {
        v.x = dr(f)
    }
    if (c || !c && !m)
        if ((xl(s) !== "body" || bs(f)) && (g = fr(s)),
        c) {
            const R = ja(s, !0, m, s);
            v.x = R.x + s.clientLeft,
            v.y = R.y + s.clientTop
        } else
            f && h();
    m && !c && f && h();
    const y = f && !c && !m ? Vx(f, g) : Pt(0)
      , b = p.left + g.scrollLeft - v.x - y.x
      , T = p.top + g.scrollTop - v.y - y.y;
    return {
        x: b,
        y: T,
        width: p.width,
        height: p.height
    }
}
function Xc(l) {
    return Vt(l).position === "static"
}
function jh(l, s) {
    if (!$t(l) || Vt(l).position === "fixed")
        return null;
    if (s)
        return s(l);
    let o = l.offsetParent;
    return en(l) === o && (o = o.ownerDocument.body),
    o
}
function Zx(l, s) {
    const o = Et(l);
    if (ur(l))
        return o;
    if (!$t(l)) {
        let f = ta(l);
        for (; f && !fl(f); ) {
            if (Qt(f) && !Xc(f))
                return f;
            f = ta(f)
        }
        return o
    }
    let c = jh(l, s);
    for (; c && Ew(c) && Xc(c); )
        c = jh(c, s);
    return c && fl(c) && Xc(c) && !Nu(c) ? o : c || Rw(l) || o
}
const Vw = async function(l) {
    const s = this.getOffsetParent || Zx
      , o = this.getDimensions
      , c = await o(l.floating);
    return {
        reference: Qw(l.reference, await s(l.floating), l.strategy),
        floating: {
            x: 0,
            y: 0,
            width: c.width,
            height: c.height
        }
    }
};
function Xw(l) {
    return Vt(l).direction === "rtl"
}
const Zw = {
    convertOffsetParentRelativeRectToViewportRelativeRect: _w,
    getDocumentElement: en,
    getClippingRect: Gw,
    getOffsetParent: Zx,
    getElementRects: Vw,
    getClientRects: Uw,
    getDimensions: kw,
    getScale: ul,
    isElement: Qt,
    isRTL: Xw
};
function Kx(l, s) {
    return l.x === s.x && l.y === s.y && l.width === s.width && l.height === s.height
}
function Kw(l, s) {
    let o = null, c;
    const f = en(l);
    function m() {
        var g;
        clearTimeout(c),
        (g = o) == null || g.disconnect(),
        o = null
    }
    function p(g, v) {
        g === void 0 && (g = !1),
        v === void 0 && (v = 1),
        m();
        const h = l.getBoundingClientRect()
          , {left: y, top: b, width: T, height: R} = h;
        if (g || s(),
        !T || !R)
            return;
        const _ = Vi(b)
          , A = Vi(f.clientWidth - (y + T))
          , D = Vi(f.clientHeight - (b + R))
          , Y = Vi(y)
          , Q = {
            rootMargin: -_ + "px " + -A + "px " + -D + "px " + -Y + "px",
            threshold: jt(0, ea(1, v)) || 1
        };
        let K = !0;
        function J(I) {
            const X = I[0].intersectionRatio;
            if (X !== v) {
                if (!K)
                    return p();
                X ? p(!1, X) : c = setTimeout( () => {
                    p(!1, 1e-7)
                }
                , 1e3)
            }
            X === 1 && !Kx(h, l.getBoundingClientRect()) && p(),
            K = !1
        }
        try {
            o = new IntersectionObserver(J,{
                ...Q,
                root: f.ownerDocument
            })
        } catch {
            o = new IntersectionObserver(J,Q)
        }
        o.observe(l)
    }
    return p(!0),
    m
}
function Jw(l, s, o, c) {
    c === void 0 && (c = {});
    const {ancestorScroll: f=!0, ancestorResize: m=!0, elementResize: p=typeof ResizeObserver == "function", layoutShift: g=typeof IntersectionObserver == "function", animationFrame: v=!1} = c
      , h = Eu(l)
      , y = f || m ? [...h ? vs(h) : [], ...vs(s)] : [];
    y.forEach(Y => {
        f && Y.addEventListener("scroll", o, {
            passive: !0
        }),
        m && Y.addEventListener("resize", o)
    }
    );
    const b = h && g ? Kw(h, o) : null;
    let T = -1
      , R = null;
    p && (R = new ResizeObserver(Y => {
        let[V] = Y;
        V && V.target === h && R && (R.unobserve(s),
        cancelAnimationFrame(T),
        T = requestAnimationFrame( () => {
            var Q;
            (Q = R) == null || Q.observe(s)
        }
        )),
        o()
    }
    ),
    h && !v && R.observe(h),
    R.observe(s));
    let _, A = v ? ja(l) : null;
    v && D();
    function D() {
        const Y = ja(l);
        A && !Kx(A, Y) && o(),
        A = Y,
        _ = requestAnimationFrame(D)
    }
    return o(),
    () => {
        var Y;
        y.forEach(V => {
            f && V.removeEventListener("scroll", o),
            m && V.removeEventListener("resize", o)
        }
        ),
        b?.(),
        (Y = R) == null || Y.disconnect(),
        R = null,
        v && cancelAnimationFrame(_)
    }
}
const Fw = yw
  , Ww = bw
  , Iw = xw
  , Pw = Sw
  , $w = gw
  , Eh = hw
  , e4 = ww
  , t4 = (l, s, o) => {
    const c = new Map
      , f = {
        platform: Zw,
        ...o
    }
      , m = {
        ...f.platform,
        _c: c
    };
    return pw(l, s, {
        ...f,
        platform: m
    })
}
;
var n4 = typeof document < "u"
  , a4 = function() {}
  , Ki = n4 ? S.useLayoutEffect : a4;
function $i(l, s) {
    if (l === s)
        return !0;
    if (typeof l != typeof s)
        return !1;
    if (typeof l == "function" && l.toString() === s.toString())
        return !0;
    let o, c, f;
    if (l && s && typeof l == "object") {
        if (Array.isArray(l)) {
            if (o = l.length,
            o !== s.length)
                return !1;
            for (c = o; c-- !== 0; )
                if (!$i(l[c], s[c]))
                    return !1;
            return !0
        }
        if (f = Object.keys(l),
        o = f.length,
        o !== Object.keys(s).length)
            return !1;
        for (c = o; c-- !== 0; )
            if (!{}.hasOwnProperty.call(s, f[c]))
                return !1;
        for (c = o; c-- !== 0; ) {
            const m = f[c];
            if (!(m === "_owner" && l.$$typeof) && !$i(l[m], s[m]))
                return !1
        }
        return !0
    }
    return l !== l && s !== s
}
function Jx(l) {
    return typeof window > "u" ? 1 : (l.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Th(l, s) {
    const o = Jx(l);
    return Math.round(s * o) / o
}
function Zc(l) {
    const s = S.useRef(l);
    return Ki( () => {
        s.current = l
    }
    ),
    s
}
function l4(l) {
    l === void 0 && (l = {});
    const {placement: s="bottom", strategy: o="absolute", middleware: c=[], platform: f, elements: {reference: m, floating: p}={}, transform: g=!0, whileElementsMounted: v, open: h} = l
      , [y,b] = S.useState({
        x: 0,
        y: 0,
        strategy: o,
        placement: s,
        middlewareData: {},
        isPositioned: !1
    })
      , [T,R] = S.useState(c);
    $i(T, c) || R(c);
    const [_,A] = S.useState(null)
      , [D,Y] = S.useState(null)
      , V = S.useCallback(H => {
        H !== I.current && (I.current = H,
        A(H))
    }
    , [])
      , Q = S.useCallback(H => {
        H !== X.current && (X.current = H,
        Y(H))
    }
    , [])
      , K = m || _
      , J = p || D
      , I = S.useRef(null)
      , X = S.useRef(null)
      , F = S.useRef(y)
      , oe = v != null
      , xe = Zc(v)
      , ve = Zc(f)
      , he = Zc(h)
      , je = S.useCallback( () => {
        if (!I.current || !X.current)
            return;
        const H = {
            placement: s,
            strategy: o,
            middleware: T
        };
        ve.current && (H.platform = ve.current),
        t4(I.current, X.current, H).then(se => {
            const ue = {
                ...se,
                isPositioned: he.current !== !1
            };
            P.current && !$i(F.current, ue) && (F.current = ue,
            lr.flushSync( () => {
                b(ue)
            }
            ))
        }
        )
    }
    , [T, s, o, ve, he]);
    Ki( () => {
        h === !1 && F.current.isPositioned && (F.current.isPositioned = !1,
        b(H => ({
            ...H,
            isPositioned: !1
        })))
    }
    , [h]);
    const P = S.useRef(!1);
    Ki( () => (P.current = !0,
    () => {
        P.current = !1
    }
    ), []),
    Ki( () => {
        if (K && (I.current = K),
        J && (X.current = J),
        K && J) {
            if (xe.current)
                return xe.current(K, J, je);
            je()
        }
    }
    , [K, J, je, xe, oe]);
    const fe = S.useMemo( () => ({
        reference: I,
        floating: X,
        setReference: V,
        setFloating: Q
    }), [V, Q])
      , O = S.useMemo( () => ({
        reference: K,
        floating: J
    }), [K, J])
      , k = S.useMemo( () => {
        const H = {
            position: o,
            left: 0,
            top: 0
        };
        if (!O.floating)
            return H;
        const se = Th(O.floating, y.x)
          , ue = Th(O.floating, y.y);
        return g ? {
            ...H,
            transform: "translate(" + se + "px, " + ue + "px)",
            ...Jx(O.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: o,
            left: se,
            top: ue
        }
    }
    , [o, g, O.floating, y.x, y.y]);
    return S.useMemo( () => ({
        ...y,
        update: je,
        refs: fe,
        elements: O,
        floatingStyles: k
    }), [y, je, fe, O, k])
}
const s4 = l => {
    function s(o) {
        return {}.hasOwnProperty.call(o, "current")
    }
    return {
        name: "arrow",
        options: l,
        fn(o) {
            const {element: c, padding: f} = typeof l == "function" ? l(o) : l;
            return c && s(c) ? c.current != null ? Eh({
                element: c.current,
                padding: f
            }).fn(o) : {} : c ? Eh({
                element: c,
                padding: f
            }).fn(o) : {}
        }
    }
}
  , i4 = (l, s) => ({
    ...Fw(l),
    options: [l, s]
})
  , r4 = (l, s) => ({
    ...Ww(l),
    options: [l, s]
})
  , o4 = (l, s) => ({
    ...e4(l),
    options: [l, s]
})
  , c4 = (l, s) => ({
    ...Iw(l),
    options: [l, s]
})
  , u4 = (l, s) => ({
    ...Pw(l),
    options: [l, s]
})
  , f4 = (l, s) => ({
    ...$w(l),
    options: [l, s]
})
  , d4 = (l, s) => ({
    ...s4(l),
    options: [l, s]
});
var m4 = "Arrow"
  , Fx = S.forwardRef( (l, s) => {
    const {children: o, width: c=10, height: f=5, ...m} = l;
    return u.jsx(mt.svg, {
        ...m,
        ref: s,
        width: c,
        height: f,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: l.asChild ? o : u.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Fx.displayName = m4;
var p4 = Fx;
function h4(l) {
    const [s,o] = S.useState(void 0);
    return $n( () => {
        if (l) {
            o({
                width: l.offsetWidth,
                height: l.offsetHeight
            });
            const c = new ResizeObserver(f => {
                if (!Array.isArray(f) || !f.length)
                    return;
                const m = f[0];
                let p, g;
                if ("borderBoxSize"in m) {
                    const v = m.borderBoxSize
                      , h = Array.isArray(v) ? v[0] : v;
                    p = h.inlineSize,
                    g = h.blockSize
                } else
                    p = l.offsetWidth,
                    g = l.offsetHeight;
                o({
                    width: p,
                    height: g
                })
            }
            );
            return c.observe(l, {
                box: "border-box"
            }),
            () => c.unobserve(l)
        } else
            o(void 0)
    }
    , [l]),
    s
}
var Wx = "Popper"
  , [Ix,Px] = sr(Wx)
  , [dS,$x] = Ix(Wx)
  , eg = "PopperAnchor"
  , tg = S.forwardRef( (l, s) => {
    const {__scopePopper: o, virtualRef: c, ...f} = l
      , m = $x(eg, o)
      , p = S.useRef(null)
      , g = kt(s, p)
      , v = S.useRef(null);
    return S.useEffect( () => {
        const h = v.current;
        v.current = c?.current || p.current,
        h !== v.current && m.onAnchorChange(v.current)
    }
    ),
    c ? null : u.jsx(mt.div, {
        ...f,
        ref: g
    })
}
);
tg.displayName = eg;
var Tu = "PopperContent"
  , [x4,g4] = Ix(Tu)
  , ng = S.forwardRef( (l, s) => {
    const {__scopePopper: o, side: c="bottom", sideOffset: f=0, align: m="center", alignOffset: p=0, arrowPadding: g=0, avoidCollisions: v=!0, collisionBoundary: h=[], collisionPadding: y=0, sticky: b="partial", hideWhenDetached: T=!1, updatePositionStrategy: R="optimized", onPlaced: _, ...A} = l
      , D = $x(Tu, o)
      , [Y,V] = S.useState(null)
      , Q = kt(s, ae => V(ae))
      , [K,J] = S.useState(null)
      , I = h4(K)
      , X = I?.width ?? 0
      , F = I?.height ?? 0
      , oe = c + (m !== "center" ? "-" + m : "")
      , xe = typeof y == "number" ? y : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...y
    }
      , ve = Array.isArray(h) ? h : [h]
      , he = ve.length > 0
      , je = {
        padding: xe,
        boundary: ve.filter(y4),
        altBoundary: he
    }
      , {refs: P, floatingStyles: fe, placement: O, isPositioned: k, middlewareData: H} = l4({
        strategy: "fixed",
        placement: oe,
        whileElementsMounted: (...ae) => Jw(...ae, {
            animationFrame: R === "always"
        }),
        elements: {
            reference: D.anchor
        },
        middleware: [i4({
            mainAxis: f + F,
            alignmentAxis: p
        }), v && r4({
            mainAxis: !0,
            crossAxis: !1,
            limiter: b === "partial" ? o4() : void 0,
            ...je
        }), v && c4({
            ...je
        }), u4({
            ...je,
            apply: ({elements: ae, rects: Ye, availableWidth: Re, availableHeight: At}) => {
                const {width: Xt, height: Zt} = Ye.reference
                  , na = ae.floating.style;
                na.setProperty("--radix-popper-available-width", `${Re}px`),
                na.setProperty("--radix-popper-available-height", `${At}px`),
                na.setProperty("--radix-popper-anchor-width", `${Xt}px`),
                na.setProperty("--radix-popper-anchor-height", `${Zt}px`)
            }
        }), K && d4({
            element: K,
            padding: g
        }), b4({
            arrowWidth: X,
            arrowHeight: F
        }), T && f4({
            strategy: "referenceHidden",
            ...je
        })]
    })
      , [se,ue] = sg(O)
      , N = Pn(_);
    $n( () => {
        k && N?.()
    }
    , [k, N]);
    const q = H.arrow?.x
      , Z = H.arrow?.y
      , W = H.arrow?.centerOffset !== 0
      , [re,de] = S.useState();
    return $n( () => {
        Y && de(window.getComputedStyle(Y).zIndex)
    }
    , [Y]),
    u.jsx("div", {
        ref: P.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...fe,
            transform: k ? fe.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: re,
            "--radix-popper-transform-origin": [H.transformOrigin?.x, H.transformOrigin?.y].join(" "),
            ...H.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: l.dir,
        children: u.jsx(x4, {
            scope: o,
            placedSide: se,
            onArrowChange: J,
            arrowX: q,
            arrowY: Z,
            shouldHideArrow: W,
            children: u.jsx(mt.div, {
                "data-side": se,
                "data-align": ue,
                ...A,
                ref: Q,
                style: {
                    ...A.style,
                    animation: k ? void 0 : "none"
                }
            })
        })
    })
}
);
ng.displayName = Tu;
var ag = "PopperArrow"
  , v4 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , lg = S.forwardRef(function(s, o) {
    const {__scopePopper: c, ...f} = s
      , m = g4(ag, c)
      , p = v4[m.placedSide];
    return u.jsx("span", {
        ref: m.onArrowChange,
        style: {
            position: "absolute",
            left: m.arrowX,
            top: m.arrowY,
            [p]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[m.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[m.placedSide],
            visibility: m.shouldHideArrow ? "hidden" : void 0
        },
        children: u.jsx(p4, {
            ...f,
            ref: o,
            style: {
                ...f.style,
                display: "block"
            }
        })
    })
});
lg.displayName = ag;
function y4(l) {
    return l !== null
}
var b4 = l => ({
    name: "transformOrigin",
    options: l,
    fn(s) {
        const {placement: o, rects: c, middlewareData: f} = s
          , p = f.arrow?.centerOffset !== 0
          , g = p ? 0 : l.arrowWidth
          , v = p ? 0 : l.arrowHeight
          , [h,y] = sg(o)
          , b = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[y]
          , T = (f.arrow?.x ?? 0) + g / 2
          , R = (f.arrow?.y ?? 0) + v / 2;
        let _ = ""
          , A = "";
        return h === "bottom" ? (_ = p ? b : `${T}px`,
        A = `${-v}px`) : h === "top" ? (_ = p ? b : `${T}px`,
        A = `${c.floating.height + v}px`) : h === "right" ? (_ = `${-v}px`,
        A = p ? b : `${R}px`) : h === "left" && (_ = `${c.floating.width + v}px`,
        A = p ? b : `${R}px`),
        {
            data: {
                x: _,
                y: A
            }
        }
    }
});
function sg(l) {
    const [s,o="center"] = l.split("-");
    return [s, o]
}
var w4 = tg
  , S4 = ng
  , N4 = lg
  , j4 = Symbol("radix.slottable");
function E4(l) {
    const s = ({children: o}) => u.jsx(u.Fragment, {
        children: o
    });
    return s.displayName = `${l}.Slottable`,
    s.__radixId = j4,
    s
}
var [mr] = sr("Tooltip", [Px])
  , Au = Px()
  , ig = "TooltipProvider"
  , T4 = 700
  , Ah = "tooltip.open"
  , [A4,rg] = mr(ig)
  , og = l => {
    const {__scopeTooltip: s, delayDuration: o=T4, skipDelayDuration: c=300, disableHoverableContent: f=!1, children: m} = l
      , p = S.useRef(!0)
      , g = S.useRef(!1)
      , v = S.useRef(0);
    return S.useEffect( () => {
        const h = v.current;
        return () => window.clearTimeout(h)
    }
    , []),
    u.jsx(A4, {
        scope: s,
        isOpenDelayedRef: p,
        delayDuration: o,
        onOpen: S.useCallback( () => {
            window.clearTimeout(v.current),
            p.current = !1
        }
        , []),
        onClose: S.useCallback( () => {
            window.clearTimeout(v.current),
            v.current = window.setTimeout( () => p.current = !0, c)
        }
        , [c]),
        isPointerInTransitRef: g,
        onPointerInTransitChange: S.useCallback(h => {
            g.current = h
        }
        , []),
        disableHoverableContent: f,
        children: m
    })
}
;
og.displayName = ig;
var cg = "Tooltip"
  , [mS,ws] = mr(cg)
  , iu = "TooltipTrigger"
  , O4 = S.forwardRef( (l, s) => {
    const {__scopeTooltip: o, ...c} = l
      , f = ws(iu, o)
      , m = rg(iu, o)
      , p = Au(o)
      , g = S.useRef(null)
      , v = kt(s, g, f.onTriggerChange)
      , h = S.useRef(!1)
      , y = S.useRef(!1)
      , b = S.useCallback( () => h.current = !1, []);
    return S.useEffect( () => () => document.removeEventListener("pointerup", b), [b]),
    u.jsx(w4, {
        asChild: !0,
        ...p,
        children: u.jsx(mt.button, {
            "aria-describedby": f.open ? f.contentId : void 0,
            "data-state": f.stateAttribute,
            ...c,
            ref: v,
            onPointerMove: Fe(l.onPointerMove, T => {
                T.pointerType !== "touch" && !y.current && !m.isPointerInTransitRef.current && (f.onTriggerEnter(),
                y.current = !0)
            }
            ),
            onPointerLeave: Fe(l.onPointerLeave, () => {
                f.onTriggerLeave(),
                y.current = !1
            }
            ),
            onPointerDown: Fe(l.onPointerDown, () => {
                f.open && f.onClose(),
                h.current = !0,
                document.addEventListener("pointerup", b, {
                    once: !0
                })
            }
            ),
            onFocus: Fe(l.onFocus, () => {
                h.current || f.onOpen()
            }
            ),
            onBlur: Fe(l.onBlur, f.onClose),
            onClick: Fe(l.onClick, f.onClose)
        })
    })
}
);
O4.displayName = iu;
var Ou = "TooltipPortal"
  , [C4,R4] = mr(Ou, {
    forceMount: void 0
})
  , ug = l => {
    const {__scopeTooltip: s, forceMount: o, children: c, container: f} = l
      , m = ws(Ou, s);
    return u.jsx(C4, {
        scope: s,
        forceMount: o,
        children: u.jsx(ir, {
            present: o || m.open,
            children: u.jsx(pu, {
                asChild: !0,
                container: f,
                children: c
            })
        })
    })
}
;
ug.displayName = Ou;
var dl = "TooltipContent"
  , fg = S.forwardRef( (l, s) => {
    const o = R4(dl, l.__scopeTooltip)
      , {forceMount: c=o.forceMount, side: f="top", ...m} = l
      , p = ws(dl, l.__scopeTooltip);
    return u.jsx(ir, {
        present: c || p.open,
        children: p.disableHoverableContent ? u.jsx(dg, {
            side: f,
            ...m,
            ref: s
        }) : u.jsx(z4, {
            side: f,
            ...m,
            ref: s
        })
    })
}
)
  , z4 = S.forwardRef( (l, s) => {
    const o = ws(dl, l.__scopeTooltip)
      , c = rg(dl, l.__scopeTooltip)
      , f = S.useRef(null)
      , m = kt(s, f)
      , [p,g] = S.useState(null)
      , {trigger: v, onClose: h} = o
      , y = f.current
      , {onPointerInTransitChange: b} = c
      , T = S.useCallback( () => {
        g(null),
        b(!1)
    }
    , [b])
      , R = S.useCallback( (_, A) => {
        const D = _.currentTarget
          , Y = {
            x: _.clientX,
            y: _.clientY
        }
          , V = H4(Y, D.getBoundingClientRect())
          , Q = L4(Y, V)
          , K = q4(A.getBoundingClientRect())
          , J = Y4([...Q, ...K]);
        g(J),
        b(!0)
    }
    , [b]);
    return S.useEffect( () => () => T(), [T]),
    S.useEffect( () => {
        if (v && y) {
            const _ = D => R(D, y)
              , A = D => R(D, v);
            return v.addEventListener("pointerleave", _),
            y.addEventListener("pointerleave", A),
            () => {
                v.removeEventListener("pointerleave", _),
                y.removeEventListener("pointerleave", A)
            }
        }
    }
    , [v, y, R, T]),
    S.useEffect( () => {
        if (p) {
            const _ = A => {
                const D = A.target
                  , Y = {
                    x: A.clientX,
                    y: A.clientY
                }
                  , V = v?.contains(D) || y?.contains(D)
                  , Q = !B4(Y, p);
                V ? T() : Q && (T(),
                h())
            }
            ;
            return document.addEventListener("pointermove", _),
            () => document.removeEventListener("pointermove", _)
        }
    }
    , [v, y, p, h, T]),
    u.jsx(dg, {
        ...l,
        ref: m
    })
}
)
  , [M4,D4] = mr(cg, {
    isInside: !1
})
  , _4 = E4("TooltipContent")
  , dg = S.forwardRef( (l, s) => {
    const {__scopeTooltip: o, children: c, "aria-label": f, onEscapeKeyDown: m, onPointerDownOutside: p, ...g} = l
      , v = ws(dl, o)
      , h = Au(o)
      , {onClose: y} = v;
    return S.useEffect( () => (document.addEventListener(Ah, y),
    () => document.removeEventListener(Ah, y)), [y]),
    S.useEffect( () => {
        if (v.trigger) {
            const b = T => {
                T.target?.contains(v.trigger) && y()
            }
            ;
            return window.addEventListener("scroll", b, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", b, {
                capture: !0
            })
        }
    }
    , [v.trigger, y]),
    u.jsx(mu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: m,
        onPointerDownOutside: p,
        onFocusOutside: b => b.preventDefault(),
        onDismiss: y,
        children: u.jsxs(S4, {
            "data-state": v.stateAttribute,
            ...h,
            ...g,
            ref: s,
            style: {
                ...g.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [u.jsx(_4, {
                children: c
            }), u.jsx(M4, {
                scope: o,
                isInside: !0,
                children: u.jsx(U0, {
                    id: v.contentId,
                    role: "tooltip",
                    children: f || c
                })
            })]
        })
    })
}
);
fg.displayName = dl;
var mg = "TooltipArrow"
  , U4 = S.forwardRef( (l, s) => {
    const {__scopeTooltip: o, ...c} = l
      , f = Au(o);
    return D4(mg, o).isInside ? null : u.jsx(N4, {
        ...f,
        ...c,
        ref: s
    })
}
);
U4.displayName = mg;
function H4(l, s) {
    const o = Math.abs(s.top - l.y)
      , c = Math.abs(s.bottom - l.y)
      , f = Math.abs(s.right - l.x)
      , m = Math.abs(s.left - l.x);
    switch (Math.min(o, c, f, m)) {
    case m:
        return "left";
    case f:
        return "right";
    case o:
        return "top";
    case c:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function L4(l, s, o=5) {
    const c = [];
    switch (s) {
    case "top":
        c.push({
            x: l.x - o,
            y: l.y + o
        }, {
            x: l.x + o,
            y: l.y + o
        });
        break;
    case "bottom":
        c.push({
            x: l.x - o,
            y: l.y - o
        }, {
            x: l.x + o,
            y: l.y - o
        });
        break;
    case "left":
        c.push({
            x: l.x + o,
            y: l.y - o
        }, {
            x: l.x + o,
            y: l.y + o
        });
        break;
    case "right":
        c.push({
            x: l.x - o,
            y: l.y - o
        }, {
            x: l.x - o,
            y: l.y + o
        });
        break
    }
    return c
}
function q4(l) {
    const {top: s, right: o, bottom: c, left: f} = l;
    return [{
        x: f,
        y: s
    }, {
        x: o,
        y: s
    }, {
        x: o,
        y: c
    }, {
        x: f,
        y: c
    }]
}
function B4(l, s) {
    const {x: o, y: c} = l;
    let f = !1;
    for (let m = 0, p = s.length - 1; m < s.length; p = m++) {
        const g = s[m]
          , v = s[p]
          , h = g.x
          , y = g.y
          , b = v.x
          , T = v.y;
        y > c != T > c && o < (b - h) * (c - y) / (T - y) + h && (f = !f)
    }
    return f
}
function Y4(l) {
    const s = l.slice();
    return s.sort( (o, c) => o.x < c.x ? -1 : o.x > c.x ? 1 : o.y < c.y ? -1 : o.y > c.y ? 1 : 0),
    G4(s)
}
function G4(l) {
    if (l.length <= 1)
        return l.slice();
    const s = [];
    for (let c = 0; c < l.length; c++) {
        const f = l[c];
        for (; s.length >= 2; ) {
            const m = s[s.length - 1]
              , p = s[s.length - 2];
            if ((m.x - p.x) * (f.y - p.y) >= (m.y - p.y) * (f.x - p.x))
                s.pop();
            else
                break
        }
        s.push(f)
    }
    s.pop();
    const o = [];
    for (let c = l.length - 1; c >= 0; c--) {
        const f = l[c];
        for (; o.length >= 2; ) {
            const m = o[o.length - 1]
              , p = o[o.length - 2];
            if ((m.x - p.x) * (f.y - p.y) >= (m.y - p.y) * (f.x - p.x))
                o.pop();
            else
                break
        }
        o.push(f)
    }
    return o.pop(),
    s.length === 1 && o.length === 1 && s[0].x === o[0].x && s[0].y === o[0].y ? s : s.concat(o)
}
var k4 = og
  , Q4 = ug
  , pg = fg;
const V4 = k4
  , X4 = S.forwardRef( ({className: l, sideOffset: s=4, ...o}, c) => u.jsx(Q4, {
    children: u.jsx(pg, {
        ref: c,
        sideOffset: s,
        className: Tt("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", l),
        ...o
    })
}));
X4.displayName = pg.displayName;
const Z4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEUqBXX///8oAHQAAGkgAHEdAHApAHUQAGwkAHMIAGsXAG4AAGf29Pny8Pb6+fz9/P7CvNTg3Om1rsvn5O+WjLXt6/NOOYiqosM8In/HwdczFXp0Zp/Uz+Gvp8bj4OuEeKnNyNxVQoyOg7DZ1OVfTpJwYpyZj7dIMoWhmbxkVJVqW5l5baJZRo4zE3pNNokAAGCAc6ZAKIE5HX2GfalNMopkV5SbjrqNbXmhAAALE0lEQVR4nO2caXfauhaGrckawAwGMxNmYqYWSM/9/z/tassGzJyTdbqwWHo+tA1Nu/zG0p4lz3M4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcOQSHwtBKaNUYP/Vz/Kfg6nikvl/pquv8aC7/uxg/OpH+i/BjPNFPIzKCEXDsFkfDAbL6Z/3kSi4v20jLS4c7JTkSjFYp+JtBAoyAnmT8Y5wJt5v+wky7SEUxJ5k4tXP8ldQHdA34OptluQ5mNQRKtcJe7+1mSDkEKGhp179HH8N2qkhNCZvuj41dF9E5TV/9WP8PYQfoNKOvfox/h6YVBEavbFATzUR2r6vjdHIGmqTVz/E3wSrAG0ugxghmNIJhgGiU6sjU0xReGZGhQ65d9OvOBxWgV6lHw+me8mtjeWwQPXTLqRcruNeCV0RDMctaac5wh4ap0+OGVlUitfqDtTsNEgnhVRuP+7LM3g27keM0RcoxGQZPdGHUN/Gl6gtDSjEqvJUn96NysLcA6uiVohZ7RsCEWrYaFBlpBWK9bcEorqN5lRWtUI2/p7Cpo0bUSukJjj9DhUbcyxZHVCPD99Z4ceWapnfkFeKgtjKVfrRpR55akqr4wblxEZDo23pTCt87O1L8Y7Ym2CQaCFO77BYx/5uFQ/LGX3lOVMCM2qrQhmstcI0Iu0rnSUJqiSd9Q4CQ19hITvjlS9t9Peg8JdILU0w+s2mWyz128KUfE7gs2gksadGxtb21lZK5MUW9jhEpZOpSQ3L7RXh1PcECRFqS6p/CF+HNSxf/bQ/QRU3WuGFx6/MsJa400GMdoAKAp5gMhwOQxudhc8CgbEoowu0k6QL4+JFA30MNlCx4TYK1BsuYli2M9qCynb2a6eXLl1pNyg9FXYLzFY76kGOH3FYjkeahLOk7wvheE3vPEpZ8vLs7LzhTiBVfBK4Sho0WBsYNde+nut3SerzglKq0GzZKFHsIiknxxXa4P5GMcXpSgc64BIpFgsdDtSa834P7axU+KsmyUHghCkyQdt6HKIvBk1ThHZChQdfMZVKSdusDVaVGhHXkeiEJALRjLJB+lkpnM+bH3O7JGJeRTXSuRIYkFYatQ2Y+Dz7q5K0aqnyEMzl1TuMFkf3oV+ZPK8SW1WNwh0UVSNeuFSYkRRyj7fP/nJAX/3Y/wK9xdZhmT3Kf9vcO27EhLFNabBqIjJAnuzdkYdMUIP9s0++rFIYI18GIxnekQcLlujc4qxO9Y9Nq5R20Uw1Fqp+X2FJx290mZVsVeyGmbYkOqef3leoXb72KaeN2rMsCOdhWb8SvL8lLWp/6HS4CpEalstUY9W2uSKdVawgiQ+u9E2mhJNOw08VUZLsxZZNztAgezVtSq5L3uPfYE/wqYKICYTnoX1lDJ3Az5jJk84p7rlKJjExpWk+VUZoapMdTZGVIsda55UNbfajpiJcqu2SGamsi0o21ky1O28Toq4U1qByU560TfWtaaJtMgysHC3SryaaXBWi4vNIrcd9KHjU7NuGAL/RHZ0VLmZq+tBWo4tXP+sPUbt5s34Wmm7JSsfcVYQqn/UIjbs6qtvDOrXOVRyAKbZNRmCFqOZQEL/9Swol94pyv2ZlB/+MbJq7EaLBobgGk3ukoA2REFZlhTfJZFA9bTEZjeO4WelVq7WgjGKFrRfoZWqmsfJY4zyOs3Lc6wJoUqSMGTURQBBF1V67Eobx2H8DhZgdfeKAMXiDcx16m3aMUpZlTHc4dWfqhb7+tWZbnvQUOjsonJu6DMzVYhvj0PvIQyJfMZmGzgRFZ9t5J4nHakzNjC1ILDbFZAZ8w+z3FQZyNmIqzFET1BE6D+7NrN+UGCJOnKzT9h+jcMG38BtMI6q+Tu6tlojVfgGRtWiBvy+skmzit1msETSBt1bWL44IvotXicdjC9QkLJktKad5/0hbnJH+3c5ZGg8OV35W+puDJVFdhVOFh/bMYYLYysFLKBI2etURP+0xmnWMhlAln3zYWMGgZDpBX+S0/MyfzG6Ed5ik+T2ezEgXrVOIaWFZRSHNZLZiChJ9lazPOJnIhIkaiOIi2xQyuaqhj19nToBPTI8+bTWlBxS0QlMw7lllTLEiA/2GBuTMPopGkgcmHdHe72QyeiI9M41i03kZrFhdL8SQnZ7ZKNWLcWAOCCnYgeNC0lXUNtTMZq6sidwEF7FW8LE+LVBGuzDtRILUJZizCTuVVBl1UGMa+bYkwULuwWyUx6cFSslXCC0lyPKLUPnVRkj/CEg6ZbKk0EhFlhSDhdyZpVfxjwuUkm4UG4cIkydoYdaiGugEOB3+hq2ps+PQCocvGyaPjxbHTIGSxUcpuWwg2X2V5FUVJh/SYxCgDuEDX4ZWzCekB/Dm8mAzBHj8YZr8wVI0SRN8gb2KSnKNxMBgZYWdMV6gtjmeIaSNYeY6jLRO00xWI/b1d+mIO7Ira4IzB4E8CMRC6/1Uma8M+8QEme/i/YENi/OEqYke27gwnzA+2o/j4FOvkP0XtqVMMBN7nLeHxu9p+P5U1Z/b4RduA6nsMYKm/2SSvuxk14D8+LTv6zctFJsOyToYz+FB4dlYVFP+zHJi7/WD4GJ/OumaHjZIIGcHEGszorI7EIvv7EfsLXOwbXkfohUD2JbD6MHFHLDWOB9JYnoWnEuiGrPnzy78/+XB8MLpmF3ytDBEE6RjeNnzCEeqw7DZDCvDSfCdoVLhh/m4YFHrSo+6QuZeSjOGwpP7FJ7fYCNEb5+DNeqZGwaqyeOaUwbJCQpTLnxA8WmHRvi1UV4CO739kvE7cyKvcch9H7J8tkYFjbr5qQEUgmSuwuS1JsLx+fVsYpb+sxhA+MV6jrIr2k18hIliTOoAvv8BT6NvIYphripxpGrsizn7O4fXyR/fa/Jsg9FNsZev3pSYmmUqwX6CXcXyaqwty/zJ+tMCc5djKePdFCiEGiFdPRJYzeQat3TQfbF0dVnYq8G7DgxfQGm7zS8PG1ySmXsWnc3V/0VbRdTIi584YWZ/fVibk6sDIxcMjk4A8+Xi6l2BwBz5iTOwObGmvf/FoZ9zhkcbKWR/cCWF/imhel7zyaTFpENv8uBMUOlYB1a72vbS5GC1K6FKrvxEFvHLaCDi+vThidnhKjcyRt0LgZjJVRnlzE9kSa+GEo+OBB2a90wM0fJ8iabNnSjHM0Vpq7dF7l++EyW5FSbLEpqeCYTmDkR6QU7yiZukBmbauv8K18YLUDjadiZQcL8JBfJooHIs0GPJKZLlrdw3oWnWKG/oxbjOCBSyZZof1S7J98xieoqke/f8qBlNEOZId0YgJQ0TxfamJH9+/gJpnvR+ZvipV6DyoP3bOKSHmJqr6XUoNMq/Pv24Zjz/btA9VtrEQMRaPgpksmvMUtiy5Lahy0tpzpgUPJpkVZ+JQHAPZkU3N9wOfWmr9w5lX8gp+IP0pm+sBPT+UXGubDol+8DZrzgxRra0g/12dA9jq/RpyL07dSu/W2YysQgCD73x6irn7uEGrHtbYFBIwoFii2qHn/TGJ0srb9xjm5tH8ddJPzjYU0oWxj0M1za4h1tg3rouQ/WS4mLQ4al7qHxa4h5uImTjdhUjooUv4x76e5v1AYKMbiTBH6l7iKk17u8Bgiwuc6gIRsNQccwscw93oYXZdQheG5B30QdQuT1vsVVnll6kfxfMyNcpAoDs6I3e3wGm6kmo2m78cFgh92DFYouyox+B1abzDu7hEfmYN3A4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDzn/wZgm0XGganTAAAAAElFTkSuQmCC"
  , Oh = [{
   href: "/tolyq_adam",
    label: "Толық Адам"
},{
    href: "/#biography",
    label: "Өмірбаяны"
}, {
    href: "/book-of-words",
    label: "Қара сөздер"
},  {
    href: "/#poetry",
    label: "Өлеңдер"
}, {
    href: "/#abai_tanu",
    label: "Абайтану"
}, {
    href: "/iran-gaiyp",
    label: "Иран-Ғайып"
}, {
    href: "/tests",
    label: "Тест"
}, ];
function gl() {
    const [l,s] = S.useState(!1);
    return S.useEffect( () => {
        document.body.style.overflow = l ? "hidden" : "unset"
    }
    , [l]),
    u.jsxs("nav", {
        className: "fixed top-0 w-full z-[9999] bg-white border-b border-gray-200 h-20",
        children: [u.jsxs("div", {
            className: "container mx-auto px-6 h-full flex items-center justify-between",
            children: [u.jsx(hb, {
                href: "/",
                children: u.jsx("a", {
                    className: "z-[10001]",
                    children: u.jsx("img", {
                        src: Z4,
                        alt: "Logo",
                        className: "h-12 w-12 rounded-full object-cover"
                    })
                })
            }), u.jsx("div", {
                className: "hidden md:flex items-center gap-8",
                children: Oh.map(o => u.jsx("a", {
                    href: o.href,
                    className: "text-sm font-medium hover:text-primary uppercase tracking-tighter",
                    children: o.label
                }, o.href))
            }), u.jsx("button", {
                className: "md:hidden p-2 text-black z-[10001] relative",
                onClick: () => s(!l),
                children: l ? u.jsx(bx, {
                    size: 32
                }) : u.jsx(c1, {
                    size: 32
                })
            })]
        }), u.jsx("div", {
            className: `fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${l ? "opacity-100 visible" : "opacity-0 invisible"} z-[9999]`,
            onClick: () => s(!1)
        }), u.jsx("div", {
            className: `fixed top-0 right-0 h-screen w-[75%] sm:w-[50%] transform transition-transform duration-500 ease-in-out md:hidden z-[10000] ${l ? "translate-x-0" : "translate-x-full"}`,
            style: {
                backgroundColor: "#ffffff",
                boxShadown: "-10px 0 30px rgba(0,0,0,0.2)"
            },
            children: u.jsx("div", {
                className: "flex flex-col h-full items-center justify-center space-y-8 px-6",
                children: Oh.map( (o, c) => u.jsx("a", {
                    href: o.href,
                    onClick: () => s(!1),
                    className: `text-lg font-bold text-black uppercase text-center transition-all transform ${l ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`,
                    style: {
                        transitionDelay: l ? `${c * 60}ms` : "0ms",
                        display: "block"
                    },
                    children: o.label
                }, o.href))
            })
        })]
    })
}
const K4 = "/static/abai-muse/assets/abai-portrait2-DR-h9pZM.png"
  , vl = "/static/abai-muse/assets/kazakh-pattern-Ba0p9xHQ.png"
  , Nn = S.forwardRef( ({className: l, ...s}, o) => u.jsx("div", {
    ref: o,
    className: Tt("rounded-xl border bg-card text-card-foreground shadow", l),
    ...s
}));
Nn.displayName = "Card";
const J4 = S.forwardRef( ({className: l, ...s}, o) => u.jsx("div", {
    ref: o,
    className: Tt("flex flex-col space-y-1.5 p-6", l),
    ...s
}));
J4.displayName = "CardHeader";
const F4 = S.forwardRef( ({className: l, ...s}, o) => u.jsx("div", {
    ref: o,
    className: Tt("font-semibold leading-none tracking-tight", l),
    ...s
}));
F4.displayName = "CardTitle";
const W4 = S.forwardRef( ({className: l, ...s}, o) => u.jsx("div", {
    ref: o,
    className: Tt("text-sm text-muted-foreground", l),
    ...s
}));
W4.displayName = "CardDescription";
const jn = S.forwardRef( ({className: l, ...s}, o) => u.jsx("div", {
    ref: o,
    className: Tt("p-6 pt-0", l),
    ...s
}));
jn.displayName = "CardContent";
const I4 = S.forwardRef( ({className: l, ...s}, o) => u.jsx("div", {
    ref: o,
    className: Tt("flex items-center p-6 pt-0", l),
    ...s
}));
I4.displayName = "CardFooter";
const P4 = "/static/abai-muse/assets/abautAbai-CYuNmZ-6.mp4";
function $4() {
    const [l,s] = S.useState(null);
    S.useEffect( () => {
        if (l === null)
            return;
        const c = f => {
            f.key === "Escape" && s(null)
        }
        ;
        return window.addEventListener("keydown", c),
        () => window.removeEventListener("keydown", c)
    }
    , [l]);
    const o = [{
        title: "Көктем",
        preview: ["Жазғытұры қалмайды қыстың сызы,", "Масатыдай құлпырар жердің жүзі."],
        full: ["Жазғытұры қалмайды қыстың сызы,", "Масатыдай құлпырар жердің жүзі.", "Жан-жануар, адамзат анталаса,", "Ата-анадай елжірер күннің көзі.", "Жаздың көркі енеді жыл құсымен,", "Жайраңдасып жас күлер құрбысымен.", "Көрден жаңа тұрғандай кемпір мен шал,", "Жалбаңдасар өзінің тұрғысымен.", "Қырдағы ел ойдағы елмен араласып,", "Күлімдесіп, көрісіп, құшақтасып.", "Шаруа қуған жастардың мойыны босап,", "Сыбырласып, сырласып, мауқын басып.", "Түйе боздап, қой қоздап - қора да шу,", "Көбелекпен, құспенен сай да ду-ду.", "Гүл мен ағаш майысып қарағанда,", "Сыбдыр қағып, бұраңдап ағады су.", "Көл жағалай мамырлап қу менен қаз,", "Жұмыртқа іздеп, жүгіріп балалар мәз.", "Ұшқыр атпен зырлатып тастағанда,", "Жарқ-жүрқ етіп ілінер көк дауылпаз.", "Құс қатарлап байлаған қанжығаға", "Қыз бұраңдап жабысып, қылады наз.", "Жазға жақсы киінер қыз-келіншек,", "Жер жүзіне өң берер гүл-бәйшешек.", "Қырда торғай сайраса, сайда - бұлбұл,", "Тастағы үнін қосар байғыз, көкек.", "Жаңа пұлмен жамырап саудагерлер,", "Диханшылар жер жыртып, егін егер.", "Шаруаның бір малы екеу болып,", "Жаңа төлмен көбейіп, дәулет өнер.", "Безендіріп жер жүзін Тәңірім шебер,", "Мейірбандық дүниеге нұрын төгер.", "Анамыздай жер иіп емізгенде,", "Бейне әкеңдей үстіңе аспан төнер.", "Жаз жіберіп, жан берген қара жерге", "Рахметіне Алланың көңіл сенер.", "Мал семірер, ақ пенен ас көбейер,", "Адамзаттың көңілі өсіп көтерілер.", "Қара тастан басқаның бәрі жадырап,", "Бір сараңнан басқаның пейілі енер.", "Тамашалап қарасаң Тәңірі ісіне,", "Бойың балқып, ериді іште жігер.", "Кемпір-шал шуақ іздеп, бала шулар,", "Мал мазатсып, қуанып, аунап-қунар.", "Жыршы құстар әуеде өлең айтып,", "Қиқу салар көлдегі қаз бен қулар.", "Күн жоқта кісімсінер жұлдыз бен ай,", "Ол қайтсін қара түнде жарқылдамай,", "Таң атқан соң шығарын күннің біліп,", "Өңі қашып, бола алмас бұрынғыдай.", "Күн - күйеу, жер - қалыңдық сағынышты,", "Құмары екеуінің сондай күшті.", "Түн қырындап жүргенде көп қожаңдап,", "Күйеу келді, ай, жүлдыз к... қысты.", "Ай, жұлдызға жылы жел хабар беріп,", "Жан-жануар қуанар тойға елеріп.", "Азалы ақ көрпесін сілке тастап,", "Жер күлімдер, өзіне шырай беріп.", "Күн - күйеуін жер көксеп ала қыстай,", "Біреуіне біреуі қосылыспай,", "Көңілі күн лебіне тойғаннан соң,", "Жер толықсып, түрленер тоты құстай.", "Адам тіктеп көре алмас күннің көзін,", "Сүйіп, жылып тұрады жан лебізін.", "Қызыл арай сары алтын шатырына,", "Күннің кешке кіргенін көрді көзім."]
    }, {
        title: "Жаз",
        preview: ["Жаздыгүн шілде болғанда,", "Көкорай шалғын, бәйшешек..."],
        full: ["Жаздыгүн шілде болғанда,", "Көкорай шалғын, бәйшешек,", "Ұзарып өсіп толғанда;", "Күркіреп жатқан өзенге,", "Көшіп ауыл қонғанда;", "Шұрқырап жатқан жылқының", "Шалғыннан жоны қылтылдап,", "Ат, айғырлар, биелер", "Бүйірі шығып, ыңқылдап,", "Суда тұрып шыбындап,", "Кұйрығымен шылпылдап,", "Арасында кұлын-тай", "Айнала шауып бұлтылдап.", "Жоғары-төмен үйрек, қаз", "Ұшып тұрса сымпылдап.", "Қыз-келіншек үй тігер,", "Бұрала басып былқылдап,", "Ақ білегін сыбанып,", "Әзілдесіп сыңқылдап.", "Мал ішінен айналып,", "Көңілі жақсы жайланып,", "Бай да келер ауылға,", "Аяңшылы жылпылдап;", "Сабадан қымыз құйдырып,", "Ортасына қойдырып,", "Жасы үлкендер бір бөлек", "Кеңесіп, күліп сылқылдап.", "Жалшы алдаған жас бала,", "Жағалайды шешесін", "Ет әпер деп қыңқылдап.", "Көлеңке қылып басына,", "Кілем төсеп астына,", "Салтанатты байлардың", "Самаурыны бұрқылдап."]
    }, {
        title: "Күз",
        preview: ["Сұр бұлт түсі суық қаптайды аспан,", "Күз болып, дымқыл тұман жерді басқан."],
        full: ["Сұр бұлт түсі суық қаптайды аспан,", "Күз болып, дымқыл тұман жерді басқан.", "Білмеймін тойғаны ма, тоңғаны ма,", "Жылқы ойнап, бие қашқан, тай жарысқан.", "Жасыл шөп, бәйшешек жоқ бұрынғыдай,", "Жастар күлмес, жүгірмес бала шулай.", "Қайыршы шал-кемпірдей түсі кетіп,", "Жапырағынан айрылған ағаш, қурай.", "Біреу малма сапсиды, салып иін,", "Салбыраңқы тартыпты жыртық киім.", "Енесіне иіртіп шуда жібін,", "Жас қатындар жыртылған жамайды үйін.", "Қаз, тырна қатарланып қайтса бермен,", "Астында ақ шомшы жүр, ол бір керуен.", "Қай ауылды көрсең де, жабырқаңқы,", "Күлкі-ойын көрінбейді, сейіл-серуен.", "Кемпір-шал құржаң қағып, бала бүрсең,", "Көңілсіз қара суық қырда жүрсең.", "Кемік сүйек, сорпа-су тимеген соң,", "Үйде ит жоқ, тышқан аулап, қайда көрсең.", "Күзеу тозған, оты жоқ елдің маңы,", "Тұман болар, жел соқса, шаң-тозаңы.", "От жақпаған үйінің сұры қашып,", "Ыстан қорыққан қазақтың құрысын заңы."]
    }, {
        title: "Қыс",
        preview: ["Ақ киімді, денелі, ақ сақалды,", "Соқыр, мылқау, танымас тірі жанды."],
        full: ["Ақ киімді, денелі, ақ сақалды,", "Соқыр, мылқау, танымас тірі жанды.", "Үсті-басы ақ қырау, түсі суық,", "Басқан жері сықырлап, келіп қалды.", "Дем алысы – үскірік, аяз бен қар,", "Кәрі құдаң – қыс келіп, әлек салды.", "Ұшпадай бөркін киген оқшырайтып,", "Аязбенен қызарып ажарланды.", "Бұлттай қасы жауып екі көзін,", "Басын сіліксе, қар жауып, мазаңды алды.", "Борандай бұрқ-сарқ етіп долданғанда,", "Алты қанат ақ орда үй шайқалды.", "Әуес көріп жүгірген жас балалар,", "Беті-қолы домбығып, үсік шалды.", "Шидем мен тон қабаттап киген малшы", "Бет қарауға шыдамай теріс айналды.", "Қар тепкенге қажымыс қайран жылқы", "Титығы құруына аз-ақ қалды.", "Қыспен бірге тұмсығын салды қасқыр,", "Малшыларым, қор қылма итке малды.", "Соныға малды жайып, күзетіңдер,", "Ұйқы өлтірмес, қайрат қыл, бұз қамалды!", "Ит жегенше Қондыбай, Қанай жесін,", "Құр жібер мына антұрған кәрі шалды."]
    }, {
        title: "Әсемпаз болма әрнеге",
        preview: ["Сен де — бір кірпіш, дүниеге", "Кетігін тап та, бар қалан!"],
        full: ["Әсемпаз болма әрнеге,", "Өнерпаз болсаң, арқалан.", "Сен де — бір кірпіш, дүниеге", "Кетігін тап та, бар қалан!", "Қайрат пен ақыл жол табар", "Қашқанға да, қуғанға.", "Әділет, шапқат кімде бар,", "Сол жарасар туғанға.", "Бастапқы екеу соңғысыз", "Біте қалса қазаққа,", "Алдың — жалын, артың — мұз,", "Барар едің қай жаққа?", "Пайданы көрсең бас ұрып,", "Мақтанды іздеп, қайғы алма.", "Мініңді ұрлап жасырып,", "Майданға түспей бәйгі алма.", "Өзіңде бармен көзге ұрып,", "Артылам деме өзгеден.", "Күндестігін қоздырып,", "Азапқа қалма езбеден.", "Ақырын жүріп, анық бас,", "Еңбегің кетпес далаға.", "Ұстазтық қылған жалықпас", "Үйретуден балаға.", "Көлеңке басын ұзартып,", "Алысты көзден жасырса;", "Күнді уақыт қызартып,", "Көкжиектен асырса;", "Күңгірт көңілім сырласар", "Сұрғылт тартқан бейуаққа,", "Төмен қарап мұңдасар,", "Ой жіберіп әр жаққа.", "Өткен өмір - қу соқпақ,", "Қыдырады талайды.", "Кім алдады, кім тоқпақ", "Салды, соны санайды,", "Нені тапсаң, оны тап,", "Жарамайды керекке.", "Өңкей уды жиып ап,", "Себеді сорлы жүрекке.", "Адасқан күшік секілді", "Ұлып жұртқа қайтқан ой", "Өкінді, жолың бекінді,", "Әуре болма, оны қой.", "Ермен шықты, ит қылып,", "Бидай шашқан егінге.", "Жай жүргенді уерд қылып,", "Тыныш өлсеңші тегінде."]
    }, {
        title: "Білімдіден шыққан сөз",
        preview: ["Білімдіден шыққан сөз", "Талаптыға болсын кез."],
        full: ["Білімдіден шыққан сөз", "Талаптыға болсын кез.", "Нұрын, сырын көруге,", "Көкірегінде болсын көз.", "Жүрегі - айна, көңілі - ояу,", "Сөз тыңдамас ол баяу.", "Өз өнері тұр таяу,", "Ұқпасын ба сөзді тез?", "Әбілет басқан елерме,", "Сөзге жуық келер ме?", "Түзу сөзге сенер ме,", "Түзелмесін білген ез?", "«Айтшы айтшылап» жалынар,", "Ұққыш жансып шабынар.", "Ұқпай жатып жалығар,", "Ұйқылы-ояу бойкүйез.", "Жас баладай жеңісқой,", "Байлаулы емес ақыл, ой.", "Ойлағаны - айт пен той,", "Ыржың-қылжаң ит мінез.", "Сұлу қыз бен я батыр", "Болмаған соң , тәңірі алғыр,", "Шығып кетер, я қалғыр,", "Оған ақыл - арам без.", "Жақсыға айтсаң, жаны еріп,", "Ұғар көңіл шын беріп,", "Дертті ішіне ем көріп,", "Неге алтынды десін жез.", "«Ой, тәңір айшыл» кер есек,", "Қулық, сұмдық не өсек", "Болмаған соң, бір есеп -", "Мейлі қамқа, мейлі бөз."]
    }];
    return u.jsxs("div", {
        className: "min-h-screen bg-background font-sans selection:bg-primary/20",
        children: [u.jsx(gl, {}), u.jsxs("section", {
            className: "relative min-h-screen flex items-center pt-20 overflow-hidden section-reveal",
            children: [u.jsx("div", {
                className: "absolute inset-0 z-0 opacity-[0.03] pointer-events-none pattern-drift",
                style: {
                    backgroundImage: `url(${vl})`,
                    backgroundSize: "400px"
                }
            }), u.jsxs("div", {
                className: "container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10",
                children: [u.jsxs("div", {
                    className: "order-2 md:order-1 space-y-8 animate-fade-up",
                    children: [u.jsxs("div", {
                        className: "space-y-2",
                        children: [u.jsx("h2", {
                            className: "text-secondary font-sans uppercase tracking-[0.2em] text-sm font-semibold",
                            children: "Дала данасының жыры"
                        }), u.jsxs("h1", {
                            className: "text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground leading-[0.9]",
                            children: ["Абай ", u.jsx("br", {}), " Құнанбайұлы"]
                        })]
                    }), u.jsx("p", {
                        className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                        children: '"Бас-басыңды тік ұстап, дүниеге ашық көзбен қара. Білім — надандық қараңғылығын сейілтетін шырақ."'
                    }), u.jsxs("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4",
                        children: [u.jsxs("a", {
                            href: "#biography",
                            className: "group inline-flex items-center gap-2 text-primary font-medium uppercase tracking-widest text-sm hover:gap-4 transition-all",
                            children: ["Өмір жолын оқу ", u.jsx("span", {
                                className: "text-xl",
                                children: "→"
                            })]
                        }), u.jsx("a", {
                            href: "/book-of-words",
                            className: "inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity",
                            children: "Қара сөздер"
                        })]
                    })]
                }), u.jsxs("div", {
                    className: "order-1 md:order-2 relative animate-fade-up delay-150",
                    children: [u.jsxs("div", {
                        className: "aspect-[3/4] rounded-sm overflow-hidden shadow-2xl relative",
                        children: [u.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10"
                        }), u.jsx("img", {
                            src: K4,
                            alt: "Абай Құнанбайұлының портреті",
                            className: "w-full h-full object-cover transform transition-transform duration-[20s] hover:scale-110"
                        })]
                    }), u.jsx("div", {
                        className: "absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary/30 -z-10 rounded-sm"
                    })]
                })]
            })]
        }), u.jsx("section", {
            id: "biography",
            className: "py-24 bg-muted/30 relative section-reveal",
            children: u.jsx("div", {
                className: "container mx-auto px-6 max-w-4xl",
                children: u.jsxs("div", {
                    className: "space-y-12",
                    children: [u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Ағартушының өмірі"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("div", {
                        className: "prose prose-lg prose-stone mx-auto text-muted-foreground first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left",
                        children: [u.jsx("p", {
                            children: "Абай Құнанбайұлы (1845–1904) — қазақтың ұлы ақыны, ойшылы, ағартушысы, қазақ жазба әдебиетінің негізін қалаушылардың бірі. Ол қазіргі Абай облысы аумағында дүниеге келген. Абай шығармаларында білім, ғылым, адамгершілік, еңбекқорлық және әділдік тақырыптары кеңінен қозғалды. Оның өлеңдері мен «Қара сөздері» қазақ қоғамының дамуына, ұлттық сананың оянуына үлкен ықпал етті. Сонымен қатар ол орыс және әлем классиктерін қазақ тіліне аударып, мәдени байланысты нығайтты. Абай мұрасы — қазақ руханиятының асыл қазынасы және бүгінгі күнге дейін маңызын жоғалтпаған құндылық."
                        }), u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-3"
                        }), u.jsx("p", {
                            children: "Абайдың «Қара сөздері» — ақынның философиялық ой-толғаулары мен тәрбиелік, ағартушылық көзқарастары жинақталған прозалық шығармалары. Барлығы 45 қара сөзден тұрады. Бұл еңбектерінде Абай білім мен ғылымның маңызын, адамгершілік, еңбекқорлық, әділдік, мінез-құлық, имандылық мәселелерін көтеріп, халықты рухани дамуға шақырады. «Қара сөздер» — қазақ әдебиетіндегі терең мағыналы, өнегелік мәні зор мұралардың бірі және бүгінгі қоғам үшін де өзектілігін сақтаған туынды."
                        })]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Қысқаша шолу"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ['Абай Құнанбайұлы Орта жүздегі Арғын тайпасының Тобықты руынан шыққан. Әкесі Құнанбай Өскенбайұлы өз заманындағы атақ даңқы алысқа кеткен адамдардың бірі болған. Патша өкіметі XIX ғасырдың ортасындағы бір сайлауда оны Қарқаралы ауданының аға сұлтандығына бекіткен. Абайдың анасы Ұлжан да Арғын тайпасынан, Қаракесек руының қызы. Абай бала кезден Өскенбайдың әулетінің Үлкен әжесі атанып кеткен Зере әжесінің қолында өсті, Өскенбайдың бәйбішесі Тоқбала анамыз (Зере) Найманның Матай болысының байы Бектемірдің қызы, Зере әжеміз Ибраһимді "Абай" деп еркелетіп атаған. Содан бері бұл есіммен Абай тарихқа енді.', u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Осындай текті ортадан шыққан Құнанбай мен Ұлжаннан туған төрт ұлдың бірі Абай жастайынан-ақ ерекше қабілетімен, ақылдылығымен көзге түседі. Балаға сыншы әкесі осы баласынан қатты үміт етеді. Әкесі оның зеректілігін байқағаннан кейін, 10 жасқа толған соң Семейдегі Ахмет Риза медресесіне береді. Медреседе төрт жыл оқығаннан кейін, оқудан шығарып алып, қасында ұстап, ел басқару ісіне баули бастайды. Әкесінің төңірегінде ел жақсыларымен араласып, өз халқының рухани мәдениет жүйелерімен жете танысады. Өзі билер үлгісінде шешен сөйлеуге төселеді. Ұтымды сөзімен, әділ билігімен елге танылып, аты шығады. Көп ұзамай, жетпісінші жылдардың бас кезінде Қоңыр Көкше дейтін елге болыс болады. Билікке араласып, біраз тәжірибе жинақтағаннан кейін, ол халық тұрмысындағы көлеңкелі жақтарға сәуле түсіруге күш салып бағады. Бірақ онысынан пәлендей көңіл тоятындай нәтиже шығара алмайды. Сондықтан халқына пайдалы деп тапқан істерін көркем сөзбен, әсіресе, өлеңмен насихаттамақ болады. Абай бір жағынан шығыс классиктері Низами, Сағди, Қожа Хафиз, Науаи, Физули, Жәми тағы басқаларды оқыса, екінші жағынан Александр Пушкин, Александр Герцен, Михаил Салтыков-Щедрин, Николай Некрасов, Михаил Лермонтов, Лев Толстой, Иван Крылов, Фёдор Достоевский, Иван Тургенев, Николай Чернышевский мұраларын оқып, терең таныс болған, Батыс әдебиетінен Гёте, Джордж Байрон сияқты ақындарды оқып, Дрепер, Спиноза, Спенсер, Льюис, Дарвин сынды ғалымдардың еңбектерін зерттейді."]
                    }), u.jsx("div", {
                        className: "w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl",
                        children: u.jsx("video", {
                            className: "w-full h-auto rounded-2xl",
                            controls: !0,
                            src: P4
                        })
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Отбасы"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Абай Құнанбайұлы 1845 жылғы 23 тамызда қазіргі Семей облысының Шыңғыс тауларында, Қарқаралының аға сұлтаны Құнанбайдың төрт әйелінің бірі, екінші әйелі Ұлжаннан туған.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Ақынның арғы тегі Орта жүз Тобықты, Арғын ішіндегі Олжай батырдан басталады. Олжайдан Айдос, Қайдос, Жігітек есімді 3 ұрпақ тарайды. Бұлардың әрқайсысы кейін бір-бір рулы ел болып кеткен. Айдостың Айпара деген әйелінен: Ырғызбай, Көтібақ, Топай, Торғай, деген 4 ұл туады.Бұлардың әкесі момын, шаруа адамы, ал шешесі өткір тілді, өр мінезді әйел болған.", u.jsxs("h2", {
                            className: "text-secondary font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-1.5",
                            children: [u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                            }), "Сол Айпара балаларына:"]
                        }), u.jsx("p", {
                            className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                            children: '"Шынжыр балақ, шұбар төс Ырғызбайым, Тоқпақ жалды торайғыр Көтібағым, Әрі де кетпес, бері де кетпес Топайым, Сірә да оңбас торғайым..."'
                        }), u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Ана айтқанындай, шынында, бұлардың ішінде Ырғызбай ортасынан оза шауып, ел басқарған. Ырғызбайдан Үркер, Мырзатай, Жортар, Өскенбай тарайды. Өскенбай шаруаға жайлы, билікке әділ кісі болғандықтан, “Ісің адал болса Өскенбайға бар,арам болса Ералыға бар” деген мәтел осыдан қалған. Өскенбайдың әйелі Зереден Құнанбай туады.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Құнанбай — 4 әйел алған адам. Оның бәйбішесі Күңкеден – Кұдайберді, інісі Құттымұхамбетке айттырылып, қалыңдық кезінде жесір қалған соң өзі алған екінші әйелі: Ұлжаннан – Тәңірберді (Тәкежан), Ибраһим (Абай), Ысқақ, Оспан, үшінші әйелі Айғыздан – Халиулла, Ысмағұл туады. Қартайған шағында үйленген ең кіші әйелі Нұрғанымнан ұрпақ жоқ. Абайдың “ Атадан алтау, анадан төртеу едім дейтіні осыдан. Болашақ ақын сабырлы мінезімен, кең пейілімен ел анасы атанған “кәрі әжесі” Зеренің таусылмайтын мол қазынадай аңыз ертегілерін естіп, абысын-ажынға жайлы, мінезі көнтерлі, әзіл-қалжыңға шебер, жөн-жобаға жетік өз анасы Ұлжанның тәрбиесінде өсті. Абай әуелі ауылдағы Ғабитхан молдадан сауатын ашады да, 10 жасқа толған соң 3 жыл Семейдегі Ахмет Риза мешіт-медресесінде оқиды. Бұл медреседе араб, парсы тілдерінде, негізінен, дін сабағы жүргізілетін еді. Құрбыларынан анағұрлым зейінді бала оқуға бар ықыласымен беріліп, үздік шәкірт атанады. Ол енді дін оқуын ғана місе тұтпай, білімін өз бетінше жетілдіруге ұмтылады. Сөйтіп көптеген шығыс ақындарының шығармаларымен, араб, иран, шағатай (ескі өзбек) тілінде жазылған ертегі, дастан, қиссалармен танысады, Шығыстың Низами, Науаи, Сәғди, Қожа Хафиз, Физули сияқты ұлы ғұлама, классик ақындарына бауыр басады. Медресенің үшінші жылында Абай Семей қаласындағы “Приходская школа”-ға да қосымша түсіп, орысша сауатын аша бастайды. Бірақ бұл оқуын әрі жалғастыра алмай, небәрі 3 жылдан соң оның мұсылманша да, орысша да оқуы аяқталады.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абайдың басқа балалардан алымдылығын аңғарған Құнанбай оны елге шақырып алып, өз жанына ертіп, әкімшілдік-билік жұмыстарына араластырмақ болады. Сөйтіп 13 жастағы Абай ел ісіне араласады. Абай әке қасында болған жылдарда атқамінер би-болыстардың қулық-сұмдықтарын, қазақ даласына ыдырай бастаған феодрулық қатынастардың кереғар қайшылықтары, кіріптар еткен әлеуметтік теңсіздіктің зардаптарын, аштық пен жалаңаштықты, патриархалдық, кертартпа салт-сана, әдет-ғұрып зандарының залалдарынын айқын түсінді."]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Шығармалары"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Абай өлең жазуды 10 жасында («Кім екен деп келіп ем түйе қуған...») бастаған. Одан басқа ертеректе жазылған өлеңдері — «Йузи-рәушән», екіншісі — «Физули, Шәмси, Сәйхали». «Сап, сап, көңілім», «Шәріпке», «Абралыға», «Жақсылыққа», «Кең жайлау» өлеңдері 1870 — 80 жылдар аралығында жазылған. Ақындық қуатын танытқан үлкен шығармасы — «Қансонарда» 1882 ж. жазылған. Алайда жасы қырыққа келгеннен кейін ғана көркем әдебиетке шындап ықылас қойып, көзқарасы қалыптасып, сөз өнерінің халық санасына тигізер ықпалын түсінеді. Шығармалары үш жүйемен өрбиді: бірі — өз жанынан шығарған төл өлеңдері; екіншісі — ғақлия (немесе Абайдың қара сөздері) деп аталатын прозасы; үшіншісі — өзге тілдерден, әсіресе орысшадан аударған өлеңдері.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай өлеңдері түгел дерлік лирикадан құралады, поэма жанрына көп бой бұрмағаны байқалады. Қысқа өлеңдерінде табиғат бейнесін, адамдар портретін жасауға, ішкі-сыртқы қылық-қасиеттерін, мінез-бітімдерін айқын суреттермен көрсетуге өте шебер. Қай өлеңінен де қазақ жерінің, қазақтың ұлттық сипатының ерекшеліктері көрініп тұрады. Ислам діні тараған Шығыс елдерінің әдебиетімен жақсы танысу арқылы өзінің шеберлік — шалымын одан әрі шыңдайды. Шығыстың екі хикаясын «Масғұт» және «Ескендір» деген атпен өлеңге айналдырады. Ислам дініне өзінше сенген діни таным жайындағы философиялық көзқарастарын да өлеңмен жеткізеді. Абайдың дүниетанудағы көзқарасы XIX ғасырдың екінші жартысында Қазақ халқының экономикасы мен ой-пікірінің алға ұмтылу бағытында даму ықпалымен қалыптасты. Дүниетану жолында сары-орыстың төңкерісшіл демократтарының шығармаларын оқып, өз дәуірінің алдыңғы қатарлы ой-пікірін қорытып, басқаларға қазақ өміріндегі аса маңызды мәселелерді түсіндіруге қолданады. Дүниетану өңірінде екі қасиеттің — сезім мен қисынның , түйсік пен ақылдың қатынасын таразылайды. Сондықтан да: «Ақыл сенбей сенбеңіз, Бір іске кез келсеңіз» деп жазады.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Кез келген халықтың тарих сахнасына шығуы — жүйеге бейімделген біртектес өмір салттың ғана нәтижесі емес, сонымен бірге қасиеттік деп саналатын- арман-аңсардың (идеал) да біртұтастығына айғақ. Олай болса Абай сынының тәлкегіне түскен еріншектік, дарақылық, жалқаулық, күншілдік, өтірікшілік, өсекшілдік, мақтаншақтық, жағымпаздық, жікшілдік сияқты қасиеттер қазақ баласының кейбірінің бойындағы туа біткен кемшілік емес, сол Абай өмір сүрген қоғамдағы саяси әлеуметтік қатынастардың нәтижесі екеніне ден қою қажет. Сонда, Абай бұрынғы бабаларымыздың бойынан көрген «кемшіліктерді» себеп ретінде емес, сол замандағы саяси-әлеуметтік қатынастардың салдары ретінде қарастыруға жол ашқан."]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Қара сөздері"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Абай Құнанбайұлының көркемдік, әлеуметтік, гуманистік және дінге көзқарастары терең білінген еңбегі — қара сөздері. Абай Құнанбайұлының қара сөздері (Ғақлия) — ұлы ақынның сөз өнеріндегі көркемдік қуатын, философиядағы даналық дүниетанымын даралап көрсететін классикалық стильде жазылған прозалық шығармасы. Жалпы саны қырық бес бөлек шығармадан тұратын Абай Құнанбайұлының қара сөздері тақырыбы жағынан бір бағытта жазылмаған, әр алуан. Оның алты-жеті үлгісі қысқа болса, қайсыбіреуі мазмұн, тақырып жағынан өзгешелеу, ауқымды болып келеді. Абай Құнанбайұлының өзінің қара сөздерінде шығарманың ажарына ғана назар аударып қоймай, оның тереңдігіне, логикалық мәніне зор салған.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Сөйтіп көркемдік шеберлік пен ғылыми зерделік арқылы көркемдік сана мен философиялық сананы ұштастырады. Абай Құнанбайұлының қара сөздеріндегі гуманистік, ағартушылық, әлеуметтік ойлары дін туралы пікірлерімен бірігіп, тұтас бір қазақ халқының философиялық концепциясын құрайды. Абай Құнанбайұлының кара сөздері сондай-ақ жалпы адамзат баласына ортақ асыл сөзге айналды.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Оның қара сөздерінің бірнешеуі ең алғаш 1918 жылы Семейде шыққан «Абай» журналында жарық көрді. Кейіннен, Абайдың қара сөздері орыс, қытай, француз, т.б. көптеген әлем тілдеріне аударылды."]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Қара сөзде айтылған ой"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Абайдың жетінші қара сөзінде ұшырасатын «жанның тамағы» деген күрделі философиялық ұғым бар. Оны Абай Құнанбайұлы біздің санамыздан тыс өмір сүретін объективті дүниенің санада сәулеленуі нәтижесіңде пайда болатын ғылым, білімнің жинақталған қоры ретінде қарайды. Осы себептен де Абай Құнанбайұлы:", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), u.jsx("p", {
                            className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                            children: '"... құмарланып, жиған қазынамызды көбейтсек керек, бұл жанның тамағы еді,"'
                        }), u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "— деп қайыра түсінік беріп отыр... Абай Құнанбайұлындай ұстаз ақынның бұл «Жетінші сөзде» көздеген мақсаты адамның бойыңда туа пайда болатын жан құмары арқылы өз ұрпағының санасына тек қана жанның пайдалы тамақтарын сіңдіру еді. Міне, Абай Құнанбайұлы ағартушылық көзқарасының тамыр алған бір саласының қайнар көзі осы жақта жатыр.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), 'Абай Құнанбайұлы бұл бағыттағы ойларын өзге сөзбен "Ғылым таппай мақтанба" т.б. өлеңдерінде айтқан. Мұнда ол "жанның тамағы туралы" ұғымды өз заманынын тұрғысынан келіп, "адам болу" үшін қажет көп керектермен ауыстырады. Ақын толық адам болу туралы өзінің жүйелі де қалыптасқан көзқарасының тезисін ұсынады. Онысы:', u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), u.jsx("p", {
                            className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                            children: '"Адам болам десеңіз... Бес нәрседен қашық бол..., Бес нәрсеге асық бол,"'
                        }), u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "- деген жолдарда жатыр. Ақынның бүкіл шығармаларындағы негізгі бір тұтас тақырыпта өзекті идея болған. Абай Құнанбайұлының пікірінше, ішкі рухани казынамыздың молығуы тікелей өзіміздің қолымыздағы іс. Осы реуішті пікір Абай Құнанбайұлының «Он тоғызыншы сөзінде» де қайталанады. Абай Құнанбайұлының дүние танымы бойынша сананың, ақылдың пайда болуы күнделікті өмір тәжірибесінің нәтижесінен ғана туындайтын табиғи құбылыс. Соңдықтан да Абай Құнанбайұлы Он тоғызыншы сөзінде:", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), u.jsx("p", {
                            className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                            children: '"Адам ата-анадан туғаңда есті болмайды: есітіп, көріп, ұстап, татып ескерсе, дүниедегі жақсы, жаманды таниды-дағы, сондайдан білгені, көргені көп болған адам білімді болады. Естілердің айтқан сөздерін ескеріп жүрген кісі өзі де есті болады... Сол естілерден есітіп білген жақсы нәрселерді ескерсе, жаман дегеннен сақтанса, соңда іске жарайды, сонда адам десе болады,"'
                        }), u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "— деп жоғарыдағы өлең үзіндісендегі ойын осы сөзіңде одан ары кеңіте отырып дамытатынын көруге болады."]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Абай лексикасы"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Абай тілінің негізі қазақтың жалпы халықтық сөйлеу тілі мен ауызша әдеби тілі болғандықтан, оның лексика-фразеолия қазынасы тегі жағынан, ең алдымен, қазақтың төл сөздерінен, одан соң шағын мөлшерде араб-парсы және орыс сөздері қабатынан құралады. Өз тұсындағы қазақ қоғамының саяси-әлеуметтік, мәдени-экономикалық күй-жағдайына орай қазақ лексикасында болған өзгеріс-жаңалықтарды Абай тілі айқын көрсетеді. Мысалы, кейбір атаулар ескіріп, қолданыстан шыға бастаса, Абай ондай сөздерді көбінесе көнені суреттеу үшін немесе образ үшін пайдаланады.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Хан, уәзір, аламан, абыз, жылыс, тоғыс, наурыздама сөздері көбінесе Қара сөздерінде тарихты баяндайтын тұстарда қолданылады. Ал, өмірге келген жаңа атауларды жатсынбай қабылдап, өзі де бұларға қоса жаңаларын жасайды (қ. Жаңа сөздер). Абай шығармаларының тақырыбына орай төл лексиканың ішінен этнографизмдерді де (шілдехана, үш тоғыз, қынаменде, ақшомшы, ықтырма, күзеу т. б.), көне киім-кешек, сауыт-сайман, құрал-жабдық атауларын да (дәндәку, жарғақ шалбар, пыстан, шақпақ, шөншік, дулыға, шарайна т. б.) пайдаланады. Сондай-ақ сыртқы тұлғасы жағынан көнерген сөздерді (мыс, Ұлы дегеннің орнына ұлық, кіші сөзінің орнына кішік, тураның орнына туғры тұлғалары) ұйқас құрау, мағыналық реңк үстеу сияқты белгілі бір мақсатпен қолданады. Дегенмен, Абай тұсында бірқатар сөздердің көнеру дәрежесі қазіргі көздегіден әлдеқайда солғындау болғаны байқалады. Мысалы, ағайын, туысқан мағынасындағы қарындас сөзі, ел, жақын және жат, алыс семантикалы алаш, әскери мағынасындағы қол сөздерінің әлі де осы ұғымдарда еркін және жиі қолданылғандығын сол көзеңдегі қазақ әдеби тілі де, Абай тілі де көрсетеді. Қоғам өмірімен етене қабысқан тіл, әсіресе, оның лексикасы сол қоғамның әр кезеңдегі тыныс-тіршілігіне орай өзгеріп отырады, яғни бірқатар сөздердің мағыналары ауысады, бірсыпырасы терминдік дәрежеге кетеріледі, енді бір алуанының қолданылу жиілігі артады. Бұл процеске қалам қайраткерлері белсене қатысады. Осы ретте Абайдың еңбегі көзге түседі.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), u.jsx("p", {
                            className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                            children: '"Араб және парсы ықпалы:"'
                        }), u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай тілі лирикасының келесі қабаттары - араб және парсы сөздері. Бұрыннан қазақтың жалпы халықтық тілінде қалыптасқан шығыс сөздерін Абай жатсынбай, еркін қолданады. Олар дінге, оқу-ағартуға, өнер-білімге, әкімшілікке, сауда-саттыққа т. б. қатысты болып келеді. Араб-парсы сөздерінің басым көпшілігін, жалпы халықтық тілдегі сияқты, Абайда да дерексіз ұғым атаулары құрайды (ар, абырой, мейір, нала, парыз, қаһар, қиял, қудірет, дәурен т. б.). Абай тілі лирикасының бір ерекшелігі - мұнда қазақ тіліне енбеген араб-парсы сөздерінің де қолданылғандығы. Олар, негізінен, Абайдың қарасөздерінде, онда да барлығында емес, тақырыбына қарай белгілі біреулерінде ғана шоғырланған. Ол шығармалар жүрегінің қуаты перзентлеріне арналған атақты Отыз сегізінші сөзі мен қазақ оқырмандарына иман деген - алла табарақа уатағаланың... жарлығына... мойынсұнып, инанмақ» екенін баяндаған 13-сөзі. Бұларда философия мен моральға қатысты ой-пікірін айтуда автор осы салалардағы ұғымдардың араб тілінде қалыптасқан атауларын қазақшаламай, сол күйінде пайдаланды.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), u.jsx("p", {
                            className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                            children: '"Орыс сөздері:"'
                        }), u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай лирикасының келесі қабаты - орыс сөздері. Олар сан жағынан араб-парсы қабатынан әлдеқайда кем болганымен, әрі қарайғы орын тебу бағыты жағынан басым тұседі. Бұл бағытқа себепкер, ең алдымен, қазақ қоғамының сол кезеңдегі және әрі қарай әлеуметтік, саяси, экономика күй-қалпы болса, екіншіден, қазақтың ұлттық жазба тілінің демократтық сипатта дамуы еді. Абай мен Ыбырай орыс тілі элементтерін текжалпыхалықтық сөйлеу тәжірибесінен емес, тікелей орыс әдеби тілінен алды. Абайдың жалпы халықтық қолданыс тауып пайдаланған сөздерінің көпшілігі әкімшілік, заң, шаруашылық салаларына қатысты. Олар: болыс, кандидат, ояз, сияз, старшын, майыр, шен, партия, сот, шар, закун, закуншік, кателешке, бодан, расход, кір, лапке, барқыт, самаурын, пәтер, сома, бақалшік, мәліш (сауда), аршепке, барабан, зауыт, машине.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абайда өзіне дейінгі және өз тұсындағы қазақ әдеби үлгілерінде көздеспейтін бір топ орыс сөздері бар. Олар адвокат, доктор, губернатор, начальник, визит, монастырь, ладан, штык, картечь, такт, номер, химия, трагедия, единица, ноль, образование, назначение, посредник, жеребе, прошение, дезнание, прямота, икра, фабрик, электр, румке, стакан, счет дегензат есімдер мен уөздный, военный, здравомыслящий, уголовный, самородный (сары алтын), виноват деген сын есімдер және гуляйттау, пошел, занимайся деген етістіктер."]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Абай және Пушкин"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Аудармашыға екі қасиет қажет. Бірі талғампаздық, екіншісі ой тереңдігі. Талғампаздық деп отырғанымыз Абайдың хакімдігінің бір қыры. Абай бас салып кім-көрінгенді аудармаған, ол аудармақшы болған автормен өзі бәсекеге түскен. Абайдың аудармалары, шын мәнінде, ой жарыстыру. Сондықтан Абай жасаған аудармаларын оның ой кеңістігінің өрісі деп қабылдаған жөн. Абай тілін еркін меңгерген орыс халқынан таңдап, талғап, әсіресе екі ақынды аударған олар Александр Пушкин және Михаил Лермонтов. Абайдың талғампаздығына таң-тамаша қаласың. Орыс елімен, оның мәдениетімен мәңгілік қалатын, ешқандай өзге құндылық өлшемдеріне түспейтін екі ғалымды Абай бұлжытпай таныған және қазақ халқына таныстыру мақсатында, олардың шығармаларын қазақ тіліне аударған.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), 'Абай орыс ақыны Александр Пушкиннің өлеңмен жазылған "Евгений Онегин" деген романын толық аудармаған одан үзінділер тәржімалағак Абай: "Онегиннің сипаты," "Татьянаның Онегинге жазған хаты," "Онегиннің Татъянаға жауабы," "Онегин сөзі," "Онегиннің Татьянаға жазған хаты," "Татьянаның сөзі," "Ленскийдің сөзінен" және "Онегиннің өлердегі сөзі" - деп жеке-жеке сегіз шығарма етіп аударған Неге Абай романды қазақ тіліне толық аудармаған, әрине оның себебін дөп басып айту қиың бірақ мен ойлаймың егер "Евгений Онегинді" толық аударса, оны қазақ оқырмандары қабылдамас еді, сірә, Абай соны түсінген, Қазақ оқырмандары махаббат, ғашықтық тақырыбына "Ләйлі Мәжнүннен" бастап өңкей классикалық ғажап туындылармен сусындап келе жатқан қауым, сондықтан болар Онегиннің Татьянаға шалажансар сезімін қалайша қабылдамақ. Әрине, қабылдай алмайды. Шығыстық дәстүрде ғашықтар құрбандыққа дейін барулары керек, айталық Қозы Көрпеш-Баян сұлу сияқты. Осыны түсінген Абай "Евгений Онегиннен" үзінділерді таңдап алып, аударып, олардың өзін қазақы ұғымдармен сөйлетіп қойған ол "Татьяна сөзін" "Тәңірі қосқан жар едің сен", деп бастайды']
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Музыкалық мұра"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsx("p", {
                        children: "Ұлы ақын, ағартушы Абай музыкалық саласында да айта қалғандай мұра қалдырды. Өзінің асыл өлеңдерін, қара сөздерін қағазға түсіріп, кейінгі ұрпаққа жазып қалдырса, музыкалық жөнінде оның мұндай мүмкіндігі болмады. Өйткені, Абай өмір сүрген көзеңде қазақта музыканың жазба мәдениеті жоқ еді, халықтық музыка ауыз дәстүрлік қалыпта еді. Сондықтан Абай әндері де қазақтың басқа халықтық ән-күйлері сияқты, ауыздан-ауызға, заманнан заманға ауыса отырып жетті. Музыка саласында жазба мәдениеттің болмауына қарамастан, Абай әндерінің бізге толық жеткен себебі - олардың халықтың жүрегінде сақталуға сапасы сай келетін шығармалар болғандығында, халық санасынан өшпес орын алғандығында. Абай әндерінің өзгешелігі - мелодиялық, ырғақтық жақтарындағы жаңалықтарында, идеялық мазмұнының ашықтығында. Бұл өзгешелік алғашқы көзде тыңдағандардың бәріне бірдей тұсінікті бола қоймады, болмақшы да емес еді. Мәдениеттің дамуына кедергі болатын феодалдық жағдайда кейбіреулер үшін ол әндердің жаңа тілдері қазақтың халықтық ән дәстүрінен шығып кеткендік болып көрінуі де мүмкін еді. Бірақ жаңа, прогресшіл мәдениет күрескері болған Абай өз бетінен қайтқан жоқ. Сейтіп, Абай әндері алғашқыда оның өз айналасына - ауыл-аймағына, кейін жалпы қазақарасына тарай бастады. Абай әндері халықтық негізден нәр алғандықтан, халық әндерімен тамырласып жатқандықтан, нотаның жоқ кезінде-ақ, ауыздан ауызға көше отырып, қалың бұқараның игілігіне айналды. Бұған бұрын-соңды халықтың музыкалық салтында болмаған жаңа өткір тілмен өлең тексіне құрылуы да себеп болды."
                    }), u.jsx("section", {
                        id: "abai_tanu",
                        className: "py-3 bg-muted/30 relative section-reveal"
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Абайтану"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Абайтану қазақ әдебиеттану ғылымының саласы. Абайтану Абайдың өмірі мен шығармашылық өнері, философиясы, қоғамдық, эстететикалық көзқарастары, қазақ халық поэзиясындағы өлең жүйесін, ақындық тілді дамытудағы үлесі, музыкалық мұрасы жайлы сан-салалы зерттеу еңбектерін қамтиды. Абайдың өмірі мен шығармашылық мұрасын зерттеу шын мәнінде Әлихан Бөкейханов, Ахмет Байтұрсынұлы, Міржақып Дулатұлы мақалаларынан басталды деуге болады.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Ахмет Байтұрсынұлы 1913 ж. «Қазақ» газетінде басылған «Абай – қазақтың бас ақыны» атты мақаласында «Одан асқан бұрын-соңғы заманда қазақ баласында біз білетін ақын болған жоқ» – деп Абайды аса жоғары бағалады. Абай шығармаларын жинап, қағазға түсіріп, реттеп, баспаға дайындау ісі ақын қайтыс болған соң ұзамай-ақ қолға алынғанын дәлелдейтін нақтылы деректер жетерлік. Жарық көруінен бірнеше жыл бұрын құрастырылып, 1909 жылы Санкт-Петербургте басылған Абай өлеңдерінің жинағында ақынның жүз қырықтай өлеңі (аударма өлеңдерін қосып санағанда) мен «Ескендір», «Масғұт» поэмалары басылғаны, яғни осы күнгі белгілі поэзиялық шығармаларының көрнектілері түгелге жуық қамтылды."]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Абай Құнанбайұлының дінге көзқарасы"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Абайдың дінге көзқарасын бағалап, тұжырымдауда екі түрлі қате пікір орын алып келді. Кейбір зерттеушілер Абай «ислам дінінің қазақ ішінен шыққан өкілі» деп келсе, екінші бір зерттеушілер Абайдың дін туралы ойлары ақын шығармашылығының әлсіз, кертартпа жағы деп түсіндіреді. Алғашқы пікір Абайға тағылған жала болса, соңғысы - ақынның дін туралы түсініктеріне тарихи, диалектикалық тұрғыдан қарамай, тұрпайы социологияға бас июдің салдарынан туған болжам. Абайдың дін туралы толғамдарын дұрыс түсініп, бағалау оған тарихи тұрғыдан қарауды талап етеді. Абай заманында қазақ даласында қос дінділік орын алды, ресми өмірде ислам діні үстемдік еткенімен, күнделікті тіршілікте бақсылық түйсіктер мен түсініктер басым болды. Қос дінділік қазақ халқының сол кезеңдегі наным-сенімі мен дүниетанымынан айқын байқалады. Бақсылықтағы негізгі санат — «Тәңірі», исламдағы — «Аллаһ» қазаққа тән ұғымдар. Шаманизмде тәңірінің, аруақтардың адамдармен ұштастырушы «жын» болса, исламда Алланың адамдармен байланыстырушысы «періштелер» деп саналды. Қазақтың күнделікті өмірінде шаманизмнің өкілі, іс жүргізушісі - жын шақыратын бақсылар, ал ислам дінінде - өздерін пайғамбардың ұрпақтары санайтын қожалар болды. Абай «Біраз сөз қазақтың түбі қайдан шыққаны туралы» еңбегінде қазақ жерінде ислам дінінің қалай тарағандығын және оның шаманизммен байланысын арнайы талдайды.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абайдың дін мәселелері - құдай мен адамның, өмір мен өлімнің, жан мен тәннің, иман мен ұяттың, дін мен ғылым, дін мен дін иелерінің өзара байланысы туралы түсініктері антиклерикалдық бағыттағы талдау. Құдай мен адамның қарым-қатынасын Жиырма жетінші, Жиырма сегізінші сөздерінде арнайы талдап, гректің ұлы ойшылы Сократпен пікір таластырады"]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Ақынның балалық шағы"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Абай Құнанбаев 1845 жылы қазіргі Шығыс Қазақстан облысының Абай ауданындағы Шыңғыс тауында дүниеге келген. Азан шақырып қойған аты Ибраһим екен.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай ислам дінінің қағидаларын барынша құрметтейтін діни отбасында өсіп, тәрбие алды. Оның әкесі Құнанбай қажы тобықты руының өте ықпалды, орыс тілін жақсы білген биі болды. Орыстың алдыңғы қатарлы зиялы қауым өкілдерімен қарым-қатынас жасап тұрды. Ол шыққан тегі сұлтан әулетінен болмаса да Қарқаралы округында алғашқы аға сұлтандардың бірі болып сайланды. Ғұмырының аяқ кезінде Меккеге қажылыққа барып қайтты. Меккеде Құнанбай қажы салдырған Тәбия қонақүйі әлі бар. Қажылықтан қайтып оралған Кұнанбай бұл дүниелік істерден біржола қол үзеді. Ақынның бабасы Өскенбай Қазақстанның Солтүстік-шығыс аймағындағы әділетті де ықпалды қазақ билерінің бірі болатын. Оның қалдырған данышпандық сөздері мен ғибратты өсиеттері аз емес. Биге қазақтардың алыс жатқан руларының адамдары да шағым айта келіп, жүгінетін. Абайдың арғы атасы Ырғызбай да атақты би әрі батыр болған.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай әуелі ауыл молдасынан сауат ашып, содан кейін Семейдегі Ахмет Риза медресесінде үш жыл оқып білім алады. Ол жас кезінен кітапқа құмар болды, араб-парсы және көне түркі әдебиетінің үлгілерімен танысты. Абай қазақтардың дәстүрлі әдет-ғұрып заңы мен ислам дінінің қағидаларын терең меңгерді. Онымен білім жарыстырудан молдалардың өздері қауіптенетін. Абай халық ауыз әдебиетінің үлгілерін өте жақсы білді. Мектеп қабырғасында оқып жүрген кезінде-ақ өзінің алғашқы өлеңдерін жаза бастады.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Әкесі Құнанбай Абайды тобықты руының болашақ билеушісі ету мақсатымен оқудан ауылға кері қайтарып алады. Мұнда ол халықтың қалың ортасына түседі. Билер, ақындар, сазгер-әншілермен, сондай-ақ даланың данышпан ойшылдарымен жиі-жиі бірге болып, араласып тұрады. Ақынның жастық шағы патша үкіметінің Қазақстанның оңтүстігіне қарай әскери күшпен ентелеп ене бастаған кезімен тұспа-тұс келді. Ол патша үкіметінің округтық приказдардағы жағдайының барған сайын нығая түскенін, XIX ғасырдың 60—90-жылдарындағы әкімшілік реформаларының енгізілгенін өз көзімен көрді. Ол аз уақыт болыс болған кезінде қай істі болса да әділ және адал шешуге талпынды. Сол үшін қатардағы қарапайым халықтың терең сый-құрметіне бөленді. Бірақ қоғамның күрделі проблемаларын мұндай қарапайым тәсілмен шешуге болмайтынына бірте-бірте кәміл көз жеткізе бастайды. Сондықтан да ол қазақтардың білім мен ғылым алуын белсене жақтаушыға айналады."]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Абай — ұлы ақын әрі ойшыл"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Абай өзінің өлеңдерін бала кезінен жаза бастады. Бірақ ол ақын ретінде алғаш рет XIX ғасырдың 80-жылдарының орта кезінен бастап таныла бастады. Бұл кезде Абай өз атынан «Жаз» («Жаздыкүн шілде болғанда...») деген өлеңін жариялаған болатын. Абай — «Ескендір», «Масғүд», «Әзім әңгімесі» поэмалары мен этикалық-философиялық еңбегі «Қара сөздерді» жазды. Ақынның 1890-1898 жылдар аралығында жазылған «Қара сөздерінде» XIX ғасырдың екінші жартысындағы қазақ халқының болмысы зерделенді.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Ақынды қатты алаңдатқан жағдайлар қазақтардың жаппай кедейленіп, қайыршылық халге түсе бастауы, патша үкіметі шенеуніктерінің шектен шыққан озбырлығы, жергілікті болыстардың парақорлығы мен қанағатсыз пайдакүнемдігі болды. Ол өзінің өлеңдерінде жақын туыстарына көмек қолын созбайтын сараң байларды өлтіре сынады.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай қазақ қоғамын ерінбей еңбек етуге шақырды. Өзінің кейбір замандастарының бойындағы жаманшылық мінездерді — жалқаулықты, еңбексіздікті, көрсеқызарлықты, алтыбақан алауыздықты, надандықты жеріне жеткізе әшкереледі. Кедейшіліктен құтылудың бір тәсілі егіншілікпен айналысу, қолөнер кәсібін және сауда-саттық жасауды үйрену екенін айтты.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Ол былай деп жазды:", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), u.jsx("p", {
                            className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                            children: '"Егіннің ебін, Сауданың тегін Үйреніп, ойлап, мал ізде"'
                        }), u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Оның басқаша ойлауы мүмкін де емес еді. Қазақ даласында жиі болып тұратын жұт қарапайым халықты ауыр қайғы-қасіретке душар ететін. Ондай кезде жылдар бойы жинаған малдан бір-ақ күнде айырылып, жұтап қалуға болатын еді. Абай 1880 жылғы алапат ауыр жұтты өз көзімен көрді. Сол жылы оның сан мыңдаған жерлестері қайыршылық халге душар болған еді. Семей облысында кедей жатақтардың саны бұрын-соңды болып көрмеген жоғары көрсеткішке жетті. Олар казак станицалары мен орыс шаруаларының деревняларына жаппай ағылып, болар-болмас тиын-тебенге жалданды, үй қызметшілері, қолбала, бақташылар болды. Қайыр сұрап, ел кезіп кеткендер де көп еді.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай қазақтарды мал өсірумен қоса сауда жасауды, белгілі бір кәсіп түрімен шұғылдануды үйрену қажеттігіне баса назар аударды. Орта Азия тұрғындарының кәсіп түрлеріне үлкен ілтипатпен қызыға қарады. Ол былай деп жазды: «Енді қарап тұрсам, сарттың екпеген егіні жоқ, саудагердің жүрмеген жері жоқ, қылмаган шеберлігі жоқ. Өзіменен өзі әуре болып, біріменен бірі ешбір шаһари (яғни қала адамдары болып. — авт.) жауласпайды. Орысқа қарамай тұрганда қазақтың өлісінің ахыреттігін (кебінін. авт.), тірісінің киімін сол жеткізіп тұрды».", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай халыққа жаны ашымайтындарды жек көрді, байлардың қарапайым халыққа менсінбей қарауы оның ашу-ызасын келтірді. Қоғамды прогресшіл түрде дамыту жолдарын үнемі іздестіріп отырды. Абай ел басқаруға халық үшін қызмет ететін, адал адамдар сайлануы тиіс деп есептеді. Ол өз төңірегіндегі адамдардың, жақындары мен шәкірттерінің бойындағы өз халқына риясыз берілгендікті, оның мүдделерін қорғау қасиеттерін қолдап отырды.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        })]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Абай және халық ағарту ісі"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Ұлы ақын жас ұрпақты имандылыққа, адамгершілікке, ғылым-білім үйренуге шақырды.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), u.jsxs("p", {
                            className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                            children: ['"Ғылым таппай мақтанба,', u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Орын таппай баптанба.", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Құмарланып шаттанба", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Ойнап босқа күлуге...", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Бес нәрседен қашық бол,", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Бес нәрсеге асық бол,", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Адам болам десеңіз,", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Тілеуің, өмірің алдыңда,", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Оған қайғы жесеңіз,", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Өсек, өтірік, мақтаншақ,", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Еріншек, бекер мал шашпақ", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Бес дұшпаның білсеңіз.", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Талап, еңбек, терең ой,", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), "Қанағат, рақым ойлап қой -", u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-0.5"
                            }), 'Бес асыл іс көнсеңіз..., -"']
                        }), u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "деп жастарды бес нәрседен — өсектен, өтіріктен, мақтаншақтықтан, еріншектіктен, бекер мал шашпақтықтан қашық болуға, бес асыл іске — талап етуге, еңбекті сүюге, терең ойлай білуге, қанағатшыл болуға, қайырымды рақымшылық жасауга шақырды.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай жастардың бойындағы кеселді кемістіктерді, арсыздық пен ұятсыздықты, дөрекі надандықты тәрбие және білім беру арқылы жоюға үндеді. Ақын ол үшін қазақ балаларын оқытатын мектептерді көптеп салуды жақтады. Атап айтқанда, ол былай деп айтты: «Балаларды ата-аналарынан алып, мектепке беру керек, олардың біразын мамандықтың бір түрін, біразын басқа мамандықтарды игеруге бағыттау керек. Мектептерді көбейту қажет, оларда тіпті қыздар да оқитын болсын».", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Ұлы ақын өз шығармаларында халықты ғылыммен белсене айналысуға үндеді. Әркімді өзінің өткен әр күніне міндетті түрде есеп беріп отыруға, келер ұрпақты парасаттылыққа шақырды.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абайдың пікірінше, адам болу үшін оның бойынан үш түрлі фактор табылуы тиіс. Біріншіден, баланың шыққан тегі жаксы болуы керек, екіншіден, оның әлеуметтік жағдайы немесе қоршаған ортасы жағымды болуы шарт, үшіншіден, балаға адамгершілік тұрғысында тәрбие берілуі қажет. Абай парақор билеушілерді, ашкөз судьяларды, надан молдаларды әшкерелеп отырды. Халықтың игілігіне жету жолындағы бұл қырсықты ғылым мен білім аркылы ғана жоюға болады деп есептеді. Ол жастарға үздіксіз еңбек етіп, білім алуды міндет етіп қойды. Білім алуға жұмылған еңбек әрқашанда жемісті және ізгілікті болатынын қадап айтты. Қараңғылықтан шығар, елді өркениетке жеткізер жалғыз жол — оқу-білім екенін көзі қарақты жастарға түсіндірді."]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Аудармашылық қызметі"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Абай орыс тілін тамаша меңгерді. Мұның өзі оның орыс ақыны Михаил Лермонтов бірқатар өлеңін қазақ тіліне аударуына мүмкіндік берді. Атап айтқанда, Абай М.Ю. Лермонтовтың «Шайтан» («Демон»), «Дұға» («Молитва»), «Қанжар», «Жолға шықтым бір жым-жырт түнде жалғыз», «Жалау» («Жалғыз жалау жалтылдап»), «Теректің сыйы» («Асау Терек долданып, буырқанып») сияқты өлеңдерін аударды. Абай А.С. Пушкиннің «Евгений Онегин» дастанының үзінділерін қазақы ұғымда жатық етіп еркін аударды. Абайдың Татьяна хатының сөзіне шығарған «Татьянаның қырдағы әні» қалың елдің сүйікті әніне айналды.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай И.А. Крыловтың мысалдарын қазақ тіліне аударумен де айналысты. Қазақтар ұлт-азаттық қозғалысының көрнекті жетекшісі Ә. Бөкейханов өзінің қырғыз даласындағы әртүрлі уездерде болған кезінде ондағы ақындардың Пушкин мен Лермонтовтың Абай аударған өлеңдерін жақсы білетініне, оларды домбырада әнге қосып айтатынына көз жеткізіп қайтқанын жазады.Орыс тілінен Абай аударған шығармалар қазақ әдебиетін байыта түсті. Абай орыстың ұлы ақындарының 50-ден астам өлеңін қазақ тіліне аударды."]
                    }), u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Абайдың Қазақстан тарихында алатын орны"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("p", {
                        children: ["Абайдың өз өлеңдері мен қара сөзбен жазылған ғибраттарында қазақ қоғамы өмірінің барлық жақтарын ашып көрсетті. Одан ақыл-кеңес сұраған дала тұрғындары ағылып келіп жатты. Атап айтқанда, оған Баянауыл өлкесіндегі белгілі шежіресі, әрі ақын Мәшһүр Жүсіп Көпейұлы келіп тұрды. Абаймен Семейге саяси жер аударылып келгендер де санасатын. Міне, мұның бәрі патша үкіметі шенеуніктері мен олардың жергілікті кейбір итаршыларының тарапынан қызғаныш пен көре алмаушылық, тіпті саяси күдік туғызды. Ақынның үстінен өсек айту мен жала жабу әрекеттерін күшейтті. Патша үкіметінің әкімшілігі Абайдың соңына шам алып түсіп, аңду орнатты. Тіпті 1903 жылы Семей полицмейстері ақынның және оның балаларының үйіне тінту жүргізді.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Жақын туыстары мен балаларының бірінен соң бірінің қазаға ұшырауы, оның үстіне ізіне түсіп қудалауға душар болуы ақынның денсаулығына әсер етті. Абай 1891 жылы өзінің ең жақсы көретін інісі Оспаннан айырылды. 1895 жылы үлкен ұлы Әбдірахман қайтыс болды. 1904 жылғы көктемде оның тағы бір ұлы Мағауия дүниеден өтті. Бұл қайғылы оқиғалар Абайға аса ауыр тиді. Мағауияның өлімінен кейін 40 күн өткенде Абайдың өзі де қайтыс болды.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Ақын өзінің талантты шәкірттерін тәрбиелеп өсірді. Абайдың ізбасар шәкірттері Шәкәрім, Көкбай, Ақылбай, Кәкітай және Мағауия болды.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай көзі тірісінде өзінің өлеңдерін жинаған емес. Олардың әрқайсысын бір жапырақ қағазға жазып, жастарға таратып бере берген. Олар Абайдың өлеңдерін жаттап алып отырған. Сөйтіп Абай өлеңдері қазақ даласында ауыздан ауызға таралып кете барды. Оның өлеңдері қолдан қолға көшіріп алынды. Ондай қолжазба көшірмеге ие болу әрбір сауатты қазақ үшін зор ғанибет болатын. Кейінірек Абайдың туындыларын оның ұлы Тұрағұл жинастыра бастады. Абай өлеңдерінің ең алғашқы жинағы 1909 жылы ақын Кәкітайдың арқасында Қазан қаласында басылып шықты. Абай Құнанбаевтың өлеңдерін жинауға және бастырып шығаруға көп күш-жігер жұмсап, игі ықпал еткен адал ақын Көкбай Жанатайұлы (1864—1927) болды. Ол өлеңдер белгілі қоғам қайраткері Әлихан Бөкейханның редакциясымен басылып шықты.", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "Абай отандық тарихымыз бен әдебиетімізде аса көрнекті орын алады. Абай қазақтың ұлттық жазба әдебиетінің негізін қалады. Абай есімі дүниежүзі халықтары әдебиетінде Шекспир, Пушкин, Гётелермен қатар тұрады. Ақынның мол әдеби мұрасы тек бір халықтың ғана емес, бүкіл адамзаттың рухани қазынасы саналады. Қазақстанда ұлы Абайдың есімі көптеген елді мекендер мен көшелерге, Алматы Ұлттық университетіне, Алматы қаласындағы Мемлекеттік академиялық опера және балет театрына берілген. Ұлы ақынның құрметіне Қазақстан мен Ресейде ескерткіштер орнатылған. Қазақстанның жоғары оқу орындарында Абай шығармашылығына арналған халықаралық және республикалық ғылыми конференциялар жыл сайын өткізіліп тұрады. Ұлы ақынның 150 жылдық мерейтойы 1995 жылы дүниежүзілік ЮНЕСКО көлемінде аталып өтті."]
                    }), u.jsx("div", {
                        className: "grid md:grid-cols-3 gap-6 pt-8",
                        children: [{
                            year: "1845",
                            title: "Туған жылы",
                            desc: "Шыңғыс өңірінде дүниеге келді."
                        }, {
                            year: "1886",
                            title: "Шығармашылық кезең",
                            desc: "Ең әйгілі өлеңдері мен ой-толғамдарын жазды."
                        }, {
                            year: "1904",
                            title: "Мұра",
                            desc: "Қазақ жазба әдебиетінің негізін қалады."
                        }].map( (c, f) => u.jsx(Nn, {
                            className: "bg-background/50 border-none shadow-sm hover:shadow-md transition-shadow",
                            children: u.jsxs(jn, {
                                className: "p-6 text-center space-y-2",
                                children: [u.jsx("span", {
                                    className: "text-4xl font-serif text-secondary opacity-50 block",
                                    children: c.year
                                }), u.jsx("h3", {
                                    className: "font-bold text-foreground",
                                    children: c.title
                                }), u.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: c.desc
                                })]
                            })
                        }, f))
                    })]
                })
            })
        }), u.jsx("section", {
            id: "poetry",
            className: "py-24 bg-background section-reveal",
            children: u.jsxs("div", {
                className: "container mx-auto px-6",
                children: [u.jsxs("div", {
                    className: "text-center max-w-2xl mx-auto mb-16 space-y-4",
                    children: [u.jsx("h2", {
                        className: "text-4xl font-serif text-foreground",
                        children: "Өлеңдер"
                    }), u.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Абай поэзиясы қазақ тілінің көркем мүмкіндігін кеңейтіп, ой мен сезімді терең жеткізді."
                    })]
                }), u.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: o.map( (c, f) => u.jsx(Nn, {
                        className: "group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-secondary/50",
                        children: u.jsxs(jn, {
                            className: "p-8 space-y-6",
                            children: [u.jsx("h3", {
                                className: "text-2xl font-serif text-primary group-hover:text-secondary transition-colors text-center",
                                children: c.title
                            }), u.jsx("div", {
                                className: "space-y-2 text-center",
                                children: c.preview.map( (m, p) => u.jsx("p", {
                                    className: "text-muted-foreground font-serif italic text-sm md:text-base leading-relaxed",
                                    children: m
                                }, p))
                            }), u.jsx("div", {
                                className: "flex justify-center",
                                children: u.jsx("button", {
                                    type: "button",
                                    onClick: () => s(f),
                                    className: "text-xs uppercase tracking-widest text-primary hover:text-secondary transition-colors duration-300",
                                    children: "Толық оқу"
                                })
                            })]
                        })
                    }, f))
                })]
            })
        }), l !== null && u.jsxs("div", {
            className: "fixed inset-0 z-50",
            children: [u.jsx("button", {
                type: "button",
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                onClick: () => s(null),
                "aria-label": "Жабу"
            }), u.jsx("div", {
                className: "relative z-10 flex h-full w-full items-center justify-center px-4 py-10",
                children: u.jsxs("div", {
                    className: "w-full max-w-3xl max-h-full overflow-y-auto rounded-2xl bg-background text-foreground shadow-2xl border border-foreground/10 transition-transform duration-300 ease-out",
                    children: [u.jsxs("div", {
                        className: "flex items-center justify-between gap-4 border-b border-foreground/10 px-6 py-4",
                        children: [u.jsx("h2", {
                            className: "text-2xl md:text-3xl font-serif",
                            children: o[l].title
                        }), u.jsx("button", {
                            type: "button",
                            onClick: () => s(null),
                            className: "inline-flex items-center justify-center rounded-full border border-foreground/20 px-3 py-1 text-sm hover:bg-foreground/5 transition",
                            children: "Жабу"
                        })]
                    }), u.jsx("div", {
                        className: "px-6 py-6 space-y-4 text-lg leading-relaxed",
                        children: o[l].full.map( (c, f) => u.jsx("p", {
                            className: "text-muted-foreground",
                            children: c
                        }, `${o[l].title}-${f}`))
                    })]
                })
            })]
        }), u.jsx("footer", {
            id: "legacy",
            className: "bg-foreground text-background py-16",
            children: u.jsxs("div", {
                className: "container mx-auto px-6 flex flex-col items-center text-center space-y-8",
                children: [u.jsx("div", {
                    className: "text-3xl font-serif font-bold tracking-tight text-background",
                    children: "Абай"
                }), u.jsx("div", {
                    className: "w-12 h-0.5 bg-secondary/50"
                }), u.jsx("p", {
                    className: "max-w-md text-background/60 font-light",
                    children: '"Адам болам десеңіз: ақыл, жүрек, қайратты тең ұстаңыз."'
                }), u.jsx("div", {
                    className: "text-sm text-background/40 pt-8",
                    children: "© 2026 Абай Құнанбайұлына арналған жоба."
                })]
            })
        })]
    })
}
const Kc = [{
    title: "Қара сөз 1",
    paragraphs: ["Бұл жасқа келгенше жақсы өткіздік пе, жаман өткіздік пе, әйтеуір бірталай өмірімізді өткіздік: алыстық, жұлыстық, айтыстық, тартыстық - әурешілікті көре-көре келдік. Енді жер ортасы жасқа келдік: қажыдық, жалықтық; қылып жүрген ісіміздің баянсызын, байлаусызын көрдік, бәрі қоршылық екенін білдік. Ал, енді қалған өмірімізді қайтіп, не қылып өткіземіз? Соны таба алмай өзім де қайранмын.", "Ел бағу? Жоқ, елге бағым жоқ. Бағусыз дертке ұшырайын деген кісі бақпаса, не албыртқан, көңілі басылмаған жастар бағамын демесе, бізді құдай сақтасын!", "Мал бағу? Жоқ, баға алмаймын. Балалар өздеріне керегінше өздері бағар. Енді қартайғанда қызығын өзің түгел көре алмайтұғын, ұры, залым, тілемсектердің азығын бағып беремін деп, қалған аз ғана өмірімді қор қылар жайым жоқ.", "Ғылым бағу? Жоқ, ғылым бағарға да ғылым сөзін сөйлесер адам жоқ. Білгеніңді кімге үйретерсің, білмегеніңді кімнен сұрарсың? Елсіз-күнсізде кездемені жайып салып, қолына кезін алып отырғанның не пайдасы бар? Мұңдасып шер тарқатысар кісі болмаған соң, ғылым өзі - бір тез қартайтатұғын күйік.", "Софылық қылып, дін бағу? Жоқ, ол да болмайды, оған да тыныштық керек. Не көңілде, не көрген күніңде бір тыныштық жоқ, осы елге, осы жерде не қылған софылық?", "Балаларды бағу? Жоқ, баға алмаймын. Бағар едім, қалайша бағудың мәнісін де білмеймін, не болсын деп бағам, қай елге қосайын, қай харекетке қосайын? Балаларымның өзіне ілгері өмірінің, білімінің пайдасын тыныштықпенен керерлік орын тапқаным жоқ, қайда бар, не қыл дерімді біле алмай отырмын, не бол деп бағам? Оны да ермек қыла алмадым.", "Ақыры ойладым: осы ойыма келген нәрселерді қағазға жаза берейін, ақ қағаз бен қара сияны ермек қылайын, кімде-кім ішінен керекті сөз тапса, жазып алсын, я оқысын, керегі жоқ десе, өз сөзім өзімдікі дедім де, ақыры осыған байладым, енді мұнан басқа ешбір жұмысым жоқ."]
}, {
    title: "Қара сөз 2",
    paragraphs: ["Мен бала күнімде естуші едім, біздің қазақ сартты көрсе, күлуші еді «енеңді ұрайын, кең қолтық, шүлдіреген тәжік, Арқадан үй төбесіне саламын деп, қамыс артқан, бұтадан қорыққан, көз көргенде «әке-үке» десіп, шығып кетсе, қызын боқтасқан, «сарт-сұрт деген осы» деп. Ноғайды көрсе, оны да боқтап күлуші еді: «түйеден қорыққан ноғай, атқа мінсе - шаршап, жаяу жүрсе - демін алады, ноғай дегенше, ноқай десеңші, түкке ыңғайы келмейді, солдат ноғай, қашқын ноғай, башалшік ноғай» деп. Орысқа да күлуші еді: «ауылды көрсе шапқан, жаман сасыр бас орыс» деп.", "Орыс ойына келгенін қылады деген... не айтса соған нанады, «ұзын құлақты тауып бер депті» деп.", "Сонда мен ойлаушы едім: ей, құдай-ай, бізден басқа халықтың бәрі антұрған, жаман келеді екен, ең тәуір халық біз екенбіз деп, әлгі айтылмыш сөздерді бір үлкен қызық көріп, қуанып күлуші едім.", "Енді қарап тұрсам, сарттың екпеген егіні жоқ, шығармаған жемісі жоқ, саудагерінің жүрмеген жері жоқ, қылмаған шеберлігі жоқ. Өзіменен өзі әуре болып, біріменен бірі ешбір шаһары жауласпайды! Орысқа қарамай тұрғанда қазақтың өлісінің ахиреттігін, тірісінің киімін сол жеткізіп тұрды. Әке балаға қимайтұғын малыңды кірелеп сол айдап кетіп тұрды ғой. Орысқа қараған соң да, орыстың өнерлерін бізден олар көп үйреніп кетті. Үлкен байлар да, үлкен молдалар да, ептілік, қырмызылық, сыпайылық - бәрі соларда. Ноғайға қарасам, солдаттыққа да шыдайды, кедейлікке де шыдайды, қазаға да шыдайды, молда, медресе сақтап, дін күтуге де шыдайды. Еңбек қылып, мал табудың да жөнін солар біледі, салтанат, әсем де соларда. Оның малдыларына, құзғын тамағымыз үшін, біріміз жалшы, біріміз қош алушымыз. Біздің ең байымызды: «сәнің шақшы аяғың білән пышыратырға қойған идән түгіл, шық, сасық казақ», - деп үйінен қуып шығарады. Оның бәрі - бірін-бірі қуып қор болмай, шаруа қуып, өнер тауып, мал тауып, зор болғандық әсері. Орысқа айтар сөз де жоқ, біз құлы, күңі құрлы да жоқпыз. Бағанағы мақтан, бағанағы қуанған, күлген сөздеріміз қайда?"]
}, {
    title: "Қара сөз 3",
    paragraphs: ["Қазақтың бірінің біріне қаскүнем болмағының, бірінің тілеуін бірі тілеспейтұғынының, рас сөзі аз болатұғынының, қызметке таласқыш болатұғынының, өздерінің жалқау болатұғынының себебі не? Һәмма ғаламға белгілі данышпандар әлдеқашан байқаған: әрбір жалқау кісі қорқақ, қайратсыз тартады; әрбір қайратсыз қорқақ, мақтаншақ келеді; әрбір мақтаншақ қорқақ, ақылсыз, надан келеді; әрбір ақылсыз надан, арсыз келеді; әрбір арсыз жалқаудан сұрамсақ, өзі тойымсыз, өнерсіз, ешкімге достығы жоқ жандар шығады.", "Мұның бәрі төрт аяқты малды көбейтеміннен басқа ойының жоқтығынан, өзге егін, сауда, өнер, ғылым - солар секілді нәрселерге салынса, бұлай болмас еді. Әрбір мал іздеген малым көп болса, өзімдікі де, балаларым да малды болса екен дейді. Ол мал көбейсе, малшыларға бақтырмақ, өздері етке, қымызға тойып, сұлуды жайлап, жүйрікті байлап отырмақ. Қыстауы тарлық қылса, арызы жеткендік, сыйы өткендік, байлық қызметінен біреудің қыстауын сатып алмақ, ептеп алмақ, тартып алмақ. Ол қыстауынан айырылған және біреуге тиіспек, я болмаса орынсыздығынан елден кетпек - әр қазақтың ойы осы.", "Осылар біріне бірі достық ойлай ала ма? Кедей көп болса, ақысы кем болар еді, малдан айырылғандар көбейсе, қыстауы босар еді деп, мен ананы кедей болса екен деп, ол мені кедей болса екен деп, әуелде ішімізбен қас сағындық. Әрі-беріден соң сыртымызға шықты, жауластық, дауластық, партияластық. Осындай қастарға сөзім өтімді болсын және де ептеп мал жиюға күшім жетімді болсын деп, қызметке болыстық, билікке таластық.", "Сонан соң не момынның баласы бөтен жаққа шығып, еңбек қылып, мал іздемейді, егін, сауданың керегі жоқ болады. Өз басын өзі осындай таласпенен кісі көбейтеміз деп партия жиғандардың бүгін біреуіне, ертең біреуіне кезекпен сатады да жүреді. Ұрылар тыйылмайды. Ел тыныш болса, оның ұрлығын ешкім сүйемес еді. Ел екі жар болған соң, кім ант ішіп ақтап, арамдығын жақтап, сүйеймін десе, соған жақ болып сүйеніп, бұрынғыдан ұрлығын әлденеше есе асырады.", "Елдегі жақсы адамдардың бәрінің үстінен бекер, өтірік «шапты, талады» деген әртүрлі уголовный іс көрсетіп, арыз береді. Оған дознание - тергеу шығарады. Өтірік көрмегенін көрдім деуші куәлар да әлдеқашан дайындап қойылған, бағанағы жақсы адам сайлауға жарамасы үшін. Ол адам басын құтқармақ үшін жамандарға жалынса, оның да адамдығының кеткені, егер жалынбаса, тергеулі, сотты адам болып, ешбір қызметке жарамай, басы қатерге түсіп өткені. Ол болыс болғандар өзі қулық, арамдықпенен болыстыққа жеткен соң, момынды қадірлемейді, өзіндей арам, қуларды қадірлейді, өзіме дос болып, жәрдемі тиеді деп, егер қас болса, бір түрлі өзіме де залал жасауға қолынан келеді деп.", "Осы күнде қазақ ішінде «ісі білмес, кісі білер» деген мақал шықты. Оның мәнісі: «ісіңнің түзулігінен жетпессің, кісіңнің амалшы, айлалылығынан жетерсің» деген сөз. Үш жылға болыс сайланады. Әуелгі жылы «Сені біз сайламадық па?» деп елдің бұлданғандығымен күні өтеді. Екінші жылы кандидатпенен аңдысып күні өтеді. Үшінші жылы сайлауға жақындап қалып, тағы болыс болып қалуға болар ма екен деп күні өтеді. Енді несі қалды? Осы қазақ халқының осындай бұзықшылыққа тартып, жылдан жылға төмендеп бара жатқанын көрген соң, менің ойыма келеді: Халықтың болыстыққа сайлаймын деген кісісі пәлен қадәрлі орысша образование алған кісі болсын. Егер де орталарында ондай кісісі жоқ болса, яки бар болса да сайламаса, уезный начальник пенен военный губернатордың назначениесімен болады десе, бұл халыққа бек пайдалы болар еді. Оның себебі: әуелі - қызметқұмар қазақ балаларына образование беруге ол да - пайдалы іс, екінші - назначениемен болған болыстар халыққа міндетті болмас еді, ұлықтарға міндетті болар еді.", "Уә және назначение қылғанда тергеуі, сұрауы барлығына қарамаса, өтірік арыз берушілер азаяр еді, бәлки жоғалар еді. Уә және әрбір болыс елде старшина басы бір би сайланғандық, бұл халыққа көп залал болғандығы көрініп, сыналып білінді. Бұл билік деген біздің қазақ ішінде әрбір сайланған кісінің қолынан келмейді. Бұған бұрынғы «Қасым ханның қасқа жолын, Есім ханның ескі жолын», Әз Тәуке ханның Күлтөбенің басындағы күнде кеңес болғанда «Жеті жарғысын» білмек керек. Әм, ол ескі сөздердің қайсысы заман өзгергендікпенен ескіріп, бұл жаңа заманға келіспейтұғын болса, оның орнына татымды толық билік шығарып, төлеу саларға жарарлық кісі болса керек еді, ондай кісі аз, яки тіпті жоқ.", "Бұрынғы қазақ жайын жақсы білген адамдар айтыпты: «Би екеу болса, дау төртеу болады» деп. Оның мәнісі - тақ болмаса, жұп билер таласып, дау көбейте береді дегенмен айтылған сөз. Өйтіп би көбейткенше, әрбір болыс елден толымды-білімді үш-ақ кісі билікке жыл кесілмей сайланса, олар түссе, жаманшылығы әшкере білінгендікпенен түссе, әйтпесе түспесе.", "Ол билерге даугер адамдар қалмай, екеуі екі кісіні билікке таңдап алып, үстіне біреуді посредникке сайлап алып, біте берсе; егер оған да ынтымақтаса алмаса, бағанағы үш бидің біреуін алып, яки жеребемен сайлап алып жүгінсе, сонда дау ұзамай, бітім болар еді."]
}, {
    title: "Қара сөз 4",
    paragraphs: ["Әрбір байқаған адам білсе керек: күлкі өзі бір мастық екенін, әрбір мас кісіден ғафил көп өтетұғынын да, әрбір мастың сөйлеген кезінде бас ауыртатұғынын. Бұлай болғанда, күлкіге салынған кісі не шаруадан, не ақылдан, не бір ұят келерлік істен құр, ғафил көп өткізіп отырса керек. Осындай ғафилдік көп өткізіп, өлмеген кісінің не дүниеде, не ахиретте басы бір ауырмай қалмаса керек.", "Әрбір уайым-қайғы ойлағыш кісі не дүние шаруасына, не ахирет шаруасына өзгеден жинақырақ болса керек. Әрбір жинақылықтың түбі кәніш болса керек. Енді олай болғанда, үнемі уайым-қайғыменен жүре аламыз ба? Үнемі күлмей жүруге жан шыдай ма екен? Жоқ, мен үнемі уайым-қайғыменен бол демеймін. Уайым-қайғысыздығыңа уайым-қайғы қыл дағы, сол уайым-қайғысыздықтан құтыларлық орынды харекет табу керек һәм қылу керек. Әрбір орынды харекет өзі де уайым-қайғыны азайтады, орынсыз күлкіменен азайтпа, орынды харекетпен азайт!", "Шығар есігін таба алмай, уайым-қайғының ішіне кіріп алып, қамалып қалмақ, ол өзі де - бір антұрғандық. Және әрбір жаман кісінің қылығына күлсең, оған рахаттанып күлме, ыза болғаныңнан күл, ызалы күлкі - өзі де қайғы. Ондай күлкіге үнемі өзің де салынбассың, әрбір жақсы адамның жақсылық тапқанына рахаттанып күлсең, оның жақсылықты жақсылығынан тапқандығын ғибрат көріп күл. Әрбір ғибрат алмақтың өзі де мастыққа жібермей, уақытымен тоқтатады. Көп күлкінің бәрін де мақтағаным жоқ, оның ішінде бір күлкі бар-ау, құдай жаратқан орныменен іштен, көкіректен, жүректен келмейді, қолдан жасап, сыртыменен бет-аузын түзеп, бай-бай күлкінің әнін сәндеп, әдемішілік үшін күлетін бояма күлкі.", "Адам баласы жылап туады, кейіп өледі. Екі ортада, бұ дүниенің рахатының кайда екенін білмей, бірін-бірі аңдып, біріне-бірі мақтанып, есіл өмірді ескерусіз, босқа, жарамсыз қылықпен, қор етіп өткізеді де, таусылған күнде бір күндік өмірді бар малына сатып алуға таба алмайды.", "Қулық саумақ, көз сүзіп, тіленіп, адам саумақ - өнерсіз иттің ісі. Әуелі құдайға сыйынып, екінші өз қайратыңа сүйеніп, еңбегіңді сау, еңбек қылсаң, қара жер де береді, құр тастамайды."]
}, {
    title: "Қара сөз 5",
    paragraphs: ["Көкірек толған қайғы кісінің өзіне де билетпейді, бойды шымырлатып, буынды құртып, я көзден жас болып ағады, я тілден сөз болып ағады. Қазақтар: «Ә, құдай, жас баладай қайғысыз қыла гөр!» деп тілек тілегенін өзім көрдім. Онысы - жас баладан гөрі өзі есті кісі болып, ескермес нәрсесі жоқсып, қайғылы кісі болғансығаны. Қайғысы не десең, мақалдарынан танырсың: әуелі - «Түстік өмірің болса, күндік мал жи», «Өзіңде жоқ болса, әкең де жат», «Мал - адамның бауыр еті», «Малдының беті - жарық, малсыздың беті - шарық», «Ер азығы мен бөрі азығы жолда», «Ердің малы елде, еріккенде қолда», «Берген перде бұзар», «Алаған қолым - береген», «Мал тапқан ердің жазығы жоқ», «Байдан үмітсіз - құдайдан үмітсіз», «Қарның ашса, қаралы үйге шап», «Қайраны жоқ көлден без, қайыры жоқ елден без» деген осындай сөздері көп, есепсіз толып жатыр.", "Бұл мақалдардан не шықты? Мағлұм болды: қазақ тыныштық үшін, ғылым үшін, білім үшін, әділет үшін қам жемейді екен, мал үшін қам жейді екен, бірақ ол малды қалайша табуды білмейді екен, бар білгені малдыларды алдап алмақ яки мақтап алмақ екен, бермесе оныменен жауласпақ екен. Малды болса, әкесін жаулауды да ұят көрмейді екен. Әйтеуір ұрлық, қулық-сұмдық, тіленшілік, соған ұқсаған қылықтың қайсысын болса да қылып жүріп, мал тапса, жазалы демесек керек екен.", "Бұлардың жас баланың ақылынан несі артық? Бірақ, жас бала қызыл ошақтан қорқушы еді, бұлар тозақтан да қорықпайды екен. Жас бала ұялса, жерге ене жаздаушы еді, бұлар неден болса да ұялмайды екен. Сол ма артылғаны? Қолымыздағыны үлестіріп талатпасақ, біз де өзіндей болмасақ, безеді екен. Іздеген еліміз сол ма?"]
}, {
    title: "Қара сөз 6",
    paragraphs: ["Қазақтың бір мақалы: «Өнер алды - бірлік, ырыс алды -тірлік» дейді. Бірлік қандай елде болады, қайтсе тату болады - білмейді. Қазақ ойлайды: бірлік - ат ортақ, ас ортақ, киім ортақ, дәулет ортақ болса екен дейді. Олай болғанда байлықтан не пайда, кедейліктен не залал? Ағайын құрымай мал іздеп не керек? Жоқ, бірлік - ақылға бірлік, малға бірлік емес. Малыңды беріп отырсаң, атасы басқа, діні басқа, күні басқалар да жалданып бірлік қылады! Бірлік малға сатылса, антұрғандықтың басы осы. Ағайын алмай бірлік қылса керек, сонда әркім несібесін құдайдан тілейді, әйтпесе құдайдан тілемейді, шаруа іздемейді. Әуелі біріне-бірі пәле іздейді. Не түсін, не ажарын, не өкпесін бұлдап, ол болмаса, бір пәле салып, қорғалатып, әйтеуір бірін-бірі алдаудың амалын іздеседі. Мұның қай жерінен бірлік шықты?", "«Ырыс алды - тірлік» дейді, ол қай тірлік? Ол осы жан кеудеден шықпағандық па? Жоқ, ондай тірлік итте де бар. Ондай тірлікті қымбат көріп, бұлдаған адам өлімді жау көріп, ахиретке дұшпан болады. Жанын қорғалатып, жаудан қашып, қорқақ атанып, еңбек қылудан, қызмет қылудан қашып, еріншек атанып, ез атанып, дүниеде әлгі айтылған ырысқа дұшпан болады. Ол айтқан тірлік олар емес. Көкірегі, көңілі тірі болса, соны айтады. Өзің тірі болсаң да, көкірегің өлі болса, ақыл табуға сөз ұға алмайсың. Адал еңбекпен ерінбей жүріп мал табуға жігер қыла алмайсың.", "Кеселді жалқау, қылжақбас,", "Әзір тамақ, әзір ас,", "Сыртың - пысық, ішің - нас,", "Артын ойлап ұялмас, -", "болып жүріп, тірімін деме, онан да алла жіберген ақ бұйрықты өлімнің өзі артық."]
}, {
    title: "Қара сөз 7",
    paragraphs: ["Жас бала анадан туғанда екі түрлі мінезбен туады: біреуі - ішсем, жесем, ұйқтасам деп тұрады. Бұлар - тәннің құмары, бұлар болмаса, тән жанға қонақ үй бола алмайды. Һәм өзі өспейді, қуат таппайды. Біреуі - білсем екен демеклік. Не көрсе соған талпынып, жалтыр-жұлтыр еткен болса, оған қызығып, аузына салып, дәмін татып қарап, тамағына, бетіне басып қарап, сырнай-керней болса, дауысына ұмтылып, онан ержетіңкірегенде ит үрсе де, мал шуласа да, біреу күлсе де, біреу жыласа да тұра жүгіріп, «ол немене?», «бұл немене?» деп, «ол неге үйтеді?» деп, «бұл неге бүйтеді?» деп, көзі көрген, құлағы естігеннің бәрін сұрап, тыныштық көрмейді. Мұның бәрі - жан құмары, білсем екен, көрсем екен, үйренсем екен деген.", "Дүниенің көрінген һәм көрінбеген сырын түгелдеп, ең болмаса денелеп білмесе, адамдықпен орны болмайды. Оны білмеген соң, ол жан адам жаны болмай, хайуан жаны болады. Әзелде құдай тағала хайуанның жанынан адамның жанын ірі жаратқан, сол әсерін көрсетіп жаратқаны. Сол қуат жетпеген, ми толмаған ессіз бала күндегі «бұл немене, ол немене?» деп, бір нәрсені сұрап білсем екен дегенде, ұйқы, тамақ та есімізден шығып кететұғын құмарымызды, ержеткен соң, ақыл кіргенде, орнын тауып ізденіп, кісісін тауып сұранып, ғылым тапқандардың жолына неге салмайды екеміз?", "Сол өрістетіп, өрісімізді ұзартып, құмарланып жиған қазынамызды көбейтсек керек, бұл жанның тамағы еді. Тәннен жан артық еді, тәнді жанға бас ұрғызса керек еді. Жоқ, біз олай қылмадық, ұзақтай шулап, қарғадай барқылдап, ауылдағы боқтықтан ұзамадық. Жан бізді жас күнімізде билеп жүр екен. Ержеткен соң, күш енген соң, оған билетпедік. Жанды тәнге бас ұрғыздық, ешнәрсеге көңілменен қарамадық, көзбен де жақсы қарамадық, көңіл айтып тұрса, сенбедік. Көзбен көрген нәрсенің де сыртын көргенге-ақ тойдық. Сырын қалай болады деп көңілге салмадық, оны білмеген кісінің несі кетіпті дейміз. Біреу кеткенін айтса да, ұқпаймыз. Біреу ақыл айтса: «Ой, тәңірі-ай, кімнен кім артық дейсің!» - дейміз, артығын білмейміз, айтып тұрса ұқпаймыз.", "Көкіректе сәуле жоқ, көңілде сенім жоқ. Құр көзбенен көрген біздің хайуан малдан неміз артық? Қайта, бала күнімізде жақсы екенбіз. Білсек те, білмесек те, білсек екен деген адамның баласы екенбіз. Енді осы күнде хайуаннан да жаманбыз. Хайуан білмейді, білемін деп таласпайды. Біз түк білмейміз, біз де білеміз деп надандығымызды білімділікке бермей таласқанда, өлер-тірілерімізді білмей, күре тамырымызды адырайтып кетеміз."]
}, {
    title: "Қара сөз 8",
    paragraphs: ["Осы ақылды кім үйренеді, насихатты кім тыңдайды?", "Біреу - болыс, біреу - би. Олардың ақыл үйренейін, насихат тыңдайын деген ойы болса, ол орынға сайланып та жүрмес еді. Олар өздері де үздік кісіміз, өздеріміз біреуге үлгі беріп, ақыл айтарлықпыз деп сайланды. Өздері түзеліп жеткен, енді елді түзерлігі-ақ қалған. Ол не қылып тыңдасын және тыңдайын десе де, қолы тие ме? Басында өзіндік жұмысы бар: ұлығымызға жазалы болып қаламыз ба, елдегі бұзақыларымызды бүлдіріп аламыз ба, немесе халқымызды бүлдіріп аламыз ба, яки өзіміз шығымдап, шығынымызды толтыра алмай қаламыз ба? - деген ебіне қарай біреуді жетілтейін деп, біреуді құтылтайын деген бейнетінің бәрі басында, қолы тимейді.", "Байлар, олар өздері де бір күн болса да, дәулет қонып, дүниенің жарымы басында тұр. Өзінде жоқты малыменен сатып алады. Көңілдері көкте, көздері аспанда, адалдық, адамдық, ақыл, ғылым, білім - ешнәрсе малдан қымбат демейді. Мал болса, құдай тағаланы да паралап алса болады дейді. Оның діні, құдайы, халқы, жұрты, білімі, ұяты, ары, жақыны - бәрі мал. Сөзді қайтіп ұқсын, ұғайын десе де, қолы тие ме? Ол малды суармақ, тойғызбақ; саудасын жиғызбақ, күзеттірмек, бақтырмақ, ұры-бөрі, қыс, суық-сұғанақ - солардан сақтанбақ, солардан сақтарлық кісі таппақ. Оның бәрін жайғастырып, аяғын алып келіп мақтанға орналастырғанша қашан? Қолы тимейді.", "Енді ұры-залым, сұм-сұрқия өздері де тыңдамайды.", "Онша-мұнша қой жүнді қоңыршалар күнін де көре алмай жүр. Аналар анадай болып тұрғанда, білім, ғылым, ақылды не қылсын? Және де білім, ғылым кедейге керегі жоқтай-ақ: «Бізді не қыласың, ана сөзді ұғарлықтарға айт!» дейді. Оның өзгеменен ісі жоқ, ана алдындағы үшеуіндей болған жанның ойында ешбір қайғысы, мұңы болмаса керек."]
}, {
    title: "Қара сөз 9",
    paragraphs: ["Осы мен өзім - қазақпын. Қазақты жақсы көрем бе, жек көрем бе? Егер жақсы көрсем, қылықтарын қостасам керек еді. Уә әрнешік бойларынан адам жақсы көрерлік, көңілге тиянақ қыларлық бір нәрсе тапсам керек еді. Соны не үміт үзбестікке, не онысы болмаса, мұнысы бар ғой деп, көңілге қуат қылуға жаратсам керек еді, ондайым жоқ. Егер жек көрсем, сөйлеспесем, мәжілістес, сырлас, кеңестес болмасам керек еді, тобына бармай, «не қылды, не болды?» демей жату керек еді, ол мүмкін болмаса, бұлардың ортасынан көшіп кету керек еді. Бұларды жөндеймін деуге, жөнделер, үйренер деген үмітім де жоқ. Бұлардың бірі де жоқ. Бұл қалай? Бұл айтқанның бірін тұтпай болмас еді.", "Мен өзім тірі болсам да, анық тірі де емеспін. Әншейін осылардың ызасынан ба, өзіме-өзім ыза болғанымнан ба, яки бөтен бір себептен бе? - еш білмеймін. Сыртым сау болса да, ішім өліп қалыпты. Ашулансам, ызалана алмаймын. Күлсем, қуана алмаймын, сөйлегенім өз сөзім емес, күлгенім өз күлкім емес, бәрі де әлдекімдікі. Қайратты күнімде қазақты қиып бөтен жаққа кетпек түгіл, өзін жақсы көріп, үміт етіп жүріппін. Қашан әбден біліп, үмітімді үзген кезде, өзге жаққа барып, жатты өз қылып, үйір боларлық кайрат, жалын сөніп те қалған екен. Сол себептен бір жүрген қуыс кеудемін. Тегінде ойлаймын: бұ да жақсы, өлер кезде «әттегене-ай, сондай-сондай қызықтарым қалды-ау!» деп қайғылы болмай, алдыңғы тілеу болмаса, артқа алаң болмай өлуге."]
}, {
    title: "Қара сөз 10",
    paragraphs: ["Біреулер құдайдан бала тілейді. Ол баланы не қылады? Өлсем орнымды бассын дейді, артымнан құран оқысын дейді, қартайған күнімде асырасын дейді. Осыдан басқасы бар ма?", "Балам орнымды бассын демек не сөз? Өзіңнен қалған дүние иесіз қалар дейсің бе? Қалған дүниенің қамын сен жемек пе едің? Өліп бара жатқанда өзгеден қызғанып айтқаның ба? Өзгеге қимайтұғын сенің не қылған артықша орның бар еді? Баланың жақсысы - қызық, жаманы - күйік, не түрлі боларын біліп сұрадың? Дүниеде өзіңнің көрген қорлығың аз болды ма? Өзіңнің қылған иттігің аз болды ма? Енді бір бала туғызып, оны да ит қылуға, оған да қорлық көрсетуге мұнша неге құмар болдың?", "Артымнан балам құран оқысын десең, тірлікте өзіңнің жақсылық қылған кісің көп болса, кім құран оқымайды? Егер жаманшылықты көп қылған болсаң, балаңның оқыған құраны сені неге жеткізеді? Тірлікте өзіңе-өзің қылмаған істі, өлген соң саған балаң кәсіп қылып бере ала ма? Ахирет үшін бала тілегенің - балам жасында өлсін дегенің. Егерде ержетсін десең, өзі ержетіп, ата-анасын тұзақтан құтқарарлық бала қазақтан туа ма екен? Ондай баланы сендей әке, сенің еліңдей ел асырап өсірмек пе екен?", "Қартайғанда асырасын десең, о да - бір бос сөз. Әуелі - өзің қаруың қайтарлық қартаюға жетемісің, жоқ па? Екінші - балаң мейірімді болып, асырарлық болып туа ма, жоқ па? Үшінші - малың болса, кім асырамайды? Малың жоқ болса, қай асырау толымды болады? Баланың мал табарлық болары, мал шашарлық болары - ол да екі талай. Хош, құдай тағала бала берді, оны өзің жақсы асырай білесің бе? Білмейсің. Әуелі өз күнәңді өзің көтергеніңмен тұрмай, балаңның күнәсіне тағы да ортақ боласың. Әуелі балаңды өзің алдайсың: «Әне, оны берем, міне, мұны берем» деп. Басында балаңды алдағаныңа бір мәз боласың. Соңыра балаң алдамшы болса, кімнен көресің? «Боқта!» деп, біреуді боқтатып, «кәпір - қияңқы, осыған тимеңдерші!» деп, оны мазаттандырып, әбден тентектікке үйретіп қойып, сабаққа бергенде, молданың ең арзанын іздеп, хат таныса болады деп, қу, сұм бол деп, «пәленшенің баласы сені сыртыңнан сатып кетеді» деп, тірі жанға сендірмей жат мінез қылып, осы ма берген тәлімің? Осы баладан қайыр күтесің бе?", "Және мал тілейсіңдер, неге керек қылайын деп тілейсіңдер? Әуелі, құдайдан тілеймісің? Тілейсің. Құдай берді, бергенін алмайсың. Құдай тағала саған еңбек қылып мал табарлық қуат берді. Ол қуатты адал кәсіп қыларлық орынға жұмсаймысың? Жұмсамайсың. Ол қуатты орнын тауып сарып қыларды білерлік ғылым берді, оны оқымайсың. Ол ғылымды оқыса, ұғарлық ақыл берді, қайда жібергеніңді кім біледі?.. Ерінбей еңбек қылса, түңілмей іздесе, орнын тауып істесе, кім бай болмайды? Оның саған керегі жоқ. Сенікі - біреуден қорқытып алсаң, біреуден жалынып алсаң, біреуден алдап алсаң болғаны, іздегенің - сол.", "Бұл - құдайдан тілеген емес. Бұл - абыройын, арын сатып, адам жаулағандық, тіленшілік. Хош, сүйтіп жүріп-ақ мал таптың, байыдың. Сол малды сарып қылып, ғылым табу керек. Өзің таба алмасаң, балаң тапсын. Ғылымсыз ахирет те жоқ, дүние де жоқ. Ғылымсыз оқыған намаз, тұтқан ораза, қылған хаж, ешбір ғибадат орнына бармайды. Ешбір қазақ көрмедім, малды иттікпен тапса да, адамшылықпен жұмсаған. Бәрі де иттікпен табады, иттікпен айрылады. Бейнет, күйігі, ызасы - сол үшеуінен басқа ешнәрсе бойында қалмайды. Барында баймын деп мақтанады. Жоғында «маған да баяғыда мал бітіп еді» деп мақтанады. Кедей болған соң, тағы қайыршылыққа түседі."]
}, {
    title: "Қара сөз 11",
    paragraphs: ["Осы елдің үнем қылып жүргені немене? Екі нәрсе. Әуелі - ұрлық, ұры ұрлықпен мал табам деп жүр. Мал иесі артылтып алып, тағы да байимын деп жүр. Ұлықтар алып берем деп, даугерді жеп, құтқарам деп ұрыны жеп жүр. Қарапайым жұрт ұрлық айтып мал алам деп, ұрыға атымды сатып пайдаланам деп, не өткізбесін арзанға түсіріп алам деп жүр. Екінші - бұзақылар біреудің ойында жоқ пәлені ойына салып, бүйтсең бек боласың, бүйтсең кеп боласың, бүйтсең кек аласың, мықты атанасың деп, ауқаттыларды азғырғалы әлек болып жүр. Кім азса, мен соған керек боламын деп, к...н қыздырып алып, өзін бір ғана азық қылайын деп жүр.", "Ұлықтар пәлі-пәлі, бұл табылған ақыл деп, мен сені бүйтіп сүйеймін деп, ананы жеп, сені бүйтіп сүйеймін деп, мынаны жеп жүр. Қара халық менің сонша үйім бар, сонша ауыл-аймағыммен сойылыңды соғайын, дауыңды айтайын деп, қай көп бергенге партиялас боламын деп, құдайға жазып, жатпай-тұрмай салып жүріп басын, ауылын, қатын-баласын сатып жүр. Осы бір ұры, бұзақы жоғалса, жұртқа ой да түсер еді, шаруа да қылар еді. Бай барын бағып, кедей жоғын іздеп, ел секілденіп талапқа, тілеуге кірісер еді. Енді жұрттың бәрі осы екі бүлік іске ортақ, мұны кім түзейді? Анттың, серттің, адалдықтың, ұяттың бір тоқтаусыз кеткені ме? Ұрыны тыю да оңай болар еді, бірақ осы бұзақының тіліне еретұғын, азатұғын байларды кім тыяды?"]
}, {
    title: "Қара сөз 12",
    paragraphs: ["Кімде-кім жақсы-жаман ғибадат қылып жүрсе, оны ол ғибадаттан тыюға аузымыз бармайды, әйтеуір жақсылыққа қылған ниеттің жамандығы жоқ қой дейміз. Ләкин, сондай адамдар толымды ғибадатқа ғылымы жетпесе де, қылса екен. Бірақ оның екі шарты бар, соны білсе екен. Әуелі - иманның иғтиқатын махкамлемек керек, екінші - үйреніп жеткенше осы да болады ғой демей, үйрене берсе керек. Кімде-кім үйреніп жетпей жатып, үйренгенін қойса, оны құдай ұрды, ғибадаты ғибадат болмайды. Уа-ләкин, кімде-кім иманның неше нәрсе бірлән кәмәләт табатұғынын білмей, қанша жерден бұзылатұғынын білмей, басына шалма орап, бірәдар атын көтеріп, оразашыл, намазшыл болып жүрген көңілге қалың бермей тұрып, жыртысын салғанға ұқсайды. Күзетшісіз, ескерусіз иман тұрмайды, ықыласыменен өзін-өзі аңдып, шын діни шыншылдап жаны ашып тұрмаса, салғырттың иманы бар деп болмайды."]
}, {
    title: "Қара сөз 13",
    paragraphs: ["Иман деген - алла табарака уа тағаланың шәриксиз, ғайыпсыз бірлігіне, барлығына уа әр түрлі бізге пайғамбарымыз саллалаһу ғалайһи уәссәлләм арқылы жіберген жарлығына, білдіргеніне мойын ұсынып, инанмақ. Енді бұл иман дерлік инануға екі түрлі нәрсе керек. Әуелі - не нәрсеге иман келтірсе, соның хақтығына ақылы бірлән дәлел жүргізерлік болып, ақылы дәлел - испат қыларға жараса, мұны якини иман десе керек. Екіншісі - кітаптан оқу бірлән яки молдалардан есту бірлән иман келтіріп, сол иман келтірген нәрсесіне соншалық берік боларға керек. Біреу өлтіремін деп қорқытса да, мың кісі мың түрлі іс көрсетсе де, соған айнып, көңілі қозғалмастай берік болу керек. Бұл иманды иман таклиди дейміз.", "Енді мұндай иман сақтауға қорықпас жүрек, айнымас көңіл, босанбас буын керек екен. Якини иманы бар деуге ғылымы жоқ, таклиди иманы бар деуге беріктігі жоқ, я алдағанға, я азғырғанға, я бір пайдаланғанға қарап, ақты қара деп, я қараны ақ деп, өтірікті шын деп ант ететұғын кісіні не дейміз? Құдай тағала өзі сақтасын. Әрнешік білмек керек, жоғарғы жазылмыш екі түрліден басқа иман жоқ. Иманға қарсы келерлік орында ешбір пенде құдай тағала кеңшілігімен кешеді дағы демесін, оның үшін құдай тағаланың ғафуына яки пайғамбарымыздың шафағатына да сыймайды, мүмкін де емес. «Қылыш үстінде серт жоқ» деген, «құдай тағаланың кешпес күнәсі жоқ» деген жалған мақалды қуат көрген мұндай пенденің жүзі құрысын."]
}, {
    title: "Қара сөз 14",
    paragraphs: ["Тірі адамның жүректен аяулы жері бола ма? Біздің қазақтың жүректі кісі дегені - батыр кісі дегені. Онан басқа жүректің қасиеттерін анықтап біле алмайды. Рақымдылық, мейірбандылық, әртүрлі істе адам баласын өз бауырым деп, езіне ойлағандай оларға да болса игі еді демек, бұлар - жүрек ісі. Асықтық та - жүректің ісі. Тіл жүректің айтқанына көнсе, жалған шықпайды. Амалдың тілін алса, жүрек ұмыт қалады. Қазақтың «жүректісі» мақтауға сыймайды. Айтқанға көнгіш, уағдада тұрғыш, бойын жаманшылықтан тез жиып алғыш, көштің соңынан итше ере бермей, адасқан көптен атының басын бұрып алуға жараған, әділетті ақыл мойындаған нәрсеге, қиын да болса, мойындау, әділетті ақыл мойындамаған нәрсеге, оңай да болса, мойындамау - ерлік, батырлық осы болмаса, қазақтың айтқан батыры - әншейін жүректі емес, қасқыр жүректі деген сөз.", "Қазақ та адам баласы ғой, көбі ақылсыздығынан азбайды, ақылдың сөзін ұғып аларлық жүректе жігер, қайрат, байлаулылықтың жоқтығынан азады. Білімді білсе де, арсыз, қайратсыздығынан ескермей, ұстамай кетеді. Жаманшылыққа бір елігіп кеткен соң, бойын жиып алып кетерлік қайрат қазақта кем болады. Осы жұрттың көбінің айтып жүрген мықты жігіт, ер жігіт, пысық жігіт деп ат қойып жүрген кісілерінің бәрі - пәлеге, жаманшылыққа еліртпек үшін, бірін-бірі «айда, батырлап!» қыздырып алады да, артын ойлатпай, азғыратұғын сөздері. Әйтпесе құдайға терістіктен, не ар мен ұятқа терістіктен сілкініп, бойын жиып ала алмаған кісі, үнемі жаманшылыққа, мақтанға салынып, өз бойын өзі бір тексермей кеткен кісі, тәуір жігіт түгіл, әуелі адам ба өзі?"]
}, {
    title: "Қара сөз 15",
    paragraphs: ["Ақылды кісі мен ақылсыз кісінің, менің білуімше, бір белгілі парқын көрдім.", "Әуелі - пенде адам болып жаратылған соң, дүниеде ешбір нәрсені қызық көрмей жүре алмайды. Сол қызықты нәрсесін іздеген кезі өмірінің ең қызықты уақыты болып ойында қалады. Сонда есті адам, орынды іске қызығып, құмарланып іздейді екен дағы, күнінде айтса құлақ, ойланса көңіл сүйсінгендей болады екен. Оған бұл өткен өмірдің өкініші де жоқ болады екен.", "Есер кісі орнын таппай, не болса сол бір баянсыз, бағасыз нәрсеге қызығып, құмар болып, өмірінің қызықты, қымбатты шағын итқорлықпен өткізіп алады екен дағы, күнінде өкінгені пайда болмай-ды екен. Жастықта бұл қызықтан соң және бір қызық тауып алатын кісімсіп, жастығы тозбастай, буыны босамастай көріп жүріп, бірер қызықты қуғанда-ақ мойны қатып, буыны құрып, екінші талапқа қайрат қылуға жарамай қалады екен.", "Үшінші - әрбір нәрсеге қызықпақтық. Ол өзі бойға құмарлық пайда қылатын нәрсе екен. Әрбір құмарлық өзіне бір дерт болады екен, әртүрлі құмар болған нәрсеге жеткенде, яки әне-міне, жетер-жетпес болып жүргенде, бір түрлі мастық пайда болады екен.", "Әрбір мастық бойдан оғатты көп шығарып, ақылдың көзін байлап, төңіректегі қараушылардың көзін ашып, «ананы-мынаны» дегізіп, бойды сынататұғын нәрсе екен. Сол уақытта есті кісілер үлкен есі шықпай, ақылды қолдан жібермей, бойын сынатпай жүріп ізденеді екен. Есер кісілер ер-тоқымын тастап, бөркі түсіп қалып, етегі атының к...н жауып кетіп, екі көзі аспанда, жынды кісіше шаба беруді біледі екен, соны көрдім.", "Егерде есті кісілердің қатарында болғың келсе, күнінде бір мәртебе, болмаса жұмасында бір, ең болмаса айында бір, өзіңнен өзің есеп ал! Сол алдыңғы есеп алғаннан бергі өмірді қалай өткіздің екен, не білімге, не ахиретке, не дүниеге жарамды, күнінде өзің өкінбестей қылықпен өткізіппісің? Жоқ, болмаса, не қылып өткізгеніңді өзің де білмей қалыппысың?"]
}, {
    title: "Қара сөз 16",
    paragraphs: ["Қазақ құлшылығым құдайға лайық болса екен деп қам жемейді. Тек жұрт қылғанды біз де қылып, жығылып, тұрып жүрсек болғаны дейді. Саудагер несиесін жия келгенде «тапқаным осы, біттім деп, алсаң — ал, әйтпесе саған бола жерден мал қазам ба?» дейтұғыны болушы еді ғой. Құдай тағаланы дәл сол саудагердей қыламын дейді. Тілін жаттықтырып, дінін тазартып, ойланып, үйреніп әлек болмайды. «Білгенім осы, енді қартайғанда қайдан үйрене аламын» дейді. «Оқымадың демесе болады дағы, тілімнің келмегенін қайтушы еді» дейді. Оның тілі өзге жұрттан бөлекше жаратылып па?"]
}, {
    title: "Қара сөз 17",
    paragraphs: ["Қайрат, ақыл, жүрек үшеуі өнерлерін айтысып, таласып келіп, ғылымға жүгініпті. Қайрат айтыпты: «Ей, ғылым, өзің де білесің ғой, дүниеде ешнәрсе менсіз кәмелетке жетпейтұғынын; әуелі, өзіңді білуге ерінбей-жалықпай үйрену керек, ол - менің ісім. Құдайға лайықты ғибадат қылып, ерінбей-жалықпай орнына келтірмек те - менің ісім. Дүниеге лайықты өнер, мал тауып, абұйыр мансапты еңбексіз табуға болмайды. Орынсыз, болымсыз нәрсеге үйір қылмай, бойды таза сақтайтұғын, күнәкәрліктен, көрсеқызар жеңілдіктен, нәфсі шайтанның азғыруынан құтқаратұғын, адасқан жолға бара жатқан бойды қайта жиғызып алатұғын мен емес пе? Осы екеуі маған қалай таласады?» - депті.", "Ақыл айтыпты: «Не дүниеге, не ахиретке не пайдалы болса, не залалды болса, білетұғын - мен, сенің сөзіңді ұғатұғын - мен, менсіз пайданы іздей алмайды екен, залалдан қаша алмайды екен, ғылымды ұғып үйрене алмайды екен, осы екеуі маған қалай таласады? Менсіз өздері неге жарайды?» - депті.", "Онан соң жүрек айтыпты: «Мен - адамның денесінің патшасымын, қан менен тарайды, жан менде мекен қылады, менсіз тірлік жоқ. Жұмсақ төсекте, жылы үйде тамағы тоқ жатқан кісіге төсексіз кедейдің, тоңып жүрген киімсіздің, тамақсыз аштың күй-жәйі қандай болып жатыр екен деп ойлатып, жанын ашытып, ұйқысын ашылтып, төсегінде дөңбекшітетұғын - мен. Үлкеннен ұят сақтап, кішіге рақым қылдыратұғын - мен, бірақ мені таза сақтай алмайды, ақырында қор болады. Мен таза болсам, адам баласын алаламаймын: жақсылыққа елжіреп еритұғын - мен, жаманшылықтан жиреніп тулап кететұғын - мен, әділет, нысап, ұят, рақым, мейірбаншылық дейтұғын нәрселердің бәрі менен шығады, менсіз осылардың көрген күні не? Осы екеуі маған қалай таласады?» - депті.", "Сонда ғылым бұл үшеуінің сөзін тыңдап болып, айтыпты:", "- Ей, қайрат, сенің айтқаныңның бәрі де рас. Ол айтқандарыңнан басқа да көп өнерлеріңнің бары рас, сенсіз ешнәрсенің болмайтұғыны да рас, бірақ қаруыңа қарай қаттылығың да мол, пайдаң да мол, бірақ залалың да мол, кейде жақсылықты берік ұстап, кейде жамандықты берік ұстап кетесің, соның жаман, - депті.", "-Ей, ақыл! Сенің айтқандарыңның бәрі де рас. Сенсіз ешнәрсе табылмайтұғыны да рас. Жаратқан тәңіріні де сен танытасың, жаралған екі дүниенің жайын да сен білесің. Бірақ сонымен тұрмайсың, амал да, айла да - бәрі сенен шығады. Жақсының, жаманның", "екеуінің де сүйенгені, сенгені - сен; екеуінің іздегенін тауып беріп жүрсің, соның жаман, - депті. - Сен үшеуіңнің басыңды қоспақ - менің ісім, - депті. Бірақ сонда билеуші, әмірші жүрек болса жарайды. Ақыл, сенің қырың көп, жүрек сенің ол көп қырыңа жүрмейді. Жақсылық айтқаныңа жаны-діні құмар болады. Көнбек түгіл қуанады. Жаманшылық айтқаныңа ермейді. Ермек түгіл жиреніп, үйден қуып шығарады.", "- Қайрат, сенің қаруың көп, күшің мол, сенің де еркіңе жібермейді. Орынды іске күшіңді аятпайды. Орынсыз жерге қолыңды босатпайды. Осы үшеуің басыңды қос, бәрін де жүрекке билет, - деп ұқтырып айтушының аты ғылым екен. Осы үшеуің бір кісіде менің айтқанымдай табылсаңдар, табанының топырағы көзге сүртерлік қасиетті адам - сол. Үшеуің ала болсаң, мен жүректі жақтадым. Құдайшылық сонда, қалпыңды таза сақта, құдай тағала қалпыңа әрдайым қарайды деп кітаптың айтқаны осы, — депті."]
}, {
    title: "Қара сөз 18",
    paragraphs: ["Адам баласына жыртықсыз, кірсіз, сыпайы киініп, һәм ол киімін былғап, былжыратып кимей, таза кимек - дұрыс іс. Ләкин өз дәулетінен артық киінбек, не киімі артық болмаса да, көңіліне қуат тұтып, тым айналдырмақ - кербездің ісі.", "Кербездің екі түрлі қылығы болады: бірі бет-пішінін, мұртын, мүшесін, жүрісін, қас-қабағын қолдан түзетіп, шынтағын көтеріп, қолын тарақтап әуре болмақ. Біреуі атын, киімін «айран ішерім» деп, солардың арқасында сыпайы, жұғымды жігіт атанбаққа, өзінен ілгерілерге елеулі болып, өзі қатардағының ішін күйдіріп, өзінен кейіншілерге «әттең, дүние-ай, осылардың атындай ат мініп, киіміндей киім кигеннің не арманы бар екен?!» - дейтұғын болмаққа ойланбақ.", "Мұның бәрі - масқаралық, ақымақтық. Мұны адам бір ойламасын, егерде бір ойласа, қайта адам болмағы - қиын іс. Кербез дегенді осындай кер, кердең немеден безіңдер деген сөзге ұқсатамын. Тегінде, адам баласы адам баласынан ақыл, ғылым, ар, мінез деген нәрселермен озбақ. Онан басқа нәрсеменен оздым ғой демектің бәрі де - ақымақтық."]
}, {
    title: "Қара сөз 19",
    paragraphs: ["Адам ата-анадан туғанда есті болмайды: естіп, көріп, ұстап, татып ескерсе, дүниедегі жақсы, жаманды таниды дағы, сондайдан білгені, көргені көп болған адам білімді болады. Естілердің айтқан сөздерін ескеріп жүрген кісі өзі де есті болады. Әрбір естілік жеке өзі іске жарамайды. Сол естілерден естіп, білген жақсы нәрселерді ескерсе, жаман дегеннен сақтанса, сонда іске жарайды, сонда адам десе болады. Мұндай сөзді есіткенде шайқақтап, шалықтанып не салбырап, салғырттанып есітсе, не есіткен жерде қайта қайырып сұрап ұғайын деп тұшынбаса, не сол жерде сөздің расына көзі жетсе де, шыға беріп қайта қалпына кетсе, естіп-есітпей не керек? Осындай сөз танымайтұғын елге сөз айтқанша, өзіңді танитұғын шошқаны баққан жақсы деп бір хакім айтқан екен, сол секілді сөз болады."]
}, {
    title: "Қара сөз 20",
    paragraphs: ["Тағдырдың жарлығын білесіздер - өзгерілмейді. Пендеде бір іс бар жалығу деген. Ол - тағдырда адаммен бірге жаратылған нәрсе, оны адам өзі тапқан емес. Оған егер бір еліксе, адам баласы құтылмағы қиын. Қайраттанып, сілкіп тастап кетсең де, ақырында тағы келіп жеңеді. Ақылы түгел, ойлы адамның баласы байқаса, осы адам баласының жалықпайтұғын нәрсесі бар ма екен? Тамақтан да, ойыннан да, күлкіден де, мақтаннан да, кербездіктен де, тойдан да, топтан да, қатыннан да көңіл, аз ба, көп пе, жалығады. Оның үшін бәрінің ғайыбын көреді, баянсызын біледі, көңілі бұрынғыдан да суый бастайды. Дүние бірқалыпты тұрмайды, адамның қуаты, ғұмыры бірқалыпты тұрмайды. Әрбір мақлұққа құдай тағала бірқалыпты тұрмақты берген жоқ. Енді көңіл қайдан бірқалыпты тұра алады?", "Бірақ осы жалығу деген әрнені көрем деген, көп көрген, дәмін, бағасын, бәрінің де баянсызын біліп жеткен, ойлы адамнан шығады. Соншалық ғұмырының баянсызын, дүниенің әрбір қызығының акырының шолақтығын көрген-білгендер тіршіліктен де жалықса болады. Бұлай болғанда ақымақтық, қайғысыздық та бір ғанибет екен деп ойлаймын."]
}, {
    title: "Қара сөз 21",
    paragraphs: ["Аз ба, көп пе, адам баласы бір түрлі мақтаннан аман болмағы - қиын іс. Сол мақтан деген нәрсенің мен екі түрлісін байқадым: біреуінің атын үлкендік деп атаймын, біреуін мақтаншақтық деймін. Үлкендік - адам ішінен өзін-өзі бағалы есеп қылмақ. Яғни, надан атанбастығын, жеңіл атанбастығын, мақтаншақ атанбастығын, әдепсіз, арсыз, байлаусыз, пайдасыз, сұрамшақ, өсекші, өтірікші, алдамшы, кеселді - осындай жарамсыз қылықтардан сақтанып, сол мінездерді бойына қорлық біліп, өзін ондайлардан зор есептемек. Бұл мінез - ақылдылардың, арлылардың, артықтардың мінезі. Олар өзімді жақсы демесе, мейлі білсін, жаман дегізбесем екен деп азаптанады. Екінші, мақтаншақ деген біреуі «демесін» демейді, «десін» дейді. Бай десін, батыр десін, қу десін, пысық десін, әрдайым не түрлі болса да, «десін» деп азаптанып жүріп, «демесінді» ұмытып кетеді. Ұмытпақ түгіл, әуелі іс екен деп ескермейді. Мұндай мақтаншақтардың өзі үш түрлі болады. Біреуі жатқа мақтанарлық мақтанды іздейді. Ол - надан, ләкин надан да болса адам. Екіншісі өз елінің ішінде мақтанарлық мақтанды іздейді. Оның надандығы толық, адамдығы әбден толық емес. Үшіншісі өз үйіне келіп айтпаса, я ауылына ғана келіп айтпаса, өзге кісі қостамайтын мақтанды іздейді. Ол - наданның наданы, ләкин өзі адам емес.", "Жатқа мақталсам екен деген елім мақтаса екен дейді. Еліме мақталсам екен деген ағайыным мақтаса екен дейді. Ағайынның ішінде өзі мақтау іздеген өзімді өзім мақтап жетем дейді."]
}, {
    title: "Қара сөз 22",
    paragraphs: ["Дәл осы күнде қазақтың ішінде кімді жақсы көріп, кімді қадірлеймін деп ойладым.", "Байды қадірлейін десең, бай жоқ. Бай болса, өз басының, өз малының еркі өзінде болмас па еді? Ешбір байдың өз малының еркі өзінде жоқ. Кей бай өзі біреумен күш таластырамын деп, жүз кісіге қорғалауықтығынан жалынып, малын үлестіріп жүр. Ойлайды: жалынтып бердім деп, ақымақтығынан. Жоқ, өзі жалынып беріп жүр. Қайыр да емес, мырзалық та емес, өз елімен, өз жерімен ойраңдасып, ойсыздарға қойнын ашып, малын шашып жүр. Кей байлар, елдегі құттылар, сүттілер берекелесе алмаған соң, кеселді қулар көбейіп кетіп, көп қорқытып, іздеген нәрсесі жоқ, еріксіз кім болса соған жеміт болып жүр.", "Мырзаларды қадірлейін десең, осы күнде анық мырза елде жоқ, мал бергіш мырза иттен көп. Біреу бір пайдама келтірем деп мырза болып жүр. Біреулер к...не құрым киізді тұзға малшып тыққан соң есі шығып, мырза болып, еріксіз кім болса соған талтайып емізіп жүр.", "Болыс пен биді құрметтейін десең, құдайдың өзі берген болыстық пен билік елде жоқ. Сатып алған, жалынып, бас ұрып алған болыстық пенен биліктің ешбір қасиеті жоқ.", "Мықтыны құрметтейін десең, жаманшылыққа елдің бәрі мықты, жақсылыққа мықты кісі елде жоқ.", "Есті кісіні тауып құрметтейін десең, әділет, ұят, нысапқа есті кісі елде жоқ. Қулық, сұмдық, арамдық, амалға елдің бәрі де есті.", "Ғаріп-қасар бишараны құрметтейін десең, жатқан түйеге міне алмаса да, ол момындыққа есеп емес. Егер мінерлік жайы болса, бірдемені ептеп ілерлік те жайы бар.", "Енді қалды қу мен сұм, олар өзі де қуартпай, суалтпай тыныштық көрер емес.", "Жә, кімді сүйдік, кімнің тілеуін тіледік? Өзі құрттанып шашылған болыс-билер тұра тұрсын. Енді, әлбәттә, амал жоқ, момындығынан «Ырыс баққан дау бақпас» деген мақалмен боламын деп, бергенінен жаға алмай, жарымын беріп, жарымын тыныштығымен баға алмай, ұры, залым, қуларға жеміт болып жүрген шын момын байларды аямасаң һәм соның тілеуін тілемесең болмайды. Сонан басқаны таба алмадым."]
}, {
    title: "Қара сөз 23",
    paragraphs: ["Біздің қазақты оңдырмай жүрген бір қуаныш, бір жұбаныш дегендер бар.", "Оның қуанышы - елде бір жаманды тауып, я бір адамның бұл өзі қылмаған жаманшылығы шықса, қуанады. Айтады: құдай пәленшеден сақтасын, о да адаммын деп жүр ғой, оның қасында біз сәулелі кісінің бірі емеспіз бе, оған қарағанда мен таза кісі емеспін бе? - деп. Оған құдай тағала айтып па, пәленшеден тәуір болсаң болады деп? Я білгендер айтып па, әйтеуір өзіңнен наданшылығы асқан, я жаманшылығы артылған кісі табылса, сен жаманға қосылмайсың деп? Жаманға салысып жақсы бола ма? Жақсыға салысып жақсы болады дағы. Жүз ат бәйгеге қосылса, мен бәйге алдым деген сөз болса, алдыңда неше ат бар деп сұрар, артыңда неше ат бар еді деп сұрағанның несі сөз? Мен бес аттан, он аттан ілгері едім дегеннің несі қуаныш?", "Енді жұбанышы - жалғыз біз бе, елдің бәрі де сүйтіп-ақ жүр ғой, көппен көрген ұлы той, көппен бірге болсақ болады да деген сөзді жұбаныш қылады. Оған құдай тағала айтып па, көптен қалмасаң болады деп. Көпке қаһарым жүрмейді деп. Көпке тұзағым жетпейді деп пе? Ғылым көпке келіп пе? Біреуден тарап па? Хикмет көптен тарай ма? Бірден тарай ма? Көпке қорлық жүрмей ме? Бір үйдің іші түгел ауырса, жеңіл тие ме? Жер білмеген көп адам адасып жүрсе, бір жер білетұғын кісінің керегі жоқ па екен? Көп кісі жолаушының бәрінің аты арығаны жақсы ма? Жоқ, жармысы арыса, жармысының күйлісі жақсы ма? Жұт келсе, елдің бәрінің түгел жұтағаны жақсы ма? Жарым-жартысы аман қалғаны жақсы ма? Осы көп ақымақтың бір ақымаққа несі жұбаныш? Тұқымымызбен аузымыз сасық болушы еді деген жаман күйеу қалыңдығын жеңіп пе? Көңілін сол сөзі разы қылуға жетіп пе? Ендеше, көбіңнен қалма, сен де аузыңды сасыта бер деп пе?!"]
}, {
    title: "Қара сөз 24",
    paragraphs: ["Жер жүзінде екі мың миллионнан көп артық адам бар, екі миллиондай қазақ бар. Біздің қазақтың достығы, дұшпандығы, мақтаны, мықтылығы, мал іздеуі, өнер іздеуі, жұрт тануы ешбір халыққа ұқсамайды. Бірімізді біріміз аңдып, жаулап, ұрлап, кірпік қақтырмай отырғанымыз. Үш миллионнан халқы артық дүниеде бір қала да бар, дүниенің бас-аяғын үш айналып көрген кісі толып жатыр. Өстіп, жер жүзіндегі жұрттың қоры болып, бірімізді біріміз аңдып өтеміз бе? Жоқ, қазақ ортасында да ұрлық, өтірік, өсек, қастық қалып, өнерді, малды түзден, бөтен жақтан түзу жолмен іздеп, өрістерлік күн болар ма екен? Әй, не болсын!.. Жүз қараға екі жүз кісі сұғын қадап жүр ғой, бірін-бірі құртпай, құрымай тыныш таба ма?"]
}, {
    title: "Қара сөз 25",
    paragraphs: ["Балаларды оқытқан да жақсы, бірақ құлшылық қыларлық қана, түркі танырлық қана таза оқыса болады. Оның үшін бұл жер дарулхарап, мұнда әуелі мал табу керек, онан соң араб, парсы керек. Қарны аш кісінің көңілінде ақыл, бойында ар, ғылымға құмарлық қайдан тұрсын? Ашап-ішімге малдың тапшылығы да ағайынның араздығына уә әртүрлі пәлеге, ұрлық, зорлық, қулық, сұмдық секілді нәрселерге үйірлендіруге себеп болатұғын нәрсе. Мал тапса, қарын тояды. Онан соң, білім түгіл өнер керек екен. Соны үйренейін не балама үйретейін деп ойына жақсы түседі. Орысша оқу керек, хикмет те, мал да, өнер де, ғылым да - бәрі орыста тұр. Зарарынан қашық болу, пайдасына ортақ болуға тілін, оқуын, ғылымын білмек керек. Оның себебі олар дүниенің тілін білді, мұндай болды. Сен оның тілін білсең, көкірек көзің ашылады. Әрбіреудің тілін, өнерін білген кісі оныменен бірдейлік дағуасына кіреді, аса арсыздана жалынбайды. Дінге де жақсы білгендік керек. Жорғалықпенен көңілін алсам екен деген надан әке-шешесін, ағайын-жұртын, дінін, адамшылығын жауырынынан бір қаққанға сатады. Тек майордың күлгені керек деп, к...і ашылса да, қам жемейді. Орыстың ғылымы, өнері - дүниенің кілті, оны білгенге дүние арзанырақ түседі. Ләкин осы күнде орыс ғылымын баласына үйреткен жандар соның қаруымен тағы қазақты аңдысам екен дейді. Жоқ, олай ниет керек емес. Малды қалай адал еңбек қылғанда табады екен, соны үйретейік, мұны көріп және үйренушілер көбейсе, ұлықсыған орыстардың жұртқа бірдей законы болмаса, законсыз қорлығына көнбес едік. Қазаққа күзетші болайын деп, біз де ел болып, жұрт білгенді біліп, халық қатарына қосылудың қамын жейік деп ниеттеніп үйрену керек. Қазір де орыстан оқыған балалардан артық жақсы кісі шыға алмай да тұр. Себебі: ата-анасы, ағайын-туғаны, бір жағынан, бұзып жатыр. Сүйтсе де, осы оқыған балалар - ана оқымаған қазақ балаларынан үздік, озық. Не қылса да сөзді ұқтырса болады оларға. Жақсы атаның балалары да көп оқыған жоқ, қайта, кедейдің балаларын орысқа қорлап берді. Олар осыдан артық қайда барсын? Және де кейбір қазақтар ағайынымен араздасқанда: «Сенің осы қорлығыңа көнгенше, баламды солдатқа беріп, басыма шаш, аузыма мұрт қойып кетпесем бе!» деуші еді. Осындай жаман сөзді, құдайдан қорықпай, пендеден ұялмай айтқан қазақтардың баласы оқығанменен не бола қойсын? Сонда да өзге қазақ балаларынан артық үйренгені немене, қай көп үйреніпті? Кірді, шықты, ілді, қайтты, түбегейлеп оқыған бала да жоқ. Әкесі ел ақшасымен оқығанға әрең оқытады, өз малын не қылып шығарсын? Турасын ойлағанда, балаңа қатын әперме, енші берме, барыңды салсаң да, балаңа орыстың ғылымын үйрет! Мына мен айтқан жол - мал аяр жол емес. Құдайдан қорық, пендеден ұял, балаң бала болсын десең - оқыт, мал аяма! Әйтпесе, бір ит қазақ болып қалған соң, саған рахат көрсете ме, өзі рахат көре ме, я жұртқа рахат көрсете ме?"]
}, {
    title: "Қара сөз 26",
    paragraphs: ["Біздің қазақтың қосқан аты алдында келсе, түсірген балуаны жықса, салған құсы алса, қосқан иті өзгеден озып барып ұстаса, есі шығып бір қуанады. Білмеймін, содан артық қуанышы бар ма екен? Әй, жоқ та шығар! Осы қуаныш бәрі де қазақ қарындастың ортасында бір хайуанның өнерінің артылғанына я бір бөтен адамның жыққанына мақтанарлық не орны бар? Ол озған, алған, жыққан өзі емес, яки баласы емес. Мұның бәрі - қазақтың қазақтан басқа жауы жоқ, биттей нәрсені бір үлкен іс қылған кісідей қуанған болып, ана өзгелерді ызаландырсам екен демек. Біреуді ызаландырмақ - шариғатта харам, шаруаға залал, ақылға теріс. Әншейін біреуді ыза қылмақтың несін дәулет біліп қуанады екен? Жә, болмаса, ана ыза болушы соншалық неге жер болып қалады екен?", "Жүйрік ат - кейде ол елде, кейде бұл елде болатұғын нәрсе, қыран құс та, жүйрік ит те - кейде оның қолына, кейде мұның қолына түсетұғын нәрсе. Күшті жігіт те үнемі бір елден шыға ма? Кейде ана елден, кейде мына елден шығады. Мұның бәрін адам өз өнеріменен жасаған жоқ. Бір озған, бір жыққан үнемі озып, үнемі жығып жүрмейді. Соның бәрін де біле тұра, жерге кіргендей болып я бір арамдығы, жамандығы шыққандай несіне ұялып, қорланады екен?", "Енді осылардан білсеңіз болады: надан ел қуанбас нәрсеге қуанады һәм және қуанғанда не айтып, не қойғанын, не қылғанын өзі білмей, есі шығып, бір түрлі мастыққа кез болып кетеді. Һәм ұялғандары ұялмас нәрседен ұялады, ұяларлық нәрседен ұялмайды. Мұның бәрі - надандық, ақымақтықтың әсері. Бұларын айтсаң, кейбіреуі «рас, рас» деп ұйыған болады. Оған нанба, ертең ол да әлгілердің бірі болып кетеді. Көңілі, көзі жетіп тұрса да, хайуан секілді әуелгі әдетінен бойын тоқтата алмайды, бір тиянақсыздыққа түсіп кетеді, ешкім тоқтатып, ұқтырып болмайды. Не жаманшылық болса да бір әдет етсе, қазақ ол әдетінен еріксіз қорыққанда я өлгенде тоқтайды, болмаса ақылына жеңгізіп, мұным теріс екен деп біліп, ойланып өздігінен тоқтаған адамды көрмессің."]
}, {
    title: "Қара сөз 27",
    paragraphs: ["(Сократ хакімнің сөзі)", "Бір күні Сократ хакім бір Аристодим деген ғалым шәкіртіне құдай табарака уа тағалаға құлшылық қылмақ турасында айтқан сөзі. Ол өзі құлшылық қылғандарға күлуші еді.", "- Әй, Аристодим, ешбір адам бар ма, сенің білуіңше, қылған өнерлері себепті адам таңырқауға лайықты? - деді.", "Ол айтты:", "Толып жатыр, қазірет.", "Бірінің атын аташы, - дейді.", "Гомерге бәйітшілігі себепті, Софоклге трагедиясы себепті, яғни біреудің сыйпатына түспектік, Зевксиске суретшілігі себепті таңырқаймын, - деп, соған ұқсаған неше онан басқа өнерлері әшкере болған жандарды айтты.", "Олай болса, кім артықша ғажайыптануға лайықты: жансыз, ақылсыз, құр пішінді жасайтұғын суретші ме? Я жан иесі, ақыл иесі адамды жаратушы ма? - дейді.", "Соңғысы лайықты, - дейді, - бірақ ол жаратушы жаратты, өздігінен кез келіп, солай болып кетпей, басынан біліп істеген хикметімен болса, - дейді.", "Жә, пайдалы нәрсе дүниеде көп, бірінің пайдасы көрініп, білініп тұрады. Кейбірінің пайдасы анық білінбейді. Соның қайсысын хикмет көресің? - деді.", "Әрине, әшкере пайдаға бола жаратылғанын хикмет десек керек деймін, - дейді.", "Жә, олай болса, адамды жаратушы хауаси хамса заһри бергенде, тахқиқ ойлап, олардың пайдасының барлығы түгел оған мұқтаж боларлығын біліп бергендігі әшкере тұр ғой. Әуелі көзді көрсін деп беріпті, егер көз жоқ болса, дүниедегі көрікті нәрселердің көркінен қайтып ләззат алар едік? Ол көз өзі нәзіктігінен керегіне қарай ашып, жауып тұруы үшін қабақ беріпті. Желден, ұшқыннан қаға берсін болуы үшін кірпік беріпті. Маңдай теріні көзден қағып тұруға керек болғандығынан, басқа тағы керегі бар қылып қас беріпті. Құлақ болмаса, не қаңғыр, не дүңгір, дауыс, жақсы үн, күй, ән – ешбірінен ләззаттанып хабар ала алмас едік. Мұрын иіс білмесе, дүниеде не тәтті, не қатты не дәмдінің қайсысынан ләззат алар едік? Бұлардың бәрі біздің пайдамыз емес пе?", "Көзді, мұрынды ауызға жақын жаратыпты, ішіп-жеген асымыздың тазалығын көріп, иісін біліп, ішіп-жесін деп. Бізге керегі бар болса да, жиіркенерлік жері бар тесіктерді бұл бастағы ғазиз білімді жерімізден алыс апарып тесіпті, мұның бәрі хикметпен біліп істелгендігіне дәлел емес пе? - депті.", "Сонда Аристодим тахқиқ ойлап тексергенде, адамды жаратушы артық хикмет иесі екендігіне һәм махаббатыменен жаратқандығына шүбәсі қалмады.", "Олай болғанда және не ойлайсың, һәмма мақұлыхатты жас балаларына елжіретіп, үйірілтіп тұруын көргенде уа һәмма мақұлыхаттың өлімін жек көріп, тіршілікте көп қалмақшылығын тілеп, ижтиһад қылуын көргенде, өсіп-өнуінің қамында болудан басқа істі аз ойламақтары - бұларының бәрі жұрт болсын, өссін, өнсін үшін. Солардың бәрін жаратқанда көңілдерін солайша ынтықтандырып қойғандығы һәм мұның бәрі жақсы көргендігінен екенін білдірмей ме? - дейді.", "Ей, Аристодим! Қалайша сен бір өзіңнен, яғни адамнан басқада ақыл жоқ деп ойлайсың? - еді. - Адамның денесі өзің жүрген жердің бір битімдей құмына ұқсас емес пе? Денеңде болған дымдар жердегі сулардың бір тамшысындай емес пе? Жә, сен бұл ақылға қайдан ие болдың? Әрине, қайдан келсе де, жан деген нәрсе келді де, сонан соң ие болдың. Бұл ғаламды көрдің, өлшеуіне ақылың жетпейді, келісті көрімдігіне һәм қандай лайықты жарастықты законімен", "жаратылып, оның ешбірінің бұзылмайтұғынын көресің. Бұлардың бәріне таңғажайып қаласың һәм ақылың жетпейді, осылардың бәрі де кез келгендікпен бір нәрседен жаралған ба, яки бұлардың иесі бір өлшеусіз ұлы ақыл ма? Егер ақылменен болмаса, бұлайша бұл есебіне, өлшеуіне", "ой жетпейтұғын дүние әрбір түрлі керекке бола жаратылып һәм бір-біріне себеппен байланыстырылып, пенденің ақылына өлшеу бермейтұғын мықты көркем законге қаратылып жаратылды, - дейді.", "Ол айтты:", "Тахқиқ бұл айтқаныңның бәрі рас, жаратушы артық ақыл иесі екендігі мағлұм болды. Ол құдайдың ұлықтығына іңкәрім жоқ. Бірақ сондай ұлық құдай менің құлшылығыма не қылып мұқтаж болады? - деді.", "Ей, Аристодим! Қате айтасың. Мұқтаж болмағанда да, біреу сенің қамыңды жесе, сенің оған қарыздар екендігіңе де ұстаз керек пе? - деді.", "Аристодим айтты:", "Ол менің қамымды жейтұғынын мен қайдан білем? - деді.", "Жә, олай болса һәмма мақұлыққа да қара, өзіңе де қара, жанды бәрімізге де беріпті. Жанның жарығын бәрімізге де бірдей ұғарлық қылып беріп пе? Адам алдын, артын, осы күнін - үшеуін де тегіс ойлап тексереді. Хайуан артын, осы күнін де бұлдыр біледі, алдыңғы жағын тексермекке тіпті жоқ. Хайуанға берген денеге қара, адамға берген денеге қара. Адам екі аяғына басып тік тұрып, дүниені тегіс көрмекке, тегіс тексермекке лайықты һәм өзге хайуандарды құлданарлық, пайдасын көрерлік лайығы бар. Хайуанның бірі аяғына сеніп жүр, бір өзіңдей хайуанды құлданарлық лайығы жоқ. Адам өзі өзіне сенбесе, адамды да хайуан секілді қылып жаратса, ешнәрсеге жарамас еді. Хайуанға адамның ақылын берсе, мұнша шеберлік, мұнша даркарлік, бір-біріне ғылым үйретерлік шешендік салахият ол денеге лайықты келмейді. Қай өгіз шаһар жасап, құрал жасап, неше түрлі сайман жасап, сыпайылық шеберліктің үдесінен шығарлық қисыны бар? Бірақ адам баласы болмаса, бұл ғажайып ақылды және ғажайыппен жасаған денеге кіргізіп, мұнша салахият иесі қылғаны хиқметпенен өзге хайуанға сұлтан қылғандығына дәлел емес пе? Ол дәлел болса, адам баласын артық көріп, қамын әуелден алланың өзі ойлап жасағанына да дәлел емес пе? Енді адам баласының құлшылық қылмаққа қарыздар екені мағлұм болмай ма? - депті."]
}, {
    title: "Қара сөз 28",
    paragraphs: ["Ей, мұсылмандар! Біреу бай болса, біреу кедей болса, біреу ауру, біреу сау болса, біреу есті, біреу есер болса, біреудің көңілі жақсылыққа мейілді, біреудің көңілі жаманшылыққа мейілді - бұлар неліктен десе біреу, сіздер айтасыздар: құдай тағаланың жаратуынан яки бұйрығынша болған іс деп. Жә, олай болса, біз құдай тағаланы айыбы жоқ, міні жоқ, өзі әділ деп иман келтіріп едік. Енді құдай тағала бір антұрғанға еңбексіз мал береді екен. Бір құдайдан тілеп, адал еңбек қылып, пайда іздеген кісінің еңбегін жандырмай, қатын-баласын жөндеп асырарлық та қылмай, кедей қылады екен. Ешкімге залалсыз бір момынды ауру қылып, қор қылады екен. Қайда бір ұры, залымның денін сау қылады екен. Әке-шешесі бір екі баланың бірін есті, бірін есер қылады екен. Тамам жұртқа бұзық болма, түзік бол деп жарлық шашып, жол салады екен. Түзікті бейішке шығарамын деп, бұзықты тозаққа саламын деп айта тұра, пендесінің біреуін жақсылыққа мейілдендіріп, біреуін жаманшылыққа мейілдендіріп, өзі құдайлық құдіретімен біреуін жақсылыққа бұрып, біреуін жамандылыққа бұрып жіберіп тұрады екен. Осының бәрі құдай тағаланың айыпсыз, мінсіз ғафур рахимдығына, әділдігіне лайық келе ме? Жұрт та, мүлік те - бәрі құдайдың өзінікі. Бұл қылғанын не дей аламыз? Өз мүлкін өзі не қылса қыла береді. Оны айыпты болады дей алмаймыз десең, ол сөзің құдай тағаланың айыбы, міні жоқ емес, толып жатыр, бірақ айтуға бата алмаймыз дегенің емес пе? Олай болғанда, пенде өз тырысқандығыменен не табады? Бәрін қылушыға қылдырушы өзі екен. Пенде пендеге өкпелейтұғын ешнәрсе жоқ. Кім жақсылық, кім жамандық қылса дағы құдайдан келген жарлықты қылып жүр екен дейміз бе? Құдай тағала әрбір ақылы бар кісіге иман парыз, әрбір иманы бар кісіге ғибадат парыз деген екен. Және де әрбір рас іс ақылдан қорықпаса керек. Жә, біз енді ақылды еркіне жібермесек, құдай тағаланың ақылы бар кісіге иман парыз дегені қайда қалады? «Мені таныған ақылменен таныр» дегені қайда қалады? Дініміздің бір жасырын тұрған жалғаны жоқ болса, ақылды, оны ойлама дегенімізге пенде бола ма? Ақыл тоқтамаған соң, діннің өзі неден болады. Әуелі иманды түзетпей жатып, қылған ғибадат не болады? Жоқ, сен жақсылық, жамандықты жаратқан - құдай, бірақ қылдырған құдай емес, ауруды жаратқан - құдай, ауыртқан құдай емес, байлықты, кедейлікті жаратқан - құдай, бай қылған, кедей қылған құдай емес деп, нанып ұқсаң болар, әйтпесе - жоқ.", "І895"]
}, {
    title: "Қара сөз 29",
    paragraphs: ["Біздің қазақтың мақалдарының көбінің іске татырлығы да бар, іске татымақ түгіл, не құдайшылыққа, не адамшылыққа жарамайтұғыны да бар.", "Әуелі «Жарлы болсаң, арлы болма» дейді. Ардан кеткен соң, тірі болып жүрген құрысын. Егер онысы жалға жүргеніңде жаныңды қинап еңбекпенен мал тап деген сөз болса, ол - ар кететұғын іс емес. Тыныш жатып, көзін сатып, біреуден тіленбей, жанын қарманып, адал еңбекпен мал іздемек - ол арлы адамның ісі.", "«Қалауын тапса, қар жанады», «Сұрауын тапса, адам баласының бермейтіні жоқ» деген - ең барып тұрған құдай ұрған сөз осы. Сұрауын табамын, қалауын табамын деп жүріп қорлықпенен өмір өткізгенше, малды не жерден сұрау керек, не аққан терден сұрау керек қой.", "«Атың шықпаса, жер өрте» дейді. Жер өртеп шығарған атыңның несі мұрат? «Жүз күн атан болғанша, бір күн бура бол» дейді. Тәңірге жазып, мінбей-түспей арып, шөмеңдеп диуаналықпен бір күн болған буралық неге жарайды?", "«Алтын көрсе, періште жолдан таяды» дейді. Періштеден садаға кеткір-ай! Періште алтынды не қылсын, өзінің көрсеқызар сұмдығын қостағалы айтқаны.", "«Ата-анадан мал тәтті, алтынды үйден жан тәтті» дейді. Ата-анасынан мал тәтті көрінетұғын антұрғанның тәтті дерлік не жаны бар. Бұлардың бәрінен де қымбат ата-анасын малға сатпақ ең арсыздың ісі емес пе? Ата-ана шамасы келсе, михнаттанып мал жиса да, дүниелік жиса да, артымда балаларыма қалсын дейді. Ол ата-ананы малға сатқан соң, құдайға дұшпандық іс емес пе? Осындай білместікпенен айтылған сөздеріне бек сақ болу керек."]
}, {
    title: "Қара сөз 30",
    paragraphs: ["Қырқын мінсе қыр артылмайтұғын осы бір «қырт мақтан» деген бір мақтан бар, сол неге керек, неге жарайды? Ол ар, есті білмейді, намысты білмейді, кең толғау, үлкен ой жоқ, не балуандығы жоқ, не батырлығы жоқ, не адамдығы жоқ, не ақылдылығы, арлылығы жоқ. Мойынын бұрып қойып: «Өй, тәңірі-ай, қойшы әрі, кімнен кім артық дейсің, кімнің басы кімнің қанжығасында жүр, ол менің қазаныма ас салып беріп жүр ме, мен онан сауын сауып отырмын ба?» - деп бұлғақтап, немесе: «аяғаным жаным ба? Өй, енесін ұрайын, өліп кетпей неге керек? Азар болса атылып, я осы үшін айдалып кетсем де көнгенім-ақ! Әйтеуір бір өлім бар ма?» - деп қалшылдайтұғын кісі көп қой.", "Өздерің көріп жүрсіңдер, осы айтқан сөз бойына лайық қазақ көрдіңдер ме? Өлімге шыдайтұғын қазақ көргенім жоқ, өлімге шыдамаймын деген де қазақ көргенім жоқ, кеңірдегін ғана көрсетеді-ау: «қиылып қана қалайын» деп. Егер осы сөз бойына лайық кісі көрінсе, ақылы жоқ болса да, қайратыменен-ақ кісі айдындыратұғын адам болғаны ғой! Егер шын айғайды көргенде, кірер жерін таба алмайтұғын дарақы, жұртты осы сөзімен айдындырамын, «мына кәпірден кісі шошитұғын екен» дегізіп айдындырайын деп айтып отырған құр домбытпасы болып, босқа қоқиып отырса, соны не дейміз? Ай, құдай-ай! Жанға мырзалық қылатұғын, ердің жадағайда-ақ сертке тұрғыштығы, малға мырзалығы, дүниені бір тиын есеп көрмейтұғын жомарттығы - әртүрлі белгісі бойынша тұрмас па еді? «Ұялмас бетке талмас жақ береді» деп, көп былжыраған арсыз, ұятсыздың бірі дағы."]
}, {
    title: "Қара сөз 31",
    paragraphs: ["Естіген нәрсені ұмытпастыққа төрт түрлі себеп бар: әуелі - көкірегі байлаулы берік болмақ керек; екінші — сол нәрсені естігенде я көргенде ғибрәтлану керек, көңілденіп, тұшынып, ынтамен ұғу керек; үшінші — сол нәрсені ішінен бірнеше уақыт қайтарып ойланып, көңілге бекіту керек; төртінші - ой кеселі нәрселерден қашық болу керек. Егер кез болып қалса, салынбау керек. Ой кеселдері: уайымсыз салғырттық, ойыншы-күлкішілдік, я бір қайғыға салыну, я бір нәрсеге құмарлық пайда болу секілді. Бұл төрт нәрсе - күллі ақыл мен ғылымды тоздыратұғын нәрселер."]
}, {
    title: "Қара сөз 32",
    paragraphs: ["Білім-ғылым үйренбекке талап қылушыларға әуелі білмек керек. Талаптың өзінің біраз шарттары бар. Оларды білмек керек, білмей іздегенмен табылмас.", "Әуелі - білім-ғылым табылса, ондай-мұндай іске жаратар едім деп, дүниенің бір қызықты нәрсесіне керек болар еді деп іздемекке керек. Оның үшін білім-ғылымның өзіне ғана құмар, ынтық болып, бір ғана білмектіктің өзін дәулет білсең және әр білмегеніңді білген уақытта көңілде бір рахат хұзур хасил болады. Сол рахат білгеніңді берік ұстап, білмегеніңді тағы да сондай білсем екен деп үміттенген құмар, махаббат пайда болады. Сонда әрбір естігеніңді, көргеніңді көңілің жақсы ұғып, анық өз суретімен ішке жайғастырып алады.", "Егер дін көңілің өзге нәрседе болса, білім-ғылымды бір-ақ соған себеп қана қылмақ үшін үйренсең, ондай білімге көңіліңнің мейірімі асырап алған шешеңнің мейірімі секілді болады. Адамның көңілі шын мейірленсе, білім-ғылымның өзі де адамға мейірленіп, тезірек қолға түседі. Шала мейір шала байқайды.", "Екінші - ғылымды үйренгенде, ақиқат мақсатпен білмек үшін үйренбек керек. Бахасқа бола үйренбе, азырақ бахас көңіліңді пысықтандырмақ үшін залал да емес, көбірек бахас адамды түземек түгіл, бұзады. Оның себебі әрбір бахасшыл адам хақты шығармақ үшін ғана бахас қылмайды, жеңбек үшін бахас қылады. Ондай бахас хусідшілікті зорайтады, адамшылықты зорайтпайды, бәлкім, азайтады. Және мақсаты ғылымдағы мақсат болмайды, адам баласын шатастырып, жалған сөзге жеңдірмекші болады. Мұндай қиял өзі де бұзықтарда болады. Жүз тура жолдағыларды шатастырушы кісі бір қисық жолдағы кісіні түзеткен кісіден садаға кетсін! Бахас - өзі де ғылымның бір жолы, бірақ оған хирслану жарамайды. Егер хирсланса, өз сөзімшіл ғурурлық, мақтаншақтық, хусідшілік бойын жеңсе, ондай адам бойына қорлық келтіретұғын өтіріктен де, өсектен де, ұрсып-төбелесуден де қашық болмайды.", "Үшінші - әрбір хақиқатқа тырысып ижтиһатыңмен көзің жетсе, соны тұт, өлсең айрылма! Егерде ондай білгендігің өзіңді жеңе алмаса, кімге пұл болады? Өзің құрметтемеген нәрсеге бөтеннен қайтіп құрмет күтесің?", "Төртінші - білім-ғылымды көбейтуге екі қару бар адамның ішінде: бірі - мұлахаза қылу, екіншісі - берік мұхафаза қылу. Бұл екі қуатты зорайту жаһатінде болу керек. Бұлар зораймай, ғылым зораймайды.", "Бесінші - осы сөздің он тоғызыншы бабында жазылған ақыл кеселі деген төрт нәрсе бар. Содан қашық болу керек. Соның ішінде уайымсыз салғырттық деген бір нәрсе бар, зинһар, жаным, соған бек сақ бол, әсіресе, әуелі - құданың, екінші - халықтың, үшінші - дәулеттің, төртінші - ғибраттың, бесінші - ақылдың, ардың -бәрінің дұшпаны. Ол бар жерде бұлар болмайды.", "Алтыншы - ғылымды, ақылды сақтайтұғын мінез деген сауыты болады. Сол мінез бұзылмасын! Көрсеқызарлықпен, жеңілдікпен, я біреудің орынсыз сөзіне, я бір кез келген қызыққа шайқалып қала берсең, мінездің беріктігі бұзылады. Онан соң оқып үйреніп те пайда жоқ. Қоярға орны жоқ болған соң, оларды қайда сақтайсың? Қылам дегенін қыларлық, тұрам дегенінде тұрарлық мінезде азғырылмайтын ақылды, арды сақтарлық беріктігі, қайраты бар болсын! Бұл беріктік бір ақыл, ар үшін болсын!"]
}, {
    title: "Қара сөз 33",
    paragraphs: ["Егерде мал керек болса, қолөнер үйренбек керек. Мал жұтайды, өнер жұтамайды. Алдау қоспай адал еңбегін сатқан қолөнерлі - қазақтың әулиесі сол. Бірақ құдай тағала қолына аз-маз өнер берген қазақтардың кеселдері болады.", "Әуелі — бұл ісімді ол ісімнен асырайын деп, артық ісмерлер іздеп жүріп, көріп, біраз істес болып, өнер арттырайын деп, түзден өнер іздемейді. Осы қолындағы аз-мұзына мақтанып, осы да болады деп, баяғы қазақтың талапсыздығына тартып, жатып алады.", "Екінші - ерінбей істей беру керек қой. Бір-екі қара тапса, малға бөге қалған кісімсіп, «маған мал жоқ па?» дегендей қылып, еріншектік, салдау-салғырттыққа, кербездікке салынады.", "Үшінші - «дарқансың ғой, өнерлісің ғой, шырағым», немесе «ағеке, нең кетеді, осы ғанамды істеп бер!» дегенде «маған да біреу жалынарлыққа жеткен екенмін» деп мақтанып кетіп, пайдасыз алдауға, қу тілге алданып, өзінің уақытын өткізеді. Және анаған дүниенің қызығы алдауды білген дегізіп, көңілін де мақтандырып кетеді.", "Төртінші - тамыршылдау келеді. Бағанағы алдамшы шайтан тамыр болалық деп, бір болымсыз нәрсені берген болып, артынан үйтемін-бүйтемін, қарық қыламын дегенге мәз болып, тамырым, досым десе, мен де керектінің бірі болып қалыппын ғой деп, және жасынан іс істеп, үйден шықпағандық қылып, жоқ-барға тырысып, алдағанды білмей, дереу оның жетпегенін жеткіземін деп, тіпті жетпесе өзінен қосып, қылып бер дегенінің бәрін қылып беріп, күні өтіп, еңбек қылар уақытынан айрылып, «жоғары шыққа» қарық болып, тамақ, киім, борыш есінен шығып кетіп, енді олар қысқан күні біреудің малын бұлдап қарызға алады. Оны қылып берейін, мұны қылып берейін деп, соныменен табыс құралмай, борышы асып, дауға айналып, адамшылықтан айрылып, қор болып кетеді. Осы несі екен. Қазақтың баласының өзі алдағыш бола тұрып және өзі біреуге алдатқыш болатұғыны қалай?"]
}, {
    title: "Қара сөз 34",
    paragraphs: ["Жұрттың бәрі біледі өлетұғынын және өлім үнемі қартайтып келмейтұғынын, бір алғанды қата жібермейтұғынын. Қазақ осыған да, амал жоқ, нанады, анық өз ойына, ақылына тексертіп нанбайды. Және һәмманы жаратқан құдай бар, ахиретте сұрау алады, жамандыққа жазғырады, жақсылыққа жарылғайды, жазғыруы да, жарылғауы да пенде ісіне ұқсамайды, бегірек есепсіз қинауы да бар, бегірек есепсіз жетістіруі де бар деп - бәріне сендік дейді. Жоқ, онысына мен сенбеймін? Олар сендім десе де, анық сенген кісіге уайым ойлап не керек? Осы екеуіне лайықты жақсылықты өздері де іздеп таба береді. Егерде осы екеуіне бұлдыр сеніп отырса, енді неге сендіре аламыз? Оны қайтіп түзете аламыз? Оларды мұсылман деп, қалайша иманы бар ғой дейміз?", "Кімде-кім ахиретте де, дүниеде де қор болмаймын десе, білмек керек: еш адамның көңілінде екі қуаныш бірдей болмайды, екі ынтық құмарлық бірдей болмайды, екі қорқыныш, екі қайғы - олар да бірдей болмайды. Мұндай екі нәрсені бірдей болады деп айтуға мүмкін емес. Олай болғанда, қай адамның көңілінде дүние қайғысы, дүние қуанышы ахирет қайғысынан, ахирет қуанышынан артық болса - мұсылман емес. Енді ойлап қарай бер, біздің қазақ та мұсылман екен! Егерде екі нәрсе кез болса, бірі ахиретке керекті, бірі осы дүниеде керекті, бірін алса, бірі тимейтұғын болса, сонда біреу ахиретке керектіні алмай, екінші бір кез келгенде алармын деп, жоқ, егер кез болмайтұғын болса, кең құдай өзі кеңшілікпенен кешіреді дағы, мына кезі келіп тұрғанда мұны жіберіп болмас деп, дүниеге керектіні алса, енді ол кісі жанын берсе ахиретті дүниеге сатқаным жоқ деп, нануға бола ма?", "Адам баласына адам баласының бәрі - дос. Не үшін десең, дүниеде жүргенде туысың, өсуің, тоюың, ашығуың, қайғың, қазаң, дене бітімің, шыққан жерің, бармақ жерің - бәрі бірдей, ахиретке қарай өлуің, көрге кіруің, шіруің, көрден махшарда сұралуың - бәрі бірдей, екі дүниенің қайғысына, пәлесіне қаупің, екі дүниенің жақсылығына рахатың - бәрі бірдей екен. Бес күндік өмірің бар ма, жоқ па?.. Біріңе-бірің қонақ екенсің, өзің дүниеге де қонақ екенсің, біреудің білгендігіне білместігін таластырып, біреудің бағына, малына күндестік қылып, я көрсеқызарлық қылып, көз алартыспақ лайық па? Тілеуді құдайдан тілемей, пендеден тілеп, өз бетімен еңбегімді жандыр демей, пәленшенікін әпер демек - ол құдайға айтарлық сөз бе? Құдай біреу үшін біреуге жәбір қылуына не лайығы бар? Екі ауыз сөздің басын қосарлық не ақылы жоқ, не ғылымы жоқ бола тұра, өзімдікін жөн қыламын деп, құр «ой, тәңір-ай!» деп таласа бергеннің несі сөз? Оның несі адам?"]
}, {
    title: "Қара сөз 35",
    paragraphs: ["Махшарға барғанда құдай тағала қажы, молда, сопы, жомарт, шейіт - соларды қатар қойып, сұрар дейді. Дүниеде ғиззат үшін, сый-құрмет алмақ үшін қажы болғанды, молда болғанды, сопы болғанды, жомарт болғанды, шейіт болғандарды бір бөлек қояр дейді. Ахиретке бола, бір ғана құдай тағаланың разылығын таппақ үшін болғандарды бір бөлек қояр дейді.", "Дүние үшін болғандарға айтар дейді: «Сендер дүниеде қажеке, молдеке, сопеке, мырзеке, батыреке аталмақ үшін өнер қылып едіңдер, ол дүниең мұнда жоқ. Сендердің ол қызықты дүниең харап болған, сонымен қылған өнерлерің де бітті. Енді мұнда құрмет алмақ түгіл, сұрау беріңдер! Мал бердім, өмір бердім, не үшін сол малдарыңды, өмірлеріңді, бетіңе ахиретті ұстап, дін ниетің дүниеде тұрып, жұртты алдамақ үшін сарып қылдыңдар?» деп.", "Ана шын ниетіменен орнын тауып, бір құдайдың разылығы үшін өнер қылғандарға айтар дейді: «Сендер бір ғана менің разылығымды іздеп малдарыңды, өмірлеріңді сарып қылып едіңдер, мен разы болдым. Сіздерге лайықты құрметті орным бар, дайын, кіріңдер! Һәм ол разылықтарыңнан басқа осы махшар ішінде, сендердің осы қылғаныңа өзі қылмаса да, іші еріп, ынтық болған достарың табылса, шафағат қылыңдар!» - деп айтар дейді."]
}, {
    title: "Қара сөз 36",
    paragraphs: ["Пайғамбарымыз салаллаһу ғалайһи уәссәлләмнің хадис шарифінде айтыпты: «мән лә хаяһүн уәлә иманун ләһу» деп, яғни кімнің ұяты жоқ болса, оның иманы да жоқ деген. Біздің қазақтың өзінің мақалы да бар: «ұят кімде болса, иман сонда» деген. Енді бұл сөзден білінді: ұят өзі иманның бір мүшесі екен. Олай болғанда білмек керек, ұят өзі қандай нәрсе? Бір ұят бар - надандықтың ұяты, жас бала сөз айтудан ұялған секілді, жақсы адамның алдына жазықсыз-ақ әншейін барып жолығысудан ұялған секілді. Не шариғатқа теріс, не ақылға теріс жазығы жоқ болса да, надандықтан бойын керістендіріп, шешілмегендік қылып, ұялмас нәрседен ұялған мұндай ұят шын ұялу емес - ақымақтық, жамандық.", "Шын ұят сондай нәрсе, шариғатқа теріс, я ақылға теріс, я абиұрлы бойға теріс бір іс себепті болады. Мұндай ұят екі түрлі болады. Біреуі - ондай қылық өзіңнен шықпай-ақ, бір бөтен адамнан шыққанын көргенде, сен ұялып кетесің. Мұның себебі сол ұят істі қылған адамды есіркегендіктен болады. «Япырым-ай, мына байғұсқа не болады, енді мұның өзі не болады» дегендей, бір нәрсе іштен рахым секілді болып келіп, өзіңді қысып, қызартып кетеді. Біреуі сондай ұят, шариғатқа теріс, я ақылға, я абиұрлы бойға теріс, я адамшылыққа кесел қылық, қатеден яки нәпсіге еріп ғапылдықтан өз бойыңнан шыққандығынан болады. Мұндай ұят қылық қылғандығыңды бөтен кісі білмесе де, өз ақылың, өз нысабың өзіңді сөккен соң, іштен ұят келіп, өзіңе жаза тарттырады. Кірерге жер таба алмай, кісі бетіне қарай алмай, бір түрлі қысымға түсесің. Мұндай ұяты күшті адамдар ұйқыдан, тамақтан қалатұғыны да бар, хатта өзін-өзі өлтіретұғын кісілер де болады. Ұят деген - адамның өз бойындағы адамшылығы, иттігіңді ішіңнен өз мойныңа салып, сөгіс қылған қысымның аты. Ол уақытта тілге сөз де түспейді, көңілге ой да түспейді. Көзіңнің жасын, мұрныңның суын сүртіп алуға да қолың тимейді, бір ит боласың. Көзің кісі бетіне қарамақ түгіл, ешнәрсені көрмейді. Мұндайлыққа жетіп ұялған адамға өкпесі бар кісі кешпесе, яки оның үстіне тағы аямай өртендіріп сөз айтқан кісінің өзінің де адамшылығы жоқ десе болар.", "Осы күнде менің көрген кісілерім ұялмақ түгіл, қызармайды да. «Ол істен мен ұятты болдым дедім ғой, енді нең бар?» дейді. Я болмаса «Жә, жә, оған мен-ақ ұятты болайын, сен өзің де сүйтіп пе едің?» дейді. Немесе «пәленше де, түгенше де тірі жүр ғой, пәлен қылған, түген қылған, менікі оның қасында несі сөз, пәлендей, түгендей мәнісі бар емес пе еді?» деп, ұялтамын десең, жап-жай отырып дауын сабап отырады. Осыны ұялған кісі дейміз бе, ұялмаған кісі дейміз бе? Ұялған десек, хадис анау, жақсылардан қалған сөз анау. Осындай адамның иманы бар дейміз бе, жоқ дейміз бе?!"]
}, {
    title: "Қара сөз 37",
    paragraphs: ["Адамның адамшылығы істі бастағандығынан білінеді, қалайша бітіргендігінен емес.", "Көңілдегі көрікті ой ауыздан шыққанда өңі қашады.", "Хикмет сөздер өзімшіл наданға айтқанда, көңіл уанғаны да болады, өшкені де болады.", "Кісіге біліміне қарай болыстық қыл; татымсызға қылған болыстық өзі адамды бұзады.", "Әкесінің баласы - адамның дұшпаны.", "Адамның баласы - бауырың.", "Ер артық сұраса да азға разы болады.", "Ез аз сұрар, артылтып берсең де разы болмас.", "Өзің үшін еңбек қылсаң, өзі үшін оттаған хайуанның бірі боласың; адамдықтың қарызы үшін еңбек қылсаң, алланың сүйген құлының бірі боласың.", "Сократқа у ішкізген, Иоанна Аркті отқа өртеген, Ғайсаны дарға асқан, пайғамбарымызды түйенің жемтігіне көмген кім? Ол – көп, ендеше көпте ақыл жоқ. Ебін тап та, жөнге сал.", "Адам баласын заман өсіреді, кімде-кім жаман болса, оның замандасының бәрі виноват.", "Мен егер закон қуаты қолымда бар кісі болсам, адам мінезін түзеп болмайды деген кісінің тілін кесер едім.", "Дүниеде жалғыз қалған адам – адамның өлгені. Қапашылықтың бәрі соның басында. Дүниеде бар жаман да көпте, бірақ қызық та, ермек те көпте. Бастапқыға кім шыдайды? Соңғыға кім азбайды?", "Жамандықты кім көрмейді? Үмітін үзбек – қайратсыздық. Дүниеде ешнәрседе баян жоқ екені рас, жамандық та қайдан баяндап қалады дейсің? Қары қалың, қатты қыстың артынан көгі мол жақсы жаз келмеуші ме еді?", "Ашулы адамның сөзі аз болса, ыза, қуаты артында болғаны.", "Қуанбақтық пен бақ – мастықтың үлкені, мыңнан бір кісі-ақ к...н ашпайтұғын ақылы бойында қалады.", "Егер ісім өнсін десең, ретін тап", "Биік мансап - биік жартас", "Ерінбей еңбектеп жылан да шығады,", "Екпіндеп ұшып қыран да шығады;", "Жікшіл ел жетпей мақтайды,", "Желөкпелер шын деп ойлайды.", "Дүние - үлкен көл,", "Заман - соққан жел,", "Алдыңғы толқын - ағалар,", "Артқы толқын - інілер,", "Кезекпенен өлінер,", "Баяғыдай көрінер.", "Бақпен асқан патшадан", "Мимен асқан қара артық;", "Сақалын сатқан кәріден", "Еңбегін сатқан бала артық.", "Тоқ тіленші - адам сайтаны,", "Харекетсіз - сопы монтаны.", "Жаман дос - көлеңке:", "Басыңды күн шалса,", "Қашып құтыла алмайсың;", "Басыңды бұлт алса,", "Іздеп таба алмайсың.", "Досы жоқпен сырлас,", "Досы көппен сыйлас;", "Қайғысыздан сақ бол,", "Қайғылыға жақ бол.", "Қайратсыз ашу - тұл,", "Тұрлаусыз ғашық - тұл,", "Шәкіртсіз ғалым - тұл.", "Бағың өскенше тілеуіңді ел де тілейді, өзің де тілейсің, бағың өскен соң - өзің ғана тілейсің"]
}, {
    title: "Қара сөз 38",
    paragraphs: ["Ей, жүрегімнің қуаты, перзентлерім! Сіздерге адам ұғылының мінездері туралы біраз сөз жазып ядкар қалдырайын. Ықыласпенен оқып, ұғып алыңыздар, оның үшін махаббатың төлеуі - махаббат. Әуелі адамның адамдығы ақыл, ғылым деген нәрселерменен. Мұның табылмақтығына себептер - әуелі хауас сәлим һәм тән саулық. Бұлар туысынан болады, қалмыс өзгелерінің бәрі жақсы ата, жақсы ана, жақсы құрбы, жақсы ұстаздан болады. Талап, ұғым махаббаттан шығады. Ғылым-білімге махаббаттандырмақ әлгі айтылған үшеуінен болады. Ғылым-білімді әуелі бастан бала өзі ізденіп таппайды. Басында зорлықпенен яки алдауменен үйір қылу керек, үйрене келе өзі іздегендей болғанша. Қашан бір бала ғылым, білімді махаббатпенен көксерлік болса, сонда ғана оның аты адам болады. Сонан соң ғана алла тағаланы танымақтық, өзін танымақтық, дүниені танымақтық, өз адамдығын бұзбай ғана жәліб мәнфағат дәфғы мұзарратларны айырмақлық секілді ғылым-білімді үйренсе, білер деп үміт қылмаққа болады. Болмаса жоқ, ең болмаса шала. Оның үшін көбінесе балаларды жасында ата-аналары қиянатшылыққа салындырып алады, соңынан моллаға берген болады, я ол балалары өздері барған болады - ешбір бәһра болмайды.", "Ол қиянатшыл балалары талапқа да, ғылымға да, ұстазға да, хаттә иман иғтиқадқа да қиянатпенен болады. Бұл қиянатшылар - жарым адам, жарым молла, жарым мұсылман. Олардың адамдығының кәмәләт таппағы - қиынның қиыны. Себебі алла тағала езі - хақиқат, растықтың жолы. Қиянат - хақиқат пен растықтың дұшпаны. Дұшпаны арқылы шақыртқанға дос келе ме? Көңілде өзге махаббат тұрғанда, хақлықты таппайды. Адамның ғылымы, білімі хақиқатқа, растыққа құмар болып, әрнәрсенің түбін, хикметін білмекке ынтықтықпенен табылады. Ол - алланың ғылымы емес, һәмманы білетұғын ғылымға ынтықтық, өзі де адамға өзіндік ғылым береді. Оның үшін ол алланың өзіне ғашықтық. Ғылым - алланың бір сипаты, ол - хақиқат, оған ғашықтық өзі де хақлық һәм адамдық дүр. Болмаса мал таппақ, мақтан таппақ, ғиззат-құрмет таппақ секілді нәрселердің махаббатымен ғылым-білімнің хақиқаты табылмайды.", "Мал, мақтан, ғиззат-құрмет адамды өзі іздеп тапса, адамдықты бұзбайды һәм көрік болады. Егерде адам өзі оларға табынып іздесе, тапса да, таппаса да адамдығы жоғалады. Енді хақиқат сүйіп, шынды білмек құмарың бар болса, адамдыққа лайықты ықыласты құлағыңды қой. Әуелі дін исламның жолындағы пенделер иманның хақиқаты не сөз екенін білсін. Иман дегеніміз бір ғана инанмақтық емес, сен алла тағаланың бірлігіне, уә құранның оның сөзі екендігіне, уә пайғамбарымыз Мұхаммед Мұстафа салаллаһу ғалайһи уәссәлләм оның тарапынан елші екендігіне инандың. Жә, не бітті? Сен алла тағалаға алла тағала үшін иман келтіремісің я өзің үшін иман келтіремісің? Сен иман келтірмесең де, алла тағалаға келер ешбір кемшілік жоқ еді. Өзің үшін иман келтірсең, жә инандың. Ол инанмақтығың құр ғана инанмақтықпен қалса, саған пайда бермейді. Оның үшін сен өзің инанмақтығыңнан пайда ала алмадың, пайдаланамын десең, пайда береді, кәміл иман болады. Пайданы қалайша алуды білмек керек. Сіз «Әмәнту биллаһи кәмаһуә би әсмайһи уасифатиһи» дедіңіз. Ол есім аллалар һәмма ол алла тағаланың фиғыл ғазимләрінің аттары, олардың мағынасын біл һәм сегіз сифат затиялары не деген сөз, кәміл үйрен. Өзіңді оның құлы біліп, өзіңе муслим ат қойып, тәслим болғаныңа раст боласың да. Өз пиғылдарыңды соған өз халіңше ұқсатуды шарт қыл. Алла тағалаға ұқсай алам ба деп, надандықпен ол сөзден жиіркенбе, ұқсамақ - дәл бірдейлік дағуасыменен емес, соның соңында болмақ. Оның үшін алла тағаланың сипаттары: Хаят, Ғылым, Құдірет, Басар, Сәмиғ, Ирада, Кәлам, Тәкин. Бұл сегізінен алла тағаладағыдай кәмәлат-ғазамат бірлән болмаса да, пендесінде де әрбірінен өз халінше бар қылып жаратыпты. Жә, біз өзіміздің бойымыздағы сегіз зәррә аттас сипатымызды ол алла тағаланың сегіз ұлығ сипатынан бас бұрғызып, өзге жолға салмақпенен біздің атымыз муслим бола ала ма? Болмаса керек. Жә, ол сегіз сипатына сипатымызды һәм ол аттары бірлән ағламланған фиғыл құдаға фиғлымызды ертпек неменен табылады, қалайша табылады, оны білмек керек. Ол - алла тағаланың заты, ешбір сипатқа мұқтаж емес, біздің ақылымыз мұқтаж, жоғарғы жазылмыш сипаттар бірлән тағрифлап танымаққа керек. Егерде ол сипаттар бірлән тағрифламасақ, бізге мағрифатулла қиын болады. Біз алла тағаланы өзінің білінгені қадар ғана білеміз, болмаса түгел білмекке мүмкін емес. Заты түгіл, хикметіне ешбір хакім ақыл ерістіре алмады. Алла тағала - өлшеусіз, біздің ақылымыз - өлшеулі. Өлшеулімен өлшеусізді білуге болмайды. Біз алла тағала «бір» дейміз, «бар» дейміз, ол «бір» демеклік те - ақылымызға ұғымның бір тиянағы үшін айтылған сөз. Болмаса ол «бір» демеклік те алла тағалаға лайықты келмейді. Оның үшін мүмкинаттың ішінде не нәрсенің ужуді бар болса, ол бірліктен құтылмайды. Әрбір хадиске айтылатұғын бір қадимге тағриф болмайды. Ол «бір» деген сөз ғаламның ішінде, ғалам алла тағаланың ішінде, құдай табарака уатағала кітаптарда сегіз субутия сипаттары бірлән, уә тоқсан тоғыз Әсмаи хұсналар бірлән білдірген. Бұлардың һәммасы алла тағаланың затия субутия уә фиғлия сипаттары дүр. Мен мұнда сіздерге төртеуін білдіремін. Оның екеуі - ғылым, құдірет. Сегіз сипаттан қалған алтауы - бұларға шарх. Ол алтауының бірі - хаят, яғни тірлік.", "Алланы бар дедік, бір дедік, ғылым, құдірет сипаты бірлән сипаттадық. Бұл бірлік, барлық ғылым, құдірет олула боларлық нәрселер ме? Әлбетте, ғылым құдіреті бар болады: хаяты - мағлұм, бірі - ирада, яғни қаламақ. Ғылым бар болса, қаламақ та бар. Ол еш нәрсеге харекет бермейді. Һәммаға харекет беретұғын өзі. Ол ирада ғылымының бір сипаты кәләм, яғни сөйлеуші деген, сөз қаріпсіз, дауыссыз болушы ма еді? Алланың сөзі - қаріпсіз, дауыссыз. Енді олай болса, айтқандай қылып білдіретұғын құдіреті және басар, сәмиғ, яғни көруші, есітуші деген. Алла тағаланың көрмегі, естімегі, біз секілді көзбенен, құлақпенен емес, көргендей, естігендей білетұғын ғылымның бір сипаты. Бірі - тәкуин, яғни барлыққа келтіруші деген сөз. Егер барлыққа келтірмегі бір өз алдына сипат болса, алла тағаланың сипаты өзіндей қадім, һәм әзали һәм әдәби болады да, һәмишә барлыққа келтіруден босанбаса, бір сипаты бір сипатынан үлкен я кіші болуға жарамайды. Олай болғанда ғылым, құдірет сипаттары секілді босанбай, һәр уақыт жаратуда болса, бір ықтиярсыздық шығады. Ол ықтиярсыздық алла тағалаға лайықты емес. Оның барлыққа келтірмегі - құдіретіне ғана бір шарх. Бұл ғылым, құдіретте ешбір ниһоятсіз, ғылымында ғафләт, құдіретінде епсіздік және нашарлық жоқ. Саниғын сұңғатына қарап білесіз. Бұл көзге көрілген, көңілге сезілген ғаламды қандай хикметпенен жарастырып, қандай құдіретпенен орналастырған, ешбір адам баласының ақылы жетпейді. Бірақ пендесінде ақыл - хүкімші, қайрат, қуат - қызмет қылушы еді. Соған қарап ойлайсың: алла тағаланың сипатында солай болмаққа тиіс. Бірақ әуелде айтқанымыз: ғылым, құдірет - біздің ұғуымызға ғана екі хисап болмаса, бір-ақ ғылымды құдірет болуға тиіс. Олай болмаса сипаттар өз орталарында бірі тәбиғ, бірі матбуғ болады ғой. Бұл болса, тариф раббыға жараспайды. Сегіз сипат қылып және ол сипаттар «Лағаиру уәлә һуә» болып, бұлай айтуда, бұлардан бір өз алдына жамағат яки жамиғат шығып кетеді. Бұл болса келіспейді. Егерде сипаттарды әрбірін басқа-басқа дегенде, көп нәрседен жиылып, иттифақпенен құдай болған болады. Бұлай деу батыл, бір ғана құдірет пендеде болған қуат; құдірет ғылым ақылдан басқа болатұғын, алла тағалада болған құдірет - ғылым һәм рахмет. Ол – рахмет сипаты, сегіз сипаттың ішінде жазылмаса да, алла тағаланың Рахман, Рахим, Ғафур, Уадуд, Хафиз, Сәттар, Раззақ, Нафиғ, Уәкил, Латиф деген есімдеріне бинаһи бір ұлығ сипатынан хиссаптауға жарайды. Бұл сөзіме нақлия дәлелім - жоғарыдағы жазылған алла тағаланың есімдері. Ғақлия дәлелім құдай тағала бұл ғаламды ақыл жетпейтін келісіммен жаратқан, онан басқа, бірінен бір пайда алатұғын қылып жаратыпты. Жансыз жаратқандарынан пайда алатұғын жан иесі хайуандарды жаратып, жанды хайуандардан пайдаланатұғын ақылды инсанды жаратыпты.", "Хайуандарды асырайтұғын жансыздарды еті ауырмайтын қылып, жан иесі хайуандарды ақыл иесі адам баласы асырайтын қылып, һәм олардан махшарда сұрау бермейтұғын қылып, бұлардың һәммасынан пайда аларлық ақыл иесі қылып жаратқан. Адам баласынан махшарда сұрау алатұғын қылып жаратқандығында һәм ғадаләт һәм махаббат бар. Адам баласын құрт, құс, өзге хайуандар секілді тамақты өз басымен алғызбай, ыңғайлы екі қолды басқа қызмет еттіріп, аузына қолы ас бергенде, не ішіп, не жегенін білмей қалмасын деп, иісін алып ләззаттанғандай қылып, ауыз үстіне мұрынды қойып, оның үстінен тазалығын байқарлық екі көз беріп, ол көздерге нәзіктен, зарардан қорғап тұрарлық қабақ беріп, ол қабақтарды ашып-жауып тұрғанда қажалмасын деп кірпік жасап, маңдай тері тура көзге ақпасын деп, қаға беруге қас беріп, оның жүзіне көрік қылып, бірінің қолынан келместей істі көптесіп бітірмекке, біреуі ойын біреуіне ұқтырарлық тіліне сөз беріп жаратпақтығы махаббат емес пе? Кім өзіңе махаббат қылса, сен де оған махаббат қылмағың қарыз емес пе? Ақыл көзімен қара: күн қыздырып, теңізден бұлт шығарады екен, ол бұлттардан жаңбыр жауып, жер жүзінде неше түрлі дәндерді өсіріп, жемістерді өндіріп, көзге көрік, көңілге рахат гүл-бәйшешектерді, ағаш-жапырақтарды, қант қамыстарын өндіріп, неше түрлі нәбатәттәрді өстіріп, хайуандарды сақтатып, бұлақтар ағызып, өзен болып, өзендер ағып дария болып, хайуандарға, құсқа, малға сусын, балықтарға орын болып жатыр екен. Жер мақтасын, кендірін, жемісін, кенін, гүлдер гүлін, құстар жүнін, етін, жұмыртқасын; хайуандар етін, сүтін, күшін, көркін, терісін; сулар балығын, балықтар икрасын, хатта ара балын, балауызын, құрт жібегін - һәммасы адам баласының пайдасына жасалып, ешбірінде бұл менікі дерлік бір нәрсе жоқ, бәрі - адам баласына таусылмас азық.", "Миллион хикмет бірлән жасалған машина, фабрик адам баласының рахаты, пайдасы үшін жасалса, бұл жасаушы махаббат бірлән адам баласын сүйгендігі емес пе? Кім сені сүйсе, оны сүймектік қарыз емес пе? Адам баласы қанағатсыздықпенен бұл хайуандардың тұқымын құртып, алдыңғылар артқыларға жәбір қылмасын деп, малды адам баласының өзінің қызғанышына қорғалатып, өзге хайуандарды бірін ұшқыр қанатына, бірін күшті қуатына, бірін жүйрік аяғына сүйентіп, бірін биік жартасқа, бірін терең тұңғиыққа, қалың орманға қорғалатып, һәм әрбірін өсіп-өнбекке құмар қылып, жас күнінде, кішкене уақытында шафғат, сәхәріменен бастарын байлап, қамқор қылып қоймақтығы - адам баласына өсіп-өніп, теңдік алсын емес, бәлки, адам баласының үзілмес нәсіліне таусылмас азық болсын дегендік. Жә, бұл хикметтерінің һәммасын һәм мархамат, һәм ғадаләт заһир тұр екен. Біз ортамызда бұл мархамат, ғадаләтті иманның шартынан хисап қылмаймыз, оның үшін муслим болғанда, алла тағалаға тәслим болып, оның жолында болмақ едік, болғанымыз қайсы? Бұл екі ай мен күннен артық мағұлым тұрған жоқ па? Фиғылы құданың ешбірін де қарар қылмаймыз, өзгелерде болғанын жек көрмейміз, өзіміз тұтпаймыз, бұл қиянатшылық емес пе? Қиянатшылыққа бір қарар тұрған адам - я мұсылман емес, ең болмаса шала мұсылман. Алла табарака уатағаланың пенделеріне салған жолы қайсы? Оны көбі білмейді. «Тәфаккару фиғла иллаһи» деген хадис шарифтің «инналаһу йухиббул муқситин» деген аяттарға ешкімнің ықыласы, көңілі менен ғылымы жетіп құптағанын көргенім жоқ. «Әтәмурун әннәсә билбирри уәәхсәну инналаһу йухиббул мұхсин», «уәлләзинә әмәну уәғәмилу салихати улайна асхабул жәннәти һәм фиһа халидун» деген аяттар құранның іші толған ғамалус-салих не екенін білмейміз. «Уа әммәлзина амәну уәғамилус саликати фәйуәффиһим ужурәһум уаллаһу лә йүхиб-буз-залимин» аятына қарасаң, ғамалус-салих залықтықтың зидды болар. Олай болғанда ғадаләт рафғат болуға кімде-кімнің әділеті жоқ болса, оның хаясы жоқ, кімнің ұяты жоқ болса, оның иманы жоқ деген, пайғамбарымыздың салаллаһу ғалайһи уәссәлләмнің хадис шарифі «мән-лә хаяун лаһу» деген дәлел дүр. Енді белгілі, иман құр инанышпенен болмайды, ғадаләт уа рафғат бірлән болады. Ғамалус-салих ғадаләтті уә мархамәтті болмақ күллі тән бірлән қылған құлшылдықтардың ешбірі ғадаләтті, мархаматты бермейді. Көзің күнде көреді намаз оқушы, ораза тұтушылардың не халәттә екендіктерін, оған дәлел керек емес. Бәлки ғадаләт барша ізгіліктің анасы дүр. Ынсап, ұят - бұл ғадаләттен шығады. Оның үшін ғадаләті адамның көңіліне келеді: мен өз көңілімде халық менімен, сондай-мұндай қылықтарымен мұғамәла қылса екен деп ойлап тұрып, өзім сол халықтармен мұғамәла қылмағандығым жарамайды ғой деп, сол езі әділет те және нысап та емес пе? Ол һәмма жақсылықтың басы емес пе? Жә, олай хұлық пенен сол ойды ойлаған кісі халлақыны шүкірді неге ойламасын?", "Шәкірліктен ғибадаттың бәрі туады. Енді зинһар ғадаләт, шапағаттан босанбаңдар. Егер босансаң, иман да, адамдық та һаммасы босанады. Аллаяр софының бір фәрдәдән жүз фәрдә бижай дегені басыңа келеді. Енді біздің бастағы тағриф бойынша құдай тағала ғылымды, рахымды, ғадаләтті, құдіретті еді. Сен де бұл ғылым, рахым, ғадаләт үш сипатпенен сипаттанбақ: ижтиһатің шарт еттің, мұсылман болдың һәм толық инсаниятың бар болады. Белгілі жәуанмәртлік үш хаслат бірлән болар деген, сиддиқ, кәрәм, ғақыл - бұл үшеуінен сиддиқ ғадаләт болар, кәрәм шафағат болар. Ғақыл мағалұм дүр, ғылымның бір аты екендігі. Бұлар әр адамның бойында алла табарака уатағала тәхмин бар қылып жаратқан. Бірақ оған рәуаж беріп гүлдендірмек, бәлки, адам өз халінше кәмәлатқа жеткізбек жәһәтінде болмақ. Бұлар - ез иждиһадің бірлән ниет халис бірлән ізденсең ғана берілетін нәрселер, болмаса жоқ. Бұл айтылмыш үш хасләттің иелерінің алды - пайғамбарлар, онан соң - әулиелер, онан соң - хакімдер, ең ақыры - кәміл мұсылмандар. Бұл үш түрлі фиғыл құданың соңында болмақ, өзін құл біліп, бұл фиғылдарға ғашық болып тұтпақты пайғамбарлар үйретті әулиелерге, әулиелер оқыды, ғашық болды. Бірақ, ухрауи пайдасын ғана күзетті. Ғашықтары сол халге жетті, дүниені, дүниедегі тиерлік пайдасын ұмытты. Бәлки, хисапқа алмады. Хакімдер дүниеде тиетін пайдасын сөйледі, ғибрәт көзімен қарағанда, екеуі де бірінен-бірі көп жырақ кетпейді. Оның үшін әрбірінің сөйлеуі, айтуы басқаша болса да, алла тағаланың сұңғатына қарап пікірлемектікті екеуі де айтты. Пікірленбек соңы ғибраттанбақ болса керек. Бұл ғақыл, ғылым - екеуі де өзін зорға есептемекті, залымдықты, адам өзіндей адамды алдамақты жек көреді. Бұл ғадаләт һәр екеуі де мархаматты, шапағатты болмақтықты айтып бұйырды, бұл рақым болса керек. Бірақ менің ойыма келеді, бұл екі таһифа әр кісі өздеріне бір түрлі нәпсісін фида қылушылар деп. Яғни, пенделіктің кәмәлаты әулиелікпен болатұғын болса, күллі адам тәркі дүние болып һу деп тариқатқа кірсе, дүние ойран болса керек. Бұлай болғанда малды кім бағады, дұшпанды кім тоқтатады, киімді кім тоқиды, астықты кім егеді, дүниедегі алланың пенделері үшін жаратқан қазыналарын кім іздейді? Хәрами, макруһи былай тұрсын, құдай тағаланың қуатыменен, ижтиһад ақылыңменен тауып, рахатын көрмегіне бола жаратқан, берген ниғметтеріне, онан көрмек хұзурға суық көзбен қарап, ескерусіз тастап кетпек ақылға, әдепке, ынсапқа дұрыс па?", "Сахиб ниғметке шүкіршілігің жоқ болса, әдепсіздікпенен күнәкәр болмайсың ба? Екінші - бұл жолдағылар қор болып, дүниеде жоқ болып кету де хаупі бар, уә кәпірлерге жем болып кету де, қайсыбір сабырсызы жолынан тайып, сабырмен бір қарар тұрамын дегені болып кетселер де керек. Егерде бұл жол жарым-жартыларына ғана айтылған болса, жарым-жарты раст дүниеде бола ма? Рас болса, һәммаға бірдей раст болсын, алалаған раст бола ма, һәм ғадаләт бола ма? Олай болғанда, ол жұртта ғұмыр жоқ болса керек. Ғұмыр өзі - хақиқат. Қай жерде ғұмыр жоқ болса, онда кәмәлат жоқ. Бірақ әулиелердің де бәрі бірдей тәркі дүние емес еді, ғашәрән - мүбәшәрәдан қазірет Ғосман, Ғабдурахман бин Ғауф уа Сағид бин Әбудқас үшеуі де үлкен байлар еді. Бұл тәркі дүниелік: я дүние ләззатына алданып ижтиһадым шала қалады деп, бойына сенбегендік; я хирс дүниеліктен қауымның көңілін суытпақ үшін, ренжуге сабыр етіп, өзін фида қылып, мен жаныммен ұрыс қылғанда, халық ең болмаса нәпсісімен ұрыс қылып, һәуа һәуастан әрбір арзу нәпсіден суынып, ғадаләт, мархамат, махаббатына бір қарар болар ма екен деген үмітпенен болса керек. Олай болғанда о да жұртқа қылған артық махаббаттан хисап. Бірақ бұл жол - бек шетін, бек нәзік жол. Бұл жолда риясыз, жеңілдіксіз бір қарар тұрып іздеген ғана кісі істің кәмәлатына жетпек. Бұл заманда надир, бұған ғылымның да зоры, сиддиқ, қайраттың да зоры, махаббаттың халлақна да, уа халық ғаламға да бек зоры табылмақ керек. Бұлардың жиылмағы - қиынның қиыны, бәлки, фитнә болар.", "Басына һәм бір өзіне өзгешелік бермек - адам ұлын бір бұзатын іс. Әрбір наданның бір тариқатқа кірдік деп жүргені біз бұзылдық дегеніменен бір болады. Хакім, ғалым асылда бір сөз, бірақ Ғарафта басқалар дүр. Дүниеде ғылым заһири бар, олар айтылмыштарды жазылмыштар, оны нақлия деп те айтады. Бұл наклияға жүйріктер ғалым атанады. Құдай тәбәрака уа тағала ешбір нәрсені себепсіз жаратпаған, мұны ізерлеп тәффаккару фи әла-иллаһи деген хадиске бинаән бұл сүнғати құдадан ізерлеп, құмар болып ғибратланушыларға тыю жоқ, бәлки, сұнғатынан себебін білмекке құмарлықтан саниғ ғашықтық шығады. Құдай тәбәраканың затына пендесінің ақылы жетпесе, дәл сондай ғашықпын демек те орынсыз. Ғашық-мағшұғлыққа халик бірлән махлұқ ортасы мунәсибәтсіз, алла тағаланың пендесін махаббат уа мархамат бірлән жаратқанын біліп, махаббатына махаббатпенен ғана елжіремекті құдаға ғашық болды дейміз. Олай болғанда хикмет құдаға пенде өз ақылы жетерлік қадірін ғана білсем деген әрбір істің себебін іздеушілерге хакім ат қойды. Бұлар хақ бірлән батылды айырмаққа, себептерін білмекке тырысқандарыменен һәммасы адам баласының пайдасы үшін, ойын-күлкі түгіл, дүниедегі бүкіл ләззат бұларға екінші мәртабада қалып, бір ғана хақты таппақ, әрбір нәрсенің себебін таппақпенен ләззаттанады.", "Адаспай тура іздеген хакімдер болмаса, дүние ойран болар еді. Фиғыл пәнденің қазығы - осы жақсы хакімдер, әр нәрсе дүниеде бұлардың истихражы бірлән рауаж табады. Бұлардың ісінің көбі - дүние ісі, ләкин осы хакімдердің жасаған, таратқан істері. Әддүния мәзрәгәтул-ахирет дегендей, ахиретке егіндік болатын дүние сол. Әрбір ғалым - хакім емес, әрбір хакім - ғалым. Ғалымдарының нақлиясы бірлән мұсылман иман тақлиди кәсіп қылады. Хакімдердің ғақлияты бірлән жетсе, иман якини болады. Бұл хакімдерден мұрат - мұсылман хакімдері, болмаса ғайри діннің хакімдері - әгәрше фатлубни тәжиду-ни делінсе де, дүниенің һәм адам ұғлы өмірінің сырына жетсе де, діннің хақ мағрифатына жете алмағандар. Бұлардың көбі - иманның жеті шартынан, бір алланы танымақтан ғайри, яғни алтауына кімі күмәнді, кімі мүнкір болып, тахқиқлай алмағандар. Егер бұлар дін ұстазымыз емес болса да, дінде басшымыз құдайдың елшісі пайғамбарымыздың хадис шарифі, хайру н-нас мән йанфагу н-нас деген. Бұл хакімдер ұйқы, тыныштық, әуес-қызықтың бәрін қойып, адам баласына пайдалы іс шығармақлығына, яғни электрияны тауып, аспаннан жайды бұрып алып, дүниенің бір шетінен қазір жауап алып тұрып, от пен суға қайласын тауып, мың адам қыла алмастай қызметтер істетіп қойып тұрғандығы, уахсусан адам баласының ақыл-пікірін ұстартып, хақ пенен батылдықты айырмақты үйреткендігі - баршасы нафиғлық болған соң, біздің оларға міндеткерлігімізге дау жоқ.", "Бұл заманның молдалары хакім атына дұшпан болады. Бұлары білімсіздік, бәлки, бұзық фиғыл, әл-инсан ғәдду ләма жәһилгә хисап. Олардың шәкірттерінің көбі біраз ғарап-парсыдан тіл үйренсе, бірлі-жарым болымсыз сөз бахас үйренсе, соған мәз болып, өзіне өзгешелік беремін деп әуре болып, жұртқа пайдасы тимек түгіл, түрлі-түрлі зарарлар хасил қылады «һай-һой!» менен, мақтанменен қауымды адастырып бітіреді. Бұлардың көбі әншейін жәһил түгіл, жәһиләләр кібік талап болса, қайда хақ сөздер келсе, қазір нысапқа қайтсын һәм ғибраттансын. Рас сөзге ор қазып, тор жасамақ не деген нысап, құр өзімшілдік һәм әр өзімшілдік - адам баласын бұзатын фиғыл. Растың бір аты - хақ, хақтың бір аты - алла, бұған қарсы қаруласқанша, мұны ұғып, ғадаләтпен тәптештеуге керек. Мұндай фиғылдардан күпір қаупі де бар. Және пайғамбарымыз салаллаһу ғалайһи уәссәлләм «ақыр заманда бір жылдық бір күн болар» дегенде сахаба-и кәрәмлар «бұл бір жылдық бір күнде намаз нешеу болар» деп сұрағанда: оның патуасын сол заманның ғалымдары білер деген сөзінен ғибратланып қарасаң, замана өзгеруімен қағидалар өзгерілмегін білдіргені мағлұм болады. Бұл күндегі тәхсилғулум ескі медреселер ғұрпында болып, бұл заманға пайдасы жоқ болды. Соған қарай Ғұсманияда мектеп харбия, мектеп рушдиялар салынып, жаңа низамға айналған. Мұндағылар ұзақ жылдар өмір өткізіп, ғылымды пайдасыз ұзақ бахастар бірлән күнін өткізіп, мағишат дүниеде надан бір ессіз адам болып шығады да, ешбір харекетке лайықты жоқ болған соң, адам аулауға, адам алдауға салынады. Көбінесе мұндай ессіздердің насихаты да тасирсіз болады.", "Дүниенің мәғмурлығы бір түрлі ақылға нұр беріп тұратұғын нәрсе. Жоқшылықтың адамды хайуандандырып жіберетіні де болады. Бәлки, дүниенің ғылымын білмей қалмақтық — бір үлкен зарарлы надандық, ол құранда сөгілген; дүниеде кімде-кім өзіне өзгешелік бермек қасады бірлән малға махаббатын аударған дүние болмаса, ихсанда қолым қысқа болмасын деп һәм өзім біреуге тамғылы болмайын деп, малға махаббатын аудармай, ізгілікке бола халал кәсіп бірлән тапқан дүние емес.", "Біз ғылымды сатып, мал іздемек емеспіз. Мал бірлән ғылым кәсіп қылмақпыз. Өнер - өзі де мал, өнерді үйренбек - өзі де ихсан. Бірақ ол өнер ғадаләттан шықпасын, шарғыға муафих болсын. Адамға хәлінше ихсанды болмақ - қарыз іс. Бірақ өзгелердің ихсанына сүйенбек дұрыс емес. Моллалар тұра тұрсын, хусусан бұл заманның ишандарына бек сақ болыңдар. Олар - фитнә ғалым, бұлардан залалдан басқа ешнәрсе шықпайды. Өздері хүкім шариғатты таза білмейді, көбі надан болады. Онан асып өзін-өзі әһіл тариқат біліп және біреуді жеткізбек дағуасын қылады. Бұл іс олардың сыбағасы емес, бұлардың жеткізбегі мұхал, бұлар адам аздырушылар, хаттә дінге де залалды. Бұлардың сүйгені - надандар, сөйлегені - жалған, дәлелдері - тасбығы менен шалмалары, онан басқа ешнәрсе жоқ.", "Енді біліңіздер, ей, перзенттер! Құдай тағаланың жолы деген жол алла тағаланың өзіндей ниһаятсыз болады. Оның ниһаятына ешкім жетпейді. Бірақ сол жолға жүруді өзіне шарт қылып кім қадам басты, ол таза мұсылман, толық адам делінеді. Дүниеде түпкі мақсатың өз пайдаң болса - өзің ниһаятлысың, ол жол құдайдың жолы емес. Ғаламнан жиылсын, маған құйылсын, отырған орныма ағып келе берсін деген ол не деген нысап? Не түрлі болса да, я дүниеңнен, я ақылыңнан, я малыңнан ғадаләт, шапағат секілді біреулерге жақсылық тигізбек мақсатың болса, ол жол - құданың жолы. Ол ниһаятсыз жол, сол ниһаятсыз жолға аяғыңды берік бастың, ниһаятсыз құдаға тағырып хасил болып хас езгу құлдарынан болмақ үміт бар, өзге жолда не үміт бар? Кейбіреулердің бар өнері, мақсаты киімін түзетпек, жүріс-тұрысын түзетпек болады да, мұнысын өзіне бар дәулет біледі. Бұл істерінің бәрі өзін көрсетпек, өзін-өзі базарға салып, бір ақылы көзіндегі ақымақтарға «бәрекелді» дегізбек. «Осындай болар ма едік» деп біреулер талаптанар, біреулер «осындай бола алмадық» деп күйінер, мұнан не пайда шықты? Сыртқа қасиет бітпейді, алла тағала қарайтұғын қалыбыңа, боямасыз ықыласыңа қасиет бітеді. Бұл айнаға табынғандардың ақылы қаншалық өсер дейсің? Ақыл өссе, ол түпсіз терең жақсылық сүймектікпен өсер.", "Құдай тағала дүниені кәмалатты шеберлікпен жаратқан һәм адам баласын өссін-өнсін деп жаратқан. Сол өсіп-өну жолындағы адамның талап қылып ізденер қарызды ісінің алды - әуелі дос көбейтпек. Ол досын көбейтпектің табылмағы өзінің өзгелерге қолыңнан келгенінше достық мақамында болмақ. Кімге достығың болса, достық шақырады. Ең аяғы ешкімге қас сағынбастық һәм өзіне өзгешелік беремін деп, өзін тілмен я қылықпен артық көрсетпек мақсатынан аулақ болмақ.", "Бұл өзін-өзі артық көрсетпек екі түрлі! Әуелгісі - әрбір жаманшылықтың жағасында тұрып адамның адамдығын бұзатын жаманшылықтан бойын жимақтық, бұл адамға нұр болады.", "Екіншісі - өзін-өзі өзгешелікпен артық көрсетпек адамдықтың нұрын, гүлін бұзады.", "Үшіншісі - қастық қылмақ, қор тұтпақ, кемітпек. Олар дұшпандық шақырады.", "Һәм өзі өзгеше тұтатын демектің түбі - мақтан. Әрбір мақтан біреуден асамын деген күншілдік бітіреді де, күншілдік күншілдікті қозғайды. Бұл үш түрлі істің жоқтығы адамның көңіліне тыныштық береді. Әрбір көңіл тыныштығы көңілге талап салады.", "Күллі адам баласын қор қылатын үш нәрсе бар. Сонан қашпақ керек: әуелі - надандық, екіншісі - еріншектік, үшінші - залымдық деп білесің.", "Надандық - білім-ғылымның жоқтығы, дүниеде ешбір нәрсені оларсыз біліп болмайды.", "Білімсіздік хайуандық болады.", "Еріншектік - күллі дүниедегі өнердің дұшпаны. Талапсыздық, жігерсіздік, ұятсыздық, кедейлік - бәрі осыдан шығады.", "Залымдық - адам баласының дұшпаны. Адам баласына дұшпан болса, адамнан бөлінеді, бір жыртқыш хайуан қисабына қосылады.", "Бұлардың емі, халлақына махаббат, халық ғаламға шапқат, қайратты, тұрлаулы, ғадаләт ісінің алды-артын байқарлық білімі, ғылымы болсын... Ол білім, ғылымы құдаға мұқтәди болсын. Ғылым әуелі ғалами ғылымға мұқтәди болсын. Яғни құдай тағала бұл ғаламды жаратты, ерінбеді, келісімменен, хикметпенен кәмәлатты бір жолға салып жасады, сіздердің ісіңіз де бір жақсылық бина қылып, арқа сүйерлік шеберлікпенен болсын. Және құдай тағала әрне жаратты, бір түрлі пайдалы хикметі бар. Сенің де ісіңнен бір зарар шығып кеткендей болмай, көпке пайда боларлық бір үміті бар іс болсын. Бұларсыз іс іс емес. Бәлки, бұларсыз тағат тағат та емес.", "Белгілі, құдай тағала ешбір нәрсені хикметсіз жаратпады, ешбір нәрсеге хикметсіз тәклиф қылмады. Бәрінің хикметі бар, бәрінің себебі бар, біздің ғауам былай тұрсын, ғылымға махаббаты барларға себеп, парыздарды білмекке ижтиһад ләзім, сіздер әрбір ғамал қылсаңыз ізгілік деп қыласыз, ізгілікке бола қасд етіп, ниет етесіз. Ниет оның парызынан хисап, пайғамбарымыз салаллаһу ғалайһи уәссәлламнің хадис шарифі «иннама-л-ағмал, бин-ниет» деген. Енді ниет еттіңіз таһарат алмаққа, намаз оқымаққа, ораза тұтпаққа, бұл тағаттарды ниетіңіз заһирынан қалыпсыз ғибадатқа жетпегендігі кемшілік емес пе? Сіздің батиныңыз таза болмағы әуелі иман болып, бұл заһир ғибадатыңыз иманды болған соң ғана, парыз болған, сіздің заһирыңыздағы ғибадат -батиныңыздағы иманның көлеңкесі, һәм сол иманның нұрланып тұрмағына көрік үшін бұйырылған. Оның үшін ғұламалар иман екеу емес, біреу, бірақ ізгі тағатпенен нұрланады, тағат жоқ болса, күңгірттенеді, бәлки, сөну хаупі де бар деген. Егер надандар ол ғибадаттың ішкі сырын ескермей қылса, соны қылып жүріп, иманы сөнер деген.", "Менің хаупім бар, олар хас осы ғибадат екен, құданың бізге бұйырғаны, біз осыны қылсақ, мұсылмандық кәміл болады деп ойлайды. Ол ғибадат күзетшісі еді. Жә, күзетші күзеткен нәрсенің амандығын ойламай, бір ғана ояу тұрмағын қасд қылса, ол не күзет? Күзеткен нәрсесі қайда кетеді? Мақсат күзетілген нәрсенің амандығы, тазалығы емес пе? Ей, ишараттан хабарсыздар, қара! Бұл ғибадаттан бір үлкені - намаз, ол намаздан әуелі таһарат алмақ, онан соң намазға шұруғ қылмақ, ол таһараттың алды истинжа еді. Мұны бір берік ойлап тұр. Аяғы екі аяққа мәсіхпенен бітуші еді, бұлар һәммасы болмаса көбі ишарат еді. Истинжада к...іңізді жуа-сыз, сіздің к...іңіздің ешкімге керегі жоқ еді. Онымен сезімді тазалыққа иіргендігіңді кәміл ыхласыңды көрсетіп, ішімнің сафлығының соңында халық көрер, сыртымды да пәк етемін һәм көзге көрінбейтін ағзаларымды да пәк етемін, бұл пәктіктің үстінде аллаға дұға айтамын деп әзірленесіз.", "Енді намаздың аты - салауат, дұға мағынасында деген:", "Аяқта, мойында болған мәсхлар - ол жумақ емес, өздері де жуулы деп көрсеткен ишараты.", "Намаздан әуелі құлақ қақтыңыз - егер алла тағаланы жоғарыда деп, мәкән исфат етпесең де, бегірек созу әдепсіз болып, күнә дариясына ғарық болдым, яғни дүние әуесіне ғарық қылмай қолымнан тарт, яғни құтыларлық жәрдемдерінің ишараты*.", "Онан соң қиямда тұрып қол бағламақ - құл қожа алдында тұрмақ - бұқара патша алдында тұрғаннан артық алланың қадірлігіне өзінің ғажиздығына ыкрарының беріктігін көрсеткен ишараты.", "Қыбылаға қарамақ - әрине, құдай тағалаға ешбір орын мүмкін емес болса да, зиратын парыз еткен орынға жүзін қаратып, сондағы дұғадай қабылдыққа жақын болар ма екен деген ишараты.", "Онан соң қира әт, яғни сураһи фатиха оқисың, мұнда бірақ сөз ұзарады. Ол фатиха сүресінің мағыналарында көп сыр бар.", "Руқүғ бас ұрмақ - алдында құда хазірге ұқсас, ол да ишарат.", "Сәжделер - әуелі жерден жаралғанына ықырары, екіншісі - және жерге қайтпағына ықырары, бас көтермек және тіріліп, сұрау бермегіне ықырарының ишараты.", "Қағадат ул-ахир - дұғаның ақырында аллаға тахият, одан тәшәһһуд, одан салауат, пайғамбарымыз саллаллаһу ғалайһи уәссәлләмге айтпақ үшін ең ақырғы сәлемменен тауысасыз, яғни алла тағаладан не тілеп дұға қылдыңыз. Ол дұға қазинасы күллі мұсылмандарды ортақтастырып, оларға да сәләмәтшілік тілеп һәм рахмет тілеп бітіресіз.", "Жә, бұл сөзден не ғибрәтлендік?"]
}, {
    title: "Қара сөз 39",
    paragraphs: ["Рас, бұрынғы біздің ата-бабаларымыздың бұл замандағылардан білімі, күтімі, сыпайылығы, тазалығы төмен болған. Бірақ бұл замандағылардан артық екі мінезі бар екен. Ендігі жұрт ата-бабаларымыздың мінді ісін бір-бірлеп тастап келеміз, әлгі екі ғана тәуір ісін біржола жоғалтып алдық. Осы күнгілер өзге мінезге осы өрмелеп ілгері бара жатқанына қарай сол аталарымыздың екі ғана тәуір мінезін жоғалтпай тұрсақ, біз де ел қатарына кірер едік. Сол екі мінез жоқ болған соң, әлгі үйренген өнеріміздің бәрі де адамшылыққа ұқсамайды, шайтандыққа тартып барады. Жұрттықтан кетіп бара жатқанымыздың бір үлкен себебі сол көрінеді.", "Ол екі мінезі қайсы десең, әуелі - ол заманда ел басы, топ басы деген кісілер болады екен. Көш-қонды болса, дау-жанжалды болса, билік соларда болады екен. Өзге қара жұрт жақсы-жаман өздерінің шаруасымен жүре береді екен. Ол ел басы мен топ басылары калай қылса, калай бітірсе, халықта оны сынамақ, бірден бірге жүргізбек болмайды екен. «Қой асығын қолыңа ал, қолайыңа жақса, сақа қой», «Бас-басыңа би болса, манар тауға сыймассың, басалқаңыз бар болса, жанған отқа күймессің» деп мақал айтып, тілеу қылып, екі тізгін, бір шылбырды бердік саған, берген соң, қайтып бұзылмақ түгіл, жетпегеніңді жетілтемін деп, жамандығын жасырып, жақсылығын асырамын деп тырысады екен. Оны зор тұтып, әулие тұтып, онан соң жақсылары да көп азбайды екен. Бәрі өз бауыры, бәрі өз малы болған соң, шыныменен жетесінде жоқ болмаса, солардың қамын жемей қайтеді?", "Екінші мінезі - намысқорлық екен. Ат аталып, аруақ шақырылған жерде ағайынға өкпе, араздыққа қарамайды екен, жанын салысады екен. «Өзіне ар тұтқан жаттан зар тұтады» деп, «Аз араздықты қуған көп пайдасын кетірер» деп, «Ағайынның азары болса да, безері болмайды», «Алтау ала болса, ауыздағы кетеді, төртеу түгел болса, төбедегі келеді» десіп, «Жол қуған қазынаға жолығар, дау қуған пәлеге жолығар» десіп. Кәнеки, енді осы екі мінез қайда бар? Бұлар да арлылық, намыстылық, табандылықтан келеді. Бұлардан айырылдық. Ендігілердің достығы - пейіл емес, алдау, дұшпандығы - кейіс емес, не күндестік, не тыныш отыра алмағандық."]
}, {
    title: "Қара сөз 40",
    paragraphs: ["Зинһар, сендерден бір сұрайын деп жүрген ісім бар.", "Осы, біздің қазақтың өлген кісісінде жаманы жоқ, тірі кісісінің жамандаудан аманы жоқ болатұғыны қалай?", "Қайраты қайтқан шал мен жастың бәрі бітім қылады, шалдар өзді-өзі көп құрбыдан айрылып азайып отырса да, біріменен бірінің бітім қылмайтұғыны қалай?", "Бір елдің ішінде жамағайынды кісі бірге туғандай көріп, іші елжіреп жақсы көріп тұрып, елге келсе, әрі-беріден соң қайта қашқандай қылатұғыны қалай?", "Жаттың бір тәуір кісісін көрсе, «жарықтық» деп жалбырап қалып, мақтай қалып, өз елінде сонан артық адам болса да танымайтұғыны қалай?", "Бір жолаушы алыс жерге барса, барған еліне өз елін мақтаймын деп өтірікті сыбап-сыбап, қайтып келген соң сол барған, көрген елін, жерін мақтап, өтірікті сыбайтұғыны қалай?", "Қай қазақты көрсем де, баласы жасырақ болса, оның басынан пәрмене болып жүріп, ержеткен соң суық тартатұғыны қалай?", "Біреудің ағайыны торқалы той, топырақты өлімде, адалдық берекеде алысуға табылмай, барымта алалық, ұрлалық десе, табыла қоятыны қалай?", "Бәйгеге ат қоссаң, атыңды тартыспайтұғын ағайын, атың келсе, бәйгесіне өкпелейтұғыны қалай?", "Баяғыда біреу біреуді пален жасымда келе жатқанда пәлен жерге жеткізіп салып еді деп, соны өлгенше айта жүруші еді. Осы күнде бұл жылғы берген ендігі жылға жарамайтұғыны қалай?", "Байдың баласы кедей болса, ұрлық қылуға арланбайды, байға кірісуге арланатұғыны қалай?", "Екі жақсы бір елде сүйіскен достығында тұра алыспайды. Кейбір антұрғандардың тым-ақ тату бола қалатыны қалай?", "Біреуді досым деп ат беріп жүрсең, оған сенің бір дұшпаның келіп бір тай берсе, бұзыла қалатыны қалай?", "Күнде тілін алатұғын достан кейде бір тіл ала қойған дұшпанға кісінің өле жаздайтұғыны калай?", "Көп кісі досым жетілсе екен демейді, егерде жетілсе, бағанағы досына бір бітімі жоқ дұшпан сол болатұғыны қалай?", "Кей жұрт ақыл айтарлық кісіні іздеп таба алмайды. Қылығының қылшығын танитұғын кісіден қашық жүретұғыны қалай?", "Біреу біреудікіне келгенде үйдегі малының бәрін де айдап келіп, өз үйіне кісі барғанда бар малын далаға айдап жіберетұғыны калай?", "Тыныштық іздеп таба алмай жүрген жұрт тыныштық көрсе, сәтке тұрмай, тыныштықтан жалыға қалатұғыны қалай?", "Елді пысық билегені несі? Пысықтың бәрі кедей келетұғыны несі?", "Тоқал қатын өр келетұғыны несі? Кеселді кісі ер келетұғыны несі? Кедей кісінің кер келетұғыны несі?", "Нәпсісін тыйып, бойын тоқтатқан кісінің жаман атанып, нәпсісі билеп, мақтанға еріп, пәле шығарған кісі мықты атанатұғыны несі?", "Қазақтың шын сөзге нанбай, құлақ та қоймай, тыңдауға қолы да тимей, пәлелі сөзге, өтірікке сүттей ұйып, бар шаруасы судай ақса да, соны әбден естіп ұқпай тынбайтұғыны қалай?"]
}, {
    title: "Қара сөз 41",
    paragraphs: ["Қазаққа ақыл берем, түзеймін деп қам жеген адамға екі нәрсе керек.", "Әуелі - бек зор өкімет, жарлық қолында бар кісі керек. Үлкендерін қорқытып, жас балаларын еріксіз қолдарынан алып, медреселерге беріп, бірін ол жол, бірін бұл жолға салу керек, дүниеде көп есепсіз ғылымның жолдары бар, әрбір жолда үйретушілерге беріп сен бұл жолды үйрен, сен ол жолды үйрен деп жолға салып, мұндағы халыққа шығынын төлетіп жіберсе, хәтта қыздарды да ең болмаса мұсылман ғылымына жіберсе, жақсы дін танырлық қылып үйретсе, сонда сол жастар жетіп, бұл аталары қартайып сөзден қалғанда түзелсе болар еді.", "Екінші - ол адам есепсіз бай боларға керек. Аталарын паралап, балаларын алып, бастапқы айтқандай жолға салып, тағлым берсе, сонда түзелер еді.", "Енді мұндай халықты еріксіз қорқытып көндірерлік күш-қуат ешкімге бітпейді. Ол баланы қазақтың бәрін паралап көндірерлік дәулет бір кісіге бітуге мүмкін де емес.", "Қазақты я қорқытпай, я параламай, ақылменен не жырлап, не сырлап айтқанменен ешнәрсеге көндіру мүмкін де емес. Етінен өткен, сүйегіне жеткен, атадан мирас алған, ананың сүтіменен біткен надандық әлдеқашан адамшылықтан кетірген. Өздерінің ырбаңы бар ма, пыш-пышы бар ма, гуілдегі бар ма, дүрілдегі бар ма - сонысынан дүниеде ешбір қызықты нәрсе бар деп ойламайды, ойласа да бұрыла алмайды, егер сөз айтсаң, түгел тыңдап тұра алмайды, не көңілі, не көзі алаңдап отырады. Енді не қылдық, не болдық!"]
}, {
    title: "Қара сөз 42",
    paragraphs: ["Қазақтың жаманшылыққа үйір бола беретұғынының бір себебі - жұмысының жоқтығы. Егер егін салса, я саудаға салынса, қолы тиер ме еді? Ол ауылдан бұл ауылға, біреуден бір жылқының майын сұрап мініп, тамақ асырап, болмаса сөз аңдып, қулық, сұмдықпенен адам аздырмақ үшін, яки азғырушылардың кеңесіне кірмек үшін, пайдасыз, жұмыссыз қаңғырып жүруге құмар. Дүниелік керек болса, адал еңбекке салынып алған кісі ондай жүрісті иттей қорлық көрмей ме? Өзінің кәсібін тастап, кезегендікке салына ма? Малдылар малын өңкей малшыларға, бала-шағаға тапсырып, қолдағы құдай берген азды-көпті дәулеті қызықсыз көрініп, оның ұры-бөріге жем болып, қарға-жарға ұшырауына шыдайды. Пыш-пыш кеңестен қалып, бір ауылға барып, қулық, сұмдық жасап жүріп, тегін тамақ жеп, ыржыңдасуды қысыратуға шыдамайды. Не үшін десең, халыққа әдет жол болған соң, шаруаға пысық, мал бағуға, мал табуға пысық ол өнерлі кісіге қосылмайды, я өзі пәле шығаруға пысық, я сондайлардың сөзін «естігенім», «білгенім» деп елге жайып жүріп, ырбаңдауға пысық өнерлілерге қосылғандай көрінеді.", "Сол үшін осы күнгі қазақтың іске жараймын дегені өзінің азды-көптісін біреуге қоса салып, «көре жүр, көздей жүр» деп басын босатып алып, сөз аңдып, тамақ аңдып, ел кезуге салынады.", "Бұл күндегіге байлық та мақтан емес, ақыл, абұйыр да мақтан емес, арыз бере білу, алдай білу - мақтан. Бұл екеуі қолынан келген кісі салт атты, сабау қамшылы кедей де болса, аз да болса орны төрде, майлы атқа, майлы етке қолы жетеді. Желөкпелеу, мақтаншақ байларды: «сіз айтсаңыз, отқа түсуге бармын» деп желдендіріп алып, шаруасын қылмай-ақ, малын бақпай-ақ, содан алып киімін бүтейтіп киіп, тәуір атын мініп алып, қатарлы бір құрметке жетіп жүре береді.", "Ол бай өз тыныштығын да білмейді, бос шығынданғанын да ескермейді. Бір кісімен сөйлессе, «мұны қайтеміз?» - деп бағанағы антұрғанмен ақылдасады. Ол сиырдың жорғасы секілденіп, қарайғанда жалғыз өзім болсам екен дейтұғын ниетімен және де ақылдасар досы көбейсе, қадірім кетіп қалады деп ойлап: «Ой, тәңір-ай, соны білмей тұрсыз ба? Ол ана қулық қой, бұл мына қулық қой» деп, «оған бүйдей салсаң болмай ма?» деп бар оңбаған жауапты үйретіп, амалшылықтың жолын үйретем деп, ол байдың өзін кісіге сенбейтұғын қылады. Және байдың өзіне де адам сенбейтұғын болады. Байдың өз жауабы, өз мінезі оңбай тұрған соң, бағанағы кісі бұзылса, әлгі антұрған бағанағы байға: «Мен айтпап па едім, оныкі қулық сөз деп, міне, көрдің бе?» - деп, екіншіде тырп етпейтұғын қылып алады. Ендігі жұрттың ақылы да, тілеуі де, харекеті де - осы."]
}, {
    title: "Қара сөз 43",
    paragraphs: ["Адам ұғылы екі нәрседен: бірі - тән, бірі - жан. Ол екеуінің орталарында болған нәрселердің қайсысы жибили, қайсысы кәсиби - оны білмек керек. Ішсем, жесем демектің басы - жибили, ұйықтамақ та соған ұқсайды. Аз ба, көп пе, білсем екен, көрсем екен деген арзу, бұлардың да басы - жибили. Ақыл, ғылым - бұлар - кәсиби. Көзбенен көріп, құлақпен естіп, қолмен ұстап, тілмен татып, мұрынмен иіскеп, тыстағы дүниеден хабар алады. Ол хабарлардың ұнамдысы ұнамды қалпыменен, ұнамсызы ұнамсыз қалпыменен, әрнешік өз суретіменен көңілге түседі. Ол көңілге түсіруші бағанағы бес нәрседен өткен соң, оларды жайғастырып көңілде суреттемек. Ол - жанның жибили қуаты дүр. Бір ұмытпастық жақсы нәрседен көңілге жақсы әсер хасил болып, жаман нәрседен көңілге жаман әсер хасил болу секілді нәрселер. Бұл қуаттар әуелде кішкене ғана болады. Ескеріп баққан адам үлкейтіп, ұлғайтып, ол қуаттардың қуатын зорайтады. Ескерусіз қалса, ол қуаттың қайсысы болса да жоғалады, тіпті жоғалмаса да, аз-мәз нәрсе болмаса, үлкен ешнәрсеге жарамайтын болады.", "Кімде-кім сырттан естіп білу, көріп білу секілді нәрселерді көбейтіп алса, ол - көп жиғаны бар адам: сынап, орындысын, орынсызын - бәрін де бағанағы жиған нәрселерінен есеп қылып, қарап табады. Бұлай етіп бұл харекетке түсінген адамды ақылды дейміз. «Құдай тағала өзі ақыл бермеген соң қайтейік?» демек, «құдай тағала сеніменен мені бірдей жаратып па?» демек - құдай тағалаға жала жауып, өзін құтқармақ болғандығы. Бұл - ойсыз, өнерсіз надан адамның ісі. Оған құдай тағала көрме, есітпе, көрген, естіген нәрсеңді ескерме, есіңе сақтама деп пе? Ойын-күлкімен, ішпек-жемек, ұйықтамақпен, мақтанмен әуре бол да, ішіңдегі қазынаңды жоғалтып, хайуан бол деген жоқ.", "Кейбіреулер айтады: «Ақыл жибили болмаса да, талап - жибили. Талап берген адам ақылды тапты, талабы жоқ кісі таба алмады», -дейді. О да бекер. Талап балада да бар, оған талас қылуға болмайды. Бағана айттық қой, қуаты басында кішкене болады, ескермесе жоғалып та кетеді, ескерсе, күтіп айналдырса, зораяды деп. Жан қуатыменен адам хасил кылған өнерлері де күнде тексерсең, күнде асады. Көп заман тексермесең, тауып алған өнеріңнің жоғалғандығын және өзіңнің ол мезгілдегіден бір басқа адам болып кеткеніңді білмей қаласың. Қай жоғалған өнер: «ал, мен жоғалдым» деп, хабар беріп жоғалады. Енді қусаң, бағанағы әуелгі табуыңнан қиынырақ тиеді.", "Жан қуаты дейтұғын қуат - бек көп нәрсе, бәрін мұнда жазарға уақыт сыйғызбайды. Бірақ әрбір өнердің тыстан тауып алып, ішке салғанын, соның тамырын берік ұстап тұруға жараушы еді. Көп заман ескермеген адамнан ол бағанағы өнердің өзінің ең қызықты, қымбатты жерлері жоғала бастайды. Онан соң көп заман өтсе, сол өнерді сақтайтұғын қуаттың өзі де жоғалады. Онан соң қайта кәсіп қылуға болмайды.", "Бұл қуаттың ішінде үш артық қуат бар, зинһар, соны жоғалтып алу жарамас, ол жоғалса, адам ұғылы хайуан болды, адамшылықтан шықты.", "Біреуі орысша «подвижной элемент» деп аталады. Ол не нәрсе? Не көрдің, не есіттің, әрнешік білдің, соны тездікпенен ұғып, ұққандықпенен тұрмай, арты қайдан шығады, алды қайда барады, сол екі жағына да ақылды жіберіп қарамаққа тез қозғап жібереді. Егер бұл болмаса, көп білуге көп оқу оңды пайда да бермейді. Керекті уақытында ойламай, керекті уақытында қылмай, керекті уақытында айтпай, дәйім уақытынан кеш қалып, «Әй, әттеген-ай. Үйтуім екен, бүйтуім екен» деп, өмір бойы ғафил болып-ақ отырғаның.", "Біреуін орысша «сила притягательная однородного» дейді. Ол - бір нәрсені естіп, көріп білдің, хош келді, қазір соған ұқсағандарды тексересің. Түгел ұқсаған ба? Яки бір ғана жерден ұқсағандығы бар ма? Әрнешік сол іске бір келіскен жері бар нәрселердің бәрін ойлап, білгенін тексеріп, білмегенін сұрап, оқып, бөтеннен хабарланып білмей, тыншытпайды.", "Үшіншісі, орысша «впечатлительность сердца» дейді, яғни жүректі мақтаншақтық, пайдакүнемдік, жеңілдік, салғырттық - бұл төрт нәрсебірлән кірлетпей таза сақтаса, сонда сырттан ішке барған әр нәрсенің суреті жүректің айнасына анық рәушан болып түседі. Ондай нәрсе тұла бойыңа жайылады, тез ұмыттырмайды. Егерде бағанағы төрт нәрсемен жүректі кірлетіп алсаң, жүректің айнасы бұзылады, я қисық, я күңгірт көрсетеді. Енді ондай нәрседен оңды ұғым болмайды.", "Әрнешік тән қуатыменен сырттан тауып, сырттан сақтайсыз, оның аты дәулет еді. Оның да неше түрлі кеселі, кесепаты бар нәрселерін білмесең, сақтай алмаушы едің ғой. Соған ұқсаған іштегі жан қуатыменен жиған нәрсенің аты ақыл, ғылым еді ғой. Оның да неше түрлі кеселі, кесепаты тиер нәрселері бар. Оны білмесең, бақпасаң - айрыласың. Және әрбір жақсы нәрсенің өлшеуі бар, өлшеуінен асса - жарамайды. Өлшеуін білмек - бір үлкен керек іс. Ойланбақ жақсы, іске тіпті салынып кеткен кісі ойын байлай алмай, қияли болып та кеткені болады. Ішпек, жемек, кимек, күлмек, көңіл көтермек, құшпақ, сүймек, мал жимақ, мансап іздемек, айлалы болмақ, алданбастық - бұл нәрселердің бәрінің де өлшеуі бар. Өлшеуінен асырса, боғы шығады.", "«Ненің қызығын көп іздесең, соның күйігін бір тартасың» деген. Баз махфи олмая ол, мен айтқан үш қуаттың ішінде екеуі, яғни «сила притягательная однородного» бірлән «подвижной элемент» - бұл екеуі қосылып тұра тұрған нәрсе, күллі пайда да бұлардан шығады, уа күллі зарар да бұлардан шығады. Мансап сүйгіштік, мақтаншақтық, ашуланшақтық, өтірікшілік, осыған ұқсаған әрбір маскүнемдікке тартып, құмар қылып, ақылдан шығарып жіберетұғын нәрселер осы екеуінен болады. Бұларды түбегейлеткенде жақсы нәрселерді түбегейлетіп, жаман нәрселерден, яғни жоғарғы айтылмыш секілді адамшылықтан шығарып, құмарпаздыққа салып жіберетұғын нәрседен бойды ерте тыйып алуға керек. Пайда, залалды айыратұғын қуаттың аты ақыл еді ғой. Бір ақыл қуатыбірлән мұны тоқтатып болмайды. Һәм ақыл, һәм қайрат - екі мықты қуат қосылып тоқтатады. Ол екеуі кімде бар болса, бағанағы екі қуаттың екеуі де аз болса, яки бірі бар, бірі жоқ болса, бағанағы екі қуаттар - бір басы қатты асау ат, жүгенсіз тауға ұра ма, тасқа ұра ма, суға ұра ма, жарға ұра ма - құдай білсін, әйтеуір жолда көрген есті, ақылы дұрыс адамдар әлі де сұрамай да қалады. Сенде ерік жоқ. Екі етек жайылып, екі көзің аспанда, масқара болып кеткенің өлгеніңше."]
}, {
    title: "Қара сөз 44",
    paragraphs: ["Адам баласының ең жаманы - талапсыз. Талап қылушылар да неше түрлі болады. Һәм талаптың өзі де түрлі-түрлі. Һәм сол талаптардың қайсысының соңына түссе де, бірінен бірі өнерлі, тұрлаулырақ келеді. Уа, ләкин адам баласы я талапты, я талапсыз болсын, әйтеуір «бәрекелдіні» керек қылмайтұғыны болмайды. Әрнешік, орынсыз ба, орынды ма, «бәрекелді» деушіні көңіл іздеп тұрады. Адам баласы өзі қай жолда, қай майданда жүрсе, сол майдандағы кісімен сырлас болады. Оның үшін өзге жолдағылардан «бәрекелдіні» оңды күтпейді. Маған «бәрекелді» десе, осы өзімменен серіктес, сырлас осылар «бәрекелді» дер дейді.", "Талаптың ішінде адам баласы көбінесе басына қадір іздеп, сол талапта болады. Біреу мал қуып жатыр. Сараңдықпен, арамдықпен, әйтеуір мал тапсам, «Мал тапқан ердің жазығы жоқ» дейтұғын, «Малдының беті жарық» дейтұғын мақалға сеніп, халықтың түріне қарай, ит те болса, малдыны сөге алмайды деп, бұл мал һәм пайда, һәм қасиет болады бойыма дейді. Мұнысы рас, қазақтың өз құлқына қарағанда. Бірақ адамдыққа, ақылға қарағанда, қазақ түгіл, көңіл жиіркенетұғын іс. Осыған орай біреу ер атанамын, біреу қажеке атанамын, біреу молдеке атанамын, біреулер білгіш, қу, сұм атанамын деп, сол харекетте жүр. Әрқайсысы қазаққа яки бірі бар, бірі жоқ болса, бағанағы екі бұлдамақ та болып, басына «осыным бірсыпыра елеу азық болар» деген талаппенен қылып жүр. Мұнысы қазақтың тамырын ұстап-ұстап қарайды дағы, «мынаны алып келіп берсе, қымбат алғандай екен, осы күнде мына бір істің біраз пұлы бар екен» деп, қазақтың өз бетінен оқып, ізденген талап болмаса, кітап бетінен оқып іздеген талап емес. Оның үшін кітап сөзіменен ізденген талап болса, әуелі көкіректі тазалау керек дейді, онан соң ғибадат қыл дейді. Қазақтың бетіне қарап, содан оқыған болса, ол талабыңды қыла бер, көкіректі тым тазалаймын деме, оны кім көріп жатыр, ішінде қатпар көп болмаса, құт-берекеге жағымды болмайды дейді. Енді осыған қарап, қайдан оқып, біліп, ұмтылған талап екенін білерсің."]
}, {
    title: "Қара сөз 45",
    paragraphs: ["Құдай табарака уатағаланың барлығының үлкен дәлелі - неше мың жылдан бері әркім әртүрлі қылып сөйлесе де, бәрі де бір үлкен құдай бар деп келгендігі, уа һәм неше мың түрлі діннің бәрі де ғадаләт, махаббат құдайға лайықты дегендігі.", "Біз жаратушы емес, жаратқан көлеңкесіне қарай білетұғын пендеміз. Сол махаббат пен ғадаләтке қарай тартпақпыз, сол алланың хикметін біреуден біреу анығырақ сезбекпен артылады. Инандым, сендім демек инандырамын, сендіремін деген емес.", "Адамшылықтың алды - махаббат, ғадаләт, сезім. Бұлардың керек емес жері жоқ, кіріспейтұғын да жері жоқ. Ол - жаратқан тәңірінің ісі. Айғыр биеге ие болмақта да махаббат пен сезім бар. Бұл ғадаләт, махаббат сезім кімде көбірек болса, ол кісі - ғалым, сол - ғақил. Біз жанымыздан ғылым шығара алмаймыз, жаралып, жасалып қойған нәрселерді сезбекпіз, көзбен көріп, ақылмен біліп."]
}]
  , eS = ["8O0rq3UZbVI", "Zr5H4DCbiZw", "8Sxdl6A_JC0", "6wa1PXtDcvk", "Jdeu-FmgfoU", "HnkkLcvc6YA", "mgtd7b_iJ6I", "wXfCZ-6spoY", "9RdVJpgh_Uc", "iLbvJYXjlcI", "Ew0eSXLtVd8", "DA_GtbePA3U", "zOxC-7GIcME", "WPkCgCPv3P8", "OiQIx77CND4", "-dRmcxC0YnM", "gZH9Tihq1dY", "Y_D8zl48Mm4", "oXz7hC8QGU8", "ERDSkxIf7s4", "JkHS63Cfux8", "xHnyW61R0dM", "d2TzfF3_G0c", "UL5GOle7gxs", "-UOHuoQvY1c", "_xWJfhcx8dY", "PYSwmJLjMXY", "NTmYTXJ71AA", "SAMSiph-ZKE", "2BB7BBgHFto", "da4kvi1fiGs", "5EC1Rr3BM08", "tObdvBM70q8", "A_XHOLZYpFo", "rzZSJY_nkuA", "wnu8qUyEt60", "Jc3_Ds9t-Hg", "DZX9CG5Xhwk", "EN4CUi_acoc", "o0Z-n3WyS4E", "nNHUtturxu4", "ojD2lQSbU_I", "EhnVmmFTRJk", "6dTq8mfsfJE", "u8cGski0Ofk"];
function tS() {
    const [l,s] = S.useState(0)
      , o = Kc[l]
      , c = `https://www.youtube.com/watch?v=${eS[l]}`;
    return u.jsxs("div", {
        className: "min-h-screen bg-white font-sans selection:bg-primary/20",
        children: [u.jsx(gl, {}), u.jsx("section", {
            className: "py-12 border-b border-gray-50",
            children: u.jsxs("div", {
                className: "container mx-auto px-4 max-w-4xl text-center",
                children: [u.jsxs("div", {
                    className: "inline-flex flex-col items-center",
                    children: [u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-21.5"
                    }), u.jsx("span", {
                        className: "text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4 font-bold",
                        children: "Таңдау"
                    }), u.jsxs("div", {
                        className: "relative group",
                        children: [u.jsx("select", {
                            value: l,
                            onChange: f => s(Number(f.target.value)),
                            className: "appearance-none bg-white text-primary border-2 border-primary/20 px-12 py-4 rounded-2xl font-serif text-2xl md:text-3xl hover:border-primary transition-all cursor-pointer outline-none shadow-sm min-w-[300px] text-center",
                            children: Kc.map( (f, m) => u.jsxs("option", {
                                value: m,
                                children: [m + 1, " / 45 Қара сөз"]
                            }, m))
                        }), u.jsx("div", {
                            className: "absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary",
                            children: u.jsx("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "3",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: u.jsx("path", {
                                    d: "m6 9 6 6 6-6"
                                })
                            })
                        })]
                    })]
                }), u.jsx("h1", {
                    className: "mt-10 text-3xl md:text-5xl font-serif text-gray-900 tracking-tight",
                    children: o?.title
                }), u.jsx("div", {
                    className: "mt-10",
                    children: u.jsx("a", {
                        href: c,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "inline-block bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-secondary transition-colors",
                        children: "Смотреть видео на YouTube"
                    })
                })]
            })
        }), u.jsx("section", {
            className: "py-16 relative bg-white",
            children: u.jsx("div", {
                className: "container mx-auto px-6 max-w-3xl",
                children: u.jsxs("div", {
                    className: "relative",
                    children: [u.jsx("div", {
                        className: "absolute inset-0 opacity-[0.03] pointer-events-none",
                        style: {
                            backgroundImage: `url(${vl})`,
                            backgroundSize: "300px"
                        }
                    }), u.jsx("div", {
                        className: "relative z-10 space-y-8",
                        children: o?.paragraphs.map( (f, m) => u.jsx("p", {
                            className: "text-xl md:text-2xl leading-relaxed text-gray-700 font-serif whitespace-pre-line",
                            children: f
                        }, m))
                    }), u.jsxs("div", {
                        className: "mt-20 flex items-center justify-between border-t border-gray-100 pt-10",
                        children: [u.jsxs("button", {
                            disabled: l === 0,
                            onClick: () => s(f => f - 1),
                            className: "flex items-center gap-4 text-gray-400 hover:text-primary transition-all disabled:opacity-0 group",
                            children: [u.jsx("div", {
                                className: "w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-primary",
                                children: u.jsx("span", {
                                    children: "←"
                                })
                            }), u.jsx("span", {
                                className: "font-bold uppercase tracking-widest text-[21px]",
                                children: "Артқа"
                            })]
                        }), u.jsx("div", {
                            className: "text-gray-300 font-serif italic text-lg",
                            children: l + 1
                        }), u.jsxs("button", {
                            disabled: l === Kc.length - 1,
                            onClick: () => s(f => f + 1),
                            className: "flex items-center gap-4 text-primary hover:text-secondary transition-all disabled:opacity-0 group",
                            children: [u.jsx("span", {
                                className: "font-bold uppercase tracking-widest text-[21px]",
                                children: "Алға"
                            }), u.jsx("div", {
                                className: "w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white",
                                children: u.jsx("span", {
                                    children: "→"
                                })
                            })]
                        })]
                    })]
                })
            })
        }), u.jsx("footer", {
            id: "legacy",
            className: "bg-foreground text-background py-16",
            children: u.jsxs("div", {
                className: "container mx-auto px-6 flex flex-col items-center text-center space-y-8",
                children: [u.jsx("div", {
                    className: "text-3xl font-serif font-bold tracking-tight text-background",
                    children: "Абай"
                }), u.jsx("div", {
                    className: "w-12 h-0.5 bg-secondary/50"
                }), u.jsx("p", {
                    className: "max-w-md text-background/60 font-light",
                    children: '"Адам болам десеңіз: ақыл, жүрек, қайратты тең ұстаңыз."'
                }), u.jsx("div", {
                    className: "text-sm text-background/40 pt-8",
                    children: "© 2026 Абай Құнанбайұлына арналған жоба."
                })]
            })
        })]
    })
}
const nS = "/static/abai-muse/assets/iran_g-DoyvyYrs.png"
  , aS = "/static/abai-muse/assets/IranG75YearsVideo-1qWuZEbK.mp4"
  , lS = "/static/abai-muse/assets/IranG95Ult-M6QodiA0.mp4";
function sS() {
    const [l,s] = S.useState(null);
    S.useEffect( () => {
        if (l === null)
            return;
        const c = f => {
            f.key === "Escape" && s(null)
        }
        ;
        return window.addEventListener("keydown", c),
        () => window.removeEventListener("keydown", c)
    }
    , [l]);
    const o = [{
        title: "Хамит Ерғалиевке",
        preview: ["Әкем десем –", "Кім сенеді?!..."],
        full: ["Әкем десем –", "Кім сенеді?!", "Ол – өлген!", "Жүрекке ауыр –", "Жоқтап сарнау өлеңмен?!", "Ұлым десем –", "Қиянат қой?!", "Ол да өлген!", "Көңілім сенбес –", "Көзім жасы көмгенмен!", "Досым десем –", "Шын досым жоқ!", "Жалған дос –", "Ішірткінің құтысындай", "Қалған бос...", "...Пірім дейін –", "Құран ұстап,", "Қол берген! –", "Пірі өлмейді,", "Пірәдәрі өлгенмен!.."]
    }, {
        title: "Жарасқанға",
        preview: ["Жанды салып азапқа,", "Басты тығып..."],
        full: ["І", "Жанды салып азапқа,", "Басты тығып", "Тозаққа –", "Үйттік –", "Білмей дал болдық,", "Не керегін Қазаққа?!", "Ырысы да бұйырмай,", "Ұлысы да бұйырмай:", "Көткеншектей береді –", "Өртте қалған сиырдай!", "Дерті меңдеп талайғы –", "Бұздық ағза-сарайды:", "Қос өкпеміз қабынып,", "Жүрек қаны қарайды.", "Қиратардайын қалыбын,", "Өшірердейін жарығын –", "Өктемсінген өгейлер", "Басса екен деп шалығын –", "Халық қамын ойладық –", "Қазығында байланып:", "Түк бітірмей таусылып –", "Жүдеп-жадап, Жайрадық!", "Бүйректі де шіріттік,", "Бауырды да іріттік:", "Елдің жоғын таба алмай –", "Тән қасқырын ұлыттық!", "Жанарға жас кептеліп,", "Шетен шығып шеттедік:", "Сөзімсіз де өтпеді,", "Өзіміз де өтпедік.", "Әдіре қалып жырымыз,", "Жетпеді зар үніміз:", "Бұта көрсе саритын –", "Иттен кейін күніміз...", "ІІ", "...Жүрмейді іш-дәрет,", "Зыр жүгірткен әлек –", "Опасыз", "Бұ Фәнидің", "Атасына – нәлет!", "Шаршадым мен...", "Досым,", "Қалай көңіл-хошың –", "Ұзатуға Бақиға", "Түзік пе Өмір-Көшің?!.."]
    }, {
        title: "Нұрахметке",
        preview: ["Ес көрдік –", "Жалған бәсі артпайтынын..."],
        full: ["Ес көрдік –", "Жалған бәсі артпайтынын,", "Ішінде Көп қоңырдың –", "Аласымыз:", "Жүзге,", "Руға,", "Қанға өлсе тартпайтұғын –", "Бөлінбес", "Бір Атаның Баласымыз!", "Ер-көңіл –", "Тасқа салсаң –", "Пәті қайтпас,", "Тасуда", "Той-Ғұмырдың думаны үдеп:", "Жақын тұрмақ,", "Айыр тіл жатың айтпас,", "Біздерді Бір Анадан тумады деп!", "Хақ Бұйрығы – Жан-тәнің кемелденсе,", "Рахман Нұры –", "Тылсымның Жарығысың:", "Ақыл-Күшің-Қуатың", "Өле-өлгенше Етер қызмет –", "Ел үшін, Халық үшін...", "...Сен де келдің –", "Елуге –", "Мен де келдім,", "Бүгінгі Күн –", "Тасын Күн –", "Тілеулі Күн:", "Сараланып,", "Сафтанып,", "Зерленемін –", "Қу тірліктің", "Жасырып жүдеулігін!", "Төнген қауіп-қатерден арашалап,", "Табыстырған Тәңірге –", "Рахмет!", "Тағдыр сыйын талайлы тамашалап,", "Жаса!", "Жаса!", "Мың жаса,", "Нұрахмет!", "Ақын мінез –", "Адуын –", "Дәрі кімге?!", "Жырға – мәдет,", "Жан-Досым,", "Өмір-Ортаң:", "Қара Жерді қам басып,", "Әлі күнге –", "Менің тірі жүргенім –", "Сенің арқаң!.."]
    }, {
        title: "Анда барсаң",
        preview: ["Анда барсаң –", "Иран-Ғайып налыған..."],
        full: ["Анда барсаң –", "Иран-Ғайып налыған...", "Мында келсең –", "Иран-Ғайып арыған...", "Неге налып,", "Неден арып барады –", "Жыр перзенті", "Уызында жарыған?!", "Неге?!", "Неден", "Сезім – суық,", "Ой – тарын?!", "Қыңыр тартпай,", "Райымнан қайтайын –", "Сырттағы жау", "Іштен шықты демессің –", "Жасырмайын,", "Жан-сырымды айтайын:", "Көремін де –", "Бордай тозған Даламды,", "Көремін де –", "Жындай қозған Қаламды –", "Зар илеймін...", "О, Ел-Ана,", "Жазғырма –", "Рухани қарыны ашқан балаңды?!", "Қара шашың Қуарғанын сеземін,", "Ақ мамаңның", "Суалғанын сеземін...", "...Сезе-сезе –", "Көзім жасы көл болып,", "Өкпем өшіп,", "Өртенеді өзегім!."]
    }, {
        title: "Тауқыметің зор болды",
        preview: ["Тауқыметің зор болды,", "Не көрмедің, Торғайым?!"],
        full: ["Тауқыметің зор болды,", "Не көрмедің, Торғайым?!", "Көк аттыға қор болды,", "Көгергенің – әрдайым!", "Жемітіндей Жебірдің –", "Жезің, Күміс, Алтының.", "Көркін ашар Өмірдің –", "Жаз Күніндей Жарқыным.", "Сыр Бойының сәлемін", "Ала келдім Жеріңе.", "Кеңейіп тар Әлемім –", "Басымды идім Еліңе.", "Темір-тәртіп – тізгіннің", "Тепкісінен қорғайын?!", "Тырнағынан құзғынның", "Абай болғын, Торғайым?!", "Бар ма Ақынның айыбы –", "Ет-жүрегі езілген?!", "Барлық пәле дәйімі –", "Басталады Өзіңнен...", "...Батырыңды жайратып,", "Жата көрме, Торғайым?!", "Ақыныңды айдатып,", "Ата берме, Торғайым?!", "Жер-Суыңды сауықтап,", "Қалың кірме қаптаса,", "Бір амалын тауып бақ –", "Халық па амал таппаса?!.."]
    }, {
        title: "Басым",
        preview: ["Басым –", "Екі Иінде,"],
        full: ["Басым –", "Екі Иінде,", "Жұмалағым –", "Дорбада:", "Басымдағы киімге", "Қарап –", "Нахақ қорлама?!", "Айтшы,", "Кімдер кимеген", "Құндыз,", "Сусар бөрікті:", "Күйде –", "Жерге тимеген –", "Айырғанмен ерікті!", "Қоғамнан құн сұранып,", "Жетілердей жетесі:", "Алтын-Басқа лайық –", "Айна-Таздың кепеші.", "Күн кешемін түртініп,", "Әтектейін сылынған:", "Жұрт сұрқымнан үркініп,", "Шошынады жырымнан...", "...Қормын талыс талайға,", "Күйтіме –", "Жан сүйінбес:", "Ақын басы,", "Алайда,", "Кесілгенмен,", "Иілмес!.."]
    }];
    return u.jsxs("div", {
        className: "min-h-screen bg-background font-sans selection:bg-primary/20",
        children: [u.jsx(gl, {}), u.jsxs("section", {
            className: "relative min-h-screen flex items-center pt-20 overflow-hidden section-reveal",
            children: [u.jsx("div", {
                className: "absolute inset-0 z-0 opacity-[0.03] pointer-events-none pattern-drift",
                style: {
                    backgroundImage: `url(${vl})`,
                    backgroundSize: "400px"
                }
            }), u.jsxs("div", {
                className: "container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10",
                children: [u.jsxs("div", {
                    className: "order-2 md:order-1 space-y-8 animate-fade-up",
                    children: [u.jsxs("div", {
                        className: "space-y-2",
                        children: [u.jsx("h2", {
                            className: "text-secondary font-sans uppercase tracking-[0.2em] text-sm font-semibold",
                            children: "ақын, драматург."
                        }), u.jsxs("h1", {
                            className: "text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground leading-[0.9]",
                            children: ["Иран ", u.jsx("br", {}), " Ғайып"]
                        })]
                    }), u.jsx("p", {
                        className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                        children: '"Әдебиетте поэзия, драматургия жанрында еңбек етіп, Абай тұлғасына арналған «Мен ішпеген у бар ма?» атты драмалық дастан жазған."'
                    }), u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4",
                        children: u.jsxs("a", {
                            href: "#biography",
                            className: "group inline-flex items-center gap-2 text-primary font-medium uppercase tracking-widest text-sm hover:gap-4 transition-all",
                            children: ["Өмір жолын оқу ", u.jsx("span", {
                                className: "text-xl",
                                children: "→"
                            })]
                        })
                    })]
                }), u.jsxs("div", {
                    className: "order-1 md:order-2 relative animate-fade-up delay-150",
                    children: [u.jsxs("div", {
                        className: "aspect-[3/4] rounded-sm overflow-hidden shadow-2xl relative",
                        children: [u.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10"
                        }), u.jsx("img", {
                            src: nS,
                            alt: "Абай Құнанбайұлының портреті",
                            className: "w-full h-full object-cover transform transition-transform duration-[20s] hover:scale-110"
                        })]
                    }), u.jsx("div", {
                        className: "absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary/30 -z-10 rounded-sm"
                    })]
                })]
            })]
        }), u.jsx("section", {
            id: "biography",
            className: "py-24 bg-muted/30 relative section-reveal",
            children: u.jsx("div", {
                className: "container mx-auto px-6 max-w-4xl",
                children: u.jsxs("div", {
                    className: "space-y-12",
                    children: [u.jsxs("div", {
                        className: "text-center space-y-4",
                        children: [u.jsx("h2", {
                            className: "text-3xl md:text-4xl font-serif text-primary",
                            children: "Ағартушының өмірі"
                        }), u.jsx("div", {
                            className: "w-24 h-1 bg-secondary mx-auto"
                        })]
                    }), u.jsxs("div", {
                        className: "prose prose-lg prose-stone mx-auto text-muted-foreground first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left",
                        children: [u.jsx("p", {
                            children: "Иранбек (Иран-Ғайып) Оразбаев - 1947 жылы Қызылорда облысы, Сырдария ауданында туған. Қазақ политехникалық институтының таукен факультетін (1970), Мәскеудегі М.Горький атындағы Әдебиет институты жанындағы жоғары әдеби курсты бітірген (1980). Әр жылдары Қызылорда облысы «Білім» қоғамында референт, «Жазушы» баспасында редактор, «Қазақ әдебиеті» газеті редакциясында поэзия бөлімінің меңгерушісі, ҚР Білім, мәдениет комитетінің редакциялықрепертуарлық коллегиясының бас редакторы қызметтерін атқарды. 1998 жылдан Қазақтың мемлекеттік Ғ.Мүсірепов атындағы Жастар мен балалар театрының әдебиет бөлімін басқарды."
                        }), u.jsxs("p", {
                            children: [u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-3"
                            }), "Алғашқы «Жүрек жырлайды» атты жыр жинағы 1974 жылы жарық көрді. Кейін «Тың құрбаны», «Хайуандық комедия», «Күшігінен таланған», «Мен ішпеген у бар ма?», «Батқан кеменің бейбақтары», «Желжуан», «Құдай қарғағандар», «Жамбылдың қызыл жолбарысы», «Негізгі шаруа», «Қанына тартқан қыңырлар», «Алтын адам», «Алтын ажал», «Киелі күнә», «Хан–Абылай–Сабалақ», «Жәбекшаған», «ГүлНәр», «Театр Романы», «Қорқыттың көрі», «Мауглидің оралуы», «Махамбет», «Қашғария», «Былыққа батқан қала», «Керкеткен» атты драмалық дастандарын жазды. «Глаза ночи» (1983), «Царь слова»(1984), «Наследник» (1988) атты кітаптары орыс тілінде жарық көрді. 1990 жылы үш томдық, ал 2006 жылы 13 томдық таңдамалысы оқырмандар қолына тиді."]
                        }), u.jsxs("p", {
                            children: [u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-3"
                            }), "2002 жылы «Қорқыттың көрі» атты жыр кітабы үшін ҚР Мемлекеттік сыйлығының лауреаты атанды. Тәуелсіз Қазақстан Республикасының тұңғыш өткен жазба ақындар жырмүшәйрасының бас жүлдегері."]
                        }), u.jsxs("p", {
                            children: [u.jsx("div", {
                                className: "pt-4 flex flex-wrap items-center gap-4 mb-3"
                            }), "Шығармалары: Жүрек жырлайды. Өлеңдер. 1974; Жеті қазына. Балладалар мен поэма. 1977; Түннің көзі. Өлеңдер. А., 1980; Өмірөлең. Жыр кітабы. А., 1982; Молодые поэты Средней Азии и Казахстана. М., «Молодая гвардия», 1982; Глаза ночи. Стихи. А., 1983; Царь слова. Стихи, поэма. М., «Советский писатель», 1984; Сұлулық сарасы. Өлеңдер, поэмалар. А., 1985; Дүниежарық. Жыр кітабы. 1987; Наследник. Поэма. 1988; Батқан кеменің бейбақтары. Дастандар. 1990; Мұнар, мұнар, мұнарым… Қасірет кітабы. 1992; Иран бағы. Таңдамалы. 1995; Сөз патша. Таңдамалы. 1996; Жыр әлемі. Жыр кітабы. 1996."]
                        })]
                    }), u.jsx("div", {
                        className: "grid md:grid-cols-3 gap-6 pt-8",
                        children: [{
                            year: "1947",
                            title: "Туған жылы",
                            desc: "Қызылорда облысы, Сырдария ауданында туған"
                        }, {
                            year: "1974",
                            title: "«Жүрек жырлайды»",
                            desc: "Алғашқы «Жүрек жырлайды» атты жыр жинағы 1974 жылы жарық көрді."
                        }, {
                            year: "1980",
                            title: "",
                            desc: "Мәскеудегі М.Горький атындағы Әдебиет институты жанындағы жоғары әдеби курсты бітірген (1980)"
                        }, {
                            year: "1998",
                            title: "Жастар мен балалар театры",
                            desc: "Қазақтың мемлекеттік Ғ.Мүсірепов атындағы Жастар мен балалар театрының әдебиет бөлімін басқарды"
                        }, {
                            year: "1990",
                            title: "",
                            desc: "Үш томдық, ал 2006 жылы 13 томдық таңдамалысы оқырмандар қолына тиді."
                        }, {
                            year: "2002",
                            title: "«Қорқыттың көрі»",
                            desc: "Жыр кітабы үшін ҚР Мемлекеттік сыйлығының лауреаты атанды."
                        }].map( (c, f) => u.jsx(Nn, {
                            className: "bg-background/50 border-none shadow-sm hover:shadow-md transition-shadow",
                            children: u.jsxs(jn, {
                                className: "p-6 text-center space-y-2",
                                children: [u.jsx("span", {
                                    className: "text-4xl font-serif text-secondary opacity-50 block",
                                    children: c.year
                                }), u.jsx("h3", {
                                    className: "font-bold text-foreground",
                                    children: c.title
                                }), u.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: c.desc
                                })]
                            })
                        }, f))
                    })]
                })
            })
        }), u.jsx("section", {
            id: "poetry",
            className: "py-24 bg-background section-reveal",
            children: u.jsxs("div", {
                className: "container mx-auto px-6",
                children: [u.jsxs("div", {
                    className: "text-center max-w-2xl mx-auto mb-16 space-y-4",
                    children: [u.jsx("h2", {
                        className: "text-4xl font-serif text-foreground",
                        children: "Өлеңдер"
                    }), u.jsx("p", {
                        className: "text-muted-foreground",
                        children: "— Иранбек Әбітайұлы Оразбаев (Иран-Ғайып), ақын, драматург"
                    })]
                }), u.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: o.map( (c, f) => u.jsx(Nn, {
                        className: "group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-secondary/50",
                        children: u.jsxs(jn, {
                            className: "p-8 space-y-6",
                            children: [u.jsx("h3", {
                                className: "text-2xl font-serif text-primary group-hover:text-secondary transition-colors text-center",
                                children: c.title
                            }), u.jsx("div", {
                                className: "space-y-2 text-center",
                                children: c.preview.map( (m, p) => u.jsx("p", {
                                    className: "text-muted-foreground font-serif italic text-sm md:text-base leading-relaxed",
                                    children: m
                                }, p))
                            }), u.jsx("div", {
                                className: "flex justify-center",
                                children: u.jsx("button", {
                                    type: "button",
                                    onClick: () => s(f),
                                    className: "text-xs uppercase tracking-widest text-primary hover:text-secondary transition-colors duration-300",
                                    children: "Толық оқу"
                                })
                            })]
                        })
                    }, f))
                })]
            })
        }), u.jsx("section", {
            id: "poetry",
            className: "py-24 bg-white section-reveal",
            children: u.jsxs("div", {
                className: "container mx-auto px-6",
                children: [u.jsx("div", {
                    className: "text-center max-w-2xl mx-auto mb-16 space-y-4",
                    children: u.jsx("h2", {
                        className: "text-4xl font-serif text-foreground",
                        children: "Ұлт театрына 95 жыл- Иран-Ғайып"
                    })
                }), u.jsx("div", {
                    className: "w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl mb-12",
                    children: u.jsx("div", {
                        className: "w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl",
                        children: u.jsx("video", {
                            className: "w-full h-auto rounded-2xl",
                            controls: !0,
                            src: lS
                        })
                    })
                }), u.jsx("div", {
                    className: "prose prose-lg prose-stone mx-auto text-muted-foreground first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left",
                    children: u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-6",
                        children: u.jsx("p", {
                            children: "Ақын, драматург Иран-Ғайып театр ұжымын 95 жылдық мерейтойымен құттықтайды. Иран-Ғайып біздің театр сахнасында сахналанған “Мен ішпеген у бар ма?”, “Қорқыттың көрі” секілді спектакльдердің авторы."
                        })
                    })
                })]
            })
        }), u.jsx("section", {
            id: "poetry",
            className: "py-24 bg-background section-reveal",
            children: u.jsxs("div", {
                className: "container mx-auto px-6",
                children: [u.jsx("div", {
                    className: "text-center max-w-2xl mx-auto mb-16 space-y-4",
                    children: u.jsx("h2", {
                        className: "text-4xl font-serif text-foreground",
                        children: "Ақын Иран-Ғайып 75 жасқа толды"
                    })
                }), u.jsx("div", {
                    className: "w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl mb-12",
                    children: u.jsx("div", {
                        className: "w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl",
                        children: u.jsx("video", {
                            className: "w-full h-auto rounded-2xl",
                            controls: !0,
                            src: aS
                        })
                    })
                }), u.jsxs("div", {
                    className: "prose prose-lg prose-stone mx-auto text-muted-foreground first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left",
                    children: [u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-6",
                        children: u.jsx("p", {
                            children: "Алматыда ақын, драмматург, Мемлекеттік сыйлықтың иегері Иран-Ғайыптың 75 жылдық мерейтойына орай шығармашылық кеш өтті. Ақын өз туындыларында жаратылыстың ұлы феномені - адамды басты нысана ете отырып, оның бүкіл болмысындағы күйініші мен сүйінішін, қуанышы мен мұңын сезімталдықпен жеткізе білді. Иран-Ғайыптың алғашқы «Жүрек жырлайды» атты жинағы 1974 жылы жарық көрді. Ал 2002 жылы «Қорқыттың көрі» атты жыр кітабы үшін Мемлекеттік сыйлықтың лауреаты атанды. Сондай-ақ тәуелсіз Қазақстанда тұңғыш өткен жазба ақындар жыр мүшайрасының бас жүлдесін иеленген. Иран-Ғайыптың жақұт жырлары, өлмес өлеңдері мен поэмалары, аудармалары қазақ поэзиясының алтын қорына енген."
                        })
                    }), u.jsx("h2", {
                        className: "text-secondary font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-6",
                        children: "Ереке Құлкенов, жазушы:"
                    }), u.jsx("p", {
                        className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                        children: '"Алғашқы өлеңінен бастап қазақ поэзиясына өзінің сара жолын салып келген ерекше ақын. Оның жазу стилі, ойын жеткізе білуі, ойын ірікпей айта алатыны, батылдығы, ержүректігі көп ақындарда жоқ нәрсе. Сондықтан Иранбектің жөні бөлек."'
                    })]
                })]
            })
        }), l !== null && u.jsxs("div", {
            className: "fixed inset-0 z-50",
            children: [u.jsx("button", {
                type: "button",
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                onClick: () => s(null),
                "aria-label": "Жабу"
            }), u.jsx("div", {
                className: "relative z-10 flex h-full w-full items-center justify-center px-4 py-10",
                children: u.jsxs("div", {
                    className: "w-full max-w-3xl max-h-full overflow-y-auto rounded-2xl bg-background text-foreground shadow-2xl border border-foreground/10 transition-transform duration-300 ease-out",
                    children: [u.jsxs("div", {
                        className: "flex items-center justify-between gap-4 border-b border-foreground/10 px-6 py-4",
                        children: [u.jsx("h2", {
                            className: "text-2xl md:text-3xl font-serif",
                            children: o[l].title
                        }), u.jsx("button", {
                            type: "button",
                            onClick: () => s(null),
                            className: "inline-flex items-center justify-center rounded-full border border-foreground/20 px-3 py-1 text-sm hover:bg-foreground/5 transition",
                            children: "Жабу"
                        })]
                    }), u.jsx("div", {
                        className: "px-6 py-6 space-y-4 text-lg leading-relaxed",
                        children: o[l].full.map( (c, f) => u.jsx("p", {
                            className: "text-muted-foreground",
                            children: c
                        }, `${o[l].title}-${f}`))
                    })]
                })
            })]
        }), u.jsx("footer", {
            id: "legacy",
            className: "bg-foreground text-background py-16",
            children: u.jsxs("div", {
                className: "container mx-auto px-6 flex flex-col items-center text-center space-y-8",
                children: [u.jsx("div", {
                    className: "text-3xl font-serif font-bold tracking-tight text-background",
                    children: "Абай"
                }), u.jsx("div", {
                    className: "w-12 h-0.5 bg-secondary/50"
                }), u.jsx("p", {
                    className: "max-w-md text-background/60 font-light",
                    children: '"Адам болам десеңіз: ақыл, жүрек, қайратты тең ұстаңыз."'
                }), u.jsx("div", {
                    className: "text-sm text-background/40 pt-8",
                    children: "© 2026 Абай Құнанбайұлына арналған жоба."
                })]
            })
        })]
    })
}
const Ch = [{
    word: 1,
    prompt: "Қара сөз 1-де қай сөйлем айтылады?",
    options: ["Жә, ол сегіз сипатына сипатымызды һәм ол аттары бірлән ағламланған фиғыл құдаға фиғлымызды ертпек неменен табылады, қалайша табылады, оны білмек керек.", "Әншейін осылардың ызасынан ба, өзіме-өзім ыза болғанымнан ба, яки бөтен бір себептен бе?", "Бұл жасқа келгенше жақсы өткіздік пе, жаман өткіздік пе, әйтеуір бірталай өмірімізді өткіздік: алыстық, жұлыстық, айтыстық, тартыстық - әурешілікті көре-көре келдік.", "Оның діні, құдайы, халқы, жұрты, білімі, ұяты, ары, жақыны - бәрі мал."],
    answerIndex: 2
}, {
    word: 1,
    prompt: "Қара сөз 1-де қай сөйлем айтылады?",
    options: ["Енді жер ортасы жасқа келдік: қажыдық, жалықтық; қылып жүрген ісіміздің баянсызын, байлаусызын көрдік, бәрі қоршылық екенін білдік.", "Шала мейір шала байқайды.", "Басына һәм бір өзіне өзгешелік бермек - адам ұлын бір бұзатын іс.", "Және мал тілейсіңдер, неге керек қылайын деп тілейсіңдер?"],
    answerIndex: 0
}, {
    word: 2,
    prompt: "Қара сөз 2-де қай сөйлем айтылады?",
    options: ["Мен бала күнімде естуші едім, біздің қазақ сартты көрсе, күлуші еді «енеңді ұрайын, кең қолтық, шүлдіреген тәжік, Арқадан үй төбесіне саламын деп, қамыс артқан, бұтадан қорыққан, көз көргенде «әке-үке» десіп, шығып кетсе, қызын боқтасқан, «сарт-сұрт деген осы» деп.", "Мұндай қиял өзі де бұзықтарда болады.", "Осы екеуі маған қалай таласады?» - депті.", "Қазір де орыстан оқыған балалардан артық жақсы кісі шыға алмай да тұр."],
    answerIndex: 0
}, {
    word: 2,
    prompt: "Қара сөз 2-де қай сөйлем айтылады?",
    options: ["Кеселді жалқау, қылжақбас,", "Өзіңнен қалған дүние иесіз қалар дейсің бе?", "Бұл сөзіме нақлия дәлелім - жоғарыдағы жазылған алла тағаланың есімдері.", "Ноғайды көрсе, оны да боқтап күлуші еді: «түйеден қорыққан ноғай, атқа мінсе - шаршап, жаяу жүрсе - демін алады, ноғай дегенше, ноқай десеңші, түкке ыңғайы келмейді, солдат ноғай, қашқын ноғай, башалшік ноғай» деп."],
    answerIndex: 3
}, {
    word: 3,
    prompt: "Қара сөз 3-де қай сөйлем айтылады?",
    options: ["Қазақтың жаманшылыққа үйір бола беретұғынының бір себебі - жұмысының жоқтығы.", "Ахирет үшін бала тілегенің - балам жасында өлсін дегенің.", "Соған қарап ойлайсың: алла тағаланың сипатында солай болмаққа тиіс.", "Қазақтың бірінің біріне қаскүнем болмағының, бірінің тілеуін бірі тілеспейтұғынының, рас сөзі аз болатұғынының, қызметке таласқыш болатұғынының, өздерінің жалқау болатұғынының себебі не?"],
    answerIndex: 3
}, {
    word: 3,
    prompt: "Қара сөз 3-де қай сөйлем айтылады?",
    options: ["Жоқ, елге бағым жоқ.", "Һәмма ғаламға белгілі данышпандар әлдеқашан байқаған: әрбір жалқау кісі қорқақ, қайратсыз тартады; әрбір қайратсыз қорқақ, мақтаншақ келеді; әрбір мақтаншақ қорқақ, ақылсыз, надан келеді; әрбір ақылсыз надан, арсыз келеді; әрбір арсыз жалқаудан сұрамсақ, өзі тойымсыз, өнерсіз, ешкімге достығы жоқ жандар шығады.", "Сонан қашпақ керек: әуелі - надандық, екіншісі - еріншектік, үшінші - залымдық деп білесің.", "Немесе «пәленше де, түгенше де тірі жүр ғой, пәлен қылған, түген қылған, менікі оның қасында несі сөз, пәлендей, түгендей мәнісі бар емес пе еді?» деп, ұялтамын десең, жап-жай отырып дауын сабап отырады."],
    answerIndex: 1
}, {
    word: 4,
    prompt: "Қара сөз 4-де қай сөйлем айтылады?",
    options: ["Еңбек қылып, мал табудың да жөнін солар біледі, салтанат, әсем де соларда.", "Екінші жылы кандидатпенен аңдысып күні өтеді.", "Өлсем орнымды бассын дейді, артымнан құран оқысын дейді, қартайған күнімде асырасын дейді.", "Әрбір байқаған адам білсе керек: күлкі өзі бір мастық екенін, әрбір мас кісіден ғафил көп өтетұғынын да, әрбір мастың сөйлеген кезінде бас ауыртатұғынын."],
    answerIndex: 3
}, {
    word: 4,
    prompt: "Қара сөз 4-де қай сөйлем айтылады?",
    options: ["Әрбір ғалым - хакім емес, әрбір хакім - ғалым.", "Бұлай болғанда, күлкіге салынған кісі не шаруадан, не ақылдан, не бір ұят келерлік істен құр, ғафил көп өткізіп отырса керек.", "Көңілде өзге махаббат тұрғанда, хақлықты таппайды.", "Мұндай сөзді есіткенде шайқақтап, шалықтанып не салбырап, салғырттанып есітсе, не есіткен жерде қайта қайырып сұрап ұғайын деп тұшынбаса, не сол жерде сөздің расына көзі жетсе де, шыға беріп қайта қалпына кетсе, естіп-есітпей не керек?"],
    answerIndex: 1
}, {
    word: 5,
    prompt: "Қара сөз 5-де қай сөйлем айтылады?",
    options: ["Соңғысы лайықты, - дейді, - бірақ ол жаратушы жаратты, өздігінен кез келіп, солай болып кетпей, басынан біліп істеген хикметімен болса, - дейді.", "Екінші жылы кандидатпенен аңдысып күні өтеді.", "Бұл сөзіме нақлия дәлелім - жоғарыдағы жазылған алла тағаланың есімдері.", "Көкірек толған қайғы кісінің өзіне де билетпейді, бойды шымырлатып, буынды құртып, я көзден жас болып ағады, я тілден сөз болып ағады."],
    answerIndex: 3
}, {
    word: 5,
    prompt: "Қара сөз 5-де қай сөйлем айтылады?",
    options: ["Уайым-қайғысыздығыңа уайым-қайғы қыл дағы, сол уайым-қайғысыздықтан құтыларлық орынды харекет табу керек һәм қылу керек.", "Қазақтар: «Ә, құдай, жас баладай қайғысыз қыла гөр!» деп тілек тілегенін өзім көрдім.", "Сенсіз ешнәрсе табылмайтұғыны да рас.", "Фиғылы құданың ешбірін де қарар қылмаймыз, өзгелерде болғанын жек көрмейміз, өзіміз тұтпаймыз, бұл қиянатшылық емес пе?"],
    answerIndex: 1
}, {
    word: 6,
    prompt: "Қара сөз 6-де қай сөйлем айтылады?",
    options: ["Егер кез болып қалса, салынбау керек.", "Қазақтың бір мақалы: «Өнер алды - бірлік, ырыс алды -тірлік» дейді.", "Ондай бахас хусідшілікті зорайтады, адамшылықты зорайтпайды, бәлкім, азайтады.", "Мұқтаж болмағанда да, біреу сенің қамыңды жесе, сенің оған қарыздар екендігіңе де ұстаз керек пе?"],
    answerIndex: 1
}, {
    word: 6,
    prompt: "Қара сөз 6-де қай сөйлем айтылады?",
    options: ["Ол мал көбейсе, малшыларға бақтырмақ, өздері етке, қымызға тойып, сұлуды жайлап, жүйрікті байлап отырмақ.", "Иман дегеніміз бір ғана инанмақтық емес, сен алла тағаланың бірлігіне, уә құранның оның сөзі екендігіне, уә пайғамбарымыз Мұхаммед Мұстафа салаллаһу ғалайһи уәссәлләм оның тарапынан елші екендігіне инандың.", "Бірлік қандай елде болады, қайтсе тату болады - білмейді.", "Бұлай болғанда, күлкіге салынған кісі не шаруадан, не ақылдан, не бір ұят келерлік істен құр, ғафил көп өткізіп отырса керек."],
    answerIndex: 2
}, {
    word: 7,
    prompt: "Қара сөз 7-де қай сөйлем айтылады?",
    options: ["Жас бала анадан туғанда екі түрлі мінезбен туады: біреуі - ішсем, жесем, ұйқтасам деп тұрады.", "Артқы толқын - інілер,", "Орыстың ғылымы, өнері - дүниенің кілті, оны білгенге дүние арзанырақ түседі.", "Оған дознание - тергеу шығарады."],
    answerIndex: 0
}, {
    word: 7,
    prompt: "Қара сөз 7-де қай сөйлем айтылады?",
    options: ["Бұлай болғанда ақымақтық, қайғысыздық та бір ғанибет екен деп ойлаймын.", "Бұлар - тәннің құмары, бұлар болмаса, тән жанға қонақ үй бола алмайды.", "Енді осылардан білсеңіз болады: надан ел қуанбас нәрсеге қуанады һәм және қуанғанда не айтып, не қойғанын, не қылғанын өзі білмей, есі шығып, бір түрлі мастыққа кез болып кетеді.", "Қазақтың жаманшылыққа үйір бола беретұғынының бір себебі - жұмысының жоқтығы."],
    answerIndex: 1
}, {
    word: 8,
    prompt: "Қара сөз 8-де қай сөйлем айтылады?",
    options: ["Ондай нәрсе тұла бойыңа жайылады, тез ұмыттырмайды.", "Осы ақылды кім үйренеді, насихатты кім тыңдайды?", "Жер мақтасын, кендірін, жемісін, кенін, гүлдер гүлін, құстар жүнін, етін, жұмыртқасын; хайуандар етін, сүтін, күшін, көркін, терісін; сулар балығын, балықтар икрасын, хатта ара балын, балауызын, құрт жібегін - һәммасы адам баласының пайдасына жасалып, ешбірінде бұл менікі дерлік бір нәрсе жоқ, бәрі - адам баласына таусылмас азық.", "Жә, кімді сүйдік, кімнің тілеуін тіледік?"],
    answerIndex: 1
}, {
    word: 8,
    prompt: "Қара сөз 8-де қай сөйлем айтылады?",
    options: ["Біреу - болыс, біреу - би.", "Осыдан басқасы бар ма?", "Егер бұлар дін ұстазымыз емес болса да, дінде басшымыз құдайдың елшісі пайғамбарымыздың хадис шарифі, хайру н-нас мән йанфагу н-нас деген.", "Соны не үміт үзбестікке, не онысы болмаса, мұнысы бар ғой деп, көңілге қуат қылуға жаратсам керек еді, ондайым жоқ."],
    answerIndex: 0
}, {
    word: 9,
    prompt: "Қара сөз 9-де қай сөйлем айтылады?",
    options: ["Осы мен өзім - қазақпын.", "Құдай тәбәраканың затына пендесінің ақылы жетпесе, дәл сондай ғашықпын демек те орынсыз.", "Жә, бұл хикметтерінің һәммасын һәм мархамат, һәм ғадаләт заһир тұр екен.", "Заты түгіл, хикметіне ешбір хакім ақыл ерістіре алмады."],
    answerIndex: 0
}, {
    word: 9,
    prompt: "Қара сөз 9-де қай сөйлем айтылады?",
    options: ["Қазақты жақсы көрем бе, жек көрем бе?", "Ол көңілге түсіруші бағанағы бес нәрседен өткен соң, оларды жайғастырып көңілде суреттемек.", "Орысқа қараған соң да, орыстың өнерлерін бізден олар көп үйреніп кетті.", "Енді жұбанышы - жалғыз біз бе, елдің бәрі де сүйтіп-ақ жүр ғой, көппен көрген ұлы той, көппен бірге болсақ болады да деген сөзді жұбаныш қылады."],
    answerIndex: 0
}, {
    word: 10,
    prompt: "Қара сөз 10-де қай сөйлем айтылады?",
    options: ["Біреулер құдайдан бала тілейді.", "ой жетпейтұғын дүние әрбір түрлі керекке бола жаратылып һәм бір-біріне себеппен байланыстырылып, пенденің ақылына өлшеу бермейтұғын мықты көркем законге қаратылып жаратылды, - дейді.", "Дүниеде жалғыз қалған адам – адамның өлгені.", "Әрбір мастық бойдан оғатты көп шығарып, ақылдың көзін байлап, төңіректегі қараушылардың көзін ашып, «ананы-мынаны» дегізіп, бойды сынататұғын нәрсе екен."],
    answerIndex: 0
}, {
    word: 10,
    prompt: "Қара сөз 10-де қай сөйлем айтылады?",
    options: ["Жаманға салысып жақсы бола ма?", "Мен бес аттан, он аттан ілгері едім дегеннің несі қуаныш?", "Ол баланы не қылады?", "Бұл жолда риясыз, жеңілдіксіз бір қарар тұрып іздеген ғана кісі істің кәмәлатына жетпек."],
    answerIndex: 2
}, {
    word: 11,
    prompt: "Қара сөз 11-де қай сөйлем айтылады?",
    options: ["Кеселді кісі ер келетұғыны несі?", "Есер кісі орнын таппай, не болса сол бір баянсыз, бағасыз нәрсеге қызығып, құмар болып, өмірінің қызықты, қымбатты шағын итқорлықпен өткізіп алады екен дағы, күнінде өкінгені пайда болмай-ды екен.", "Ақыл, ғылым - бұлар - кәсиби.", "Осы елдің үнем қылып жүргені немене?"],
    answerIndex: 3
}, {
    word: 11,
    prompt: "Қара сөз 11-де қай сөйлем айтылады?",
    options: ["Харекетсіз - сопы монтаны.", "Әуелі - ұрлық, ұры ұрлықпен мал табам деп жүр.", "Ол қуатты орнын тауып сарып қыларды білерлік ғылым берді, оны оқымайсың.", "Қайраттанып, сілкіп тастап кетсең де, ақырында тағы келіп жеңеді."],
    answerIndex: 1
}, {
    word: 12,
    prompt: "Қара сөз 12-де қай сөйлем айтылады?",
    options: ["Осыған орай біреу ер атанамын, біреу қажеке атанамын, біреу молдеке атанамын, біреулер білгіш, қу, сұм атанамын деп, сол харекетте жүр.", "Олардың шәкірттерінің көбі біраз ғарап-парсыдан тіл үйренсе, бірлі-жарым болымсыз сөз бахас үйренсе, соған мәз болып, өзіне өзгешелік беремін деп әуре болып, жұртқа пайдасы тимек түгіл, түрлі-түрлі зарарлар хасил қылады «һай-һой!» менен, мақтанменен қауымды адастырып бітіреді.", "Басында өзіндік жұмысы бар: ұлығымызға жазалы болып қаламыз ба, елдегі бұзақыларымызды бүлдіріп аламыз ба, немесе халқымызды бүлдіріп аламыз ба, яки өзіміз шығымдап, шығынымызды толтыра алмай қаламыз ба?", "Кімде-кім жақсы-жаман ғибадат қылып жүрсе, оны ол ғибадаттан тыюға аузымыз бармайды, әйтеуір жақсылыққа қылған ниеттің жамандығы жоқ қой дейміз."],
    answerIndex: 3
}, {
    word: 12,
    prompt: "Қара сөз 12-де қай сөйлем айтылады?",
    options: ["Оны қайтіп түзете аламыз?", "Сырын қалай болады деп көңілге салмадық, оны білмеген кісінің несі кетіпті дейміз.", "Ләкин, сондай адамдар толымды ғибадатқа ғылымы жетпесе де, қылса екен.", "Кім өзіңе махаббат қылса, сен де оған махаббат қылмағың қарыз емес пе?"],
    answerIndex: 2
}, {
    word: 13,
    prompt: "Қара сөз 13-де қай сөйлем айтылады?",
    options: ["Тамам жұртқа бұзық болма, түзік бол деп жарлық шашып, жол салады екен.", "Иман деген - алла табарака уа тағаланың шәриксиз, ғайыпсыз бірлігіне, барлығына уа әр түрлі бізге пайғамбарымыз саллалаһу ғалайһи уәссәлләм арқылы жіберген жарлығына, білдіргеніне мойын ұсынып, инанмақ.", "Оны білмесең, бақпасаң - айрыласың.", "Енді жұбанышы - жалғыз біз бе, елдің бәрі де сүйтіп-ақ жүр ғой, көппен көрген ұлы той, көппен бірге болсақ болады да деген сөзді жұбаныш қылады."],
    answerIndex: 1
}, {
    word: 13,
    prompt: "Қара сөз 13-де қай сөйлем айтылады?",
    options: ["Соны таба алмай өзім де қайранмын.", "Баланың мал табарлық болары, мал шашарлық болары - ол да екі талай.", "Артын ойлап ұялмас, -", "Енді бұл иман дерлік инануға екі түрлі нәрсе керек."],
    answerIndex: 3
}, {
    word: 14,
    prompt: "Қара сөз 14-де қай сөйлем айтылады?",
    options: ["Көкіректе сәуле жоқ, көңілде сенім жоқ.", "Дүниелік керек болса, адал еңбекке салынып алған кісі ондай жүрісті иттей қорлық көрмей ме?", "Әншейін біреуді ыза қылмақтың несін дәулет біліп қуанады екен?", "Тірі адамның жүректен аяулы жері бола ма?"],
    answerIndex: 3
}, {
    word: 14,
    prompt: "Қара сөз 14-де қай сөйлем айтылады?",
    options: ["Биік мансап - биік жартас", "Көп заман тексермесең, тауып алған өнеріңнің жоғалғандығын және өзіңнің ол мезгілдегіден бір басқа адам болып кеткеніңді білмей қаласың.", "Бір-екі қара тапса, малға бөге қалған кісімсіп, «маған мал жоқ па?» дегендей қылып, еріншектік, салдау-салғырттыққа, кербездікке салынады.", "Біздің қазақтың жүректі кісі дегені - батыр кісі дегені."],
    answerIndex: 3
}, {
    word: 15,
    prompt: "Қара сөз 15-де қай сөйлем айтылады?",
    options: ["Ғаламнан жиылсын, маған құйылсын, отырған орныма ағып келе берсін деген ол не деген нысап?", "Саудагер несиесін жия келгенде «тапқаным осы, біттім деп, алсаң — ал, әйтпесе саған бола жерден мал қазам ба?» дейтұғыны болушы еді ғой.", "Бұлар зораймай, ғылым зораймайды.", "Ақылды кісі мен ақылсыз кісінің, менің білуімше, бір белгілі парқын көрдім."],
    answerIndex: 3
}, {
    word: 15,
    prompt: "Қара сөз 15-де қай сөйлем айтылады?",
    options: ["Әуелі - пенде адам болып жаратылған соң, дүниеде ешбір нәрсені қызық көрмей жүре алмайды.", "Бұл иманды иман таклиди дейміз.", "Сенің де ісіңнен бір зарар шығып кеткендей болмай, көпке пайда боларлық бір үміті бар іс болсын.", "Басында зорлықпенен яки алдауменен үйір қылу керек, үйрене келе өзі іздегендей болғанша."],
    answerIndex: 0
}, {
    word: 16,
    prompt: "Қара сөз 16-де қай сөйлем айтылады?",
    options: ["Көп заман тексермесең, тауып алған өнеріңнің жоғалғандығын және өзіңнің ол мезгілдегіден бір басқа адам болып кеткеніңді білмей қаласың.", "Қазақ құлшылығым құдайға лайық болса екен деп қам жемейді.", "Егер бұлар дін ұстазымыз емес болса да, дінде басшымыз құдайдың елшісі пайғамбарымыздың хадис шарифі, хайру н-нас мән йанфагу н-нас деген.", "Үйтуім екен, бүйтуім екен» деп, өмір бойы ғафил болып-ақ отырғаның."],
    answerIndex: 1
}, {
    word: 16,
    prompt: "Қара сөз 16-де қай сөйлем айтылады?",
    options: ["Кім азса, мен соған керек боламын деп, к...н қыздырып алып, өзін бір ғана азық қылайын деп жүр.", "Тек жұрт қылғанды біз де қылып, жығылып, тұрып жүрсек болғаны дейді.", "Ұят деген - адамның өз бойындағы адамшылығы, иттігіңді ішіңнен өз мойныңа салып, сөгіс қылған қысымның аты.", "Бағың өскенше тілеуіңді ел де тілейді, өзің де тілейсің, бағың өскен соң - өзің ғана тілейсің"],
    answerIndex: 1
}, {
    word: 17,
    prompt: "Қара сөз 17-де қай сөйлем айтылады?",
    options: ["Қайрат, ақыл, жүрек үшеуі өнерлерін айтысып, таласып келіп, ғылымға жүгініпті.", "Тұқымымызбен аузымыз сасық болушы еді деген жаман күйеу қалыңдығын жеңіп пе?", "Көзің күнде көреді намаз оқушы, ораза тұтушылардың не халәттә екендіктерін, оған дәлел керек емес.", "Соның ішінде уайымсыз салғырттық деген бір нәрсе бар, зинһар, жаным, соған бек сақ бол, әсіресе, әуелі - құданың, екінші - халықтың, үшінші - дәулеттің, төртінші - ғибраттың, бесінші - ақылдың, ардың -бәрінің дұшпаны."],
    answerIndex: 0
}, {
    word: 17,
    prompt: "Қара сөз 17-де қай сөйлем айтылады?",
    options: ["Қайрат айтыпты: «Ей, ғылым, өзің де білесің ғой, дүниеде ешнәрсе менсіз кәмелетке жетпейтұғынын; әуелі, өзіңді білуге ерінбей-жалықпай үйрену керек, ол - менің ісім.", "Үшінші жылы сайлауға жақындап қалып, тағы болыс болып қалуға болар ма екен деп күні өтеді.", "Оның саған керегі жоқ.", "«Құдай тағала өзі ақыл бермеген соң қайтейік?» демек, «құдай тағала сеніменен мені бірдей жаратып па?» демек - құдай тағалаға жала жауып, өзін құтқармақ болғандығы."],
    answerIndex: 0
}, {
    word: 18,
    prompt: "Қара сөз 18-де қай сөйлем айтылады?",
    options: ["Құдайшылық сонда, қалпыңды таза сақта, құдай тағала қалпыңа әрдайым қарайды деп кітаптың айтқаны осы, — депті.", "Жұмсақ төсекте, жылы үйде тамағы тоқ жатқан кісіге төсексіз кедейдің, тоңып жүрген киімсіздің, тамақсыз аштың күй-жәйі қандай болып жатыр екен деп ойлатып, жанын ашытып, ұйқысын ашылтып, төсегінде дөңбекшітетұғын - мен.", "Адам баласына жыртықсыз, кірсіз, сыпайы киініп, һәм ол киімін былғап, былжыратып кимей, таза кимек - дұрыс іс.", "Қай қазақты көрсем де, баласы жасырақ болса, оның басынан пәрмене болып жүріп, ержеткен соң суық тартатұғыны қалай?"],
    answerIndex: 2
}, {
    word: 18,
    prompt: "Қара сөз 18-де қай сөйлем айтылады?",
    options: ["Біз жанымыздан ғылым шығара алмаймыз, жаралып, жасалып қойған нәрселерді сезбекпіз, көзбен көріп, ақылмен біліп.", "Оның үшін сен өзің инанмақтығыңнан пайда ала алмадың, пайдаланамын десең, пайда береді, кәміл иман болады.", "Ләкин өз дәулетінен артық киінбек, не киімі артық болмаса да, көңіліне қуат тұтып, тым айналдырмақ - кербездің ісі.", "Бір үйдің іші түгел ауырса, жеңіл тие ме?"],
    answerIndex: 2
}, {
    word: 19,
    prompt: "Қара сөз 19-де қай сөйлем айтылады?",
    options: ["«Ол істен мен ұятты болдым дедім ғой, енді нең бар?» дейді.", "Жамандықты кім көрмейді?", "Қазір де орыстан оқыған балалардан артық жақсы кісі шыға алмай да тұр.", "Адам ата-анадан туғанда есті болмайды: естіп, көріп, ұстап, татып ескерсе, дүниедегі жақсы, жаманды таниды дағы, сондайдан білгені, көргені көп болған адам білімді болады."],
    answerIndex: 3
}, {
    word: 19,
    prompt: "Қара сөз 19-де қай сөйлем айтылады?",
    options: ["Яғни, надан атанбастығын, жеңіл атанбастығын, мақтаншақ атанбастығын, әдепсіз, арсыз, байлаусыз, пайдасыз, сұрамшақ, өсекші, өтірікші, алдамшы, кеселді - осындай жарамсыз қылықтардан сақтанып, сол мінездерді бойына қорлық біліп, өзін ондайлардан зор есептемек.", "Бір кісімен сөйлессе, «мұны қайтеміз?» - деп бағанағы антұрғанмен ақылдасады.", "Бір жолаушы алыс жерге барса, барған еліне өз елін мақтаймын деп өтірікті сыбап-сыбап, қайтып келген соң сол барған, көрген елін, жерін мақтап, өтірікті сыбайтұғыны қалай?", "Естілердің айтқан сөздерін ескеріп жүрген кісі өзі де есті болады."],
    answerIndex: 3
}, {
    word: 20,
    prompt: "Қара сөз 20-де қай сөйлем айтылады?",
    options: ["Көңілі, көзі жетіп тұрса да, хайуан секілді әуелгі әдетінен бойын тоқтата алмайды, бір тиянақсыздыққа түсіп кетеді, ешкім тоқтатып, ұқтырып болмайды.", "Орыс ойына келгенін қылады деген...", "Тағдырдың жарлығын білесіздер - өзгерілмейді.", "Қылығының қылшығын танитұғын кісіден қашық жүретұғыны қалай?"],
    answerIndex: 2
}, {
    word: 20,
    prompt: "Қара сөз 20-де қай сөйлем айтылады?",
    options: ["Егерде бұл жол жарым-жартыларына ғана айтылған болса, жарым-жарты раст дүниеде бола ма?", "Пендеде бір іс бар жалығу деген.", "Талап балада да бар, оған талас қылуға болмайды.", "Қазақтың бірінің біріне қаскүнем болмағының, бірінің тілеуін бірі тілеспейтұғынының, рас сөзі аз болатұғынының, қызметке таласқыш болатұғынының, өздерінің жалқау болатұғынының себебі не?"],
    answerIndex: 1
}, {
    word: 21,
    prompt: "Қара сөз 21-де қай сөйлем айтылады?",
    options: ["Аз ба, көп пе, адам баласы бір түрлі мақтаннан аман болмағы - қиын іс.", "Егерде ондай білгендігің өзіңді жеңе алмаса, кімге пұл болады?", "Мен бес аттан, он аттан ілгері едім дегеннің несі қуаныш?", "Оның үшін бұл жер дарулхарап, мұнда әуелі мал табу керек, онан соң араб, парсы керек."],
    answerIndex: 0
}, {
    word: 21,
    prompt: "Қара сөз 21-де қай сөйлем айтылады?",
    options: ["Сол мақтан деген нәрсенің мен екі түрлісін байқадым: біреуінің атын үлкендік деп атаймын, біреуін мақтаншақтық деймін.", "Алла тағалаға ұқсай алам ба деп, надандықпен ол сөзден жиіркенбе, ұқсамақ - дәл бірдейлік дағуасыменен емес, соның соңында болмақ.", "Ойлайды: жалынтып бердім деп, ақымақтығынан.", "Жоқ, ондай тірлік итте де бар."],
    answerIndex: 0
}, {
    word: 22,
    prompt: "Қара сөз 22-де қай сөйлем айтылады?",
    options: ["Жұт келсе, елдің бәрінің түгел жұтағаны жақсы ма?", "Бұл жасқа келгенше жақсы өткіздік пе, жаман өткіздік пе, әйтеуір бірталай өмірімізді өткіздік: алыстық, жұлыстық, айтыстық, тартыстық - әурешілікті көре-көре келдік.", "Дәл осы күнде қазақтың ішінде кімді жақсы көріп, кімді қадірлеймін деп ойладым.", "Мұндай ұят қылық қылғандығыңды бөтен кісі білмесе де, өз ақылың, өз нысабың өзіңді сөккен соң, іштен ұят келіп, өзіңе жаза тарттырады."],
    answerIndex: 2
}, {
    word: 22,
    prompt: "Қара сөз 22-де қай сөйлем айтылады?",
    options: ["Артын ойлап ұялмас, -", "Жан қуаты дейтұғын қуат - бек көп нәрсе, бәрін мұнда жазарға уақыт сыйғызбайды.", "Әуелі - өзің қаруың қайтарлық қартаюға жетемісің, жоқ па?", "Байды қадірлейін десең, бай жоқ."],
    answerIndex: 3
}, {
    word: 23,
    prompt: "Қара сөз 23-де қай сөйлем айтылады?",
    options: ["Біздің қазақтың достығы, дұшпандығы, мақтаны, мықтылығы, мал іздеуі, өнер іздеуі, жұрт тануы ешбір халыққа ұқсамайды.", "Біздің қазақты оңдырмай жүрген бір қуаныш, бір жұбаныш дегендер бар.", "Бірақ бұл замандағылардан артық екі мінезі бар екен.", "Желөкпелер шын деп ойлайды."],
    answerIndex: 1
}, {
    word: 23,
    prompt: "Қара сөз 23-де қай сөйлем айтылады?",
    options: ["Оның қуанышы - елде бір жаманды тауып, я бір адамның бұл өзі қылмаған жаманшылығы шықса, қуанады.", "Егерде екі нәрсе кез болса, бірі ахиретке керекті, бірі осы дүниеде керекті, бірін алса, бірі тимейтұғын болса, сонда біреу ахиретке керектіні алмай, екінші бір кез келгенде алармын деп, жоқ, егер кез болмайтұғын болса, кең құдай өзі кеңшілікпенен кешіреді дағы, мына кезі келіп тұрғанда мұны жіберіп болмас деп, дүниеге керектіні алса, енді ол кісі жанын берсе ахиретті дүниеге сатқаным жоқ деп, нануға бола ма?", "Біз алла тағала «бір» дейміз, «бар» дейміз, ол «бір» демеклік те - ақылымызға ұғымның бір тиянағы үшін айтылған сөз.", "Бір-екі қара тапса, малға бөге қалған кісімсіп, «маған мал жоқ па?» дегендей қылып, еріншектік, салдау-салғырттыққа, кербездікке салынады."],
    answerIndex: 0
}, {
    word: 24,
    prompt: "Қара сөз 24-де қай сөйлем айтылады?",
    options: ["Енді көңіл қайдан бірқалыпты тұра алады?", "Алдау қоспай адал еңбегін сатқан қолөнерлі - қазақтың әулиесі сол.", "Екіншісі - кітаптан оқу бірлән яки молдалардан есту бірлән иман келтіріп, сол иман келтірген нәрсесіне соншалық берік боларға керек.", "Жер жүзінде екі мың миллионнан көп артық адам бар, екі миллиондай қазақ бар."],
    answerIndex: 3
}, {
    word: 24,
    prompt: "Қара сөз 24-де қай сөйлем айтылады?",
    options: ["Адам алдын, артын, осы күнін - үшеуін де тегіс ойлап тексереді.", "Оның үшін кітап сөзіменен ізденген талап болса, әуелі көкіректі тазалау керек дейді, онан соң ғибадат қыл дейді.", "Біздің қазақтың достығы, дұшпандығы, мақтаны, мықтылығы, мал іздеуі, өнер іздеуі, жұрт тануы ешбір халыққа ұқсамайды.", "Хәрами, макруһи былай тұрсын, құдай тағаланың қуатыменен, ижтиһад ақылыңменен тауып, рахатын көрмегіне бола жаратқан, берген ниғметтеріне, онан көрмек хұзурға суық көзбен қарап, ескерусіз тастап кетпек ақылға, әдепке, ынсапқа дұрыс па?"],
    answerIndex: 2
}, {
    word: 25,
    prompt: "Қара сөз 25-де қай сөйлем айтылады?",
    options: ["Көзді, мұрынды ауызға жақын жаратыпты, ішіп-жеген асымыздың тазалығын көріп, иісін біліп, ішіп-жесін деп.", "Балаларды оқытқан да жақсы, бірақ құлшылық қыларлық қана, түркі танырлық қана таза оқыса болады.", "Ана шын ниетіменен орнын тауып, бір құдайдың разылығы үшін өнер қылғандарға айтар дейді: «Сендер бір ғана менің разылығымды іздеп малдарыңды, өмірлеріңді сарып қылып едіңдер, мен разы болдым.", "Сол себептен бір жүрген қуыс кеудемін."],
    answerIndex: 1
}, {
    word: 25,
    prompt: "Қара сөз 25-де қай сөйлем айтылады?",
    options: ["Мұндай сөзді есіткенде шайқақтап, шалықтанып не салбырап, салғырттанып есітсе, не есіткен жерде қайта қайырып сұрап ұғайын деп тұшынбаса, не сол жерде сөздің расына көзі жетсе де, шыға беріп қайта қалпына кетсе, естіп-есітпей не керек?", "Ол ата-ананы малға сатқан соң, құдайға дұшпандық іс емес пе?", "Оның үшін бұл жер дарулхарап, мұнда әуелі мал табу керек, онан соң араб, парсы керек.", "Алла табарака уатағаланың пенделеріне салған жолы қайсы?"],
    answerIndex: 2
}, {
    word: 26,
    prompt: "Қара сөз 26-де қай сөйлем айтылады?",
    options: ["Бұл қылғанын не дей аламыз?", "Біздің қазақтың қосқан аты алдында келсе, түсірген балуаны жықса, салған құсы алса, қосқан иті өзгеден озып барып ұстаса, есі шығып бір қуанады.", "Талап берген адам ақылды тапты, талабы жоқ кісі таба алмады», -дейді.", "Қазақтың жаманшылыққа үйір бола беретұғынының бір себебі - жұмысының жоқтығы."],
    answerIndex: 1
}, {
    word: 26,
    prompt: "Қара сөз 26-де қай сөйлем айтылады?",
    options: ["Сонан соң ғана алла тағаланы танымақтық, өзін танымақтық, дүниені танымақтық, өз адамдығын бұзбай ғана жәліб мәнфағат дәфғы мұзарратларны айырмақлық секілді ғылым-білімді үйренсе, білер деп үміт қылмаққа болады.", "Жә, күзетші күзеткен нәрсенің амандығын ойламай, бір ғана ояу тұрмағын қасд қылса, ол не күзет?", "Әуелі адамның адамдығы ақыл, ғылым деген нәрселерменен.", "Білмеймін, содан артық қуанышы бар ма екен?"],
    answerIndex: 3
}, {
    word: 27,
    prompt: "Қара сөз 27-де қай сөйлем айтылады?",
    options: ["Ендігі жұрттың ақылы да, тілеуі де, харекеті де - осы.", "Қазақтың жаманшылыққа үйір бола беретұғынының бір себебі - жұмысының жоқтығы.", "Талап, ұғым махаббаттан шығады.", "(Сократ хакімнің сөзі)"],
    answerIndex: 3
}, {
    word: 27,
    prompt: "Қара сөз 27-де қай сөйлем айтылады?",
    options: ["Көпке тұзағым жетпейді деп пе?", "Әзір тамақ, әзір ас,", "Бір күні Сократ хакім бір Аристодим деген ғалым шәкіртіне құдай табарака уа тағалаға құлшылық қылмақ турасында айтқан сөзі.", "Балалар өздеріне керегінше өздері бағар."],
    answerIndex: 2
}, {
    word: 28,
    prompt: "Қара сөз 28-де қай сөйлем айтылады?",
    options: ["Залымдық - адам баласының дұшпаны.", "Себебі: ата-анасы, ағайын-туғаны, бір жағынан, бұзып жатыр.", "Біреу бай болса, біреу кедей болса, біреу ауру, біреу сау болса, біреу есті, біреу есер болса, біреудің көңілі жақсылыққа мейілді, біреудің көңілі жаманшылыққа мейілді - бұлар неліктен десе біреу, сіздер айтасыздар: құдай тағаланың жаратуынан яки бұйрығынша болған іс деп.", "Талапсыздық, жігерсіздік, ұятсыздық, кедейлік - бәрі осыдан шығады."],
    answerIndex: 2
}, {
    word: 28,
    prompt: "Қара сөз 28-де қай сөйлем айтылады?",
    options: ["Қазақ осыған да, амал жоқ, нанады, анық өз ойына, ақылына тексертіп нанбайды.", "Әуелгі жылы «Сені біз сайламадық па?» деп елдің бұлданғандығымен күні өтеді.", "Жә, олай болса, біз құдай тағаланы айыбы жоқ, міні жоқ, өзі әділ деп иман келтіріп едік.", "Енді жер ортасы жасқа келдік: қажыдық, жалықтық; қылып жүрген ісіміздің баянсызын, байлаусызын көрдік, бәрі қоршылық екенін білдік."],
    answerIndex: 2
}, {
    word: 29,
    prompt: "Қара сөз 29-де қай сөйлем айтылады?",
    options: ["«Әтәмурун әннәсә билбирри уәәхсәну инналаһу йухиббул мұхсин», «уәлләзинә әмәну уәғәмилу салихати улайна асхабул жәннәти һәм фиһа халидун» деген аяттар құранның іші толған ғамалус-салих не екенін білмейміз.", "Екінші - ол адам есепсіз бай боларға керек.", "Біздің қазақтың мақалдарының көбінің іске татырлығы да бар, іске татымақ түгіл, не құдайшылыққа, не адамшылыққа жарамайтұғыны да бар.", "Бұл екі қуатты зорайту жаһатінде болу керек."],
    answerIndex: 2
}, {
    word: 29,
    prompt: "Қара сөз 29-де қай сөйлем айтылады?",
    options: ["Мақсат күзетілген нәрсенің амандығы, тазалығы емес пе?", "Моллалар тұра тұрсын, хусусан бұл заманның ишандарына бек сақ болыңдар.", "Ол дұға қазинасы күллі мұсылмандарды ортақтастырып, оларға да сәләмәтшілік тілеп һәм рахмет тілеп бітіресіз.", "Әуелі «Жарлы болсаң, арлы болма» дейді."],
    answerIndex: 3
}, {
    word: 30,
    prompt: "Қара сөз 30-де қай сөйлем айтылады?",
    options: ["Қырқын мінсе қыр артылмайтұғын осы бір «қырт мақтан» деген бір мақтан бар, сол неге керек, неге жарайды?", "Өздері хүкім шариғатты таза білмейді, көбі надан болады.", "Мұны бір берік ойлап тұр.", "Бұлай етіп бұл харекетке түсінген адамды ақылды дейміз."],
    answerIndex: 0
}, {
    word: 30,
    prompt: "Қара сөз 30-де қай сөйлем айтылады?",
    options: ["Ол ар, есті білмейді, намысты білмейді, кең толғау, үлкен ой жоқ, не балуандығы жоқ, не батырлығы жоқ, не адамдығы жоқ, не ақылдылығы, арлылығы жоқ.", "Ол досын көбейтпектің табылмағы өзінің өзгелерге қолыңнан келгенінше достық мақамында болмақ.", "Өздерінің ырбаңы бар ма, пыш-пышы бар ма, гуілдегі бар ма, дүрілдегі бар ма - сонысынан дүниеде ешбір қызықты нәрсе бар деп ойламайды, ойласа да бұрыла алмайды, егер сөз айтсаң, түгел тыңдап тұра алмайды, не көңілі, не көзі алаңдап отырады.", "Солардың бәрін жаратқанда көңілдерін солайша ынтықтандырып қойғандығы һәм мұның бәрі жақсы көргендігінен екенін білдірмей ме?"],
    answerIndex: 0
}, {
    word: 31,
    prompt: "Қара сөз 31-де қай сөйлем айтылады?",
    options: ["Һәм ол разылықтарыңнан басқа осы махшар ішінде, сендердің осы қылғаныңа өзі қылмаса да, іші еріп, ынтық болған достарың табылса, шафағат қылыңдар!» - деп айтар дейді.", "Өйтіп би көбейткенше, әрбір болыс елден толымды-білімді үш-ақ кісі билікке жыл кесілмей сайланса, олар түссе, жаманшылығы әшкере білінгендікпенен түссе, әйтпесе түспесе.", "Естіген нәрсені ұмытпастыққа төрт түрлі себеп бар: әуелі - көкірегі байлаулы берік болмақ керек; екінші — сол нәрсені естігенде я көргенде ғибрәтлану керек, көңілденіп, тұшынып, ынтамен ұғу керек; үшінші — сол нәрсені ішінен бірнеше уақыт қайтарып ойланып, көңілге бекіту керек; төртінші - ой кеселі нәрселерден қашық болу керек.", "Ол бай өз тыныштығын да білмейді, бос шығынданғанын да ескермейді."],
    answerIndex: 2
}, {
    word: 31,
    prompt: "Қара сөз 31-де қай сөйлем айтылады?",
    options: ["Олардың ақыл үйренейін, насихат тыңдайын деген ойы болса, ол орынға сайланып та жүрмес еді.", "Кеселді жалқау, қылжақбас,", "Егер кез болып қалса, салынбау керек.", "Екі етек жайылып, екі көзің аспанда, масқара болып кеткенің өлгеніңше."],
    answerIndex: 2
}, {
    word: 32,
    prompt: "Қара сөз 32-де қай сөйлем айтылады?",
    options: ["Дүние бірқалыпты тұрмайды, адамның қуаты, ғұмыры бірқалыпты тұрмайды.", "Білім-ғылым үйренбекке талап қылушыларға әуелі білмек керек.", "Біріңе-бірің қонақ екенсің, өзің дүниеге де қонақ екенсің, біреудің білгендігіне білместігін таластырып, біреудің бағына, малына күндестік қылып, я көрсеқызарлық қылып, көз алартыспақ лайық па?", "Сіз «Әмәнту биллаһи кәмаһуә би әсмайһи уасифатиһи» дедіңіз."],
    answerIndex: 1
}, {
    word: 32,
    prompt: "Қара сөз 32-де қай сөйлем айтылады?",
    options: ["Үш миллионнан халқы артық дүниеде бір қала да бар, дүниенің бас-аяғын үш айналып көрген кісі толып жатыр.", "Талаптың өзінің біраз шарттары бар.", "Мұқтаж болмағанда да, біреу сенің қамыңды жесе, сенің оған қарыздар екендігіңе де ұстаз керек пе?", "Уә әрнешік бойларынан адам жақсы көрерлік, көңілге тиянақ қыларлық бір нәрсе тапсам керек еді."],
    answerIndex: 1
}, {
    word: 33,
    prompt: "Қара сөз 33-де қай сөйлем айтылады?",
    options: ["Инандым, сендім демек инандырамын, сендіремін деген емес.", "Пенде пендеге өкпелейтұғын ешнәрсе жоқ.", "Егерде мал керек болса, қолөнер үйренбек керек.", "Желөкпелер шын деп ойлайды."],
    answerIndex: 2
}, {
    word: 33,
    prompt: "Қара сөз 33-де қай сөйлем айтылады?",
    options: ["Ақыл, ғылым - бұлар - кәсиби.", "Мал жұтайды, өнер жұтамайды.", "Біреудің ағайыны торқалы той, топырақты өлімде, адалдық берекеде алысуға табылмай, барымта алалық, ұрлалық десе, табыла қоятыны қалай?", "Және әрбір жақсы нәрсенің өлшеуі бар, өлшеуінен асса - жарамайды."],
    answerIndex: 1
}, {
    word: 34,
    prompt: "Қара сөз 34-де қай сөйлем айтылады?",
    options: ["Жұрттың бәрі біледі өлетұғынын және өлім үнемі қартайтып келмейтұғынын, бір алғанды қата жібермейтұғынын.", "Уә және назначение қылғанда тергеуі, сұрауы барлығына қарамаса, өтірік арыз берушілер азаяр еді, бәлки жоғалар еді.", "«Өзіне ар тұтқан жаттан зар тұтады» деп, «Аз араздықты қуған көп пайдасын кетірер» деп, «Ағайынның азары болса да, безері болмайды», «Алтау ала болса, ауыздағы кетеді, төртеу түгел болса, төбедегі келеді» десіп, «Жол қуған қазынаға жолығар, дау қуған пәлеге жолығар» десіп.", "Адам баласына дұшпан болса, адамнан бөлінеді, бір жыртқыш хайуан қисабына қосылады."],
    answerIndex: 0
}, {
    word: 34,
    prompt: "Қара сөз 34-де қай сөйлем айтылады?",
    options: ["Бір елдің ішінде жамағайынды кісі бірге туғандай көріп, іші елжіреп жақсы көріп тұрып, елге келсе, әрі-беріден соң қайта қашқандай қылатұғыны қалай?", "Оған бұл өткен өмірдің өкініші де жоқ болады екен.", "Қазақ осыған да, амал жоқ, нанады, анық өз ойына, ақылына тексертіп нанбайды.", "Оның діні, құдайы, халқы, жұрты, білімі, ұяты, ары, жақыны - бәрі мал."],
    answerIndex: 2
}, {
    word: 35,
    prompt: "Қара сөз 35-де қай сөйлем айтылады?",
    options: ["Ақыл, сенің қырың көп, жүрек сенің ол көп қырыңа жүрмейді.", "Оның үшін мүмкинаттың ішінде не нәрсенің ужуді бар болса, ол бірліктен құтылмайды.", "Бірақ сондай ұлық құдай менің құлшылығыма не қылып мұқтаж болады?", "Махшарға барғанда құдай тағала қажы, молда, сопы, жомарт, шейіт - соларды қатар қойып, сұрар дейді."],
    answerIndex: 3
}, {
    word: 35,
    prompt: "Қара сөз 35-де қай сөйлем айтылады?",
    options: ["«Ұялмас бетке талмас жақ береді» деп, көп былжыраған арсыз, ұятсыздың бірі дағы.", "Дүниеде ғиззат үшін, сый-құрмет алмақ үшін қажы болғанды, молда болғанды, сопы болғанды, жомарт болғанды, шейіт болғандарды бір бөлек қояр дейді.", "Оның қуанышы - елде бір жаманды тауып, я бір адамның бұл өзі қылмаған жаманшылығы шықса, қуанады.", "Жер өртеп шығарған атыңның несі мұрат?"],
    answerIndex: 1
}, {
    word: 36,
    prompt: "Қара сөз 36-де қай сөйлем айтылады?",
    options: ["Бұл өзін-өзі артық көрсетпек екі түрлі!", "Өзі құрттанып шашылған болыс-билер тұра тұрсын.", "Егер бұлар дін ұстазымыз емес болса да, дінде басшымыз құдайдың елшісі пайғамбарымыздың хадис шарифі, хайру н-нас мән йанфагу н-нас деген.", "Пайғамбарымыз салаллаһу ғалайһи уәссәлләмнің хадис шарифінде айтыпты: «мән лә хаяһүн уәлә иманун ләһу» деп, яғни кімнің ұяты жоқ болса, оның иманы да жоқ деген."],
    answerIndex: 3
}, {
    word: 36,
    prompt: "Қара сөз 36-де қай сөйлем айтылады?",
    options: ["Біздің қазақтың өзінің мақалы да бар: «ұят кімде болса, иман сонда» деген.", "Егерде мал керек болса, қолөнер үйренбек керек.", "Жас бала анадан туғанда екі түрлі мінезбен туады: біреуі - ішсем, жесем, ұйқтасам деп тұрады.", "Құдайдан қорық, пендеден ұял, балаң бала болсын десең - оқыт, мал аяма!"],
    answerIndex: 0
}, {
    word: 37,
    prompt: "Қара сөз 37-де қай сөйлем айтылады?",
    options: ["Қай өгіз шаһар жасап, құрал жасап, неше түрлі сайман жасап, сыпайылық шеберліктің үдесінен шығарлық қисыны бар?", "Адамның адамшылығы істі бастағандығынан білінеді, қалайша бітіргендігінен емес.", "Пыш-пыш кеңестен қалып, бір ауылға барып, қулық, сұмдық жасап жүріп, тегін тамақ жеп, ыржыңдасуды қысыратуға шыдамайды.", "Бір ұят бар - надандықтың ұяты, жас бала сөз айтудан ұялған секілді, жақсы адамның алдына жазықсыз-ақ әншейін барып жолығысудан ұялған секілді."],
    answerIndex: 1
}, {
    word: 37,
    prompt: "Қара сөз 37-де қай сөйлем айтылады?",
    options: ["Көңілдегі көрікті ой ауыздан шыққанда өңі қашады.", "Хош, сүйтіп жүріп-ақ мал таптың, байыдың.", "Бұл қуаттың ішінде үш артық қуат бар, зинһар, соны жоғалтып алу жарамас, ол жоғалса, адам ұғылы хайуан болды, адамшылықтан шықты.", "Алла тағаланың көрмегі, естімегі, біз секілді көзбенен, құлақпенен емес, көргендей, естігендей білетұғын ғылымның бір сипаты."],
    answerIndex: 0
}, {
    word: 38,
    prompt: "Қара сөз 38-де қай сөйлем айтылады?",
    options: ["Ей, жүрегімнің қуаты, перзентлерім!", "Біздің қазақтың достығы, дұшпандығы, мақтаны, мықтылығы, мал іздеуі, өнер іздеуі, жұрт тануы ешбір халыққа ұқсамайды.", "Әрқайсысы қазаққа яки бірі бар, бірі жоқ болса, бағанағы екі бұлдамақ та болып, басына «осыным бірсыпыра елеу азық болар» деген талаппенен қылып жүр.", "Бір күні Сократ хакім бір Аристодим деген ғалым шәкіртіне құдай табарака уа тағалаға құлшылық қылмақ турасында айтқан сөзі."],
    answerIndex: 0
}, {
    word: 38,
    prompt: "Қара сөз 38-де қай сөйлем айтылады?",
    options: ["Бұл төрт нәрсе - күллі ақыл мен ғылымды тоздыратұғын нәрселер.", "Әншейін біреуді ыза қылмақтың несін дәулет біліп қуанады екен?", "Сіздерге адам ұғылының мінездері туралы біраз сөз жазып ядкар қалдырайын.", "Егерде есті кісілердің қатарында болғың келсе, күнінде бір мәртебе, болмаса жұмасында бір, ең болмаса айында бір, өзіңнен өзің есеп ал!"],
    answerIndex: 2
}, {
    word: 39,
    prompt: "Қара сөз 39-де қай сөйлем айтылады?",
    options: ["Рас, бұрынғы біздің ата-бабаларымыздың бұл замандағылардан білімі, күтімі, сыпайылығы, тазалығы төмен болған.", "Өзіңнің қылған иттігің аз болды ма?", "Біреу кеткенін айтса да, ұқпаймыз.", "Күзетшісіз, ескерусіз иман тұрмайды, ықыласыменен өзін-өзі аңдып, шын діни шыншылдап жаны ашып тұрмаса, салғырттың иманы бар деп болмайды."],
    answerIndex: 0
}, {
    word: 39,
    prompt: "Қара сөз 39-де қай сөйлем айтылады?",
    options: ["Қыстауы тарлық қылса, арызы жеткендік, сыйы өткендік, байлық қызметінен біреудің қыстауын сатып алмақ, ептеп алмақ, тартып алмақ.", "Құлақ болмаса, не қаңғыр, не дүңгір, дауыс, жақсы үн, күй, ән – ешбірінен ләззаттанып хабар ала алмас едік.", "Әрі-беріден соң сыртымызға шықты, жауластық, дауластық, партияластық.", "Бірақ бұл замандағылардан артық екі мінезі бар екен."],
    answerIndex: 3
}, {
    word: 40,
    prompt: "Қара сөз 40-де қай сөйлем айтылады?",
    options: ["Зинһар, сендерден бір сұрайын деп жүрген ісім бар.", "Ғылым - алланың бір сипаты, ол - хақиқат, оған ғашықтық өзі де хақлық һәм адамдық дүр.", "Сіздің батиныңыз таза болмағы әуелі иман болып, бұл заһир ғибадатыңыз иманды болған соң ғана, парыз болған, сіздің заһирыңыздағы ғибадат -батиныңыздағы иманның көлеңкесі, һәм сол иманның нұрланып тұрмағына көрік үшін бұйырылған.", "Мақсат күзетілген нәрсенің амандығы, тазалығы емес пе?"],
    answerIndex: 0
}, {
    word: 40,
    prompt: "Қара сөз 40-де қай сөйлем айтылады?",
    options: ["Оның үшін кітап сөзіменен ізденген талап болса, әуелі көкіректі тазалау керек дейді, онан соң ғибадат қыл дейді.", "Қулық саумақ, көз сүзіп, тіленіп, адам саумақ - өнерсіз иттің ісі.", "Сырын қалай болады деп көңілге салмадық, оны білмеген кісінің несі кетіпті дейміз.", "Осы, біздің қазақтың өлген кісісінде жаманы жоқ, тірі кісісінің жамандаудан аманы жоқ болатұғыны қалай?"],
    answerIndex: 3
}, {
    word: 41,
    prompt: "Қара сөз 41-де қай сөйлем айтылады?",
    options: ["Мен өзім тірі болсам да, анық тірі де емеспін.", "Есер кісі орнын таппай, не болса сол бір баянсыз, бағасыз нәрсеге қызығып, құмар болып, өмірінің қызықты, қымбатты шағын итқорлықпен өткізіп алады екен дағы, күнінде өкінгені пайда болмай-ды екен.", "Соны не үміт үзбестікке, не онысы болмаса, мұнысы бар ғой деп, көңілге қуат қылуға жаратсам керек еді, ондайым жоқ.", "Қазаққа ақыл берем, түзеймін деп қам жеген адамға екі нәрсе керек."],
    answerIndex: 3
}, {
    word: 41,
    prompt: "Қара сөз 41-де қай сөйлем айтылады?",
    options: ["Өздерің көріп жүрсіңдер, осы айтқан сөз бойына лайық қазақ көрдіңдер ме?", "Кім сені сүйсе, оны сүймектік қарыз емес пе?", "Ендігілердің достығы - пейіл емес, алдау, дұшпандығы - кейіс емес, не күндестік, не тыныш отыра алмағандық.", "Әуелі - бек зор өкімет, жарлық қолында бар кісі керек."],
    answerIndex: 3
}, {
    word: 42,
    prompt: "Қара сөз 42-де қай сөйлем айтылады?",
    options: ["Қыстауы тарлық қылса, арызы жеткендік, сыйы өткендік, байлық қызметінен біреудің қыстауын сатып алмақ, ептеп алмақ, тартып алмақ.", "Қазақтың жаманшылыққа үйір бола беретұғынының бір себебі - жұмысының жоқтығы.", "Осы үшеуің бір кісіде менің айтқанымдай табылсаңдар, табанының топырағы көзге сүртерлік қасиетті адам - сол.", "Онан соң көп заман өтсе, сол өнерді сақтайтұғын қуаттың өзі де жоғалады."],
    answerIndex: 1
}, {
    word: 42,
    prompt: "Қара сөз 42-де қай сөйлем айтылады?",
    options: ["Құдай тағала өзі сақтасын.", "Бұл күндегі тәхсилғулум ескі медреселер ғұрпында болып, бұл заманға пайдасы жоқ болды.", "Жанның жарығын бәрімізге де бірдей ұғарлық қылып беріп пе?", "Егер егін салса, я саудаға салынса, қолы тиер ме еді?"],
    answerIndex: 3
}, {
    word: 43,
    prompt: "Қара сөз 43-де қай сөйлем айтылады?",
    options: ["Ол адам басын құтқармақ үшін жамандарға жалынса, оның да адамдығының кеткені, егер жалынбаса, тергеулі, сотты адам болып, ешбір қызметке жарамай, басы қатерге түсіп өткені.", "Адам ұғылы екі нәрседен: бірі - тән, бірі - жан.", "Енді бұл иман дерлік инануға екі түрлі нәрсе керек.", "Өзге қара жұрт жақсы-жаман өздерінің шаруасымен жүре береді екен."],
    answerIndex: 1
}, {
    word: 43,
    prompt: "Қара сөз 43-де қай сөйлем айтылады?",
    options: ["Бейнет, күйігі, ызасы - сол үшеуінен басқа ешнәрсе бойында қалмайды.", "Ол екеуінің орталарында болған нәрселердің қайсысы жибили, қайсысы кәсиби - оны білмек керек.", "Бәлки, бұларсыз тағат тағат та емес.", "Әуелі балаңды өзің алдайсың: «Әне, оны берем, міне, мұны берем» деп."],
    answerIndex: 1
}, {
    word: 44,
    prompt: "Қара сөз 44-де қай сөйлем айтылады?",
    options: ["Тамам жұртқа бұзық болма, түзік бол деп жарлық шашып, жол салады екен.", "Адам баласының ең жаманы - талапсыз.", "Енді ондай нәрседен оңды ұғым болмайды.", "Ол малды суармақ, тойғызбақ; саудасын жиғызбақ, күзеттірмек, бақтырмақ, ұры-бөрі, қыс, суық-сұғанақ - солардан сақтанбақ, солардан сақтарлық кісі таппақ."],
    answerIndex: 1
}, {
    word: 44,
    prompt: "Қара сөз 44-де қай сөйлем айтылады?",
    options: ["Талап қылушылар да неше түрлі болады.", "Алланы бар дедік, бір дедік, ғылым, құдірет сипаты бірлән сипаттадық.", "Егерде ержетсін десең, өзі ержетіп, ата-анасын тұзақтан құтқарарлық бала қазақтан туа ма екен?", "Бұл ғылым, құдіретте ешбір ниһоятсіз, ғылымында ғафләт, құдіретінде епсіздік және нашарлық жоқ."],
    answerIndex: 0
}, {
    word: 45,
    prompt: "Қара сөз 45-де қай сөйлем айтылады?",
    options: ["Бұл күндегіге байлық та мақтан емес, ақыл, абұйыр да мақтан емес, арыз бере білу, алдай білу - мақтан.", "Құдай табарака уатағаланың барлығының үлкен дәлелі - неше мың жылдан бері әркім әртүрлі қылып сөйлесе де, бәрі де бір үлкен құдай бар деп келгендігі, уа һәм неше мың түрлі діннің бәрі де ғадаләт, махаббат құдайға лайықты дегендігі.", "жаратылып, оның ешбірінің бұзылмайтұғынын көресің.", "Кедей көп болса, ақысы кем болар еді, малдан айырылғандар көбейсе, қыстауы босар еді деп, мен ананы кедей болса екен деп, ол мені кедей болса екен деп, әуелде ішімізбен қас сағындық."],
    answerIndex: 1
}, {
    word: 45,
    prompt: "Қара сөз 45-де қай сөйлем айтылады?",
    options: ["Біз жаратушы емес, жаратқан көлеңкесіне қарай білетұғын пендеміз.", "Енді ондай нәрседен оңды ұғым болмайды.", "Әуелі «Жарлы болсаң, арлы болма» дейді.", "Яки бір ғана жерден ұқсағандығы бар ма?"],
    answerIndex: 0
}];
function iS() {
    const [s,o] = S.useState([])
      , [c,f] = S.useState(0)
      , [m,p] = S.useState(null)
      , [g,v] = S.useState(0)
      , [h,y] = S.useState(0)
      , [b,T] = S.useState(!1)
      , [R,_] = S.useState(!1);
    S.useEffect( () => {
        const J = [...Ch].sort( () => Math.random() - .5).slice(0, 10);
        o(J)
    }
    , []);
    const A = s[c];
    if (!A)
        return u.jsx("div", {
            className: "min-h-screen flex items-center justify-center text-foreground",
            children: "Загрузка вопросов..."
        });
    const D = 10 - c
      , Y = () => {
        if (m === null)
            return;
        m === A.answerIndex ? v(g + 1) : y(h + 1),
        _(!0)
    }
      , V = () => {
        const J = c + 1;
        p(null),
        _(!1),
        J >= 10 ? T(!0) : f(J)
    }
      , Q = () => {
        const J = [...Ch].sort( () => Math.random() - .5).slice(0, 10);
        o(J),
        f(0),
        p(null),
        v(0),
        y(0),
        T(!1),
        _(!1)
    }
      , K = g / 10 >= .9;
    return u.jsxs("div", {
        className: "min-h-screen bg-white font-sans selection:bg-primary/20",
        children: [u.jsx(gl, {}), u.jsxs("section", {
            className: "relative py-24 overflow-hidden section-reveal",
            children: [u.jsx("div", {
                className: "absolute inset-0 opacity-[0.06] pointer-events-none pattern-drift",
                style: {
                    backgroundImage: `url(${vl})`,
                    backgroundSize: "420px"
                }
            }), u.jsx("div", {
                className: "container mx-auto px-6 relative z-10",
                children: u.jsxs("div", {
                    className: "max-w-3xl mx-auto text-center space-y-4",
                    children: [u.jsx("h1", {
                        className: "text-4xl md:text-5xl font-serif text-foreground",
                        children: "Қара сөздер бойынша тест"
                    }), u.jsxs("p", {
                        className: "text-muted-foreground",
                        children: [10, " сұрақ таңдалып алынған қара сөздерден. Әр сұрақта бір дұрыс жауап бар."]
                    })]
                })
            })]
        }), u.jsx("section", {
            className: "pb-24",
            children: u.jsx("div", {
                className: "container mx-auto px-6",
                children: u.jsx("div", {
                    className: "max-w-3xl mx-auto",
                    children: u.jsx(Nn, {
                        className: "border-foreground/10 shadow-lg",
                        children: u.jsx(jn, {
                            className: "p-8 space-y-6",
                            children: b ? u.jsxs("div", {
                                className: "text-center space-y-4",
                                children: [u.jsx("h2", {
                                    className: "text-2xl font-serif text-foreground",
                                    children: "Нәтиже"
                                }), u.jsxs("p", {
                                    className: "text-muted-foreground",
                                    children: ["Дұрыс: ", g, " / ", 10, " ", u.jsx("br", {}), "Қате: ", h, " / ", 10]
                                }), K ? u.jsx("p", {
                                    className: "text-green-600 font-semibold",
                                    children: "Тест сәтті тапсырылды! ✅"
                                }) : u.jsx("p", {
                                    className: "text-red-600 font-semibold",
                                    children: "Тест тапсырылмады 😕"
                                }), u.jsx("button", {
                                    type: "button",
                                    onClick: Q,
                                    className: "inline-flex items-center justify-center rounded-full border border-primary/30 px-5 py-2 text-sm text-primary hover:text-secondary hover:border-secondary/60 transition",
                                    children: "Қайта бастау"
                                })]
                            }) : u.jsxs(u.Fragment, {
                                children: [u.jsxs("div", {
                                    className: "flex justify-between text-sm text-muted-foreground mb-2",
                                    children: [u.jsxs("span", {
                                        children: ["Дұрыс: ", g]
                                    }), u.jsxs("span", {
                                        children: ["Қате: ", h]
                                    }), u.jsxs("span", {
                                        children: ["Қалған: ", D]
                                    })]
                                }), u.jsx("h2", {
                                    className: "text-xl md:text-2xl font-serif text-foreground mb-4",
                                    children: A.prompt
                                }), u.jsx("div", {
                                    className: "grid gap-3",
                                    children: A.options.map( (J, I) => {
                                        const X = m === I
                                          , F = I === A.answerIndex
                                          , oe = R && F
                                          , xe = R && X && !F;
                                        return u.jsx("button", {
                                            type: "button",
                                            onClick: () => !R && p(I),
                                            className: `text-left rounded-lg border px-4 py-3 transition
                              ${oe ? "border-green-500 bg-green-100 text-green-800" : xe ? "border-red-500 bg-red-100 text-red-800" : X ? "border-secondary bg-secondary/10 text-foreground" : "border-foreground/10 hover:border-secondary/40"}
                            `,
                                            disabled: R,
                                            children: J
                                        }, `${A.word}-${I}`)
                                    }
                                    )
                                }), u.jsx("div", {
                                    className: "flex justify-end mt-4",
                                    children: R ? u.jsx("button", {
                                        type: "button",
                                        onClick: V,
                                        className: "inline-flex items-center justify-center rounded-full border border-primary/30 px-5 py-2 text-sm text-primary hover:text-secondary hover:border-secondary/60 transition",
                                        children: "Келесі"
                                    }) : u.jsx("button", {
                                        type: "button",
                                        onClick: Y,
                                        disabled: m === null,
                                        className: "inline-flex items-center justify-center rounded-full border border-primary/30 px-5 py-2 text-sm text-primary hover:text-secondary hover:border-secondary/60 transition disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: "Жауап беру"
                                    })
                                })]
                            })
                        })
                    })
                })
            })
        })]
    })
}
function rS() {
    return u.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: u.jsx(Nn, {
            className: "w-full max-w-md mx-4",
            children: u.jsxs(jn, {
                className: "pt-6",
                children: [u.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [u.jsx(r1, {
                        className: "h-8 w-8 text-red-500"
                    }), u.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), u.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}
function oS() {
    return u.jsxs("div", {
        className: "min-h-screen bg-background font-sans selection:bg-primary/20",
        children: [u.jsx(gl, {}), u.jsxs("section", {
            className: "relative py-24 overflow-hidden section-reveal",
            children: [u.jsx("div", {
                className: "absolute inset-0 opacity-[0.06] pointer-events-none pattern-drift",
                style: {
                    backgroundImage: `url(${vl})`,
                    backgroundSize: "420px"
                }
            }), u.jsx("div", {
                className: "container mx-auto px-6 relative z-10",
                children: u.jsxs("div", {
                    className: "max-w-3xl mx-auto text-center space-y-6",
                    children: [u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-21.5"
                    }), u.jsx("h1", {
                        className: "text-4xl md:text-6xl font-serif text-foreground",
                        children: "Абайтану"
                    }), u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), u.jsx("p", {
                        className: "text-secondary uppercase tracking-[0.2em] text-xs font-semibold",
                        children: "Абайтану — қазақ әдебиеттану ғылымының саласы"
                    }), u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    })]
                })
            })]
        }), u.jsx("section", {
            id: "iran-biography",
            className: "py-20 bg-background",
            children: u.jsx("div", {
                className: "container mx-auto px-6",
                children: u.jsx("div", {
                    className: "max-w-2xl mx-auto text-center space-y-4 mb-12",
                    children: u.jsx("p", {
                        children: "Абайтану Абай Құнанбайұлының өмірі мен шығармашылық өнері, философиясы, қоғамдық, эстететикалық көзқарастары, қазақ поэзиясындағы өлең жүйесін, ақындық тілді дамытудағы үлесі, музыкалық мұрасы жайлы сан-салалы зерттеу еңбектерін қамтиды. Абайдың өмірі мен шығармашылық мұрасын зерттеу шын мәнінде Әлихан Бөкейханов, Ахмет Байтұрсынұлы, Міржақып Дулатұлы мақалаларынан басталды деуге болады."
                    })
                })
            })
        }), u.jsx("section", {
            id: "iran-works",
            className: "py-20 bg-primary/5",
            children: u.jsxs("div", {
                className: "container mx-auto px-6",
                children: [u.jsxs("div", {
                    className: "max-w-2xl mx-auto text-center space-y-4 mb-12",
                    children: [u.jsx("h2", {
                        className: "text-3xl md:text-4xl font-serif text-foreground",
                        children: "Бастауы"
                    }), u.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Ахмет Байтұрсынұлы 1913 ж. «Қазақ» газетінде басылған «Абай — қазақтың бас ақыны» атты мақаласында «Одан асқан бұрынғы-соңғы заманда қазақ баласында біз білетін ақын болған жоқ» — деп Абайды аса жоғары бағалады."
                    })]
                }), u.jsxs("p", {
                    className: "text-muted-foreground",
                    children: ["Абай шығармаларын жинап, қағазға түсіріп, реттеп баспаға дайындау ісі ақын қайтыс болған соң ұзамай-ақ қолға алынғанын дәлелдейтін нақтылы деректер жетерлік. Жарық көруінен бірнеше жыл бұрын құрастырылып, 1909 ж. Санкт-Петербургте басылған Абай өлеңдерінің жинағында ақынның жүз қырықтай өлеңі (аударма өлеңдерін қосып санағанда) мен «Ескендір», «Масғұт» поэмалары басылғаны, яғни осы күнгі белгілі поэзиялық шығармаларының көрнектілері түгелге жуық қамтылды.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Бұл тұңғыш жинақты дайындаған, бастырып шығарған Кәкітай Ысқақұлы мен Абайдың баласы Тұрағұл болатын. Абайдың бастамасы, алғашқы деректік арнасы ретінде осы 1909 ж. жарық көрген Абай шығармаларының тұңғыш жинағын, оған кірген Кәкітай жазған ақынның тұңғыш өмірбаянын айтуға болады. Абайдың көзі тірісінде жарық көрген шығармалары бірлі-екілі ғана екенін және ақынның өз қолжазбалары сақталмай, шығармалары түгелдей дерлік Мүрсейіт Бікеұлының қолжазбалары арқылы жеткені ескерілсе, бұл тұңғыш жинақтың мәні зор екені анық. Басқа жекелеген қолжазбалардың көлемі шағын, оларда Мүрсейіт қолжазбасында жоқ өлеңдердің орны көп толыға қоймаған. Сондықтан олар қосымша деректер ретінде бағалануы орынды.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Ал кейінгі жинақтарды айтқанда, бір топ бұрын жарық көрмеген жаңа өлеңдері 1916 ж. Орынборда Самат Әбішұлы бастырған «Абай термесі» атты кітап та жарияланды. 1922 ж. Ташкентте, Қазанда басылған жинақтар бұрын жарияланған шығармаларды қамтиды. Ташкентте шыққан жинаққа сын пікір ретінде Ілияс Жансүгіров 1923 ж. «Тілші» газетінде «Абай кітабы» атты мақала жазып, бір алуан қате басылған сөздерді қалай дұрыстап оқу керек екендігін нанымды дәлелдеді.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Ақынның көзі тірісінде 1903 ж. Санкт-Петербургте Бөкейханов берген мағлұматтар бойынша басылған «Ресей. Біздің Отанымыздың географиялық баяны» атты көптомдық жинақтың 18-кітабында А. Сидельников жазған мақалада: «Абай — қазақ әдебиетіндегі жаңа бағыттың өкілі» деген баға берілгенін көреміз. Абай шығармалары жеке кітап болып басылғанға дейін-ақ халық арасына қолжазба түрінде және ауызша тараған. Байтұрсынов ақын өлеңдерімен 1903 ж. қолжазба арқылы танысқанын айтады. 1914 ж. Мәскеуде жарық көрген «Восточный сборник» атты кітапта Абайдың өмірі мен шығармалары туралы мағлұмат келтіріліп, бірнеше өлеңінің мазмұны орыс тілінде қара сөзбен берілген. 1914 ж. Санкт-Петербургте шыққан «По киргизской степи» деген кітабында Дмитрий Львович «Татьяна хаты» ел ішінде әнге салып айтылып жүргенін ескертеді.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Абай өлеңдері төңірегінде 20-жылдарда, одан кейінгі кездерде айтыс-тартыс көп болды. Осыған орай Байтұрсыновтың «Қазақтың бас ақыны» атты 1913 ж. жарияланған мақаласындағы Абайға берген бағасы, ұлы ақынның қазақ әдебиеті тарихындағы алатын орнын анықтауы, өнерпаздық өзгешелігін, асқан шеберлігін тануы шынайы ғұлама ғалымға тән айрықша көрегендіктің, білгірліктің, өлең сөздің қадірін терең бағалай алатын ақындық сезімталдықтың, талғампаздықтың үлгісі деуге лайық. Бөкейханов, Байтұрсынов, Дулатовқа ілесе Абай шығармашылығы жайында үлкенді-кішілі мақала жазып, ақын өлеңдерін жұртшылыққа танытуға Н. Рамазанов, Ғ. Сағди, Ы. Мұстамбайұлы және Н. Н. Белослюдов, т.б. ат салысты.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Абай шығармашылығына қайтадан жүйелі, дәйекті түрде дұрыс көзқарастың қалыптаса бастағанын 1933 ж. Мұхтар Омарханұлы Әуезов бастырған жинақтан (мұнда Әуезов жазған ақынның өмірбаяны берілген) және 1934 ж. жарық көрген Ілияс Жансүгіров, Ахмет Жұбанов секілді белгілі әдебиет, ғылым қайраткерлерінің мақалаларынан байқауға болады. Әуезов Абайтануды дербес ғылым саласы дәрежесіне көтерді. Ол «Абай жолы» эпопеясымен ұлы ақын, ағартушының алып тұлғасын дүние жүзі оқырмандарына танымал әдеби бейне қатарына жеткізсе, ғылымда да сондай күрделі еңбек атқарды. Оның Абай жөніндегі зерттеулері осы ғылымның мызғымас негізі болып табылады. 1933–57 ж. аралығында ақын шығармаларын жариялауда, олардың ғылыми басылымын жасауда орасан зор еңбек етті. Бұл басылымдар ақынның 1909 жылғы жинағы мен Мүрсейіт қолжазбалары негізінде жүзеге асырылды. Әсіресе, 1957 ж. «Ғылым» баспасынан жарық көрген, Әуезовтің басшылығымен және тікелей қатысуымен дайындалған Абай шығармаларының екі томдық толық жинағының Абайтану ғылымындағы елеулі табыс болғанын атау қажет. Әуезов ұзақ жылдар бойы ізденіп, сан алуан деректерді зерттеп, жүйеге түсіріп, Абайдың ғылыми өмірбаянын жазып шықты.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "20 ғасырдың 40–60-жылдарында Абай өмірі мен шығармашылығын зерттеу ісі кең көлемде жүргізіліп, жаңа белеске көтерілді. Абайдың қоғамдық, эстетикалық, философиялық көзқарасын, психологиялық және педагогикалық пікірлерін, ақындық тілін, композиторлық өнерін, аудармаларын тереңдеп тексерген еңбектер жарық көрді. Солардың ішінде С. Мұқанов, Қ. Жұмалиев, Б. Кенжебаев, М.С. Сильченко, Қ. Мұқамедханов, Ы. Дүйсенбаев, Т. Тәжібаев, Б.Г. Ерзакович, Х. Сүйіншәлиев сынды ғалымдардың еңбектері бар.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "1970 ж. Абайдың туғанына 125 жыл толуына орай шығармаларының жинағын шет тілдерде кітап етіп бастыру ісі жандана түсті. Орыс тілінде Абай шығармалары 1940 жылдан бастап он бес рет жеке кітап болып басылды. 1945–60 жылдардың басында Абай шығармалары жеке жинақ болып өзбек (Ташкент), татар (Қазан), түрікмен (Ашғабад), қырғыз (Бішкек), моңғол (Ұланбатыр), қытай (Пекин), чех (Прага) тілдерінде басылып шықты.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "1970 ж. украин (Киев), армян (Ереван), беларусь (Минск), молдаван (Кишинев) және латыш (Рига) тілінде жарық көрді. Сол жылы Мәскеуде «Прогресс» баспасында араб, ағылшын тілдерінде шығармаларының жинағы басылды.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Абайдың өмірі мен шығармалары туралы жазылған зерттеу еңбектерді, монографияларды, диссертацияларды түгелдей алғанда Абайтану сан алуан маңызды мәселелерді қамтитын, көп салалы ғылым болып қалыптасты. Басты мәселелер қатарында алдымен Абайдың өмір жолын зерттеу, оның шығармашылық жолының халықтық негіздерін, ұлттық сипатын айқындау, лирикалық шығармаларының, дастандары мен қара сөздерінің тақырыптық, идеялық, жанрлық, тілдік ерекшеліктерін, ақындық тұлғасын, суреткерлік әдісін, көркемдік шеберлігін тереңдеп ашып көрсетуге қатысты мәселелерді, сондай-ақ ұлы ойшыл ақынның дүниетанымын, қоғамдық, философиялық, эстетикалық көзқарастарын зерттеу мәселесі жатады. Бұларға қоса Абайдың шығыс, орыс, еуропа әдебиетімен шығармашылық байланысы, ақын шәкірттері, өнерпаздық дәстүрлерінің қазақ әдебиетінде жалғасуы секілді мәселелерге де үнемі назар аударылып келеді.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Кейінгі жылдарда Абай шығармаларын Шәкәрім Құдайбердіұлы, Мағжан Жұмабаев, Ахмет Байтұрсынұлы, Міржақып Дулатов секілді терең зерттеле бастаған әдебиетіміздің ірі өкілдерінің өнерпаздық жолымен жалғастыра қарастыруға мүмкіндік туды. Бұл ақынның 150 жылдық мерекесі қарсаңында жарық көрген еңбектерден анық байқалды. Осы мереке тұсында басылып шыққан ондаған іргелі зерттеулер Абайтанудың ғылыми-теориялық деңгейі бұрынғыдан да биіктей түскенін айқын танытты.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "1995 ж. жарық көрген «Абай» энциклопедиясында ұлы ақынның өмірі мен шығармашылық жолына қатысты қыруар деректер, құнды ой-пікірлер жинақталып, жүйелі түрге түсірілген. Абай шығармаларының ғылыми толық жинағы басылып шықты. Р.Сыздықова, Т.Әлімқұлов, А.Нұрқатов, М.Мырзахметов, Ж.Ысмағұлов, З.Ахметов, З.Қабдолов, Ғ.Есім, Т.Қожакеев, Ғ.Мұқанов және басқа да ғалымдардың зерттеулері Абайтану ғылымына елеулі үлес болып қосылды. Абай шығармаларын жариялау, зерттеу ісіне шет елдерде айрықша мән берілді. Қытайда профессоры Қабайдың «Абай және Абай шығармашылығы» атты еңбегі (Пекин, 1987), кейін Су Чжоусюннің зерттеу еңбегі мен Абайдың қара сөздерінің аудармасы жарияланды. Чех ғалымы П.Гржебичек Абайдың ақындық жолын арнайы зерттеді. 1995 ж. ұлы ақынның 150 жылдық мерейтойы барысында шет елдердің көптеген әдебиетшілері, қоғам қайраткерлері Абай шығармалары жайлы мақалалар, баяндамалар жасады. Парижде, Түркия қалаларында, Мәскеуде, Санкт-Петербургте, Киевте, Минскіде, Вильнюсте, Ташкентте, Бішкекте, Қазанда ұлы ақынға арналған салтанатты мәжілістер мен ғылыми конференциялар өткізілді. Абай шығармалары Түркияда, Пәкстанда, Иранда, Қытайда басылды, француз, ағылшын, неміс және басқа тілдерге аударылды.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-4.5"
                    })]
                }), u.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [{
                        title: "Поэзия",
                        text: "Сезім мен ойдың синтезі, философиялық тереңдік және ұлттық бояу."
                    }, {
                        title: "Драматургия",
                        text: "Қоғамдық мәселелерді көтерген көркем қойылымдар мен жаңашыл форма."
                    }, {
                        title: "Тақырып өрісі",
                        text: "Адам тағдыры, рухани ізденіс, тарихи жад және тәуелсіздік идеясы."
                    }].map(l => u.jsx(Nn, {
                        className: "transition-colors hover:border-secondary/50",
                        children: u.jsxs(jn, {
                            className: "p-8 space-y-4",
                            children: [u.jsx("h3", {
                                className: "text-xl font-serif text-primary",
                                children: l.title
                            }), u.jsx("p", {
                                className: "text-muted-foreground leading-relaxed",
                                children: l.text
                            })]
                        })
                    }, l.title))
                })]
            })
        }), u.jsx("section", {
            id: "iran-tolyk",
            className: "py-20 bg-background",
            children: u.jsxs("div", {
                className: "container mx-auto px-6",
                children: [u.jsxs("div", {
                    className: "max-w-2xl mx-auto text-center space-y-4 mb-12",
                    children: [u.jsx("h2", {
                        className: "text-3xl md:text-4xl font-serif text-foreground",
                        children: "Абайтану тарихы"
                    }), u.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Абайтану тарихы 1889 жылы басталып, қазақ әдебиетінде 50-жылдары өpic алды. Бұл мөселені тұңғыш рет сөз етіп, өз алдына арнайы түрде зерттеу қажеттілігі ең алдымен Мұхтар Әуезовтің, сонымен бірге Сәбит Мұқанов, Қажым Жұмалиев, Есмағамбет Самұратұлы Ысмайылов, Митрофан Семенович Сильченко, Әбіш Мұсылманқұлұлы Жиреншин еңбектерінде көрініс тапты."
                    })]
                }), u.jsxs("p", {
                    className: "text-muted-foreground",
                    children: ["Академик Қ. Жұмалиевтің жетекшілігімен осы тақырыпқа «Абай Құнанбаевтың әдеби мұрасының зерттелу жайы» деп аталатын кандидаттық диссертация қорғалып, ақын мұрасы туралы жазылған еңбектердің тұңғыш библиографиялық көрсеткіші «Абай Құнанбаев» деген атпен жарық көрді (1965).", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Осы еңбектер негізінде М. Мырзахметұлының «Абайтану тарихы» деген тақырыпта монографиялық ғылыми-зерттеу жұмысы жарияланды (1994). Ендігі жерде абайтанудың негізін салушы Әуезов дәуірін аяқтап, 1965-1995 жылыаралығындағы Абайтану тарихын жазу міндеті алға шықты. Абайтану саласындағы ақтаңдақтар қатпары жазылып, бұрын назардан тыс қалған мақалалар мен зерттеулер арнайы топтастырылған жинақ «Абайды оқы, таңырқа» деген атпен оқырман қолына тиді (1993). Абай тарихы жоғары оқу орындарында 1966 жылдан бастап арнайы курс ретінде бастады.[1]", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Абайтану тарихы — бүгінде үдере дамып, өсу, өркендеу жолында қызу түрдегі пікірталас үстінде қалыптасқан Абайтанудың іргелі саласының біріне айналды. Абайтану жөніндегі ой-пікірлер арнайы түрде зерттеу нысанасына алынбаса да зерттеушілер тарапынан Абай мұрасының бір саласын зерттеу үстінде жанама түрде айтылса, екіншілері оған арнайы тоқталып пікір айтса, үшіншілері Абайтану саласының жалпы қалыптасу жолына орай қарастырса, соңғылары Абай мұрасының жариялану тарихына орай пікір қозғады. Ал Абайтанудың негізін салушы Әуезов болса Абайтану жөніндегі ой-пікірін елуінші жылдар ішінде Абайтанудан оқыған дәрістерінде сөз ете бастаған еді.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-4.5"
                    })]
                }), u.jsx("div", {
                    className: "max-w-2xl mx-auto text-center space-y-4 mb-12",
                    children: u.jsx("h2", {
                        className: "text-3xl md:text-4xl font-serif text-foreground",
                        children: "Хронологиясы мен кезеңдері"
                    })
                }), u.jsxs("p", {
                    className: "text-muted-foreground",
                    children: ["Абайтану тарихында хронологиялық, тақырыптық жүйедегі дербес библиотекалық көрсеткіштерді құрастыру айрықша мәнге ие болуы себепті 1946 ж. Н.Сәбитовтің тақырыптық жүйеге негізделген «Абай», 1965 ж. хронологиялық жүйедегі Мырзахметов, тағы басқалардың «Абай Құнанбаев», 1998 ж. тақырыптық жүйеде жасалған «Абайтану», 1995 жылы «Абай Құнанбаев» деген атпен төрт рет дербес толық библиографиялық көрсеткіштер жарияланған.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Осыларға негізделе отырып, Абайтанудың тақырыптық, кезеңдік мезгілдері анықталды:", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), u.jsxs("p", {
                        className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                        children: ["1.  Абайды танудың алғашқы кезеңінде Абай мұрасының Қазан төңкерісіне дейінгі жариялану, танылу, таралу жолдарын қамтумен бірге алғаш рет ақын мұрасын танып насихаттаушылар мен ол мұраның орыс тілінде танылу мәселесі қарастырылған;", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "2.  Абай мұрасының жаңа заманда зерттелуі, яғни 1918–26 және 1926–40 ж. аралығында зерттеліп тану жолы негізінен таптық, партиялық принцип тұрғысынан қаралып, тұрпайы социол. дүниетанымның үстемдік етуі бұл кезеңде басым жатты;", u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                        }), "3.  Абайдың 100 жылдық мерекесіне орай 1940–45 ж. аралығында жазылған зерттеу еңбектері мен насихаттық тұрғыдан Әуезовтің «Абай» романы мен Абай оқу орындарында Абайтанудың арнайы курсы мен семинар сабақтарын өткізу және өзге де зерттеушілердің монографиялық еңбектері айғақтай түседі."]
                    }), u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Абайтанудың Әуезовтен кейінгі дәуірдегі даму жолы 1995 жылғы Абайдың 150 жылдық мерейтойы мен Әуезовтің 100 жылдық мерейтойы қарсаңында жарияланған ғылыми монографиялық зерттеулер мен әр түрлі тақырыптарға жазылған кітаптарда өз көрінісін толық берді. Жүз жылдан астам Абайтану тарихи ғылыми-зерттеу жұмыстарының нысанасына алынып, қорытындылану үстінде. Абайтану бүгінде арнайы курс пен семинар сабағы ретінде Халықаралық қазақ-түрік университетінде оқытылады", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    })]
                }), u.jsx("div", {
                    className: "max-w-2xl mx-auto text-center space-y-4 mb-12",
                    children: u.jsx("h2", {
                        className: "text-3xl md:text-4xl font-serif text-foreground",
                        children: "Абай орталықтары"
                    })
                }), u.jsxs("p", {
                    className: "text-muted-foreground",
                    children: ["Абай орталықтары Вьетнамның Ханой Ұлттық педагогикалық университетінде және Қытай Халық Республикасының Құлжа қаласындағы Іле педагогикалық университетінде жұмыс жасайды", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), u.jsx("p", {
                        className: "text-xl text-muted-foreground leading-relaxed max-w-lg font-serif italic border-l-2 border-secondary pl-6",
                        children: "- Самарқан мемлекеттік университетінде Абай атындағы ғылыми орталық ашылды"
                    }), u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-4.5"
                    })]
                }), u.jsx("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [{
                        title: "Ақыл, жүрек, қайрат",
                        text: "Үш қасиеттің тең үйлесуі — тұлғаның кемелдену шарты ретінде ұсынылады."
                    }, {
                        title: "Ізгілік пен жауапкершілік",
                        text: "Адамның қоғам алдындағы парызы мен рухани тазалығы басты құндылыққа айналады."
                    }].map(l => u.jsx(Nn, {
                        className: "transition-colors hover:border-secondary/50",
                        children: u.jsxs(jn, {
                            className: "p-8 space-y-4",
                            children: [u.jsx("h3", {
                                className: "text-xl font-serif text-primary",
                                children: l.title
                            }), u.jsx("p", {
                                className: "text-muted-foreground leading-relaxed",
                                children: l.text
                            })]
                        })
                    }, l.title))
                })]
            })
        }), u.jsx("footer", {
            className: "bg-foreground text-background py-16",
            children: u.jsxs("div", {
                className: "container mx-auto px-6 flex flex-col items-center text-center space-y-8",
                children: [u.jsx("div", {
                    className: "text-3xl font-serif font-bold tracking-tight text-background",
                    children: "Абай"
                }), u.jsx("div", {
                    className: "w-12 h-0.5 bg-secondary/50"
                }), u.jsx("p", {
                    className: "max-w-md text-background/60 font-light",
                    children: '"Руханият — адамды адам ететін мәңгілік шамшырақ."'
                }), u.jsx("div", {
                    className: "text-sm text-background/40 pt-8",
                    children: "© 2026 Абай Құнанбайұлына арналған жоба."
                })]
            })
        })]
    })
}
function f2() {
    return u.jsxs("div", {
        className: "min-h-screen bg-background font-sans selection:bg-primary/20",
        children: [u.jsx(yl, {}), u.jsxs("section", {
            className: "relative py-24 overflow-hidden section-reveal",
            children: [u.jsx("div", {
                className: "absolute inset-0 opacity-[0.06] pointer-events-none pattern-drift",
                style: {
                    backgroundImage: `url(${gl})`,
                    backgroundSize: "420px"
                }
            }), u.jsx("div", {
                className: "container mx-auto px-6 relative z-10",
                children: u.jsxs("div", {
                    className: "max-w-3xl mx-auto text-center space-y-6",
                    children: [u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-27.5"
                    }), u.jsx("h1", {
                        className: "text-4xl md:text-6xl font-serif text-foreground",
                        children: "Абай Құнанбайұлының «ТОЛЫҚ АДАМ» iлімі"
                    }), u.jsx("p", {
                        className: "text-secondary uppercase tracking-[0.2em] text-xs font-semibold",
                        children: ""
                    }), u.jsxs("p", {
                        className: "text-muted-foreground leading-relaxed text-lg",
                        children: [u.jsx("div", {
                            className: "pt-4 flex flex-wrap items-center gap-4 mb-13.5"
                        }), u.jsx("p", {
                            className: "text-xl text-muted-foreground leading-relaxed font-serif italic border-l-2 border-secondary",
                            children: "Абай Құнанбайұлының «толық адам» ілімі — адамгершілік, ақыл, жүрек, қайрат үйлесімі арқылы кемелденген тұлға болу туралы ойлары."
                        })]
                    })]
                })
            })]
        }), u.jsx("section", {
            id: "iran-biography",
            className: "py-20 bg-primary/5",
            children: u.jsxs("div", {
                className: "container mx-auto px-6",
                children: [u.jsx("div", {
                    className: "max-w-2xl mx-auto text-center space-y-4 mb-12",
                    children: u.jsx("h2", {
                        className: "text-3xl md:text-4xl font-serif text-foreground",
                        children: "Абайдың «Толық адам» идеясы"
                    })
                }), u.jsxs("p", {
                    className: "text-muted-foreground",
                    children: ["Абай Құнанбайұлының «Толық адам» идеясы – қазақ руханиятындағы терең философиялық тұжырымдардың бірі. Бұл ұғым адам болмысының кемелденуін, ішкі жан дүниесінің тазарып, ақыл-парасат пен адамгершілік қасиеттердің үйлесім табуын білдіреді. Абай адамның шынайы бақытқа жетуі үшін тек білімді немесе күшті болуы жеткіліксіз екенін айтады. Оның пікірінше, адам бойында ақыл, жүрек және қайрат тең дәрежеде дамуы керек. Осы үш қасиет біріккен кезде ғана адам өзін де, қоғамды да жақсылыққа бастай алады.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Абай «толық адамды» рухани бай, әділ, мейірімді, еңбекқор тұлға ретінде сипаттайды. Мұндай адам өз пайдасын ғана емес, елінің, қоғамының игілігін ойлайды. Ол өтірік, мақтаншақтық, еріншектік сияқты жаман әдеттерден аулақ болады. Ақын жастарды білім алуға, ғылымға ұмтылуға шақырып, адамды жетілдіретін басты құрал – үздіксіз ізденіс пен еңбек екенін көрсетеді. Сонымен қатар, жүректің тазалығы мен адамға деген сүйіспеншілік – толық адам болудың маңызды шарты.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Абай «толық адамды» рухани бай, әділ, мейірімді, еңбекқор тұлға ретінде сипаттайды. Мұндай адам өз пайдасын ғана емес, елінің, қоғамының игілігін ойлайды. Ол өтірік, мақтаншақтық, еріншектік сияқты жаман әдеттерден аулақ болады. Ақын жастарды білім алуға, ғылымға ұмтылуға шақырып, адамды жетілдіретін басты құрал – үздіксіз ізденіс пен еңбек екенін көрсетеді. Сонымен қатар, жүректің тазалығы мен адамға деген сүйіспеншілік – толық адам болудың маңызды шарты.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    }), "Абайдың ойынша, толық адам болу – бір күнде жететін мақсат емес, бұл ұзақ әрі үздіксіз даму жолы. Әр адам өз мінезін тәрбиелеп, қателіктерін түсініп, жақсылыққа ұмтылған сайын кемелдікке жақындай түседі. Бұл идея бүгінгі қоғам үшін де өзекті, себебі адамгершілік құндылықтарды сақтау мен рухани дамуға ұмтылу – кез келген заманда маңызды.", u.jsx("div", {
                        className: "pt-4 flex flex-wrap items-center gap-4 mb-1.5"
                    })]
                })]
            })
        }), u.jsx("footer", {
            className: "bg-foreground text-background py-16",
            children: u.jsxs("div", {
                className: "container mx-auto px-6 flex flex-col items-center text-center space-y-8",
                children: [u.jsx("div", {
                    className: "text-3xl font-serif font-bold tracking-tight text-background",
                    children: "Абай"
                }), u.jsx("div", {
                    className: "w-12 h-0.5 bg-secondary/50"
                }), u.jsx("p", {
                    className: "max-w-md text-background/60 font-light",
                    children: '"Руханият — адамды адам ететін мәңгілік шамшырақ."'
                }), u.jsx("div", {
                    className: "text-sm text-background/40 pt-8",
                    children: "© 2026 Абай Құнанбайұлына арналған жоба."
                })]
            })
        })]
    })
}
function uS() {
    return u.jsxs(xb, {
        children: [u.jsx(Sa, {
            path: "/",
            component: $4
        }), u.jsx(Sa, {
            path: "/book-of-words",
            component: tS
        }), u.jsx(Sa, {
            path: "/iran-gaiyp",
            component: sS
        }), u.jsx(Sa, {
            path: "/abai_tanu",
            component: oS
        }), u.jsx(Sa, {
            path: "/tolyq_adam",
            component: cS
        }), u.jsx(Sa, {
            path: "/tests",
            component: iS
        }), u.jsx(Sa, {
            component: rS
        })]
    })
}
function fS() {
    return u.jsx(Xb, {
        client: Jb,
        children: u.jsxs(V4, {
            children: [u.jsx(nw, {}), u.jsx(uS, {})]
        })
    })
}
Ky.createRoot(document.getElementById("root")).render(u.jsx(fS, {}));
