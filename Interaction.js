function changeImage() {
let img = document.getElementById("myImage");
if (img.src.includes("images/Alderaan.png")) {
img.src = "images/Planet 2.webp"
} else {
img.src = "images/Alderaan.png"
}
}