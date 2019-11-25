alert("Al U klaar bent met de bestelling voer dan het woord stop in en dan krijgt U de bon ")
var bestelling;
var aantalfris = 0;
var aantalbier = 0;
var aantalwijn = 0;
var totaal = 0;

while (bestelling != "stop"){
    bestelling = prompt("Welke bestelling wilt u toevoegen? \n\n fris \u20AC2 \n bier \u20AC2 \n wijn \u20AC3 ");
    
    if (bestelling == "fris" ){
        getal = parseInt(prompt("Hoeveel " + bestelling + " wilt u hebben."));
        frisprijs = getal *2;
        aantalfris += getal;
        totaal = totaal + frisprijs;

    }
    else if (bestelling == "bier"){
        getal = parseInt(prompt("Hoeveel " + bestelling + " wilt u hebben."));
        bierprijs = getal *2;
        aantalbier += getal;
        totaal = totaal + bierprijs;
    }

    else if (bestelling == "wijn"){
        getal = parseInt(prompt("Hoeveel "  + bestelling + " wilt u hebben."));
        wijnprijs = getal *3;
        aantalwijn += getal;
        totaal = totaal + wijnprijs;
    }
}
        
document.write ("fris: " + aantalfris + " x \u20AC2 =" + '\u20AC' + aantalfris*2);
document.write ("<br>");
document.write ("bier: " + aantalbier + " x \u20AC2 =" + '\u20AC' + aantalbier*2);
document.write ("<br>");
document.write ("wijn: " + aantalwijn + " x \u20AC3 =" + '\u20AC' + aantalwijn*3);
document.write ("<br>");
document.write ("totaal: " + '\u20AC' + totaal);


