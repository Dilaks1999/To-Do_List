// Get references to elements
const taskInput = document.getElementById('task');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const prioritySelect = document.getElementById('priority');

// Add Task Event Listener
addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;
    const taskTime = timeInput.value;
    const priority = prioritySelect.value;

    // Ensure task input is not empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new task item
    const li = document.createElement('li');
    li.classList.add(priority); // Add the priority class (low, medium, high)

    // Create task details
    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');
    taskDetails.innerHTML = `
        <strong>${taskText}</strong><br>
        Due: ${taskDate} ${taskTime}
    `;
    
    // Add the task details to the list item
    li.appendChild(taskDetails);

    // Add priority label
    const priorityLabel = document.createElement('span');
    priorityLabel.classList.add('priority', priority);
    priorityLabel.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
    li.appendChild(priorityLabel);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';
    li.appendChild(deleteButton);

    // Append the new task to the task list
    taskList.appendChild(li);

    // Clear input fields
    taskInput.value = '';
    dateInput.value = '';
    timeInput.value = '';

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });
});

// Mark task as completed when clicked
taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});
