document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que el formulario se envíe por defecto

    // Obtener los valores de usuario y contraseña
    var username = document.getElementById("victor").value;
    var password = document.getElementById("123456").value;

    // Verificar las credenciales (esto es solo un ejemplo, debes validar en el servidor)
    if (username === "victor" && password === "123456") {
        // Credenciales válidas, redirigir al usuario a la página de bienvenida
        window.location.href = "bienvenida.html";
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
});