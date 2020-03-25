console.log("Hi!");

const solarSystem = document.querySelector("#solar-system");
const toggleView = document.querySelector("#toggle-view");
const showIn3d = toggleView.querySelector("#toggle-view--3d");
const showIn2d = toggleView.querySelector("#toggle-view--2d");

toggleView.addEventListener("click", (e) => {
  if (showIn3d.checked) {
    solarSystem.classList.add("solar-system--3d");
  } else if (showIn2d.checked) {
    solarSystem.classList.remove("solar-system--3d");
  }

  return;
});
