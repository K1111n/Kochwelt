function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xpwrlyvk", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}

<<<<<<< HEAD
let portions;
let currentValue;
let newValue;

document.getElementById("button").onclick = function() {
    portions = parseFloat(document.getElementById("input").value);
    currentValue = parseFloat(document.getElementById("left-data").textContent);
    newValue = currentValue * portions;
    document.getElementById("left-data").textContent = newValue.toFixed(2);
=======
function togglerespmenu() {
    document.getElementById("respmenu").classList.toggle("resp_menu_closed");
>>>>>>> 853369ba60a5957aabd1464894d5fea52822b82a
}