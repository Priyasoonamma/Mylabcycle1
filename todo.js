function addTask() {
      let input = document.getElementById("taskInput");
      let taskText = input.value.trim();

      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }

      let li = document.createElement("li");

      let span = document.createElement("span");
      span.textContent = taskText;
      span.onclick = function () {
        li.classList.toggle("done");
      };

      let actions = document.createElement("div");
      actions.className = "actions";

      let delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.onclick = function () {
        li.remove();
      };

      actions.appendChild(delBtn);
      li.appendChild(span);
      li.appendChild(actions);

      document.getElementById("taskList").appendChild(li);

      input.value = "";
    }
function handleEvent(event){
  if(event.key=="Enter"){
    addTask();
  }
}