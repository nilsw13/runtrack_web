document.addEventListener("DOMContentLoaded", function(){
    let bouton = document.createElement('button');
    bouton.innerHTML;
    bouton.id ="monBouton";
    bouton.textContent = "CLIQUEZ MOI !";


    function onClick(){
        let bgColor = document.body;
        bgColor.style.backgroundColor = 'orange';

    }

    bouton.addEventListener('click', onClick);

    document.body.appendChild(bouton);
})
