// hey!



// This is an example on a simple conditional statement
// ____________________

var ACCESSORY_PRICE = 9.99;
var bankBalance = 302.13;
var amount = 99.99;

amount = amount * 2;

// can I afford the accessory?

if ( amount < bankBalance ) {
	console.log( "I will take the gadget!");
	amount = amount + ACCESSORY_PRICE;
}
// otherwise

else {
	console.log("I don't have enough mula.");
}
