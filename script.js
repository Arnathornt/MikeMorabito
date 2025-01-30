document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío tradicional

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    let mailtoLink = `mailto:contacto@educadorcanino.com?subject=Consulta de ${nombre}&body=Nombre: ${nombre}%0AEmail: ${email}%0A%0AMensaje:%0A${mensaje}`;
    
    window.location.href = mailtoLink;
});
