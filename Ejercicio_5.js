function areaCircunferencia(r){

    if(r <= 0){
        return -1;
    }
    
    return (Math.PI*Math.pow(r,2)).toFixed(2);

}