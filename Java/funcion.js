function aceptar() {
    alert("¡Sabía que dirías que sí! ❤️");
}

function moverBoton() {
    const noButton = document.getElementById("no");
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
