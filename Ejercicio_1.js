function esPalindroma(palabra){

    let arreglo = palabra.split("");
    arreglo.reverse();
    arreglo = arreglo.join("");
    
    if(palabra == arreglo){
        return true;
    }else{
        return false;
    }

}