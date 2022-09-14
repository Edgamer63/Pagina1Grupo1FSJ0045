/*paso 1*/
var nombre = prompt("Ingresa tu nombre");
var num1 = prompt("Ingrese el primer número");
var num2 = prompt("Ingrese el segundo número");
/*paso 2*/
var suma = parseInt(num1)+parseInt(num2);
var resta = parseInt(num1)-parseInt(num2);
var multiplica = parseInt(num1)*parseInt(num2);
var division = parseInt(num1)/parseInt(num2);
/*paso 3*/
document.write(nombre+" el resultado de sumar "+num1+" + "+num2+" es "+suma+". <br>"); 
document.write(nombre+" el resultado de restar "+num1+" - "+num2+" es "+resta+". <br>"); 
document.write(nombre+" el resultado de multiplicar "+num1+" * "+num2+"es "+multiplica+".<br> ");
document.write(nombre+" el resultado de dividir "+num1+" / "+num2+" es"+division+".<br> ");
