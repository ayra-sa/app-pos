function loadHTML(selector, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
    });
}

// Load header and footer
loadHTML("#header-container", "components/header.html");
loadHTML("#footer-container", "components/footer.html");
loadHTML("#whatsapp-button", "components/whatsapp-button.html");

window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("transparent");
  }
};

function setActiveMenu() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.getAttribute("data-link") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

loadHTML("#header-container", "components/header.html", setActiveMenu);

function loadHTML(selector, url, callback) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
      if (callback) callback();
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const selectSelected = document.querySelector(".select-selected");
  const selectItems = document.querySelector(".select-items");

  // Toggle dropdown
  selectSelected.addEventListener("click", function () {
    selectItems.classList.toggle("select-hide");
  });

  // Handle item selection
  selectItems.querySelectorAll("div").forEach((item) => {
    item.addEventListener("click", function () {
      selectSelected.textContent = this.textContent;
      selectItems.classList.add("select-hide");
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (e) {
    if (!selectSelected.contains(e.target)) {
      selectItems.classList.add("select-hide");
    }
  });
});

// Ambil elemen video, deskripsi, thumbnail, dan button play
const videoPlayer = document.getElementById("mainVideo");
const videoSource = document.getElementById("videoSource");
const videoTitle = document.getElementById("videoTitle");
const videoDesc = document.getElementById("videoDesc");
const videoThumbnail = document.getElementById("videoThumbnail");
const playButton = document.getElementById("playButton");
const thumbnailWrapper = document.querySelector(".thumbnail-wrapper");
const videoPlayerContainer = document.querySelector(".video-player");

// Ambil semua elemen list video
const videoItems = document.querySelectorAll(".video-item");

// Function to play video when "Play" button is clicked
playButton.addEventListener("click", function () {
  thumbnailWrapper.style.display = "none";
  videoPlayerContainer.style.display = "block";
  videoPlayer.play();
});

// Loop melalui setiap elemen list
videoItems.forEach((item) => {
  item.addEventListener("click", function () {
    const newTitle = item.getAttribute("data-title");
    const newDesc = item.getAttribute("data-desc");
    const newSrc = item.getAttribute("data-src");
    const newThumbnail = item.getAttribute("data-thumbnail");

    // Update video source, title, description, and thumbnail
    videoSource.src = newSrc;
    videoPlayer.load(); // Reload the video to apply new source
    videoTitle.innerHTML = newTitle;
    videoDesc.innerHTML = newDesc;
    videoThumbnail.src = newThumbnail;

    // Reset thumbnail and video player visibility
    thumbnailWrapper.style.display = "block";
    videoPlayerContainer.style.display = "none";
  });
});

// Move focus to the next field automatically
document.querySelectorAll(".otp-input").forEach((input, index, arr) => {
  input.addEventListener("input", (e) => {
    if (input.value.length === 1 && index < arr.length - 1) {
      arr[index + 1].focus();
    } else if (input.value.length === 0 && index > 0) {
      arr[index - 1].focus();
    }
  });
});

function hideLoader() {
  // Wait 2 seconds to simulate loading time
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2000);
}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.replace("bi-eye-slash", "bi-eye");
  }
}

function toggleConfirmPassword() {
  const passwordInput = document.getElementById("confirmPassword");
  const toggleIcon = document.querySelector(".toggle-confirmPassword");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.replace("bi-eye-slash", "bi-eye");
  }
}