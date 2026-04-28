var vtid = LUI.getURLParameter('vtid');

var v_setup = {
  "vtid": "LIS\/lead2_180",
  "default": "LIS\/lead2_60_vturb"
};
var v_config = {
  "default": {
    "host": "stream_container",
    "autoplay": true,
    "playback_rate": 1.1,
    "controlls": false,
    "timers": {
      "index%10==0": [{
        "LUI.myGoogleEvent": [""]
      }],
      "1": [{
        "checkcookie": {
          "cookie": "LUI.return_visit",
          "show": "#btn-cta"
        }
      }],
      "2691": [{
        "show": "#btn-cta"
      }, {
        "LUI.start_reel": ["#reel_host"]
      }, {
        "LUI.start_vsltimer": ["#vsltimer_host"]
      }, {
        "LUI.start_ordbtn": ["#ordbtn_host"]
      }]
    },
    "caption": ".\/statics\/captions\/caption1.srt"
  },
  "vtid": {
    "host": "stream_container",
    "autoplay": true,
    "playback_rate": 1.1,
    "controlls": false,
    "timers": {
      "index%10==0": [{
        "LUI.myGoogleEvent": [""]
      }],
      "1": [{
        "checkcookie": {
          "cookie": "LUI.return_visit",
          "show": "#btn-cta"
        }
      }],
      "2478": [{
        "show": "#btn-cta"
      }, {
        "LUI.start_reel": ["#reel_host"]
      }, {
        "LUI.start_vsltimer": ["#vsltimer_host"]
      }, {
        "LUI.start_ordbtn": ["#ordbtn_host"]
      }]
    },
    "caption": ".\/statics\/captions\/caption1.srt"
  }
};

if (vtid == "new-ref" && v_setup["vtid"]) {
  v_setup = v_setup["vtid"];
  v_config = v_config["vtid"];
  console.log("180 days refund policy video");
} else if (typeof v_setup["default"] !== "undefined") {
  v_setup = v_setup["default"];
  v_config = v_config["default"];
  console.log("60 days refund policy video");

}
new UPManager(v_setup, v_config);