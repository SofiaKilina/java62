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
        const buttonDel = document.createElement("button");
        buttonDel.append('delete');
        buttonDel.addEventListener('click', (e) => {
            li.remove();
        })
        li.append(text, buttonDel);
        todoList.append(li);
    }
    item.value = ''
}