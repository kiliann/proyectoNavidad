'use strict'
console.log("iniciando...");
function ocultarfrontal(){
    let div = document.getElementById('caja1');
    div.style.display = 'none';

    let main = document.getElementById('main');
    main.style.display = 'contents';
    let cabecera = document.getElementById('cabecera');
    cabecera.style.display = 'contents';
    let footer = document.querySelector("footer");
    footer.style.display = 'contents';
}
