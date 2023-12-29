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
