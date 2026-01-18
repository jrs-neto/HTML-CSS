const nome = 'O Senhor dos Anéis';
const ano = 1954;
const autor = 'J. R. R. Tolkien';

const nomeFilme = 'O Senhor dos Anéis';
const anoFilme = 2001;
const diretorFilme = 'Peter Jackson';

const livro = {
  nome: "O Senhor dos Anéis",
  ano: 1954,
  autor: "J. R. R. Tolkien",
};

const filme = {
  nome: "O senhor dos Anéis",
  ano: 2001,
  autor: "J. R. R. Tolkien",
  diretor: "Peter Jackson",
}

console.log(2026 - livro.ano);
console.log(livro.nome + ' ' + filme.diretor);
// console.log(livro.nome === nome);

const texto = document.querySelector('p');
console.log(texto.innerHTML);

console.log(texto.clientHeight);

console.log(autor.length);
console.log(autor.toUpperCase());
console.log(autor.toLowerCase());

const decimal = 122.99;

console.log(Number(decimal.toFixed()) + 3);
console.log(3);

const total = decimal.toFixed().length.toFixed().length;
console.log(total);