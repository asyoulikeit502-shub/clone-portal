(function() {
  var jQueryShim = function(selector) {
    return {
      ready: function(fn) {
        if (typeof fn === 'function') {
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
          } else {
            fn();
          }
        }
        return this;
      },
      on: function() {
        return this;
      },
      off: function() {
        return this;
      },
      bind: function() {
        return this;
      },
      unbind: function() {
        return this;
      },
      trigger: function() {
        return this;
      },
      each: function() {
        return this;
      },
      find: function() {
        return this;
      },
      filter: function() {
        return this;
      },
      eq: function() {
        return this;
      },
      first: function() {
        return this;
      },
      last: function() {
        return this;
      },
      click: function() {
        return this;
      },
      scroll: function() {
        return this;
      },
      resize: function() {
        return this;
      },
      load: function() {
        return this;
      },
      change: function() {
        return this;
      },
      submit: function() {
        return this;
      },
      ajaxSuccess: function() {
        return this;
      },
      ajaxError: function() {
        return this;
      },
      ajaxComplete: function() {
        return this;
      },
      ajaxStart: function() {
        return this;
      },
      ajaxStop: function() {
        return this;
      },
      ajaxSend: function() {
        return this;
      },
      addClass: function() {
        return this;
      },
      removeClass: function() {
        return this;
      },
      toggleClass: function() {
        return this;
      },
      attr: function() {
        return '';
      },
      prop: function() {
        return '';
      },
      val: function() {
        return '';
      },
      html: function() {
        return '';
      },
      text: function() {
        return '';
      },
      css: function() {
        return this;
      },
      show: function() {
        return this;
      },
      hide: function() {
        return this;
      },
      append: function() {
        return this;
      },
      prepend: function() {
        return this;
      },
      remove: function() {
        return this;
      },
      empty: function() {
        return this;
      },
      data: function() {
        return {};
      },
      length: 0,
      get: function() {
        return [];
      },
      extend: function() {
        return arguments[0];
      }
    };
  };
  jQueryShim.fn = jQueryShim.prototype = {};
  jQueryShim.extend = jQueryShim.fn.extend = function() {
    var target = arguments[0] || {};
    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];
      if (obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            target[key] = obj[key];
          }
        }
      }
    }
    return target;
  };
  jQueryShim.isFunction = function(obj) {
    return typeof obj === 'function';
  };
  jQueryShim.isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };
  jQueryShim.ajax = function() {
    return {
      done: function() {
        return this;
      },
      fail: function() {
        return this;
      },
      always: function() {
        return this;
      }
    };
  };
  jQueryShim.get = function() {
    return Promise.resolve();
  };
  jQueryShim.post = function() {
    return Promise.resolve();
  };
  jQueryShim.getJSON = function() {
    return Promise.resolve();
  };

  window.jQuery = window.$ = jQueryShim;
})();