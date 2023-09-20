const Promise = new Promise ((resolve, reject) => reject("Reject")); 
const Promise2 = new Promise ((resolve, reject) => resolve("Resolve")); 
const Promise3 = new Promise ((resolve, reject) => resolve("Resolve2"));
    
Promise.allSettled([Promise1,Promise2,Promise3])
    .then(Response => console.log(Response));
   