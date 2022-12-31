var promptName = prompt("Olá, Qual é o seu nome?");
var MessageFelizAnoNovoName = `Feliz ano novo, <span class="name-gradient">${promptName}!</span> 🎉😀`;

var MessageFelizAnoNovoText = "Ao começar o novo ano, certifique-se de deixar para trás tudo aquilo que não vai te levar para frente. Abra espaço para coisas novas e deixe permanecer somente o que for bom. Celebre os amigos e amores verdadeiros. Feliz Ano Novo!"
var nameText = document.getElementById("name");
var messageText = document.getElementById("message");

nameText.innerHTML = MessageFelizAnoNovoName;
messageText.innerHTML = MessageFelizAnoNovoText;