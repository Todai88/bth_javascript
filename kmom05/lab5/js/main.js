(function(){
    'use strict';

    var box1 = document.getElementById("box1");
    var style = getComputedStyle(box1);
    console.log("******* Screen *******");
    console.log("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
    console.log("**********************\n");
    console.log("*******   Box   *******");
    console.log("Width: " + box1.clientWidth + ", Height: " + box1.clientHeight);
    console.log("Top: " + style.getPropertyValue("top") + ", Left: " + style.getPropertyValue("left"));
})();
