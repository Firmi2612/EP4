function generarNumeros() {
    var min = parseInt(prompt("Ingrese el número mínimo:"));
    var max = parseInt(prompt("Ingrese el número máximo:"));

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    var numeros = generarArrayNumerosAleatorios(min, max, 20);
    mostrarNumerosEnLista(numeros);
}

function generarArrayNumerosAleatorios(min, max, cantidad) {
    var numeros = [];
    for (var i = 0; i < cantidad; i++) {
        var numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(numero);
    }
    return numeros;
}

function mostrarNumerosEnLista(numeros) {
    var lista = document.getElementById("resultado");
    lista.innerHTML = "";

    numeros.forEach(function(numero, index) {
        var li = document.createElement("li");
        li.textContent = `${index + 1}- ${numero}`;
        lista.appendChild(li);
    });
}

