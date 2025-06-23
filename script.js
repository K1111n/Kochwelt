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



