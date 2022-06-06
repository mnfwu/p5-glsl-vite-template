#ifdef GL_ES
precision mediump float;
#endif

uniform float uTime;
uniform vec2 uResolution;

void main() {
    vec2 st = gl_FragCoord.xy/uResolution.xy;

    vec3 color = vec3(0.3, 0.2, 1.0);
    color.r += st.x / 2.0;

    gl_FragColor = vec4(color, 1.0);
}