var word = []; // means it is an array // how to add strings
var img = [];
var hands = [];
var imghand = [];
var groupBounce = 0.25;
var level = 0;
var vid;

var x = [],
  y = [],
  segNum = 25,
  segLength = 18;



function preload() {
  handsS = loadImage("handS2.png");
  hand7 = loadImage("hand4.png");
  bkrnd0 = loadImage("yellowswatch.png");
  bkrnd1 = loadImage("dyedfab.png");
  stitch = loadImage("x.png");
  bstitch = loadImage("bstitch.png");
  needle = loadImage("needle.png");
  icon = loadImage("icon.png");
  title = loadImage("title.png");
  enter = loadImage("enter.png");
  button = loadImage("button.png");
  bkrnd2 = loadImage("burlap.png");
  bkrnd3 = loadImage("yellowswatch_2.png");
  bkrnd4 = loadImage("dyedfab.jpg");
  loopstitch = loadImage("loopstitch.png");
  jayne = loadImage("jayne.png");
  frame = loadImage("xframe.png");
}

function setup() {
  createCanvas(1024, 760);
  image(stitch, 50, 20);

  vid = createVideo('gradcrit1.mp4');
  vid.loop();
  vid.hide();


  for (var i = 0; i < 16; i++) { // adding one to preexisting i
    var array = ["word", str(i), ".png"];
    var myImg = join(array, "");
    img[i] = loadImage(myImg);
    print(myImg);
  }

  // WHAT IS i++? What is it doing??  
  for (var i = 0; i < 16; i++) { // adding one to preexisting i
    word.push(new Word());
  }

  for (var i = 0; i < 6; i++) { // adding one to preexisting i
    var array = ["hand", str(i), ".png"];
    var myImg = join(array, "");
    imghand[i] = loadImage(myImg);
    print(myImg);
  }
  hands.push(new Hand(width / 3, height / 5, 40, 0, 0.55));
  hands.push(new Hand(width / 2, height / 5, 50, 1, 0.66));
  hands.push(new Hand(width / 3.5, height / 4, 70, 2, 0.6));
  hands.push(new Hand(width / 8, height / 3, 50, 3, 0.5));
  hands.push(new Hand(width / 4, height / 3, 65, 4, 0.55));
  hands.push(new Hand(width / 2.2, height / 2.5, 60, 5, 0.8));
  //ix, iy, ibounce, imyPic, isize

}

function draw() {
  if (level == 1) {
    background(bkrnd3);
    image(icon, 950, 680);

    function touchMoved() {

      for (var i = 0; i < segNum; i++) {
        x[i] = 0;
        y[i] = 0;

        image(needle, mouseX - 3, mouseY - 15);
        dragSegment(0, mouseX, mouseY);
        for (var i = 0; i < x.length - 1; i++) {
          dragSegment(i + 1, x[i], y[i]);
        }
      }

      function dragSegment(i, xin, yin) {
        var dx = xin - x[i];
        var dy = yin - y[i];
        var angle = atan2(dy, dx);
        x[i] = xin - cos(angle) * segLength;
        y[i] = yin - sin(angle) * segLength;
        segment(x[i], y[i], angle);
      }

      function segment(x, y, a) {
        push();
        translate(x, y);
        rotate(a);
        image(bstitch, 0, 0, segLength, 0);
        pop();
      }
    }
    if ((touchStarted) && mouseX > 950 && mouseY > 550) {
      level = 2;
    }
  }
  if (level == 5) {

    image(icon, 0, 0);

    if ((touchStarted) && mouseX > 40 && mouseY > 10) {
      image(loopstitch, mouseX - 50, mouseY - 20);
    } else if ((touchStarted) && mouseX < 40 && mouseY < 40) {
      level = 2;
    }
  }

  if (level == 4) {
    background(bkrnd4, 1024, 760);
    image(vid, 30, 100);
    image(icon, 10, 680);
    image (frame, 5,75);


    for (var i = 0; i < segNum; i++) {
      x[i] = 0;
      y[i] = 0;

      image(needle, mouseX - 3, mouseY - 15);
      dragSegment(0, mouseX, mouseY);
      for (var i = 0; i < x.length - 1; i++) {
        dragSegment(i + 1, x[i], y[i]);
      }
    }

    function dragSegment(i, xin, yin) {
      var dx = xin - x[i];
      var dy = yin - y[i];
      var angle = atan2(dy, dx);
      x[i] = xin - cos(angle) * segLength;
      y[i] = yin - sin(angle) * segLength;
      segment(x[i], y[i], angle);
    }

    function segment(x, y, a) {
      push();
      translate(x, y);
      rotate(a);
      image(bstitch, 0, 0, segLength, 0);
      pop();
    }
    if ((touchStarted) && mouseX < 50 && mouseY > 700) {
      background(bkrnd1);
      background(bkrnd2);
      level = 5;
    }
  }

  if (level == 3) {
    //  background(bkrnd1);
    image(icon, 0, 0);
    // image(stitch, mouseX - 20, mouseY - 20);
    if ((touchStarted) && mouseX > 40 && mouseY > 10) {
      image(stitch, mouseX - 20, mouseY - 20);
    } else if ((touchStarted) && mouseX < 40 && mouseY < 40) {
      //  background(bkrnd2);
      level = 4;
    }

  }

  if (level == 0) {
    background(bkrnd0);
    image(title, 150, 200);
    image(jayne, 600, 380);
    image(enter, 850, 660); //MAKE THIS PART WRITTEN!

    function touchMoved() {
      for (var i = 0; i < segNum; i++) {
        x[i] = 0;
        y[i] = 0;

        image(needle, mouseX - 3, mouseY - 15);
        dragSegment(0, mouseX, mouseY);
        for (var i = 0; i < x.length - 1; i++) {
          dragSegment(i + 1, x[i], y[i]);
        }
      }

      function dragSegment(i, xin, yin) {
        var dx = xin - x[i];
        var dy = yin - y[i];
        var angle = atan2(dy, dx);
        x[i] = xin - cos(angle) * segLength;
        y[i] = yin - sin(angle) * segLength;
        segment(x[i], y[i], angle);
      }

      function segment(x, y, a) {
        push();
        translate(x, y);
        rotate(a);
        image(bstitch, 0, 0, segLength, 0);
        pop();
      }

    }
  }
  if (level == 2) {
    background(bkrnd1);
    image(button, 900, 660);




    // NEED THIS EXPLAINED  What is it doing??
    for (var i = 0; i < word.length; i++) {
      word[i].display();
    }



    moveIt();

    for (var i = 0; i < 1; ++i) {
      push();
      translate(width / 3, height / 5);
      translate(0, sin(groupBounce) * 50);
      scale(0.55);
      image(hand7);
    }
    pop();

    push();
    translate(width / 4, height / 15);
    translate(0, sin(groupBounce) * 30);
    rotate(i * radians(10));
    scale(1.02);
    image(handsS);

    pop();

    for (var i = 0; i < hands.length; i++) {
      hands[i].display();
    }

    groupBounce = groupBounce + 0.01;

  }
}
//}
// Creating words? i think?
function Word() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(100, 200);
  this.xspeed = random(-2, 2);
  this.yspeed = random(-2, 2);
  this.oxspeed = this.xspeed;
  this.oyspeed = this.yspeed;
  this.direction = 0.4;
  this.myPic = int(random(img.length));

  this.move = function() {
    this.x += this.xspeed * this.direction;
    this.y += this.yspeed * this.direction;
  };

  // Bounce when touch the edge of the canvas  
  this.turn = function() {
    if (this.x < 0) {
      this.x = 0;
      this.direction = -this.direction;
    } else if (this.y < 0) {
      this.y = 0;
      this.direction = -this.direction;
    } else if (this.x > width - 40) {
      this.x = width - 40;
      this.direction = -this.direction;
    } else if (this.y > height - 40) {
      this.y = height - 40;
      this.direction = -this.direction;
    }
  };


  // Gradually slows down 
  this.slowDown = function() {
    if (this.xspeed > this.oxspeed) {
      this.xspeed -= 0.6;
    } else {
      this.xspeed = this.oxspeed;
    }
    if (this.yspeed > this.oyspeed) {
      this.yspeed -= 0.6;
    } else {
      this.yspeed = this.oyspeed;
    }
  };

  this.display = function() {
    image(img[this.myPic], this.x, this.y, 200, 60);

  };
}

function moveIt() {
  for (var i = 0; i < word.length; i++) {
    word[i].slowDown();
    word[i].turn();
    word[i].move();
  }
}

//////////////////////
function Hand(ix, iy, ibounce, imyPic, isize) {
  this.x = ix;
  this.y = iy;
  this.bounce = ibounce;
  this.myPic = imyPic;
  this.size = isize;
  this.spin = .3;

  this.display = function() {
      if (touchStarted) {
        if (mouseX > this.x && mouseX < this.size * imghand[this.myPic].width + this.x && mouseY > this.y + (sin(groupBounce) * this.bounce) && mouseY < this.size * imghand[this.myPic].height + this.y + (sin(groupBounce) * this.bounce)) {
          this.spin = .5;
        } else this.spin = 0;
      }
      push();
      translate(this.x, this.y + (sin(groupBounce) * this.bounce));
      rotate(this.spin);
      image(imghand[this.myPic], 0, 0, this.size * imghand[this.myPic].width, this.size * imghand[this.myPic].height); // ALTER
      pop();
    }
    // this.spin = function() {
    //   
    // }

}

function moveIt() {
  for (var i = 0; i < word.length; i++) {
    word[i].slowDown();
    word[i].turn();
    word[i].move();
  }
}
//////////////////////////////////


function touchStarted() {

  if (level == 0) {
    if (mouseX > 840 && mouseY > 630) {
      level = 1;
    }
  } else if (level == 2) {
    if (mouseX > 840 && mouseY > 630) {
      background(bkrnd1);
      level = 3;

    }

    //  } else if (level == 2) {
    //    if (mouseX > 840 && mouseY > 630) {
    //     (level == 0);
    // } else {
    // image(stitch, mouseX - 20, mouseY - 20);
  }
}
//}

//} //else if (mouseX <100 && mouseY > 400 && mouseIsPressed == true){
//     level == 0;