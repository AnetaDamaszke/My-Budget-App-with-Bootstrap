const income = {
    amount: document.querySelector('#incomeValue'),
    date: document.querySelector('#currentDateCheck'),
    button: document.querySelector('#addIncomeBtn')
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
const selectDate = document.querySelector('#incomeDate');

let isCurrentDateSelected = selectDate.setAttribute('disabled', true);

for (const radio of radioGroup) {
    radio.addEventListener('change', e => {
            if(inputCurrentDate.checked) {
                isCurrentDateSelected = selectDate.setAttribute('disabled', true);
                income.date = inputCurrentDate;
            }
            else if (!inputCurrentDate.checked){
                isCurrentDateSelected = selectDate.removeAttribute('disabled');
                income.date = document.querySelector('#incomeDate');
            }
    });
}

//--------Walidacja formularza

const newStatement = document.querySelector('.statement');

function reset() {
    income.amount.value = "";
    income.date.value = "";
}

income.button.addEventListener('click', () => {
    if(!income.amount.value) alert("Podaj wartosć przychodu!");
    else if(income.amount.value <= 0 ) alert("Podaj przychód większy od zera!")
    else if(!income.date.value) alert("Podaj datę przychodu!")
    else {
        newStatement.innerText = "Przychód pomyślnie dodany!";
        income.button.innerText = "Dodaj kolejny";
        reset();
    }
})



 

