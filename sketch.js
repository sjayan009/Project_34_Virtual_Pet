var dog, dog_IMG, happyDog, happyDog_IMG, database, foodS, foodStock;

function preload()
{
  dog_IMG = loadImage("images/dogImg.png");
  happy_IMG = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
   dog = createSprite(250,275,50,50);
   dog.addImage("dog image", dog_IMG);
   dog.scale = 0.20;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(color(46,139,87));

  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage("happyDog", happy_IMG);
  }



  drawSprites();
  //add styles here

}

//Function to read values from DB
function readStock(data)
{
  foodS = data.val;
}

//Function to wrtie values in DB
function writeStock(x)
{
  if(x<=0)
  {
    x = 0;
  }
  
  else
  {
    x = x - 1;
  }

  database.ref('/').update({
    Food:x
  })
}


