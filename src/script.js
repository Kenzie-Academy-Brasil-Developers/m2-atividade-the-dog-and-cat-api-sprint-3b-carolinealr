const body = document.querySelector("body");

const divGeral = document.createElement("div");
const divDog = document.createElement("div");
const divCat = document.createElement("div");
const divImgDog = document.createElement("img");
const divImgCat = document.createElement("img");
const buttonDog = document.createElement("button");
const buttonCat = document.createElement("button");

divGeral.classList.add("container-geral");
divDog.classList.add("div-dog");
divCat.classList.add("div-cat");
divImgDog.classList.add("div-img-dog");
divImgCat.classList.add("div-img-cat");
buttonDog.classList.add("button-dog");
buttonCat.classList.add("button-cat");

buttonDog.innerText = "Escolher Cachorro";
buttonCat.innerText = "Escolher Gato";

divDog.append(divImgDog, buttonDog);
divCat.append(divImgCat, buttonCat);
divGeral.append(divDog, divCat);
body.append(divGeral);

// Fetch acessa URL
// .then((resposta) => resposta.json()) transforma a resposta em um Objeto JavaScript

function chamarFetchDog() {
	fetch("https://api.thedogapi.com/v1/images/search")
		.then((resposta) => resposta.json())
		.then((cachorro) => {
			document.querySelector(".div-img-dog").src = cachorro[0].url;
		});
}

function chamarFetchCat() {
	fetch("https://api.thecatapi.com/v1/images/search")
		.then((resposta) => resposta.json())
		.then((gato) => {
			document.querySelector(".div-img-cat").src = gato[0].url;
		});
}

chamarFetchDog();
chamarFetchCat();

buttonDog.addEventListener("click", () => {
	chamarFetchDog();
});

buttonCat.addEventListener("click", () => {
	chamarFetchCat();
});