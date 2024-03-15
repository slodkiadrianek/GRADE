'use strict'

const addText = document.querySelector('.add--text')
const textAreaBox = document.querySelector('.textarea--box')
const whereAddText = document.querySelector('.where--add--text')
const listBox = document.querySelector('.list--box-1')
const leftSide = document.querySelector('.left--side')
const note  = document.querySelector('.note')
const sheet = document.querySelector('.sheet')


const allNotes = {
    arkusz1: ``
}
const createSheet=  function(notes) {
    listBox.textContent = ''

    for(let [key,value] of Object.entries(notes)){
        const html =`
        <li class="list--element">
        <div class="left--side">
        <div class="ball"></div>
        <p class="list--text">${key}</p>
      </div>
      
      </li>`
        listBox.insertAdjacentHTML('afterbegin', html)
    }
}

listBox.addEventListener('click', (e) =>{
    const target = e.target
    console.log(target);
    if( target.classList.contains('list--text')){
        target.classList.toggle('sheet--selected')
        target.previousElementSibling.classList.toggle('done--ball')
        note.textContent = allNotes[target.textContent]        
    }
})

createSheet(allNotes)
const listOfSheerts = document.querySelectorAll('.list--text')

listOfSheerts.forEach(el =>{
    el.addEventListener('click', () =>{
        el.classList.toggle('sheet--selected')
        el.previousElementSibling.classList.toggle('done--ball')
        note.textContent = allNotes[el.textContent]
    })
})


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
            textAreaBox.value = ``

        }else{ console.log('istnieje')}
       }        
    }else{           
    allNotes[whichSheet] += textAreaBox.value
    createSheet(allNotes)
    textAreaBox.value = ``
    } 
})

console.log('asdasd\nsdadad');


