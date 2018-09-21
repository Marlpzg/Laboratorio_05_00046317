function getFibo(n){

    let fibo = [0,1];
    if(n == 1){

        return 0;

    }else if(n > 2){

        for(let i=2; i < n; i++){

            fibo[i] = fibo[i-1] + fibo[i-2];
            
        }

    }
    return fibo.join(",");

}