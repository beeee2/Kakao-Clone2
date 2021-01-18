const statusBar = document.querySelector(".status-bar");
const statusBarColumn2 = statusBar.querySelector(".status-bar__clock");
const statusBarClock = statusBarColumn2.querySelector("span");

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    statusBarClock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();