// //Asynchronous; 202 notes
// const shoppingList = ['apples', 'biscuits', 'cabbage', 'dip'];
// const isCode200 = () => Math.random() >= 0.5;

// function getShoppingList() {
//   return new Promise((resolve, reject) => { //getShoppingList returns a promise, mocking a network call that has some delay to it, so it cant return data right away
//     setTimeout(() => {
//       if (isCode200()) {
//         resolve(shoppingList); //similar to a return stmt
//       } else {
//         reject('There was a problem with the server, please try again.');
//       }
//     }, 500);
//   });
// }

// getShoppingList()
//   .then(data => console.log(data))
//   .catch(err => console.error(`ERR: ${err}`));


//Asynchronous with asynch, await; 203 notes
const shoppingList = ['apples', 'biscuits', 'cabbage', 'dip'];
const isCode200 = () => Math.random() >= 0.5;

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isCode200()) {
        resolve(shoppingList);
      } else {
        reject('There was a problem with the server, please try again.');
      }
    }, 500);
  });
}

async function getShoppingList() {
  console.log('initiating async call...');
  const result = await getData().catch(err => console.log(`ERR: ${err}`));
  console.log(result);
}

getShoppingList();
