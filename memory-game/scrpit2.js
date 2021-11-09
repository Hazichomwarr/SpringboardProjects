const globalDiv = document.getElementById('game');

const bigButton = document.createElement('button');
bigButton.innerText = 'Click here to Restart';
let count = 0;

const colors = [
    "red",
    "blue",
    "black",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "black"
];
function shuffle(array) {
    let counter = array.length;
  
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
  
      // Decrease counter by 1
      counter--;
  
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
  
    return array;
}

let shuffledColors = shuffle(colors);

let clickMemory = []
let globalMemory = []

function createDiv(colors) {
    for (let coleur of colors) {
        const newDiv = document.createElement("div");
        newDiv.classList.add(coleur)

        newDiv.addEventListener('click', whenDivClicked);
    

        globalDiv.append(newDiv);
    }
    
}

createDiv(shuffledColors)

function whenDivClicked(e) {
    count++
    e.target.style.background = e.target.classList[0];
    if (!clickMemory.includes(e.target)){
        clickMemory.push(e.target)
    } 
    if (clickMemory.length === 2) {
        if (clickMemory[0].style.background === clickMemory[1].style.background) {
            for (let click of clickMemory){
                //console.log('click', click)
                if (!globalMemory.includes(click)){
                    globalMemory.push(click)
                    //console.log(globalMemory)
                }
            }
            console.log('they match')
            clickMemory = [];
        } else { setTimeout(function() {
            clickMemory[0].style.background = 'white'; 
            clickMemory[1].style.background = 'white';
            clickMemory = [];
        }, 700)
            console.log("they don't match")
        }
    } 
    console.log('globalmemory', globalMemory.length)
    console.log('colors', colors.length)

    if (globalMemory.length === colors.length) { 
        setTimeout (function(){
        alert('good job!')
        alert(`You clicked ${count} times to match 12 colors`)
        let score = Math.round(12/count*100);
        if (score <= 49) {
            alert(`Your memory score ratio is ${score}% below average!`)
        }
         else if (score <= 79) {
            alert(`Your memory score ratio is ${score}% average!`)
        } else if (score > 79) {
            alert(`wow!!! your memory ratio score is ${score}% the best!`)
        }
    },2000)
    }
}