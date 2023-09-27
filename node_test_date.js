require("./DateExtension.js");

let currentDate = new Date();
let nextDay = currentDate.addTime({
  hour: 1,
  minute: 6,
  year: 3,
});
console.log(nextDay.format("dd/MM/yyyy HH:mm:ss"));

console.log(nextDay.getCurrentDate());
