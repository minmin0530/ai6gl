class Grass {
    constructor () {
      this.x = 0.0;
      this.y = 0.0;
      this.z = 0.0;
      
      this.time = 0.0;

      this.all = 5000;
      this.randomX = [];
      this.randomZ = [];
      
      for (let l = 0; l < this.all; ++l) {
        this.randomX.push( (Math.random() * this.all - this.all/2) / 50 );
        this.randomZ.push( (Math.random() * this.all - this.all/2) / 50 );
      }
    
      this.color = [];
      for (let l = 0; l <3*9*this.all; ++l) {
        this.color.push(0.0);
        this.color.push(1.0);
        this.color.push(0.0);
        this.color.push(1.0);
      }
      const r0 = -0.5;
      const r1 =  0.5;
      const s0 =  0.8;
      const s1 =  6.0;
      this.basePosition = [
        r1,     r0,    r0,
        r0*s0,  r1*s1,  r0,
        r0,     r0,    r0,

        r0*s0,  r1*s1,  r0,
        r1,     r0,    r0,
        r1*s0,  r1*s1,  r0,

        r1*s0,     r1*s1,   r0,
        r0*s0*s0,  r1*s1*1.8, r0,
        r0*s0,     r1*s1,   r0,

        r0*s0*s0,  r1*s1*1.8, r0,
        r1*s0,     r1*s1,   r0,
        r1*s0*s0,  r1*s1*1.8, r0,

        r1*s0*s0,     r1*s1*1.8, r0,
        r0*s0*s0*s0,  r1*s1*2.4, r0,
        r0*s0*s0,     r1*s1*1.8, r0,

        r0*s0*s0*s0,  r1*s1*2.4, r0,
        r1*s0*s0,     r1*s1*1.8, r0,
        r1*s0*s0*s0,  r1*s1*2.4, r0,

        r1*s0*s0*s0,     r1*s1*2.4, r0,
        r0*s0*s0*s0*s0,  r1*s1*3.0, r0,
        r0*s0*s0*s0,     r1*s1*2.4, r0,

        r0*s0*s0*s0*s0,  r1*s1*3.0, r0,
        r1*s0*s0*s0,     r1*s1*2.4, r0,
        r1*s0*s0*s0*s0,  r1*s1*3.0, r0,
        
        r1*s0*s0*s0*s0,     r1*s1*3.0, r0,
        0,                  r1*s1*3.6, r0,  
        r0*s0*s0*s0*s0,     r1*s1*3.0, r0,
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
      this.time += 0.4;
      if (this.time > 359.0) {
        this.time = 1.0;
      }
      const sway = Math.cos(Math.PI / 180.0 * this.time);
      this.position2 = [];
      this.position = [];
      this.normal = [];
  
      this.stm.initialize();
      this.rm.initialize();
      this.srtm.initialize();
  
    //   this.rm.rotateX(this.time);
//       this.stm.scale(2, 2, 2);
 //     this.stm.translate(this.x, this.y, this.z);


  
      this.srtm.m = Matrix.multiply(this.rm.m, this.stm.m);
      this.basePosition = this.srtm.multiplyVector(this.basePosition);



      for (let l = 0; l < this.basePosition.length; l+=3) {
        if (l >= 6 * 3) {// && (l / 3) % 2 == 1) {
            this.position2[l+0] = Math.cos(Math.PI / 180.0 * this.time) + this.basePosition[l+0];
        } else {
            this.position2[l+0] = this.basePosition[l+0];
        }
        this.position2[l+1] = this.basePosition[l+1];
        this.position2[l+2] = this.basePosition[l+2];
      }
      this.position2[3] = this.position2[18+6];
      this.position2[3+6] = this.position2[18+6];
      this.position2[3+12] = this.position2[18+12];

      let i = 18;
      for (let k = 0; k < 3; ++k) {
        for (let l = 0; l < this.basePosition.length; l+=3) {
          if (l >= (12 + 6*k) * 3) {// && (l / 3) % 2 == 1) {
              this.position2[l+0] = sway + this.position2[l+0];
          } else {
              this.position2[l+0] = this.position2[l+0];
          }
          this.position2[l+1] = this.position2[l+1];
          this.position2[l+2] = this.position2[l+2];
        }
        if (k < 2) {
        this.position2[i*(k+1)+3] = this.position2[i*(k+2)+6];
        this.position2[i*(k+1)+3+6] = this.position2[i*(k+2)+6];
        this.position2[i*(k+1)+3+12] = this.position2[i*(k+2)+12];
        }
      }
      this.position2[57] = this.position2[72+6];
      this.position2[57+6] = this.position2[72+6];
      this.position2[57+12] = this.position2[72+0];

      this.position2[75] = sway + this.position2[72];

      for (let k = 0; k < this.all; ++k) {
      for (let l = 0; l < this.position2.length; l += 3) {
        this.position.push(this.position2[l + 0] + this.randomX[k]);
        this.position.push(this.position2[l + 1] + 0.0);
        this.position.push(this.position2[l + 2] + this.randomZ[k]);
      }
      }
//      this.normal = this.position;



     
      for (var v = 0; v < 9 * 9 * this.all; v += 9) {
        var vec1 = [ this.position2[3+v]-this.position2[0+v], this.position2[4+v]-this.position2[1+v], this.position2[5+v]-this.position2[2+v] ];
        var vec2 = [ this.position2[6+v]-this.position2[0+v], this.position2[7+v]-this.position2[1+v], this.position2[8+v]-this.position2[2+v] ];
        this.normal.push(vec1[1] * vec2[2] - vec1[2] * vec2[1]);
        this.normal.push(vec1[2] * vec2[0] - vec1[0] * vec2[2]);
        this.normal.push(vec1[0] * vec2[1] - vec1[1] * vec2[0]);
    
        vec1 = [ this.position2[0+v]-this.position2[6+v], this.position2[1+v]-this.position2[7+v], this.position2[2+v]-this.position2[8+v] ];
        vec2 = [ this.position2[3+v]-this.position2[6+v], this.position2[4+v]-this.position2[7+v], this.position2[5+v]-this.position2[8+v] ];
        this.normal.push(vec1[1] * vec2[2] - vec1[2] * vec2[1]);
        this.normal.push(vec1[2] * vec2[0] - vec1[0] * vec2[2]);
        this.normal.push(vec1[0] * vec2[1] - vec1[1] * vec2[0]);
    
        vec1 = [ this.position2[6+v]-this.position2[3+v], this.position2[7+v]-this.position2[4+v], this.position2[8+v]-this.position2[5+v] ];
        vec2 = [ this.position2[0+v]-this.position2[3+v], this.position2[1+v]-this.position2[4+v], this.position2[2+v]-this.position2[5+v] ];
        this.normal.push(vec1[1] * vec2[2] - vec1[2] * vec2[1]);
        this.normal.push(vec1[2] * vec2[0] - vec1[0] * vec2[2]);
        this.normal.push(vec1[0] * vec2[1] - vec1[1] * vec2[0]);
      }
    }
  };