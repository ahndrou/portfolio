import { Vec2 } from "./maths";

// Controls the peak force applied.
const STEERING_FORCE_MAX = 2;

// The distance over which the steering force falls to 1/e of STEERING_FORCE_MAX.
// Lower values keep the influence tight around the avoided position.
const STEERING_FORCE_DECAY_LENGTH = 0.15;

// Coefficient of drag for use in F=Vk where V is velocity.
const DRAG_COEFFICIENT = 5.0;

// Coefficient of force used in returning a boid which has gone out of
// bounds.
const RETURN_COEFFICIENT = 3;

// Controls how far inside the boundary the return target sits. Given as a
// ratio of the boundary distance. Restoring force is applied until the boid reaches
// this point.
const RETURN_ANCHOR_BOUNDARY_RATIO = 0.75;

export class Boid {
  position;
  velocity;
  acceleration;

  constructor(xPos: number, yPos: number) {
    this.position = new Vec2(xPos, yPos);
    this.velocity = new Vec2(0, 0);
    this.acceleration = new Vec2(0, 0);
  }

  /**
   * Applies a steering force to the boid which steers away from the
   * given position.
   * @param pos Position to steer away from.
   */
  avoidPosition(pos: Vec2) {
    const displacement = this.position.sub(pos);
    const distance = displacement.magnitude();

    // Boids close to the avoided position are pushed hardest, with the force
    // decaying exponentially as they get further away.
    const steeringMagnitude =
      STEERING_FORCE_MAX * Math.exp(-distance / STEERING_FORCE_DECAY_LENGTH);
    const steeringAcceleration = displacement
      .normalize()
      .multiplyByScalar(steeringMagnitude);
    this.acceleration = this.acceleration.add(steeringAcceleration);
  }

  /**
   * Applies a drag force proportional to the current velocity of the boid.
   */
  applyFriction() {
    const drag = this.velocity.multiplyByScalar(-DRAG_COEFFICIENT);
    this.acceleration = this.acceleration.add(drag);
  }

  /**
   * Applies neceesary forces to ensure the boid is contained within the given boundaries.
   * @param xBound X-axis boundary to contain inside.
   * @param yBound Y-axis boundary to contain inside.
   */
  containWithinBounds(xBound: number, yBound: number) {
    const restoringForce = new Vec2(
      this.getRestoringForce("x", xBound),
      this.getRestoringForce("y", yBound),
    );
    this.acceleration = this.acceleration.add(restoringForce);
  }

  /**
   * Remaps the boid's position when the simulation's bounds change so the flock
   * stretches and squashes with the canvas rather than being squeezed in one
   * way by the containment force.
   * @param xScale Ratio of the new x-bound to the old one.
   * @param yScale Ratio of the new y-bound to the old one.
   */
  rescale(xScale: number, yScale: number) {
    this.position.set(this.position.x * xScale, this.position.y * yScale);
    // Velocity is remapped too so in-flight motion stays proportional to the
    // new space.
    this.velocity.set(this.velocity.x * xScale, this.velocity.y * yScale);
  }

  /**
   * Uses the current acceleration and velocity to update position.
   * @param timeDelta Time delta for use in integration of acceleration and velocity.
   */
  updatePosition(timeDelta: number) {
    this.velocity = this.velocity.add(
      this.acceleration.multiplyByScalar(timeDelta),
    );

    this.position = this.position.add(
      this.velocity.multiplyByScalar(timeDelta),
    );

    // Acceleration is accumulated each frame. As such, it is important it is
    // reset.
    this.acceleration.set(0, 0);
  }

  // Tracks whether the boid is returning from outside of a given bound.
  // Used to conditionally apply returning force.
  private returning = { x: false, y: false };

  /**
   * Applies a returning force when a boid's centre leaves the view and applies it until
     it reaches RETURN_ANCHOR_BOUNDARY_RATIO of the bound from the centre. Force is proportional to the
     distance from the return target.
   * @param axis Component of position to get the restoring force for.
   * @param bound Distance of the boundary on the given axis. 
   * @returns Restoring force.
   */
  private getRestoringForce(axis: "x" | "y", bound: number) {
    const boidCoordinate = this.position[axis];
    const anchorDistance = bound * RETURN_ANCHOR_BOUNDARY_RATIO;

    if (Math.abs(boidCoordinate) > bound) {
      this.returning[axis] = true;
    } else if (Math.abs(boidCoordinate) <= anchorDistance)
      this.returning[axis] = false;

    if (!this.returning[axis]) {
      return 0;
    } else {
      // Sign of the boid coordinate means we take the closest anchor coordinate -
      // positive or negative. Allows us to pass in just the bound magnitude.
      const anchorCoordinate = Math.sign(boidCoordinate) * anchorDistance;

      return RETURN_COEFFICIENT * (anchorCoordinate - boidCoordinate);
    }
  }
}

/**
 * A collection of Boids.
 */
export class Flock {
  boids: Boid[] = [];

  /**
   * Creates a flock spread uniformly across the simulation space.
   * @param size Number of boids to create.
   * @param xBound X-axis boundary of the simulation space.
   * @param yBound Y-axis boundary of the simulation space.
   */
  static createRandomFlock(size: number, xBound: number, yBound: number) {
    const flock = new Flock();

    for (let i = 0; i < size; i++) {
      const x = (Math.random() * 2.0 - 1.0) * xBound;
      const y = (Math.random() * 2.0 - 1.0) * yBound;
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

  containWithinBounds(xBound: number, yBound: number) {
    for (const boid of this.boids) {
      boid.containWithinBounds(xBound, yBound);
    }
  }

  rescale(xScale: number, yScale: number) {
    for (const boid of this.boids) {
      boid.rescale(xScale, yScale);
    }
  }

  update(time: number) {
    for (const boid of this.boids) {
      boid.updatePosition(time);
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
