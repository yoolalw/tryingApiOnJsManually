const submitBtn = document.getElementById("submitBtn");

const formData = new FormData(document.getElementById("formId"));

async function fetchTry() {
    try {
        const response = await fetch('http://localhost:8080/produtos/register', {
            "method": "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(`pls js gfy - ${data}`);
    } catch (error) {
        console.error("Error:", error)
    }
}


submitBtn.addEventListener('submit', async (e) => {
    e.preventDefault();
    alert("asdsa")
    fetchTry();
});

