// scripts.js

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var elementByTagName = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + elementByTagName.length;
	list.appendChild(element);
});
	