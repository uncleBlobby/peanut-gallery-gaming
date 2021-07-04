//navbar control

let homeBTN = document.getElementById("homeBTN");
let episodesBTN = document.getElementById("episodesBTN");
let contactBTN = document.getElementById("contactBTN");

let home = document.getElementById('home');
let episodes = document.getElementById('episodes');
let contact = document.getElementById('contact');

const hideAll = () => {
    home.style.display = "none";
    episodes.style.display = "none";
    contact.style.display = "none";
};

const openPage = (page) => {
    page.style.display = "block";
};

homeBTN.addEventListener("click", function() {
    hideAll();
    openPage(home);
});

episodesBTN.addEventListener("click", function() {
    hideAll();
    openPage(episodes);
});

contactBTN.addEventListener("click", function() {
    hideAll();
    openPage(contact);
});