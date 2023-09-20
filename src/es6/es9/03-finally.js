const anotherFunction = () => {
    return new Promise((resolve, reject) => {
      if (false) {
        resolve("Hey");
      } else {
        reject("Wooooops!");
      }
    })
  }
  
anotherFunction()
    .then(Response => console.log(Response))
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));
  