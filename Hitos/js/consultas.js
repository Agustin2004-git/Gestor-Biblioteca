// Hito 2 · Consultas
//
// Al menos 6 funciones:
//   - filtrar por un criterio
//   - buscar por id
//   - ordenar por dos criterios
//   - comprobar una condición (some o every)
//   - totalizar con reduce
//   - obtener una lista sin repetidos
// Ninguna modifica las listas originales.
// Para leer un dato de una fila, usa tus constantes: libro[L_TITULO], no libro[1].
//

//1.Funcion que convierte un importe de texto en numero
/**
 * Convierte un texto con coma decimal ("2,50") en número.
 * @param {string|number} texto  Valor a convertir
 * @returns {number} El valor como número
 * @throws {Error} Si el valor no es un número válido
 */
function Numero(texto) {
    const limpio = String(texto).trim().replace(",", ".");
    const numero = Number(limpio);
    if (limpio === "" || Number.isNaN(numero)) {
        throw new Error("Importe no válido");
    }
    return numero;
}

//2.Funcion que reciba un id y devuelva una fila o una columna
/**
 * Busca un libro por su id.
 * @param {number} id  Id del libro buscado
 * @returns {Array|undefined} La fila del libro, o undefined si no existe
 */
function buscarPorId(id) {
    return indiceLibros.get(id);

}
/**
 * Busca un socio por su id usando el índice Map.
 * @param {number} id  Id del socio
 * @returns {Array|undefined} La fila del socio
 */
function buscarSocio(id) {
    return indiceSocios.get(id);
}

/*----HITO3---- */
//Funcion de orden  superior, una funcion que reciba otra como parametro
/**
 * Función de orden superior: filtra una lista con la condición que reciba.
 * @param {Array[]} lista  Filas a filtrar
 * @param {(fila: Array) => boolean} condicion  Devuelve true si la fila se queda
 * @returns {Array[]} Filas que cumplen la condición
 */
function filtrarPor(lista, condicion) {
    return lista.filter(condicion);
}

//3.filtrar por un criterio
/**
 * Devuelve los libros de un género.
 * @param {string} genero  Género buscado
 * @returns {Array[]} Libros de ese género
 */
function librosDeGenero(genero) {
    return filtrarPor(libros, (libro) => libro[Libro_genero] === genero);
}


//4.Funcion que ordena por dos criterios que en este caso va a ser por la primera letra y el año
/**
 * Devuelve los libros ordenados por año y, si empatan, por título.
 * No modifica la lista original (trabaja sobre una copia).
 * @returns {Array[]} Copia ordenada de los libros
 */
function librosOrdenados() {
    return [...libros].sort(
        (a, b) => a[Libro_anio] - b[Libro_anio] || a[Libro_titulo].localeCompare(b[Libro_titulo])
    );
}

//5.compruebo la condicion con some y la funcion comprueba si hay algun libro anterior al año
/**
 * Comprueba si hay algún libro anterior a un año.
 * @param {number} anio  Año límite
 * @returns {boolean} true si al menos un libro es anterior a ese año
 */
function LibroAnterior(anio) {
    return libros.some((libro) => libro[Libro_anio] < anio);
}

//6.Totalizar con reduce esta funcion me va asumar las fianzas de los libros prestados
/**
 * Suma las fianzas de los libros prestados (préstamos sin devolver).
 * @returns {number} Total de fianzas, redondeado a 2 decimales
 */
function totalFianzasPrestados() {
    const total = prestamos.reduce((suma, prestamo) => {
        if (prestamo[Prestamo_devuelto] === false) {
            const libro = buscarPorId(prestamo[Prestamo_libro_id]);
            if (libro !== undefined) {
                return suma + Numero(libro[Libro_fianza]);
            }
        }
        return suma;
    }, 0);
    return Math.round(total * 100) / 100;
}

//7.Obtener una lista sin repetidos esta funcion me va a devolver los autores sin repetir, ordenados y sin vacios
/**
 * @returns {string[]} Autores únicos ordenados alfabéticamente
 */
function autoresUnicos() {
    const autores = [];
    for (let i = 0; i < libros.length; i++) {
        const autor = libros[i][Libro_autor];
        if (autor && !autores.includes(autor)) {
            autores.push(autor);
        }
    }
    return autores.sort((a, b) => a.localeCompare(b));
}
/*----HITO3---- */
//creo un map id
/**
 * Crea un índice id de fila en una lista de filas.
 * @param {Array[]} lista  Filas de datos
 * @param {number} posId  Posición que tiene la columna en cada fila
 * @returns {Map<number, Array>} map es el id como clave y fila como valor
 */
function crearIndice(lista, posId) {
    return new Map(lista.map((fila) => [fila[posId], fila]));
}
//Map para lista principal que es libros
const indiceLibros = crearIndice(libros, Libro_id);
//Map para lista de personas que es socios
const indiceSocios = crearIndice(socios, Socio_id);

/**
 * Agrupa los títulos de los libros por género.
 * @returns {Map<string, string[]>} género → lista de títulos
 */
function titulosPorGenero() {
    return libros.reduce((mapa, libro) => {
        const genero = libro[Libro_genero];
        if (!mapa.has(genero)) {
            mapa.set(genero, []);
        }
        mapa.get(genero).push(libro[Libro_titulo]);
        return mapa;
    }, new Map());
}

/**
 * Devuelve los géneros distintos de la lista de libros.
 * @returns {Set<string>} Géneros sin repetir
 */
function generos() {
    return new Set(libros.map((libro) => libro[Libro_genero]));
}

/**
 * Crea un generador de ids que recuerda el último id dado.
 * @param {number} ultimo  Último id que existe
 * @returns {() => number} Función que devuelve el siguiente id cada vez que se llama
 */
function crearGeneradorId(ultimo) {
    let actual = ultimo;
    return () => {
        actual++;
        return actual;
    };
}









