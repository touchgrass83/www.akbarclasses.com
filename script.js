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
    if (window.innerWidth > 480) {
        document.getElementById("box-1").style.left = "319px";
        document.getElementById("box-1").style.top = "-3px";
        document.getElementById("box-2").style.left= "9px";
        document.getElementById("box-2").style.top= "-3px";
        document.getElementById("box-3").style.left = "5px";
        document.getElementById("box-3").style.top = "96px";
        document.getElementById("box-4").style.left = "307px";
        document.getElementById("box-4").style.top = "96px";
    }else{
        document.getElementById("box-1").style.left = "238px";
        document.getElementById("box-1").style.top = "-2px";
        document.getElementById("box-2").style.left= "9px";
        document.getElementById("box-2").style.top= "-2px";
        document.getElementById("box-3").style.left = "5.5px";
        document.getElementById("box-3").style.top = "66px";
        document.getElementById("box-4").style.left = "227px";
        document.getElementById("box-4").style.top = "66px";
    }

    document.getElementById("logo-box").style.transform = "scale(1)";
    document.getElementById("shadow").style.transform = "scaleX(1)";
}

function animate_5() {
    if (window.innerWidth > 480) {
        document.getElementById("shadow").style.left = "42px";
        document.getElementById("shadow").style.top = "70px";
    }else{
        document.getElementById("shadow").style.left = "22px";
        document.getElementById("shadow").style.top = "10px";
    }
}

function animate_6() {
    document.getElementById("box-1").style.opacity = 0;
    document.getElementById("box-2").style.opacity = 0;
    document.getElementById("box-3").style.opacity = 0;
    document.getElementById("box-4").style.opacity = 0;
}

setTimeout(animate_1, 1000);
setTimeout(animate_2, 1750);
setTimeout(animate_3, 2500);
setTimeout(animate_4, 3250);
setTimeout(animate_5, 4000);
setTimeout(animate_6, 5500);