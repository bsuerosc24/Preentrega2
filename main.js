document.getElementById("agregarBoton").addEventListener("click", function() {
    agregarContacto();
});

document.getElementById("quitarBoton").addEventListener("click", function() {
    quitarContacto();
});

document.getElementById("buscarBoton").addEventListener("click", function() {
    buscarContacto();
});


class Contacto {
    constructor(nombre, apellido, telefono, direccion, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email
    }
}

let agenda = [];

function agregarContacto() {
    let nombre = prompt("Ingrese el nombre del contacto:");
    let apellido = prompt("Ingrese el apellido del contacto:");
    let telefono = prompt("Ingrese el teléfono del contacto:");
    let direccion = prompt("Ingrese la direccion del contacto:");
    let email = prompt("Ingrese el email del contacto:");

    let nuevoContacto = new Contacto(nombre,apellido, telefono, direccion, email);
    agenda.push(nuevoContacto);

    alert("Contacto agregado: " + nombre + " - " + apellido);
}

function quitarContacto() {
    let nombre = prompt("Ingrese el nombre del contacto a eliminar:");

    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].nombre === nombre) {
            agenda.splice(i, 1);
            alert("Contacto eliminado: " + nombre);
            return;
        }
    }

    alert("No se encuentra el contacto con ese nombre.");
}


function buscarContacto() {
    let nombre = prompt("Ingrese el nombre del contacto:");

    let contactoEncontrado = agenda.find(contacto => contacto.nombre === nombre);

    if (contactoEncontrado) {
        alert('Contacto encontrado: ' + nombre);
    } else {
        alert('No se encontró el contacto.');
    }
}