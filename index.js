precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

// Seleccionar elementos del DOM
let setCantidad = document.querySelector(".cantidad");
let setBotonSuma = document.getElementById("sumar");
let setBotonRest = document.getElementById("rests");
let precioInicial = document.querySelector(".precio-inicial").innerText;
let valorTotal = document.querySelector(".valor-total");

// Inicializar la cantidad
let cantidad = 0;

// Evento para sumar la cantidad
setBotonSuma.addEventListener("click", () => {
    cantidad++;
    setCantidad.innerText = cantidad;
    calcularTotal();
});

// Evento para restar la cantidad
setBotonRest.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        setCantidad.innerText = cantidad;
        calcularTotal();
    }
});

// Función para calcular el total a pagar
function calcularTotal() {
    let total = cantidad * parseFloat(precioInicial);
    valorTotal.innerText = total.toFixed(2);
}
