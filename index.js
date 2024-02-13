const perguntas = [
  {
    pergunta:
      "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
    respostas: ["variable x;", "v x;", "var x;"],
    correta: 2,
  },
  {
    pergunta: "Qual destes métodos converte uma string em um número inteiro?",
    respostas: ["parseInt()", "stringToInt()", "toInteger()"],
    correta: 0,
  },
  {
    pergunta: "O que o método 'push()' faz em JavaScript?",
    respostas: [
      "Remove o último elemento de um array.",
      "Adiciona um elemento ao final de um array.",
      "Inverte a ordem dos elementos em um array.",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual destes é um operador de atribuição em JavaScript?",
    respostas: ["=", "==", "==="],
    correta: 0,
  },
  {
    pergunta:
      "Qual destes métodos é usado para selecionar um elemento HTML por seu id em JavaScript?",
    respostas: [
      "document.selectById()",
      "document.queryId()",
      "document.getElementById()",
    ],
    correta: 2,
  },
  {
    pergunta: "O que o operador '===' faz em JavaScript?",
    respostas: [
      "Compara se dois valores são iguais, sem considerar o tipo.",
      "Compara se dois valores são iguais, incluindo o tipo.",
      "Compara se dois valores são iguais, mas apenas em strings.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual destes métodos é usado para adicionar um evento a um elemento HTML em JavaScript?",
    respostas: ["addEventListener()", "attachEvent()", "eventListener()"],
    correta: 0,
  },
  {
    pergunta: "O que o método 'pop()' faz em JavaScript?",
    respostas: [
      "Adiciona um elemento ao final de um array.",
      "Remove o primeiro elemento de um array.",
      "Remove o último elemento de um array.",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
    respostas: ["+", "&", "|"],
    correta: 0,
  },
  {
    pergunta: "Qual destes é um tipo de dados primitivo em JavaScript?",
    respostas: ["Array", "Object", "String"],
    correta: 2,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
    };
    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  // coloca a pergunta na tela
  quiz.appendChild(quizItem);
}
