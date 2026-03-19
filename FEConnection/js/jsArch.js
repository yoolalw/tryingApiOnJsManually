const formData = document.querySelector("#formId")


formData.addEventListener('submit', async function (e) {    
    e.preventDefault();
    async function tryingThisFckJs() {

        const codigo = document.getElementById('codigo').value
        const nome = document.getElementById('nome').value
        const preco = document.getElementById('preco').value
        const quantidade = document.getElementById('quantidade').value


        const produto = {
            codigo: codigo,
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }

        try {
            const response = await fetch('http://localhost:8080/produtos/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(produto)
            });

            const json = response.json

            console.log(json);
        } catch (error) {
            console.error(" !! Error:", error)
        }


    }
    tryingThisFckJs();

});



