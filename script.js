function encriptar(){
    var texto = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = texto.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "over");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML=textoEncriptado;
    document.getElementById("botonCopiar").style.display="show";
    document.getElementById("botonCopiar").style.display="inherit";
    document.getElementById("textoDesencriptado").style.opacity=1;
    document.getElementById("hero__control").style.background="none";
}

function desencriptar(){
    var txt = document.getElementById("textoDesencriptado").value.toLowerCase();

    var textoDesencriptado = txt.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/over/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/umes/img, "u");

    document.getElementById("textoDesencriptado").innerHTML=textoDesencriptado;

}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}
