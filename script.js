// @ts-nocheck
const input = document.getElementById('myInput');
        
input.addEventListener('focus', () => {
    input.placeholder = '';
});

input.addEventListener('blur', () => {
    if (input.value === '') {
        input.placeholder = 'Enter text here';
    }
});