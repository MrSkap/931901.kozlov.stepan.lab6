var images = document.querySelectorAll('img');
var leftPart = document.querySelector('.greenPart');
var rightPart = document.querySelector('.bluePart');
var leftButton = document.getElementById('onlyLeft');
var rightButton = document.getElementById('onlyRight');
var bothButton = document.getElementById('leftAndRight');

leftButton.addEventListener("click", function(){
    images[0].style.visibility = 'visible';
    leftPart.style.maxWidth = '90%';
    images[1].style.visibility = 'hidden';
    rightPart.style.maxWidth = '10%';
}, false);
rightButton.addEventListener("click", function(){
    images[0].style.visibility = 'hidden';
    leftPart.style.maxWidth = '10%';
    images[1].style.visibility = 'visible';
    rightPart.style.maxWidth = '90%';
}, false);
bothButton.addEventListener("click", function(){
    images[0].style.visibility = 'visible';
    leftPart.style.maxWidth = '50%';
    images[1].style.visibility = 'visible';
    rightPart.style.maxWidth = '50%';
}, false);