// Hito 4 · Regla personal y altas/bajas
//
// Mi regla personal (cópiala de tu ficha):
/*
Precio o importe escalonado

Multa por retraso en la devolución: 0,20 € por día durante los 10 primeros días y 0,50 € por cada día a partir del 11. calcularMulta(diasRetraso) devuelve el importe redondeado a 2 decimales.

Ejemplo: 4 días → 0,80 €. 10 días → 2,00 €. 12 días → 3,00 € (2,00 + 1,00). 0 días → 0 €.

Válido si: Funciona dentro de tu proyecto, en js/regla.js, y tiene al menos 2 pruebas en js/pruebas.js: una del caso normal y otra del límite o del error.
*/
// Aquí van también las altas y bajas en memoria. Validan los datos
// y lanzan errores con throw, por ejemplo:
//   throw new Error("Socio no encontrado");


/**
 * Alta de un préstamo. No modifica la lista que recibe: devuelve una nueva.
 * @param {Array[]} listaPrestamos  Lista actual de préstamos
 * @param {number} idSocio  Id del socio
 * @param {number} idLibro  Id del libro
 * @param {number} dia  Día del préstamo (de 1 a 31)
 * @param {() => number} generarId  Generador de ids
 * @returns {Array[]} Lista nueva con el préstamo añadido
 * @throws {Error} Si el socio o el libro no existen o el día no es válido o el libro ya esta prestado
 */
function prestar(listaPrestamos, idSocio, idLibro, dia, generarId) {
    if (buscarSocio(idSocio) === undefined) throw new Error("Socio no encontrado");
    if (buscarPorId(idLibro) === undefined) throw new Error("Libro no encontrado");
    if (!Number.isInteger(dia) || dia < 1 || dia > 31) throw new Error("Día no válido");
    const yaPrestado = listaPrestamos.some(
        (p) => p[Prestamo_libro_id] === idLibro && p[Prestamo_devuelto] === false
    );
    if (yaPrestado) throw new Error("Libro ya prestado");

    return [...listaPrestamos, [generarId(), idSocio, idLibro, dia, false]];
}

/**
 * Baja de un préstamo. No modifica la lista que recibe: devuelve una nueva.
 * @param {Array[]} listaPrestamos  Lista actual de préstamos
 * @param {number} idPrestamo  Id del préstamo que se borra
 * @returns {Array[]} Lista nueva sin ese préstamo
 * @throws {Error} Si el préstamo no existe
 */
function borrarPrestamo(listaPrestamos, idPrestamo) {
    if (!listaPrestamos.some((p) => p[Prestamo_id] === idPrestamo)) {
        throw new Error("Préstamo no encontrado");
    }
    return listaPrestamos.filter((p) => p[Prestamo_id] !== idPrestamo);
}

/**
 * Calcula la multa por retraso en la devolución de un libro.
 * 0,20 € por día los 10 primeros días y 0,50 € por cada día a partir del 11.
 * @param {number} diasRetraso  Días de retraso (entero, 0 o más)
 * @returns {number} Importe de la multa, redondeado a 2 decimales
 * @throws {Error} Si los días no son un entero mayor o igual que 0
 */
function calcularMulta(diasRetraso) {
    if (!Number.isInteger(diasRetraso) || diasRetraso < 0) {
        throw new Error("Días de retraso no válidos");
    }
    //suma los dias de la multa cuando son menores o iguales a 10
    const diasPrimerTramo = Math.min(diasRetraso, 10);
    //suma los dias de la multa cuando son mayores a 10
    const diasSegundoTramo = Math.max(diasRetraso - 10, 0);
    const total = diasPrimerTramo * 0.2 + diasSegundoTramo * 0.5;
    return Math.round(total * 100) / 100;
}
