const menuBtn = document.querySelector('.menu__btn');
const menuToggle = document.getElementById("menu__toggle");
if (menuBtn) {
    menuBtn.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuBtn.classList.toggle('_active');
    });
}

//прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__item[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

            if(menuBtn.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                menuBtn.classList.remove('_active');
                document.getElementById('menu__toggle').checked = false;
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
};

