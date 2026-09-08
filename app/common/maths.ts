// Created from scratch rather than using a library just for fun.
export class Vec2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(other: Vec2) {
    return new Vec2(this.x + other.x, this.y + other.y);
  }

  sub(other: Vec2) {
    return new Vec2(this.x - other.x, this.y - other.y);
  }

  multiply(other: Vec2) {
    return new Vec2(this.x * other.x, this.y * other.y);
  }

  dot(other: Vec2) {
    return this.x * other.x + this.y * other.y;
  }

  /**
   * @param axis Axis to reflect in.
   * @returns The reflected vector.
   */
  reflect(axis: Vec2) {
    axis = axis.normalize();

    // Uses the standard reflection formula r = v - 2 * (v · n) * n
    return this.sub(axis.multiplyByScalar(2 * this.dot(axis)));
  }

  multiplyByScalar(scalar: number) {
    return new Vec2(this.x * scalar, this.y * scalar);
  }

  normalize() {
    const length = Math.sqrt(this.x * this.x + this.y * this.y);

    // Avoid division by zero.
    if (length === 0) return new Vec2(0, 0);

    return new Vec2(this.x / length, this.y / length);
  }

  magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  heading() {
    return Math.atan2(this.x, this.y);
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

// Some constants
export const POSITIVE_X = new Vec2(1, 0);
export const POSITIVE_Y = new Vec2(0, 1);
