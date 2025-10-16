// Dom elements
let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let start = document.getElementById('start');

// Configurando um menu
for (let i = 4; i <= 10; i += 2){ // De 4 até 10
    let n = i*i; // Recebe i²
    // Criar uma nova opção para o Select
    let op = document.createElement('option');

    // Definir tanto o valor quanto o seu conteúdo para o i²
    op.value = n;
    op.innerHTML = n;

    // Adiciona a nova opção para a página
    select.appendChild(op);
}

start.addEventListener('click', ()=>{
    menu.classList.add('hidden');
    board.node.classList.remove('hidden');
});

start.click();