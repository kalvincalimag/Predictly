function toggleModal() {
    var modal = document.getElementById("infoModal");
    modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
}

window.onclick = function(event) {
    var modal = document.getElementById("infoModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
