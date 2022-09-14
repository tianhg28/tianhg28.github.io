$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass("nav-bg scrolled", $(this).scrollTop() > $nav.height());
    });
});

// const fullPath = location.href;
// const index = fullPath.lastIndexOf('/');
// const currPath = fullPath.slice(index+1);

// no one's supposed to see this so please realise that 
// my code usually looks a lot less cancerous than this
// im just feeling lazy so pls pretend u never saw dis tyty
// if (currPath === 'home.html#about' || currPath === 'home#about') {
//     const link = document.querySelector("a[href='home.html#about']");
//     link.classList.add('current');
// } else if (currPath === 'resume' || currPath === 'home.html/resume') {
//     const link = document.querySelector("a[href='home.resume']");
//     link.classList.add('current');
// } else if (currPath === 'projects' || currPath === 'projects.html') {
//     const link = document.querySelector("a[href='projects']");
//     link.classList.add('current');
// } else if (currPath === 'home.html#about' || currPath === 'home.html#about') {
//     const link = document.querySelector("a[href='home.html#about']");
//     link.classList.add('current');
// } else if (currPath === 'home.html#about' || currPath === 'home.html#about') {
//     const link = document.querySelector("a[href='home.html#about']");
//     link.classList.add('current');
// }
