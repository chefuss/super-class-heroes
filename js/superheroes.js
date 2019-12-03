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

renderUno(fernanda, superheroesList);

var ivan = new superHumano('Ivan', 'mentor', ['Mac book'], ['mentalist'], 'fernanda', false, 'img/villains/image-lex-luthor.jpg');
renderUno(ivan, villainsList);