const MAIN_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

const formData =
{
    email: "",
    message: ""
};


document.addEventListener('DOMContentLoaded', () => {
    const zip = localStorage.getItem(MAIN_KEY);
    if (!zip) return;
    const data = JSON.parse(zip) || {};
    formData.email = data.email || '';
    formData.message = data.message || '';

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
    
})

form.addEventListener('input', (event) => {
    const keyData = event.target.name;

    if (keyData === 'email' || keyData === 'message') {
        formData[keyData] = event.target.value;
        localStorage.setItem(MAIN_KEY, JSON.stringify(formData));
    }
    
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formData.email.trim() === '' || formData.message.trim() === '') {
        return alert('Fill please all fields');
    } 
    console.log(formData);
    
    localStorage.removeItem(MAIN_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
})
