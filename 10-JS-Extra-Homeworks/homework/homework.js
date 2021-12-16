// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let retorno = []
  let temp = []
  for(let clave in objeto){
    temp.push(clave);
    temp.push(objeto[clave]);
    retorno.push(temp);
    temp = [];
  }
  return retorno;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {};
  for(let i in string ){
    if(objeto[string[i]]){
      objeto[string[i]] = objeto[string[i]] + 1;      
    } else{
      objeto[string[i]] = 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusculas = '';
  let minusculas = '';
  let temporal = '';
  for(let i in s){
    temporal = s[i].toUpperCase();
    if(temporal === s[i]){
      mayusculas = mayusculas + s[i]
    } else{
      minusculas = minusculas + s[i];
    }
    temporal = '';
  }
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let retorno = '';
  let retorno2 = '';
  let palabra = "";
  for(let i in str){
     retorno = str[i] + retorno;
  }

  for(let j = retorno.length - 1; j > -1; j--){
    if(retorno[j] === ' '){
      palabra = palabra + ' ';
      retorno2 = retorno2 + palabra;
      palabra = '';
    } else{
      palabra = retorno[j] + palabra;
    }
  }
  retorno2 = retorno2 + palabra; 
  return retorno2;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let temporal = '';
  let numeroTexto = numero.toString();
  for (let i = numeroTexto.length - 1; i > -1; i--){
    temporal = temporal + numeroTexto[i];
  }

  if(temporal === numeroTexto){
    return 'Es capicua'
  } else{
    return 'No es capicua'
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let retorno = '';

  for (let i in cadena){
    if (cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c'){
      continue;
    } else{
      retorno = retorno + cadena[i];
    }
  }

  return retorno;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function comparacion(a, b){
    if (a.length < b.length){
      return -1;
    } else {
      return 1;
    }

    return 0;
  }
  return arr.sort(comparacion);
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let retorno = [];

  for (let i in arreglo1){
    for (let j in arreglo2){
      if (arreglo1[i] === arreglo2[j]){
        retorno.push(arreglo1[i])
      }
    }
  }

  return retorno;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

