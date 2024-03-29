var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
var solidicon = document.getElementsByClassName("fa-solid");
var icon = document.querySelector(".fa-solid");

function openmenu() {
  sidemenu.style.right = "0";
  icon.classList.add("active-menu");
}
function closemenu() {
  sidemenu.style.right = "-150px";
  icon.classList.remove("active-menu");
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("Header");
  if (window.pageYOffset > 50) {
    header.classList.add("active-header");
  } else {
    header.classList.remove("active-header");
  }
});

var navItems = document.querySelectorAll("nav ul li a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});


