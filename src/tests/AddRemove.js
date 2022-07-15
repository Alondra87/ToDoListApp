const tasks = [];
function myTasks() {
  return tasks;
}
const add = (textInputValue) => {
  const TaskItem = {
    description: textInputValue,
    completed: false,
    index: myTasks().length + 1,
  };
  const addedItem = TaskItem;
  myTasks().push(addedItem);
  return myTasks();
};

const removeItemAt = (index) => {
  myTasks().splice(index - 1, 1);
  return myTasks();
};

module.exports = {
  add, myTasks, removeItemAt,
};