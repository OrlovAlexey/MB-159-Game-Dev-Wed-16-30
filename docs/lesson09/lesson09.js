var pass;

do
{
	if (pass) alert("Пароль неверный.\nДоступ запрещён!");
	pass = prompt("Введите пароль", "****");
}
while (pass != "pass")

var header = document.createElement("h3");
header.innerHTML = "Доступ разрешён!!!";
document.body.appendChild(header);