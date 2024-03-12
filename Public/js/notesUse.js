'use strict'

const addText = document.querySelector('.add--text')
const textAreaBox = document.querySelector('.textarea--box')
const whereAddText = document.querySelector('.where--add--text')
const sheetsBox = document.querySelector('.sheets--box')

const allNotes = {
    arkusz1: ''
}
const createSheet=  function(notes) {
    sheetsBox.textContent = ''

    for(let [y,u] of Object.entries(notes)){
        const html =`
        <article class="sheet-box">
                <h1>${y}</h1>
                <p>${u}</p>
            </article>`
        sheetsBox.insertAdjacentHTML('afterbegin', html)
        
    }
}


addText.addEventListener('click', ()=>{
    const whichSheet = whereAddText.value  
    if(whichSheet === '0'){
        const newSheet = prompt(`Podaj nazwę nowego arkusza`)
       for(let key of Object.keys(allNotes)){
        if(newSheet!==key){
            allNotes[newSheet] = textAreaBox.value 
            const html = `
            <option value="${newSheet}">${newSheet}</option>
            `
            whereAddText.insertAdjacentHTML('afterbegin', html)
            createSheet(allNotes)
        }else{ console.log('istnieje')}
       }        
    }else{           
    allNotes[whichSheet] += textAreaBox.value
    createSheet(allNotes)
    }
   
    
})

