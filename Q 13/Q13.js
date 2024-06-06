function addTask(tasks,newTasks) {
    tasks.push(newTasks)
    return tasks
}

const tasks = ['Buy groceries', 'Clean the house'];
console.log(addTask(tasks, 'Pay bills'));