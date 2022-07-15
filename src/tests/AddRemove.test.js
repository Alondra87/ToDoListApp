const { add, myTasks, removeItemAt } = require('./AddRemove.js');

describe('myTasks', () => {
  test('add test', () => {
    expect(add('task 1')).toEqual(myTasks());
  });

  test('removeItemAt test', () => {
    expect(removeItemAt('index')).toEqual(myTasks());
  });
});