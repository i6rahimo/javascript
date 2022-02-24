const togglePassword = document.querySelector("#togglePassword")
const password = document.querySelector('#password')


console.log(this);

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    console.log(this);
    this.classList.toggle("bi-eye")
})

const form = document.querySelector("form")

form.addEventListener('submit', function (e) {
    e.preventDefault()
})
