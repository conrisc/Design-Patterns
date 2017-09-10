const Log = require("./../Log");

let Singleton = (function() {
    let instance;

    function create() {
        let object = new Object("I'm the instance");
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) instance = create();
            return instance;
        }
    }
})();


function main() {
    let s1 = Singleton.getInstance();
    let s2 = Singleton.getInstance();
    (s1==s2) ? Log.add("The same") : Log.add("Not the same");
    Log.show();
}
    
main();