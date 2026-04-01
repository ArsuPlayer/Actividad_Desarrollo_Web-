
// Módulo de Tesorería: Pago de Permisos
function calcularDescuento(monto) {
    if (monto > 70000) {
        return monto * 0.15;
    } else {
        return monto * 0.05;
    }
}

function pagarPermiso() {
    const input = document.getElementById("inputMonto");
    const resultado = document.getElementById("resultadoPermiso");
    const container = document.getElementById("containerPermiso");
    let monto = Number(input.value);
    let descuento = calcularDescuento(monto);
    let totalAPagar = monto - descuento;
    resultado.textContent = `Total a pagar: $${totalAPagar}`;
    input.value = "";
    container.classList.remove("d-none");
}

// Módulo de Salud: Fila de Vacunación
let filaVacunacion = [];
function actualizarLista() {
    const lista = document.getElementById("listaVacunacion");
    const container = document.getElementById("containerVacunacion");

    lista.innerHTML = "";
    for (let i = 0; i < filaVacunacion.length; i++) {
        lista.innerHTML += `<li>${filaVacunacion[i]}</li>`;
    }
    container.classList.remove("d-none");
}

function agregarNormal() {
    const input = document.getElementById("inputNombre");
    let nombre = input.value;

    if (nombre !== "") {
        filaVacunacion.push(nombre);
        input.value = "";
        actualizarLista();
    } else {
        alert("El nombre no puede estar vacío.");
    }
}

function agregarUrgencia() {
    const input = document.getElementById("inputNombre");
    let nombre = input.value;

    if (nombre !== "") {
        filaVacunacion.unshift(nombre);
        input.value = "";
        actualizarLista();
    } else {
        alert("El nombre no puede estar vacío.");
    }
}


// Módulo de Subsidios: Buscador de Beneficiarios
let beneficiarios = ["Sebastián Bustamante", "Martín Rojas", "Linda Muñoz", "Matías Rios", "Camilo Díaz", "Yulieth Gonzáles"];
function buscarBeneficiario(dato) {
    for (let i = 0; i < beneficiarios.length; i++) {
        if (dato.toLowerCase() === beneficiarios[i].toLowerCase()) {
            return "Beneficiario Verificado";
        }
    }
    return "No registrado";
}

function verificarBeneficiario() {
    const input = document.getElementById("inputBeneficiario");
    const resultado = document.getElementById("resultadoBeneficiario");
    const container = document.getElementById("containerBeneficiario");
    let dato = input.value;
    let mensaje = buscarBeneficiario(dato);
    resultado.textContent = mensaje;
    input.value = "";
    container.classList.remove("d-none");
} 