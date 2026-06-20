function ativaContagem(){
    //document.getElementById("tempo").innerHTML = "Começou a contar";
//executa apenas uma vez após o tempo determinado
//setTimeout(function() { 
  //  document.getElementById('tempo').innerHTML = "executou setTimeout";
  tempo = setInterval( function(){
    var cronometro =  document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) + 1
    document.getElementById('tempo').innerHTML = soma;
}, 1000);
}

function pararContagem(){
    //clearTimeout(tempo);
    //document.getElementById('tempo').innerHTML = "parou a contagem";
    clearInterval(tempo);
    document.getElementById('tempo').innerHTML = "parou a contagem";

}