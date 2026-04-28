$(function() {
  let scrollPosition = 0;

  function toggleMenuButtons() {
    $(".btn-open-mobile-menu").toggleClass('hidden');
    $(".close").toggleClass('hidden');
  }

  function calculateMenuHeight(scrollTop) {
    const bannerHeight = 35.8;
    const headerHeight = 55;
    let menuHeight;

    if (scrollTop > bannerHeight) {
      menuHeight = `calc(100vh - ${headerHeight}px)`;
    } else {
      menuHeight = `calc(100vh - ${headerHeight + (bannerHeight - scrollTop)}px)`;
    }

    return menuHeight;
  }

  $(".btn-open-mobile-menu").click(function(e) {
    e.preventDefault();
    if (!$('#menu-mobile').hasClass('open')) {
      scrollPosition = $(window).scrollTop();
      $('#menu-mobile').css('height', calculateMenuHeight(scrollPosition));
      $('#menu-mobile').addClass('open');
      $('body').css({
        'position': 'fixed',
        'top': -scrollPosition + 'px',
        'width': '100%'
      });


      $('#header > .container').addClass('header-open');

      toggleMenuButtons(); // Alternar botones
    } else {
      closeMenuMobile();
    }
    Simplistic.trapFocus({
      $container: $('#menu-mobile'),
      namespace: 'menu-mobile'
    });
    return false;
  });

  function closeMenuMobile() {
    $('#menu-mobile').removeClass('open');
    $('body').css({
      'position': '',
      'top': '',
      'width': ''
    });
    $(window).scrollTop(scrollPosition);
    $('#header > .container').removeClass('header-open');
    Simplistic.removeTrapFocus({
      $container: $('#menu-mobile'),
      namespace: 'menu-mobile'
    });
    toggleMenuButtons(); // Alternar botones
    return false;
  }

  $("#menu-mobile .menu-mobile .has-dropdown .icon").click(function() {
    console.log($(this).siblings('.icon').first());
    $(this).parent().toggleClass('active');
    $(this).parent().find('.submenu:first').slideToggle();

    $(this).toggle();
    $(this).siblings('.icon').first().toggle();
    return false;
  });

  $(".close").click(function(e) {
    e.preventDefault();
    closeMenuMobile();
  });

  $(".head").click(function() {
    closeMenuMobile();
  });

  $(document).on('keydown', function(e) {
    if (e.which == 27) { // Escape key
      if ($('#menu-mobile').hasClass('open')) {
        e.preventDefault();
        closeMenuMobile();
        return false;
      }
    }
  });
});