class Cube {
  constructor (r, g, b, a, s) {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    
    this.r = r;
    this.g = g;
    this.b = b;
    
    this.alpha = a;

    this.time = 0.0;

    this.color = [
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
  
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
  
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
  
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
  
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
  
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
        this.r, this.g, this.b, this.alpha,
    ];
    this.SIZE = s;
    this.basePosition = [
        -this.SIZE,  this.SIZE, -this.SIZE,
         this.SIZE,  this.SIZE, -this.SIZE,
         this.SIZE, -this.SIZE, -this.SIZE,
         this.SIZE, -this.SIZE, -this.SIZE,
        -this.SIZE, -this.SIZE, -this.SIZE,
        -this.SIZE,  this.SIZE, -this.SIZE,
  
         this.SIZE, -this.SIZE,  this.SIZE,
         this.SIZE,  this.SIZE,  this.SIZE,
        -this.SIZE,  this.SIZE,  this.SIZE,
        -this.SIZE,  this.SIZE,  this.SIZE,
        -this.SIZE, -this.SIZE,  this.SIZE,
         this.SIZE, -this.SIZE,  this.SIZE,
  
        -this.SIZE, -this.SIZE,  this.SIZE,
        -this.SIZE,  this.SIZE,  this.SIZE,
        -this.SIZE,  this.SIZE, -this.SIZE,
        -this.SIZE,  this.SIZE, -this.SIZE,
        -this.SIZE, -this.SIZE, -this.SIZE,
        -this.SIZE, -this.SIZE,  this.SIZE,
        
         this.SIZE,  this.SIZE, -this.SIZE, 
         this.SIZE,  this.SIZE,  this.SIZE, 
         this.SIZE, -this.SIZE,  this.SIZE, 
         this.SIZE, -this.SIZE,  this.SIZE, 
         this.SIZE, -this.SIZE, -this.SIZE, 
         this.SIZE,  this.SIZE, -this.SIZE,
   
        -this.SIZE,  this.SIZE,  this.SIZE,
         this.SIZE,  this.SIZE,  this.SIZE,
         this.SIZE,  this.SIZE, -this.SIZE,
         this.SIZE,  this.SIZE, -this.SIZE,
        -this.SIZE,  this.SIZE, -this.SIZE,
        -this.SIZE,  this.SIZE,  this.SIZE,
        
         this.SIZE, -this.SIZE, -this.SIZE, 
         this.SIZE, -this.SIZE,  this.SIZE, 
        -this.SIZE, -this.SIZE,  this.SIZE, 
        -this.SIZE, -this.SIZE,  this.SIZE, 
        -this.SIZE, -this.SIZE, -this.SIZE, 
         this.SIZE, -this.SIZE, -this.SIZE, 
    ];
    this.position = this.basePosition;
    this.normal = this.position;  

    this.stm = new Matrix();
    this.rm = new Matrix();
    this.srtm = new Matrix();

  }
  setPosition(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
  }
  update () {
    this.time += 0.1;
    this.position = [];
    this.normal = [];

    this.stm.initialize();
//    this.rm.initialize();
//    this.srtm.initialize();

//    this.rm.rotateX(this.time);
    this.stm.scale(this.SIZE * 0.1, this.SIZE * 0.1, this.SIZE * 0.1);
    this.stm.translate(this.x, this.y, this.z);

//    this.srtm.m = Matrix.multiply(this.rm.m, this.stm.m);
//    this.position = this.srtm.multiplyVector(this.basePosition);

    this.position = this.stm.multiplyVector(this.basePosition);
      
    for (var v = 0; v < 12 * 9; v += 9) {
      var vec1 = [ this.position[3+v]-this.position[0+v], this.position[4+v]-this.position[1+v], this.position[5+v]-this.position[2+v] ];
      var vec2 = [ this.position[6+v]-this.position[0+v], this.position[7+v]-this.position[1+v], this.position[8+v]-this.position[2+v] ];
      this.normal.push(vec1[1] * vec2[2] - vec1[2] * vec2[1]);
      this.normal.push(vec1[2] * vec2[0] - vec1[0] * vec2[2]);
      this.normal.push(vec1[0] * vec2[1] - vec1[1] * vec2[0]);
  
      vec1 = [ this.position[0+v]-this.position[6+v], this.position[1+v]-this.position[7+v], this.position[2+v]-this.position[8+v] ];
      vec2 = [ this.position[3+v]-this.position[6+v], this.position[4+v]-this.position[7+v], this.position[5+v]-this.position[8+v] ];
      this.normal.push(vec1[1] * vec2[2] - vec1[2] * vec2[1]);
      this.normal.push(vec1[2] * vec2[0] - vec1[0] * vec2[2]);
      this.normal.push(vec1[0] * vec2[1] - vec1[1] * vec2[0]);
  
      vec1 = [ this.position[6+v]-this.position[3+v], this.position[7+v]-this.position[4+v], this.position[8+v]-this.position[5+v] ];
      vec2 = [ this.position[0+v]-this.position[3+v], this.position[1+v]-this.position[4+v], this.position[2+v]-this.position[5+v] ];
      this.normal.push(vec1[1] * vec2[2] - vec1[2] * vec2[1]);
      this.normal.push(vec1[2] * vec2[0] - vec1[0] * vec2[2]);
      this.normal.push(vec1[0] * vec2[1] - vec1[1] * vec2[0]);
   }

   this.color = [
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,

    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,

    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,

    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,

    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,

    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    this.r, this.g, this.b, this.alpha,
    ];
    
  }

};