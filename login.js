function loginFeito() {

    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if (email.toLowerCase() === "guilherme@org.com" && senha === "123") {
        alert("loguin realizado com sucesso")
    } else {
        alert(" erro")
    }
}