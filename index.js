/*
function isReverseInt(num1, num2) {

    let str1 = num1.toString();
    let str2 = num2.toString().split('').reverse().join('');

    return str1 === str2;
}

console.log(isReverseInt(123,321));
*/












/*********** Usar parametros en funciones ***********/
/*
const suma = (num1,num2)=>{
    let res = num1 + num2
    console.log(res);
};
suma(20, 100) // EL RESULTADO DE ESTA OPERACIÓN ES 120

suma(20,20) // EL RESULTADO DE ESTA OPERACIÓN ES 40

suma(80,80)// EL RESULTADO DE ESTA OPERACIÓN ES 160

const resta = (num1,num2)=>{
    let res = num1 - num2
    console.log(res);
};
resta(100, 50) // EL RESULTADO DE ESTA OPERACIÓN ES 50
resta(50, 50)// EL RESULTADO DE ESTA OPERACIÓN ES 0
resta(80, 50)// EL RESULTADO DE ESTA OPERACIÓN ES 30

*/




function sumar (a,b){
    let suma = a + b 
    console.log(suma);
}
sumar(10,10)



const sumarMas = (a,b)=>{
    let sumaMas = a + b
    console.log(sumaMas);
}
sumarMas(20,20)