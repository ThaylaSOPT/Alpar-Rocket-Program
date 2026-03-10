const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".fada");

searchInput.addEventListener("input", function () {
    const value = searchInput.value.toLowerCase();
    cards.forEach(function (card) {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(value) ? "" : "none";
    });
});
cards.forEach(function (card) {
    card.addEventListener("click", function () {

        const name = card.querySelector(".card-title").textContent;
        const image = card.querySelector(".fairy-img").src;
        const type = card.querySelector(".fairy-type").textContent;

        const paragraphs = card.querySelector(".card-body").querySelectorAll("p");
        const description = paragraphs[0].textContent;
        const personality = paragraphs[1].textContent;
        document.getElementById("modalName").textContent = name;
        document.getElementById("modalImage").src = image;
        document.getElementById("modalType").textContent = type;
        document.getElementById("modalDescription").textContent = description;
        document.getElementById("modalPersonality").textContent = personality;
        const modalElement = document.getElementById("fairyModal");
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
        modalInstance.show();
    });
});
function createDust() {
    const dust = document.createElement("div");
    dust.classList.add("magic-dust");
    dust.style.left = Math.random() * 100 + "vw";
    const duration = 3 + Math.random() * 3;
    dust.style.animationDuration = duration + "s";
    document.body.appendChild(dust);
    setTimeout(() => { dust.remove(); }, duration * 1000);
}
setInterval(createDust, 300);