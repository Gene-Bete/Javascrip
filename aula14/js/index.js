//OBJETO CARRO
/*const carro= {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}

//CONVERTEU PARA TEXTO JSON
let texto = JSON.stringify(carro)

//COLOCOU O TEXTO NO NOSSO HTML
document.getElementById('area').innerHTML = texto;

//CONVERTEMOS O TEXTO EM OBJETO
let obj = JSON.parse(texto);

//PEGAMOS O VALOR DESTE OBJETO
console.log(obj.modelo);*/

function buscarCEP(){
    let input = document.getElementById('cep').value


    const ajax =  new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function (){
        document.getElementById('texto').innerHTML = this.responseText
    }

}

