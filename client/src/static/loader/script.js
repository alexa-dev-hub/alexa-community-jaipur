function svgPathDraw(selector) {
  const paths = document.querySelectorAll(selector);

  [...paths].map((path) => {
    let name = path.getAttribute("data-name");
    let length = path.getTotalLength();

    path.setAttribute("stroke-dasharray", length);
    path.setAttribute("stroke-dashoffset", length);

    console.info({
      name: name,
      length: length
    });
  });
}

function loaderAnim() {
  const loaders = document.querySelectorAll("[data-name^='loader-']");

  [...loaders].map((loader) => loader.classList.remove("loader-anim"));
  setTimeout(function () {
    [...loaders].map((loader) => loader.classList.add("loader-anim"));
  }, 200);
}

function switchTheme() {
  const checkbox = document.querySelector(".theme-switcher");

  checkbox.addEventListener("change", function () {
    const themeContainer = document.querySelector(".theme-container");
    if (themeContainer && this.checked) {
      themeContainer.classList.add("light");
    } else {
      themeContainer.classList.remove("light");
    }
    loaderAnim();
  });
}

(function () {
  svgPathDraw("[data-name='loader-0'] path");
  svgPathDraw("[data-name='loader-1'] path");
  svgPathDraw("[data-name='loader-2'] path");
  svgPathDraw("[data-name='loader-3'] circle.forward");
  svgPathDraw("[data-name='loader-5'] path");
  loaderAnim();
  switchTheme();
})();