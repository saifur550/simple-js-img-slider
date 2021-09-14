// all img here 

const images = [
    'assets/img/img1.jpeg',
    'assets/img/img2.jpeg',
    'assets/img/img3.jpeg',
    'assets/img/img4.jpeg',
    'assets/img/img5.jpeg',
    'assets/img/img6.jpeg',
    'assets/img/img7.jpeg',
    'assets/img/img8.jpeg',
    'assets/img/img9.jpeg'
]

let imgIndex = 0;

const image = document.getElementById('img-slider');
// set time here 
setInterval(()=>{
    if(imgIndex>=images.length){
        imgIndex = 0;
    }
    imgIndex ++;
    const imgUrl = images[imgIndex];
    image.setAttribute('src', imgUrl);
    console.log(imgUrl);
},4000)