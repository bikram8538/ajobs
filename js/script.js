$(document).ready(function () {
  // Banner Dropdown
  // Navbar toggler icon toggle (Font Awesome)
  $('.navbar-toggler').on('click', function () {
    const icon = $(this).find('i')
    icon.toggleClass('fa-bars fa-xmark') // swap icons
  })

  document.querySelectorAll('.dropdown').forEach((dropdown) => {
    const input = dropdown.querySelector('input')
    const items = dropdown.querySelectorAll('.dropdown-item')

    items.forEach((item) => {
      item.addEventListener('click', () => {
        input.value = item.textContent.trim() // set input value
      })
    })
  })

  // Featured Filter Menu

  function filterSelection(c) {
    if (c === 'all') {
      $('.featuredDiv').show()
    } else {
      $('.featuredDiv')
        .hide()
        .filter('.' + c)
        .show()
    }
  }
  filterSelection('all')

  $('#featuredBtnContainer .btn').on('click', function () {
    $('#featuredBtnContainer .btn').removeClass('active')
    $(this).addClass('active')
    filterSelection($(this).data('filter'))
  })

  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '.navbar',
    offset: 70,
  })

  // Navbar scroll and mobile menu background control
  $(window).on('scroll', function () {
    const $navbar = $('nav.navbar')
    if ($(this).scrollTop() > 0) {
      $navbar.addClass('scrolled')
    } else if (!$('.navbar-collapse').hasClass('show')) {
      // remove background only if menu is closed
      $navbar.removeClass('scrolled')
    }
  })

  // On toggler (menu) open/close
  $('.navbar-toggler').on('click', function () {
    const $navbar = $('nav.navbar')
    const $collapse = $('.navbar-collapse')

    // wait for Bootstrap collapse animation
    setTimeout(function () {
      if ($collapse.hasClass('show')) {
        $navbar.addClass('scrolled') // ensure background appears when menu is open
      } else if ($(window).scrollTop() === 0) {
        $navbar.removeClass('scrolled') // remove when menu closes & user is at top
      }
    }, 200)
  })

  // Hiring Now Swiper Start ////

  var swiper = new Swiper('.mySwiper', {
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        spaceBetween: 20, // mobile
      },
      576: {
        spaceBetween: 30, // tablets
      },
      992: {
        spaceBetween: 40, // laptops
      },
      1200: {
        spaceBetween: 50, // desktops
      },
    },
  })
  // Hiring Now Swiper End ////

  let comp = document.querySelector('.companies')
  let compH = comp.offsetHeight
  console.log(compH)

  let topb = document.querySelector('.topbar')
  let topH = topb.offsetHeight
  console.log(topH)
});
