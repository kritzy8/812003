/*var switchtheme = document.getElementById("switchtheme");

switchtheme.onclick = function () {
    document.body.classList.toggle("light-theme");
};
*/
let lightMode = localStorage.getItem('lightMode');
const lightModeToggle = document.querySelector('#switchtheme');

const enableLightMode = () => {
    document.body.classList.add('light-theme');
    localStorage.setItem('lightMode','enable');
};

const disableLightMode = () => {
    document.body.classList.remove('light-theme');
    localStorage.setItem('lightMode',null);
};

if (lightMode === 'enable') {
    enableLightMode();
}

lightModeToggle.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightMode');
    if (lightMode !== 'enable') {
        enableLightMode();
    } else {
        disableLightMode();
    }
});