'use strict';
// utilities
const utils = {
    removeClasses: (el, classes = []) => {
        if (!el) return el;
        const fn = (cl) => el.classList.remove(cl)
        if (Array.isArray(classes)) {
            classes.forEach(fn)
        } else {
            fn(classes)
        }
        return el;
    },
    addClasses: (el, classes = []) => {
        if (!el) return el;
        const fn = (cl) => el.classList.add(cl)
        if (Array.isArray(classes)) {
            classes.forEach(fn)
        } else {
            fn(classes)
        }
        return el;
    }
}

