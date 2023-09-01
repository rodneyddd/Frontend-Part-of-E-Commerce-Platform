document.addEventListener("DOMContentLoaded", () => {  //only do this the page is fully loaded
    // Get the button element
    const comeenjoy = document.getElementById("comeenjoy"); //creating a variable related to the id comeenjoy

    // Get the target element (the second parallax)
    const targetElement = document.querySelector(".parallax-2"); //creating a variable related to the slide parallax-2

    // Add a click event listener to the button
    comeenjoy.addEventListener("click", () => { //only do this when the variable related to comeenjoy is clicked 
        // Calculate the position of the target element relative to the top of the page
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + 140;

        // Scroll to the target position smoothly
        window.scrollTo({ 
            top: targetPosition,
            behavior: "smooth"
        });
    });
});
