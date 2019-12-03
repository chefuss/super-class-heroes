var superheroesList = document.getElementById("list-superheroes");
var villainsList = document.getElementById("list-villains");

function render(person, list) {
  var li = document.createElement("li");
  li.classList.add("super");
  li.id = person.identidad.toLowerCase();

  var image = document.createElement("img");
  image.src = person.image;

  var heading = document.createElement("h3");
  heading.textContent = person.name;

  //check if is a superhero or supervillain.
  var goodness = person.bando ? "Superhero" : "Villian";

  var description = document.createElement("p");
  description.textContent =
    person.nombre +
    ", better known as " +
    person.identidad +
    ", is " +
    goodness +
    ".";

  var superPower = document.createElement("p");
  superPower.textContent = "This " + goodness + " has superpowers like:";

  var superPowerList = document.createElement("ul");
  superPowerList.classList.add("superlist");

  person.poderes.forEach(function(superpower) {
    var item = document.createElement("li");
    item.textContent = superpower;
    superPowerList.append(item);
  });

  var enemy = document.createElement("p");
  var enemyLink = document.createElement("a");
  enemyLink.href = "#" + person.enemigos.toLowerCase();
  enemyLink.textContent = person.enemigos;

  enemy.textContent = "The worst enemy is: ";
  enemy.append(enemyLink);

  li.append(image, heading, description, superPower, superPowerList, enemy);

  list.append(li);
}