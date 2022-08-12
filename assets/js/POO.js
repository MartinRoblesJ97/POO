//PROGRAMACIÓN ORIENTADA A OBJETOS

//Ejemplo de gatitos

const felix = {
    nombre: "Felix",
    color: "Naranja",
    peso: "10 kg",
    edad: "5 anios", 
    colorOjos: "verdes",
    raza: "fold escoces",
    sexo: "hembra",
    vacunas: true,
    numeroBigotes: "20",
    tipoPelo: "largo",
    manchas: true,
};

console.log(felix);
console.log("El nombre del gatito es:" , felix.nombre, "y su raza es:" , felix.raza);
console.log("Su peso es de: ", felix.peso);


// PLANTILLA PARA HACER GATITOS

// 1.- Defino mi plantilla con propiedades como variables 
class gatito{
    nombre = "";
    color = "";
    edad = 0;
    raza = "";


// 2.- Crear un constructor
constructor(nombre, color, edad, raza){
    this.nombre = nombre;
    this.color = color;
    this.edad = edad;
    this.raza = raza;}


// 3.- Defino mis metodos como funciones para realizar acciones.
    maullar (maullar){
        maullar = console.log("Miau :3")
    }

    dormir (dormir){
        dormir = console.log("Zzzzzzzz");
    }

    ronronear (ronronear){
        ronronear = console.log("rrrrrr");
    }

}// El constructor y los metodos va dentro de la clase

 
// 4.- Crear gatitos
let kitty = new gatito ("kitty", "blanco", 666, "japonesa" );
let garfield = new gatito ("garfield", "naranja", 3, "persa");
let lucy = new gatito ("lucy", "gris", 4, "munchkin ");
let atuncin = new gatito("atuncin", "shiny", 7, "acuatico");
let cilantro = new gatito("cilantro", "blanco", 1, "kawai")


// Se imprime los objetos
console.log(kitty);
console.log(garfield);
console.log(lucy);
console.log(atuncin);
console.log(cilantro);


// Se manda a llamar las funciones
kitty.maullar();
garfield.dormir();
garfield.ronronear();

// imprimirInfo(div,bg){
//     div.innerHTML += `<div class="card ${bg} mb-3" style="max-width: 18rem;"> 
//     <div class="card-header">${this.nombre} <span class="badge badge-secondary">${this.color}</span></div>
//     <div class="card-body">
//       <h5 class="card-title">${this.edad}</h5>
//       <p class="card-text">${this.raza}.</p>
      
//     </div>
//   </div>`; 
// }
