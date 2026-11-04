// Hito 1 · Datos
//
// Tres listas de registros relacionadas por id. Cada registro es un array (una «fila»)
// y unas constantes dicen qué dato hay en cada posición.
// La lista principal, con 15 registros o más.
// Incluye casos raros: un dato vacío, un precio o una nota con coma, un nombre con tildes.
//
// Ejemplo de la forma (cámbialo por tu dominio):
//
// // Qué guarda cada posición de un libro
// const L_ID = 0, L_TITULO = 1, L_AUTOR = 2, L_GENERO = 3, L_ANIO = 4, L_FIANZA = 5;
//
// const libros = [
//   [1, "Platero y yo", "Juan Ramón Jiménez", "poesía", 1914, "2,50"],
//   [2, "La colmena", "Camilo José Cela", "novela", 1951, "3"],
//   [3, "Niebla", "", "novela", 1914, "2,50"],
//   ...
// ];
//
// // Un préstamo guarda el id del libro y el id del socio: así se relacionan las listas
// const P_ID = 0, P_LIBRO = 1, P_SOCIO = 2, P_DIA = 3, P_DEVUELTO = 4;
//
// const prestamos = [
//   [1, 2, 1, 3, false],   // el socio 1 tiene el libro 2 desde el día 3
//   ...
// ];
//
// Hecho cuando console.table muestra las tres listas en la consola sin errores.
//El valor que tiene cada posición de libro
const Libro_id = 0;
const Libro_titulo = 1;
const Libro_autor = 2;
const Libro_genero = 3;
const Libro_anio = 4;
const Libro_fianza = 5;

const libros = [
    [1, "Platero y yo", "Juan Ramón Jiménez", "poesía", 1914, "2,50"],
    [2, "La colmena", "Camilo José Cela", "novela", 1951, 3],
    [3, "Niebla", "", "novela", 1914, 2.5],
    [4, "Rimas y leyendas", "Gustavo Adolfo Bécquer", "poesía", 1871, 2],
    [5, "La Regenta", , "novela", 1885, "3,50"],
    [6, "Marianela", "Benito Pérez Galdós", "novela", 1878, 2.5],
    [7, "Don Quijote de la Mancha", "Miguel de Cervantes", "novela", 1605, 4],
    [8, "Campos de Castilla", "", "poesía", 1912, 2],
    [9, "Bodas de sangre", "", "teatro", 1933, 2.5],
    [10, "La casa de Bernarda Alba", "Federico García Lorca", "teatro", 1945, 2.5],
    [11, "El árbol de la ciencia", "Pío Baroja", "novela", 1911, 3],
    [12, "Luces de bohemia", "Ramón María del Valle-Inclán", "teatro", 1920, "3"],
    [13, "Fortunata y Jacinta", "Benito Pérez Galdós", "novela", 1887, "4,50"],
    [14, "Romancero gitano", "Federico García Lorca", "poesía", 1928, 2],
    [15, "El Lazarillo de Tormes", "", "novela", 1554, 1.5],
    [16, "Nada", "Carmen Laforet", "novela", 1945, 3]
]

//El valor que tiene cada posicion de socio
const Socio_id = 0;
const Socio_nombre = 1;
const Socio_edad = 2;
const Socio_estado = 3;

const socios = [
    [1, "Íñigo Núñez Peña", 19, true],
    [2, "", 21, true],
    [3, "Lucía Fernández Gil", , true],
    [4, "", 22, false],
    [5, "Núria Ibáñez Roca", , true],
    [6, "Óscar Gómez Vidal", 20,]

];

//El valor que tiene cada posicion de prestamos
const Prestamo_id = 0;
const Prestamo_socio_id = 1;
const Prestamo_libro_id = 2;
const Prestamo_dia = 3;
const Prestamo_devuelto = 4;

const prestamos = [
    [1, 2, 1, 3, false],
    [2, 1, 2, , true],
    [3, 3, , 5,],
    [4, 4, 8, 6,],
    [5, 1, 5, 8, false],
    [6, 2, 9, , false],
    [7, 6, 13, 10,],
    [8, 5, 4, 11, true],
    [9, 2, 15, 30, false],
    [10, 5, 8, 13, true],
    [11, 4, 16, 3, true],
    [12, 3, 8, 20, false],
    [13, 6, 7, 5, false]

];

//mostrar tablas
console.table(libros);
console.table(socios);
console.table(prestamos);






