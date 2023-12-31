//using selectors inside the element
// traversing the dom
// const allbuttons = document.querySelectorAll('.question-btn');
// const article = document.querySelectorAll('.question');
// allbuttons.forEach(function (eachbtn) {
//     eachbtn.addEventListener('click', function () {
//         // article.classList.toggle('show-text');
//         article.forEach(function (art) {
//             art.classList.toggle('show-text');
//         })
//     })
// })

// Make each article correspond with its button

const questions = document.querySelectorAll(".question");


questions.forEach(function (question) {

    const btn = question.querySelector(".question-btn");
    console.log(btn);

    btn.addEventListener("click", function () {
        // console.log(question);

        // questions.forEach(function (item) {
        //     // if (item !== question) {
        //     //     item.classList.remove("show-text");
        //     // }
        // });

        question.classList.toggle("show-text");
    });
});

