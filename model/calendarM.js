'use strict'

const shortMonth = [1,3,5,8,10]
const longMonth = [0,2,4,6,7,9,11]

function getDate(){
    const actualDate  = new Date()
    console.log(actualDate);
    const month = actualDate.getMonth()
    let daysInMotnh 
    longMonth.includes(month) ? daysInMotnh = 32 : daysInMotnh = 31
    return daysInMotnh
}

const returnedValue = getDate()

module.exports = returnedValue