const section = document.querySelector('section');
const buttons = document.querySelectorAll('button');

section.style.textAlign = 'center';

for (let button of buttons) {
    button.style.margin = '5px';
    button.style.padding = '20px';
}

section.addEventListener('click', function(e){
    document.body.style.backgroundColor = e.target.id
})