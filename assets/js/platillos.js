const btnTodos = document.querySelector('.todos');
const btnDestacados = document.querySelector('.destacados');
const btnFuentes = document.querySelector('.fuentes');
const btnCombos = document.querySelector('.combos');
const btnFrituras = document.querySelector('.frituras');
const btnSopas = document.querySelector('.sopas');
const btnBebidas = document.querySelector('.bebidas');
const btnOtros = document.querySelector('.otros');
const contenedor = document.querySelector('.platillos');

document.addEventListener("DOMContentLoaded", () => {
    platillos();
});


// Filtrado de platillos
const platillos = () => {
    let arrayplatillos = [];
    const platillos = document.querySelectorAll(".platillo");
    
    platillos.forEach(platillo => arrayplatillos = [...arrayplatillos,platillo]);

    const destacados = arrayplatillos.filter(destacado => destacado.getAttribute('data-platillo')==='destacados');
    const fuentes = arrayplatillos.filter(fuente => fuente.getAttribute('data-platillo')==='fuentes');
    const combos = arrayplatillos.filter(combo => combo.getAttribute('data-platillo')==='combos');
    const frituras = arrayplatillos.filter(fritura => fritura.getAttribute('data-platillo')==='frituras');
    const sopas = arrayplatillos.filter(sopa => sopa.getAttribute('data-platillo')==='sopas');
    const bebidas = arrayplatillos.filter(bebida => bebida.getAttribute('data-platillo')==='bebidas');
    const otros = arrayplatillos.filter(otro => otro.getAttribute('data-platillo')==='otros');

    mostrarPlatillos(destacados,fuentes,combos,frituras,sopas,bebidas,otros,arrayplatillos);
};

const mostrarPlatillos = (destacados,fuentes,combos,frituras,sopas,bebidas,otros,arrayplatillos) =>{
    btnDestacados.addEventListener('click', ()=>{
        limpiarHtml(contenedor);
        destacados.forEach(destacado=>contenedor.appendChild(destacado));
        activarBoton(btnDestacados);
    });
    btnFuentes.addEventListener('click', ()=>{
        limpiarHtml(contenedor);
        fuentes.forEach(fuente=>contenedor.appendChild(fuente));
        activarBoton(btnFuentes);
    });
    btnCombos.addEventListener('click', ()=>{
        limpiarHtml(contenedor);
        combos.forEach(combo=>contenedor.appendChild(combo));
        activarBoton(btnCombos);
    });
    btnFrituras.addEventListener('click', ()=>{
        limpiarHtml(contenedor);
        frituras.forEach(fritura=>contenedor.appendChild(fritura));
        activarBoton(btnFrituras);
    });
    btnSopas.addEventListener('click', ()=>{
        limpiarHtml(contenedor);
        sopas.forEach(sopa=>contenedor.appendChild(sopa));
        activarBoton(btnSopas);
    });
    btnBebidas.addEventListener('click', ()=>{
        limpiarHtml(contenedor);
        bebidas.forEach(bebida=>contenedor.appendChild(bebida));
        activarBoton(btnBebidas);
    });
    btnOtros.addEventListener('click', ()=>{
        limpiarHtml(contenedor);
        otros.forEach(otro=>contenedor.appendChild(otro));
        activarBoton(btnOtros);
    });
    btnTodos.addEventListener('click', ()=>{
        limpiarHtml(contenedor);
        arrayplatillos.forEach(platillo=>contenedor.appendChild(platillo));
        activarBoton(btnTodos);
    });
};

const botonesCategorias = document.querySelectorAll('.btn');

const activarBoton = (boton) => {
    botonesCategorias.forEach(btn => btn.classList.remove('activo'));
    boton.classList.add('activo');
};

const limpiarHtml = (container) =>{
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
