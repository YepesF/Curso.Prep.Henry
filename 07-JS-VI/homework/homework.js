// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  let retorno = '';
  for(i = 0; i  < nombre.length; i++){
    if (i === 0){
      retorno = retorno + nombre[i].toUpperCase();
    } else{
      retorno = retorno + nombre[i];
    }
  }
  return retorno;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  function Sumar (acc, elemento){
    return acc + elemento;
  }

  const resultado = numeros.reduce(Sumar);
  
  cb(resultado);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  function Recorrer (elemento){
    cb(elemento);
  }

  array.forEach(Recorrer);
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  function Iterar (elemento){
    return cb(elemento);
  }

  let array2 = array.map(Iterar);

  return array2;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  /*function Filtrar (elemento){
    if (elemento[0] === 'a'){
      return elemento;
    }
  }

  let array2 = array.map(Filtrar);
  return array2;*/
  var array2 = [];
  for (i = 0; i < array.length; i++){
    if (array[i][0] === 'a'){
      array2.push(array[i])
    }
  }

  return array2;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
