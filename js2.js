
const images = ['imgs/moana.jpg', 'imgs/toy.jpg', 'imgs/up.jpg' ,'imgs/shalby.jpg' ,'imgs/7.jpg']
var counter = 0;
var intervalId = 0;


function nextImage() {
  counter++
  if (counter >= images.length) {
    counter = 0
  }
  document.getElementById("image").src = images[counter];
  console.log(counter);
}



counter = images.length - 1
function previousImage() {
  counter--
  if (counter <= -1 || counter == images.length + 1) {
    counter = images.length - 1
  }
  document.getElementById("image").src = images[counter]
  console.log(counter);
}




function startSlideshow() {
  if (intervalId === 0) {
    intervalId = setInterval(nextImage, 1000)
  }
}


function stopSlideshow() {
if (intervalId){

  clearInterval(intervalId) ;
  intervalId =0
}
}