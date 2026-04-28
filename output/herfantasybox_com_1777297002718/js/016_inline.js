// Swiper stub queues init calls until library loads (saves 4.7s CPU on initial load)
if (typeof window.Swiper === 'undefined') {
  var _sq = [];
  window.Swiper = function(s, o) {
    var q = {
      s: s,
      o: o
    };
    _sq.push(q);
    return {
      _q: q,
      destroy: function() {
        q.d = 1
      },
      update: function() {},
      slideTo: function() {},
      slideNext: function() {},
      slidePrev: function() {}
    }
  };
  window.Swiper._isStub = 1;
  window._swiperQueue = _sq
}