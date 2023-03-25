const itemmaincontainer = docunment.queryselectorALL('.maincontainer');
const bigcircle = document.queryselectorALL('.bigcircle');
const bigcircletext = document.queryselectorALL('.bigcircletext');
const connector1 = document.queryselectorALL('.connector1');
const connector2 = document.queryselectorALL('.connector2');
const smallcircle = document.queryselectorALL('.smallcircle');
const smallcircletext = document.queryselectorALL('.smallcircletext');

var ang = 0;
for (let i=0;i< itemmaincontainer.length; i++) {
    itemmaincontainer[i].style.transformorigin = "bottom";
    itemmaincontainer[i].style.transformorigin = "translate(-50%, -100%) rotateZ(" + ang +"deg)";
    bigcircle[i].style.filter = "hue-rotate(" + ang + "deg)";
    connector1[i].style.filter = "hue-rotate(" + ang + "deg)";
    connector2[i].style.filter = "hue-rotate(" + ang + "deg)";
    smallcircle[i].style.filter = "hue-rotate(" + ang + "deg)";

    ang=ang+(360 / (itemmaincontainer.length));
}
 
var angtext = 0;
for (let j=0; j< smallcircletext.length; j++) {
    smallcircletext[j].style.transformorigin = "center";
    smallcircletext[j].style.transform = "rotateZ(-" + angtext + "deg)";

    bigcircle[j].style.transformorigin = "center";
    bigcircle[j].style.transform = "rotateZ(-" + angtext + "deg)";
       angtext = angtext +(360 / (itemmaincontainer.length));
}