const $ = require('jquery');
const todos = require('./todos.js');

// require('!style-loader!css-loader!../css/style.css');
require('../css/style.css');

$.each(todos, (i, todo) => {
    $('.container').append(`<div>${todo.title}</div>`)
});
