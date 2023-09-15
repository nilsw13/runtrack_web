
function main(){

    
    do {
        var a = prompt("Entrer un premier nombre");
    }while(isNaN(a));  
    
    do {
        var b = prompt("Un deuxieme ! ")
    }while(isNaN(b));

    a = parseFloat(a);
    b = parseFloat(b);

    if(!isNaN(a) && !isNaN(b)){
        add(a,b);
    }        
}



function add(a,b){
    let result = a + b;
    console.log(result);
    return result;
}

let flechee = () => {
    let chaine = prompt("Entrer un mot: ");
    if (chaine === ""){
        console.log("La chaine est vide");
    }else{
        console.log(chaine.length);
    }
}

main()
flechee();

