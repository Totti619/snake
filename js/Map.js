function Map(rows,columns) {
    this.rows=rows;
    this.columns=columns;
    this.createArray();
}

Map.CLASS="map";
Map.ROW_CLASS=Map.CLASS+"_row";
Map.COL_CLASS=Map.ROW_CLASS+"_col";
Map.prototype.createArray=function () {
    this.array=[];
    for(var i=0;i<this.rows;i++)
        this.array[i]=[];
};
Map.prototype.array=[];
Map.prototype.rows=0;
Map.prototype.columns=0;
Map.prototype.div=null;
Map.prototype.draw=function () {
    this.div=document.createElement("div");
    this.div.className=Map.CLASS;
    var row,col;
    for(var i=0;i<this.rows;i++){
        row=document.createElement("div");
        row.className=Map.ROW_CLASS;
        this.div.append(row);
        for(var j=0;j<this.columns;j++){
            col=document.createElement("div");
            col.className=Map.COL_CLASS;
            row.append(col);
            this.array[i][j]=col;
        }
    }
    document.body.appendChild(this.div);
};
