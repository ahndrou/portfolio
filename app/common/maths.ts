/**
 * A very simple 2D vector class.
 */
export class Vec2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(other: Vec2) {
    return new Vec2(this.x + other.x, this.y + other.y);
  }

  multiply(other: Vec2) {
    return new Vec2(this.x * other.x, this.y * other.y);
  }

  multiplyByScalar(scalar: number) {
    return new Vec2(this.x * scalar, this.y * scalar);
  }

  // Storing state in a Float32Array directly would accumulate floating point errors.
  // Storage as an array of Vec2 and converting when needed avoids accumulation.
  // Probably not significant here but worth baring in mind.
  static arrayToFloat32Array(vecs: Vec2[], target: Float32Array): Float32Array {
    for (let i = 0; i < vecs.length; i++) {
      target[i * 2] = vecs[i].x;
      target[i * 2 + 1] = vecs[i].y;
    }
    return target;
  }
}
