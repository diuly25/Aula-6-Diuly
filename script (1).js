const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A representação autêntica da cultura em filmes:",
        alternativas: [
            "Promove a valorização da diversidade cultural.",
            "Reforça estereótipos prejudiciais."
        ]
    },
    {
        enunciado: "Filmes que utilizam estereótipos culturais:",
        alternativas: [
            "Podem simplificar e distorcer as culturas representadas.",
            "São sempre precisos e respeitosos nas suas representações.",
        ]
    },
    {
        enunciado: "A maneira como os filmes retratam uma cultura:",
        alternativas: [
            "Pode influenciar a percepção global dessa cultura.",
            "Não tem impacto fora do entretenimento."
        ]
    },
    {
        enunciado: "A representação de culturas minoritárias nos filmes:",
        alternativas: [
            "É essencial para combater o racismo e a discriminação.",
            "Não tem impacto significativo na sociedade contemporânea."
        ]
    },
    {
        enunciado: "Por que é importante que os cineastas consultem especialistas culturais ao retratar uma cultura específica?",
        alternativas: [
           "Para garantir que a representação seja autêntica e respeitosa.",
           "Porque isso limita a criatividade dos cineastas."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
