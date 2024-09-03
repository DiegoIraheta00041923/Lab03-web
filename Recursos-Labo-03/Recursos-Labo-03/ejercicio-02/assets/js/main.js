var a;
var b;

const plus = (a,b) => {
    return a+b;
};
const subtract = (a,b) =>{
    return a-b;
} ;
const multiply = (a,b) =>{
    return a*b;
} ;
const split = (a,b) => {
    return a/b;
};
const requestNumber = () => {
    a = parseInt(window.prompt("Introduzca un número: "));
    b = parseInt(window.prompt("Introduzca otro número: "));
    if(isNaN(a) || isNaN(b)){
        alert("Introduzca numeros correctos");
        requestNumber();
    }
}

const selectOperation = () => {
    var option = window.prompt("Introduce una opción: \n 1. Suma \n 2. Resta \n 3. Multiplicación \n 4. Division ")
    console.log("El numero es: " + option);
    switch(parseInt(option)){
        case 1:
            alert("Resultado: " + plus(a,b));
            break;
        case 2:
            alert("Resultado: " + subtract(a,b));
            break;
        case 3:
            alert("Resultado: " + multiply(a,b));
            break;
        case 4:
            alert("Resultado: " + split(a,b));
            break;
        default:
            alert("No se pudo efectuar");
            break;           
    }
};

const main = () => {
    requestNumber();
    selectOperation();
}

main();
