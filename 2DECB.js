// crete a object using loop

const cycleObj = {
  name: "Atlas",
  body: "zink",
  tyer: 2,
  ringBell: 1,
  pedal: 2,
  run: function () {
    console.log("cycle is run");
  },
};

const cycleObj2 = {};
for (let key in cycleObj) {
  cycleObj2[key] = cycleObj[key];
}

cycleObj2.name = "BSA Cycles";
console.log(cycleObj);
console.log(cycleObj2);
