import { Vec2 } from "./maths";

// Controls how far off screen boids can travel before wrapping.
// The aim is to try to get them to pop in off-screen. Popping in
// close to another boid with my 'blob' shader makes the SDF shape
// visibly snap to a drastically different size.
const WRAP_BOUND_FACTOR = 1.125;

// Controls the peak force applied.
const MAX_FORCE = 3;

// The distance over which the steering force falls to 1/e of STEERING_FORCE_MAX.
// Lower values keep the influence tight around the avoided position.
const STEERING_FORCE_DECAY_LENGTH = 0.15;

// Viscous drag. Deceleration is proportional to speed, so a boid sheds most of
// a cursor kick immediately and then eases into a long, slow glide. Also caps
// the top speed at roughly MAX_FORCE / DRAG_COEFFICIENT.
const DRAG_COEFFICIENT = 5.0;

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

  avoidPosition(pos: Vec2) {
    const displacement = this.position.sub(pos);
    // Boids close to the avoided position are pushed hardest, with the force
    // decaying exponentially as they get further away.
    const strength =
      MAX_FORCE * Math.exp(-displacement.magnitude() / FORCE_DECAY_LENGTH);
    const steeringAcceleration = displacement
      .normalize()
      .multiplyByScalar(strength);
    this.acceleration = this.acceleration.add(steeringAcceleration);
  }

  applyFriction() {
    const drag = this.velocity.multiplyByScalar(-DRAG_COEFFICIENT);
    this.acceleration = this.acceleration.add(drag);
  }

  updatePosition(timeDelta: number, resolution: [number, number]) {
    this.velocity = this.velocity.add(
      this.acceleration.multiplyByScalar(timeDelta),
    );

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

  avoidPosition(pos: Vec2) {
    for (const boid of this.boids) {
      boid.avoidPosition(pos);
    }
  }

  applyFriction() {
    for (const boid of this.boids) {
      boid.applyFriction();
    }
  }

  update(time: number, resolution: [number, number]) {
    for (const boid of this.boids) {
      boid.updatePosition(time, resolution);
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
