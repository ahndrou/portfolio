precision mediump float;

uniform vec2 resolution;
uniform float time;

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy)  / resolution.y;

    float strength = length(uv - vec2(0.0)) - 0.5;
    strength = smoothstep(0., 0.01, strength);

    vec3 color = vec3(strength);

    gl_FragColor = vec4(color, 1.0);
}