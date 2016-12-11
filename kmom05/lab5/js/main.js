(function(){
    'use strict';

    var box1 = document.getElementById("box1");
    var style = getComputedStyle(box1); // jshint ignore:line
    var cont = document.getElementById("content");
    var boxCount = 1;
    console.log("******* Screen *******");
    console.log("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
    console.log("**********************\n");
    console.log("*******   Box   *******");
    console.log("Width: " + box1.clientWidth + ", Height: " + box1.clientHeight);
    console.log("Top: " + style.getPropertyValue("top") + ", Left: " + style.getPropertyValue("left"));

    function resize(){
        console.log("Window resized!");
        console.log("********* WINDOW SIZE *********");
        console.log("Width: " + window.innerWidth);
        console.log("Height " + window.innerHeight);
    }

    window.onresize = resize;

    var dbl = function(sender){
        sender.classList.add('animateSize');
        sender.style.width = "2px";
        sender.style.height = "2px";
        console.log(sender);
        window.setTimeout(function(){cont.removeChild(sender);}, 2000);
    };

    var selected = function(sender){
            sender.classList.toggle('selected');
    };
    var circulate = function(nl){
            for (var i = 0; i < nl.length; i++){
                nl[i].classList.toggle('circle');
            }
    };

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
                color = el.style.backgroundColor;
            console.log(color);
            console.log(el);
            switch(color){
                case "":
                    case "green":
                        el.style.backgroundColor = 'yellow';
                        break;
                    case "yellow":
                        el.style.backgroundColor = 'red';
                        break;
                    case "red":
                        el.style.backgroundColor = 'blue';
                        break;
                    case "blue":
                        el.style.backgroundColor = 'green';
                        break;
            }
        }
    };
    var manipulate_z = function (nl, increase){
        var z = (increase) ? 1 : -1;

        for(var i = 0; i < nl.length; i++){
            console.log("Element " + nl[i]);
            var el = document.getElementById(nl[i].id),
                curr_z  = style.zIndex;
            console.log("Has z-index: " + curr_z);
            el.style.zIndex = parseInt(curr_z) + z;
            console.log("It now has z-index " + el.style.zIndex);
        }
    };
    var remove_object = function(){
        var list = document.querySelectorAll('.selected');
        console.log(list);
        for(var i = 0; i < list.length; i++){
            cont.removeChild(list[i]);
        }
    };
    var duplicate = function(){
        var list = document.querySelectorAll('.selected');
        console.log(list);
        for(var i = 0; i < list.length; i++){
            boxCount++;
            var randTop = (((Math.random() * 10) + 1) > 5) ? Math.floor((Math.random() * 320) + 1) + "px" : Math.floor((Math.random() * -420) + 1) + "px";
            var randLeft = (((Math.random() * 10) + 1) > 5) ? Math.floor((Math.random() * 550) + 1) + "px" : Math.floor((Math.random() * -550) + 1) + "px";
            console.log("New top: " + randTop);
            console.log("New left: " + randLeft);
            var dup = list[i].cloneNode(true);
            dup.id = "box" + boxCount;
            dup.style.top = randTop;
            dup.style.left = randLeft;
            dup.style.zIndex = list[i].zIndex + 1;
            dup.addEventListener("click", function(){
                selected(this);
            });
            dup.addEventListener("dblclick", function(){
                dbl(this);
            });
            cont.appendChild(dup);
            console.log("Duplicated!");
            console.log(dup);
        }

    };

    var move = function(nl, direct){

            // var list = document.querySelectorAll('.selected');
            // console.log(list);
            for(var i = 0; i < nl.length; i++){

            var el      = document.getElementById(nl[i].id),
                left    = (el.style.left === "") ? 0 : parseInt(el.style.left),
                top     = (el.style.top  === "") ? 0 : parseInt(el.style.top);
                console.log(el);
                if (direct == 'left' || direct == 'right'){
                    (direct == 'left') ? el.style.left = (left - 10) + "px" : el.style.left = (left + 10) + "px"; // jshint ignore:line
                } else {
                    (direct == 'up')   ? el.style.top  = (top -  10) + "px" : el.style.top  = (top  + 10) + "px"; // jshint ignore:line
                }
            }

    };

    var mark_all = function(){

        var list = document.querySelectorAll('.box');
        console.log(list);
        var count = 0;
        for(var i = 0; i < list.length; i++){
            list[i].classList.add('selected');
            count++;
        }
        console.log(count + " items were selected!");
    };

    var unmark_all = function(){

        var list = document.querySelectorAll('.box');
        console.log(list);

        for(var i = 0; i < list.length; i++){
            list[i].classList.remove('selected');
        }

    };
    var create_random = function(){
            boxCount++;
            var color = Math.floor((Math.random() * 4) + 1);
            var circle =  Math.floor((Math.random() * 2) + 1);
            console.log(color);
            var randTop = (((Math.random() * 10) + 1) > 5) ? Math.floor((Math.random() * 320) + 1) + "px" : Math.floor((Math.random() * -420) + 1) + "px";
            var randLeft = (((Math.random() * 10) + 1) > 5) ? Math.floor((Math.random() * 550) + 1) + "px" : Math.floor((Math.random() * -550) + 1) + "px";
            console.log("New top: " + randTop);
            console.log("New left: " + randLeft);
            var dup = box1.cloneNode(true);
            dup.id = "box" + boxCount;
            dup.style.top = randTop;
            dup.style.left = randLeft;
            dup.style.zIndex = box1.zIndex + 1;
            if (circle == 1){
                dup.classList.add('circle');
            }
            if (color == 1){
                dup.style.backgroundColor = 'green';
            }
            else if (color == 2) {
                dup.style.backgroundColor = 'yellow';
            }
            else if (color == 3){
                dup.style.backgroundColor = 'red';
            }
            else {
                dup.style.backgroundColor = 'blue';
                    }
            dup.addEventListener("click", function(){
                selected(this);
            });
            dup.addEventListener("dblclick", function(){
                dbl(this);
            });
            cont.appendChild(dup);
            console.log("Duplicated!");
            console.log(dup);


    };

    var find_size = function() {
        //var d = document.getElementById("demo").innerHTML;


        console.log('width: ' + window.innerWidth);
        console.log('middle is: ' + parseInt(window.innerWidth / 2));
        return parseInt(window.innerWidth / 2);

    };

    var rotate = function(el, curr_pos, left){
        console.log(el);
        el.classList.add('rotation');
        //(left) ? el.style.marginLeft = "-100%" : el.style.marginLeft = "110%";
        el.style.transform = 'rotateZ(360deg)';
        el.style.left = (left) ? ("-" + (window.innerWidth + 400)) + "px" : window.innerWidth + "px";
    };

    var unique_animation = function(){

        var list = document.querySelectorAll('.selected');
        console.log(list);

        var horizontal_middle = find_size();

        for(var i = 0; i < list.length; i++){

            var el      =  document.getElementById(list[i].id),
                offset  = Math.floor(el.getBoundingClientRect().left),
                width   = (el.style.width === "") ? 200 : el.style.width,
                mid_pos = Math.floor(width / 2) + offset;
            console.log(offset);
            console.log(mid_pos);
            if (mid_pos < horizontal_middle){
                console.log("Left of mid");
                rotate(el, mid_pos, true);
            } else {
                console.log("Right of mid");
                rotate(el, mid_pos, false);
            }

            window.setTimeout(function(){cont.removeChild(el);}, 1500);
        }
    };

    var randomize = function(nl, iteration){
        if(iteration == 4){
            for (var j = 0; j < nl.length; j++){
                var el      =  document.getElementById(nl[j].id); // jshint ignore:line
                el.classList.remove('randomize');
            }
            return true;
        } else {
        var list = document.querySelectorAll('.box');
        console.log(list);
                for(var i = 0; i < nl.length; i++){
                var color = Math.floor((Math.random() * 4) + 1);
                var circle =  Math.floor((Math.random() * 2) + 1);
                console.log(color);
                console.log(circle);
                var randTop = (((Math.random() * 10) + 1) > 5) ? Math.floor((Math.random() * 320) + 1) + "px" : Math.floor((Math.random() * -420) + 1) + "px";
                var randLeft = (((Math.random() * 10) + 1) > 5) ? Math.floor((Math.random() * 550) + 1) + "px" : Math.floor((Math.random() * -550) + 1) + "px";
                var el      =  document.getElementById(nl[i].id); // jshint ignore:line
                el.classList.add('randomize');
                    console.log(el);
                    if (circle == 1){
                        el.classList.add('circle');
                    } else{
                        el.classList.remove('circle');
                    }
                    if (color == 1){
                        el.style.backgroundColor = 'green';
                    }
                    else if (color == 2) {
                        el.style.backgroundColor = 'yellow';
                    }
                    else if (color == 3){
                        el.style.backgroundColor = 'red';
                    }
                    else {
                        el.style.backgroundColor = 'blue';
                        }
                el.style.left = randLeft;
                el.style.top  = randTop;
                //el.classList.remove('randomize');
                }
            }
            iteration += 1;
            window.setTimeout(function(){randomize(nl, iteration);}, 200);
    };

    box1.addEventListener("click", function(){
        selected(this);
    });

    box1.addEventListener("dblclick", function(){
        dbl(this);
    });

    document.addEventListener("keydown", function(event) {
		var key;
		// Gets what key was pressed as number
		key = event.keyCode || event.which;
		console.log(key + " was pressed");
        var myNodeList = document.getElementsByClassName('selected');

        switch (key){

            case 37:
                move(myNodeList, "left");
                break;

            case 38:
                move(myNodeList, "up");
                break;

            case 39:
                move(myNodeList, "right");
                break;

            case 40:
                move(myNodeList, "down");
                break;

            case 65:
                manipulate_z(myNodeList, false);
                break;

            case 68:
                randomize(myNodeList, 0);
                break;

            case 69:
                circulate(myNodeList);
                break;

            case 73:
                mark_all();
                break;

            case 80:
                create_random();
                break;

            case 81:
                manipulate_size(myNodeList, true);
                break;

            case 82:
                change_color(myNodeList);
                break;

            case 83:
                manipulate_z(myNodeList, true);
                break;

            case 84:
                duplicate();
                break;

            case 85:
                unmark_all();
                break;

            case 87:
                manipulate_size(myNodeList, false);
                break;

            case 89:
                remove_object();
                break;

            case 190:
                unique_animation();
                break;
        }



	});

})();
