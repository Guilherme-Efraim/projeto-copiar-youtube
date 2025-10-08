const botao = document.querySelector('.AtalhoParaMenu')
const menuLateral = document.querySelector('.menu-lateral')
const background = document.querySelector('.background')

botao.addEventListener('click', () => {
    botao.classList.toggle('ativo')
    menuLateral.classList.toggle('ativo')
    background.classList.toggle('ativo')
})

background.addEventListener('click', () => {
    botao.classList.remove('ativo')
    menuLateral.classList.remove('ativo')
    background.classList.remove('ativo')
    document.body.style.backgroundColor = "#ecf0f1"
})



