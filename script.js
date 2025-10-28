const themeSwitch = document.querySelector('#themeSwitch');
const body = document.body;

// damit die seite direkt dunkel lädt
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeSwitch.textContent = '🌞 Hell';
}

//function zum wechsel zwischen hell und dunkel
function toggleTheme() {

    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
    themeSwitch.textContent = '🌞 Hell';
    localStorage.setItem('theme', 'dark');
  } else {
    themeSwitch.textContent = '🌙 Dunkel';
    localStorage.setItem('theme', 'light');
  }
}

themeSwitch.addEventListener('click', toggleTheme);

let box = document.getElementById('resp_menu');
let btnOpen = document.getElementById('menuToggle');
let btnClose = document.getElementById('menuClose');

function openClosedRespmenu() {
  if (box.classList.contains('closed_menu')) {
    box.classList.remove('closed_menu');
    box.setAttribute('aria-hidden', 'false');
  } else {
    box.classList.add('closed_menu');
    box.setAttribute('aria-hidden', 'true');
  }
}


btnOpen.onclick = openClosedRespmenu;
btnClose.onclick = openClosedRespmenu;

