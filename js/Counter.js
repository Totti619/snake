function Counter(count) {
    this.count=count;
    this.update();
}
Counter.prototype.count=0;
Counter.CLASS="counter";
Counter.prototype.increment=function () {
    this.count++;
};
Counter.prototype.draw=function () {

};
