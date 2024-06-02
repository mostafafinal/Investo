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
