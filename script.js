//esta funcion la uso para varios ejercicios no comentar!
function eleccion(){
    let numero = parseInt(prompt("escriba un numero"));
    return numero;
}
// ejercicio #1

// function comprobarPar(numero){
//     if(numero%2==0){
//         console.log("el numero es par");
//     }
//     else{
//         console.log("el numero es impar");
//     }
// }
// let numero = parseInt(prompt("escriba un numero"));

// comprobarPar(numero)

// ejercicio #2

// function numeroMayor(numeroSolicitado,numeroSolicitado2){
//     if(numeroSolicitado>numeroSolicitado2){
//         console.log("numero: " + numeroSolicitado + " es mayor");
//     } else if(numeroSolicitado<numeroSolicitado2){
//         console.log("numero : " + numeroSolicitado2 + " es mayor");
//     }else {
//         console.log("son iguales");
//     }

// }


//let numeroSolicitado = eleccion();
// let numeroSolicitado2 = eleccion();
// numeroMayor(numeroSolicitado,numeroSolicitado2);

// ejercicio #3

// function multiploDeCinco(numeroSolicitado){
//     if(numeroSolicitado%5==0){
//         console.log("El " + numeroSolicitado + " es múltiplo de 5 ");
//     } else{
//         console.log("El " + numeroSolicitado + " no es múltiplo de 5 ");
//     }
// }

// let numeroMultiplo = eleccion();
// multiploDeCinco(numeroMultiplo);

//ejercicio #4

// function imprimir(numeroSolicitado){
//     for(let i=0;i<=numeroSolicitado;i++){
//         console.log("numero: "+ i);

//     }
// }
// let numeroSecuencia = eleccion();
// imprimir(numeroSecuencia);

//ejercicio #5

// function repetirPalabra(palabra,repeticion){
//     for(let i=1;i<=repeticion;i++){
//         console.log(palabra);
//     }
// }

// repetirPalabra("molly",3);
// repetirPalabra("luca",2)

//ejercicio #6

// function imprimirArray(arraySolicitado){
//     console.log(arraySolicitado);
// }

// let array = [1,2,5,85,50,"papa"];
//  imprimirArray(array);

//ejercicio #7

function mostrarArray(arraySolicitado){
    
    for(let i=0;i<arraySolicitado.length;i++){
         
        if(arraySolicitado[i]===arraySolicitado[4]){
            console.log("");
            continue;
        }
        console.log(arraySolicitado[i]);
    }
   
}

let otroArray = [1,2,5,85,90,15,70,5,9,65];
mostrarArray(otroArray);

//ejercicio #8

// function multiplicarArray(arraySolicitado, numero){
    
//     for(let i=0;i<arraySolicitado.length;i++){
      
//         console.log(arraySolicitado[i]*numero);
//     }
// }

// let numeroArray = multiplicarArray([1,2,5,85],2);