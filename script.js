function menuHandler() {
    let open = document.getElementById("menu-button").checked;
    if (open) {
        document.getElementById("menu").style.transform = "scale(8)";
        document.getElementById("button-1").style.transform = "scale(1)";
        document.getElementById("button-2").style.transform = "scale(1)";
        document.getElementById("button-3").style.transform = "scale(1)";
        document.getElementById("button-4").style.transform = "scale(1)";
        document.getElementById("button-5").style.transform = "scale(1)";
    } else {
        document.getElementById("menu").style.transform = "scale(0.5)";
        document.getElementById("button-1").style.transform = "scale(0)";
        document.getElementById("button-2").style.transform = "scale(0)";
        document.getElementById("button-3").style.transform = "scale(0)";
        document.getElementById("button-4").style.transform = "scale(0)";
        document.getElementById("button-5").style.transform = "scale(0)";
    }
}

function menuClose(){
    document.getElementById("menu").style.transform = "translateY(-100%)";
    document.getElementById("menu-button").checked = false;
    menuOpen = false;
}