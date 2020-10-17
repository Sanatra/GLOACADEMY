'use strict';


let money = (23253523);
console.log(money);



let income = '12378956';


let addExpenses = 'Интернет,Квартира,Коммунальные услуги';
console.log(addExpenses.length);
addExpenses = addExpenses.toLocaleLowerCase();
console.log(addExpenses.split(', '));


let deposit = Boolean(5 === 5);


let mission = (200000);


let period = (5);
console.log('\tПериод равен:', period, 'месяцев\n', '\tЦель заработать:', mission, '$');

let budgetDay = (50000 / 30);
console.log(budgetDay);

// Lesson 3
money = +prompt('Ваш месячный доход?');
console.log('Ваш бюджет на месяц:', money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(', '));

deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

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

let budgetMonth;
budgetMonth = money - (amount2 + amount1);
console.log('Оствшиеся сумма после вычета расходов:', budgetMonth);
budgetMonth = mission / budgetMonth;
console.log('Цель будет достигнута через:', Math.ceil(budgetMonth), 'месяца(ев)');


if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (1200 < budgetDay > 600) {
    console.log('У вас средний уровень дохода');
} else if (600 < budgetDay > 0) {
    console.log('К сожалению, у вас уровень дохода ниже среднего');
}
console.log('Ваш доход на день:',Math.floor(budgetDay));
//

