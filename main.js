/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 
 let redLights = document.getElementsByClassName("red")
 let blueLights = document.getElementsByClassName("blue")

function treeLightsOn() {
    for (let i = 0; i < redLights.length; i++) {       
        redLights[i].classList.toggle("lights-on")
    }
    for (let j = 0; j < blueLights.length; j++) {
        setTimeout( function() {
            blueLights[j].classList.toggle("lights-on");
        }, 800)
    }
}

setInterval(treeLightsOn, 800)