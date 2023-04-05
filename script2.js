// const rent = 400;
// const tax = '12%';
// const food = 51.7501;
// const salary = 800;
// const transport = 10.2;
// const hourOfDay = 00;
// const minuteOfDay = 00;

// // Only change below this line

// if hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
// 	const taxAsDecimal = tax / '100'
//   const startingAfterTax = salary * '1' - taxAsDecimal
// 	const balace = starting - transport - food - rent
// }
	
// console.log(balance.toFixed(3))

const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line


if ((hourOfDay !== undefined && minuteOfDay !== undefined) && (hourOfDay == '00' && minuteOfDay == '00')) {
  const newTax = tax.substring(0,tax.length-1) // removes last character from the string "tax"
  const taxAsDecimal = Number(newTax) / 100
  const startingAfterTax = salary - (salary*taxAsDecimal)
	const balance = startingAfterTax - transport - food - rent

  console.log('R',balance.toFixed(2))
}
	
// if I had used a strict equality "===" for (hourOfDay === '00' && minuteOfDay === '00') this would return false 
// this is because the a number 0 (actual numerical value of hourOfDay and minuteOfDay )isnt the same thing as the string '00'
