Fancybox.bind("[data-fancybox]", {});

const swiperProjects = new Swiper('.swiper_projects', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperNews24 = new Swiper('.swiper_news24', {
    slidesPerView: 6,
    freeMode: true,
    // spaceBetween: 20,
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