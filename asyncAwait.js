function orderPizza(flavor) {
  return new Promise((resolve, reject) => {

    console.log('Step-1: ', `Ordering ${flavor} pizza...`); // 1st

    const availableFlavors = ['margherita', 'paneer', 'veggie'];

    if (availableFlavors.includes(flavor)) {
        console.log('Step-2: ', `Preparing your ${flavor} pizza...`); // 2nd
        setTimeout(() => {
            resolve(`Your ${flavor} pizza is ready!`);
        }, 5000); // Simulate 5-sec delay
        console.log('Step-3: ', `Please enjoy your complimentary Diet Coke meanwhile.`); // 3rd
    } else {
        reject(`Sorry, we don’t have ${flavor} pizza.`);
    }

  });
}

// 👇 Async function to use await
async function runPizzaOrder() {
  try {
    const flavor = 'margherita';

    const pizzaPromise = orderPizza(flavor); // kicks off async operation

    console.log('Step-4: ', 'Enjoying cold drink while waiting for pizza...'); // 4th, runs instantly

    const message = await pizzaPromise; // waits for 5 sec, then continues
    console.log('Step-5: ', message); // 5th
  } catch (error) {
    console.log('Error:', error);
  }
}

runPizzaOrder();