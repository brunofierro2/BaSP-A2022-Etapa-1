console.log('\n --EXERCISE 4: IF ELSE');

// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

console.log('-Exercise 4.a:');
var randomNumber = Math.random();
if (randomNumber >= 0.5){
  window.alert(randomNumber + ' is Greater than 0,5');
}else{
  window.alert(randomNumber + ' is Lower than 0,5');
}

// b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:

console.log('-Exercise 4.b:');
var Age = 21;
if (Age < 2){
  window.alert('Bebe');
}else if (Age > 1 && Age < 13){
  window.alert('Niño');
}else if (Age > 12 && Age < 20){
  window.alert('Adolescente');
}else if (Age >19 && Age < 31){
  window.alert('Joven')
}else if (Age > 30 && Age < 61){
  window.alert('Adulto')
}else if (Age > 60 && Age < 76){
  window.alert('Adulto mayor')
}else{
  window.alert('Anciano')
}