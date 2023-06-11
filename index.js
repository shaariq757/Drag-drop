const conTwo = document.getElementById('contTwo');
function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    conTwo.style = "border:2px solid green";
}

function drag(event){
    event.dataTransfer.setData("text",event.target.id);
    document.getElementById(event.target.id).classList.add('drag');
}

function doDrop(event){
    event.preventDefault();
}

