var food = ['Bratwurst', 'Champignons', 'Dieses Brot mit Gemüse', 'Langos', 'Speckkuchen', 'Pommes', 'Elchburger', 'Lachs', 'Waffeln', 'Crepes', 'Reibekuchen', 'Spießbraten', 'Steak', 'Raclette', 'Baumstriezel', 'Schwedische Fischsuppe'];

function getFood() {
var randomFood = food[Math.floor(Math.random()*food.length)];
//console.log(randomFood);
return randomFood
}

var antwort = getFood();

//console.log(antwort);
