const result = () => {
    let A = Number(document.getElementById('valorA').value);
    let B = Number(document.getElementById('valorB').value);
    let C = Number(document.getElementById('valorC').value);

    const delta = () => {
        return (
            (Math.pow(B, 2)) - (4 * A * C)
        );
    }
    const x1 = () => {
        return (
            (-(B) + Math.sqrt(delta())) / (2 * A)
        );
    }

    const x2 = () => {
        return (
            (-(B) - Math.sqrt(delta())) / (2 * A)
        );
    }

    if (delta() < 0) {
        (document.getElementById("resultado").innerHTML = "O valor de delta é negativo!<br>Delta = "+delta());
    } else {
        (document.getElementById("resultado").innerHTML = "x' = " + x1().toFixed(2) + " e x''= " + x2().toFixed(2));
    }

}

