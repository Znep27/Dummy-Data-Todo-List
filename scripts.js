    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
    let selectedId = null
    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    let todoList = document.getElementById("todo-list")
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        clearTodos()
        for (let i = 0; i < arrayOfTodos.length; i++) {
            let newListItem = document.createElement('LI')
            newListItem.innerText = arrayOfTodos[i].title
            todoList.appendChild(newListItem)
          }
    }
    const clearTodos = () => {
        let orderedList = document.getElementById('todo-list')
        orderedList.innerHTML = ""
    }
    const saveId = (num) => {
        selectedId = parseInt(num)
    }
    const filterTodosById = () => {
        clearTodos()
        const filtered = arrayOfTodos.filter((list) => list.userId == selectedId);
        console.log(filtered)
        for (i = 0; i < filtered.length; i++) {
            newListItem = document.createElement('LI')
            if (filtered[i].completed == true) {
                newListItem.innerHTML = `${filtered[i].title} <input type="checkbox" checked>`;
            } else {
                newListItem.innerHTML = `${filtered[i].title} <input type="checkbox">`;
            }
            todoList.appendChild(newListItem)
          }
    }