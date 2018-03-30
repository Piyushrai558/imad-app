console.log('Loaded!');
//change the text
var element=document.getElementById('main-text')
element.innerHTML='piyush rai'
//image property
var img= document.getElementById('insta')
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function(){
  var Interval=setInterval(moveRight,50);
};

