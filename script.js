'use strict';
const inputGroups = document.querySelectorAll('.input-group');
const regexPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const validation=(x)=>{
    let submitBtn = x.querySelector('.btn');
    let errorMsg = x.querySelector('.invalid-feedback');
    let email = x.querySelector('input');
    submitBtn.addEventListener('click',()=>{
        errorMsg.classList.toggle('d-block', !email.value || !email.value.match(regexPattern));
        email.classList.toggle('border-danger', !email.value || !email.value.match(regexPattern));
    });
};

inputGroups.forEach(inputGroup =>{
validation(inputGroup);
})