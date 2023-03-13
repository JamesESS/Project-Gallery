const hobbyDetails = document.getElementById("hobbypagedetails");
const hobbyDetailsToggle = document.getElementById("hobbypagedetailstoggle");
const projectGalleryDetailsToggle = document.getElementById("projectgallerydetailstoggle");
const projectGalleryDetails = document.getElementById("projectgallerydetails");
const movieDatabaseDetailsToggle = document.getElementById("moviedatabasedetailstoggle");
const movieDatabaseDetails = document.getElementById("moviedatabasedetails");
const webPageDetailsToggle = document.getElementById("facwebpagesdetailstoggle");
const webPageDetails = document.getElementById("facwebpagedetails");
const gameDetailsToggle = document.getElementById("facgamedetailstoggle");
const gameDetails = document.getElementById("facgamedetails");


/* Toggle to show/hide details about project */
hobbyDetailsToggle.addEventListener("click",(Event) => {
    hobbyDetails.classList.toggle("hidden");
    /* Change button text based on visibility of extra text */
    if (hobbyDetails.matches(".hidden")) {
        hobbyDetailsToggle.innerText = "Show more";
    }
    else {
        hobbyDetailsToggle.innerText = "Show less";
        changeTabHobby(event, "hobbypagetext")
    }
})
projectGalleryDetailsToggle.addEventListener("click",(Event) => {
    projectGalleryDetails.classList.toggle("hidden");
    if (projectGalleryDetails.matches(".hidden")) {
        projectGalleryDetailsToggle.innerText = "Show more";
    }
    else {
        projectGalleryDetailsToggle.innerText = "Show less";
        changeTabGallery(event, "projectgallerytext")
    }
})
movieDatabaseDetailsToggle.addEventListener("click",(Event) => {
    movieDatabaseDetails.classList.toggle("hidden");
    if (movieDatabaseDetails.matches(".hidden")) {
        movieDatabaseDetailsToggle.innerText = "Show more";
    }
    else {
        movieDatabaseDetailsToggle.innerText = "Show less";
        changeTabMovie(event, "moviedatabasetext")
    }
})
webPageDetailsToggle.addEventListener("click",(Event) => {
    webPageDetails.classList.toggle("hidden");
    if (webPageDetails.matches(".hidden")) {
        webPageDetailsToggle.innerText = "Show more";
    }
    else {
        webPageDetailsToggle.innerText = "Show less";
        changeTabWebPage(event, "facwebpagetext")
    }
})
gameDetailsToggle.addEventListener("click",(Event) => {
    gameDetails.classList.toggle("hidden");
    if (gameDetails.matches(".hidden")) {
        gameDetailsToggle.innerText = "Show more";
    }
    else {
        gameDetailsToggle.innerText = "Show less";
        changeTabGame(event, "facgametext")
    }
})

/* Function to change text displayed dependent on active tab */
function changeTabHobby(evt, tabname) {
    var cardtext, tablinks;
    cardtext = document.getElementsByClassName("cardtexthobby");
    /* Hide all tabs */
    for (i = 0; i < cardtext.length; i++) {
      cardtext[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinkshobby");
    /* reset active tab */
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    /* set current tabs to active and text conent visible */
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
  }

function changeTabGallery(evt, tabname) {
    var cardtext, tablinks;
    cardtext = document.getElementsByClassName("cardtextgallery");
    /* Hide all tabs */
    for (i = 0; i < cardtext.length; i++) {
      cardtext[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksgallery");
    /* reset active tab */
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    /* set current tabs to active and text conent visible */
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}

function changeTabMovie(evt, tabname) {
    var cardtext, tablinks;
    cardtext = document.getElementsByClassName("cardtextmovie");
    /* Hide all tabs */
    for (i = 0; i < cardtext.length; i++) {
      cardtext[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksmovie");
    /* reset active tab */
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    /* set current tabs to active and text conent visible */
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}
function changeTabWebPage(evt, tabname) {
    var cardtext, tablinks;
    cardtext = document.getElementsByClassName("cardtextwebpage");
    /* Hide all tabs */
    for (i = 0; i < cardtext.length; i++) {
      cardtext[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinkswebpage");
    /* reset active tab */
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    /* set current tabs to active and text conent visible */
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}
function changeTabGame(evt, tabname) {
    var cardtext, tablinks;
    cardtext = document.getElementsByClassName("cardtextgame");
    /* Hide all tabs */
    for (i = 0; i < cardtext.length; i++) {
      cardtext[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksgame");
    /* reset active tab */
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    /* set current tabs to active and text conent visible */
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}
