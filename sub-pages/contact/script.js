let t = 5;
let underscore = false;
setInterval(flickerUnderscore, 500);

document.addEventListener('DOMContentLoaded', function() {
    animateFormTitle();
});

function flickerUnderscore() {
    if(t <= 5) {
        if(!underscore) {
            document.getElementById('title-underscore').style.opacity = 1;
            underscore = true;
        }else{
            document.getElementById('title-underscore').style.opacity = 0;
            underscore = false;
        }
        t++;
    }
}

function animateFormTitle(str = 1, method = 1) {
    let str_1 = "Feedback Form";
    let str_2 = "AKBAR CLASSES";

    switch (str) {
        case 1:
            if (method == 0) {
                for (let i = 1; i < str_1.length; i++) {
                    setTimeout(() => {
                        document.getElementById('form-title').innerHTML = document.getElementById('form-title').innerHTML.slice(0, -1);
                        
                        if(i == str_1.length - 1) {
                            animateFormTitle(2, 1);
                        }
                    }, 100 * i);
                }
            }else{
                for (let i = 0; i < str_1.length; i++) {
                    setTimeout(() => {
                        if(i == 0)
                        {
                            document.getElementById('form-title').innerHTML = str_1[i];
                        }else{
                            document.getElementById('form-title').innerHTML += str_1[i];
                        }
                        
                        if(i == str_1.length - 1) {
                            underscore = true;
                            t = 0;
                            setTimeout(() => { animateFormTitle(1, 0) }, 3000);
                        }
                    }, 100 * i);
                }
            }
            break;
        case 2:
            if (method == 0) {
                for (let i = 1; i < str_2.length; i++) {
                    setTimeout(() => {
                        document.getElementById('form-title').innerHTML = document.getElementById('form-title').innerHTML.slice(0, -1);
                        
                        if(i == str_2.length - 1) {
                            animateFormTitle(1, 1);
                        }
                    }, 100 * i);
                }
            }else{
                for (let i = 0; i < str_2.length; i++) {
                    setTimeout(() => {
                        if(i == 0)
                            {
                                document.getElementById('form-title').innerHTML = str_2[i];
                            }else{
                                document.getElementById('form-title').innerHTML += str_2[i];
                            }
                        
                        if(i == str_2.length - 1) {
                            underscore = true;
                            t = 0;
                            setTimeout(() => { animateFormTitle(2, 0) }, 3000);
                        }
                    }, 100 * i);
                }
            }
            break;
    }
}
