// var tag = document.createElement("p");
// var x = y = result = 1;

// for (var i = 2; i <= 50; i++)
// {
// 	if(i == 2) tag.innerHTML = "1";
// 	tag.innerHTML += (", " + result);
// 	x = y;
// 	y = result;
// 	result = x + y;
// }

// document.body.appendChild(tag);

var table = document.createElement("table");
document.body.appendChild(table);

var tbody = document.createElement("tbody");
table.appendChild(tbody);

var k = 1;

for (var i = 0; i < 10; i++)
{
	var tr = document.createElement("tr");
	tbody.appendChild(tr);

	for (var j = 0; j < 10; j++)
	{
		var td = document.createElement("td");
		tr.appendChild(td);
		td.innerHTML = k;
		k++;
	}
}