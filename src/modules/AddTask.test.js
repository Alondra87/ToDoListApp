const AddTaskToList = require("./AddTask");

test('Add function', () =>{
    const containerTasks = document.createElement('div');
    containerTasks.innerHTML += `
        <input type="checkbox" id='${index}' class="checkbox">
        <input type='text' value='${task}' class='task ${done ? 'done-task' : ''}'>
        <i class="fas fa-ellipsis-v"></i>
        <i class="fas fa-trash-alt" id='${index + 1}'></i>
      `;
      showList.appendChild(containerTasks);
      expect(AddTaskToList('', 0, false)).toHaveLength(1);
})

