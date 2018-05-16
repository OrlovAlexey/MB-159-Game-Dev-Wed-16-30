function add(_x, _y)
{
	return _x + _y;
}

var first = parseInt(prompt("Enter first number.", 0));
var second = parseInt(prompt("Enter second number.", 0));

var sum = add(first, second);

var tag = document.createElement("h2");
document.body.appendChild (tag);
tag.innerHTML = sum;