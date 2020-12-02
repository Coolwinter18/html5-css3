/**
 * @author @Coolwinter18
 * @email eduferreyraok@gmail.com
 * 
 */
window.onload = iniciaDatos;

/** 
 * @author @Coolwinter18 
 * @name Carlos-Eduardo-Ferreyra
 * @param null
 * @description funcion que se manda llamar
 * al cargar la pagina HTML
*/
function iniciaDatos() {
    document.getElementById("link").onclick = validaSalir;
    document.getElementById("linkSearch").onclick = busqueda;
}

/**
 * @author @Coolwinter18
 * @name Carlos-Eduardo-Ferreyra
 * @param null
 * @description funcion que valida si el usuario 
 * quiere salir del sitio o no
 */
function validaSalir() {
    if (confirm("Desea salir del sitio?")) {
        alert("Nos vamos a google");
        return true; //regresamos verdadero para salir
    }else{
        alert("Nos quedamos en el sitio");
        return false; //regresamos falso para quedarnos
    }
}

/**
 * @author @Coolwinter18
 * @name Carlos-Eduardo-Ferreyra
 * @param null
 * @description funcion que pide una cadena a buscar en Google
 */
function busqueda() {
    //con la funcion prompt capturamos informacion del usuario
    var respuesta = prompt("Escribe la cadena a buscar","");
    // si hubo una respuesta concatenamos la cadena a buscar
    //al link de google
    if (respuesta) {
        alert("Tu respuesta es: "+ respuesta);
        //el operador this nos sirve para referenciar
        //al elemento que provoco el evento, en este caso
        //el elemento con identificador "linkSearch"
        //de una peticion GET
        var nuevoLink= this +"search?q="+respuesta;
        alert("Nuevo Link: " + nuevoLink);
        //redireccionamos el link
        window.location = nuevoLink;
        //regresamos false sino nos lleva al link originalmente
        //registrado en el elemento "linkSearch"
        return false;
    }else{
        alert("No proporcionaste ninguna cadena a buscar");
        return false;
    }
}