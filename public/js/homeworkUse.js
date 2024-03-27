'use strict'

const toDate = document.querySelectorAll('.to--date')

for(const el of toDate){
    const day  = 24* 60*60*1000
    const splitted = el.textContent.split(' ')
    const actualDate = new Date()
    const taskDate =  new Date(splitted[1])
    const taskDateUtc = Date.UTC(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate())
    const actualDateUtc = Date.UTC(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate())
     const daysToDate = (taskDateUtc - actualDateUtc)/day
    daysToDate <=5 && daysToDate>3 ? el.style.color = 'rgb(255, 223, 44)' : ''     
    daysToDate <=3 ? el.style.color = 'rgb(255, 91, 91)' : ''     
}


function selectColor(){
    
}