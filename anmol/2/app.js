document.querySelector('.logo').addEventListener('click', function () {
document.querySelector('.nav').classList.toggle('active');
})



const section1 = document.querySelector('.section1');

const header = document.querySelector('header');

const Options = {
threshold: 0.2
}


const observer = new IntersectionObserver(function (entries) {
entries.forEach(entry => {
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
})
}, Options)


observer.observe(section1);


const sectionTwo = document.querySelector('.section2');
const text = document.querySelector('.content');

const image = document.querySelector('.profile');

const NewOptions = {
threshold: 0.3
}


const Newobserver = new IntersectionObserver(function (entries) {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    about.classList.add('cis');
    image.classList.add('wow');
    text.classList.add('trans');
  } else {
    about.classList.remove('cis');
    image.classList.remove('wow');
    text.classList.remove('trans');
  }
})
}, NewOptions)


Newobserver.observe(sectionTwo);

const sectionOneTwo = document.querySelector('.section2');

const about = document.querySelector('.About');


const OldOptions = {
  threshold: 0.1
}


const Oldobserver = new IntersectionObserver(function (entries) {
entries.forEach(entry => {
  if (entry.isIntersecting) {
  about.classList.add('cis');
  } else {
    about.classList.remove('cis');
  }
})
}, OldOptions)
Oldobserver.observe(sectionOneTwo);






const west = document.querySelector('.west');


const Old1Options = {
  threshold: 0.3
}


const Old1observer = new IntersectionObserver(function (entries) {
entries.forEach(entry => {
  if (entry.isIntersecting) {
  west.classList.add('blur');
  } else {
    west.classList.remove('blur');
  }
})
}, Old1Options)
Old1observer.observe(west);







const upper = document.querySelector('.upper');
const section4 = document.querySelector('.section4');

const PicOptions = {
threshold: 0.2
}

const Picobserver = new IntersectionObserver(function (entries) {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    upper.classList.add('left')
  } else {
    upper.classList.remove('left');
  }
})
}, PicOptions)

Picobserver.observe(section4);


const mid = document.querySelector('.mid');

const sectionFour = document.querySelector('.section4');
const Pic2Options = {

}

const Pic2observer = new IntersectionObserver(function (entries) {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    mid.classList.add('right')
  } else {
    mid.classList.remove('right');
  }
})
}, Pic2Options)

Pic2observer.observe(mid);
