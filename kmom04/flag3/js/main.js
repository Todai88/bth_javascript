(function(){
    'use strict';

    //var myContent = document.getElementById('content');

    //myContent.innerHTML = '<h3>This is a template!</h3>';

    console.log('Sandbox is ready!');
    var swe = document.getElementById("Swe_click");
    var jap = document.getElementById("Jpn_click");
    var chi = document.getElementById("Chl_click");
    var col = document.getElementById("Col_click");
    swe.addEventListener('click', function(e){click_parse(e);}, false);
    jap.addEventListener('click', function(e){click_parse(e);}, false);
    chi.addEventListener('click', function(e){click_parse(e);}, false);
    col.addEventListener('click', function(e){click_parse(e);}, false);
})();

function click_parse(e){
    console.log('I am ' + e.target.id);
    draw(e.target.id);
}

function draw(sender){
    var Flag = {
        flag_name : {value: ''},
        body : {value: ''},
        init : function(flag, content){
            return Object.create(Flag, {flag_name: {value : flag},
                                        body : {value : content}
                                    });
        },
        draw : function(){
            this.flag_name.innerHTML = this.body;
            this.flag_name.addEventListener("click", function () {
                this.innerHTML = '';
            });
        }
    };
    switch(sender){
        case 'Swe_click':
            var sweden = Flag.init(document.getElementById('flag_container_swe'), '<div class="flag" id="sverige"></div>');
            sweden.draw();
            break;
        case 'Jpn_click':
            var japan = Flag.init(document.getElementById('flag_container_japan'), '<div class="flag" id="japan"> <div id="circle"> </div></div>');
            japan.draw();
            break;
        case 'Chl_click':
            var chile = Flag.init(document.getElementById('flag_container_chile'),
                                                          '<div class="flag" id="chile">' +
                                                          '<div class="flex-row-container"> <div class="flex-row-item" id="top-row-item">' +
                                                          '<div class="flex-col-container"> <div class="flex-col-item" id="left-col-item">' +
                                                          '<div id="star-five">  </div> </div> <div class="flex-col-item" id="right-col-item">' +
                                                          '</div> </div> </div> <div class="flex-row-item" id="btm-row-item"> </div> </div> </div>');
            chile.draw();
            break;
        case 'Col_click':
            var colombia = Flag.init(document.getElementById('flag_container_colombia'),
                                     '<div id="colombia"><div class="flag"> <div class="flex-row-container">'+
                                     '<div class="flex-row-item" id="colombia1"> </div> <div class="flex-row-item" id="colombia2"> </div>' +
                                     '<div class="flex-row-item" id="colombia3"> </div> </div> </div></div>');
            colombia.draw();
            break;
     }
}
