const todoList = [];
function addTodo() {
  const inputElement = document.querySelector(".js-input");
  const inputDate = document.querySelector(".js-date");
  const name = inputElement.value;
  const date = inputDate.value;
  console.log(name,date);

//   todoList.push(name + " " + date);
  todoList.push({
    name:name,
    date:date
});
  console.log(todoList);
  inputElement.value = "";
  inputDate.value = "";
  renderList();
}
// function clickHandle({i}) {
//   console.log("clicked");
//   todoList.splice(`${i}`,1)
//   renderList();
// }
function renderList() {
  let finalList = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoName = todoList[i].name;
    const todoDate = todoList[i].date;
    console.log(todoName);
    const html = `
    <p>
    ${todoName}  ${todoDate}
    <button onClick='todoList.splice(${i},1);
    renderList();
    '>Delete</button></p>
    `;
    finalList = finalList + html;
  }
//   console.log(finalList);
  document.querySelector(".js-todoList").innerHTML = finalList;
}
