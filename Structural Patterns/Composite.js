const Log = require("./../Log");

let File = (function() {
    function File(name) {
        this.name = name;
    }
    File.prototype.ls = function(padding) {
        let pad = 0;
        if (padding) pad = padding;
        let spaces = "   ".repeat(pad);
        Log.add(spaces+this.name)
    }
    return File;
})();

let Directory = (function() {
    function Directory(name) {
        this.name = name;
        this.included = [];
    }
    Directory.prototype.add = function(item) {
        this.included.push(item);
    }
    Directory.prototype.ls = function(padding) {
        let pad = 0;
        if (padding) pad = padding;
        let spaces = "";
        spaces = "   ".repeat(pad);
        Log.add(spaces+"#"+this.name);
        this.included.forEach((item) => item.ls(pad+1));
    }
    return Directory;
})();

function main() {
    let home = new Directory("Home");
    let documents = new Directory("Documents");
    let pictures = new Directory("Pictures");
    let music = new Directory("Music");
    let video = new Directory("Video");    
    home.add(documents);
    home.add(pictures);
    home.add(music);
    home.add(video);
    home.add(new File(".ssh"))
    home.add(new File("conkyrc"))
    home.add(new File("FILE-01.cap"))
    music.add(new File("Somewhere.mp3"))
    music.add(new File("Over.mp3"))
    music.add(new File("Something - Awesome.mp3"))
    music.add(new File("I like - Tomatoes.mp3"))
    music.add(new File("It's my life.mp3"))
    pictures.add(new File("tak.jpg"));
    pictures.add(new File("beach.jpg"));
    pictures.add(new File("window.jpg"));
    documents.add(new File("CV.pdf"));
    documents.add(new File("portfolio.doc"));
    documents.add(new File("todo.txt"));
    video.add(new File("funny.mp4"));
    video.add(new File("Predator.mp4"));
    video.add(new File("Star Wars.mp4"));
    let awolnation = new Directory("Awolnation");
    music.add(awolnation);
    awolnation.add(new File("Sail.mp3"));
    awolnation.add(new File("Kill your heroes.mp3"));
    awolnation.add(new File("Orange.mp3"));
    home.ls();
    Log.show();
}
    
main();