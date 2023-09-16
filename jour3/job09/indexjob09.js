


function division(a, b) {
    try {
        let a = prompt("Entrez un nombre");
        let b = prompt("Entrez son dénominateur");
        a = parseFloat(a);
        b = parseFloat(b);

        if (b === 0) {
            throw new Error("Division par 0 impossible");
        }

        let result = a / b;
        alert("Le résultat de la division est : " + result);
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
}

division();
