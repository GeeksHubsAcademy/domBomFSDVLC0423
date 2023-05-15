

// let resultado = Sumar(5, 6);
// console.log(resultado);

// function Sumar(a, b){

//     return a + b;

// }

// const Sumar = (a, b) => {
//     return a + b;
// }

// const Sumar = (a, b) => a + b;

// const Sumar = (a, b) => {

//     let resultado = a + b;

//     return resultado;
// }


let alumnos = ["Coral", "Judit", "Andrea", "Gonzalo", "Hector", "Nastia"];

alumnos.map(
    persona => console.log(`Pobre ${persona}`)
);



//SPREAD & REST

//REST
// const enumeraHobbies = (...argumentos) => {

//     console.log(argumentos);
// }


// const Alejandro = ["deportes", "cerveza", "musica"];

// const Gonzalo = ["Leer", "Dormir", "Comer", "Pasear"];

// const Hector = ["Tenis", "Ajedrez", "Programar", "Pasear", "Dormir"];

//SPREAD
// enumeraHobbies(...Alejandro);

// enumeraHobbies(Gonzalo[0], Gonzalo[1], Gonzalo[2], Gonzalo[3]);


let luchador1 = new Fighter("Jess", 1.80, 82, "Muay Thai", 18, "Inglesa", 15, "Femenino");
let luchador2 = new Fighter("Pedro", 1.65, 50, "Pankratium", 57, "Española", 9, "Masculino");
let luchador3 = new Fighter("Gonzalo", 2.10, 100, "Boxeo", 25, "Española", 20, "Masculino");

console.log("El luchador 1 es.,,, ", luchador1);
console.log("El luchador 2 es.,,, ", luchador2);
console.log("El luchador 3 es.,,, ", luchador3);


luchador3.punch(luchador2);

console.log("La vida de Pedro ahora es .....",luchador2.vida)
console.log("Gonzalo's life is.... ", luchador3.vida)



// const showMessage = () => {

//     // document.write("<div>Hola mundo feliz</div>");
//     // document.getElementById("mensajeSecreto").innerHTML = "Hostias....";
//     let capturado = document.getElementById("mensajeSecreto");


// }

let contenedores = document.getElementsByClassName("contenedor");

// console.log(contenedores);

let arrayContenedores = Array.from(contenedores);

// console.log(arrayContenedores);

arrayContenedores.map(
    elementoDentroDelArray => {

        console.log(elementoDentroDelArray)

        elementoDentroDelArray.addEventListener("mouseover", ()=> {
            elementoDentroDelArray.classList.add("cercle");
        })        

        elementoDentroDelArray.addEventListener("mouseout", ()=> {
            elementoDentroDelArray.classList.remove("cercle");
        })        

    }
)