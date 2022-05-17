function lotto(){
    let arr = [,,,,,,];
    for(let i = 0; i <arr.length; i++){
        arr[i]= Math.random()*45;
        // console.log(Math.round(arr[i]));
    };
}

document.write(arr)

function lotto(){
    let arr = [,,,,,];
    for(let i = 0; i <arr.length; i++){
        arr[i]= Math.random()*45 + 1;
        console.log(Math.round(arr[i]));
    }
    return lotto;
}
