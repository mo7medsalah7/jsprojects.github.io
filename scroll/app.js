const date = document.querySelector("#date");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");
const navbar = document.querySelector("#nav");

date.innerHTML = new Date().getFullYear();

navToggle.addEventListener("click", function () {
  // based on my css setup, i setup linksContainer as height of 0
  // and the old code was to change the hieght of linksContainer to
  // specific height (example: 200px) if we "click" the button

  // the problem was that 200px is fixed so if we add another
  // list item to the links, it will be under that 200px
  // so getBoundingClientRect method is to dynamically change the hieght of the links container
  // by accessing its height property.
  // i setup linksContainer hieght = 0
  // the links hieght is considered from the hieght of the list items(not me the one who setup it),
  // so we need to access the height
  // if i click on the button, if the linksContainer hieght is = 0(and that's true, i did that in my css)
  // it's true >> set the value of the linksContainer to the height of links hieght
  // and vice verce

  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ***********Scrolling ********************

window.addEventListener("scroll", function () {
  const navbarHieght = navbar.getBoundingClientRect().height;
  if (window.pageYOffset > navbarHieght) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  const topLinkArrow = document.querySelector(".top-link");

  if (window.pageYOffset > 500) {
    topLinkArrow.classList.add("show-me");
  } else {
    topLinkArrow.classList.remove("show-me");
  }
});
