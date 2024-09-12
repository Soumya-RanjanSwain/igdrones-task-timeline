const slider = document.getElementById("myRange");
const monthName = document.getElementById("month");
const details = document.getElementById("details");
const header = document.getElementById("header");
const image = document.querySelector("#header img");
const leftbutton = document.getElementById('leftbtn');
const rightbutton = document.getElementById('rightbtn');

const months = ["April 2018", "April 2019", "April 2020", "April 2021", "April 2022", "April 2023", "April 2024"]
const data = ["We are one of India's leading drone firms in providing end-to-end Drone Solutions.",
  "With IG drones, transform how you survey, inspect, and monitor, unlocking new possibilities in precision and efficiency from above.",
  "Choose IG drones for superior flight stability and cutting-edge camera technology, bringing your aerial projects to life with stunning clarity.",
  "IG drones empower you to capture every detail from the sky, whether for professional use or creative exploration, with unparalleled control and reliability.",
  "From advanced mapping to real-time surveillance, IG drones provide the tools needed to elevate your operations to new heights.",
  "IG drones combine durability with advanced features, making them the perfect choice for challenging environments and demanding missions.",
  "Streamline your workflow with IG drones, offering automated flight modes and intelligent software to simplify complex tasks.",
  "With IG drones, gain a bird's-eye view that enhances decision-making and improves operational efficiency across various sectors.",
  "IG drones deliver exceptional performance in both urban and remote settings, ensuring consistent results no matter the environment.",
  "Experience the future of aerial innovation with IG drones, designed to deliver high-quality imagery and data for industries that demand the best."];

const images = [
  "images/image1.jpeg",
  "images/image2.png",
  "images/image3.jpeg",
  "images/image4.jpeg",
  "images/image5.jpg",
  "images/image6.jpeg",
  "images/image7.jpg"
];

function imageScaleUp() {
  gsap.fromTo("#header img",
    {
      y: 0,
      opacity: 0,
      scale: 0.5
    },
    {
      y: 0,
      duration: 0.9,
      delay: 0.5,
      opacity: 1,
      scale: 1
    }
  );
}

function TextUpDown() {
  gsap.fromTo("#header h1",
    {
      y: -50,
      opacity: 0,
      scale: 0.9
    },
    {
      y: 0,
      duration: 1,
      delay: 0.5,
      opacity: 1,
      scale: 1
    }
  );

  gsap.fromTo("#header #details",
    {
      y: 50,
      opacity: 0,
      scale: 0.9
    },
    {
      y: 0,
      duration: 1,
      delay: 0.5,
      opacity: 1,
      scale: 1
    }
  );
}




slider.oninput = function () {
  monthName.innerHTML = months[slider.value - 1];
  details.innerHTML = data[slider.value - 1];
  image.src = images[slider.value - 1];
  imageScaleUp();
  TextUpDown();
};

leftbutton.addEventListener('click', () => {
  if (slider.value > slider.min) {
    slider.value = parseInt(slider.value) - 1;
  } else {
    slider.value = slider.max;
  }
  monthName.innerHTML = months[slider.value - 1];
  details.innerHTML = data[slider.value - 1];
  image.src = images[slider.value - 1];
  imageScaleUp();
  TextUpDown();
});

rightbutton.addEventListener('click', () => {
  if (slider.value < slider.max) {
    slider.value = parseInt(slider.value) + 1;
  } else {
    slider.value = slider.min;
  }
  monthName.innerHTML = months[slider.value - 1];
  details.innerHTML = data[slider.value - 1];
  image.src = images[slider.value - 1];
  imageScaleUp();
  TextUpDown();
});

imageScaleUp();
TextUpDown();

