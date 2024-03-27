'use strict'

const dateRead = document.querySelectorAll('.date--read')

for(let el of dateRead){
    const elDataSet = el.dataset.read
    const previousEl = el.previousElementSibling
    const color = 'rgb(255, 91, 91'
    elDataSet ? '' : previousEl.style.color= color
};
