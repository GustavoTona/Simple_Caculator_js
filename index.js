
let formulario = document.getElementById("calculo");
let kilo = document.getElementById("kilo");
let pessoas = document.getElementById("pessoas");

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    var grama = kilo.value * 1000;
var resultado = grama / pessoas.value;

document.getElementById('txtResultado').setAttribute("value", resultado.toFixed(0));

})