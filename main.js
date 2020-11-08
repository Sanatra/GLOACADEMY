'use strict';

// Убираем рекламу --
const removeAds = document.querySelectorAll('.adv');
removeAds[0].remove();
// Убираем рекламу --



// Заменяем заднюю картинку --
const changeBg = document.querySelector('body');
changeBg.setAttribute('style', 'background-image: url(image/you-dont-know-js.jpg)');
// Заменяем заднюю картинку --



// Восстонавливаем порядок книг --
const changeOrder = document.querySelectorAll('.books'),
  elems = document.querySelectorAll('.book');

// Выводим что-бы увидеть индекс
console.log(elems);
console.log(changeOrder);

// Само построение
changeOrder[0].prepend(elems[1]);
changeOrder[0].append(elems[3]);
changeOrder[0].append(elems[5]);
changeOrder[0].append(elems[2]);
// Восстонавливаем порядок книг --


// Добавление 8 главы, в 6 книгу --
const addChapter = document.querySelectorAll('.books'),
  elemsAdd = document.querySelectorAll('.book'),
  liElemsFind = document.querySelectorAll('li');

// Клонируем
const liClone = liElemsFind[54].cloneNode(true);

// Выводим что-бы увидеть индекс
console.log(elemsAdd);
console.log(addChapter);
console.log(liElemsFind);

// Добавляем 8 главу
elemsAdd[5].append(liClone);
liClone.textContent = 'Глава 8: За пределами ES6';
// Добавление 8 главы, в 6 книгу --

// Восстонавливаем порядок глав во 5 и, 5 книге --
const restoring = document.querySelectorAll('.books'),
  restoringElems = document.querySelectorAll('.book'),
  restoringElemsFind = document.querySelectorAll('li');
// Выводим что-бы увидеть индекс
console.log(restoringElems);
console.log(restoring);
console.log(restoringElemsFind);

// В 2 книге восстановливаем порядок
restoringElems[1].append(restoringElemsFind[12]);
restoringElems[1].append(restoringElemsFind[14]);
restoringElems[1].append(restoringElemsFind[10]);
restoringElems[1].append(restoringElemsFind[11]);
restoringElems[1].append(restoringElemsFind[13]);
restoringElems[1].append(restoringElemsFind[15]);
restoringElems[1].append(restoringElemsFind[8]);
restoringElems[1].append(restoringElemsFind[16]);
// В 2 книге восстановливаем порядок

// В 5 книге восстонавливаем порядок
restoringElems[4].append(restoringElemsFind[39]);
restoringElems[4].append(restoringElemsFind[40]);
restoringElems[4].append(restoringElemsFind[38]);
restoringElems[4].append(restoringElemsFind[42]);
restoringElems[4].append(restoringElemsFind[43]);

restoringElems[4].append(restoringElemsFind[41]);
restoringElems[4].append(restoringElemsFind[44]);
restoringElems[4].append(restoringElemsFind[46]);
// В 5 книге восстонавливаем порядок

// Восстонавливаем порядок глав во 5 и, 5 книге --
