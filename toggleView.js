const solarSystem = document.querySelector("#solar-system");
const showIn3d = document.querySelector("#toggle-view--3d");

showIn3d.addEventListener("click", (e) => {
  if (showIn3d.checked) {
    solarSystem.classList.add("solar-system--3d");
  } else {
    solarSystem.classList.remove("solar-system--3d");
  }
});
