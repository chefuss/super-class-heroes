var superheroesList = document.getElementById('list-superheroes');
var villainsList = document.getElementById('list-villains');


var Persona = function(name, age, height, image) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.image = image;
}

var SuperHeroe = function(name, age, height, image, hiddenIdetity, superPower, enemy, goodness) {
  Persona.call(this, name, age, height, image);
  this.identity = hiddenIdetity;
  this.superPower = superPower;
  this.enemy = enemy;
  this.good = goodness;
};

var superman = new SuperHeroe('Clark Kent', '34', '1.86', 'img/superheroes/image-superman.jpg', 'Superman', ['Fly', 'Super Strong', 'Laser eyes'], 'Lex Luthor', true);

var batman = new SuperHeroe('Bruce Wayne', '33', '1.96', 'img/superheroes/image-batman.jpg', 'Batman', ['Super smart', 'Creates a lot of things', 'A huge amount of money and time'], 'Joker', true);

var charles = new SuperHeroe('Charles Xavier', '99', '1.77', 'img/superheroes/image-charles-xavier.jpg', 'Professor X', ['Archi smart', 'Reads minds', 'Can control minds'], 'Magneto', true);

var ironMan = new SuperHeroe('Anthony Stark', '52', '1.82', 'img/superHeroes/image-iron-man.jpg', 'Iron Man', ['Really Smart', 'Lotsss of money', 'Crafty'], 'Thanos', true);

var wolverine = new SuperHeroe('Logan', '87', '1.94', 'img/superHeroes/image-wolverine.jpg', 'Wolverine', ['Strong as hell', 'Fast as a wolf', 'things in hands'], 'Mystique', true);

var wonderWoman = new SuperHeroe('Princess Diane', '43', '1.72', 'img/superHeroes/image-wonder-woman.jpg', 'Wonder Woman', ['Lasso of truth', 'Indestructible bracelets', 'Tiara'], 'Ares', true);

var ares = new SuperHeroe('God of War', '120', '1.90', 'img/villains/image-ares.png', 'Ares', ['Super Strong', 'Fear of dark', '2 minutes to midnight'], 'Wonder Woman', false);

var joker = new SuperHeroe(
  "Arthur Fleck",
  "43",
  "1.80",
  "img/villains/image-joker.jpg",
  "Joker",
  ["Super bad", "Fear of dark", "2 minutes to midnight"],
  "Batman",
  false
);

render(superman,superheroesList);
render(batman,superheroesList);
render(charles,superheroesList);
render(ironMan,superheroesList);
render(wolverine,superheroesList);
render(wonderWoman,superheroesList);

render(ares, villainsList);
render(joker, villainsList);
render(joker, villainsList);

function render(person, list) {
  var li = document.createElement('li');
  li.classList.add('super');
  li.id = person.identity.toLowerCase();

  var image = document.createElement("img");
  image.src = person.image;

  var heading = document.createElement('h3');
  heading.textContent = person.name;

  //check if is a superhero or supervillain.
  var goodness = (person.good) ? 'Superhero' : 'Villian'; 

  var description = document.createElement('p');
  description.textContent = person.name + ', better known as ' + person.identity + ', is ' + person.age + ' years old and ' + person.height + ' m of height ' + goodness + '.';
 
  var superPower = document.createElement('p');
  superPower.textContent = 'This ' + goodness + ' has superpowers like:';

  var superPowerList = document.createElement('ul');
  superPowerList.classList.add('superlist');

  person.superPower.forEach(function(superpower) {
    var item = document.createElement("li");
    item.textContent = superpower;
    superPowerList.append(item);
  });

  var enemy = document.createElement('p');
  var enemyLink = document.createElement('a');
  enemyLink.href = '#' + person.enemy.toLowerCase();
  enemyLink.textContent = person.enemy;

  enemy.textContent = 'The worst enemy is: ';
  enemy.append(enemyLink);

  li.append(image, heading, description, superPower, superPowerList, enemy);

  list.append(li);
}