var guestlist = ["Hamza", "manahil", "Misbah", "Mahrukh"];
var dontCome = guestlist[0];
console.log(dontCome, "nahi asakta");
guestlist.splice(0, 1, "shahzaib");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would u like to Dinner with me?")); });
