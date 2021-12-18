function PrintOdd(){
    var i = 1;
    while(i <= 20){
        console.log(i);
        i++;
    }
}
PrintOdd();

function Decrease(){
    var i = 100;
    while(i > 0){
        if(i % 3 == 0){
            console.log(i);
        }
        i--;
    }
}
Decrease();

function PrintSequence(){
    for(var i = 4; i >= -3.5; i -= 1.5){
        var seq = "";
        seq = seq + i;
        console.log(seq);
    }
}
PrintSequence();

function Sigma(){
    var sum = 0;
    var log = "";
    for(var i = 1; i <= 100; i++){
        if(i != 100){
            sum = sum += i;
            log = log + i + " + ";
        } else {
            sum = sum += i;
            log = log + i;
        }        
    }
    console.log(log)
    console.log(sum)
}
Sigma();

function Factorial(){
    var product = 1;
    var log = "";
    for(var i = 1; i <= 12; i++){
        if(i != 12){
            product = product *= i;
            log = log + i + " * ";
        } else {
            product = product *= i;
            log = log + i;
        }
    }
    console.log(log);
    console.log(product);
}
Factorial();