precision mediump float;

const int POSITIONS_LENGTH = 2;
// A distance threshold for when the values involved begin to merge.
const float SMIN_FUNCTION_WEIGHTING = 0.0075;

uniform vec2 resolution;
uniform float time;
uniform vec2 positions[POSITIONS_LENGTH];

// A smooth-minimum function. Smoothly interpolates between the two
// values rather than giving an abrupt chance like a regular min function.
// Credit to Inigo Quilez: https://iquilezles.org/articles/smin/
float smin( float a, float b, float k )
{
    k *= 2.0;
    float x = b-a;
    return 0.5*( a+b-sqrt(x*x+k*k) );
}

float circleSDF(vec2 p, vec2 center, float radius) {
    return length(p - center) - radius;
}

float combinedSDF(vec2 p) {
    float strength = circleSDF(p, positions[0], 0.1);

    for (int i = 1; i < POSITIONS_LENGTH; i++) {
        strength = smin(strength, circleSDF(p, positions[i], 0.1), SMIN_FUNCTION_WEIGHTING);
    }

    return strength;
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy)  / resolution.y;

    float strength = combinedSDF(uv);
    strength = smoothstep(0., 0.01, strength);

    vec3 color = vec3(0.5, 0.2, 0.6) * strength;

    gl_FragColor = vec4(color, 1.0);
}