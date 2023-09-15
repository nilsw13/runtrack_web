

function main(){
    document.addEventListener("DOMContentLoaded", function(){
        let formulaire = document.createElement('form');
        formulaire.id = "monFormulaire";
        

        let champNom = document.createElement("input");
        champNom.type = "text";
        champNom.placeholder = "Nom";
        champNom.name = "nom";


        let champMail = document.createElement("input");
        champMail.type = "text";
        champMail.placeholder = "name@gmail.com";
        champMail.name = "Email";

        let champMessage = document.createElement("input");
        champMessage.type = "textarea";
        champMessage.placeholder = "";
        champMessage.name = "Message";
        champMessage.style.height ="2vh";
        champMessage.style.padding ="1em 2em"
        

        let boutton = document.createElement("button");
        boutton.type = "submit";
        boutton.textContent = "ENVOYER";
        boutton.style.width = "90px";
        boutton.style.height = "50px"
        boutton.style.margin ="2em 2em";

        formulaire.appendChild(champNom);
        formulaire.appendChild(champMail);
        formulaire.appendChild(champMessage);
        formulaire.appendChild(boutton);

        document.body.appendChild(formulaire);

    })
    

}

main();