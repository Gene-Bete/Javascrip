// COMANDO BASE PARA PEGAR A DATA
let data = new Date();
//console.log(data)

//PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano)

//PEGAR O MÊS ATUAL DE 0 ATÉ 11 SENDO O 0-JANEIRO E 11-DEZEMBRO 
let mes = data.getMonth();
//console.log(mes);

//O MÊS NO FORMATO ESCRITO
const mesesDoAno =["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//PEGAR O DIA DO MÊS
let diaMes = data.getDate();
console.log(diaMes)

//DIA  DA SEMANA - 0 ATÉ 6
let diaSemana = data.getDay();

const diasDaSemana =["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
let diaSemanaEscrita = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrita);

//PEGAR A HORA -DE 0 ATE 59
let hora = data.getHours();
console.log(hora);

//PEGAR A MINUTOS DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log(minutos);

//PEGAR A SEGUNDOS DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);

//PEGAR A MILISEGUNDOS DE 0 ATÉ 999
let miliSegundos = data.getMilliseconds();
console.log(miliSegundos);

//PEGAR A DATA NO PADRÃO NO BRASILEIRO DIA/MES/ANO
let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'});
console.log(dataBR);

//PEGAR OS VALOR SEPARADOS
 d= new Date();
 diaMes= d.getDate();
 mes= d.getMonth() + 1;
 ano= d.getFullYear();

 function addZero(X) {return X < 10 ? '0' + X: '' + X; };

 let datapadrãoBR= addZero(diaMes) +  "/" +  addZero(mes) + "/" + ano;
 console.log(datapadrãoBR);
