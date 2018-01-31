function Map(rows,columns) {
    this.rows=rows;
    this.columns=columns;
}

Map.ID="map";
Map.ROW_CLASS=Map.ID+"_row";
Map.COL_CLASS=Map.ROW_CLASS+"_col";
Map.prototype.createArray=function () {
    this.array=new Array(this.rows);
    for(var i=0;i<this.rows;i++)
        this.array[i]=new Array(this.columns);
};
Map.prototype.array=Map.prototype.createArray();
Map.prototype.rows=0;
Map.prototype.columns=0;
Map.prototype.div=null;
Map.prototype.draw=function () {
    this.div=document.createElement("div");
    this.div.id=Map.ID;
    for(var i in this.array){
        var row=document.createElement("div");
        row.className=Map.ROW_CLASS;
        for(var j in this.array[i]){
            var col=document.createElement("div");
            col.className=Map.COL_CLASS;
            row.appendChild(col);
        }
        this.div.appendChild(row);
    }
    document.body.appendChild(this.div);
};
