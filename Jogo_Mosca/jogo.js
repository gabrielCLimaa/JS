var altura = 0
var largura = 0
var vida = 1
var tempo = 15
var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')
 if(nivel === 'normal') {
 	criaMoscaTempo = 1500
 } else if(nivel === 'dificil') {
 	criaMoscaTempo = 1000
 } else if (nivel === 'fudido') {
 	criaMoscaTempo = 500
 }

function ajustaTamanho () {
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura,altura)
}

ajustaTamanho()

var cronometro = setInterval(function() {
 tempo -= 1
 if(tempo < 0) {
 	clearInterval(cronometro)
 	clearInterval(cria_mosca)
 	document.location.href = 'victory.html'
 } else {
document.getElementById('cronometro1').innerHTML = tempo }}
, 1000)


function positionRelative() {

	if(document.getElementById('moscA')) {
		document.getElementById('moscA').remove()
		if(vida > 3) {
			window.location.href = 'fim_de_jogo.html'
		}
		document.getElementById('v'+ vida).src = 'imagens/coracao_vazio.png'
		vida ++
	}
	var positionX = Math.floor(Math.random() * largura) -110
	var positionY = Math.floor(Math.random() * altura) -110
	positionX = positionX < 0 ? 0 : positionX
	positionY = positionY < 0 ? 0 : positionY

	console.log(positionX,positionY)
	var mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosca.style.left = positionX+ 'px'
	mosca.style.top = positionY+ 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'moscA'
	mosca.onclick = function (){this.remove()}
	document.body.appendChild(mosca)
	

}
	function tamanhoAleatorio () {
		var classe = Math.floor(Math.random() * 3)
		switch(classe) {
			case 0: return 'mosca1';
			case 1: return 'mosca2';
			case 2: return 'mosca3';
		}  
	}
	function ladoAleatorio () {
		var classe = Math.floor(Math.random() * 2)
		switch(classe) {
			case 0: return 'ladoA';
			case 1: return 'ladoB';
		}  

	}