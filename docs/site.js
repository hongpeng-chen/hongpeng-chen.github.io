const themeButton=document.querySelector('.theme-toggle');
function setTheme(dark){document.body.classList.toggle('dark',dark);themeButton.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');}
try{setTheme(localStorage.getItem('hc-theme')==='dark');}catch{}
themeButton.addEventListener('click',()=>{const dark=!document.body.classList.contains('dark');setTheme(dark);try{localStorage.setItem('hc-theme',dark?'dark':'light');}catch{}});
const buttons=[...document.querySelectorAll('[data-filter]')];
buttons.forEach(b=>b.addEventListener('click',()=>{buttons.forEach(other=>{other.classList.toggle('active',other===b);other.setAttribute('aria-pressed',String(other===b));});document.querySelectorAll('[data-status]').forEach(p=>{p.hidden=b.dataset.filter!=='All'&&p.dataset.status!==b.dataset.filter;});}));
const menuButton=document.querySelector('.menu-toggle');
const mainNav=document.getElementById('main-nav');
function closeMenu(){mainNav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));mainNav.classList.toggle('is-open',open);});
mainNav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
