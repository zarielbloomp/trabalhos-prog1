document.addEventListener("DOMContentLoaded", function () {
  const tabs = ["quimica", "fisica", "matematica", "matrizes"];

  tabs.forEach((tab) => {
    document.getElementById(`tab-${tab}`).addEventListener("click", () => {
      showTab(tab);
    });
  });
});

function showTab(tab) {
  const tabs = ["quimica", "fisica", "matematica", "matrizes"];

  tabs.forEach((t) => {
    document.getElementById(`${t}-formulas`).style.display =
      t === tab ? "block" : "none";
    document.getElementById(`tab-${t}`).classList.toggle("active", t === tab);
  });
}
