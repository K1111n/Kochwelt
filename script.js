function sendMail(event){﻿
    event.preventDefault();
    const form = event.target;

    fetch("https://formspree.io/f/xpwrlyvk", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        form.reset();
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}


function togglerespmenu() {
    document.getElementById("respmenu").classList.toggle("resp_menu_closed");
}


// Portionen-Rechner

//document.addEventListener("DOMContentLoaded", () => {
 // const button = document.getElementById("button");
 // const input = document.getElementById("input");

  // Numerische Mengenanzahlen aus der linken Spalte der Tabelle
  //const quantityCells = document.querySelectorAll("td.nopadding-right");

  // Speichere Originalwerte einmalig
 // quantityCells.forEach((td) => {
 //   td.setAttribute("data-original", td.textContent.trim());
 // });

  // Event-Listener für den Button
 // button.addEventListener("click", (e) => {
 //   e.preventDefault();

    // Eingabewert aus dem Input-Feld holen und in eine Zahl umwandeln
  //  const portions = parseFloat(input.value);

    //Fehlermeldung wenn eins der drei fehlerhaften Eingaben abgegeben wird
  //  if (isNaN(portions) || portions < 1 || portions > 10) {
  //    alert("Bitte gib eine Portionenzahl zwischen 1 und 10 ein.");
  //    return;
  //  }
//
 //   quantityCells.forEach((td) => {
  //    const original = td.getAttribute("data-original");
   //   const num = parseFloat(original);
//
   //   if (!isNaN(num)) {
    //    const newValue = (num * portions).toFixed(2).replace(/\.00$/, ""); // \. steht für einen echten Punkt; $ bedeutet „am Ende des Strings"
    //    td.textContent = newValue;
    //  } else {
   //     td.textContent = original; // wenn es kein numerischer Wert ist soll nichts geändert werden
  // //   }
 //   });
 // });
//});



