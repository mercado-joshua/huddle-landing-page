"use strict";

var cb = function cb(entries, observer) {
  entries.forEach(function (entry) {
    // if the element is on the screen, apply the animation class
    entry.target.classList.toggle('-fade', entry.isIntersecting); // if it's on the screen and the animation took effect, remove the element from the observer

    if (entry.isIntersecting) observer.unobserve(entry.target);
  });
};

var options = {
  root: null,
  threshold: 0,
  rootMargin: '-150px'
};

if ('IntersectionObserver' in window) {
  var targetElements = document.querySelectorAll('[data-js-fade]');
  var observer = new IntersectionObserver(cb, options); // start observing elements

  targetElements.forEach(function (element) {
    return observer.observe(element);
  });
}