const expense = {
    amount: document.querySelector('#expenseAmount'),
    date: document.querySelector('#currentDateCheck'),
    category: document.querySelector('#categorySelect'),
    button: document.querySelector('#addExpenseBtn')
}

//------Aktualna data

const now = new Date();
const currentDate = document.querySelector('.current-date');

let month = now.getMonth()+1;

function leadingZero(num) {
    if( num < 10) {
        num = `0${num}`;
    }
    return num;
}

month = leadingZero(month);

currentDate.innerText = `Dzisiejsza: ${now.getDate()}.${month}.${now.getFullYear()}`;


//-------Wyłączenie widoczności pola z wyborem daty gdy wybrana jest aktualna

const inputCurrentDate = document.querySelector('#currentDateCheck');
const otherCurrentDate = document.querySelector('#otherDateCheck');
const dataCheck = document.querySelector('#dataCheck');
const radioGroup = [inputCurrentDate, otherCurrentDate];
const selectDate = document.querySelector('#expenseDate');

let isCurrentDateSelected = selectDate.setAttribute('disabled', true);

for (const radio of radioGroup) {
    radio.addEventListener('change', e => {
            if(inputCurrentDate.checked) {
                isCurrentDateSelected = selectDate.setAttribute('disabled', true);
                expense.date = inputCurrentDate;
            }
            else if (!inputCurrentDate.checked){
                isCurrentDateSelected = selectDate.removeAttribute('disabled');
                expense.date = document.querySelector('#expenseDate');
            }
    });
}


const newStatement = document.querySelector('.statement');
let optionValue = '0';
let isCategorySelected = false;

function checkCategory() { 
    if( optionValue === '0') {
        isCategorySelected = false;
    }
    else isCategorySelected = true;
}

function reset() {
    expense.amount.value = "";
    expense.date.value = "";
}

expense.button.addEventListener('click', () => {

    optionValue = expense.category.options[expense.category.selectedIndex].value;
    
    checkCategory();

    if(!expense.amount.value) alert("Podaj wartosć wydatku!");
    else if(expense.amount.value <= 0) alert("Podaj kwotę większą od zera!")
    else if(!(expense.date.value)) alert("Podaj datę wydatku!")
    else if(!isCategorySelected) alert("Wybierz kategorię wydatku!")
    else {
        newStatement.innerText = "Przychód pomyślnie dodany!";
        expense.button.innerText = "Dodaj kolejny";
        expense.button.classList.add('form-button');
        reset();
    }
})
