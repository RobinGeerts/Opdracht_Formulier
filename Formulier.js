//Declaratie
let antwoord ="";
let errors = [];
let paswoord1  = false;
let paswoord2 = false;
let gebruikersnaam="";
let email="";
let betaling = [];
let postcode;
//FUNCTIE 1

//Indien het veld leeg is geef je bijvoorbeeld volgende melding “Het veld voornaam is vereist.”.
function validateForm(){
    let errors = [];
    document.getElementById('controle').innerHTML = "<div></div>";
    document.getElementById('controle2').innerHTML = "<div></div>";
    document.getElementById('betaling').innerHTML = "<div></div>";

    //check op lege inputfields

    //check voornaam
    checkEmptyField("voornaam")? errors.push("<p>Het veld voornaam is vereist.</p>"): null;

    //check naam
    checkEmptyField("naam")? errors.push("<p>Het veld naam is vereist.</p>"): null;

    //check gebruikersnaam
    checkEmptyField("gebruikersnaam")? errors.push("<p>Het veld gebruikersnaam is vereist.</p>"): gebruikersnaam = document.getElementById("gebruikersnaam").value;
    if (gebruikersnaam != "")
    {
      testGebruikersnaam(gebruikersnaam)? null: errors.push("<p>Deze gebruikersnaam is ongeldig</p>");
    }

    //check email
    checkEmptyField("e-mail")? errors.push("<p>Het veld e-mail is vereist.</p>"): email = document.getElementById("e-mail").value;
    if (email != "")
    {
      validateEmail(email)? null: errors.push("<p>E-mailaders is niet correct.</p>");
    }

    //check wachtwoord en herhaling 
    checkEmptyField("wachtwoord")? errors.push("<p>Het veld wachtwoord is vereist.</p>"): paswoord1 = document.getElementById("wachtwoord").value;
    checkEmptyField("herhaalWachtwoord")? errors.push("<p>Het veld herhaalwachtwoord is vereist.</p>"): paswoord2 = document.getElementById("herhaalWachtwoord").value;
    if (checkPasswordsMatch(paswoord1, paswoord2)==1)
    {
      errors.push("<p>Het wachtwoord moet minimaal 8 karakters hebben.</p>");
    }
    if (checkPasswordsMatch(paswoord1, paswoord2)==2)
    {
      errors.push("<p>Deze wachtwoorden komen niet overeen.</p>");
    }
    console.log(errors);  

    //check adres
    checkEmptyField("adres")? errors.push("<p>Het veld adres is vereist.</p>"): null;

    //check land
    checkEmptyField("land")? errors.push("<p>Het veld land is vereist.</p>"): null;

    //check provincie
    checkEmptyField("provincie")? errors.push("<p>Het veld provincie is vereist.</p>"): null;
    
    //check postcode
    checkEmptyField("postcode")? errors.push("<p>Het veld postcode is vereist.</p>"): postcode = parseInt(document.getElementById("postcode").value);
    if(postcode != null)
    {
    checkPC(postcode)? null: errors.push("<p>De waarde van postcode moet tussen 1000 en 9999 liggen.</p>");
    }

    //algemene voorwaarde
    checkCheckBox()? errors.push("Je moet de algemene voorwaarden accepteren."): null;

    //validatie betalingskeuze
    validatePayment("radio") ? antwoord : errors.push('<p>Selecteer een betalingwijze</p>');
   
    //Terug gave van de functie controle
    if (errors.length === 0)
      {
        document.getElementById('controle2').innerHTML = "<div class=\"alert alert-success\" role=\"alert\"><H4>Goed gedaan!</H4><p>Aww yeah je werd geregistreerd</p></div>";
        document.getElementById('betaling').innerHTML = "<div class=\"alert alert-primary\" role=\"alert\"><H4>Betalingswijze</H4><p>Je betalingswijze is " + antwoord + "</p></div>";
      }
    else 
      {
        document.getElementById('controle').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"><H4>Yikes, errors..</h4><p>" + errors.join("") + "</p></div>";
      }
}

//Functie 2 CheckEmptyField Deze functie werkt :D
function checkEmptyField(veld) {
  let textField = document.getElementById(veld).value;
  if (textField == "")
    return true;
}

//Functie 3 Check de checkbox aangeduid of niet ? Deze functie werkt :D
function checkCheckBox() {
  let checkBox = document.getElementById("checkbox_1");
  if (checkBox.checked == false)
    return true;
  else 
    return false;
}

//Functie 4 check ingegeven wachtwoorden  Deze functie werkt Niet
function checkPasswordsMatch(paswoord1, paswoord2) {
  if (paswoord1.length < 8 || paswoord2.length < 8) {
    return 1//errors.push("Het wachtwoord moet minimaal 8 karakters hebben.");
  }
  else if (paswoord1 !== paswoord2) {
    return 2//errors.push("Deze wachtwoorden komen niet overeen.");
  }
  else 
  {
    return 3//false;
  }
}

//Functie 5 check email Deze functie werkt :D
function validateEmail(email) {
let regex = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]+.[a-z]{2,3}$/;

return regex.test(email);
}
function testGebruikersnaam(gebruikersnaam)
{
  let gebruikersnaamregex = /^[a-zA-Z0-9]+[a-zA-Z0-9]$/;
  return gebruikersnaamregex.test(gebruikersnaam);
}

//Functie 6 check betalingsvalidatie Deze functie werkt :D
function validatePayment(veld) {
  betaling = document.getElementsByName(veld);
for (let i = 0; i < betaling.length; i++) {
if (betaling[i].checked) {
antwoord = betaling[i].value;
return antwoord;
}
}
}

//Functie 7 check waarde postcode
function checkPC(veld)
{
  if (veld >= 1000 && veld < 10000)
  return true
  else
    return false;
}