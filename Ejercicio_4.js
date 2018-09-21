function aBin(numero){

    let bin = "";

    if(numero == 0){
        bin = "0";
    }

    while(numero != 0){
        bin = (numero%2) + bin;
        numero = Math.trunc(numero/2);
    }
    
    return bin;

}