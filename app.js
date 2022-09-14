$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass("nav-bg bg-dark scrolled", $(this).scrollTop() > $nav.height());
    });
});