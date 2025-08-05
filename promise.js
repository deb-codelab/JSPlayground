
function orderPizza(flavor) {
  return new Promise((resolve, reject) => {

    console.log('Step-1: ', `🤤 Ordering ${flavor} pizza...`); // 1st

    const availableFlavors = ['margherita', 'paneer', 'veggie'];

    if (availableFlavors.includes(flavor)) {
        console.log('Step-2: ', `🍽️  Preparing your ${flavor} pizza...`); // 2nd
        setTimeout(() => {
            resolve(`🍕 Your ${flavor} pizza is ready!`);
        }, 5000); // Simulate 5-sec delay
        console.log('Step-3: ', `Please enjoy your complimentary Diet Coke meanwhile.`); // 3rd
    } else {
        reject(`🥲 Sorry, we don’t have ${flavor} flavor.`);
    }
    
  });
}

orderPizza('margherita') // ASYNC: Starts a 5-second timer
  .then(message => {
    console.log('Step-5: ', message); // 5th Will run AFTER 5 seconds
  })
  .catch(error => {
    console.log('Error:', error);
  });

// Meanwhile, have a cold drink (Synchronous)
console.log('Step-4: ', '🥤 Enjoying diet coke while waiting for pizza...'); // 4th SYNC: Runs instantly