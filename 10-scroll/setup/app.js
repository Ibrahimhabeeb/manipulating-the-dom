// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
window.addEventListener('scroll', function (e) {


})
const scrolllink = document.querySelectorAll('.scroll-link');
scrolllink.forEach(function (each) {
    each.addEventListener('click', function (eclick) {
        eclick.preventDefault();
        const relate = eclick.currentTarget.getAttribute('href');
        const end = relate.length;
        const jou = relate.slice(1, end);
        console.log(jou);
        const colleague = document.getElementById(jou);
        let positiony = colleague.getBoundingClientRect().y;
        let positionx = colleague.getBoundingClientRect().x;
        console.log(positiony);
        window.scrollTo(positionx, positiony);


    })
})
const toggle = document.querySelector('.nav-toggle');
const linkcontainer = document.querySelector('.links-container');



toggle.addEventListener('click', function () {
    linkcontainer.classList.toggle('show-links');
})
