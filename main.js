const icons = document.querySelectorAll(".plus");
const texts = document.querySelectorAll(".answer"); 

icons.forEach((icon, index) => {
    icon.addEventListener("click", () => { 
        const content = texts[index]; 

        icon.classList.toggle("active");

        if (icon.classList.contains("active")) {
            content.classList.add("visible"); 
        } else {
            content.classList.remove("visible"); 
        }
    });
});
