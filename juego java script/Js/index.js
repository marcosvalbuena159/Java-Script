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


class Entrenador {
    constructor(nombreEntrenador) {
        this.nombreEntrenador = nombreEntrenador;
        this.pokimons = [];
    }

    agregarPokimon(pokimon) {
        this.pokimons.push(pokimon);
    }
}

class Pokimon {
    constructor(nombrePokimon, tipoPokimon, habilidad, ataque, defensa, evolucion) {
        nombrePokimon = nombrePokimon;
        tipoPokimon = tipoPokimon;
        habilidad = habilidad;
        ataque = ataque;
        defensa = defensa;
        evolucion = evolucion;
    }

    atacar(oponente) {
        console.log(`${this.nombrePokimon} ataca a ${oponente.nombrePokimon} con ${this.ataque} de poder!`);
    }

    defender() {
        console.log(`${this.nombrePokimon} se defiende con ${this.defensa} de resistencia!`);
    }
}

class Batalla {
    static ataque(pokimon1, pokimon2) {
        console.log(`${pokimon1.nombrePokimon} ataca a ${pokimon2.nombrePokimon}!`);
        let daño = pokimon1.ataque - pokimon2.defensa;
        console.log(`El daño causado es de ${daño > 0 ? daño : 0}`);
    }

    static defensa(pokimon) {
        console.log(`${pokimon.nombrePokimon6} se prepara para defenderse!`);
    }
}

let pokimons = [
    new Pokimon("Pikachu", "Eléctrico", "Electricidad Estática", 55, 40, "Raichu"),
    new Pokimon("Charmander", "Fuego", "Mar de Llamas", 52, 43, "Charmeleon"),
    new Pokimon("Bulbasaur", "Planta/Veneno", "Espesura", 49, 49, "Ivysaur"),
    new Pokimon("Squirtle", "Agua", "Torrente", 48, 65, "Wartortle"),
    new Pokimon("Eevee", "Normal", "Adaptable", 55, 50, "Varias Evoluciones")
];


