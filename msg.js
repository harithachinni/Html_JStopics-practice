todos = [
    { id: 1, task: 'learn react', isDone: false },
    { id: 2, task: 'learn aws', isDone: false },
    { id: 3, task: 'learn python', isDone: false },
    { id: 4, task: 'learn azure', isDone: false },
    { id: 5, task: 'learn java', isDone: true },
    { id: 6, task: 'learn devops', isDone: false },
    { id: 7, task: 'learn angular', isDone: true },
    { id: 8, task: 'exercise daily', isDone: false }
]


let selectedTodo = { id: 0, task: '', isDone: false }

function loadData() {
    let str = '<table>';
    str += todos.map(todo => {
        if (todo.isDone)
            return "<tr style='background-color:green;' ><td>" + todo.task + "</td><td><input type='checkbox' checked onchange='changeTodo(" + todo.id + ")'></td><td><button onclick='deleteTodo(" + todo.id + ")'>delete</button></td><td> <button onclick='displayTodo(" + todo.id + ")'>display</button  </td></tr>";
        else
            return "<tr><td>" + todo.task + "</td><td><input type='checkbox' onchange='changeTodo(" + todo.id + ")'></td><td><button onclick='deleteTodo(" + todo.id + ")'>delete</button</td> <td><button onclick='displayTodo(" + todo.id + ")'>display</button</td></tr>";
    })
        .reduce((x, y) => x + y, "");
    str += '</table>';

    document.getElementById("p1").innerHTML = str;
}

// function addTodo() {
//     let task = document.getElementById("t1").value;
//     todos = [...todos, { id: Math.floor(Math.random() * 10000), task: task, isDone: false }];
//     loadData();
// }
function addOrUpdateTodo() {
    console.log(todos, todos.task, todos.includes(todos.task, -100))
    const Titem = todos.find((item) => {
        console.log(item, item.task);
        // item.task == item.task
        item.values(item.task)
    })
    console.log(Titem)
    if (todos.includes(todos.task, -100)) {
        console.log("included task" + task);
        return function () {

            let task = document.getElementById("t1").value;
            todos = [...todos, { id: Math.floor(Math.random() * 10000), task: task, isDone: false }];
            loadData();
        }
    } else {
        return function () {
            todos = todos.map(todo => {
                console.log(selectedTodo, selectedTodo.id)
                if (todo.id == selectedTodo.id) {
                    return { ...todo, task: document.getElementById("p2").value };
                }
                else
                    return todo;
            })
            loadData();
        }
    }
}
function deleteTodo(todoId) {
    todos = todos.filter(todo => todo.id != todoId)
    loadData()
}
function displayTodo(tid) {
    selectedTodo = todos.filter(todo => todo.id === tid)[0];
    document.getElementById("p2").value = selectedTodo.task
    loadData()
}
// function updateTodo() {
//     console.log("aaa")

//     todos = todos.map(todo => {
//         console.log(selectedTodo, selectedTodo.id)
//         if (todo.id == selectedTodo.id) {
//             return { ...todo, task: document.getElementById("p2").value };
//         }
//         else
//             return todo;
//     })
//     loadData();
// }
function changeTodo(tid) {
    todos = todos.map(todo => {
        console.log(selectedTodo, selectedTodo.id)
        if (todo.id == tid) {
            return { ...todo, isDone: !todo.isDone };
        }
        else
            return todo;
    })
    loadData();
}
