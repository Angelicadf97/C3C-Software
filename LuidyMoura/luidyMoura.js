const result = () => {
    let num = Number(document.getElementById('num').value);
    let luidyMoura = [];

    for (let i = 1; i <= num; i++) {
        if(i%5 == 0 && i%9 == 0){
            luidyMoura[i] = "LuidyMoura";
        } else if(i%5 == 0){
            luidyMoura[i] = "Luidy";
        } else if(i%9 == 0){
            luidyMoura[i] = "Moura";
        } else {
            luidyMoura[i] = i;
        }        
    }

    luidyMoura.forEach(function() {
        document.getElementById("lista").innerHTML= luidyMoura ;
    });
}

