let slide = document.querySelector("#showcase-slide");
let body = document.body
setInterval(() => {
  let src = slide.getAttribute("src");
  if (src === "images/OFFbulb1.png") {
    slide.setAttribute("src", "images/ONbulb1.png");
    body.classList.add("white");
  } else {
    slide.setAttribute("src", "images/OFFbulb1.png");
    body.classList.remove("white");
  }
}, 3000);
