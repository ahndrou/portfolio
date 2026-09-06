precision mediump float;

uniform vec2 resolution;
uniform float time;
uniform vec2 positions[2];

float circleSDF(vec2 p, vec2 center, float radius) {
    return length(p - center) - radius;
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy)  / resolution.y;

    float strength = circleSDF(uv, vec2(0.2, 0.6), 0.4);
    strength = smoothstep(0., 0.01, strength);

    vec3 color = vec3(0.5, 0.2, 0.6) * strength;

    gl_FragColor = vec4(color, 1.0);
}