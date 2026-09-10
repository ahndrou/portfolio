// These should be replaced in JS with the actual value - don't change it here.
#define MAX_POINTS 1 // DON'T TOUCH!
#define RADIUS 0.1 // DON'T TOUCH!

precision mediump float;

// A distance threshold for when the values involved begin to merge.
const float SMIN_FUNCTION_WEIGHTING = 0.05;

uniform vec2 resolution;
// Pixel length of one simulation unit. Set from JS so the aspect ratio
// compensation lives in one place.
uniform float unitScale;
uniform vec2 positions[MAX_POINTS];
uniform vec3 bgColor;
uniform vec3 coreColor;
uniform vec3 glowColor;

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
    float strength = circleSDF(p, positions[0], RADIUS);

    for (int i = 1; i < MAX_POINTS; i++) {
        strength = smin(strength, circleSDF(p, positions[i], RADIUS), SMIN_FUNCTION_WEIGHTING);
    }

    return strength;
}

const float GLOW_FALLOFF = 20.;
const float GLOW_BOOST = 1.;

const float EDGE_WIDTH = 0.002;

void main() {
    // Normalized pixel coordinates, running from -resolution/unitScale in the
    // bottom left to +resolution/unitScale in the top right.
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / unitScale;

    // Create inner color.
    float SD = combinedSDF(uv);
    float minSD = smoothstep(EDGE_WIDTH, -EDGE_WIDTH, SD);
    vec3 color = coreColor * minSD;

    // Create a glow around the edge of the SDF shapes.
    float glowIntensity = exp(-max(SD, 0.0) * GLOW_FALLOFF);
    // Remove glow color from inside of shapes.
    float glowMask = smoothstep(-EDGE_WIDTH, EDGE_WIDTH, SD);

    vec3 glow = glowColor * glowMask * glowIntensity * GLOW_BOOST;
    color += glow;
    color += bgColor * (1.0 - minSD + glowMask * glowIntensity);

    gl_FragColor = vec4(color, 1.0);
}