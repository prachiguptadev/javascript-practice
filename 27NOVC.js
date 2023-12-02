const monuments = [
  "Taj Mahal",
  "Red Fort",
  "Hawa Mahal",
  "Charminar",
  "Agra Fort",
];

monuments.pop();                            //remove item ending
monuments.push("Gateway of india");         //add item ending
monuments.unshift("India gate");            //remove item starting
monuments.shift();                          //remove item starting
monuments.splice(2, 1, "Louts temple");     //index, delete, adding
monuments.reverse();                        //reverse array

monuments.sort();                            //alphabaticaly sort array

console.log(monuments);
