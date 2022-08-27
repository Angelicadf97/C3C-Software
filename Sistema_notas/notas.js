const result = () => {

    let nota = Number(document.getElementById('nota').value);
    let multiplo = nota;
    let notaFinal = 0;
    
    while (multiplo % 5 != 0) {
        multiplo++;
    }

    if (nota >= 38 && (multiplo - nota) < 3) {
        notaFinal = multiplo
        document.getElementById("resultado").innerHTML = "Aprovado";
        document.getElementById("explicacao").innerHTML = "A nota final do aluno é " + notaFinal;
    } else if (nota >= 38) {
        notaFinal = nota
        document.getElementById("resultado").innerHTML = "Aprovado";
        document.getElementById("explicacao").innerHTML = "A nota final do aluno é " + notaFinal;
    } else {
        notaFinal = nota
        document.getElementById("resultado").innerHTML = "Reprovado";
        document.getElementById("explicacao").innerHTML = "A nota final do aluno é " + notaFinal;
    }
}

