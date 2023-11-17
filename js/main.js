Fancybox.bind("[data-fancybox]", {});

const swiperProjects = new Swiper('.swiper_projects', {
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 370,
        depth: -300,
        modifier: 1,
        slideShadows: true,
        scale: 0.6,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    allowTouchMove: false,
});

const swiperNews24 = new Swiper('.swiper_news24', {
    slidesPerView: 6,
    freeMode: true,
    loop: true,
});

const swiperVideo = new Swiper('.swiper_video', {
    slidesPerView: 5,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


class Tabs {
    constructor (name) {
        this.items = Array.from(document.querySelectorAll(`input[name="${name}"]`));

        this.handleClickTabs()
    }

    handleClickTabs() {
        this.items.forEach(item => {
            item.addEventListener('click', () => {
                Array.from(document.querySelectorAll(`div[data-name="${item.getAttribute('name')}"]`)).forEach(container => {
                    container.style.display = "none";
                });
    
                document.querySelector(`div[data-tabs="${item.getAttribute('id')}"]`).style.display = 'block'
            })
        });
    }
}

new Tabs('news-region')