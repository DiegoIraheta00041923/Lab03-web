const calculateFactorial = (a) => {
    var n = a;
    var i = n-1;
    while(i > 1){
        a*=i;
        i--;
    }
    alert("El factorial de" + n + "es: " + a);    
}

const requestNumber = () => {
    a = parseInt(window.prompt("Introduzca un número: "));
    calculateFactorial(a);
}

const main = () => {
    requestNumber();
}

main();
