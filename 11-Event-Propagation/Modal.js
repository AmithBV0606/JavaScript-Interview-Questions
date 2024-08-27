// Question 8 : Create a Modal which closes by clicking on negative space

const container = document.querySelector(".modalContainer");
const button = document.querySelector(".modalButton");

button.addEventListener("click", () => {
    toggleModal(true);
});

function toggleModal(toggle) {
    container.style.display = toggle ? "flex" : "none";
}

container.addEventListener("click", (e) => {
    if (e.target.className === "modalContainer") {
        toggleModal(false);
    } 
});