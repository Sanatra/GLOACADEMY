'use strict';

// Деньги

// Перечесление название на расходы
let addExpenses = 'Интернет,Квартира,Коммунальные услуги';
console.log(addExpenses.length);
addExpenses = addExpenses.toLocaleLowerCase();
console.log(addExpenses.split(', '));

// Цель
let mission = (200000);

let budgetDay = (50000 / 30);
console.log(budgetDay);

// Месячный доход
let money;
money = +prompt('Ваш месячный доход?');
console.log('Ваш бюджет на месяц:', money);


// Все возможные расходы
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(', '));

// Обязательные расходы
let expenses1, expenses2;

expenses1 = prompt('Введите обязательную статью расходов');
console.log('Первый обязательный расход:', expenses1);
let amount1, amount2;
amount1 = +prompt('Во сколько это обойдется?');
console.log('Вторая цена:', amount1);

expenses2 = prompt('Введите обязательную статью расходов');
console.log('Второй обязательный расход:', expenses2);
amount2 = +prompt('Во сколько это обойдется?');
console.log('Вторая цена:', amount2);

// Возвращение всех обязательных расходов.
let showTypeOf = function (data) {
    console.log(data, typeof (data));
};
showTypeOf(mission);
showTypeOf(money);
showTypeOf(addExpenses)

let monthExp
let getExpensesMonth = function (a, b) {
    monthExp = (a + b);
    return monthExp;
};
getExpensesMonth();
console.log('Сумма всех обязательных расходов', getExpensesMonth(amount1, amount2));


let getAccumulatedMonth = function (a, b) {
    return (a - b);
}
console.log('Сумма после вычета всех расходов', getAccumulatedMonth(money, monthExp));


// Результат вызова функции getAccumulatedMonth
let accumulatedMonth = getAccumulatedMonth();

// Подсчитывает за какой период будет достгнута цель
let getTargetMonth = function () {
    return mission / accumulatedMonth();
};

budgetDay = accumulatedMonth / 30;

