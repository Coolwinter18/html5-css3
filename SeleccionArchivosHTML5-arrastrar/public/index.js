$(document).ready(function(){
    /* if(Modernizr.draganddrop && window.FileList){
        alert("tu navegador SI soporta el API File y Drag and Drop");
    }else{
        alert("No se soporta API File o Drag and Drop");
    }; */
    $("#zona_arrastrar").bind({
        "drop": ManejoDrop,
        "dragover": ManejoDragOver
    });
    function ManejoDragOver(evento){
        evento.stopPropagation();
        evento.preventDefault();
    }
    function ManejoDrop(evento){
        evento.stopPropagation();
        evento.preventDefault();

        //JQuery envuelve el evento original
        var dt = evento.originalEvent.dataTransfer;
        var archivos = dt.files;//evento.target.files || (dataTransfer && dataTransfer.files);
        $("#salida").html("");
        for (var i = 0; i <archivos.length; i++) {
        var info = "<p>" + (i + 1) + ") Nombre: " + archivos[i].name + ", Tamanio: " + archivos[i].size +
            ", Tipo MIME: " + archivos[i].type + "</p>";
        $("#salida").append(info);
        };
    }
});