// Function to open the side navigation
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

// Function to close the side navigation
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

// Attach event listener to the menu button
document.querySelector(".menu").addEventListener("click", openNav);
