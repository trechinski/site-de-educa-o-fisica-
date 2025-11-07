const RegistroForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // Aqui você pode adicionar a lógica para validar e enviar os dados
        console.log(data);
    };

    return `
        <form id="registro-form" onsubmit="handleSubmit(event)">
            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div>
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required>
            </div>
            <button type="submit">Registrar</button>
        </form>
    `;
};

export default RegistroForm;