// inicio da primeira parte

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        // fim da primeira parte

        // inicio da segunda parte

        const idSelecionado = personagem.attributes.id.value

        if(idSelecionado === 'ultron') return
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1')
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById('nome-jogador-1')
        // nomeJogador1.innerHTML = 'batata'

        const nomeSelecionado = personagem.getAttribute('data-name')

        nomeJogador1.innerHTML = nomeSelecionado
    })
})


