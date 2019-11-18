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

var greetingSelector = document.querySelector('data-widget-id="greeting"');

if (greetingSelector) {
	greetingSelector.innerHTML = greeting + ' ' + we.util.ui.name(we.authMgr.getUser()) + ' Schön, dass Du da bist! ' + emoji;
} else {
    console.log("This didn't work. Try again");
}