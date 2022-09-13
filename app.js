$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass("bg scrolled", $(this).scrollTop() > $nav.height());
    });
});