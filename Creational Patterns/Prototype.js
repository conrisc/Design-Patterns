const Log = require("./../Log");

function eachProperty(fn,obj) {
    args = [].slice.call(arguments,1);
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            fn(p, args);
        }
    }
}

let Customer = (function() {
    function Customer(name,surname,position) {
        this.name = name;
        this.surname = surname;
        this.position = position;
    }
    Customer.clone = function(cust) { //static function
        let newCust = new Customer();
        eachProperty((p,arr) => {arr[1][p] = arr[0][p]},cust,newCust);
        return newCust;
    } 
    Customer.prototype.getInfo = function() {
        return `It's ${this.name} ${this.surname}, he is working as a ${this.position}.`;
    }
    return Customer;
})();

function main() {
    let c1 = new Customer("John","Smith","Operation Manager");
    let c2 = Customer.clone(c1);
    Log.add(c1.getInfo());
    Log.add(c2.getInfo());
    c2.name = "Stephen";
    Log.add(c1.getInfo());    
    Log.add(c2.getInfo());    
    Log.show();
}
    
main();