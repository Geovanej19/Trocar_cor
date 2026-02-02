'use strict'

const mudarCor = document.getElementById('mudarCor')
const coresTraduzidas = {
    "Azul": "Preto",
    "Laranja": "Cinza"
}

function trocarCor(){
    const cor = document.getElementById('cor').value.toLowerCase().trim()
    document.documentElement.style.setProperty('--cor-bg', cor)
}





mudarCor.addEventListener('click', trocarCor)

