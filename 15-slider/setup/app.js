const prev = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');
const slides = document.querySelectorAll('.slide');
console.log(slides);

slides.forEach(function (e, index) {
    e.style.left = `${index * 100}%`;

})
let count = 0;

next.addEventListener('click', function () {
    count++;
    if (count > slides.length - 1) {
        count = 0;
    }
    console.log(count);
    // console.log(slides[count]);

    slides[count].style.transform = `translateX(${count * 100}%)`;
})
prev.addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = slides.length - 1;
    }
    console.log(count);
    console.log(slides[count]);
    slides[count].style.transform = `translateX(-${count * 100}%)`;
})

