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



function togglerespmenu() {
    document.getElementById("respmenu").classList.toggle("resp_menu_closed");
}
