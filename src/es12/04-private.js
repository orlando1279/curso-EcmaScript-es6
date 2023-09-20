  class user {
    constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  #speack() {
    return 'Hello';
  }
  greeting() {
    return '${this.speack()} ${this.name}';
  }
  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
  }
  const developer1 = new user('David', 15);
  console.log(developer1.uAge);
  console.log(developer1.uAge = 20);