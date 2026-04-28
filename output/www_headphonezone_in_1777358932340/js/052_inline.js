(function() {
  var jdgmThemeFixes = {
    "132432101564": {
      "html": "",
      "css": ".jdgm-prev-badge .jdgm-star:nth-child(2),.jdgm-prev-badge .jdgm-star:nth-child(3),.jdgm-prev-badge .jdgm-star:nth-child(4),.jdgm-prev-badge .jdgm-star:nth-child(5) {\ndisplay: none !important;\n}\n",
      "js": ""
    },
    "132459724988": {
      "html": "",
      "css": ".jdgm-prev-badge .jdgm-star:nth-child(2),\n.jdgm-prev-badge .jdgm-star:nth-child(3),\n.jdgm-prev-badge .jdgm-star:nth-child(4),\n.jdgm-prev-badge .jdgm-star:nth-child(5) {\ndisplay: none !important;\n}\n\n.jdgm-rev-widg__summary-average a {\n    text-decoration: none !important;\n    pointer-events: none !important;\n    color: black !important;\n}\n.jdgm-histogram.jdgm-temp-hidden {\n    display: none !important;\n}\n\n",
      "js": "window.dispatchEvent(new Event('resize'));"
    },
    "134083150012": {
      "html": "",
      "css": ".jdgm-preview-badge .jdgm-star:nth-child(2), .jdgm-preview-badge .jdgm-star:nth-child(3), .jdgm-preview-badge .jdgm-star:nth-child(4), .jdgm-preview-badge .jdgm-star:nth-child(5) {\n      display: none !important;      \n    }",
      "js": ""
    },
    "134731071676": {
      "html": "",
      "css": ".jdgm-prev-badge .jdgm-star:nth-child(2), .jdgm-prev-badge .jdgm-star:nth-child(3) , .jdgm-prev-badge .jdgm-star:nth-child(4) , .jdgm-prev-badge .jdgm-star:nth-child(5)  {display:none !important;}\n",
      "js": ""
    },
    "172959859056": {
      "html": "",
      "css": "\n.product-card__info .jdgm-prev-badge__text {\n    text-decoration: none !important;\n}\n",
      "js": ""
    },
    "183708254576": {
      "html": "",
      "css": "@media (max-width: 749px) {\n  .jdgm-card-content .jdgm-text p {\n    display: -webkit-box;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n}\n",
      "js": ""
    }
  };
  if (!jdgmThemeFixes) return;
  var thisThemeFix = jdgmThemeFixes[Shopify.theme.id];
  if (!thisThemeFix) return;

  if (thisThemeFix.html) {
    document.addEventListener("DOMContentLoaded", function() {
      var htmlDiv = document.createElement('div');
      htmlDiv.classList.add('jdgm-theme-fix-html');
      htmlDiv.innerHTML = thisThemeFix.html;
      document.body.append(htmlDiv);
    });
  };

  if (thisThemeFix.css) {
    var styleTag = document.createElement('style');
    styleTag.classList.add('jdgm-theme-fix-style');
    styleTag.innerHTML = thisThemeFix.css;
    document.head.append(styleTag);
  };

  if (thisThemeFix.js) {
    var scriptTag = document.createElement('script');
    scriptTag.classList.add('jdgm-theme-fix-script');
    scriptTag.innerHTML = thisThemeFix.js;
    document.head.append(scriptTag);
  };
})();