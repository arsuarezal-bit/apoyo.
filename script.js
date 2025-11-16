function validarLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (email === "" || pass === "") {
        alert("Por favor completa todos los campos.");
        return false;
    }

    // Aquí podrías conectar a una BD más adelante.
    alert("Login exitoso. Bienvenido/a ❤️");

    // Redirige al inicio
    window.location.href = "index.html";
}
