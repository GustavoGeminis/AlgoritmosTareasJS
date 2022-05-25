//SOLICITAR 3 NUMERO DE ENTRE 1 Y EL 100, DEFINIR CUAL ES EL MAYOR

//Se ingresan los numeros 
let X1 = prompt("Ingresa el Primer Numero");
if(X1 < 1 || X1 >100){
    alert("Ingresa nuevamente");
    let X1 = prompt("Ingresa el Primer Numero");
}

let X2 = prompt("Ingresa el Segundo Numero");
if(X2 < 1 || X2 >101){
    alert("Ingresa nuevamente");
    let X2 = prompt("Ingresa el Segundo Numero");
}

let X3 = prompt("Ingresa el Tercer Numero");
if(X3 < 1 || X3 >100){
    alert("Ingresa nuevamente");
    let X3 = prompt("Ingresa el Tercer Numero");
}

//Se hace la comparación para saber que numero es Mayor
if((X1 > X2) && (X1 > X3)){
    alert("El Numero Mayor es "+ X1);
}

if((X2 > X1) && (X2 > X3)){
    alert("El Numero Mayor es "+ X2);
}

else{
    alert("El Numero Mayor es "+ X3);
}





