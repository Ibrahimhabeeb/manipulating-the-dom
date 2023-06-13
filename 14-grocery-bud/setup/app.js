// ****** SELECT ITEMS **********

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submit = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clear = document.querySelector('.clear-btn');
let editElement;
let editFlag = false;
let editID = '';

// formeventlistener 
form.addEventListener('submit', addItem)
function addItem(e) {
    // to prevent from submitting to server
    e.preventDefault();
    let value = grocery.value;
    const milli = new Date().getTime().toString();
    console.log(milli);
    if (value && !editFlag) {
        let elementcreate = document.createElement('article');
        elementcreate.classList.add('grocery-item');
        elementcreate.setAttribute('data-id', milli);
        // const attcreate = document.createAttribute('data-id');
        // attcreate.value = milli;
        // elementcreate.setAttributeNode(attcreate);
        elementcreate.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`
        const edit = elementcreate.querySelector('.edit-btn');
        edit.addEventListener('click', function (e) {
            editElement = e.currentTarget.parentElement.previousElementSibling
            // console.log(editElement);
            grocery.value = editElement.innerHTML;
            editFlag = true;
            editID = elementcreate.dataset.id;
            submit.textContent = 'edito';

        })
        // an element was created just now get the edit button and deletebutton
        const del = elementcreate.querySelector('.delete-btn');
        del.addEventListener('click', function () {
            const id = del.parentElement.parentElement.dataset.id;
            console.log(`okay ${id}`)
            list.removeChild(elementcreate);
            displayAlert('item removed', 'danger');
            removelocal(id);

        });
        // why document.queryselector didnt work
        // Because i have not specifed the location of element create using append child
        list.appendChild(elementcreate);
        list.insertBefore(elementcreate, clear)
        displayAlert(`item added successfully`, "success");
        container.classList.add('show-container');
        console.log(elementcreate);
        // clear.classList.add('showclear')
        addtostorage(milli, value);
        // setbacktodefault();
        // addtostorage(id, value)
        setbacktodefault();
    }
    else if (value && editFlag) {
        editElement.innerHTML = grocery.value;
        displayAlert('value changed', 'success');
        editLocalStorage(editID, value);
        setbacktodefault();
        console.log('awwal');
    }
    else {
        displayAlert(`Enter a value`, "danger");

    }



}






// deletebtn.addEventListener('click', deleteitem);
// editbtn.addEventListener('click', edititem);

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 2000);
}

function setbacktodefault() {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submit.textContent = 'submit';
}

//local storage session

let arrya = [];
function addtostorage(id, value) {
    const grocery = { id: id, value: value };
    // let see = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    // see.push(grocery);
    // localStorage.setItem('list', JSON.stringify(see));
    // console.log(see);
    arrya.push(grocery);
    localStorage.setItem('list', JSON.stringify(arrya));
    let pray = JSON.parse(localStorage.getItem('list'));
    console.log(pray);
}
function removelocal(id) {
    const wi = JSON.parse(localStorage.getItem('list'));
    const filteredwi = wi.filter(function (i) {
        return (i.id !== id);
    })
    console.log(filteredwi);
    const sun = localStorage.setItem('list', JSON.stringify(filteredwi));
    // console.log(sun);

}

function editLocalStorage(id, value) {
    const lok = JSON.parse(localStorage.getItem('list'));
    const mappedarry = lok.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    })
    localStorage.setItem('list', JSON.stringify(mappedarry));


}
function loaditr() {
    const stored = localStorage.getItem('list');
    if (stored.length > 0) {
        const eached = store.eached(function (j) {
            return hmm(j);
        })
    }

}
// other reason

clear.addEventListener('click', function () {
    // since it was stored in an inner html we can acccess it
    const itemscreate = document.querySelectorAll('.grocery-item');
    console.log(itemscreate)
    itemscreate.forEach(function (e) {
        list.removeChild(e);
    })
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    localStorage.removeItem('list');
});



function createlocal() {
    const rain = JSON.parse(localStorage.getItem('list'));
    if (rain.length > 0) {
        const eached = rain.forEach(function (e) {
            let primeone = e.id;
            let primetwo = e.value;
            funny(primeone, primetwo);


        })

    }

}
window.addEventListener('DOMContentLoaded', createlocal)

function funny(one, two) {
    let elementcreate = document.createElement('article');
    elementcreate.classList.add('grocery-item');
    elementcreate.setAttribute('data-id', one);
    // const attcreate = document.createAttribute('data-id');
    // attcreate.value = milli;
    // elementcreate.setAttributeNode(attcreate);
    elementcreate.innerHTML = `<p class="title">${two}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`
    const edit = elementcreate.querySelector('.edit-btn');
    edit.addEventListener('click', function (e) {
        editElement = e.currentTarget.parentElement.previousElementSibling
        // console.log(editElement);
        grocery.value = editElement.innerHTML;
        editFlag = true;
        editID = elementcreate.dataset.id;
        submit.textContent = 'edito';

    })
    // an element was created just now get the edit button and deletebutton
    const del = elementcreate.querySelector('.delete-btn');
    del.addEventListener('click', function () {
        const id = del.parentElement.parentElement.dataset.id;
        console.log(`okay ${id}`)
        list.removeChild(elementcreate);
        displayAlert('item removed', 'danger');
        removelocal(id);

    });
    // why document.queryselector didnt work
    // Because i have not specifed the location of element create using append child
    list.appendChild(elementcreate);
    list.insertBefore(elementcreate, clear)
    displayAlert(`item added successfully`, "success");
    container.classList.add('show-container');
    console.log(elementcreate);
    // clear.classList.add('showclear')
    addtostorage(one, two);
    // setbacktodefault();
    // addtostorage(id, value)
    setbacktodefault();
}