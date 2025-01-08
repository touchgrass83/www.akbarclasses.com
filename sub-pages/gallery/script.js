document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('image').style.transform = "rotate(0deg)";
    const tags = document.querySelectorAll('.tags');

    tags.forEach(enhanceSize);
}, false);

function enhanceSize(object) {
    object.style.fontSize = "4rem";
}

lightbox.option({
    'disableScrolling': true,
    'positionFromTop': "100vw"
});