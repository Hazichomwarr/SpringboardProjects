const text_input = document.querySelector('input[type="text"]');

const form = document.querySelector('form');

const lastSection = document.querySelector('#lastSection')


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (text_input.value === "") {
        alert("You can't submit an empty field")
    } else {
        const newP = document.createElement("p");
        newP.innerText = text_input.value
        newP.classList.add('newTask')
        
        const newButton = document.createElement('button')
        newButton.innerText = 'remove';
        newButton.classList.add('remove');
    
        lastSection.appendChild(newP);
        newP.appendChild(newButton);
    }
    text_input.value = "";
})



document.querySelector("#lastSection").addEventListener('click', function(e){
    if (e.target.tagName.toLowerCase() === 'p'){
        e.target.classList.toggle('toggle')
    } else if (e.target.tagName.toLowerCase() === 'button') {
        e.target.parentNode.remove();
    }
})