
const form = document.querySelector('form');
const gifContainer = document.querySelector('#gifContainer');
const removeButton = document.querySelector('#remove');
const apiKey = "CuiPmPku46miYcR6LT84ZWpDtouDZLtB";

const imag = document.querySelector('img');

form.addEventListener('submit', displayGif)

async function displayGif(e) {
    e.preventDefault();
    try {
        let search_input = document.querySelector('#searchKey');
        let datas = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search_input.value.trim()}&api_key=CuiPmPku46miYcR6LT84ZWpDtouDZLtB&limit=20`);
        let array = datas.data.data
        search_input.value = '';
        let randNumb = Math.floor(Math.random()* array.length)
        //console.log(array, randNumb);
        
        let url = array[randNumb].images.downsized.url;
        //console.log(url);

        let img = document.createElement('img');
        img.src = `${url}`;
        gifContainer.appendChild(img);

        removeButton.addEventListener('click', function () {
            gifContainer.innerHTML = '';
        })
    } 
    catch (e) {
        console.log(`something went wrong: ${e}`)
    }
}


