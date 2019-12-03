function superHumano(nombre,identidad,herramientas,poderes,enemigos,bando, image)
{
  this.nombre=nombre;
  this.identidad=identidad;
  this.herramientas=herramientas;
  this.poderes=poderes;
  this.enemigos=enemigos;
  this.bando=bando;
  this.image = image;

}

var fernanda = new superHumano('fernanda','profesora',['hacker'],['super fuerza'],'ivan',true, 'img/superheroes/image-wonder-woman.jpg');

console.log(fernanda);

render(fernanda,superheroesList);

var ivan= new superHumano('ivan','profesor',['macbook'],['Lee la mente'],'Fernanda',false, 'img/villains/image-ares.jpg');

render(ivan,villainsList);