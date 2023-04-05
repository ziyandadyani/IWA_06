// const primaryPhone = 'O748105141'
// const secondaryPhone = '0219131568'

// // Only change below this line

// const primaryValid = typeof number == primaryPhone 
// const secondaryValid = typeof number == secondaryPhone

// console.log('Primary phone is valid numerical string:', primaryValid)
// console.log('Secondary phone is valid numerical string:', secondaryValid )




const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

//console.log(Number(primaryPhone) , Number(secondaryPhone) )

//const primaryValid =  Number(primaryPhone) !== NaN  // Doesnt work because NaN is not equal to itself NaN !== NaN will always be true 
//const secondaryValid = Number(secondaryPhone) !== NaN

const primaryValid = Object.is(NaN,Number(primaryPhone)) ? false : true
const secondaryValid = Object.is(NaN,Number(secondaryPhone)) ? false : true

// The code above checks whether the string telephone numbers, when converted to the number type , are equal to a NaN value using 
//Object.is , if condition is true true then it means its not a number (not NaN) and we assign the value of false to 
// const primaryValid/secondaryValid (validation), if false this means the string does have numerical digits and a value of true is
// assigned to const primaryValid/secondaryValid (validation)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

