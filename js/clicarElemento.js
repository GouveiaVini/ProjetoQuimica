let tabelaPeriodica = document.querySelector(".tabelaPeriodica")
let elementoTabelaResumo = tabela.querySelector(".elementoDestaque")

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

let elementoTc = tabelaPeriodica.querySelector("#tecnecio")
elementoTc.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(43)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoRu = tabelaPeriodica.querySelector("#rutenio")
elementoRu.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(44)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoRh = tabelaPeriodica.querySelector("#rodio")
elementoRh.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(45)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoPd = tabelaPeriodica.querySelector("#paladio")
elementoPd.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(46)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoAg = tabelaPeriodica.querySelector("#prata")
elementoAg.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(47)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoCd = tabelaPeriodica.querySelector("#cadmio")
elementoCd.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(48)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoIn = tabelaPeriodica.querySelector("#indio")
elementoIn.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(49)
    limpaClasse()
    elementoTabelaResumo.classList.add("outrosMetal")
})

let elementoSn = tabelaPeriodica.querySelector("#estanho")
elementoSn.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(50)
    limpaClasse()
    elementoTabelaResumo.classList.add("outrosMetal")
})

let elementoSb = tabelaPeriodica.querySelector("#antimonio")
elementoSb.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(51)
    limpaClasse()
    elementoTabelaResumo.classList.add("semiMetal")
})

let elementoTe = tabelaPeriodica.querySelector("#telurio")
elementoTe.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(52)
    limpaClasse()
    elementoTabelaResumo.classList.add("semiMetal")
})

let elementoI = tabelaPeriodica.querySelector("#iodo")
elementoI.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(53)
    limpaClasse()
    elementoTabelaResumo.classList.add("halogenio")
})

let elementoXe = tabelaPeriodica.querySelector("#xenonio")
elementoXe.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(54)
    limpaClasse()
    elementoTabelaResumo.classList.add("gasesN")
})

let elementoCs = tabelaPeriodica.querySelector("#cesio")
elementoCs.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(55)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlc")
})

let elementoBa = tabelaPeriodica.querySelector("#bario")
elementoBa.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(56)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlcTer")
})

let elementoLa = tabelaPeriodica.querySelector("#lantanio")
elementoLa.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(57)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoCe = tabelaPeriodica.querySelector("#cerio")
elementoCe.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(58)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoPr = tabelaPeriodica.querySelector("#praseodimio")
elementoPr.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(59)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoNd = tabelaPeriodica.querySelector("#neodimio")
elementoNd.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(60)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoPm = tabelaPeriodica.querySelector("#promecio")
elementoPm.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(61)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoSm = tabelaPeriodica.querySelector("#samario")
elementoSm.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(62)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoEu = tabelaPeriodica.querySelector("#europio")
elementoEu.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(63)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoGd = tabelaPeriodica.querySelector("#gadolinio")
elementoGd.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(64)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoTb = tabelaPeriodica.querySelector("#terbio")
elementoTb.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(65)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoDy = tabelaPeriodica.querySelector("#disprosio")
elementoDy.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(66)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoHo = tabelaPeriodica.querySelector("#holmio")
elementoHo.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(67)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoEr = tabelaPeriodica.querySelector("#erbio")
elementoEr.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(68)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoTm = tabelaPeriodica.querySelector("#tulio")
elementoTm.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(69)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoYb = tabelaPeriodica.querySelector("#iterbio")
elementoYb.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(70)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoLu = tabelaPeriodica.querySelector("#lutecio")
elementoLu.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(71)
    limpaClasse()
    elementoTabelaResumo.classList.add("lantanideo")
})

let elementoHf = tabelaPeriodica.querySelector("#hafnio")
elementoHf.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(72)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoTa = tabelaPeriodica.querySelector("#tantalo")
elementoTa.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(73)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoW = tabelaPeriodica.querySelector("#tungstenio")
elementoW.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(74)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoRe = tabelaPeriodica.querySelector("#renio")
elementoRe.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(75)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoOs = tabelaPeriodica.querySelector("#osmio")
elementoOs.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(76)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoIr = tabelaPeriodica.querySelector("#iridio")
elementoIr.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(77)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoPt = tabelaPeriodica.querySelector("#platina")
elementoPt.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(78)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoAu = tabelaPeriodica.querySelector("#ouro")
elementoAu.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(79)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoHg = tabelaPeriodica.querySelector("#mercurio")
elementoHg.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(80)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoTl = tabelaPeriodica.querySelector("#talio")
elementoTl.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(81)
    limpaClasse()
    elementoTabelaResumo.classList.add("outrosMetal")
})

let elementoPb = tabelaPeriodica.querySelector("#chumbo")
elementoPb.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(82)
    limpaClasse()
    elementoTabelaResumo.classList.add("outrosMetal")
})

let elementoBi = tabelaPeriodica.querySelector("#bismuto")
elementoBi.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(83)
    limpaClasse()
    elementoTabelaResumo.classList.add("outrosMetal")
})

let elementoPo = tabelaPeriodica.querySelector("#polonio")
elementoPo.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(84)
    limpaClasse()
    elementoTabelaResumo.classList.add("semiMetal")
})

let elementoAt = tabelaPeriodica.querySelector("#astato")
elementoAt.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(85)
    limpaClasse()
    elementoTabelaResumo.classList.add("halogenio")
})

let elementoRn = tabelaPeriodica.querySelector("#radon")
elementoRn.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(86)
    limpaClasse()
    elementoTabelaResumo.classList.add("gasesN")
})

let elementoFr = tabelaPeriodica.querySelector("#francio")
elementoFr.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(87)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlc")
})

let elementoRa = tabelaPeriodica.querySelector("#radio")
elementoRa.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(88)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalAlcTer")
})

let elementoAc = tabelaPeriodica.querySelector("#actinio")
elementoAc.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(89)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoTh = tabelaPeriodica.querySelector("#torio")
elementoTh.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(90)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoPa = tabelaPeriodica.querySelector("#protactinio")
elementoPa.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(91)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoU = tabelaPeriodica.querySelector("#uranio")
elementoU.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(92)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoNp = tabelaPeriodica.querySelector("#neptunio")
elementoNp.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(93)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoPu = tabelaPeriodica.querySelector("#plutonio")
elementoPu.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(94)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoAm = tabelaPeriodica.querySelector("#americio")
elementoAm.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(95)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoCm = tabelaPeriodica.querySelector("#curio")
elementoCm.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(96)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoBk = tabelaPeriodica.querySelector("#berquelio")
elementoBk.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(97)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoCf = tabelaPeriodica.querySelector("#californio")
elementoCf.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(98)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoEs = tabelaPeriodica.querySelector("#einstenio")
elementoEs.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(99)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoFm = tabelaPeriodica.querySelector("#fermio")
elementoFm.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(100)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoMd = tabelaPeriodica.querySelector("#mendelevio")
elementoMd.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(101)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoNo = tabelaPeriodica.querySelector("#nobelio")
elementoNo.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(102)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoLr = tabelaPeriodica.querySelector("#laurencio")
elementoLr.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(103)
    limpaClasse()
    elementoTabelaResumo.classList.add("actinidios")
})

let elementoRf = tabelaPeriodica.querySelector("#rutherfordio")
elementoRf.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(104)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoDb = tabelaPeriodica.querySelector("#dubnio")
elementoDb.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(105)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoSg = tabelaPeriodica.querySelector("#seaborgio")
elementoSg.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(106)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoBh = tabelaPeriodica.querySelector("#bohrio")
elementoBh.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(107)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoHs = tabelaPeriodica.querySelector("#hassio")
elementoHs.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(108)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoMt = tabelaPeriodica.querySelector("#meitnerio")
elementoMt.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(109)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoDs = tabelaPeriodica.querySelector("#darmstacio")
elementoDs.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(110)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoRg = tabelaPeriodica.querySelector("#roentgenio")
elementoRg.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(111)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoCn = tabelaPeriodica.querySelector("#copernicio")
elementoCn.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(112)
    limpaClasse()
    elementoTabelaResumo.classList.add("metalTrans")
})

let elementoNh = tabelaPeriodica.querySelector("#niponio")
elementoNh.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(113)
    limpaClasse()
    elementoTabelaResumo.classList.add("outrosMetal")
})

let elementoFl = tabelaPeriodica.querySelector("#flerovio")
elementoFl.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(114)
    limpaClasse()
    elementoTabelaResumo.classList.add("outrosMetal")
})

let elementoMc = tabelaPeriodica.querySelector("#moscovio")
elementoMc.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(115)
    limpaClasse()
    elementoTabelaResumo.classList.add("outrosMetal")
})

let elementoLv = tabelaPeriodica.querySelector("#livermorio")
elementoLv.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(116)
    limpaClasse()
    elementoTabelaResumo.classList.add("outrosMetal")
})

let elementoTs = tabelaPeriodica.querySelector("#tenesso")
elementoTs.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(117)
    limpaClasse()
    elementoTabelaResumo.classList.add("halogenio")
})

let elementoOg = tabelaPeriodica.querySelector("#oganesson")
elementoOg.addEventListener ('click', event => {
    mostraResumo()
    atualizaResumo(118)
    limpaClasse()
    elementoTabelaResumo.classList.add("gasesN")
})
