(function(global, factory) {
  typeof module == "object" && typeof module.exports == "object" ? module.exports = global.document ? factory(global, !0) : function(w) {
    if (!w.document) throw new Error("Flits requires a window with a document");
    return factory(w)
  } : factory(global)
})(typeof window < "u" ? window : this, (function(window2, noGlobal) {
  var arr = [],
    document2 = window2.document,
    slice = arr.slice,
    concat = arr.concat,
    push = arr.push,
    indexOf = arr.indexOf,
    class2type = {},
    toString = class2type.toString,
    hasOwn = class2type.hasOwnProperty,
    support = {},
    version = "2.2.5-pre b14ce54334a568eaaa107be4c441660a57c3db24",
    Flits2 = function(selector, context) {
      return new Flits2.fn.init(selector, context)
    },
    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    rmsPrefix = /^-ms-/,
    rdashAlpha = /-([\da-z])/gi,
    fcamelCase = function(all, letter) {
      return letter.toUpperCase()
    };
  Flits2.module = Flits2.fn = Flits2.prototype = {
    Flits: version,
    constructor: Flits2,
    selector: "",
    length: 0,
    toArray: function() {
      return slice.call(this)
    },
    get: function(num) {
      return num != null ? num < 0 ? this[num + this.length] : this[num] : slice.call(this)
    },
    pushStack: function(elems) {
      var ret = Flits2.merge(this.constructor(), elems);
      return ret.prevObject = this, ret.context = this.context, ret
    },
    each: function(callback) {
      return Flits2.each(this, callback)
    },
    map: function(callback) {
      return this.pushStack(Flits2.map(this, (function(elem, i) {
        return callback.call(elem, i, elem)
      })))
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(i) {
      var len = this.length,
        j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push,
    sort: arr.sort,
    splice: arr.splice
  }, Flits2.extend = Flits2.fn.extend = function() {
    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = !1;
    for (typeof target == "boolean" && (deep = target, target = arguments[i] || {}, i++), typeof target != "object" && !Flits2.isFunction(target) && (target = {}), i === length && (target = this, i--); i < length; i++)
      if ((options = arguments[i]) != null)
        for (name in options) src = target[name], copy = options[name], target !== copy && (deep && copy && (Flits2.isPlainObject(copy) || (copyIsArray = Flits2.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && Flits2.isArray(src) ? src : []) : clone = src && Flits2.isPlainObject(src) ? src : {}, target[name] = Flits2.extend(deep, clone, copy)) : copy !== void 0 && (target[name] = copy));
    return target
  }, Flits2.extend({
    expando: "Flits" + (version + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(msg) {
      throw new Error(msg)
    },
    noop: function() {},
    isFunction: function(obj) {
      return Flits2.type(obj) === "function"
    },
    isArray: Array.isArray,
    isWindow: function(obj) {
      return obj != null && obj === obj.window
    },
    isNumeric: function(obj) {
      var realStringObj = obj && obj.toString();
      return !Flits2.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0
    },
    isPlainObject: function(obj) {
      var key;
      if (Flits2.type(obj) !== "object" || obj.nodeType || Flits2.isWindow(obj) || obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) return !1;
      for (key in obj);
      return key === void 0 || hasOwn.call(obj, key)
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) return !1;
      return !0
    },
    type: function(obj) {
      return obj == null ? obj + "" : typeof obj == "object" || typeof obj == "function" ? class2type[toString.call(obj)] || "object" : typeof obj
    },
    globalEval: function(code) {
      var script, indirect = eval;
      code = Flits2.trim(code), code && (code.indexOf("use strict") === 1 ? (script = document2.createElement("script"), script.text = code, document2.head.appendChild(script).parentNode.removeChild(script)) : indirect(code))
    },
    camelCase: function(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
    },
    nodeName: function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
    },
    each: function(obj, callback) {
      var length, i = 0;
      if (isArrayLike(obj))
        for (length = obj.length; i < length && callback.call(obj[i], i, obj[i]) !== !1; i++);
      else
        for (i in obj)
          if (callback.call(obj[i], i, obj[i]) === !1) break;
      return obj
    },
    trim: function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "")
    },
    makeArray: function(arr2, results) {
      var ret = results || [];
      return arr2 != null && (isArrayLike(Object(arr2)) ? Flits2.merge(ret, typeof arr2 == "string" ? [arr2] : arr2) : push.call(ret, arr2)), ret
    },
    inArray: function(elem, arr2, i) {
      return arr2 == null ? -1 : indexOf.call(arr2, elem, i)
    },
    merge: function(first, second) {
      for (var len = +second.length, j = 0, i = first.length; j < len; j++) first[i++] = second[j];
      return first.length = i, first
    },
    grep: function(elems, callback, invert) {
      for (var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert; i < length; i++) callbackInverse = !callback(elems[i], i), callbackInverse !== callbackExpect && matches.push(elems[i]);
      return matches
    },
    map: function(elems, callback, arg) {
      var length, value, i = 0,
        ret = [];
      if (isArrayLike(elems))
        for (length = elems.length; i < length; i++) value = callback(elems[i], i, arg), value != null && ret.push(value);
      else
        for (i in elems) value = callback(elems[i], i, arg), value != null && ret.push(value);
      return concat.apply([], ret)
    },
    guid: 1,
    proxy: function(fn, context) {
      var tmp, args, proxy;
      if (typeof context == "string" && (tmp = fn[context], context = fn, fn = tmp), !!Flits2.isFunction(fn)) return args = slice.call(arguments, 2), proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)))
      }, proxy.guid = fn.guid = fn.guid || Flits2.guid++, proxy
    },
    now: Date.now,
    support
  }), typeof Symbol == "function" && (Flits2.fn[Symbol.iterator] = arr[Symbol.iterator]), Flits2.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase()
  }));

  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length,
      type = Flits2.type(obj);
    return type === "function" || Flits2.isWindow(obj) ? !1 : type === "array" || length === 0 || typeof length == "number" && length > 0 && length - 1 in obj
  }
  var Sizzle = (function(window3) {
    var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date,
      preferredDoc = window3.document,
      dirruns = 0,
      done = 0,
      classCache = createCache(),
      tokenCache = createCache(),
      compilerCache = createCache(),
      sortOrder = function(a, b2) {
        return a === b2 && (hasDuplicate = !0), 0
      },
      MAX_NEGATIVE = 1 << 31,
      hasOwn2 = {}.hasOwnProperty,
      arr2 = [],
      pop = arr2.pop,
      push_native = arr2.push,
      push2 = arr2.push,
      slice2 = arr2.slice,
      indexOf2 = function(list, elem) {
        for (var i2 = 0, len = list.length; i2 < len; i2++)
          if (list[i2] === elem) return i2;
        return -1
      },
      booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      whitespace = "[\\x20\\t\\r\\n\\f]",
      identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]",
      pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)",
      rwhitespace = new RegExp(whitespace + "+", "g"),
      rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
      rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
      rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
      rattributeQuotes = new RegExp("=" + whitespace + `*([^\\]'"]*?)` + whitespace + "*\\]", "g"),
      rpseudo = new RegExp(pseudos),
      ridentifier = new RegExp("^" + identifier + "$"),
      matchExpr = {
        ID: new RegExp("^#(" + identifier + ")"),
        CLASS: new RegExp("^\\.(" + identifier + ")"),
        TAG: new RegExp("^(" + identifier + "|[*])"),
        ATTR: new RegExp("^" + attributes),
        PSEUDO: new RegExp("^" + pseudos),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + booleans + ")$", "i"),
        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
      },
      rinputs = /^(?:input|select|textarea|button)$/i,
      rheader = /^h\d$/i,
      rnative = /^[^{]+\{\s*\[native \w/,
      rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      rsibling = /[+~]/,
      rescape = /'|\\/g,
      runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
      funescape = function(_, escaped, escapedWhitespace) {
        var high = "0x" + escaped - 65536;
        return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
      },
      unloadHandler = function() {
        setDocument()
      };
    try {
      push2.apply(arr2 = slice2.call(preferredDoc.childNodes), preferredDoc.childNodes), arr2[preferredDoc.childNodes.length].nodeType
    } catch {
      push2 = {
        apply: arr2.length ? function(target, els) {
          push_native.apply(target, slice2.call(els))
        } : function(target, els) {
          for (var j = target.length, i2 = 0; target[j++] = els[i2++];);
          target.length = j - 1
        }
      }
    }

    function Sizzle2(selector, context, results, seed) {
      var m, i2, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument,
        nodeType = context ? context.nodeType : 9;
      if (results = results || [], typeof selector != "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
      if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== document3 && setDocument(context), context = context || document3, documentIsHTML)) {
        if (nodeType !== 11 && (match = rquickExpr2.exec(selector)))
          if (m = match[1]) {
            if (nodeType === 9)
              if (elem = context.getElementById(m)) {
                if (elem.id === m) return results.push(elem), results
              } else return results;
            else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results
          } else {
            if (match[2]) return push2.apply(results, context.getElementsByTagName(selector)), results;
            if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) return push2.apply(results, context.getElementsByClassName(m)), results
          } if (support2.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          if (nodeType !== 1) newContext = context, newSelector = selector;
          else if (context.nodeName.toLowerCase() !== "object") {
            for ((nid = context.getAttribute("id")) ? nid = nid.replace(rescape, "\\$&") : context.setAttribute("id", nid = expando), groups = tokenize(selector), i2 = groups.length, nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']"; i2--;) groups[i2] = nidselect + " " + toSelector(groups[i2]);
            newSelector = groups.join(","), newContext = rsibling.test(selector) && testContext(context.parentNode) || context
          }
          if (newSelector) try {
            return push2.apply(results, newContext.querySelectorAll(newSelector)), results
          } catch {} finally {
            nid === expando && context.removeAttribute("id")
          }
        }
      }
      return select(selector.replace(rtrim2, "$1"), context, results, seed)
    }

    function createCache() {
      var keys = [];

      function cache(key, value) {
        return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value
      }
      return cache
    }

    function markFunction(fn) {
      return fn[expando] = !0, fn
    }

    function assert(fn) {
      var div = document3.createElement("div");
      try {
        return !!fn(div)
      } catch {
        return !1
      } finally {
        div.parentNode && div.parentNode.removeChild(div), div = null
      }
    }

    function addHandle(attrs, handler) {
      for (var arr3 = attrs.split("|"), i2 = arr3.length; i2--;) Expr.attrHandle[arr3[i2]] = handler
    }

    function siblingCheck(a, b2) {
      var cur = b2 && a,
        diff = cur && a.nodeType === 1 && b2.nodeType === 1 && (~b2.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
      if (diff) return diff;
      if (cur) {
        for (; cur = cur.nextSibling;)
          if (cur === b2) return -1
      }
      return a ? 1 : -1
    }

    function createInputPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type
      }
    }

    function createButtonPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type
      }
    }

    function createPositionalPseudo(fn) {
      return markFunction((function(argument) {
        return argument = +argument, markFunction((function(seed, matches2) {
          for (var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length; i2--;) seed[j = matchIndexes[i2]] && (seed[j] = !(matches2[j] = seed[j]))
        }))
      }))
    }

    function testContext(context) {
      return context && typeof context.getElementsByTagName < "u" && context
    }
    support2 = Sizzle2.support = {}, isXML = Sizzle2.isXML = function(elem) {
      var documentElement2 = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement2 ? documentElement2.nodeName !== "HTML" : !1
    }, setDocument = Sizzle2.setDocument = function(node) {
      var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
      return doc === document3 || doc.nodeType !== 9 || !doc.documentElement || (document3 = doc, docElem = document3.documentElement, documentIsHTML = !isXML(document3), (parent = document3.defaultView) && parent.top !== parent && (parent.addEventListener ? parent.addEventListener("unload", unloadHandler, !1) : parent.attachEvent && parent.attachEvent("onunload", unloadHandler)), support2.attributes = assert((function(div) {
        return div.className = "i", !div.getAttribute("className")
      })), support2.getElementsByTagName = assert((function(div) {
        return div.appendChild(document3.createComment("")), !div.getElementsByTagName("*").length
      })), support2.getElementsByClassName = rnative.test(document3.getElementsByClassName), support2.getById = assert((function(div) {
        return docElem.appendChild(div).id = expando, !document3.getElementsByName || !document3.getElementsByName(expando).length
      })), support2.getById ? (Expr.find.ID = function(id, context) {
        if (typeof context.getElementById < "u" && documentIsHTML) {
          var m = context.getElementById(id);
          return m ? [m] : []
        }
      }, Expr.filter.ID = function(id) {
        var attrId = id.replace(runescape, funescape);
        return function(elem) {
          return elem.getAttribute("id") === attrId
        }
      }) : (delete Expr.find.ID, Expr.filter.ID = function(id) {
        var attrId = id.replace(runescape, funescape);
        return function(elem) {
          var node2 = typeof elem.getAttributeNode < "u" && elem.getAttributeNode("id");
          return node2 && node2.value === attrId
        }
      }), Expr.find.TAG = support2.getElementsByTagName ? function(tag, context) {
        if (typeof context.getElementsByTagName < "u") return context.getElementsByTagName(tag);
        if (support2.qsa) return context.querySelectorAll(tag)
      } : function(tag, context) {
        var elem, tmp = [],
          i2 = 0,
          results = context.getElementsByTagName(tag);
        if (tag === "*") {
          for (; elem = results[i2++];) elem.nodeType === 1 && tmp.push(elem);
          return tmp
        }
        return results
      }, Expr.find.CLASS = support2.getElementsByClassName && function(className, context) {
        if (typeof context.getElementsByClassName < "u" && documentIsHTML) return context.getElementsByClassName(className)
      }, rbuggyMatches = [], rbuggyQSA = [], (support2.qsa = rnative.test(document3.querySelectorAll)) && (assert((function(div) {
        docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>", div.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`), div.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), div.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), div.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), div.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]")
      })), assert((function(div) {
        var input = document3.createElement("input");
        input.setAttribute("type", "hidden"), div.appendChild(input).setAttribute("name", "D"), div.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), div.querySelectorAll(":enabled").length || rbuggyQSA.push(":enabled", ":disabled"), div.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:")
      }))), (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert((function(div) {
        support2.disconnectedMatch = matches.call(div, "div"), matches.call(div, "[s!='']:x"), rbuggyMatches.push("!=", pseudos)
      })), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function(a, b2) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
          bup = b2 && b2.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16))
      } : function(a, b2) {
        if (b2) {
          for (; b2 = b2.parentNode;)
            if (b2 === a) return !0
        }
        return !1
      }, sortOrder = hasCompare ? function(a, b2) {
        if (a === b2) return hasDuplicate = !0, 0;
        var compare = !a.compareDocumentPosition - !b2.compareDocumentPosition;
        return compare || (compare = (a.ownerDocument || a) === (b2.ownerDocument || b2) ? a.compareDocumentPosition(b2) : 1, compare & 1 || !support2.sortDetached && b2.compareDocumentPosition(a) === compare ? a === document3 || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b2 === document3 || b2.ownerDocument === preferredDoc && contains(preferredDoc, b2) ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b2) : 0 : compare & 4 ? -1 : 1)
      } : function(a, b2) {
        if (a === b2) return hasDuplicate = !0, 0;
        var cur, i2 = 0,
          aup = a.parentNode,
          bup = b2.parentNode,
          ap = [a],
          bp = [b2];
        if (!aup || !bup) return a === document3 ? -1 : b2 === document3 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b2) : 0;
        if (aup === bup) return siblingCheck(a, b2);
        for (cur = a; cur = cur.parentNode;) ap.unshift(cur);
        for (cur = b2; cur = cur.parentNode;) bp.unshift(cur);
        for (; ap[i2] === bp[i2];) i2++;
        return i2 ? siblingCheck(ap[i2], bp[i2]) : ap[i2] === preferredDoc ? -1 : bp[i2] === preferredDoc ? 1 : 0
      }), document3
    }, Sizzle2.matches = function(expr, elements) {
      return Sizzle2(expr, null, null, elements)
    }, Sizzle2.matchesSelector = function(elem, expr) {
      if ((elem.ownerDocument || elem) !== document3 && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support2.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
        var ret = matches.call(elem, expr);
        if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) return ret
      } catch {}
      return Sizzle2(expr, document3, null, [elem]).length > 0
    }, Sizzle2.contains = function(context, elem) {
      return (context.ownerDocument || context) !== document3 && setDocument(context), contains(context, elem)
    }, Sizzle2.attr = function(elem, name) {
      (elem.ownerDocument || elem) !== document3 && setDocument(elem);
      var fn = Expr.attrHandle[name.toLowerCase()],
        val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
      return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
    }, Sizzle2.error = function(msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg)
    }, Sizzle2.uniqueSort = function(results) {
      var elem, duplicates = [],
        j = 0,
        i2 = 0;
      if (hasDuplicate = !support2.detectDuplicates, sortInput = !support2.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) {
        for (; elem = results[i2++];) elem === results[i2] && (j = duplicates.push(i2));
        for (; j--;) results.splice(duplicates[j], 1)
      }
      return sortInput = null, results
    }, getText = Sizzle2.getText = function(elem) {
      var node, ret = "",
        i2 = 0,
        nodeType = elem.nodeType;
      if (nodeType) {
        if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
          if (typeof elem.textContent == "string") return elem.textContent;
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem)
        } else if (nodeType === 3 || nodeType === 4) return elem.nodeValue
      } else
        for (; node = elem[i2++];) ret += getText(node);
      return ret
    }, Expr = Sizzle2.selectors = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(match) {
          return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), match[2] === "~=" && (match[3] = " " + match[3] + " "), match.slice(0, 4)
        },
        CHILD: function(match) {
          return match[1] = match[1].toLowerCase(), match[1].slice(0, 3) === "nth" ? (match[3] || Sizzle2.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd")), match[5] = +(match[7] + match[8] || match[3] === "odd")) : match[3] && Sizzle2.error(match[0]), match
        },
        PSEUDO: function(match) {
          var excess, unquoted = !match[6] && match[2];
          return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3))
        }
      },
      filter: {
        TAG: function(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return !0
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
          }
        },
        CLASS: function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, (function(elem) {
            return pattern.test(typeof elem.className == "string" && elem.className || typeof elem.getAttribute < "u" && elem.getAttribute("class") || "")
          }))
        },
        ATTR: function(name, operator, check) {
          return function(elem) {
            var result = Sizzle2.attr(elem, name);
            return result == null ? operator === "!=" : operator ? (result += "", operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : !1) : !0
          }
        },
        CHILD: function(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
            forward = type.slice(-4) !== "last",
            ofType = what === "of-type";
          return first === 1 && last === 0 ? function(elem) {
            return !!elem.parentNode
          } : function(elem, context, xml) {
            var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling",
              parent = elem.parentNode,
              name = ofType && elem.nodeName.toLowerCase(),
              useCache = !xml && !ofType,
              diff = !1;
            if (parent) {
              if (simple) {
                for (; dir2;) {
                  for (node = elem; node = node[dir2];)
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) return !1;
                  start = dir2 = type === "only" && !start && "nextSibling"
                }
                return !0
              }
              if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                for (node = parent, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop();)
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break
                  }
              } else if (useCache && (node = elem, outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), cache = uniqueCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex), diff === !1)
                for (;
                  (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) && !((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff && (useCache && (outerCache = node[expando] || (node[expando] = {}), uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {}), uniqueCache[type] = [dirruns, diff]), node === elem)););
              return diff -= last, diff === first || diff % first === 0 && diff / first >= 0
            }
          }
        },
        PSEUDO: function(pseudo, argument) {
          var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
          return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction((function(seed, matches2) {
            for (var idx, matched = fn(seed, argument), i2 = matched.length; i2--;) idx = indexOf2(seed, matched[i2]), seed[idx] = !(matches2[idx] = matched[i2])
          })) : function(elem) {
            return fn(elem, 0, args)
          }) : fn
        }
      },
      pseudos: {
        not: markFunction((function(selector) {
          var input = [],
            results = [],
            matcher = compile(selector.replace(rtrim2, "$1"));
          return matcher[expando] ? markFunction((function(seed, matches2, context, xml) {
            for (var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length; i2--;)(elem = unmatched[i2]) && (seed[i2] = !(matches2[i2] = elem))
          })) : function(elem, context, xml) {
            return input[0] = elem, matcher(input, null, xml, results), input[0] = null, !results.pop()
          }
        })),
        has: markFunction((function(selector) {
          return function(elem) {
            return Sizzle2(selector, elem).length > 0
          }
        })),
        contains: markFunction((function(text) {
          return text = text.replace(runescape, funescape),
            function(elem) {
              return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1
            }
        })),
        lang: markFunction((function(lang) {
          return ridentifier.test(lang || "") || Sizzle2.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(),
            function(elem) {
              var elemLang;
              do
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return elemLang = elemLang.toLowerCase(), elemLang === lang || elemLang.indexOf(lang + "-") === 0; while ((elem = elem.parentNode) && elem.nodeType === 1);
              return !1
            }
        })),
        target: function(elem) {
          var hash = window3.location && window3.location.hash;
          return hash && hash.slice(1) === elem.id
        },
        root: function(elem) {
          return elem === docElem
        },
        focus: function(elem) {
          return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
        },
        enabled: function(elem) {
          return elem.disabled === !1
        },
        disabled: function(elem) {
          return elem.disabled === !0
        },
        checked: function(elem) {
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected
        },
        selected: function(elem) {
          return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0
        },
        empty: function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling)
            if (elem.nodeType < 6) return !1;
          return !0
        },
        parent: function(elem) {
          return !Expr.pseudos.empty(elem)
        },
        header: function(elem) {
          return rheader.test(elem.nodeName)
        },
        input: function(elem) {
          return rinputs.test(elem.nodeName)
        },
        button: function(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button"
        },
        text: function(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text")
        },
        first: createPositionalPseudo((function() {
          return [0]
        })),
        last: createPositionalPseudo((function(matchIndexes, length) {
          return [length - 1]
        })),
        eq: createPositionalPseudo((function(matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument]
        })),
        even: createPositionalPseudo((function(matchIndexes, length) {
          for (var i2 = 0; i2 < length; i2 += 2) matchIndexes.push(i2);
          return matchIndexes
        })),
        odd: createPositionalPseudo((function(matchIndexes, length) {
          for (var i2 = 1; i2 < length; i2 += 2) matchIndexes.push(i2);
          return matchIndexes
        })),
        lt: createPositionalPseudo((function(matchIndexes, length, argument) {
          for (var i2 = argument < 0 ? argument + length : argument; --i2 >= 0;) matchIndexes.push(i2);
          return matchIndexes
        })),
        gt: createPositionalPseudo((function(matchIndexes, length, argument) {
          for (var i2 = argument < 0 ? argument + length : argument; ++i2 < length;) matchIndexes.push(i2);
          return matchIndexes
        }))
      }
    }, Expr.pseudos.nth = Expr.pseudos.eq;
    for (i in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) Expr.pseudos[i] = createInputPseudo(i);
    for (i in {
        submit: !0,
        reset: !0
      }) Expr.pseudos[i] = createButtonPseudo(i);

    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
      var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
      if (cached) return parseOnly ? 0 : cached.slice(0);
      for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar;) {
        (!matched || (match = rcomma.exec(soFar))) && (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({
          value: matched,
          type: match[0].replace(rtrim2, " ")
        }), soFar = soFar.slice(matched.length));
        for (type in Expr.filter)(match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match))) && (matched = match.shift(), tokens.push({
          value: matched,
          type,
          matches: match
        }), soFar = soFar.slice(matched.length));
        if (!matched) break
      }
      return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0)
    };

    function toSelector(tokens) {
      for (var i2 = 0, len = tokens.length, selector = ""; i2 < len; i2++) selector += tokens[i2].value;
      return selector
    }

    function addCombinator(matcher, combinator, base) {
      var dir2 = combinator.dir,
        checkNonElements = base && dir2 === "parentNode",
        doneName = done++;
      return combinator.first ? function(elem, context, xml) {
        for (; elem = elem[dir2];)
          if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml)
      } : function(elem, context, xml) {
        var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
        if (xml) {
          for (; elem = elem[dir2];)
            if ((elem.nodeType === 1 || checkNonElements) && matcher(elem, context, xml)) return !0
        } else
          for (; elem = elem[dir2];)
            if (elem.nodeType === 1 || checkNonElements) {
              if (outerCache = elem[expando] || (elem[expando] = {}), uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {}), (oldCache = uniqueCache[dir2]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
              if (uniqueCache[dir2] = newCache, newCache[2] = matcher(elem, context, xml)) return !0
            }
      }
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        for (var i2 = matchers.length; i2--;)
          if (!matchers[i2](elem, context, xml)) return !1;
        return !0
      } : matchers[0]
    }

    function multipleContexts(selector, contexts, results) {
      for (var i2 = 0, len = contexts.length; i2 < len; i2++) Sizzle2(selector, contexts[i2], results);
      return results
    }

    function condense(unmatched, map, filter, context, xml) {
      for (var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null; i2 < len; i2++)(elem = unmatched[i2]) && (!filter || filter(elem, context, xml)) && (newUnmatched.push(elem), mapped && map.push(i2));
      return newUnmatched
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction((function(seed, results, context, xml) {
        var temp, i2, elem, preMap = [],
          postMap = [],
          preexisting = results.length,
          elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
          matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
          matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
        if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter)
          for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i2 = temp.length; i2--;)(elem = temp[i2]) && (matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem));
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              for (temp = [], i2 = matcherOut.length; i2--;)(elem = matcherOut[i2]) && temp.push(matcherIn[i2] = elem);
              postFinder(null, matcherOut = [], temp, xml)
            }
            for (i2 = matcherOut.length; i2--;)(elem = matcherOut[i2]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i2]) > -1 && (seed[temp] = !(results[temp] = elem))
          }
        } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), postFinder ? postFinder(null, results, matcherOut, xml) : push2.apply(results, matcherOut)
      }))
    }

    function matcherFromTokens(tokens) {
      for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator((function(elem) {
          return elem === checkContext
        }), implicitRelative, !0), matchAnyContext = addCombinator((function(elem) {
          return indexOf2(checkContext, elem) > -1
        }), implicitRelative, !0), matchers = [function(elem, context, xml) {
          var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
          return checkContext = null, ret
        }]; i2 < len; i2++)
        if (matcher = Expr.relative[tokens[i2].type]) matchers = [addCombinator(elementMatcher(matchers), matcher)];
        else {
          if (matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches), matcher[expando]) {
            for (j = ++i2; j < len && !Expr.relative[tokens[j].type]; j++);
            return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(tokens.slice(0, i2 - 1).concat({
              value: tokens[i2 - 2].type === " " ? "*" : ""
            })).replace(rtrim2, "$1"), matcher, i2 < j && matcherFromTokens(tokens.slice(i2, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
          }
          matchers.push(matcher)
        } return elementMatcher(matchers)
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
        byElement = elementMatchers.length > 0,
        superMatcher = function(seed, context, xml, results, outermost) {
          var elem, j, matcher, matchedCount = 0,
            i2 = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            elems = seed || byElement && Expr.find.TAG("*", outermost),
            dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1,
            len = elems.length;
          for (outermost && (outermostContext = context === document3 || context || outermost); i2 !== len && (elem = elems[i2]) != null; i2++) {
            if (byElement && elem) {
              for (j = 0, !context && elem.ownerDocument !== document3 && (setDocument(elem), xml = !documentIsHTML); matcher = elementMatchers[j++];)
                if (matcher(elem, context || document3, xml)) {
                  results.push(elem);
                  break
                } outermost && (dirruns = dirrunsUnique)
            }
            bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem))
          }
          if (matchedCount += i2, bySet && i2 !== matchedCount) {
            for (j = 0; matcher = setMatchers[j++];) matcher(unmatched, setMatched, context, xml);
            if (seed) {
              if (matchedCount > 0)
                for (; i2--;) unmatched[i2] || setMatched[i2] || (setMatched[i2] = pop.call(results));
              setMatched = condense(setMatched)
            }
            push2.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle2.uniqueSort(results)
          }
          return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched
        };
      return bySet ? markFunction(superMatcher) : superMatcher
    }
    return compile = Sizzle2.compile = function(selector, match) {
      var i2, setMatchers = [],
        elementMatchers = [],
        cached = compilerCache[selector + " "];
      if (!cached) {
        for (match || (match = tokenize(selector)), i2 = match.length; i2--;) cached = matcherFromTokens(match[i2]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), cached.selector = selector
      }
      return cached
    }, select = Sizzle2.select = function(selector, context, results, seed) {
      var i2, tokens, token, type, find, compiled = typeof selector == "function" && selector,
        match = !seed && tokenize(selector = compiled.selector || selector);
      if (results = results || [], match.length === 1) {
        if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && (token = tokens[0]).type === "ID" && support2.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], context) compiled && (context = context.parentNode);
          else return results;
          selector = selector.slice(tokens.shift().value.length)
        }
        for (i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i2-- && (token = tokens[i2], !Expr.relative[type = token.type]);)
          if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
            if (tokens.splice(i2, 1), selector = seed.length && toSelector(tokens), !selector) return push2.apply(results, seed), results;
            break
          }
      }
      return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context), results
    }, support2.sortStable = expando.split("").sort(sortOrder).join("") === expando, support2.detectDuplicates = !!hasDuplicate, setDocument(), support2.sortDetached = assert((function(div1) {
      return div1.compareDocumentPosition(document3.createElement("div")) & 1
    })), assert((function(div) {
      return div.innerHTML = "<a href='#'></a>", div.firstChild.getAttribute("href") === "#"
    })) || addHandle("type|href|height|width", (function(elem, name, isXML2) {
      if (!isXML2) return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2)
    })), (!support2.attributes || !assert((function(div) {
      return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), div.firstChild.getAttribute("value") === ""
    }))) && addHandle("value", (function(elem, name, isXML2) {
      if (!isXML2 && elem.nodeName.toLowerCase() === "input") return elem.defaultValue
    })), assert((function(div) {
      return div.getAttribute("disabled") == null
    })) || addHandle(booleans, (function(elem, name, isXML2) {
      var val;
      if (!isXML2) return elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
    })), Sizzle2
  })(window2);
  Flits2.find = Sizzle, Flits2.expr = Sizzle.selectors, Flits2.expr[":"] = Flits2.expr.pseudos, Flits2.uniqueSort = Flits2.unique = Sizzle.uniqueSort, Flits2.text = Sizzle.getText, Flits2.isXMLDoc = Sizzle.isXML, Flits2.contains = Sizzle.contains;
  var dir = function(elem, dir2, until) {
      for (var matched = [], truncate = until !== void 0;
        (elem = elem[dir2]) && elem.nodeType !== 9;)
        if (elem.nodeType === 1) {
          if (truncate && Flits2(elem).is(until)) break;
          matched.push(elem)
        } return matched
    },
    siblings = function(n, elem) {
      for (var matched = []; n; n = n.nextSibling) n.nodeType === 1 && n !== elem && matched.push(n);
      return matched
    },
    rneedsContext = Flits2.expr.match.needsContext,
    rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    risSimple = /^.[^:#\[\.,]*$/;

  function winnow(elements, qualifier, not) {
    if (Flits2.isFunction(qualifier)) return Flits2.grep(elements, (function(elem, i) {
      return !!qualifier.call(elem, i, elem) !== not
    }));
    if (qualifier.nodeType) return Flits2.grep(elements, (function(elem) {
      return elem === qualifier !== not
    }));
    if (typeof qualifier == "string") {
      if (risSimple.test(qualifier)) return Flits2.filter(qualifier, elements, not);
      qualifier = Flits2.filter(qualifier, elements)
    }
    return Flits2.grep(elements, (function(elem) {
      return indexOf.call(qualifier, elem) > -1 !== not
    }))
  }
  Flits2.filter = function(expr, elems, not) {
    var elem = elems[0];
    return not && (expr = ":not(" + expr + ")"), elems.length === 1 && elem.nodeType === 1 ? Flits2.find.matchesSelector(elem, expr) ? [elem] : [] : Flits2.find.matches(expr, Flits2.grep(elems, (function(elem2) {
      return elem2.nodeType === 1
    })))
  }, Flits2.fn.extend({
    find: function(selector) {
      var i, len = this.length,
        ret = [],
        self = this;
      if (typeof selector != "string") return this.pushStack(Flits2(selector).filter((function() {
        for (i = 0; i < len; i++)
          if (Flits2.contains(self[i], this)) return !0
      })));
      for (i = 0; i < len; i++) Flits2.find(selector, self[i], ret);
      return ret = this.pushStack(len > 1 ? Flits2.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], !1))
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], !0))
    },
    is: function(selector) {
      return !!winnow(this, typeof selector == "string" && rneedsContext.test(selector) ? Flits2(selector) : selector || [], !1).length
    }
  });
  var rootFlits, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    init = Flits2.fn.init = function(selector, context, root) {
      var match, elem;
      if (!selector) return this;
      if (root = root || rootFlits, typeof selector == "string")
        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3 ? match = [null, selector, null] : match = rquickExpr.exec(selector), match && (match[1] || !context))
          if (match[1]) {
            if (context = context instanceof Flits2 ? context[0] : context, Flits2.merge(this, Flits2.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document2, !0)), rsingleTag.test(match[1]) && Flits2.isPlainObject(context))
              for (match in context) Flits2.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
            return this
          } else return elem = document2.getElementById(match[2]), elem && elem.parentNode && (this.length = 1, this[0] = elem), this.context = document2, this.selector = selector, this;
      else return !context || context.Flits ? (context || root).find(selector) : this.constructor(context).find(selector);
      else {
        if (selector.nodeType) return this.context = this[0] = selector, this.length = 1, this;
        if (Flits2.isFunction(selector)) return root.ready !== void 0 ? root.ready(selector) : selector(Flits2)
      }
      return selector.selector !== void 0 && (this.selector = selector.selector, this.context = selector.context), Flits2.makeArray(selector, this)
    };
  init.prototype = Flits2.fn, rootFlits = Flits2(document2);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
    guaranteedUnique = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  Flits2.fn.extend({
    has: function(target) {
      var targets = Flits2(target, this),
        l = targets.length;
      return this.filter((function() {
        for (var i = 0; i < l; i++)
          if (Flits2.contains(this, targets[i])) return !0
      }))
    },
    closest: function(selectors, context) {
      for (var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || typeof selectors != "string" ? Flits2(selectors, context || this.context) : 0; i < l; i++)
        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
          if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && Flits2.find.matchesSelector(cur, selectors))) {
            matched.push(cur);
            break
          } return this.pushStack(matched.length > 1 ? Flits2.uniqueSort(matched) : matched)
    },
    index: function(elem) {
      return elem ? typeof elem == "string" ? indexOf.call(Flits2(elem), this[0]) : indexOf.call(this, elem.Flits ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(selector, context) {
      return this.pushStack(Flits2.uniqueSort(Flits2.merge(this.get(), Flits2(selector, context))))
    },
    addBack: function(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector))
    }
  });

  function sibling(cur, dir2) {
    for (;
      (cur = cur[dir2]) && cur.nodeType !== 1;);
    return cur
  }
  Flits2.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null
    },
    parents: function(elem) {
      return dir(elem, "parentNode")
    },
    parentsUntil: function(elem, i, until) {
      return dir(elem, "parentNode", until)
    },
    next: function(elem) {
      return sibling(elem, "nextSibling")
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling")
    },
    nextAll: function(elem) {
      return dir(elem, "nextSibling")
    },
    prevAll: function(elem) {
      return dir(elem, "previousSibling")
    },
    nextUntil: function(elem, i, until) {
      return dir(elem, "nextSibling", until)
    },
    prevUntil: function(elem, i, until) {
      return dir(elem, "previousSibling", until)
    },
    siblings: function(elem) {
      return siblings((elem.parentNode || {}).firstChild, elem)
    },
    children: function(elem) {
      return siblings(elem.firstChild)
    },
    contents: function(elem) {
      return elem.contentDocument || Flits2.merge([], elem.childNodes)
    }
  }, (function(name, fn) {
    Flits2.fn[name] = function(until, selector) {
      var matched = Flits2.map(this, fn, until);
      return name.slice(-5) !== "Until" && (selector = until), selector && typeof selector == "string" && (matched = Flits2.filter(selector, matched)), this.length > 1 && (guaranteedUnique[name] || Flits2.uniqueSort(matched), rparentsprev.test(name) && matched.reverse()), this.pushStack(matched)
    }
  }));
  var rnotwhite = /\S+/g;

  function createOptions(options) {
    var object = {};
    return Flits2.each(options.match(rnotwhite) || [], (function(_, flag) {
      object[flag] = !0
    })), object
  }
  Flits2.Callbacks = function(options) {
    options = typeof options == "string" ? createOptions(options) : Flits2.extend({}, options);
    var firing, memory, fired, locked, list = [],
      queue = [],
      firingIndex = -1,
      fire = function() {
        for (locked = options.once, fired = firing = !0; queue.length; firingIndex = -1)
          for (memory = queue.shift(); ++firingIndex < list.length;) list[firingIndex].apply(memory[0], memory[1]) === !1 && options.stopOnFalse && (firingIndex = list.length, memory = !1);
        options.memory || (memory = !1), firing = !1, locked && (memory ? list = [] : list = "")
      },
      self = {
        add: function() {
          return list && (memory && !firing && (firingIndex = list.length - 1, queue.push(memory)), (function add(args) {
            Flits2.each(args, (function(_, arg) {
              Flits2.isFunction(arg) ? (!options.unique || !self.has(arg)) && list.push(arg) : arg && arg.length && Flits2.type(arg) !== "string" && add(arg)
            }))
          })(arguments), memory && !firing && fire()), this
        },
        remove: function() {
          return Flits2.each(arguments, (function(_, arg) {
            for (var index2;
              (index2 = Flits2.inArray(arg, list, index2)) > -1;) list.splice(index2, 1), index2 <= firingIndex && firingIndex--
          })), this
        },
        has: function(fn) {
          return fn ? Flits2.inArray(fn, list) > -1 : list.length > 0
        },
        empty: function() {
          return list && (list = []), this
        },
        disable: function() {
          return locked = queue = [], list = memory = "", this
        },
        disabled: function() {
          return !list
        },
        lock: function() {
          return locked = queue = [], memory || (list = memory = ""), this
        },
        locked: function() {
          return !!locked
        },
        fireWith: function(context, args) {
          return locked || (args = args || [], args = [context, args.slice ? args.slice() : args], queue.push(args), firing || fire()), this
        },
        fire: function() {
          return self.fireWith(this, arguments), this
        },
        fired: function() {
          return !!fired
        }
      };
    return self
  }, Flits2.extend({
    Deferred: function(func) {
      var tuples = [
          ["resolve", "done", Flits2.Callbacks("once memory"), "resolved"],
          ["reject", "fail", Flits2.Callbacks("once memory"), "rejected"],
          ["notify", "progress", Flits2.Callbacks("memory")]
        ],
        state = "pending",
        promise = {
          state: function() {
            return state
          },
          always: function() {
            return deferred.done(arguments).fail(arguments), this
          },
          then: function() {
            var fns = arguments;
            return Flits2.Deferred((function(newDefer) {
              Flits2.each(tuples, (function(i, tuple) {
                var fn = Flits2.isFunction(fns[i]) && fns[i];
                deferred[tuple[1]]((function() {
                  var returned = fn && fn.apply(this, arguments);
                  returned && Flits2.isFunction(returned.promise) ? returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject) : newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                }))
              })), fns = null
            })).promise()
          },
          promise: function(obj) {
            return obj != null ? Flits2.extend(obj, promise) : promise
          }
        },
        deferred = {};
      return promise.pipe = promise.then, Flits2.each(tuples, (function(i, tuple) {
        var list = tuple[2],
          stateString = tuple[3];
        promise[tuple[1]] = list.add, stateString && list.add((function() {
          state = stateString
        }), tuples[i ^ 1][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function() {
          return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this
        }, deferred[tuple[0] + "With"] = list.fireWith
      })), promise.promise(deferred), func && func.call(deferred, deferred), deferred
    },
    when: function(subordinate) {
      var i = 0,
        resolveValues = slice.call(arguments),
        length = resolveValues.length,
        remaining = length !== 1 || subordinate && Flits2.isFunction(subordinate.promise) ? length : 0,
        deferred = remaining === 1 ? subordinate : Flits2.Deferred(),
        updateFunc = function(i2, contexts, values) {
          return function(value) {
            contexts[i2] = this, values[i2] = arguments.length > 1 ? slice.call(arguments) : value, values === progressValues ? deferred.notifyWith(contexts, values) : --remaining || deferred.resolveWith(contexts, values)
          }
        },
        progressValues, progressContexts, resolveContexts;
      if (length > 1)
        for (progressValues = new Array(length), progressContexts = new Array(length), resolveContexts = new Array(length); i < length; i++) resolveValues[i] && Flits2.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject) : --remaining;
      return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise()
    }
  });
  var readyList;
  Flits2.fn.ready = function(fn) {
    return Flits2.ready.promise().done(fn), this
  }, Flits2.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(hold) {
      hold ? Flits2.readyWait++ : Flits2.ready(!0)
    },
    ready: function(wait) {
      (wait === !0 ? --Flits2.readyWait : Flits2.isReady) || (Flits2.isReady = !0, !(wait !== !0 && --Flits2.readyWait > 0) && (readyList.resolveWith(document2, [Flits2]), Flits2.fn.triggerHandler && (Flits2(document2).triggerHandler("ready"), Flits2(document2).off("ready"))))
    }
  });

  function completed() {
    document2.removeEventListener("DOMContentLoaded", completed), window2.removeEventListener("load", completed), Flits2.ready()
  }
  Flits2.ready.promise = function(obj) {
    return readyList || (readyList = Flits2.Deferred(), document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll ? window2.setTimeout(Flits2.ready) : (document2.addEventListener("DOMContentLoaded", completed), window2.addEventListener("load", completed))), readyList.promise(obj)
  }, Flits2.ready.promise();
  var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
      var i = 0,
        len = elems.length,
        bulk = key == null;
      if (Flits2.type(key) === "object") {
        chainable = !0;
        for (i in key) access(elems, fn, i, key[i], !0, emptyGet, raw)
      } else if (value !== void 0 && (chainable = !0, Flits2.isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, key2, value2) {
          return bulk.call(Flits2(elem), value2)
        })), fn))
        for (; i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
      return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet
    },
    acceptData = function(owner) {
      return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType
    };

  function Data() {
    this.expando = Flits2.expando + Data.uid++
  }
  Data.uid = 1, Data.prototype = {
    register: function(owner, initial) {
      var value = initial || {};
      return owner.nodeType ? owner[this.expando] = value : Object.defineProperty(owner, this.expando, {
        value,
        writable: !0,
        configurable: !0
      }), owner[this.expando]
    },
    cache: function(owner) {
      if (!acceptData(owner)) return {};
      var value = owner[this.expando];
      return value || (value = {}, acceptData(owner) && (owner.nodeType ? owner[this.expando] = value : Object.defineProperty(owner, this.expando, {
        value,
        configurable: !0
      }))), value
    },
    set: function(owner, data2, value) {
      var prop, cache = this.cache(owner);
      if (typeof data2 == "string") cache[data2] = value;
      else
        for (prop in data2) cache[prop] = data2[prop];
      return cache
    },
    get: function(owner, key) {
      return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][key]
    },
    access: function(owner, key, value) {
      var stored;
      return key === void 0 || key && typeof key == "string" && value === void 0 ? (stored = this.get(owner, key), stored !== void 0 ? stored : this.get(owner, Flits2.camelCase(key))) : (this.set(owner, key, value), value !== void 0 ? value : key)
    },
    remove: function(owner, key) {
      var i, name, camel, cache = owner[this.expando];
      if (cache !== void 0) {
        if (key === void 0) this.register(owner);
        else
          for (Flits2.isArray(key) ? name = key.concat(key.map(Flits2.camelCase)) : (camel = Flits2.camelCase(key), key in cache ? name = [key, camel] : (name = camel, name = name in cache ? [name] : name.match(rnotwhite) || [])), i = name.length; i--;) delete cache[name[i]];
        (key === void 0 || Flits2.isEmptyObject(cache)) && (owner.nodeType ? owner[this.expando] = void 0 : delete owner[this.expando])
      }
    },
    hasData: function(owner) {
      var cache = owner[this.expando];
      return cache !== void 0 && !Flits2.isEmptyObject(cache)
    }
  };
  var dataPriv = new Data,
    dataUser = new Data,
    rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    rmultiDash = /[A-Z]/g;

  function dataAttr(elem, key, data2) {
    var name;
    if (data2 === void 0 && elem.nodeType === 1)
      if (name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase(), data2 = elem.getAttribute(name), typeof data2 == "string") {
        try {
          data2 = data2 === "true" ? !0 : data2 === "false" ? !1 : data2 === "null" ? null : +data2 + "" === data2 ? +data2 : rbrace.test(data2) ? Flits2.parseJSON(data2) : data2
        } catch {}
        dataUser.set(elem, key, data2)
      } else data2 = void 0;
    return data2
  }
  Flits2.extend({
    hasData: function(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem)
    },
    data: function(elem, name, data2) {
      return dataUser.access(elem, name, data2)
    },
    removeData: function(elem, name) {
      dataUser.remove(elem, name)
    },
    _data: function(elem, name, data2) {
      return dataPriv.access(elem, name, data2)
    },
    _removeData: function(elem, name) {
      dataPriv.remove(elem, name)
    }
  }), Flits2.fn.extend({
    data: function(key, value) {
      var i, name, data2, elem = this[0],
        attrs = elem && elem.attributes;
      if (key === void 0) {
        if (this.length && (data2 = dataUser.get(elem), elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs"))) {
          for (i = attrs.length; i--;) attrs[i] && (name = attrs[i].name, name.indexOf("data-") === 0 && (name = Flits2.camelCase(name.slice(5)), dataAttr(elem, name, data2[name])));
          dataPriv.set(elem, "hasDataAttrs", !0)
        }
        return data2
      }
      return typeof key == "object" ? this.each((function() {
        dataUser.set(this, key)
      })) : access(this, (function(value2) {
        var data3, camelKey;
        if (elem && value2 === void 0) return data3 = dataUser.get(elem, key) || dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase()), data3 !== void 0 || (camelKey = Flits2.camelCase(key), data3 = dataUser.get(elem, camelKey), data3 !== void 0) || (data3 = dataAttr(elem, camelKey, void 0), data3 !== void 0) ? data3 : void 0;
        camelKey = Flits2.camelCase(key), this.each((function() {
          var data4 = dataUser.get(this, camelKey);
          dataUser.set(this, camelKey, value2), key.indexOf("-") > -1 && data4 !== void 0 && dataUser.set(this, key, value2)
        }))
      }), null, value, arguments.length > 1, null, !0)
    },
    removeData: function(key) {
      return this.each((function() {
        dataUser.remove(this, key)
      }))
    }
  }), Flits2.extend({
    queue: function(elem, type, data2) {
      var queue;
      if (elem) return type = (type || "fx") + "queue", queue = dataPriv.get(elem, type), data2 && (!queue || Flits2.isArray(data2) ? queue = dataPriv.access(elem, type, Flits2.makeArray(data2)) : queue.push(data2)), queue || []
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue = Flits2.queue(elem, type),
        startLength = queue.length,
        fn = queue.shift(),
        hooks = Flits2._queueHooks(elem, type),
        next = function() {
          Flits2.dequeue(elem, type)
        };
      fn === "inprogress" && (fn = queue.shift(), startLength--), fn && (type === "fx" && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire()
    },
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: Flits2.Callbacks("once memory").add((function() {
          dataPriv.remove(elem, [type + "queue", key])
        }))
      })
    }
  }), Flits2.fn.extend({
    queue: function(type, data2) {
      var setter = 2;
      return typeof type != "string" && (data2 = type, type = "fx", setter--), arguments.length < setter ? Flits2.queue(this[0], type) : data2 === void 0 ? this : this.each((function() {
        var queue = Flits2.queue(this, type, data2);
        Flits2._queueHooks(this, type), type === "fx" && queue[0] !== "inprogress" && Flits2.dequeue(this, type)
      }))
    },
    dequeue: function(type) {
      return this.each((function() {
        Flits2.dequeue(this, type)
      }))
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", [])
    },
    promise: function(type, obj) {
      var tmp, count = 1,
        defer = Flits2.Deferred(),
        elements = this,
        i = this.length,
        resolve = function() {
          --count || defer.resolveWith(elements, [elements])
        };
      for (typeof type != "string" && (obj = type, type = void 0), type = type || "fx"; i--;) tmp = dataPriv.get(elements[i], type + "queueHooks"), tmp && tmp.empty && (count++, tmp.empty.add(resolve));
      return resolve(), defer.promise(obj)
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
    cssExpand = ["Top", "Right", "Bottom", "Left"],
    isHidden = function(elem, el) {
      return elem = el || elem, Flits2.css(elem, "display") === "none" || !Flits2.contains(elem.ownerDocument, elem)
    };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted, scale = 1,
      maxIterations = 20,
      currentValue = tween ? function() {
        return tween.cur()
      } : function() {
        return Flits2.css(elem, prop, "")
      },
      initial = currentValue(),
      unit = valueParts && valueParts[3] || (Flits2.cssNumber[prop] ? "" : "px"),
      initialInUnit = (Flits2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(Flits2.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      unit = unit || initialInUnit[3], valueParts = valueParts || [], initialInUnit = +initial || 1;
      do scale = scale || ".5", initialInUnit = initialInUnit / scale, Flits2.style(elem, prop, initialInUnit + unit); while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations)
    }
    return valueParts && (initialInUnit = +initialInUnit || +initial || 0, adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2], tween && (tween.unit = unit, tween.start = initialInUnit, tween.end = adjusted)), adjusted
  }
  var rcheckableType = /^(?:checkbox|radio)$/i,
    rtagName = /<([\w:-]+)/,
    rscriptType = /^$|\/(?:java|ecma)script/i,
    wrapMap = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td;

  function getAll(context, tag) {
    var ret = typeof context.getElementsByTagName < "u" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll < "u" ? context.querySelectorAll(tag || "*") : [];
    return tag === void 0 || tag && Flits2.nodeName(context, tag) ? Flits2.merge([context], ret) : ret
  }

  function setGlobalEval(elems, refElements) {
    for (var i = 0, l = elems.length; i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"))
  }
  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    for (var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; i < l; i++)
      if (elem = elems[i], elem || elem === 0)
        if (Flits2.type(elem) === "object") Flits2.merge(nodes, elem.nodeType ? [elem] : elem);
        else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem));
    else {
      for (tmp = tmp || fragment.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + Flits2.htmlPrefilter(elem) + wrap[2], j = wrap[0]; j--;) tmp = tmp.lastChild;
      Flits2.merge(nodes, tmp.childNodes), tmp = fragment.firstChild, tmp.textContent = ""
    }
    for (fragment.textContent = "", i = 0; elem = nodes[i++];) {
      if (selection && Flits2.inArray(elem, selection) > -1) {
        ignored && ignored.push(elem);
        continue
      }
      if (contains = Flits2.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), contains && setGlobalEval(tmp), scripts)
        for (j = 0; elem = tmp[j++];) rscriptType.test(elem.type || "") && scripts.push(elem)
    }
    return fragment
  }(function() {
    var fragment = document2.createDocumentFragment(),
      div = fragment.appendChild(document2.createElement("div")),
      input = document2.createElement("input");
    input.setAttribute("type", "radio"), input.setAttribute("checked", "checked"), input.setAttribute("name", "t"), div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue
  })();
  var rkeyEvent = /^key/,
    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return !0
  }

  function returnFalse() {
    return !1
  }

  function safeActiveElement() {
    try {
      return document2.activeElement
    } catch {}
  }

  function on(elem, types, selector, data2, fn, one) {
    var origFn, type;
    if (typeof types == "object") {
      typeof selector != "string" && (data2 = data2 || selector, selector = void 0);
      for (type in types) on(elem, type, selector, data2, types[type], one);
      return elem
    }
    if (data2 == null && fn == null ? (fn = selector, data2 = selector = void 0) : fn == null && (typeof selector == "string" ? (fn = data2, data2 = void 0) : (fn = data2, data2 = selector, selector = void 0)), fn === !1) fn = returnFalse;
    else if (!fn) return elem;
    return one === 1 && (origFn = fn, fn = function(event) {
      return Flits2().off(event), origFn.apply(this, arguments)
    }, fn.guid = origFn.guid || (origFn.guid = Flits2.guid++)), elem.each((function() {
      Flits2.event.add(this, types, fn, data2, selector)
    }))
  }
  Flits2.event = {
    global: {},
    add: function(elem, types, handler, data2, selector) {
      var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
      if (elemData)
        for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), handler.guid || (handler.guid = Flits2.guid++), (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
            return typeof Flits2 < "u" && Flits2.event.triggered !== e.type ? Flits2.event.dispatch.apply(elem, arguments) : void 0
          }), types = (types || "").match(rnotwhite) || [""], t = types.length; t--;) tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = Flits2.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = Flits2.event.special[type] || {}, handleObj = Flits2.extend({
          type,
          origType,
          data: data2,
          handler,
          guid: handler.guid,
          selector,
          needsContext: selector && Flits2.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, (!special.setup || special.setup.call(elem, data2, namespaces, eventHandle) === !1) && elem.addEventListener && elem.addEventListener(type, eventHandle)), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), Flits2.event.global[type] = !0)
    },
    remove: function(elem, types, handler, selector, mappedTypes) {
      var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (!(!elemData || !(events = elemData.events))) {
        for (types = (types || "").match(rnotwhite) || [""], t = types.length; t--;) {
          if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), !type) {
            for (type in events) Flits2.event.remove(elem, type + types[t], handler, selector, !0);
            continue
          }
          for (special = Flits2.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length; j--;) handleObj = handlers[j], (mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector) && (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
          origCount && !handlers.length && ((!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === !1) && Flits2.removeEvent(elem, type, elemData.handle), delete events[type])
        }
        Flits2.isEmptyObject(events) && dataPriv.remove(elem, "handle events")
      }
    },
    dispatch: function(event) {
      event = Flits2.event.fix(event);
      var i, j, ret, matched, handleObj, handlerQueue = [],
        args = slice.call(arguments),
        handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
        special = Flits2.event.special[event.type] || {};
      if (args[0] = event, event.delegateTarget = this, !(special.preDispatch && special.preDispatch.call(this, event) === !1)) {
        for (handlerQueue = Flits2.event.handlers.call(this, event, handlers), i = 0;
          (matched = handlerQueue[i++]) && !event.isPropagationStopped();)
          for (event.currentTarget = matched.elem, j = 0;
            (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();)(!event.rnamespace || event.rnamespace.test(handleObj.namespace)) && (event.handleObj = handleObj, event.data = handleObj.data, ret = ((Flits2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), ret !== void 0 && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation()));
        return special.postDispatch && special.postDispatch.call(this, event), event.result
      }
    },
    handlers: function(event, handlers) {
      var i, matches, sel, handleObj, handlerQueue = [],
        delegateCount = handlers.delegateCount,
        cur = event.target;
      if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
        for (; cur !== this; cur = cur.parentNode || this)
          if (cur.nodeType === 1 && (cur.disabled !== !0 || event.type !== "click")) {
            for (matches = [], i = 0; i < delegateCount; i++) handleObj = handlers[i], sel = handleObj.selector + " ", matches[sel] === void 0 && (matches[sel] = handleObj.needsContext ? Flits2(sel, this).index(cur) > -1 : Flits2.find(sel, this, null, [cur]).length), matches[sel] && matches.push(handleObj);
            matches.length && handlerQueue.push({
              elem: cur,
              handlers: matches
            })
          }
      }
      return delegateCount < handlers.length && handlerQueue.push({
        elem: this,
        handlers: handlers.slice(delegateCount)
      }), handlerQueue
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(event, original) {
        return event.which == null && (event.which = original.charCode != null ? original.charCode : original.keyCode), event
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(event, original) {
        var eventDoc, doc, body, button = original.button;
        return event.pageX == null && original.clientX != null && (eventDoc = event.target.ownerDocument || document2, doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), !event.which && button !== void 0 && (event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0), event
      }
    },
    fix: function(event) {
      if (event[Flits2.expando]) return event;
      var i, prop, copy, type = event.type,
        originalEvent = event,
        fixHook = this.fixHooks[type];
      for (fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new Flits2.Event(originalEvent), i = copy.length; i--;) prop = copy[i], event[prop] = originalEvent[prop];
      return event.target || (event.target = document2), event.target.nodeType === 3 && (event.target = event.target.parentNode), fixHook.filter ? fixHook.filter(event, originalEvent) : event
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== safeActiveElement() && this.focus) return this.focus(), !1
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === safeActiveElement() && this.blur) return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (this.type === "checkbox" && this.click && Flits2.nodeName(this, "input")) return this.click(), !1
        },
        _default: function(event) {
          return Flits2.nodeName(event.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(event) {
          event.result !== void 0 && event.originalEvent && (event.originalEvent.returnValue = event.result)
        }
      }
    }
  }, Flits2.removeEvent = function(elem, type, handle) {
    elem.removeEventListener && elem.removeEventListener(type, handle)
  }, Flits2.Event = function(src, props) {
    if (!(this instanceof Flits2.Event)) return new Flits2.Event(src, props);
    src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === !1 ? returnTrue : returnFalse) : this.type = src, props && Flits2.extend(this, props), this.timeStamp = src && src.timeStamp || Flits2.now(), this[Flits2.expando] = !0
  }, Flits2.Event.prototype = {
    constructor: Flits2.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: !1,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, Flits2.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, (function(orig, fix) {
    Flits2.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret, target = this,
          related = event.relatedTarget,
          handleObj = event.handleObj;
        return (!related || related !== target && !Flits2.contains(target, related)) && (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret
      }
    }
  })), Flits2.fn.extend({
    on: function(types, selector, data2, fn) {
      return on(this, types, selector, data2, fn)
    },
    one: function(types, selector, data2, fn) {
      return on(this, types, selector, data2, fn, 1)
    },
    off: function(types, selector, fn) {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, Flits2(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
      if (typeof types == "object") {
        for (type in types) this.off(type, selector, types[type]);
        return this
      }
      return (selector === !1 || typeof selector == "function") && (fn = selector, selector = void 0), fn === !1 && (fn = returnFalse), this.each((function() {
        Flits2.event.remove(this, types, fn, selector)
      }))
    }
  });
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    rnoInnerhtml = /<script|<style|<link/i,
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rscriptTypeMasked = /^true\/(.*)/,
    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function manipulationTarget(elem, content) {
    return Flits2.nodeName(elem, "table") && Flits2.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
  }

  function disableScript(elem) {
    return elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type, elem
  }

  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    return match ? elem.type = match[1] : elem.removeAttribute("type"), elem
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
    if (dest.nodeType === 1) {
      if (dataPriv.hasData(src) && (pdataOld = dataPriv.access(src), pdataCur = dataPriv.set(dest, pdataOld), events = pdataOld.events, events)) {
        delete pdataCur.handle, pdataCur.events = {};
        for (type in events)
          for (i = 0, l = events[type].length; i < l; i++) Flits2.event.add(dest, type, events[type][i])
      }
      dataUser.hasData(src) && (udataOld = dataUser.access(src), udataCur = Flits2.extend({}, udataOld), dataUser.set(dest, udataCur))
    }
  }

  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();
    nodeName === "input" && rcheckableType.test(src.type) ? dest.checked = src.checked : (nodeName === "input" || nodeName === "textarea") && (dest.defaultValue = src.defaultValue)
  }

  function domManip(collection, args, callback, ignored) {
    args = concat.apply([], args);
    var fragment, first, scripts, hasScripts, node, doc, i = 0,
      l = collection.length,
      iNoClone = l - 1,
      value = args[0],
      isFunction = Flits2.isFunction(value);
    if (isFunction || l > 1 && typeof value == "string" && !support.checkClone && rchecked.test(value)) return collection.each((function(index2) {
      var self = collection.eq(index2);
      isFunction && (args[0] = value.call(this, index2, self.html())), domManip(self, args, callback, ignored)
    }));
    if (l && (fragment = buildFragment(args, collection[0].ownerDocument, !1, collection, ignored), first = fragment.firstChild, fragment.childNodes.length === 1 && (fragment = first), first || ignored)) {
      for (scripts = Flits2.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; i < l; i++) node = fragment, i !== iNoClone && (node = Flits2.clone(node, !0, !0), hasScripts && Flits2.merge(scripts, getAll(node, "script"))), callback.call(collection[i], node, i);
      if (hasScripts)
        for (doc = scripts[scripts.length - 1].ownerDocument, Flits2.map(scripts, restoreScript), i = 0; i < hasScripts; i++) node = scripts[i], rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && Flits2.contains(doc, node) && (node.src ? Flits2._evalUrl && Flits2._evalUrl(node.src) : Flits2.globalEval(node.textContent.replace(rcleanScript, "")))
    }
    return collection
  }

  function remove(elem, selector, keepData) {
    for (var node, nodes = selector ? Flits2.filter(selector, elem) : elem, i = 0;
      (node = nodes[i]) != null; i++) !keepData && node.nodeType === 1 && Flits2.cleanData(getAll(node)), node.parentNode && (keepData && Flits2.contains(node.ownerDocument, node) && setGlobalEval(getAll(node, "script")), node.parentNode.removeChild(node));
    return elem
  }
  Flits2.extend({
    htmlPrefilter: function(html) {
      return html.replace(rxhtmlTag, "<$1></$2>")
    },
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var i, l, srcElements, destElements, clone = elem.cloneNode(!0),
        inPage = Flits2.contains(elem.ownerDocument, elem);
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !Flits2.isXMLDoc(elem))
        for (destElements = getAll(clone), srcElements = getAll(elem), i = 0, l = srcElements.length; i < l; i++) fixInput(srcElements[i], destElements[i]);
      if (dataAndEvents)
        if (deepDataAndEvents)
          for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
        else cloneCopyEvent(elem, clone);
      return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), clone
    },
    cleanData: function(elems) {
      for (var data2, elem, type, special = Flits2.event.special, i = 0;
        (elem = elems[i]) !== void 0; i++)
        if (acceptData(elem)) {
          if (data2 = elem[dataPriv.expando]) {
            if (data2.events)
              for (type in data2.events) special[type] ? Flits2.event.remove(elem, type) : Flits2.removeEvent(elem, type, data2.handle);
            elem[dataPriv.expando] = void 0
          }
          elem[dataUser.expando] && (elem[dataUser.expando] = void 0)
        }
    }
  }), Flits2.fn.extend({
    domManip,
    detach: function(selector) {
      return remove(this, selector, !0)
    },
    remove: function(selector) {
      return remove(this, selector)
    },
    text: function(value) {
      return access(this, (function(value2) {
        return value2 === void 0 ? Flits2.text(this) : this.empty().each((function() {
          (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = value2)
        }))
      }), null, value, arguments.length)
    },
    append: function() {
      return domManip(this, arguments, (function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem)
        }
      }))
    },
    prepend: function() {
      return domManip(this, arguments, (function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild)
        }
      }))
    },
    before: function() {
      return domManip(this, arguments, (function(elem) {
        this.parentNode && this.parentNode.insertBefore(elem, this)
      }))
    },
    after: function() {
      return domManip(this, arguments, (function(elem) {
        this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling)
      }))
    },
    empty: function() {
      for (var elem, i = 0;
        (elem = this[i]) != null; i++) elem.nodeType === 1 && (Flits2.cleanData(getAll(elem, !1)), elem.textContent = "");
      return this
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      return dataAndEvents = dataAndEvents ?? !1, deepDataAndEvents = deepDataAndEvents ?? dataAndEvents, this.map((function() {
        return Flits2.clone(this, dataAndEvents, deepDataAndEvents)
      }))
    },
    html: function(value) {
      return access(this, (function(value2) {
        var elem = this[0] || {},
          i = 0,
          l = this.length;
        if (value2 === void 0 && elem.nodeType === 1) return elem.innerHTML;
        if (typeof value2 == "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
          value2 = Flits2.htmlPrefilter(value2);
          try {
            for (; i < l; i++) elem = this[i] || {}, elem.nodeType === 1 && (Flits2.cleanData(getAll(elem, !1)), elem.innerHTML = value2);
            elem = 0
          } catch {}
        }
        elem && this.empty().append(value2)
      }), null, value, arguments.length)
    },
    replaceWith: function() {
      var ignored = [];
      return domManip(this, arguments, (function(elem) {
        var parent = this.parentNode;
        Flits2.inArray(this, ignored) < 0 && (Flits2.cleanData(getAll(this)), parent && parent.replaceChild(elem, this))
      }), ignored)
    }
  }), Flits2.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, (function(name, original) {
    Flits2.fn[name] = function(selector) {
      for (var elems, ret = [], insert = Flits2(selector), last = insert.length - 1, i = 0; i <= last; i++) elems = i === last ? this : this.clone(!0), Flits2(insert[i])[original](elems), push.apply(ret, elems.get());
      return this.pushStack(ret)
    }
  }));
  var iframe, elemdisplay = {
    HTML: "block",
    BODY: "block"
  };

  function actualDisplay(name, doc) {
    var elem = Flits2(doc.createElement(name)).appendTo(doc.body),
      display = Flits2.css(elem[0], "display");
    return elem.detach(), display
  }

  function defaultDisplay(nodeName) {
    var doc = document2,
      display = elemdisplay[nodeName];
    return display || (display = actualDisplay(nodeName, doc), (display === "none" || !display) && (iframe = (iframe || Flits2("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), doc = iframe[0].contentDocument, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), elemdisplay[nodeName] = display), display
  }
  var rmargin = /^margin/,
    rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
    getStyles = function(elem) {
      var view = elem.ownerDocument.defaultView;
      return (!view || !view.opener) && (view = window2), view.getComputedStyle(elem)
    },
    swap = function(elem, options, callback, args) {
      var ret, name, old = {};
      for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
      ret = callback.apply(elem, args || []);
      for (name in options) elem.style[name] = old[name];
      return ret
    },
    documentElement = document2.documentElement;
  (function() {
    var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document2.createElement("div"),
      div = document2.createElement("div");
    if (!div.style) return;
    div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = div.style.backgroundClip === "content-box", container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", container.appendChild(div);

    function computeStyleTests() {
      div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", div.innerHTML = "", documentElement.appendChild(container);
      var divStyle = window2.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%", reliableMarginLeftVal = divStyle.marginLeft === "2px", boxSizingReliableVal = divStyle.width === "4px", div.style.marginRight = "50%", pixelMarginRightVal = divStyle.marginRight === "4px", documentElement.removeChild(container)
    }
    Flits2.extend(support, {
      pixelPosition: function() {
        return computeStyleTests(), pixelPositionVal
      },
      boxSizingReliable: function() {
        return boxSizingReliableVal == null && computeStyleTests(), boxSizingReliableVal
      },
      pixelMarginRight: function() {
        return boxSizingReliableVal == null && computeStyleTests(), pixelMarginRightVal
      },
      reliableMarginLeft: function() {
        return boxSizingReliableVal == null && computeStyleTests(), reliableMarginLeftVal
      },
      reliableMarginRight: function() {
        var ret, marginDiv = div.appendChild(document2.createElement("div"));
        return marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", documentElement.appendChild(container), ret = !parseFloat(window2.getComputedStyle(marginDiv).marginRight), documentElement.removeChild(container), div.removeChild(marginDiv), ret
      }
    })
  })();

  function curCSS(elem, name, computed) {
    var width, minWidth, maxWidth, ret, style = elem.style;
    return computed = computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : void 0, (ret === "" || ret === void 0) && !Flits2.contains(elem.ownerDocument, elem) && (ret = Flits2.style(elem, name)), computed && !support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth), ret !== void 0 ? ret + "" : ret
  }

  function addGetHookIf(conditionFn, hookFn) {
    return {
      get: function() {
        if (conditionFn()) {
          delete this.get;
          return
        }
        return (this.get = hookFn).apply(this, arguments)
      }
    }
  }
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
    cssShow = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    cssPrefixes = ["Webkit", "O", "Moz", "ms"],
    emptyStyle = document2.createElement("div").style;

  function vendorPropName(name) {
    if (name in emptyStyle) return name;
    for (var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length; i--;)
      if (name = cssPrefixes[i] + capName, name in emptyStyle) return name
  }

  function setPositiveNumber(elem, value, subtract) {
    var matches = rcssNum.exec(value);
    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value
  }

  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    for (var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0; i < 4; i += 2) extra === "margin" && (val += Flits2.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? (extra === "content" && (val -= Flits2.css(elem, "padding" + cssExpand[i], !0, styles)), extra !== "margin" && (val -= Flits2.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += Flits2.css(elem, "padding" + cssExpand[i], !0, styles), extra !== "padding" && (val += Flits2.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
    return val
  }

  function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox = !0,
      val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
      styles = getStyles(elem),
      isBorderBox = Flits2.css(elem, "boxSizing", !1, styles) === "border-box";
    if (val <= 0 || val == null) {
      if (val = curCSS(elem, name, styles), (val < 0 || val == null) && (val = elem.style[name]), rnumnonpx.test(val)) return val;
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), val = parseFloat(val) || 0
    }
    return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
  }

  function showHide(elements, show) {
    for (var display, elem, hidden, values = [], index2 = 0, length = elements.length; index2 < length; index2++) elem = elements[index2], elem.style && (values[index2] = dataPriv.get(elem, "olddisplay"), display = elem.style.display, show ? (!values[index2] && display === "none" && (elem.style.display = ""), elem.style.display === "" && isHidden(elem) && (values[index2] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName)))) : (hidden = isHidden(elem), (display !== "none" || !hidden) && dataPriv.set(elem, "olddisplay", hidden ? display : Flits2.css(elem, "display"))));
    for (index2 = 0; index2 < length; index2++) elem = elements[index2], elem.style && (!show || elem.style.display === "none" || elem.style.display === "") && (elem.style.display = show ? values[index2] || "" : "none");
    return elements
  }
  Flits2.extend({
    cssHooks: {
      opacity: {
        get: function(elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: "cssFloat"
    },
    style: function(elem, name, value, extra) {
      if (!(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style)) {
        var ret, type, hooks, origName = Flits2.camelCase(name),
          style = elem.style;
        if (name = Flits2.cssProps[origName] || (Flits2.cssProps[origName] = vendorPropName(origName) || origName), hooks = Flits2.cssHooks[name] || Flits2.cssHooks[origName], value !== void 0) {
          if (type = typeof value, type === "string" && (ret = rcssNum.exec(value)) && ret[1] && (value = adjustCSS(elem, name, ret), type = "number"), value == null || value !== value) return;
          type === "number" && (value += ret && ret[3] || (Flits2.cssNumber[origName] ? "" : "px")), !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 && (style[name] = "inherit"), (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) && (style[name] = value)
        } else return hooks && "get" in hooks && (ret = hooks.get(elem, !1, extra)) !== void 0 ? ret : style[name]
      }
    },
    css: function(elem, name, extra, styles) {
      var val, num, hooks, origName = Flits2.camelCase(name);
      return name = Flits2.cssProps[origName] || (Flits2.cssProps[origName] = vendorPropName(origName) || origName), hooks = Flits2.cssHooks[name] || Flits2.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), val === void 0 && (val = curCSS(elem, name, styles)), val === "normal" && name in cssNormalTransform && (val = cssNormalTransform[name]), extra === "" || extra ? (num = parseFloat(val), extra === !0 || isFinite(num) ? num || 0 : val) : val
    }
  }), Flits2.each(["height", "width"], (function(i, name) {
    Flits2.cssHooks[name] = {
      get: function(elem, computed, extra) {
        if (computed) return rdisplayswap.test(Flits2.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, (function() {
          return getWidthOrHeight(elem, name, extra)
        })) : getWidthOrHeight(elem, name, extra)
      },
      set: function(elem, value, extra) {
        var matches, styles = extra && getStyles(elem),
          subtract = extra && augmentWidthOrHeight(elem, name, extra, Flits2.css(elem, "boxSizing", !1, styles) === "border-box", styles);
        return subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px" && (elem.style[name] = value, value = Flits2.css(elem, name)), setPositiveNumber(elem, value, subtract)
      }
    }
  })), Flits2.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, (function(elem, computed) {
    if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
      marginLeft: 0
    }, (function() {
      return elem.getBoundingClientRect().left
    }))) + "px"
  })), Flits2.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, (function(elem, computed) {
    if (computed) return swap(elem, {
      display: "inline-block"
    }, curCSS, [elem, "marginRight"])
  })), Flits2.each({
    margin: "",
    padding: "",
    border: "Width"
  }, (function(prefix, suffix) {
    Flits2.cssHooks[prefix + suffix] = {
      expand: function(value) {
        for (var i = 0, expanded = {}, parts = typeof value == "string" ? value.split(" ") : [value]; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        return expanded
      }
    }, rmargin.test(prefix) || (Flits2.cssHooks[prefix + suffix].set = setPositiveNumber)
  })), Flits2.fn.extend({
    css: function(name, value) {
      return access(this, (function(elem, name2, value2) {
        var styles, len, map = {},
          i = 0;
        if (Flits2.isArray(name2)) {
          for (styles = getStyles(elem), len = name2.length; i < len; i++) map[name2[i]] = Flits2.css(elem, name2[i], !1, styles);
          return map
        }
        return value2 !== void 0 ? Flits2.style(elem, name2, value2) : Flits2.css(elem, name2)
      }), name, value, arguments.length > 1)
    },
    show: function() {
      return showHide(this, !0)
    },
    hide: function() {
      return showHide(this)
    },
    toggle: function(state) {
      return typeof state == "boolean" ? state ? this.show() : this.hide() : this.each((function() {
        isHidden(this) ? Flits2(this).show() : Flits2(this).hide()
      }))
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing)
  }
  Flits2.Tween = Tween, Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem, this.prop = prop, this.easing = easing || Flits2.easing._default, this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (Flits2.cssNumber[prop] ? "" : "px")
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
    },
    run: function(percent) {
      var eased, hooks = Tween.propHooks[this.prop];
      return this.options.duration ? this.pos = eased = Flits2.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this
    }
  }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
    _default: {
      get: function(tween) {
        var result;
        return tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null ? tween.elem[tween.prop] : (result = Flits2.css(tween.elem, tween.prop, ""), !result || result === "auto" ? 0 : result)
      },
      set: function(tween) {
        Flits2.fx.step[tween.prop] ? Flits2.fx.step[tween.prop](tween) : tween.elem.nodeType === 1 && (tween.elem.style[Flits2.cssProps[tween.prop]] != null || Flits2.cssHooks[tween.prop]) ? Flits2.style(tween.elem, tween.prop, tween.now + tween.unit) : tween.elem[tween.prop] = tween.now
      }
    }
  }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function(tween) {
      tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now)
    }
  }, Flits2.easing = {
    linear: function(p) {
      return p
    },
    swing: function(p) {
      return .5 - Math.cos(p * Math.PI) / 2
    },
    _default: "swing"
  }, Flits2.fx = Tween.prototype.init, Flits2.fx.step = {};
  var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
    rrun = /queueHooks$/;

  function createFxNow() {
    return window2.setTimeout((function() {
      fxNow = void 0
    })), fxNow = Flits2.now()
  }

  function genFx(type, includeWidth) {
    var which, i = 0,
      attrs = {
        height: type
      };
    for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth) which = cssExpand[i], attrs["margin" + which] = attrs["padding" + which] = type;
    return includeWidth && (attrs.opacity = attrs.width = type), attrs
  }

  function createTween(value, prop, animation) {
    for (var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index2 = 0, length = collection.length; index2 < length; index2++)
      if (tween = collection[index2].call(animation, prop, value)) return tween
  }

  function defaultPrefilter(elem, props, opts) {
    var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
      orig = {},
      style = elem.style,
      hidden = elem.nodeType && isHidden(elem),
      dataShow = dataPriv.get(elem, "fxshow");
    opts.queue || (hooks = Flits2._queueHooks(elem, "fx"), hooks.unqueued == null && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
      hooks.unqueued || oldfire()
    }), hooks.unqueued++, anim.always((function() {
      anim.always((function() {
        hooks.unqueued--, Flits2.queue(elem, "fx").length || hooks.empty.fire()
      }))
    }))), elem.nodeType === 1 && ("height" in props || "width" in props) && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], display = Flits2.css(elem, "display"), checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display, checkDisplay === "inline" && Flits2.css(elem, "float") === "none" && (style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", anim.always((function() {
      style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2]
    })));
    for (prop in props)
      if (value = props[prop], rfxtypes.exec(value)) {
        if (delete props[prop], toggle = toggle || value === "toggle", value === (hidden ? "hide" : "show"))
          if (value === "show" && dataShow && dataShow[prop] !== void 0) hidden = !0;
          else continue;
        orig[prop] = dataShow && dataShow[prop] || Flits2.style(elem, prop)
      } else display = void 0;
    if (Flits2.isEmptyObject(orig))(display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline" && (style.display = display);
    else {
      dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = dataPriv.access(elem, "fxshow", {}), toggle && (dataShow.hidden = !hidden), hidden ? Flits2(elem).show() : anim.done((function() {
        Flits2(elem).hide()
      })), anim.done((function() {
        var prop2;
        dataPriv.remove(elem, "fxshow");
        for (prop2 in orig) Flits2.style(elem, prop2, orig[prop2])
      }));
      for (prop in orig) tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, tween.start = prop === "width" || prop === "height" ? 1 : 0))
    }
  }

  function propFilter(props, specialEasing) {
    var index2, name, easing, value, hooks;
    for (index2 in props)
      if (name = Flits2.camelCase(index2), easing = specialEasing[name], value = props[index2], Flits2.isArray(value) && (easing = value[1], value = props[index2] = value[0]), index2 !== name && (props[name] = value, delete props[index2]), hooks = Flits2.cssHooks[name], hooks && "expand" in hooks) {
        value = hooks.expand(value), delete props[name];
        for (index2 in value) index2 in props || (props[index2] = value[index2], specialEasing[index2] = easing)
      } else specialEasing[name] = easing
  }

  function Animation(elem, properties, options) {
    var result, stopped, index2 = 0,
      length = Animation.prefilters.length,
      deferred = Flits2.Deferred().always((function() {
        delete tick.elem
      })),
      tick = function() {
        if (stopped) return !1;
        for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index3 = 0, length2 = animation.tweens.length; index3 < length2; index3++) animation.tweens[index3].run(percent);
        return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length2 ? remaining : (deferred.resolveWith(elem, [animation]), !1)
      },
      animation = deferred.promise({
        elem,
        props: Flits2.extend({}, properties),
        opts: Flits2.extend(!0, {
          specialEasing: {},
          easing: Flits2.easing._default
        }, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function(prop, end) {
          var tween = Flits2.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
          return animation.tweens.push(tween), tween
        },
        stop: function(gotoEnd) {
          var index3 = 0,
            length2 = gotoEnd ? animation.tweens.length : 0;
          if (stopped) return this;
          for (stopped = !0; index3 < length2; index3++) animation.tweens[index3].run(1);
          return gotoEnd ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, gotoEnd])) : deferred.rejectWith(elem, [animation, gotoEnd]), this
        }
      }),
      props = animation.props;
    for (propFilter(props, animation.opts.specialEasing); index2 < length; index2++)
      if (result = Animation.prefilters[index2].call(animation, elem, props, animation.opts), result) return Flits2.isFunction(result.stop) && (Flits2._queueHooks(animation.elem, animation.opts.queue).stop = Flits2.proxy(result.stop, result)), result;
    return Flits2.map(props, createTween, animation), Flits2.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), Flits2.fx.timer(Flits2.extend(tick, {
      elem,
      anim: animation,
      queue: animation.opts.queue
    })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
  }
  Flits2.Animation = Flits2.extend(Animation, {
    tweeners: {
      "*": [function(prop, value) {
        var tween = this.createTween(prop, value);
        return adjustCSS(tween.elem, prop, rcssNum.exec(value), tween), tween
      }]
    },
    tweener: function(props, callback) {
      Flits2.isFunction(props) ? (callback = props, props = ["*"]) : props = props.match(rnotwhite);
      for (var prop, index2 = 0, length = props.length; index2 < length; index2++) prop = props[index2], Animation.tweeners[prop] = Animation.tweeners[prop] || [], Animation.tweeners[prop].unshift(callback)
    },
    prefilters: [defaultPrefilter],
    prefilter: function(callback, prepend) {
      prepend ? Animation.prefilters.unshift(callback) : Animation.prefilters.push(callback)
    }
  }), Flits2.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed == "object" ? Flits2.extend({}, speed) : {
      complete: fn || !fn && easing || Flits2.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !Flits2.isFunction(easing) && easing
    };
    return opt.duration = Flits2.fx.off ? 0 : typeof opt.duration == "number" ? opt.duration : opt.duration in Flits2.fx.speeds ? Flits2.fx.speeds[opt.duration] : Flits2.fx.speeds._default, (opt.queue == null || opt.queue === !0) && (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
      Flits2.isFunction(opt.old) && opt.old.call(this), opt.queue && Flits2.dequeue(this, opt.queue)
    }, opt
  }, Flits2.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHidden).css("opacity", 0).show().end().animate({
        opacity: to
      }, speed, easing, callback)
    },
    animate: function(prop, speed, easing, callback) {
      var empty = Flits2.isEmptyObject(prop),
        optall = Flits2.speed(speed, easing, callback),
        doAnimation = function() {
          var anim = Animation(this, Flits2.extend({}, prop), optall);
          (empty || dataPriv.get(this, "finish")) && anim.stop(!0)
        };
      return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop, stop(gotoEnd)
      };
      return typeof type != "string" && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && type !== !1 && this.queue(type || "fx", []), this.each((function() {
        var dequeue = !0,
          index2 = type != null && type + "queueHooks",
          timers = Flits2.timers,
          data2 = dataPriv.get(this);
        if (index2) data2[index2] && data2[index2].stop && stopQueue(data2[index2]);
        else
          for (index2 in data2) data2[index2] && data2[index2].stop && rrun.test(index2) && stopQueue(data2[index2]);
        for (index2 = timers.length; index2--;) timers[index2].elem === this && (type == null || timers[index2].queue === type) && (timers[index2].anim.stop(gotoEnd), dequeue = !1, timers.splice(index2, 1));
        (dequeue || !gotoEnd) && Flits2.dequeue(this, type)
      }))
    },
    finish: function(type) {
      return type !== !1 && (type = type || "fx"), this.each((function() {
        var index2, data2 = dataPriv.get(this),
          queue = data2[type + "queue"],
          hooks = data2[type + "queueHooks"],
          timers = Flits2.timers,
          length = queue ? queue.length : 0;
        for (data2.finish = !0, Flits2.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index2 = timers.length; index2--;) timers[index2].elem === this && timers[index2].queue === type && (timers[index2].anim.stop(!0), timers.splice(index2, 1));
        for (index2 = 0; index2 < length; index2++) queue[index2] && queue[index2].finish && queue[index2].finish.call(this);
        delete data2.finish
      }))
    }
  }), Flits2.each(["toggle", "show", "hide"], (function(i, name) {
    var cssFn = Flits2.fn[name];
    Flits2.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed == "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback)
    }
  })), Flits2.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, (function(name, props) {
    Flits2.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback)
    }
  })), Flits2.timers = [], Flits2.fx.tick = function() {
    var timer, i = 0,
      timers = Flits2.timers;
    for (fxNow = Flits2.now(); i < timers.length; i++) timer = timers[i], !timer() && timers[i] === timer && timers.splice(i--, 1);
    timers.length || Flits2.fx.stop(), fxNow = void 0
  }, Flits2.fx.timer = function(timer) {
    Flits2.timers.push(timer), timer() ? Flits2.fx.start() : Flits2.timers.pop()
  }, Flits2.fx.interval = 13, Flits2.fx.start = function() {
    timerId || (timerId = window2.setInterval(Flits2.fx.tick, Flits2.fx.interval))
  }, Flits2.fx.stop = function() {
    window2.clearInterval(timerId), timerId = null
  }, Flits2.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, Flits2.fn.delay = function(time, type) {
    return time = Flits2.fx && Flits2.fx.speeds[time] || time, type = type || "fx", this.queue(type, (function(next, hooks) {
      var timeout = window2.setTimeout(next, time);
      hooks.stop = function() {
        window2.clearTimeout(timeout)
      }
    }))
  }, (function() {
    var input = document2.createElement("input"),
      select = document2.createElement("select"),
      opt = select.appendChild(document2.createElement("option"));
    input.type = "checkbox", support.checkOn = input.value !== "", support.optSelected = opt.selected, select.disabled = !0, support.optDisabled = !opt.disabled, input = document2.createElement("input"), input.value = "t", input.type = "radio", support.radioValue = input.value === "t"
  })();
  var boolHook, attrHandle = Flits2.expr.attrHandle;
  Flits2.fn.extend({
    attr: function(name, value) {
      return access(this, Flits2.attr, name, value, arguments.length > 1)
    },
    removeAttr: function(name) {
      return this.each((function() {
        Flits2.removeAttr(this, name)
      }))
    }
  }), Flits2.extend({
    attr: function(elem, name, value) {
      var ret, hooks, nType = elem.nodeType;
      if (!(nType === 3 || nType === 8 || nType === 2)) {
        if (typeof elem.getAttribute > "u") return Flits2.prop(elem, name, value);
        if ((nType !== 1 || !Flits2.isXMLDoc(elem)) && (name = name.toLowerCase(), hooks = Flits2.attrHooks[name] || (Flits2.expr.match.bool.test(name) ? boolHook : void 0)), value !== void 0) {
          if (value === null) {
            Flits2.removeAttr(elem, name);
            return
          }
          return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0 ? ret : (elem.setAttribute(name, value + ""), value)
        }
        return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : (ret = Flits2.find.attr(elem, name), ret ?? void 0)
      }
    },
    attrHooks: {
      type: {
        set: function(elem, value) {
          if (!support.radioValue && value === "radio" && Flits2.nodeName(elem, "input")) {
            var val = elem.value;
            return elem.setAttribute("type", value), val && (elem.value = val), value
          }
        }
      }
    },
    removeAttr: function(elem, value) {
      var name, propName, i = 0,
        attrNames = value && value.match(rnotwhite);
      if (attrNames && elem.nodeType === 1)
        for (; name = attrNames[i++];) propName = Flits2.propFix[name] || name, Flits2.expr.match.bool.test(name) && (elem[propName] = !1), elem.removeAttribute(name)
    }
  }), boolHook = {
    set: function(elem, value, name) {
      return value === !1 ? Flits2.removeAttr(elem, name) : elem.setAttribute(name, name), name
    }
  }, Flits2.each(Flits2.expr.match.bool.source.match(/\w+/g), (function(i, name) {
    var getter = attrHandle[name] || Flits2.find.attr;
    attrHandle[name] = function(elem, name2, isXML) {
      var ret, handle;
      return isXML || (handle = attrHandle[name2], attrHandle[name2] = ret, ret = getter(elem, name2, isXML) != null ? name2.toLowerCase() : null, attrHandle[name2] = handle), ret
    }
  }));
  var rfocusable = /^(?:input|select|textarea|button)$/i,
    rclickable = /^(?:a|area)$/i;
  Flits2.fn.extend({
    prop: function(name, value) {
      return access(this, Flits2.prop, name, value, arguments.length > 1)
    },
    removeProp: function(name) {
      return this.each((function() {
        delete this[Flits2.propFix[name] || name]
      }))
    }
  }), Flits2.extend({
    prop: function(elem, name, value) {
      var ret, hooks, nType = elem.nodeType;
      if (!(nType === 3 || nType === 8 || nType === 2)) return (nType !== 1 || !Flits2.isXMLDoc(elem)) && (name = Flits2.propFix[name] || name, hooks = Flits2.propHooks[name]), value !== void 0 ? hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0 ? ret : elem[name] = value : hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name]
    },
    propHooks: {
      tabIndex: {
        get: function(elem) {
          var tabindex = Flits2.find.attr(elem, "tabindex");
          return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), support.optSelected || (Flits2.propHooks.selected = {
    get: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.parentNode && parent.parentNode.selectedIndex, null
    },
    set: function(elem) {
      var parent = elem.parentNode;
      parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex)
    }
  }), Flits2.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
    Flits2.propFix[this.toLowerCase()] = this
  }));
  var rclass = /[\t\r\n\f]/g;

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || ""
  }
  Flits2.fn.extend({
    addClass: function(value) {
      var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
      if (Flits2.isFunction(value)) return this.each((function(j2) {
        Flits2(this).addClass(value.call(this, j2, getClass(this)))
      }));
      if (typeof value == "string" && value) {
        for (classes = value.match(rnotwhite) || []; elem = this[i++];)
          if (curValue = getClass(elem), cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " "), cur) {
            for (j = 0; clazz = classes[j++];) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
            finalValue = Flits2.trim(cur), curValue !== finalValue && elem.setAttribute("class", finalValue)
          }
      }
      return this
    },
    removeClass: function(value) {
      var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
      if (Flits2.isFunction(value)) return this.each((function(j2) {
        Flits2(this).removeClass(value.call(this, j2, getClass(this)))
      }));
      if (!arguments.length) return this.attr("class", "");
      if (typeof value == "string" && value) {
        for (classes = value.match(rnotwhite) || []; elem = this[i++];)
          if (curValue = getClass(elem), cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " "), cur) {
            for (j = 0; clazz = classes[j++];)
              for (; cur.indexOf(" " + clazz + " ") > -1;) cur = cur.replace(" " + clazz + " ", " ");
            finalValue = Flits2.trim(cur), curValue !== finalValue && elem.setAttribute("class", finalValue)
          }
      }
      return this
    },
    toggleClass: function(value, stateVal) {
      var type = typeof value;
      return typeof stateVal == "boolean" && type === "string" ? stateVal ? this.addClass(value) : this.removeClass(value) : Flits2.isFunction(value) ? this.each((function(i) {
        Flits2(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal)
      })) : this.each((function() {
        var className, i, self, classNames;
        if (type === "string")
          for (i = 0, self = Flits2(this), classNames = value.match(rnotwhite) || []; className = classNames[i++];) self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
        else(value === void 0 || type === "boolean") && (className = getClass(this), className && dataPriv.set(this, "__className__", className), this.setAttribute && this.setAttribute("class", className || value === !1 ? "" : dataPriv.get(this, "__className__") || ""))
      }))
    },
    hasClass: function(selector) {
      var className, elem, i = 0;
      for (className = " " + selector + " "; elem = this[i++];)
        if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) return !0;
      return !1
    }
  });
  var rreturn = /\r/g,
    rspaces = /[\x20\t\r\n\f]+/g;
  Flits2.fn.extend({
    val: function(value) {
      var hooks, ret, isFunction, elem = this[0];
      return arguments.length ? (isFunction = Flits2.isFunction(value), this.each((function(i) {
        var val;
        this.nodeType === 1 && (isFunction ? val = value.call(this, i, Flits2(this).val()) : val = value, val == null ? val = "" : typeof val == "number" ? val += "" : Flits2.isArray(val) && (val = Flits2.map(val, (function(value2) {
          return value2 == null ? "" : value2 + ""
        }))), hooks = Flits2.valHooks[this.type] || Flits2.valHooks[this.nodeName.toLowerCase()], (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) && (this.value = val))
      }))) : elem ? (hooks = Flits2.valHooks[elem.type] || Flits2.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0 ? ret : (ret = elem.value, typeof ret == "string" ? ret.replace(rreturn, "") : ret ?? "")) : void 0
    }
  }), Flits2.extend({
    valHooks: {
      option: {
        get: function(elem) {
          var val = Flits2.find.attr(elem, "value");
          return val ?? Flits2.trim(Flits2.text(elem)).replace(rspaces, " ")
        }
      },
      select: {
        get: function(elem) {
          for (var value, option, options = elem.options, index2 = elem.selectedIndex, one = elem.type === "select-one" || index2 < 0, values = one ? null : [], max = one ? index2 + 1 : options.length, i = index2 < 0 ? max : one ? index2 : 0; i < max; i++)
            if (option = options[i], (option.selected || i === index2) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !Flits2.nodeName(option.parentNode, "optgroup"))) {
              if (value = Flits2(option).val(), one) return value;
              values.push(value)
            } return values
        },
        set: function(elem, value) {
          for (var optionSet, option, options = elem.options, values = Flits2.makeArray(value), i = options.length; i--;) option = options[i], (option.selected = Flits2.inArray(Flits2.valHooks.option.get(option), values) > -1) && (optionSet = !0);
          return optionSet || (elem.selectedIndex = -1), values
        }
      }
    }
  }), Flits2.each(["radio", "checkbox"], (function() {
    Flits2.valHooks[this] = {
      set: function(elem, value) {
        if (Flits2.isArray(value)) return elem.checked = Flits2.inArray(Flits2(elem).val(), value) > -1
      }
    }, support.checkOn || (Flits2.valHooks[this].get = function(elem) {
      return elem.getAttribute("value") === null ? "on" : elem.value
    })
  }));
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  Flits2.extend(Flits2.event, {
    trigger: function(event, data2, elem, onlyHandlers) {
      var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document2],
        type = hasOwn.call(event, "type") ? event.type : event,
        namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      if (cur = tmp = elem = elem || document2, !(elem.nodeType === 3 || elem.nodeType === 8) && !rfocusMorph.test(type + Flits2.event.triggered) && (type.indexOf(".") > -1 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[Flits2.expando] ? event : new Flits2.Event(type, typeof event == "object" && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data2 = data2 == null ? [event] : Flits2.makeArray(data2, [event]), special = Flits2.event.special[type] || {}, !(!onlyHandlers && special.trigger && special.trigger.apply(elem, data2) === !1))) {
        if (!onlyHandlers && !special.noBubble && !Flits2.isWindow(elem)) {
          for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), tmp = cur;
          tmp === (elem.ownerDocument || document2) && eventPath.push(tmp.defaultView || tmp.parentWindow || window2)
        }
        for (i = 0;
          (cur = eventPath[i++]) && !event.isPropagationStopped();) event.type = i > 1 ? bubbleType : special.bindType || type, handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle"), handle && handle.apply(cur, data2), handle = ontype && cur[ontype], handle && handle.apply && acceptData(cur) && (event.result = handle.apply(cur, data2), event.result === !1 && event.preventDefault());
        return event.type = type, !onlyHandlers && !event.isDefaultPrevented() && (!special._default || special._default.apply(eventPath.pop(), data2) === !1) && acceptData(elem) && ontype && Flits2.isFunction(elem[type]) && !Flits2.isWindow(elem) && (tmp = elem[ontype], tmp && (elem[ontype] = null), Flits2.event.triggered = type, elem[type](), Flits2.event.triggered = void 0, tmp && (elem[ontype] = tmp)), event.result
      }
    },
    simulate: function(type, elem, event) {
      var e = Flits2.extend(new Flits2.Event, event, {
        type,
        isSimulated: !0
      });
      Flits2.event.trigger(e, null, elem)
    }
  }), Flits2.fn.extend({
    trigger: function(type, data2) {
      return this.each((function() {
        Flits2.event.trigger(type, data2, this)
      }))
    },
    triggerHandler: function(type, data2) {
      var elem = this[0];
      if (elem) return Flits2.event.trigger(type, data2, elem, !0)
    }
  }), Flits2.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(i, name) {
    Flits2.fn[name] = function(data2, fn) {
      return arguments.length > 0 ? this.on(name, null, data2, fn) : this.trigger(name)
    }
  })), Flits2.fn.extend({
    hover: function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
    }
  }), support.focusin = "onfocusin" in window2, support.focusin || Flits2.each({
    focus: "focusin",
    blur: "focusout"
  }, (function(orig, fix) {
    var handler = function(event) {
      Flits2.event.simulate(fix, event.target, Flits2.event.fix(event))
    };
    Flits2.event.special[fix] = {
      setup: function() {
        var doc = this.ownerDocument || this,
          attaches = dataPriv.access(doc, fix);
        attaches || doc.addEventListener(orig, handler, !0), dataPriv.access(doc, fix, (attaches || 0) + 1)
      },
      teardown: function() {
        var doc = this.ownerDocument || this,
          attaches = dataPriv.access(doc, fix) - 1;
        attaches ? dataPriv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), dataPriv.remove(doc, fix))
      }
    }
  }));
  var location2 = window2.location,
    nonce = Flits2.now(),
    rquery = /\?/;
  Flits2.parseJSON = function(data2) {
    return JSON.parse(data2 + "")
  }, Flits2.parseXML = function(data2) {
    var xml;
    if (!data2 || typeof data2 != "string") return null;
    try {
      xml = new window2.DOMParser().parseFromString(data2, "text/xml")
    } catch {
      xml = void 0
    }
    return (!xml || xml.getElementsByTagName("parsererror").length) && Flits2.error("Invalid XML: " + data2), xml
  };
  var rhash = /#.*$/,
    rts = /([?&])_=[^&]*/,
    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    rnoContent = /^(?:GET|HEAD)$/,
    rprotocol = /^\/\//,
    prefilters = {},
    transports = {},
    allTypes = "*/".concat("*"),
    originAnchor = document2.createElement("a");
  originAnchor.href = location2.href;

  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      typeof dataTypeExpression != "string" && (func = dataTypeExpression, dataTypeExpression = "*");
      var dataType, i = 0,
        dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
      if (Flits2.isFunction(func))
        for (; dataType = dataTypes[i++];) dataType[0] === "+" ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func)
    }
  }

  function inspectPrefiltersOrTransports(structure, options, originalOptions, flitsXHR) {
    var inspected = {},
      seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      return inspected[dataType] = !0, Flits2.each(structure[dataType] || [], (function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, flitsXHR);
        if (typeof dataTypeOrTransport == "string" && !seekingTransport && !inspected[dataTypeOrTransport]) return options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1;
        if (seekingTransport) return !(selected = dataTypeOrTransport)
      })), selected
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
  }

  function ajaxExtend(target, src) {
    var key, deep, flatOptions = Flits2.ajaxSettings.flatOptions || {};
    for (key in src) src[key] !== void 0 && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
    return deep && Flits2.extend(!0, target, deep), target
  }

  function ajaxHandleResponses(s, flitsXHR, responses) {
    for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes; dataTypes[0] === "*";) dataTypes.shift(), ct === void 0 && (ct = s.mimeType || flitsXHR.getResponseHeader("Content-Type"));
    if (ct) {
      for (type in contents)
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break
        }
    }
    if (dataTypes[0] in responses) finalDataType = dataTypes[0];
    else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break
        }
        firstDataType || (firstDataType = type)
      }
      finalDataType = finalDataType || firstDataType
    }
    if (finalDataType) return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]
  }

  function ajaxConvert(s, response, flitsXHR, isSuccess) {
    var conv2, current, conv, tmp, prev, converters = {},
      dataTypes = s.dataTypes.slice();
    if (dataTypes[1])
      for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
    for (current = dataTypes.shift(); current;)
      if (s.responseFields[current] && (flitsXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift(), current) {
        if (current === "*") current = prev;
        else if (prev !== "*" && prev !== current) {
          if (conv = converters[prev + " " + current] || converters["* " + current], !conv) {
            for (conv2 in converters)
              if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]], conv)) {
                conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], dataTypes.unshift(tmp[1]));
                break
              }
          }
          if (conv !== !0)
            if (conv && s.throws) response = conv(response);
            else try {
              response = conv(response)
            } catch (e) {
              return {
                state: "parsererror",
                error: conv ? e : "No conversion from " + prev + " to " + current
              }
            }
        }
      } return {
      state: "success",
      data: response
    }
  }
  Flits2.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location2.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location2.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": Flits2.parseJSON,
        "text xml": Flits2.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, Flits2.ajaxSettings), settings) : ajaxExtend(Flits2.ajaxSettings, target)
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function(url, options) {
      typeof url == "object" && (options = url, url = void 0), options = options || {};
      var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, fireGlobals, i, s = Flits2.ajaxSetup({}, options),
        callbackContext = s.context || s,
        globalEventContext = s.context && (callbackContext.nodeType || callbackContext.Flits) ? Flits2(callbackContext) : Flits2.event,
        deferred = Flits2.Deferred(),
        completeDeferred = Flits2.Callbacks("once memory"),
        statusCode = s.statusCode || {},
        requestHeaders = {},
        requestHeadersNames = {},
        state = 0,
        strAbort = "canceled",
        flitsXHR = {
          readyState: 0,
          getResponseHeader: function(key) {
            var match;
            if (state === 2) {
              if (!responseHeaders)
                for (responseHeaders = {}; match = rheaders.exec(responseHeadersString);) responseHeaders[match[1].toLowerCase()] = match[2];
              match = responseHeaders[key.toLowerCase()]
            }
            return match ?? null
          },
          getAllResponseHeaders: function() {
            return state === 2 ? responseHeadersString : null
          },
          setRequestHeader: function(name, value) {
            var lname = name.toLowerCase();
            return state || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this
          },
          overrideMimeType: function(type) {
            return state || (s.mimeType = type), this
          },
          statusCode: function(map) {
            var code;
            if (map)
              if (state < 2)
                for (code in map) statusCode[code] = [statusCode[code], map[code]];
              else flitsXHR.always(map[flitsXHR.status]);
            return this
          },
          abort: function(statusText) {
            var finalText = statusText || strAbort;
            return transport && transport.abort(finalText), done(0, finalText), this
          }
        };
      if (deferred.promise(flitsXHR).complete = completeDeferred.add, flitsXHR.success = flitsXHR.done, flitsXHR.error = flitsXHR.fail, s.url = ((url || s.url || location2.href) + "").replace(rhash, "").replace(rprotocol, location2.protocol + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = Flits2.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""], s.crossDomain == null) {
        urlAnchor = document2.createElement("a");
        try {
          urlAnchor.href = s.url, urlAnchor.href = urlAnchor.href, s.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host
        } catch {
          s.crossDomain = !0
        }
      }
      if (s.data && s.processData && typeof s.data != "string" && (s.data = Flits2.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, flitsXHR), state === 2) return flitsXHR;
      fireGlobals = Flits2.event && s.global, fireGlobals && Flits2.active++ === 0 && Flits2.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, s.hasContent || (s.data && (cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), s.cache === !1 && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++)), s.ifModified && (Flits2.lastModified[cacheURL] && flitsXHR.setRequestHeader("If-Modified-Since", Flits2.lastModified[cacheURL]), Flits2.etag[cacheURL] && flitsXHR.setRequestHeader("If-None-Match", Flits2.etag[cacheURL])), (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && flitsXHR.setRequestHeader("Content-Type", s.contentType), flitsXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) flitsXHR.setRequestHeader(i, s.headers[i]);
      if (s.beforeSend && (s.beforeSend.call(callbackContext, flitsXHR, s) === !1 || state === 2)) return flitsXHR.abort();
      strAbort = "abort";
      for (i in {
          success: 1,
          error: 1,
          complete: 1
        }) flitsXHR[i](s[i]);
      if (transport = inspectPrefiltersOrTransports(transports, s, options, flitsXHR), !transport) done(-1, "No Transport");
      else {
        if (flitsXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [flitsXHR, s]), state === 2) return flitsXHR;
        s.async && s.timeout > 0 && (timeoutTimer = window2.setTimeout((function() {
          flitsXHR.abort("timeout")
        }), s.timeout));
        try {
          state = 1, transport.send(requestHeaders, done)
        } catch (e) {
          if (state < 2) done(-1, e);
          else throw e
        }
      }

      function done(status, nativeStatusText, responses, headers) {
        var isSuccess, success, error, response, modified, statusText = nativeStatusText;
        state !== 2 && (state = 2, timeoutTimer && window2.clearTimeout(timeoutTimer), transport = void 0, responseHeadersString = headers || "", flitsXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && status < 300 || status === 304, responses && (response = ajaxHandleResponses(s, flitsXHR, responses)), response = ajaxConvert(s, response, flitsXHR, isSuccess), isSuccess ? (s.ifModified && (modified = flitsXHR.getResponseHeader("Last-Modified"), modified && (Flits2.lastModified[cacheURL] = modified), modified = flitsXHR.getResponseHeader("etag"), modified && (Flits2.etag[cacheURL] = modified)), status === 204 || s.type === "HEAD" ? statusText = "nocontent" : status === 304 ? statusText = "notmodified" : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, (status || !statusText) && (statusText = "error", status < 0 && (status = 0))), flitsXHR.status = status, flitsXHR.statusText = (nativeStatusText || statusText) + "", isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, flitsXHR]) : deferred.rejectWith(callbackContext, [flitsXHR, statusText, error]), flitsXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [flitsXHR, s, isSuccess ? success : error]), completeDeferred.fireWith(callbackContext, [flitsXHR, statusText]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [flitsXHR, s]), --Flits2.active || Flits2.event.trigger("ajaxStop")))
      }
      return flitsXHR
    },
    getJSON: function(url, data2, callback) {
      return Flits2.get(url, data2, callback, "json")
    },
    getScript: function(url, callback) {
      return Flits2.get(url, void 0, callback, "script")
    }
  }), Flits2.each(["get", "post"], (function(i, method) {
    Flits2[method] = function(url, data2, callback, type) {
      return Flits2.isFunction(data2) && (type = type || callback, callback = data2, data2 = void 0), Flits2.ajax(Flits2.extend({
        url,
        type: method,
        dataType: type,
        data: data2,
        success: callback
      }, Flits2.isPlainObject(url) && url))
    }
  })), Flits2._evalUrl = function(url) {
    return Flits2.ajax({
      url,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      throws: !0
    })
  }, Flits2.fn.extend({
    wrapAll: function(html) {
      var wrap;
      return Flits2.isFunction(html) ? this.each((function(i) {
        Flits2(this).wrapAll(html.call(this, i))
      })) : (this[0] && (wrap = Flits2(html, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && wrap.insertBefore(this[0]), wrap.map((function() {
        for (var elem = this; elem.firstElementChild;) elem = elem.firstElementChild;
        return elem
      })).append(this)), this)
    },
    wrapInner: function(html) {
      return Flits2.isFunction(html) ? this.each((function(i) {
        Flits2(this).wrapInner(html.call(this, i))
      })) : this.each((function() {
        var self = Flits2(this),
          contents = self.contents();
        contents.length ? contents.wrapAll(html) : self.append(html)
      }))
    },
    wrap: function(html) {
      var isFunction = Flits2.isFunction(html);
      return this.each((function(i) {
        Flits2(this).wrapAll(isFunction ? html.call(this, i) : html)
      }))
    },
    unwrap: function() {
      return this.parent().each((function() {
        Flits2.nodeName(this, "body") || Flits2(this).replaceWith(this.childNodes)
      })).end()
    }
  }), Flits2.expr.filters.hidden = function(elem) {
    return !Flits2.expr.filters.visible(elem)
  }, Flits2.expr.filters.visible = function(elem) {
    return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0
  };
  var r20 = /%20/g,
    rbracket = /\[\]$/,
    rCRLF = /\r?\n/g,
    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
    rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (Flits2.isArray(obj)) Flits2.each(obj, (function(i, v) {
      traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + (typeof v == "object" && v != null ? i : "") + "]", v, traditional, add)
    }));
    else if (!traditional && Flits2.type(obj) === "object")
      for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
    else add(prefix, obj)
  }
  Flits2.param = function(a, traditional) {
    var prefix, s = [],
      add = function(key, value) {
        value = Flits2.isFunction(value) ? value() : value ?? "", s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
      };
    if (traditional === void 0 && (traditional = Flits2.ajaxSettings && Flits2.ajaxSettings.traditional), Flits2.isArray(a) || a.Flits && !Flits2.isPlainObject(a)) Flits2.each(a, (function() {
      add(this.name, this.value)
    }));
    else
      for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
    return s.join("&").replace(r20, "+")
  }, Flits2.fn.extend({
    serialize: function() {
      return Flits2.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map((function() {
        var elements = Flits2.prop(this, "elements");
        return elements ? Flits2.makeArray(elements) : this
      })).filter((function() {
        var type = this.type;
        return this.name && !Flits2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type))
      })).map((function(i, elem) {
        var val = Flits2(this).val();
        return val == null ? null : Flits2.isArray(val) ? Flits2.map(val, (function(val2) {
          return {
            name: elem.name,
            value: val2.replace(rCRLF, `\r
`)
          }
        })) : {
          name: elem.name,
          value: val.replace(rCRLF, `\r
`)
        }
      })).get()
    }
  }), Flits2.ajaxSettings.xhr = function() {
    try {
      return new window2.XMLHttpRequest
    } catch {}
  };
  var xhrSuccessStatus = {
      0: 200,
      1223: 204
    },
    xhrSupported = Flits2.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported, support.ajax = xhrSupported = !!xhrSupported, Flits2.ajaxTransport((function(options) {
    var callback, errorCallback;
    if (support.cors || xhrSupported && !options.crossDomain) return {
      send: function(headers, complete) {
        var i, xhr = options.xhr();
        if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields)
          for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
        options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), !options.crossDomain && !headers["X-Requested-With"] && (headers["X-Requested-With"] = "XMLHttpRequest");
        for (i in headers) xhr.setRequestHeader(i, headers[i]);
        callback = function(type) {
          return function() {
            callback && (callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null, type === "abort" ? xhr.abort() : type === "error" ? typeof xhr.status != "number" ? complete(0, "error") : complete(xhr.status, xhr.statusText) : complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText != "string" ? {
              binary: xhr.response
            } : {
              text: xhr.responseText
            }, xhr.getAllResponseHeaders()))
          }
        }, xhr.onload = callback(), errorCallback = xhr.onerror = callback("error"), xhr.onabort !== void 0 ? xhr.onabort = errorCallback : xhr.onreadystatechange = function() {
          xhr.readyState === 4 && window2.setTimeout((function() {
            callback && errorCallback()
          }))
        }, callback = callback("abort");
        try {
          xhr.send(options.hasContent && options.data || null)
        } catch (e) {
          if (callback) throw e
        }
      },
      abort: function() {
        callback && callback()
      }
    }
  })), Flits2.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(text) {
        return Flits2.globalEval(text), text
      }
    }
  }), Flits2.ajaxPrefilter("script", (function(s) {
    s.cache === void 0 && (s.cache = !1), s.crossDomain && (s.type = "GET")
  })), Flits2.ajaxTransport("script", (function(s) {
    if (s.crossDomain) {
      var script, callback;
      return {
        send: function(_, complete) {
          script = Flits2("<script>").prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", callback = function(evt) {
            script.remove(), callback = null, evt && complete(evt.type === "error" ? 404 : 200, evt.type)
          }), document2.head.appendChild(script[0])
        },
        abort: function() {
          callback && callback()
        }
      }
    }
  }));
  var oldCallbacks = [],
    rjsonp = /(=)\?(?=&|$)|\?\?/;
  Flits2.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || Flits2.expando + "_" + nonce++;
      return this[callback] = !0, callback
    }
  }), Flits2.ajaxPrefilter("json jsonp", (function(s, originalSettings, flitsXHR) {
    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : typeof s.data == "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
    if (jsonProp || s.dataTypes[0] === "jsonp") return callbackName = s.jsonpCallback = Flits2.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
      return responseContainer || Flits2.error(callbackName + " was not called"), responseContainer[0]
    }, s.dataTypes[0] = "json", overwritten = window2[callbackName], window2[callbackName] = function() {
      responseContainer = arguments
    }, flitsXHR.always((function() {
      overwritten === void 0 ? Flits2(window2).removeProp(callbackName) : window2[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && Flits2.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = void 0
    })), "script"
  })), Flits2.parseHTML = function(data2, context, keepScripts) {
    if (!data2 || typeof data2 != "string") return null;
    typeof context == "boolean" && (keepScripts = context, context = !1), context = context || document2;
    var parsed = rsingleTag.exec(data2),
      scripts = !keepScripts && [];
    return parsed ? [context.createElement(parsed[1])] : (parsed = buildFragment([data2], context, scripts), scripts && scripts.length && Flits2(scripts).remove(), Flits2.merge([], parsed.childNodes))
  };
  var _load = Flits2.fn.load;
  Flits2.fn.load = function(url, params, callback) {
    if (typeof url != "string" && _load) return _load.apply(this, arguments);
    var selector, type, response, self = this,
      off = url.indexOf(" ");
    return off > -1 && (selector = Flits2.trim(url.slice(off)), url = url.slice(0, off)), Flits2.isFunction(params) ? (callback = params, params = void 0) : params && typeof params == "object" && (type = "POST"), self.length > 0 && Flits2.ajax({
      url,
      type: type || "GET",
      dataType: "html",
      data: params
    }).done((function(responseText) {
      response = arguments, self.html(selector ? Flits2("<div>").append(Flits2.parseHTML(responseText)).find(selector) : responseText)
    })).always(callback && function(flitsXHR, status) {
      self.each((function() {
        callback.apply(this, response || [flitsXHR.responseText, status, flitsXHR])
      }))
    }), this
  }, Flits2.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(i, type) {
    Flits2.fn[type] = function(fn) {
      return this.on(type, fn)
    }
  })), Flits2.expr.filters.animated = function(elem) {
    return Flits2.grep(Flits2.timers, (function(fn) {
      return elem === fn.elem
    })).length
  };

  function getWindow(elem) {
    return Flits2.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView
  }
  Flits2.offset = {
    setOffset: function(elem, options, i) {
      var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = Flits2.css(elem, "position"),
        curElem = Flits2(elem),
        props = {};
      position === "static" && (elem.style.position = "relative"), curOffset = curElem.offset(), curCSSTop = Flits2.css(elem, "top"), curCSSLeft = Flits2.css(elem, "left"), calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1, calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), Flits2.isFunction(options) && (options = options.call(elem, i, Flits2.extend({}, curOffset))), options.top != null && (props.top = options.top - curOffset.top + curTop), options.left != null && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props)
    }
  }, Flits2.fn.extend({
    offset: function(options) {
      if (arguments.length) return options === void 0 ? this : this.each((function(i) {
        Flits2.offset.setOffset(this, options, i)
      }));
      var docElem, win, elem = this[0],
        box = {
          top: 0,
          left: 0
        },
        doc = elem && elem.ownerDocument;
      if (doc) return docElem = doc.documentElement, Flits2.contains(docElem, elem) ? (box = elem.getBoundingClientRect(), win = getWindow(doc), {
        top: box.top + win.pageYOffset - docElem.clientTop,
        left: box.left + win.pageXOffset - docElem.clientLeft
      }) : box
    },
    position: function() {
      if (this[0]) {
        var offsetParent, offset, elem = this[0],
          parentOffset = {
            top: 0,
            left: 0
          };
        return Flits2.css(elem, "position") === "fixed" ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), Flits2.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += Flits2.css(offsetParent[0], "borderTopWidth", !0), parentOffset.left += Flits2.css(offsetParent[0], "borderLeftWidth", !0)), {
          top: offset.top - parentOffset.top - Flits2.css(elem, "marginTop", !0),
          left: offset.left - parentOffset.left - Flits2.css(elem, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map((function() {
        for (var offsetParent = this.offsetParent; offsetParent && Flits2.css(offsetParent, "position") === "static";) offsetParent = offsetParent.offsetParent;
        return offsetParent || documentElement
      }))
    }
  }), Flits2.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, (function(method, prop) {
    var top = prop === "pageYOffset";
    Flits2.fn[method] = function(val) {
      return access(this, (function(elem, method2, val2) {
        var win = getWindow(elem);
        if (val2 === void 0) return win ? win[prop] : elem[method2];
        win ? win.scrollTo(top ? win.pageXOffset : val2, top ? val2 : win.pageYOffset) : elem[method2] = val2
      }), method, val, arguments.length)
    }
  })), Flits2.each(["top", "left"], (function(i, prop) {
    Flits2.cssHooks[prop] = addGetHookIf(support.pixelPosition, (function(elem, computed) {
      if (computed) return computed = curCSS(elem, prop), rnumnonpx.test(computed) ? Flits2(elem).position()[prop] + "px" : computed
    }))
  })), Flits2.each({
    Height: "height",
    Width: "width"
  }, (function(name, type) {
    Flits2.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, (function(defaultExtra, funcName) {
      Flits2.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin != "boolean"),
          extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
        return access(this, (function(elem, type2, value2) {
          var doc;
          return Flits2.isWindow(elem) ? elem.document.documentElement["client" + name] : elem.nodeType === 9 ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : value2 === void 0 ? Flits2.css(elem, type2, extra) : Flits2.style(elem, type2, value2, extra)
        }), type, chainable ? margin : void 0, chainable, null)
      }
    }))
  })), Flits2.fn.extend({
    bind: function(types, data2, fn) {
      return this.on(types, null, data2, fn)
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn)
    },
    delegate: function(selector, types, data2, fn) {
      return this.on(types, selector, data2, fn)
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn)
    },
    size: function() {
      return this.length
    }
  }), Flits2.fn.andSelf = Flits2.fn.addBack, typeof define == "function" && define.amd && define("Flits", [], (function() {
    return Flits2
  }));
  var _Flits = window2.Flits;
  return Flits2.noConflict = function(deep) {
    return deep && window2.Flits === Flits2 && (window2.Flits = _Flits), Flits2
  }, noGlobal || (window2.Flits = Flits2), Flits2
})), (function(Flits) {
  (function(t, o) {
    typeof define == "function" && define.amd ? define(o) : typeof exports == "object" ? module.exports = o() : t.flits_tingle = o()
  })(this, (function() {
    function t(t2) {
      var o2 = {
        onClose: null,
        onOpen: null,
        beforeOpen: null,
        beforeClose: null,
        stickyFooter: !1,
        footer: !1,
        cssClass: [],
        closeLabel: "Close",
        closeMethods: ["overlay", "button", "escape"]
      };
      this.opts = r2({}, o2, t2), this.init()
    }

    function o() {
      this.modalBoxFooter && (this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px", this.modalBoxFooter.style.left = this.modalBox.offsetLeft + "px")
    }

    function e() {
      this.modal = document.createElement("div"), this.modal.classList.add("flits-tingle-modal"), (this.opts.closeMethods.length === 0 || this.opts.closeMethods.indexOf("overlay") === -1) && this.modal.classList.add("flits-tingle-modal--noOverlayClose"), this.modal.style.display = "none", this.opts.cssClass.forEach((function(t2) {
        typeof t2 == "string" && this.modal.classList.add(t2)
      }), this), this.opts.closeMethods.indexOf("button") !== -1 && (this.modalCloseBtn = document.createElement("button"), this.modalCloseBtn.classList.add("flits-tingle-modal__close"), this.modalCloseBtnIcon = document.createElement("span"), this.modalCloseBtnIcon.classList.add("flits-tingle-modal__closeIcon"), this.modalCloseBtnIcon.innerHTML = "\xD7", this.modalCloseBtnLabel = document.createElement("span"), this.modalCloseBtnLabel.classList.add("flits-tingle-modal__closeLabel"), this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel, this.modalCloseBtn.appendChild(this.modalCloseBtnIcon), this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)), this.modalBox = document.createElement("div"), this.modalBox.classList.add("flits-tingle-modal-box"), this.opts.closeMethods.indexOf("button") !== -1 && this.modalBox.appendChild(this.modalCloseBtn), this.modalBoxContent = document.createElement("div"), this.modalBoxContent.classList.add("flits-tingle-modal-box__content"), this.modalBox.appendChild(this.modalBoxContent), this.modal.appendChild(this.modalBox)
    }

    function s() {
      this.modalBoxFooter = document.createElement("div"), this.modalBoxFooter.classList.add("flits-tingle-modal-box__footer"), this.modalBox.appendChild(this.modalBoxFooter)
    }

    function i() {
      this._events = {
        clickCloseBtn: this.close.bind(this),
        clickOverlay: l.bind(this),
        resize: this.checkOverflow.bind(this),
        keyboardNav: n.bind(this)
      }, this.opts.closeMethods.indexOf("button") !== -1 && this.modalCloseBtn.addEventListener("click", this._events.clickCloseBtn), this.modal.addEventListener("mousedown", this._events.clickOverlay), window.addEventListener("resize", this._events.resize), document.addEventListener("keydown", this._events.keyboardNav)
    }

    function n(t2) {
      this.opts.closeMethods.indexOf("escape") !== -1 && t2.which === 27 && this.isOpen() && this.close()
    }

    function l(t2) {
      this.opts.closeMethods.indexOf("overlay") !== -1 && !d(t2.target, "tingle-modal") && t2.clientX < this.modal.clientWidth && this.close()
    }

    function d(t2, o2) {
      for (;
        (t2 = t2.parentElement) && !t2.classList.contains(o2););
      return t2
    }

    function a() {
      this.opts.closeMethods.indexOf("button") !== -1 && this.modalCloseBtn.removeEventListener("click", this._events.clickCloseBtn), this.modal.removeEventListener("mousedown", this._events.clickOverlay), window.removeEventListener("resize", this._events.resize), document.removeEventListener("keydown", this._events.keyboardNav)
    }

    function r2() {
      for (var t2 = 1; t2 < arguments.length; t2++)
        for (var o2 in arguments[t2]) arguments[t2].hasOwnProperty(o2) && (arguments[0][o2] = arguments[t2][o2]);
      return arguments[0]
    }
    var h = (function() {
      var t2, o2 = document.createElement("flits-tingle-test-transition"),
        e2 = {
          transition: "transitionend",
          OTransition: "oTransitionEnd",
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd"
        };
      for (t2 in e2)
        if (o2.style[t2] !== void 0) return e2[t2]
    })();
    return t.prototype.init = function() {
      this.modal || (e.call(this), i.call(this), document.body.insertBefore(this.modal, document.body.firstChild), this.opts.footer && this.addFooter())
    }, t.prototype.destroy = function() {
      this.modal !== null && (a.call(this), this.modal.parentNode.removeChild(this.modal), this.modal = null)
    }, t.prototype.open = function() {
      var t2 = this;
      typeof t2.opts.beforeOpen == "function" && t2.opts.beforeOpen(), this.modal.style.removeProperty ? this.modal.style.removeProperty("display") : this.modal.style.removeAttribute("display"), document.body.classList.add("flits-tingle-enabled"), this.setStickyFooter(this.opts.stickyFooter), this.modal.classList.add("flits-tingle-modal--visible"), h ? this.modal.addEventListener(h, (function o2() {
        typeof t2.opts.onOpen == "function" && t2.opts.onOpen.call(t2), t2.modal.removeEventListener(h, o2, !1)
      }), !1) : typeof t2.opts.onOpen == "function" && t2.opts.onOpen.call(t2), this.checkOverflow()
    }, t.prototype.isOpen = function() {
      return !!this.modal.classList.contains("flits-tingle-modal--visible")
    }, t.prototype.close = function() {
      if (typeof this.opts.beforeClose != "function" || this.opts.beforeClose.call(this)) {
        document.body.classList.remove("flits-tingle-enabled"), this.modal.classList.remove("flits-tingle-modal--visible");
        var t2 = this;
        h ? this.modal.addEventListener(h, (function o2() {
          t2.modal.removeEventListener(h, o2, !1), t2.modal.style.display = "none", typeof t2.opts.onClose == "function" && t2.opts.onClose.call(this)
        }), !1) : (t2.modal.style.display = "none", typeof t2.opts.onClose == "function" && t2.opts.onClose.call(this))
      }
    }, t.prototype.setContent = function(t2) {
      typeof t2 == "string" ? this.modalBoxContent.innerHTML = t2 : (this.modalBoxContent.innerHTML = "", this.modalBoxContent.appendChild(t2))
    }, t.prototype.getContent = function() {
      return this.modalBoxContent
    }, t.prototype.addFooter = function() {
      s.call(this)
    }, t.prototype.setFooterContent = function(t2) {
      this.modalBoxFooter.innerHTML = t2
    }, t.prototype.getFooterContent = function() {
      return this.modalBoxFooter
    }, t.prototype.setStickyFooter = function(t2) {
      this.isOverflow() || (t2 = !1), t2 ? this.modalBox.contains(this.modalBoxFooter) && (this.modalBox.removeChild(this.modalBoxFooter), this.modal.appendChild(this.modalBoxFooter), this.modalBoxFooter.classList.add("flits-tingle-modal-box__footer--sticky"), o.call(this), this.modalBoxContent.style["padding-bottom"] = this.modalBoxFooter.clientHeight + 20 + "px") : this.modalBoxFooter && (this.modalBox.contains(this.modalBoxFooter) || (this.modal.removeChild(this.modalBoxFooter), this.modalBox.appendChild(this.modalBoxFooter), this.modalBoxFooter.style.width = "auto", this.modalBoxFooter.style.left = "", this.modalBoxContent.style["padding-bottom"] = "", this.modalBoxFooter.classList.remove("flits-tingle-modal-box__footer--sticky")))
    }, t.prototype.addFooterBtn = function(t2, o2, e2) {
      var s2 = document.createElement("button");
      return s2.innerHTML = t2, s2.addEventListener("click", e2), typeof o2 == "string" && o2.length && o2.split(" ").forEach((function(t3) {
        s2.classList.add(t3)
      })), this.modalBoxFooter.appendChild(s2), s2
    }, t.prototype.resize = function() {
      console.warn("Resize is deprecated and will be removed in version 1.0")
    }, t.prototype.isOverflow = function() {
      var t2 = window.innerHeight;
      return this.modalBox.clientHeight >= t2
    }, t.prototype.checkOverflow = function() {
      this.modal.classList.contains("flits-tingle-modal--visible") && (this.isOverflow() ? this.modal.classList.add("flits-tingle-modal--overflow") : this.modal.classList.remove("flits-tingle-modal--overflow"), !this.isOverflow() && this.opts.stickyFooter ? this.setStickyFooter(!1) : this.isOverflow() && this.opts.stickyFooter && (o.call(this), this.setStickyFooter(!0)))
    }, {
      modal: t
    }
  })), (function(root, factory) {
    "use strict";
    typeof define == "function" && define.amd ? define([], (function() {
      return root.flitsSnackbar = factory()
    })) : typeof module == "object" && module.exports ? module.exports = root.flitsSnackbar = factory() : root.flitsSnackbar = factory()
  })(this, (function() {
    var flitsSnackbar = {};
    flitsSnackbar.current = null;
    var $defaults = {
      text: "Default Text",
      textColor: "#FFFFFF",
      width: "auto",
      showAction: !0,
      actionText: "Dismiss",
      actionTextAria: "Dismiss, Description for Screen Readers",
      alertScreenReader: !1,
      actionTextColor: "#4CAF50",
      showSecondButton: !1,
      secondButtonText: "",
      secondButtonAria: "Description for Screen Readers",
      secondButtonTextColor: "#4CAF50",
      backgroundColor: "#323232",
      pos: "bottom-left",
      duration: 5e3,
      customClass: "",
      content: null,
      container: "body",
      onActionClick: function(element) {
        element.style.opacity = 0
      },
      onSecondButtonClick: function(element) {},
      onClose: function(element) {}
    };
    flitsSnackbar.show = function($options) {
      var options = Extend(!0, $defaults, $options);
      if (flitsSnackbar.current && (flitsSnackbar.current.style.opacity = 0, setTimeout(function() {
          var $parent = this.parentElement;
          $parent && $parent.removeChild(this)
        }.bind(flitsSnackbar.current), 500)), options.content != null) flitsSnackbar.snackbar = document.createElement("div"), flitsSnackbar.snackbar.className = "flits-snackbar-container " + options.customClass, flitsSnackbar.snackbar.appendChild(options.content);
      else {
        flitsSnackbar.snackbar = document.createElement("div"), flitsSnackbar.snackbar.className = "flits-snackbar-container " + options.customClass, flitsSnackbar.snackbar.style.width = options.width;
        var $p = document.createElement("p");
        $p.style.margin = 0, $p.style.padding = 0, $p.style.color = options.textColor, $p.style.fontSize = "14px", $p.style.fontWeight = 300, $p.style.lineHeight = "1.2", $p.innerHTML = options.text, flitsSnackbar.snackbar.appendChild($p), flitsSnackbar.snackbar.style.background = options.backgroundColor
      }
      if (options.showSecondButton) {
        var secondButton = document.createElement("button");
        secondButton.className = "action", secondButton.innerHTML = options.secondButtonText, secondButton.setAttribute("aria-label", options.secondButtonAria), secondButton.style.color = options.secondButtonTextColor, secondButton.addEventListener("click", (function() {
          options.onSecondButtonClick(flitsSnackbar.snackbar)
        })), flitsSnackbar.snackbar.appendChild(secondButton)
      }
      if (options.showAction) {
        var actionButton = document.createElement("button");
        actionButton.className = "action", actionButton.innerHTML = options.actionText, actionButton.setAttribute("aria-label", options.actionTextAria), actionButton.style.color = options.actionTextColor, actionButton.addEventListener("click", (function() {
          options.onActionClick(flitsSnackbar.snackbar)
        })), flitsSnackbar.snackbar.appendChild(actionButton)
      }
      options.duration != !1 && setTimeout(function() {
        flitsSnackbar.current === this && (flitsSnackbar.current.style.opacity = 0, flitsSnackbar.current.style.top = "-100px", flitsSnackbar.current.style.bottom = "-100px")
      }.bind(flitsSnackbar.snackbar), options.duration), options.alertScreenReader && flitsSnackbar.snackbar.setAttribute("role", "alert"), flitsSnackbar.snackbar.addEventListener("transitionend", function(event, elapsed) {
        event.propertyName === "opacity" && this.style.opacity === "0" && (typeof options.onClose == "function" && options.onClose(this), this.parentElement.removeChild(this), flitsSnackbar.current === this && (flitsSnackbar.current = null))
      }.bind(flitsSnackbar.snackbar)), flitsSnackbar.current = flitsSnackbar.snackbar, Flits(options.container).append(flitsSnackbar.snackbar);
      var $bottom = getComputedStyle(flitsSnackbar.snackbar).bottom,
        $top = getComputedStyle(flitsSnackbar.snackbar).top;
      flitsSnackbar.snackbar.style.opacity = 1, flitsSnackbar.snackbar.className = "flits-snackbar-container " + options.customClass + " flits-snackbar-pos " + options.pos
    }, flitsSnackbar.close = function() {
      flitsSnackbar.current && (flitsSnackbar.current.style.opacity = 0)
    };
    var Extend = function() {
      var extended = {},
        deep = !1,
        i = 0,
        length = arguments.length;
      Object.prototype.toString.call(arguments[0]) === "[object Boolean]" && (deep = arguments[0], i++);
      for (var merge = function(obj2) {
          for (var prop in obj2) Object.prototype.hasOwnProperty.call(obj2, prop) && (deep && Object.prototype.toString.call(obj2[prop]) === "[object Object]" ? extended[prop] = Extend(!0, extended[prop], obj2[prop]) : extended[prop] = obj2[prop])
        }; i < length; i++) {
        var obj = arguments[i];
        merge(obj)
      }
      return extended
    };
    return flitsSnackbar
  }));
  var recentlyViewDataStore = Flits.recentlyViewDataStore = function(item2) {
    var settings = {
      queue: "",
      finalQueue: [],
      limit: 9,
      recentHandle: "flits_recently_products",
      recentHandle_1: "flits_recently_products_copy"
    };
    updateProduct(), isPresent(item2) == -1 && (isFull() && removeFirstProduct(), settings.queue.push({
      product_handle: item2
    }), settings.queue.forEach((function(v, i) {
      settings.finalQueue.push({
        product_handle: settings.queue[i].product_handle
      })
    })), Flits.setLocalStorage(settings.recentHandle, settings.finalQueue));

    function updateProduct() {
      Flits.getLocalStorage(settings.recentHandle) == null || Flits.getLocalStorage(settings.recentHandle) == null ? (Flits.setLocalStorage(settings.recentHandle, []), settings.queue = Flits.getLocalStorage(settings.recentHandle, [])) : settings.queue = Flits.getLocalStorage(settings.recentHandle)
    }

    function isPresent(item3) {
      for (let i = 0; i < settings.queue.length; i++)
        if (settings.queue[i].product_handle.indexOf(item3) !== -1) return 1;
      return -1
    }

    function isFull() {
      return settings.limit == settings.queue.length
    }

    function removeFirstProduct() {
      settings.queue.splice(0, 1)
    }
  };
  Flits.extend({
    LoadStyleScript: function(index2, url, callback) {
      try {
        if (index2 && window.flitsObjects.allCssJs[index2].status) return;
        window.flitsObjects.allCssJs[index2].status = 2;
        var isCss = url.indexOf(".css") != -1,
          tag = isCss ? document.createElement("link") : document.createElement("script");
        tag.type = isCss ? "text/css" : "text/javascript", isCss && (tag.rel = "stylesheet"), tag.readyState ? tag.onreadystatechange = function() {
          (tag.readyState == "loaded" || tag.readyState == "complete") && (window.flitsObjects.allCssJs[index2].status = 1, tag.onreadystatechange = null, typeof callback == "function" && callback.apply(this))
        } : tag.onload = function() {
          window.flitsObjects.allCssJs[index2].status = 1, typeof callback == "function" && callback.apply(this)
        }, isCss && (tag.href = url), !isCss && (tag.src = url), document.getElementsByTagName("head")[0].appendChild(tag)
      } catch (ex) {
        console.error(ex)
      }
    },
    localStorageVar: "flits",
    setLocalStorage: function(k, v) {
      if (localStorage.getItem(Flits.localStorageVar) == null) {
        localStorage.setItem(Flits.localStorageVar, "{}");
        var existing = JSON.parse(localStorage.getItem(Flits.localStorageVar));
        return existing[k] = v, localStorage.setItem(Flits.localStorageVar, JSON.stringify(existing))
      } else {
        var existing = JSON.parse(localStorage.getItem(Flits.localStorageVar));
        return existing[k] = v, localStorage.setItem(Flits.localStorageVar, JSON.stringify(existing))
      }
    },
    getLocalStorage: function(k) {
      var existing = JSON.parse(localStorage.getItem(Flits.localStorageVar)),
        _key = k.split("."),
        _val = existing;
      if (_key.length > 1)
        for (let i = 0; i < _key.length; i++) _val != null && (_val = _val[_key[i]]);
      else _val != null && (_val = _val[_key[0]]);
      return _val
    },
    getCookie: function(cname) {
      let name = cname + "=",
        ca = decodeURIComponent(document.cookie).split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        for (; c.charAt(0) == " ";) c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
      }
      return ""
    },
    setCookie: function(cname, cvalue, exdays) {
      let d = new Date;
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1e3);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
    },
    styleCreate: function(option) {
      let style = '<style type="text/css">' + option + "</style>";
      Flits("head").append(style)
    },
    isNull: function(x) {
      return typeof x > "u" || x == null || x.toString().trim() == ""
    },
    getURLParameter: function(name) {
      return decodeURIComponent((new RegExp("[?|&]" + name + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null
    },
    formatMoney: function(cents, format, replaceObject) {
      typeof cents == "string" && (cents = cents.replace(".", ""));
      var value = "",
        placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
        formatString = format || "${{amount}}",
        replaceRegex = Flits.money_format_replace.moneyReplaceRegex || /((\,00)|(\.00))$/g,
        replaceWith = Flits.money_format_replace.replaceTo || "";
      replaceObject && (replaceRegex = replaceObject.moneyReplaceRegex, replaceWith = replaceObject.replaceTo);

      function defaultOption(opt, def) {
        return typeof opt > "u" ? def : opt
      }

      function formatWithDelimiters(number, precision, thousands, decimal) {
        if (precision = defaultOption(precision, 2), thousands = defaultOption(thousands, ","), decimal = defaultOption(decimal, "."), isNaN(number) || number == null) return "0";
        number = (number / 100).toFixed(precision);
        var parts = number.split("."),
          dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands),
          cents2 = parts[1] ? decimal + parts[1] : "";
        return dollars + cents2
      }
      switch (formatString.match(placeholderRegex)[1]) {
        case "amount":
          value = formatWithDelimiters(cents, 2);
          break;
        case "amount_no_decimals":
          value = formatWithDelimiters(cents, 0);
          break;
        case "amount_with_comma_separator":
          value = formatWithDelimiters(cents, 2, ".", ",");
          break;
        case "amount_no_decimals_with_comma_separator":
          value = formatWithDelimiters(cents, 0, ".", ",");
          break
      }
      return Flits.unescapeHtml(formatString.replace(placeholderRegex, value.replace(replaceRegex, replaceWith)))
    },
    unescapeHtml: function(value) {
      return value.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&#39;/g, "'")
    },
    escapeHtml: function(value) {
      return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/'/g, "&#39;")
    },
    copyClipBoardCode: function(e) {
      Flits(e).parents(".flits-referral-link-input-wrap").find('input[name="referral link"]').select(), document.execCommand("copy")
    },
    popupWindow: function(url, title, win, w, h) {
      const y = win.top.outerHeight / 2 + win.top.screenY - h / 2,
        x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
      return win.open(url, title, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + w + ", height=" + h + ", top=" + y + ", left=" + x)
    },
    t: function(translation_text, default_text) {
      try {
        var translation = translation_text;
        return translation_text.indexOf("Flits.locals") != -1 && (translation = eval(translation_text)), translation == null || translation == " " || translation == null ? default_text : translation
      } catch (err) {}
      return default_text
    },
    ajaxEventsCallbacks: [],
    fetchEventsCallbacks: [],
    getCart: function() {
      return Flits.ajax({
        url: "/cart.json",
        method: "get",
        data: {
          app: "flits"
        }
      })
    },
    redirectToCheckout: function(parameters) {
      parameters = parameters || {};
      var form = Flits(Flits.StoreCreditCart.settings.checkoutFormSelectors.join(","));
      if (form.length <= 0) return location.href = "/checkout?" + Flits.param(parameters), !0;
      var form_action = form.attr("action"),
        form_action_data = Flits.parseURL(form_action);
      Flits.each(parameters, (function(index2, item2) {
        var existing = form.find("[name='" + index2 + "']");
        existing.length <= 0 ? form.append("<input type='hidden' name='" + index2 + "' value='" + item2 + "'>") : existing.val(item2), form_action_data.searchObject[index2] ? form_action = form_action.replace(index2 + "=" + form_action_data.searchObject[index2], item2) : form_action += (form_action.indexOf("?") !== -1 ? "&" : "?") + index2 + "=" + item2
      })), form.append("<input type='hidden' name='checkout' value='true'>"), form.attr("action", form_action), form.trigger("submit", [{
        flitsFormSubmitted: !0
      }])
    },
    parseURL: function(url) {
      var parser = document.createElement("a"),
        searchObject = {},
        queries, split, i;
      for (parser.href = url, queries = parser.search.replace(/^\?/, "").split("&"), i = 0; i < queries.length; i++) split = queries[i].split("="), searchObject[split[0]] = split[1];
      return {
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        searchObject,
        hash: parser.hash
      }
    },
    newGuid: function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(c) {
        var r2 = Math.random() * 16 | 0,
          v = c == "x" ? r2 : r2 & 3 | 8;
        return v.toString(16)
      })).toUpperCase()
    },
    dispatchEvent: function(name, data2) {
      document.dispatchEvent(new CustomEvent(name, {
        bubbles: !0,
        detail: data2
      }))
    },
    listenAjaxEvents: function() {
      const send = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.send = function() {
        return this.addEventListener("load", (function() {
          let isNeedToCall = !1;
          if (this.readyState == 4 && this._url && (isNeedToCall = !0), isNeedToCall) {
            var xhrData = this;
            Flits.each(Flits.ajaxEventsCallbacks, (function(index2, item2) {
              item2.apply(xhrData, ["ajax"])
            }))
          }
        })), send.apply(this, arguments)
      }
    },
    listenFetchEvents: function() {
      if (window.fetch && typeof window.fetch == "function") {
        const t = window.fetch,
          e = function() {
            const e2 = t.apply(this, arguments);
            return e2.then((function(t2) {
              let e3 = !1;
              t2 && t2.status === 200 && t2.url && (e3 = !0), e3 && (t2._url = t2.url, Flits.each(Flits.fetchEventsCallbacks, (function(e4, o) {
                o.apply(t2, ["fetch"])
              })))
            })).catch((t2 => {})), e2
          };
        window.fetch = e
      } else console.log("we have no fetch to observe")
    },
    addAjaxEvents: function(callback) {
      typeof callback == "function" && Flits.ajaxEventsCallbacks.push(callback)
    },
    addFetchEvents: function(callback) {
      typeof callback == "function" && Flits.fetchEventsCallbacks.push(callback)
    },
    addToCartAjaxEvent: function() {
      var addToCartFunction = function(xhrOrFetch) {
        var url = this._url;
        url.indexOf("/cart/add.js") !== -1 && Flits.dispatchEvent("Flits:AjaxCart:ProductAdded", {
          response: this,
          xhrOrFetch
        })
      };
      Flits.addAjaxEvents(addToCartFunction), Flits.addFetchEvents(addToCartFunction)
    },
    updateCartAjaxEvent: function() {
      var updateCartFunction = function(xhrOrFetch) {
        var url = this._url;
        (url.indexOf("/cart/update.js") !== -1 || url.indexOf("/cart/change.js") !== -1) && Flits.dispatchEvent("Flits:AjaxCart:CartUpdated", {
          response: this,
          xhrOrFetch
        })
      };
      Flits.addAjaxEvents(updateCartFunction), Flits.addFetchEvents(updateCartFunction)
    },
    clearCartAjaxEvent: function() {
      var clearCartFunction = function(xhrOrFetch) {
        var url = this._url;
        url.indexOf("/cart/clear.js") !== -1 && Flits.dispatchEvent("Flits:AjaxCart:CartCleared", {
          response: this,
          xhrOrFetch
        })
      };
      Flits.addAjaxEvents(clearCartFunction), Flits.addFetchEvents(clearCartFunction)
    },
    getCartAjaxEvent: function() {
      var getCartFunction = function(xhrOrFetch) {
        var url = this._url;
        url.indexOf("flits") === -1 && (url.indexOf("/cart.js") !== -1 || url.indexOf("/cart?view=drawer") !== -1) && Flits.dispatchEvent("Flits:AjaxCart:CartRendered", {
          response: this,
          xhrOrFetch
        })
      };
      Flits.addAjaxEvents(getCartFunction), Flits.addFetchEvents(getCartFunction)
    },
    debounce: function(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this,
          args = arguments,
          callNow = immediate && !timeout;
        clearTimeout(timeout), timeout = setTimeout((function() {
          timeout = null, immediate || func.apply(context, args)
        }), wait), callNow && func.apply(context, args)
      }
    },
    compareObject: function(obj1, obj2) {
      for (var p in obj1) {
        if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return !1;
        switch (typeof obj1[p]) {
          case "object":
            if (!Flits.compareObject(obj1[p], obj2[p])) return !1;
            break;
          case "function":
            if (typeof obj2[p] > "u" || p != "compare" && obj1[p].toString() != obj2[p].toString()) return !1;
            break;
          default:
            if (obj1[p] != obj2[p]) return !1
        }
      }
      for (var p in obj2)
        if (typeof obj1[p] > "u") return !1;
      return !0
    },
    lightOrDark: function(color) {
      var colorToHex = color;
      if (color.match(/^rgb/)) {
        let rgbToHex2 = function(r2, g2, b2) {
          return "#" + ((1 << 24) + (r2 << 16) + (g2 << 8) + b2).toString(16).slice(1)
        };
        var rgbToHex = rgbToHex2;
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/), r = parseInt(color[1]), g = parseInt(color[2]), b = parseInt(color[3]), colorToHex = rgbToHex2(r, g, b)
      } else color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")), r = color >> 16, g = color >> 8 & 255, b = color & 255;
      return hsp = Math.sqrt(.299 * (r * r) + .587 * (g * g) + .114 * (b * b)), hsp > 127.5 ? Flits.shade(colorToHex, -.4) : Flits.shade(colorToHex, .4)
    },
    shade: function(color, percent) {
      var f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 255,
        B = f & 255,
        shadeColor = "#" + (16777216 + (Math.round((t - R) * p) + R) * 65536 + (Math.round((t - G) * p) + G) * 256 + (Math.round((t - B) * p) + B)).toString(16).slice(1);

      function hexToRgb(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (function(m, r3, g3, b3) {
          return r3 + r3 + g3 + g3 + b3 + b3
        }));
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
          r2 = parseInt(result[1], 16),
          g2 = parseInt(result[2], 16),
          b2 = parseInt(result[3], 16);
        return "rgb(" + r2 + "," + g2 + "," + b2 + ")"
      }
      return hexToRgb(shadeColor)
    },
    timeDiffer: function(options) {
      var date1 = options.date1,
        date2 = options.date2,
        type = options.type || "day",
        isAbs = options.isAbsDisabled ? options.isAbsDisabled : !1;
      let diff = new Date(date1) - new Date(date2),
        value;
      return type == "day" ? value = Math.floor(diff / 864e5) : type == "minute" ? (value = Math.round(diff / 1e3), value /= 60) : type == "hour" && (value = Math.floor(diff / 1e3), value /= 3600), parseInt(isAbs ? value : Math.abs(value))
    },
    getStoreCredit: function(callback) {
      let url = Flits.base_url + "/" + Flits.customer_id + "/credit/get_credit",
        params = {
          customer_hash: Flits.customerHash,
          token: Flits.token
        };
      Flits.ajax({
        method: "GET",
        url,
        data: params
      }).done((function(resp) {
        callback(resp)
      })).fail((function(resp) {})).always((function() {}))
    },
    getWishlist: function(callback) {
      let url = Flits.base_url + "/wishlist",
        params = {
          customer_id: Flits.customer_id,
          customer_hash: Flits.customerHash,
          token: Flits.token
        };
      Flits.ajax({
        method: "GET",
        url,
        data: params
      }).done((function(resp) {
        callback(resp)
      })).fail((function(resp) {})).always((function() {}))
    },
    rcssescape: /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
    fcssescape: function(ch, asCodePoint) {
      return asCodePoint ? ch === "\0" ? "\uFFFD" : ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " " : "\\" + ch
    },
    escapeSelectorNavigation: function(sel) {
      return (sel + "").replace(Flits.rcssescape, Flits.fcssescape)
    },
    isTouchEnabled: function() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    }
  }), Flits.listenAjaxEvents(), Flits.listenFetchEvents(), Flits.extend(window.flitsObjects.global), Flits.extend(window.flitsObjects.storeData), Flits.ajax({
    url: window.flitsObjects.storeData.jsonSettingsPath,
    method: "GET"
  }).done((function(data) {
    Flits.dispatchEvent("Flits:Loaded"), Flits.AccountPageDefaultSettings, window.flitsObjects.accountPage = data, Flits.extend(window.flitsObjects.accountPage), Flits.each(window.flitsObjects.allCssJs, (function(index, item) {
      let isNeedToLoadPage = !1,
        isNeedToLoadCondition = !1;
      switch (!0) {
        case Flits.inArray("all", item.requestPageType) != -1:
          isNeedToLoadPage = !0;
          break;
        case Flits.inArray(window.flitsObjects.storeData.request.page_type, item.requestPageType) != -1:
          isNeedToLoadPage = !0;
          break;
        default:
          break
      }
      if (!isNeedToLoadPage) return !0;
      let metaCount = 0;
      Flits.each(item.loadBasedOnMetafields, (function(metaIndex, metaName) {
        if (Array.isArray(metaName)) {
          var op, left, right;
          switch (metaName.length) {
            case 1:
              left = metaName[0], op = "==", right = 1;
              break;
            case 2:
              left = metaName[0], op = "==", right = metaName[1];
              break;
            case 3:
              left = metaName[0], op = metaName[1], right = metaName[2];
              break
          }
          var str = "Flits.Metafields['" + left + "'] " + op + " '" + right + "'";
          eval(str) && metaCount++
        } else Flits.Metafields[metaName] == 1 && metaCount++
      })), metaCount == item.loadBasedOnMetafields.length && (isNeedToLoadCondition = !0), isNeedToLoadCondition && Flits.LoadStyleScript(index, item.url)
    })), window.flitsObjects.storeData.request.page_type == "product" && window.flitsObjects.storeData.product && window.flitsObjects.storeData.product.handle && Flits.recentlyViewDataStore(window.flitsObjects.storeData.product.handle);
    var instances = null;
    Flits(document).on("mouseover", "[data-tippy-content]", (function(event) {
      if (!Flits.isTouchEnabled() && (instances && (instances.length ? Flits.each(instances, (function(i, v) {
          instances[i].destroy()
        })) : instances.destroy()), event.target.hasAttribute("data-tippy-content")))
        if (Flits(window).width() < 768) tippy(event.target).disable();
        else {
          let selector = Flits(this)[0];
          instances = tippy(selector)
        }
    }))
  })).fail((function(data2) {})).always((function(data2) {}))
})(Flits);
//# sourceMappingURL=/cdn/shop/t/516/assets/flits.js.map?v=23111667585081147421776948164