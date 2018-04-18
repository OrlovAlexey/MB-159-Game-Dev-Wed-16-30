// var pass = prompt("Введите пароль", "****");

// while (pass != "pass")
// {
// 	alert("Пароль неверный.\nДоступ запрещён!");
// 	pass = prompt("Введите пароль", "****");
// }

// var header = document.createElement("h3");
// header.innerHTML = "Доступ разрешён!!!";
// document.body.appendChild(header);

var tag = document.createElement("p");
var i = 1;

while (i <= 100)
{
	if(i == 1) tag.innerHTML = i;
	else tag.innerHTML += (", " + i);
	i++;
}
document.body.appendChild(tag);