const inputButton = document.querySelector('.input--button')
const input = document.querySelector('.input')
const inputDate = document.querySelector('.input--date')
const inputSelect = document.querySelector('.input--select')

const itemBox = document.querySelector('.item--box')


const tasks ={}

const showTasks = function(){
    itemBox.textContent = ``
    const html = `
    <article class="header--item--box">
    <p class="task--template">zadanie</p> <p class="date--template">data</p> <p class="priority--template">priorytet</p>

  </article>
    `
    itemBox.insertAdjacentHTML('beforeend', html)
    for(let [key, value] of Object.entries(tasks)){
        const html = `
       
    <article class="item">
                <button class="check--button checked--button"><input type="radio" class="check"></button>
                <p class="task">${value[0]}</p>
                <p class="date">${value[2]}</p>
                <p class="priority">${value[1]}</p>
                <button class="delete">🗑</button>
            </article>`
            itemBox.insertAdjacentHTML('beforeend', html)
    }
}

inputButton.addEventListener('click', ()=>{
    tasks[input.value] = [input.value, inputSelect.value, inputDate.value]
   
    showTasks()
    
    input.value = inputDate.value = ''
    inputSelect.value = 'wysoki'
})

itemBox.addEventListener('click', (e) =>{
    if(e.target.classList.contains('delete')){
        const parent = e.target.parentNode
        const children  = parent.children[1]
        delete tasks[children.textContent]
        parent.remove()
        showTasks()
    }
    
    
})