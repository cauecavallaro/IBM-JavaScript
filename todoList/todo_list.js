
const addTaskBtn = document.getElementById("addTaskBtn");
const clearCompleteBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

let tasks = [];

addTaskBtn.addEventListener("click", addTask);
clearCompleteBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAll);


function addTask(){
    var taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== ""){
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks(){
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}


function clearAll(){
    tasks = [];
    displayTasks();
}