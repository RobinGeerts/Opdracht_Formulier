//ophalen informatie
let voornaam =      document.getElementById('voornaam');
let naam =          document.getElementById('naam');
let gebruikernaam = document.getElementById('gebruiker');
let email =         document.getElementById('e-mail')
let pasword =       document.getElementById('wachtwoord');
let paswordRepeat = document.getElementById('herhaalWachtwoord');
let adres =         document.getElementById('adres');
let land =          document.getElementById('land');
let provincie =     document.getElementById('provincie');
let zipp =          document.getElementById('select');

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
    
}

//Voor de controle van een leeg veld gebruik je een functie checkEmptyField waar je steeds 2 parameters 
//gaat meegeven: veld en melding. Voeg na controle in deze functie de melding toe aan de array errors. 
function checkEmptyField(veld, melding){

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

}

//Controleer ook of de algemene voorwaarden zijn aangeduid. Dit is verplicht. 
//Voeg een melding toe aan de array errors.
function checkUseAgreement(){

}