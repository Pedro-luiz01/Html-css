var comida1 = document.getElementById('carne')
var comida2 = document.getElementById('frango')
var comida3 = document.getElementById('macarronada')
var comida4 = document.getElementById('strogonoff')
var comida5 = document.getElementById('nada')
var res = document.getElementById('res')
var comida = carninha
function carne(){
var com1 = (comida1.value)
if (com1 == com1){
    res.innerHTML = 'Resposta errada'
}
}
function frango(){
    var com2 = (comida2.value)
    if(com2 == com2){
        res.innerHTML = 'resposta errada'
    }
}
function macarronada(){
    var com3 = (comida3.value)
    if(com3 == com3){
        res.innerHTML = 'Resposta certa'
    }
    }
function strogonoff(){
    var com4 = (comida4.value)
    if(com4 == com4){
        res.innerHTML = 'Corretissima'
    }
}
function nada(){
    var com5 = (comida5.value)
    if (com5 == com5){
        res.innerHTML = 'Vc esta presa por negligencia de comida'
    }
}