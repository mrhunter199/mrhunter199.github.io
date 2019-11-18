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
var firstName = we.authMgr.getUser().firstName;
var profileLink = "/profile/" + we.authMgr.getUser().id
if (greetingSelector) {
    greetingSelector.innerHTML = greeting + ',&nbsp;' + firstName + '!<br> Schön, dass Du da bist! ' + emoji;
} else {
    console.log("This didn't work. Try again");
}

var a = document.createElement('a');
var linkText = document.createTextNode("my title text");
a.appendChild(linkText);
a.title = "my title text";
a.href = profileLink; 
document.greetingSelector.appendChild(a);