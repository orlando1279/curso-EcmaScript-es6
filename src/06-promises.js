const anotherFunction = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve("Se ha resuelto la promesa");
      } else {
        reject("Se ha rechazado la promesa");
      }
    })
}
anotherFunction()
    .then(Response => console.log(Response))
    .catch(err => console.log(err));
  