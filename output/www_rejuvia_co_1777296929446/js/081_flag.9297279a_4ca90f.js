(window["wpJsonpOkeReviews"] = window["wpJsonpOkeReviews"] || []).push([
  ["modules/flag"], {
    "0235": function(e, o, t) {},
    "13b2": function(e, o, t) {
      "use strict";
      t("0235")
    },
    f929: function(e, o, t) {
      "use strict";
      t.r(o);
      var i = function() {
          var e = this,
            o = e.$createElement,
            t = e._self._c || o;
          return e.location ? t("div", {
            staticClass: "oke-flag",
            attrs: {
              title: e.$t("from {0}", [e.location])
            }
          }, [e.reviewer.location && e.reviewer.location.zoneCode ? [e._v(e._s(e.location))] : t("img", {
            directives: [{
              name: "lazySrc",
              rawName: "v-lazySrc",
              value: e.flagBackgroundUrl,
              expression: "flagBackgroundUrl"
            }],
            staticClass: "oke-flag-image",
            attrs: {
              alt: e.$t("Flag of {0}", [e.location]),
              height: "10",
              width: "13"
            }
          })], 2) : e._e()
        },
        r = [],
        a = t("9ab4"),
        n = t("60a3");
      let s = class extends n["f"] {
        constructor() {
          super(...arguments), this.sharedAssetsBaseUrl = "https://cdn-static.okendo.io/shared"
        }
        get flagBackgroundUrl() {
          var e, o, t;
          const i = (null === (e = this.reviewer.location) || void 0 === e ? void 0 : e.country.code) || (null === (o = this.reviewer.country) || void 0 === o ? void 0 : o.code);
          return (null === (t = this.reviewer.location) || void 0 === t ? void 0 : t.zoneCode) || !i ? void 0 : `${this.sharedAssetsBaseUrl}/images/flags/${i.toLowerCase()}.svg`
        }
        get location() {
          var e;
          return this.reviewer.location ? this.reviewer.location.zoneCode ? `${this.reviewer.location.zoneCode}, ${this.reviewer.location.country.name}` : this.reviewer.location.country.name : null === (e = this.reviewer.country) || void 0 === e ? void 0 : e.name
        }
      };
      Object(a["a"])([Object(n["d"])()], s.prototype, "reviewer", void 0), s = Object(a["a"])([n["a"]], s);
      var l = s,
        c = l,
        v = (t("13b2"), t("2877")),
        d = Object(v["a"])(c, i, r, !1, null, null, null);
      o["default"] = d.exports
    }
  }
]);