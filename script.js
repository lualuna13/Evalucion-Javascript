/* alert ("wuenas");
 */
let nombre = prompt ("Ingresa tu nombre");
let edad = prompt ("Ingresa tu edad");
let estudiaste = true;

let mensaje = `Hola, soy ${nombre} y tengo ${edad} años`;

console.log(mensaje);


if (estudiaste == true){
  alert(`${nombre} si estudiaste pasaras la materia :D`);
} 

else if (estudiaste == false){
  alert(`${nombre} no estudiaste reprobaras la materia :C`);

}



