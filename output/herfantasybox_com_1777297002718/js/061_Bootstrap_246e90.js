(function ensightenInit() {
  var ensightenOptions = {
    client: "choozle",
    clientId: 923,
    publishPath: "20245",
    bootstrapVersion: "v10",
    isPublic: 0,
    serverComponentLocation: "nexus.ensighten.com/choozle/20245/serverComponent.php",
    staticJavascriptPath: "nexus.ensighten.com/choozle/20245/code/",
    ns: 'Bootstrapper',
    nexus: "nexus.ensighten.com",
    scUseCacheBuster: "true",
    enableTagAuditBeacon: "false",
    enablePagePerfBeacon: "false",
    registryNs: "ensBootstraps",
    generatedOn: "Fri Apr 18 15:25:59 GMT 2025",
    beaconSamplingSeedValue: 11,
    dataLayerName: "ensDataLayer"
  };
  if (!window[ensightenOptions.ns]) {
    window[ensightenOptions.registryNs] || (window[ensightenOptions.registryNs] = {});
    window[ensightenOptions.registryNs][ensightenOptions.ns] = window[ensightenOptions.ns] = function(l) {
      function n(a) {
        this.name = "DependencyNotAvailableException";
        this.message = "Dependency with id " + a + " is missing"
      }

      function p(a) {
        this.name = "BeaconException";
        this.message = "There was an error during beacon initialization";
        a = a || {};
        this.lineNumber = a.lineNumber || a.line;
        this.fileName = a.fileName
      }

      function r() {
        for (var a = d.dataDefinitionIds.length, b = !0, e = 0; e < a; e++) {
          var f = d.dataDefinitions[d.dataDefinitionIds[e]];
          if (!f ||
            null == f.endRegistration) {
            b = !1;
            break
          }
        }
        b && d.callOnDataDefintionComplete()
      }
      var c = {},
        d = {};
      d.ensightenOptions = ensightenOptions;
      d.scDataObj = {};
      const x = document.currentScript && document.currentScript.src ? (new URL(document.currentScript.src)).hostname : "";
      c.version = "1.26.0";
      c.getDynamicDomain = function() {
        if (x) return x;
        for (var a = null, b = document.getElementsByTagName("script"), e = l.client + "/" + l.publishPath + "/Bootstrap.js", f = l.client + "/Bootstrap.js", g = 0; g < b.length; g++)
          if (-1 < b[g].src.indexOf(e) || "prod" == l.publishPath &&
            -1 < b[g].src.indexOf(f)) {
            a = b[g];
            break
          } return a ? (b = document.createElement("a"), b.href = a.getAttribute("src"), b.hostname) : ""
      };
      ensightenOptions.nexus = c.nexus = ensightenOptions.nexus || c.getDynamicDomain() || "nexus.ensighten.com";
      c.rand = -1;
      c.currSec = (new Date).getSeconds();
      c.options = {
        interval: l.interval || 100,
        erLoc: l.errorLocation || c.nexus + "/error/e.gif",
        scLoc: l.serverComponentLocation || c.nexus + "/" + l.client + "/serverComponent.php",
        sjPath: l.staticJavascriptPath || c.nexus + "/" + l.client + "/code/",
        alLoc: l.alertLocation ||
          c.nexus + "/alerts/a.gif",
        publishPath: l.publishPath,
        isPublic: l.isPublic,
        client: l.client,
        clientId: l.clientId,
        enableTagAuditBeacon: l.enableTagAuditBeacon,
        beaconSamplingSeedValue: l.beaconSamplingSeedValue || -1,
        dataLayerName: l.dataLayerName || "ensDataLayer",
        protocol: "http:" === window.location.protocol ? window.location.protocol : "https:"
      };
      c.ruleList = [];
      c.allDeploymentIds = [];
      c.runDeploymentIds = [];
      c.runRuleIds = [];
      c.exceptionList = [];
      c.ensightenVariables = {};
      c.appIdWhitelist = [];
      c.appIdBlacklist = [];
      window[c.options.dataLayerName] &&
        window[c.options.dataLayerName][0] && (window[c.options.dataLayerName][0]["ens.whitelist"] && (c.appIdWhitelist = window[c.options.dataLayerName][0]["ens.whitelist"]), window[c.options.dataLayerName][0]["ens.blacklist"] && (c.appIdBlacklist = window[c.options.dataLayerName][0]["ens.blacklist"]));
      c.canRuleRunByAppId = function(a) {
        return a ? a && !a.appId || a && -1 == a.appId || 0 == c.appIdWhitelist.length && 0 == c.appIdBlacklist.length ? !0 : 0 < c.appIdWhitelist.length && 0 == c.appIdBlacklist.length ? -1 == c.appIdWhitelist.indexOf(a.appId) ?
          !1 : !0 : 0 == c.appIdWhitelist.length && 0 < c.appIdBlacklist.length ? -1 == c.appIdBlacklist.indexOf(a.appId) ? !0 : !1 : 0 < c.appIdWhitelist.length && 0 < c.appIdBlacklist.length && -1 == c.appIdBlacklist.indexOf(a.appId) && -1 != c.appIdWhitelist.indexOf(a.appId) ? !0 : !1 : !1
      };
      c.test = function(a) {
        if (c.canRuleRunByAppId(a) && !(a.executionData.hasRun || a.executionData.runTime && 0 < a.executionData.runTime.length)) {
          for (var b = 0; b < a.dependencies.length; b++)
            if (!1 === a.dependencies[b]()) return;
          a.execute()
        }
      };
      n.prototype = Error();
      n.prototype || (n.prototype = {});
      n.prototype.constructor = n;
      c.DependencyNotAvailableException = n;
      p.prototype = Error();
      p.prototype || (p.prototype = {});
      p.prototype.constructor = p;
      c.BeaconException = p;
      c.checkForInvalidDependencies = function(a, b, e, f) {
        for (var g = 0; g < e.length; g++)
          if ("DEPENDENCYNEVERAVAILABLE" === e[g]) return d.currentRuleId = a, d.currentDeploymentId = b, d.reportException(new c.DependencyNotAvailableException(f[g])), b && -1 !== b && c.allDeploymentIds.push(b), !0;
        return !1
      };
      d.currentRuleId = -1;
      d.currentDeploymentId = -1;
      d.reportedErrors = [];
      d.reportedAlerts = [];
      d.AF = [];
      c.initialized = !1;
      d.extend = function(a) {
        c.initialized && window[ensightenOptions.ns].reportException({
          name: "CoreExtendException",
          message: "Core extend was called after initialization"
        })
      };
      d.initialize = function() {
        c.initialized || (this.extend(c), c.initialized = !0)
      };
      d.sampleBeacon = function() {
        var a = !1;
        try {
          var b = (c.currSec || 0) % 20,
            e = c.options.beaconSamplingSeedValue; - 1 === e ? a = !0 : 0 !== b && 0 === e % b && (a = !0)
        } catch (f) {}
        return a
      };
      d.getServerComponent = function(a) {
        d.callOnGetServerComponent();
        var b =
          c.options.protocol + "//" + ("/" == c.options.scLoc.charAt(0) ? c.getDynamicDomain() : "") + c.options.scLoc;
        d.insertScript(b, !1, a || !0, !0)
      };
      d.setVariable = function(a, b) {
        c.ensightenVariables[a] = b
      };
      d.getVariable = function(a) {
        return a in c.ensightenVariables ? c.ensightenVariables[a] : null
      };
      d.testAll = function() {
        for (var a = 0; a < c.ruleList.length; a++) c.test(c.ruleList[a])
      };
      d.executionState = {
        DOMParsed: !1,
        DOMLoaded: !1,
        dataDefinitionComplete: !1,
        conditionalRules: !1,
        readyForServerComponent: !1
      };
      d.reportException = function(a) {
        a.timestamp =
          (new Date).getTime();
        c.exceptionList.push(a);
        a = c.options.protocol + "//" + c.options.erLoc + "?msg=" + encodeURIComponent(a.message || "") + "&lnn=" + encodeURIComponent(a.lineNumber || a.line || -1) + "&fn=" + encodeURIComponent(a.fileName || "") + "&cid=" + encodeURIComponent(c.options.clientId || -1) + "&client=" + encodeURIComponent(c.options.client || "") + "&publishPath=" + encodeURIComponent(c.options.publishPath || "") + "&rid=" + encodeURIComponent(a.rid || d.currentRuleId || -1) + "&did=" + encodeURIComponent(a.did || d.currentDeploymentId ||
          -1) + "&errorName=" + encodeURIComponent(a.name || "");
        a = d.imageRequest(a);
        a.timestamp = (new Date).getTime();
        this.reportedErrors.push(a);
        d.currentRuleId = -1;
        d.currentDeploymentId = -1
      };
      d.Rule = function(a) {
        this.execute = function() {
          this.executionData.runTime.push(new Date);
          d.currentRuleId = this.id;
          d.currentDeploymentId = this.deploymentId;
          try {
            this.code()
          } catch (b) {
            window[ensightenOptions.ns].reportException(b)
          } finally {
            this.executionData.hasRun = !0, -1 !== this.deploymentId && (c.runDeploymentIds.push(this.deploymentId),
              c.runRuleIds.push(this.id)), d.testAll()
          }
        };
        this.id = a.id;
        this.deploymentId = a.deploymentId;
        this.dependencies = a.dependencies || [];
        this.code = a.code;
        this.appId = a.appId;
        this.executionData = {
          hasRun: !1,
          runTime: []
        }
      };
      c.updateRuleEvent = function(a, b) {
        for (var e = 0; e < c.ruleList.length; e++)
          if (null != c.ruleList[e].eventTriggerObj && c.ruleList[e].eventTriggerObj.rid == a) return c.ruleList[e].id = a, c.ruleList[e].deploymentId = b, c.ruleList[e].executionData.hasRun = !0, c.ruleList[e].executionData.runTime = [new Date], c.allDeploymentIds.push(b),
            !0;
        return !1
      };
      d.triggerEvent = function(a, b) {
        d.getRule(a) || c.updateRuleEvent(a, b) || window[ensightenOptions.ns].reportException({
          rid: a,
          did: b,
          name: "triggerEvent error",
          message: "rid not found in rule.eventTriggerObj in registered rule list. Dependent Tag can not run due to missing event object."
        })
      };
      d.registerRule = function(a) {
        if (d.getRule(a.id) && -1 !== a.id) return !1;
        c.ruleList.push(a); - 1 !== a.deploymentId && c.allDeploymentIds.push(a.deploymentId);
        d.testAll();
        return !0
      };
      d.getRule = function(a) {
        for (var b = 0; b < c.ruleList.length; b++)
          if (c.ruleList[b].id ===
            a) return c.ruleList[b];
        return !1
      };
      d.getRuleList = function() {
        return c.ruleList
      };
      d.clearRuleList = function() {
        c.ruleList = []
      };
      d.getAllDeploymentIds = function() {
        return c.allDeploymentIds
      };
      d.getRunRuleIds = function() {
        return c.runRuleIds
      };
      d.getRunDeploymentIds = function() {
        return c.runDeploymentIds
      };
      d.hasRuleRun = function(a) {
        return (a = d.getRule(a)) ? a.executionData.hasRun : !1
      };
      c.toTwoChar = function(a) {
        return (2 === a.toString().length ? "" : "0") + a
      };
      d.Alert = function(a) {
        var b = new Date;
        b = b.getFullYear() + "-" + c.toTwoChar(b.getMonth()) +
          "-" + c.toTwoChar(b.getDate()) + " " + c.toTwoChar(b.getHours()) + ":" + c.toTwoChar(b.getMinutes()) + ":" + c.toTwoChar(b.getSeconds());
        this.severity = a.severity || 1;
        this.subject = a.subject || "";
        this.type = a.type || 1;
        this.ruleId = a.ruleId || -1;
        this.severity = encodeURIComponent(this.severity);
        this.date = encodeURIComponent(b);
        this.subject = encodeURIComponent(this.subject);
        this.type = encodeURIComponent(this.type)
      };
      d.generateAlert = function(a) {
        a = d.imageRequest(c.options.protocol + "//" + c.options.alLoc + "?d=" + a.date + "&su=" + a.subject +
          "&se=" + a.severity + "&t=" + a.type + "&cid=" + c.options.clientId + "&client=" + c.options.client + "&publishPath=" + c.options.publishPath + "&rid=" + d.currentRuleId + "&did=" + d.currentDeploymentId);
        a.timestamp = (new Date).getTime();
        this.reportedAlerts.push(a)
      };
      d.imageRequest = function(a) {
        var b = new Image(0, 0);
        b.src = a;
        return b
      };
      d.insertScript = function(a, b, e, f) {
        var g = document.getElementsByTagName("script"),
          h;
        if (void 0 !== b ? b : 1)
          for (h = 0; h < g.length; h++)
            if (g[h].src === a && g[h].readyState && /loaded|complete/.test(g[h].readyState)) return;
        if (!f) var m = e;
        else if (e) {
          e = 1 == e && "object" == typeof d.scDataObj ? d.scDataObj : e;
          c.rand = Math.random() * ("1E" + (10 * Math.random()).toFixed(0));
          b = window.location.href;
          "object" === typeof e && e.PageID && (b = e.PageID, delete e.PageID);
          if ("object" === typeof e)
            for (h in e) {
              h = ~b.indexOf("#") ? b.slice(b.indexOf("#"), b.length) : "";
              b = b.slice(0, h.length ? b.length - h.length : b.length);
              b += ~b.indexOf("?") ? "&" : "?";
              for (k in e) b += k + "=" + e[k] + "&";
              b = b.slice(0, -1) + h;
              break
            }
          a = a + "?namespace=" + (ensightenOptions.ns + "&");
          a += "staticJsPath=" + ensightenOptions.staticJavascriptPath +
            "&";
          a += "publishedOn=" + ensightenOptions.generatedOn + "&";
          a += "ClientID=" + encodeURIComponent(c.options.clientId) + "&PageID=" + encodeURIComponent(b) + ("/" == c.options.scLoc.charAt(0) ? "&custDomain=" + c.getDynamicDomain() : "")
        }(function(q, t, y) {
          var u = t.head || t.getElementsByTagName("head"),
            z = function() {
              if ("item" in u) {
                if (!u[0]) {
                  setTimeout(z, 25);
                  return
                }
                u = u[0]
              }
              var v = t.createElement("script"),
                w;
              for (w in m) v.setAttribute(w, m[w] ? m[w] : null);
              y && (v.src = y);
              v.onload = v.onerror = function() {
                this.addEventListener && (this.readyState =
                  "loaded")
              };
              u.insertBefore(v, u.firstChild)
            };
          setTimeout(z, 0)
        })(window, document, a, m)
      };
      d.loadScriptCallback = function(a, b, e, f) {
        var g = document.getElementsByTagName("script"),
          h = g[0];
        if (e)
          for (e = 0; e < g.length; e++)
            if (g[e].src === a && g[e].readyState && /loaded|complete/.test(g[e].readyState)) try {
              b()
            } catch (q) {
              window[ensightenOptions.ns].reportException(q)
            } finally {
              return
            }
        g = document.createElement("script");
        for (var m in f) g.setAttribute(m, f[m] ? f[m] : null);
        g.type = "text/javascript";
        g.async = !0;
        g.src = a;
        g.onerror = function() {
          this.addEventListener &&
            (this.readyState = "loaded")
        };
        g.onload = g.onreadystatechange = function() {
          if (!this.readyState || "complete" === this.readyState || "loaded" === this.readyState) {
            this.onload = this.onreadystatechange = null;
            this.addEventListener && (this.readyState = "loaded");
            try {
              b.call(this)
            } catch (q) {
              window[ensightenOptions.ns].reportException(q)
            }
          }
        };
        h.parentNode.insertBefore(g, h)
      };
      d.insertPageFiles = function(a) {
        var b = 0,
          e = 0,
          f = function() {
            e == a.length - 1 && window[ensightenOptions.ns].callOnPageSpecificCompletion();
            e++
          };
        for (b = 0; b < a.length; ++b) window[ensightenOptions.ns].loadScriptCallback(a[b],
          f)
      };
      d.unobtrusiveAddEvent = function(a, b, e) {
        try {
          var f = a[b] ? a[b] : function() {};
          a[b] = function() {
            e.apply(this, arguments);
            return f.apply(this, arguments)
          }
        } catch (g) {
          window[ensightenOptions.ns].reportException(g)
        }
      };
      d.anonymous = function(a, b) {
        return function() {
          try {
            d.currentRuleId = b ? b : "anonymous", a()
          } catch (e) {
            window[ensightenOptions.ns].reportException(e)
          }
        }
      };
      d.setCurrentRuleId = function(a) {
        d.currentRuleId = a
      };
      d.setCurrentDeploymentId = function(a) {
        d.currentDeploymentId = a
      };
      c.bind = function(a, b, e, f, g, h) {
        if ("function" ===
          typeof a) a = new d.Rule({
          id: b || -1,
          deploymentId: e || -1,
          appId: f || -1,
          dependencies: "immediate" == g ? [] : [function() {
            return window[ensightenOptions.ns].executionState[g]
          }],
          code: a
        }), null != h && (a.eventTriggerObj = h);
        else if ("object" !== typeof a) return !1;
        d.registerRule(a)
      };
      d.bindImmediate = function(a, b, e, f) {
        c.bind(a, b, e, f, "immediate")
      };
      d.bindDOMParsed = function(a, b, e, f) {
        c.bind(a, b, e, f, "DOMParsed")
      };
      d.bindDOMLoaded = function(a, b, e, f) {
        c.bind(a, b, e, f, "DOMLoaded")
      };
      d.bindPageSpecificCompletion = function(a, b, e, f) {
        c.bind(a,
          b, e, f, "conditionalRules")
      };
      d.bindOnGetServerComponent = function(a, b, e, f) {
        c.bind(a, b, e, f, "readyForServerComponent")
      };
      d.bindDataDefinitionComplete = function(a, b, e, f) {
        c.bind(a, b, e, f, "dataDefinitionComplete")
      };
      d.checkHasRun = function(a) {
        if (0 === a.length) return !0;
        for (var b, e = 0; e < a.length; ++e)
          if (b = d.getRule(parseInt(a[e], 10)), !b || !b.executionData.hasRun) return !1;
        return !0
      };
      c.bindDependency = function(a, b, e, f, g, h, m, q) {
        var t = [];
        if (!c.checkForInvalidDependencies(b, f, e, g)) {
          "immediate" == !m && t.push(function() {
            return window[ensightenOptions.ns].executionState[m]
          });
          t.push(function() {
            return window[ensightenOptions.ns].checkHasRun(e)
          });
          if ("function" === typeof a) a = new d.Rule({
            id: b || -1,
            deploymentId: f || -1,
            appId: h || -1,
            dependencies: t,
            code: a
          }), null != q && (a.eventTriggerObj = q);
          else if ("object" !== typeof a) return !1;
          d.registerRule(a)
        }
      };
      d.bindDependencyImmediate = function(a, b, e, f, g, h) {
        c.bindDependency(a, b, e, f, g, h, "immediate")
      };
      d.bindDependencyDOMLoaded = function(a, b, e, f, g, h) {
        c.bindDependency(a, b, e, f, g, h, "DOMLoaded")
      };
      d.bindDependencyDOMParsed = function(a, b, e, f, g, h) {
        c.bindDependency(a,
          b, e, f, g, h, "DOMParsed")
      };
      d.bindDependencyPageSpecificCompletion = function(a, b, e, f, g, h) {
        c.bindDependency(a, b, e, f, g, h, "conditionalRules")
      };
      d.bindDependencyOnGetServerComponent = function(a, b, e, f, g, h) {
        c.bindDependency(a, b, e, f, g, h, "readyForServerComponent")
      };
      d.bindDependencyDataDefinitionComplete = function(a, b, e, f, g, h) {
        c.bindDependency(a, b, e, f, g, h, "dataDefinitionComplete")
      };
      d.dataDefinitionIds = [];
      d.dataDefinitions = [];
      d.pageSpecificDataDefinitionsSet = !1;
      d.setPageSpecificDataDefinitionIds = function(a) {
        for (var b =
            a ? a.length : 0, e = 0; e < b; e++) {
          var f = a[e];
          if (Array.prototype.indexOf) - 1 == d.dataDefinitionIds.indexOf(f) && d.dataDefinitionIds.push(f);
          else {
            for (var g = !1, h = d.dataDefinitionIds.length, m = 0; m < h; m++)
              if (d.dataDefinitionIds[m] === f) {
                g = !0;
                break
              } g || d.dataDefinitionIds.push(f)
          }
        }
        d.pageSpecificDataDefinitionsSet = !0;
        r()
      };
      d.DataDefinition = function(a, b) {
        this.id = a;
        this.registrationFn = b;
        this.endRegistrationTime = this.startRegistrationTime = null;
        this.startRegistration = function() {
          this.startRegistrationTime = new Date
        };
        this.endRegistration =
          function() {
            this.endRegistrationTime = new Date
          }
      };
      d.registerDataDefinition = function(a, b) {
        var e = d.dataDefinitions[b];
        e || (e = new d.DataDefinition(b, a), d.dataDefinitions[b] = e);
        e.startRegistrationTime || (e.startRegistration(), e.registrationFn(), e.endRegistration());
        d.pageSpecificDataDefinitionsSet && r()
      };
      d.callOnDataDefintionComplete = function() {
        d.executionState.dataDefinitionComplete = !0;
        d.testAll()
      };
      d.callOnDOMParsed = function() {
        window[ensightenOptions.ns].executionState.DOMParsed = !0;
        window[ensightenOptions.ns].testAll()
      };
      d.callOnDOMLoaded = function() {
        window[ensightenOptions.ns].executionState.DOMParsed = !0;
        window[ensightenOptions.ns].executionState.DOMLoaded = !0;
        window[ensightenOptions.ns].testAll()
      };
      d.callOnPageSpecificCompletion = function() {
        for (var a = document.getElementsByTagName("script"), b = 0, e = a.length; b < e; b++)
          if (a[b].src && a[b].src.match(/\.ensighten\.com\/(.+?)\/code\/.*/i) && "loaded" != a[b].readyState && "complete" != a[b].readyState) {
            setTimeout(window[ensightenOptions.ns].callOnPageSpecificCompletion, 50);
            return
          } setTimeout(function() {
          window[ensightenOptions.ns].executionState.conditionalRules = !0;
          window[ensightenOptions.ns].testAll()
        }, 1)
      };
      d.callOnGetServerComponent = function() {
        window[ensightenOptions.ns].executionState.readyForServerComponent = !0;
        window[ensightenOptions.ns].testAll()
      };
      d.hasDOMParsed = function() {
        return window[ensightenOptions.ns].executionState.DOMParsed
      };
      d.hasDOMLoaded = function() {
        return window[ensightenOptions.ns].executionState.DOMLoaded
      };
      d.hasPageSpecificCompletion = function() {
        return window[ensightenOptions.ns].executionState.conditionalRules
      };
      var A = function() {
        var a = [],
          b = !1,
          e = !1;
        return {
          add: function(f) {
            b && !e ? f() : "function" == typeof f && (a[a.length] = f)
          },
          exec: function() {
            e = !0;
            do {
              var f = a;
              a = [];
              b = !0;
              for (var g = 0; g < f.length; g++) try {
                f[g].call(window)
              } catch (h) {
                window[ensightenOptions.ns].reportException(h)
              }
            } while (0 < a.length);
            e = !1
          },
          haveRun: function() {
            return b
          }
        }
      };
      d.new_fArray = function() {
        return A()
      };
      c.timer = null;
      (function() {
        function a(f, g) {
          return function() {
            f.apply(g, arguments)
          }
        }
        window.console || (window.console = {});
        var b = window.console;
        if (!b.log)
          if (window.log4javascript) {
            var e = log4javascript.getDefaultLogger();
            b.log = a(e.info, e);
            b.debug = a(e.debug, e);
            b.info = a(e.info, e);
            b.warn = a(e.warn, e);
            b.error = a(e.error, e)
          } else b.log = function() {};
        b.debug || (b.debug = b.log);
        b.info || (b.info = b.log);
        b.warn || (b.warn = b.log);
        b.error || (b.error = b.log)
      })();
      document.addEventListener ? (-1 < navigator.userAgent.indexOf("AppleWebKit/") ? c.timer = window.setInterval(function() {
        /loaded|interactive|complete/.test(document.readyState) && (clearInterval(c.timer), d.callOnDOMParsed())
      }, 50) : document.addEventListener("DOMContentLoaded", d.callOnDOMParsed,
        !1), window.addEventListener("load", d.callOnDOMLoaded, !1)) : (setTimeout(function() {
        var a = window.document,
          b = function() {
            try {
              if (!document.body) throw "continue";
              a.documentElement.doScroll("left")
            } catch (e) {
              setTimeout(b, 15);
              return
            }
            window[ensightenOptions.ns].callOnDOMParsed()
          };
        b()
      }, 1), window.attachEvent("onload", function() {
        window[ensightenOptions.ns].callOnDOMLoaded()
      }));
      document.readyState && "complete" === document.readyState && (d.executionState.DOMParsed = !0, d.executionState.DOMLoaded = !0);
      "true" === c.options.enableTagAuditBeacon &&
        d.sampleBeacon() && window.setTimeout(function() {
          if (window[ensightenOptions.ns] && !window[ensightenOptions.ns].mobilePlatform) try {
            for (var a = [], b, e, f, g, h = 0; h < c.ruleList.length; ++h) e = c.ruleList[h], f = e.executionData.hasRun ? "1" : "0", g = e.deploymentId.toString() + "|" + e.id.toString() + "|" + f, a.push(g);
            b = "[" + a.join(";") + "]";
            var m = c.options.protocol + "//" + c.nexus + "/" + encodeURIComponent(l.client) + "/" + encodeURIComponent(l.publishPath) + "/TagAuditBeacon.rnc?cid=" + encodeURIComponent(l.clientId) + "&data=" + b + "&idx=0&r=" +
              c.rand;
            d.imageRequest(m)
          } catch (q) {
            d.currentRuleId = -1, d.currentDeploymentId = -1, a = new c.BeaconException(q), window[ensightenOptions.ns].reportException(a)
          }
        }, 3E3);
      window.setInterval(d.testAll, c.options.interval);
      return d
    }(ensightenOptions);
    "true" === ensightenOptions.enablePagePerfBeacon && window[ensightenOptions.ns] && window[ensightenOptions.ns].sampleBeacon() && window[ensightenOptions.ns].bindDOMParsed(function() {
      if (!window[ensightenOptions.ns].mobilePlatform) {
        var l = window.performance;
        if (l) {
          l = l.timing || {};
          var n = l.navigationStart || 0,
            p = {
              connectEnd: "ce",
              connectStart: "cs",
              domComplete: "dc",
              domContentLoadedEventEnd: "dclee",
              domContentLoadedEventStart: "dcles",
              domInteractive: "di",
              domLoading: "dl",
              domainLookupEnd: "dle",
              domainLookupStart: "dls",
              fetchStart: "fs",
              loadEventEnd: "lee",
              loadEventStart: "les",
              redirectEnd: "rede",
              redirectStart: "reds",
              requestStart: "reqs",
              responseStart: "resps",
              responseEnd: "respe",
              secureConnectionStart: "scs",
              unloadEventStart: "ues",
              unloadEventEnd: "uee"
            };
          var r = "&ns=" + encodeURIComponent(l.navigationStart);
          for (var c in p)
            if (void 0 !== l[c]) {
              var d = l[c] - n;
              r += "&" + p[c] + "=" + (0 < d ? encodeURIComponent(d) : 0)
            } else r += "&" + p[c] + "=-1";
          window[ensightenOptions.ns].timing = r;
          c = ensightenOptions.nexus || "nexus.ensighten.com";
          l = ensightenOptions.staticJavascriptPath ||
            "";
          r = l.indexOf("/", 0);
          n = l.indexOf("/code/");
          l = l.substring(r, n) + "/perf.rnc";
          l += "?cid=" + encodeURIComponent(ensightenOptions.clientId) + window[ensightenOptions.ns].timing;
          window[ensightenOptions.ns].imageRequest("//" + c + l)
        }
      }
    });

    /*
     MIT License (c) copyright 2013 original author or authors */
    window[ensightenOptions.ns].data || (window[ensightenOptions.ns].when = function() {
      function e(g, l, t, w) {
        return v(g).then(l, t, w)
      }

      function B(g) {
        this.then = g
      }

      function v(g) {
        return f(function(l) {
          l(g)
        })
      }

      function f(g) {
        function l(z) {
          C && (x = d(z), b(C, x), C = y)
        }

        function t(z) {
          l(k(z))
        }

        function w(z) {
          C && b(C, a(z))
        }
        var x, C = [];
        try {
          g(l, t, w)
        } catch (z) {
          t(z)
        }
        return new B(function(z, F, G) {
          return f(function(H, N, I) {
            C ? C.push(function(L) {
              L.then(z, F, G).then(H, N, I)
            }) : n(function() {
              x.then(z, F, G).then(H, N, I)
            })
          })
        })
      }

      function d(g) {
        return g instanceof
        B ? g : g !== Object(g) ? r(g) : f(function(l, t, w) {
          n(function() {
            try {
              var x = g.then;
              "function" === typeof x ? T(x, g, l, t, w) : l(r(g))
            } catch (C) {
              t(C)
            }
          })
        })
      }

      function r(g) {
        var l = new B(function(t) {
          try {
            return "function" == typeof t ? d(t(g)) : l
          } catch (w) {
            return k(w)
          }
        });
        return l
      }

      function k(g) {
        var l = new B(function(t, w) {
          try {
            return "function" == typeof w ? d(w(g)) : l
          } catch (x) {
            return k(x)
          }
        });
        return l
      }

      function a(g) {
        var l = new B(function(t, w, x) {
          try {
            return "function" == typeof x ? a(x(g)) : l
          } catch (C) {
            return a(C)
          }
        });
        return l
      }

      function b(g, l) {
        n(function() {
          for (var t,
              w = 0; t = g[w++];) t(l)
        })
      }

      function c(g, l, t, w, x) {
        p(2, arguments);
        return e(g, function(C) {
          return f(function(z, F, G) {
            function H(M) {
              P(M)
            }

            function N(M) {
              Q(M)
            }
            var I;
            var L = C.length >>> 0;
            var O = Math.max(0, Math.min(l, L));
            var R = [];
            var W = L - O + 1;
            var U = [];
            if (O) {
              var P = function(M) {
                U.push(M);
                --W || (Q = P = q, F(U))
              };
              var Q = function(M) {
                R.push(M);
                --O || (Q = P = q, z(R))
              };
              for (I = 0; I < L; ++I) I in C && e(C[I], N, H, G)
            } else z(R)
          }).then(t, w, x)
        })
      }

      function h(g, l, t, w) {
        p(1, arguments);
        return u(g, A).then(l, t, w)
      }

      function u(g, l) {
        return e(g, function(t) {
          return f(function(w,
            x, C) {
            var z, F;
            var G = z = t.length >>> 0;
            var H = [];
            if (G) {
              var N = function(I, L) {
                e(I, l).then(function(O) {
                  H[L] = O;
                  --G || w(H)
                }, x, C)
              };
              for (F = 0; F < z; F++) F in t ? N(t[F], F) : --G
            } else w(H)
          })
        })
      }

      function n(g) {
        1 === E.push(g) && K(m)
      }

      function m() {
        for (var g, l = 0; g = E[l++];) g();
        E = []
      }

      function p(g, l) {
        for (var t, w = l.length; w > g;)
          if (t = l[--w], null != t && "function" != typeof t) throw Error("arg " + w + " must be a function");
      }

      function q() {}

      function A(g) {
        return g
      }
      e.defer = function() {
        var g, l;
        var t = {
          promise: y,
          resolve: y,
          reject: y,
          notify: y,
          resolver: {
            resolve: y,
            reject: y,
            notify: y
          }
        };
        t.promise = g = f(function(w, x, C) {
          t.resolve = t.resolver.resolve = function(z) {
            if (l) return v(z);
            l = !0;
            w(z);
            return g
          };
          t.reject = t.resolver.reject = function(z) {
            if (l) return v(k(z));
            l = !0;
            x(z);
            return g
          };
          t.notify = t.resolver.notify = function(z) {
            C(z);
            return z
          }
        });
        return t
      };
      e.resolve = v;
      e.reject = function(g) {
        return e(g, k)
      };
      e.join = function() {
        return u(arguments, A)
      };
      e.all = h;
      e.map = u;
      e.reduce = function(g, l) {
        var t = T(V, arguments, 1);
        return e(g, function(w) {
          var x = w.length;
          t[0] = function(C, z, F) {
            return e(C, function(G) {
              return e(z,
                function(H) {
                  return l(G, H, F, x)
                })
            })
          };
          return X.apply(w, t)
        })
      };
      e.any = function(g, l, t, w) {
        return c(g, 1, function(x) {
          return l ? l(x[0]) : x[0]
        }, t, w)
      };
      e.some = c;
      e.isPromise = function(g) {
        return g && "function" === typeof g.then
      };
      B.prototype = {
        otherwise: function(g) {
          return this.then(y, g)
        },
        ensure: function(g) {
          function l() {
            return v(g())
          }
          return this.then(l, l).yield(this)
        },
        yield: function(g) {
          return this.then(function() {
            return g
          })
        },
        spread: function(g) {
          return this.then(function(l) {
            return h(l, function(t) {
              return g.apply(y, t)
            })
          })
        },
        always: function(g,
          l) {
          return this.then(g, g, l)
        }
      };
      var y;
      var E = [];
      var D = setTimeout;
      var K = "function" === typeof setImmediate ? "undefined" === typeof window ? setImmediate : setImmediate.bind(window) : "object" === typeof process && process.nextTick ? process.nextTick : function(g) {
        D(g, 0)
      };
      var J = Function.prototype;
      var S = J.call;
      var T = J.bind ? S.bind(S) : function(g, l) {
        return g.apply(l, V.call(arguments, 2))
      };
      J = [];
      var V = J.slice;
      var X = J.reduce || function(g) {
        var l = 0;
        var t = Object(this);
        var w = t.length >>> 0;
        var x = arguments;
        if (1 >= x.length)
          for (;;) {
            if (l in
              t) {
              x = t[l++];
              break
            }
            if (++l >= w) throw new TypeError;
          } else x = x[1];
        for (; l < w; ++l) l in t && (x = g(x, t[l], l, t));
        return x
      };
      return e
    }(), function() {
      function e(d, r) {
        return v.all(r || [], function(k) {
          return d.apply(null, k)
        })
      }

      function B(d) {
        var r = f.call(arguments, 1);
        return function() {
          return e(d, r.concat(f.call(arguments)))
        }
      }
      var v = window[ensightenOptions.ns].when;
      var f = [].slice;
      v.apply = e;
      v.call = function(d) {
        return e(d, f.call(arguments, 1))
      };
      v.lift = B;
      v.bind = B;
      v.compose = function(d) {
        var r = f.call(arguments, 1);
        return function() {
          var k =
            f.call(arguments);
          k = e(d, k);
          return v.reduce(r, function(a, b) {
            return b(a)
          }, k)
        }
      }
    }(), window[ensightenOptions.ns].data = function(e, B) {
      function v(a, b) {
        this.name = "DataDefinitionException";
        this.message = b || "Data definitions cannot be resolved as there are invalid id(s): " + a
      }
      var f = {
          engines: {
            memory: {
              get: function(a) {
                if (d.utils.isArray(a)) {
                  for (var b = [], c = 0; c < a.length; c++) b.push(f.data[a[c]]);
                  return e[ensightenOptions.ns].when.resolve(b)
                }
                b = f.dataDefinitions[a] || {
                  storage: {
                    get: function() {}
                  }
                };
                b = b.storage.get(b);
                f.data[a] =
                  b;
                return e[ensightenOptions.ns].when.resolve(f.data[a])
              },
              set: function(a, b) {
                if (d.utils.isArray(a))
                  for (var c in a) f.data[a[c]] = b[c];
                else f.data[a] = b;
                return e[ensightenOptions.ns].when.resolve(!0)
              },
              remove: function(a) {
                if (d.utils.isArray(a))
                  for (var b in a) delete f.data[a[b]];
                else delete f.data[a];
                return e[ensightenOptions.ns].when.resolve(!0)
              },
              clear: function(a) {
                f.data = {};
                f.definitions = {};
                return e[ensightenOptions.ns].when.resolve(!0)
              },
              all: function() {
                return e[ensightenOptions.ns].when.resolve(f.data)
              }
            }
          },
          normalizeInputArgs: function(a, b) {
            var c = {
                key: [],
                val: B
              },
              h;
            if (d.utils.isPlainObject(a))
              for (h in c.val = [], a) c.key.push(h), c.val.push(a[h]);
            else d.utils.isArray(a), c.key = a, c.val = b;
            return c
          },
          definitions: {},
          data: {}
        },
        d = {
          utils: {
            isPlainObject: function(a) {
              return !!a && "[object Object]" === Object.prototype.toString.call(a)
            },
            isArray: function(a) {
              return "[object Array]" === Object.prototype.toString.call(a)
            },
            escapeRegEx: function(a) {
              try {
                return a.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
              } catch (b) {
                return a
              }
            }
          }
        },
        r = function() {
          return e[ensightenOptions.ns].when.reject("Not Implemented.")
        };
      v.prototype = Error();
      v.prototype || (v.prototype = {});
      v.prototype.constructor = v;
      f.DataDefinitionException = v;
      f.checkForInvalidDataDefinitions = function(a) {
        d.utils.isArray(a) || (a = [a]);
        return a && 0 < a.length && (a = a.join(","), -1 < a.indexOf("invalid_id")) ? (e[ensightenOptions.ns].reportException(new f.DataDefinitionException(a)), !0) : !1
      };
      f.collectAvailableDataDefinitions = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
          var h = parseInt(a[c], 10),
            u = e[ensightenOptions.ns].dataDefinitions[h];
          if (null === u || u === B)
            if (u = d.storage.session.get({
                id: h
              }),
              null !== u && u !== B) d.set(h, u), f.dataDefinitions[h] = {
              id: h,
              load: "visitor",
              storage: d.storage.visitor,
              missingDDFromCache: !0
            }, b.push(e[ensightenOptions.ns].data.get("" + h));
            else return e[ensightenOptions.ns].reportException(new f.DataDefinitionException(a, "Invalid data definition used: " + h)), {
              promises: [],
              isInvalid: !0
            };
          else b.push(e[ensightenOptions.ns].data.get("" + a[c]))
        }
        return {
          promises: b,
          isInvalid: !1
        }
      };
      f.getSync = function(a) {
        function b(q) {
          var A = q.extract || h,
            y = q.transform || u,
            E = !1,
            D = null,
            K = null;
          try {
            D = A()
          } catch (J) {
            D =
              null, E = !0
          }
          try {
            K = y(D)
          } catch (J) {
            K = null, E = !0
          }
          E && c.push(q.id);
          return K
        }
        var c = [],
          h = function() {
            return document
          },
          u = function(q) {
            return null !== q && q !== B ? q.toString() : null
          },
          n = parseInt(a);
        a = "string" === typeof a ? a.split(".") : [];
        var m = {},
          p = "";
        if (!isNaN(n) && "undefined" === typeof f.dataDefinitions[n]) return e[ensightenOptions.ns].reportException(new f.DataDefinitionException(n, "Error resolving data definition: " + n + ".  Does not exist on the page.")), "Data definition specified does not exist on the page";
        if (isNaN(n) &&
          "undefined" === typeof f.dataDefinitionsBySourceCollName["" + a[0] + "." + a[1] + "." + a[2]]) return e[ensightenOptions.ns].reportException(new f.DataDefinitionException(a, "Error resolving data definition: " + a[0] + "." + a[1] + "." + a[2] + ".  Does not exist on the page.")), "Data definition specified does not exist on the page";
        isNaN(n) ? 3 == a.length && (m = d.getDataDefinitionBySourceCollectionName(a[0], a[1], a[2])) : m = d.getDataDefinitionById(n);
        p = m.load && m.load.match(/(session|visitor)/i) && m.storage && m.storage.get ? m.storage.get(m) :
          b(m);
        0 < c.length && e[ensightenOptions.ns].reportException(new f.DataDefinitionException(c, "Error resolving data definitions synchronously: " + c));
        return p
      };
      f.dataDefinitions = {};
      f.dataDefinitionsBySourceCollName = {};
      d.defineEngine = function(a, b) {
        var c = ["get", "set", "remove", "clear", "all"];
        f.engines[a] = b;
        if (!b.returnsPromise)
          for (a = 0; a < c.length; a++) {
            var h = c[a];
            b[h] = e[ensightenOptions.ns].when.lift(b[h])
          }
      };
      d.storage = {
        instance: {
          set: function(a, b) {},
          get: function(a) {
            return f.getSync(a.id)
          }
        },
        page: {
          set: function(a,
            b) {},
          get: function(a) {
            return f.data[a.id]
          }
        },
        session: {
          set: function(a, b) {
            var c = d.storage.session.get({
                id: a
              }),
              h = new Date,
              u = h.getTime();
            h.setTime(u + 18E5);
            null != c && (b = c);
            e[ensightenOptions.ns].data.cookie.utils.set(a, b, {
              expires: h.toGMTString()
            });
            b = {
              expires: h.getTime(),
              value: b
            };
            e[ensightenOptions.ns].data.local.utils.set(a, b)
          },
          get: function(a) {
            var b = e[ensightenOptions.ns].data.cookie.utils.get(a.id),
              c = e.JSON && e.JSON.stringify ? e.JSON : e[ensightenOptions.ns].JSON;
            c = c || {};
            var h = new Date;
            h = h.getTime();
            if (null ===
              b) {
              try {
                var u = c.parse(e[ensightenOptions.ns].data.local.utils.get(a.id))
              } catch (n) {
                u = null
              }
              null != u && (u.expires = +u.expires, h <= u.expires ? b = u.value : "" == u.expires && u.value != B ? b = u.value : e[ensightenOptions.ns].data.local.utils.remove(a.id))
            }
            return b
          }
        },
        visitor: {
          set: function(a, b) {
            var c = d.storage.session.get({
              id: a
            });
            null != c && (b = c);
            e[ensightenOptions.ns].data.cookie.utils.set(a, b);
            e[ensightenOptions.ns].data.local.utils.set(a, {
              expires: "",
              value: b
            })
          },
          get: function(a) {
            return d.storage.session.get(a)
          }
        }
      };
      d.getEngine =
        d.engine = function(a) {
          return a ? f.engines[a] || {
            get: r,
            set: r,
            remove: r,
            clear: r,
            all: r
          } : f.engines
        };
      d.all = function(a) {
        return e[ensightenOptions.ns].data.engine(a || "memory").all()
      };
      d.get = function(a, b, c) {
        b = b || "memory";
        c = c || {}; - 1 < a.indexOf(",") ? (a = a.split(","), a = f.normalizeInputArgs(a)) : a = f.normalizeInputArgs(a);
        return c.wait ? f.getWait(a.key, e[ensightenOptions.ns].data.engine(b), c) : f.data && f.data.hasOwnProperty(a.key) ? e[ensightenOptions.ns].data.engine(b).get(a.key) : f.getWaitForKey(a.key, e[ensightenOptions.ns].data.engine(b),
          c)
      };
      f.getWait = function(a, b, c) {
        var h = +new Date,
          u = e[ensightenOptions.ns].when.defer(),
          n = function() {
            var p = b.get(a);
            if (-1 === c.wait) return p;
            p.then(function(q) {
              c.setCheck(q) ? u.resolve(q) : setTimeout(m, c.interval)
            }, function(q) {
              setTimeout(m, c.interval)
            })
          },
          m = function() {
            var p = +new Date - h; - 1 !== c.wait && p < c.wait ? n() : u.reject("Timeout")
          };
        c.interval = c.interval || 500;
        c.wait = c.wait || 5E3;
        d.utils.isArray(a) ? c.setCheck = c.setCheck || function(p) {
            for (var q = !0, A = 0; A < p.length; A++) q = q && !!p[A];
            return q
          } : c.setCheck = c.setCheck ||
          function(p) {
            return !!p
          };
        n();
        return u.promise
      };
      f.getWaitForKey = function(a, b, c) {
        var h = e[ensightenOptions.ns].when.defer(),
          u = function() {
            if (f.data && f.data.hasOwnProperty(a)) {
              var m = b.get(a);
              if (-1 === c.wait) return m;
              m.then(function(p) {
                h.resolve(p)
              }, function(p) {
                h.reject(p)
              })
            } else setTimeout(n, c.interval)
          },
          n = function() {
            u()
          };
        c.interval = c.interval || 100;
        c.wait = c.wait || 1;
        u();
        return h.promise
      };
      d.set = function(a, b, c) {
        var h = f.normalizeInputArgs(a, b);
        Array.prototype.slice.call(arguments);
        return e[ensightenOptions.ns].data.engine(c ||
          "memory").set(h.key, h.val)
      };
      d.remove = function(a, b) {
        return e[ensightenOptions.ns].data.engine(b || "memory").remove(a)
      };
      d.clear = function(a) {
        return e[ensightenOptions.ns].data.engine(a || "memory").clear()
      };
      d.define = function(a, b) {
        b && (a.name = b.id || b.name);
        if (!a.name) return e[ensightenOptions.ns].when.reject(Error("Invalid parameters: missing 'name'"));
        a.id = a.name;
        b = a.load || "page";
        a.load = a.load || "javascript";
        a.load = -1 < a.load.indexOf("javascript") ? a.load : a.load + ",javascript";
        a.trigger = a.trigger || function() {
          return e[ensightenOptions.ns].when.resolve()
        };
        a.priv = a.priv || !1;
        a.collection = a.collection || "Data Layer";
        a.persist = e[ensightenOptions.ns].data.engine("memory");
        a.storage = d.storage[b.toLowerCase()] || d.storage.page;
        a.resolved = !1;
        var c = a.extract || function() {
            return document
          },
          h = a.transform || function(p) {
            return p
          },
          u = function(p, q) {
            var A = [];
            A.push(a.persist.set(p, q));
            a.storage.set(a.id, q);
            "object" == typeof e[ensightenOptions.ns].data.dataExport && e[ensightenOptions.ns].data.dataExport(p, q, a.collection);
            e[ensightenOptions.ns].when.all(A).then(function(y) {
                n.resolve(y)
              },
              function(y) {
                n.reject(y)
              })
          },
          n = e[ensightenOptions.ns].when.defer();
        try {
          var m = a.trigger()
        } catch (p) {
          e[ensightenOptions.ns].reportException(new f.DataDefinitionException(null, '"' + p + '" error caught in Data Definition trigger: ' + a.dataDefName + ", ID:" + a.id + ". Using bottom of body trigger.")), m = e[ensightenOptions.ns].data.bottomOfBodyTrigger()
        }
        m.then(function() {
          var p = n,
            q = p.resolve,
            A = e[ensightenOptions.ns].when,
            y = A.reduce;
          try {
            var E = c()
          } catch (D) {
            e[ensightenOptions.ns].reportException(new f.DataDefinitionException(null,
              '"' + D + '" error caught in Data Definition extractor: ' + a.dataDefName + ", ID:" + a.id + ".")), E = null
          }
          q.call(p, y.call(A, [E, function() {
            try {
              return h.apply(this, arguments)
            } catch (D) {
              return e[ensightenOptions.ns].reportException(new f.DataDefinitionException(null, '"' + D + '" error caught in Data Definition transformer: ' + a.dataDefName + ", ID " + a.id + ".")), null
            }
          }, u], function(D, K, J, S) {
            a.resolved = !0;
            if (1 == J) return K(D);
            2 == J && K(a.name, D)
          }))
        }, function(p) {
          n.reject(p)
        });
        f.dataDefinitions[a.id] = a;
        f.dataDefinitionsBySourceCollName["" +
          a.source + "." + a.collection + "." + a.dataDefName] = a;
        return n.promise
      };
      d.checkConditions = function(a) {
        var b, c = {
          lt: function(n, m) {
            var p = +n,
              q = +m;
            return isNaN(p) || isNaN(q) ? (e[ensightenOptions.ns].reportException(new f.DataDefinitionException(null, "Value(s) cannot be converted to number: compareWith: " + n + ", compareTo: " + m)), !1) : p < q
          },
          gt: function(n, m) {
            var p = +n,
              q = +m;
            return isNaN(p) || isNaN(q) ? (e[ensightenOptions.ns].reportException(new f.DataDefinitionException(null, "Value(s) cannot be converted to number: compareWith: " +
              n + ", compareTo: " + m)), !1) : p > q
          },
          eql: function(n, m) {
            return n == m
          },
          exists: function(n, m) {
            return n === B ? !1 : !0
          },
          re: function(n, m, p) {
            m = new RegExp(m, p ? "i" : "");
            try {
              return n.match(m)
            } catch (q) {
              return !1
            }
          },
          starts: function(n, m, p) {
            m = d.utils.escapeRegEx(m);
            return c.re(n, "^" + m, p)
          },
          ends: function(n, m, p) {
            m = d.utils.escapeRegEx(m);
            return c.re(n, m + "$", p)
          },
          contains: function(n, m, p) {
            m = d.utils.escapeRegEx(m);
            return c.re(n, ".*" + m + ".*", p)
          }
        };
        c.is = c.eql;
        c["starts with"] = c.starts;
        c["ends with"] = c.ends;
        c["is greater than"] = c.gt;
        c["is less than"] =
          c.lt;
        c.matches = c.re;
        for (b = 0; b < a.values.length; b++) {
          var h = a.customComparator ? a.customComparator[b] ? a.customComparator[b] : c[a.comparators[b]] : c[a.comparators[b]],
            u = h(a.values[b], a.compareTo[b], a.caseInsensitive ? a.caseInsensitive[b] || !1 : !1);
          a.not[b] && (u = !u);
          if (!u && h != c.exists) return !1
        }
        return !0
      };
      d.triggerPromise = function(a, b, c) {
        c = c || 5E3;
        var h = +new Date,
          u = e[ensightenOptions.ns].when.defer(),
          n = function() {
            var m = a();
            m != b ? u.resolve(m) : +new Date - h < c ? setTimeout(n, 200) : u.reject("timed out")
          };
        n();
        return u.promise
      };
      d.timeoutPromise = function(a, b) {
        var c = e[ensightenOptions.ns].when.defer();
        b = b || 800;
        a.then(c.resolve, c.reject);
        setTimeout(function() {
          c.reject(Error("timed out"))
        }, b);
        return c.promise
      };
      d.delayTrigger = function(a) {
        a = a || 10;
        var b = e[ensightenOptions.ns].when.defer();
        setTimeout(function() {
          b.resolve()
        }, a);
        return b.promise
      };
      d.delayUntilTrigger = function(a, b, c, h) {
        c = c || null;
        h = h || 200;
        var u = +new Date,
          n = e[ensightenOptions.ns].when.defer(),
          m = function() {
            var p = a();
            p != b ? n.resolve(p) : c ? +new Date - u < c ? setTimeout(m, h) : n.reject("timed out") :
              setTimeout(m, h)
          };
        m();
        return n.promise
      };
      f.applyTrigger = function(a) {
        var b = e[ensightenOptions.ns].when.defer();
        a(function() {
          b.resolve(!0)
        });
        return b.promise
      };
      d.immediateTrigger = function() {
        return f.applyTrigger(e[ensightenOptions.ns].bindImmediate)
      };
      d.bottomOfBodyTrigger = function() {
        return f.applyTrigger(e[ensightenOptions.ns].bindDOMParsed)
      };
      d.whenValueExistsTrigger = function() {
        return e[ensightenOptions.ns].when.resolve(this.extract())
      };
      d.afterEnsightenCompleteTrigger = function() {
        return f.applyTrigger(e[ensightenOptions.ns].bindPageSpecificCompletion)
      };
      d.afterElementsDownloadedTrigger = function() {
        return f.applyTrigger(e[ensightenOptions.ns].bindDOMLoaded)
      };
      d.getAllDataDefinitionsOnCurrentPage = function() {
        return f.dataDefinitions
      };
      d.getAllDataDefinitionsOnCurrentPage_S_C_N = function() {
        return f.dataDefinitionsBySourceCollName
      };
      d.getDataDefinitionById = function(a) {
        return f.dataDefinitions[a || -1] || {}
      };
      d.getDataDefinitionBySourceCollectionName = function(a, b, c) {
        return f.dataDefinitionsBySourceCollName["" + a + "." + b + "." + c] || {}
      };
      d.getDataDefinitionByPercentSyntax =
        function(a) {
          a = ("" + a).split("_");
          return 1 > a.length ? {} : f.dataDefinitions[a[1]] || {}
        };
      d.resolve = function(a, b) {
        var c = this,
          h = null;
        if (!f.checkForInvalidDataDefinitions(a))
          if (b) e[ensightenOptions.ns].bindDataDefinitionComplete(function() {
            var m = f.collectAvailableDataDefinitions(a);
            m.isInvalid || e[ensightenOptions.ns].when.all(m.promises).then(function(p) {
                try {
                  b.apply(c, p)
                } catch (q) {
                  e[ensightenOptions.ns].reportException(new f.DataDefinitionException(a, "Error resolving data definitions: " + a + ". Details: " + q))
                }
              },
              function(p) {
                e[ensightenOptions.ns].reportException(new f.DataDefinitionException(a, "Error resolving data definitions: " + a + ". Details: " + p))
              })
          });
          else {
            h = [];
            var u = a;
            d.utils.isArray(a) || (u = [a]);
            for (var n = 0; n < u.length; n++) h.push(f.getSync(u[n]));
            return h = d.utils.isArray(a) ? h : h[0]
          }
      };
      d.extract = function(a, b) {
        var c = "",
          h = function() {
            for (var q = {}, A = e.document.getElementsByTagName("META") || [], y = 0, E = A.length; y < E; y++) {
              var D = A[y].name || A[y].getAttribute("property") || "";
              0 !== D.length && (q[D] = A[y].content)
            }
            return q
          }(),
          u = function(q) {
            var A = h[q];
            if (A) return A;
            A = e.document.getElementsByTagName("META") || [];
            for (var y = 0, E = A.length; y < E; y++) {
              var D = A[y].name || A[y].getAttribute("property") || "";
              if (q == D) return A[y].content
            }
          },
          n = function(q) {
            return (val = (new RegExp("&" + q + "=([^&]*)")).exec(e.location.search.replace(/^\?/, "&"))) ? val[0].split("=")[1] : ""
          },
          m = function(q) {
            return (val = (new RegExp("^" + q + "=.*|;\\s*" + q + "=.*")).exec(e.document.cookie)) ? val[0].split("=")[1].split(";")[0] : ""
          },
          p = function(q) {
            (q = getElement(q)) && q.nodeType && 1 == q.nodeType &&
              (q = q.value || q.innerHTML || "");
            return q.toString().replace(/\n|\r|\s\s+/g, "") || ""
          };
        try {
          return b ? "meta" == b ? c = u(a) : "cookie" == b ? c = m(a) : "param" == b ? c = n(a) : "content" == b ? c = p(a) : "var" == b && (c = e[a]) : c = u(a) || m(a) || n(a) || p(a) || e[a] || "", c || ""
        } catch (q) {
          return ""
        }
      };
      d.event_param = {};
      if ("undefined" == typeof k) var k = {
        exports: {}
      };
      return d
    }(window), window[ensightenOptions.ns].data.defineEngine("store", function() {
      var e = {},
        B = window,
        v, f = Array.isArray || function(k) {
          return "[object Array]" === Object.prototype.toString.call(k)
        };
      e.set = function(k, a) {};
      e.get = function(k) {};
      e.remove = function(k) {};
      e.clear = function() {};
      try {
        if ("localStorage" in B && B.localStorage) {
          var d = B.localStorage;
          e.set = function(k, a) {
            var b, c = window.JSON && window.JSON.stringify ? window.JSON : window[ensightenOptions.ns].JSON;
            if (f(k)) {
              var h = 0;
              for (b = k.length; h < b; h++) d.setItem(k[h], "string" === typeof a[h] ? a[h] : c.stringify(a[h]))
            } else d.setItem(k, "string" === typeof a ? a : c.stringify(a))
          };
          e.get = function(k) {
            if (f(k)) {
              var a = {},
                b;
              var c = 0;
              for (b = k.length; c < b; c++) a[k[c]] = d.getItem(k[c]);
              return a
            }
            return d.getItem(k)
          };
          e.remove = function(k) {
            if (f(k)) {
              var a;
              var b = 0;
              for (a = k.length; b < a; b++) d.removeItem(k[b])
            } else d.removeItem(k)
          };
          e.clear = function() {
            d.clear()
          };
          e.all = function() {
            return d
          }
        }
      } catch (k) {}
      var r = {};
      for (v in e) r[v] = e[v];
      r.testStorage = function() {
        try {
          var k = "tk_" + Math.ceil(5E7 * Math.random());
          r.set(k, "test");
          if ("test" === r.get(k)) return r.remove(k), !0
        } catch (a) {}
        return !1
      };
      e.utils = r;
      return window[ensightenOptions.ns].data.local = e
    }()), window[ensightenOptions.ns].data.defineEngine("cookie",
      function(e, B) {
        var v = function() {
            return v.get.apply(v, arguments)
          },
          f = v.utils = {
            isArray: Array.isArray || function(d) {
              return "[object Array]" === Object.prototype.toString.call(d)
            },
            isPlainObject: window[ensightenOptions.ns].data.utils.isPlainObject,
            toArray: function(d) {
              return Array.prototype.slice.call(d)
            },
            getKeys: Object.keys || function(d) {
              var r = [],
                k = "";
              for (k in d) d.hasOwnProperty(k) && r.push(k);
              return r
            },
            escape: function(d) {
              return String(d).replace(/[,;"\\=\s%]/g, function(r) {
                return encodeURIComponent(r)
              })
            },
            retrieve: function(d,
              r) {
              return null == d ? r : d
            },
            getAllCookies: function() {
              if ("" === e.cookie) return {};
              for (var d = e.cookie.split("; "), r = {}, k = 0, a = d.length; k < a; k++) {
                var b = d[k].split("=");
                r[decodeURIComponent(b[0])] = decodeURIComponent(b[1])
              }
              return r
            },
            set: function(d, r, k) {
              k = k || -1;
              if (f.isPlainObject(d))
                for (var a in d) d.hasOwnProperty(a) && v.set(a, d[a], r);
              else if (f.isArray(d)) {
                var b;
                a = 0;
                for (b = d.length; a < b; a++) v.set(d[a], r[a], k)
              } else {
                a = k.expires !== B ? k.expires : v.defaults.expires || "";
                "number" === typeof a && (a = new Date(a));
                a = f.isPlainObject(a) &&
                  "toGMTString" in a ? ";expires=" + a.toGMTString() : f.isPlainObject(a) && a instanceof Date ? ";expires=" + a.toUTCString() : ";expires=" + a;
                b = (b = k.path || v.defaults.path) ? ";path=" + b : "";
                var c = k.domain || v.defaults.domain;
                c = c ? ";domain=" + c : "";
                k = k.secure || v.defaults.secure ? ";secure" : "";
                e.cookie = f.escape(d) + "=" + f.escape(r) + a + b + c + k
              }
            },
            get: function(d, r) {
              r = r || B;
              var k = f.getAllCookies();
              if (f.isArray(d)) {
                for (var a = {}, b = 0, c = d.length; b < c; b++) a[d[b]] = f.retrieve(k[d[b]], r), a[d[b]] === B && (a[d[b]] = null);
                return a
              }
              a = f.retrieve(k[d],
                r);
              return a === B ? null : a
            },
            getGMTString: function(d) {
              var r = new Date;
              r.setTime(r.getTime() + 864E5 * d);
              return r.toGMTString()
            }
          };
        v.defaults = {
          path: "/",
          expires: f.getGMTString(90)
        };
        v.set = function(d, r) {
          f.set(d, r)
        };
        v.remove = function(d) {
          d = f.isArray(d) ? d : f.toArray(arguments);
          for (var r = 0, k = d.length; r < k; r++) f.set(d[r], "", {
            expires: -1
          })
        };
        v.clear = function() {
          return v.remove(f.getKeys(f.getAllCookies()))
        };
        v.get = function(d, r) {
          return f.get(d, r)
        };
        v.all = function() {
          return f.getAllCookies()
        };
        v.utils = f;
        return window[ensightenOptions.ns].data.cookie =
          v
      }(document)));
    Bootstrapper.dataDefinitionIds = [58305, 58306, 58771, 59941, 57941, 57942, 59942, 57927, 58312, 57928, 58313];
    Bootstrapper.bindImmediate(function() {
      var Bootstrapper = window["Bootstrapper"];
      var ensightenOptions = Bootstrapper.ensightenOptions;
      Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
          extract: function() {
            var tag = document.querySelector("meta[name\x3d'{{PDP Page View - Product Variable - Name}}']");
            return tag ? tag.content : ""
          },
          transform: function(val) {
            return val ? val : ""
          },
          load: "session",
          trigger: Bootstrapper.data.bottomOfBodyTrigger,
          dataDefName: "7821-ACE-2134-CON",
          collection: "Session",
          source: "Manage",
          priv: "false"
        }, {
          id: "57942"
        })
      }, 57942)
    }, -1, -1, -1);
    Bootstrapper.bindImmediate(function() {
      var Bootstrapper = window["Bootstrapper"];
      var ensightenOptions = Bootstrapper.ensightenOptions;
      Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
          extract: function() {
            var element = document.querySelector(".grandtotal \x3e .amount");
            return element ? element.textContent : ""
          },
          transform: function(val) {
            return val ? val : ""
          },
          load: "session",
          trigger: Bootstrapper.data.bottomOfBodyTrigger,
          dataDefName: "7821-ACE-2136-REV",
          collection: "Session",
          source: "Manage",
          priv: "false"
        }, {
          id: "58312"
        })
      }, 58312)
    }, -1, -1, -1);
    Bootstrapper.bindImmediate(function() {
      var Bootstrapper = window["Bootstrapper"];
      var ensightenOptions = Bootstrapper.ensightenOptions;
      Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
          extract: function() {
            var element = document.querySelector("span.order-number");
            return element ? element.textContent : ""
          },
          transform: function(val) {
            return val ? val.trim() : ""
          },
          load: "session",
          trigger: Bootstrapper.data.bottomOfBodyTrigger,
          dataDefName: "7821-ACE-2136-ON",
          collection: "Session",
          source: "Manage",
          priv: "false"
        }, {
          id: "58313"
        })
      }, 58313)
    }, -1, -1, -1);
    Bootstrapper.bindImmediate(function() {
      var Bootstrapper = window["Bootstrapper"];
      var ensightenOptions = Bootstrapper.ensightenOptions;
      Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
          extract: function() {
            var element = document.querySelector(".os-order-number");
            return element ? element.textContent : ""
          },
          transform: function(val) {
            return val ? val.trim() : ""
          },
          load: "session",
          trigger: Bootstrapper.data.bottomOfBodyTrigger,
          dataDefName: "8536-OrderNumber",
          collection: "Session",
          source: "Manage",
          priv: "false"
        }, {
          id: "59942"
        })
      }, 59942)
    }, -1, -1, -1);
    Bootstrapper.bindImmediate(function() {
      var Bootstrapper = window["Bootstrapper"];
      var ensightenOptions = Bootstrapper.ensightenOptions;
      Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
          extract: function() {
            var element = document.querySelector(".os-order-number");
            return element ? element.textContent : ""
          },
          transform: function(val) {
            return val ? val.trim() : ""
          },
          load: "session",
          trigger: Bootstrapper.data.bottomOfBodyTrigger,
          dataDefName: "7936-CE-2100-ON",
          collection: "Session",
          source: "Manage",
          priv: "false"
        }, {
          id: "57928"
        })
      }, 57928)
    }, -1, -1, -1);
    Bootstrapper.bindImmediate(function() {
      var Bootstrapper = window["Bootstrapper"];
      var ensightenOptions = Bootstrapper.ensightenOptions;
      Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
          extract: function() {
            var element = document.querySelector(".payment-due__price");
            return element ? element.textContent : ""
          },
          transform: function(val) {
            return val ? val.trim() : ""
          },
          load: "session",
          trigger: Bootstrapper.data.bottomOfBodyTrigger,
          dataDefName: "7934-CE-2157-REV",
          collection: "Session",
          source: "Manage",
          priv: "false"
        }, {
          id: "58306"
        })
      }, 58306)
    }, -1, -1, -1);
    Bootstrapper.bindImmediate(function() {
      var Bootstrapper = window["Bootstrapper"];
      var ensightenOptions = Bootstrapper.ensightenOptions;
      Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
          extract: function() {
            var element = document.querySelector(".payment-due__price");
            return element ? element.textContent : ""
          },
          transform: function(val) {
            return val ? val.trim() : ""
          },
          load: "session",
          trigger: Bootstrapper.data.bottomOfBodyTrigger,
          dataDefName: "8536-Revenue",
          collection: "Session",
          source: "Manage",
          priv: "false"
        }, {
          id: "59941"
        })
      }, 59941)
    }, -1, -1, -1);
    Bootstrapper.bindImmediate(function() {
      var Bootstrapper = window["Bootstrapper"];
      var ensightenOptions = Bootstrapper.ensightenOptions;
      Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
          extract: function() {
            var element = document.querySelector(".payment-due__price");
            return element ? element.textContent : ""
          },
          transform: function(val) {
            return val ? val.trim() : ""
          },
          load: "session",
          trigger: Bootstrapper.data.bottomOfBodyTrigger,
          dataDefName: "7936-CE-2100-REV",
          collection: "Session",
          source: "Manage",
          priv: "false"
        }, {
          id: "57927"
        })
      }, 57927)
    }, -1, -1, -1);
    Bootstrapper.bindImmediate(function() {
      var Bootstrapper = window["Bootstrapper"];
      var ensightenOptions = Bootstrapper.ensightenOptions;
      Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
          extract: function() {
            return window.location.search.replace("?", "\x26").split("\x26[{{PDP Page View - Product Variable - ID}}]\x3d").pop().split("\x26").shift()
          },
          transform: function(val) {
            return val ? val : ""
          },
          load: "session",
          trigger: Bootstrapper.data.bottomOfBodyTrigger,
          dataDefName: "7821-ACE-2134-ID",
          collection: "Session",
          source: "Manage",
          priv: "false"
        }, {
          id: "57941"
        })
      }, 57941)
    }, -1, -1, -1);
    Bootstrapper.bindImmediate(function() {
      var Bootstrapper = window["Bootstrapper"];
      var ensightenOptions = Bootstrapper.ensightenOptions;
      Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
          extract: function() {
            var element = document.querySelector("div.total selection grandtotal amount");
            return element ? element.textContent : ""
          },
          transform: function(val) {
            return val ? val : ""
          },
          load: "page",
          trigger: Bootstrapper.data.bottomOfBodyTrigger,
          dataDefName: "7821-ACE-2136-REV2",
          collection: "Page",
          source: "Manage",
          priv: "false"
        }, {
          id: "58771"
        })
      }, 58771)
    }, -1, -1, -1);
    Bootstrapper.bindImmediate(function() {
      var Bootstrapper = window["Bootstrapper"];
      var ensightenOptions = Bootstrapper.ensightenOptions;
      Bootstrapper.registerDataDefinition(function() {
        Bootstrapper.data.define({
          extract: function() {
            var element = document.querySelector(".os-order-number");
            return element ? element.textContent : ""
          },
          transform: function(val) {
            return val ? val.trim() : ""
          },
          load: "session",
          trigger: Bootstrapper.data.bottomOfBodyTrigger,
          dataDefName: "7934-CE-2157-ON",
          collection: "Session",
          source: "Manage",
          priv: "false"
        }, {
          id: "58305"
        })
      }, 58305)
    }, -1, -1, -1);
    Bootstrapper.getServerComponent(Bootstrapper.getExtraParams ? Bootstrapper.getExtraParams() : undefined);
  }
})();