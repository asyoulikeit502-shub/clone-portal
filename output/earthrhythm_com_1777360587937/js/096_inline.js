(function(){
  // CONFIG: set your tracking links here
  var TRACKING_LINKS = [
    { title: 'Shipway', subtitle: 'Track via Shipway', href: 'https://earthrhythm.shipway.com/track', newTab: true, icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7H7V3H5v4H3v9a2 2 0 0 0 2 2h13v-2H5V9h16v-2zM8 11h8v2H8v-2z"/></svg>' },
    { title: 'Quickshift', subtitle: 'Track via Quickshift', href: 'https://earthrhythm.quickshift.in/', newTab: true, icon: '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg>' }
  ];

  // create panel HTML and append to body (avoids overflow/clip problems)
  function createPanel() {
    if (document.getElementById('trackingPanel-floating')) return;
    var panel = document.createElement('div');
    panel.id = 'trackingPanel-floating';
    panel.setAttribute('role','menu');
    panel.setAttribute('aria-hidden','true');
    panel.style.position = 'absolute';
    panel.style.minWidth = '200px';
    panel.style.maxWidth = '360px';
    panel.style.background = '#fff';
    panel.style.borderRadius = '8px';
    panel.style.padding = '8px';
    panel.style.boxShadow = '0 8px 28px rgba(8,10,15,0.12)';
    panel.style.border = '1px solid rgba(0,0,0,0.06)';
    panel.style.zIndex = 2147483647; // very high to be safe
    panel.style.display = 'none';
    panel.style.flexDirection = 'column';
    panel.style.boxSizing = 'border-box';

    // small caret
    var caret = document.createElement('div');
    caret.style.position = 'absolute';
    caret.style.width = '0';
    caret.style.height = '0';
    caret.style.borderLeft = '7px solid transparent';
    caret.style.borderRight = '7px solid transparent';
    caret.style.borderBottom = '7px solid #fff';
    caret.style.top = '-7px';
    panel.appendChild(caret);

    // add items
    TRACKING_LINKS.forEach(function(item){
      var a = document.createElement('a');
      a.className = 'tracking-option';
      a.href = item.href || '#';
      if (item.newTab) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      a.setAttribute('role','menuitem');
      a.style.display = 'flex';
      a.style.gap = '10px';
      a.style.alignItems = 'center';
      a.style.padding = '8px';
      a.style.borderRadius = '6px';
      a.style.textDecoration = 'none';
      a.style.color = '#222';
      a.innerHTML = '<span style="width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;border-radius:6px;background:rgba(0,0,0,0.04)">'+(item.icon||'')+'</span>'
                  +'<div style="margin-left:8px;"><div style="font-size:14px;font-weight:600;line-height:1;">'+item.title+'</div>'
                  + (item.subtitle? ('<div style="font-size:12px;color:#666;margin-top:2px;">'+item.subtitle+'</div>') : '') + '</div>';
      a.addEventListener('mouseover', function(){ a.style.background = 'rgba(0,0,0,0.03)'; });
      a.addEventListener('mouseout', function(){ a.style.background = 'transparent'; });
      panel.appendChild(a);
    });

    document.body.appendChild(panel);
  }

  function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + window.pageYOffset,
      left: box.left + window.pageXOffset,
      width: box.width,
      height: box.height,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset
    };
  }

  // position panel under button, adjust to viewport edges
  function positionPanel(btn, panel) {
    var rect = getOffsetRect(btn);
    // default position: align panel right edge with button right edge
    var panelWidth = Math.min(Math.max(200, panel.offsetWidth || 240), 360);
    panel.style.minWidth = '200px';
    panel.style.maxWidth = '360px';
    // calculate left so panel's right aligns with btn's right
    var left = rect.left + rect.width - panelWidth;
    var top = rect.top + rect.height + 8; // 8px gap
    // if panel would go off left edge, clamp
    if (left < 8) left = 8;
    // if panel would go off right edge, clamp
    if (left + panelWidth > document.documentElement.clientWidth - 8) {
      left = document.documentElement.clientWidth - panelWidth - 8;
    }
    panel.style.left = left + 'px';
    panel.style.top = top + 'px';
    // position caret near the button
    var caret = panel.querySelector('div'); // our first child was caret
    if (caret) {
      var caretLeft = rect.left + (rect.width/2) - left - 7; // center-ish
      caret.style.left = (caretLeft) + 'px';
    }
  }

  // open/close handlers
  function openPanel(btn) {
    createPanel();
    var panel = document.getElementById('trackingPanel-floating');
    panel.style.display = 'flex';
    panel.setAttribute('aria-hidden','false');
    btn.setAttribute('aria-expanded','true');
    positionPanel(btn, panel);
  }
  function closePanel(btn) {
    var panel = document.getElementById('trackingPanel-floating');
    if (!panel) return;
    panel.style.display = 'none';
    panel.setAttribute('aria-hidden','true');
    if (btn) btn.setAttribute('aria-expanded','false');
  }

  // init
  document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('trackingBtn-snippet');
    if (!btn) return;
    // create panel now (optional) so it's ready
    createPanel();
    var panel = document.getElementById('trackingPanel-floating');

    // toggle on click
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) closePanel(btn); else openPanel(btn);
    });

    // hover (desktop)
    btn.addEventListener('mouseenter', function(){ openPanel(btn); });
    btn.addEventListener('mouseleave', function(){ setTimeout(function(){ if (!panel.matches(':hover')) closePanel(btn); }, 120); });
    // keep open while hovering panel
    panel.addEventListener('mouseleave', function(){ setTimeout(function(){ if (!btn.matches(':hover')) closePanel(btn); }, 120); });
    panel.addEventListener('mouseenter', function(){ /* keep open */ });

    // close click outside
    document.addEventListener('click', function(e){
      if (!btn.contains(e.target) && !(panel && panel.contains(e.target))) closePanel(btn);
    });

    // close on escape
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closePanel(btn); });

    // reposition on resize and scroll while open
    window.addEventListener('resize', function(){ if (panel && panel.style.display !== 'none') positionPanel(btn, panel); });
    window.addEventListener('scroll', function(){ if (panel && panel.style.display !== 'none') positionPanel(btn, panel); }, true);
  });
})();