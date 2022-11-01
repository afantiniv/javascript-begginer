// Your code here:

function sign(){
    let i = 99;
    while(i > 0){
        console.log(i + " bottles of milk on the wall, " + i + " bottles of milk." );
        i--;
        if(i > 0){
            console.log("Take one down and pass it around, " + i + " bottles of milk on the wall.")
        } else {
            console.log("Take one down and pass it around, no more bottles of milk on the wall.")
        }
    }
    console.log("No more bottles of milk on the wall, no more bottles of milk.");
    console.log("Go to the store and buy some more, 99 bottles of milk on the wall.")
}

sign();
