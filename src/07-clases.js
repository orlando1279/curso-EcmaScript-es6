class user{
    greeting() {
      return 'Hello';
  }
  };
  const gndx = new User();
  console.log(gndx.greeting());
  const developer = new user()
  console.log(developer.greeting());
  
  class user{
  constructor() {
    console.log("Nuevo Ususario");
  }
  greeting() {
    return 'Hello';
  }
  }
  const David = new user();
  
  class user{
    constructor(name) {
    this.name = name;
    }
    speack() {
      return 'Hello';
    }
    greeting() {
        return '${this.speack()} ${this.name}';
  }
  }
  const orlando = new user('Orlando');
  console.log(orlando.greeting());
  
  class user {
    constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speack() {
    return 'Hello';
  }
  greeting() {
    return '${this.speack()} ${this.name}';
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
  }
  const developer1 = new user('David', 15);
  console.log(developer1.uAge);
  console.log(developer1.uAge = 20);

  