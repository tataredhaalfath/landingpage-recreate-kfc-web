let images = document.querySelectorAll(".img");
let circle = document.querySelector(".circle");

function changeBg(e) {
  circle.style.backgroundColor = e;
  return;
}

function mouseOver(e) {
  if (e == "#865439") {
    images.forEach((image) => {
      if ((image.contains = "image2") && (image.contains = "image3")) {
        document.querySelector(".image2").style.opacity = 0;
        document.querySelector(".image3").style.opacity = 0;
      }
      return;
    });
  } else if (e == "#5F7A61") {
    images.forEach((image) => {
      if ((image.contains = "image1") && (image.contains = "image3")) {
        document.querySelector(".image1").style.opacity = 0;
        document.querySelector(".image3").style.opacity = 0;
      }
      return;
    });
  } else if (e == "#A35709") {
    images.forEach((image) => {
      if ((image.contains = "image1") && (image.contains = "image2")) {
        document.querySelector(".image1").style.opacity = 0;
        document.querySelector(".image2").style.opacity = 0;
      }
      return;
    });
  }
  circle.style.backgroundColor = e;
}

function mouseOut(e) {
  if (e == "#463131") {
    images.forEach((image) => {
      if (
        (image.contains = "image1") &&
        (image.contains = "image2") &&
        (image.contains = "image3")
      ) {
        document.querySelector(".image1").style.opacity = 1;
        document.querySelector(".image2").style.opacity = 1;
        document.querySelector(".image3").style.opacity = 1;
        console.log("ok");
      }
      return;
    });
  }
  circle.style.backgroundColor = e;
}

// dropdown
function dropdown() {
  document.querySelector("#myDropDown").classList.toggle("show");
}

window.onclick = function (e) {
  console.log(e);
  if (!e.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropDown = dropdowns[i];
      if (openDropDown.classList.contains("show")) {
        openDropDown.classList.remove("show");
      }
    }
  }
};

// smooth scrolling
// function home() {
//   window.scrollBy({
//     top: document.body.scrollHeight,
//     left: 0,
//     behavior: "smooth",
//   });
// }

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
