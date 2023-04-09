let random=Math.floor(Math.random(1)*10);
let numguess=0;
let guess=0;
let lives=3;

let cat1=document.querySelector("#cat1");
cat1.style.visibility = "hidden";

let cat2=document.querySelector("#cat2");
cat2.style.visibility = "hidden";

console.log(random);


document.getElementById("enter").onclick = function(){
    numguess = document.getElementById("in").value;
    console.log(numguess);
   
    
    guess++;
   if(numguess==random){
    document.getElementById("prompt").innerHTML = `Yay! You got it after ${guess} guess/guesses<br><br>`+"The nuber is ";
    document.getElementById("number").innerHTML = random;
    cat1.style.visibility = null;
    cat2.style.visibility = null;
    document.getElementById("cat1").src="catvibing.gif";
    document.getElementById("cat2").src="catparty.gif";
    

}
else if(numguess>random){
    document.getElementById("prompt").innerHTML = "Lower";

    if(lives<=1 ){
        document.getElementById("lives").innerHTML=`❤0`;
        document.getElementById("prompt").innerHTML = `GAME OVER!<br><br>`+"The number is ";
    document.getElementById("number").innerHTML = random;
    cat1.style.visibility = null;
    cat2.style.visibility = null;
    document.getElementById("cat1").src="sadcat1.gif";
    document.getElementById("cat2").src="sadcat2.gif";
    }
    else{
        lives--;
        document.getElementById("lives").innerHTML=`❤${lives}`;
    }
    }
    
   
else if(numguess<random){
    document.getElementById("prompt").innerHTML = "Higher";
    if(lives<=1 ){
        document.getElementById("lives").innerHTML=`❤0`;
        document.getElementById("prompt").innerHTML = `GAME OVER! <br><br>`+"The number is ";
    document.getElementById("number").innerHTML = random;
    cat1.style.visibility = null;
    cat2.style.visibility = null;
    document.getElementById("cat1").src="sadcat1.gif";
    document.getElementById("cat2").src="Sad Cat.jpg";
    }
    else{
        lives--;
        document.getElementById("lives").innerHTML=`❤${lives}`;
    }
    }
}


    

