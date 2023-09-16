function main(){
    let nombre = [1,2,3,4,5,6];
    let map = nombre.map((i) => i * 2);
    let fil = nombre.filter((i) => i % 2 === 0)
    let valeurInitial = 0;
    let red = nombre.reduce((accumulator, currentValue) => accumulator + currentValue, valeurInitial)
    console.log(nombre);
    console.log(map);
    console.log(fil);
    console.log(red);
}

main();
