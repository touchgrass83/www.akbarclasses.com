document.addEventListener('DOMContentLoaded', async function() {
    document.getElementById("introduction").style.transform = "scale(1)";

    introductionAnimation();
}, false);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function introductionAnimation(reset = false) {
    // let para = "Welcome to Akbar Classes, your trusted partner in academic excellence! Established in 2015, Akbar Classes has been a beacon of quality education in Kishanganj, Bihar, located on Insaan School Road, 855107. We specialize in nurturing students from classes 6th to 12th, offering a unique blend of NCERT curriculum and Pearson IIT/NEET Foundation materials to provide an exceptional learning experience. Our passionate and highly skilled teachers are dedicated to inspiring students, fostering curiosity, and guiding them to achieve their full potential. In addition to regular academics, we prepare our students for prestigious Olympiads such as NSO, IMO, NSTSE, UIMO, iOS, and iOM, as well as competitive exams like IOQM, NSEJS, NSEP, and more. We also equip students with the knowledge and strategies required to excel in JEE and NEET, paving the way for their success in these rigorous entrance exams. Expanding our reach, our YouTube channel delves into advanced topics, offering valuable insights and engaging content for learners across the globe. Soon, we will also be launching online courses here on our website, making quality education accessible to students everywhere. Join Akbar Classes and become part of a legacy of success, growth, and academic brilliance!";
    // let result = "";

    // if (reset) {
    //     document.getElementById("introduction-paragraph-1").style.transform = "scale(0)";
    //     await sleep(500);
    //     document.getElementById("introduction-paragraph-1").innerHTML = "";
    //     document.getElementById("introduction-paragraph-1").style.transform = "scale(1)";
    //     await sleep(500);
    // }
    
    // for (let i = 0; i < para.length; i++) {
    //     result += para[i];
    //     document.getElementById("introduction-paragraph-1").innerHTML = result + "_";
    //     await sleep(8);
    //     if (i == para.length - 1) {
    //         document.getElementById("introduction-paragraph-1").innerHTML = result;
    //         await sleep(2500);
    //         introductionAnimation(true);
    //     }
    // }
}

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