const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".fada");

searchInput.addEventListener("input", function () {

    const value = searchInput.value.toLowerCase();

    cards.forEach(function (card) {

        const text = card.textContent.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});
const modalName = document.getElementById("modalName");
const modalImage = document.getElementById("modalImage");
const modalType = document.getElementById("modalType");
const modalDescription = document.getElementById("modalDescription");
const modalPersonality = document.getElementById("modalPersonality");

const modalElement = document.getElementById("fairyModal");
const modal = new bootstrap.Modal(modalElement);

cards.forEach(function (card) {

    card.addEventListener("click", function () {

        const name = card.querySelector(".card-title").textContent;
        const image = card.querySelector("img").src;
        const type = card.querySelector(".fairy-type").textContent;
        const description = card.querySelector(".card-text").textContent;

        const paragraphs = card.querySelectorAll("p");
        const personality = paragraphs[1].textContent;

        modalName.textContent = name;
        modalImage.src = image;
        modalType.textContent = type;
        modalDescription.textContent = description;
        modalPersonality.textContent = personality;

        modal.show();

    });

});
function createDust() {
    const dust = document.createElement("div");
    dust.classList.add("magic-dust");
    dust.style.left = Math.random() * 100 + "vw";
    dust.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(dust);
    setTimeout(() => {
        dust.remove();
    }, 11000);
}
setInterval(createDust, 200);