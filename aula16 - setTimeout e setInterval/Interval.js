function ativarContagem(){
    contagem = setInterval(function (){
        var cronometro = window.document.getElementsByTagName("p")[0]
        var soma = parseInt(cronometro.innerHTML) - 1;
        if (soma == 0){
            cronometro.innerHTML = "Contagem encerrada!";
            pararContagem()
        }
        cronometro.innerHTML = soma
    }, 1000)
}
function pararContagem(){
   clearInterval(contagem);
   
}