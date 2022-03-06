
let elementosDiv = []
elementosDiv = (tabelaPeriodica.querySelectorAll(".elemento"))



let legenda = document.querySelector(".legenda")

let naoMetal = legenda.querySelector(".tipos.nMetal")
naoMetal.addEventListener ('click', event => {
    for (i = 0; i < elementosDiv.length; i++) {
        elementosDiv[i].classList.remove("apagado")
        
        
        let classes = (elementosDiv[i].classList).value
        if (classes != "elemento nMetal") {
            elementosDiv[i].classList.add("apagado")
        } 
    }
})

let metalAlcalino = legenda.querySelector(".tipos.metalAlc")
metalAlcalino.addEventListener ('click', event => {
    for (i = 0; i < elementosDiv.length; i++) {
        elementosDiv[i].classList.remove("apagado")
        
        let classes = (elementosDiv[i].classList).value
        if (classes != "elemento metalAlc") {
            elementosDiv[i].classList.add("apagado")
        } 
    }
})

