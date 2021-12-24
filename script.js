                    // Image Slider

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.images-carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}




                                      // Counter time



var countDownDate = new Date("Jan 1,2023 00:00:00").getTime();
                                    

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for hours, minutes and seconds
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //time calculations for days
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  //Display the result in the element with id = "days"
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("days").style.fontSize = "30px";
  // Display the result in the element with id="counter"
  document.getElementById("counter").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);




                                              //Counter Happy Customer




const counters = document.querySelectorAll('.value');
const speed = 3500;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('number');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

                                      




                                // Hamburger Menu 


function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
                        
document.getElementById("hamburger-icon").addEventListener('click', function (event) {
  event.stopPropagation();
});