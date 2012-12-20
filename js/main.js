function lget(key){
    return JSON.parse(localStorage.getItem(key));
};

function lset(key, object){
    localStorage.setItem(key, JSON.stringify(object));
};


var nr = 1967;

//~ console.log(screen.width);
//~ console.log(screen.height);

var hight = window.innerHeight - 30; 
var width = hight/0.75

$("#picture img").attr("height", hight);
$("#picture img").attr("width", width);

$.getJSON("demo/init.json", function(data) {
    lset( "data", data );
});

for (picture in lget("data")) { 
    console.log(picture)
};

$("body").keypress(function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    $("#tipp").text(code);
    $("#picture img").attr("src", "/photos/r4/DSC0"+nr+".JPG");
    nr = nr+1;
    if(code == 13) { alert("hi");};
    if(code == 37) { nr = nr - 2;}
});
