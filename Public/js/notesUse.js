"use strict";
const textArea = document.querySelector(".text--area");
const listBox = document.querySelector(".list--box");
const Add = document.querySelector(".Add");
const chooseSheet = document.querySelector(".choose--sheet");
const clear = document.querySelector('.clear')

const sheets = {
  arkusz1: "",
};

const newOption = (name) => {
  const html = `<option value="${name}">${name}</option>`;
  chooseSheet.insertAdjacentHTML("afterbegin", html);
};

listBox.addEventListener("click", (e) => {
  for (const el of listBox.children) {
    el.classList.remove("active--sheet");
  }
  const target = e.target;
  if (!target.classList.contains("active--sheet")) {
    target.classList.add("active--sheet");
    textArea.value = sheets[target.textContent];
    console.log(chooseSheet);
    for (let el of chooseSheet.children) {
      if (el.value == target.textContent) {
        el.setAttribute("selected", "tre");
      } else {
        el.removeAttribute("selected", "true");
      }
    }
  }
});

const listAllSheets = (sheets) => {
  listBox.textContent = ``;
  for (let key in sheets) {
    const html = `
    <li class="list--element">${key}</li>`;
    listBox.insertAdjacentHTML("afterbegin", html);
  }
};
listAllSheets(sheets);

const clearTextArea = () => {
  textArea.value = "";
};

const addContentToSheet = function (textAreaContent, WhichSheet) {
  if (WhichSheet === "new") {
    const newSHeet = prompt(`Podaj nazwę nowego arkusza`);
    sheets[newSHeet] = "";
    sheets[newSHeet] = textAreaContent;
    listAllSheets(sheets);
    newOption(newSHeet);
    clearTextArea();
  } else {
    sheets[WhichSheet] = textAreaContent;
    clearTextArea();
  }
};

Add.addEventListener("click", () => {
  addContentToSheet(textArea.value, chooseSheet.value);
});

clear.addEventListener('click', () =>{
  textArea.value =''
})
