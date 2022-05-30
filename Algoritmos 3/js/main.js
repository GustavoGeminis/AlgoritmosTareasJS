//3.	Realizar un algoritmo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles



alert("Adivinare tu Numero");
alert("Escribe 1 para Si, 2 para No");

for(let i = 1; i<= 10; i++){
    numPrim =  prompt("¿El Numero en que pinesas es numero primo de "+ i + "?");
    if(numPrim == 1){
        break;
    }
    console.log("Numero Primo es "+ numPrim);
    console.log("Numero Ciclo e "+ i);
    numFinUser = i + 1;
    console.log("Numero Primo Final es "+ numFinUser);
}

numFinUser = numFinUser;

for(let l = 1; l<= 100; l++){
    numeroT = numFinUser * l;4
    console.log("Segundo Numero Final For: "+ numeroT);
    numPrimF = prompt("¿Tu numero es "+ numeroT);
    console.log("Numero a Multiplicar por el Primo" + numeroT);
    if(numPrimF == 1){
        alert("Lo adivine XD");
        break;
    }
    if(numeroT >= 100){
        alert("¿ENTONCES CUAL ES? XD ");
        break;
    }
    
}



