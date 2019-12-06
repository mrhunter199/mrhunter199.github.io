var d = new Date();
var time = d.getHours();

if (time < 12) {
    //var greeting = "Guten Morgen";
    var greeting = "Ho, ho, ho";
var emoji = "🎅";
    //var emoji = "🌞";
}
if (time >= 12) {
    //var greeting = "Hallo";
var greeting = "Ho, ho, ho";
    //var emoji = "☀";
var emoji = "🎅";

}
if (time >= 18) {
    //var greeting = "Guten Abend";
var greeting = "Ho, ho, ho";
    //var emoji = "🌛";
var emoji = "🎅";
}

var greetingSelector = document.querySelector('.external-script-widget[data-widget-id="greeting"]');
var firstName = we.authMgr.getUser().firstName;
var profileLink = "/profile/" + we.authMgr.getUser().id;
var greetingMessage = greeting + ',&nbsp;' + firstName + '!<br> Schön, dass Du hier bist! ' + emoji;

if (greetingSelector) {
    greetingSelector.innerHTML = greetingMessage.link(profileLink);
} else {
    console.log("This didn't work. Try again");
};
