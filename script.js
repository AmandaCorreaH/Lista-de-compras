// componente input
const inputItem = document.getElementById('input-item')

// botão para adicionar os itens a lists
const btnItem = document.getElementById('new-item')

// lista
const listItem = document.getElementById('my-list')

// notificação de 'O item foi removido da lista'
const itemRemoved = document.getElementById('itemRemoved')
const removeItem = document.getElementById("removeItem")

// notificação de obrigando o usuario a adicionar um item a lista
const addItem = document.getElementById('addItem')
const removeAdditem = document.getElementById('removeAdditem')


btnItem.addEventListener('click', addList)

function addList (){
    try{
    let myValue = inputItem.value.trim();
    
    if (myValue == ""){
        addItem.classList.add('show-screen')
    } else{
        addItem.classList.remove('show-screen')

        const li = document.createElement("li")

        const span = document.createElement("span");
        span.textContent = myValue

        // cria input do tipo checkbox
        const input = document.createElement("input")
        input.setAttribute("type", "checkbox");
        

        // Cria um botão
        const button = document.createElement("button")
        button.classList.add("removeBtn")

        // cria o icone de exclusão do item
        const image = document.createElement("img")
        image.setAttribute("src", "assets/icon/trash.svg")

        button.appendChild(image)

        // adiciona todas as informações ao LI
        li.append(input, span, button )
        // adiciona o li a lista
        listItem.append(li)

        button.addEventListener("click", () => {
            li.remove()
            itemRemoved.classList.add('show-screen')
        })

        removeItem.addEventListener('click', () => {
     itemRemoved.classList.remove('show-screen');
     });

    }

    inputItem.value = ""
    }catch(error){
        console.log("algo deu errado!", error)
    }
}

removeAdditem.addEventListener('click', () => {
    addItem.classList.remove('show-screen')
})