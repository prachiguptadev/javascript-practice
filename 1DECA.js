// create object
const PCObj = {
  name: "Lenovo",
  body: "metal",
  touchScreen: "no",
  window: 11,
  button() {
    console.log("pc on");
  },
};

const PCObj2 = Object.assign({}, PCObj);    //create a clone
PCObj2.name = "prachi";                     //change the PcObj name property
console.log(PCObj);
console.log(PCObj2);
