const bars=document.querySelector('.fa-bars');
const sidebar=document.querySelector('.sidebar');
const xmark = document.querySelector('.fa-xmark');

bars.addEventListener('click',()=>{
    sidebar.classList.toggle('showSidebar');
});

xmark.addEventListener('click',()=>{
    sidebar.classList.remove('showSidebar');
});