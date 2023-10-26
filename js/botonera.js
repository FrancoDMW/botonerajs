// Obtenemos una referencia al elemento select y al botón
var select1 = document.getElementById("seleccionarBtn1");
var boton1 = document.getElementById("botonConImagen1");
var imagenBoton1 = document.getElementById("imagenBoton1");

var select2 = document.getElementById("seleccionarBtn2");
var boton2 = document.getElementById("botonConImagen2");
var imagenBoton2 = document.getElementById("imagenBoton2");

var select3 = document.getElementById("seleccionarBtn3");
var boton3 = document.getElementById("botonConImagen3");
var imagenBoton3 = document.getElementById("imagenBoton3");

var select4 = document.getElementById("seleccionarBtn4");
var boton4 = document.getElementById("botonConImagen4");
var imagenBoton4 = document.getElementById("imagenBoton4");

var select5 = document.getElementById("seleccionarBtn5");
var boton5 = document.getElementById("botonConImagen5");
var imagenBoton5 = document.getElementById("imagenBoton5");

var select6 = document.getElementById("seleccionarBtn6");
var boton6 = document.getElementById("botonConImagen6");
var imagenBoton6 = document.getElementById("imagenBoton6");

var select7 = document.getElementById("seleccionarBtn7");
var boton7 = document.getElementById("botonConImagen7");
var imagenBoton7 = document.getElementById("imagenBoton7");

var select8 = document.getElementById("seleccionarBtn8");
var boton8 = document.getElementById("botonConImagen8");
var imagenBoton8 = document.getElementById("imagenBoton8");

var select9 = document.getElementById("seleccionarBtn9");
var boton9 = document.getElementById("botonConImagen9");
var imagenBoton9 = document.getElementById("imagenBoton9");

function cambiarImagen(select, imagenBoton) {
    // Agregamos un evento al elemento select para detectar cambios
    select.addEventListener("change", function () {
        // Obtenemos el valor seleccionado en el select
        var seleccion = select.value;
        // Según el valor seleccionado, cambiamos la imagen en el botón
        switch (seleccion) {
            case "anillo_sonic":
                imagenBoton.src = "./img/anillo_sonic.png";
                imagenBoton.alt = "anillo_sonic";
                break;
            case "anillo_pierde":
                imagenBoton.src = "./img/ringlossheader.png";
                imagenBoton.alt = "ringlossheader";
                break;
            case "mario_moneda":
                imagenBoton.src = "./img/moneda_mario.png";
                imagenBoton.alt = "moneda_mario";
                break;
            case "guido_1":
                imagenBoton.src = "./img/guido.png";
                imagenBoton.alt = "guido";
                break;
            case "guido_2":
                imagenBoton.src = "./img/guido.png";
                imagenBoton.alt = "guido";
                break;
            default:
                // En caso de un valor no reconocido
                imagenBoton.src = "imagen_predeterminada.jpg";
                imagenBoton.alt = "Imagen Predeterminada";
        }
    });
}
cambiarImagen(select1, imagenBoton1);
cambiarImagen(select2, imagenBoton2);
cambiarImagen(select3, imagenBoton3);
cambiarImagen(select4, imagenBoton4);
cambiarImagen(select5, imagenBoton5);
cambiarImagen(select6, imagenBoton6);
cambiarImagen(select7, imagenBoton7);
cambiarImagen(select8, imagenBoton8);
cambiarImagen(select9, imagenBoton9);

function cargarSonido(ruta) {
    var audioElement = document.getElementById("audioElement");
    audioElement.src = ruta;
    audioElement.load();
    audioElement.play();
}

function asignarEvento(select, boton) {
    select.addEventListener("change", function () {
        var seleccion = select.value;
        cargarSonido(seleccion);
    });

    boton.addEventListener("click", function () {
        var seleccion = select.value;
        cargarSonido("./aud/" + seleccion + ".mp3");
    });
}

asignarEvento(document.getElementById("seleccionarBtn1"), document.getElementById("botonConImagen1"));
asignarEvento(document.getElementById("seleccionarBtn2"), document.getElementById("botonConImagen2"));
asignarEvento(document.getElementById("seleccionarBtn3"), document.getElementById("botonConImagen3"));
asignarEvento(document.getElementById("seleccionarBtn4"), document.getElementById("botonConImagen4"));
asignarEvento(document.getElementById("seleccionarBtn5"), document.getElementById("botonConImagen5"));
asignarEvento(document.getElementById("seleccionarBtn6"), document.getElementById("botonConImagen6"));
asignarEvento(document.getElementById("seleccionarBtn7"), document.getElementById("botonConImagen7"));
asignarEvento(document.getElementById("seleccionarBtn8"), document.getElementById("botonConImagen8"));
asignarEvento(document.getElementById("seleccionarBtn9"), document.getElementById("botonConImagen9"));