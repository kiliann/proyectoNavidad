'use strict'
console.log("iniciando...");

window.onload =iteracion

class iteracion{


    constructor() {

    }


}

let field1 = document.getElementById('contenedorExterno1');
let field2 = document.getElementById('contenedorExterno2');
let field3 = document.getElementById('contenedorExterno3');
let fields = [field1, field2, field3];
field1.click();
let currentField = 0;

function changeField(i){
    currentField = i;
}

function change() {
    if(currentField>=fields.length+1) currentField = 1;
    fields[++currentField].click();
}



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
