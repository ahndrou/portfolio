import { Vec2 } from "./maths";

// Controls how far off screen boids can travel before wrapping.
// The aim is to try to get them to pop in off-screen. Popping in
// close to another boid with my 'blob' shader makes the SDF shape
// visibly snap to a drastically different size.
const WRAP_BOUND_FACTOR = 1.125;

export class Boid {
  radius;
  position;
  velocity;
  acceleration;

  constructor(xPos: number, yPos: number) {
    this.radius = 0.1;
    this.position = new Vec2(xPos, yPos);
    this.velocity = new Vec2(
      (Math.random() - 0.5) * 2.0,
      (Math.random() - 0.5) * 2.0,
    ).normalize();
    this.acceleration = new Vec2(0, 0);
  }

  applyForce(force: Vec2) {
    // Mass is proportional to width.
    this.acceleration.x += force.x / this.radius;
    this.acceleration.y += force.y / this.radius;
  }

  update(timeDelta: number, resolution: [number, number]) {
    this.updatePosition(timeDelta, resolution);
  }

  updatePosition(timeDelta: number, resolution: [number, number]) {
    this.velocity = this.velocity.add(this.acceleration);
    this.position = this.position.add(
      this.velocity.multiplyByScalar(timeDelta),
    );

    const aspect = resolution[0] / resolution[1];
    // Wrap around once the boid is fully offscreen.
    const margin = 2 * this.radius;
    const xBound = (aspect + margin) * WRAP_BOUND_FACTOR;
    const yBound = (1 + margin) * WRAP_BOUND_FACTOR;

    if (this.position.x > xBound && this.velocity.x > 0) {
      this.position.x = -xBound;
    } else if (this.position.x < -xBound && this.velocity.x < 0) {
      this.position.x = xBound;
    }
    if (this.position.y > yBound && this.velocity.y > 0) {
      this.position.y = -yBound;
    } else if (this.position.y < -yBound && this.velocity.y < 0) {
      this.position.y = yBound;
    }

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

  update(time: number, resolution: [number, number]) {
    for (const boid of this.boids) {
      boid.update(time, resolution);
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
