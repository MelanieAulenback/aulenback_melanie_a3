var menu = document.getElementById('menu')
var vid3 = document.getElementById("vid3");
var vid2 = document.getElementById("vid2");
var vid1 = document.getElementById("vid1");
var currVid = 2;

function toggleMenu() {
    menu.classList.toggle('hidden')
}

function toggleSongsLeftS() {
    if (currVid == 2) {
        vid1.style.display = "inline-block";
        vid2.style.display = "none";
        vid3.style.display = "none";
        currVid = 1;
    }
    else if (currVid ==1) {
        vid1.style.display = "none";
        vid2.style.display = "none";
        vid3.style.display = "inline-block";
        currVid = 3;
    }
    else {
        vid1.style.display = "none";
        vid2.style.display = "inline-block";
        vid3.style.display = "none";
        currVid = 2;
    }
}

function toggleSongsRightS() {
    if (currVid == 2) {
        vid1.style.display = "none";
        vid2.style.display = "none";
        vid3.style.display = "inline-block";
        currVid = 3;
    }
    else if (currVid ==1) {
        vid1.style.display = "none";
        vid2.style.display = "inline-block";
        vid3.style.display = "none";
        currVid = 2;
    }
    else {
        vid1.style.display = "inline-block";
        vid2.style.display = "none";
        vid3.style.display = "none";
        currVid = 1;
    }
}

function toggleSongsLeftA() {
    if (currVid == 5) {
        vid4.style.display = "inline-block";
        vid5.style.display = "none";
        vid6.style.display = "none";
        currVid = 4;
    }
    else if (currVid ==4) {
        vid4.style.display = "none";
        vid5.style.display = "none";
        vid6.style.display = "inline-block";
        currVid = 6;
    }
    else {
        vid4.style.display = "none";
        vid5.style.display = "inline-block";
        vid6.style.display = "none";
        currVid = 5;
    }
}

function toggleSongsRightA() {
    if (currVid == 5) {
        vid4.style.display = "none";
        vid5.style.display = "none";
        vid6.style.display = "inline-block";
        currVid = 6;
    }
    else if (currVid ==4) {
        vid4.style.display = "none";
        vid5.style.display = "inline-block";
        vid6.style.display = "none";
        currVid = 5;
    }
    else {
        vid4.style.display = "inline-block";
        vid5.style.display = "none";
        vid6.style.display = "none";
        currVid = 4;
    }
}

function toggleSongsLeftM() {
    if (currVid == 8) {
        vid7.style.display = "none";
        vid8.style.display = "inline-block";
        currVid = 7;
    }
    else {
        vid8.style.display = "none";
        vid7.style.display = "inline-block";
        currVid = 8;
    }
}
function toggleSongsRightM() {
    if (currVid == 8) {
        vid7.style.display = "none";
        vid8.style.display = "inline-block";
        currVid = 7;
    }
    else {
        vid8.style.display = "none";
        vid7.style.display = "inline-block";
        currVid = 8;
    }
}