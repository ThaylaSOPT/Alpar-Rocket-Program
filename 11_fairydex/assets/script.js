const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".fada");

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    cards.forEach(function (card) {

        const text = card.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});