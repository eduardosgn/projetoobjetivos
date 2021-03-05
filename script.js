const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// Função para gerar um novo espaço com texto na lista de a fazeres
const generateTemplate = todo => {

    //Template string montando o novo li que será adicionado para a lista de a fazeres.
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    //De fato a adição à lista de a fazeres, com .innerHTML, adicionando += a const html
    list.innerHTML += html;

};

//ao dar submit no form, é feito esta função:
addForm.addEventListener('submit', e => {

    //Previne o evento de submit de dar refresh na página.
    e.preventDefault();

    //const para adicionar um novo valor ou texto dentro da lista de a fazeres.
    const todo = addForm.add.value.trim(); //trim() tira qualquer espaço antes da palavra

    // Se a const todo não tiver nenhum caractere, não é feito nada na lista,
    // Porém se houver caracteres, é adicionado na lista, e o input é resetado.
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }

});

// Deletar to-dos
list.addEventListener('click', e => {
    
    //Se clicando dentro da const list tiver um elemento com a classe .delete
    //Então é deletado o parente do elemento, que no caso é o li 
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }

});

const filterTodos = term => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));  
};

//Key search event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();

    filterTodos(term);
});