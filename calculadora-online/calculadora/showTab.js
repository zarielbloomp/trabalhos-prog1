function showTab(tab) {
  const quimicaTab = document.getElementById("quimica-formulas");
  const fisicaTab = document.getElementById("fisica-formulas");
  const matematicaTab = document.getElementById("matematica-formulas");
  const matrizesTab = document.getElementById("matrizes-formulas");

  const quimicaButton = document.getElementById("tab-quimica");
  const fisicaButton = document.getElementById("tab-fisica");
  const matematicaButton = document.getElementById("tab-matematica");
  const matrizesButton = document.getElementById("tab-matrizes");

  // Controle de visibilidade das abas
  if (tab === "quimica") {
    quimicaTab.style.display = "block";
    fisicaTab.style.display = "none";
    matematicaTab.style.display = "none";
    matrizesTab.style.display = "none";

    quimicaButton.classList.add("active");
    fisicaButton.classList.remove("active");
    matematicaButton.classList.remove("active");
    matrizesButton.classList.remove("active");
  } else if (tab === "fisica") {
    quimicaTab.style.display = "none";
    fisicaTab.style.display = "block";
    matematicaTab.style.display = "none";
    matrizesTab.style.display = "none";

    quimicaButton.classList.remove("active");
    fisicaButton.classList.add("active");
    matematicaButton.classList.remove("active");
    matrizesButton.classList.remove("active");
  } else if (tab === "matematica") {
    quimicaTab.style.display = "none";
    fisicaTab.style.display = "none";
    matematicaTab.style.display = "block";
    matrizesTab.style.display = "none";

    quimicaButton.classList.remove("active");
    fisicaButton.classList.remove("active");
    matematicaButton.classList.add("active");
    matrizesButton.classList.remove("active");
  } else if (tab === "matrizes") {
    quimicaTab.style.display = "none";
    fisicaTab.style.display = "none";
    matematicaTab.style.display = "none";
    matrizesTab.style.display = "block";

    quimicaButton.classList.remove("active");
    fisicaButton.classList.remove("active");
    matematicaButton.classList.remove("active");
    matrizesButton.classList.add("active");
  }
}
