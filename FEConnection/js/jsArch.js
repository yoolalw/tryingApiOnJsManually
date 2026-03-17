const formId = document.getElementById("formId");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("submit", function(e){
    e.preventDefault();

    fetch('http://localhost:8080/produtos').then(response =>{
        if(!response.ok){
            throw new Error("response error");
        } return response.json();
    }).then(data => console.log('product data: ', data))
    .catch(error => console.error('error: ', error));
    
})