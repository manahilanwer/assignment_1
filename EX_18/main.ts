// making a array of Countries and print its Orginal Order
let CountriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina",];
console.log("Orginal Order:", CountriesToVisit);

// print the Array Alphabetical order without modify the Actual Array List
console.log("Alphabetical Order:", [...CountriesToVisit].sort());

//show that the array is still in its orginal order
console.log("still in orignal order:", CountriesToVisit);

// print the array in reversed order without modifying the actual Array List
console.log("orignal array reversed:", CountriesToVisit.reverse());

// show that the array is still in its orginal order
console.log("still in orignal order:", CountriesToVisit);

// we have changed orignal array order now
console.log("orginal array reverse:", CountriesToVisit.reverse());

// we have changed orignal array order nowto show that it's back to its orginal order
console.log("back to orginal order:", CountriesToVisit.reverse());

// print the array to show that its order has been changed in Alphabetical order now
console.log("sorted in Alphabetical Order:", [...CountriesToVisit].sort());

// we have changed again the orignal array order now in reserve order again
console.log("orginal array reverse Again:", CountriesToVisit.reverse());

