class Octahedron3 {
  constructor () {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    
    this.time = 0.0;
     
    // const subdivisionColor = [
    //   1.0, 0.0, 0.0, 1.0,
    //   1.0, 0.0, 0.0, 1.0,
    //   1.0, 0.0, 0.0, 1.0,
 
    //   0.0, 1.0, 0.0, 1.0,
    //   0.0, 1.0, 0.0, 1.0,
    //   0.0, 1.0, 0.0, 1.0,
 
    //   1.0, 0.0, 1.0, 1.0,
    //   1.0, 0.0, 1.0, 1.0,
    //   1.0, 0.0, 1.0, 1.0,
 
    //   0.0, 1.0, 1.0, 1.0,
    //   0.0, 1.0, 1.0, 1.0,
    //   0.0, 1.0, 1.0, 1.0,
 
    //   1.0, 1.0, 1.0, 1.0,
    //   1.0, 1.0, 1.0, 1.0,
    //   1.0, 1.0, 1.0, 1.0,
 
    //   0.0, 0.0, 1.0, 1.0,
    //   0.0, 0.0, 1.0, 1.0,
    //   0.0, 0.0, 1.0, 1.0,
 
    //   1.0, 1.0, 0.0, 1.0,
    //   1.0, 1.0, 0.0, 1.0,
    //   1.0, 1.0, 0.0, 1.0,
 
    //   0.5, 0.5, 0.5, 1.0,
    //   0.5, 0.5, 0.5, 1.0,
    //   0.5, 0.5, 0.5, 1.0,
     
    // ];
    this.color = []

    const r0 = 0.0;
    const r1 = 1.0;
    const r2 = 1/Math.sqrt(2);
    const r3s = Math.sin(Math.PI/180 * 22.5);
    const r3c = Math.cos(Math.PI/180 * 22.5);
    const r3m = 0.5 - Math.sqrt(1.5)/4;

    console.log(r3s);
    console.log(r3c);

    const baseSubdivision = [
      r3c, r3s, r0,
      r1,  r0,  r0,
      r3c, r0,  r3s,

      r3c, r3s, r0,
      r2,  r3s, r3s,
      r2,  r2,  r0,

      r2,  r3s, r3s,
      r3c, r0,  r3s,
      r2,  r0,  r2,      
      
      r2,  r3s, r3s,
      r3c, r3s, r0,
      r3c, r0,  r3s,
    ];

    this.basePosition = [];

    let minusX = 1;
    let minusY = 1;
    let minusZ = 1;
    for (let m = 0; m < 4; ++m) {

      for (let l = 0; l < 4 * 3 * 3; l += 3) {
        
        if (m == 0) {
          this.basePosition.push(minusX * baseSubdivision[0 + l]);
          this.basePosition.push(minusY * baseSubdivision[1 + l]);
          this.basePosition.push(minusZ * baseSubdivision[2 + l]);
        } else if (m == 1) {
          this.basePosition.push(minusX * baseSubdivision[1 + l]);
          this.basePosition.push(minusY * baseSubdivision[0 + l]);
          this.basePosition.push(minusZ * baseSubdivision[2 + l]);
        } else if (m == 2) {
          this.basePosition.push(minusX * baseSubdivision[1 + l]);
          this.basePosition.push(minusY * baseSubdivision[2 + l]);
          this.basePosition.push(minusZ * baseSubdivision[0 + l]);
        } else {
          if (l == 0) {
          this.basePosition.push(minusX * this.basePosition[0 + 10*3]);
          this.basePosition.push(minusY * this.basePosition[1 + 10*3]);
          this.basePosition.push(minusZ * this.basePosition[2 + 10*3]);

          this.basePosition.push(minusX * this.basePosition[0 + 10*3 + 12*3]);
          this.basePosition.push(minusY * this.basePosition[1 + 10*3 + 12*3]);
          this.basePosition.push(minusZ * this.basePosition[2 + 10*3 + 12*3]);
          
          this.basePosition.push(minusX * this.basePosition[0 + 10*3 + 24*3]);
          this.basePosition.push(minusY * this.basePosition[1 + 10*3 + 24*3]);
          this.basePosition.push(minusZ * this.basePosition[2 + 10*3 + 24*3]);


          this.basePosition.push(minusX * this.basePosition[0 + 10*3]);
          this.basePosition.push(minusY * this.basePosition[1 + 10*3]);
          this.basePosition.push(minusZ * this.basePosition[2 + 10*3]);

          this.basePosition.push(minusX * this.basePosition[0 + 10*3 + 12*3]);
          this.basePosition.push(minusY * this.basePosition[1 + 10*3 + 12*3]);
          this.basePosition.push(minusZ * this.basePosition[2 + 10*3 + 12*3]);

          this.basePosition.push(minusZ * baseSubdivision[0 + 5 * 3 ]);
          this.basePosition.push(minusZ * baseSubdivision[1 + 5 * 3 ]);
          this.basePosition.push(minusZ * baseSubdivision[2 + 5 * 3 ]);


          this.basePosition.push(minusX * this.basePosition[0 + 10*3]);
          this.basePosition.push(minusY * this.basePosition[1 + 10*3]);
          this.basePosition.push(minusZ * this.basePosition[2 + 10*3]);
          
          this.basePosition.push(minusX * this.basePosition[0 + 10*3 + 24*3]);
          this.basePosition.push(minusY * this.basePosition[1 + 10*3 + 24*3]);
          this.basePosition.push(minusZ * this.basePosition[2 + 10*3 + 24*3]);

          this.basePosition.push(minusZ * baseSubdivision[0 + 8 * 3 ]);
          this.basePosition.push(minusZ * baseSubdivision[1 + 8 * 3 ]);
          this.basePosition.push(minusZ * baseSubdivision[2 + 8 * 3 ]);


          this.basePosition.push(minusX * this.basePosition[0 + 10*3 + 12*3]);
          this.basePosition.push(minusY * this.basePosition[1 + 10*3 + 12*3]);
          this.basePosition.push(minusZ * this.basePosition[2 + 10*3 + 12*3]);
          
          this.basePosition.push(minusX * this.basePosition[0 + 10*3 + 24*3]);
          this.basePosition.push(minusY * this.basePosition[1 + 10*3 + 24*3]);
          this.basePosition.push(minusZ * this.basePosition[2 + 10*3 + 24*3]);

          this.basePosition.push(r0);//minusZ * baseSubdivision[0 + 8 * 3 + 4*3*3]);
          this.basePosition.push(r2);//minusZ * baseSubdivision[1 + 8 * 3 + 4*3*3 ]);
          this.basePosition.push(r2);//minusZ * baseSubdivision[2 + 8 * 3 + 4*3*3 ]);
          
          }
        }
      }
    }

    const l = this.basePosition.length;
    for (let n = 0; n < 7; ++n) {
      if (n % 4 < 2 ) {minusX = -1;} else {minusX = 1;}
      if (n % 2 == 0) {minusY = -1;} else {minusY = 1;}
      if (n >= 3    ) {minusZ = -1;} else {minusZ = 1;}
      for (let m = 0; m < l; m += 3) {
        this.basePosition.push(minusX * this.basePosition[m + 0]);
        this.basePosition.push(minusY * this.basePosition[m + 1]);
        this.basePosition.push(minusZ * this.basePosition[m + 2]);
      }
    }

    for (let m = 0; m < 16 * 8 * 3; ++m) {    
        this.color.push(0.0);
        this.color.push(1.0);
        this.color.push(0.0);
        this.color.push(1.0);
    }      

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
    this.time += 0.02;
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
      
    for (var v = 0; v < 128 * 9; v += 9) {
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