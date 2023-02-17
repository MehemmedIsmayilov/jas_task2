const persons = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },

  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

function mapTask(i) {
  persons.map((i) => {
    console.log("Hi my name is - " + i.name);
  });
}
function mapTask(i) {
  persons.map((i) => {
    console.log(i.height);
  });
}
function mapTask() {
  let sum = 0;

  persons.map((i) => {
    console.log(i.name + " vs " + parseInt(i.height));
    sum++;
  });
}
mapTask(persons);

// Mass total
let massNumber = persons.map((item) => parseInt(item.mass));
let massAllTotal = massNumber.reduce((acc, curr) => acc + curr);
console.log({ massAllTotal });
// Height total
let heightNumber = persons.map((item) => parseInt(item.height));
let heightAllTotal = heightNumber.reduce((acc, curr) => acc + curr);
console.log({ heightAllTotal });
// Eyes charakters total
let eyes = persons.map((i) => i.eye_color.length);
let eyeCharaktersTotal = eyes.reduce((acc, curr) => acc + curr);
console.log({ eyeCharaktersTotal });
// total all name characters
let nameLength = persons.map((i) => i.name.length - 1);
let nameFulllNameTotal = nameLength.reduce((acc, curr) => acc + curr);
console.log({ nameFulllNameTotal });
// filter <100
let filter100 = persons.filter((i) => parseInt(i.mass) < 100);
console.log({ filter100 });
// heigth <200
let filter200 = persons.filter((i) => parseInt(i.height) < 200);
console.log({ filter200 });
// filter male
let filterMale = persons.filter((i) => i.gender == "male");
console.log({ filterMale });
// filter female
let filterFemale = persons.filter((i) => i.gender == "female");
console.log({ filterFemale });
// sort mass
let sortMass = persons.sort((a, b) =>
  Number(a.mass) > Number(b.mass) ? 1 : -1
);
console.log({ sortMass });
//sort heigth
let sortHeigth = persons.sort((a, b) => Number(a.height) > Number(b.height));
console.log({ sortHeigth });
// sort name
let sortName = persons.sort((item) => String(item.name));
console.log({ sortName });
//sort gender
let sortGender = persons.sort((i) => i.gender);
console.log({ sortGender });
//every blue eyes
let everyBlueEyes = persons.every((i) => i.eye_color === "blue");
console.log({ everyBlueEyes });
// every mass more than 40
let everyMas40 = persons.every((i) => parseInt(i.mass) > 40);
console.log({ everyMas40 });
// every characters <200
let everyLittle200 = persons.every((i) => parseInt(i.height) < 200);
console.log({ everyLittle200 });
// every male?
let everyMale = persons.every((i) => i.gender == "male");
console.log({ everyMale });
// some one male
let someOneMale = persons.some((i) => i.gender == "male");
console.log({ someOneMale });
//some one blue
let someOneBlue = persons.some((i) => i.eye_color == "blue");
console.log({ someOneBlue });
// some one 210<
let someOneBig = persons.some((i) => i.height > "210");
console.log({ someOneBig });
// some one 50>
let someOneLittle = persons.some((i) => i.mass < "50");
console.log({ someOneLittle });
