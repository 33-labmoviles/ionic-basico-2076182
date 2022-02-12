console.log("Hola Mundo");
//Paso 1

var total= 0;
var monto= 0;

var montoTxt=document.getElementById("Monto")
//console.log("montoTxto");

function calcularTotal(){

    monto=montoTxt.value;
    monto=parseInt(monto);
    total=total+monto;
    console.log(total);
}
