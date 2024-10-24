function loadHTML(selector, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        });
}

// Load header and footer
loadHTML('#header-container', 'components/header.html');
loadHTML('#footer-container', 'components/footer.html');

window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const selectSelected = document.querySelector(".select-selected");
    const selectItems = document.querySelector(".select-items");

    // Toggle dropdown
    selectSelected.addEventListener("click", function() {
        selectItems.classList.toggle("select-hide");
    });

    // Handle item selection
    selectItems.querySelectorAll("div").forEach(item => {
        item.addEventListener("click", function() {
            selectSelected.textContent = this.textContent;
            selectItems.classList.add("select-hide");
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function(e) {
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
