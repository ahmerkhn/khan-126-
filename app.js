// function addExpenseIncome() {
//     var expense = parseFloat(document.getElementById('expense').value);
//     var income = parseFloat(document.getElementById('income').value);
    
//     if (isNaN(expense) && isNaN(income)) {
//         alert('Please enter a valid expense or income.');
//         return;
//     }

//     var expensesDiv = document.getElementById('expenses');
//     var incomesDiv = document.getElementById('incomes');
    
//     if (!isNaN(expense)) {
//         var expenseDiv = document.createElement('div');
//         expenseDiv.classList.add('expense');
//         expenseDiv.textContent = 'Expense: $' + expense;
//         expensesDiv.appendChild(expenseDiv);
//     }

//     if (!isNaN(income)) {
//         var incomeDiv = document.createElement('div');
//         incomeDiv.classList.add('income');
//         incomeDiv.textContent = 'Income: $' + income;
//         incomesDiv.appendChild(incomeDiv);
//     }

//     document.getElementById('expense').value = '';
//     document.getElementById('income').value = '';
// }




// var expensesList = [];
// var incomesList = [];

// function addExpense() {
//     var expense = parseFloat(document.getElementById('expense').value);
//     if (!isNaN(expense)) {
//         expensesList.push(expense);
//         displayExpenses();
//     }
//     document.getElementById('expense').value = '';
// }

// function addIncome() {
//     var income = parseFloat(document.getElementById('income').value);
//     if (!isNaN(income)) {
//         incomesList.push(income);
//         displayIncomes();
//     }
//     document.getElementById('income').value = '';
// }

// function displayExpenses() {
//     var expensesDiv = document.getElementById('expenses');
//     expensesDiv.innerHTML = '';
//     expensesList.forEach(function(expense) {
//         var expenseDiv = document.createElement('div');
//         expenseDiv.classList.add('expense');
//         expenseDiv.textContent = 'Expense: $' + expense;
//         expensesDiv.appendChild(expenseDiv);
//     });
// }

// function displayIncomes() {
//     var incomesDiv = document.getElementById('incomes');
//     incomesDiv.innerHTML = '';
//     incomesList.forEach(function(income) {
//         var incomeDiv = document.createElement('div');
//         incomeDiv.classList.add('income');
//         incomeDiv.textContent = 'Income: $' + income;
//         incomesDiv.appendChild(incomeDiv);
//     });
// }



var expensesList = [];
var incomesList = [];

function addExpense() {
    var expense = parseFloat(document.getElementById('expense').value);
    if (!isNaN(expense)) {
        expensesList.push(expense);
        displayExpenses();
        calculateSavings();
    }
    document.getElementById('expense').value = '';
}

function addIncome() {
    var income = parseFloat(document.getElementById('income').value);
    if (!isNaN(income)) {
        incomesList.push(income);
        displayIncomes();
        calculateSavings();
    }
    document.getElementById('income').value = '';
}

function displayExpenses() {
    var expensesDiv = document.getElementById('expenses');
    expensesDiv.innerHTML = '';
    expensesList.forEach(function(expense) {
        var expenseDiv = document.createElement('div');
        expenseDiv.classList.add('expense');
        expenseDiv.textContent = 'Expense: $' + expense;
        expensesDiv.appendChild(expenseDiv);
    });
}

function displayIncomes() {
    var incomesDiv = document.getElementById('incomes');
    incomesDiv.innerHTML = '';
    incomesList.forEach(function(income) {
        var incomeDiv = document.createElement('div');
        incomeDiv.classList.add('income');
        incomeDiv.textContent = 'Income: $' + income;
        incomesDiv.appendChild(incomeDiv);
    });
}

function calculateSavings() {
    var totalIncome = incomesList.reduce((acc, val) => acc + val, 0);
    var totalExpense = expensesList.reduce((acc, val) => acc + val, 0);
    var savings = totalIncome - totalExpense;

    var savingsDiv = document.getElementById('savings');
    savingsDiv.innerHTML = 'Savings: $' + savings;
}
