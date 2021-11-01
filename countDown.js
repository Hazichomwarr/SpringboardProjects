// Write a function called countdown that accepts a number as a parameter 
// and every 1000 milliseconds decrements the value and console.logs it. 
// Once the value is 0 it should log “DONE!” and stop.
function countdown(num) {
    return setTimeout(function() {
        while (num > 0){
            console.log(num)
            num--
        } console.log("DONE!") 
    }, 1000)
};

countdown(4);