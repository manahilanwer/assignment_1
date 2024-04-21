// creating a Guest List Array
let guestlist = ["Hamza", "manahil", "Misbah", "Mahrukh"];

// Making variable for those guest who cant come
var dontCome = guestlist[0];

// print the name of gust who cant come
console.log(dontCome, "nahi asakta");

// Add or Remove values From Guest List Array
guestlist.splice(0, 1, "shahzaib");

// Message print from bigger Table
console.log("Good News ! we have a found bigger Table for Dinner.");

// Adding a new value at starting index for array
guestlist.unshift("Ali");

// Adding a new value at ending index for array
guestlist.push("mehak");

// making a variable for storing a middle index for our guest list array
let middleIndex: number = Math.floor(guestlist.length / 2);

// addind a new guest to middle index array
guestlist.splice(middleIndex, 0, "osama");

// print message of updated List
console.log("updated List our guests");

// sending a invitation message to our guest one by one with their name
guestlist.forEach(oneguest => console.log(`salam ${oneguest},would you like dinner with me`));

// Inform that only two guest can be invited for dinner
console.log("unfortunatley, the new dinner table arrive on time, so I can only invite two guest dinner with me")

// using while-loop to remove guest from the array until only two names remain
while(guestlist.length > 2){
    let removedGuest = guestlist.pop();
    console.log(`sorry, ${removedGuest} i can invite you to dinner`);
}
// sending a invitation to the last two guest on the list
console.log("invitation to the last twoo Guests");
guestlist.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to dinner`));

// removing last two guest from the list
guestlist.pop();
guestlist.pop();

console.log("Empty List:", guestlist);
