function main(){
    let Personne = {
        nom: "jean",
        age: 27,
        ville: "Marseille",
        bio: function (){
            return `${this.nom} a ${this.age} ans et vit à ${this.ville}.`;
        }

    }
    console.log(Personne.bio());
    
}

main();


