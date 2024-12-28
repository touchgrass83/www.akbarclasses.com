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

function animate_1() {
    document.getElementById("box-1").style.transform = "translateX(1850%) translateY(800%)";
    document.getElementById("box-2").style.transform = "translateX(1850%) translateY(800%)";
    document.getElementById("box-3").style.transform = "translateX(1850%) translateY(800%)";
    document.getElementById("box-4").style.transform = "translateX(1850%) translateY(800%)";
}
function animate_2() {
    document.getElementById("box-1").style.transform = "translateX(7400%) translateY(-800%)";
    document.getElementById("box-2").style.transform = "translateX(7400%) translateY(-800%)";
    document.getElementById("box-3").style.transform = "translateX(7400%) translateY(-800%)";
    document.getElementById("box-4").style.transform = "translateX(7400%) translateY(-800%)";
}
function animate_3() {
    document.getElementById("box-1").style.transform = "translateX(0) translateY(0)";
    document.getElementById("box-2").style.transform = "translateX(0) translateY(0)";
    document.getElementById("box-3").style.transform = "translateX(0) translateY(0)";
    document.getElementById("box-4").style.transform = "translateX(0) translateY(0)";
}

function animate_4() {
    document.getElementById("box-1").style.transform = "translateX(12.35vmax) translateY(2.35vmax)";
    document.getElementById("box-2").style.transform = "translateX(12.8vmax) translateY(-3vmax)";
    document.getElementById("box-3").style.transform = "translateX(-13vmax) translateY(2.75vmax)";
    document.getElementById("box-4").style.transform = "translateX(-12.6vmax) translateY(-2.65vmax)";

    document.getElementById("logo-box").style.transform = "scale(1)";
    document.getElementById("shadow").style.transform = "scaleX(1)";
}

function animate_5() {
    document.getElementById("shadow").style.transform = "translateX(0.5vmax) translateY(0.6vmax)";
}

setTimeout(animate_1, 1000);
setTimeout(animate_2, 1750);
setTimeout(animate_3, 2500);
setTimeout(animate_4, 3250);
setTimeout(animate_5, 4000);
