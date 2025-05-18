const { addTask } = require('./tasks');

describe('addTask function', () => {
  test('adds a trimmed non-empty task to the list', () => {
    const tasks = [];
    const result = addTask(tasks, '  New Task  ');
    expect(result).toEqual(['New Task']);
  });

  test('does not add empty or whitespace-only tasks', () => {
    const tasks = [];
    addTask(tasks, '   ');
    expect(tasks).toEqual([]);
  });
});
