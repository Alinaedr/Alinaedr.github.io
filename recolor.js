var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();
img.crossOrigin = "anonymous";
img.onload = start;
img.src = "https://dl.dropboxusercontent.com/u/139992952/multple/marioStanding.png";

function start() {
    ctx.drawImage(img, 0, 0);
    ctx.drawImage(img, 150, 0);
    // shift blueish colors to greenish colors
    recolorPants(-.33);
}
