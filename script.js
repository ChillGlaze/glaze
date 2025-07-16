window.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("video-intro");
  const main = document.getElementById("main-site");

  const video = document.getElementById("intro-video");
  video.onended = () => {
    intro.style.display = "none";
    main.style.display = "block";
  };
});
