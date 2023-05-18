[].slice.call(document.querySelectorAll('.dropdown .nav-list__link')).forEach(function(el){
    el.addEventListener('click', onClick, false);
});

function onClick(e){
    e.preventDefault();
    var el = this.parentNode;
    el.classList.contains('show-submenu') ? hideSubMenu(el) : showSubMenu(el);
}

function showSubMenu(el){
    el.classList.add('show-submenu');
    var submenuLinks = el.querySelectorAll('.submenu-link');
    submenuLinks.forEach(function(link) {
        link.addEventListener('click', onSubmenuLinkClick, false);
    });
    document.addEventListener('click', function onDocClick(e){
        e.preventDefault();
        if(el.contains(e.target)){
            return;
        }
        document.removeEventListener('click', onDocClick);
        hideSubMenu(el);
    });
}

function hideSubMenu(el){
    el.classList.remove('show-submenu');
    var submenuLinks = el.querySelectorAll('.submenu-link');
    submenuLinks.forEach(function(link) {
        link.removeEventListener('click', onSubmenuLinkClick, false);
    });
}

function onSubmenuLinkClick(e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    window.location.href = href;
}