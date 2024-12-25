function updateBackgroundImagesAndHeight() {
  const items = document.querySelectorAll(".carousel-item");

  if (window.innerWidth <= 767) {
    items.forEach((item, index) => {
      item.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.562)), url("/landing_page/media/sliders/res/img_${
        index + 1
      }.jpg")`;
      item.style.backgroundSize = "cover";
      item.style.backgroundPosition = "center";
      item.style.backgroundRepeat = "no-repeat";
      item.style.height = "200px";
    });
  } else {
    items.forEach((item, index) => {
      item.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.562)), url("/landing_page/media/sliders/img_${
        index + 1
      }.jpg")`;
      item.style.backgroundSize = "cover";
      item.style.backgroundPosition = "center";
      item.style.backgroundRepeat = "no-repeat";
      item.style.height = "800px";
    });
  }
}

updateBackgroundImagesAndHeight();

window.addEventListener("resize", updateBackgroundImagesAndHeight);
