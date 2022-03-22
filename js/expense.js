const expense = {
    amount: document.querySelector('#expenseAmount'),
    date: document.querySelector('#expenseDate'),
    category: document.querySelector('#categorySelect'),
    button: document.querySelector('#addExpenseBtn')
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

