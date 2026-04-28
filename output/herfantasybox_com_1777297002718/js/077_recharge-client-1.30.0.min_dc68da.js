// recharge-client-1.30.0.min.js | MIT License | © Recharge Inc.
(function(U, be) {
  typeof exports == "object" && typeof module < "u" ? module.exports = be() : typeof define == "function" && define.amd ? define(be) : (U = typeof globalThis < "u" ? globalThis : U || self, U.recharge = be())
})(this, function() {
  "use strict";
  var U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

  function be(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
  }

  function Ys(r) {
    if (r.__esModule) return r;
    var e = r.default;
    if (typeof e == "function") {
      var t = function n() {
        return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
      };
      t.prototype = e.prototype
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.keys(r).forEach(function(n) {
      var i = Object.getOwnPropertyDescriptor(r, n);
      Object.defineProperty(t, n, i.get ? i : {
        enumerable: !0,
        get: function() {
          return r[n]
        }
      })
    }), t
  }
  var q = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof q < "u" && q,
    G = {
      searchParams: "URLSearchParams" in q,
      iterable: "Symbol" in q && "iterator" in Symbol,
      blob: "FileReader" in q && "Blob" in q && function() {
        try {
          return new Blob, !0
        } catch {
          return !1
        }
      }(),
      formData: "FormData" in q,
      arrayBuffer: "ArrayBuffer" in q
    };

  function Ks(r) {
    return r && DataView.prototype.isPrototypeOf(r)
  }
  if (G.arrayBuffer) var Zs = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
    Js = ArrayBuffer.isView || function(r) {
      return r && Zs.indexOf(Object.prototype.toString.call(r)) > -1
    };

  function hr(r) {
    if (typeof r != "string" && (r = String(r)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(r) || r === "") throw new TypeError('Invalid character in header field name: "' + r + '"');
    return r.toLowerCase()
  }

  function tn(r) {
    return typeof r != "string" && (r = String(r)), r
  }

  function nn(r) {
    var e = {
      next: function() {
        var t = r.shift();
        return {
          done: t === void 0,
          value: t
        }
      }
    };
    return G.iterable && (e[Symbol.iterator] = function() {
      return e
    }), e
  }

  function C(r) {
    this.map = {}, r instanceof C ? r.forEach(function(e, t) {
      this.append(t, e)
    }, this) : Array.isArray(r) ? r.forEach(function(e) {
      this.append(e[0], e[1])
    }, this) : r && Object.getOwnPropertyNames(r).forEach(function(e) {
      this.append(e, r[e])
    }, this)
  }
  C.prototype.append = function(r, e) {
    r = hr(r), e = tn(e);
    var t = this.map[r];
    this.map[r] = t ? t + ", " + e : e
  }, C.prototype.delete = function(r) {
    delete this.map[hr(r)]
  }, C.prototype.get = function(r) {
    return r = hr(r), this.has(r) ? this.map[r] : null
  }, C.prototype.has = function(r) {
    return this.map.hasOwnProperty(hr(r))
  }, C.prototype.set = function(r, e) {
    this.map[hr(r)] = tn(e)
  }, C.prototype.forEach = function(r, e) {
    for (var t in this.map) this.map.hasOwnProperty(t) && r.call(e, this.map[t], t, this)
  }, C.prototype.keys = function() {
    var r = [];
    return this.forEach(function(e, t) {
      r.push(t)
    }), nn(r)
  }, C.prototype.values = function() {
    var r = [];
    return this.forEach(function(e) {
      r.push(e)
    }), nn(r)
  }, C.prototype.entries = function() {
    var r = [];
    return this.forEach(function(e, t) {
      r.push([t, e])
    }), nn(r)
  }, G.iterable && (C.prototype[Symbol.iterator] = C.prototype.entries);

  function an(r) {
    if (r.bodyUsed) return Promise.reject(new TypeError("Already read"));
    r.bodyUsed = !0
  }

  function Ui(r) {
    return new Promise(function(e, t) {
      r.onload = function() {
        e(r.result)
      }, r.onerror = function() {
        t(r.error)
      }
    })
  }

  function Qs(r) {
    var e = new FileReader,
      t = Ui(e);
    return e.readAsArrayBuffer(r), t
  }

  function ef(r) {
    var e = new FileReader,
      t = Ui(e);
    return e.readAsText(r), t
  }

  function rf(r) {
    for (var e = new Uint8Array(r), t = new Array(e.length), n = 0; n < e.length; n++) t[n] = String.fromCharCode(e[n]);
    return t.join("")
  }

  function qi(r) {
    if (r.slice) return r.slice(0);
    var e = new Uint8Array(r.byteLength);
    return e.set(new Uint8Array(r)), e.buffer
  }

  function Li() {
    return this.bodyUsed = !1, this._initBody = function(r) {
      this.bodyUsed = this.bodyUsed, this._bodyInit = r, r ? typeof r == "string" ? this._bodyText = r : G.blob && Blob.prototype.isPrototypeOf(r) ? this._bodyBlob = r : G.formData && FormData.prototype.isPrototypeOf(r) ? this._bodyFormData = r : G.searchParams && URLSearchParams.prototype.isPrototypeOf(r) ? this._bodyText = r.toString() : G.arrayBuffer && G.blob && Ks(r) ? (this._bodyArrayBuffer = qi(r.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : G.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(r) || Js(r)) ? this._bodyArrayBuffer = qi(r) : this._bodyText = r = Object.prototype.toString.call(r) : this._bodyText = "", this.headers.get("content-type") || (typeof r == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : G.searchParams && URLSearchParams.prototype.isPrototypeOf(r) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
    }, G.blob && (this.blob = function() {
      var r = an(this);
      if (r) return r;
      if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      if (this._bodyFormData) throw new Error("could not read FormData body as blob");
      return Promise.resolve(new Blob([this._bodyText]))
    }, this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var r = an(this);
        return r || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
      } else return this.blob().then(Qs)
    }), this.text = function() {
      var r = an(this);
      if (r) return r;
      if (this._bodyBlob) return ef(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(rf(this._bodyArrayBuffer));
      if (this._bodyFormData) throw new Error("could not read FormData body as text");
      return Promise.resolve(this._bodyText)
    }, G.formData && (this.formData = function() {
      return this.text().then(af)
    }), this.json = function() {
      return this.text().then(JSON.parse)
    }, this
  }
  var tf = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

  function nf(r) {
    var e = r.toUpperCase();
    return tf.indexOf(e) > -1 ? e : r
  }

  function $e(r, e) {
    if (!(this instanceof $e)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    e = e || {};
    var t = e.body;
    if (r instanceof $e) {
      if (r.bodyUsed) throw new TypeError("Already read");
      this.url = r.url, this.credentials = r.credentials, e.headers || (this.headers = new C(r.headers)), this.method = r.method, this.mode = r.mode, this.signal = r.signal, !t && r._bodyInit != null && (t = r._bodyInit, r.bodyUsed = !0)
    } else this.url = String(r);
    if (this.credentials = e.credentials || this.credentials || "same-origin", (e.headers || !this.headers) && (this.headers = new C(e.headers)), this.method = nf(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && t) throw new TypeError("Body not allowed for GET or HEAD requests");
    if (this._initBody(t), (this.method === "GET" || this.method === "HEAD") && (e.cache === "no-store" || e.cache === "no-cache")) {
      var n = /([?&])_=[^&]*/;
      if (n.test(this.url)) this.url = this.url.replace(n, "$1_=" + new Date().getTime());
      else {
        var i = /\?/;
        this.url += (i.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
      }
    }
  }
  $e.prototype.clone = function() {
    return new $e(this, {
      body: this._bodyInit
    })
  };

  function af(r) {
    var e = new FormData;
    return r.trim().split("&").forEach(function(t) {
      if (t) {
        var n = t.split("="),
          i = n.shift().replace(/\+/g, " "),
          a = n.join("=").replace(/\+/g, " ");
        e.append(decodeURIComponent(i), decodeURIComponent(a))
      }
    }), e
  }

  function of(r) {
    var e = new C,
      t = r.replace(/\r?\n[\t ]+/g, " ");
    return t.split("\r").map(function(n) {
      return n.indexOf(`
`) === 0 ? n.substr(1, n.length) : n
    }).forEach(function(n) {
      var i = n.split(":"),
        a = i.shift().trim();
      if (a) {
        var o = i.join(":").trim();
        e.append(a, o)
      }
    }), e
  }
  Li.call($e.prototype);

  function Y(r, e) {
    if (!(this instanceof Y)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    e || (e = {}), this.type = "default", this.status = e.status === void 0 ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText === void 0 ? "" : "" + e.statusText, this.headers = new C(e.headers), this.url = e.url || "", this._initBody(r)
  }
  Li.call(Y.prototype), Y.prototype.clone = function() {
    return new Y(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new C(this.headers),
      url: this.url
    })
  }, Y.error = function() {
    var r = new Y(null, {
      status: 0,
      statusText: ""
    });
    return r.type = "error", r
  };
  var uf = [301, 302, 303, 307, 308];
  Y.redirect = function(r, e) {
    if (uf.indexOf(e) === -1) throw new RangeError("Invalid status code");
    return new Y(null, {
      status: e,
      headers: {
        location: r
      }
    })
  };
  var Ee = q.DOMException;
  try {
    new Ee
  } catch {
    Ee = function(e, t) {
      this.message = e, this.name = t;
      var n = Error(e);
      this.stack = n.stack
    }, Ee.prototype = Object.create(Error.prototype), Ee.prototype.constructor = Ee
  }

  function ki(r, e) {
    return new Promise(function(t, n) {
      var i = new $e(r, e);
      if (i.signal && i.signal.aborted) return n(new Ee("Aborted", "AbortError"));
      var a = new XMLHttpRequest;

      function o() {
        a.abort()
      }
      a.onload = function() {
        var f = {
          status: a.status,
          statusText: a.statusText,
          headers: of(a.getAllResponseHeaders() || "")
        };
        f.url = "responseURL" in a ? a.responseURL : f.headers.get("X-Request-URL");
        var c = "response" in a ? a.response : a.responseText;
        setTimeout(function() {
          t(new Y(c, f))
        }, 0)
      }, a.onerror = function() {
        setTimeout(function() {
          n(new TypeError("Network request failed"))
        }, 0)
      }, a.ontimeout = function() {
        setTimeout(function() {
          n(new TypeError("Network request failed"))
        }, 0)
      }, a.onabort = function() {
        setTimeout(function() {
          n(new Ee("Aborted", "AbortError"))
        }, 0)
      };

      function u(f) {
        try {
          return f === "" && q.location.href ? q.location.href : f
        } catch {
          return f
        }
      }
      a.open(i.method, u(i.url), !0), i.credentials === "include" ? a.withCredentials = !0 : i.credentials === "omit" && (a.withCredentials = !1), "responseType" in a && (G.blob ? a.responseType = "blob" : G.arrayBuffer && i.headers.get("Content-Type") && i.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (a.responseType = "arraybuffer")), e && typeof e.headers == "object" && !(e.headers instanceof C) ? Object.getOwnPropertyNames(e.headers).forEach(function(f) {
        a.setRequestHeader(f, tn(e.headers[f]))
      }) : i.headers.forEach(function(f, c) {
        a.setRequestHeader(c, f)
      }), i.signal && (i.signal.addEventListener("abort", o), a.onreadystatechange = function() {
        a.readyState === 4 && i.signal.removeEventListener("abort", o)
      }), a.send(typeof i._bodyInit > "u" ? null : i._bodyInit)
    })
  }
  ki.polyfill = !0, q.fetch || (q.fetch = ki, q.Headers = C, q.Request = $e, q.Response = Y), self.fetch.bind(self);
  let sf = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
    ji = (r = 21) => {
      let e = "",
        t = r;
      for (; t--;) e += sf[Math.random() * 64 | 0];
      return e
    };
  var ff = function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
      if (typeof Symbol.iterator == "symbol") return !0;
      var e = {},
        t = Symbol("test"),
        n = Object(t);
      if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
      var i = 42;
      e[t] = i;
      for (t in e) return !1;
      if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
      var a = Object.getOwnPropertySymbols(e);
      if (a.length !== 1 || a[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var o = Object.getOwnPropertyDescriptor(e, t);
        if (o.value !== i || o.enumerable !== !0) return !1
      }
      return !0
    },
    Vi = typeof Symbol < "u" && Symbol,
    cf = ff,
    lf = function() {
      return typeof Vi != "function" || typeof Symbol != "function" || typeof Vi("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : cf()
    },
    Gi = {
      foo: {}
    },
    hf = Object,
    df = function() {
      return {
        __proto__: Gi
      }.foo === Gi.foo && !({
          __proto__: null
        }
        instanceof hf)
    },
    pf = "Function.prototype.bind called on incompatible ",
    on = Array.prototype.slice,
    yf = Object.prototype.toString,
    gf = "[object Function]",
    vf = function(e) {
      var t = this;
      if (typeof t != "function" || yf.call(t) !== gf) throw new TypeError(pf + t);
      for (var n = on.call(arguments, 1), i, a = function() {
          if (this instanceof i) {
            var l = t.apply(this, n.concat(on.call(arguments)));
            return Object(l) === l ? l : this
          } else return t.apply(e, n.concat(on.call(arguments)))
        }, o = Math.max(0, t.length - n.length), u = [], f = 0; f < o; f++) u.push("$" + f);
      if (i = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(a), t.prototype) {
        var c = function() {};
        c.prototype = t.prototype, i.prototype = new c, c.prototype = null
      }
      return i
    },
    _f = vf,
    un = Function.prototype.bind || _f,
    mf = un,
    wf = mf.call(Function.call, Object.prototype.hasOwnProperty),
    P, Le = SyntaxError,
    Hi = Function,
    ke = TypeError,
    sn = function(r) {
      try {
        return Hi('"use strict"; return (' + r + ").constructor;")()
      } catch {}
    },
    Ae = Object.getOwnPropertyDescriptor;
  if (Ae) try {
    Ae({}, "")
  } catch {
    Ae = null
  }
  var fn = function() {
      throw new ke
    },
    bf = Ae ? function() {
      try {
        return arguments.callee, fn
      } catch {
        try {
          return Ae(arguments, "callee").get
        } catch {
          return fn
        }
      }
    }() : fn,
    je = lf(),
    $f = df(),
    N = Object.getPrototypeOf || ($f ? function(r) {
      return r.__proto__
    } : null),
    Ve = {},
    Ef = typeof Uint8Array > "u" || !N ? P : N(Uint8Array),
    Se = {
      "%AggregateError%": typeof AggregateError > "u" ? P : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? P : ArrayBuffer,
      "%ArrayIteratorPrototype%": je && N ? N([][Symbol.iterator]()) : P,
      "%AsyncFromSyncIteratorPrototype%": P,
      "%AsyncFunction%": Ve,
      "%AsyncGenerator%": Ve,
      "%AsyncGeneratorFunction%": Ve,
      "%AsyncIteratorPrototype%": Ve,
      "%Atomics%": typeof Atomics > "u" ? P : Atomics,
      "%BigInt%": typeof BigInt > "u" ? P : BigInt,
      "%BigInt64Array%": typeof BigInt64Array > "u" ? P : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array > "u" ? P : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? P : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? P : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? P : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? P : FinalizationRegistry,
      "%Function%": Hi,
      "%GeneratorFunction%": Ve,
      "%Int8Array%": typeof Int8Array > "u" ? P : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? P : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? P : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": je && N ? N(N([][Symbol.iterator]())) : P,
      "%JSON%": typeof JSON == "object" ? JSON : P,
      "%Map%": typeof Map > "u" ? P : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !je || !N ? P : N(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? P : Promise,
      "%Proxy%": typeof Proxy > "u" ? P : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? P : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? P : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !je || !N ? P : N(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? P : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": je && N ? N("" [Symbol.iterator]()) : P,
      "%Symbol%": je ? Symbol : P,
      "%SyntaxError%": Le,
      "%ThrowTypeError%": bf,
      "%TypedArray%": Ef,
      "%TypeError%": ke,
      "%Uint8Array%": typeof Uint8Array > "u" ? P : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? P : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? P : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? P : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? P : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? P : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? P : WeakSet
    };
  if (N) try {
    null.error
  } catch (r) {
    var Af = N(N(r));
    Se["%Error.prototype%"] = Af
  }
  var Sf = function r(e) {
      var t;
      if (e === "%AsyncFunction%") t = sn("async function () {}");
      else if (e === "%GeneratorFunction%") t = sn("function* () {}");
      else if (e === "%AsyncGeneratorFunction%") t = sn("async function* () {}");
      else if (e === "%AsyncGenerator%") {
        var n = r("%AsyncGeneratorFunction%");
        n && (t = n.prototype)
      } else if (e === "%AsyncIteratorPrototype%") {
        var i = r("%AsyncGenerator%");
        i && N && (t = N(i.prototype))
      }
      return Se[e] = t, t
    },
    Wi = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    dr = un,
    Xr = wf,
    Of = dr.call(Function.call, Array.prototype.concat),
    If = dr.call(Function.apply, Array.prototype.splice),
    Xi = dr.call(Function.call, String.prototype.replace),
    zr = dr.call(Function.call, String.prototype.slice),
    xf = dr.call(Function.call, RegExp.prototype.exec),
    Pf = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Tf = /\\(\\)?/g,
    Rf = function(e) {
      var t = zr(e, 0, 1),
        n = zr(e, -1);
      if (t === "%" && n !== "%") throw new Le("invalid intrinsic syntax, expected closing `%`");
      if (n === "%" && t !== "%") throw new Le("invalid intrinsic syntax, expected opening `%`");
      var i = [];
      return Xi(e, Pf, function(a, o, u, f) {
        i[i.length] = u ? Xi(f, Tf, "$1") : o || a
      }), i
    },
    Ff = function(e, t) {
      var n = e,
        i;
      if (Xr(Wi, n) && (i = Wi[n], n = "%" + i[0] + "%"), Xr(Se, n)) {
        var a = Se[n];
        if (a === Ve && (a = Sf(n)), typeof a > "u" && !t) throw new ke("intrinsic " + e + " exists, but is not available. Please file an issue!");
        return {
          alias: i,
          name: n,
          value: a
        }
      }
      throw new Le("intrinsic " + e + " does not exist!")
    },
    cn = function(e, t) {
      if (typeof e != "string" || e.length === 0) throw new ke("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof t != "boolean") throw new ke('"allowMissing" argument must be a boolean');
      if (xf(/^%?[^%]*%?$/, e) === null) throw new Le("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var n = Rf(e),
        i = n.length > 0 ? n[0] : "",
        a = Ff("%" + i + "%", t),
        o = a.name,
        u = a.value,
        f = !1,
        c = a.alias;
      c && (i = c[0], If(n, Of([0, 1], c)));
      for (var l = 1, s = !0; l < n.length; l += 1) {
        var h = n[l],
          y = zr(h, 0, 1),
          w = zr(h, -1);
        if ((y === '"' || y === "'" || y === "`" || w === '"' || w === "'" || w === "`") && y !== w) throw new Le("property names with quotes must have matching quotes");
        if ((h === "constructor" || !s) && (f = !0), i += "." + h, o = "%" + i + "%", Xr(Se, o)) u = Se[o];
        else if (u != null) {
          if (!(h in u)) {
            if (!t) throw new ke("base intrinsic for " + e + " exists, but the property is not available.");
            return
          }
          if (Ae && l + 1 >= n.length) {
            var S = Ae(u, h);
            s = !!S, s && "get" in S && !("originalValue" in S.get) ? u = S.get : u = u[h]
          } else s = Xr(u, h), u = u[h];
          s && !f && (Se[o] = u)
        }
      }
      return u
    },
    zi = {
      exports: {}
    };
  (function(r) {
    var e = un,
      t = cn,
      n = t("%Function.prototype.apply%"),
      i = t("%Function.prototype.call%"),
      a = t("%Reflect.apply%", !0) || e.call(i, n),
      o = t("%Object.getOwnPropertyDescriptor%", !0),
      u = t("%Object.defineProperty%", !0),
      f = t("%Math.max%");
    if (u) try {
      u({}, "a", {
        value: 1
      })
    } catch {
      u = null
    }
    r.exports = function(s) {
      var h = a(e, i, arguments);
      if (o && u) {
        var y = o(h, "length");
        y.configurable && u(h, "length", {
          value: 1 + f(0, s.length - (arguments.length - 1))
        })
      }
      return h
    };
    var c = function() {
      return a(e, n, arguments)
    };
    u ? u(r.exports, "apply", {
      value: c
    }) : r.exports.apply = c
  })(zi);
  var Mf = zi.exports,
    Yi = cn,
    Ki = Mf,
    Df = Ki(Yi("String.prototype.indexOf")),
    Cf = function(e, t) {
      var n = Yi(e, !!t);
      return typeof n == "function" && Df(e, ".prototype.") > -1 ? Ki(n) : n
    },
    Ge = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {},
    K = [],
    X = [],
    Nf = typeof Uint8Array < "u" ? Uint8Array : Array,
    ln = !1;

  function Zi() {
    ln = !0;
    for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, t = r.length; e < t; ++e) K[e] = r[e], X[r.charCodeAt(e)] = e;
    X["-".charCodeAt(0)] = 62, X["_".charCodeAt(0)] = 63
  }

  function Bf(r) {
    ln || Zi();
    var e, t, n, i, a, o, u = r.length;
    if (u % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    a = r[u - 2] === "=" ? 2 : r[u - 1] === "=" ? 1 : 0, o = new Nf(u * 3 / 4 - a), n = a > 0 ? u - 4 : u;
    var f = 0;
    for (e = 0, t = 0; e < n; e += 4, t += 3) i = X[r.charCodeAt(e)] << 18 | X[r.charCodeAt(e + 1)] << 12 | X[r.charCodeAt(e + 2)] << 6 | X[r.charCodeAt(e + 3)], o[f++] = i >> 16 & 255, o[f++] = i >> 8 & 255, o[f++] = i & 255;
    return a === 2 ? (i = X[r.charCodeAt(e)] << 2 | X[r.charCodeAt(e + 1)] >> 4, o[f++] = i & 255) : a === 1 && (i = X[r.charCodeAt(e)] << 10 | X[r.charCodeAt(e + 1)] << 4 | X[r.charCodeAt(e + 2)] >> 2, o[f++] = i >> 8 & 255, o[f++] = i & 255), o
  }

  function Uf(r) {
    return K[r >> 18 & 63] + K[r >> 12 & 63] + K[r >> 6 & 63] + K[r & 63]
  }

  function qf(r, e, t) {
    for (var n, i = [], a = e; a < t; a += 3) n = (r[a] << 16) + (r[a + 1] << 8) + r[a + 2], i.push(Uf(n));
    return i.join("")
  }

  function Ji(r) {
    ln || Zi();
    for (var e, t = r.length, n = t % 3, i = "", a = [], o = 16383, u = 0, f = t - n; u < f; u += o) a.push(qf(r, u, u + o > f ? f : u + o));
    return n === 1 ? (e = r[t - 1], i += K[e >> 2], i += K[e << 4 & 63], i += "==") : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], i += K[e >> 10], i += K[e >> 4 & 63], i += K[e << 2 & 63], i += "="), a.push(i), a.join("")
  }

  function Yr(r, e, t, n, i) {
    var a, o, u = i * 8 - n - 1,
      f = (1 << u) - 1,
      c = f >> 1,
      l = -7,
      s = t ? i - 1 : 0,
      h = t ? -1 : 1,
      y = r[e + s];
    for (s += h, a = y & (1 << -l) - 1, y >>= -l, l += u; l > 0; a = a * 256 + r[e + s], s += h, l -= 8);
    for (o = a & (1 << -l) - 1, a >>= -l, l += n; l > 0; o = o * 256 + r[e + s], s += h, l -= 8);
    if (a === 0) a = 1 - c;
    else {
      if (a === f) return o ? NaN : (y ? -1 : 1) * (1 / 0);
      o = o + Math.pow(2, n), a = a - c
    }
    return (y ? -1 : 1) * o * Math.pow(2, a - n)
  }

  function Qi(r, e, t, n, i, a) {
    var o, u, f, c = a * 8 - i - 1,
      l = (1 << c) - 1,
      s = l >> 1,
      h = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      y = n ? 0 : a - 1,
      w = n ? 1 : -1,
      S = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, o = l) : (o = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -o)) < 1 && (o--, f *= 2), o + s >= 1 ? e += h / f : e += h * Math.pow(2, 1 - s), e * f >= 2 && (o++, f /= 2), o + s >= l ? (u = 0, o = l) : o + s >= 1 ? (u = (e * f - 1) * Math.pow(2, i), o = o + s) : (u = e * Math.pow(2, s - 1) * Math.pow(2, i), o = 0)); i >= 8; r[t + y] = u & 255, y += w, u /= 256, i -= 8);
    for (o = o << i | u, c += i; c > 0; r[t + y] = o & 255, y += w, o /= 256, c -= 8);
    r[t + y - w] |= S * 128
  }
  var Lf = {}.toString,
    ea = Array.isArray || function(r) {
      return Lf.call(r) == "[object Array]"
    };
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  var kf = 50;
  p.TYPED_ARRAY_SUPPORT = Ge.TYPED_ARRAY_SUPPORT !== void 0 ? Ge.TYPED_ARRAY_SUPPORT : !0, Kr();

  function Kr() {
    return p.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
  }

  function ie(r, e) {
    if (Kr() < e) throw new RangeError("Invalid typed array length");
    return p.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(e), r.__proto__ = p.prototype) : (r === null && (r = new p(e)), r.length = e), r
  }

  function p(r, e, t) {
    if (!p.TYPED_ARRAY_SUPPORT && !(this instanceof p)) return new p(r, e, t);
    if (typeof r == "number") {
      if (typeof e == "string") throw new Error("If encoding is specified then the first argument must be a string");
      return hn(this, r)
    }
    return ra(this, r, e, t)
  }
  p.poolSize = 8192, p._augment = function(r) {
    return r.__proto__ = p.prototype, r
  };

  function ra(r, e, t, n) {
    if (typeof e == "number") throw new TypeError('"value" argument must not be a number');
    return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? Gf(r, e, t, n) : typeof e == "string" ? Vf(r, e, t) : Hf(r, e)
  }
  p.from = function(r, e, t) {
    return ra(null, r, e, t)
  }, p.TYPED_ARRAY_SUPPORT && (p.prototype.__proto__ = Uint8Array.prototype, p.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && p[Symbol.species]);

  function ta(r) {
    if (typeof r != "number") throw new TypeError('"size" argument must be a number');
    if (r < 0) throw new RangeError('"size" argument must not be negative')
  }

  function jf(r, e, t, n) {
    return ta(e), e <= 0 ? ie(r, e) : t !== void 0 ? typeof n == "string" ? ie(r, e).fill(t, n) : ie(r, e).fill(t) : ie(r, e)
  }
  p.alloc = function(r, e, t) {
    return jf(null, r, e, t)
  };

  function hn(r, e) {
    if (ta(e), r = ie(r, e < 0 ? 0 : pn(e) | 0), !p.TYPED_ARRAY_SUPPORT)
      for (var t = 0; t < e; ++t) r[t] = 0;
    return r
  }
  p.allocUnsafe = function(r) {
    return hn(null, r)
  }, p.allocUnsafeSlow = function(r) {
    return hn(null, r)
  };

  function Vf(r, e, t) {
    if ((typeof t != "string" || t === "") && (t = "utf8"), !p.isEncoding(t)) throw new TypeError('"encoding" must be a valid string encoding');
    var n = na(e, t) | 0;
    r = ie(r, n);
    var i = r.write(e, t);
    return i !== n && (r = r.slice(0, i)), r
  }

  function dn(r, e) {
    var t = e.length < 0 ? 0 : pn(e.length) | 0;
    r = ie(r, t);
    for (var n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r
  }

  function Gf(r, e, t, n) {
    if (e.byteLength, t < 0 || e.byteLength < t) throw new RangeError("'offset' is out of bounds");
    if (e.byteLength < t + (n || 0)) throw new RangeError("'length' is out of bounds");
    return t === void 0 && n === void 0 ? e = new Uint8Array(e) : n === void 0 ? e = new Uint8Array(e, t) : e = new Uint8Array(e, t, n), p.TYPED_ARRAY_SUPPORT ? (r = e, r.__proto__ = p.prototype) : r = dn(r, e), r
  }

  function Hf(r, e) {
    if (Z(e)) {
      var t = pn(e.length) | 0;
      return r = ie(r, t), r.length === 0 || e.copy(r, 0, 0, t), r
    }
    if (e) {
      if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e) return typeof e.length != "number" || cc(e.length) ? ie(r, 0) : dn(r, e);
      if (e.type === "Buffer" && ea(e.data)) return dn(r, e.data)
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
  }

  function pn(r) {
    if (r >= Kr()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Kr().toString(16) + " bytes");
    return r | 0
  }
  p.isBuffer = lc;

  function Z(r) {
    return !!(r != null && r._isBuffer)
  }
  p.compare = function(e, t) {
    if (!Z(e) || !Z(t)) throw new TypeError("Arguments must be Buffers");
    if (e === t) return 0;
    for (var n = e.length, i = t.length, a = 0, o = Math.min(n, i); a < o; ++a)
      if (e[a] !== t[a]) {
        n = e[a], i = t[a];
        break
      } return n < i ? -1 : i < n ? 1 : 0
  }, p.isEncoding = function(e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1
    }
  }, p.concat = function(e, t) {
    if (!ea(e)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return p.alloc(0);
    var n;
    if (t === void 0)
      for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
    var i = p.allocUnsafe(t),
      a = 0;
    for (n = 0; n < e.length; ++n) {
      var o = e[n];
      if (!Z(o)) throw new TypeError('"list" argument must be an Array of Buffers');
      o.copy(i, a), a += o.length
    }
    return i
  };

  function na(r, e) {
    if (Z(r)) return r.length;
    if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(r) || r instanceof ArrayBuffer)) return r.byteLength;
    typeof r != "string" && (r = "" + r);
    var t = r.length;
    if (t === 0) return 0;
    for (var n = !1;;) switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
      case void 0:
        return Qr(r).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return t * 2;
      case "hex":
        return t >>> 1;
      case "base64":
        return ha(r).length;
      default:
        if (n) return Qr(r).length;
        e = ("" + e).toLowerCase(), n = !0
    }
  }
  p.byteLength = na;

  function Wf(r, e, t) {
    var n = !1;
    if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e)) return "";
    for (r || (r = "utf8");;) switch (r) {
      case "hex":
        return tc(this, e, t);
      case "utf8":
      case "utf-8":
        return ua(this, e, t);
      case "ascii":
        return ec(this, e, t);
      case "latin1":
      case "binary":
        return rc(this, e, t);
      case "base64":
        return Jf(this, e, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return nc(this, e, t);
      default:
        if (n) throw new TypeError("Unknown encoding: " + r);
        r = (r + "").toLowerCase(), n = !0
    }
  }
  p.prototype._isBuffer = !0;

  function Oe(r, e, t) {
    var n = r[e];
    r[e] = r[t], r[t] = n
  }
  p.prototype.swap16 = function() {
    var e = this.length;
    if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var t = 0; t < e; t += 2) Oe(this, t, t + 1);
    return this
  }, p.prototype.swap32 = function() {
    var e = this.length;
    if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var t = 0; t < e; t += 4) Oe(this, t, t + 3), Oe(this, t + 1, t + 2);
    return this
  }, p.prototype.swap64 = function() {
    var e = this.length;
    if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var t = 0; t < e; t += 8) Oe(this, t, t + 7), Oe(this, t + 1, t + 6), Oe(this, t + 2, t + 5), Oe(this, t + 3, t + 4);
    return this
  }, p.prototype.toString = function() {
    var e = this.length | 0;
    return e === 0 ? "" : arguments.length === 0 ? ua(this, 0, e) : Wf.apply(this, arguments)
  }, p.prototype.equals = function(e) {
    if (!Z(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : p.compare(this, e) === 0
  }, p.prototype.inspect = function() {
    var e = "",
      t = kf;
    return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
  }, p.prototype.compare = function(e, t, n, i, a) {
    if (!Z(e)) throw new TypeError("Argument must be a Buffer");
    if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), i === void 0 && (i = 0), a === void 0 && (a = this.length), t < 0 || n > e.length || i < 0 || a > this.length) throw new RangeError("out of range index");
    if (i >= a && t >= n) return 0;
    if (i >= a) return -1;
    if (t >= n) return 1;
    if (t >>>= 0, n >>>= 0, i >>>= 0, a >>>= 0, this === e) return 0;
    for (var o = a - i, u = n - t, f = Math.min(o, u), c = this.slice(i, a), l = e.slice(t, n), s = 0; s < f; ++s)
      if (c[s] !== l[s]) {
        o = c[s], u = l[s];
        break
      } return o < u ? -1 : u < o ? 1 : 0
  };

  function ia(r, e, t, n, i) {
    if (r.length === 0) return -1;
    if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, isNaN(t) && (t = i ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
      if (i) return -1;
      t = r.length - 1
    } else if (t < 0)
      if (i) t = 0;
      else return -1;
    if (typeof e == "string" && (e = p.from(e, n)), Z(e)) return e.length === 0 ? -1 : aa(r, e, t, n, i);
    if (typeof e == "number") return e = e & 255, p.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : aa(r, [e], t, n, i);
    throw new TypeError("val must be string, number or Buffer")
  }

  function aa(r, e, t, n, i) {
    var a = 1,
      o = r.length,
      u = e.length;
    if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
      if (r.length < 2 || e.length < 2) return -1;
      a = 2, o /= 2, u /= 2, t /= 2
    }

    function f(y, w) {
      return a === 1 ? y[w] : y.readUInt16BE(w * a)
    }
    var c;
    if (i) {
      var l = -1;
      for (c = t; c < o; c++)
        if (f(r, c) === f(e, l === -1 ? 0 : c - l)) {
          if (l === -1 && (l = c), c - l + 1 === u) return l * a
        } else l !== -1 && (c -= c - l), l = -1
    } else
      for (t + u > o && (t = o - u), c = t; c >= 0; c--) {
        for (var s = !0, h = 0; h < u; h++)
          if (f(r, c + h) !== f(e, h)) {
            s = !1;
            break
          } if (s) return c
      }
    return -1
  }
  p.prototype.includes = function(e, t, n) {
    return this.indexOf(e, t, n) !== -1
  }, p.prototype.indexOf = function(e, t, n) {
    return ia(this, e, t, n, !0)
  }, p.prototype.lastIndexOf = function(e, t, n) {
    return ia(this, e, t, n, !1)
  };

  function Xf(r, e, t, n) {
    t = Number(t) || 0;
    var i = r.length - t;
    n ? (n = Number(n), n > i && (n = i)) : n = i;
    var a = e.length;
    if (a % 2 !== 0) throw new TypeError("Invalid hex string");
    n > a / 2 && (n = a / 2);
    for (var o = 0; o < n; ++o) {
      var u = parseInt(e.substr(o * 2, 2), 16);
      if (isNaN(u)) return o;
      r[t + o] = u
    }
    return o
  }

  function zf(r, e, t, n) {
    return et(Qr(e, r.length - t), r, t, n)
  }

  function oa(r, e, t, n) {
    return et(sc(e), r, t, n)
  }

  function Yf(r, e, t, n) {
    return oa(r, e, t, n)
  }

  function Kf(r, e, t, n) {
    return et(ha(e), r, t, n)
  }

  function Zf(r, e, t, n) {
    return et(fc(e, r.length - t), r, t, n)
  }
  p.prototype.write = function(e, t, n, i) {
    if (t === void 0) i = "utf8", n = this.length, t = 0;
    else if (n === void 0 && typeof t == "string") i = t, n = this.length, t = 0;
    else if (isFinite(t)) t = t | 0, isFinite(n) ? (n = n | 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var a = this.length - t;
    if ((n === void 0 || n > a) && (n = a), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    for (var o = !1;;) switch (i) {
      case "hex":
        return Xf(this, e, t, n);
      case "utf8":
      case "utf-8":
        return zf(this, e, t, n);
      case "ascii":
        return oa(this, e, t, n);
      case "latin1":
      case "binary":
        return Yf(this, e, t, n);
      case "base64":
        return Kf(this, e, t, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Zf(this, e, t, n);
      default:
        if (o) throw new TypeError("Unknown encoding: " + i);
        i = ("" + i).toLowerCase(), o = !0
    }
  }, p.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  };

  function Jf(r, e, t) {
    return e === 0 && t === r.length ? Ji(r) : Ji(r.slice(e, t))
  }

  function ua(r, e, t) {
    t = Math.min(r.length, t);
    for (var n = [], i = e; i < t;) {
      var a = r[i],
        o = null,
        u = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
      if (i + u <= t) {
        var f, c, l, s;
        switch (u) {
          case 1:
            a < 128 && (o = a);
            break;
          case 2:
            f = r[i + 1], (f & 192) === 128 && (s = (a & 31) << 6 | f & 63, s > 127 && (o = s));
            break;
          case 3:
            f = r[i + 1], c = r[i + 2], (f & 192) === 128 && (c & 192) === 128 && (s = (a & 15) << 12 | (f & 63) << 6 | c & 63, s > 2047 && (s < 55296 || s > 57343) && (o = s));
            break;
          case 4:
            f = r[i + 1], c = r[i + 2], l = r[i + 3], (f & 192) === 128 && (c & 192) === 128 && (l & 192) === 128 && (s = (a & 15) << 18 | (f & 63) << 12 | (c & 63) << 6 | l & 63, s > 65535 && s < 1114112 && (o = s))
        }
      }
      o === null ? (o = 65533, u = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), n.push(o), i += u
    }
    return Qf(n)
  }
  var sa = 4096;

  function Qf(r) {
    var e = r.length;
    if (e <= sa) return String.fromCharCode.apply(String, r);
    for (var t = "", n = 0; n < e;) t += String.fromCharCode.apply(String, r.slice(n, n += sa));
    return t
  }

  function ec(r, e, t) {
    var n = "";
    t = Math.min(r.length, t);
    for (var i = e; i < t; ++i) n += String.fromCharCode(r[i] & 127);
    return n
  }

  function rc(r, e, t) {
    var n = "";
    t = Math.min(r.length, t);
    for (var i = e; i < t; ++i) n += String.fromCharCode(r[i]);
    return n
  }

  function tc(r, e, t) {
    var n = r.length;
    (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
    for (var i = "", a = e; a < t; ++a) i += uc(r[a]);
    return i
  }

  function nc(r, e, t) {
    for (var n = r.slice(e, t), i = "", a = 0; a < n.length; a += 2) i += String.fromCharCode(n[a] + n[a + 1] * 256);
    return i
  }
  p.prototype.slice = function(e, t) {
    var n = this.length;
    e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
    var i;
    if (p.TYPED_ARRAY_SUPPORT) i = this.subarray(e, t), i.__proto__ = p.prototype;
    else {
      var a = t - e;
      i = new p(a, void 0);
      for (var o = 0; o < a; ++o) i[o] = this[o + e]
    }
    return i
  };

  function B(r, e, t) {
    if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
    if (r + e > t) throw new RangeError("Trying to access beyond buffer length")
  }
  p.prototype.readUIntLE = function(e, t, n) {
    e = e | 0, t = t | 0, n || B(e, t, this.length);
    for (var i = this[e], a = 1, o = 0; ++o < t && (a *= 256);) i += this[e + o] * a;
    return i
  }, p.prototype.readUIntBE = function(e, t, n) {
    e = e | 0, t = t | 0, n || B(e, t, this.length);
    for (var i = this[e + --t], a = 1; t > 0 && (a *= 256);) i += this[e + --t] * a;
    return i
  }, p.prototype.readUInt8 = function(e, t) {
    return t || B(e, 1, this.length), this[e]
  }, p.prototype.readUInt16LE = function(e, t) {
    return t || B(e, 2, this.length), this[e] | this[e + 1] << 8
  }, p.prototype.readUInt16BE = function(e, t) {
    return t || B(e, 2, this.length), this[e] << 8 | this[e + 1]
  }, p.prototype.readUInt32LE = function(e, t) {
    return t || B(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216
  }, p.prototype.readUInt32BE = function(e, t) {
    return t || B(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
  }, p.prototype.readIntLE = function(e, t, n) {
    e = e | 0, t = t | 0, n || B(e, t, this.length);
    for (var i = this[e], a = 1, o = 0; ++o < t && (a *= 256);) i += this[e + o] * a;
    return a *= 128, i >= a && (i -= Math.pow(2, 8 * t)), i
  }, p.prototype.readIntBE = function(e, t, n) {
    e = e | 0, t = t | 0, n || B(e, t, this.length);
    for (var i = t, a = 1, o = this[e + --i]; i > 0 && (a *= 256);) o += this[e + --i] * a;
    return a *= 128, o >= a && (o -= Math.pow(2, 8 * t)), o
  }, p.prototype.readInt8 = function(e, t) {
    return t || B(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
  }, p.prototype.readInt16LE = function(e, t) {
    t || B(e, 2, this.length);
    var n = this[e] | this[e + 1] << 8;
    return n & 32768 ? n | 4294901760 : n
  }, p.prototype.readInt16BE = function(e, t) {
    t || B(e, 2, this.length);
    var n = this[e + 1] | this[e] << 8;
    return n & 32768 ? n | 4294901760 : n
  }, p.prototype.readInt32LE = function(e, t) {
    return t || B(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
  }, p.prototype.readInt32BE = function(e, t) {
    return t || B(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
  }, p.prototype.readFloatLE = function(e, t) {
    return t || B(e, 4, this.length), Yr(this, e, !0, 23, 4)
  }, p.prototype.readFloatBE = function(e, t) {
    return t || B(e, 4, this.length), Yr(this, e, !1, 23, 4)
  }, p.prototype.readDoubleLE = function(e, t) {
    return t || B(e, 8, this.length), Yr(this, e, !0, 52, 8)
  }, p.prototype.readDoubleBE = function(e, t) {
    return t || B(e, 8, this.length), Yr(this, e, !1, 52, 8)
  };

  function H(r, e, t, n, i, a) {
    if (!Z(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > i || e < a) throw new RangeError('"value" argument is out of bounds');
    if (t + n > r.length) throw new RangeError("Index out of range")
  }
  p.prototype.writeUIntLE = function(e, t, n, i) {
    if (e = +e, t = t | 0, n = n | 0, !i) {
      var a = Math.pow(2, 8 * n) - 1;
      H(this, e, t, n, a, 0)
    }
    var o = 1,
      u = 0;
    for (this[t] = e & 255; ++u < n && (o *= 256);) this[t + u] = e / o & 255;
    return t + n
  }, p.prototype.writeUIntBE = function(e, t, n, i) {
    if (e = +e, t = t | 0, n = n | 0, !i) {
      var a = Math.pow(2, 8 * n) - 1;
      H(this, e, t, n, a, 0)
    }
    var o = n - 1,
      u = 1;
    for (this[t + o] = e & 255; --o >= 0 && (u *= 256);) this[t + o] = e / u & 255;
    return t + n
  }, p.prototype.writeUInt8 = function(e, t, n) {
    return e = +e, t = t | 0, n || H(this, e, t, 1, 255, 0), p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = e & 255, t + 1
  };

  function Zr(r, e, t, n) {
    e < 0 && (e = 65535 + e + 1);
    for (var i = 0, a = Math.min(r.length - t, 2); i < a; ++i) r[t + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> (n ? i : 1 - i) * 8
  }
  p.prototype.writeUInt16LE = function(e, t, n) {
    return e = +e, t = t | 0, n || H(this, e, t, 2, 65535, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : Zr(this, e, t, !0), t + 2
  }, p.prototype.writeUInt16BE = function(e, t, n) {
    return e = +e, t = t | 0, n || H(this, e, t, 2, 65535, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : Zr(this, e, t, !1), t + 2
  };

  function Jr(r, e, t, n) {
    e < 0 && (e = 4294967295 + e + 1);
    for (var i = 0, a = Math.min(r.length - t, 4); i < a; ++i) r[t + i] = e >>> (n ? i : 3 - i) * 8 & 255
  }
  p.prototype.writeUInt32LE = function(e, t, n) {
    return e = +e, t = t | 0, n || H(this, e, t, 4, 4294967295, 0), p.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255) : Jr(this, e, t, !0), t + 4
  }, p.prototype.writeUInt32BE = function(e, t, n) {
    return e = +e, t = t | 0, n || H(this, e, t, 4, 4294967295, 0), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : Jr(this, e, t, !1), t + 4
  }, p.prototype.writeIntLE = function(e, t, n, i) {
    if (e = +e, t = t | 0, !i) {
      var a = Math.pow(2, 8 * n - 1);
      H(this, e, t, n, a - 1, -a)
    }
    var o = 0,
      u = 1,
      f = 0;
    for (this[t] = e & 255; ++o < n && (u *= 256);) e < 0 && f === 0 && this[t + o - 1] !== 0 && (f = 1), this[t + o] = (e / u >> 0) - f & 255;
    return t + n
  }, p.prototype.writeIntBE = function(e, t, n, i) {
    if (e = +e, t = t | 0, !i) {
      var a = Math.pow(2, 8 * n - 1);
      H(this, e, t, n, a - 1, -a)
    }
    var o = n - 1,
      u = 1,
      f = 0;
    for (this[t + o] = e & 255; --o >= 0 && (u *= 256);) e < 0 && f === 0 && this[t + o + 1] !== 0 && (f = 1), this[t + o] = (e / u >> 0) - f & 255;
    return t + n
  }, p.prototype.writeInt8 = function(e, t, n) {
    return e = +e, t = t | 0, n || H(this, e, t, 1, 127, -128), p.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1
  }, p.prototype.writeInt16LE = function(e, t, n) {
    return e = +e, t = t | 0, n || H(this, e, t, 2, 32767, -32768), p.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : Zr(this, e, t, !0), t + 2
  }, p.prototype.writeInt16BE = function(e, t, n) {
    return e = +e, t = t | 0, n || H(this, e, t, 2, 32767, -32768), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : Zr(this, e, t, !1), t + 2
  }, p.prototype.writeInt32LE = function(e, t, n) {
    return e = +e, t = t | 0, n || H(this, e, t, 4, 2147483647, -2147483648), p.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : Jr(this, e, t, !0), t + 4
  }, p.prototype.writeInt32BE = function(e, t, n) {
    return e = +e, t = t | 0, n || H(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), p.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : Jr(this, e, t, !1), t + 4
  };

  function fa(r, e, t, n, i, a) {
    if (t + n > r.length) throw new RangeError("Index out of range");
    if (t < 0) throw new RangeError("Index out of range")
  }

  function ca(r, e, t, n, i) {
    return i || fa(r, e, t, 4), Qi(r, e, t, n, 23, 4), t + 4
  }
  p.prototype.writeFloatLE = function(e, t, n) {
    return ca(this, e, t, !0, n)
  }, p.prototype.writeFloatBE = function(e, t, n) {
    return ca(this, e, t, !1, n)
  };

  function la(r, e, t, n, i) {
    return i || fa(r, e, t, 8), Qi(r, e, t, n, 52, 8), t + 8
  }
  p.prototype.writeDoubleLE = function(e, t, n) {
    return la(this, e, t, !0, n)
  }, p.prototype.writeDoubleBE = function(e, t, n) {
    return la(this, e, t, !1, n)
  }, p.prototype.copy = function(e, t, n, i) {
    if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0) return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
    if (i < 0) throw new RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
    var a = i - n,
      o;
    if (this === e && n < t && t < i)
      for (o = a - 1; o >= 0; --o) e[o + t] = this[o + n];
    else if (a < 1e3 || !p.TYPED_ARRAY_SUPPORT)
      for (o = 0; o < a; ++o) e[o + t] = this[o + n];
    else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
    return a
  }, p.prototype.fill = function(e, t, n, i) {
    if (typeof e == "string") {
      if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), e.length === 1) {
        var a = e.charCodeAt(0);
        a < 256 && (e = a)
      }
      if (i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
      if (typeof i == "string" && !p.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
    } else typeof e == "number" && (e = e & 255);
    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
    if (n <= t) return this;
    t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
    var o;
    if (typeof e == "number")
      for (o = t; o < n; ++o) this[o] = e;
    else {
      var u = Z(e) ? e : Qr(new p(e, i).toString()),
        f = u.length;
      for (o = 0; o < n - t; ++o) this[o + t] = u[o % f]
    }
    return this
  };
  var ic = /[^+\/0-9A-Za-z-_]/g;

  function ac(r) {
    if (r = oc(r).replace(ic, ""), r.length < 2) return "";
    for (; r.length % 4 !== 0;) r = r + "=";
    return r
  }

  function oc(r) {
    return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "")
  }

  function uc(r) {
    return r < 16 ? "0" + r.toString(16) : r.toString(16)
  }

  function Qr(r, e) {
    e = e || 1 / 0;
    for (var t, n = r.length, i = null, a = [], o = 0; o < n; ++o) {
      if (t = r.charCodeAt(o), t > 55295 && t < 57344) {
        if (!i) {
          if (t > 56319) {
            (e -= 3) > -1 && a.push(239, 191, 189);
            continue
          } else if (o + 1 === n) {
            (e -= 3) > -1 && a.push(239, 191, 189);
            continue
          }
          i = t;
          continue
        }
        if (t < 56320) {
          (e -= 3) > -1 && a.push(239, 191, 189), i = t;
          continue
        }
        t = (i - 55296 << 10 | t - 56320) + 65536
      } else i && (e -= 3) > -1 && a.push(239, 191, 189);
      if (i = null, t < 128) {
        if ((e -= 1) < 0) break;
        a.push(t)
      } else if (t < 2048) {
        if ((e -= 2) < 0) break;
        a.push(t >> 6 | 192, t & 63 | 128)
      } else if (t < 65536) {
        if ((e -= 3) < 0) break;
        a.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128)
      } else if (t < 1114112) {
        if ((e -= 4) < 0) break;
        a.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128)
      } else throw new Error("Invalid code point")
    }
    return a
  }

  function sc(r) {
    for (var e = [], t = 0; t < r.length; ++t) e.push(r.charCodeAt(t) & 255);
    return e
  }

  function fc(r, e) {
    for (var t, n, i, a = [], o = 0; o < r.length && !((e -= 2) < 0); ++o) t = r.charCodeAt(o), n = t >> 8, i = t % 256, a.push(i), a.push(n);
    return a
  }

  function ha(r) {
    return Bf(ac(r))
  }

  function et(r, e, t, n) {
    for (var i = 0; i < n && !(i + t >= e.length || i >= r.length); ++i) e[i + t] = r[i];
    return i
  }

  function cc(r) {
    return r !== r
  }

  function lc(r) {
    return r != null && (!!r._isBuffer || da(r) || hc(r))
  }

  function da(r) {
    return !!r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r)
  }

  function hc(r) {
    return typeof r.readFloatLE == "function" && typeof r.slice == "function" && da(r.slice(0, 0))
  }

  function pa() {
    throw new Error("setTimeout has not been defined")
  }

  function ya() {
    throw new Error("clearTimeout has not been defined")
  }
  var le = pa,
    he = ya;
  typeof Ge.setTimeout == "function" && (le = setTimeout), typeof Ge.clearTimeout == "function" && (he = clearTimeout);

  function ga(r) {
    if (le === setTimeout) return setTimeout(r, 0);
    if ((le === pa || !le) && setTimeout) return le = setTimeout, setTimeout(r, 0);
    try {
      return le(r, 0)
    } catch {
      try {
        return le.call(null, r, 0)
      } catch {
        return le.call(this, r, 0)
      }
    }
  }

  function dc(r) {
    if (he === clearTimeout) return clearTimeout(r);
    if ((he === ya || !he) && clearTimeout) return he = clearTimeout, clearTimeout(r);
    try {
      return he(r)
    } catch {
      try {
        return he.call(null, r)
      } catch {
        return he.call(this, r)
      }
    }
  }
  var ae = [],
    He = !1,
    Ie, rt = -1;

  function pc() {
    !He || !Ie || (He = !1, Ie.length ? ae = Ie.concat(ae) : rt = -1, ae.length && va())
  }

  function va() {
    if (!He) {
      var r = ga(pc);
      He = !0;
      for (var e = ae.length; e;) {
        for (Ie = ae, ae = []; ++rt < e;) Ie && Ie[rt].run();
        rt = -1, e = ae.length
      }
      Ie = null, He = !1, dc(r)
    }
  }

  function yc(r) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
    ae.push(new _a(r, e)), ae.length === 1 && !He && ga(va)
  }

  function _a(r, e) {
    this.fun = r, this.array = e
  }
  _a.prototype.run = function() {
    this.fun.apply(null, this.array)
  };
  var gc = "browser",
    vc = "browser",
    _c = !0,
    mc = {},
    wc = [],
    bc = "",
    $c = {},
    Ec = {},
    Ac = {};

  function xe() {}
  var Sc = xe,
    Oc = xe,
    Ic = xe,
    xc = xe,
    Pc = xe,
    Tc = xe,
    Rc = xe;

  function Fc(r) {
    throw new Error("process.binding is not supported")
  }

  function Mc() {
    return "/"
  }

  function Dc(r) {
    throw new Error("process.chdir is not supported")
  }

  function Cc() {
    return 0
  }
  var We = Ge.performance || {},
    Nc = We.now || We.mozNow || We.msNow || We.oNow || We.webkitNow || function() {
      return new Date().getTime()
    };

  function Bc(r) {
    var e = Nc.call(We) * .001,
      t = Math.floor(e),
      n = Math.floor(e % 1 * 1e9);
    return r && (t = t - r[0], n = n - r[1], n < 0 && (t--, n += 1e9)), [t, n]
  }
  var Uc = new Date;

  function qc() {
    var r = new Date,
      e = r - Uc;
    return e / 1e3
  }
  var Xe = {
      nextTick: yc,
      title: gc,
      browser: _c,
      env: mc,
      argv: wc,
      version: bc,
      versions: $c,
      on: Sc,
      addListener: Oc,
      once: Ic,
      off: xc,
      removeListener: Pc,
      removeAllListeners: Tc,
      emit: Rc,
      binding: Fc,
      cwd: Mc,
      chdir: Dc,
      umask: Cc,
      hrtime: Bc,
      platform: vc,
      release: Ec,
      config: Ac,
      uptime: qc
    },
    yn;
  typeof Object.create == "function" ? yn = function(e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    })
  } : yn = function(e, t) {
    e.super_ = t;
    var n = function() {};
    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
  };
  var ma = yn,
    wa = Object.getOwnPropertyDescriptors || function(e) {
      for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) n[t[i]] = Object.getOwnPropertyDescriptor(e, t[i]);
      return n
    },
    Lc = /%[sdj%]/g;

  function tt(r) {
    if (!yr(r)) {
      for (var e = [], t = 0; t < arguments.length; t++) e.push(J(arguments[t]));
      return e.join(" ")
    }
    for (var t = 1, n = arguments, i = n.length, a = String(r).replace(Lc, function(u) {
        if (u === "%%") return "%";
        if (t >= i) return u;
        switch (u) {
          case "%s":
            return String(n[t++]);
          case "%d":
            return Number(n[t++]);
          case "%j":
            try {
              return JSON.stringify(n[t++])
            } catch {
              return "[Circular]"
            }
          default:
            return u
        }
      }), o = n[t]; t < i; o = n[++t]) pr(o) || !Pe(o) ? a += " " + o : a += " " + J(o);
    return a
  }

  function gn(r, e) {
    if (Q(Ge.process)) return function() {
      return gn(r, e).apply(this, arguments)
    };
    if (Xe.noDeprecation === !0) return r;
    var t = !1;

    function n() {
      if (!t) {
        if (Xe.throwDeprecation) throw new Error(e);
        Xe.traceDeprecation ? console.trace(e) : console.error(e), t = !0
      }
      return r.apply(this, arguments)
    }
    return n
  }
  var nt = {},
    vn;

  function ba(r) {
    if (Q(vn) && (vn = Xe.env.NODE_DEBUG || ""), r = r.toUpperCase(), !nt[r])
      if (new RegExp("\\b" + r + "\\b", "i").test(vn)) {
        var e = 0;
        nt[r] = function() {
          var t = tt.apply(null, arguments);
          console.error("%s %d: %s", r, e, t)
        }
      } else nt[r] = function() {};
    return nt[r]
  }

  function J(r, e) {
    var t = {
      seen: [],
      stylize: jc
    };
    return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), at(e) ? t.showHidden = e : e && An(t, e), Q(t.showHidden) && (t.showHidden = !1), Q(t.depth) && (t.depth = 2), Q(t.colors) && (t.colors = !1), Q(t.customInspect) && (t.customInspect = !0), t.colors && (t.stylize = kc), it(t, r, t.depth)
  }
  J.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }, J.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
  };

  function kc(r, e) {
    var t = J.styles[e];
    return t ? "\x1B[" + J.colors[t][0] + "m" + r + "\x1B[" + J.colors[t][1] + "m" : r
  }

  function jc(r, e) {
    return r
  }

  function Vc(r) {
    var e = {};
    return r.forEach(function(t, n) {
      e[t] = !0
    }), e
  }

  function it(r, e, t) {
    if (r.customInspect && e && _r(e.inspect) && e.inspect !== J && !(e.constructor && e.constructor.prototype === e)) {
      var n = e.inspect(t, r);
      return yr(n) || (n = it(r, n, t)), n
    }
    var i = Gc(r, e);
    if (i) return i;
    var a = Object.keys(e),
      o = Vc(a);
    if (r.showHidden && (a = Object.getOwnPropertyNames(e)), vr(e) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return _n(e);
    if (a.length === 0) {
      if (_r(e)) {
        var u = e.name ? ": " + e.name : "";
        return r.stylize("[Function" + u + "]", "special")
      }
      if (gr(e)) return r.stylize(RegExp.prototype.toString.call(e), "regexp");
      if (ot(e)) return r.stylize(Date.prototype.toString.call(e), "date");
      if (vr(e)) return _n(e)
    }
    var f = "",
      c = !1,
      l = ["{", "}"];
    if (wn(e) && (c = !0, l = ["[", "]"]), _r(e)) {
      var s = e.name ? ": " + e.name : "";
      f = " [Function" + s + "]"
    }
    if (gr(e) && (f = " " + RegExp.prototype.toString.call(e)), ot(e) && (f = " " + Date.prototype.toUTCString.call(e)), vr(e) && (f = " " + _n(e)), a.length === 0 && (!c || e.length == 0)) return l[0] + f + l[1];
    if (t < 0) return gr(e) ? r.stylize(RegExp.prototype.toString.call(e), "regexp") : r.stylize("[Object]", "special");
    r.seen.push(e);
    var h;
    return c ? h = Hc(r, e, t, o, a) : h = a.map(function(y) {
      return mn(r, e, t, o, y, c)
    }), r.seen.pop(), Wc(h, f, l)
  }

  function Gc(r, e) {
    if (Q(e)) return r.stylize("undefined", "undefined");
    if (yr(e)) {
      var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return r.stylize(t, "string")
    }
    if (bn(e)) return r.stylize("" + e, "number");
    if (at(e)) return r.stylize("" + e, "boolean");
    if (pr(e)) return r.stylize("null", "null")
  }

  function _n(r) {
    return "[" + Error.prototype.toString.call(r) + "]"
  }

  function Hc(r, e, t, n, i) {
    for (var a = [], o = 0, u = e.length; o < u; ++o) Ia(e, String(o)) ? a.push(mn(r, e, t, n, String(o), !0)) : a.push("");
    return i.forEach(function(f) {
      f.match(/^\d+$/) || a.push(mn(r, e, t, n, f, !0))
    }), a
  }

  function mn(r, e, t, n, i, a) {
    var o, u, f;
    if (f = Object.getOwnPropertyDescriptor(e, i) || {
        value: e[i]
      }, f.get ? f.set ? u = r.stylize("[Getter/Setter]", "special") : u = r.stylize("[Getter]", "special") : f.set && (u = r.stylize("[Setter]", "special")), Ia(n, i) || (o = "[" + i + "]"), u || (r.seen.indexOf(f.value) < 0 ? (pr(t) ? u = it(r, f.value, null) : u = it(r, f.value, t - 1), u.indexOf(`
`) > -1 && (a ? u = u.split(`
`).map(function(c) {
        return "  " + c
      }).join(`
`).substr(2) : u = `
` + u.split(`
`).map(function(c) {
        return "   " + c
      }).join(`
`))) : u = r.stylize("[Circular]", "special")), Q(o)) {
      if (a && i.match(/^\d+$/)) return u;
      o = JSON.stringify("" + i), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = r.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = r.stylize(o, "string"))
    }
    return o + ": " + u
  }

  function Wc(r, e, t) {
    var n = r.reduce(function(i, a) {
      return a.indexOf(`
`) >= 0, i + a.replace(/\u001b\[\d\d?m/g, "").length + 1
    }, 0);
    return n > 60 ? t[0] + (e === "" ? "" : e + `
 `) + " " + r.join(`,
  `) + " " + t[1] : t[0] + e + " " + r.join(", ") + " " + t[1]
  }

  function wn(r) {
    return Array.isArray(r)
  }

  function at(r) {
    return typeof r == "boolean"
  }

  function pr(r) {
    return r === null
  }

  function $a(r) {
    return r == null
  }

  function bn(r) {
    return typeof r == "number"
  }

  function yr(r) {
    return typeof r == "string"
  }

  function Ea(r) {
    return typeof r == "symbol"
  }

  function Q(r) {
    return r === void 0
  }

  function gr(r) {
    return Pe(r) && $n(r) === "[object RegExp]"
  }

  function Pe(r) {
    return typeof r == "object" && r !== null
  }

  function ot(r) {
    return Pe(r) && $n(r) === "[object Date]"
  }

  function vr(r) {
    return Pe(r) && ($n(r) === "[object Error]" || r instanceof Error)
  }

  function _r(r) {
    return typeof r == "function"
  }

  function Aa(r) {
    return r === null || typeof r == "boolean" || typeof r == "number" || typeof r == "string" || typeof r == "symbol" || typeof r > "u"
  }

  function Sa(r) {
    return p.isBuffer(r)
  }

  function $n(r) {
    return Object.prototype.toString.call(r)
  }

  function En(r) {
    return r < 10 ? "0" + r.toString(10) : r.toString(10)
  }
  var Xc = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function zc() {
    var r = new Date,
      e = [En(r.getHours()), En(r.getMinutes()), En(r.getSeconds())].join(":");
    return [r.getDate(), Xc[r.getMonth()], e].join(" ")
  }

  function Oa() {
    console.log("%s - %s", zc(), tt.apply(null, arguments))
  }

  function An(r, e) {
    if (!e || !Pe(e)) return r;
    for (var t = Object.keys(e), n = t.length; n--;) r[t[n]] = e[t[n]];
    return r
  }

  function Ia(r, e) {
    return Object.prototype.hasOwnProperty.call(r, e)
  }
  var Te = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;

  function Sn(r) {
    if (typeof r != "function") throw new TypeError('The "original" argument must be of type Function');
    if (Te && r[Te]) {
      var e = r[Te];
      if (typeof e != "function") throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      return Object.defineProperty(e, Te, {
        value: e,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), e
    }

    function e() {
      for (var t, n, i = new Promise(function(u, f) {
          t = u, n = f
        }), a = [], o = 0; o < arguments.length; o++) a.push(arguments[o]);
      a.push(function(u, f) {
        u ? n(u) : t(f)
      });
      try {
        r.apply(this, a)
      } catch (u) {
        n(u)
      }
      return i
    }
    return Object.setPrototypeOf(e, Object.getPrototypeOf(r)), Te && Object.defineProperty(e, Te, {
      value: e,
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), Object.defineProperties(e, wa(r))
  }
  Sn.custom = Te;

  function Yc(r, e) {
    if (!r) {
      var t = new Error("Promise was rejected with a falsy value");
      t.reason = r, r = t
    }
    return e(r)
  }

  function xa(r) {
    if (typeof r != "function") throw new TypeError('The "original" argument must be of type Function');

    function e() {
      for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
      var i = t.pop();
      if (typeof i != "function") throw new TypeError("The last argument must be of type Function");
      var a = this,
        o = function() {
          return i.apply(a, arguments)
        };
      r.apply(this, t).then(function(u) {
        Xe.nextTick(o.bind(null, null, u))
      }, function(u) {
        Xe.nextTick(Yc.bind(null, u, o))
      })
    }
    return Object.setPrototypeOf(e, Object.getPrototypeOf(r)), Object.defineProperties(e, wa(r)), e
  }
  var Kc = {
      inherits: ma,
      _extend: An,
      log: Oa,
      isBuffer: Sa,
      isPrimitive: Aa,
      isFunction: _r,
      isError: vr,
      isDate: ot,
      isObject: Pe,
      isRegExp: gr,
      isUndefined: Q,
      isSymbol: Ea,
      isString: yr,
      isNumber: bn,
      isNullOrUndefined: $a,
      isNull: pr,
      isBoolean: at,
      isArray: wn,
      inspect: J,
      deprecate: gn,
      format: tt,
      debuglog: ba,
      promisify: Sn,
      callbackify: xa
    },
    Zc = Object.freeze({
      __proto__: null,
      _extend: An,
      callbackify: xa,
      debuglog: ba,
      default: Kc,
      deprecate: gn,
      format: tt,
      inherits: ma,
      inspect: J,
      isArray: wn,
      isBoolean: at,
      isBuffer: Sa,
      isDate: ot,
      isError: vr,
      isFunction: _r,
      isNull: pr,
      isNullOrUndefined: $a,
      isNumber: bn,
      isObject: Pe,
      isPrimitive: Aa,
      isRegExp: gr,
      isString: yr,
      isSymbol: Ea,
      isUndefined: Q,
      log: Oa,
      promisify: Sn
    }),
    Jc = Ys(Zc),
    Qc = Jc.inspect,
    On = typeof Map == "function" && Map.prototype,
    In = Object.getOwnPropertyDescriptor && On ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    ut = On && In && typeof In.get == "function" ? In.get : null,
    Pa = On && Map.prototype.forEach,
    xn = typeof Set == "function" && Set.prototype,
    Pn = Object.getOwnPropertyDescriptor && xn ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    st = xn && Pn && typeof Pn.get == "function" ? Pn.get : null,
    Ta = xn && Set.prototype.forEach,
    el = typeof WeakMap == "function" && WeakMap.prototype,
    mr = el ? WeakMap.prototype.has : null,
    rl = typeof WeakSet == "function" && WeakSet.prototype,
    wr = rl ? WeakSet.prototype.has : null,
    tl = typeof WeakRef == "function" && WeakRef.prototype,
    Ra = tl ? WeakRef.prototype.deref : null,
    nl = Boolean.prototype.valueOf,
    il = Object.prototype.toString,
    al = Function.prototype.toString,
    ol = String.prototype.match,
    Tn = String.prototype.slice,
    de = String.prototype.replace,
    ul = String.prototype.toUpperCase,
    Fa = String.prototype.toLowerCase,
    Ma = RegExp.prototype.test,
    Da = Array.prototype.concat,
    ee = Array.prototype.join,
    sl = Array.prototype.slice,
    Ca = Math.floor,
    Rn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    Fn = Object.getOwnPropertySymbols,
    Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    ze = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    L = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ze || "symbol") ? Symbol.toStringTag : null,
    Na = Object.prototype.propertyIsEnumerable,
    Ba = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r) {
      return r.__proto__
    } : null);

  function Ua(r, e) {
    if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || Ma.call(/e/, e)) return e;
    var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof r == "number") {
      var n = r < 0 ? -Ca(-r) : Ca(r);
      if (n !== r) {
        var i = String(n),
          a = Tn.call(e, i.length + 1);
        return de.call(i, t, "$&_") + "." + de.call(de.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
      }
    }
    return de.call(e, t, "$&_")
  }
  var Dn = Qc,
    qa = Dn.custom,
    La = Va(qa) ? qa : null,
    fl = function r(e, t, n, i) {
      var a = t || {};
      if (pe(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (pe(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      var o = pe(a, "customInspect") ? a.customInspect : !0;
      if (typeof o != "boolean" && o !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      if (pe(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      if (pe(a, "numericSeparator") && typeof a.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      var u = a.numericSeparator;
      if (typeof e > "u") return "undefined";
      if (e === null) return "null";
      if (typeof e == "boolean") return e ? "true" : "false";
      if (typeof e == "string") return Ha(e, a);
      if (typeof e == "number") {
        if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
        var f = String(e);
        return u ? Ua(e, f) : f
      }
      if (typeof e == "bigint") {
        var c = String(e) + "n";
        return u ? Ua(e, c) : c
      }
      var l = typeof a.depth > "u" ? 5 : a.depth;
      if (typeof n > "u" && (n = 0), n >= l && l > 0 && typeof e == "object") return Cn(e) ? "[Array]" : "[Object]";
      var s = Il(a, n);
      if (typeof i > "u") i = [];
      else if (Ga(i, e) >= 0) return "[Circular]";

      function h(z, me, lr) {
        if (me && (i = sl.call(i), i.push(me)), lr) {
          var we = {
            depth: a.depth
          };
          return pe(a, "quoteStyle") && (we.quoteStyle = a.quoteStyle), r(z, we, n + 1, i)
        }
        return r(z, a, n + 1, i)
      }
      if (typeof e == "function" && !ja(e)) {
        var y = _l(e),
          w = ft(e, h);
        return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (w.length > 0 ? " { " + ee.call(w, ", ") + " }" : "")
      }
      if (Va(e)) {
        var S = ze ? de.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Mn.call(e);
        return typeof e == "object" && !ze ? br(S) : S
      }
      if (Al(e)) {
        for (var O = "<" + Fa.call(String(e.nodeName)), b = e.attributes || [], E = 0; E < b.length; E++) O += " " + b[E].name + "=" + ka(cl(b[E].value), "double", a);
        return O += ">", e.childNodes && e.childNodes.length && (O += "..."), O += "</" + Fa.call(String(e.nodeName)) + ">", O
      }
      if (Cn(e)) {
        if (e.length === 0) return "[]";
        var d = ft(e, h);
        return s && !Ol(d) ? "[" + Bn(d, s) + "]" : "[ " + ee.call(d, ", ") + " ]"
      }
      if (hl(e)) {
        var I = ft(e, h);
        return !("cause" in Error.prototype) && "cause" in e && !Na.call(e, "cause") ? "{ [" + String(e) + "] " + ee.call(Da.call("[cause]: " + h(e.cause), I), ", ") + " }" : I.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + ee.call(I, ", ") + " }"
      }
      if (typeof e == "object" && o) {
        if (La && typeof e[La] == "function" && Dn) return Dn(e, {
          depth: l - n
        });
        if (o !== "symbol" && typeof e.inspect == "function") return e.inspect()
      }
      if (ml(e)) {
        var T = [];
        return Pa && Pa.call(e, function(z, me) {
          T.push(h(me, e, !0) + " => " + h(z, e))
        }), Wa("Map", ut.call(e), T, s)
      }
      if ($l(e)) {
        var F = [];
        return Ta && Ta.call(e, function(z) {
          F.push(h(z, e))
        }), Wa("Set", st.call(e), F, s)
      }
      if (wl(e)) return Nn("WeakMap");
      if (El(e)) return Nn("WeakSet");
      if (bl(e)) return Nn("WeakRef");
      if (pl(e)) return br(h(Number(e)));
      if (gl(e)) return br(h(Rn.call(e)));
      if (yl(e)) return br(nl.call(e));
      if (dl(e)) return br(h(String(e)));
      if (!ll(e) && !ja(e)) {
        var m = ft(e, h),
          g = Ba ? Ba(e) === Object.prototype : e instanceof Object || e.constructor === Object,
          v = e instanceof Object ? "" : "null prototype",
          A = !g && L && Object(e) === e && L in e ? Tn.call(ye(e), 8, -1) : v ? "Object" : "",
          x = g || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
          M = x + (A || v ? "[" + ee.call(Da.call([], A || [], v || []), ": ") + "] " : "");
        return m.length === 0 ? M + "{}" : s ? M + "{" + Bn(m, s) + "}" : M + "{ " + ee.call(m, ", ") + " }"
      }
      return String(e)
    };

  function ka(r, e, t) {
    var n = (t.quoteStyle || e) === "double" ? '"' : "'";
    return n + r + n
  }

  function cl(r) {
    return de.call(String(r), /"/g, "&quot;")
  }

  function Cn(r) {
    return ye(r) === "[object Array]" && (!L || !(typeof r == "object" && L in r))
  }

  function ll(r) {
    return ye(r) === "[object Date]" && (!L || !(typeof r == "object" && L in r))
  }

  function ja(r) {
    return ye(r) === "[object RegExp]" && (!L || !(typeof r == "object" && L in r))
  }

  function hl(r) {
    return ye(r) === "[object Error]" && (!L || !(typeof r == "object" && L in r))
  }

  function dl(r) {
    return ye(r) === "[object String]" && (!L || !(typeof r == "object" && L in r))
  }

  function pl(r) {
    return ye(r) === "[object Number]" && (!L || !(typeof r == "object" && L in r))
  }

  function yl(r) {
    return ye(r) === "[object Boolean]" && (!L || !(typeof r == "object" && L in r))
  }

  function Va(r) {
    if (ze) return r && typeof r == "object" && r instanceof Symbol;
    if (typeof r == "symbol") return !0;
    if (!r || typeof r != "object" || !Mn) return !1;
    try {
      return Mn.call(r), !0
    } catch {}
    return !1
  }

  function gl(r) {
    if (!r || typeof r != "object" || !Rn) return !1;
    try {
      return Rn.call(r), !0
    } catch {}
    return !1
  }
  var vl = Object.prototype.hasOwnProperty || function(r) {
    return r in this
  };

  function pe(r, e) {
    return vl.call(r, e)
  }

  function ye(r) {
    return il.call(r)
  }

  function _l(r) {
    if (r.name) return r.name;
    var e = ol.call(al.call(r), /^function\s*([\w$]+)/);
    return e ? e[1] : null
  }

  function Ga(r, e) {
    if (r.indexOf) return r.indexOf(e);
    for (var t = 0, n = r.length; t < n; t++)
      if (r[t] === e) return t;
    return -1
  }

  function ml(r) {
    if (!ut || !r || typeof r != "object") return !1;
    try {
      ut.call(r);
      try {
        st.call(r)
      } catch {
        return !0
      }
      return r instanceof Map
    } catch {}
    return !1
  }

  function wl(r) {
    if (!mr || !r || typeof r != "object") return !1;
    try {
      mr.call(r, mr);
      try {
        wr.call(r, wr)
      } catch {
        return !0
      }
      return r instanceof WeakMap
    } catch {}
    return !1
  }

  function bl(r) {
    if (!Ra || !r || typeof r != "object") return !1;
    try {
      return Ra.call(r), !0
    } catch {}
    return !1
  }

  function $l(r) {
    if (!st || !r || typeof r != "object") return !1;
    try {
      st.call(r);
      try {
        ut.call(r)
      } catch {
        return !0
      }
      return r instanceof Set
    } catch {}
    return !1
  }

  function El(r) {
    if (!wr || !r || typeof r != "object") return !1;
    try {
      wr.call(r, wr);
      try {
        mr.call(r, mr)
      } catch {
        return !0
      }
      return r instanceof WeakSet
    } catch {}
    return !1
  }

  function Al(r) {
    return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function"
  }

  function Ha(r, e) {
    if (r.length > e.maxStringLength) {
      var t = r.length - e.maxStringLength,
        n = "... " + t + " more character" + (t > 1 ? "s" : "");
      return Ha(Tn.call(r, 0, e.maxStringLength), e) + n
    }
    var i = de.call(de.call(r, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Sl);
    return ka(i, "single", e)
  }

  function Sl(r) {
    var e = r.charCodeAt(0),
      t = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      } [e];
    return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + ul.call(e.toString(16))
  }

  function br(r) {
    return "Object(" + r + ")"
  }

  function Nn(r) {
    return r + " { ? }"
  }

  function Wa(r, e, t, n) {
    var i = n ? Bn(t, n) : ee.call(t, ", ");
    return r + " (" + e + ") {" + i + "}"
  }

  function Ol(r) {
    for (var e = 0; e < r.length; e++)
      if (Ga(r[e], `
`) >= 0) return !1;
    return !0
  }

  function Il(r, e) {
    var t;
    if (r.indent === "	") t = "	";
    else if (typeof r.indent == "number" && r.indent > 0) t = ee.call(Array(r.indent + 1), " ");
    else return null;
    return {
      base: t,
      prev: ee.call(Array(e + 1), t)
    }
  }

  function Bn(r, e) {
    if (r.length === 0) return "";
    var t = `
` + e.prev + e.base;
    return t + ee.call(r, "," + t) + `
` + e.prev
  }

  function ft(r, e) {
    var t = Cn(r),
      n = [];
    if (t) {
      n.length = r.length;
      for (var i = 0; i < r.length; i++) n[i] = pe(r, i) ? e(r[i], r) : ""
    }
    var a = typeof Fn == "function" ? Fn(r) : [],
      o;
    if (ze) {
      o = {};
      for (var u = 0; u < a.length; u++) o["$" + a[u]] = a[u]
    }
    for (var f in r) pe(r, f) && (t && String(Number(f)) === f && f < r.length || ze && o["$" + f] instanceof Symbol || (Ma.call(/[^\w$]/, f) ? n.push(e(f, r) + ": " + e(r[f], r)) : n.push(f + ": " + e(r[f], r))));
    if (typeof Fn == "function")
      for (var c = 0; c < a.length; c++) Na.call(r, a[c]) && n.push("[" + e(a[c]) + "]: " + e(r[a[c]], r));
    return n
  }
  var Un = cn,
    Ye = Cf,
    xl = fl,
    Pl = Un("%TypeError%"),
    ct = Un("%WeakMap%", !0),
    lt = Un("%Map%", !0),
    Tl = Ye("WeakMap.prototype.get", !0),
    Rl = Ye("WeakMap.prototype.set", !0),
    Fl = Ye("WeakMap.prototype.has", !0),
    Ml = Ye("Map.prototype.get", !0),
    Dl = Ye("Map.prototype.set", !0),
    Cl = Ye("Map.prototype.has", !0),
    qn = function(r, e) {
      for (var t = r, n;
        (n = t.next) !== null; t = n)
        if (n.key === e) return t.next = n.next, n.next = r.next, r.next = n, n
    },
    Nl = function(r, e) {
      var t = qn(r, e);
      return t && t.value
    },
    Bl = function(r, e, t) {
      var n = qn(r, e);
      n ? n.value = t : r.next = {
        key: e,
        next: r.next,
        value: t
      }
    },
    Ul = function(r, e) {
      return !!qn(r, e)
    },
    ql = function() {
      var e, t, n, i = {
        assert: function(a) {
          if (!i.has(a)) throw new Pl("Side channel does not contain " + xl(a))
        },
        get: function(a) {
          if (ct && a && (typeof a == "object" || typeof a == "function")) {
            if (e) return Tl(e, a)
          } else if (lt) {
            if (t) return Ml(t, a)
          } else if (n) return Nl(n, a)
        },
        has: function(a) {
          if (ct && a && (typeof a == "object" || typeof a == "function")) {
            if (e) return Fl(e, a)
          } else if (lt) {
            if (t) return Cl(t, a)
          } else if (n) return Ul(n, a);
          return !1
        },
        set: function(a, o) {
          ct && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new ct), Rl(e, a, o)) : lt ? (t || (t = new lt), Dl(t, a, o)) : (n || (n = {
            key: {},
            next: null
          }), Bl(n, a, o))
        }
      };
      return i
    },
    Ll = String.prototype.replace,
    kl = /%20/g,
    Ln = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    },
    Xa = {
      default: Ln.RFC3986,
      formatters: {
        RFC1738: function(r) {
          return Ll.call(r, kl, "+")
        },
        RFC3986: function(r) {
          return String(r)
        }
      },
      RFC1738: Ln.RFC1738,
      RFC3986: Ln.RFC3986
    },
    jl = Xa,
    kn = Object.prototype.hasOwnProperty,
    Re = Array.isArray,
    re = function() {
      for (var r = [], e = 0; e < 256; ++e) r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
      return r
    }(),
    Vl = function(e) {
      for (; e.length > 1;) {
        var t = e.pop(),
          n = t.obj[t.prop];
        if (Re(n)) {
          for (var i = [], a = 0; a < n.length; ++a) typeof n[a] < "u" && i.push(n[a]);
          t.obj[t.prop] = i
        }
      }
    },
    za = function(e, t) {
      for (var n = t && t.plainObjects ? Object.create(null) : {}, i = 0; i < e.length; ++i) typeof e[i] < "u" && (n[i] = e[i]);
      return n
    },
    Gl = function r(e, t, n) {
      if (!t) return e;
      if (typeof t != "object") {
        if (Re(e)) e.push(t);
        else if (e && typeof e == "object")(n && (n.plainObjects || n.allowPrototypes) || !kn.call(Object.prototype, t)) && (e[t] = !0);
        else return [e, t];
        return e
      }
      if (!e || typeof e != "object") return [e].concat(t);
      var i = e;
      return Re(e) && !Re(t) && (i = za(e, n)), Re(e) && Re(t) ? (t.forEach(function(a, o) {
        if (kn.call(e, o)) {
          var u = e[o];
          u && typeof u == "object" && a && typeof a == "object" ? e[o] = r(u, a, n) : e.push(a)
        } else e[o] = a
      }), e) : Object.keys(t).reduce(function(a, o) {
        var u = t[o];
        return kn.call(a, o) ? a[o] = r(a[o], u, n) : a[o] = u, a
      }, i)
    },
    Hl = function(e, t) {
      return Object.keys(t).reduce(function(n, i) {
        return n[i] = t[i], n
      }, e)
    },
    Wl = function(r, e, t) {
      var n = r.replace(/\+/g, " ");
      if (t === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
      try {
        return decodeURIComponent(n)
      } catch {
        return n
      }
    },
    Xl = function(e, t, n, i, a) {
      if (e.length === 0) return e;
      var o = e;
      if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1") return escape(o).replace(/%u[0-9a-f]{4}/gi, function(l) {
        return "%26%23" + parseInt(l.slice(2), 16) + "%3B"
      });
      for (var u = "", f = 0; f < o.length; ++f) {
        var c = o.charCodeAt(f);
        if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || a === jl.RFC1738 && (c === 40 || c === 41)) {
          u += o.charAt(f);
          continue
        }
        if (c < 128) {
          u = u + re[c];
          continue
        }
        if (c < 2048) {
          u = u + (re[192 | c >> 6] + re[128 | c & 63]);
          continue
        }
        if (c < 55296 || c >= 57344) {
          u = u + (re[224 | c >> 12] + re[128 | c >> 6 & 63] + re[128 | c & 63]);
          continue
        }
        f += 1, c = 65536 + ((c & 1023) << 10 | o.charCodeAt(f) & 1023), u += re[240 | c >> 18] + re[128 | c >> 12 & 63] + re[128 | c >> 6 & 63] + re[128 | c & 63]
      }
      return u
    },
    zl = function(e) {
      for (var t = [{
          obj: {
            o: e
          },
          prop: "o"
        }], n = [], i = 0; i < t.length; ++i)
        for (var a = t[i], o = a.obj[a.prop], u = Object.keys(o), f = 0; f < u.length; ++f) {
          var c = u[f],
            l = o[c];
          typeof l == "object" && l !== null && n.indexOf(l) === -1 && (t.push({
            obj: o,
            prop: c
          }), n.push(l))
        }
      return Vl(t), e
    },
    Yl = function(e) {
      return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Kl = function(e) {
      return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Zl = function(e, t) {
      return [].concat(e, t)
    },
    Jl = function(e, t) {
      if (Re(e)) {
        for (var n = [], i = 0; i < e.length; i += 1) n.push(t(e[i]));
        return n
      }
      return t(e)
    },
    Ql = {
      arrayToObject: za,
      assign: Hl,
      combine: Zl,
      compact: zl,
      decode: Wl,
      encode: Xl,
      isBuffer: Kl,
      isRegExp: Yl,
      maybeMap: Jl,
      merge: Gl
    },
    Ya = ql,
    ht = Ql,
    $r = Xa,
    eh = Object.prototype.hasOwnProperty,
    Ka = {
      brackets: function(e) {
        return e + "[]"
      },
      comma: "comma",
      indices: function(e, t) {
        return e + "[" + t + "]"
      },
      repeat: function(e) {
        return e
      }
    },
    oe = Array.isArray,
    rh = Array.prototype.push,
    Za = function(r, e) {
      rh.apply(r, oe(e) ? e : [e])
    },
    th = Date.prototype.toISOString,
    Ja = $r.default,
    k = {
      addQueryPrefix: !1,
      allowDots: !1,
      charset: "utf-8",
      charsetSentinel: !1,
      delimiter: "&",
      encode: !0,
      encoder: ht.encode,
      encodeValuesOnly: !1,
      format: Ja,
      formatter: $r.formatters[Ja],
      indices: !1,
      serializeDate: function(e) {
        return th.call(e)
      },
      skipNulls: !1,
      strictNullHandling: !1
    },
    nh = function(e) {
      return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    jn = {},
    ih = function r(e, t, n, i, a, o, u, f, c, l, s, h, y, w, S, O) {
      for (var b = e, E = O, d = 0, I = !1;
        (E = E.get(jn)) !== void 0 && !I;) {
        var T = E.get(e);
        if (d += 1, typeof T < "u") {
          if (T === d) throw new RangeError("Cyclic object value");
          I = !0
        }
        typeof E.get(jn) > "u" && (d = 0)
      }
      if (typeof f == "function" ? b = f(t, b) : b instanceof Date ? b = s(b) : n === "comma" && oe(b) && (b = ht.maybeMap(b, function(we) {
          return we instanceof Date ? s(we) : we
        })), b === null) {
        if (a) return u && !w ? u(t, k.encoder, S, "key", h) : t;
        b = ""
      }
      if (nh(b) || ht.isBuffer(b)) {
        if (u) {
          var F = w ? t : u(t, k.encoder, S, "key", h);
          return [y(F) + "=" + y(u(b, k.encoder, S, "value", h))]
        }
        return [y(t) + "=" + y(String(b))]
      }
      var m = [];
      if (typeof b > "u") return m;
      var g;
      if (n === "comma" && oe(b)) w && u && (b = ht.maybeMap(b, u)), g = [{
        value: b.length > 0 ? b.join(",") || null : void 0
      }];
      else if (oe(f)) g = f;
      else {
        var v = Object.keys(b);
        g = c ? v.sort(c) : v
      }
      for (var A = i && oe(b) && b.length === 1 ? t + "[]" : t, x = 0; x < g.length; ++x) {
        var M = g[x],
          z = typeof M == "object" && typeof M.value < "u" ? M.value : b[M];
        if (!(o && z === null)) {
          var me = oe(b) ? typeof n == "function" ? n(A, M) : A : A + (l ? "." + M : "[" + M + "]");
          O.set(e, d);
          var lr = Ya();
          lr.set(jn, O), Za(m, r(z, me, n, i, a, o, n === "comma" && w && oe(b) ? null : u, f, c, l, s, h, y, w, S, lr))
        }
      }
      return m
    },
    ah = function(e) {
      if (!e) return k;
      if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
      var t = e.charset || k.charset;
      if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      var n = $r.default;
      if (typeof e.format < "u") {
        if (!eh.call($r.formatters, e.format)) throw new TypeError("Unknown format option provided.");
        n = e.format
      }
      var i = $r.formatters[n],
        a = k.filter;
      return (typeof e.filter == "function" || oe(e.filter)) && (a = e.filter), {
        addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : k.addQueryPrefix,
        allowDots: typeof e.allowDots > "u" ? k.allowDots : !!e.allowDots,
        charset: t,
        charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : k.charsetSentinel,
        delimiter: typeof e.delimiter > "u" ? k.delimiter : e.delimiter,
        encode: typeof e.encode == "boolean" ? e.encode : k.encode,
        encoder: typeof e.encoder == "function" ? e.encoder : k.encoder,
        encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : k.encodeValuesOnly,
        filter: a,
        format: n,
        formatter: i,
        serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : k.serializeDate,
        skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : k.skipNulls,
        sort: typeof e.sort == "function" ? e.sort : null,
        strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : k.strictNullHandling
      }
    },
    oh = function(r, e) {
      var t = r,
        n = ah(e),
        i, a;
      typeof n.filter == "function" ? (a = n.filter, t = a("", t)) : oe(n.filter) && (a = n.filter, i = a);
      var o = [];
      if (typeof t != "object" || t === null) return "";
      var u;
      e && e.arrayFormat in Ka ? u = e.arrayFormat : e && "indices" in e ? u = e.indices ? "indices" : "repeat" : u = "indices";
      var f = Ka[u];
      if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      var c = f === "comma" && e && e.commaRoundTrip;
      i || (i = Object.keys(t)), n.sort && i.sort(n.sort);
      for (var l = Ya(), s = 0; s < i.length; ++s) {
        var h = i[s];
        n.skipNulls && t[h] === null || Za(o, ih(t[h], h, f, c, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, l))
      }
      var y = o.join(n.delimiter),
        w = n.addQueryPrefix === !0 ? "?" : "";
      return n.charsetSentinel && (n.charset === "iso-8859-1" ? w += "utf8=%26%2310003%3B&" : w += "utf8=%E2%9C%93&"), y.length > 0 ? w + y : ""
    },
    uh = be(oh);
  let Qa = {
    storeIdentifier: "",
    environment: "prod"
  };

  function sh(r) {
    Qa = r
  }

  function W() {
    return Qa
  }
  const fh = (r, e = "") => {
      switch (r) {
        case "prod":
          return "https://api.rechargeapps.com";
        case "stage":
          return "https://api.stage.rechargeapps.com";
        case "preprod":
        case "prestage":
          return `${e}/api`
      }
    },
    ch = (r, e = "") => {
      switch (r) {
        case "prod":
          return "https://admin.rechargeapps.com";
        case "stage":
          return "https://admin.stage.rechargeapps.com";
        case "preprod":
        case "prestage":
          return e
      }
    },
    lh = r => {
      switch (r) {
        case "prod":
        case "preprod":
          return "https://static.rechargecdn.com";
        case "stage":
        case "prestage":
          return "https://static.stage.rechargecdn.com"
      }
    },
    hh = "/tools/recurring";
  class dt {
    constructor(e, t) {
      this.name = "RechargeRequestError", this.message = e, this.status = t
    }
  }

  function dh(r) {
    return uh(r, {
      encode: !1,
      indices: !1,
      arrayFormat: "comma"
    })
  }

  function _(r, e) {
    return {
      ...r,
      internalFnCall: r.internalFnCall ?? e,
      internalRequestId: r.internalRequestId ?? ji()
    }
  }
  async function pt(r, e, t = {}) {
    const n = W();
    return ue(r, `${lh(n.environment)}/store/${n.storeIdentifier}${e}`, t)
  }
  async function $(r, e, {
    id: t,
    query: n,
    data: i,
    headers: a
  } = {}, o) {
    const {
      environment: u,
      environmentUri: f,
      storeIdentifier: c,
      loginRetryFn: l,
      appName: s,
      appVersion: h
    } = W();
    if (!c) throw new Error("InitRecharge has not been called and/or no store identifier has been defined.");
    const y = o.apiToken;
    if (!y) throw new Error("No API token defined on session.");
    const w = fh(u, f),
      S = {
        "X-Recharge-Access-Token": y,
        "X-Recharge-Version": "2021-11",
        "X-Recharge-Sdk-Fn": o.internalFnCall,
        ...s ? {
          "X-Recharge-Sdk-App-Name": s
        } : {},
        ...h ? {
          "X-Recharge-Sdk-App-Version": h
        } : {},
        "X-Recharge-Sdk-Version": "1.30.0",
        "X-Request-Id": o.internalRequestId,
        ...a || {}
      },
      O = {
        shop_url: c,
        ...n
      };
    try {
      return await ue(r, `${w}${e}`, {
        id: t,
        query: O,
        data: i,
        headers: S
      })
    } catch (b) {
      if (l && b instanceof dt && b.status === 401) return l().then(E => {
        if (E) return ue(r, `${w}${e}`, {
          id: t,
          query: O,
          data: i,
          headers: {
            ...S,
            "X-Recharge-Access-Token": E.apiToken
          }
        });
        throw b
      });
      throw b
    }
  }
  async function Ke(r, e, t = {}) {
    return ue(r, `${hh}${e}`, t)
  }
  async function ue(r, e, {
    id: t,
    query: n,
    data: i,
    headers: a
  } = {}) {
    let o = e.trim();
    if (t && (o = [o, `${t}`.trim()].join("/")), n) {
      let s;
      [o, s] = o.split("?");
      const h = [s, dh(n)].join("&").replace(/^&/, "");
      o = `${o}${h?`?${h}`:""}`
    }
    let u;
    i && r !== "get" && (u = JSON.stringify(i));
    const f = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Recharge-App": "storefront-client",
        ...a || {}
      },
      c = await fetch(o, {
        method: r,
        headers: f,
        body: u
      });
    let l;
    try {
      l = await c.json()
    } catch {}
    if (!c.ok) throw l && l.error ? new dt(l.error, c.status) : l && l.errors ? new dt(JSON.stringify(l.errors), c.status) : new dt("A connection error occurred while making the request");
    return l
  }

  function ph(r, e) {
    return $("get", "/addresses", {
      query: e
    }, _(r, "listAddresses"))
  }
  async function yh(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      address: n
    } = await $("get", "/addresses", {
      id: e,
      query: {
        include: t?.include
      }
    }, _(r, "getAddress"));
    return n
  }
  async function gh(r, e) {
    const {
      address: t
    } = await $("post", "/addresses", {
      data: {
        customer_id: r.customerId ? Number(r.customerId) : void 0,
        ...e
      }
    }, _(r, "createAddress"));
    return t
  }
  async function Vn(r, e, t, n) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      address: i
    } = await $("put", "/addresses", {
      id: e,
      data: t,
      query: n
    }, _(r, "updateAddress"));
    return i
  }
  async function vh(r, e, t, n) {
    return Vn(_(r, "applyDiscountToAddress"), e, {
      discounts: [{
        code: t
      }]
    }, n)
  }
  async function _h(r, e, t) {
    if (e === void 0 || e === "") throw new Error("Id is required");
    return Vn(_(r, "removeDiscountsFromAddress"), e, {
      discounts: []
    }, t)
  }

  function mh(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    return $("delete", "/addresses", {
      id: e
    }, _(r, "deleteAddress"))
  }
  async function wh(r, e) {
    const {
      address: t
    } = await $("post", "/addresses/merge", {
      data: e
    }, _(r, "mergeAddresses"));
    return t
  }
  async function bh(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      charge: n
    } = await $("post", `/addresses/${e}/charges/skip`, {
      data: t
    }, _(r, "skipFutureCharge"));
    return n
  }
  var $h = Object.freeze({
    __proto__: null,
    applyDiscountToAddress: vh,
    createAddress: gh,
    deleteAddress: mh,
    getAddress: yh,
    listAddresses: ph,
    mergeAddresses: wh,
    removeDiscountsFromAddress: _h,
    skipFutureCharge: bh,
    updateAddress: Vn
  });
  async function Eh() {
    const {
      storefrontAccessToken: r
    } = W(), e = {};
    r && (e["X-Recharge-Storefront-Access-Token"] = r);
    const t = await Ke("get", "/access", {
      headers: e
    });
    return {
      apiToken: t.api_token,
      customerId: t.customer_id,
      message: t.message
    }
  }
  async function Ah(r, e) {
    return eo(r, e)
  }
  async function eo(r, e) {
    if (!r) throw new Error("Shopify storefront token is required");
    const {
      storeIdentifier: t
    } = W();
    if (!t) throw new Error("InitRecharge has not been called and/or no store identifier has been defined.");
    const {
      api_token: n,
      customer_id: i,
      message: a
    } = await Er("post", "/shopify_storefront_access", {
      data: {
        customer_token: e,
        storefront_token: r,
        shop_url: t
      }
    });
    return n ? {
      apiToken: n,
      customerId: i,
      message: a
    } : null
  }
  async function Sh(r) {
    const {
      storeIdentifier: e
    } = W();
    if (!e) throw new Error("InitRecharge has not been called and/or no store identifier has been defined.");
    const {
      api_token: t,
      customer_id: n,
      message: i
    } = await Er("post", "/shopify_customer_account_api_access", {
      data: {
        customer_token: r,
        shop_url: e
      }
    });
    return t ? {
      apiToken: t,
      customerId: n,
      message: i
    } : null
  }
  async function Oh(r, e = {}) {
    if (!r) throw new Error("Email is required.");
    const {
      storeIdentifier: t
    } = W();
    if (!t) throw new Error("InitRecharge has not been called and/or no store identifier has been defined.");
    const n = await Er("post", "/attempt_login", {
      data: {
        email: r,
        shop: t,
        ...e
      }
    });
    if (n.errors) throw new Error(n.errors);
    return n.session_token
  }
  async function Ih(r, e = {}) {
    if (!r) throw new Error("Email is required.");
    const {
      storefrontAccessToken: t
    } = W(), n = {};
    t && (n["X-Recharge-Storefront-Access-Token"] = t);
    const i = await Ke("post", "/attempt_login", {
      data: {
        email: r,
        ...e
      },
      headers: n
    });
    if (i.errors) throw new Error(i.errors);
    return i.session_token
  }
  async function xh(r, e, t) {
    if (!r) throw new Error("Email is required.");
    if (!e) throw new Error("Session token is required.");
    if (!t) throw new Error("Code is required.");
    const {
      storeIdentifier: n
    } = W();
    if (!n) throw new Error("InitRecharge has not been called and/or no store identifier has been defined.");
    const i = await Er("post", "/validate_login", {
      data: {
        code: t,
        email: r,
        session_token: e,
        shop: n
      }
    });
    if (i.errors) throw new Error(i.errors);
    return {
      apiToken: i.api_token,
      customerId: i.customer_id
    }
  }
  async function Ph(r, e, t) {
    if (!r) throw new Error("Email is required.");
    if (!e) throw new Error("Session token is required.");
    if (!t) throw new Error("Code is required.");
    const {
      storefrontAccessToken: n
    } = W(), i = {};
    n && (i["X-Recharge-Storefront-Access-Token"] = n);
    const a = await Ke("post", "/validate_login", {
      data: {
        code: t,
        email: r,
        session_token: e
      },
      headers: i
    });
    if (a.errors) throw new Error(a.errors);
    return {
      apiToken: a.api_token,
      customerId: a.customer_id
    }
  }

  function Th() {
    const {
      customerHash: r
    } = W(), {
      pathname: e,
      search: t
    } = window.location, n = new URLSearchParams(t).get("token"), i = e.split("/").filter(Boolean), a = i.findIndex(u => u === "portal"), o = a !== -1 ? i[a + 1] : r;
    if (!n || !o) throw new Error("Not in context of Recharge Customer Portal or URL did not contain correct params");
    return {
      customerHash: o,
      token: n
    }
  }
  async function Rh() {
    const {
      customerHash: r,
      token: e
    } = Th(), {
      storeIdentifier: t
    } = W(), n = await Er("post", `/customers/${r}/access`, {
      data: {
        token: e,
        shop: t
      }
    });
    return {
      apiToken: n.api_token,
      customerId: n.customer_id
    }
  }
  async function Er(r, e, {
    id: t,
    query: n,
    data: i,
    headers: a
  } = {}) {
    const {
      environment: o,
      environmentUri: u,
      storefrontAccessToken: f,
      appName: c,
      appVersion: l
    } = W(), s = ch(o, u), h = {
      ...f ? {
        "X-Recharge-Storefront-Access-Token": f
      } : {},
      ...c ? {
        "X-Recharge-Sdk-App-Name": c
      } : {},
      ...l ? {
        "X-Recharge-Sdk-App-Version": l
      } : {},
      "X-Recharge-Sdk-Version": "1.30.0",
      ...a || {}
    };
    return ue(r, `${s}${e}`, {
      id: t,
      query: n,
      data: i,
      headers: h
    })
  }
  var Fh = Object.freeze({
      __proto__: null,
      loginCustomerPortal: Rh,
      loginShopifyApi: Ah,
      loginShopifyAppProxy: Eh,
      loginWithShopifyCustomerAccount: Sh,
      loginWithShopifyStorefront: eo,
      sendPasswordlessCode: Oh,
      sendPasswordlessCodeAppProxy: Ih,
      validatePasswordlessCode: xh,
      validatePasswordlessCodeAppProxy: Ph
    }),
    ro = {},
    Gn = {},
    se = {},
    Mh = typeof U == "object" && U && U.Object === Object && U,
    to = Mh,
    Dh = to,
    Ch = typeof self == "object" && self && self.Object === Object && self,
    Nh = Dh || Ch || Function("return this")(),
    fe = Nh,
    Bh = fe,
    Uh = Bh.Symbol,
    yt = Uh,
    no = yt,
    io = Object.prototype,
    qh = io.hasOwnProperty,
    Lh = io.toString,
    Ar = no ? no.toStringTag : void 0;

  function kh(r) {
    var e = qh.call(r, Ar),
      t = r[Ar];
    try {
      r[Ar] = void 0;
      var n = !0
    } catch {}
    var i = Lh.call(r);
    return n && (e ? r[Ar] = t : delete r[Ar]), i
  }
  var jh = kh,
    Vh = Object.prototype,
    Gh = Vh.toString;

  function Hh(r) {
    return Gh.call(r)
  }
  var Wh = Hh,
    ao = yt,
    Xh = jh,
    zh = Wh,
    Yh = "[object Null]",
    Kh = "[object Undefined]",
    oo = ao ? ao.toStringTag : void 0;

  function Zh(r) {
    return r == null ? r === void 0 ? Kh : Yh : oo && oo in Object(r) ? Xh(r) : zh(r)
  }
  var ge = Zh;

  function Jh(r) {
    return r != null && typeof r == "object"
  }
  var ve = Jh,
    Qh = ge,
    ed = ve,
    rd = "[object Number]";

  function td(r) {
    return typeof r == "number" || ed(r) && Qh(r) == rd
  }
  var gt = td,
    D = {};

  function nd(r) {
    var e = typeof r;
    return r != null && (e == "object" || e == "function")
  }
  var Ze = nd,
    id = ge,
    ad = Ze,
    od = "[object AsyncFunction]",
    ud = "[object Function]",
    sd = "[object GeneratorFunction]",
    fd = "[object Proxy]";

  function cd(r) {
    if (!ad(r)) return !1;
    var e = id(r);
    return e == ud || e == sd || e == od || e == fd
  }
  var Hn = cd,
    ld = fe,
    hd = ld["__core-js_shared__"],
    dd = hd,
    Wn = dd,
    uo = function() {
      var r = /[^.]+$/.exec(Wn && Wn.keys && Wn.keys.IE_PROTO || "");
      return r ? "Symbol(src)_1." + r : ""
    }();

  function pd(r) {
    return !!uo && uo in r
  }
  var yd = pd,
    gd = Function.prototype,
    vd = gd.toString;

  function _d(r) {
    if (r != null) {
      try {
        return vd.call(r)
      } catch {}
      try {
        return r + ""
      } catch {}
    }
    return ""
  }
  var so = _d,
    md = Hn,
    wd = yd,
    bd = Ze,
    $d = so,
    Ed = /[\\^$.*+?()[\]{}|]/g,
    Ad = /^\[object .+?Constructor\]$/,
    Sd = Function.prototype,
    Od = Object.prototype,
    Id = Sd.toString,
    xd = Od.hasOwnProperty,
    Pd = RegExp("^" + Id.call(xd).replace(Ed, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

  function Td(r) {
    if (!bd(r) || wd(r)) return !1;
    var e = md(r) ? Pd : Ad;
    return e.test($d(r))
  }
  var Rd = Td;

  function Fd(r, e) {
    return r?.[e]
  }
  var Md = Fd,
    Dd = Rd,
    Cd = Md;

  function Nd(r, e) {
    var t = Cd(r, e);
    return Dd(t) ? t : void 0
  }
  var Fe = Nd,
    Bd = Fe,
    Ud = function() {
      try {
        var r = Bd(Object, "defineProperty");
        return r({}, "", {}), r
      } catch {}
    }(),
    fo = Ud,
    co = fo;

  function qd(r, e, t) {
    e == "__proto__" && co ? co(r, e, {
      configurable: !0,
      enumerable: !0,
      value: t,
      writable: !0
    }) : r[e] = t
  }
  var lo = qd;

  function Ld(r, e) {
    return r === e || r !== r && e !== e
  }
  var vt = Ld,
    kd = lo,
    jd = vt,
    Vd = Object.prototype,
    Gd = Vd.hasOwnProperty;

  function Hd(r, e, t) {
    var n = r[e];
    (!(Gd.call(r, e) && jd(n, t)) || t === void 0 && !(e in r)) && kd(r, e, t)
  }
  var Wd = Hd,
    Xd = Wd,
    zd = lo;

  function Yd(r, e, t, n) {
    var i = !t;
    t || (t = {});
    for (var a = -1, o = e.length; ++a < o;) {
      var u = e[a],
        f = n ? n(t[u], r[u], u, t, r) : void 0;
      f === void 0 && (f = r[u]), i ? zd(t, u, f) : Xd(t, u, f)
    }
    return t
  }
  var Kd = Yd;

  function Zd(r) {
    return r
  }
  var _t = Zd;

  function Jd(r, e, t) {
    switch (t.length) {
      case 0:
        return r.call(e);
      case 1:
        return r.call(e, t[0]);
      case 2:
        return r.call(e, t[0], t[1]);
      case 3:
        return r.call(e, t[0], t[1], t[2])
    }
    return r.apply(e, t)
  }
  var Qd = Jd,
    ep = Qd,
    ho = Math.max;

  function rp(r, e, t) {
    return e = ho(e === void 0 ? r.length - 1 : e, 0),
      function() {
        for (var n = arguments, i = -1, a = ho(n.length - e, 0), o = Array(a); ++i < a;) o[i] = n[e + i];
        i = -1;
        for (var u = Array(e + 1); ++i < e;) u[i] = n[i];
        return u[e] = t(o), ep(r, this, u)
      }
  }
  var tp = rp;

  function np(r) {
    return function() {
      return r
    }
  }
  var ip = np,
    ap = ip,
    po = fo,
    op = _t,
    up = po ? function(r, e) {
      return po(r, "toString", {
        configurable: !0,
        enumerable: !1,
        value: ap(e),
        writable: !0
      })
    } : op,
    sp = up,
    fp = 800,
    cp = 16,
    lp = Date.now;

  function hp(r) {
    var e = 0,
      t = 0;
    return function() {
      var n = lp(),
        i = cp - (n - t);
      if (t = n, i > 0) {
        if (++e >= fp) return arguments[0]
      } else e = 0;
      return r.apply(void 0, arguments)
    }
  }
  var dp = hp,
    pp = sp,
    yp = dp,
    gp = yp(pp),
    vp = gp,
    _p = _t,
    mp = tp,
    wp = vp;

  function bp(r, e) {
    return wp(mp(r, e, _p), r + "")
  }
  var $p = bp,
    Ep = 9007199254740991;

  function Ap(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= Ep
  }
  var Xn = Ap,
    Sp = Hn,
    Op = Xn;

  function Ip(r) {
    return r != null && Op(r.length) && !Sp(r)
  }
  var Sr = Ip,
    xp = 9007199254740991,
    Pp = /^(?:0|[1-9]\d*)$/;

  function Tp(r, e) {
    var t = typeof r;
    return e = e ?? xp, !!e && (t == "number" || t != "symbol" && Pp.test(r)) && r > -1 && r % 1 == 0 && r < e
  }
  var zn = Tp,
    Rp = vt,
    Fp = Sr,
    Mp = zn,
    Dp = Ze;

  function Cp(r, e, t) {
    if (!Dp(t)) return !1;
    var n = typeof e;
    return (n == "number" ? Fp(t) && Mp(e, t.length) : n == "string" && e in t) ? Rp(t[e], r) : !1
  }
  var yo = Cp,
    Np = $p,
    Bp = yo;

  function Up(r) {
    return Np(function(e, t) {
      var n = -1,
        i = t.length,
        a = i > 1 ? t[i - 1] : void 0,
        o = i > 2 ? t[2] : void 0;
      for (a = r.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && Bp(t[0], t[1], o) && (a = i < 3 ? void 0 : a, i = 1), e = Object(e); ++n < i;) {
        var u = t[n];
        u && r(e, u, n, a)
      }
      return e
    })
  }
  var qp = Up;

  function Lp(r, e) {
    for (var t = -1, n = Array(r); ++t < r;) n[t] = e(t);
    return n
  }
  var go = Lp,
    kp = ge,
    jp = ve,
    Vp = "[object Arguments]";

  function Gp(r) {
    return jp(r) && kp(r) == Vp
  }
  var Hp = Gp,
    vo = Hp,
    Wp = ve,
    _o = Object.prototype,
    Xp = _o.hasOwnProperty,
    zp = _o.propertyIsEnumerable,
    Yp = vo(function() {
      return arguments
    }()) ? vo : function(r) {
      return Wp(r) && Xp.call(r, "callee") && !zp.call(r, "callee")
    },
    mo = Yp,
    Kp = Array.isArray,
    V = Kp,
    mt = {
      exports: {}
    };

  function Zp() {
    return !1
  }
  var Jp = Zp;
  mt.exports,
    function(r, e) {
      var t = fe,
        n = Jp,
        i = e && !e.nodeType && e,
        a = i && !0 && r && !r.nodeType && r,
        o = a && a.exports === i,
        u = o ? t.Buffer : void 0,
        f = u ? u.isBuffer : void 0,
        c = f || n;
      r.exports = c
    }(mt, mt.exports);
  var wo = mt.exports,
    Qp = ge,
    ey = Xn,
    ry = ve,
    ty = "[object Arguments]",
    ny = "[object Array]",
    iy = "[object Boolean]",
    ay = "[object Date]",
    oy = "[object Error]",
    uy = "[object Function]",
    sy = "[object Map]",
    fy = "[object Number]",
    cy = "[object Object]",
    ly = "[object RegExp]",
    hy = "[object Set]",
    dy = "[object String]",
    py = "[object WeakMap]",
    yy = "[object ArrayBuffer]",
    gy = "[object DataView]",
    vy = "[object Float32Array]",
    _y = "[object Float64Array]",
    my = "[object Int8Array]",
    wy = "[object Int16Array]",
    by = "[object Int32Array]",
    $y = "[object Uint8Array]",
    Ey = "[object Uint8ClampedArray]",
    Ay = "[object Uint16Array]",
    Sy = "[object Uint32Array]",
    R = {};
  R[vy] = R[_y] = R[my] = R[wy] = R[by] = R[$y] = R[Ey] = R[Ay] = R[Sy] = !0, R[ty] = R[ny] = R[yy] = R[iy] = R[gy] = R[ay] = R[oy] = R[uy] = R[sy] = R[fy] = R[cy] = R[ly] = R[hy] = R[dy] = R[py] = !1;

  function Oy(r) {
    return ry(r) && ey(r.length) && !!R[Qp(r)]
  }
  var Iy = Oy;

  function xy(r) {
    return function(e) {
      return r(e)
    }
  }
  var Py = xy,
    wt = {
      exports: {}
    };
  wt.exports,
    function(r, e) {
      var t = to,
        n = e && !e.nodeType && e,
        i = n && !0 && r && !r.nodeType && r,
        a = i && i.exports === n,
        o = a && t.process,
        u = function() {
          try {
            var f = i && i.require && i.require("util").types;
            return f || o && o.binding && o.binding("util")
          } catch {}
        }();
      r.exports = u
    }(wt, wt.exports);
  var Ty = wt.exports,
    Ry = Iy,
    Fy = Py,
    bo = Ty,
    $o = bo && bo.isTypedArray,
    My = $o ? Fy($o) : Ry,
    Eo = My,
    Dy = go,
    Cy = mo,
    Ny = V,
    By = wo,
    Uy = zn,
    qy = Eo,
    Ly = Object.prototype,
    ky = Ly.hasOwnProperty;

  function jy(r, e) {
    var t = Ny(r),
      n = !t && Cy(r),
      i = !t && !n && By(r),
      a = !t && !n && !i && qy(r),
      o = t || n || i || a,
      u = o ? Dy(r.length, String) : [],
      f = u.length;
    for (var c in r)(e || ky.call(r, c)) && !(o && (c == "length" || i && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Uy(c, f))) && u.push(c);
    return u
  }
  var Ao = jy,
    Vy = Object.prototype;

  function Gy(r) {
    var e = r && r.constructor,
      t = typeof e == "function" && e.prototype || Vy;
    return r === t
  }
  var So = Gy;

  function Hy(r) {
    var e = [];
    if (r != null)
      for (var t in Object(r)) e.push(t);
    return e
  }
  var Wy = Hy,
    Xy = Ze,
    zy = So,
    Yy = Wy,
    Ky = Object.prototype,
    Zy = Ky.hasOwnProperty;

  function Jy(r) {
    if (!Xy(r)) return Yy(r);
    var e = zy(r),
      t = [];
    for (var n in r) n == "constructor" && (e || !Zy.call(r, n)) || t.push(n);
    return t
  }
  var Qy = Jy,
    eg = Ao,
    rg = Qy,
    tg = Sr;

  function ng(r) {
    return tg(r) ? eg(r, !0) : rg(r)
  }
  var ig = ng,
    ag = Kd,
    og = qp,
    ug = ig,
    sg = og(function(r, e) {
      ag(e, ug(e), r)
    }),
    fg = sg,
    cg = fg,
    bt = {},
    Me = {};

  function lg(r, e) {
    for (var t = -1, n = r == null ? 0 : r.length; ++t < n;)
      if (!e(r[t], t, r)) return !1;
    return !0
  }
  var hg = lg;

  function dg(r) {
    return function(e, t, n) {
      for (var i = -1, a = Object(e), o = n(e), u = o.length; u--;) {
        var f = o[r ? u : ++i];
        if (t(a[f], f, a) === !1) break
      }
      return e
    }
  }
  var pg = dg,
    yg = pg,
    gg = yg(),
    vg = gg;

  function _g(r, e) {
    return function(t) {
      return r(e(t))
    }
  }
  var mg = _g,
    wg = mg,
    bg = wg(Object.keys, Object),
    $g = bg,
    Eg = So,
    Ag = $g,
    Sg = Object.prototype,
    Og = Sg.hasOwnProperty;

  function Ig(r) {
    if (!Eg(r)) return Ag(r);
    var e = [];
    for (var t in Object(r)) Og.call(r, t) && t != "constructor" && e.push(t);
    return e
  }
  var xg = Ig,
    Pg = Ao,
    Tg = xg,
    Rg = Sr;

  function Fg(r) {
    return Rg(r) ? Pg(r) : Tg(r)
  }
  var $t = Fg,
    Mg = vg,
    Dg = $t;

  function Cg(r, e) {
    return r && Mg(r, e, Dg)
  }
  var Ng = Cg,
    Bg = Sr;

  function Ug(r, e) {
    return function(t, n) {
      if (t == null) return t;
      if (!Bg(t)) return r(t, n);
      for (var i = t.length, a = e ? i : -1, o = Object(t);
        (e ? a-- : ++a < i) && n(o[a], a, o) !== !1;);
      return t
    }
  }
  var qg = Ug,
    Lg = Ng,
    kg = qg,
    jg = kg(Lg),
    Yn = jg,
    Vg = Yn;

  function Gg(r, e) {
    var t = !0;
    return Vg(r, function(n, i, a) {
      return t = !!e(n, i, a), t
    }), t
  }
  var Hg = Gg;

  function Wg() {
    this.__data__ = [], this.size = 0
  }
  var Xg = Wg,
    zg = vt;

  function Yg(r, e) {
    for (var t = r.length; t--;)
      if (zg(r[t][0], e)) return t;
    return -1
  }
  var Et = Yg,
    Kg = Et,
    Zg = Array.prototype,
    Jg = Zg.splice;

  function Qg(r) {
    var e = this.__data__,
      t = Kg(e, r);
    if (t < 0) return !1;
    var n = e.length - 1;
    return t == n ? e.pop() : Jg.call(e, t, 1), --this.size, !0
  }
  var ev = Qg,
    rv = Et;

  function tv(r) {
    var e = this.__data__,
      t = rv(e, r);
    return t < 0 ? void 0 : e[t][1]
  }
  var nv = tv,
    iv = Et;

  function av(r) {
    return iv(this.__data__, r) > -1
  }
  var ov = av,
    uv = Et;

  function sv(r, e) {
    var t = this.__data__,
      n = uv(t, r);
    return n < 0 ? (++this.size, t.push([r, e])) : t[n][1] = e, this
  }
  var fv = sv,
    cv = Xg,
    lv = ev,
    hv = nv,
    dv = ov,
    pv = fv;

  function Je(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t;) {
      var n = r[e];
      this.set(n[0], n[1])
    }
  }
  Je.prototype.clear = cv, Je.prototype.delete = lv, Je.prototype.get = hv, Je.prototype.has = dv, Je.prototype.set = pv;
  var At = Je,
    yv = At;

  function gv() {
    this.__data__ = new yv, this.size = 0
  }
  var vv = gv;

  function _v(r) {
    var e = this.__data__,
      t = e.delete(r);
    return this.size = e.size, t
  }
  var mv = _v;

  function wv(r) {
    return this.__data__.get(r)
  }
  var bv = wv;

  function $v(r) {
    return this.__data__.has(r)
  }
  var Ev = $v,
    Av = Fe,
    Sv = fe,
    Ov = Av(Sv, "Map"),
    Kn = Ov,
    Iv = Fe,
    xv = Iv(Object, "create"),
    St = xv,
    Oo = St;

  function Pv() {
    this.__data__ = Oo ? Oo(null) : {}, this.size = 0
  }
  var Tv = Pv;

  function Rv(r) {
    var e = this.has(r) && delete this.__data__[r];
    return this.size -= e ? 1 : 0, e
  }
  var Fv = Rv,
    Mv = St,
    Dv = "__lodash_hash_undefined__",
    Cv = Object.prototype,
    Nv = Cv.hasOwnProperty;

  function Bv(r) {
    var e = this.__data__;
    if (Mv) {
      var t = e[r];
      return t === Dv ? void 0 : t
    }
    return Nv.call(e, r) ? e[r] : void 0
  }
  var Uv = Bv,
    qv = St,
    Lv = Object.prototype,
    kv = Lv.hasOwnProperty;

  function jv(r) {
    var e = this.__data__;
    return qv ? e[r] !== void 0 : kv.call(e, r)
  }
  var Vv = jv,
    Gv = St,
    Hv = "__lodash_hash_undefined__";

  function Wv(r, e) {
    var t = this.__data__;
    return this.size += this.has(r) ? 0 : 1, t[r] = Gv && e === void 0 ? Hv : e, this
  }
  var Xv = Wv,
    zv = Tv,
    Yv = Fv,
    Kv = Uv,
    Zv = Vv,
    Jv = Xv;

  function Qe(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t;) {
      var n = r[e];
      this.set(n[0], n[1])
    }
  }
  Qe.prototype.clear = zv, Qe.prototype.delete = Yv, Qe.prototype.get = Kv, Qe.prototype.has = Zv, Qe.prototype.set = Jv;
  var Qv = Qe,
    Io = Qv,
    e_ = At,
    r_ = Kn;

  function t_() {
    this.size = 0, this.__data__ = {
      hash: new Io,
      map: new(r_ || e_),
      string: new Io
    }
  }
  var n_ = t_;

  function i_(r) {
    var e = typeof r;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null
  }
  var a_ = i_,
    o_ = a_;

  function u_(r, e) {
    var t = r.__data__;
    return o_(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map
  }
  var Ot = u_,
    s_ = Ot;

  function f_(r) {
    var e = s_(this, r).delete(r);
    return this.size -= e ? 1 : 0, e
  }
  var c_ = f_,
    l_ = Ot;

  function h_(r) {
    return l_(this, r).get(r)
  }
  var d_ = h_,
    p_ = Ot;

  function y_(r) {
    return p_(this, r).has(r)
  }
  var g_ = y_,
    v_ = Ot;

  function __(r, e) {
    var t = v_(this, r),
      n = t.size;
    return t.set(r, e), this.size += t.size == n ? 0 : 1, this
  }
  var m_ = __,
    w_ = n_,
    b_ = c_,
    $_ = d_,
    E_ = g_,
    A_ = m_;

  function er(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t;) {
      var n = r[e];
      this.set(n[0], n[1])
    }
  }
  er.prototype.clear = w_, er.prototype.delete = b_, er.prototype.get = $_, er.prototype.has = E_, er.prototype.set = A_;
  var Zn = er,
    S_ = At,
    O_ = Kn,
    I_ = Zn,
    x_ = 200;

  function P_(r, e) {
    var t = this.__data__;
    if (t instanceof S_) {
      var n = t.__data__;
      if (!O_ || n.length < x_ - 1) return n.push([r, e]), this.size = ++t.size, this;
      t = this.__data__ = new I_(n)
    }
    return t.set(r, e), this.size = t.size, this
  }
  var T_ = P_,
    R_ = At,
    F_ = vv,
    M_ = mv,
    D_ = bv,
    C_ = Ev,
    N_ = T_;

  function rr(r) {
    var e = this.__data__ = new R_(r);
    this.size = e.size
  }
  rr.prototype.clear = F_, rr.prototype.delete = M_, rr.prototype.get = D_, rr.prototype.has = C_, rr.prototype.set = N_;
  var xo = rr,
    B_ = "__lodash_hash_undefined__";

  function U_(r) {
    return this.__data__.set(r, B_), this
  }
  var q_ = U_;

  function L_(r) {
    return this.__data__.has(r)
  }
  var k_ = L_,
    j_ = Zn,
    V_ = q_,
    G_ = k_;

  function It(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.__data__ = new j_; ++e < t;) this.add(r[e])
  }
  It.prototype.add = It.prototype.push = V_, It.prototype.has = G_;
  var H_ = It;

  function W_(r, e) {
    for (var t = -1, n = r == null ? 0 : r.length; ++t < n;)
      if (e(r[t], t, r)) return !0;
    return !1
  }
  var X_ = W_;

  function z_(r, e) {
    return r.has(e)
  }
  var Y_ = z_,
    K_ = H_,
    Z_ = X_,
    J_ = Y_,
    Q_ = 1,
    em = 2;

  function rm(r, e, t, n, i, a) {
    var o = t & Q_,
      u = r.length,
      f = e.length;
    if (u != f && !(o && f > u)) return !1;
    var c = a.get(r),
      l = a.get(e);
    if (c && l) return c == e && l == r;
    var s = -1,
      h = !0,
      y = t & em ? new K_ : void 0;
    for (a.set(r, e), a.set(e, r); ++s < u;) {
      var w = r[s],
        S = e[s];
      if (n) var O = o ? n(S, w, s, e, r, a) : n(w, S, s, r, e, a);
      if (O !== void 0) {
        if (O) continue;
        h = !1;
        break
      }
      if (y) {
        if (!Z_(e, function(b, E) {
            if (!J_(y, E) && (w === b || i(w, b, t, n, a))) return y.push(E)
          })) {
          h = !1;
          break
        }
      } else if (!(w === S || i(w, S, t, n, a))) {
        h = !1;
        break
      }
    }
    return a.delete(r), a.delete(e), h
  }
  var Po = rm,
    tm = fe,
    nm = tm.Uint8Array,
    im = nm;

  function am(r) {
    var e = -1,
      t = Array(r.size);
    return r.forEach(function(n, i) {
      t[++e] = [i, n]
    }), t
  }
  var om = am;

  function um(r) {
    var e = -1,
      t = Array(r.size);
    return r.forEach(function(n) {
      t[++e] = n
    }), t
  }
  var sm = um,
    To = yt,
    Ro = im,
    fm = vt,
    cm = Po,
    lm = om,
    hm = sm,
    dm = 1,
    pm = 2,
    ym = "[object Boolean]",
    gm = "[object Date]",
    vm = "[object Error]",
    _m = "[object Map]",
    mm = "[object Number]",
    wm = "[object RegExp]",
    bm = "[object Set]",
    $m = "[object String]",
    Em = "[object Symbol]",
    Am = "[object ArrayBuffer]",
    Sm = "[object DataView]",
    Fo = To ? To.prototype : void 0,
    Jn = Fo ? Fo.valueOf : void 0;

  function Om(r, e, t, n, i, a, o) {
    switch (t) {
      case Sm:
        if (r.byteLength != e.byteLength || r.byteOffset != e.byteOffset) return !1;
        r = r.buffer, e = e.buffer;
      case Am:
        return !(r.byteLength != e.byteLength || !a(new Ro(r), new Ro(e)));
      case ym:
      case gm:
      case mm:
        return fm(+r, +e);
      case vm:
        return r.name == e.name && r.message == e.message;
      case wm:
      case $m:
        return r == e + "";
      case _m:
        var u = lm;
      case bm:
        var f = n & dm;
        if (u || (u = hm), r.size != e.size && !f) return !1;
        var c = o.get(r);
        if (c) return c == e;
        n |= pm, o.set(r, e);
        var l = cm(u(r), u(e), n, i, a, o);
        return o.delete(r), l;
      case Em:
        if (Jn) return Jn.call(r) == Jn.call(e)
    }
    return !1
  }
  var Im = Om;

  function xm(r, e) {
    for (var t = -1, n = e.length, i = r.length; ++t < n;) r[i + t] = e[t];
    return r
  }
  var Pm = xm,
    Tm = Pm,
    Rm = V;

  function Fm(r, e, t) {
    var n = e(r);
    return Rm(r) ? n : Tm(n, t(r))
  }
  var Mm = Fm;

  function Dm(r, e) {
    for (var t = -1, n = r == null ? 0 : r.length, i = 0, a = []; ++t < n;) {
      var o = r[t];
      e(o, t, r) && (a[i++] = o)
    }
    return a
  }
  var Cm = Dm;

  function Nm() {
    return []
  }
  var Bm = Nm,
    Um = Cm,
    qm = Bm,
    Lm = Object.prototype,
    km = Lm.propertyIsEnumerable,
    Mo = Object.getOwnPropertySymbols,
    jm = Mo ? function(r) {
      return r == null ? [] : (r = Object(r), Um(Mo(r), function(e) {
        return km.call(r, e)
      }))
    } : qm,
    Vm = jm,
    Gm = Mm,
    Hm = Vm,
    Wm = $t;

  function Xm(r) {
    return Gm(r, Wm, Hm)
  }
  var zm = Xm,
    Do = zm,
    Ym = 1,
    Km = Object.prototype,
    Zm = Km.hasOwnProperty;

  function Jm(r, e, t, n, i, a) {
    var o = t & Ym,
      u = Do(r),
      f = u.length,
      c = Do(e),
      l = c.length;
    if (f != l && !o) return !1;
    for (var s = f; s--;) {
      var h = u[s];
      if (!(o ? h in e : Zm.call(e, h))) return !1
    }
    var y = a.get(r),
      w = a.get(e);
    if (y && w) return y == e && w == r;
    var S = !0;
    a.set(r, e), a.set(e, r);
    for (var O = o; ++s < f;) {
      h = u[s];
      var b = r[h],
        E = e[h];
      if (n) var d = o ? n(E, b, h, e, r, a) : n(b, E, h, r, e, a);
      if (!(d === void 0 ? b === E || i(b, E, t, n, a) : d)) {
        S = !1;
        break
      }
      O || (O = h == "constructor")
    }
    if (S && !O) {
      var I = r.constructor,
        T = e.constructor;
      I != T && "constructor" in r && "constructor" in e && !(typeof I == "function" && I instanceof I && typeof T == "function" && T instanceof T) && (S = !1)
    }
    return a.delete(r), a.delete(e), S
  }
  var Qm = Jm,
    ew = Fe,
    rw = fe,
    tw = ew(rw, "DataView"),
    nw = tw,
    iw = Fe,
    aw = fe,
    ow = iw(aw, "Promise"),
    uw = ow,
    sw = Fe,
    fw = fe,
    cw = sw(fw, "Set"),
    lw = cw,
    hw = Fe,
    dw = fe,
    pw = hw(dw, "WeakMap"),
    yw = pw,
    Qn = nw,
    ei = Kn,
    ri = uw,
    ti = lw,
    ni = yw,
    Co = ge,
    tr = so,
    No = "[object Map]",
    gw = "[object Object]",
    Bo = "[object Promise]",
    Uo = "[object Set]",
    qo = "[object WeakMap]",
    Lo = "[object DataView]",
    vw = tr(Qn),
    _w = tr(ei),
    mw = tr(ri),
    ww = tr(ti),
    bw = tr(ni),
    De = Co;
  (Qn && De(new Qn(new ArrayBuffer(1))) != Lo || ei && De(new ei) != No || ri && De(ri.resolve()) != Bo || ti && De(new ti) != Uo || ni && De(new ni) != qo) && (De = function(r) {
    var e = Co(r),
      t = e == gw ? r.constructor : void 0,
      n = t ? tr(t) : "";
    if (n) switch (n) {
      case vw:
        return Lo;
      case _w:
        return No;
      case mw:
        return Bo;
      case ww:
        return Uo;
      case bw:
        return qo
    }
    return e
  });
  var $w = De,
    ii = xo,
    Ew = Po,
    Aw = Im,
    Sw = Qm,
    ko = $w,
    jo = V,
    Vo = wo,
    Ow = Eo,
    Iw = 1,
    Go = "[object Arguments]",
    Ho = "[object Array]",
    xt = "[object Object]",
    xw = Object.prototype,
    Wo = xw.hasOwnProperty;

  function Pw(r, e, t, n, i, a) {
    var o = jo(r),
      u = jo(e),
      f = o ? Ho : ko(r),
      c = u ? Ho : ko(e);
    f = f == Go ? xt : f, c = c == Go ? xt : c;
    var l = f == xt,
      s = c == xt,
      h = f == c;
    if (h && Vo(r)) {
      if (!Vo(e)) return !1;
      o = !0, l = !1
    }
    if (h && !l) return a || (a = new ii), o || Ow(r) ? Ew(r, e, t, n, i, a) : Aw(r, e, f, t, n, i, a);
    if (!(t & Iw)) {
      var y = l && Wo.call(r, "__wrapped__"),
        w = s && Wo.call(e, "__wrapped__");
      if (y || w) {
        var S = y ? r.value() : r,
          O = w ? e.value() : e;
        return a || (a = new ii), i(S, O, t, n, a)
      }
    }
    return h ? (a || (a = new ii), Sw(r, e, t, n, i, a)) : !1
  }
  var Tw = Pw,
    Rw = Tw,
    Xo = ve;

  function zo(r, e, t, n, i) {
    return r === e ? !0 : r == null || e == null || !Xo(r) && !Xo(e) ? r !== r && e !== e : Rw(r, e, t, n, zo, i)
  }
  var Yo = zo,
    Fw = xo,
    Mw = Yo,
    Dw = 1,
    Cw = 2;

  function Nw(r, e, t, n) {
    var i = t.length,
      a = i,
      o = !n;
    if (r == null) return !a;
    for (r = Object(r); i--;) {
      var u = t[i];
      if (o && u[2] ? u[1] !== r[u[0]] : !(u[0] in r)) return !1
    }
    for (; ++i < a;) {
      u = t[i];
      var f = u[0],
        c = r[f],
        l = u[1];
      if (o && u[2]) {
        if (c === void 0 && !(f in r)) return !1
      } else {
        var s = new Fw;
        if (n) var h = n(c, l, f, r, e, s);
        if (!(h === void 0 ? Mw(l, c, Dw | Cw, n, s) : h)) return !1
      }
    }
    return !0
  }
  var Bw = Nw,
    Uw = Ze;

  function qw(r) {
    return r === r && !Uw(r)
  }
  var Ko = qw,
    Lw = Ko,
    kw = $t;

  function jw(r) {
    for (var e = kw(r), t = e.length; t--;) {
      var n = e[t],
        i = r[n];
      e[t] = [n, i, Lw(i)]
    }
    return e
  }
  var Vw = jw;

  function Gw(r, e) {
    return function(t) {
      return t == null ? !1 : t[r] === e && (e !== void 0 || r in Object(t))
    }
  }
  var Zo = Gw,
    Hw = Bw,
    Ww = Vw,
    Xw = Zo;

  function zw(r) {
    var e = Ww(r);
    return e.length == 1 && e[0][2] ? Xw(e[0][0], e[0][1]) : function(t) {
      return t === r || Hw(t, r, e)
    }
  }
  var Yw = zw,
    Kw = ge,
    Zw = ve,
    Jw = "[object Symbol]";

  function Qw(r) {
    return typeof r == "symbol" || Zw(r) && Kw(r) == Jw
  }
  var Pt = Qw,
    e0 = V,
    r0 = Pt,
    t0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    n0 = /^\w*$/;

  function i0(r, e) {
    if (e0(r)) return !1;
    var t = typeof r;
    return t == "number" || t == "symbol" || t == "boolean" || r == null || r0(r) ? !0 : n0.test(r) || !t0.test(r) || e != null && r in Object(e)
  }
  var ai = i0,
    Jo = Zn,
    a0 = "Expected a function";

  function oi(r, e) {
    if (typeof r != "function" || e != null && typeof e != "function") throw new TypeError(a0);
    var t = function() {
      var n = arguments,
        i = e ? e.apply(this, n) : n[0],
        a = t.cache;
      if (a.has(i)) return a.get(i);
      var o = r.apply(this, n);
      return t.cache = a.set(i, o) || a, o
    };
    return t.cache = new(oi.Cache || Jo), t
  }
  oi.Cache = Jo;
  var o0 = oi,
    u0 = o0,
    s0 = 500;

  function f0(r) {
    var e = u0(r, function(n) {
        return t.size === s0 && t.clear(), n
      }),
      t = e.cache;
    return e
  }
  var c0 = f0,
    l0 = c0,
    h0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    d0 = /\\(\\)?/g,
    p0 = l0(function(r) {
      var e = [];
      return r.charCodeAt(0) === 46 && e.push(""), r.replace(h0, function(t, n, i, a) {
        e.push(i ? a.replace(d0, "$1") : n || t)
      }), e
    }),
    y0 = p0;

  function g0(r, e) {
    for (var t = -1, n = r == null ? 0 : r.length, i = Array(n); ++t < n;) i[t] = e(r[t], t, r);
    return i
  }
  var ui = g0,
    Qo = yt,
    v0 = ui,
    _0 = V,
    m0 = Pt,
    w0 = 1 / 0,
    eu = Qo ? Qo.prototype : void 0,
    ru = eu ? eu.toString : void 0;

  function tu(r) {
    if (typeof r == "string") return r;
    if (_0(r)) return v0(r, tu) + "";
    if (m0(r)) return ru ? ru.call(r) : "";
    var e = r + "";
    return e == "0" && 1 / r == -w0 ? "-0" : e
  }
  var b0 = tu,
    $0 = b0;

  function E0(r) {
    return r == null ? "" : $0(r)
  }
  var A0 = E0,
    S0 = V,
    O0 = ai,
    I0 = y0,
    x0 = A0;

  function P0(r, e) {
    return S0(r) ? r : O0(r, e) ? [r] : I0(x0(r))
  }
  var nu = P0,
    T0 = Pt,
    R0 = 1 / 0;

  function F0(r) {
    if (typeof r == "string" || T0(r)) return r;
    var e = r + "";
    return e == "0" && 1 / r == -R0 ? "-0" : e
  }
  var Tt = F0,
    M0 = nu,
    D0 = Tt;

  function C0(r, e) {
    e = M0(e, r);
    for (var t = 0, n = e.length; r != null && t < n;) r = r[D0(e[t++])];
    return t && t == n ? r : void 0
  }
  var iu = C0,
    N0 = iu;

  function B0(r, e, t) {
    var n = r == null ? void 0 : N0(r, e);
    return n === void 0 ? t : n
  }
  var U0 = B0;

  function q0(r, e) {
    return r != null && e in Object(r)
  }
  var L0 = q0,
    k0 = nu,
    j0 = mo,
    V0 = V,
    G0 = zn,
    H0 = Xn,
    W0 = Tt;

  function X0(r, e, t) {
    e = k0(e, r);
    for (var n = -1, i = e.length, a = !1; ++n < i;) {
      var o = W0(e[n]);
      if (!(a = r != null && t(r, o))) break;
      r = r[o]
    }
    return a || ++n != i ? a : (i = r == null ? 0 : r.length, !!i && H0(i) && G0(o, i) && (V0(r) || j0(r)))
  }
  var z0 = X0,
    Y0 = L0,
    K0 = z0;

  function Z0(r, e) {
    return r != null && K0(r, e, Y0)
  }
  var J0 = Z0,
    Q0 = Yo,
    eb = U0,
    rb = J0,
    tb = ai,
    nb = Ko,
    ib = Zo,
    ab = Tt,
    ob = 1,
    ub = 2;

  function sb(r, e) {
    return tb(r) && nb(e) ? ib(ab(r), e) : function(t) {
      var n = eb(t, r);
      return n === void 0 && n === e ? rb(t, r) : Q0(e, n, ob | ub)
    }
  }
  var fb = sb;

  function cb(r) {
    return function(e) {
      return e?.[r]
    }
  }
  var lb = cb,
    hb = iu;

  function db(r) {
    return function(e) {
      return hb(e, r)
    }
  }
  var pb = db,
    yb = lb,
    gb = pb,
    vb = ai,
    _b = Tt;

  function mb(r) {
    return vb(r) ? yb(_b(r)) : gb(r)
  }
  var wb = mb,
    bb = Yw,
    $b = fb,
    Eb = _t,
    Ab = V,
    Sb = wb;

  function Ob(r) {
    return typeof r == "function" ? r : r == null ? Eb : typeof r == "object" ? Ab(r) ? $b(r[0], r[1]) : bb(r) : Sb(r)
  }
  var au = Ob,
    Ib = hg,
    xb = Hg,
    Pb = au,
    Tb = V,
    Rb = yo;

  function Fb(r, e, t) {
    var n = Tb(r) ? Ib : xb;
    return t && Rb(r, e, t) && (e = void 0), n(r, Pb(e))
  }
  var si = Fb;
  Object.defineProperty(Me, "__esModule", {
    value: !0
  }), Me.calculatePadding = Nb, Me.slicePadding = Bb;
  var Mb = si,
    Db = Cb(Mb);

  function Cb(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function Nb(r) {
    switch (r % 4) {
      case 0:
        return 0;
      case 1:
        return 3;
      case 2:
        return 2;
      case 3:
        return 1;
      default:
        return null
    }
  }

  function Bb(r, e) {
    var t = r.slice(e),
      n = (0, Db.default)(t.buffer(), function(i) {
        return i === 0
      });
    if (n !== !0) throw new Error("XDR Read Error: invalid padding")
  }
  Object.defineProperty(bt, "__esModule", {
    value: !0
  }), bt.Cursor = void 0;
  var Ub = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    qb = Me;

  function Lb(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var fi = function() {
    function r(e) {
      Lb(this, r), e instanceof p || (e = typeof e == "number" ? p.alloc(e) : p.from(e)), this._setBuffer(e), this.rewind()
    }
    return Ub(r, [{
      key: "_setBuffer",
      value: function(t) {
        this._buffer = t, this.length = t.length
      }
    }, {
      key: "buffer",
      value: function() {
        return this._buffer
      }
    }, {
      key: "tap",
      value: function(t) {
        return t(this), this
      }
    }, {
      key: "clone",
      value: function(t) {
        var n = new this.constructor(this.buffer());
        return n.seek(arguments.length === 0 ? this.tell() : t), n
      }
    }, {
      key: "tell",
      value: function() {
        return this._index
      }
    }, {
      key: "seek",
      value: function(t, n) {
        return arguments.length === 1 && (n = t, t = "="), t === "+" ? this._index += n : t === "-" ? this._index -= n : this._index = n, this
      }
    }, {
      key: "rewind",
      value: function() {
        return this.seek(0)
      }
    }, {
      key: "eof",
      value: function() {
        return this.tell() === this.buffer().length
      }
    }, {
      key: "write",
      value: function(t, n, i) {
        return this.seek("+", this.buffer().write(t, this.tell(), n, i))
      }
    }, {
      key: "fill",
      value: function(t, n) {
        return arguments.length === 1 && (n = this.buffer().length - this.tell()), this.buffer().fill(t, this.tell(), this.tell() + n), this.seek("+", n), this
      }
    }, {
      key: "slice",
      value: function(t) {
        arguments.length === 0 && (t = this.length - this.tell());
        var n = new this.constructor(this.buffer().slice(this.tell(), this.tell() + t));
        return this.seek("+", t), n
      }
    }, {
      key: "copyFrom",
      value: function(t) {
        var n = t instanceof p ? t : t.buffer();
        return n.copy(this.buffer(), this.tell(), 0, n.length), this.seek("+", n.length), this
      }
    }, {
      key: "concat",
      value: function(t) {
        t.forEach(function(i, a) {
          i instanceof r && (t[a] = i.buffer())
        }), t.unshift(this.buffer());
        var n = p.concat(t);
        return this._setBuffer(n), this
      }
    }, {
      key: "toString",
      value: function(t, n) {
        arguments.length === 0 ? (t = "utf8", n = this.buffer().length - this.tell()) : arguments.length === 1 && (n = this.buffer().length - this.tell());
        var i = this.buffer().toString(t, this.tell(), this.tell() + n);
        return this.seek("+", n), i
      }
    }, {
      key: "writeBufferPadded",
      value: function(t) {
        var n = (0, qb.calculatePadding)(t.length),
          i = p.alloc(n);
        return this.copyFrom(new r(t)).copyFrom(new r(i))
      }
    }]), r
  }();
  [
    [1, ["readInt8", "readUInt8"]],
    [2, ["readInt16BE", "readInt16LE", "readUInt16BE", "readUInt16LE"]],
    [4, ["readInt32BE", "readInt32LE", "readUInt32BE", "readUInt32LE", "readFloatBE", "readFloatLE"]],
    [8, ["readDoubleBE", "readDoubleLE"]]
  ].forEach(function(r) {
    r[1].forEach(function(e) {
      fi.prototype[e] = function() {
        var n = this.buffer()[e](this.tell());
        return this.seek("+", r[0]), n
      }
    })
  }), [
    [1, ["writeInt8", "writeUInt8"]],
    [2, ["writeInt16BE", "writeInt16LE", "writeUInt16BE", "writeUInt16LE"]],
    [4, ["writeInt32BE", "writeInt32LE", "writeUInt32BE", "writeUInt32LE", "writeFloatBE", "writeFloatLE"]],
    [8, ["writeDoubleBE", "writeDoubleLE"]]
  ].forEach(function(r) {
    r[1].forEach(function(e) {
      fi.prototype[e] = function(n) {
        return this.buffer()[e](n, this.tell()), this.seek("+", r[0]), this
      }
    })
  }), bt.Cursor = fi, Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.default = Xb;
  var kb = cg,
    ou = su(kb),
    jb = Hn,
    Vb = su(jb),
    uu = bt;

  function su(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }
  var Gb = Math.pow(2, 16),
    Hb = {
      toXDR: function(e) {
        var t = new uu.Cursor(Gb);
        this.write(e, t);
        var n = t.tell();
        return t.rewind(), t.slice(n).buffer()
      },
      fromXDR: function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "raw",
          n = void 0;
        switch (t) {
          case "raw":
            n = e;
            break;
          case "hex":
            n = p.from(e, "hex");
            break;
          case "base64":
            n = p.from(e, "base64");
            break;
          default:
            throw new Error("Invalid format " + t + ', must be "raw", "hex", "base64"')
        }
        var i = new uu.Cursor(n),
          a = this.read(i);
        return a
      },
      validateXDR: function(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "raw";
        try {
          return this.fromXDR(e, t), !0
        } catch {
          return !1
        }
      }
    },
    Wb = {
      toXDR: function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "raw",
          t = this.constructor.toXDR(this);
        switch (e) {
          case "raw":
            return t;
          case "hex":
            return t.toString("hex");
          case "base64":
            return t.toString("base64");
          default:
            throw new Error("Invalid format " + e + ', must be "raw", "hex", "base64"')
        }
      }
    };

  function Xb(r) {
    (0, ou.default)(r, Hb), (0, Vb.default)(r) && (0, ou.default)(r.prototype, Wb)
  }
  Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.Int = void 0;
  var zb = gt,
    fu = cu(zb),
    Yb = D,
    Kb = cu(Yb);

  function cu(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }
  var Or = se.Int = {
    read: function(e) {
      return e.readInt32BE()
    },
    write: function(e, t) {
      if (!(0, fu.default)(e)) throw new Error("XDR Write Error: not a number");
      if (Math.floor(e) !== e) throw new Error("XDR Write Error: not an integer");
      t.writeInt32BE(e)
    },
    isValid: function(e) {
      return !(0, fu.default)(e) || Math.floor(e) !== e ? !1 : e >= Or.MIN_VALUE && e <= Or.MAX_VALUE
    }
  };
  Or.MAX_VALUE = Math.pow(2, 31) - 1, Or.MIN_VALUE = -Math.pow(2, 31), (0, Kb.default)(Or);
  var Rt = {};

  function Zb(r) {
    throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
  }
  var lu = {
    exports: {}
  };
  (function(r) {
    /**
     * @license Long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
     * Released under the Apache License, Version 2.0
     * see: https://github.com/dcodeIO/Long.js for details
     */
    (function(e, t) {
      typeof Zb == "function" && r && r.exports ? r.exports = t() : (e.dcodeIO = e.dcodeIO || {}).Long = t()
    })(U, function() {
      function e(l, s, h) {
        this.low = l | 0, this.high = s | 0, this.unsigned = !!h
      }
      e.__isLong__, Object.defineProperty(e.prototype, "__isLong__", {
        value: !0,
        enumerable: !1,
        configurable: !1
      }), e.isLong = function(s) {
        return (s && s.__isLong__) === !0
      };
      var t = {},
        n = {};
      e.fromInt = function(s, h) {
        var y, w;
        return h ? (s = s >>> 0, 0 <= s && s < 256 && (w = n[s], w) ? w : (y = new e(s, (s | 0) < 0 ? -1 : 0, !0), 0 <= s && s < 256 && (n[s] = y), y)) : (s = s | 0, -128 <= s && s < 128 && (w = t[s], w) ? w : (y = new e(s, s < 0 ? -1 : 0, !1), -128 <= s && s < 128 && (t[s] = y), y))
      }, e.fromNumber = function(s, h) {
        return h = !!h, isNaN(s) || !isFinite(s) ? e.ZERO : !h && s <= -f ? e.MIN_VALUE : !h && s + 1 >= f ? e.MAX_VALUE : h && s >= u ? e.MAX_UNSIGNED_VALUE : s < 0 ? e.fromNumber(-s, h).negate() : new e(s % o | 0, s / o | 0, h)
      }, e.fromBits = function(s, h, y) {
        return new e(s, h, y)
      }, e.fromString = function(s, h, y) {
        if (s.length === 0) throw Error("number format error: empty string");
        if (s === "NaN" || s === "Infinity" || s === "+Infinity" || s === "-Infinity") return e.ZERO;
        if (typeof h == "number" && (y = h, h = !1), y = y || 10, y < 2 || 36 < y) throw Error("radix out of range: " + y);
        var w;
        if ((w = s.indexOf("-")) > 0) throw Error('number format error: interior "-" character: ' + s);
        if (w === 0) return e.fromString(s.substring(1), h, y).negate();
        for (var S = e.fromNumber(Math.pow(y, 8)), O = e.ZERO, b = 0; b < s.length; b += 8) {
          var E = Math.min(8, s.length - b),
            d = parseInt(s.substring(b, b + E), y);
          if (E < 8) {
            var I = e.fromNumber(Math.pow(y, E));
            O = O.multiply(I).add(e.fromNumber(d))
          } else O = O.multiply(S), O = O.add(e.fromNumber(d))
        }
        return O.unsigned = h, O
      }, e.fromValue = function(s) {
        return s instanceof e ? s : typeof s == "number" ? e.fromNumber(s) : typeof s == "string" ? e.fromString(s) : new e(s.low, s.high, s.unsigned)
      };
      var i = 65536,
        a = 1 << 24,
        o = i * i,
        u = o * o,
        f = u / 2,
        c = e.fromInt(a);
      return e.ZERO = e.fromInt(0), e.UZERO = e.fromInt(0, !0), e.ONE = e.fromInt(1), e.UONE = e.fromInt(1, !0), e.NEG_ONE = e.fromInt(-1), e.MAX_VALUE = e.fromBits(-1, 2147483647, !1), e.MAX_UNSIGNED_VALUE = e.fromBits(-1, -1, !0), e.MIN_VALUE = e.fromBits(0, -2147483648, !1), e.prototype.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low
      }, e.prototype.toNumber = function() {
        return this.unsigned ? (this.high >>> 0) * o + (this.low >>> 0) : this.high * o + (this.low >>> 0)
      }, e.prototype.toString = function(s) {
        if (s = s || 10, s < 2 || 36 < s) throw RangeError("radix out of range: " + s);
        if (this.isZero()) return "0";
        var h;
        if (this.isNegative())
          if (this.equals(e.MIN_VALUE)) {
            var y = e.fromNumber(s),
              w = this.divide(y);
            return h = w.multiply(y).subtract(this), w.toString(s) + h.toInt().toString(s)
          } else return "-" + this.negate().toString(s);
        var S = e.fromNumber(Math.pow(s, 6), this.unsigned);
        h = this;
        for (var O = "";;) {
          var b = h.divide(S),
            E = h.subtract(b.multiply(S)).toInt() >>> 0,
            d = E.toString(s);
          if (h = b, h.isZero()) return d + O;
          for (; d.length < 6;) d = "0" + d;
          O = "" + d + O
        }
      }, e.prototype.getHighBits = function() {
        return this.high
      }, e.prototype.getHighBitsUnsigned = function() {
        return this.high >>> 0
      }, e.prototype.getLowBits = function() {
        return this.low
      }, e.prototype.getLowBitsUnsigned = function() {
        return this.low >>> 0
      }, e.prototype.getNumBitsAbs = function() {
        if (this.isNegative()) return this.equals(e.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
        for (var s = this.high != 0 ? this.high : this.low, h = 31; h > 0 && !(s & 1 << h); h--);
        return this.high != 0 ? h + 33 : h + 1
      }, e.prototype.isZero = function() {
        return this.high === 0 && this.low === 0
      }, e.prototype.isNegative = function() {
        return !this.unsigned && this.high < 0
      }, e.prototype.isPositive = function() {
        return this.unsigned || this.high >= 0
      }, e.prototype.isOdd = function() {
        return (this.low & 1) === 1
      }, e.prototype.isEven = function() {
        return (this.low & 1) === 0
      }, e.prototype.equals = function(s) {
        return e.isLong(s) || (s = e.fromValue(s)), this.unsigned !== s.unsigned && this.high >>> 31 === 1 && s.high >>> 31 === 1 ? !1 : this.high === s.high && this.low === s.low
      }, e.eq = e.prototype.equals, e.prototype.notEquals = function(s) {
        return !this.equals(s)
      }, e.neq = e.prototype.notEquals, e.prototype.lessThan = function(s) {
        return this.compare(s) < 0
      }, e.prototype.lt = e.prototype.lessThan, e.prototype.lessThanOrEqual = function(s) {
        return this.compare(s) <= 0
      }, e.prototype.lte = e.prototype.lessThanOrEqual, e.prototype.greaterThan = function(s) {
        return this.compare(s) > 0
      }, e.prototype.gt = e.prototype.greaterThan, e.prototype.greaterThanOrEqual = function(s) {
        return this.compare(s) >= 0
      }, e.prototype.gte = e.prototype.greaterThanOrEqual, e.prototype.compare = function(s) {
        if (e.isLong(s) || (s = e.fromValue(s)), this.equals(s)) return 0;
        var h = this.isNegative(),
          y = s.isNegative();
        return h && !y ? -1 : !h && y ? 1 : this.unsigned ? s.high >>> 0 > this.high >>> 0 || s.high === this.high && s.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.subtract(s).isNegative() ? -1 : 1
      }, e.prototype.negate = function() {
        return !this.unsigned && this.equals(e.MIN_VALUE) ? e.MIN_VALUE : this.not().add(e.ONE)
      }, e.prototype.neg = e.prototype.negate, e.prototype.add = function(s) {
        e.isLong(s) || (s = e.fromValue(s));
        var h = this.high >>> 16,
          y = this.high & 65535,
          w = this.low >>> 16,
          S = this.low & 65535,
          O = s.high >>> 16,
          b = s.high & 65535,
          E = s.low >>> 16,
          d = s.low & 65535,
          I = 0,
          T = 0,
          F = 0,
          m = 0;
        return m += S + d, F += m >>> 16, m &= 65535, F += w + E, T += F >>> 16, F &= 65535, T += y + b, I += T >>> 16, T &= 65535, I += h + O, I &= 65535, e.fromBits(F << 16 | m, I << 16 | T, this.unsigned)
      }, e.prototype.subtract = function(s) {
        return e.isLong(s) || (s = e.fromValue(s)), this.add(s.negate())
      }, e.prototype.sub = e.prototype.subtract, e.prototype.multiply = function(s) {
        if (this.isZero() || (e.isLong(s) || (s = e.fromValue(s)), s.isZero())) return e.ZERO;
        if (this.equals(e.MIN_VALUE)) return s.isOdd() ? e.MIN_VALUE : e.ZERO;
        if (s.equals(e.MIN_VALUE)) return this.isOdd() ? e.MIN_VALUE : e.ZERO;
        if (this.isNegative()) return s.isNegative() ? this.negate().multiply(s.negate()) : this.negate().multiply(s).negate();
        if (s.isNegative()) return this.multiply(s.negate()).negate();
        if (this.lessThan(c) && s.lessThan(c)) return e.fromNumber(this.toNumber() * s.toNumber(), this.unsigned);
        var h = this.high >>> 16,
          y = this.high & 65535,
          w = this.low >>> 16,
          S = this.low & 65535,
          O = s.high >>> 16,
          b = s.high & 65535,
          E = s.low >>> 16,
          d = s.low & 65535,
          I = 0,
          T = 0,
          F = 0,
          m = 0;
        return m += S * d, F += m >>> 16, m &= 65535, F += w * d, T += F >>> 16, F &= 65535, F += S * E, T += F >>> 16, F &= 65535, T += y * d, I += T >>> 16, T &= 65535, T += w * E, I += T >>> 16, T &= 65535, T += S * b, I += T >>> 16, T &= 65535, I += h * d + y * E + w * b + S * O, I &= 65535, e.fromBits(F << 16 | m, I << 16 | T, this.unsigned)
      }, e.prototype.mul = e.prototype.multiply, e.prototype.divide = function(s) {
        if (e.isLong(s) || (s = e.fromValue(s)), s.isZero()) throw new Error("division by zero");
        if (this.isZero()) return this.unsigned ? e.UZERO : e.ZERO;
        var h, y, w;
        if (this.equals(e.MIN_VALUE)) {
          if (s.equals(e.ONE) || s.equals(e.NEG_ONE)) return e.MIN_VALUE;
          if (s.equals(e.MIN_VALUE)) return e.ONE;
          var S = this.shiftRight(1);
          return h = S.divide(s).shiftLeft(1), h.equals(e.ZERO) ? s.isNegative() ? e.ONE : e.NEG_ONE : (y = this.subtract(s.multiply(h)), w = h.add(y.divide(s)), w)
        } else if (s.equals(e.MIN_VALUE)) return this.unsigned ? e.UZERO : e.ZERO;
        if (this.isNegative()) return s.isNegative() ? this.negate().divide(s.negate()) : this.negate().divide(s).negate();
        if (s.isNegative()) return this.divide(s.negate()).negate();
        for (w = e.ZERO, y = this; y.greaterThanOrEqual(s);) {
          h = Math.max(1, Math.floor(y.toNumber() / s.toNumber()));
          for (var O = Math.ceil(Math.log(h) / Math.LN2), b = O <= 48 ? 1 : Math.pow(2, O - 48), E = e.fromNumber(h), d = E.multiply(s); d.isNegative() || d.greaterThan(y);) h -= b, E = e.fromNumber(h, this.unsigned), d = E.multiply(s);
          E.isZero() && (E = e.ONE), w = w.add(E), y = y.subtract(d)
        }
        return w
      }, e.prototype.div = e.prototype.divide, e.prototype.modulo = function(s) {
        return e.isLong(s) || (s = e.fromValue(s)), this.subtract(this.divide(s).multiply(s))
      }, e.prototype.mod = e.prototype.modulo, e.prototype.not = function() {
        return e.fromBits(~this.low, ~this.high, this.unsigned)
      }, e.prototype.and = function(s) {
        return e.isLong(s) || (s = e.fromValue(s)), e.fromBits(this.low & s.low, this.high & s.high, this.unsigned)
      }, e.prototype.or = function(s) {
        return e.isLong(s) || (s = e.fromValue(s)), e.fromBits(this.low | s.low, this.high | s.high, this.unsigned)
      }, e.prototype.xor = function(s) {
        return e.isLong(s) || (s = e.fromValue(s)), e.fromBits(this.low ^ s.low, this.high ^ s.high, this.unsigned)
      }, e.prototype.shiftLeft = function(s) {
        return e.isLong(s) && (s = s.toInt()), (s &= 63) === 0 ? this : s < 32 ? e.fromBits(this.low << s, this.high << s | this.low >>> 32 - s, this.unsigned) : e.fromBits(0, this.low << s - 32, this.unsigned)
      }, e.prototype.shl = e.prototype.shiftLeft, e.prototype.shiftRight = function(s) {
        return e.isLong(s) && (s = s.toInt()), (s &= 63) === 0 ? this : s < 32 ? e.fromBits(this.low >>> s | this.high << 32 - s, this.high >> s, this.unsigned) : e.fromBits(this.high >> s - 32, this.high >= 0 ? 0 : -1, this.unsigned)
      }, e.prototype.shr = e.prototype.shiftRight, e.prototype.shiftRightUnsigned = function(s) {
        if (e.isLong(s) && (s = s.toInt()), s &= 63, s === 0) return this;
        var h = this.high;
        if (s < 32) {
          var y = this.low;
          return e.fromBits(y >>> s | h << 32 - s, h >>> s, this.unsigned)
        } else return s === 32 ? e.fromBits(h, 0, this.unsigned) : e.fromBits(h >>> s - 32, 0, this.unsigned)
      }, e.prototype.shru = e.prototype.shiftRightUnsigned, e.prototype.toSigned = function() {
        return this.unsigned ? new e(this.low, this.high, !1) : this
      }, e.prototype.toUnsigned = function() {
        return this.unsigned ? this : new e(this.low, this.high, !0)
      }, e
    })
  })(lu);
  var hu = lu.exports;
  Object.defineProperty(Rt, "__esModule", {
    value: !0
  }), Rt.Hyper = void 0;
  var Jb = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    du = function r(e, t, n) {
      e === null && (e = Function.prototype);
      var i = Object.getOwnPropertyDescriptor(e, t);
      if (i === void 0) {
        var a = Object.getPrototypeOf(e);
        return a === null ? void 0 : r(a, t, n)
      } else {
        if ("value" in i) return i.value;
        var o = i.get;
        return o === void 0 ? void 0 : o.call(n)
      }
    },
    Qb = hu,
    Ir = pu(Qb),
    e1 = D,
    r1 = pu(e1);

  function pu(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function t1(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function n1(r, e) {
    if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : r
  }

  function i1(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    r.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(r, e) : r.__proto__ = e)
  }
  var xr = Rt.Hyper = function(r) {
    i1(e, r), Jb(e, null, [{
      key: "read",
      value: function(n) {
        var i = n.readInt32BE(),
          a = n.readInt32BE();
        return this.fromBits(a, i)
      }
    }, {
      key: "write",
      value: function(n, i) {
        if (!(n instanceof this)) throw new Error("XDR Write Error: " + n + " is not a Hyper");
        i.writeInt32BE(n.high), i.writeInt32BE(n.low)
      }
    }, {
      key: "fromString",
      value: function(n) {
        if (!/^-?\d+$/.test(n)) throw new Error("Invalid hyper string: " + n);
        var i = du(e.__proto__ || Object.getPrototypeOf(e), "fromString", this).call(this, n, !1);
        return new this(i.low, i.high)
      }
    }, {
      key: "fromBits",
      value: function(n, i) {
        var a = du(e.__proto__ || Object.getPrototypeOf(e), "fromBits", this).call(this, n, i, !1);
        return new this(a.low, a.high)
      }
    }, {
      key: "isValid",
      value: function(n) {
        return n instanceof this
      }
    }]);

    function e(t, n) {
      return t1(this, e), n1(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, !1))
    }
    return e
  }(Ir.default);
  (0, r1.default)(xr), xr.MAX_VALUE = new xr(Ir.default.MAX_VALUE.low, Ir.default.MAX_VALUE.high), xr.MIN_VALUE = new xr(Ir.default.MIN_VALUE.low, Ir.default.MIN_VALUE.high);
  var Ce = {};
  Object.defineProperty(Ce, "__esModule", {
    value: !0
  }), Ce.UnsignedInt = void 0;
  var a1 = gt,
    yu = gu(a1),
    o1 = D,
    u1 = gu(o1);

  function gu(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }
  var Pr = Ce.UnsignedInt = {
    read: function(e) {
      return e.readUInt32BE()
    },
    write: function(e, t) {
      if (!(0, yu.default)(e)) throw new Error("XDR Write Error: not a number");
      if (Math.floor(e) !== e) throw new Error("XDR Write Error: not an integer");
      if (e < 0) throw new Error("XDR Write Error: negative number " + e);
      t.writeUInt32BE(e)
    },
    isValid: function(e) {
      return !(0, yu.default)(e) || Math.floor(e) !== e ? !1 : e >= Pr.MIN_VALUE && e <= Pr.MAX_VALUE
    }
  };
  Pr.MAX_VALUE = Math.pow(2, 32) - 1, Pr.MIN_VALUE = 0, (0, u1.default)(Pr);
  var Ft = {};
  Object.defineProperty(Ft, "__esModule", {
    value: !0
  }), Ft.UnsignedHyper = void 0;
  var s1 = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    vu = function r(e, t, n) {
      e === null && (e = Function.prototype);
      var i = Object.getOwnPropertyDescriptor(e, t);
      if (i === void 0) {
        var a = Object.getPrototypeOf(e);
        return a === null ? void 0 : r(a, t, n)
      } else {
        if ("value" in i) return i.value;
        var o = i.get;
        return o === void 0 ? void 0 : o.call(n)
      }
    },
    f1 = hu,
    Tr = _u(f1),
    c1 = D,
    l1 = _u(c1);

  function _u(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function h1(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function d1(r, e) {
    if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : r
  }

  function p1(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    r.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(r, e) : r.__proto__ = e)
  }
  var Rr = Ft.UnsignedHyper = function(r) {
    p1(e, r), s1(e, null, [{
      key: "read",
      value: function(n) {
        var i = n.readInt32BE(),
          a = n.readInt32BE();
        return this.fromBits(a, i)
      }
    }, {
      key: "write",
      value: function(n, i) {
        if (!(n instanceof this)) throw new Error("XDR Write Error: " + n + " is not an UnsignedHyper");
        i.writeInt32BE(n.high), i.writeInt32BE(n.low)
      }
    }, {
      key: "fromString",
      value: function(n) {
        if (!/^\d+$/.test(n)) throw new Error("Invalid hyper string: " + n);
        var i = vu(e.__proto__ || Object.getPrototypeOf(e), "fromString", this).call(this, n, !0);
        return new this(i.low, i.high)
      }
    }, {
      key: "fromBits",
      value: function(n, i) {
        var a = vu(e.__proto__ || Object.getPrototypeOf(e), "fromBits", this).call(this, n, i, !0);
        return new this(a.low, a.high)
      }
    }, {
      key: "isValid",
      value: function(n) {
        return n instanceof this
      }
    }]);

    function e(t, n) {
      return h1(this, e), d1(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, !0))
    }
    return e
  }(Tr.default);
  (0, l1.default)(Rr), Rr.MAX_VALUE = new Rr(Tr.default.MAX_UNSIGNED_VALUE.low, Tr.default.MAX_UNSIGNED_VALUE.high), Rr.MIN_VALUE = new Rr(Tr.default.MIN_VALUE.low, Tr.default.MIN_VALUE.high);
  var Mt = {};
  Object.defineProperty(Mt, "__esModule", {
    value: !0
  }), Mt.Float = void 0;
  var y1 = gt,
    mu = wu(y1),
    g1 = D,
    v1 = wu(g1);

  function wu(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }
  var _1 = Mt.Float = {
    read: function(e) {
      return e.readFloatBE()
    },
    write: function(e, t) {
      if (!(0, mu.default)(e)) throw new Error("XDR Write Error: not a number");
      t.writeFloatBE(e)
    },
    isValid: function(e) {
      return (0, mu.default)(e)
    }
  };
  (0, v1.default)(_1);
  var Dt = {};
  Object.defineProperty(Dt, "__esModule", {
    value: !0
  }), Dt.Double = void 0;
  var m1 = gt,
    bu = $u(m1),
    w1 = D,
    b1 = $u(w1);

  function $u(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }
  var $1 = Dt.Double = {
    read: function(e) {
      return e.readDoubleBE()
    },
    write: function(e, t) {
      if (!(0, bu.default)(e)) throw new Error("XDR Write Error: not a number");
      t.writeDoubleBE(e)
    },
    isValid: function(e) {
      return (0, bu.default)(e)
    }
  };
  (0, b1.default)($1);
  var Ct = {};
  Object.defineProperty(Ct, "__esModule", {
    value: !0
  }), Ct.Quadruple = void 0;
  var E1 = D,
    A1 = S1(E1);

  function S1(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }
  var O1 = Ct.Quadruple = {
    read: function() {
      throw new Error("XDR Read Error: quadruple not supported")
    },
    write: function() {
      throw new Error("XDR Write Error: quadruple not supported")
    },
    isValid: function() {
      return !1
    }
  };
  (0, A1.default)(O1);
  var Fr = {},
    I1 = ge,
    x1 = ve,
    P1 = "[object Boolean]";

  function T1(r) {
    return r === !0 || r === !1 || x1(r) && I1(r) == P1
  }
  var R1 = T1;
  Object.defineProperty(Fr, "__esModule", {
    value: !0
  }), Fr.Bool = void 0;
  var F1 = R1,
    M1 = Au(F1),
    Eu = se,
    D1 = D,
    C1 = Au(D1);

  function Au(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }
  var N1 = Fr.Bool = {
    read: function(e) {
      var t = Eu.Int.read(e);
      switch (t) {
        case 0:
          return !1;
        case 1:
          return !0;
        default:
          throw new Error("XDR Read Error: Got " + t + " when trying to read a bool")
      }
    },
    write: function(e, t) {
      var n = e ? 1 : 0;
      return Eu.Int.write(n, t)
    },
    isValid: function(e) {
      return (0, M1.default)(e)
    }
  };
  (0, C1.default)(N1);
  var Nt = {},
    B1 = ge,
    U1 = V,
    q1 = ve,
    L1 = "[object String]";

  function k1(r) {
    return typeof r == "string" || !U1(r) && q1(r) && B1(r) == L1
  }
  var Su = k1;
  Object.defineProperty(Nt, "__esModule", {
    value: !0
  }), Nt.String = void 0;
  var j1 = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    V1 = Su,
    Ou = ci(V1),
    G1 = V,
    H1 = ci(G1),
    Iu = se,
    W1 = Ce,
    xu = Me,
    X1 = D,
    z1 = ci(X1);

  function ci(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function Y1(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var K1 = Nt.String = function() {
    function r() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : W1.UnsignedInt.MAX_VALUE;
      Y1(this, r), this._maxLength = e
    }
    return j1(r, [{
      key: "read",
      value: function(t) {
        var n = Iu.Int.read(t);
        if (n > this._maxLength) throw new Error("XDR Read Error: Saw " + n + " length String," + ("max allowed is " + this._maxLength));
        var i = (0, xu.calculatePadding)(n),
          a = t.slice(n);
        return (0, xu.slicePadding)(t, i), a.buffer()
      }
    }, {
      key: "readString",
      value: function(t) {
        return this.read(t).toString("utf8")
      }
    }, {
      key: "write",
      value: function(t, n) {
        if (t.length > this._maxLength) throw new Error("XDR Write Error: Got " + t.length + " bytes," + ("max allows is " + this._maxLength));
        var i = void 0;
        (0, Ou.default)(t) ? i = p.from(t, "utf8"): i = p.from(t), Iu.Int.write(i.length, n), n.writeBufferPadded(i)
      }
    }, {
      key: "isValid",
      value: function(t) {
        var n = void 0;
        if ((0, Ou.default)(t)) n = p.from(t, "utf8");
        else if ((0, H1.default)(t) || p.isBuffer(t)) n = p.from(t);
        else return !1;
        return n.length <= this._maxLength
      }
    }]), r
  }();
  (0, z1.default)(K1.prototype);
  var Bt = {};
  Object.defineProperty(Bt, "__esModule", {
    value: !0
  }), Bt.Opaque = void 0;
  var Z1 = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    Pu = Me,
    J1 = D,
    Q1 = e$(J1);

  function e$(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function r$(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var t$ = Bt.Opaque = function() {
    function r(e) {
      r$(this, r), this._length = e, this._padding = (0, Pu.calculatePadding)(e)
    }
    return Z1(r, [{
      key: "read",
      value: function(t) {
        var n = t.slice(this._length);
        return (0, Pu.slicePadding)(t, this._padding), n.buffer()
      }
    }, {
      key: "write",
      value: function(t, n) {
        if (t.length !== this._length) throw new Error("XDR Write Error: Got " + t.length + " bytes, expected " + this._length);
        n.writeBufferPadded(t)
      }
    }, {
      key: "isValid",
      value: function(t) {
        return p.isBuffer(t) && t.length === this._length
      }
    }]), r
  }();
  (0, Q1.default)(t$.prototype);
  var Ut = {};
  Object.defineProperty(Ut, "__esModule", {
    value: !0
  }), Ut.VarOpaque = void 0;
  var n$ = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    Tu = se,
    i$ = Ce,
    Ru = Me,
    a$ = D,
    o$ = u$(a$);

  function u$(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function s$(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var f$ = Ut.VarOpaque = function() {
    function r() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : i$.UnsignedInt.MAX_VALUE;
      s$(this, r), this._maxLength = e
    }
    return n$(r, [{
      key: "read",
      value: function(t) {
        var n = Tu.Int.read(t);
        if (n > this._maxLength) throw new Error("XDR Read Error: Saw " + n + " length VarOpaque," + ("max allowed is " + this._maxLength));
        var i = (0, Ru.calculatePadding)(n),
          a = t.slice(n);
        return (0, Ru.slicePadding)(t, i), a.buffer()
      }
    }, {
      key: "write",
      value: function(t, n) {
        if (t.length > this._maxLength) throw new Error("XDR Write Error: Got " + t.length + " bytes," + ("max allows is " + this._maxLength));
        Tu.Int.write(t.length, n), n.writeBufferPadded(t)
      }
    }, {
      key: "isValid",
      value: function(t) {
        return p.isBuffer(t) && t.length <= this._maxLength
      }
    }]), r
  }();
  (0, o$.default)(f$.prototype);
  var qt = {};

  function c$(r, e) {
    for (var t = -1, n = r == null ? 0 : r.length; ++t < n && e(r[t], t, r) !== !1;);
    return r
  }
  var l$ = c$,
    h$ = _t;

  function d$(r) {
    return typeof r == "function" ? r : h$
  }
  var Fu = d$,
    p$ = l$,
    y$ = Yn,
    g$ = Fu,
    v$ = V;

  function _$(r, e) {
    var t = v$(r) ? p$ : y$;
    return t(r, g$(e))
  }
  var m$ = _$,
    nr = m$,
    w$ = /\s/;

  function b$(r) {
    for (var e = r.length; e-- && w$.test(r.charAt(e)););
    return e
  }
  var $$ = b$,
    E$ = $$,
    A$ = /^\s+/;

  function S$(r) {
    return r && r.slice(0, E$(r) + 1).replace(A$, "")
  }
  var O$ = S$,
    I$ = O$,
    Mu = Ze,
    x$ = Pt,
    Du = 0 / 0,
    P$ = /^[-+]0x[0-9a-f]+$/i,
    T$ = /^0b[01]+$/i,
    R$ = /^0o[0-7]+$/i,
    F$ = parseInt;

  function M$(r) {
    if (typeof r == "number") return r;
    if (x$(r)) return Du;
    if (Mu(r)) {
      var e = typeof r.valueOf == "function" ? r.valueOf() : r;
      r = Mu(e) ? e + "" : e
    }
    if (typeof r != "string") return r === 0 ? r : +r;
    r = I$(r);
    var t = T$.test(r);
    return t || R$.test(r) ? F$(r.slice(2), t ? 2 : 8) : P$.test(r) ? Du : +r
  }
  var D$ = M$,
    C$ = D$,
    Cu = 1 / 0,
    N$ = 17976931348623157e292;

  function B$(r) {
    if (!r) return r === 0 ? r : 0;
    if (r = C$(r), r === Cu || r === -Cu) {
      var e = r < 0 ? -1 : 1;
      return e * N$
    }
    return r === r ? r : 0
  }
  var U$ = B$,
    q$ = U$;

  function L$(r) {
    var e = q$(r),
      t = e % 1;
    return e === e ? t ? e - t : e : 0
  }
  var k$ = L$,
    j$ = go,
    V$ = Fu,
    G$ = k$,
    H$ = 9007199254740991,
    li = 4294967295,
    W$ = Math.min;

  function X$(r, e) {
    if (r = G$(r), r < 1 || r > H$) return [];
    var t = li,
      n = W$(r, li);
    e = V$(e), r -= li;
    for (var i = j$(n, e); ++t < r;) e(t);
    return i
  }
  var Nu = X$;
  Object.defineProperty(qt, "__esModule", {
    value: !0
  }), qt.Array = void 0;
  var z$ = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    Y$ = si,
    K$ = Mr(Y$),
    Z$ = nr,
    J$ = Mr(Z$),
    Q$ = Nu,
    eE = Mr(Q$),
    rE = V,
    Bu = Mr(rE),
    tE = D,
    nE = Mr(tE);

  function Mr(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function iE(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var aE = qt.Array = function() {
    function r(e, t) {
      iE(this, r), this._childType = e, this._length = t
    }
    return z$(r, [{
      key: "read",
      value: function(t) {
        var n = this;
        return (0, eE.default)(this._length, function() {
          return n._childType.read(t)
        })
      }
    }, {
      key: "write",
      value: function(t, n) {
        var i = this;
        if (!(0, Bu.default)(t)) throw new Error("XDR Write Error: value is not array");
        if (t.length !== this._length) throw new Error("XDR Write Error: Got array of size " + t.length + "," + ("expected " + this._length));
        (0, J$.default)(t, function(a) {
          return i._childType.write(a, n)
        })
      }
    }, {
      key: "isValid",
      value: function(t) {
        var n = this;
        return !(0, Bu.default)(t) || t.length !== this._length ? !1 : (0, K$.default)(t, function(i) {
          return n._childType.isValid(i)
        })
      }
    }]), r
  }();
  (0, nE.default)(aE.prototype);
  var Lt = {};
  Object.defineProperty(Lt, "__esModule", {
    value: !0
  }), Lt.VarArray = void 0;
  var oE = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    uE = si,
    sE = Dr(uE),
    fE = nr,
    cE = Dr(fE),
    lE = Nu,
    hE = Dr(lE),
    dE = V,
    Uu = Dr(dE),
    pE = Ce,
    qu = se,
    yE = D,
    gE = Dr(yE);

  function Dr(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function vE(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var _E = Lt.VarArray = function() {
    function r(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pE.UnsignedInt.MAX_VALUE;
      vE(this, r), this._childType = e, this._maxLength = t
    }
    return oE(r, [{
      key: "read",
      value: function(t) {
        var n = this,
          i = qu.Int.read(t);
        if (i > this._maxLength) throw new Error("XDR Read Error: Saw " + i + " length VarArray," + ("max allowed is " + this._maxLength));
        return (0, hE.default)(i, function() {
          return n._childType.read(t)
        })
      }
    }, {
      key: "write",
      value: function(t, n) {
        var i = this;
        if (!(0, Uu.default)(t)) throw new Error("XDR Write Error: value is not array");
        if (t.length > this._maxLength) throw new Error("XDR Write Error: Got array of size " + t.length + "," + ("max allowed is " + this._maxLength));
        qu.Int.write(t.length, n), (0, cE.default)(t, function(a) {
          return i._childType.write(a, n)
        })
      }
    }, {
      key: "isValid",
      value: function(t) {
        var n = this;
        return !(0, Uu.default)(t) || t.length > this._maxLength ? !1 : (0, sE.default)(t, function(i) {
          return n._childType.isValid(i)
        })
      }
    }]), r
  }();
  (0, gE.default)(_E.prototype);
  var kt = {};

  function mE(r) {
    return r === null
  }
  var wE = mE;

  function bE(r) {
    return r === void 0
  }
  var Cr = bE;
  Object.defineProperty(kt, "__esModule", {
    value: !0
  }), kt.Option = void 0;
  var $E = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    EE = wE,
    Lu = hi(EE),
    AE = Cr,
    ku = hi(AE),
    ju = Fr,
    SE = D,
    OE = hi(SE);

  function hi(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function IE(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var xE = kt.Option = function() {
    function r(e) {
      IE(this, r), this._childType = e
    }
    return $E(r, [{
      key: "read",
      value: function(t) {
        if (ju.Bool.read(t)) return this._childType.read(t)
      }
    }, {
      key: "write",
      value: function(t, n) {
        var i = !((0, Lu.default)(t) || (0, ku.default)(t));
        ju.Bool.write(i, n), i && this._childType.write(t, n)
      }
    }, {
      key: "isValid",
      value: function(t) {
        return (0, Lu.default)(t) || (0, ku.default)(t) ? !0 : this._childType.isValid(t)
      }
    }]), r
  }();
  (0, OE.default)(xE.prototype);
  var Nr = {};
  Object.defineProperty(Nr, "__esModule", {
    value: !0
  }), Nr.Void = void 0;
  var PE = Cr,
    Vu = Gu(PE),
    TE = D,
    RE = Gu(TE);

  function Gu(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }
  var FE = Nr.Void = {
    read: function() {},
    write: function(e) {
      if (!(0, Vu.default)(e)) throw new Error("XDR Write Error: trying to write value to a void slot")
    },
    isValid: function(e) {
      return (0, Vu.default)(e)
    }
  };
  (0, RE.default)(FE);
  var jt = {},
    ME = ui;

  function DE(r, e) {
    return ME(e, function(t) {
      return r[t]
    })
  }
  var CE = DE,
    NE = CE,
    BE = $t;

  function UE(r) {
    return r == null ? [] : NE(r, BE(r))
  }
  var qE = UE;
  Object.defineProperty(jt, "__esModule", {
    value: !0
  }), jt.Enum = void 0;
  var LE = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    kE = nr,
    jE = di(kE),
    VE = qE,
    GE = di(VE),
    Hu = se,
    HE = D,
    WE = di(HE);

  function di(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function XE(r, e) {
    if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : r
  }

  function zE(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    r.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(r, e) : r.__proto__ = e)
  }

  function Wu(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var YE = jt.Enum = function() {
    function r(e, t) {
      Wu(this, r), this.name = e, this.value = t
    }
    return LE(r, null, [{
      key: "read",
      value: function(t) {
        var n = Hu.Int.read(t);
        if (!this._byValue.has(n)) throw new Error("XDR Read Error: Unknown " + this.enumName + " member for value " + n);
        return this._byValue.get(n)
      }
    }, {
      key: "write",
      value: function(t, n) {
        if (!(t instanceof this)) throw new Error("XDR Write Error: Unknown " + t + " is not a " + this.enumName);
        Hu.Int.write(t.value, n)
      }
    }, {
      key: "isValid",
      value: function(t) {
        return t instanceof this
      }
    }, {
      key: "members",
      value: function() {
        return this._members
      }
    }, {
      key: "values",
      value: function() {
        return (0, GE.default)(this._members)
      }
    }, {
      key: "fromName",
      value: function(t) {
        var n = this._members[t];
        if (!n) throw new Error(t + " is not a member of " + this.enumName);
        return n
      }
    }, {
      key: "fromValue",
      value: function(t) {
        var n = this._byValue.get(t);
        if (!n) throw new Error(t + " is not a value of any member of " + this.enumName);
        return n
      }
    }, {
      key: "create",
      value: function(t, n, i) {
        var a = function(o) {
          zE(u, o);

          function u() {
            return Wu(this, u), XE(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments))
          }
          return u
        }(r);
        return a.enumName = n, t.results[n] = a, a._members = {}, a._byValue = new Map, (0, jE.default)(i, function(o, u) {
          var f = new a(u, o);
          a._members[u] = f, a._byValue.set(o, f), a[u] = function() {
            return f
          }
        }), a
      }
    }]), r
  }();
  (0, WE.default)(YE);
  var Vt = {},
    KE = Yn,
    ZE = Sr;

  function JE(r, e) {
    var t = -1,
      n = ZE(r) ? Array(r.length) : [];
    return KE(r, function(i, a, o) {
      n[++t] = e(i, a, o)
    }), n
  }
  var QE = JE,
    eA = ui,
    rA = au,
    tA = QE,
    nA = V;

  function iA(r, e) {
    var t = nA(r) ? eA : tA;
    return t(r, rA(e))
  }
  var aA = iA;

  function oA(r) {
    for (var e = -1, t = r == null ? 0 : r.length, n = {}; ++e < t;) {
      var i = r[e];
      n[i[0]] = i[1]
    }
    return n
  }
  var uA = oA,
    Br = {};
  Object.defineProperty(Br, "__esModule", {
    value: !0
  });
  var sA = function() {
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }
    return function(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e
    }
  }();

  function fA(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Br.Reference = function() {
    function r() {
      fA(this, r)
    }
    return sA(r, [{
      key: "resolve",
      value: function() {
        throw new Error("implement resolve in child class")
      }
    }]), r
  }(), Object.defineProperty(Vt, "__esModule", {
    value: !0
  }), Vt.Struct = void 0;
  var Gt = function() {
      function r(e, t) {
        var n = [],
          i = !0,
          a = !1,
          o = void 0;
        try {
          for (var u = e[Symbol.iterator](), f; !(i = (f = u.next()).done) && (n.push(f.value), !(t && n.length === t)); i = !0);
        } catch (c) {
          a = !0, o = c
        } finally {
          try {
            !i && u.return && u.return()
          } finally {
            if (a) throw o
          }
        }
        return n
      }
      return function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return r(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }(),
    cA = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    lA = nr,
    Xu = Ur(lA),
    hA = aA,
    dA = Ur(hA),
    pA = Cr,
    yA = Ur(pA),
    gA = uA,
    vA = Ur(gA),
    _A = Br,
    mA = D,
    wA = Ur(mA);

  function Ur(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function bA(r, e) {
    if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : r
  }

  function $A(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    r.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(r, e) : r.__proto__ = e)
  }

  function zu(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var EA = Vt.Struct = function() {
    function r(e) {
      zu(this, r), this._attributes = e || {}
    }
    return cA(r, null, [{
      key: "read",
      value: function(t) {
        var n = (0, dA.default)(this._fields, function(i) {
          var a = Gt(i, 2),
            o = a[0],
            u = a[1],
            f = u.read(t);
          return [o, f]
        });
        return new this((0, vA.default)(n))
      }
    }, {
      key: "write",
      value: function(t, n) {
        if (!(t instanceof this)) throw new Error("XDR Write Error: " + t + " is not a " + this.structName);
        (0, Xu.default)(this._fields, function(i) {
          var a = Gt(i, 2),
            o = a[0],
            u = a[1],
            f = t._attributes[o];
          u.write(f, n)
        })
      }
    }, {
      key: "isValid",
      value: function(t) {
        return t instanceof this
      }
    }, {
      key: "create",
      value: function(t, n, i) {
        var a = function(o) {
          $A(u, o);

          function u() {
            return zu(this, u), bA(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments))
          }
          return u
        }(r);
        return a.structName = n, t.results[n] = a, a._fields = i.map(function(o) {
          var u = Gt(o, 2),
            f = u[0],
            c = u[1];
          return c instanceof _A.Reference && (c = c.resolve(t)), [f, c]
        }), (0, Xu.default)(a._fields, function(o) {
          var u = Gt(o, 1),
            f = u[0];
          a.prototype[f] = AA(f)
        }), a
      }
    }]), r
  }();
  (0, wA.default)(EA);

  function AA(r) {
    return function(t) {
      return (0, yA.default)(t) || (this._attributes[r] = t), this._attributes[r]
    }
  }
  var Ht = {};
  Object.defineProperty(Ht, "__esModule", {
    value: !0
  }), Ht.Union = void 0;
  var SA = function() {
      function r(e, t) {
        var n = [],
          i = !0,
          a = !1,
          o = void 0;
        try {
          for (var u = e[Symbol.iterator](), f; !(i = (f = u.next()).done) && (n.push(f.value), !(t && n.length === t)); i = !0);
        } catch (c) {
          a = !0, o = c
        } finally {
          try {
            !i && u.return && u.return()
          } finally {
            if (a) throw o
          }
        }
        return n
      }
      return function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return r(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }(),
    OA = function() {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      return function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    }(),
    IA = nr,
    Wt = zt(IA),
    xA = Cr,
    Yu = zt(xA),
    PA = Su,
    Ku = zt(PA),
    Xt = Nr,
    pi = Br,
    TA = D,
    RA = zt(TA);

  function zt(r) {
    return r && r.__esModule ? r : {
      default: r
    }
  }

  function FA(r, e) {
    if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : r
  }

  function MA(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    r.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: r,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(r, e) : r.__proto__ = e)
  }

  function Zu(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var DA = Ht.Union = function() {
    function r(e, t) {
      Zu(this, r), this.set(e, t)
    }
    return OA(r, [{
      key: "set",
      value: function(t, n) {
        (0, Ku.default)(t) && (t = this.constructor._switchOn.fromName(t)), this._switch = t, this._arm = this.constructor.armForSwitch(this._switch), this._armType = this.constructor.armTypeForArm(this._arm), this._value = n
      }
    }, {
      key: "get",
      value: function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._arm;
        if (this._arm !== Xt.Void && this._arm !== t) throw new Error(t + " not set");
        return this._value
      }
    }, {
      key: "switch",
      value: function() {
        return this._switch
      }
    }, {
      key: "arm",
      value: function() {
        return this._arm
      }
    }, {
      key: "armType",
      value: function() {
        return this._armType
      }
    }, {
      key: "value",
      value: function() {
        return this._value
      }
    }], [{
      key: "armForSwitch",
      value: function(t) {
        if (this._switches.has(t)) return this._switches.get(t);
        if (this._defaultArm) return this._defaultArm;
        throw new Error("Bad union switch: " + t)
      }
    }, {
      key: "armTypeForArm",
      value: function(t) {
        return t === Xt.Void ? Xt.Void : this._arms[t]
      }
    }, {
      key: "read",
      value: function(t) {
        var n = this._switchOn.read(t),
          i = this.armForSwitch(n),
          a = this.armTypeForArm(i),
          o = void 0;
        return (0, Yu.default)(a) ? o = i.read(t) : o = a.read(t), new this(n, o)
      }
    }, {
      key: "write",
      value: function(t, n) {
        if (!(t instanceof this)) throw new Error("XDR Write Error: " + t + " is not a " + this.unionName);
        this._switchOn.write(t.switch(), n), t.armType().write(t.value(), n)
      }
    }, {
      key: "isValid",
      value: function(t) {
        return t instanceof this
      }
    }, {
      key: "create",
      value: function(t, n, i) {
        var a = function(u) {
          MA(f, u);

          function f() {
            return Zu(this, f), FA(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments))
          }
          return f
        }(r);
        a.unionName = n, t.results[n] = a, i.switchOn instanceof pi.Reference ? a._switchOn = i.switchOn.resolve(t) : a._switchOn = i.switchOn, a._switches = new Map, a._arms = {}, (0, Wt.default)(i.arms, function(u, f) {
          u instanceof pi.Reference && (u = u.resolve(t)), a._arms[f] = u
        });
        var o = i.defaultArm;
        return o instanceof pi.Reference && (o = o.resolve(t)), a._defaultArm = o, (0, Wt.default)(i.switches, function(u) {
          var f = SA(u, 2),
            c = f[0],
            l = f[1];
          (0, Ku.default)(c) && (c = a._switchOn.fromName(c)), a._switches.set(c, l)
        }), (0, Yu.default)(a._switchOn.values) || (0, Wt.default)(a._switchOn.values(), function(u) {
          a[u.name] = function(f) {
            return new a(u, f)
          }, a.prototype[u.name] = function(c) {
            return this.set(u, c)
          }
        }), (0, Wt.default)(a._arms, function(u, f) {
          u !== Xt.Void && (a.prototype[f] = function() {
            return this.get(f)
          })
        }), a
      }
    }]), r
  }();
  (0, RA.default)(DA),
  function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var e = se;
    Object.keys(e).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return e[d]
        }
      })
    });
    var t = Rt;
    Object.keys(t).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return t[d]
        }
      })
    });
    var n = Ce;
    Object.keys(n).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return n[d]
        }
      })
    });
    var i = Ft;
    Object.keys(i).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return i[d]
        }
      })
    });
    var a = Mt;
    Object.keys(a).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return a[d]
        }
      })
    });
    var o = Dt;
    Object.keys(o).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return o[d]
        }
      })
    });
    var u = Ct;
    Object.keys(u).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return u[d]
        }
      })
    });
    var f = Fr;
    Object.keys(f).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return f[d]
        }
      })
    });
    var c = Nt;
    Object.keys(c).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return c[d]
        }
      })
    });
    var l = Bt;
    Object.keys(l).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return l[d]
        }
      })
    });
    var s = Ut;
    Object.keys(s).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return s[d]
        }
      })
    });
    var h = qt;
    Object.keys(h).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return h[d]
        }
      })
    });
    var y = Lt;
    Object.keys(y).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return y[d]
        }
      })
    });
    var w = kt;
    Object.keys(w).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return w[d]
        }
      })
    });
    var S = Nr;
    Object.keys(S).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return S[d]
        }
      })
    });
    var O = jt;
    Object.keys(O).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return O[d]
        }
      })
    });
    var b = Vt;
    Object.keys(b).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return b[d]
        }
      })
    });
    var E = Ht;
    Object.keys(E).forEach(function(d) {
      d === "default" || d === "__esModule" || Object.defineProperty(r, d, {
        enumerable: !0,
        get: function() {
          return E[d]
        }
      })
    })
  }(Gn);
  var Ju = {};
  (function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var e = function() {
        function m(g, v) {
          for (var A = 0; A < v.length; A++) {
            var x = v[A];
            x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(g, x.key, x)
          }
        }
        return function(g, v, A) {
          return v && m(g.prototype, v), A && m(g, A), g
        }
      }(),
      t = Br;
    Object.keys(t).forEach(function(m) {
      m === "default" || m === "__esModule" || Object.defineProperty(r, m, {
        enumerable: !0,
        get: function() {
          return t[m]
        }
      })
    }), r.config = w;
    var n = Cr,
      i = l(n),
      a = nr,
      o = l(a),
      u = Gn,
      f = c(u);

    function c(m) {
      if (m && m.__esModule) return m;
      var g = {};
      if (m != null)
        for (var v in m) Object.prototype.hasOwnProperty.call(m, v) && (g[v] = m[v]);
      return g.default = m, g
    }

    function l(m) {
      return m && m.__esModule ? m : {
        default: m
      }
    }

    function s(m, g) {
      if (!(m instanceof g)) throw new TypeError("Cannot call a class as a function")
    }

    function h(m, g) {
      if (!m) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return g && (typeof g == "object" || typeof g == "function") ? g : m
    }

    function y(m, g) {
      if (typeof g != "function" && g !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof g);
      m.prototype = Object.create(g && g.prototype, {
        constructor: {
          value: m,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(m, g) : m.__proto__ = g)
    }

    function w(m) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (m) {
        var v = new F(g);
        m(v), v.resolve()
      }
      return g
    }
    var S = function(m) {
        y(g, m);

        function g(v) {
          s(this, g);
          var A = h(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this));
          return A.name = v, A
        }
        return e(g, [{
          key: "resolve",
          value: function(A) {
            var x = A.definitions[this.name];
            return x.resolve(A)
          }
        }]), g
      }(t.Reference),
      O = function(m) {
        y(g, m);

        function g(v, A) {
          var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          s(this, g);
          var M = h(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this));
          return M.childReference = v, M.length = A, M.variable = x, M
        }
        return e(g, [{
          key: "resolve",
          value: function(A) {
            var x = this.childReference,
              M = this.length;
            return x instanceof t.Reference && (x = x.resolve(A)), M instanceof t.Reference && (M = M.resolve(A)), this.variable ? new f.VarArray(x, M) : new f.Array(x, M)
          }
        }]), g
      }(t.Reference),
      b = function(m) {
        y(g, m);

        function g(v) {
          s(this, g);
          var A = h(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this));
          return A.childReference = v, A.name = v.name, A
        }
        return e(g, [{
          key: "resolve",
          value: function(A) {
            var x = this.childReference;
            return x instanceof t.Reference && (x = x.resolve(A)), new f.Option(x)
          }
        }]), g
      }(t.Reference),
      E = function(m) {
        y(g, m);

        function g(v, A) {
          s(this, g);
          var x = h(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this));
          return x.sizedType = v, x.length = A, x
        }
        return e(g, [{
          key: "resolve",
          value: function(A) {
            var x = this.length;
            return x instanceof t.Reference && (x = x.resolve(A)), new this.sizedType(x)
          }
        }]), g
      }(t.Reference),
      d = function() {
        function m(g, v, A) {
          s(this, m), this.constructor = g, this.name = v, this.config = A
        }
        return e(m, [{
          key: "resolve",
          value: function(v) {
            return this.name in v.results ? v.results[this.name] : this.constructor(v, this.name, this.config)
          }
        }]), m
      }();

    function I(m, g, v) {
      return v instanceof t.Reference && (v = v.resolve(m)), m.results[g] = v, v
    }

    function T(m, g, v) {
      return m.results[g] = v, v
    }
    var F = function() {
      function m(g) {
        s(this, m), this._destination = g, this._definitions = {}
      }
      return e(m, [{
        key: "enum",
        value: function(v, A) {
          var x = new d(f.Enum.create, v, A);
          this.define(v, x)
        }
      }, {
        key: "struct",
        value: function(v, A) {
          var x = new d(f.Struct.create, v, A);
          this.define(v, x)
        }
      }, {
        key: "union",
        value: function(v, A) {
          var x = new d(f.Union.create, v, A);
          this.define(v, x)
        }
      }, {
        key: "typedef",
        value: function(v, A) {
          var x = new d(I, v, A);
          this.define(v, x)
        }
      }, {
        key: "const",
        value: function(v, A) {
          var x = new d(T, v, A);
          this.define(v, x)
        }
      }, {
        key: "void",
        value: function() {
          return f.Void
        }
      }, {
        key: "bool",
        value: function() {
          return f.Bool
        }
      }, {
        key: "int",
        value: function() {
          return f.Int
        }
      }, {
        key: "hyper",
        value: function() {
          return f.Hyper
        }
      }, {
        key: "uint",
        value: function() {
          return f.UnsignedInt
        }
      }, {
        key: "uhyper",
        value: function() {
          return f.UnsignedHyper
        }
      }, {
        key: "float",
        value: function() {
          return f.Float
        }
      }, {
        key: "double",
        value: function() {
          return f.Double
        }
      }, {
        key: "quadruple",
        value: function() {
          return f.Quadruple
        }
      }, {
        key: "string",
        value: function(v) {
          return new E(f.String, v)
        }
      }, {
        key: "opaque",
        value: function(v) {
          return new E(f.Opaque, v)
        }
      }, {
        key: "varOpaque",
        value: function(v) {
          return new E(f.VarOpaque, v)
        }
      }, {
        key: "array",
        value: function(v, A) {
          return new O(v, A)
        }
      }, {
        key: "varArray",
        value: function(v, A) {
          return new O(v, A, !0)
        }
      }, {
        key: "option",
        value: function(v) {
          return new b(v)
        }
      }, {
        key: "define",
        value: function(v, A) {
          if ((0, i.default)(this._destination[v])) this._definitions[v] = A;
          else throw new Error("XDRTypes Error:" + v + " is already defined")
        }
      }, {
        key: "lookup",
        value: function(v) {
          return new S(v)
        }
      }, {
        key: "resolve",
        value: function() {
          var v = this;
          (0, o.default)(this._definitions, function(A) {
            A.resolve({
              definitions: v._definitions,
              results: v._destination
            })
          })
        }
      }]), m
    }()
  })(Ju),
  function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var e = Gn;
    Object.keys(e).forEach(function(n) {
      n === "default" || n === "__esModule" || Object.defineProperty(r, n, {
        enumerable: !0,
        get: function() {
          return e[n]
        }
      })
    });
    var t = Ju;
    Object.keys(t).forEach(function(n) {
      n === "default" || n === "__esModule" || Object.defineProperty(r, n, {
        enumerable: !0,
        get: function() {
          return t[n]
        }
      })
    })
  }(ro);
  var yi = (r, e, t) => {
      if (!e.has(r)) throw TypeError("Cannot " + t)
    },
    j = (r, e, t) => (yi(r, e, "read from private field"), t ? t.call(r) : e.get(r)),
    Ne = (r, e, t) => {
      if (e.has(r)) throw TypeError("Cannot add the same private member more than once");
      e instanceof WeakSet ? e.add(r) : e.set(r, t)
    },
    gi = (r, e, t, n) => (yi(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t),
    _e = (r, e, t) => (yi(r, e, "access private method"), t),
    te, ne, qr, vi, Qu, _i, es, Yt, mi, ir, Lr;

  function CA(r) {
    const e = {
        variantId: ce.Uint64.fromString(r.variantId.toString()),
        version: r.version || Math.floor(Date.now() / 1e3),
        items: r.items.map(n => new ce.BundleItem({
          collectionId: ce.Uint64.fromString(n.collectionId.toString()),
          productId: ce.Uint64.fromString(n.productId.toString()),
          variantId: ce.Uint64.fromString(n.variantId.toString()),
          sku: n.sku || "",
          quantity: n.quantity,
          ext: new ce.BundleItemExt(0)
        })),
        ext: new ce.BundleExt(0)
      },
      t = new ce.Bundle(e);
    return ce.BundleEnvelope.envelopeTypeBundle(t).toXDR("base64")
  }
  const ce = ro.config(r => {
    r.enum("EnvelopeType", {
      envelopeTypeBundle: 0
    }), r.typedef("Uint32", r.uint()), r.typedef("Uint64", r.uhyper()), r.union("BundleItemExt", {
      switchOn: r.int(),
      switchName: "v",
      switches: [
        [0, r.void()]
      ],
      arms: {}
    }), r.struct("BundleItem", [
      ["collectionId", r.lookup("Uint64")],
      ["productId", r.lookup("Uint64")],
      ["variantId", r.lookup("Uint64")],
      ["sku", r.string()],
      ["quantity", r.lookup("Uint32")],
      ["ext", r.lookup("BundleItemExt")]
    ]), r.union("BundleExt", {
      switchOn: r.int(),
      switchName: "v",
      switches: [
        [0, r.void()]
      ],
      arms: {}
    }), r.struct("Bundle", [
      ["variantId", r.lookup("Uint64")],
      ["items", r.varArray(r.lookup("BundleItem"), 500)],
      ["version", r.lookup("Uint32")],
      ["ext", r.lookup("BundleExt")]
    ]), r.union("BundleEnvelope", {
      switchOn: r.lookup("EnvelopeType"),
      switchName: "type",
      switches: [
        ["envelopeTypeBundle", "v1"]
      ],
      arms: {
        v1: r.lookup("Bundle")
      }
    })
  });
  class NA {
    constructor(e, t) {
      Ne(this, vi), Ne(this, _i), Ne(this, Yt), Ne(this, ir), Ne(this, te, void 0), Ne(this, ne, void 0), Ne(this, qr, void 0), gi(this, te, _e(this, vi, Qu).call(this, t)), gi(this, qr, _e(this, _i, es).call(this, t)), gi(this, ne, e)
    }
    isInitialDataValid() {
      if (!j(this, qr)) throw "Bundle data does not exist for the given product.";
      if (!j(this, te)) throw "Bundle settings do not exist for the given product.";
      if (!Array.isArray(j(this, ne)) || !j(this, ne).length) throw "No bundle selection items provided.";
      return !0
    }
    isValidVariant(e) {
      if (!j(this, te)?.variantsSettings[e]) throw `The ${e} bundle variant is invalid.`;
      return !0
    }
    isSelectionInVariantRange(e) {
      const t = j(this, ne).reduce((i, a) => i + a.quantity, 0),
        n = j(this, te)?.variantsSettings[e].ranges || [];
      if (!_e(this, Yt, mi).call(this, n, t)) throw "The total number of products does not fall within the required variant range.";
      return !0
    }
    areItemsInMaxPerItemBound() {
      const e = j(this, te)?.bundleSettings.maxPerItem || 0,
        t = j(this, ne).filter(({
          quantity: n
        }) => n > e);
      if (e && t.length) throw `The selected products (${_e(this,ir,Lr).call(this,t.map(({externalProductId:n})=>n)).join(", ")}) exceed the maximum limit of ${e} items per product.`;
      return !0
    }
    areSelectedCollectionsValid(e) {
      const t = j(this, te)?.variantsSettings[e],
        n = j(this, ne).filter(({
          collectionId: i
        }) => !t?.optionSources[i]);
      if (n.length) throw `The collections (${_e(this,ir,Lr).call(this,n.map(({collectionId:i})=>i)).join(", ")}) are no longer valid for the bundle variant (${e}).`;
      return !0
    }
    areItemsQuantitiesValidForTheCollection(e) {
      const t = j(this, ne).reduce((a, o) => (a[o.collectionId] = o.quantity + (a[o.collectionId] || 0), a), {}),
        n = j(this, te)?.variantsSettings[e],
        i = Object.values(n?.optionSources || {}).filter(a => {
          const o = t[a.collectionId] || 0;
          return !_e(this, Yt, mi).call(this, [a], o)
        });
      if (!n || i.length) throw `The selection exceeds the limits for the collections (${_e(this,ir,Lr).call(this,i.map(({collectionId:a})=>a)).join(", ")}).`;
      return !0
    }
    areSelectedProductsValid(e) {
      const t = j(this, te)?.variantsSettings[e]?.optionSources || {},
        n = Object.values(t).reduce((a, o) => {
          const u = j(this, qr)?.collections[o.collectionId];
          return u && (a[o.collectionId] = u), a
        }, {});
      if (!Object.values(n).length) throw `No collections found for the bundle variant (${e}).`;
      const i = j(this, ne).filter(({
        externalProductId: a,
        collectionId: o
      }) => !n[o]?.products[a]);
      if (i.length) throw `The products (${_e(this,ir,Lr).call(this,i.map(({externalProductId:a})=>a)).join(", ")}) are no longer valid for the bundle product.`;
      return !0
    }
    isBundleSelectionValid(e) {
      return this.isInitialDataValid(), this.isValidVariant(e), this.isSelectionInVariantRange(e), this.areItemsInMaxPerItemBound(), this.areSelectedCollectionsValid(e), this.areItemsQuantitiesValidForTheCollection(e), this.areSelectedProductsValid(e), !0
    }
  }
  te = new WeakMap, ne = new WeakMap, qr = new WeakMap, vi = new WeakSet, Qu = function(r) {
    try {
      const e = r.bundle_settings;
      return {
        bundleSettings: {
          maxPerItem: e.max_quantity_per_variant,
          isCustomizable: e.is_customizable
        },
        variantsSettings: e.variants.reduce((t, n) => {
          if (!n.enabled) return t;
          let i = [{
            min: n.items_count,
            max: n.items_count
          }];
          return n.items_count || (i = n.ranges.map(({
            quantity_max: a,
            quantity_min: o
          }) => ({
            min: o,
            max: a
          }))), t[n.external_variant_id] = {
            externalVariantId: n.external_variant_id,
            optionSources: n.option_sources.reduce((a, o) => (a[o.option_source_id] = {
              min: o.quantity_min,
              max: o.quantity_max,
              collectionId: o.option_source_id
            }, a), {}),
            ranges: i
          }, t
        }, {})
      }
    } catch {
      return null
    }
  }, _i = new WeakSet, es = function(r) {
    try {
      const e = Object.values(r.collections).reduce((t, n) => (t[n.id] = {
        ...n,
        products: n.products.reduce((i, a) => (i[a.id] = a, i), {})
      }, t), {});
      return {
        ...r,
        collections: e
      }
    } catch {
      return null
    }
  }, Yt = new WeakSet, mi = function(r, e) {
    return !!r.filter(({
      min: t,
      max: n
    }) => {
      const i = t ?? e,
        a = n ?? e;
      return i <= e && e <= a
    }).length
  }, ir = new WeakSet, Lr = function(r) {
    return Array.from(new Set(r))
  };
  const rs = "/bundling-storefront-manager";

  function BA() {
    return Math.ceil(Date.now() / 1e3)
  }
  async function UA() {
    try {
      const {
        timestamp: r
      } = await Ke("get", `${rs}/t`);
      return r
    } catch (r) {
      return console.error(`Fetch failed: ${r}. Using client-side date.`), BA()
    }
  }
  async function qA(r) {
    const e = W(),
      t = await ts(r);
    if (t !== !0) throw new Error(t);
    const n = await UA(),
      i = CA({
        variantId: r.externalVariantId,
        version: n,
        items: r.selections.map(a => ({
          collectionId: a.collectionId,
          productId: a.externalProductId,
          variantId: a.externalVariantId,
          quantity: a.quantity,
          sku: ""
        }))
      });
    try {
      const a = await Ke("post", `${rs}/api/v1/bundles`, {
        data: {
          bundle: i
        },
        headers: {
          Origin: `https://${e.storeIdentifier}`
        }
      });
      if (!a.id || a.code !== 200) throw new Error(`1: failed generating rb_id: ${JSON.stringify(a)}`);
      return a.id
    } catch (a) {
      throw new Error(`2: failed generating rb_id ${a}`)
    }
  }

  function LA(r, e) {
    const t = ns(r);
    if (t !== !0) throw new Error(`Dynamic Bundle is invalid. ${t}`);
    const n = `${ji(9)}:${r.externalProductId}`;
    return r.selections.map(i => {
      const a = {
        id: i.externalVariantId,
        quantity: i.quantity,
        properties: {
          _rc_bundle: n,
          _rc_bundle_variant: r.externalVariantId,
          _rc_bundle_parent: e,
          _rc_bundle_collection_id: i.collectionId
        }
      };
      return i.sellingPlan ? a.selling_plan = i.sellingPlan : i.shippingIntervalFrequency && (a.properties.shipping_interval_frequency = i.shippingIntervalFrequency, a.properties.shipping_interval_unit_type = i.shippingIntervalUnitType, a.id = `${i.discountedVariantId}`), a
    })
  }
  async function ts(r) {
    try {
      return r ? !0 : "Bundle is not defined"
    } catch (e) {
      return `Error fetching bundle settings: ${e}`
    }
  }
  async function kA(r) {
    try {
      const e = await Ke("get", `/bundle-data/${r.externalProductId}`);
      return {
        valid: new NA(r.selections, e).isBundleSelectionValid(r.externalVariantId)
      }
    } catch (e) {
      return {
        valid: !1,
        error: String(e)
      }
    }
  }
  const jA = {
    day: ["day", "days", "Days"],
    days: ["day", "days", "Days"],
    Days: ["day", "days", "Days"],
    week: ["week", "weeks", "Weeks"],
    weeks: ["week", "weeks", "Weeks"],
    Weeks: ["week", "weeks", "Weeks"],
    month: ["month", "months", "Months"],
    months: ["month", "months", "Months"],
    Months: ["month", "months", "Months"]
  };

  function ns(r) {
    if (!r) return "No bundle defined.";
    if (r.selections.length === 0) return "No selections defined.";
    const {
      shippingIntervalFrequency: e,
      shippingIntervalUnitType: t
    } = r.selections.find(n => n.shippingIntervalFrequency || n.shippingIntervalUnitType) || {};
    if (e || t) {
      if (!e || !t) return "Shipping intervals do not match on selections.";
      {
        const n = jA[t];
        for (let i = 0; i < r.selections.length; i++) {
          const {
            shippingIntervalFrequency: a,
            shippingIntervalUnitType: o
          } = r.selections[i];
          if (a && a !== e || o && !n.includes(o)) return "Shipping intervals do not match on selections."
        }
      }
    }
    return !0
  }
  async function VA(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      bundle_selection: t
    } = await $("get", "/bundle_selections", {
      id: e
    }, _(r, "getBundleSelection"));
    return t
  }

  function GA(r, e) {
    return $("get", "/bundle_selections", {
      query: e
    }, _(r, "listBundleSelections"))
  }
  async function HA(r, e) {
    const {
      bundle_selection: t
    } = await $("post", "/bundle_selections", {
      data: e
    }, _(r, "createBundleSelection"));
    return t
  }
  async function WA(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      bundle_selection: n
    } = await $("put", "/bundle_selections", {
      id: e,
      data: t
    }, _(r, "updateBundleSelection"));
    return n
  }

  function XA(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    return $("delete", "/bundle_selections", {
      id: e
    }, _(r, "deleteBundleSelection"))
  }
  async function zA(r, e, t, n) {
    if (e === void 0 || e === "") throw new Error("Purchase item ID is required");
    const {
      subscription: i
    } = await $("put", "/bundles", {
      id: e,
      data: t,
      query: n
    }, _(r, "updateBundle"));
    return i
  }
  var YA = Object.freeze({
      __proto__: null,
      createBundleSelection: HA,
      deleteBundleSelection: XA,
      getBundleId: qA,
      getBundleSelection: VA,
      getDynamicBundleItems: LA,
      listBundleSelections: GA,
      updateBundle: zA,
      updateBundleSelection: WA,
      validateBundle: ts,
      validateBundleSelection: kA,
      validateDynamicBundle: ns
    }),
    KA = 200,
    wi = "__lodash_hash_undefined__",
    ZA = 1 / 0,
    is = 9007199254740991,
    JA = "[object Arguments]",
    QA = "[object Function]",
    eS = "[object GeneratorFunction]",
    rS = "[object Symbol]",
    tS = /[\\^$.*+?()[\]{}|]/g,
    nS = /^\[object .+?Constructor\]$/,
    iS = /^(?:0|[1-9]\d*)$/,
    aS = typeof U == "object" && U && U.Object === Object && U,
    oS = typeof self == "object" && self && self.Object === Object && self,
    bi = aS || oS || Function("return this")();

  function uS(r, e, t) {
    switch (t.length) {
      case 0:
        return r.call(e);
      case 1:
        return r.call(e, t[0]);
      case 2:
        return r.call(e, t[0], t[1]);
      case 3:
        return r.call(e, t[0], t[1], t[2])
    }
    return r.apply(e, t)
  }

  function sS(r, e) {
    var t = r ? r.length : 0;
    return !!t && lS(r, e, 0) > -1
  }

  function fS(r, e, t) {
    for (var n = -1, i = r ? r.length : 0; ++n < i;)
      if (t(e, r[n])) return !0;
    return !1
  }

  function as(r, e) {
    for (var t = -1, n = r ? r.length : 0, i = Array(n); ++t < n;) i[t] = e(r[t], t, r);
    return i
  }

  function $i(r, e) {
    for (var t = -1, n = e.length, i = r.length; ++t < n;) r[i + t] = e[t];
    return r
  }

  function cS(r, e, t, n) {
    for (var i = r.length, a = t + (n ? 1 : -1); n ? a-- : ++a < i;)
      if (e(r[a], a, r)) return a;
    return -1
  }

  function lS(r, e, t) {
    if (e !== e) return cS(r, hS, t);
    for (var n = t - 1, i = r.length; ++n < i;)
      if (r[n] === e) return n;
    return -1
  }

  function hS(r) {
    return r !== r
  }

  function dS(r, e) {
    for (var t = -1, n = Array(r); ++t < r;) n[t] = e(t);
    return n
  }

  function pS(r) {
    return function(e) {
      return r(e)
    }
  }

  function yS(r, e) {
    return r.has(e)
  }

  function gS(r, e) {
    return r?.[e]
  }

  function vS(r) {
    var e = !1;
    if (r != null && typeof r.toString != "function") try {
      e = !!(r + "")
    } catch {}
    return e
  }

  function os(r, e) {
    return function(t) {
      return r(e(t))
    }
  }
  var _S = Array.prototype,
    mS = Function.prototype,
    Kt = Object.prototype,
    Ei = bi["__core-js_shared__"],
    us = function() {
      var r = /[^.]+$/.exec(Ei && Ei.keys && Ei.keys.IE_PROTO || "");
      return r ? "Symbol(src)_1." + r : ""
    }(),
    ss = mS.toString,
    ar = Kt.hasOwnProperty,
    Ai = Kt.toString,
    wS = RegExp("^" + ss.call(ar).replace(tS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    fs = bi.Symbol,
    bS = os(Object.getPrototypeOf, Object),
    $S = Kt.propertyIsEnumerable,
    ES = _S.splice,
    cs = fs ? fs.isConcatSpreadable : void 0,
    Si = Object.getOwnPropertySymbols,
    ls = Math.max,
    AS = ds(bi, "Map"),
    kr = ds(Object, "create");

  function Be(r) {
    var e = -1,
      t = r ? r.length : 0;
    for (this.clear(); ++e < t;) {
      var n = r[e];
      this.set(n[0], n[1])
    }
  }

  function SS() {
    this.__data__ = kr ? kr(null) : {}
  }

  function OS(r) {
    return this.has(r) && delete this.__data__[r]
  }

  function IS(r) {
    var e = this.__data__;
    if (kr) {
      var t = e[r];
      return t === wi ? void 0 : t
    }
    return ar.call(e, r) ? e[r] : void 0
  }

  function xS(r) {
    var e = this.__data__;
    return kr ? e[r] !== void 0 : ar.call(e, r)
  }

  function PS(r, e) {
    var t = this.__data__;
    return t[r] = kr && e === void 0 ? wi : e, this
  }
  Be.prototype.clear = SS, Be.prototype.delete = OS, Be.prototype.get = IS, Be.prototype.has = xS, Be.prototype.set = PS;

  function or(r) {
    var e = -1,
      t = r ? r.length : 0;
    for (this.clear(); ++e < t;) {
      var n = r[e];
      this.set(n[0], n[1])
    }
  }

  function TS() {
    this.__data__ = []
  }

  function RS(r) {
    var e = this.__data__,
      t = Jt(e, r);
    if (t < 0) return !1;
    var n = e.length - 1;
    return t == n ? e.pop() : ES.call(e, t, 1), !0
  }

  function FS(r) {
    var e = this.__data__,
      t = Jt(e, r);
    return t < 0 ? void 0 : e[t][1]
  }

  function MS(r) {
    return Jt(this.__data__, r) > -1
  }

  function DS(r, e) {
    var t = this.__data__,
      n = Jt(t, r);
    return n < 0 ? t.push([r, e]) : t[n][1] = e, this
  }
  or.prototype.clear = TS, or.prototype.delete = RS, or.prototype.get = FS, or.prototype.has = MS, or.prototype.set = DS;

  function ur(r) {
    var e = -1,
      t = r ? r.length : 0;
    for (this.clear(); ++e < t;) {
      var n = r[e];
      this.set(n[0], n[1])
    }
  }

  function CS() {
    this.__data__ = {
      hash: new Be,
      map: new(AS || or),
      string: new Be
    }
  }

  function NS(r) {
    return Qt(this, r).delete(r)
  }

  function BS(r) {
    return Qt(this, r).get(r)
  }

  function US(r) {
    return Qt(this, r).has(r)
  }

  function qS(r, e) {
    return Qt(this, r).set(r, e), this
  }
  ur.prototype.clear = CS, ur.prototype.delete = NS, ur.prototype.get = BS, ur.prototype.has = US, ur.prototype.set = qS;

  function Zt(r) {
    var e = -1,
      t = r ? r.length : 0;
    for (this.__data__ = new ur; ++e < t;) this.add(r[e])
  }

  function LS(r) {
    return this.__data__.set(r, wi), this
  }

  function kS(r) {
    return this.__data__.has(r)
  }
  Zt.prototype.add = Zt.prototype.push = LS, Zt.prototype.has = kS;

  function jS(r, e) {
    var t = Oi(r) || ps(r) ? dS(r.length, String) : [],
      n = t.length,
      i = !!n;
    for (var a in r)(e || ar.call(r, a)) && !(i && (a == "length" || eO(a, n))) && t.push(a);
    return t
  }

  function Jt(r, e) {
    for (var t = r.length; t--;)
      if (uO(r[t][0], e)) return t;
    return -1
  }

  function VS(r, e, t, n) {
    var i = -1,
      a = sS,
      o = !0,
      u = r.length,
      f = [],
      c = e.length;
    if (!u) return f;
    t && (e = as(e, pS(t))), n ? (a = fS, o = !1) : e.length >= KA && (a = yS, o = !1, e = new Zt(e));
    e: for (; ++i < u;) {
      var l = r[i],
        s = t ? t(l) : l;
      if (l = n || l !== 0 ? l : 0, o && s === s) {
        for (var h = c; h--;)
          if (e[h] === s) continue e;
        f.push(l)
      } else a(e, s, n) || f.push(l)
    }
    return f
  }

  function hs(r, e, t, n, i) {
    var a = -1,
      o = r.length;
    for (t || (t = QS), i || (i = []); ++a < o;) {
      var u = r[a];
      e > 0 && t(u) ? e > 1 ? hs(u, e - 1, t, n, i) : $i(i, u) : n || (i[i.length] = u)
    }
    return i
  }

  function GS(r, e, t) {
    var n = e(r);
    return Oi(r) ? n : $i(n, t(r))
  }

  function HS(r) {
    if (!Ii(r) || tO(r)) return !1;
    var e = gs(r) || vS(r) ? wS : nS;
    return e.test(oO(r))
  }

  function WS(r) {
    if (!Ii(r)) return iO(r);
    var e = nO(r),
      t = [];
    for (var n in r) n == "constructor" && (e || !ar.call(r, n)) || t.push(n);
    return t
  }

  function XS(r, e) {
    return r = Object(r), zS(r, e, function(t, n) {
      return n in r
    })
  }

  function zS(r, e, t) {
    for (var n = -1, i = e.length, a = {}; ++n < i;) {
      var o = e[n],
        u = r[o];
      t(u, o) && (a[o] = u)
    }
    return a
  }

  function YS(r, e) {
    return e = ls(e === void 0 ? r.length - 1 : e, 0),
      function() {
        for (var t = arguments, n = -1, i = ls(t.length - e, 0), a = Array(i); ++n < i;) a[n] = t[e + n];
        n = -1;
        for (var o = Array(e + 1); ++n < e;) o[n] = t[n];
        return o[e] = a, uS(r, this, o)
      }
  }

  function KS(r) {
    return GS(r, lO, JS)
  }

  function Qt(r, e) {
    var t = r.__data__;
    return rO(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map
  }

  function ds(r, e) {
    var t = gS(r, e);
    return HS(t) ? t : void 0
  }
  var ZS = Si ? os(Si, Object) : _s,
    JS = Si ? function(r) {
      for (var e = []; r;) $i(e, ZS(r)), r = bS(r);
      return e
    } : _s;

  function QS(r) {
    return Oi(r) || ps(r) || !!(cs && r && r[cs])
  }

  function eO(r, e) {
    return e = e ?? is, !!e && (typeof r == "number" || iS.test(r)) && r > -1 && r % 1 == 0 && r < e
  }

  function rO(r) {
    var e = typeof r;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null
  }

  function tO(r) {
    return !!us && us in r
  }

  function nO(r) {
    var e = r && r.constructor,
      t = typeof e == "function" && e.prototype || Kt;
    return r === t
  }

  function iO(r) {
    var e = [];
    if (r != null)
      for (var t in Object(r)) e.push(t);
    return e
  }

  function aO(r) {
    if (typeof r == "string" || cO(r)) return r;
    var e = r + "";
    return e == "0" && 1 / r == -ZA ? "-0" : e
  }

  function oO(r) {
    if (r != null) {
      try {
        return ss.call(r)
      } catch {}
      try {
        return r + ""
      } catch {}
    }
    return ""
  }

  function uO(r, e) {
    return r === e || r !== r && e !== e
  }

  function ps(r) {
    return sO(r) && ar.call(r, "callee") && (!$S.call(r, "callee") || Ai.call(r) == JA)
  }
  var Oi = Array.isArray;

  function ys(r) {
    return r != null && fO(r.length) && !gs(r)
  }

  function sO(r) {
    return vs(r) && ys(r)
  }

  function gs(r) {
    var e = Ii(r) ? Ai.call(r) : "";
    return e == QA || e == eS
  }

  function fO(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= is
  }

  function Ii(r) {
    var e = typeof r;
    return !!r && (e == "object" || e == "function")
  }

  function vs(r) {
    return !!r && typeof r == "object"
  }

  function cO(r) {
    return typeof r == "symbol" || vs(r) && Ai.call(r) == rS
  }

  function lO(r) {
    return ys(r) ? jS(r, !0) : WS(r)
  }
  var hO = YS(function(r, e) {
    return r == null ? {} : (e = as(hs(e, 1), aO), XS(r, VS(KS(r), e)))
  });

  function _s() {
    return []
  }
  var dO = hO,
    xi = be(dO);

  function pO(r) {
    try {
      return JSON.parse(r)
    } catch {
      return r
    }
  }

  function yO(r) {
    return Object.entries(r).reduce((e, [t, n]) => ({
      ...e,
      [t]: pO(n)
    }), {})
  }
  const ms = r => typeof r == "string" ? r !== "0" && r !== "false" : !!r;

  function ws(r) {
    const e = yO(r),
      t = e.auto_inject === void 0 ? !0 : e.auto_inject,
      n = e.display_on ?? [],
      i = e.first_option === "autodeliver";
    return {
      ...xi(e, ["display_on", "first_option"]),
      auto_inject: t,
      valid_pages: n,
      is_subscription_first: i,
      autoInject: t,
      validPages: n,
      isSubscriptionFirst: i
    }
  }

  function bs(r) {
    const e = r.subscription_options?.storefront_purchase_options === "subscription_only";
    return {
      ...r,
      is_subscription_only: e,
      isSubscriptionOnly: e
    }
  }

  function gO(r) {
    return r.map(e => {
      const t = {};
      return Object.entries(e).forEach(([n, i]) => {
        t[n] = bs(i)
      }), t
    })
  }
  const Pi = "2020-12",
    vO = {
      store_currency: {
        currency_code: "USD",
        currency_symbol: "$",
        decimal_separator: ".",
        thousands_separator: ",",
        currency_symbol_location: "left"
      }
    },
    jr = new Map;

  function en(r, e) {
    return jr.has(r) || jr.set(r, e()), jr.get(r)
  }
  async function Ti(r, e) {
    if (r === void 0 || r === "") throw new Error("ID is required");
    const t = e?.version ?? "2020-12",
      {
        product: n
      } = await en(`product.${r}.${t}`, () => pt("get", `/product/${t}/${r}.json`));
    return t === "2020-12" ? bs(n) : n
  }
  async function $s() {
    return await en("storeSettings", () => pt("get", `/${Pi}/store_settings.json`).catch(() => vO))
  }
  async function Es() {
    const {
      widget_settings: r
    } = await en("widgetSettings", () => pt("get", `/${Pi}/widget_settings.json`));
    return ws(r)
  }
  async function As() {
    const {
      products: r,
      widget_settings: e,
      store_settings: t,
      meta: n
    } = await en("productsAndSettings", () => pt("get", `/product/${Pi}/products.json`));
    return n?.status === "error" ? Promise.reject(n.message) : {
      products: gO(r),
      widget_settings: ws(e),
      store_settings: t ?? {}
    }
  }
  async function _O() {
    const {
      products: r
    } = await As();
    return r
  }
  async function mO(r) {
    const [e, t, n] = await Promise.all([Ti(r), $s(), Es()]);
    return {
      product: e,
      store_settings: t,
      widget_settings: n,
      storeSettings: t,
      widgetSettings: n
    }
  }
  async function wO(r) {
    const {
      bundle_product: e
    } = await Ti(r);
    return e
  }
  async function Ss() {
    return Array.from(jr.keys()).forEach(r => jr.delete(r))
  }
  var bO = Object.freeze({
    __proto__: null,
    getCDNBundleSettings: wO,
    getCDNProduct: Ti,
    getCDNProductAndSettings: mO,
    getCDNProducts: _O,
    getCDNProductsAndSettings: As,
    getCDNStoreSettings: $s,
    getCDNWidgetSettings: Es,
    resetCDNCache: Ss
  });
  async function $O(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      charge: n
    } = await $("get", "/charges", {
      id: e,
      query: {
        include: t?.include
      }
    }, _(r, "getCharge"));
    return n
  }

  function EO(r, e) {
    return $("get", "/charges", {
      query: e
    }, _(r, "listCharges"))
  }
  async function AO(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      charge: n
    } = await $("post", `/charges/${e}/apply_discount`, {
      data: {
        discount_code: t
      }
    }, _(r, "applyDiscountToCharge"));
    return n
  }
  async function SO(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      charge: t
    } = await $("post", `/charges/${e}/remove_discount`, {}, _(r, "removeDiscountsFromCharge"));
    return t
  }
  async function OO(r, e, t, n) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    if (t === void 0 || t.length === 0) throw new Error("Purchase item IDs are required");
    const {
      charge: i
    } = await $("post", `/charges/${e}/skip`, {
      query: n,
      data: {
        purchase_item_ids: t.map(a => Number(a))
      }
    }, _(r, "skipCharge"));
    return i
  }
  async function IO(r, e, t, n) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    if (t === void 0 || t.length === 0) throw new Error("Purchase item IDs are required");
    const {
      charge: i
    } = await $("post", `/charges/${e}/unskip`, {
      query: n,
      data: {
        purchase_item_ids: t.map(a => Number(a))
      }
    }, _(r, "unskipCharge"));
    return i
  }
  async function xO(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      charge: t
    } = await $("post", `/charges/${e}/process`, {}, _(r, "processCharge"));
    return t
  }
  var PO = Object.freeze({
    __proto__: null,
    applyDiscountToCharge: AO,
    getCharge: $O,
    listCharges: EO,
    processCharge: xO,
    removeDiscountsFromCharge: SO,
    skipCharge: OO,
    unskipCharge: IO
  });
  async function Os(r, e) {
    if (!["2020-12", "2022-06"].includes(e.format_version)) throw new Error("Missing or unsupported format_version.");
    return $("get", "/product_search", {
      query: e,
      headers: {
        "X-Recharge-Version": "2021-01"
      }
    }, _(r, "productSearch"))
  }
  var TO = Object.freeze({
    __proto__: null,
    productSearch: Os
  });
  async function Is(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      collection: t
    } = await $("get", "/collections", {
      id: e
    }, _(r, "getCollection"));
    return t
  }

  function RO(r, e) {
    return $("get", "/collections", {
      query: e
    }, _(r, "listCollections"))
  }
  async function FO(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    if (!["2020-12", "2022-06"].includes(t.format_version)) throw new Error("Missing or unsupported format_version.");
    const n = _(r, "listCollectionProducts"),
      [{
        sort_order: i,
        manual_sort_order: a
      }, {
        products: o
      }] = await Promise.all([Is(n, e), Os(n, {
        ...t,
        collection_ids: [e],
        limit: 250
      })]);
    if (i === "manual") return {
      products: a.reduce((u, f) => {
        const c = o.find(l => l.external_product_id === f);
        return c && u.push(c), u
      }, [])
    };
    {
      const u = MO(i);
      return {
        products: o.slice().sort(u)
      }
    }
  }

  function xs(r, e) {
    const t = r.external_created_at,
      n = e.external_created_at;
    return t < n ? -1 : n > t ? 1 : 0
  }

  function Ps(r, e) {
    const t = r.external_product_id,
      n = e.external_product_id;
    return t < n ? -1 : n > t ? 1 : 0
  }

  function Ts(r, e) {
    const t = r.title.toLowerCase(),
      n = e.title.toLowerCase();
    return t < n ? -1 : n > t ? 1 : 0
  }

  function MO(r) {
    switch (r) {
      case "created_at-asc":
        return xs;
      case "created_at-desc":
        return (e, t) => xs(t, e);
      case "id-asc":
        return Ps;
      case "id-desc":
        return (e, t) => Ps(t, e);
      case "title-asc":
        return Ts;
      case "title-desc":
        return (e, t) => Ts(t, e)
    }
  }
  var DO = Object.freeze({
    __proto__: null,
    getCollection: Is,
    listCollectionProducts: FO,
    listCollections: RO
  });
  async function CO(r, e) {
    const t = r.customerId;
    if (!t) throw new Error("Not logged in.");
    const {
      customer: n
    } = await $("get", "/customers", {
      id: t,
      query: {
        include: e?.include
      }
    }, _(r, "getCustomer"));
    return n
  }
  async function Rs(r, e) {
    const t = r.customerId;
    if (!t) throw new Error("Not logged in.");
    const {
      customer: n
    } = await $("put", "/customers", {
      id: t,
      data: e
    }, _(r, "updateCustomer"));
    return n
  }
  async function NO(r, e) {
    const t = r.customerId;
    if (!t) throw new Error("Not logged in.");
    const {
      deliveries: n
    } = await $("get", `/customers/${t}/delivery_schedule`, {
      query: e
    }, _(r, "getDeliverySchedule"));
    return n
  }
  async function Ri(r, e) {
    return $("get", "/portal_access", {
      query: e
    }, _(r, "getCustomerPortalAccess"))
  }
  async function BO(r, e, t) {
    if (e === void 0 || e === "") throw new Error("Subscription ID is required");
    const {
      base_url: n,
      customer_hash: i,
      temp_token: a
    } = await Ri(_(r, "getActiveChurnLandingPageURL"));
    return `${n.replace("portal","pages")}${i}/subscriptions/${e}/cancel?token=${a}&subscription=${e}&redirect_to=${t}`
  }
  async function UO(r, e, t) {
    if (e === void 0 || e === "") throw new Error("Gift ID is required");
    const {
      base_url: n,
      customer_hash: i,
      temp_token: a
    } = await Ri(_(r, "getGiftRedemptionLandingPageURL"));
    return `${n.replace("portal","pages")}${i}/gifts/${e}?token=${a}&redirect_to=${t}`
  }
  const qO = {
    SHOPIFY_UPDATE_PAYMENT_INFO: {
      type: "email",
      template_type: "shopify_update_payment_information"
    }
  };
  async function LO(r, e, t) {
    const n = r.customerId;
    if (!n) throw new Error("Not logged in.");
    const i = qO[e];
    if (!i) throw new Error("Notification not supported.");
    return $("post", `/customers/${n}/notifications`, {
      data: {
        ...i,
        template_vars: t
      }
    }, _(r, "sendCustomerNotification"))
  }
  async function kO(r, e) {
    const t = r.customerId;
    if (!t) throw new Error("Not logged in.");
    const {
      credit_summary: n
    } = await $("get", `/customers/${t}/credit_summary`, {
      query: {
        include: e?.include
      }
    }, _(r, "getCreditSummary"));
    return n
  }
  var jO = Object.freeze({
    __proto__: null,
    getActiveChurnLandingPageURL: BO,
    getCreditSummary: kO,
    getCustomer: CO,
    getCustomerPortalAccess: Ri,
    getDeliverySchedule: NO,
    getGiftRedemptionLandingPageURL: UO,
    sendCustomerNotification: LO,
    updateCustomer: Rs
  });
  async function VO(r, e) {
    const t = r.customerId;
    if (!t) throw new Error("Not logged in.");
    const {
      credit_summary: n
    } = await $("get", `/customers/${t}/credit_summary`, {
      query: {
        include: e?.include
      }
    }, _(r, "getCreditSummary"));
    return n
  }

  function GO(r, {
    recurring: e
  }) {
    if (!r.customerId) throw new Error("Not logged in.");
    const t = {};
    return e !== void 0 && (t.apply_credit_to_next_recurring_charge = e), Rs(_(r, "setApplyCreditsToNextCharge"), t)
  }
  async function HO(r, e) {
    const t = r.customerId;
    if (!t) throw new Error("Not logged in.");
    return await $("get", "/credit_accounts", {
      query: {
        customer_id: t,
        ...e
      }
    }, _(r, "listCreditAccounts"))
  }
  var WO = Object.freeze({
    __proto__: null,
    getCreditSummary: VO,
    listCreditAccounts: HO,
    setApplyCreditsToNextCharge: GO
  });

  function XO(r, e) {
    if (!r.customerId) throw new Error("Not logged in.");
    return $("get", "/gift_purchases", {
      query: e
    }, _(r, "listGiftPurchases"))
  }
  async function zO(r, e) {
    if (!r.customerId) throw new Error("Not logged in.");
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      gift_purchase: t
    } = await $("get", "/gift_purchases", {
      id: e
    }, _(r, "getGiftPurchase"));
    return t
  }
  var YO = Object.freeze({
    __proto__: null,
    getGiftPurchase: zO,
    listGiftPurchases: XO
  });
  async function KO(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      membership: t
    } = await $("get", "/memberships", {
      id: e
    }, _(r, "getMembership"));
    return t
  }

  function ZO(r, e) {
    return $("get", "/memberships", {
      query: e
    }, _(r, "listMemberships"))
  }
  async function JO(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      membership: n
    } = await $("post", `/memberships/${e}/cancel`, {
      data: t
    }, _(r, "cancelMembership"));
    return n
  }
  async function QO(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      membership: n
    } = await $("post", `/memberships/${e}/activate`, {
      data: t
    }, _(r, "activateMembership"));
    return n
  }
  async function eI(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      membership: n
    } = await $("post", `/memberships/${e}/change`, {
      data: t
    }, _(r, "changeMembership"));
    return n
  }
  var rI = Object.freeze({
    __proto__: null,
    activateMembership: QO,
    cancelMembership: JO,
    changeMembership: eI,
    getMembership: KO,
    listMemberships: ZO
  });
  async function tI(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      membership_program: n
    } = await $("get", "/membership_programs", {
      id: e,
      query: {
        include: t?.include
      }
    }, _(r, "getMembershipProgram"));
    return n
  }

  function nI(r, e) {
    return $("get", "/membership_programs", {
      query: e
    }, _(r, "listMembershipPrograms"))
  }
  var iI = Object.freeze({
    __proto__: null,
    getMembershipProgram: tI,
    listMembershipPrograms: nI
  });
  async function aI(r, e) {
    const {
      metafield: t
    } = await $("post", "/metafields", {
      data: {
        metafield: e
      }
    }, _(r, "createMetafield"));
    return t
  }
  async function oI(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      metafield: n
    } = await $("put", "/metafields", {
      id: e,
      data: {
        metafield: t
      }
    }, _(r, "updateMetafield"));
    return n
  }

  function uI(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    return $("delete", "/metafields", {
      id: e
    }, _(r, "deleteMetafield"))
  }
  var sI = Object.freeze({
    __proto__: null,
    createMetafield: aI,
    deleteMetafield: uI,
    updateMetafield: oI
  });
  async function fI(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      onetime: t
    } = await $("get", "/onetimes", {
      id: e
    }, _(r, "getOnetime"));
    return t
  }

  function cI(r, e) {
    return $("get", "/onetimes", {
      query: e
    }, _(r, "listOnetimes"))
  }
  async function lI(r, e) {
    const {
      onetime: t
    } = await $("post", "/onetimes", {
      data: e
    }, _(r, "createOnetime"));
    return t
  }
  async function hI(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      onetime: n
    } = await $("put", "/onetimes", {
      id: e,
      data: t
    }, _(r, "updateOnetime"));
    return n
  }

  function dI(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    return $("delete", "/onetimes", {
      id: e
    }, _(r, "deleteOnetime"))
  }
  var pI = Object.freeze({
    __proto__: null,
    createOnetime: lI,
    deleteOnetime: dI,
    getOnetime: fI,
    listOnetimes: cI,
    updateOnetime: hI
  });
  async function yI(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      order: t
    } = await $("get", "/orders", {
      id: e
    }, _(r, "getOrder"));
    return t
  }

  function gI(r, e) {
    return $("get", "/orders", {
      query: e
    }, _(r, "listOrders"))
  }
  async function vI(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      order: t
    } = await $("post", `/orders/${e}/delay`, {}, _(r, "delayOrder"));
    return t
  }
  var _I = Object.freeze({
    __proto__: null,
    delayOrder: vI,
    getOrder: yI,
    listOrders: gI
  });
  async function mI(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      payment_method: n
    } = await $("get", "/payment_methods", {
      id: e,
      query: {
        include: t?.include
      }
    }, _(r, "getPaymentMethod"));
    return n
  }
  async function wI(r, e) {
    const {
      payment_method: t
    } = await $("post", "/payment_methods", {
      data: {
        ...e,
        customer_id: r.customerId
      }
    }, _(r, "createPaymentMethod"));
    return t
  }
  async function bI(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      payment_method: n
    } = await $("put", "/payment_methods", {
      id: e,
      data: t
    }, _(r, "updatePaymentMethod"));
    return n
  }

  function $I(r, e) {
    return $("get", "/payment_methods", {
      query: e
    }, _(r, "listPaymentMethods"))
  }
  var EI = Object.freeze({
    __proto__: null,
    createPaymentMethod: wI,
    getPaymentMethod: mI,
    listPaymentMethods: $I,
    updatePaymentMethod: bI
  });
  async function AI(r, e) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      plan: t
    } = await $("get", "/plans", {
      id: e
    }, _(r, "getPlan"));
    return t
  }

  function SI(r, e) {
    return $("get", "/plans", {
      query: e
    }, _(r, "listPlans"))
  }
  var OI = Object.freeze({
    __proto__: null,
    getPlan: AI,
    listPlans: SI
  });
  async function II(r, e) {
    return await $("get", "/shop/shipping_countries", {
      query: e,
      headers: {
        "X-Recharge-Version": "2021-01"
      }
    }, _(r, "getShippingCountries"))
  }
  async function xI(r) {
    return await $("get", "/shop/settings", {
      headers: {
        "X-Recharge-Version": "2021-01"
      }
    }, _(r, "getStoreSettings"))
  }
  var PI = Object.freeze({
      __proto__: null,
      getShippingCountries: II,
      getStoreSettings: xI
    }),
    TI = "Expected a function",
    Fs = "__lodash_placeholder__",
    Ue = 1,
    rn = 2,
    RI = 4,
    sr = 8,
    Vr = 16,
    qe = 32,
    Gr = 64,
    Ms = 128,
    FI = 256,
    Ds = 512,
    Cs = 1 / 0,
    MI = 9007199254740991,
    DI = 17976931348623157e292,
    Ns = 0 / 0,
    CI = [
      ["ary", Ms],
      ["bind", Ue],
      ["bindKey", rn],
      ["curry", sr],
      ["curryRight", Vr],
      ["flip", Ds],
      ["partial", qe],
      ["partialRight", Gr],
      ["rearg", FI]
    ],
    NI = "[object Function]",
    BI = "[object GeneratorFunction]",
    UI = "[object Symbol]",
    qI = /[\\^$.*+?()[\]{}|]/g,
    LI = /^\s+|\s+$/g,
    kI = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    jI = /\{\n\/\* \[wrapped with (.+)\] \*/,
    VI = /,? & /,
    GI = /^[-+]0x[0-9a-f]+$/i,
    HI = /^0b[01]+$/i,
    WI = /^\[object .+?Constructor\]$/,
    XI = /^0o[0-7]+$/i,
    zI = /^(?:0|[1-9]\d*)$/,
    YI = parseInt,
    KI = typeof U == "object" && U && U.Object === Object && U,
    ZI = typeof self == "object" && self && self.Object === Object && self,
    Hr = KI || ZI || Function("return this")();

  function Fi(r, e, t) {
    switch (t.length) {
      case 0:
        return r.call(e);
      case 1:
        return r.call(e, t[0]);
      case 2:
        return r.call(e, t[0], t[1]);
      case 3:
        return r.call(e, t[0], t[1], t[2])
    }
    return r.apply(e, t)
  }

  function JI(r, e) {
    for (var t = -1, n = r ? r.length : 0; ++t < n && e(r[t], t, r) !== !1;);
    return r
  }

  function QI(r, e) {
    var t = r ? r.length : 0;
    return !!t && r2(r, e, 0) > -1
  }

  function e2(r, e, t, n) {
    for (var i = r.length, a = t + (n ? 1 : -1); n ? a-- : ++a < i;)
      if (e(r[a], a, r)) return a;
    return -1
  }

  function r2(r, e, t) {
    if (e !== e) return e2(r, t2, t);
    for (var n = t - 1, i = r.length; ++n < i;)
      if (r[n] === e) return n;
    return -1
  }

  function t2(r) {
    return r !== r
  }

  function n2(r, e) {
    for (var t = r.length, n = 0; t--;) r[t] === e && n++;
    return n
  }

  function i2(r, e) {
    return r?.[e]
  }

  function a2(r) {
    var e = !1;
    if (r != null && typeof r.toString != "function") try {
      e = !!(r + "")
    } catch {}
    return e
  }

  function Mi(r, e) {
    for (var t = -1, n = r.length, i = 0, a = []; ++t < n;) {
      var o = r[t];
      (o === e || o === Fs) && (r[t] = Fs, a[i++] = t)
    }
    return a
  }
  var o2 = Function.prototype,
    Bs = Object.prototype,
    Di = Hr["__core-js_shared__"],
    Us = function() {
      var r = /[^.]+$/.exec(Di && Di.keys && Di.keys.IE_PROTO || "");
      return r ? "Symbol(src)_1." + r : ""
    }(),
    qs = o2.toString,
    u2 = Bs.hasOwnProperty,
    Ls = Bs.toString,
    s2 = RegExp("^" + qs.call(u2).replace(qI, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    f2 = Object.create,
    fr = Math.max,
    c2 = Math.min,
    ks = function() {
      var r = Vs(Object, "defineProperty"),
        e = Vs.name;
      return e && e.length > 2 ? r : void 0
    }();

  function l2(r) {
    return cr(r) ? f2(r) : {}
  }

  function h2(r) {
    if (!cr(r) || A2(r)) return !1;
    var e = x2(r) || a2(r) ? s2 : WI;
    return e.test(O2(r))
  }

  function d2(r, e) {
    return e = fr(e === void 0 ? r.length - 1 : e, 0),
      function() {
        for (var t = arguments, n = -1, i = fr(t.length - e, 0), a = Array(i); ++n < i;) a[n] = t[e + n];
        n = -1;
        for (var o = Array(e + 1); ++n < e;) o[n] = t[n];
        return o[e] = a, Fi(r, this, o)
      }
  }

  function p2(r, e, t, n) {
    for (var i = -1, a = r.length, o = t.length, u = -1, f = e.length, c = fr(a - o, 0), l = Array(f + c), s = !n; ++u < f;) l[u] = e[u];
    for (; ++i < o;)(s || i < a) && (l[t[i]] = r[i]);
    for (; c--;) l[u++] = r[i++];
    return l
  }

  function y2(r, e, t, n) {
    for (var i = -1, a = r.length, o = -1, u = t.length, f = -1, c = e.length, l = fr(a - u, 0), s = Array(l + c), h = !n; ++i < l;) s[i] = r[i];
    for (var y = i; ++f < c;) s[y + f] = e[f];
    for (; ++o < u;)(h || i < a) && (s[y + t[o]] = r[i++]);
    return s
  }

  function g2(r, e) {
    var t = -1,
      n = r.length;
    for (e || (e = Array(n)); ++t < n;) e[t] = r[t];
    return e
  }

  function v2(r, e, t) {
    var n = e & Ue,
      i = Wr(r);

    function a() {
      var o = this && this !== Hr && this instanceof a ? i : r;
      return o.apply(n ? t : this, arguments)
    }
    return a
  }

  function Wr(r) {
    return function() {
      var e = arguments;
      switch (e.length) {
        case 0:
          return new r;
        case 1:
          return new r(e[0]);
        case 2:
          return new r(e[0], e[1]);
        case 3:
          return new r(e[0], e[1], e[2]);
        case 4:
          return new r(e[0], e[1], e[2], e[3]);
        case 5:
          return new r(e[0], e[1], e[2], e[3], e[4]);
        case 6:
          return new r(e[0], e[1], e[2], e[3], e[4], e[5]);
        case 7:
          return new r(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
      }
      var t = l2(r.prototype),
        n = r.apply(t, e);
      return cr(n) ? n : t
    }
  }

  function _2(r, e, t) {
    var n = Wr(r);

    function i() {
      for (var a = arguments.length, o = Array(a), u = a, f = Ni(i); u--;) o[u] = arguments[u];
      var c = a < 3 && o[0] !== f && o[a - 1] !== f ? [] : Mi(o, f);
      if (a -= c.length, a < t) return js(r, e, Ci, i.placeholder, void 0, o, c, void 0, void 0, t - a);
      var l = this && this !== Hr && this instanceof i ? n : r;
      return Fi(l, this, o)
    }
    return i
  }

  function Ci(r, e, t, n, i, a, o, u, f, c) {
    var l = e & Ms,
      s = e & Ue,
      h = e & rn,
      y = e & (sr | Vr),
      w = e & Ds,
      S = h ? void 0 : Wr(r);

    function O() {
      for (var b = arguments.length, E = Array(b), d = b; d--;) E[d] = arguments[d];
      if (y) var I = Ni(O),
        T = n2(E, I);
      if (n && (E = p2(E, n, i, y)), a && (E = y2(E, a, o, y)), b -= T, y && b < c) {
        var F = Mi(E, I);
        return js(r, e, Ci, O.placeholder, t, E, F, u, f, c - b)
      }
      var m = s ? t : this,
        g = h ? m[r] : r;
      return b = E.length, u ? E = S2(E, u) : w && b > 1 && E.reverse(), l && f < b && (E.length = f), this && this !== Hr && this instanceof O && (g = S || Wr(g)), g.apply(m, E)
    }
    return O
  }

  function m2(r, e, t, n) {
    var i = e & Ue,
      a = Wr(r);

    function o() {
      for (var u = -1, f = arguments.length, c = -1, l = n.length, s = Array(l + f), h = this && this !== Hr && this instanceof o ? a : r; ++c < l;) s[c] = n[c];
      for (; f--;) s[c++] = arguments[++u];
      return Fi(h, i ? t : this, s)
    }
    return o
  }

  function js(r, e, t, n, i, a, o, u, f, c) {
    var l = e & sr,
      s = l ? o : void 0,
      h = l ? void 0 : o,
      y = l ? a : void 0,
      w = l ? void 0 : a;
    e |= l ? qe : Gr, e &= ~(l ? Gr : qe), e & RI || (e &= ~(Ue | rn));
    var S = t(r, e, i, y, s, w, h, u, f, c);
    return S.placeholder = n, Gs(S, r, e)
  }

  function w2(r, e, t, n, i, a, o, u) {
    var f = e & rn;
    if (!f && typeof r != "function") throw new TypeError(TI);
    var c = n ? n.length : 0;
    if (c || (e &= ~(qe | Gr), n = i = void 0), o = o === void 0 ? o : fr(Hs(o), 0), u = u === void 0 ? u : Hs(u), c -= i ? i.length : 0, e & Gr) {
      var l = n,
        s = i;
      n = i = void 0
    }
    var h = [r, e, t, n, i, l, s, a, o, u];
    if (r = h[0], e = h[1], t = h[2], n = h[3], i = h[4], u = h[9] = h[9] == null ? f ? 0 : r.length : fr(h[9] - c, 0), !u && e & (sr | Vr) && (e &= ~(sr | Vr)), !e || e == Ue) var y = v2(r, e, t);
    else e == sr || e == Vr ? y = _2(r, e, u) : (e == qe || e == (Ue | qe)) && !i.length ? y = m2(r, e, t, n) : y = Ci.apply(void 0, h);
    return Gs(y, r, e)
  }

  function Ni(r) {
    var e = r;
    return e.placeholder
  }

  function Vs(r, e) {
    var t = i2(r, e);
    return h2(t) ? t : void 0
  }

  function b2(r) {
    var e = r.match(jI);
    return e ? e[1].split(VI) : []
  }

  function $2(r, e) {
    var t = e.length,
      n = t - 1;
    return e[n] = (t > 1 ? "& " : "") + e[n], e = e.join(t > 2 ? ", " : " "), r.replace(kI, `{
/* [wrapped with ` + e + `] */
`)
  }

  function E2(r, e) {
    return e = e ?? MI, !!e && (typeof r == "number" || zI.test(r)) && r > -1 && r % 1 == 0 && r < e
  }

  function A2(r) {
    return !!Us && Us in r
  }

  function S2(r, e) {
    for (var t = r.length, n = c2(e.length, t), i = g2(r); n--;) {
      var a = e[n];
      r[n] = E2(a, t) ? i[a] : void 0
    }
    return r
  }
  var Gs = ks ? function(r, e, t) {
    var n = e + "";
    return ks(r, "toString", {
      configurable: !0,
      enumerable: !1,
      value: M2($2(n, I2(b2(n), t)))
    })
  } : D2;

  function O2(r) {
    if (r != null) {
      try {
        return qs.call(r)
      } catch {}
      try {
        return r + ""
      } catch {}
    }
    return ""
  }

  function I2(r, e) {
    return JI(CI, function(t) {
      var n = "_." + t[0];
      e & t[1] && !QI(r, n) && r.push(n)
    }), r.sort()
  }
  var Bi = d2(function(r, e) {
    var t = Mi(e, Ni(Bi));
    return w2(r, qe, void 0, e, t)
  });

  function x2(r) {
    var e = cr(r) ? Ls.call(r) : "";
    return e == NI || e == BI
  }

  function cr(r) {
    var e = typeof r;
    return !!r && (e == "object" || e == "function")
  }

  function P2(r) {
    return !!r && typeof r == "object"
  }

  function T2(r) {
    return typeof r == "symbol" || P2(r) && Ls.call(r) == UI
  }

  function R2(r) {
    if (!r) return r === 0 ? r : 0;
    if (r = F2(r), r === Cs || r === -Cs) {
      var e = r < 0 ? -1 : 1;
      return e * DI
    }
    return r === r ? r : 0
  }

  function Hs(r) {
    var e = R2(r),
      t = e % 1;
    return e === e ? t ? e - t : e : 0
  }

  function F2(r) {
    if (typeof r == "number") return r;
    if (T2(r)) return Ns;
    if (cr(r)) {
      var e = typeof r.valueOf == "function" ? r.valueOf() : r;
      r = cr(e) ? e + "" : e
    }
    if (typeof r != "string") return r === 0 ? r : +r;
    r = r.replace(LI, "");
    var t = HI.test(r);
    return t || XI.test(r) ? YI(r.slice(2), t ? 2 : 8) : GI.test(r) ? Ns : +r
  }

  function M2(r) {
    return function() {
      return r
    }
  }

  function D2(r) {
    return r
  }
  Bi.placeholder = {};
  var C2 = Bi,
    Ws = be(C2);

  function N2(r, e) {
    return {
      ...xi(e, ["address_id", "external_variant_id", "external_product_id", "charge_interval_frequency", "order_interval_frequency", "price", "status"]),
      customer_id: parseInt(r, 10),
      shopify_variant_id: e.external_variant_id.ecommerce ? parseInt(e.external_variant_id.ecommerce, 10) : void 0,
      ...e.charge_interval_frequency ? {
        charge_interval_frequency: `${e.charge_interval_frequency}`
      } : {},
      ...e.order_interval_frequency ? {
        order_interval_frequency: `${e.order_interval_frequency}`
      } : {},
      status: e.status ? e.status.toUpperCase() : void 0
    }
  }

  function B2(r, e) {
    return {
      ...xi(e, ["external_variant_id", "external_product_id", "charge_interval_frequency", "order_interval_frequency", "price", "use_external_variant_defaults"]),
      shopify_variant_id: e.external_variant_id?.ecommerce ? parseInt(e.external_variant_id.ecommerce, 10) : void 0,
      ...e.charge_interval_frequency ? {
        charge_interval_frequency: `${e.charge_interval_frequency}`
      } : void 0,
      ...e.order_interval_frequency ? {
        order_interval_frequency: `${e.order_interval_frequency}`
      } : void 0,
      force_update: r
    }
  }

  function Xs(r) {
    const {
      id: e,
      address_id: t,
      customer_id: n,
      analytics_data: i,
      cancellation_reason: a,
      cancellation_reason_comments: o,
      cancelled_at: u,
      charge_interval_frequency: f,
      created_at: c,
      expire_after_specific_number_of_charges: l,
      shopify_product_id: s,
      shopify_variant_id: h,
      has_queued_charges: y,
      is_prepaid: w,
      is_skippable: S,
      is_swappable: O,
      max_retries_reached: b,
      next_charge_scheduled_at: E,
      order_day_of_month: d,
      order_day_of_week: I,
      order_interval_frequency: T,
      order_interval_unit: F,
      presentment_currency: m,
      price: g,
      product_title: v,
      properties: A,
      quantity: x,
      sku: M,
      sku_override: z,
      status: me,
      updated_at: lr,
      variant_title: we
    } = r;
    return {
      id: e,
      address_id: t,
      customer_id: n,
      analytics_data: i,
      cancellation_reason: a,
      cancellation_reason_comments: o,
      cancelled_at: u,
      charge_interval_frequency: parseInt(f, 10),
      created_at: c,
      expire_after_specific_number_of_charges: l,
      external_product_id: {
        ecommerce: `${s}`
      },
      external_variant_id: {
        ecommerce: `${h}`
      },
      has_queued_charges: ms(y),
      is_prepaid: w,
      is_skippable: S,
      is_swappable: O,
      max_retries_reached: ms(b),
      next_charge_scheduled_at: E,
      order_day_of_month: d,
      order_day_of_week: I,
      order_interval_frequency: parseInt(T, 10),
      order_interval_unit: F,
      presentment_currency: m,
      price: `${g}`,
      product_title: v ?? "",
      properties: A,
      quantity: x,
      sku: M,
      sku_override: z,
      status: me.toLowerCase(),
      updated_at: lr,
      variant_title: we
    }
  }
  async function U2(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      subscription: n
    } = await $("get", "/subscriptions", {
      id: e,
      query: {
        include: t?.include
      }
    }, _(r, "getSubscription"));
    return n
  }

  function q2(r, e) {
    return $("get", "/subscriptions", {
      query: e
    }, _(r, "listSubscriptions"))
  }
  async function L2(r, e, t) {
    const {
      subscription: n
    } = await $("post", "/subscriptions", {
      data: e,
      query: t
    }, _(r, "createSubscription"));
    return n
  }
  async function k2(r, e, t, n) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      subscription: i
    } = await $("put", "/subscriptions", {
      id: e,
      data: t,
      query: n
    }, _(r, "updateSubscription"));
    return i
  }
  async function j2(r, e, t, n) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      subscription: i
    } = await $("post", `/subscriptions/${e}/set_next_charge_date`, {
      data: {
        date: t
      },
      query: n
    }, _(r, "updateSubscriptionChargeDate"));
    return i
  }
  async function V2(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      subscription: n
    } = await $("post", `/subscriptions/${e}/change_address`, {
      data: {
        address_id: t
      }
    }, _(r, "updateSubscriptionAddress"));
    return n
  }
  async function G2(r, e, t, n) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      subscription: i
    } = await $("post", `/subscriptions/${e}/cancel`, {
      data: t,
      query: n
    }, _(r, "cancelSubscription"));
    return i
  }
  async function H2(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      subscription: n
    } = await $("post", `/subscriptions/${e}/activate`, {
      query: t
    }, _(r, "activateSubscription"));
    return n
  }
  async function W2(r, e, t) {
    if (e === void 0 || e === "") throw new Error("ID is required");
    const {
      charge: n
    } = await $("post", `/subscriptions/${e}/charges/skip`, {
      data: {
        date: t,
        subscription_id: `${e}`
      }
    }, _(r, "skipSubscriptionCharge"));
    return n
  }
  async function X2(r, e, t) {
    if (e === void 0 || e.length === 0) throw new Error("Subscription IDs are required");
    const {
      onetimes: n
    } = await $("post", "/purchase_items/skip_gift", {
      data: {
        purchase_item_ids: e.map(Number),
        recipient_address: t
      }
    }, _(r, "skipGiftSubscriptionCharge"));
    return n
  }
  async function z2(r, e, t) {
    const n = e.length;
    if (n < 1 || n > 21) throw new Error("Number of subscriptions must be between 1 and 20.");
    const {
      customerId: i
    } = r;
    if (!i) throw new Error("No customerId in session.");
    const a = e[0].address_id;
    if (!e.every(l => l.address_id === a)) throw new Error("All subscriptions must have the same address_id.");
    const o = Ws(N2, i),
      u = e.map(o);
    let f;
    t?.allow_onetimes !== void 0 && (f = {
      allow_onetimes: t.allow_onetimes
    });
    const {
      subscriptions: c
    } = await $("post", `/addresses/${a}/subscriptions-bulk`, {
      data: {
        subscriptions: u,
        commit_update: !!t?.commit
      },
      headers: {
        "X-Recharge-Version": "2021-01"
      },
      query: f
    }, _(r, "createSubscriptions"));
    return c.map(Xs)
  }
  async function Y2(r, e, t, n) {
    if (e === void 0 || e === "") throw new Error("Address ID is required");
    const i = t.length;
    if (i < 1 || i > 21) throw new Error("Number of subscriptions must be between 1 and 20.");
    const {
      customerId: a
    } = r;
    if (!a) throw new Error("No customerId in session.");
    const o = Ws(B2, !!n?.force_update),
      u = t.map(o);
    let f;
    n?.allow_onetimes !== void 0 && (f = {
      allow_onetimes: n.allow_onetimes
    });
    const {
      subscriptions: c
    } = await $("put", `/addresses/${e}/subscriptions-bulk`, {
      data: {
        subscriptions: u,
        commit_update: !!n?.commit
      },
      headers: {
        "X-Recharge-Version": "2021-01"
      },
      query: f
    }, _(r, "updateSubscriptions"));
    return c.map(Xs)
  }
  async function K2(r, e, t, n) {
    if (e === void 0 || e === "") throw new Error("Address ID is required");
    const i = t.length;
    if (i < 1 || i > 21) throw new Error("Number of subscriptions must be between 1 and 20.");
    const {
      customerId: a
    } = r;
    if (!a) throw new Error("No customerId in session.");
    let o;
    n?.allow_onetimes !== void 0 && (o = {
      allow_onetimes: n.allow_onetimes
    }), await $("delete", `/addresses/${e}/subscriptions-bulk`, {
      data: {
        subscriptions: t,
        send_email: !!n?.send_email,
        commit_update: !!n?.commit
      },
      headers: {
        "X-Recharge-Version": "2021-01"
      },
      query: o
    }, _(r, "deleteSubscriptions"))
  }
  var Z2 = Object.freeze({
    __proto__: null,
    activateSubscription: H2,
    cancelSubscription: G2,
    createSubscription: L2,
    createSubscriptions: z2,
    deleteSubscriptions: K2,
    getSubscription: U2,
    listSubscriptions: q2,
    skipGiftSubscriptionCharge: X2,
    skipSubscriptionCharge: W2,
    updateSubscription: k2,
    updateSubscriptionAddress: V2,
    updateSubscriptionChargeDate: j2,
    updateSubscriptions: Y2
  });
  const J2 = {
    get(r, e) {
      return ue("get", r, e)
    },
    post(r, e) {
      return ue("post", r, e)
    },
    put(r, e) {
      return ue("put", r, e)
    },
    delete(r, e) {
      return ue("delete", r, e)
    }
  };

  function Q2(r) {
    if (r) return r;
    if (window?.Shopify?.shop) return window.Shopify.shop;
    let e = window?.domain;
    if (!e) {
      const t = location?.href.match(/(?:http[s]*:\/\/)*(.*?)\.(?=admin\.rechargeapps\.com)/i)?.[1].replace(/-sp$/, "");
      t && (e = `${t}.myshopify.com`)
    }
    if (e) return e;
    throw new Error("No storeIdentifier was passed into init.")
  }

  function ex(r = {}) {
    const e = r,
      {
        storefrontAccessToken: t
      } = r;
    if (t && !t.startsWith("strfnt")) throw new Error("Incorrect storefront access token used. See https://storefront.rechargepayments.com/client/docs/getting_started/package_setup/#initialization-- for more information.");
    sh({
      storeIdentifier: Q2(r.storeIdentifier),
      loginRetryFn: r.loginRetryFn,
      storefrontAccessToken: t,
      appName: r.appName,
      appVersion: r.appVersion,
      environment: e.environment ? e.environment : "prod",
      environmentUri: e.environmentUri,
      customerHash: e.customerHash
    }), Ss()
  }
  const zs = {
    init: ex,
    api: J2,
    address: $h,
    auth: Fh,
    bundle: YA,
    charge: PO,
    cdn: bO,
    collection: DO,
    credit: WO,
    customer: jO,
    gift: YO,
    membership: rI,
    membershipProgram: iI,
    metafield: sI,
    onetime: pI,
    order: _I,
    paymentMethod: EI,
    plan: OI,
    product: TO,
    store: PI,
    subscription: Z2
  };
  try {
    zs.init()
  } catch {}
  return zs
});