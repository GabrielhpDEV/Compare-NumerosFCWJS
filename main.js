document.getElementById('numForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    var mensagemDiv = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagemDiv.textContent = 'Campo B é maior que Campo A.';
        mensagemDiv.className = 'mensagem certo';
    } else {
        mensagemDiv.textContent = 'Campo B deve ser maior que Campo A.';
        mensagemDiv.className = 'mensagem errado';
    }
});