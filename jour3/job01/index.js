function main() {
    let a = prompt("Entrez un nombre 1: ");
    let b = prompt("Entre un nombre 2: ");
    let numA = parseFloat(a);
    let numB = parseFloat(b);
    if (is_float(numA, numB)) {
        operation(numA, numB)
    }
}

function is_float(a, b) {
    if (parseFloat(a) == parseFloat(a) && !isNaN(a) && parseFloat(b) == parseFloat(b) && !isNaN(b)) {
        console.log("les valeurs sont des nombres")
        return true;
    } else{
        console.error("ERREUR ! Les valeurs ne sont pas des nombres")
        return false;
    }
}

function operation(numA, numB) {
    let resultAdd = numA + numB;
    let resultSub = numA - numB;
    let resultProduct = numA * numB;
    let resultDivision = numA / numB;
    console.log("resultat" + numA + " + " + numB + " = " + resultAdd)
    console.log("resultat" + numA + " - " + numB + " = " + resultSub)
    console.log("resultat" + numA + " x " + numB + " = " + resultProduct)
    console.log("resultat" + numA + " / " + numB + " = " + resultDivision)
}

main();






