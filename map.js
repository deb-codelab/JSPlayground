// Works like a foreach and returns in the array format.

function main() {
    const arr   = [3, 5, 10];
    let squares = arr.map(square);
    let cubes   = arr.map(cube);

    const name = ['John', 'doe'];
    let names   = name.map(upperCase);

    console.log(`Squares of the elements in the given array [${arr}] is [${squares}]`);
    console.log(`Cubes of the elements in the given array [${arr}] is [${cubes}]`);
    console.log(`Names of the elements in the given array [${name}] is converted to upercase [${names}]`);
}

function square(n) {
    return Math.pow(n, 2);
}

function cube(n) {
    return Math.pow(n, 3);
}

function upperCase(el){
    return el.toUpperCase();
}

main();