let date = new Date("June 4, 2022 16:37:25").getTime();
//console.log(date - today); //let seconds = 5;
let timeRef;
//for (let i = seconds;  i > 0; i--)
//const update = () => {
// const update = () => {
timeRef = setInterval(() => {
  let today = new Date().getTime();
  let distance = date - today;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("seconds").innerHTML =
    "Days " +
    days +
    " Hours " +
    hours +
    " min: " +
    minutes +
    " sec: " +
    seconds;
  //seconds = seconds -1; -->
  if (distance < 0) {
    clearInterval(timeRef);
    document.getElementById("seconds").innerHTML = "Countdown Finished";
  }
}, 1000);
