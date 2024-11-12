function deleteNav() {
    const element = document.getElementById("nav");
    element.remove();
}

function deleteHam() {
    const element = document.getElementById("menu");
    element.remove();
}

function changeElement(Id, Content) {
    element = document.getElementById(Id)  ;
    element.innerHTML = Content;
}

function showmenu() {
    const element = document.getElementById("sidemenu");
    document.getElementById("menu").src = "C:/xampp/htdocs/EASWIKI/pictures/close.png" ;
    element.setAttribute(onclick) = "closemenu()"
}


if (screen.width <= 800) {
    deleteNav()
    changeElement("brand", "ZekaNet Labs")
} else {
    const nav = document.getElementById("navi");
    nav.remove()
    deleteHam()
}
