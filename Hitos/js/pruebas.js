// Pruebas de tu proyecto. Se ven al abrir pruebas.html.
//
// Funciones que tienes (están en mini-pruebas.js):
//   prueba(nombre, fn)               define una prueba
//   igual(obtenido, esperado)        números, textos, arrays, Map y Set
//   casiIgual(obtenido, esperado)    decimales (2 por defecto)
//   lanzaError(fn, mensaje)          comprueba que se lanza un error con ese mensaje
//
// Ejemplos (cámbialos por los de tu proyecto):
//
// prueba("buscarPorId devuelve el libro 3", () => {
//   igual(buscarPorId(3)[L_TITULO], "Niebla");
// });
//
// prueba("los géneros salen sin repetir", () => {
//   igual(generos(libros), new Set(["poesía", "novela"]));
// });
//
// prueba("prestar falla si el socio no existe", () => {
//   lanzaError(() => prestar(99, 1), "Socio no encontrado");
// });
//
// Necesitas 10 pruebas o más, 2 de ellas de tu regla personal.


//Prueba de la conversion de texto a numero
//1.Comprueba que que un texto con coma pasa a numero que javascript entiende
prueba("Numero convierte '2,50' en 2.5", () => {
    igual(Numero("2,50"), 2.5);
});
//2.Lanza un error cuando el texto esta vacio
prueba("Numero lanza error con un valor vacío", () => {
    lanzaError(() => Numero(""), "Importe no válido");
});

//pruebas para la busqueda por id
prueba("buscarPorId devuelve el libro", () => {
    igual(buscarPorId(3)[Libro_titulo], "Niebla");
});
//Si el id no existe, devuelve undefined
prueba("buscarPorId devuelve undefined si no existe", () => {
    igual(buscarPorId(99), undefined);
});

//Pruebas de la filtracion por criterio
//vamos a hacer la prueba de filtar por un genero y que te aprezcan los libros de ese genero
prueba("libros_de_genero devuelve 3 libros de teatro", () => {
    igual(librosDeGenero("teatro").length, 3);
});

//Pruebas para la funcion de los libros ordenados
//Esta prueba comprueba que el orden de los libros es correcto empezando desde el elemento mas antiguo
prueba("librosOrdenados empieza por El Lazarillo de Tormes (1554)", () => {
    igual(librosOrdenados()[0][Libro_titulo], "El Lazarillo de Tormes");
});
//Esta prueba comprueba que los libros ordenados no cambie la original
prueba("librosOrdenados no modifica la lista original", () => {
    librosOrdenados();
    igual(libros[0][Libro_id], 1);
});

//Pruebas para la funcion de si hay algun libro anterior a un año
//Te dice si hay libro anteriores a 1600
prueba("LibroAnterior es true para 1600", () => {
    igual(LibroAnterior(1600), true);
});
//Te dice si hay un libro anterior a 1500
prueba("hayLibroAnteriorA es false para 1500", () => {
    igual(LibroAnterior(1500), false);
});

//Pruebas para la funcion que suma las fianzas de los libros prestados
//comprueba que la suma de todas las fianzas sea igual al resultado que en este caso es 16
prueba("totalFianzasPrestados suma los préstamos sin devolver", () => {
    casiIgual(totalFianzasPrestados(), 16);
});

//Pruebas para la funcion que comprueba que no se repitan los autores, y los da ordenados
//Comprueba si hay 9 autores distintos
prueba("autoresUnicos devuelve 9 autores", () => {
    igual(autoresUnicos().length, 9);
});

/*----Pruebas-HITO3---- */
//Pueba para la funcion de crear indice que en este ejemplo vamos a buscar el indice del socio
prueba("buscarSocio devuelve el socio 1", () => {
    igual(buscarSocio(1)[Socio_nombre], "Íñigo Núñez Peña");
});
//Prueba para ver si te da error cuando buscamos un numero de socio que no existe
prueba("buscarSocio devuelve no encontrado si no existe", () => {
    igual(buscarSocio(100), undefined);
});

//Prueba para la funcion titulosporgenero agrupa los libros del genero de teatro

prueba("titulosPorGenero agrupa los títulos de teatro", () => {
    igual(titulosPorGenero().get("teatro"), [
        "Bodas de sangre",
        "La casa de Bernarda Alba",
        "Luces de bohemia",
    ]);
});
//Prueba para com probar que con el set no se repiten los generos
prueba("Devuelve un Set sin repetir", () => {
    igual(generos(), new Set(["poesía", "novela", "teatro"]));
});

//Prueba para generador de ids que cada vez que se genere una de la id siguiente con la constante siguiente
prueba("crearGeneradorId da ids nuevas sin repetir", () => {
    const siguiente = crearGeneradorId(14);
    igual(siguiente(), 15);
    igual(siguiente(), 16);
});

//Esta prueba comprueba que la funcion crea dos id diferentes
prueba("dos generadores de ids son diferentes e independientes", () => {
    const a = crearGeneradorId(0);
    const b = crearGeneradorId(100);
    a();
    igual(b(), 101);
});
//prueba que muestra las filas que cumplen con la condicion de filtrarPor
prueba("Devuelve solo las filas que cumplen la condición", () => {
    igual(filtrarPor([[1], [2], [3]], (fila) => fila[0] > 1), [[2], [3]]);
});


/*----Pruebas del Hito 4----*/
//Regla personal: multa por retraso
prueba("Regla Personal: 4 días de retraso son 0,80 €", () => {
    igual(calcularMulta(4), 0.8);
});

prueba("Regla Personal: 10 días de retraso son 2,00 € (límite del primer tramo)", () => {
    igual(calcularMulta(10), 2);
});

prueba("Regla Personal: 12 días de retraso son 3,00 € (cambia de tramo)", () => {
    igual(calcularMulta(12), 3);
});

prueba("Regla Personal: 0 días de retraso son 0 €", () => {
    igual(calcularMulta(0), 0);
});

prueba("Regla Personal: unos días negativos lanzan error", () => {
    lanzaError(() => calcularMulta(-1), "Días de retraso no válidos");
});

//Alta: prestar
prueba("prestar añade un préstamo a la lista nueva", () => {
    const nueva = prestar(prestamos, 1, 3, 5, () => 14);
    igual(nueva.length, 14);
    igual(nueva[13], [14, 1, 3, 5, false]);
});

prueba("prestar no modifica la lista original", () => {
    prestar(prestamos, 1, 3, 5, () => 14);
    igual(prestamos.length, 13);
});

prueba("prestar falla si el socio no existe", () => {
    lanzaError(() => prestar(prestamos, 99, 3, 5, () => 14), "Socio no encontrado");
});

prueba("prestar falla si el libro ya está prestado", () => {
    lanzaError(() => prestar(prestamos, 1, 1, 5, () => 14), "Libro ya prestado");
});

//Baja: borrarPrestamo
prueba("borrarPrestamo quita el préstamo sin tocar la lista original", () => {
    const nueva = borrarPrestamo(prestamos, 2);
    igual(nueva.length, 12);
    igual(prestamos.length, 13);
});

prueba("borrarPrestamo falla si el id no existe", () => {
    lanzaError(() => borrarPrestamo(prestamos, 99), "Préstamo no encontrado");
});
