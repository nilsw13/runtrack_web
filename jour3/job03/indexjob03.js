function main(){
    let prenoms = ["pierre", "tom", "john", "louis"];
    for(let i = 0; i < prenoms.length; i++){
        console.log(prenoms[i]);
    }
}

function forE(){
    let prenoms = ["pierre", "tom", "john", "louis"];
    prenoms.forEach((prenom)=>{
        console.log(prenom);
    })
}

main();
forE();