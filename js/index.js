"use strict";

let btnSearch = document.querySelector('.btn-search');
let modalWindow = document.querySelector('.modals');
let modalClose = document.querySelector('.modals-close');
let fieldEnter = document.querySelector('.field-enter');
let modalInfo = document.querySelector('.modal-info');
let modalsW = document.querySelector('.modals-window');
let textModalInfo;
let personalDate = [
    {
        name: 'Mike',
        age: 18
    },
    {
        name: 'dris',
        age: 24
    },
    {
        name: 'margo',
        age: 38
    },
];

let boxOfNumbers = [
    1, 300, 400, 5, 8, 9, 500
];

let superSum = (a, b) => {
    let result = a + b;
    return result;
};

let findMax = (someArray) => {
    let maxNumber = 0;
    for (let i = 0; i < someArray.length; i++) {

        if (someArray[i] > maxNumber) {
            maxNumber = someArray[i];
        }
    }
    return maxNumber;
};



btnSearch.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalWindow.classList.remove('visually-hidden');
    if (fieldEnter.value == 'google') {
        textModalInfo = 'Yandex круче. Но это не точно';
    } else {
        textModalInfo = fieldEnter.value;
    }
    modalInfo.textContent = textModalInfo + ' ' + personalDate[0].name + ' ' + superSum(100, 300);
    setTimeout(changeModalInfo, 3000);
});

modalClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalWindow.classList.add('visually-hidden');
    modalsW.style.backgroundColor = 'red';
});

let min = boxOfNumbers[0];
let max = 0;

for (let i = 0; i < boxOfNumbers.length; i++) {

    if (boxOfNumbers[i] > max) {
        max = boxOfNumbers[i];
    }

    if (boxOfNumbers[i] < min) {
        min = boxOfNumbers[i];
    }
}
console.log(max);
console.log(min);

let a = 'XXX';
let b = 'YYY';

let changeValue = (i, x) => {
    let c = x;
    b = i;
    a = c;
    return (a, b);
};
changeValue(a, b);

console.log(a);
console.log(b);

function changeModalInfo () {
    if (!modalWindow.classList.contains('visually-hidden')) {
        modalsW.style.backgroundColor = 'Yellow';
        modalInfo.textContent = findMax(boxOfNumbers);
    }

};