//Declaratie
let errors = ["<h4>Yikes, errors..</h4>"];
let antwoord ="";
//FUNCTIE 1

//Indien het veld leeg is geef je bijvoorbeeld volgende melding “Het veld voornaam is vereist.”.
function validateForm(){
    let errors =[];
    //check op lege inputfields
    errors.push(checkEmptyField("voornaam", "<p>Het veld voornaam is vereist.</p>"));
    errors.push(checkEmptyField("naam", "<p>Het veld naam is vereist.</p>"));
    errors.push(checkEmptyField("gebruiker", "<p>Het veld gebruikersnaam is vereist.</p>"));
    errors.push(checkEmptyField("e-mail", "<p>Het veld e-mail is vereist.</p>"));

    errors.push(checkEmptyField("wachtwoord","<p>Het veld wachtwoord is vereist.</p>"));
    errors.push(checkEmptyField("herhaalWachtwoord", "<p>Het veld herhaalwachtwoord is vereist.</p>"));

    errors.push(checkEmptyField("adres", "<p>Het veld adres is vereist.</p>"));
    errors.push(checkEmptyField("land", "<p>Het veld land is vereist.</p>"));
    errors.push(checkEmptyField("provincie", "<p>Het veld provincie is vereist.</p>"));
    errors.push(checkEmptyField("postcode", "<p>Het veld postcode is vereist.</p>"));
    errors.push(checkCheckBox());
    //document.getElementById('controle').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">" + errors.join("");//join zorgt voor de manier van aaneensluiting, standaard is het een komma
    document.getElementById('controle').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"><H2>Yikes, errors..</h2><p>"+ antwoord + "</p></div>";
}

//Functie 2 CheckEmptyField
function checkEmptyField(veld, melding) {
  var textField = document.getElementById(veld);
  if (textField.value.length == 0) {
    return melding;
  }
  return true;
}

//Functie 3 Check de checkbox aangeduid of niet ?
function checkCheckBox() {
  var checkBox = document.getElementById("checkbox_1");
  if (checkBox.checked == false)
    {
        return "Je moet de algemene voorwaarden accepteren.";
    }
  else
    {
        return "";
    }
}

//vergelijk de 2 ingegeven wachtwoorden
function checkPasswordsMatch() {
  var password1 = document.getElementById("wachtwoord").value;
  var password2 = document.getElementById("herhaalWachtwoord").value;

  if (password1.length < 8 || password2.length < 8) {
    alert("Het wachtwoord moet minimaal 8 karakters hebben.");
    return false;
  }

  if (password1 !== password2) {
    alert("Deze wachtwoorden komen niet overeen.");
    return false;
  }

  return true;
}