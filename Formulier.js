//declaratie 
//const voornaam = document.getElementById('voornaam');
//const naam = document.getElementById('naam');
//const gebruiker = document.getElementById('gebruiker');
//const email = document.getElementById('e-mail');
//const wachtwoord = document.getElementById('wachtwoord');
//const herhaalwachtwoord = document.getElementById('herhaalWachtwoord');
//const adres = document.getElementById('adres');
//const land = document.getElementById('land');
//const provincie = document.getElementById('provincie');
//const postcode = document.getElementById('postcode');
let errors = ["<h4>Yikes, errors..</h4>"];

//Bij het klikken op de knop trigger je de functie validateForm. 
//In deze functie controleer je alle velden of spreek je eventueel andere functies aan.
//Maak gebruik van een array errors waarin je iedere melding gaat bewaren.
//Volgende velden mogen niet leeg zijn:
// VOORNAAM
// NAAM
// GEBRUIKERSNAAM
// ADRRES
// LAND
// PROVINCIE
//Indien het veld leeg is geef je bijvoorbeeld volgende melding “Het veld voornaam is vereist.”.
function validateForm(){
    checkEmptyField("voornaam", "<p>Het veld voornaam is vereist.</p>");
    checkEmptyField("naam", "<p>Het veld naam is vereist.</p>");
    checkEmptyField("gebruiker", "<p>Het veld gebruikersnaam is vereist.</p>");
    checkEmptyField("e-mail", "<p>Het veld e-mail is vereist.</p>");
    checkEmptyField("wachtwoord","<p>Het veld wachtwoord is vereist.</p>");
    checkEmptyField("herhaalWachtwoord", "<p>Het veld herhaalwachtwoord is vereist.</p>");
    checkEmptyField("adres", "<p>Het veld adres is vereist.</p>");
    checkEmptyField("land", "<p>Het veld land is vereist.</p>");
    checkEmptyField("provincie", "<p>Het veld provincie is vereist.</p>");
    checkEmptyField("postcode", "<p>Het veld postcode is vereist.</p>");
document.getElementById('controle').innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">" + errors;
}

//Voor de controle van een leeg veld gebruik je een functie checkEmptyField waar je steeds 2 parameters 
//gaat meegeven: veld en melding. Voeg na controle in deze functie de melding toe aan de array errors. 
function checkEmptyField(veld, melding){
    if(document.getElementById(veld).value == "")
    {
        errors.push(melding);
    }
}



//Voor de controle of het een geldig e-mailadres is gebruik je de functie validateEmail waar je één 
//parameter meegeeft namelijk: e-mailadres. Deze functie geeft een boolean terug. 
//Indien de controle niet geldig is voeg je de melding “E-mailaders is niet correct.” toe aan de array errors.

// Het domein van het mailadres moet voldoen aan volgende criteria:
//o Moet starten met een letter of nummer
//o Mag een punt of koppelteken(s) bevatten
function validateEmail(emailadress){
if (emailadress =="")
{
    return false;
}
else 
{
    return true;
}
}

//Voor de controle van de wachtwoorden controleer je of beide zijn ingevuld. Dit mag maar hoeft niet via 
//een functie. Een wachtwoord moet langer zijn dan 7 karakters en moet steeds gelijk zijn aan het herhalend 
//wachtwoord. Er kunnen dus 4 meldingen voorkomen: 2 voor de lege velden, 1 indien het te kort is en 1 
//wanneer ze niet gelijk zijn aan elkaar. Voeg de meldingen toe aan de array errors.

//De gebruikersnaam van het mailadres moet voldoen aan volgende criteria:
//o Moet minstens één karakter lang zijn
//o Mag letters, nummers of underscores bevatten
//o Mag punten of koppeltekens bevatten, maar niet als eerste karakter
function checkPasword(){
    let wachtwoord = getElementById('wachtwoord');
    let herhaalWachtwoord = getElementById('herhaalWachtwoord');
    if (wachtwoord === herhaalWachtwoord)
    {
        return true;
    }
    else
    {
        return 
    }
}

//Voor de controle of er een betalingswijze is aangeduid, gebruik je de functie validatePayment waar je één 
//parameter meegeeft namelijk: veld. 
//In deze functie vul je de P-tag binnen de blauwe (betalingswijze) alert op. 
function validatePayment(veld){

}

//Voor de controle van de postcode gebruik je een functie checkPC waar je één parameter meegeeft 
//namelijk: veld. Indien het veld leeg is geef je de melding “Het veld postcode is vereist.”.
//De waarde moet ook groter of gelijk zijn aan 1000 en kleiner dan 10000. Dus van 1000 t.e.m. 9999 is geldig! 
//Geef anders de melding “De waarde van postcode moet tussen 1000 en 9999 liggen.”.
//Voeg deze meldingen toe aan de array errors. 
function checkPC(){
    if (postcode >=1000 && postcode < 10000)
    {
        return true;
    }
    else
    {
        return false;
    }
}

//Controleer ook of de algemene voorwaarden zijn aangeduid. Dit is verplicht. 
//Voeg een melding toe aan de array errors.
function checkUseAgreement(id){
const validate = getElementById('checkbox_1');
if(validate = true)
{
    return true;
}
else 
{
    return false;
}
}