
const container = document.querySelector('.container');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn')

const image1 = document.createElement('img');
const image2 = document.createElement('img');
const image3 = document.createElement('img');
const image4 = document.createElement('img');
const image5 = document.createElement('img');
const image6 = document.createElement('img');
const image7 = document.createElement('img');
const image8 = document.createElement('img');
const image9 = document.createElement('img');
const image10 = document.createElement('img');
const image11 = document.createElement('img');

image1.src = 'images/istanbul1.jpeg';
image2.src = 'images/photo2.jpg';
image3.src = 'images/photo3s.jpeg';
image4.src = 'images/istanbul2.jpg';
image5.src = 'images/photo5.webp';
image6.src = 'images/photo6.webp';
image7.src = 'images/jama1.jpeg';
image8.src = 'images/jama2.jpg';

image9.src = 'images/instanbul3.jpeg';
image10.src = 'images/tokyo1.jpeg';
image11.src = 'images/tokyo2.jpeg';


container.appendChild(image1);
container.appendChild(image2);
container.appendChild(image3);
container.appendChild(image4);
container.appendChild(image5);
container.appendChild(image6);
container.appendChild(image7);
container.appendChild(image8);
container.appendChild(image9);
container.appendChild(image10);
container.appendChild(image11);

const listOfImages = document.querySelectorAll('img');


listOfImages.forEach(img =>{
  img.classList.add('hideSlide');
});


let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", event =>{
  initializeSlider();
})

function initializeSlider(){
  if(listOfImages.length > 0){
    listOfImages[slideIndex].classList.add("displaySlide",'nextSlideAnimation');
    intervalId = slideIndex >= listOfImages.length ? setInterval(prevSlide,5000) : setInterval(nextSlide,5000);
  }
};

function showSlide(index){
  if(index >= listOfImages.length){
    slideIndex = 0;
  }
  else if(index < 0){
    slideIndex = listOfImages.length - 1;
  };

  listOfImages.forEach(slide =>{
    slide.classList.remove("displaySlide");
  })
  listOfImages[slideIndex].classList.add("displaySlide", 'nextSlideAnimation');
};

function prevSlide(){
  clearInterval(intervalId);
  slideIndex--;
  listOfImages[slideIndex].classList.replace('nextSlideAnimation', 'prevSlideAnimation')
  showSlide(slideIndex);
};

function nextSlide(){
  slideIndex++;
  showSlide(slideIndex);
};
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;