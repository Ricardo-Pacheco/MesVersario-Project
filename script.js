const select = document.querySelector("select")
const fotos = document.querySelector(".fotos")
const descriçao = document.querySelector(".descriçao")
const button = document.querySelector(".button")

function changeFotos() {

    if (select.value === "primeira") {
        fotos.src = "./img/fimDeAno1.jpeg"
        descriçao.innerHTML = "Nosso primeiro fim de ano juntinhos 🥰💙"
    }
    
    if (select.value === "segunda") {
        fotos.src = "./img/fimDeAno2.jpeg"
        descriçao.innerHTML = "Foi simplesmente mágico beijar você na virada💏"
    }

    if (select.value === "terceira") {
        fotos.src = "./img/aquaRio.jpeg"
        descriçao.innerHTML = "Nossa ida ao AquaRio onde nos divertimos muito!🐠"
    }

    if (select.value === "quarta") {
        fotos.src = "./img/banhoChuveirao.jpeg"
        descriçao.innerHTML = "Quando tomamos banho para nos refrescar🚿"
    }

    if (select.value === "quinta") {
        fotos.src = "./img/lanche.jpeg"
        descriçao.innerHTML = "A gente fazendo o que mais gostamos, que é comer😋🍔"
    }

    if (select.value === "sexta") {
        fotos.src = "./img/passeioBike.jpeg"
        descriçao.innerHTML = "Nosso passeio de bike🚲💙"
    }

    if (select.value === "setima") {
        fotos.src = "./img/praia1.jpeg"
        descriçao.innerHTML = "Nossa primeira vez juntinhos na praia🌊"
    }

    if (select.value === "oitava") {
        fotos.src = "./img/praia2.jpeg"
        descriçao.innerHTML = "Nossa segunda vez na praia, que foi melhor ainda🌊"
    }

    if (select.value === "nona") {
        fotos.src = "./img/shopping.jpeg"
        descriçao.innerHTML = "Nossos passeios ao shopping são sempre especiais😎💙"
    }

    if (select.value === "decima") {
        fotos.src = "./img/sushi1.jpeg"
        descriçao.innerHTML = "Nossa primeira vez comendo sushi, nunca achei que fosse fazer isso🍣"
    }

    if (select.value === "decima-primeira") {
        fotos.src = "./img/sushiPraia.jpeg"
        descriçao.innerHTML = "A gente comendo sushi no quiosque, bem chiques🍣"
    }

    if (select.value === "decima-segunda") {
        fotos.src = "./img/final.jpeg"
        descriçao.innerHTML = "Eu te amo mais do que tudinho nesse universo, minha princesa🥰🌌"
    }
}

function declaraçao() {
    alert(`
           FELIZ 1 ANO E 4 MESES MINHA PRINCESA!!!!
           Eu sou muito grato por ter você na minha vida,
           você é tudo pra mim, eu sou muito feliz ao seu
           lado, pq você me faz muito feliz! Vamos estar
           juntos sempre, nos bons e maus momentos, o que
           temos é um encontro de almas, agora que estamos
           juntos, nossa alma está unida e entrelaçada pra 
           sempre. Eu tenho muita sorte de namorar a mulher
           mais incrível, mais linda, mais gostosa, mais
           engraçada, mais meiga, gentil, carinhosa e sexy
           de todo esse universo, Eu só sei que eu te amo e
           que eu te quero a cada dia mais e mais meu amor,
           Eu sou todinho e inteiramente seu, e só seu! de
           corpo, alma e pensamento. Obrigado por tudo e por
           ter me ajudado a me tornar o homem que eu sou hoje,
            EU TE AMO INFINITAMENTE, PRA SEMPRE!💙💙💙`)
}

button.addEventListener("click", declaraçao)
select.addEventListener("change", changeFotos)