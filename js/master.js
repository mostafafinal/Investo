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
    if (element.dataset.color === "#304237") {
      element.classList.add("active");
    }
  });
}
// Select Settings Gear Icon
document.querySelector(".fa-solid").onclick = function () {
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
    // Handle Active State
    activeState(color);
  });
});

// Random Background Option
const ranBack = document.querySelectorAll(".background-options span");
ranBack.forEach((span) => {
  span.addEventListener("click", (e) => {
    activeState(e);
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

// Show Bullets Option
const navBullets = document.querySelector(".nav-bullets");
const bulletsSpans = document.querySelectorAll(".bullets-options span");
const bulletsLocal = localStorage.getItem("bullets_option");
if (bulletsLocal !== null) {
  navBullets.style.display = bulletsLocal;
  bulletsSpans.forEach((e) => {
    e.classList.remove("active");
  });
  if (bulletsLocal === "block") {
    document.querySelector(".bullets-options .yes").classList.add("active");
  } else {
    document.querySelector(".bullets-options .no").classList.add("active");
  }
}
bulletsSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    // Handling Bullets
    if (e.target.dataset.display === "show") {
      navBullets.style.display = "block";
      localStorage.setItem("bullets_option", "block");
    } else {
      navBullets.style.display = "none";
      localStorage.setItem("bullets_option", "none");
    }
    // Handling Bullets Option Active State
    activeState(e);
  });
});

// Navigation Function
function goTo(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
// Handling Bullets
const bullets = document.querySelectorAll(".bullets");
goTo(bullets);
// Handling Section Links
const sectionLinks = document.querySelectorAll("a");
goTo(sectionLinks);

// Handle Active State Function
function activeState(event) {
  event.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  event.target.classList.add("active");
}

// Select Page Header Navigation Elements
const allItems = document.querySelectorAll(".items a");
// Handle Active State
allItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    activeState(e);
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

// Select Gallery Imgs
let theGallery = document.querySelectorAll(".pic-container img");

// Loop Over Imgs
theGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create The Overlay
    let overLay = document.createElement("div");
    overLay.className = "popup-overlay";
    document.body.appendChild(overLay);
    // Create The Popup Box
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    // Handling imgs' alt
    if (e.target.alt !== null) {
      // Create Img Headding
      let imgHead = document.createElement("div");
      imgHead.className = "Img-head";
      imgHead.appendChild(document.createTextNode(e.target.alt));
      popupBox.appendChild(imgHead);
    }
    // Create The popup Image
    let popupImage = document.createElement("img");
    popupImage.src = e.target.src;
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);
    // Close Bottom
    let closePopup = document.createElement("span");
    closePopup.className = "close-popup";
    closePopup.appendChild(document.createTextNode("X"));
    popupBox.appendChild(closePopup);
    // Handling Popup Close Bottom
    closePopup.addEventListener("click", (e) => {
      if (e.target.className === "close-popup") {
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
      }
    });
  });
});
// Handling Popup Close Bottom
// document.addEventListener("click", (e) => {
//   if (e.target.className === "close-popup") {
//     e.target.parentNode.remove();
//     document.querySelector(".popup-overlay").remove();
//   }
// });
