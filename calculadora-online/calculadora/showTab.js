function showTab(tab) {
  const tabs = ["quimica", "fisica", "matematica", "matrizes"];

  tabs.forEach((t) => {
    document.getElementById(`${t}-formulas`).style.display =
      t === tab ? "block" : "none";
    document.getElementById(`tab-${t}`).classList.toggle("active", t === tab);
  });
}
