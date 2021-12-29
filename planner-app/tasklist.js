console.log("tasklist.js is running !!");

const fs2 = require('fs');

// List all todo items
var listTodos = () => {
	return fetchTodos();
};


// Utility functions
var fetchTodos = () => {
	try {
		var todosString =
			fs2.readFileSync('tasks-data.json');
		return JSON.parse(todosString);
	} catch (e) {
		return [];
	}
};
var logTodo = (todo) => {
	console.log('## ---## --- ##');
	console.log(`It's title is: ${todo.title}`);
};


module.exports={
    listTodos,
	fetchTodos,
	logTodo
}