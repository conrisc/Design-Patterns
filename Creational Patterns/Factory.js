const Log = require("./../Log");

let Wehicle = (function() {
    function Wehicle() {
        this.sth = "sth";
        Log.add("I've just built a wehicle");                
    }
    Wehicle.prototype.go = function() {
        Log.add("I'm going");
    }
    return Wehicle;
})();

let Car = (function() {
    function Car() {
        Wehicle.call(this);
        this.name = "I'm a Car";
        Log.add("I've just built a Car");        
    }
    Car.prototype = Object.create(Wehicle.prototype);
    Car.prototype.constructor = Car;
    Car.prototype.openSunroof = function() {
        Log.add("I opened the sunroof");
    }
    Car.prototype.load = function() {
        Log.add("I loaded people");
    }
    return Car;
})();

let Truck = (function() {
    function Truck() {
        Wehicle.call(this);
        this.name = "I'm a Truck";
        Log.add("I've just built a Truck");
    }
    Truck.prototype = Object.create(Wehicle.prototype);
    Truck.prototype.constructor = Truck;
    Truck.prototype.load = function() {
        Log.add("I loaded a commodity");
    }
    return Truck;
})();

let CarFactory = (function(){
    return {
        createWehicle: function() {
            return new Car(); 
        }
    };
})();


let TruckFactory = (function(){
    return {
        createWehicle: function() {
            return new Truck(); 
        }
    };
})();

function getWehicleFactory(thingsToTransport) {
    switch(thingsToTransport) {
        case "People": return CarFactory;
        default: return TruckFactory;
    }
}

function main() {
    let factory = getWehicleFactory("cigarettes");
    let wehicle = factory.createWehicle();
    Log.show();
}

main();


