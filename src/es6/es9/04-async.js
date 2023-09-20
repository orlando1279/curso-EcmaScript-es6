async function anothergenerator() {
      yield await Promise.resolve(1);
      yield await Promise.resolve(2);
      yield await Promise.resolve(3);
  }
  
  const other = anothergenerator();
  other.nex().then(Response => console.log(Response.value));
  other.nex().then(Response => console.log(Response.value));
  other.nex().then(Response => console.log(Response.value));
  console.log('Hello');

  async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
  }
  
  const names = arrayOfNames('Orlando', 'David', 'Ana');
  console.log('After');
    
  