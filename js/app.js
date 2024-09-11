// load

const load = document.querySelector(".preloader");

window.addEventListener("load", () => {
  load.style.display = "none";
});

// img popup

$(document).ready(function () {
  // required elements
  var imgPopup = $(".img-popup");
  var imgCont = $(".gallery-img");
  var popupImage = $(".img-popup img");
  var closeBtn = $(".close-btn");

  // handle events
  imgCont.on("click", function () {
    var img_src = $(imgCont).children("img").attr("src");
    imgPopup.children("img").attr("src", img_src);
    imgPopup.addClass("opened");
  });

  $(imgPopup, closeBtn).on("click", function () {
    imgPopup.removeClass("opened");
    imgPopup.children("img").attr("src", "");
  });

  popupImage.on("click", function (e) {
    e.stopPropagation();
  });
});

// nav

const menuBtn = document.querySelector("#menu-btn");
const menuClose = document.querySelector("#menu-close");
const menuContent = document.querySelector(".nav-ul");

menuBtn.addEventListener("click", () => {
  menuContent.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menuContent.classList.remove("active");
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", scrollY > 0);
});

let list = document.querySelectorAll(".work-list");
let listContent = document.querySelectorAll(".home-work-box");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("date-menu");

    for (let k = 0; k < listContent.length; k++) {
      listContent[k].classList.remove("active");
      listContent[k].classList.add("hide");

      if (
        listContent[k].getAttribute("date-item") == dataFilter ||
        dataFilter == "all"
      ) {
        listContent[k].classList.remove("hide");
        listContent[k].classList.add("active");
      }
    }
  });
}

// video open

const videobtn = document.querySelector(".top-banner-video video");
const popupVideo = document.querySelector(".popup-video video");

const videoConent = document.querySelector(".popup-video");
const videoClose = document.querySelector(".popup-video span");

videobtn.addEventListener("click", () => {
  videoConent.classList.add("active");
  popupVideo.src = videobtn.getAttribute("src");
});

videoClose.addEventListener("click", () => {
  videoConent.classList.remove("active");
});

videoConent.addEventListener("click", () => {
  videoConent.classList.remove("active");
});
