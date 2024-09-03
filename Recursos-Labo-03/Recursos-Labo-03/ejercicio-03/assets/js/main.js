const calculateFactorial = (a) => {
    var a = n;
    var i = n-1;
    while(i > 1){
        a*=i;
        i--;
    }
    alert("El factorial de" + a + "es: " + n);    
}

const requestNumber = () => {
    a = parseInt(window.prompt("Introduzca un número: "));
    calculateFactorial(a);
}

const main = () => {
    requestNumber();
}

main();
