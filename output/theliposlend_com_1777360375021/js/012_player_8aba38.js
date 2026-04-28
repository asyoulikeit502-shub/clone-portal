function vTurbChangePlayer() {
  !vTurbOriginalPlayerIsMobile && vTurbDeviceIsMobile || vTurbOriginalPlayerIsMobile && !vTurbDeviceIsMobile ? (vTurbPlayer = vTurbAlternativePlayer, vTurbSrcId = vTurbPlayer.id) : vTurbPlayer = vTurbOriginalPlayer;
  var e = document.getElementById(`vid_${vTurbOriginalPlayer.id}`);
  e && e.remove();
  var t = document.getElementById(`scr_${vTurbOriginalPlayer.id}`);
  t && t.setAttribute("id", `scr_${vTurbSrcId}`)
}

function vTurbCreatSmartvdsElements() {
  var e, t, r;
  "1.7.9" === vTurbPlayer.version ? document.getElementById(`vid_${vTurbPlayer.id}`) || (window, e = document, t = e.getElementById(`scr_${vTurbSrcId}`), (r = e.createElement("DIV")).id = `vid_${vTurbPlayer.id}`, t.parentElement.insertBefore(r, t)) : (document.getElementById(`vid_${vTurbPlayer.id}`) || function(e, t, r) {
    t = e.getElementById(`scr_${vTurbSrcId}`), (r = e.createElement("DIV")).id = `vid_${vTurbPlayer.id}`, r.style.position = "relative", r.style.width = "100%", r.style.padding = `${vTurbPlayer.video_aspect_ratio}% 0 0`, t.parentElement.insertBefore(r, t)
  }(document), document.getElementById(`thumb_${vTurbPlayer.id}`) || function(e, t, r) {
    t = e.getElementById(`vid_${vTurbPlayer.id}`), (r = e.createElement("IMG")).id = `thumb_${vTurbPlayer.id}`, r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.height = "100%", r.style.position = "absolute", r.style.objectFit = "cover", r.src = `https://images.converteai.net/${vTurbPlayer.thumbnail_key}`, t.appendChild(r)
  }(document), document.getElementById(`backdrop_${vTurbPlayer.id}`) || function(e, t, r) {
    t = e.getElementById(`vid_${vTurbPlayer.id}`), (r = e.createElement("DIV")).id = `backdrop_${vTurbPlayer.id}`, r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.height = "100%", r.style.position = "absolute", r.style.backdropFilter = "blur(5px)", r.style.webkitBackdropFilter = "blur(5px)", t.appendChild(r)
  }(document))
}

function vTurbLoadSmrtvds() {
  var e, t, r, a;
  e = window, t = document, e.smrtvds || (r = e.smrtvds = function() {
    r.callMethod ? r.callMethod.apply(r, arguments) : r.queue.push(arguments)
  }, e._smrtvds || (e._smrtvds = r), r.push = r, r.loaded = !0, r.version = "1.1", r.queue = [], (a = t.createElement("script")).async = !0, a.src = `https://scripts.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`, t.getElementsByTagName("head")[0].appendChild(a)), window.smrtvds(`vid_${vTurbPlayer.id}`, vTurbPlayer.org_id, vTurbPlayer.video_id, vTurbPlayer.options)
}

function vTurbSmrtvds() {
  vTurbCreatSmartvdsElements(), vTurbLoadSmrtvds()
}
var vTurbOriginalPlayer = {
    "id": "662f585d2c76e2000ade24b5",
    "org_id": "ce688e7a-dee8-4930-a8b8-05c94609b151",
    "name": "liposlend_lead2_21_12",
    "device_type": "desktop",
    "video_aspect_ratio": "56.25",
    "thumbnail_key": "ce688e7a-dee8-4930-a8b8-05c94609b151/players/662f585d2c76e2000ade24b5/thumbnail.jpg",
    "cover_key": "ce688e7a-dee8-4930-a8b8-05c94609b151/players/662f585d2c76e2000ade24b5/cover.jpg",
    "version": "v1",
    "video_id": "662f5801edccf7000b6d19e4",
    "options": {
      "autoplay": "smartplay",
      "subtitle_active": !1,
      "smart_autoplay_template": "image",
      "theme": "#51925B",
      "foreground_color": "#FFFFFF",
      "embedVersion": "1763997912-dynamodb",
      "video": {
        "width": 1920,
        "height": 1080
      },
      "cdn": "cdn.converteai.net",
      "conversion_params": [],
      "displays": {
        "big_play": !0,
        "play_pause": !1,
        "backward": !1,
        "subtitle_control": !1,
        "forward": !1,
        "volume": !1,
        "volume_bar": !0,
        "time": !1,
        "fullscreen": !1,
        "seekbar": !1,
        "seekbar_time": !0,
        "speed_control": !1
      },
      "callAction": [],
      "pixels": [],
      "thumbs": [],
      "headlines": [],
      "smart_autoplays": [{
        "id": "smart_autoplay_662f585d2c76e2000ade24b5_1",
        "name": "Smart Autoplay",
        "version": "2",
        "number": 1,
        "template": "image",
        "background_color": "rgba(204,18,18,0.87)",
        "bottom_text": "Click to listen",
        "foreground_color": "#FFFFFF",
        "top_text": "Your video has already started",
        "animation": {
          "animation": "pulse",
          "properties": {
            "speed": 2
          }
        },
        "video_start_at": 0,
        "video_end_at": null,
        "cover_key": "ce688e7a-dee8-4930-a8b8-05c94609b151/players/662f585d2c76e2000ade24b5/cover.jpg",
        "thumbnail_key": "ce688e7a-dee8-4930-a8b8-05c94609b151/players/662f585d2c76e2000ade24b5/thumbnail.jpg",
        "elements": [{
          "id": "smart_autoplay_662f585d2c76e2000ade24b5_1_element_0",
          "height": 864,
          "width": 864,
          "x": 528,
          "y": 108,
          "order": 1,
          "opacity": 1,
          "rotation": 0,
          "type": "image",
          "properties": {
            "alt": "Smart AutoPlay",
            "src": "https://cdn.converteai.net/ce688e7a-dee8-4930-a8b8-05c94609b151/2023/10/23/6536301a30fe40000931a43b.png"
          }
        }],
        "custom_player_preview": null
      }],
      "turbos": [],
      "smart_autoplay_elements": [{
        "id": "smart_autoplay_element_662f585d2c76e2000ade24b5_0",
        "height": 864,
        "width": 864,
        "x": 528,
        "y": 108,
        "order": 1,
        "opacity": 1,
        "rotation": 0,
        "type": "image",
        "properties": {
          "alt": "Smart AutoPlay",
          "src": "https://cdn.converteai.net/ce688e7a-dee8-4930-a8b8-05c94609b151/2023/10/23/6536301a30fe40000931a43b.png"
        }
      }],
      "mini_hooks": !1,
      "mini_hooks_elements": [],
      "resume": !1,
      "fake_bar": !0,
      "headline": !1,
      "turbo": !1,
      "turbo_speed": 1,
      "turbo_auto_test": !1,
      "secure": !1,
      "fkdlvid": null,
      "smartplay_options": {
        "top_text": "Your video has already started",
        "bottom_text": "Click to listen",
        "foreground_color": "#FFFFFF",
        "background_color": "rgba(204,18,18,0.87)",
        "start_at": 0,
        "end_at": 3196,
        "animation": {
          "animation": "pulse",
          "properties": {
            "speed": 2
          }
        },
        "custom_preview": null
      },
      "fake_bar_options": {
        "height": 12,
        "alpha": 2,
        "vbar_height": !0,
        "vbar_end": !0,
        "vbar_network": !0,
        "vbar_color": "#FF0000"
      }
    }
  },
  vTurbSrcId = "662f585d2c76e2000ade24b5",
  vTurbPlayer = vTurbOriginalPlayer,
  vTurbDeviceIsMobile = window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),
  vTurbOriginalPlayerIsMobile = "mobile" === vTurbOriginalPlayer.device_type;
vTurbDeviceIsMobile = vTurbDeviceIsMobile && vTurbDeviceIsMobile[0], vTurbSmrtvds();