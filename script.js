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

  const actives = document.querySelectorAll(".active");

  // Follow steps for progress.style.width

  //   console.log(actives.length, circles.length)

  //   console.log(actives.length/circles.length)

  //   console.log((actives.length/circles.length)*100)

  //   console.log((actives.length/circles.length)*100 + '%')

  //   console.log(((actives.length-1)/(circles.length-1))*100 + '%')

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}
