function startPrank() {
    // Ocultar o conteúdo atual
    document.body.innerHTML = '';

    // Adicionar a mensagem assustadora
    let message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.top = '0';
    message.style.left = '0';
    message.style.width = '100%';
    message.style.height = '100%';
    message.style.backgroundColor = 'black';
    message.style.display = 'flex';
    message.style.justifyContent = 'center';
    message.style.alignItems = 'center';
    message.style.color = 'red';
    message.style.fontSize = '2em';
    message.style.textAlign = 'center';
    message.innerHTML = `
        <div>
            <p>Parabéns! Você foi infectado pelo vírus A666B7.</p>
            <p>Vírus conhecido como Trojan. Nunca mais entre em sites piratas!</p>
        </div>
    `;
    document.body.appendChild(message);

    // Adicionar o som assustador
    let audio = new Audio('som.mp3');
    audio.play();
}
