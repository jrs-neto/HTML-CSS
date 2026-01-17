const nav = document.querySelector("nav");
const produtos = document.querySelector(".produtos a");

console.log(nav);
console.log(produtos);

// console.log(produtos.innerHTML);
// console.log(produtos.href);
// produtos.remove();

nav.style.backgroundColor = "black";
nav.style.padding = "1rem";

nav.classList.add("ativo");

console.dir(nav)