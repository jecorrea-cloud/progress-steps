const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

//Set currentActive by default to the 1
let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive < circles.length) currentActive = circles.length;

  //   console.log(currentActive);
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < circles.length) currentActive = 1;

  //   console.log(currentActive);
  update();
});

//Function to update the state
function update() {
  circles.forEach((circle, index) => {
    index < currentActive
      ? circle.add.classList("active")
      : circle.remove.classList("active");
  });

  const actives = document.querySelectorAll("active");
}
