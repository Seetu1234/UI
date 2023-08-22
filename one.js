const number = 201;
if (number <= 50) {
  console.log("total bill =" + number * 1);
} else if (number >= 50 && number <= 100) {
  console.log(`total bill =  ${50 + (number - 50) * 2}`);
} else if (number >= 101 && number <= 200) {
  console.log(`total bill =  ${50 + 100 + (number - 100) * 3}`);
} else {
  console.log("total bill =" + (50 + 100 + 300 + (number - 200) * 5));
}
