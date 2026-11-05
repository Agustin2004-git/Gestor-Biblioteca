// Menú del programa. Se ejecuta al abrir index.html.
//
// Hito 1: muestra aquí tus tres arrays con console.table.
//
//mostrar tablas
// Hito 4: convierte este fichero en un menú que
//   - pide la opción con prompt
//   - muestra los resultados con console.table o alert
//   - pide confirmación con confirm antes de borrar
//   - captura los errores con try…catch y los muestra sin que el programa se rompa
//   - resiste que el usuario cancele, deje la entrada vacía o escriba una opción que no existe
/*----PASO6----*/
/**
 * Pide un número entero con prompt.
 * @param {string} mensaje  Texto que se muestra al usuario
 * @returns {number|null} El número escrito, o null si el usuario cancela
 * @throws {Error} Si lo escrito no es un número entero
 */
function pedirNumero(mensaje) {
    const texto = prompt(mensaje);
    if (texto === null) return null;
    if (!/^-?\d+$/.test(texto.trim())) {
        throw new Error("Debes escribir un número entero");
    }
    return Number(texto.trim());
}

/**
 * Menú principal del programa. La lista actual de préstamos es una variable
 * de esta función (no global) y datos.js nunca se modifica.
 */
function menu() {
    let prestamosActuales = [...prestamos];
    const siguienteId = crearGeneradorId(prestamos.length);
    let seguir = true;

    while (seguir) {
        const opcion = prompt("0. Salir\n1. Ver datos\n2. Prestar\n3. Borrar\n4. Libros de un género\n5. Total de fianzas prestadas\n6. Calcular multa");
        if (opcion === null || opcion.trim() === "0") {
            seguir = false;
            continue;
        }
        try {
            switch (opcion.trim()) {
                case "1":
                    console.table(prestamosActuales);
                    break;
                case "2":
                    const idSocio = pedirNumero("Id del socio:");
                    if (idSocio === null) break;
                    const idLibro = pedirNumero("Id del libro:");
                    if (idLibro === null) break;
                    const dia = pedirNumero("Día del préstamo (1-31):");
                    if (dia === null) break;
                    prestamosActuales = prestar(prestamosActuales, idSocio, idLibro, dia, siguienteId);
                    alert("Préstamo registrado");
                    break;
                case "3":
                    const idPrestamo = pedirNumero("Id del préstamo a borrar:");
                    if (idPrestamo === null) break;
                    if (!confirm(`¿Seguro que quieres borrar el préstamo ${idPrestamo}?`)) break;
                    prestamosActuales = borrarPrestamo(prestamosActuales, idPrestamo);
                    alert("Préstamo borrado");
                    break;
                case "4": {
                    const genero = prompt("Género (poesía, novela o teatro):");
                    if (genero === null) break;
                    const lista = librosDeGenero(genero.trim().toLowerCase());
                    if (lista.length === 0) {
                        alert("No hay libros de ese género");
                        break;
                    }
                    console.table(lista);
                    break;
                }
                case "5":
                    alert(`Total de fianzas prestadas: ${totalFianzasPrestados(prestamosActuales)} €`);
                    break;
                case "6":
                    const dias = pedirNumero("Días de retraso:");
                    if (dias === null) break;
                    alert(`Multa: ${calcularMulta(dias).toFixed(2)} €`);
                    break;

                default:
                    alert("Opción no válida");
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }
}

menu();