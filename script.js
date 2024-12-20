const inputName = document.getElementById('name');
const paragrafoErro = document.getElementById('erro-paragrafo');

function validarNome(){

    let nomeCompleto = true;

   const name = inputName.value.trim().split(/\s+/);

    if (name.length == 1){
        nomeCompleto = false;
    }
    return nomeCompleto
}

function tratamentoErro(){
    if(!validarNome()){
        paragrafoErro.classList.add('display');
        inputName.classList.add('borda-erro');
    }else{
        paragrafoErro.classList.remove('display');
        inputName.classList.remove('borda-erro');
    }
}

function obterSobrenome(texto) {
    const palavras = texto.trim().split(/\s+/); 
    return palavras[palavras.length - 1]; 
}

function contarVogais(){
  const texto = inputName.value.match(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/gi);
  const resultado = texto ? texto.length : 0;
   return resultado.toString().padStart(2, '0');
} 

function imprimeSenha(){
    const paragrafoSenha = document.getElementById('senha-gerada');

    if(validarNome){
        paragrafoSenha.innerText = obterSobrenome(inputName.value).toLowerCase() + contarVogais();
    }
    
}
