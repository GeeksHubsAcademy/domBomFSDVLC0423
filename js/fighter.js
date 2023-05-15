
class Fighter {

    //Propiedades........ (variables...atributos...características)

    constructor(nombre, altura, peso, estilo, edad, nacionalidad, fuerza, genero){
        this.vida = 100
        this.experiencia = 0
        this.victorias = 0

        this.nombre = nombre
        this.altura = altura
        this.peso = peso
        this.estilo = estilo
        this.edad = edad
        this.nacionalidad = nacionalidad
        this.fuerza = fuerza
        this.genero = genero
    }

    //Metodos............ (funciones...)

    punch(adversario){

        adversario.vida -= 10;

    }

    kick(adversario){

        adversario.vida -= (adversario.fuerza / this.fuerza) ;


    }

    grab(adversario){

        adversario.vida -= 5;


    }



}


