console.log("deletetask.js is running !!");

const fs1= require('fs');

// Delete a todo item
var deleteTodo = (title) => {
	var todos = fetchTodos();
	var filteredtodos = todos.filter(
		(todo) => todo.title !== title);
	saveTodos(filteredtodos);
  return todos.length !== filteredtodos.length;
};
var fetchTodos = () => {
	try {
		var todosString =
			fs1.readFileSync('tasks-data.json');
		return JSON.parse(todosString);
	} catch (e) {
		return [];
	}
};


var saveTodos = (todos) => {
	fs1.writeFileSync('tasks-data.json',
		JSON.stringify(todos));
};
var logTodo = (todo) => {
	console.log('## ---## --- ##');
	console.log(`It's title is: ${todo.title}`);
};

module.exports = {
	deleteTodo,
	fetchTodos,
	saveTodos,
	logTodo
};

