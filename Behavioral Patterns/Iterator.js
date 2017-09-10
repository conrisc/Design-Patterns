const Log = require("./../Log");

let Iterator = (function() {
    function Iterator(items) {
        this.items = items;
        this.index = 0;
    }
    Iterator.prototype.first = function() {
        this.reset();
        return this.next();
    }
    Iterator.prototype.reset = function() {
        this.index = 0;
    }
    Iterator.prototype.next = function() {
        return this.items[this.index++];
    }
    Iterator.prototype.hasNext = function() {
        return this.index<this.items.length;
    }
    Iterator.prototype.each = function(fn) {
        for (let item = this.first();this.hasNext();item = this.next()) {
            fn(item);
        }
        this.reset();
    }
    return Iterator;
})();


function main() {
    let arr = [1,15,"super",5,true,"dawno temu w trawie",69,0];
    let iter = new Iterator(arr);
    iter.each((item) => Log.add(item+15));
    Log.show();
}
    
main();