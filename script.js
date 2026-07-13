const cards=[
"A","2","3","4","5","6","7","8","9","10","J","Q","K"
];

function randomCard(){
return cards[Math.floor(Math.random()*cards.length)];
}

function dealCards(){

let player=randomCard();
let computer=randomCard();

document.getElementById("player").innerHTML="Player : "+player;
document.getElementById("computer").innerHTML="Computer : "+computer;

let result="Draw";

if(cards.indexOf(player)>cards.indexOf(computer))
result="Player Wins";

if(cards.indexOf(player)<cards.indexOf(computer))
result="Computer Wins";

document.getElementById("result").innerHTML=result;
}
