/* function verificaCor(){
    let cor = document.getElementById("cor").value;

    switch (cor) {
        case "azul":
            //o que acontece
           document.body.style.backgroundColor = "blue";
           break;
        case "vermelho":
              //o que acontece
           document.body.style.backgroundColor = "red";
           break;
        case "amarelo":
              //o que acontece
           document.body.style.backgroundColor = "yellow";
           break;
       case "rosa":
              //o que acontece
           document.body.style.backgroundColor = "pink";
           break ;
        default:  
        //o que acontece 
        document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para: "+cor;  
    }
}*/
 
function diaDaSemana(){
    var dia = new Date().getDay();

    console.log(dia);

    switch (dia){
        case 0:
            document.getElementById("teste").innerHTML = "Hoje e Domingo" 
            break;
        case 1:
            document.getElementById("teste").innerHTML = "hoje e segunda" 
            break;
        case 2:
            document.getElementById("teste").innerHTML = "Hoje e terca"  
            break; 
        case 3:
            document.getElementById("teste").innerHTML = "Hoje e quarta" 
            break;
        case 4:
            document.getElementById("teste").innerHTML = "Hoje e quinta"
            break;
        case 5:
            document.getElementById("teste").innerHTML = "Hoje e sexta" 
            break ;
        case 6:
            document.getElementById("teste").innerHTML = "Hoje e sabado" 
            break ;
        default:
        document.getElementById("teste").innerHTML = "nao sei que dia e"

          }
}