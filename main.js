/*global $*/

var imgindex = 0;
function imgrotation(){
var imgcycle = [
    "https://i.kinja-img.com/gawker-media/image/upload/s--O7VfKDY---/c_scale,f_auto,fl_progressive,q_80,w_800/eqqeisa1dgddjh6qukpl.jpg",
    "http://www.picz.ge/img/s4/1509/28/c/ce11fe314010.jpg",
    "https://wonderfulengineering.com/wp-content/uploads/2014/07/Hi-Tech-Wallpaper-25.jpg"
    ];
    $(".aboutme").html("<img src="+imgcycle[imgindex]+">");
        imgindex= imgindex+1;
        if(imgindex>2){
            imgindex=0;
        }
    
    
};
setInterval(imgrotation,3000);
