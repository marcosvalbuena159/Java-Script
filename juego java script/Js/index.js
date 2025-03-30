// Función para registrar al usuario
function Registro() {
    let nombre = document.getElementById('nombre').value;
    let region = document.getElementById('region').value;
    let usuario = document.getElementById('usuario').value;
    let correo = document.getElementById('correo').value;
    let clave = document.getElementById('clave').value;
    if (nombre && region && usuario && correo && clave) {
        let usuarioRegistrado = {
            nombre: nombre,
            region: region,
            usuario: usuario,
            correo: correo,
            clave: clave
        };
        localStorage.setItem('usuario', JSON.stringify(usuarioRegistrado));

        alert("Usuario registrado exitosamente");
        document.getElementById('registroForm').reset();
    } else {
        alert("Complete todos los campos");
    }
}
function Loguear() {
    let correoIngresado = document.getElementById("correo").value;
    let claveIngresada = document.getElementById("clave").value;
    if (correoIngresado && claveIngresada) {
        let usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
        if (usuarioGuardado) {
            if (correoIngresado === usuarioGuardado.correo && claveIngresada === usuarioGuardado.clave) {
                alert("Inicio de sesión exitoso");
            } else {
                alert("Correo o contraseña incorrectos");
            }
        } else {
            alert("No hay usuarios registrados");
        }
    } else {
        alert("Por favor ingrese correo y contraseña");
    }
}
