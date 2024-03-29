const imgBtns = document.querySelectorAll(".img-select a");
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
    updateActiveItem();
  });
});

function updateActiveItem() {
  imgBtns.forEach((imgItem) => {
    const itemId = imgItem.dataset.id;
    if (itemId === imgId) {
      imgItem.parentElement.classList.add("active");
    } else {
      imgItem.parentElement.classList.remove("active");
    }
  });
}

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;

  imgBtns.forEach((imgItem) => {
    const itemId = imgItem.dataset.id;
    const imgElement = imgItem.querySelector("img");

    if (itemId === imgId) {
      imgElement.style.filter = "grayscale(0%)";
    } else {
      imgElement.style.filter = "grayscale(100%)";
    }
  });
}

window.addEventListener("resize", () => {
  slideImage();
  updateActiveItem();
});

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
  if (imgId > 1) {
    imgId--;
    slideImage();
    updateActiveItem();
  }
});

rightArrow.addEventListener("click", () => {
  const totalImages = imgBtns.length;
  if (imgId < totalImages) {
    imgId++;
    slideImage();
    updateActiveItem();
  }
});

const articleBtn = document.getElementById("articleBtn");
const fotoBtn = document.getElementById("fotoBtn");
const videoBtn = document.getElementById("videoBtn");

articleBtn.addEventListener("click", () => toggleActive(articleBtn));
fotoBtn.addEventListener("click", () => toggleActive(fotoBtn));
videoBtn.addEventListener("click", () => toggleActive(videoBtn));

function toggleActive(clickedBtn) {
  articleBtn.classList.remove("active");
  fotoBtn.classList.remove("active");
  videoBtn.classList.remove("active");

  clickedBtn.classList.add("active");
  clickedBtn.style.borderRadius = "100px";
  clickedBtn.style.border = "1px solid #FFF";
  clickedBtn.style.background = "rgba(255, 255, 255, 0.50)";

  [articleBtn, fotoBtn, videoBtn].forEach((btn) => {
    if (btn !== clickedBtn) {
      btn.style.borderRadius = "";
      btn.style.border = "";
      btn.style.background = "";
    }
  });
}

toggleActive(articleBtn);

function redirectToDetik() {
  window.location.href =
    "https://www.detik.com/search/searchall?query=fun+run&siteid=2";
}

function redirectToEventDetik() {
  window.location.href = "https://event.detik.com/";
}

function redirectToEventDetik() {
  window.location.href = "https://event.detik.com/";
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".content ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

function toggleNav() {
  const navMenu = document.querySelector(".content ul");
  navMenu.classList.toggle("show");

  const burgerIcon = document.querySelector(".burger-icon-img");
  const closeIcon = document.querySelector(".close-icon-img");

  burgerIcon.style.display = navMenu.classList.contains("show")
    ? "none"
    : "block";
  closeIcon.style.display = navMenu.classList.contains("show")
    ? "block"
    : "none";
}
