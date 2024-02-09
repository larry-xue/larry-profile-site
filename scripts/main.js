window.onload = () => {
  removeTypingAnimation(3500);
};

function toggleMenu() {
  const submenu = document.querySelector(".header-bar-submenu");
  console.log('first submenu = ', submenu.style);
  if  (submenu && submenu.style.display === "flex") {
    submenu.style.display = "none";
  } else if (submenu) {
    submenu.style.display = "flex";
  }
}

/**
 * Remove typing animation
 * @param {number} timeout - timeout in milliseconds
 */
function removeTypingAnimation(timeout = 3000) {
  setTimeout(function () {
    try {
      const headerBarTitle = document.querySelector(".header-bar-title");
      if (!headerBarTitle) {
        return;
      }

      console.log("headerBarTitle.children = ", headerBarTitle.children);
      const titleDom = headerBarTitle.children[0];
      if (!titleDom) {
        return;
      }
      titleDom.classList.remove("typing");
    } catch (err) {
      console.error(err);
    }
  }, timeout);
}
