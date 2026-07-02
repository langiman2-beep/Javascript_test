function Calculator() {
  this.read = function () {
    this.value1 = +prompt("Введи перше число:", 0);
    this.value2 = +prompt("А тепер введи друге число:", 0);
  };

  this.sum = function () {
    return this.value1 + this.value2;
  };

  this.mul = function () {
    return this.value1 * this.value2;
  };
}

const myCalc = new Calculator();

myCalc.read();

console.log("Сума чисел:", myCalc.sum());
console.log("Результат множення:", myCalc.mul());
