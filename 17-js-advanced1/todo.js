addItem.addEventListener('click', addListItem);
item.addEventListener('keyup', e => {
    if(e.key === 'Enter') {
        addListItem();
    }
})

function addListItem(){
    const text = item.value.trim();
    if(text) {
        const li = document.createElement("li");
        const buttonDel = createButtonDel();
        li.append(text, buttonDel);
        todoList.append(li);
    }
    item.value = ''
}

