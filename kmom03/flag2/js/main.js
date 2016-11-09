(function(){
    'use strict';

    //var myContent = document.getElementById('content');

    //myContent.innerHTML = '<h3>This is a template!</h3>';

    console.log('Sandbox is ready!');

})();

function click_parse(e){
    console.log('I am ' + e.target.id);
    draw(e.target.id);
}

function draw(sender){
    var target;
    switch(sender){
        case 'Swe_click':
            target = document.getElementById('flag_container_swe');
            target.innerHTML = '<div class="flag" id="sverige" onClick="click_flag_parse(event)"></div>';
            break;
        case 'Jpn_click':
            target = document.getElementById('flag_container_japan');
            target.innerHTML = '<div class="flag" id="japan" onClick="click_flag_parse(event)"> <div id="circle"> </div></div>';
            break;
        case 'Chl_click':
            target = document.getElementById('flag_container_chile');
            target.innerHTML = '<div class="flag" id="chile" onClick="click_flag_parse(event)"> <div class="flex-row-container"> <div class="flex-row-item" id="top-row-item"> <div class="flex-col-container"> <div class="flex-col-item" id="left-col-item">' +
                                '<div id="star-five">  </div> </div> <div class="flex-col-item" id="right-col-item"> </div> </div> </div> <div class="flex-row-item" id="btm-row-item"> </div> </div> </div>';
            break;
        case 'Col_click':
            target = document.getElementById('flag_container_colombia');
            target.innerHTML = '<div id="colombia" onClick="click_flag_parse(event)"><div class="flag"> <div class="flex-row-container"> <div class="flex-row-item" id="colombia1"> </div> <div class="flex-row-item" id="colombia2"> </div>' +
                               '<div class="flex-row-item" id="colombia3"> </div> </div> </div></div>';
            break;
    }
}

function click_flag_parse(e){
    console.log('Flag has been clicked. ID: ' + e.target.id);
    if (e.target.id.includes("colombia")){
        hide('colombia');
    } else if (e.target.id.includes('star') || e.target.id.includes('left') || e.target.id.includes('right') || e.target.id.includes('btm')){
        hide('chile');
    } else if (e.target.id.includes('circle')) {
        hide('japan');
    } else {
        hide(e.target.id);
    }
}

function hide(sender){
    var target;
    switch(sender){
        case 'sverige':
            target = document.getElementById('flag_container_swe');
            target.innerHTML = '';
            break;
        case 'japan':
            target = document.getElementById('flag_container_japan');
            target.innerHTML = '';
            break;
        case 'chile':
            target = document.getElementById('flag_container_chile');
            target.innerHTML = '';
            break;
        case 'colombia':
            target = document.getElementById('flag_container_colombia');
            target.innerHTML ='';
            break;

    }
}
 /* Dessa är här ENDAST för att validationen klagar
 och ingen kunde svara på hur jag får jshint att skippa dessa funktioner.

 Eftersom de används från min html (onclick) så är de definierade i denna fil,
 men används inte i någon av dess funktioner.
 */
click_parse(undefined);
click_flag_parse(undefined); //
