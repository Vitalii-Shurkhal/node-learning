//alert("dziala")



const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {

    e.preventDefault()

    const input = document.getElementById("i-1").value;
    document.getElementById('p-1').innerHTML = input;

})