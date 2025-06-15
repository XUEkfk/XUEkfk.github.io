let currentSlide = 0;
const imageSlides = document.querySelectorAll('.解說圖片 .carousel-slide img');
const textSlides = document.querySelectorAll('.解說文字 .carousel-slide .caption');


function showSlide(index) {
    const totalSlides = imageSlides.length;

    // 確保範圍在 0 ~ 長度內（循環）
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    // 顯示目前圖片
    imageSlides.forEach((img, i) => {
        img.style.display = i === currentSlide ? 'block' : 'none';
    });

    // 顯示目前說明文字
    textSlides.forEach((txt, i) => {
        txt.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function prevSlide()  {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// 初始顯示第一組
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

let currentImage = 1;
function Change_pictures(){
    console.log("圖片切換");
    const image = document.getElementById("gameImage");
    if (currentImage === 1) {
        image.src = "../img/IMG_1735.png";
        currentImage = 2;
    } else {
        image.src = "../img/IMG_2182.png";
        currentImage = 1;
    }
}
document.addEventListener('click', function () {
    const audio = document.getElementById('meowSound');
    audio.currentTime = 0; // 每次都從頭播放
    audio.playbackRate = 3;
    audio.play();
});

const Navigation =document.querySelector('.navbar');
window.addEventListener('scroll', () =>{
    Navigation.classList.toggle('navaft',window.scrollY>100);
    Navigation.classList.toggle('navder',window.scrollY<=100);
});
const home = document.querySelector('.homelogoimg');
window.addEventListener('scroll', () => {
    home.classList.toggle('shrink', window.scrollY > 100);
});
