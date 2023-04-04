// const primaryPhone = 'O748105141'
// const secondaryPhone = '0219131568'

// // Only change below this line

// const primaryValid = typeof number == primaryPhone 
// const secondaryValid = typeof number == secondaryPhone

// console.log('Primary phone is valid numerical string:', primaryValid)
// console.log('Secondary phone is valid numerical string:', secondaryValid )

const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'



const primaryValid =  Number(primaryPhone) !== NaN
const secondaryValid = Number(secondaryPhone) !== NaN

//
//console.log(Number(primaryPhone) , Number(secondaryPhone) )
//

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

