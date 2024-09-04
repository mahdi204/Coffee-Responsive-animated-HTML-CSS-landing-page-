class Dashboard {
    constructor(toggleButtonId, navListSelector) {
        this.toggleButton = document.getElementById(toggleButtonId);
        this.navList = document.querySelector(navListSelector);
        this.init();
    }

    init() {
        this.toggleButton.addEventListener('click', () => {
            this.toggleNav();
        });
    }

    toggleNav() {
        this.navList.classList.toggle('open');
    }
}

const dashboard = new Dashboard('menuIcon', '.navlist');
