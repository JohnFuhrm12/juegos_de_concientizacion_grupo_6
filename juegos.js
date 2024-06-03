// Este archivo tiene enlace solamente con juegos.html al momento

console.log('Hola mundo!') // Ver en console

// Boton de prueba - incrementar
const pruebaBtn = document.getElementById('pruebaBtn');
let cont = 0;

pruebaBtn.addEventListener('click', () => {
    pruebaBtn.innerHTML = cont + 1;
    cont += 1;
})