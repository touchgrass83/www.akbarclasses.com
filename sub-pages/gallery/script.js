document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('image').style.transform = "rotate(0deg)";
    const tags = document.querySelectorAll('.tags');

    tags.forEach(enhanceSize);
}, false);

function enhanceSize(object) {
    object.style.fontSize = "4rem";
}

function handleEnlarge(index) {
    document.getElementById('img-' + index).style.position = "absolute";
    document.getElementById('img-' + index).style.left = "50%";
    document.getElementById('img-' + index).style.top = "50%";
}