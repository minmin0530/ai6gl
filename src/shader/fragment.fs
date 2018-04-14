precision mediump float;
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vLightPosition;
 
void main() {
  vec3 lightColor = vec3(0.5, 0.5, 0.75); 
  float directional = max(dot( vLightPosition, vNormal), 0.0);
  vec3 vLighting = vColor + (lightColor * directional);

  gl_FragColor = vec4(vLighting, 1.0);
}