'use strict'

const Cores = {
  "amarelo": "yellow",
    "azul": "blue",
    "branco": "white",
    "cinza": "gray",
    "laranja": "orange",
    "marrom": "brown",
    "preto": "black",
    "rosa": "pink",
    "roxo": "purple",
    "verde": "green",
    "vermelho": "red"
}
// chama o ID no js
const botaoTrocarCor = document.getElementById("trocar-cor")

//Criar funçao e coloca uma propriedade para uma variável
function trocarCor(){

  const CorDigitada = document.getElementById('cor').value

  const corFormatada = CorDigitada.toLowerCase().trim()

  const corFinal = Cores[corFormatada] || corFormatada

  console.log(`Digitado: ${CorDigitada} | Aplicado: ${corFinal}`)

  document.documentElement.style.setProperty('--corBack-bg--', corFinal)
}

botaoTrocarCor.addEventListener('click', trocarCor)

