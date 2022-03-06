let elementos = document.querySelectorAll(".elemento")
let numAtomicoElementos = elementos[1]
let el = numAtomicoElementos.querySelector(".num").textContent
const tabela = document.querySelector(".resumoElemento")

let nomeElementos = []
let numElementos = []
let siglaElementos = []
let massaElementos = []
for(i = 0; i < elementos.length; i++) {
    let elemento = (elementos[i])
    nomeElementos.push(elemento.querySelector(".nome").textContent)
    numElementos.push(elemento.querySelector(".num").textContent)
    siglaElementos.push(elemento.querySelector(".sigla").textContent)
    massaElementos.push(elemento.querySelector(".massa").textContent)
}

let mapMassas = new Map();
for(i = 0; i < elementos.length; i++) {
    let elemento = (elementos[i])
    mapMassas.set((elemento.querySelector(".sigla").textContent),(elemento.querySelector(".massa").textContent))
}
// console.log(mapMassas)

// mostrar resumo do elemento
function mostraResumo() {
    const tabela = document.querySelector(".resumoElemento")
    tabela.classList.add("show")
}

function defineElementoResumo(numero) {
    let num = numElementos[numero]
    let sigla = siglaElementos[numero]
    let nome = nomeElementos[numero]
    let massa = massaElementos[numero]

    return {
        num, 
        sigla, 
        nome, 
        massa
    }
}



function atualizaResumo(numeroMolar) {

    elementoResumo = defineElementoResumo(numeroMolar-1)

    let info = tabela.querySelector(".info")
    let infoNum = info.querySelector(".num")
    let infoSigla = info.querySelector(".sigla")
    let infoNome = info.querySelector(".nome")
    let infoMassa = info.querySelector(".massa")

    infoNum.textContent = `Numero atômico: ${elementoResumo.num}`
    infoSigla.textContent = `Símbolo: ${elementoResumo.sigla}`
    infoNome.textContent = `Nome: ${elementoResumo.nome}`
    infoMassa.textContent = `Massa molar: ${elementoResumo.massa}`

    let elemento = tabela.querySelector(".elemento")
    let eleNum = elemento.querySelector(".num")
    let eleSigla = elemento.querySelector(".sigla")
    let eleNome = elemento.querySelector(".nome")
    let eleMassa = elemento.querySelector(".massa")
    
    eleNum.textContent = elementoResumo.num
    eleSigla.textContent = elementoResumo.sigla
    eleNome.textContent = elementoResumo.nome
    eleMassa.textContent = elementoResumo.massa

}






