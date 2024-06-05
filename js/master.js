// Check If there's a Local Storage Color
let mainColors = localStorage.getItem("color_option");
localStorage.getItem("color_option_one");
let secondColors = localStorage.getItem("color_option_two");
// Retrive The Stored Colors
if (mainColors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    localStorage.getItem("color_option_one")
  );
}
if (secondColors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    localStorage.getItem("color_option_two", "#F5F3E8")
  );
}

// Select Settings Gear Icon
document.querySelector(".fa-spin").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings-container").classList.toggle("open");
};

// Select Colors
const colors = document.querySelectorAll(".colors li");
colors.forEach((li) => {
  li.addEventListener("click", (color) => {
    if (color.target.dataset.color === "#F5F3E8") {
      localStorage.clear();
      document.documentElement.style.setProperty(
        "--main-color",
        color.target.dataset.color
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#304237"
      );
      // Setting The Local Storage
      localStorage.setItem("color_option", color.target.dataset.color);
      localStorage.setItem("color_option_one", "#304237");
    } else {
      localStorage.clear();
      document.documentElement.style.setProperty(
        "--main-color",
        color.target.dataset.color
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#F5F3E8"
      );
      // Setting The Local Storage
      localStorage.setItem("color_option", color.target.dataset.color);
      localStorage.setItem("color_option_two", "#F5F3E8");
    }
    // Remove The Active Class From All
    color.target.parentElement
      .querySelectorAll(".active")
      .forEach((element) => {
        element.classList.remove("active");
      });
    // Add The Active Class On The Clicked Color
    color.target.classList.add("active");
  });
});

// Select Landing Page
let lanadingPage = document.querySelector(".landing-page");

// Landing Page Imgs
let landingImgs = [
  "landing-one.jpg",
  "landing-two.jpg",
  "landing-three.jpg",
  "landing-four.jpg",
  "landing-five.jpg",
];

// Random Imgs
setInterval(() => {
  let ranNum = Math.floor(Math.random() * landingImgs.length);
  lanadingPage.style.backgroundImage = `url("imgs/${landingImgs[ranNum]}")`;
}, 5000);
