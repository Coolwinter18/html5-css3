
window.onload = cargarImagenes;


/**
 * @author @Coolwinter18
 * @name Carlos-Eduardo-Ferreyra
 * @param null
 * @description funcion que carga las imagenes en la
 * pagina HTML
 */
function cargarImagenes() {
    for (let index = 0; index < document.images.length; index++) {
        if (document.images[index].parentNode.tagName == "A") {
            configuraRollover(document.images[index]);
        }    
    }
}

/**
 * @author @Coolwinter18
 * @name Carlos-Eduardo-Ferreyra
 * @param anImage
 * @description funcion que configura el rollover
 */
function configuraRollover(anImage) {
    anImage.imageOff = new Image();
    anImage.imageOff.src = "boton_off.jpg";
    anImage.onmouseout = cambiaOff;

    anImage.imageOn = new Image();
    anImage.imageOn.src = "boton_on.jpg";
    anImage.onmouseover = cambiaOn;
}

/**
 * @author @Coolwinter18
 * @name Carlos-Eduardo-Ferreyra
 * @param null
 * @description Estas funciones se ejecutan segun el evento
 * que se dispare
 * pero no es al iniciar la pagina, sino dependen del boton
 * que se presione, son conocidas como handlers.
 */
// Se asocio al evento onmouseout
function cambiaOff() {
    this.src = this.imageOff.src; //tomamos los valores ya asociados
}

/**
 * @author @Coolwinter18
 * @name Carlos-Eduardo-Ferreyra
 * @param null
 * @description Estas funciones se ejecutan segun el evento
 * que se dispare
 * pero no es al iniciar la pagina, sino dependen del boton
 * que se presione, son conocidas como handlers.
 */
// Se asocio al evento onmouseover
function cambiaOn() {
    this.src = this.imageOn.src; //tomamos los valores ya asociados
}



