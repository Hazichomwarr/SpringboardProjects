// Write a function called randomGame that selects a random number 
// between 0 and 1 every 1000 milliseconds and each time 
// that a random number is picked, add 1 to a counter. If the number 
// is greater than .75, stop the timer and console.log the number of tries it took 
// before we found a number greater than .75.

function randomGame() {
    setTimeout(function(){
        let counter = 0
        const limit = 0.75
        while (true){
            var rand = Math.random()
            //console.log(`Rand = ${rand} here`)
            if (rand > limit) {
                console.log(`oops rand(${rand}) > ${limit} so should break.`)
                break
            } console.log(`counter before increment: ${counter}`)
            counter += 1
            console.log(`counter AFTER increment: ${counter}`)
        }console.log(counter)
    }, 1000)
}

randomGame();