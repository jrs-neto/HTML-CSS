// function logCurso() {
//   const nome = 'JavaScript';
//   console.log(nome);
// }
// logCurso();

// function logCurso(nome, horas) {
//   console.log(nome, horas, "horas");
// }
// logCurso("JavaScript", "40");
// logCurso("HTML", "20")

// function logCurso(nome, horas) {
//   console.log(nome, horas, 'horas');
//   return 'TESTE';
// }
// const retorno = logCurso('JavaScript', '40');
// logCurso('HTML', '20')
// console.log(retorno);

// function logCurso(nome, horas) {
//   console.log(nome, horas, 'horas');
//   return {
//     nome,
//     horas,
//   };
// }
// const retorno = logCurso('JavaScript', '40');
// logCurso('HTML', '20')
// console.log(retorno);
// console.log(retorno.horas);

//Escopo de função

const nome = 'JavaScript';

function logCurso() {
  const nome = 'HTML';
  console.log(nome);
  return nome;
}

const nomeDaFuncao = logCurso();

console.log(nomeDaFuncao);
console.log(nome);