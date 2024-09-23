const form = document.getElementById ('agenda-tel')
let linhas = ''
const contato = []
const telefone = []

form.addEventListener ('submit' , function(e) {
    e.preventDefault()

    adicionarLinha()
    atualizaTabela()
    atualizaContagemContatos()
})

function adicionarLinha() {
    const inputNomeContato = document.getElementById('contato')
    const inputNumeroContato = document.getElementById('numero')

    const nomecontato = inputNomeContato.value.trim()
    const Numerocontato = inputNumeroContato.value.trim()

    if (telefone.includes(Numerocontato)) {
        alert(`contato ${Numerocontato} ja foi registrado!!`)
        return
    }

    if(contato.includes(nomecontato)) {
        alert(`O nome ${nomecontato} ja foi registrado!!`)
        return
    }

    contato.push(nomecontato)
    telefone.push(Numerocontato)

    let linha = '<tr>'
    linha += `<td>${nomecontato}</td>`
    linha += `<td>${Numerocontato}</td>`
    linha += `</tr>`

    linhas += linha

    inputNomeContato.value =''
    inputNumeroContato.value =''
    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaContagemContatos() {
    const totalContatos = contato.length
    document.getElementById('total-contatos').innerHTML = totalContatos
}