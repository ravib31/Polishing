const todoList = [];
function addTodo() {
  const inputElement = document.querySelector(".js-input");
  const inputDate = document.querySelector(".js-date");
  const name = inputElement.value;
  const date = inputDate.value;
  console.log(name, date);

  //   todoList.push(name + " " + date);
  todoList.push({
    name,
    date,
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
  todoList.forEach(function(todoObject,index){
  const {name, date} = todoObject;
    console.log(name);
    const html = `
    <div> ${name}</div>
    <div>  ${date}</div>
    <button onClick='todoList.splice(${index},1);
    renderList();
    ' class="deleteButton">Delete</button>
    `;
    finalList = finalList + html;
  })

  // for (let i = 0; i < todoList.length; i++) {
  //   const todoName = todoList[i].name;
  //   const todoDate = todoList[i].date;
  //   console.log(todoName);
  //   const html = `
  //   <div> ${todoName}</div>
  //   <div>  ${todoDate}</div>
  //   <button onClick='todoList.splice(${i},1);
  //   renderList();
  //   ' class="deleteButton">Delete</button>
  //   `;
  //   finalList = finalList + html;
  // }
  //   console.log(finalList);
  document.querySelector(".js-todoList").innerHTML = finalList;
}
