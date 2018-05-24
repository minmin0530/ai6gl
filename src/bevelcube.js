class BevelCube {
  constructor () {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    
    this.time = 0.0;

    this.color = [];

    for (let l = 0; l < 16 * 6; ++l) {
      this.color.push(0.5);
      this.color.push(0.5);
      this.color.push(0.5);
      this.color.push(1.0);
    }
    for (let l = 0; l < 6 * 6; ++l) {
      this.color.push(1.0);
      this.color.push(0.0);
      this.color.push(0.0);
      this.color.push(0.5);
    }

    const SIZE = 3.0;
    const BEVEL = 0.5;
    this.basePosition = [
      //vertex
       SIZE,         SIZE +BEVEL,  SIZE,
       SIZE,         SIZE,         SIZE +BEVEL,
       SIZE +BEVEL,  SIZE,         SIZE,

       SIZE,         SIZE,         -SIZE -BEVEL,
       SIZE,         SIZE +BEVEL,  -SIZE,
       SIZE +BEVEL,  SIZE,         -SIZE,
       
       -SIZE,         SIZE,         SIZE +BEVEL,
       -SIZE,         SIZE +BEVEL,  SIZE,
       -SIZE -BEVEL,  SIZE,         SIZE,

       -SIZE,         SIZE +BEVEL,  -SIZE,
       -SIZE,         SIZE,         -SIZE -BEVEL,
       -SIZE -BEVEL,  SIZE,         -SIZE,

       SIZE,         -SIZE,         SIZE +BEVEL,
       SIZE,         -SIZE -BEVEL,  SIZE,
       SIZE +BEVEL,  -SIZE,         SIZE,

       SIZE,         -SIZE -BEVEL,  -SIZE,
       SIZE,         -SIZE,         -SIZE -BEVEL,
       SIZE +BEVEL,  -SIZE,         -SIZE,
       
       -SIZE,        -SIZE -BEVEL,  SIZE,
       -SIZE,        -SIZE,         SIZE +BEVEL,
       -SIZE -BEVEL, -SIZE,         SIZE,

       -SIZE,        -SIZE,         -SIZE -BEVEL,
       -SIZE,        -SIZE -BEVEL,  -SIZE,
       -SIZE -BEVEL, -SIZE,         -SIZE,
      //edge top
      -SIZE,  SIZE,        -SIZE -BEVEL,
       SIZE,  SIZE +BEVEL, -SIZE,
       SIZE,  SIZE,        -SIZE -BEVEL,
      -SIZE,  SIZE,        -SIZE -BEVEL,
      -SIZE,  SIZE +BEVEL, -SIZE,
       SIZE,  SIZE +BEVEL, -SIZE,

       SIZE +BEVEL,  SIZE,        -SIZE,
       SIZE,         SIZE +BEVEL,  SIZE,
       SIZE +BEVEL,  SIZE,         SIZE,
       SIZE +BEVEL,  SIZE,        -SIZE,
       SIZE,         SIZE +BEVEL, -SIZE,
       SIZE,         SIZE +BEVEL,  SIZE,

       SIZE,  SIZE +BEVEL,  SIZE,
       -SIZE,  SIZE,         SIZE +BEVEL,
       SIZE,  SIZE,         SIZE +BEVEL,
      -SIZE,  SIZE +BEVEL,  SIZE,
      -SIZE,  SIZE,         SIZE +BEVEL,
       SIZE,  SIZE +BEVEL,  SIZE,

      -SIZE,         SIZE +BEVEL,  SIZE,
      -SIZE -BEVEL,  SIZE,        -SIZE,
      -SIZE -BEVEL,  SIZE,         SIZE,
      -SIZE,         SIZE +BEVEL, -SIZE,
      -SIZE -BEVEL,  SIZE,        -SIZE,
      -SIZE,         SIZE +BEVEL,  SIZE,
      //edge side
      SIZE +BEVEL,  SIZE, -SIZE,
      SIZE,        -SIZE, -SIZE -BEVEL,
      SIZE,         SIZE, -SIZE -BEVEL,
      SIZE +BEVEL, -SIZE, -SIZE,
      SIZE,        -SIZE, -SIZE -BEVEL,
      SIZE +BEVEL,  SIZE, -SIZE,

      SIZE,         SIZE,  SIZE +BEVEL,
      SIZE +BEVEL, -SIZE,  SIZE,       
      SIZE +BEVEL,  SIZE,  SIZE,       
      SIZE,        -SIZE,  SIZE +BEVEL,
      SIZE +BEVEL, -SIZE,  SIZE,       
      SIZE,         SIZE,  SIZE +BEVEL,

      -SIZE,        -SIZE,  -SIZE -BEVEL,
      -SIZE -BEVEL,  SIZE,  -SIZE,
      -SIZE,         SIZE,  -SIZE -BEVEL,
      -SIZE,        -SIZE,  -SIZE -BEVEL,
      -SIZE -BEVEL, -SIZE,  -SIZE,
      -SIZE -BEVEL,  SIZE,  -SIZE,

      -SIZE -BEVEL, -SIZE,  SIZE,       
      -SIZE,         SIZE,  SIZE +BEVEL,
      -SIZE -BEVEL,  SIZE,  SIZE,       
      -SIZE -BEVEL, -SIZE,  SIZE,       
      -SIZE,        -SIZE,  SIZE +BEVEL,
      -SIZE,         SIZE,  SIZE +BEVEL,

      //edge bottom
       SIZE,  -SIZE -BEVEL, -SIZE,
       -SIZE,  -SIZE,        -SIZE -BEVEL,
       SIZE,  -SIZE,        -SIZE -BEVEL,
      -SIZE,  -SIZE -BEVEL, -SIZE,
      -SIZE,  -SIZE,        -SIZE -BEVEL,
       SIZE,  -SIZE -BEVEL, -SIZE,

       SIZE,         -SIZE -BEVEL,  SIZE,
       SIZE +BEVEL,  -SIZE,        -SIZE,
       SIZE +BEVEL,  -SIZE,         SIZE,
       SIZE,         -SIZE -BEVEL, -SIZE,
       SIZE +BEVEL,  -SIZE,        -SIZE,
       SIZE,         -SIZE -BEVEL,  SIZE,

      -SIZE,  -SIZE,         SIZE +BEVEL,
       SIZE,  -SIZE -BEVEL,  SIZE,
       SIZE,  -SIZE,         SIZE +BEVEL,
      -SIZE,  -SIZE,         SIZE +BEVEL,
      -SIZE,  -SIZE -BEVEL,  SIZE,
       SIZE,  -SIZE -BEVEL,  SIZE,

       -SIZE -BEVEL,  -SIZE,        -SIZE,
       -SIZE,         -SIZE -BEVEL,  SIZE,
       -SIZE -BEVEL,  -SIZE,         SIZE,
       -SIZE -BEVEL,  -SIZE,        -SIZE,
       -SIZE,         -SIZE -BEVEL, -SIZE,
       -SIZE,         -SIZE -BEVEL,  SIZE,
        
     //plane
      -SIZE,  SIZE, -SIZE -BEVEL,
       SIZE,  SIZE, -SIZE -BEVEL,
       SIZE, -SIZE, -SIZE -BEVEL,
       SIZE, -SIZE, -SIZE -BEVEL,
      -SIZE, -SIZE, -SIZE -BEVEL,
      -SIZE,  SIZE, -SIZE -BEVEL,

       SIZE, -SIZE,  SIZE +BEVEL,
       SIZE,  SIZE,  SIZE +BEVEL,
      -SIZE,  SIZE,  SIZE +BEVEL,
      -SIZE,  SIZE,  SIZE +BEVEL,
      -SIZE, -SIZE,  SIZE +BEVEL,
       SIZE, -SIZE,  SIZE +BEVEL,

      -SIZE -BEVEL, -SIZE,  SIZE,
      -SIZE -BEVEL,  SIZE,  SIZE,
      -SIZE -BEVEL,  SIZE, -SIZE,
      -SIZE -BEVEL,  SIZE, -SIZE,
      -SIZE -BEVEL, -SIZE, -SIZE,
      -SIZE -BEVEL, -SIZE,  SIZE,
      
       SIZE +BEVEL,  SIZE, -SIZE, 
       SIZE +BEVEL,  SIZE,  SIZE, 
       SIZE +BEVEL, -SIZE,  SIZE, 
       SIZE +BEVEL, -SIZE,  SIZE, 
       SIZE +BEVEL, -SIZE, -SIZE, 
       SIZE +BEVEL,  SIZE, -SIZE,
 
      -SIZE,  SIZE +BEVEL,  SIZE,
       SIZE,  SIZE +BEVEL,  SIZE,
       SIZE,  SIZE +BEVEL, -SIZE,
       SIZE,  SIZE +BEVEL, -SIZE,
      -SIZE,  SIZE +BEVEL, -SIZE,
      -SIZE,  SIZE +BEVEL,  SIZE,
      
       SIZE, -SIZE -BEVEL, -SIZE, 
       SIZE, -SIZE -BEVEL,  SIZE, 
      -SIZE, -SIZE -BEVEL,  SIZE, 
      -SIZE, -SIZE -BEVEL,  SIZE, 
      -SIZE, -SIZE -BEVEL, -SIZE, 
       SIZE, -SIZE -BEVEL, -SIZE, 
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
    this.rm.initialize();
    this.srtm.initialize();

    this.rm.rotateX(this.time);
    this.stm.scale(0.5, 0.5, 0.5);
    this.stm.translate(this.x, this.y, this.z);

    this.srtm.m = Matrix.multiply(this.rm.m, this.stm.m);
    this.position = this.srtm.multiplyVector(this.basePosition);
      
    for (var v = 0; v < 44 * 9; v += 9) {
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
  }
};