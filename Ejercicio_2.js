function ordenarAsc(arreglo){

    for(let i=2; i <= arreglo.length; i++){

        for(let j=0; j< (arreglo.length-1);j++){

            if(arreglo[j] > arreglo[j+1]){

                let aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;
                
            }

        }

    }

    return arreglo;
}