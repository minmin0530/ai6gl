class Matrix {
  static create () {
    const m = [
      1.0, 0.0, 0.0, 0.0,
      0.0, 1.0, 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0,
    ];
    return m;
  }
  static lookAt(e, tt, u) {
    const m = [
      1.0, 0.0, 0.0, 0.0,
      0.0, 1.0, 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0,
    ];
    let l;

    const t = [0.0, 0.0, 0.0];
    t[0] = e[0] - tt[0];
    t[1] = e[1] - tt[1];
    t[2] = e[2] - tt[2];
    
    l = Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);
    m[ 2] = t[0] / l;
    m[ 6] = t[1] / l;
    m[10] = t[2] / l;


    t[0] = u[1] * m[10] - u[2] * m[ 6];
    t[1] = u[2] * m[ 2] - u[0] * m[10];
    t[2] = u[0] * m[ 6] - u[1] * m[ 2];
    l = Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);
    m[0] = t[0] / l;
    m[4] = t[1] / l;
    m[8] = t[2] / l;


    m[1] = m[ 6] * m[8] - m[10] * m[4];
    m[5] = m[10] * m[0] - m[ 2] * m[8];
    m[9] = m[ 2] * m[4] - m[ 6] * m[0];

    m[12] = -(e[0] * m[0] + e[1] * m[4] + e[2] * m[ 8]);
    m[13] = -(e[0] * m[1] + e[1] * m[5] + e[2] * m[ 9]);
    m[14] = -(e[0] * m[2] + e[1] * m[6] + e[2] * m[10]);

    return m;
  }
  static perspective (fovy, aspect, near, far) {
    const m = [
      0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0,
    ];
    const t = near * Math.tan(fovy * Math.PI / 360.0);
    const r = t * aspect;
    const a = r * 2;
    const b = t * 2;
    const c = far - near;
    m[0] = near * 2 / a;
    m[5] = near * 2 / b;
    m[10] = -(far + near) / c;
    m[11] = -1.0;
    m[14] = -(far * near * 2) / c;
    
    return m;
  }
  static multiply (m2, m1) {
    const m3 = [];
    m3.push(m1[0]*m2[0]+m1[1]*m2[4]+m1[2]*m2[ 8]+m1[3]*m2[12]);
    m3.push(m1[0]*m2[1]+m1[1]*m2[5]+m1[2]*m2[ 9]+m1[3]*m2[13]);
    m3.push(m1[0]*m2[2]+m1[1]*m2[6]+m1[2]*m2[10]+m1[3]*m2[14]);
    m3.push(m1[0]*m2[3]+m1[1]*m2[7]+m1[2]*m2[11]+m1[3]*m2[15]);

    m3.push(m1[4]*m2[0]+m1[5]*m2[4]+m1[6]*m2[ 8]+m1[7]*m2[12]);
    m3.push(m1[4]*m2[1]+m1[5]*m2[5]+m1[6]*m2[ 9]+m1[7]*m2[13]);
    m3.push(m1[4]*m2[2]+m1[5]*m2[6]+m1[6]*m2[10]+m1[7]*m2[14]);
    m3.push(m1[4]*m2[3]+m1[5]*m2[7]+m1[6]*m2[11]+m1[7]*m2[15]);

    m3.push(m1[8]*m2[0]+m1[9]*m2[4]+m1[10]*m2[ 8]+m1[11]*m2[12]);
    m3.push(m1[8]*m2[1]+m1[9]*m2[5]+m1[10]*m2[ 9]+m1[11]*m2[13]);
    m3.push(m1[8]*m2[2]+m1[9]*m2[6]+m1[10]*m2[10]+m1[11]*m2[14]);
    m3.push(m1[8]*m2[3]+m1[9]*m2[7]+m1[10]*m2[11]+m1[11]*m2[15]);

    m3.push(m1[12]*m2[0]+m1[13]*m2[4]+m1[14]*m2[ 8]+m1[15]*m2[12]);
    m3.push(m1[12]*m2[1]+m1[13]*m2[5]+m1[14]*m2[ 9]+m1[15]*m2[13]);
    m3.push(m1[12]*m2[2]+m1[13]*m2[6]+m1[14]*m2[10]+m1[15]*m2[14]);
    m3.push(m1[12]*m2[3]+m1[13]*m2[7]+m1[14]*m2[11]+m1[15]*m2[15]);
    return m3;
  }
  initialize() {
    this.m = [
      1.0, 0.0, 0.0, 0.0,
      0.0, 1.0, 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0,
    ];
  }
  scale(x, y, z) {
    // const m1 = [
    //     x, 0.0, 0.0, 0.0,
    //   0.0,   y, 0.0, 0.0,
    //   0.0, 0.0,   z, 0.0,
    //   0.0, 0.0, 0.0, 1.0,
    // ];

    // this.m = Matrix.multiply(m1, this.m);

    this.m[ 0] *= x;
    this.m[ 5] *= y;
    this.m[10] *= z;
  }
  rotateX(angle) {
    this.m[ 5] = Math.cos(angle);  this.m[ 6] = -Math.sin(angle);
    this.m[ 9] = Math.sin(angle);  this.m[10] =  Math.cos(angle);
  }
  translate(x, y, z) {
    this.m[ 3] = x;
    this.m[ 7] = y;
    this.m[11] = z;
  }
  multiplyVector(v1) {
    const v2 = [];

    for (let l = 0; l < v1.length; l += 3) {
      v2.push(this.m[0] * v1[0 + l] + this.m[1] * v1[1 + l] + this.m[ 2] * v1[2 + l] + this.m[ 3]); 
      v2.push(this.m[4] * v1[0 + l] + this.m[5] * v1[1 + l] + this.m[ 6] * v1[2 + l] + this.m[ 7]); 
      v2.push(this.m[8] * v1[0 + l] + this.m[9] * v1[1 + l] + this.m[10] * v1[2 + l] + this.m[11]); 
    }
    return v2;
  }
};