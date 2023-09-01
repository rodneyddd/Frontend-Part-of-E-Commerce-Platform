const selectedFlavors = [];

function toggleFlavor(flavor) {
    const index = selectedFlavors.indexOf(flavor);
    if (index === -1) {
        if (selectedFlavors.length < 2) {
            selectedFlavors.push(flavor);
        } else {
            // Show a message saying the user can't select more than two flavors
            alert("You can only select up to two flavors.");
        }
    } else {
        selectedFlavors.splice(index, 1);
    }

    updateSelectedFlavors();
}

function updateSelectedFlavors() {
    const flavorList = document.getElementById("flavor-list");
    flavorList.innerHTML = "";
    selectedFlavors.forEach(flavor => {
        const listItem = document.createElement("li");
        listItem.textContent = flavor;
        flavorList.appendChild(listItem);
    });
}

function confirmSelection() {
    if (selectedFlavors.length === 0) {
        alert("You need to select at least one flavor.");
    } else if (selectedFlavors.length === 1) {
        if (confirm("Are you sure you only want one flavor?")) {
            // Redirect to a link for one flavor selection
            window.location.href = "link-for-one-flavor.html";
        }
    } else if (selectedFlavors.length === 2) {
        if (confirm("Are you sure you want these two flavors?")) {
            // Redirect to a link for two flavor selection
            window.location.href = "cakelayer.html";
        }
    }
}

window.addEventListener("scroll", function() {
    const selectedFlavorsBox = document.getElementById("selected-flavors");
    const slideTop = document.querySelector(".parallax-2").offsetTop;
    const scrollTop = window.scrollY;
    const maxTop = slideTop + document.querySelector(".parallax-2").clientHeight - selectedFlavorsBox.clientHeight;

    if (scrollTop >= slideTop && scrollTop <= maxTop) {
        selectedFlavorsBox.style.top = (scrollTop - slideTop) + "px";
    }
});
