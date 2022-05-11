let input = document.getElementById("todolist");
let addButton = document.getElementById("push");
let list = document.getElementById("tasklists");

let savedTask = JSON.parse(localStorage.getItem("tasks"));
savedTask.forEach(addlist);

function addlist(text) {
  let li = document.createElement("div");
  li.innerHTML = text;
  list.insertBefore(li, list.childNodes[0]);

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "X";
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", (e) => {
    li.parentNode.removeChild(li);
    savedTask = savedTask.filter((e) => e != text);
    localStorage.setItem("tasks", JSON.stringify(savedTask));
  });
}

addButton.addEventListener("click", () => {
  let text = input.value;
  if (text == "") {
    alert("please enter list name");
  } else {
    savedTask.push(text);
    localStorage.setItem("tasks", JSON.stringify(savedTask));
    input.value = "";
    addlist(text);
  }
});
