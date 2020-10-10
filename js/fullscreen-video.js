// <!-- © www.byryn.xyz | Ryn#2512 | Need Help Message me on Discord or join my discord - https://discord.gg/xdqQsWA -->

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}