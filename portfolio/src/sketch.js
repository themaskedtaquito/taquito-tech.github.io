/* globals $ */

export default function (p) {
  // Methods -------------------------------------------------------------------
  p.setOnReady = function(cb) {
    onReady = cb;
  };

  p.pushProps = function (_props) {
    props = _props;
    p.loop();
  }

  // Private members -----------------------------------------------------------
  let onReady = () => {};
  let props = {};
  let psystem = [];
  let ps;

  // Private classes -----------------------------------------------------------
  class PSystem {
    constructor(x,y){
      this.particles = [];
      this.x = x;
      this.y = y;
      this.col = p.color(17,170,55);
    }
    
    run(){
      p.push();
      p.translate(this.x,this.y);
      const spawn = p.random(1,8);
      if(spawn>7){
        this.particles.push(new Particle(p.random(-5,5),0,this.col));
      }
    
      for(let i=this.particles.length-1;i>0;i--){
        let particle = this.particles[i];
        particle.update();
      //  p.checkOutOfCanvas();
        particle.display();
        
        if(particle.isDone){
          this.particles.splice(i,1);
        }
      }
      p.pop();
    }
  }
  class Particle{
    constructor(x,y,c){
      this.pos = p.createVector(x,y);
      this.vel = p.createVector(p.random(-0.2,0.2),p.random(8,12));
      this.acc = p.createVector();
      this.rad = 4;
      
      this.col = c;
      this.lifespan = 5.0;
      this.lifeDecrease = p.random(0.01);
      this.isDone = false;
    }
    
    update(){
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      
      this.vel.mult(0.9999);
      
      this.lifespan -= this.lifeDecrease;
      if(this.lifespan < 0){
        this.lifespan = 0;
        this.isDone = true;
      }   
    }
    
    display(){
      p.push();
      p.noStroke();
      p.translate(this.pos.x,this.pos.y);
      p.fill(this.col);
      p.rect(0,0,this.rad*2,this.rad*2);
      
      p.pop();
    }
    
    checkOutOfCanvas(){
      if(this.pos.x < 0 || this.pos.x > p.width){
        this.isDone = true;
      }
      
      if(this.pos.y< 0 || this.pos.y > p.height){
        this.isDone = true;
      }
    }
  }

  p.preload = function() {}

  p.setup = function() {

    p.createCanvas(200, 3500);
    p.colorMode(p.RGB, 255, 255, 255, 1.0);
    p.pixelDensity(1);
    p.frameRate(15);
    p.noLoop();
    onReady();
  }

  // draw() --------------------------------------------------------------------
  p.draw = function() {

    if (props.psystem.length==0) {
      ps = new PSystem(100,0);
      psystem.push(ps);
      props.psystem.push(ps);
    }
    else if (psystem.length==1) {
      p.background(255);

      ps.run();

      };
  }
}
