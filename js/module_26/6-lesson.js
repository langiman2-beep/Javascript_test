class Abonent {
  constructor(options) {
    this.name = options.name;
  }

  firstName = "";
  phoneNumber = "";

  set name(newInfo) {
    const dataRow = newInfo.split(" ");
    this.firstName = dataRow[0];
    this.phoneNumber = dataRow[1];
  }

  get name() {
    return `Абонент: ${this.firstName}, Телефон: ${this.phoneNumber}`;
  }
}

const user1 = new Abonent({
  name: "Іван +380670000001",
});

const user2 = new Abonent({
  name: "Петр +380630000002",
});

const user3 = new Abonent({
  name: "Ганна +380950000003",
});

console.log(user1.name);
console.log(user2.name);
console.log(user3.name);

// наслідування

class VipAbonent extends Abonent {
  constructor(options) {
    super(options);
    this.discount = options.discount;
  }

  set name(newInfo) {
    super.name = newInfo;
  }

  get name() {
    return `${super.name}, Скидка: ${this.discount}% ⭐`;
  }
}

const vipUser = new VipAbonent({
  name: "Люська +380991112233",
  discount: 15,
});

console.log(vipUser.name);
