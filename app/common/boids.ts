import { Vec2 } from "./maths";

export class Boid {
  mass;
  position;
  velocity;
  acceleration;

  constructor(xPos: number, yPos: number) {
    //  The mass of the boid will dictate how responsive it is to flocking forces
    this.mass = 1;
    this.position = new Vec2(xPos, yPos);
    this.velocity = new Vec2(
      Math.random() * 2.0 - 0.5,
      Math.random() * 2.0 - 0.5,
    ).normalize();
    this.acceleration = new Vec2(0, 0);
  }

  applyForce(force: Vec2) {
    this.acceleration.x += force.x / this.mass;
    this.acceleration.y += force.y / this.mass;
  }

  update(time: number) {
    this.updatePosition(time);
  }

  updatePosition(time: number) {
    this.velocity = this.velocity.add(this.acceleration);
    this.position = this.position.add(this.velocity.multiplyByScalar(time));

    // Acceleration is accumulated each frame. As such, it is important it is
    // reset.
    this.acceleration.set(0, 0);
  }
}

/**
 * A collection of Boids.
 */
export class Flock {
  boids: Boid[] = [];

  static createRandomFlock(size: number, resolution: { x: number; y: number }) {
    const flock = new Flock();

    for (let i = 0; i < size; i++) {
      const x =
        (Math.random() * resolution.x * 2.0 - resolution.x) / resolution.y;
      const y =
        (Math.random() * resolution.y * 2.0 - resolution.y) / resolution.y;
      flock.addBoid(new Boid(x, y));
    }

    return flock;
  }

  addBoid(boid: Boid) {
    this.boids.push(boid);
  }

  update(time: number) {
    for (const boid of this.boids) {
      boid.update(time);
    }
  }

  /**
   * For use with WebGL.
   *
   * WebGL requires Vec2 arrays to be given as a flattened Float32Array. This does the
   * required conversion.
   * @param target array to copy positions into. Must be of size boids.length * 2.
   */
  toFlatPositionArray(target: Float32Array) {
    for (let i = 0; i < this.boids.length; i++) {
      target[2 * i] = this.boids[i].position.x;
      target[2 * i + 1] = this.boids[i].position.y;
    }
  }
}
