console.log("index.js is running");

const fs = require('fs');
const _ =  require('lodash');
const yargs = require('yargs');

const tasks = require('./todo');
const tasks1= require('./deletetask');
const tasks2= require('./tasklist');


const argv = yargs.argv;

var command = argv._[0];
console.log('Running Command is :', command);

if (command === 'addTodo') {
	tasks.addTodo(argv.title);
} else if (command === 'deleteTodo') {
	var todoDeleted = tasks1.deleteTodo(argv.title);
	var message = todoDeleted ?
		'Todo was deleted' : 'Todo can not found';
	console.log(message);
}  else if (command === 'listTodos') {
	var allTodos = tasks2.listTodos();
	console.log(`${allTodos.length} tasks available`);	
	allTodos.forEach((todo) => tasks2.logTodo(todo));
} 
else {
	console.log('It is a Invalid command.');
}
