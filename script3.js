jourMaxParMois = {
    '01': 31,
    '02': 29,
    '03': 31,
    '04': 30,
    '05': 31,
    '06': 30,
    '07': 31,
    '08': 31,
    '09': 30,
    '10': 31,
    '11': 30,
    '12': 31
}



function verifierFormatDate(date){
const divisionDate = date.split('/');
//console.log(`Résultat :  ${divisionDate}`);

const jour = parseInt(divisionDate[0]);
const mois = parseInt(divisionDate[1]);
const annee = parseInt(divisionDate[2]);

//vérifier que mois rentre dans tranche 12 mois
if(mois > 12){
    //console.log("impossible");
    return false;
}

    //vérifier que jour rentre dans tranche 31 jours
    if(jour > 31){
        //console.log("faux");
        return false; 
    }

    //vérifier année
    if (annee < 999 || annee > 9999){
    //console.log(date[2]);
    //console.log("C'est faux !");
    } else {
   // console.log("C'est vrai");
    }

    //vérifier année bisextile
    if (annee % 4 != 0){
    //console.log("Année non-bisextile")
    jourMaxParMois['02'] < 29; 
    }

    //vérifier jour max pour chaque mois
    if (jour > jourMaxParMois[divisionDate[1]]){
       // console.log("mauvais jour");
        return false
    } else {
        //console.log("OK");
    }
   return divisionDate;
}




function isPalindrome(dateEnString){
    const resultat = verifierFormatDate(dateEnString);
    //console.log (resultat);

    const date = [];
   
   for (let i = 0; i < dateEnString.length; i++){
    if(dateEnString[i] == "/"){
        date.push('');
    } else {
        date.push(dateEnString[i]);
    }
    //console.log(date);
   }

  const nouvelleDate = date.join('');
  nouvelleDate.trim();
  //console.log(nouvelleDate);
   
// inverser la date pour future comparaison
   let dateInversee = '';
   for (let i = nouvelleDate.length -1; i >= 0; i --){
    dateInversee += nouvelleDate[i];
   } 

// comparaison paramètre d'entrée et date inversée
   if(nouvelleDate === dateInversee){
    //console.log(nouvelleDate, dateInversee);
    //console.log("La date est bien un palindrome");
    return true;
   } else {
    //console.log(nouvelleDate, dateInversee);
    //console.log("La date n'est pas un palindrome");
    return false;
   }

   return nouvelleDate;
}



function getNextDate(date){
    date.setDate(date.getDate() +1);
    // return date
}


function getNextPalindromes(x){
    const dateActuelle = new Date();
    //getNextDate(dateActuelle);
    while (x > 0){
        let jour = dateActuelle.getDate();
        let mois = dateActuelle.getMonth() + 1 ;
        let anneeComplete = dateActuelle.getFullYear();

        if (jour < 10){
        jour = '0'+jour
        }

        if (mois < 10){
            mois = '0'+mois
        }
        if (isPalindrome(`${jour}/${mois}/${anneeComplete}`))
        {
            console.log(`${jour}/${mois}/${anneeComplete}`)
            x --
        }
        getNextDate(dateActuelle);
    }
}

getNextPalindromes(1);
