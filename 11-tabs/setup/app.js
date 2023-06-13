const buttons = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

buttons.forEach(function (each) {
    each.addEventListener('click', function (e) {
        let linnk = e.currentTarget.dataset.id;
        const colleague = document.getElementById(linnk);
        buttons.forEach(function (dumb) {
            dumb.classList.remove('active');

        })
        content.forEach(function (dum2) {
            dum2.classList.remove('active');
        })
        colleague.classList.add('active');
        each.classList.add('active');

    })
});