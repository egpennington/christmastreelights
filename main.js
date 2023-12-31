/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 
 const redLights = document.getElementsByClassName("red")
 const blueLights = document.getElementsByClassName("blue")
 const delay = 800

function treeLightsOn() {
    for (let i = 0; i < redLights.length; i++) {       
        redLights[i].classList.toggle("lights-on")
    }
    for (let j = 0; j < blueLights.length; j++) {
        setTimeout( function() {
            blueLights[j].classList.toggle("lights-on");
        }, delay)
    }
}

setInterval(treeLightsOn, delay)