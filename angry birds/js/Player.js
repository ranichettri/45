class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = 0;
    }

    updateCount(count){
      database.ref('/').update({
          playercount: count
      })
    }
     
    getCount(){
        database.ref('playercount').on("value",(data)=>{
            ps=data.val();
        })
    }

    update(){
       database.ref("players/player"+this.index).set({
           name:this.name,
           distance:this.distance
       }) 
    }

    getPlayerInfo(){
        database.ref('players').on("value",(data)=>{
            allPlayers= data.val();
        })
    }
}