// 1 ,2

var myname = "UsMan";
console.log(`Helo, ${myname},  would you like to learn some Python today?`);

// 3
console.log("UpperCase:", myname.toUpperCase());
console.log("LowerCase:", myname.toLowerCase());
console.log(
  "TitleCase:",
  myname.slice(0, 1).toUpperCase() + myname.slice(1).toLowerCase()
);

// 4
console.log(
  'John Burroughs once said, "The smallest deed is better than the greatest intention."'
);

// 5
var famous_person = "John Burroughs";
var message = `${famous_person} once said, "The smallest deed is better than the greatest intention."`;
console.log(message);

// 6

var person_name = "\tUsman\n";
console.log(person_name);
person_name = person_name.trim();
console.log(person_name);

// 7 8
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 16 / 2);

// 9
var favorite_number = 7;
console.log(`My favorite number is ${favorite_number}`);

// 10
// This is comment just for reference
console.log("This is a Comment Section");
// displaying username in console using prompt function created at 11-oct-2022
console.log(`Author of this file is ${myname}`);

// 11
var friends_name = ["Usman", "Ali", "Ahmed", "Hassan", "Kamran"];
for (var i = 0; i < friends_name.length; i++) {
  console.log(friends_name[i]);
}

// 12

for (var i = 1; i <= friends_name.length; i++) {
  console.log(`Hello, ${friends_name[i - 1]}! Welcome to nodeJs!`);
}

// 13

var transport_list = ["Car", "Bike", "Bus", "Train", "Airplane"];
for (var i = 0; i < transport_list.length; i++) {
  console.log(`I would like to own a fastest ${transport_list[i]}`);
}

// 14-16
// Use frequently so i function is created for this
const Invite_Print = (item, msg) => {
  // 19
  console.log(`Q19: Total People: ${item.length}`);
  for (var i = 0; i < item.length; i++) {
    console.log(`Hi, ${item[i]}! ${msg}`);
  }
};

// 14
var guest = ["Usman", "Ali", "Ahmed"];
// for (var i = 0; i < guest.length; i++) {
//   console.log(
//     `Hi, ${guest[i]}! You're invited to my dinner party tonight at 8:00pm.`
//   );
// }
const msg = "You're invited to my dinner party tonight at 8:00pm.";
Invite_Print(guest, msg);

// 15
console.log(`${guest[2]} can't make it to the dinner party tonight.`);
guest.pop("Ahmed");
guest.push("Daniyal");
Invite_Print(guest, msg);

// 16
// console.log("I found a bigger dinner table!");
var annouce = "I found a bigger dinner table! So i am invited more people.";
Invite_Print(guest, annouce);

guest.push("Umair", "Noman", "Zohaib");
Invite_Print(guest, msg);

// Add on start of list
guest.unshift("Abdullah");
// add on middle of list
guest.splice(3, 0, "Arslan");

guest.push("Ehtesham", "Rizwan");
// Invitation to all peoples
const msg_2 = "You're invited to my dinner party tonight at 9:45pm.";
console.log("\nInvitation to all peoples\n");
Invite_Print(guest, msg_2);

// 17
const msg_3 = "Sorry, i can only invite two people for dinner.";

console.log("\nShrinking guest list\n");
while (guest.length > 2) {
  console.log(`${guest[guest.length - 1]}, ${msg_3}`);
  guest.pop();
}

console.log("\nInvite guest list\n");
Invite_Print(guest, msg_2);

while (guest.length > 0) {
  guest.pop();
}

console.log("\nGuest list\n");
console.log(guest);

// 18
var places_world = [
  "WahCantt",
  "Abbotabad",
  "Islamabad",
  "Gilgit",
  "FairyMeadow",
];
console.log(places_world);

console.log("\nSorted places_world\n");
console.log(places_world.slice().sort());

console.log("\nOrignal places_world\n");
console.log(places_world);

console.log("\nReverse places_world\n");
console.log(places_world.slice().reverse());

console.log("\nOrignal places_world\n");
console.log(places_world);

console.log("\nReversed Array places_world\n");
places_world.reverse();
console.log(places_world);

console.log("\nReversed Back places_world\n");
places_world.reverse();
console.log(places_world);

console.log("\nSorted array places_world\n");
places_world.sort();
console.log(places_world);

console.log("\nReverse Sorted places_world\n");
places_world.reverse();
console.log(places_world);

// 19 Done
// 20
var mountain = ["K2", "Kangchenjunga", "Lhotse", "Makalu"];
var rivers = ["Nile", "Amazon", "Yangtze", "Mississippi"];
var countries = ["China", "India", "United States", "Indonesia"];
var languages = ["Mandarin", "Spanish", "English", "Hindi"];
var combined_array = [...mountain, ...rivers, ...countries, ...languages];
console.log(combined_array);
// 21
var jsObj = {
  name: "Usman",
  age: 25,
  institute: "PIAIC",
  city: "Islamabad",
  country: "Pakistan",
  qualification: "BSCS",
  skills: ["HTML", "CSS", "JS", "React", "NodeJS"],
};
// 22
// console.log(mountain[11]);
// 23
//24
let car = "subaru";
let listCar = [
  "BMW",
  "Audi",
  "Mercedes",
  "Toyota",
  "Honda",
  "Suzuki",
  "Nissan",
  "subaru",
];
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
console.log(car === "subaru");
console.log(car != "audi");
console.log(car > "audi");
console.log(car && "subaru" ? true : false);
console.log(listCar.includes("subaru"));
console.log(car === "subaRu");
console.log(car < "subaru");
console.log(car < "audi");
console.log(listCar.includes("subaRu"));
console.log(listCar.includes("city"));
console.log(typeof car === "string");
console.log(typeof listCar === "string");
console.log(typeof listCar === "object");

// 25
// var alien_colors = ["green", "yellow", "red"];
console.log("\n");

// If Version of 26
var alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 5 points!");
}

if (alien_color == "green" && alien_color == "yellow") {
  console.log("You earned 0 points!");
}

// 26
// else version of 26
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You earned 5 points!");
} else {
  console.log("You earned 10 points!");
}
// 27
alien_color = "green";
if (alien_color == "green") {
  console.log(" the player earned 5 points");
} else if (alien_color == "yellow") {
  console.log(" the player earned 10 points");
} else if (alien_color == "red") {
  console.log(" the player earned 15 points");
}
alien_color = "yellow";
if (alien_color == "green") {
  console.log(" the player earned 5 points");
} else if (alien_color == "yellow") {
  console.log(" the player earned 10 points");
} else if (alien_color == "red") {
  console.log(" the player earned 15 points");
}
alien_color = "red";
if (alien_color == "green") {
  console.log(" the player earned 5 points");
} else if (alien_color == "yellow") {
  console.log(" the player earned 10 points");
} else if (alien_color == "red") {
  console.log(" the player earned 15 points");
}

// 28
var age = 10;
if (age < 2) {
  console.log(" the person is a baby");
} else if ((age >= 2) & (age < 4)) {
  console.log(" the person is a toddler");
} else if ((age >= 4) & (age < 13)) {
  console.log(" the person is a kid");
} else if ((age >= 13) & (age < 20)) {
  console.log(" the person is a teenager");
} else if ((age >= 20) & (age < 65)) {
  console.log(" the person is a Adult");
} else if (age >= 65) {
  console.log(" the person is a elder");
}

// 29

var favorite_fruits = ["Apple", "Mango", "Grapes"];

if (favorite_fruits.includes("Apple")) {
  console.log("You really like Apple");
}
if (favorite_fruits.includes("Banana")) {
  console.log("You really like Banana");
}
if (favorite_fruits.includes("Mango")) {
  console.log("You really like Mango");
}
if (favorite_fruits.includes("PineApple")) {
  console.log("You really like PineApple");
}
if (favorite_fruits.includes("Grapes")) {
  console.log("You really like Grapes");
}

// 30

var users = ["Usman", "Admin", "Ali", "Rehan", "Daud"];
users.forEach((element) => {
  if (element === "Admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(` Hello ${element}, thank you for logging in again.`);
  }
});

// 31
var age = 10;
if (users) {
  if (age < 2) {
    console.log(" the person is a baby");
  } else if ((age >= 2) & (age < 4)) {
    console.log(" the person is a toddler");
  } else if ((age >= 4) & (age < 13)) {
    console.log(" the person is a kid");
  } else if ((age >= 13) & (age < 20)) {
    console.log(" the person is a teenager");
  } else if ((age >= 20) & (age < 65)) {
    console.log(" the person is a Adult");
  } else if (age >= 65) {
    console.log(" the person is a elder");
  }
}

users.splice(0, users.length);
if (users.length == 0) {
  console.log("No user Found");
}

// 32
var current_users = ["imran", "Ali", "kamran", "zain", "hamza"];
var new_users = ["usman", "ali", "arslan", "zain", "asim"];

new_users.forEach((element) => {
  if (current_users.includes(element)) {
    console.log(element, "You have to enter a new Username");
  } else {
    console.log(element, "Username Is available");
  }
});

// 33

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

nums.forEach((element) => {
  if ((element > 3) & (element < 10)) {
    console.log(`${element}th`);
  }
  if (element == 3) {
    console.log(`${element}rd`);
  }
  if (element == 2) {
    console.log(`${element}nd`);
  }
  if (element == 1) {
    console.log(`${element}st`);
  }
});

// 34
var pizzas = ["bar b-q", "mexican", "beef"];
pizzas.forEach((element) => {
  console.log(`I like ${element} pizza`);
});
console.log("I love pizza\nBest food in the world\nLove pizzzas");
// 35
var animals = ["cow", "goat", "horse"];
animals.forEach((element) => {
  console.log(`A ${element} would make a great pet`);
});
console.log("Any of these animals would make a great pet");

// 36
// const make_tshirt = (size, text) => {
//   console.log(
//     `The size of the t-shirt is ${size} and the text on it is ${text}`
//   );
// };
// 37
const make_tshirt = (size = "large", text = "I love JAVASCRIPT") => {
  console.log(
    `The size of the t-shirt is ${size} and the text on it is ${text}`
  );
};

// 38
const describe_city = (city, country = "Pakistan") => {
  console.log(`${city} is in ${country}`);
};

describe_city("Karachi");
describe_city("Lahore");
describe_city("Wah Cantt");
describe_city("Madrid", "Spain");

// 39

const city_country = (city, country) => {
  console.log(`${city}, ${country}`);
};

city_country("WahCantt", "Pakistan");
city_country("Lahore", "Pakistan");
city_country("Sialkot", "Pakistan");

// 40
const make_album = (artist, title, track = null) => {
  var album = {
    artist: artist,
    title: title,
    track: track,
  };
  return album;
};

console.log(make_album("Ali", "Don't know title"));
console.log(make_album("Atif Aslam", "Don't know title"));
console.log(make_album("Asim", "Don't know title"));
console.log(make_album("Asim", "Don't know title", 10));

// 41
var magician = ["Ali", "Usman", "Daud", "Rehan"];
var txt = "The Great";

const show_magician = (magician) => {
  magician.forEach((element) => {
    make_great(element, txt);
  });
};

// 42
const make_great = (name, txt) => {
  console.log(`${txt}  ${name}`);
  return `${txt}  ${name}`;
};

show_magician(magician);

// 43

var magician_copy = magician.slice(0, magician.length);
var new_magician_copy = [];
magician_copy.forEach((element) => {
  //   make_great(element, txt);
  new_magician_copy.push(make_great(element, txt));
});
console.log(new_magician_copy);
console.log(magician_copy);

// 44
const sandwich_order = (ingediants) => {
  //   console.log(ingediants);
  all = ingediants.join(" , ");
  ingediants.forEach((element) => {
    console.log(`Adding ${element} to your sandwich`);
  });
  console.log("Your sandwich is ready  containg" + all + "\n");
};
sandwich_order(["cheese", "tomato", "onion", "chilli", "mayo"]);
sandwich_order(["cheese", "tomato", "onion", "chilli", "chicken"]);
sandwich_order(["cheese", "pineapple", "onion", "peri peri", "olives"]);

// 45
const cars_info = (...arguments) => {
  console.log(...arguments);
};
cars_info({ manufacture: "Toyota", model: "Corolla" });
cars_info({ manufacture: "Suzuki", model: "Cultus", year: 2010 });
cars_info({ manufacture: "Suzuki", model: "Cultus", year: 2010, color: "red" });
