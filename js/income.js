const income = {
    amount: document.querySelector('#incomeValue'),
    date: document.querySelector('#incomeDate'),
    button: document.querySelector('#addIncomeBtn')
}

const newStatement = document.querySelector('.statement');

income.button.addEventListener('click', () => {
    if(!income.amount.value) alert("Podaj wartosć przychodu!");
    else if(income.amount.value <= 0 ) alert("Podaj przychód większy od zera!")
    else if(!(income.date.value) ) alert("Podaj datę przychodu!")
    else {
        newStatement.innerText = "Przychód pomyślnie dodany!";
        income.button.innerText = "Dodaj kolejny";
        reset();
    }
})

function reset() {
    income.amount.value = "";
    income.date.value = "";
}
