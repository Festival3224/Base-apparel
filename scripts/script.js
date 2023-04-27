const form = document.querySelector("form");
const email = document.getElementById("mail");
const myBtn = document.getElementById("send");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        myBtn.disabled = false
    }
});


myBtn.addEventListener("click", (event) => {
    form.reset();
}); 