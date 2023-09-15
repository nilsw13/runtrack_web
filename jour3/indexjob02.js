function main(){
    let prenoms = ["Pierre", "john"];
    console.log(prenoms[1]);
    console.log(prenoms[0]);
    prenoms.push("Matthieu");
    prenoms.unshift("Nils");
    console.log(prenoms);
    delete prenoms[0];
    console.log(prenoms);
    console.log(prenoms[3])
}

main();