var superheroesList = document.getElementById("list-superheroes");
var villainsList = document.getElementById("list-villains");

function render(person, list) {
  var li = document.createElement("li");
  li.classList.add("super");
  li.id = person.identity.toLowerCase();

  var image = document.createElement("img");
  image.src = person.image;

  var heading = document.createElement("h3");
  heading.textContent = person.name;

  //check if is a superhero or supervillain.
  var goodness = person.good ? "Superhero" : "Villian";

  var description = document.createElement("p");
  description.textContent =
    person.name +
    ", better known as " +
    person.identity +
    ", is " +
    person.age +
    " years old and " +
    person.height +
    " mts. of height " +
    goodness +
    ".";

  var superPower = document.createElement("p");
  superPower.textContent = "This " + goodness + " has superpowers like:";

  var superPowerList = document.createElement("ul");
  superPowerList.classList.add("superlist");

  person.superPower.forEach(function(superpower) {
    var item = document.createElement("li");
    item.textContent = superpower;
    superPowerList.append(item);
  });

  var enemy = document.createElement("p");
  var enemyLink = document.createElement("a");
  enemyLink.href = "#" + person.enemy.toLowerCase();
  enemyLink.textContent = person.enemy;

  enemy.textContent = "The worst enemy is: ";
  enemy.append(enemyLink);

  li.append(image, heading, description, superPower, superPowerList, enemy);

  list.append(li);
}