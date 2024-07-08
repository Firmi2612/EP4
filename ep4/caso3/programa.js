let frutas = ['Platano', 'Manzana', 'Arandano', 'Mandarina', 'Fresa', 'Granadilla'];

function verFrutas() {
    const frutasContainer = document.getElementById('contenedor-frutas');
    frutasContainer.innerHTML = '<p>' + frutas.join(', ') + '</p>';
}

function ordenarFrutas() {
    frutas.sort();
    verFrutas();
}

function invertirFrutas() {
    frutas.reverse();
    verFrutas();
}

function mostrarLongitud() {
    alert('Longitud del arreglo de frutas: ' + frutas.length);
}

function insertarFruta() {
    let nuevaFruta = prompt('Ingrese el nombre de la nueva fruta:');
    if (nuevaFruta) {
        frutas.push(nuevaFruta);
        verFrutas();
    }
}

function eliminarFruta() {
    let indice = prompt('Ingrese el índice de la fruta a eliminar (0 - ' + (frutas.length - 1) + '):');
    if (indice !== null) {
        indice = parseInt(indice);
        if (!isNaN(indice) && indice >= 0 && indice < frutas.length) {
            frutas.splice(indice, 1);
            verFrutas();
        } else {
            alert('Índice inválido.');
        }
    }
}
