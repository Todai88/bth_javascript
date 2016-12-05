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

    var selected = function(sender){
            sender.classList.toggle('selected');
    };
    var circulate = function(nl){
            for (var i = 0; i < nl.length; i++){
                nl[i].classList.toggle('circle');
            }
    }

    var manipulate_size = function(nl, enlarge){
            var pix = (enlarge) ? 10 : -10;
            for(var i = 0; i < nl.length; i++){
                var el    = document.getElementById(nl[i].id),
                    style = window.getComputedStyle(el),
                    width  = parseInt(style.width),
                    height   = parseInt(style.height);
                el.style.width = width + pix + "px";
                el.style.height  = height  + pix + "px";
            }

    };
    var change_color = function(nl){

        for(var i = 0; i < nl.length; i++){
            var el    = document.getElementById(nl[i].id),
                color = style.backgroundColor;
            console.log(color);
            switch(color){
                case 'green':
                    el.style.backgroundColor = 'yellow';
                    break;
                case 'yellow':
                    el.style.backgroundColor = 'red';
                    break;

            }
        }
    }
    box1.addEventListener("click", function(){
        selected(this);
    });

    document.addEventListener("keydown", function(event) {
		var key;
		// Gets what key was pressed as number
		key = event.keyCode || event.which;
		console.log(key + " was pressed");
        var myNodeList = document.getElementsByClassName('selected');

        switch (key){
            case 69:
                circulate(myNodeList);
                break;

            case 81:
                manipulate_size(myNodeList, true);
                break;

            case 82:
                change_color(myNodeList);
                break;

            case 87:
                manipulate_size(myNodeList, false);
                break;
        }



	});

})();
