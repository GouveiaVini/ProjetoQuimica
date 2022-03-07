
let elementosDiv = []
elementosDiv = (tabelaPeriodica.querySelectorAll(".elemento"))

let halogenioClicado = true
let gasesNClicado = true
let nMetalClicado = true
let metalAlcClicado = true
let metalTransClicado = true
let metalAlcTerClicado = true
let semiMetalClicado = true
let lantanideoClicado = true
let actinidiosClicado = true
let outrosMetalClicado = true

function  setarOutrosTrue(classeLegenda) {
    if (classeLegenda != "halogenio") {
        halogenioClicado = true
    } 

    if (classeLegenda != "gasesN" ) {
        gasesNClicado = true
    }

    if (classeLegenda != "actinidios" ) {
        actinidiosClicado = true
    }

    if (classeLegenda != "lantanideo" ) {
        lantanideoClicado = true
    }

    if (classeLegenda != "semiMetal" ) {
        semiMetalClicado = true
    }

    if (classeLegenda != "outrosMetal" ) {
        outrosMetalClicado = true
    }

    if (classeLegenda != "metalTrans" ) {
        metalTransClicado = true
    }

    if (classeLegenda != "metalAlcTer" ) {
        metalAlcTerClicado = true
    }

    if (classeLegenda != "metalAlc" ) {
        metalAlcClicado = true
    }

    if (classeLegenda != "nMetal" ) {
        nMetalClicado = true
    }
}

let legenda = document.querySelector(".legenda")

let naoMetal = legenda.querySelector(".tipos.nMetal")
naoMetal.addEventListener ('click', event => {
    if (nMetalClicado) {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
            
            let classes = (elementosDiv[i].classList).value
            if (classes != "elemento nMetal") {
                elementosDiv[i].classList.add("apagado")
            } 
        }
        setarOutrosTrue("nMetal")
        nMetalClicado = false
    } else {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
        }
        nMetalClicado = true
    }
})

let metalAlcalino = legenda.querySelector(".tipos.metalAlc")
metalAlcalino.addEventListener ('click', event => {
    if (metalAlcClicado) {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
            
            let classes = (elementosDiv[i].classList).value
            if (classes != "elemento metalAlc") {
                elementosDiv[i].classList.add("apagado")
            } 
        }
        setarOutrosTrue("metalAlc")
        metalAlcClicado = false 
    } else {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
        }
        metalAlcClicado = true 
    }

})


let metalAlcTer = legenda.querySelector(".tipos.metalAlcTer")
metalAlcTer.addEventListener ('click', event => {
    if(metalAlcTerClicado) {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
            
            let classes = (elementosDiv[i].classList).value
            if (classes != "elemento metalAlcTer") {
                elementosDiv[i].classList.add("apagado")
            } 
        }
        setarOutrosTrue("metalAlcTer")
        metalAlcTerClicado = false
    } else {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
        }
        metalAlcTerClicado = true
    }

})

let metalTrans = legenda.querySelector(".tipos.metalTrans")
metalTrans.addEventListener ('click', event => {
    if (metalTrans) {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
            
            let classes = (elementosDiv[i].classList).value
            if (classes != "elemento metalTrans") {
                elementosDiv[i].classList.add("apagado")
            } 
        }
        setarOutrosTrue("metalTrans")
        metalTransClicado = false
    } else {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
        }
        metalTransClicado = true
    }
})

let outrosMetal = legenda.querySelector(".tipos.outrosMetal")
outrosMetal.addEventListener ('click', event => {
    if (outrosMetalClicado) {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
            
            let classes = (elementosDiv[i].classList).value
            if (classes != "elemento outrosMetal") {
                elementosDiv[i].classList.add("apagado")
            } 
        }
        setarOutrosTrue("outrosMetal")
        outrosMetalClicado = false 
    } else {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
        }
        outrosMetalClicado = true
    }
})

let semiMetal = legenda.querySelector(".tipos.semiMetal")
semiMetal.addEventListener ('click', event => {
    if (semiMetalClicado) {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
            
            let classes = (elementosDiv[i].classList).value
            if (classes != "elemento semiMetal") {
                elementosDiv[i].classList.add("apagado")
            } 
        }
        setarOutrosTrue("semiMetal")
        semiMetalClicado = false
    } else {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
        }
        semiMetalClicado = true
    }
})

let lantanideo = legenda.querySelector(".tipos.lantanideo")
lantanideo.addEventListener ('click', event => {
    if (lantanideoClicado) {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
            
            let classes = (elementosDiv[i].classList).value
            if (classes != "elemento lantanideo") {
                elementosDiv[i].classList.add("apagado")
            } 
        }
        setarOutrosTrue("lantanideo")
        lantanideoClicado = false
    } else {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
        }
        lantanideoClicado = true
    }
})

let actinidios = legenda.querySelector(".tipos.actinidios")
actinidios.addEventListener ('click', event => {
    if (actinidiosClicado) {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
            
            let classes = (elementosDiv[i].classList).value
            if (classes != "elemento actinidios") {
                elementosDiv[i].classList.add("apagado")
            } 
        }
        setarOutrosTrue("actinidios")
        actinidiosClicado = false
    } else {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
        }
        actinidiosClicado = true
    }
})


let halogenio = legenda.querySelector(".tipos.halogenio")
halogenio.addEventListener ('click', event => {
    
    if (halogenioClicado) {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
            
            let classes = (elementosDiv[i].classList).value
            if (classes != "elemento halogenio") {
                elementosDiv[i].classList.add("apagado")
            } 
        }
        setarOutrosTrue("halogenio")
        halogenioClicado = false
    } else {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
        }
        halogenioClicado = true
    }


})
let gasesN = legenda.querySelector(".tipos.gasesN")
gasesN.addEventListener ('click', event => {
    
    if (gasesNClicado) {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
            
            let classes = (elementosDiv[i].classList).value
            if (classes != "elemento gasesN") {
                elementosDiv[i].classList.add("apagado")
            } 
        }
        setarOutrosTrue("gasesN")
        gasesNClicado = false
    }else {
        for (i = 0; i < elementosDiv.length; i++) {
            elementosDiv[i].classList.remove("apagado")
        }
        gasesNClicado = true
    }
})



