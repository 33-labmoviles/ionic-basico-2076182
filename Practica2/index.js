console.log("Hola Mundo");
//Paso 1

var total= 0;
var monto= 0;
var TotalMsg=document.getElementById("TotalMsg");
var montoTxt=document.getElementById("Monto");
var listaTicket = document.getElementById("ticket");
var descripcionTxt = document.getElementById("Descripcion");

function calcularTotal(){

    monto=montoTxt.value;
    monto=parseInt(monto);
    total=total+monto;
    console.log(total);

    TotalMsg.innerHTML="Total: "+ total;
    Imprimir(monto);
}
  
function Imprimir(monto){
    var Ticket=document.createElement("ion-item");
    var LabelTicket=document.createElement("ion-label");

    LabelTicket.innerHTML=descripcionTxt.value + " : $" + monto;

    Ticket.appendChild(LabelTicket);
    listaTicket.appendChild(Ticket);

    descripcionTxt.value="";
    montoTxt.value="";
}
