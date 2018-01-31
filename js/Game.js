function Game(mapRows,mapColumns){
    this.map=new Map(mapRows,mapColumns);
    this.map.draw();
}
Game.prototype.map=null;