const icons = document.querySelectorAll(".plus");
const text = document.querySelectorAll(".answer");

icons.forEach(icon => {
    icon.addEventListener("click", event =>{ 
        icon.classList.toggle("active");

        if (icon.classList.contains("active")) {
            text.classList.add("visible"); // Show content
        } else {
            text.classList.remove("visible"); // Hide content
        }
    });
});
