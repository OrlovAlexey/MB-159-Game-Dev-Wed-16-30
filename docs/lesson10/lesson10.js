// var tag = document.createElement("h3");

// for (var i = 1; i <= 100; i++)
// {
// 	if (i == 1) tag.innerHTML = i;
// 	else tag.innerHTML += (", " + i);
// }

// document.body.appendChild(tag);

// var tag = document.createElement("h3");

// for (var i = 100; i >= 1; i--)
// {
// 	if (i == 100) tag.innerHTML = i;
// 	else tag.innerHTML += (", " + i);
// }

// document.body.appendChild(tag);

// var tag = document.createElement("h3");

// for (var i = 2; i <= 1000; i += 2)
// {
// 	if (i == 2) tag.innerHTML = i;
// 	else tag.innerHTML += (", " + i);
// }

// document.body.appendChild(tag);

var tag = document.createElement("h3");

for (var i = 2, x = y = result = 1; i <= 100; i++)
{
	if (i == 2) tag.innerHTML = "1";
	tag.innerHTML += (", " + result);
	x = y;
	y = result;
	result = x + y;
}

document.body.appendChild(tag);
