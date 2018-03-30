//counter code
var button= document.getElementById("counter");
var counter=0;
button.onclick = function () {
    //make request at the counter endpoint
    
    //capture the respond and store in the variable 
    
    //render the variable in correct spam
    counter = counter +1;
    var span= document.getElementById('count')
    span.innerHTMl = counter.toString();
};

