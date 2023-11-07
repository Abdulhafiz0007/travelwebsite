

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('.search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () => {
   document.querySelector('.search-form').classList.remove('active')
}

document.querySelector('#menu-btn').onclick = () => {
  document.querySelector('.header .navbar').classList.toggle('active')
}

document.querySelector('#nav-close').onclick = () => {
  document.querySelector('.header .navbar').classList.remove('active')
}

window.onscroll = () =>{
  if(window.scrollY > 100) {
    document.querySelector('.header').classList.add('active')
  }
  else{
    document.querySelector('.header').classList.remove('active')
  }
}

window.onload = () =>{
  if(window.scrollY > 0) {
    document.querySelector('.header').classList.add('active')
  }
  else{
    document.querySelector('.header').classList.remove('active')
  }
}

























var swiper = new Swiper(".home-slider", {

  navigation: {
    nextEl: ".swiper-button-next",
    nextEl: ".swiper-button-prev",
  },

  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
});




var swiper = new Swiper(".packages-slider", {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOninteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});




var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 9500,
    // disableOninteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOninteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".images-slider", {
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOninteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});







