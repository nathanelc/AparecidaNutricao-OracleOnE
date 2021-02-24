
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacientedoForm(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagesErro = document.querySelector("#mensagens-erro");
    mensagesErro.innerHTML = "";
});

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML= "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacientedoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaimc(form.peso.value, form.altura.value)

    }
    return paciente;
}
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
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
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function calculaimc(peso,altura){
    var imc = 0;

    imc = peso/(altura*altura);

    return imc.toFixed(2);
}
function validaPaciente(paciente){

    var erros =[];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("O peso é invalido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("A altura é invalida");
    }
    if( paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser nula")
    }
    if(paciente.peso.length == 0){
        erros.push("o peso não pode ser em branco");
    if (paciente.altura.length == 0){
        erros.push("a altura não pode ser em branco");
    }    
    }
    return erros;

}
