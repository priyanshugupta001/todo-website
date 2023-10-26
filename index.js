const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("please add something!");
    }
    else {
        // creating li tag
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //adding cross sign in span tag
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // cross sign
        li.appendChild(span);
    }
    inputBox.value = '';
    saveTask();
}

// adding click functionality on cross and list item
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask() {
    console.log(listContainer) ;
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
