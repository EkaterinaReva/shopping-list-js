const field = document.querySelector('.field');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener ("click", () =>{
const item = document.createElement('li');
item.innerText = field.value;
item.classList.add('toDoAdded');
toDoContainer.appendChild(item);
field.value= '';

item.addEventListener ("click", () =>{
item.classList.add('toDoCompleted');
})
item.addEventListener("dblclick", () =>{
    toDoContainer.removeChild(item);
})
})
