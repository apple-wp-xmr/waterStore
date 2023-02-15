$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow:
            '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icon/slider-arrow-bl_l.svg" alt=""></button>',
        nextArrow:
            '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icon/slider-arrow-bl_r.svg" alt=""></button>',
    });

    $('.search__tabs-item').on('click', function (e) {
        e.preventDefault();
        if (e.target.classList.contains('search__tabs-item--active')) {
            return;
        }
        $('.search__tabs-item').removeClass('search__tabs-item--active');
        $('.search__content-item').removeClass('search__content-item--active');
        $(this).addClass('search__tabs-item--active');
        $('#tab-' + `${$(this).data('id')}`).addClass('search__content-item--active');
    });

    $('.product-item__favorite').on('click', function (e) {
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $(this).addClass('tab--active');
        let data = e.target.dataset.id;
        data = '#' + data;
        $($(data).siblings()).removeClass('tabs-content--active');
        $(data).addClass('tabs-content--active');
        $('.product-slider').slick('unslick');
        $('.product-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow:
                '<button class="product-slider__btn product-slider__btn--prev"><img src="images/icon/slider-arrow-bl_l.svg" alt=""></button>',
            nextArrow:
                '<button class="product-slider__btn product-slider__btn--next"><img src="images/icon/slider-arrow-bl_r.svg" alt=""></button>',
        });
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:
            '<button class="product-slider__btn product-slider__btn--prev"><img src="images/icon/slider-arrow-bl_l.svg" alt=""></button>',
        nextArrow:
            '<button class="product-slider__btn product-slider__btn--next"><img src="images/icon/slider-arrow-bl_r.svg" alt=""></button>',
    });
});
