var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode;
	paiDoAlvo.remove();
}, 500);
	
	/*event.target.parentNode.remove(); tudo q as 3 linhas acima faz, mas de forma otimizada*/
});
/*pacientes.forEach(function(paciente){
	paciente.addEventListener("dblclick", function(){
		console.log("fui clicado com duplo click");
		this.remove();
	});
});*/