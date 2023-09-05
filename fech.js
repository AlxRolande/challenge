
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;

    const formData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    
    .then(response => response.json())
    .then(data => {
      
        console.log("Respuesta del servidor:", data);
        alert("El formulario se ha enviado con éxito.");
      
    })
    .catch(error => {
        
        console.error("Error al enviar el formulario:", error);
        alert("Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
    });
});