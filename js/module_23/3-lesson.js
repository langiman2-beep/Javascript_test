//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// console.log(fruts.map((item) => item.name));

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// 1-варіант
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// 2-варіант(по прикладу урока)
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 !== 0) continue;
//   {
//     console.log(i);
//   }
// }

// 3-варіант
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }

// let i = 0;

// 1-варіант
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

// 2-варіант(коротший)
// while (i < 5) console.log("цифра", i++, "!");

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let value;

// do {
//   value = prompt("Введіть число більше 100");
// } while (value !== null && value !== "" && value <= 100);

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// const totalAge = girls.reduce((sum, girl) => sum + girl.age, 0);

// const averageAge = totalAge / girls.length;

// console.log(averageAge);
