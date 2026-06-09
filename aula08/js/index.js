//if e else
/* var interruptor = "off"
  
 if (interruptor == "on"){
    alert('A lampada esta ligada')
 } else{
    alert ('A lampada esta desligada')
 }
 */
 /*var hora = new Date().getHours();
 
 if(hora < 12){
    alert('Bom dia' );
 } else if (hora < 18){
    alert('Boa tarde');
 } else{
    alert('Boa noite')
 }
    */
   function verificar(){
     let nome = document.getElementById("nome").value;

     if (nome ==""|| nome == null ){
        let p = document.getElementById("teste")
        p.innerHTML = "O campo nao pode ser vazio";
        p.style.color = "red"
     }else{
         let p = document.getElementById("teste")
        p.innerHTML = "parabens tudo certinho";
        p.style.color = "green"
     }
   }
 