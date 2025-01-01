function menuToggle(operation = null) {
    const menu = document.getElementById("menu");
    const menuButton = document.getElementById("menu-button");

    let scaleMenu = "scale(8)";
    let scaleButton = "scale(1)";

    if (!menuButton.checked || operation == "close") {
        scaleMenu = "scale(0.5)";
        scaleButton = "scale(0)";
        document.getElementById("menu-button").checked = false;
    }

    menu.style.transform = scaleMenu;
    document.querySelectorAll('[data-button]').forEach(button => {
        button.style.transform = scaleButton;
    });
}

let debounceTimeout;

document.addEventListener("click", function (ev) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        const target = ev.target;
        const menu = document.getElementById("menu");
        const hamburgmenu = document.getElementById("hamburg-menu");

        if (!menu.contains(target) && !hamburgmenu.contains(target) && target.id !== "menu-button") {
            menuToggle("close");
        }
    }, 50);
});