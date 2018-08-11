/*
ai6gl is WebGL wrapper library.
*/

class AI6GL {
  constructor () {
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (gl) {
      this.GL = gl;
      this.object = [];
      this.time = 0.0;
//      gl.enable(gl.CULL_FACE);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
    
//      this.fetchShader(gl);
    }
  }

  setCamera (eye, target, up) {
    this.eye = eye;
    this.target = target;
    this.up = up;
  }
  addLight (light) {
    this.light = light;
  }
  addObject (object) {
    this.object.push(object);
  }
  async fetchShader(gl, f) {
    this.vertexShader   = await fetch('vertex.vs'  ).then((response) => response.text());
    this.fragmentShader = await fetch('fragment.fs').then((response) => response.text());
    
    this.prg = await this.create_program(this.create_shader('vs', gl), this.create_shader('fs', gl), gl);
//    await this.mainLoop(gl);
    await f();
  }

  create_shader(id, gl) {
    let shader;
    switch (id) {
      case 'vs':
        shader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(shader, this.vertexShader);
        break;
      case 'fs':
        shader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(shader, this.fragmentShader);
        break;
      default:
        return;
    }
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      return shader;
    } else {
      alert(gl.getShaderInfoLog(shader));
    }
  }
  create_program(vs, fs, gl) {
    let program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.useProgram(program);
      return program;
    } else {
      alert(gl.getProgramInfoLog(program));
    }
  }
  create_vbo(data, gl) {
    let vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    return vbo;
  }


  draw(gl) {
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const planeLightPosition = [
      0.85, 0.0, -0.3,
    ];

    for (const object of this.object) {

      const vPlaneColor   = this.create_vbo(object.color, gl);
      const vPlanePosition = this.create_vbo(object.position, gl);
      const vPlaneNormal   = this.create_vbo(object.normal, gl);
  
      const vPlaneAttColor    = gl.getAttribLocation(this.prg, 'color');
      const vPlaneAttLocation = gl.getAttribLocation(this.prg, 'position');
      const vPlaneAttNormal   = gl.getAttribLocation(this.prg, 'normal');
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vPlaneColor);
      gl.enableVertexAttribArray(vPlaneAttColor);
      gl.vertexAttribPointer(vPlaneAttColor, 4, gl.FLOAT, false, 0, 0);
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vPlanePosition);
      gl.enableVertexAttribArray(vPlaneAttLocation);
      gl.vertexAttribPointer(vPlaneAttLocation, 3, gl.FLOAT, false, 0, 0);
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vPlaneNormal);
      gl.enableVertexAttribArray(vPlaneAttNormal);
      gl.vertexAttribPointer(vPlaneAttNormal, 3, gl.FLOAT, false, 0, 0);
  
      const view        = Matrix.lookAt(this.eye, this.target, this.up);
      const perspective = Matrix.perspective(90, 640.0 / 480.0, 0.1, 1000);
      const model       = Matrix.create();
      const vp          = Matrix.multiply(perspective, view);
      const mvp         = Matrix.multiply(vp, model);
  
      const puniLocationEye = gl.getUniformLocation(this.prg, 'lightPosition');
      gl.uniform3fv(puniLocationEye, this.light);
      const puniLocation = gl.getUniformLocation(this.prg, 'mvp');
      gl.uniformMatrix4fv(puniLocation, false, mvp);
      gl.drawArrays(gl.TRIANGLES, 0, object.position.length / 3);
      gl.flush();  
    }

  }
};