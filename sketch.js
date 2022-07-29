Fotos 1 = loadimage
fotos 2 = loadAnimation 

function preload(){
  loadimage("sea.png");
  loadAnimation (ship-1.png,ship-2.png,ship-3.png,ship-4.png)

}

function setup(){
  createCanvas(400,400);
  spriteName.addImage(seaImg);
}

function draw() {
  background("blue");
 
  if (Sea.x <0) {
    sea.x=sea.width/2;
}