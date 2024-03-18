'use strict'

const month2 = document.querySelector('.month')

const shortMonth = [1,3,5,8,10]
const longMonth = [0,2,4,6,7,9,11]

function getDate(){
    const actualDate  = new Date()
    console.log(actualDate);
    const month = actualDate.getMonth()
    console.log(month);
    
    return month
}




// function createDays(month) {
//     let count 
//     longMonth.includes(month) ? count = 31 : count= 30
//     for(let x  = count; x > 0; x--){
//         const html = `
        
//         month2.insertAdjacentHTML('beforeend', html)
//             }


// }

// createDays(getDate())