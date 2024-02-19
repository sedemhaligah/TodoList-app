const inputBox = document.getElementById("search-box");
const listContainer = document.getElementById("task-container");
function addTask(){
    if(inputBox.value === ''){
        alert(`write something!`);
    } 
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement(`span`);
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

inputBox.value = "";
saveData();
}

listContainer.addEventListener("click", function(a){
    if(a.target.tagName === "LI"){
        a.target.classList.toggle("checked");
        saveData();
    }
    else if(a.target.tagName === "SPAN"){
        a.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();