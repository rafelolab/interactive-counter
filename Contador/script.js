let contador = 0;
let intervalId = 0;

const numero = document.getElementById("numero");
const diminuir = document.getElementById("diminuir");
const zerar = document.getElementById("zerar");
const aumentar = document.getElementById("aumentar");

function atualizarContador() {
    numero.textContent = contador;
}

// Aumentar
aumentar.addEventListener("mousedown", () => {
    intervalId = setInterval(() => {
    contador++;
    atualizarContador();
    }, 100);
});

// Diminuir
diminuir.addEventListener("mousedown", () => {
    intervalId = setInterval(() => {
    contador--;
    atualizarContador();
    }, 100);
});

// Zerar
zerar.addEventListener("click", () => {
    contador = 0;
    atualizarContador();
});

document.addEventListener('mouseup', () => clearInterval(intervalId));