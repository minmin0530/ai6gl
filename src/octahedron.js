class Octahedron {
  constructor () {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    
    this.time = 0.0;
     
  
    this.color = [
       1.0, 0.0, 0.0,// 1.0,
       1.0, 0.0, 0.0,// 1.0,
       1.0, 0.0, 0.0,// 1.0,
  
       0.0, 1.0, 0.0,// 1.0,
       0.0, 1.0, 0.0,// 1.0,
       0.0, 1.0, 0.0,// 1.0,
  
       1.0, 0.0, 1.0,// 1.0,
       1.0, 0.0, 1.0,// 1.0,
       1.0, 0.0, 1.0,// 1.0,
  
       0.0, 1.0, 1.0,// 1.0,
       0.0, 1.0, 1.0,// 1.0,
       0.0, 1.0, 1.0,// 1.0,
  
       1.0, 1.0, 1.0,// 1.0,
       1.0, 1.0, 1.0,// 1.0,
       1.0, 1.0, 1.0,// 1.0,
  
       0.0, 0.0, 1.0,// 1.0,
       0.0, 0.0, 1.0,// 1.0,
       0.0, 0.0, 1.0,// 1.0,
  
       1.0, 1.0, 0.0,// 1.0,
       1.0, 1.0, 0.0,// 1.0,
       1.0, 1.0, 0.0,// 1.0,
  
       0.5, 0.5, 0.5,// 1.0,
       0.5, 0.5, 0.5,// 1.0,
       0.5, 0.5, 0.5,// 1.0,
    ];
    const r0 = 0.0;
    const r1 = 1.0;
    this.basePosition = [
      r1,  r0,  r0,
      r0,  r1,  r0,
      r0,  r0,  r1,
  
      r0, -r1,  r0,
      r1,  r0,  r0,
      r0,  r0,  r1,
  
      r0,  r1,  r0,
      r1,  r0,  r0,
      r0,  r0, -r1,
  
      r1,  r0,  r0,
      r0, -r1,  r0,
      r0,  r0, -r1,
  
      r0,  r1,  r0,
      -r1,  r0,  r0,
      r0,  r0,  r1,
  
     -r1,  r0,  r0,
      r0, -r1,  r0,
      r0,  r0,  r1,
  
     -r1,  r0,  r0,
      r0,  r1,  r0,
      r0,  r0, -r1,
  
     r0, -r1,  r0,
     -r1,  r0,  r0,
      r0,  r0, -r1,
    ];
    this.position = [];
    for (var v = 0; v < this.basePosition.length; ++v) {
  
      var d = v % 3;
      if (d == 0) {
        this.position.push(Math.cos(this.time) * this.basePosition[v] + Math.sin(this.time) * this.basePosition[v + 2]);
  //      basePosition[v] += Math.cos(this.time)*3;
      }
      else if (d == 2) {
        this.position.push(Math.cos(this.time) * this.basePosition[v] - Math.sin(this.time) * this.basePosition[v - 2]);
  //      basePosition[v] += Math.sin(this.time)*3;
      }
      else {
        this.position.push(this.basePosition[v]);
      }
    }
  
    this.normal = [];
  
    for (var v = 0; v < 8 * 9; v += 9) {
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

  setPosition(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  update () {
    this.time += 0.1;
    this.position = [];
    for (var v = 0; v < this.basePosition.length; ++v) {
  
      var d = v % 3;
      if (d == 0) {
        this.position.push(this.x + Math.cos(this.time) * this.basePosition[v] + Math.sin(this.time) * this.basePosition[v + 2]);
  //      basePosition[v] += Math.cos(this.time)*3;
      }
      else if (d == 2) {
        this.position.push(this.z + Math.cos(this.time) * this.basePosition[v] - Math.sin(this.time) * this.basePosition[v - 2]);
  //      basePosition[v] += Math.sin(this.time)*3;
      }
      else {
        this.position.push(this.y + this.basePosition[v]);
      }
    }
    this.normal = [];
  
    for (var v = 0; v < 8 * 9; v += 9) {
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