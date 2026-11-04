# Fase 1 · Núcleo de datos

**Alumno/a:**Agustín Muñoz Gomez
**Dominio:** biblioteca de aula 

## Cómo se abre

- `index.html` abre el menú. El programa funciona en la consola del navegador (F12).
- `pruebas.html` muestra el resultado de las pruebas.

Se abren con doble clic o con Live Server. No hay que instalar nada.

## Regla personal

Copia aquí el enunciado de tu ficha:
Precio o importe escalonado

Multa por retraso en la devolución: 0,20 € por día durante los 10 primeros días y 0,50 € por cada día a partir del 11. calcularMulta(diasRetraso) devuelve el importe redondeado a 2 decimales.

Ejemplo: 4 días → 0,80 €. 10 días → 2,00 €. 12 días → 3,00 € (2,00 + 1,00). 0 días → 0 €.

Válido si: Funciona dentro de tu proyecto, en js/regla.js, y tiene al menos 2 pruebas en js/pruebas.js: una del caso normal y otra del límite o del error.

> ...

## Por qué uso Map y Set
## Por qué uso Map y Set

Uso Map para busccar la id de libros y socios porque con get se encuentra mucho mas rapido la clave que busco porque voy directo a la clave, pero en un array con find tienes que recorrer todas las filas una por una hasta encontrar la clave que buscas entonces no seria eficiente ya que si tu clave esta al final se tiene que recorrer todo el array. También uso map en titulosPorGenero porque con set en generos no permite que haya generos repetidos, así no tengo que comprobar si se repite alguno.


## Diario

Una entrada al final de cada sesión: fecha, qué has hecho y qué te ha costado o qué has preguntado.

- 3/11/2026  
  Hecho:He creado 6 funciones en consultas.js que son Numero, buscarPorId, librosDeGenero, librosOrdenados, LibroAnterior, totalFianzasPrestados, autoresUnicos. Despues cree las pruebas para comprobar que las funciones funcionaban correctamente   
  Me ha costado: Lo que me ha costado es que me ha dado un problema al principio cuando he creado las pruebas ya que me ponia que "is not defined" y despues de mirarlo me he dado cuenta de que era porque las constantes en datos.js tenian diferente nombre que los nombres en mis funciones. Tambien me costo hacer el reduce ya que no entendia que se utilizaba como si fuera un acumulador ya que yo creia que operaba los valores
  He preguntado: Como totalizar la funcion con reduce y como podia comprobar que al ordenar los autores no me cambiara la lista original.

- 4/11/2026
Hecho: He creado otras 6 consultas, dos de ellas con map que son indiceLibros e indiceSocios para buscarlas directamente sin recorrer el array y la otra con map ha sido en generos para que me descarte cuando se repite el genero y las otras son crearGerenadoId con un clousure que recuerda el ultimo id creado y la ultima filtrarPor que es una funcion de orden superior, por ultimo me he creado pruebas para probar estas consultas
Me ha costado:He tenido problemas con la pagina de pruebas que me salia en blanco, he confundido el set  con el set de map ya que pensaba que descartaba repetidos cuando los agrupaba, entender como el ultimo closure recuerda el ultimo id.
He preguntado: Como se creaba el map id y como podia comprobarlo, como podia cambiar el buscarLibroPorId de find a get.


## Uso de IA
- 3/11/2026 
- Herramienta:Claude
- Para qué la usé (explicar, depurar, generar código):explicar las funciones y pruebas y generar codigo
- Qué le pedí (resumen):Que me explique cada paso del Hito 2, corrigir los errores de mi código, que cambiara una funcion para que utilizara reduce ya que no sabia como hacerlo y que me explicara el paso de hacerla, y que me explicara para qué sirve cada prueba.
- Qué cambié yo y por qué: Cambie el nombre de algunas preubas y funciones que me creaba ya que me las ponia con el nombre de la constante incorrecto entonces no me funcionaban las pruebas
- Qué he aprendido: He aprendiado a crear una funcion con reduce y a crear pruebas para que me comprueben las funciones

- 4/11/2026 
- Herramienta:Claude
- Para qué la usé (explicar, depurar, generar código):explicar el map,set y get, ejemplo de prueba para el map y generar codigo
- Qué le pedí (resumen):Que me explique cada paso del Hito 3, que me creara algunas pruebas para tomar como referencia como la de map id y en las consultas como podia cambiar el find por el get, que me ayudara con la consulta de orden superior y la de closure. Tambien que me explicara Map, get y set
- Qué cambié yo y por qué: Cambiar la constante de librosDeGenero para que use filtrarPor para no tener dos funciones que hagan lo mismo, he cambiado algunos valores que estaban en las pruebas que me ha generado para forzar el fallo
- Qué he aprendido: He aprendido a crear un índice con Map para buscar por id con get, a quitar repetidos con Set, y qué es un closure. También que hay diferencia entre un set de un Map y un Set.

## Git (opcional)
https://github.com/Agustin2004-git/Gestor-Biblioteca2/tree/main/js

