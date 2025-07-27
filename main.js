const p = document.getElementById("p");
const button = document.getElementById("button");
function Click(){
  var music = document.getElementById("music");
  music.play();
  button.style.display = "none";
  p.style.display = "block";
}