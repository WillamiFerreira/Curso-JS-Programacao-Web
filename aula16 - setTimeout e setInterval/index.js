let tempo = window.document.getElementsByTagName("p")[0];
function ativarContagem(){
    tempo.innerHTML = 'A contagem começou!'
    //setTimeout() ativa a função apenas uma vez quando o valor especificado terminar.
    inicia = setTimeout(function contar(){
        tempo.innerHTML = 'Executou o setTimeout!'
    }, 5000);
}
function pararContagem(){
   clearTimeout(inicia);
   tempo.innerHTML = 'Parou a contagem!' ;
}