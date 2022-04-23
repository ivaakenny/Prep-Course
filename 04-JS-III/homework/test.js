
// console.log((numero<1000&& numero>99)||(numero>-1000&&numero<-99) ? true :false);


function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
    contador=0;
    resultado=0;
    do {
      if (contador>=1) {
        numero=numero+5;
      }
      contador++;
    } while (contador<9);
    return numero;
  }
  console.log(doWhile(10));

  function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
    const array=[];
    for (let i = 0; i < 11; i++) {
    array[i]= (i*6);
      
    }
    return array;
  }
  console.log(tablaDelSeis());

  var palabras=["hola", "como","estas?"];
function palabra(){
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i]+", ";
      
    }
    return palabras;
  }
  console.log(palabra());
var array= [1,1,1,1];

  console.log(array.map(suma=> suma+ 1));
  
var numero=[3,2,4];

console.log(numero.reduce((total, value) => total + value, 0)/ numero.length);
var numeros=[1,2,3,4,5,6,7,10];
var max=0;

var arrayNumeros=[2,18,20,16,26];
const arregloFiltrado=arrayNumeros.filter(x => x > 18);
console.log(arregloFiltrado);


//const arregloFiltrado=arrayNumeros.filter(x => x === x ? true : false);
function iguales(){
  var soniguales;
for (let i = 0; i < arrayNumeros.length; i++) {
  if (arrayNumeros[0]===arrayNumeros[i]) {
    soniguales=true;
  }else{soniguales=false} 
  
}
return soniguales;
}

console.log(iguales());


  var numeroDeDia=

  console.log((numeroDeDia>1)&&(numeroDeDia<7) ? "Es dia Laboral" :
  ((numeroDeDia==1)||(numeroDeDia==7))  ? "Es fin de semana" : "Error");

  
  
  
  function aaa (){
  numeroo= 1;
  var a =[];
  for (let i = 0; i < 10; i++) {
    a[i]=a.push(numero+2);
    if (a[i]===i) {
    return "Se interrumpió la ejecución";
    }

  }
  return a;
}
console.log(aaa());

var objetoMisterioso={
  numeroMisterioso:2,
}

var resultado=objetoMisterioso["numeroMisterioso"]*5;
console.log(resultado);


function String(string) {
  this.string=string;
}
String.prototype.reverse= function(){
  return this.String.reverse();
}
String


var j= 'juan';

console.log(j.slice(1))
console.log(j.charAt(0).toUpperCase())
console.log(j.charAt(0).toUpperCase()+j.slice(1))