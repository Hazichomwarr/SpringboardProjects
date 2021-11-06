const text_input = document.querySelector('input[type="text"]');

const form = document.querySelector('form');

const lastSection = document.querySelector('#lastSection')

const newbutton = document.createElement('button');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newP = document.createElement("p");
    newP.innerHTML = `${text_input.value} <button class="remove">Remove</button>`
    lastSection.appendChild(newP);
    newP.classList.add('newTask')
    text_input.value = "";

    newP.addEventListener('click', function(e) {
        e.target.classList.toggle('toggle');
    })
})
