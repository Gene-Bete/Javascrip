function eventoClink(){
    //alert('acionou um evento de clink');
    document.body.style.backgroundColor = "yellow";
}
function eventoDblClink(){
    alert('evento de clique duplo');
}
function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}
function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}
function adicionaTexto(){
    let p = document.getElementById("texto"); 
    p.append('O mouse moveu<br>'); 
}
function mudou(){
   console.log('Mudou')
}
function teclaPressionada(){
   
    console.log('Tecla Pressionada');
}