var num = parseInt(prompt("Введите количество чисел", "50"));
var odds = [];
var evens = [];
var tag1 = document.createElement("h2");
var tag2 = document.createElement("h2");
document.body.appendChild(tag1);
document.body.appendChild(tag2);
for (var i = 1, j = 0, k = 0; i <= num; i++) {
	if (i % 2 > 0) {
		odds[j] = i;
		j++;
	} else {
		evens[k] = i;
		k++;
	}
}
for (i = 0; i < odds.length; i++) {
	if (i == 0) tag1.innerHTML = "Odds: " + odds[i];
	else tag1.innerHTML += ", " + odds[i];
}
for (i = 0; i < evens.length; i++) {
	if (i == 0) tag2.innerHTML = "Evens: " + evens[i];
	else tag2.innerHTML += ", " + evens[i];
}