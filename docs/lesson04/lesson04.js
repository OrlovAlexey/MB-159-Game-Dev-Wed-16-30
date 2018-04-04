var headerOne = document.createElement("h1");
document.body.appendChild(headerOne);
headerOne.innerHTML = "Я заголовок";

var headerTwo = document.createElement("h2");
document.body.appendChild(headerTwo);
headerTwo.innerHTML = "Кто ты?";

var headerThree = document.createElement("h3");
document.body.appendChild(headerThree);
headerThree.innerHTML = "Сколько тебе лет?";

var boldText = document.createElement("b");
document.body.appendChild(boldText);
var italicText = document.createElement("i");
italicText.innerHTML = "Дима самый умный!";
boldText.appendChild(italicText);