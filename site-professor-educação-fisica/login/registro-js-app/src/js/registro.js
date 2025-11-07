// File: /registro-js-app/registro-js-app/src/js/registro.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registro-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (validateForm(data)) {
            sendDataToServer(data);
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });
});

function validateForm(data) {
    // Implementar validações de dados do formulário
    return data.username && data.password && data.email; // Exemplo simples de validação
}

function sendDataToServer(data) {
    fetch('/api/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registro realizado com sucesso!');
            // Redirecionar ou limpar o formulário
        } else {
            alert('Erro ao registrar: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao registrar. Tente novamente mais tarde.');
    });
}