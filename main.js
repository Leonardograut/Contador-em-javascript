let elemento = document.querySelector ("#contador");
let contador = 0;

setInterval(()=>elemento.innerHTML = contador++,1000);