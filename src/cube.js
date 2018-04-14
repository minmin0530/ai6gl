class Cube {
    constructor () {
      this.color = [
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
  
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
  
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
  
        1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
  
        1.0, 0.0, 1.0,
        1.0, 0.0, 1.0,
        1.0, 0.0, 1.0,
        1.0, 0.0, 1.0,
        1.0, 0.0, 1.0,
        1.0, 0.0, 1.0,
  
        0.0, 1.0, 1.0,
        0.0, 1.0, 1.0,
        0.0, 1.0, 1.0,
        0.0, 1.0, 1.0,
        0.0, 1.0, 1.0,
        0.0, 1.0, 1.0,
      ];
      const SIZE = 3.0;
      this.position = [
        -SIZE,  SIZE, -SIZE,
         SIZE,  SIZE, -SIZE,
         SIZE, -SIZE, -SIZE,
         SIZE, -SIZE, -SIZE,
        -SIZE, -SIZE, -SIZE,
        -SIZE,  SIZE, -SIZE,
  
         SIZE, -SIZE,  SIZE,
         SIZE,  SIZE,  SIZE,
        -SIZE,  SIZE,  SIZE,
        -SIZE,  SIZE,  SIZE,
        -SIZE, -SIZE,  SIZE,
         SIZE, -SIZE,  SIZE,
  
        -SIZE, -SIZE,  SIZE,
        -SIZE,  SIZE,  SIZE,
        -SIZE,  SIZE, -SIZE,
        -SIZE,  SIZE, -SIZE,
        -SIZE, -SIZE, -SIZE,
        -SIZE, -SIZE,  SIZE,
        
         SIZE,  SIZE, -SIZE, 
         SIZE,  SIZE,  SIZE, 
         SIZE, -SIZE,  SIZE, 
         SIZE, -SIZE,  SIZE, 
         SIZE, -SIZE, -SIZE, 
         SIZE,  SIZE, -SIZE,
   
        -SIZE,  SIZE,  SIZE,
         SIZE,  SIZE,  SIZE,
         SIZE,  SIZE, -SIZE,
         SIZE,  SIZE, -SIZE,
        -SIZE,  SIZE, -SIZE,
        -SIZE,  SIZE,  SIZE,
        
         SIZE, -SIZE, -SIZE, 
         SIZE, -SIZE,  SIZE, 
        -SIZE, -SIZE,  SIZE, 
        -SIZE, -SIZE,  SIZE, 
        -SIZE, -SIZE, -SIZE, 
         SIZE, -SIZE, -SIZE, 
      ];
      this.normal = [];
      for (var v = 0; v < 12*9; v += 9) {
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