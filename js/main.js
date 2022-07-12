document.getElementById("hideMenu").addEventListener("click", hideMenu);
document.getElementById("showMenu").addEventListener("click", showMenu);

function showMenu(){
    document.getElementById('menu').style.display = 'block';
}

function hideMenu(){
    document.getElementById('menu').style.display = 'none';
}