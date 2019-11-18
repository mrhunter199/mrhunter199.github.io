var d = new Date();
var time = d.getHours();

if (time < 12) {
    var greeting = "Guten Morgen";
    var emoji = "🌞";
}
if (time > 12 && time <18) {
    var greeting = "Hallo";
    var emoji = "☀";
}
if (time > 18) {
    var greeting = "Guten Abend";
    var emoji = "🌛";
}

var greetingSelector = document.querySelector('.external-script-widget[data-widget-id="greeting"]');

if (greetingSelector) {
    greetingSelector.innerHTML = greeting + ' ' + we.authMgr.getUser().firstName + ' Schön, dass Du da bist! ' + emoji;
} else {
    console.log("This didn't work. Try again");
}


// Hallo,&nbsp;{{user.profile.firstName}}!<br>Schön, dass Du hier bist!