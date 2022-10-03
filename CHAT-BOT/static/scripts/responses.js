function getBotResponse(msg) {
    //rock paper scissors
    if (msg == "piedra") {
        return "papel";
    } else if (msg == "papel") {
        return "tijeras";
    } else if (msg == "tijeras") {
        return "piedra";
    }

    // Saludos
    if (msg == "hola" || msg == "buenas" || msg == "buenos dias" || msg == "buenas tardes") {
        return "Hola :D";
    } else if (msg == "chao" || msg == "chau" || msg == "adios" || msg == "nos vemos" || msg == "hasta luego") {
        return "Hasta la próxima!";

    // Opciones actuales
    } else if (msg == "generos" || msg == "géneros" || msg == "genero" || msg == "género") {
        return "La identidad de género alude a la percepción personal que un individuo tiene sobre sí mismo en cuanto a su género.​ La identidad de género puede coincidir con el sexo asignado a una persona o puede diferir de dicha clasificación.​";
    } else if (msg == "ets" || msg == "enfermedades de transmision sexual") {
        return "Las ETS son enfermedades que se pasan de una persona a otra a través del contacto sexual. Estas incluyen la clamidia, la gonorrea, los herpes genitales, el virus del papiloma humano (VPH), la sífilis y el VIH.​";
    } else if (msg == "cuerpo") {
        return "Cuando nos referimos al cuidado del cuerpo desde la ESI, abarcamos una multiplicidad de temas relacionados con el ejercicio de los derechos: el conocimiento y el respeto del propio cuerpo y el respeto por el cuerpo del/la otro/a; el reconocimiento de la propia intimidad y la de los/as otros/as; el ejercicio placentero y responsable de la sexualidad, el modo en que las construcciones de género condicionan la percepción y valoración del cuerpo de las mujeres ";
    } else {
        return "No entendí tu mensaje...";
    }
}