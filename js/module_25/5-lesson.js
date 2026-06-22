// -1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentTemplate = {
//   name: "Ім'я",
//   specialty: "Спеціальність",
//   averageGrade: 0,
//   missedClasses: 0,

//   showInfo() {
//     console.group(`Ім'я: ${this.name}`);
//     console.log(`Спеціальність: ${this.specialty}`);
//     console.log(`Середній балл: ${this.averageGrade}`);
//     console.log(`Пропущено занять: ${this.missedClasses}`);
//     console.groupEnd();
//   },
// };

// const student1 = {
//   name: "Іван",
//   specialty: "Єлектрик",
//   averageGrade: 4.8,
//   missedClasses: 2,
// };

// const student2 = {
//   name: "Ганна",
//   specialty: "Поварник",
//   averageGrade: 4.9,
//   missedClasses: 0,
// };

// const student3 = {
//   name: "Олег",
//   specialty: "Зварник",
//   averageGrade: 4.2,
//   missedClasses: 7,
// };

// Варіант 1: CALL

// studentTemplate.showInfo.call(student1);

// Варіант 2: APPLY

// studentTemplate.showInfo.apply(student2);

// Варіант 3: BIND

// const showOlegInfo = studentTemplate.showInfo.bind(student3);
// showOlegInfo();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const infoDictionary = {
//   showDefinition() {
//     alert(`${this.title}: ${this.definition}`);
//   },
// };

// const htmlData = {
//   title: "HTML",
//   definition:
//     "Это язык гипертекстовой разметки, который создает структуру и каркас веб-страницы.",
// };

// const cssData = {
//   title: "CSS",
//   definition:
//     "Это каскадные таблицы стилей, которые отвечают за внешний вид, цвета и дизайн страницы.",
// };

// const htmlButton = document.querySelector("#html-btn");
// const cssButton = document.querySelector("#css-btn");

// htmlButton.addEventListener(
//   "click",
//   infoDictionary.showDefinition.bind(htmlData),
// );
// cssButton.addEventListener(
//   "click",
//   infoDictionary.showDefinition.bind(cssData),
// );

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// function createShop() {
//   return function (productName, pricePerKg, weight) {
//     const totalPrice = pricePerKg * weight;

//     const formattedPrice = totalPrice.toFixed(2);

//     return `Товар: ${productName}, Стоимость: ${formattedPrice} грн`;
//   };
// }

// const calculateOrder = createShop();

// console.log(calculateOrder("banana", 30, 4.5));
// console.log(calculateOrder("cherry", 58, 1.3));
// console.log(calculateOrder("orange", 89, 3.4));
