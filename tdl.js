const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list_container");

function addtask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendchild(span);
        }
    inputbox.value = "";  
    saveData();
}

listcontainer.addEventListener("click" , function(e){
    if(e.target.tagname === "LI"){
        e.target.classlist.toggle("checked");
        saveData();
    }
    else if(e.target.tagname === "SPAN"){
        e.target.parentelement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data" , listcontainer.innerHTML);
}
function showTask(){
    listcontanier.innerHTML = localStorage.getItem("data");
}
showTask(); 