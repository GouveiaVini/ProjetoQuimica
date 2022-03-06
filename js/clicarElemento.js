let tabelaPeriodica = document.querySelector(".tabelaPeriodica")
let elementoTabelaResumo = tabela.querySelector(".elemento")

function limpaClasse() {
    elementoTabelaResumo.classList.remove("nMetal")
    elementoTabelaResumo.classList.remove("gasesN")
    elementoTabelaResumo.classList.remove("metalAlc")
    elementoTabelaResumo.classList.remove("metalAlcTer")
    elementoTabelaResumo.classList.remove("metalTrans")
    elementoTabelaResumo.classList.remove("halogenio")
    elementoTabelaResumo.classList.remove("semiMetal")
    elementoTabelaResumo.classList.remove("outrosMetal")
    elementoTabelaResumo.classList.remove("lantanideo")
    elementoTabelaResumo.classList.remove("actinidios")

}

let elementoH = tabelaPeriodica.querySelector("#hidrogenio")
elementoH.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(1)
    limpaClasse()
    elementoTabelaResumo.classList.add("nMetal")
})

let elementoHe = tabelaPeriodica.querySelector("#helio")
elementoHe.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(2)
    limpaClasse()
    elementoTabelaResumo.classList.add("gasesN")
})

let elementoLi = tabelaPeriodica.querySelector("#litio")
elementoLi.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(3)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlc")
})

let elementoBe = tabelaPeriodica.querySelector("#berilio")
elementoBe.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(4)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlcTer")
})

let elementoB = tabelaPeriodica.querySelector("#boro")
elementoB.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(5)
    limpaClasse()
    elementoTabelaResumo.classList.add("semiMetal")
})

let elementoC = tabelaPeriodica.querySelector("#carbono")
elementoC.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(6)
    limpaClasse()
    elementoTabelaResumo.classList.add("nMetal")
})

let elementoN = tabelaPeriodica.querySelector("#nitrogenio")
elementoN.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(7)
    limpaClasse()
    elementoTabelaResumo.classList.add("nMetal")
})

let elementoO = tabelaPeriodica.querySelector("#oxigenio")
elementoO.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(8)
    limpaClasse()
    elementoTabelaResumo.classList.add("nMetal")
})

let elementoF = tabelaPeriodica.querySelector("#fluor")
elementoF.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(9)
    limpaClasse()
    elementoTabelaResumo.classList.add("halogenio")
})

let elementoNe = tabelaPeriodica.querySelector("#neonio")
elementoNe.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(10)
    limpaClasse()
    elementoTabelaResumo.classList.add("gasesN")
})

let elementoNa = tabelaPeriodica.querySelector("#sodio")
elementoNa.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(11)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlc")
})

let elementoMg = tabelaPeriodica.querySelector("#magnesio")
elementoMg.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(12)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlcTer")
})

let elementoAl = tabelaPeriodica.querySelector("#aluminio")
elementoAl.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(13)
    limpaClasse()
    elementoTabelaResumo.classList.add("outrosMetal")
})

let elementoSi = tabelaPeriodica.querySelector("#silicio")
elementoSi.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(14)
    limpaClasse()
    elementoTabelaResumo.classList.add("semiMetal")
})

let elementoP = tabelaPeriodica.querySelector("#fosforo")
elementoP.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(15)
    limpaClasse()
    elementoTabelaResumo.classList.add("nMetal")
})

let elementoS = tabelaPeriodica.querySelector("#enxofre")
elementoS.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(16)
    limpaClasse()
    elementoTabelaResumo.classList.add("nMetal")
})

let elementoCl = tabelaPeriodica.querySelector("#cloro")
elementoCl.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(17)
    limpaClasse()
    elementoTabelaResumo.classList.add("halogenio")
})

let elementoAr = tabelaPeriodica.querySelector("#argonio")
elementoAr.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(18)
    limpaClasse()
    elementoTabelaResumo.classList.add("gasesN")
})

let elementoK = tabelaPeriodica.querySelector("#potassio")
elementoK.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(19)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlc")
})

let elementoCa = tabelaPeriodica.querySelector("#calcio")
elementoCa.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(20)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlcTer")
})

let elementoSc = tabelaPeriodica.querySelector("#escandio")
elementoSc.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(21)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoTi = tabelaPeriodica.querySelector("#titanio")
elementoTi.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(22)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoV = tabelaPeriodica.querySelector("#vanadio")
elementoV.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(23)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoCr = tabelaPeriodica.querySelector("#cromo")
elementoCr.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(24)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoMn = tabelaPeriodica.querySelector("#manganes")
elementoMn.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(25)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoFe = tabelaPeriodica.querySelector("#ferro")
elementoFe.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(26)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoCo = tabelaPeriodica.querySelector("#cobalto")
elementoCo.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(27)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoNi = tabelaPeriodica.querySelector("#niquel")
elementoNi.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(28)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoCu = tabelaPeriodica.querySelector("#cobre")
elementoCu.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(29)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoZn = tabelaPeriodica.querySelector("#zinco")
elementoZn.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(30)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoGa = tabelaPeriodica.querySelector("#galio")
elementoGa.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(31)
    limpaClasse()
    elementoTabelaResumo.classList.add("outrosMetal")
})

let elementoGe = tabelaPeriodica.querySelector("#germanio")
elementoGe.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(32)
    limpaClasse()
    elementoTabelaResumo.classList.add("semiMetal")
})

let elementoAs = tabelaPeriodica.querySelector("#arsenio")
elementoAs.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(33)
    limpaClasse()
    elementoTabelaResumo.classList.add("semiMetal")
})

let elementoSe = tabelaPeriodica.querySelector("#selenio")
elementoSe.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(34)
    limpaClasse()
    elementoTabelaResumo.classList.add("nMetal")
})

let elementoBr = tabelaPeriodica.querySelector("#bromo")
elementoBr.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(35)
    limpaClasse()
    elementoTabelaResumo.classList.add("halogenio")
})

let elementoKr = tabelaPeriodica.querySelector("#criptonio")
elementoKr.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(36)
    limpaClasse()
    elementoTabelaResumo.classList.add("gasesN")
})

let elementoRb = tabelaPeriodica.querySelector("#rubidio")
elementoRb.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(37)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlc")
})

let elementoSr = tabelaPeriodica.querySelector("#estroncio")
elementoSr.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(38)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlcTer")
})

let elementoY = tabelaPeriodica.querySelector("#itrio")
elementoY.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(39)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoZr = tabelaPeriodica.querySelector("#zirconio")
elementoZr.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(40)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoNb = tabelaPeriodica.querySelector("#niobio")
elementoNb.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(41)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoMo = tabelaPeriodica.querySelector("#molibdenio")
elementoMo.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(42)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(43)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(44)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(45)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(46)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(47)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(48)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(49)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(50)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(51)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(52)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(53)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(54)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(55)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(56)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(57)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(58)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(59)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(60)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(61)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(62)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(63)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(64)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(65)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(66)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(67)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(68)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(69)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(70)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(71)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(72)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(73)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(74)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(75)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(76)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(77)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(78)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })
// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(79)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })
// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(80)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(81)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(82)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(83)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(74)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(75)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(86)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(87)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(88)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })
// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(89)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })
// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(90)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(91)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(92)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(93)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(94)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(95)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(96)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(97)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(98)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })
// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(99)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })
// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(100)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(101)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(102)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(103)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(104)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(105)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(106)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(107)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(108)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })
// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(109)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })
// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(110)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(111)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(112)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(113)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(114)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(115)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(116)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(117)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })

// let elemento = tabelaPeriodica.querySelector("#id")
// elemento.addEventListener ('click', event => {
//     mostraResumo()
//     atualizaResumo(118)
//     limpaClasse()
//     elementoTabelaResumo.classList.add("classe")
// })
