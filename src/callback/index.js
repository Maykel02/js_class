/* funciones callback */

/* primera funcion */
function sum(num1, num2){
    return num1 + num2;
}

/* segunda funcion callback que llama a la primera funcion */
function calc(num1, num2, sumNumbers){
    return sumNumbers(num1, num2);
}

/* llamado al callback */
console.log(calc(2, 2, sum))

/* funcion settimeout que es un callback  */
setTimeout(function (){
    console.log('Hola JavaScript');
},5000)


/* otra forma de llamar a una funcion settimeout */
function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 5000, 'Maria');

