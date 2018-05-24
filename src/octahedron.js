class Octahedron {
  constructor () {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    
    this.time = 0.0;
     
  
    this.color = [
       1.0, 0.0, 0.0, 1.0,
       1.0, 0.0, 0.0, 1.0,
       1.0, 0.0, 0.0, 1.0,
  
       0.0, 1.0, 0.0, 1.0,
       0.0, 1.0, 0.0, 1.0,
       0.0, 1.0, 0.0, 1.0,
  
       1.0, 0.0, 1.0, 1.0,
       1.0, 0.0, 1.0, 1.0,
       1.0, 0.0, 1.0, 1.0,
  
       0.0, 1.0, 1.0, 1.0,
       0.0, 1.0, 1.0, 1.0,
       0.0, 1.0, 1.0, 1.0,
  
       1.0, 1.0, 1.0, 1.0,
       1.0, 1.0, 1.0, 1.0,
       1.0, 1.0, 1.0, 1.0,
  
      //  0.0, 0.0, 1.0, 1.0,
      //  0.0, 0.0, 1.0, 1.0,
      //  0.0, 0.0, 1.0, 1.0,
  
      //  1.0, 1.0, 0.0, 1.0,
      //  1.0, 1.0, 0.0, 1.0,
      //  1.0, 1.0, 0.0, 1.0,
  
      //  0.5, 0.5, 0.5, 1.0,
      //  0.5, 0.5, 0.5, 1.0,
      //  0.5, 0.5, 0.5, 1.0,
    ];
    const r0 = 0.0;
    const r1 = 1.0;
    const r2 = 1/Math.sqrt(2);
    console.log(1/Math.sqrt(2));
    this.basePosition = [
      r1,  r0,  r0,
      r0,  r1,  r0,
      r0,  r0,  r1,
  
      r1,  r0,  r0,
      r2,  r2,  r0,
      r2,  r0,  r2,

      r0,  r1,  r0,
      r2,  r2,  r0,
      r0,  r2,  r2,

      r0,  r0,  r1,
      r2,  r0,  r2,
      r0,  r2,  r2,

      r2,  r2,  r0,
      r2,  r0,  r2,
      r0,  r2,  r2,
    //   r0, -r1,  r0,
    //   r1,  r0,  r0,
    //   r0,  r0,  r1,
  
    //   r0,  r1,  r0,
    //   r1,  r0,  r0,
    //   r0,  r0, -r1,
  
    //   r1,  r0,  r0,
    //   r0, -r1,  r0,
    //   r0,  r0, -r1,
  
    //   r0,  r1,  r0,
    //   -r1,  r0,  r0,
    //   r0,  r0,  r1,
  
    //  -r1,  r0,  r0,
    //   r0, -r1,  r0,
    //   r0,  r0,  r1,
  
    //  -r1,  r0,  r0,
    //   r0,  r1,  r0,
    //   r0,  r0, -r1,
  
    //  r0, -r1,  r0,
    //  -r1,  r0,  r0,
    //   r0,  r0, -r1,
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
//    this.time += 0.1;
    this.position = [];
    this.normal = [];

    this.stm.initialize();
    this.rm.initialize();
    this.srtm.initialize();

    this.rm.rotateX(this.time);
    this.stm.scale(2, 2, 2);
    this.stm.translate(this.x, this.y, this.z);

    this.srtm.m = Matrix.multiply(this.rm.m, this.stm.m);
    this.position = this.srtm.multiplyVector(this.basePosition);
      
    for (var v = 0; v < 5 * 9; v += 9) {
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