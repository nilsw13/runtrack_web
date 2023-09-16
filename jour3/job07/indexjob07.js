

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

        // soumission / validation du formulaire

        formulaire.addEventListener('submit', function(event){
            event.preventDefault();
            let nom = champNom.value;
            let mail = champMail.value;
            let msg = champMessage.value;


            if (nom.trim() === "" || mail.trim() === "" || msg.trim() === ""){
                alert("Veuillez remplir les champs avec des valeurs appropriées.");
                return;
            }

            localStorage.setItem("nom", nom);
            localStorage.setItem("mail", mail);
            localStorage.setItem("msg", msg);

            location.reload();
        });

        let sauvegardeNom = localStorage.getItem("nom");
        let sauvegardeMail = localStorage.getItem("mail");
        let sauvegardeMessage = localStorage.getItem("msg");

        if (sauvegardeNom && sauvegardeMail && sauvegardeMessage) {
            
            sauvegardeNom = escapeHtml(sauvegardeNom);
            sauvegardeMail = escapeHtml(sauvegardeMail);
            sauvegardeMessage = escapeHtml(sauvegardeMessage)

            let affichage = document.createElement("div");
            affichage.textContent = `Nom sauvegardé : ${sauvegardeNom}`;
            
            let affichageMail = document.createElement("div");
            affichageMail.textContent = `E-mail sauvegardé : ${sauvegardeMail}`;
            
            let affichageMessage = document.createElement("div");
            affichageMessage.textContent = `Message sauvegardé : ${sauvegardeMessage}`;

            document.body.insertBefore(affichage, formulaire);
            document.body.insertBefore(affichageMail, formulaire);
            document.body.insertBefore(affichageMessage, formulaire);
        }
    });
}

function escapeHtml(unsafe){
    return unsafe.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

main();