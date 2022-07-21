

// Variaveis adicionada para evitar onclick no HTML

let empty = document.getElementById("empty");
empty.addEventListener("click", clearAll)

let bt = document.getElementById("button");
bt.addEventListener("click", add)

let task = document.getElementById("task")


// Aqui é verificado se tem algum valor no localStorage, se tiver 
// esse valor vai para a variável "a", caso não tenha
// essa variável vai receber um array vazio.
// A ideia é manipular um array com as tarefas
// o simbolo || significa o ou lógico, ou um ou outro.




let a = JSON.parse(localStorage.getItem("list")) || [];


function add() {

    // Essa função cria tarefas

    let task = document.getElementById("task").value;
    let list = document.getElementById("list").innerHTML;


    // Aqui é criado um objeto para cada tarefa  
    // tarefa atual:  

    let currentTask = { id: Math.random(), content: task };


    // Esse math.random é uma função que vai gerar um número aleatório 
    // entre 0 e 1, como é um número cheio de casas  
    // decimais, então é muito dificil que caia o mesmo numero
    // esse número vai ser único para cada tarefa, assim eu vou usar ele para 
    // verificação e para apagar posteriormente


    if (task.length == 0) {
        alert("Por Favor Digite alguma tarefa")
    } else {

        // aqui eu adiciono um botão com um onlclick passando o id atual da tarefa para essa função  
        

        list += `<li>${currentTask.content}<span id = "bt" onclick = removeTask(${currentTask.id})><i class="far fa-trash-alt"></i></span></li><hr>`
        document.getElementById("list").innerHTML = list;
        document.getElementById("task").value = null;
    }

    // .push() server para atribuir um valor para o array 
    // adiciono sempre a tarefa a esse aray  
    a.push(currentTask);

    //  Assim sempre passando o array atualizado para o localStorage  

    localStorage.setItem("list", JSON.stringify(a))

}
function removeTask(id) {

    // é criada uma nova lista para substituir a anterior;  
    // essa nova lista não vai ter a tarefa que foi clicado  

    let newList = [];


    // se o objeto do for atual, tem o id diferente do id que foi clicado    
    // então eu vou adicionar na nova lista    
    // deixando apenas o item clicado de fora dessa nova lista

    for (let i  = 0; i < a.length;i++){
        if(a[i].id != id){
            newList.push(a[i])

        }
    }

    // passa se a nova lista para o localStorage atualizar e remover a tarefa clicada
    localStorage.setItem("list", JSON.stringify(newList))

    // autaliza-se a página  
    location.reload();



    console.log("clicou")
}

// aqui como está fora da funções em geral, sempre que a página for carregada
// vai cair aqui :)
// ou seja ele vai verificar se tem algum item na lista, caso tenha
// irá povoar os dados na tela:

if (a.length > 0) {
    let list = document.getElementById("list")
    for (let i = 0; i < a.length; i++) {
        list.innerHTML += `<li>${a[i].content}<span id = "bt" onclick = removeTask(${a[i].id})><i class="far fa-trash-alt"></i></span></li><hr>`
    }
}



function clearAll() {

    // Essa função apaga todos dados da tela 

    localStorage.clear();
    document.getElementById("list").innerHTML = null;
    console.log("Sucessfull Deleted ;)");
}