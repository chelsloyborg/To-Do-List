function showPrompt(time=1000) {
    setTimeout (function(){

        var input = prompt("What would you like to do?")
        if (input === null){return;}
        if (input === "new") {
            newTodo();
        }
        else if (input === "delete") {
            deleteTodo();
        }
        else {
            showPrompt();
        }
    },time)
        
}


function newTodo() {
    var newTodo = prompt("Enter New To Do Item");
    var listItem = document.createElement("li");
    var text = document.createTextNode(newTodo);
    listItem.appendChild(text);
    document.getElementById("todos").appendChild(listItem);
    showPrompt();
}

function deleteTodo() {
    var index = prompt("What # item would you like to delete?");
    var list = document.getElementById("todos");
    if (isNaN (index)) {
        alert ("Please enter a number.")
    }
    else if (index < 1 || index > list.childNodes.length) {
        alert ("Item does not exist. Please try again.")
    }
    else {
        list.removeChild(list.childNodes[index-1]);
    }

    showPrompt();
    
}

showPrompt()
