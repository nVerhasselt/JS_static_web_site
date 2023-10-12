let name_input;
let firstName_input;
let message_input;
let empty_input = document.getElementById('empty_input');
let wrong_input = document.getElementById('wrong_input');
let sent_msg = document.getElementById('sent_msg');
let regexNum = new RegExp("[0-9]");
let regexSpe = new RegExp("[\\W]");
let button = document.getElementById('button');


button.addEventListener("click", checkInput, false);


function checkInput() {
    name_input = document.getElementById("name").value;
    console.log(name_input);
    firstName_input = document.getElementById("firstName").value;
    console.log(firstName_input);
    message_input = document.getElementById("message_input").value;
    console.log(message_input);

    if(name_input == '' || firstName_input == '' || message_input == '') {
      empty_input.innerHTML = "<div class='alert alert-warning' role='alert'> Tous les champs ne sont pas remplis </div>";
    }
    else if (regexNum.test(name_input) || regexNum.test(firstName_input) || regexSpe.test(name_input) || regexSpe.test(firstName_input)){
      wrong_input.innerHTML = `<div class='alert alert-warning' role='alert'> Saisie incorrecte, caractères spéciaux ou numériques.`;
    }
    else {
      sent_msg.innerHTML = "<div class='alert alert-success' role='alert'> Votre message a bien été envoyé </div>";

    }
}