$(document).ready(function() {
  // Слайдер
    $('.carousel__inner').slick({
        speed: 1300,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows: false
                }
              },
          
        ]
    });

    // Табы
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // Подробнее
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Модальные окна
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut();
    });
    
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn();
      });
    });

    function valideForm(form) {
      $(form).validate({
        rules: {
          name: 'reqired',
          phone: 'reqired',
          email: {
            reqired:true,
            email: true
          },
        },
        messages: {
          name: "Пожалуйста введите свое имя",
          phone: "Пожалуйста введите номер телефона",
          email: {
            reqired: "Введите свой почтовый адрес",
            email: "Неправильно введен адрес почты"
          },
        },
      });
    };

    valideForm('#consultation-form');
    valideForm('#consultation form');
    valideForm('#order form');

    //Smooth scroll and page up

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        const hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

  });