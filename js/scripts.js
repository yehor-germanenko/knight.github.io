jQuery("document").ready(function($){
    var nav = $('.menu');
    $(window).scroll(function () {
        if ($(this).scrollTop() > window.innerHeight){
            nav.addClass("scroll");
            $('.top_name').css('margin-top', $('.menu').css('height'));
        } else {
            nav.removeClass("scroll");
            $('.top_name').css('margin-top', '0');
        }
    });

    $(".menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $($(this).attr('href')).offset().top;
        alert(top);
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    /*$(".menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $($(this).attr('href')).offset().top;
        alert(top);
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });*/
});