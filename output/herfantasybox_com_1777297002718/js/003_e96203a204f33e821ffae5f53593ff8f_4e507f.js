Bootstrapper.bindImmediate(function() {
  var Bootstrapper = window["Bootstrapper"];
  var ensightenOptions = Bootstrapper.ensightenOptions;
  Bootstrapper.registerDataDefinition(function() {
    Bootstrapper.data.define({
      extract: function() {
        var element = document.querySelector(".css-1uccc91-singleValue");
        return element ? element.textContent : ""
      },
      transform: function(val) {
        return val ? val : ""
      },
      load: "page",
      trigger: Bootstrapper.data.bottomOfBodyTrigger,
      dataDefName: "12951-Tawkify-Income-Value",
      collection: "Tawkify",
      source: "Manage",
      priv: "false"
    }, {
      id: "64271"
    })
  }, 64271)
}, -1, -1, -1);