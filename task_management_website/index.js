document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
      const taskItem = event.target.closest(".task-item");
      taskItem.remove();
    }
  });

  function addTask(taskText) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);
  }
});