var database;
var gS=0;
var form,game,ps,player;
var allPlayers;
var backGround;

function preload(){
 backGround=loadImage('images/bg1.jpg')
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  //gS = 10;
  game.getState();
  //console.log(gS);
  game.start();
}

function draw() {
  background(backGround);

  if(ps === 3){
    game.updateState(1);
  }
}