function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Add the mark as completed functionality
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
}