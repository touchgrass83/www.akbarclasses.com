// Function to toggle the menu open or closed
function menuToggle(operation = null) {
    const menu = document.getElementById("menu");
    const menuButton = document.getElementById("menu-button");

    // Default scale values for opening the menu
    let scaleMenu = "scale(8)";
    let scaleButton = "scale(1)";

    // If the menu button is not checked or the operation is to close the menu
    if (!menuButton.checked || operation == "close") {
        // Scale values for closing the menu
        scaleMenu = "scale(0.5)";
        scaleButton = "scale(0)";
        document.getElementById("menu-button").checked = false;
    }

    // Apply the scale transformations to the menu and buttons
    menu.style.transform = scaleMenu;
    document.querySelectorAll('[data-button]').forEach(button => {
        button.style.transform = scaleButton;
    });
}

let debounceTimeout;

// Event listener to handle clicks outside the menu to close it
document.addEventListener("click", function (ev) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        const target = ev.target;
        const menu = document.getElementById("menu");
        const hamburgmenu = document.getElementById("hamburg-menu");

        // If the click is outside the menu and the hamburger menu, close the menu
        if (!menu.contains(target) && !hamburgmenu.contains(target) && target.id !== "menu-button") {
            menuToggle("close");
        }
    }, 50);
});