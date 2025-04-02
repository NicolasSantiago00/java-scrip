function proximoEnLaFila(arreglo, elemento) {
    arreglo.push(elemento);         // Agrega el número al final
    let eliminado = arreglo.shift(); // Elimina el primer elemento
    return eliminado;                // Retorna el elemento eliminado
  }
  let miArreglo = [1, 2, 3, 4, 5];
  console.log(proximoEnLaFila(miArreglo, 6)); // Salida: 1
  console.log(miArreglo);                    // Salida: [2, 3, 4, 5, 6]
  