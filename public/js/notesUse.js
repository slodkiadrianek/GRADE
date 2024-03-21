const chooseSheet = document.querySelector('.choose--sheet')

chooseSheet.addEventListener('change', ()=>{
    if(chooseSheet.value === 'newValue'){
       let newValue = prompt(`Podaj nazwę nowego arkusza`)  || 'nowy'
       const optionList = []
       for(let [name, value] of Object.entries(chooseSheet.children)){
        optionList.push(value.textContent)
       }
       while(optionList.includes(newValue)){
        newValue = prompt(`Podaj nazwę nowego arkusza`)  || 'nowy'
       }
       const html = `
       <option value="${newValue}">${newValue}</option>
       `     
       chooseSheet.insertAdjacentHTML('afterbegin', html )
       chooseSheet.children[0].setAttribute('selected', true)
    }
})