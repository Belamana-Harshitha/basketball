let homePointsEl = document.querySelector('.home-points');
let guestPointsEl= document.querySelector('.guest-points');
let head=document.querySelector('h3');
let homePoints=0;
let guestPoints=0;
function score1(){
    homePoints+=1;
    homePointsEl.innerHTML=homePoints;
}
function score2(){
    homePoints+=2;
    homePointsEl.innerHTML=homePoints;
    
}
function score3(){
    homePoints+=3;
    homePointsEl.innerHTML=homePoints;
}
function scoreg1(){
    guestPoints+=1;
    guestPointsEl.innerHTML=guestPoints;
}
function scoreg2(){
    guestPoints+=2;
    guestPointsEl.innerHTML=guestPoints;
    
}
function scoreg3(){
    guestPoints+=3;
    guestPointsEl.innerHTML=guestPoints;
}
function reset(){
    homePoints=0;
    guestPoints=0;
    guestPointsEl.innerHTML=guestPoints;
    homePointsEl.innerHTML=homePoints;
}