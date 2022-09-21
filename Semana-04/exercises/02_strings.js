console.log('\n --EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a:');
var txt2a = 'este texto estaba en minúscula';
var upperCase = txt2a.toUpperCase();
console.log(upperCase);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n Exercise 2.b:');
var txt2b = 'cinco más cinco es diez';
var part2b = txt2b.substring(0, 5);
console.log(part2b);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('\n -Exercise 2.c:');
var txt2c = 'estas son las ultimas tres letras';
var part2c = txt2c.substring(txt2c.length - 3);
console.log(part2c);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('\n -Exercise 2.d:');
var txt2d = 'tHIS IS A STRING WRITTEN IN ENGLISH';
txt2d = txt2d.substring(0, 1).toUpperCase() + txt2d.substring(1).toLowerCase();
console.log(txt2d);  

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('\n -Exercise 2.e:');
var txt2e = 'string con algunos espacios';
var blank = txt2e.indexOf(' ');
console.log(blank);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('\n -Exercise 2.f:');
var txt2f = 'The article is written in a chaotic manner and unfortunately its incomprehensibility does not let me summarise it';
var word1Position = txt2f.indexOf('unfortunately');
var word1_2f = txt2f.slice(47, 48).toUpperCase() + txt2f.slice(48, 60);
var word2Position = txt2f.indexOf('incomprehensibility');
var word2_2f = txt2f.slice(65, 66).toUpperCase() + txt2f.slice(66, 84);
var bothWords = word1_2f + ' ' + word2_2f;
console.log(bothWords);

