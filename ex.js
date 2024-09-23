const form = document.getElementById('agenda-tel');
let linhas = '';
const contatos = [];
const telefones = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizaContagemContatos();
});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('contato');
    const inputNumeroContato = document.getElementById('numero'); 

    const nomeContato = inputNomeContato.value.trim();
    const numeroContato = inputNumeroContato.value.trim();

    // Verifica se o contato já existe
    if (contatos.includes(nomeContato)) {
        alert(`O contato com o nome ${nomeContato} já existe!`);
        return;
    }

    // Verifica se o número já existe
    if (telefones.includes(numeroContato)) {
        alert(`O número ${numeroContato} já existe!`);
        return;
    }

    // Adiciona os valores à lista
    contatos.push(nomeContato);
    telefones.push(numeroContato);

    // Cria uma nova linha para a tabela
    let linha = '<tr>';
    linha += `<td>${nomeContato}</td>`;
    linha += `<td>${numeroContato}</td>`;
    linha += `</tr>`;

    linhas += linha;

    // Limpa os campos de entrada
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContagemContatos() {
    const totalContatos = contatos.length;
    document.getElementById('total-contatos').innerHTML = totalContatos;
}