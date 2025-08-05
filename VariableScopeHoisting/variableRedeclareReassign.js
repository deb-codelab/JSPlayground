function redeclare() {

    const constName = "Hello"; 
    let      letNum = 123;
    var      varNum = 567;

    // varNum can be redeclared within same scope level
    var varNum = 121;
    console.log("Re-declare varNum:", varNum); //121

    // ERROR: Identifier 'letNum' has already been declared
    // let letNum = 235; 
    // console.log(letNum);

    // ERROR: Identifier 'constName' has already been declared
    // const constName = "World";
    // console.log(constName);
}

function reassign() {

    var      varNum = 200;
    let      letNum = 100;
    const constName = "Good"; 

    varNum = 250;
    console.log("Re-assign varNum:", varNum); //250

    letNum = 150; 
    console.log("Re-assign letNum:", letNum); //150

    // ERROR: TypeError: Assignment to constant variable.
    // constName = "Morning";
    // console.log("Re-assign constName:", constName);
}

redeclare();
reassign();