console.log("Test");

var myText = document.querySelector('.external-script-widget[data-widget-id="myText"]');

if (myText) {
	myText.innerHTML = 'Woohoo das hat funktioniert! ' + we.util.ui.name(we.authMgr.getUser()) + ' du bist ein Genie :D';
} else {
    console.log("This didn't work. Try again");
}