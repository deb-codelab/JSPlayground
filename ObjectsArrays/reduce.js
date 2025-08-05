//reduce() to reduce the elements of an array to a single value


function totalPrice() {
    const price = [21.31, 11.10, 10.53, 15.32];
    var total = price.reduce(sum); 
    console.log(`Total price $${total}`); // Total price $58.26
}

function totalPeremeter() {
    const peremeter = [23, 11, 10, 15, 25];
    var total = peremeter.reduce(sum);
    console.log(`Total perimeter of the polygon ${total.toFixed(2)} cm`); // Total perimeter of the polygon 84.00 cm
}

function totalCredit() {
    const debts = [10, 50.5, 35];
    var total = debts.reduce(diff); //
    console.log(`Total debt $${total.toFixed(2)}`); // Total debt $-75.50/-
}

function highestLowestGrade() {
    const grades = [55, 25, 73, 90];

    var max = grades.reduce(getMax);
    var min = grades.reduce(getMin);

    // Total highest score 90.00 and lowest score 25.00
    console.log(`Total highest score ${max.toFixed(2)} and lowest score ${min.toFixed(2)}`);
}

// accumulator: The sum of all the previous elements in array
// element:     The next element in the array
function sum(accumulator, element) {
    return accumulator + element;
}

function diff(accumulator, element) {
    return accumulator - element;
}

function getMax(acc, el) {
    return Math.max(acc, el);
}

function getMin(acc, el) {
    return Math.min(acc, el);
}

totalPrice();
totalPeremeter();
totalCredit();
highestLowestGrade();