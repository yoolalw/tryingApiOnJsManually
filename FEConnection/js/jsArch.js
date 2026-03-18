const formId = document.getElementById("formId");
const submitBtn = document.getElementById("submitBtn");

async function fetchTry() {
    try {
        const response = await fetch('http://localhost:8080/produtos');
        const data = await response.json();
        console.log(`aaa - ${data}`);
    } catch (err) {
        console.error("aaah", err)
    }
}

submitBtn.addEventListener('submit', async function (e) {
    e.preventDefault();
    await fetchTry();
});

fetchTry();