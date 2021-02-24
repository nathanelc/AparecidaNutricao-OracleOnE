var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
	var paciente = pacientes[i];
	
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	/*if(peso<=0 || peso>=1000){
		console.log("peso invalido!");
		pesoValido= false;
		tdImc.textContent= "Peso invalido!";
		//paciente.style.backgroundColor= "lightcoral"; não é uma boa prática, estilo deve ser no .css
		paciente.classList.add("paciente-invalido");
	}*/
	if (!pesoValido) {
    console.log("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");}

	/*if(altura<=0 || altura>=3.00){
		console.log("Altura invalida!");
		alturaValida= false;
		tdImc.textContent= "Altura invalida!";
		//paciente.style.color = "red"; não é uma boa prática, estilo deve ser no .css
		paciente.classList.add("paciente-invalido");	
	}*/
	if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
}
	if( alturaValida && pesoValido){
	var imc = calculaimc(peso,altura);
	tdImc.textContent= imc;
	}
}
function calculaimc(peso,altura){
	var imc = 0;

	imc = peso/(altura*altura);

	return imc.toFixed(2);
}

function validaPeso(peso){
	if(peso>=0 && peso<=1000){
		return true;
	} else {
		return false;
	}
}
function validaAltura(altura){
	if(altura>=0 && altura<=3){
		return true;
	} else {
		return false;
	}
}