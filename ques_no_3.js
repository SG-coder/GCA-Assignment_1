// added two places in the array, remove kathmandu and printing the array and length of array.

let favPlaces = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]
favPlaces.splice(favPlaces.length, 0, "Chitwan", "Dhading");
favPlaces.splice(3,1);
console.log("The array is",favPlaces);
console.log("The length of array is :", favPlaces.length)

