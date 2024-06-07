// localStorage.clear();
// Check If there's a Local Storage Color
let mainColors = localStorage.getItem("color_option");
let secColors = localStorage.getItem("color_option_one");
let secondColors = localStorage.getItem("color_option_two");
// Retrive The Stored Colors
if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);
  document.documentElement.style.setProperty("--secondary-color", secColors);
}
if (secondColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);
  document.documentElement.style.setProperty(
    "--secondary-color",
    localStorage.getItem("color_option_two", "#F5F3E8")
  );
  // Remove The Active Class From All
  document.querySelectorAll(".colors li").forEach((element) => {
    element.classList.remove("active");
    // Add The Active Class On The Clicked Color
    console.log(element);
    if (element.dataset.color === "#304237") {
      element.classList.add("active");
    }
  });
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

// Random Background Option
const ranBack = document.querySelectorAll(".background-options span");
ranBack.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    // Random Background Logic
    if (e.target.dataset.background === "yes") {
      randomBackOpt = true;
      randomBackground();
      localStorage.setItem("background_option", true);
    } else {
      randomBackOpt = false;
      clearInterval(randomBackInterval);
      localStorage.setItem("background_option", false);
    }
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

// Random Background Imgs
let randomBackOpt = true;
let randomBackInterval;
if (randomBackOpt === true) {
  function randomBackground() {
    randomBackInterval = setInterval(() => {
      let ranNum = Math.floor(Math.random() * landingImgs.length);
      lanadingPage.style.backgroundImage = `url("imgs/${landingImgs[ranNum]}")`;
    }, 4000);
  }
}

randomBackground();

// Check If There's A Stored Background Option
let randomLocalBack = localStorage.getItem("background_option");
// Retrive The Stored Background Option
if (randomLocalBack !== null) {
  if (randomLocalBack === "true") {
    randomBackOpt = true;
  } else {
    randomBackOpt = false;
    clearInterval(randomBackInterval);
  }
  // Active Class
  document.querySelectorAll(".background-options span").forEach((span) => {
    span.classList.remove("active");
    if (randomLocalBack === "true") {
      document
        .querySelector(".background-options .yes")
        .classList.add("active");
    } else {
      document.querySelector(".background-options .no").classList.add("active");
    }
  });
}

// Select Skills
let ourSkills = document.querySelector(".skills");

// Handling Scrolling
window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window Scroll Top
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    document.querySelectorAll(".skill-progress span").forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
