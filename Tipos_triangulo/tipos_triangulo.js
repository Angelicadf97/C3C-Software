const result = () =>{
    
    let A = Number(document.getElementById('ladoA').value);
    let B = Number(document.getElementById('ladoB').value);
    let C = Number(document.getElementById('ladoC').value);

if (A,B,C > 0) {
    if (A == B && A == C) {
        document.getElementById("resultado").innerHTML="Equilátero";
        document.getElementById("explicacao").innerHTML="Esse triângulo possui todos os lados iguais!";
        console.log("Equilátero")
    } else if (A != B && A!= C){
        document.getElementById("resultado").innerHTML="Escaleno";
        document.getElementById("explicacao").innerHTML="Esse triângulo possui todos os lados diferentes!";
        console.log("Escaleno")
    } else {
        document.getElementById("resultado").innerHTML="Isósceles";
        document.getElementById("explicacao").innerHTML="Esse triângulo possui dois lados iguais!";
        console.log("Isósceles")
    }
} else {
    document.getElementById("resultado").innerHTML="Você digitou algum valor inválido.";
}

}

