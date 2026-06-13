// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// alert(1 > 0);
// alert(0 > 1);
// alert(-3 > 0);
// це на екран, щоб зручніше переглянути відразу

// let a = 1;
// console.log(a > 0);

// a = 0;
// console.log(a > 0);

// a = -3;
// console.log(a > 0);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let b ;

// b = "test";
// console.log(b === "test");

// b = "qwerty";
// console.log(b === "test");

// b = true;
// console.log(b === "test");

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// 1 - й варіант

// let c = 1;
// console.log(c > 10 ? c - 5 : c + 5);

// c = 10;
// console.log(c > 10 ? c - 5 : c + 5);

// c = 13;
// console.log(c > 10 ? c - 5 : c + 5);

// 2-ой варіант

// let c = 1;
// if (c > 10) {
//   console.log(c - 5);
// } else {
//   console.log(c + 5);
// }

// c = 10;
// if (c > 10) {
//   console.log(c - 5);
// } else {
//   console.log(c + 5);
// }

// c = 13;
// if (c > 10) {
//   console.log(c - 5);
// } else {
//   console.log(c + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let monthNumber = 12;

// switch (monthNumber) {
//   case 1:
//     console.log("Січень");
//     break;

//   case 2:
//     console.log("Лютий");
//     break;

//   case 3:
//     console.log("Березень");
//     break;

//   case 4:
//     console.log("Квітень");
//     break;

//   case 5:
//     console.log("Травень");
//     break;

//   case 6:
//     console.log("Червень");
//     break;

//   case 7:
//     console.log("Липень");
//     break;

//   case 8:
//     console.log("Серпень");
//     break;

//   case 9:
//     console.log("Вересень");
//     break;

//   case 10:
//     console.log("Жовтень");
//     break;

//   case 11:
//     console.log("Листопад");
//     break;

//   case 12:
//     console.log("Грудень");
//     break;

//   default:
//     console.log("Невірне число");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
// Зробив спочатку так, але встиг прочитати рекомендацію
// let number = 456;
// let text = String(number);
// console.log(parseInt(text[0]) + parseInt(text[1]) + parseInt(text[2]));

let number = prompt("Введіть тризначне число");

let sum = parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2]);

alert(`Сума цифр числа ${number} дорівнює: ${sum}`);
