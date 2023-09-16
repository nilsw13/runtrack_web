

function main(){
    
    document.addEventListener("DOMContentLoaded", function(){
        let dataContainer = document.getElementById("data-container");
        fetch(`https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD`)
        .then(response => response.json())
        .then(data => {
            dataContainer.textContent = JSON.stringify(data);
        })
        .catch (error => {
        console.error("Une erreur s'est produite: ", error);
        dataContainer.textContent = "une Erreur s'est produite";
    })
    }
)}

main();