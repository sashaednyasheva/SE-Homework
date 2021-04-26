//variables that we are accessing from the html document

const container = document.getElementById('container');
const clock = document.getElementById('clock');
const button = document.getElementById('start');
let ticker = document.getElementById("ticker");
const p = document.querySelector('p');
let input = document.getElementById('input');
var seconds = 0;
var minutes = 0;

//listener will temporarily remove the paragraph tag and add the input tag
function isMinute() {
  if (seconds < 59) {
    seconds++;
    ticker.innerHTML = checkTime(minutes) + ":" + checkTime(seconds);;
  }else{
    seconds = 0;
    minutes++;
    ticker.innerHTML = checkTime(minutes) + ":" + checkTime(seconds);
  }
}
function checkTime(i) { //if i less than 10, it will add 0 next to number
  if(i<10){
    return i = "0" + i;
  }
  else {
    return i
  }
}
p.addEventListener('click', (e) => {
  if(p){
    p.style.display = "none";
    input.style.display = "inline";
  }
})

document.addEventListener('keydown', (e) => { //keycode is enter button
  if(e.keyCode == 13 && input.value > 0){
    p.style.display = "flex";
    input.style.display = "none";
    var id = setInterval(myTimer, 1000);
    input = Number(input.value);
    function myTimer() {
        if (input == minutes){
        return  clearInterval(id);
        }
        else{
        return isMinute();
        }
    }
  }
})
