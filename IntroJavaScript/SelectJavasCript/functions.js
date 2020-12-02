window.onload = configuraSelect;

/**
 * @Coolwinter18
 * @author Carlos-Eduardo-Ferreyra
 * @param null 
 */
function configuraSelect() {
    //Este es el elemento seleccionado por default
    document.getElementById("selectFaq").selectedIndex = 0;
    document.getElementById("selectFaq").onchange = cambiaPagina;
}

/**
 * @author @Coolwinter18
 * @name Carlos
 */
function cambiaPagina() {
    var elementoSelect = document.getElementById("selectFaq");
    var nuevaPagina = elementoSelect.options[elementoSelect.selectedIndex].value;
    if (nuevaPagina != "") {
        window.location = nuevaPagina;
    }
}