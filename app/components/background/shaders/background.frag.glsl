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

const vec3 CORE_COLOR = vec3(0.2, 0.2, 0.8);
const vec3 GLOW_COLOR = vec3(0., 0., 1.);
const float GLOW_FALLOFF = 25.0;
const float GLOW_BOOST = 1.;

const float EDGE_WIDTH = 0.002;

void main() {
    // Normalized pixel coordinates (-aspect, 0 -> aspect, 1).
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy)  / resolution.y;

    // Create inner color.
    float SD = combinedSDF(uv);
    float minSD = smoothstep(EDGE_WIDTH, -EDGE_WIDTH, SD);
    vec3 color = CORE_COLOR * minSD;

    // Create a glow around the edge of the SDF shapes.
    float glowIntensity = exp(-max(SD, 0.0) * GLOW_FALLOFF);
    // Remove glow color from inside of shapes.
    float glowMask = smoothstep(-EDGE_WIDTH, EDGE_WIDTH, SD);

    vec3 glow = GLOW_COLOR * glowMask * glowIntensity * GLOW_BOOST;
    color += glow;

    gl_FragColor = vec4(color, 1.0);
}