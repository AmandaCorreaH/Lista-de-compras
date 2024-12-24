const inputItem = document.getElementById('input-item')
const btnItem = document.getElementById('new-item')
const listItem = document.getElementById('my-list')
const notificationEmpty = document.getElementById('emptyNotification')

btnItem.addEventListener('click', () => {
    let myValue = inputItem.value.trim();
    
    if (myValue == ""){
        notificationEmpty.classList.add('show-screen')
    } else{
        const li = document.createElement("li")
        li.textContent = inputItem.value
        listItem.append(li)
    }

    inputItem.value = ""
})

notificationEmpty.addEventListener('click', () => {
    notificationEmpty.classList.remove('show-screen')
})