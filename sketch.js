var ss,ssi,e,ei,bg;
function preload(){
    ssi = loadImage("spaceShip.png");
    ei = loadImage("enemies.png");
    bg = loadImage("background.png");
    }

    function setup(){
      createCanvas(600,200);
     
      // creating trex
      trex = createSprite(50,160,20,50);
      trex.addAnimation("running", trex_running);
      edges = createEdgeSprites();
      invisibleground = createSprite(200,199,600,20);
      invisibleground.visible=false;
      //adding scale and position to trex
      trex.scale = 0.5;
      trex.x = 50;
      ground=createSprite(200,180,600,20);
      ground.addAnimation("ground",groundImage);
    
      ground.x=ground.width/2;
    }


    function draw(){
      //set background color 
      background(220);

      //logging the y position of the trex
      console.log(trex.y);
      rnum=Math.round(random(5,100));
      console.log(rnum);
      //jump when space key is pressed
      if(keyDown("space") && trex.y>165){
        trex.velocityY = -10;
      }
      if (ground.x<0){  
      ground.x=ground.width/2;  
      }
      trex.velocityY = trex.velocityY + 0.5;
      ground.velocityX=-4;
      //stop trex from falling down
      trex.collide(invisibleground);
       spawnclouds();
      drawSprites();
    }
    function spawnclouds(){
     cloud=createSprite(400,10,120,10); 
     //cloud.addAnimation("cloud",cloudImage); 
    }