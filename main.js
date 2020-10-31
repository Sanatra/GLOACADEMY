'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n) && isFinite(n));
};

let appData = new Object();


// Перечесление название на расходы


// Цель
let mission = (200000);



let budgetDay = (50000 / 30);
console.log(budgetDay);

// Месячный доход
let money;

let start = function () {
    do {
        money = +prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
};
start();
console.log('Ваш бюджет на месяц:', money);



let getExpensesMonth;
// appData.getExpensesMonth = function (a, b) {

// };
appData.getExpensesMonth = function () {
    let sum = 0;
    for (let item in appData.expenses) {
        sum += appData.expenses[item];
    }
    appData.expensesMonth = sum;
    return appData.expensesMonth;
};
appData.getExpensesMonth();





// Обязательные расходы
// let expenses1, expenses2;

// expenses1 = prompt('Введите обязательную статью расходов');
// console.log('Первый обязательный расход:', expenses1);
// let amount1, amount2;
// amount1 = +prompt('Во сколько это обойдется?');
// console.log('Вторая цена:', amount1);

// expenses2 = prompt('Введите обязательную статью расходов');
// console.log('Второй обязательный расход:', expenses2);
// amount2 = +prompt('Во сколько это обойдется?');
// console.log('Вторая цена:', amount2);




// appData.getExpensesMonth();
// console.log('Сумма всех обязательных расходов', appData.getExpensesMonth(amount));


let getAccumulatedMonth;
appData.getAccumulatedMonth = function (a, b) {
    return (a - b);
}; 


// Результат вызова функции getAccumulatedMonth
let accumulatedMonth = appData.getAccumulatedMonth();

// Подсчитывает за какой период будет достгнута цель
budgetDay = accumulatedMonth / 30;

let getTargetMonth;
appData.getTargetMonth = function () {
    mission / accumulatedMonth();
};


if (appData.getTargetMonth < 0) {
    console.log('Цель не будет достигнута');
} else if (appData.getTargetMonth > 0) {
    console.log('Цель будет достигнута');
};

appData.asking = function () {
    let addExpenses = prompt('Перечислите возможные расходы через запятую', 'Интернет,Квартира,Коммунальные услуги');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    let deposit = confirm('Есть ли у вас депозит в банке?');

    for (let i = 0; i < 2; i++) {
        let expenses = prompt('Введите обязательную статью расходов', 'Квартплата, Детский сад');
        let amount = 0;
        console.log(expenses.split(','));

        do {
            amount = +prompt('Во сколько это обойдется?', 2000, 5000)
        } while (!isNumber(amount));
        console.log(Number(amount));
    };
};
appData.asking();

let getStatusIncome;
appData.getStatusIncome = function () {
    if (money > 1200) {
        console.log('У вас высокий уровень дохода');
    } else if (money > 600) {
        console.log('У вас средний уровень дохода');
    } else if (money < 0) {
        console.log('К сожалению, у вас уровень дохода ниже среднего(');
    } else if(money == 0){
        console.log('К сожалению, вы не ввели число(');
    };
};
appData.getStatusIncome();

money = mission / money;
console.log('Цель будет достигнута через:', Math.ceil(money), 'месяца(ев)');

appData = function() {
    for(appData in appData){
        console.log('Наша программа включает в себя данные:', appData.getStatusIncome(),appData.getTargetMonth(),appData.getAccumulatedMonth());
    }
};

