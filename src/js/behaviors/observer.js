const cb = (entries, observer) => {
    entries.forEach((entry) => {
        // if the element is on the screen, apply the animation class
        entry.target.classList.toggle('-fade', entry.isIntersecting);

        // if it's on the screen and the animation took effect, remove the element from the observer
        if (entry.isIntersecting) observer.unobserve(entry.target);
    });
};

const options = {
    root: null,
    threshold: 0,
    rootMargin: '-150px'

};

if ('IntersectionObserver' in window) {
    const targetElements = document.querySelectorAll('[data-js-fade]');
    const observer = new IntersectionObserver(cb, options);

    // start observing elements
    targetElements.forEach(element => observer.observe(element));
}