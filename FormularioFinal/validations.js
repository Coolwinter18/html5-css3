/**
 * @Coolwinter18
 * @param {Object} forma
 * @brief Funcion para validar los elementos requeridos (*)
 */
function validarForma(forma) {
    //validamos el usuario
    var usuario = forma.usuario;
    if (usuario.value == "" || usuario.value == "Escribir Usuario") {
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    //validamos el password
    var password = forma.password;
    if (password.value == "" || password.value.lenght < 3 ) {
        alert("Debe proporcionar un password de al menos 3 caracteres ");
        password.focus();
        password.select();
        return false;
    }
    //validamos las tecnologias de interes
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    //revisamos si se selecciono algun checkbox
    for (let index = 0; index < tecnologias.length; index++) {
        if (tecnologias[index].checked) {
            checkSeleccionado = true;
        }
    }
    if (!checkSeleccionado) {
        alert("Debe proporcionar una tecnologia");
        return false;
    }
    
    //validamos el Genero
    var generos = forma.genero;
    var radioSeleccionado = false;

    //revisamos si se selecciono algun radio
    for (let i = 0; i < generos.length; i++) {
        if (generos[i].checked) {
            radioSeleccionado = true;
        }
    }
    if (!radioSeleccionado) {
        alert("Debe proporcionar un genero");
        return false;
    }
    
    //validamos la ocupacion
    var ocupacion = forma.ocupacion;
    if (ocupacion.value=="") {
        alert("Debe seleccionar una ocupacion");
        return false;
    }

    //formulario validado
    alert("Formulario validado, enviando datos...");
    return true;

}