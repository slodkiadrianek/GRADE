'use strict'


const listElementAb = document.querySelectorAll('.list--element--ab')

for(const el of listElementAb){
    const content = el.textContent
    switch (content) {
        case 'zw':
            el.style.backgroundColor =  'rgb(96, 165, 255)'
            break;
        case 'nb':
            el.style.backgroundColor =  'rgb(255, 223, 44)'
        break;
        case 'u':
            el.style.backgroundColor = '#20de3f'
        break
        default:
            el.style.backgroundColor = '#e6e6e6'
        break;
    }
    
}