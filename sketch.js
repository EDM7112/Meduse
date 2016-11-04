var fr = 30
var compteur = 0;

var couleurR = 1;
var couleurB = 0;

var r = 200;
var g = 0;
var b = 0;

var setupB = 0;
var setupR = 0;

function preload(  ) {

}

function setup() {
        createCanvas(windowWidth, windowHeight);
        colorMode(RGB);
        background(255,255,250);
        frameRate(fr);
        setupB = 100+random(155);//variation de bleu
        setupR = 100+random(155);// variation de rouge
  
}

function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
        background(255,255,255);
}

function draw() {

}

function mouseMoved()
{
         
       
         // Chaque fois par tirage au sort (), nouvelle aléatoire
        // numéros sont choisis pour une nouvelle ellipse. - pour une forme plus ronde
        var x = (-1,1) + mouseX;
        var y = (-1,1) + mouseY;
   

        // dessine une ellipse
        noStroke();
        if(compteur%5==0)
        {
          if(couleurR == 1)
          {
            couleurR = 0;
            couleurB = 1;
            r=0;
            g=0;
            b=setupB;
          }
          else if(couleurB == 1)
          {
            couleurR = 1;
            couleurB = 0;
            r=setupR;
            g=0;
            b=0;
          }

        }

        fill(r,g,b);
        compteur++;
        ellipse(x,y,50+sin(compteur/10)*10,50+cos(compteur/10)*10);
}

function keyPressed()
{
  if (keyCode == ENTER)
    {
      background(255,255,255);
      setupB = 100+random(155);
      setupR = 100+random(155);
    }
}