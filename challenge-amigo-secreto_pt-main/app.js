//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let nomes = [];

// Elementos do DOM
const nomeInput = document.getElementById('nomeInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaNomes = document.getElementById('listaNomes');
const sortearBtn = document.getElementById('sortearBtn');
const nomeSorteado = document.getElementById('nomeSorteado');

// Função para adicionar um nome à lista
adicionarAmigo().addEventListener('click', () => {
    const nome = nomeInput.value.trim(); // Remove espaços em branco

    if (nome) {
        nomes.push(nome); // Adiciona o nome ao array
        atualizarLista(); // Atualiza a lista no front-end
        nomeInput.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome válido.');
    }
});

// Função para atualizar a lista de nomes no front-end
function atualizarLista() {
    listaNomes.innerHTML = ''; // Limpa a lista atual

    nomes.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

// Função para sortear um nome
sortearBtn.addEventListener('click', () => {
    if (nomes.length > 0) {
        const indiceSorteado = Math.floor(Math.random() * nomes.length);
        nomeSorteado.textContent = nomes[indiceSorteado];
    } else {
        alert('Adicione nomes à lista antes de sortear.');
    }
});