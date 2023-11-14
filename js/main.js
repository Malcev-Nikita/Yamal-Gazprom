Fancybox.bind("[data-fancybox]", {});


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