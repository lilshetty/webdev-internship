document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const priorityInput = document.getElementById('priority');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value;
        const taskPriority = priorityInput.value;

        if (taskText.trim() === '') {
            alert('Task description is required.');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText} (Priority: ${taskPriority})
            <button class="delete">Delete</button>
        `;

        li.querySelector('.delete').addEventListener('click', function () {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = '';
    });
});
