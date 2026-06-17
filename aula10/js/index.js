const carros = ["Gol", "Fusca", "Brasilia", "Del Rey", "Chavette"];
var tamanho = carros.length; 
for (let i=0; i<tamanho; i++){
    document.getElementById("teste").innerHTML += carros[i] + "-";
    
}