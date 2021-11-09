const submit = document.querySelector('input[type=submit]');
const imagesDiv = document.querySelector('#imageContainer')

const form = document.querySelector('form');
let imageUrl = document.querySelector('#image_url');
let topText = document.querySelector('#topText')
let bottomText = document.querySelector("#bottomText")

//let divImg = document.createElement('div');

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    if (imageUrl.value !== '') {
        let eachDiv = document.createElement('div');
        eachDiv.classList.add('medDiv');
        imagesDiv.append(eachDiv)

        let newImage = document.createElement('img')
        newImage.setAttribute('id', 'imageStyle');
        newImage.src = imageUrl.value;
        eachDiv.append(newImage);

        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        
        div1.innerText = topText.value
        div2.innerText = bottomText.value;
        
        div1.classList.add('topText')
        div2.classList.add('bottomText')

        eachDiv.append(div1)
        eachDiv.append(div2)
        eachDiv.append(deleteButton)
            
        imageUrl.value = '';
        topText.value = '';
        bottomText.value = '';

        deleteButton.addEventListener('click', function(e){
            console.log('you removed', this.parentElement)
            this.parentElement.remove();
        })

    }
}