class Game{
  constructor(){}

  getState(){
    database.ref('gameState').on("value",function(data){
      gS = data.val();
      //console.log(gS)
    })
  }

  updateState(state){
    database.ref('/').update({
      gameState : state
    })
  }

  async start(){
    //console.log("check");
    //console.log(gS)
    if(gS === 0){
      player= new Player();
      var playerRef = await database.ref('playercount').once("value");
      if(playerRef.exists()){
        ps = playerRef.val();
        player.getCount();
      }
      form = new Form();
      form.display()
    }
  }
}