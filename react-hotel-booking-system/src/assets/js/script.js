function radiocheckchange (a) {
  ;(function (c) {
    var b = c(a)
    b.wrap('<label class="switch-label-check" />')
    b.after('<span class="switch" />')
    b.css({ display: 'none' })
  })(jQuery)
}
function custom_select () {
  if ($('.htlfndr-select-custom').length > 0) {
    $('.htlfndr-select-custom').CustomSelect({
      visRows: 4,
      search: true,
      modifier: 'mod'
    })
  }
  var d = $('.htlfndr-custom-select select')
  d.each(function () {
    var g = $(this)
    var f = g.attr('id'),
      e = g.children('optgroup'),
      h = '',
      j = '',
      i = ''
    if (e.length) {
      e.each(function () {
        var m = $(this)
        var l = m.attr('label')
        h += '<li class="optgroup">' + l + '</li>'
        m.children('option').each(function () {
          var q = $(this)
          var p = q.attr('value'),
            o = q.html(),
            n = q.attr('selected')
          if (n === 'selected') {
            j = o
            h += '<li class="selected" data-value="' + p + '">' + o + '</li>'
          } else {
            h += '<li data-value="' + p + '">' + o + '</li>'
          }
        })
      })
      g.children('option').each(function () {
        var o = $(this)
        var n = o.attr('value'),
          m = o.html(),
          l = o.attr('selected')
        if (l === 'selected') {
          j = m
          h = '<li class="selected" data-value="' + n + '">' + m + '</li>' + h
        } else {
          h = '<li data-value="' + n + '">' + m + '</li>' + h
        }
      })
    } else {
      g.children('option').each(function () {
        var o = $(this)
        var n = o.attr('value'),
          m = o.html(),
          l = o.attr('selected')
        if (l === 'selected') {
          j = m
          h += '<li class="selected" data-value="' + n + '">' + m + '</li>'
        } else {
          h += '<li data-value="' + n + '">' + m + '</li>'
        }
      })
    }
    i =
      '<div class="htlfndr-dropdown-container"><div class="htlfndr-dropdown-select fa-angle-down"><span class="' +
      j +
      '">' +
      j +
      '</span></div><ul class="htlfndr-dropdown-select-ul" data-role="' +
      f +
      '">' +
      h +
      '</ul></div> <!-- .htlfndr-dropdown-container -->'
    $(i).insertAfter(g)
  })
  var b = $('.htlfndr-dropdown-select'),
    c = $('.htlfndr-dropdown-select-ul'),
    a = $('.htlfndr-dropdown-select-ul li')
  b.on('click', function () {
    $(this).parent('.htlfndr-dropdown-container').toggleClass('active')
  })
  c.on('mouseleave', function () {
    $(this).parent('.htlfndr-dropdown-container').removeClass('active')
  })
  a.on('click', function () {
    var h = $(this)
    if (!h.hasClass('optgroup')) {
      var g = h.parent('ul'),
        j = g.siblings('.htlfndr-dropdown-select'),
        e = h.html(),
        f = h.attr('data-value'),
        i = '#' + g.attr('data-role')
      g.parent('.htlfndr-dropdown-container').toggleClass('active')
      h.siblings('li').removeClass('selected')
      h.addClass('selected')
      $(i).val(f)
      j.children('span').removeClass()
      j.children('span').addClass(e)
      j.children('span').html(e)
    }
  })
}
function user_tabs () {
  $('.htlfndr-user-tabs')
    .tabs()
    .removeClass('ui-widget-content')
    .addClass('ui-tabs-vertical ui-helper-clearfix')
  $('.htlfndr-user-tabs ul').removeClass('ui-widget-header')
  $('.htlfndr-user-tabs li').removeClass('ui-corner-top')
  $('.htlfndr-user-tabs').on('click', 'li', function (c) {
    $('.htlfndr-button-to-top').hide()
    if (
      $('#htlfndr-user-tab-4').css('display') == 'block' ||
      $('#htlfndr-user-tab-5').css('display') == 'block'
    ) {
      $('.htlfndr-button-to-top').show()
    }
  })
  if ($('#htlfndr-hotel-description-tabs').length) {
    var b = $('#htlfndr-hotel-description-tabs').find('ul > li')
    var a = 0
    b.each(function () {
      if ($(this).hasClass('active')) {
        a = parseInt($(this).attr('data-number'), 10)
      }
    })
    $('#htlfndr-hotel-description-tabs').responsiveTabs({
      startCollapsed: 'accordion',
      animation: 'slide',
      active: a
    })
  }
}
function click_check () {
  $('.navbar-header').on('click', '.navbar-toggle', function (d) {
    $('.dropdown-toggle.active-on-device').removeClass('active-on-device')
  })
  $('#htlfndr-sing-up-form').on('click', 'a', function (d) {
    $('#htlfndr-sing-up').trigger('click')
  })
  $('#htlfndr-sing-in-form').on('click', 'a', function (d) {
    $('#htlfndr-sing-in').trigger('click')
  })
  $('body').on('click', '.btn-primary', function (d) {
    k = 0
    $(this)
      .parents('form')
      .find('input:required,textarea:required')
      .each(function () {
        $(this).removeClass('incorrect')
        if ($(this).val() == '') {
          $(this).addClass('incorrect')
          k = 1
        }
      })
    if (k == 0) {
      return true
    }
    return false
  })
  if ($('.htlfndr-credit-card .glyphicon-remove').length) {
    $('.htlfndr-credit-card').on('click', '.glyphicon-remove', function () {
      $(this).parents('.htlfndr-credit-card').hide()
    })
  }
  if ($('.htlfndr-hotel-post .glyphicon-remove').length) {
    $('.htlfndr-hotel-post').on('click', '.glyphicon-remove', function (d) {
      $(this).parents('.htlfndr-hotel-post').hide()
    })
  }
  $('.htlfndr-footer').on('click', '.htlfndr-button-to-top', function () {
    var d = $('.htlfndr-wrapper')
    $('html, body').animate({ scrollTop: d.offset().top }, 800, 'linear')
  })
  $('.htlfndr-menu_elements').on('click', 'a', function (d) {
    d.preventDefault()
    var f = $(this).attr('href'),
      e = $(f).offset().top
    $('body,html').animate({ scrollTop: e }, 1500)
  })
  if ($('.htlfndr-search-result-sorting').length) {
    var b, a, c
    b = $('#htlfndr-grid')
    a = $('#htlfndr-row')
    c = $('.htlfndr-hotel-post-wrapper')
    b.on('click', function () {
      if (a.hasClass('htlfndr-active')) {
        htlfndr_preloader()
        a.removeClass('htlfndr-active')
      }
      $(this).addClass('htlfndr-active')
      c.removeClass('col-md-12')
      c.addClass('col-md-4')
      c.closest('.htlfndr-search-result').removeClass('htlfndr-row-view')
      c.closest('.htlfndr-search-result').addClass('htlfndr-grid-view')
    })
    a.on('click', function () {
      if (b.hasClass('htlfndr-active')) {
        htlfndr_preloader()
        b.removeClass('htlfndr-active')
      }
      $(this).addClass('htlfndr-active')
      c.removeClass('col-md-4')
      c.addClass('col-md-12')
      c.closest('.htlfndr-search-result').removeClass('htlfndr-grid-view')
      c.closest('.htlfndr-search-result').addClass('htlfndr-row-view')
    })
  }
  $('.htlfndr-search-result-sorting').on(
    'click',
    '#htlfndr-sort-by-price,#htlfndr-sort-by-rating,#htlfndr-sort-by-popular',
    function (d) {
      d.preventDefault()
      htlfndr_select_sorting_parameters($(this))
      htlfndr_preloader()
      var e = d.target
      switch (e.id) {
        case 'htlfndr-sort-by-price':
          tinysort('.htlfndr-hotel-post-wrapper', {
            selector: '.htlfndr-hotel-price>.cost'
          })
          break
        case 'htlfndr-sort-by-rating':
          tinysort('.htlfndr-hotel-post-wrapper', {
            selector: '.htlfndr-rating-stars',
            data: 'rating',
            order: 'desc'
          })
          break
        case 'htlfndr-sort-by-popular':
          tinysort('.htlfndr-hotel-post-wrapper', {
            selector: '.htlfndr-hotel-reviews>span',
            order: 'desc'
          })
          break
        default:
      }
    }
  )
  $('.htlfndr-show-number-hotels').on('click', ' > ul > li > a', function (g) {
    g.preventDefault()
    htlfndr_preloader()
    var h, f, d, e
    h = $('.htlfndr-show-number-hotels>.dropdown-toggle>span')
    d = $(this).text().toString()
    e = parseInt($(this).attr('data-number'), 10)
    if ($('span').is(h) || $(h).text().toString() != $(d)) {
      f = '<span style="display: none;">' + d + '</span>'
    }
    if ($(h).text().toString() != $(d)) {
      $(h).remove()
    }
    $(f).appendTo('.htlfndr-show-number-hotels>.dropdown-toggle').fadeIn('slow')
  })
  $('.htlfndr-pagination').on('focus', '.pagination > li > a', function () {
    $(this).blur()
  })
  $('.htlfndr-pagination').on('click', '.pagination > li > a', function (f) {
    f.preventDefault()
    htlfndr_preloader()
    var g = $('.htlfndr-pagination .pagination > li')
    var d = $('.htlfndr-pagination .pagination > .current')
    var e = $(this).parent()
    if ($(e).hasClass('htlfndr-left') || $(e).hasClass('htlfndr-right')) {
      if ($(e).hasClass('htlfndr-left')) {
        if (!$(e).next().hasClass('current')) {
          $(d).prev().addClass('current')
          $(d).removeClass('current')
        }
      } else {
        if (!$(e).prev().hasClass('current')) {
          $(d).next().addClass('current')
          $(d).removeClass('current')
        }
      }
    } else {
      $(g).removeClass('current')
      $(e).addClass('current')
    }
    $(this).unbind('hover')
  })
}
function browser_width () {
  var a = $(window).width()
  if (a < 1280) {
    $('.dropdown-submenu').on('click', '>a', function () {
      if ($(this).parent().hasClass('open')) {
        return true
      } else {
        $(this).parent().addClass('open')
        return false
      }
    })
    $('.nav.navbar-nav').on('click', '.dropdown', function () {
      $(this).find('.open').removeClass('open')
    })
    $('.pagination').on('click', '.htlfndr-right,.htlfndr-left', function () {
      $(this)
        .find('a')
        .css({ 'background-color': '#08c1da', color: '#fff' })
        .delay(400)
      $(this)
        .find('a')
        .animate({ 'background-color': 'transparent', color: '#000000' }, 200)
    })
  }
  if (a < 1280 && a > 767) {
    $('.dropdown-submenu').on('click', '>a', function () {
      $('.open').removeClass('open')
    })
    $('.nav.navbar-nav').on('mouseleave', '.dropdown', function () {
      $('.open').removeClass('open')
    })
  }
  if (a < 900) {
    $('.dropdown-submenu').on('hover', 'a', function () {
      $('#htlfndr-main-nav .dropdown-submenu .dropdown-menu').each(function () {
        $(this).css('left', '-' + $(this).width() + 'px')
      })
    })
  }
  if (a < 768 && $('.htlfndr-search-result').hasClass('htlfndr-row-view')) {
    var d = $('.htlfndr-search-result')
    d.removeClass('htlfndr-row-view')
    d.addClass('htlfndr-row-view')
  }
  if (a < 992) {
    var b = $('.htlfndr-add-to-wishlist').detach()
    var e = $('.htlfndr-hotel-visit-card').detach()
    e.insertBefore('#htlfndr-main-content')
    e.wrap('<aside class="htlfndr-moved-sidebar-part" />')
    b.prependTo(e)
  }
  if ($('.htlfndr-payment-page').length) {
    $('body').find('.htlfndr-selectmenu > ul').css('max-height', '150px')
    if (a < 992) {
      var c = $('.htlfndr-booking-details').detach()
      c.insertBefore('#htlfndr-main-content')
      c.wrap('<aside class="htlfndr-moved-sidebar-part" />')
    }
  }
}
function calendar () {
  $('#htlfndr-date-out,#htlfndr-date-in,#htlfndr-date-in-cal').datepicker({
    showAnim: 'drop',
    dateFormat: 'd M yy',
    showOtherMonths: true,
    selectOtherMonths: true,
    minDate: '-0D',
    beforeShow: function () {
      var b = $('#htlfndr-date-in').datepicker('getDate')
      if (b) {
        return { minDate: b }
      }
    }
  })
  $('#htlfndr-date-in, #htlfndr-date-out,#htlfndr-date-in-cal').on(
    'focus',
    function () {
      $(this).blur()
    }
  )
  if ($('body').find('.ui-datepicker').length) {
    var a = $('body').find('.ui-datepicker')
    a.addClass('htlfndr-datepicker')
  }
  $('.htlfndr-clear-datepicker').on('click', function () {
    var b = $(this).parent().find('input')
    $.datepicker._clearDate(b)
  })
}
function slider () {
  if ($('.htlfndr-slider-section').length) {
    $('.owl-carousel').owlCarousel({
      singleItem: true,
      autoPlay: 3000,
      pagination: false,
      paginationSpeed: 1000
    })
  }
  if ($('#htlfndr-room-slider').length) {
    $('.owl-carousel').owlCarousel({
      singleItem: true,
      autoPlay: 60000,
      pagination: true,
      paginationSpeed: 1000
    })
  }
  if ($('.htlfndr-post-thumbnail').hasClass('owl-carousel')) {
    var b = function () {
      var d = $('.owl-carousel').find('.owl-buttons').detach()
      d.insertBefore('.owl-controls')
    }
    $('.owl-carousel').owlCarousel({
      singleItem: true,
      autoPlay: 60000,
      pagination: true,
      paginationSpeed: 1000,
      navigation: true,
      navigationText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      afterInit: b
    })
  }
  var c = $('#htlfndr-price-slider')
  c.slider({
    range: true,
    min: 0,
    max: 5000,
    values: [100, 1000],
    slide: function (e, f) {
      $('#htlfndr-price-show').val('$' + f.values[0] + ' - $' + f.values[1])
      $('.price_min').text('$' + f.values[0])
      $('.price_max').text('$' + f.values[1])
      var d = 0
      $('.ui-slider-handle').each(function () {
        if (d == 0) {
          $('.price_min').css({ left: $(this).position().left - 20 })
        } else {
          $('.price_max').css({ left: $(this).position().left - 20 })
        }
        d++
      })
    },
    change: function (e, f) {
      $('#htlfndr-price-start').val(f.values[0])
      $('#htlfndr-price-stop').val(f.values[1])
      $('.price_min').text('$' + f.values[0])
      $('.price_max').text('$' + f.values[1])
      var d = 0
      $('.ui-slider-handle').each(function () {
        if (d == 0) {
          $('.price_min').css({ left: $(this).position().left - 20 })
        } else {
          $('.price_max').css({ left: $(this).position().left - 20 })
        }
        d++
      })
    }
  })
  $('#htlfndr-price-show').val(
    '$' + c.slider('values', 0) + ' - $' + c.slider('values', 1)
  )
  $('.price_min').text('$' + c.slider('values', 0))
  $('.price_max').text('$' + c.slider('values', 1))
  var a = 0
  $('.ui-slider-handle').each(function () {
    if (a == 0) {
      $('.price_min').css({ left: $(this).position().left - 20 })
    } else {
      $('.price_max').css({ left: $(this).position().left - 20 })
    }
    a++
  })
}
function edit () {
  var o
  if ($('ul li').hasClass('dropdown')) {
    o = $('.dropdown')
    var n = o.children('a')
    o.each(function () {
      n.attr({
        class: 'dropdown-toggle',
        'data-toggle': 'dropdown',
        role: 'button',
        'aria-haspopup': 'true',
        'aria-expanded': 'false'
      })
    })
    o.on('click', function () {
      $(this).children('a').toggleClass('active-on-device')
    })
  }
  $('.htlfndr-dropdown').selectmenu()
  if ($('body').find('.ui-selectmenu-menu').length) {
    var e = $('body').find('.ui-selectmenu-menu')
    e.addClass('htlfndr-selectmenu')
    if ($('body').find('.htlfndr-payment-page').length) {
      e.addClass('htlfndr-selectmenu-payment-page')
    }
  }
  radiocheckchange(':checkbox')
  radiocheckchange('.htlfndr-classic-radio :radio')
  radiocheckchange('.htlfndr-check-radios :radio')
  $(
    ".htlfndr-check-radios input[type='checkbox']:checked,input[type='radio']:checked"
  ).each(function () {
    $(this)
      .parent()
      .parent()
      .removeClass('hover')
      .children('p label')
      .not('.switch-label-check')
      .addClass('mainColor2')
  })
  $("input[type='checkbox'],input[type='radio']").change(function () {
    $(this)
      .parent()
      .parent()
      .removeClass('hover')
      .children('label')
      .not('.switch-label-check')
      .removeClass('mainColor2')
    $("input[type='radio']")
      .parent()
      .parent()
      .removeClass('hover')
      .children('label')
      .not('.switch-label-check')
      .removeClass('mainColor2')
    $(
      ".htlfndr-check-radios input[type='checkbox']:checked,.htlfndr-classic-radio input[type='radio']:checked"
    )
      .parent()
      .parent()
      .removeClass('hover')
      .children('p label')
      .not('.switch-label-check')
      .addClass('mainColor2')
  })
  $('.htlfndr-check-radios label').each(function () {
    $(this).hover(
      function () {
        $(this).parent().addClass('hover')
      },
      function () {
        $(this).parent().removeClass('hover')
      }
    )
  })
  var h = '<span class="htlfndr-special">special offer</span>'
  if ($('#htlfndr-user-tab-4 .htlfndr-hotel-post').hasClass('special-offer')) {
    o = $('.htlfndr-hotel-post.special-offer')
    o.prepend(h)
  } else {
    if ($('.htlfndr-hotel-post').hasClass('special-offer')) {
      o = $('.htlfndr-hotel-post.special-offer')
      o.find('.htlfndr-hotel-price').each(function () {
        $(this).prepend(h)
      })
    } else {
      if ($('.htlfndr-hotel-visit-card').hasClass('special-offer')) {
        o = $('.htlfndr-hotel-visit-card.special-offer')
        o.find('.htlfndr-hotel-price').prepend(h)
      }
    }
  }
  if ($('.htlfndr-modify-search-aside.widget').length) {
    var c, p, t, d
    c = $('.htlfndr-modify-search-aside.widget')
    c.find('.htlfndr-dropdown').each(function () {
      p = $(this).attr('id')
      t = $('body').find('.ui-selectmenu-menu > ul')
      d = t.attr('id')
      if (d == p + '-menu') {
        t.addClass('htlfndr-small-select-menu')
      }
    })
  }
  if ($('.htlfndr-user-rating').length) {
    $('.htlfndr-user-rating').starrr({
      emptyStarClass: 'fa fa-star htlfndr-empty-star',
      change: function (v, u) {
        $('#htlfndr-rating').val(u)
      }
    })
  }
  if ($('.switch-label-check').length) {
    var a, q, b
    a = $('.switch-label-check').find(
      'input[type="checkbox"],input[type="radio"]'
    )
    a.each(function () {
      if ($(this).prop('disabled')) {
        q = $(this).attr('id')
      }
      b = $(this).parent().next()
      if (q == b.attr('for')) {
        b.addClass('label-of-disabled-check')
      } else {
        b.removeClass('label-of-disabled-check')
      }
    })
  }
  $('[data-toggle="tooltip"]').tooltip()
  $('#htlfndr-gallery-and-map-tabs').tabs()
  if ($('.htlfndr-hotel-gallery').length) {
    var l = $('#htlfndr-gallery-synced-1')
    var j = $('#htlfndr-gallery-synced-2')
    l.owlCarousel({
      singleItem: true,
      autoPlay: 3000,
      slideSpeed: 1000,
      stopOnHover: true,
      navigation: true,
      navigationText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ],
      pagination: false,
      afterAction: htlfndr_synced_slider_position,
      responsiveRefreshRate: 200
    })
    j.owlCarousel({
      items: 5,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [991, 5],
      itemsTablet: [768, 3],
      itemsMobile: [499, 2],
      pagination: false,
      responsiveRefreshRate: 100,
      afterInit: function (u) {
        u.find('.owl-item').eq(0).addClass('synced')
      }
    })
    j.on('click', '.owl-item', function (v) {
      v.preventDefault()
      var u = $(this).data('owlItem')
      l.trigger('owl.goTo', u)
    })
  }
  make_hover(
    $(
      '.htlfndr-select-hotel-button, .htlfndr-read-more-button, .htlfndr-follow-button'
    )
  )
  var f = function () {
    return 'value' in document.createElement('meter')
  }
  if (f() === false) {
    var i, s, r, g
    i = $('.htlfndr-meter')
    i.each(function () {
      $(this).css('border', 'none')
      s = $(this).children()
      r = $(this).children().children()
      g = s.attr('data-value')
      r.css('width', g * 100 + '%')
    })
  }
  $.fn.btn = $.fn.button.noConflict()
  $('.htlfndr-radio-set').buttonset()
  $('#htlfndr-radio-card').buttonset()
  htlfndr_accordion('.htlfndr-payment-page #htlfndr-accordion-3')
  htlfndr_accordion('.htlfndr-payment-page #htlfndr-accordion-4')
  if ($('.htlfndr-input-error').length) {
    var m =
      '<p class="htlfndr-error-text">Please enter a first and last name using letters only.</p>'
    $('.htlfndr-input-error').after(m)
  }
  if ($('body').find('.htlfndr-count').length) {
    $('.htlfndr-count').each(function () {
      var u = $(this)
      $({ Counter: 0 }).animate(
        { Counter: u.text() },
        {
          duration: 3000,
          easing: 'swing',
          step: function () {
            u.text(Math.ceil(this.Counter))
          }
        }
      )
    })
  }
}
function htlfndr_accordion (a) {
  if ($(a).length) {
    $(a)
      .find('.htlfndr-accordion-title')
      .on('click', function () {
        $(this).toggleClass('active')
        $(a).find('.htlfndr-accordion-inner').slideToggle('fast')
      })
  }
}
function htlfndr_select_sorting_parameters (b) {
  var d, c, a
  d = b.text()
  c = $('.htlfndr-show-sort')
  if ($('span').is(c) || $(c).text().toString() != $(d).toString()) {
    a = '<span class="htlfndr-show-sort">' + d + '</span>'
  }
  if ($(c).text().toString() != $(d).toString()) {
    $(c).remove()
  }
  if (!$('.htlfndr-sort ').hasClass('sorted')) {
    $('.htlfndr-sort ').addClass('sorted')
  }
  $(a).insertAfter('.htlfndr-sort>.dropdown-toggle').fadeIn('slow')
}
function htlfndr_preloader () {
  $('.htlfndr-loader-overlay').fadeIn(100)
  setTimeout(function () {
    $('.htlfndr-loader-overlay').css('display', 'none')
  }, 400)
}
function htlfndr_synced_slider_position (a) {
  var b = this.currentItem
  $('#htlfndr-gallery-synced-2')
    .find('.owl-item')
    .removeClass('synced')
    .eq(b)
    .addClass('synced')
  if (undefined !== $('#htlfndr-gallery-synced-2').data('owlCarousel')) {
    htlfndr_synced_center(b)
  }
}
function htlfndr_synced_center (d) {
  var a = $('#htlfndr-gallery-synced-2')
  var f = a.data('owlCarousel').owl.visibleItems
  var b = d
  var e = false
  for (var c in f) {
    if (b === f[c]) {
      e = true
    }
  }
  if (false === e) {
    if (b > f[f.length - 1]) {
      a.trigger('owl.goTo', b - f.length + 2)
    } else {
      if (-1 === b - 1) {
        b = 0
      }
      a.trigger('owl.goTo', b)
    }
  } else {
    if (b === f[f.length - 1]) {
      a.trigger('owl.goTo', f[1])
    } else {
      if (b === f[0]) {
        a.trigger('owl.goTo', b - 1)
      }
    }
  }
}
function make_hover (a) {
  a.on('touchend', function (d) {
    d.preventDefault()
    var b = $(this)
    b.addClass('hovered')
    var c = b.attr('href')
    setTimeout(function () {
      window.location = c
    }, 500)
  })
}
;(function (b) {
  var c = document.documentElement
  c.setAttribute('data-useragent', navigator.userAgent)
  b(document).ready(function () {
    user_tabs()
    click_check()
    custom_select()
    browser_width()
    edit()
    calendar()
    slider()
  })
  var a = b(window).width()
  b(window).resize(function () {
    if (a < 991) {
      var d = b('.htlfndr-hotel-post-wrapper')
      if (d.hasClass('col-md-12')) {
        d.removeClass('col-md-12')
        d.addClass('col-md-4')
        d.closest('.htlfndr-search-result').removeClass('htlfndr-row-view')
        d.closest('.htlfndr-search-result').addClass('htlfndr-grid-view')
      }
    }
  })
  if (a < 1199) {
    b('.htlfndr-user-page .htlfndr-hotel-post-wrapper').css(
      'margin-top',
      '-20px'
    )
  }
})(jQuery)
