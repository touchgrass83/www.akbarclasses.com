document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("introduction").style.transform = "scale(1)";
}, false);

function animate_1() {
    document.getElementById("box-1").style.transform = "translateX(9vmax) translateY(4vmax)";
    document.getElementById("box-2").style.transform = "translateX(9vmax) translateY(4vmax)";
    document.getElementById("box-3").style.transform = "translateX(9vmax) translateY(4vmax)";
    document.getElementById("box-4").style.transform = "translateX(9vmax) translateY(4vmax)";
}
function animate_2() {
    document.getElementById("box-1").style.transform = "translateX(18vmax) translateY(-4vmax)";
    document.getElementById("box-2").style.transform = "translateX(18vmax) translateY(-4vmax)";
    document.getElementById("box-3").style.transform = "translateX(18vmax) translateY(-4vmax)";
    document.getElementById("box-4").style.transform = "translateX(18vmax) translateY(-4vmax)";
}
function animate_3() {
    document.getElementById("box-1").style.transform = "translateX(0) translateY(0)";
    document.getElementById("box-2").style.transform = "translateX(0) translateY(0)";
    document.getElementById("box-3").style.transform = "translateX(0) translateY(0)";
    document.getElementById("box-4").style.transform = "translateX(0) translateY(0)";
}

function animate_4() {
    if (window.innerWidth > 480) {
        document.getElementById("box-1").style.left = "477px";
        document.getElementById("box-1").style.top = "-3px";
        document.getElementById("box-2").style.left= "14px";
        document.getElementById("box-2").style.top= "-3px";
        document.getElementById("box-3").style.left = "9px";
        document.getElementById("box-3").style.top = "144px";
        document.getElementById("box-4").style.left = "460px";
        document.getElementById("box-4").style.top = "144px";

        document.getElementById("logo-box").style.borderRadius = "12px";
        document.getElementById("shadow").style.borderRadius = "12px";
    }else{
        document.getElementById("box-1").style.left = "238px";
        document.getElementById("box-1").style.top = "-2px";
        document.getElementById("box-2").style.left= "9px";
        document.getElementById("box-2").style.top= "-2px";
        document.getElementById("box-3").style.left = "5.5px";
        document.getElementById("box-3").style.top = "66px";
        document.getElementById("box-4").style.left = "227px";
        document.getElementById("box-4").style.top = "66px";

        document.getElementById("logo-box").style.borderRadius = "8px";
        document.getElementById("shadow").style.borderRadius = "8px";
    }

    document.getElementById("logo-box").style.transform = "scale(1)";
    document.getElementById("shadow").style.transform = "scaleX(1)";

    
}

function animate_5() {
    if (window.innerWidth > 480) {
        document.getElementById("shadow").style.left = "34px";
        document.getElementById("shadow").style.top = "16px";
    }else{
        document.getElementById("shadow").style.left = "25px";
        document.getElementById("shadow").style.top = "11px";
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