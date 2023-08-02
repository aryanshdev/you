function Play(){
    var randomNumber1 = Math.floor(Math.random * 6)+1;
var images = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var randomImage1 = Math.floor(Math.random() * 6);
var randomImage2 = Math.floor(Math.random() * 6);
document.querySelector(".img1").setAttribute("src", "images\\"+images[randomImage1]);
document.querySelector(".img2").setAttribute("src", "images\\"+images[randomImage2]);
if(randomImage1 > randomImage2){
    document.querySelector(".container h1").textContent = "Player 1 Won";
}
else if(randomImage1 < randomImage2){
    document.querySelector(".container h1").textContent = "Player 2 Won";
}
else{
    document.querySelector(".container h1").textContent = "Draw";
}
}