$(function () {

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    });

    $('.popular__bottom-list__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        infinite: true,
    });

    $('.sells-list__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        infinite: true,
    });

    $('.sells-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,

        responsive: [
            {
                breakpoint: 1581,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1141,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 561,
                settings: {
                    unslick: none,
                }
            }
        ]

    });



    $('.social__images-item-1').on('click', function () {
        $('.social__images-item-1').toggleClass('--active');
        $('.social__images-item-2').removeClass('--active');
        $('.social__images-item-3').removeClass('--active');
        $('.social__images-item-4').removeClass('--active');
        $('.social__images-item-5').removeClass('--active');
        $('.social__images-item-6').removeClass('--active');
    });

    $('.social__images-item-2').on('click', function () {
        $('.social__images-item-2').toggleClass('--active');
        $('.social__images-item-1').removeClass('--active');
        $('.social__images-item-3').removeClass('--active');
        $('.social__images-item-4').removeClass('--active');
        $('.social__images-item-5').removeClass('--active');
        $('.social__images-item-6').removeClass('--active');
    });

    $('.social__images-item-3').on('click', function () {
        $('.social__images-item-3').toggleClass('--active');
        $('.social__images-item-1').removeClass('--active');
        $('.social__images-item-2').removeClass('--active');
        $('.social__images-item-4').removeClass('--active');
        $('.social__images-item-5').removeClass('--active');
        $('.social__images-item-6').removeClass('--active');
    });

    $('.social__images-item-4').on('click', function () {
        $('.social__images-item-4').toggleClass('--active');
        $('.social__images-item-1').removeClass('--active');
        $('.social__images-item-2').removeClass('--active');
        $('.social__images-item-3').removeClass('--active');
        $('.social__images-item-5').removeClass('--active');
        $('.social__images-item-6').removeClass('--active');
    });

    $('.social__images-item-5').on('click', function () {
        $('.social__images-item-5').toggleClass('--active');
        $('.social__images-item-1').removeClass('--active');
        $('.social__images-item-2').removeClass('--active');
        $('.social__images-item-3').removeClass('--active');
        $('.social__images-item-4').removeClass('--active');
        $('.social__images-item-6').removeClass('--active');
    });

    $('.social__images-item-6').on('click', function () {
        $('.social__images-item-6').toggleClass('--active');
        $('.social__images-item-1').removeClass('--active');
        $('.social__images-item-2').removeClass('--active');
        $('.social__images-item-3').removeClass('--active');
        $('.social__images-item-4').removeClass('--active');
        $('.social__images-item-5').removeClass('--active');
    });


    $('#favorite-btn-1').on('click', function () {
        let favorite = document.getElementById('favorite');

        if (favorite.textContent == '') {
            let favoriteVal = 0;
            favorite.textContent = favoriteVal + 1;
        }

        else if (favorite.textContent !== '') {
            let favoriteVal = favorite.textContent;
            favorite.textContent = parseInt(favoriteVal) + 1;
        }
    });

    $('#favorite-btn-2').on('click', function () {
        let favorite = document.getElementById('favorite');

        if (favorite.textContent == '') {
            let favoriteVal = 0;
            favorite.textContent = favoriteVal + 1;
        }

        else if (favorite.textContent !== '') {
            let favoriteVal = favorite.textContent;
            favorite.textContent = parseInt(favoriteVal) + 1;
        }
    });

    $('#favorite-btn-3').on('click', function () {
        let favorite = document.getElementById('favorite');

        if (favorite.textContent == '') {
            let favoriteVal = 0;
            favorite.textContent = favoriteVal + 1;
        }

        else if (favorite.textContent !== '') {
            let favoriteVal = favorite.textContent;
            favorite.textContent = parseInt(favoriteVal) + 1;
        }
    });

    $('#favorite-btn-4').on('click', function () {
        let favorite = document.getElementById('favorite');

        if (favorite.textContent == '') {
            let favoriteVal = 0;
            favorite.textContent = favoriteVal + 1;
        }

        else if (favorite.textContent !== '') {
            let favoriteVal = favorite.textContent;
            favorite.textContent = parseInt(favoriteVal) + 1;
        }
    });

    $('#favorite-btn-5').on('click', function () {
        let favorite = document.getElementById('favorite');

        if (favorite.textContent == '') {
            let favoriteVal = 0;
            favorite.textContent = favoriteVal + 1;
        }

        else if (favorite.textContent !== '') {
            let favoriteVal = favorite.textContent;
            favorite.textContent = parseInt(favoriteVal) + 1;
        }
    });

    $('#favorite-btn-6').on('click', function () {
        let favorite = document.getElementById('favorite');

        if (favorite.textContent == '') {
            let favoriteVal = 0;
            favorite.textContent = favoriteVal + 1;
        }

        else if (favorite.textContent !== '') {
            let favoriteVal = favorite.textContent;
            favorite.textContent = parseInt(favoriteVal) + 1;
        }
    });

    $('#favorite-btn-7').on('click', function () {
        let favorite = document.getElementById('favorite');

        if (favorite.textContent == '') {
            let favoriteVal = 0;
            favorite.textContent = favoriteVal + 1;
        }

        else if (favorite.textContent !== '') {
            let favoriteVal = favorite.textContent;
            favorite.textContent = parseInt(favoriteVal) + 1;
        }
    });

    $('#favorite-btn-8').on('click', function () {
        let favorite = document.getElementById('favorite');

        if (favorite.textContent == '') {
            let favoriteVal = 0;
            favorite.textContent = favoriteVal + 1;
        }

        else if (favorite.textContent !== '') {
            let favoriteVal = favorite.textContent;
            favorite.textContent = parseInt(favoriteVal) + 1;
        }
    });


    $('.popular__showmore-btn').on('click', function () {
        $('.popular__bottom-list__item').toggleClass('--active');
    });
});