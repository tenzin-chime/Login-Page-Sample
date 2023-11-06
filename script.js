const wrapper= document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnlogin-popup');
const icon_Close=document.querySelector(".icon-close");

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

icon_Close.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});