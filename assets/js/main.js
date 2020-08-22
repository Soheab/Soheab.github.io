function scroll_to(get_id) {
    // Thanks Bowser65 <3
    let id = get_id.replace("#", "");
    const el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", inline: "nearest"});
    history.pushState(null, null, `#${id}`);
}

window.addEventListener('scroll', function () {
    // Hide arrow button when scrolling down the page
    const scrollPosition = window.scrollY;
    const logoContainer = document.getElementsByClassName('arrow')[0];
    if (scrollPosition >= 100) {
        logoContainer.classList.add('arrow--scrolled');
    } else {
        logoContainer.classList.remove('arrow--scrolled');
    }
});