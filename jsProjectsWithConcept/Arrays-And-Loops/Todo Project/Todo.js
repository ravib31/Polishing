const todoList = [];
function addTodo(){
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    // console.log(name);

    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';
    let finalList = [];
    for(let i=0; i<todoList.length; i++){
        console.log(todoList[i]);
        finalList.push(`<li>${todoList[i]}</li>`);
    }
    console.log(finalList);
    document.querySelector('.js-todoList').innerHTML = finalList;
}
