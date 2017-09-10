const Log = require("./../Log");


let Line = (function() {
    function Line(x1,y1,x2,y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    Line.prototype.draw = function() {
        return `I'm drawing a line from point (${this.x1},${this.y1}) to (${this.x2},${this.y2})`;
    }
    return Line;
})();

let Rectangle = (function() {
    function Rectangle(x1,y1,w,h) {
        this.x1 = x1;
        this.y1 = y1;
        this.w = w;
        this.h = h;
    }
    Rectangle.prototype.draw = function() {
        return `I'm drawing a rectangle from point (${this.x1},${this.y1}), width: ${this.w}, height: ${this.h}`;
    }
    return Rectangle;
})();

let LineAdapter = (function() {
    function LineAdapter(line) {
        this.x1 = line.x1;
        this.y1 = line.y1;
        this.x2 = line.x2;
        this.y2 = line.y2;
    }
    LineAdapter.prototype.draw = function() {
        return `I'm drawing a line from point (${this.x1},${this.y1}) to (${this.x2},${this.y2})`;
    }
    return LineAdapter;
})();

let RectangleAdapter = (function() {
    function RectangleAdapter(rectangle) {
        this.x1 = rectangle.x1;
        this.y1 = rectangle.y1;
        this.x2 = rectangle.x1+rectangle.w;
        this.y2 = rectangle.y1+rectangle.h;
    }
    RectangleAdapter.prototype.draw = function() {
        return `I'm drawing a rectangle from point (${this.x1},${this.y1}) to (${this.x2},${this.y2})`;
    }
    return RectangleAdapter;
})();


function main() {
    let la = new LineAdapter(new Line(5,13,7,21));
    let ra = new RectangleAdapter(new Rectangle(10,20,100,50));
    Log.add(la.draw());
    Log.add(ra.draw());
    Log.show();
}
    
main();